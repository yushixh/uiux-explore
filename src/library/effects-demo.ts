import type { OrbState, OrbSize } from '../components/effects/thinking-orb';
import type { BeamVariant } from '../components/effects/border-beam';
import type { GooeyVariant } from '../components/effects/gooey';
import type { ImagePreset } from '../components/effects/image-generation';
import { TextField } from '../components/text-field/text-field';
import { createElement, query } from '../lib/dom';
import { PreviewPanel } from './preview-panel';
import { LayoutInspector } from './layout-inspector';
import type { ComponentMetadata, DemoContext, ComponentDemo } from './catalog';
import './effects-demo.css';
import '../components/effects/effects.css';

interface Animated { setPaused(value: boolean): void; setActive(value: boolean): void; destroy(): void }

function setup(metadata: ComponentMetadata, context: DemoContext) {
  const effects: Animated[] = [];
  const cleanups: (() => void)[] = [];
  const abort = new AbortController();
  let reset = () => {};
  let code = () => '';
  let onUpdate = () => {};
  const panel = new PreviewPanel({ id: metadata.id, name: metadata.name, parentColors: context.colors, code: '', onReset: () => { reset(); onUpdate(); }, onViewChange: view => effects.forEach(effect => effect.setActive(view === 'preview')) });
  const stage = createElement<HTMLDivElement>('<div class="effect-demo-stage" data-layout="container" data-layout-label="效果预览容器"></div>');
  panel.stage.append(stage);
  function select<T extends string>(label: string, options: readonly (readonly [T, string])[], initial: T, change: (value: T) => void) {
    const control = createElement<HTMLLabelElement>('<label class="demo-select"><span></span><select></select></label>');
    query(control, 'span').textContent = label;
    const input = query<HTMLSelectElement>(control, 'select');
    input.setAttribute('aria-label', `${metadata.name}${label}`);
    options.forEach(([value, text]) => input.add(new Option(text, value)));
    input.value = initial;
    input.addEventListener('change', () => { change(input.value as T); onUpdate(); }, { signal: abort.signal });
    panel.controls.append(control);
    return input;
  }
  function action(label: string, run: () => void) {
    const button = createElement<HTMLButtonElement>('<button type="button" class="demo-action"></button>');
    button.textContent = label;
    button.addEventListener('click', run, { signal: abort.signal }); panel.controls.append(button); return button;
  }
  function finish(resetAction: () => void, getCode: () => string): ComponentDemo {
    reset = resetAction; code = getCode;
    const inspector = new LayoutInspector(stage);
    panel.setCode(code());
    return { panel, inspector, setActive: active => effects.forEach(effect => effect.setActive(active && panel.currentView === 'preview')), setPaused: paused => effects.forEach(effect => effect.setPaused(paused)), stop: () => effects.forEach(effect => effect.setActive(false)), getCode: () => code(), onUpdate: callback => { onUpdate = callback; }, destroy: () => { abort.abort(); effects.forEach(effect => effect.destroy()); cleanups.forEach(cleanup => cleanup()); inspector.destroy(); panel.destroy(); } };
  }
  return { panel, stage, effects, cleanups, select, action, finish };
}

const states: readonly (readonly [OrbState, string])[] = [['working', '处理中'], ['searching', '搜索中'], ['solving', '求解中'], ['listening', '聆听中'], ['connecting', '连接中'], ['weaving', '编织中'], ['composing', '生成中'], ['breathing', '思考中'], ['shaping', '塑形中']];

export async function createOrbDemo(metadata: ComponentMetadata, context: DemoContext) {
  const { ThinkingOrb } = await import('../components/effects/thinking-orb');
  const demo = setup(metadata, context);
  let state: OrbState = 'searching'; let size: OrbSize = 64; let speed = 1;
  const large = new ThinkingOrb({ state, size, colors: demo.panel.colors });
  const inline = new ThinkingOrb({ state, size: 20, colors: demo.panel.colors });
  demo.effects.push(large, inline);
  demo.stage.innerHTML = '<div class="orb-presentation" data-layout="region" data-layout-label="独立状态"><div class="orb-main-mount"></div><p class="orb-label" role="status">搜索中</p></div><div class="orb-inline-example" data-layout="region" data-layout-label="行内状态"><div class="orb-inline-mount"></div><span data-layout="element" data-layout-label="状态文字">正在搜索参考资料</span></div>';
  query(demo.stage, '.orb-main-mount').append(large.element);
  query(demo.stage, '.orb-inline-mount').append(inline.element);
  demo.stage.classList.add('orb-stage');
  const stateSelect = demo.select('状态', states, state, value => { state = value; large.setState(value); inline.setState(value); query(demo.stage, '.orb-label').textContent = states.find(x => x[0] === value)![1]; query(demo.stage, '.orb-inline-example span').textContent = states.find(x => x[0] === value)![1]; });
  const sizeSelect = demo.select('尺寸', [['64', '64 px'], ['20', '20 px']], '64', value => { size = Number(value) as OrbSize; large.setSize(size); });
  const speedSelect = demo.select('速度', [['0.5', '0.5×'], ['1', '1×'], ['1.5', '1.5×']], '1', value => { speed = Number(value); large.setSpeed(speed); inline.setSpeed(speed); });
  return demo.finish(() => { state = 'searching'; size = 64; speed = 1; stateSelect.value = state; sizeSelect.value = '64'; speedSelect.value = '1'; for (const orb of [large, inline]) { orb.setState(state); orb.setSpeed(speed); orb.reset(); } large.setSize(size); query(demo.stage, '.orb-label').textContent = '搜索中'; query(demo.stage, '.orb-inline-example span').textContent = '正在搜索参考资料'; }, () => `import { ThinkingOrb } from './src/components/effects';\n\nconst orb = new ThinkingOrb({\n  colors, state: '${state}', size: ${size}, speed: ${speed},\n});\nmount.append(orb.element);\n\n// 卸载时调用 orb.destroy();`);
}

export async function createBeamDemo(metadata: ComponentMetadata, context: DemoContext) {
  const { BorderBeam } = await import('../components/effects/border-beam');
  const demo = setup(metadata, context);
  let variant: BeamVariant = 'md'; let speed = 1;
  const content = createElement<HTMLDivElement>('<div class="beam-demo-card" data-layout="region" data-layout-label="内容卡片"><span class="sample-eyebrow">项目备忘</span><h3>让想法慢慢成形。</h3><p>收集灵感，整理下一步。</p><div class="beam-card-bottom"><span>3 条笔记</span><span aria-hidden="true">↗</span></div></div>');
  const beam = new BorderBeam({ content, colors: demo.panel.colors, radius: 20 });
  demo.effects.push(beam); demo.stage.append(beam.element);
  const variantSelect = demo.select('形态', [['md', '环绕'], ['sm', '紧凑'], ['line', '底部'], ['pulse-inner', '内呼吸'], ['pulse-outside', '外呼吸']], variant, value => { variant = value; beam.setVariant(value); });
  const speedSelect = demo.select('速度', [['0.5', '0.5×'], ['1', '1×'], ['1.5', '1.5×']], '1', value => { speed = Number(value); beam.setSpeed(speed); });
  return demo.finish(() => { variant = 'md'; speed = 1; variantSelect.value = variant; speedSelect.value = '1'; beam.setVariant(variant); beam.setSpeed(speed); }, () => `import { BorderBeam } from './src/components/effects';\n\nconst content = document.createElement('article');\ncontent.textContent = '项目备忘';\ncontent.style.cssText = 'padding:48px;border-radius:20px;background:var(--ui-raised)';\nconst beam = new BorderBeam({ content, colors, variant: '${variant}' });\nbeam.setSpeed(${speed});\nmount.append(beam.element);\n\n// 卸载时调用 beam.destroy();`);
}

export async function createGooeyDemo(metadata: ComponentMetadata, context: DemoContext) {
  const { Gooey } = await import('../components/effects/gooey');
  const demo = setup(metadata, context); let variant: GooeyVariant = 'morph';
  const status = createElement<HTMLParagraphElement>('<p class="effect-feedback" role="status"></p>');
  const gooey = new Gooey({ colors: demo.panel.colors, onSelect: value => { status.textContent = value; } });
  demo.effects.push(gooey); demo.stage.append(gooey.element, status); demo.stage.classList.add('gooey-stage');
  const select = demo.select('交互', [['morph', '展开菜单'], ['move', '滑动选择']], variant, value => { variant = value; gooey.setVariant(value); status.textContent = ''; });
  return demo.finish(() => { variant = 'morph'; select.value = variant; gooey.setVariant(variant); gooey.reset(); status.textContent = ''; }, () => `import { Gooey } from './src/components/effects';\n\nconst gooey = new Gooey({ colors, onSelect: console.log });\ngooey.setVariant('${variant}');\nmount.append(gooey.element);\n\n// 卸载时调用 gooey.destroy();`);
}

export async function createMetalDemo(metadata: ComponentMetadata, context: DemoContext) {
  const { LiquidMetal } = await import('../components/effects/metal');
  const demo = setup(metadata, context); let strength = 1;
  const composer = createElement<HTMLDivElement>('<div class="metal-composer" data-layout="region" data-layout-label="组合输入区"><div class="metal-field"></div><div class="metal-composer-actions"><span>设计一个新的开始</span><div class="metal-button-mount"></div></div></div>');
  const field = new TextField({ id: 'metal-prompt', name: 'prompt', label: '你的想法', placeholder: '写下想探索的方向…', clearable: true });
  query(composer, '.metal-field').append(field.element); demo.cleanups.push(() => field.destroy());
  const button = createElement<HTMLButtonElement>('<button type="button" class="metal-demo-button">记录想法 <span aria-hidden="true">↗</span></button>');
  const metal = new LiquidMetal({ content: button, colors: demo.panel.colors });
  const feedback = createElement<HTMLParagraphElement>('<p class="effect-feedback" role="status"></p>');
  button.addEventListener('click', () => { feedback.textContent = field.value.trim() ? '想法已记录在本次预览中' : '请先写下一点想法'; });
  demo.effects.push(metal); query(composer, '.metal-button-mount').append(metal.element); demo.stage.append(composer, feedback); demo.stage.classList.add('metal-stage');
  const intensity = demo.select('光泽', [['0.5', '柔和'], ['1', '标准']], '1', value => { strength = Number(value); metal.setStrength(strength); });
  return demo.finish(() => { strength = 1; intensity.value = '1'; metal.setStrength(1); field.setValue(''); feedback.textContent = ''; }, () => `import { LiquidMetal } from './src/components/effects';\n\nconst button = document.createElement('button');\nbutton.type = 'button';\nbutton.textContent = '记录想法';\nbutton.style.cssText = 'padding:14px 24px;border-radius:24px';\nconst metal = new LiquidMetal({ content: button, colors });\nmetal.setStrength(${strength});\nmount.append(metal.element);\n\n// 卸载时调用 metal.destroy();`);
}

export async function createImageDemo(metadata: ComponentMetadata, context: DemoContext) {
  const { ImageGeneration } = await import('../components/effects/image-generation');
  const demo = setup(metadata, context); let preset: ImagePreset = 'pixels-organic'; let phase = 'idle'; let paused = false;
  const status = createElement<HTMLParagraphElement>('<p class="image-phase" role="status">等待显现</p>');
  const image = new ImageGeneration({ colors: demo.panel.colors, src: '/sample-landscape.svg', onPhase: value => {
    phase = value; status.textContent = ({ idle: '等待显现', reveal: '图像显现中', visible: '图像已显现', hide: '回到粒子', regenerate: '重新显现中' } as Record<string, string>)[value] ?? '处理中';
    regenerate.disabled = paused || phase !== 'visible';
  } });
  demo.effects.push(image); demo.stage.append(image.element, status); demo.stage.classList.add('image-stage');
  const style = demo.select('效果', [['pixels-organic', '流动像素'], ['pixels-mechanic', '机械像素'], ['sweep-gradient', '渐变扫光']], preset, value => { preset = value; image.setPreset(value); });
  const reveal = demo.action('显现图像', () => image.reveal());
  const regenerate = demo.action('重新显现', () => image.regenerate()); regenerate.disabled = true;
  const hide = demo.action('收起', () => image.hide());
  const result = demo.finish(() => { preset = 'pixels-organic'; style.value = preset; image.hide(); image.setPreset(preset); }, () => `import { ImageGeneration } from './src/components/effects';\n\nconst image = new ImageGeneration({\n  colors, src: '/sample-landscape.svg',\n});\nimage.setPreset('${preset}');\nmount.append(image.element);\n// 在按钮点击或图片就绪时调用 image.reveal();\n// 这是图像展示动效，不调用图像生成服务。\n\n// 卸载时调用 image.destroy();`);
  return { ...result, setPaused: (value: boolean) => { paused = value; image.setPaused(paused); reveal.disabled = paused; hide.disabled = paused; regenerate.disabled = paused || phase !== 'visible'; } };
}
