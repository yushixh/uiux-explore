import { MetalFx } from 'metal-fx';
import { NativeContent, ReactSurface } from './react-surface';
import { mixColor, type ColorScope } from '../color-scope';

export type MetalVariant = 'button' | 'circle';
let nextTint = 0;
export class LiquidMetal extends ReactSurface {
  private strength = 1;
  private tintId = `daylight-metal-tint-${++nextTint}`;
  constructor(private options: { content: HTMLElement; colors?: ColorScope; variant?: MetalVariant }) {
    super(options.colors); this.element.classList.add('metal-surface');
    options.content.dataset.layout = 'element'; options.content.dataset.layoutLabel = '金属内容';
    this.element.style.setProperty('--metal-tint', `url(#${this.tintId})`);
    this.mount(() => {
      const c = this.appearance.colors;
      const stops = [mixColor(c.accent, '#121820', .6), c.accent, c.secondary, c.highlight, '#ffffff'];
      const channel = (offset: number) => stops.map(color => (parseInt(color.slice(offset, offset + 2), 16) / 255).toFixed(4)).join(' ');
      return <><svg className="effect-filter-defs" aria-hidden="true"><defs><filter id={this.tintId} colorInterpolationFilters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues={channel(1)}/><feFuncG type="table" tableValues={channel(3)}/><feFuncB type="table" tableValues={channel(5)}/></feComponentTransfer></filter></defs></svg><MetalFx variant={options.variant ?? 'button'} theme={this.appearance.mode} preset="silver" strength={this.strength} paused={this.frozen} ringCssPx={2} borderRadius={options.variant === 'circle' ? 100 : 24} normalizeHostStyles={false}>
        <NativeContent content={this.options.content} />
      </MetalFx></>;
    });
  }
  setStrength(strength: number): void { this.strength = strength; this.render(); }
}
