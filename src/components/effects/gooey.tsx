import { Liquid } from 'liquid-gooey';
import { ReactSurface } from './react-surface';
import { mixColor, type ColorScope } from '../color-scope';

function luminance(hex: string): number {
  const channels = [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255)
    .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return channels[0]! * .2126 + channels[1]! * .7152 + channels[2]! * .0722;
}
function readableFill(fill: string, foreground: string): string {
  const text = luminance(foreground);
  const contrast = (color: string) => { const background = luminance(color); return (Math.max(text, background) + .05) / (Math.min(text, background) + .05); };
  const edge = contrast('#000000') > contrast('#ffffff') ? '#000000' : '#ffffff';
  for (let step = 0; step <= 20; step++) { const candidate = mixColor(fill, edge, step / 20); if (contrast(candidate) >= 4.5) return candidate; }
  return edge;
}

export type GooeyVariant = 'morph' | 'move';
export class Gooey extends ReactSurface {
  private open = false;
  private selected = 0;
  private variant: GooeyVariant = 'morph';
  constructor(options: { colors?: ColorScope; onSelect?: (value: string) => void } = {}) {
    super(options.colors); this.element.classList.add('gooey-surface');
    this.mount(() => this.variant === 'morph' ? <Liquid fill={this.fill} blur={8} contrast={20} filterPadding={120} className="gooey-menu" shadow="0 8px 18px rgba(0,0,0,.1)">
      {[-1, 1].map((side, i) => <Liquid.Item key={side} x={this.open ? side * 76 : 0} transition={this.reduced || this.frozen ? { duration: 0 } : 'bouncy'}>
        <button type="button" className="gooey-dot" aria-label={i === 0 ? '选择图片' : '选择链接'} tabIndex={this.open ? 0 : -1} aria-hidden={!this.open} style={{ pointerEvents: this.open ? 'auto' : 'none', opacity: this.open ? 1 : 0, color: this.appearance.colors.onAccent }} onClick={() => options.onSelect?.(i === 0 ? '已选择图片' : '已选择链接')}>{i === 0 ? '▧' : '↗'}</button>
      </Liquid.Item>)}
      <Liquid.Item x={0} transition={this.reduced || this.frozen ? { duration: 0 } : 'bouncy'}>
        <button type="button" className="gooey-dot gooey-trigger" aria-label={this.open ? '收起菜单' : '展开菜单'} aria-expanded={this.open} style={{ color: this.appearance.colors.onAccent }} onClick={() => this.setOpen(!this.open)}>{this.open ? '−' : '+'}</button>
      </Liquid.Item>
    </Liquid> : <div className="gooey-tabs" role="group" aria-label="查看周期">
      <Liquid fill={this.fill} blur={7} className="gooey-tab-liquid">
        {/* Published move mode observes the child's rendered position; it ignores x/y.
            Keep the observed path when paused so it never remounts at the origin. */}
        <Liquid.Item effect={this.reduced || this.frozen ? 'morph' : 'move'} observe>
          <span className="gooey-tab-indicator" style={{ transform: `translateX(${this.selected * 100}%)`, transitionDuration: this.reduced || this.frozen ? '0ms' : undefined }} />
        </Liquid.Item>
      </Liquid>
      {['日', '周', '月'].map((label, index) => <button key={label} type="button" aria-pressed={this.selected === index} style={{ color: this.selected === index ? this.appearance.colors.onAccent : this.appearance.colors.muted }} onClick={() => { this.selected = index; this.render(); options.onSelect?.(`已选择按${label}查看`); }}>{label}</button>)}
    </div>);
  }
  private get fill(): string { const c = this.appearance.colors; return readableFill(mixColor(c.accent, c.secondary, .2), c.onAccent); }
  setOpen(open: boolean): void { this.open = open; this.render(); }
  setVariant(variant: GooeyVariant): void { this.variant = variant; this.render(); }
  reset(): void { this.open = false; this.selected = 0; this.render(); }
}
