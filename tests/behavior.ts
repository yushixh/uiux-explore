import '../src/styles/tokens.css';
import { ColorScope, composePalette, TextField, WeatherCard } from '../src/components';
import { ThinkingOrb, ImageGeneration, Gooey } from '../src/components/effects';

const results = document.querySelector<HTMLPreElement>('#results')!;
const fixture = document.querySelector<HTMLElement>('#fixture')!;
const messages: string[] = [];
const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const assert = (value: boolean, label: string) => { if (!value) throw new Error(label); messages.push(`PASS ${label}`); results.textContent = messages.join('\n'); };

const originalMedia = window.matchMedia.bind(window);
const reduced = Object.assign(new EventTarget(), { matches: false, media: '(prefers-reduced-motion: reduce)' });
window.matchMedia = query => query === reduced.media ? reduced as MediaQueryList : originalMedia(query);

try {
  const root = new ColorScope(fixture, { palette: 'ocean' });
  const a = document.createElement('div'); const b = document.createElement('div'); fixture.append(a, b);
  const inherit = new ColorScope(a, { parent: root });
  const override = new ColorScope(b, { parent: root, palette: composePalette('forest', { secondary: '#b396d0' }) });
  root.setPalette('iris');
  assert(inherit.appearance.name === 'iris' && override.appearance.name === 'forest', '全局继承与局部覆盖相互独立');
  assert(override.appearance.colors.secondary === '#b396d0', '辅色组合保留');
  root.setMode('dark');
  assert(override.appearance.mode === 'dark', '局部配色仍继承明暗');
  override.setMode('light'); root.setMode('light'); root.setMode('dark');
  assert(override.appearance.mode === 'light', '局部明暗可独立覆盖');
  override.setPalette(); assert(override.appearance.name === 'iris', '清除覆盖后重新继承');
  const form = document.createElement('form'); b.append(form);
  const field = new TextField({ id: 'qa-email', name: 'email', label: '邮箱', type: 'email', required: true, value: 'qa@example.com' }); form.append(field.element);
  field.setSize('compact');
  assert(new FormData(form).get('email') === 'qa@example.com' && field.input.checkValidity(), '输入保留原生表单行为');
  field.setStatus('error', '请输入有效邮箱');
  root.setPalette('graphite');
  assert(field.input.getAttribute('aria-invalid') === 'true' && field.element.dataset.state === 'error', '换配色不清除业务状态');

  const weather = new WeatherCard({ data: { city: '上海', high: 33, low: 26, periods: { day: { temperature: 31, condition: '晴', localTime: '14:00' }, night: { temperature: 26, condition: '晴', localTime: '21:00' } } } });
  weather.element.style.width = '220px'; a.append(weather.element); weather.setMode('night'); root.setPalette('ocean');
  assert(weather.mode === 'night', '天气日夜与配色独立');
  const orb = new ThinkingOrb({ state: 'searching', colors: inherit }); a.prepend(orb.element);
  await pause(200); orb.setPaused(true);
  const still = orb.element.toDataURL(); await pause(160);
  assert(orb.element.toDataURL() === still && orb.element.dataset.motion === 'paused', 'Orb 暂停保持当前帧');
  orb.setPaused(false); await pause(200);
  assert(orb.element.toDataURL() !== still, 'Orb 恢复后继续绘制');

  const gooey = new Gooey({ colors: inherit }); gooey.setVariant('move'); a.prepend(gooey.element);
  let expectedPeriod = 0;
  const choosePeriod = (index: number) => { expectedPeriod = index; gooey.element.querySelectorAll<HTMLButtonElement>('.gooey-tabs > button')[index]!.click(); };
  const aligned = () => {
    const selected = gooey.element.querySelector('[aria-pressed="true"]')!;
    if (selected.textContent !== ['日', '周', '月'][expectedPeriod]) return false;
    const button = selected.getBoundingClientRect();
    const target = gooey.element.querySelector('.gooey-tab-indicator')!.getBoundingClientRect();
    const liquid = gooey.element.querySelector('[data-gooey-svg] g rect')!.getBoundingClientRect();
    return [target, liquid].every(rect => Math.abs(rect.x + rect.width / 2 - button.x - button.width / 2) < 1.5 && Math.abs(rect.width - button.width) < 1.5);
  };
  const settles = async () => {
    const deadline = performance.now() + 3000; let stable = 0;
    while (performance.now() < deadline) { await pause(40); stable = aligned() ? stable + 1 : 0; if (stable === 3) return true; }
    return false;
  };
  root.setMode('light'); root.setPalette('daylight'); await pause(160);
  const relativeLuminance = (rgb: string) => {
    const [r, g, b] = rgb.match(/[\d.]+/g)!.slice(0, 3).map(Number).map(value => { value /= 255; return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4; });
    return r! * .2126 + g! * .7152 + b! * .0722;
  };
  const textLuminance = relativeLuminance(getComputedStyle(gooey.element.querySelector('[aria-pressed="true"]')!).color);
  const fillLuminance = relativeLuminance(getComputedStyle(gooey.element.querySelector('[data-gooey-svg] g')!).fill);
  assert((Math.max(textLuminance, fillLuminance) + .05) / (Math.min(textLuminance, fillLuminance) + .05) >= 4.5, 'Gooey 浅色配色的选中文字对比度足够');
  choosePeriod(2);
  assert(await settles(), 'Gooey 月选项与真实指示器、液态色块对齐');
  for (const index of [0, 2, 0, 1]) { choosePeriod(index); await pause(35); }
  assert(await settles(), 'Gooey 快速连点后收敛到最后选项');
  gooey.setPaused(true); await pause(100); choosePeriod(2); await pause(100);
  assert(aligned(), 'Gooey 暂停时仍可立即切换选择');
  gooey.setPaused(false); await pause(200); assert(aligned(), 'Gooey 恢复播放不回到首项');
  root.setPalette('iris'); await pause(200); assert(aligned(), 'Gooey 换配色保留指示器位置');
  a.style.width = '180px';
  assert(await settles() && gooey.element.getBoundingClientRect().width <= 180, 'Gooey 窄容器等分且不溢出');
  gooey.setVariant('morph'); await pause(80); gooey.setVariant('move'); await pause(200);
  assert(aligned(), 'Gooey 切换交互类型后保留选项位置');
  gooey.reset(); expectedPeriod = 0; assert(await settles(), 'Gooey 重置后首项与色块对齐');
  reduced.matches = true; reduced.dispatchEvent(new Event('change')); await pause(80);
  choosePeriod(2); await pause(100); assert(aligned(), 'Gooey 低动态模式立即定位且不丢失色块');
  const reducedFrame = orb.element.toDataURL(); await pause(100);
  assert(orb.element.dataset.motion === 'paused' && orb.element.toDataURL() === reducedFrame, '减少动态效果使用稳定静态帧');
  assert(weather.element.dataset.motion === 'paused', '天气跟随同一低动态控制');
  const image = new ImageGeneration({ colors: override, src: '/sample-landscape.svg' }); b.append(image.element);
  image.reveal(); await pause(120);
  assert(Boolean(image.element.querySelector('img:not([hidden])')), '减少动态效果时图像仍可直接显现');
  image.hide(); await pause(80);
  assert(Boolean(image.element.querySelector('img[hidden]')), '减少动态效果时图像仍可收起');
  image.destroy(); gooey.destroy(); orb.destroy(); weather.destroy(); field.destroy(); inherit.destroy(); override.destroy(); root.destroy();
  assert(fixture.style.getPropertyValue('--ui-accent') === '', '销毁颜色作用域恢复原始样式');
  results.dataset.result = 'passed'; results.textContent = `${messages.join('\n')}\n\n${messages.length} checks passed`;
} catch (error) {
  results.dataset.result = 'failed'; results.textContent = `${messages.join('\n')}\nFAIL ${String(error)}`; console.error(error);
} finally { window.matchMedia = originalMedia; }
