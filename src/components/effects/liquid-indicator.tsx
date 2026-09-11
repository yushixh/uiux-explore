import { Liquid } from 'liquid-gooey';
import { ReactSurface } from './react-surface';

/** Reuses the Gooey demo's moving silhouette; the native controls stay unfiltered. */
export class LiquidIndicator extends ReactSurface {
  constructor(private selected: number) {
    super();
    this.element.classList.add('segment-liquid');
    this.element.setAttribute('aria-hidden', 'true');
    this.mount(() => (
      <Liquid className="segment-liquid-layer" fill="var(--segment-fill, #515963)" blur={3} contrast={20} filterPadding={8}>
        <Liquid.Item effect={this.reduced || this.frozen ? 'morph' : 'move'} observe
          move={{ springiness: .6, wobble: .4, stretch: .4, trail: .45 }}>
          <span className="segment-liquid-target" style={{
            transform: `translateX(${this.selected * 100}%)`,
            transitionDuration: this.reduced || this.frozen ? '0ms' : undefined,
          }} />
        </Liquid.Item>
      </Liquid>
    ));
  }

  setValue(selected: number): void {
    if (selected === this.selected) return;
    this.selected = selected;
    this.render();
  }
}
