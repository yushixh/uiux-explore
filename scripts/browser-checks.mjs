// Headless run of tests/behavior.html plus page-level regression checks.
// Uses Playwright's bundled Chromium, or the installed Chrome when that download is absent.
import { createServer } from 'vite';
import { chromium } from 'playwright';

const failures = [];
const check = (ok, label) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}`);
  if (!ok) failures.push(label);
};

async function launch() {
  try {
    return await chromium.launch();
  } catch (bundled) {
    try {
      return await chromium.launch({ channel: 'chrome' });
    } catch {
      console.error('No browser available. Run `npx playwright install chromium` and try again.');
      throw bundled;
    }
  }
}

/** Runs in the page: visible text below 4.5:1 or 11px, outside component stages and archived previews. */
function auditText() {
  const pixel = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const parse = color => {
    pixel.clearRect(0, 0, 1, 1);
    pixel.fillStyle = color;
    pixel.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = pixel.getImageData(0, 0, 1, 1).data;
    return { rgb: [r, g, b], alpha: a / 255 };
  };
  const luminance = rgb => {
    const [r, g, b] = rgb.map(v => ((v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const backgroundOf = element => {
    for (let node = element; node; node = node.parentElement) {
      const color = parse(getComputedStyle(node).backgroundColor);
      if (color.alpha > 0.95) return color.rgb;
    }
    return [255, 255, 255];
  };
  const problems = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const text = walker.currentNode.textContent.trim();
    const element = walker.currentNode.parentElement;
    if (!text || !element) continue;
    if (element.closest('script,style,[hidden],.sr-only,.panel-stage,.archive-card-stage,:disabled'))
      continue;
    const box = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    if (!box.width || !box.height || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
    const [text1, text2] = [luminance(parse(style.color).rgb), luminance(backgroundOf(element))];
    const ratio = (Math.max(text1, text2) + 0.05) / (Math.min(text1, text2) + 0.05);
    const size = parseFloat(style.fontSize);
    if (ratio < 4.5 || size < 11) problems.push(`"${text.slice(0, 16)}" ${size}px ${ratio.toFixed(2)}:1`);
  }
  return [...new Set(problems)];
}
const overflow = () => document.documentElement.scrollWidth - document.documentElement.clientWidth;
const centred = selector => {
  const box = document.querySelector(selector).getBoundingClientRect();
  return Math.abs(box.left - (innerWidth - box.right)) < 2 && box.top > 0;
};

const server = await createServer({ server: { port: 5199, strictPort: false }, logLevel: 'error' });
await server.listen();
const base = server.resolvedUrls.local[0];
const browser = await launch();
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error)));
  page.on('console', message => message.type() === 'error' && errors.push(message.text()));

  await page.goto(`${base}tests/behavior.html`);
  await page.waitForFunction(() => document.querySelector('#results')?.dataset.result, null, {
    timeout: 90_000,
  });
  const behaviour = await page.locator('#results').innerText();
  console.log(behaviour.trim());
  check(/\d+ checks passed$/.test(behaviour.trim()), '组件集成检查全部通过');

  for (const mode of ['明亮', '深色']) {
    await page.goto(`${base}#weather`);
    await page.locator('#weather').waitFor();
    await page.click(`.global-mode button[aria-label="${mode}"]`);
    await page.waitForTimeout(500);
    check((await page.locator('h1').count()) === 1, `工作台只有一个 h1（${mode}）`);
    check((await page.title()).startsWith('天气 · '), `工作台标题标明当前组件（${mode}）`);
    const workbench = await page.evaluate(auditText);
    check(
      !workbench.length,
      `工作台文字对比度与字号（${mode}）${workbench.length ? '：' + workbench.join('；') : ''}`,
    );

    await page.click('.module-navigation a[href="#archive"]');
    await page.locator('.archive-card').first().waitFor();
    check((await page.locator('h1').count()) === 1, `资源库只有一个 h1（${mode}）`);
    const expected = mode === '深色' ? 'dark' : 'light';
    check(
      (await page.locator('.library-shell').getAttribute('data-theme')) === expected,
      `切换模块后保留明暗（${mode}）`,
    );
    const archive = await page.evaluate(auditText);
    check(
      !archive.length,
      `资源库文字对比度与字号（${mode}）${archive.length ? '：' + archive.join('；') : ''}`,
    );
  }

  await page.locator('.archive-card-actions button', { hasText: '源码' }).first().click();
  await page.locator('.archive-inspector[open] select').waitFor();
  check(await page.evaluate(centred, '.archive-inspector'), '资源内容弹窗居中');
  const firstFile = await page.locator('.archive-inspector select').inputValue();
  check(!/runtime|provenance/.test(firstFile), `源码默认打开作者文件（${firstFile}）`);
  await page.keyboard.press('Escape');
  await page.click('.coverage-open');
  check(await page.evaluate(centred, '.coverage-dialog'), '收录范围弹窗居中');
  await page.keyboard.press('Escape');

  for (const width of [390, 360]) {
    await page.setViewportSize({ width, height: 844 });
    for (const hash of ['#orbs', '#archive?section=resources']) {
      await page.evaluate(next => (location.hash = next), hash);
      await page
        .locator(hash === '#orbs' ? '#orbs' : '.archive-row')
        .first()
        .waitFor();
      check((await page.evaluate(overflow)) <= 0, `${width}px 无横向滚动（${hash}）`);
    }
    const mode = await page.locator('.global-mode').boundingBox();
    check(mode.width >= 52 && mode.x + mode.width <= width, `${width}px 顶栏明暗切换完整可见`);
  }
  // Archived third-party previews may log errors of their own; only this app's errors fail the run.
  const own = errors.filter(text => !text.includes('/archive/'));
  check(!own.length, `页面无脚本错误${own.length ? '：' + own.join('；') : ''}`);
} finally {
  await browser.close();
  await server.close();
}
if (failures.length) {
  console.error(`\n${failures.length} check(s) failed`);
  process.exit(1);
}
console.log('\nAll browser checks passed');
