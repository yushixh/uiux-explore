import type { PreviewPanel } from './preview-panel';
import type { LayoutInspector } from './layout-inspector';
import { createWeatherDemo } from './weather-demo';
import { createInputDemo } from './input-demo';
import type { ColorScope } from '../components/color-scope';

export interface ComponentMetadata { id: string; name: string; keywords: string; english: string; group: 'base' | 'effects' }
export interface DemoContext { colors: ColorScope }
export interface ComponentDemo {
  panel: PreviewPanel;
  inspector: LayoutInspector;
  stop?: () => void;
  setActive?: (active: boolean) => void;
  setPaused?: (paused: boolean) => void;
  getCode?: () => string;
  onUpdate?: (callback: () => void) => void;
  destroy: () => void;
}
export interface CatalogEntry extends ComponentMetadata {
  create: (metadata: ComponentMetadata, context: DemoContext) => ComponentDemo | Promise<ComponentDemo>;
}

/** One registration supplies navigation, search and the preview heading. */
export const catalog: readonly CatalogEntry[] = [
  { id: 'orbs', name: '思考球', english: 'Thinking Orbs', group: 'effects', keywords: 'orb ai thinking loading 思考 加载 粒子', create: async (meta, context) => (await import('./effects-demo')).createOrbDemo(meta, context) },
  { id: 'beam', name: '边框光束', english: 'Border Beam', group: 'effects', keywords: 'beam border glow 边框 光束', create: async (meta, context) => (await import('./effects-demo')).createBeamDemo(meta, context) },
  { id: 'gooey', name: '液态交互', english: 'Gooey', group: 'effects', keywords: 'gooey liquid morph move 弹性 液态', create: async (meta, context) => (await import('./effects-demo')).createGooeyDemo(meta, context) },
  { id: 'metal', name: '液态金属', english: 'Metal', group: 'effects', keywords: 'metal chrome button 金属 光泽', create: async (meta, context) => (await import('./effects-demo')).createMetalDemo(meta, context) },
  { id: 'image', name: '图像显现', english: 'Image', group: 'effects', keywords: 'image pixels reveal generation 图像 图片 显现', create: async (meta, context) => (await import('./effects-demo')).createImageDemo(meta, context) },
  { id: 'weather', name: '天气', english: 'Weather', group: 'base', keywords: 'weather sunny sun moon day night 日夜 信息展示', create: createWeatherDemo },
  { id: 'input', name: '输入框', english: 'Text Field', group: 'base', keywords: 'input text field email form 表单 邮箱', create: createInputDemo },
];
