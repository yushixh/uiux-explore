import { BorderBeam as UpstreamBeam, type BorderBeamSize, type BorderBeamColorVariant } from 'border-beam';
import { NativeContent, ReactSurface } from './react-surface';
import type { ColorScope, PaletteName } from '../color-scope';

export type BeamVariant = BorderBeamSize;
export class BorderBeam extends ReactSurface {
  private variant: BeamVariant;
  private speed = 1;
  constructor(private options: { content: HTMLElement; colors?: ColorScope; variant?: BeamVariant; radius?: number }) {
    super(options.colors); this.variant = options.variant ?? 'md';
    this.element.classList.add('beam-surface');
    this.mount(() => {
      const variants: Record<PaletteName, BorderBeamColorVariant> = { daylight: 'sunset', ocean: 'ocean', forest: 'ocean', iris: 'ocean', graphite: 'mono' };
      // Palette controls paint only. Keep the upstream geometry, masks and timing.
      const gradient = `radial-gradient(ellipse at 20% 10%, ${this.appearance.colors.accent}, transparent 65%), radial-gradient(ellipse at 80% 90%, ${this.appearance.colors.secondary}, transparent 65%), radial-gradient(ellipse at 60% 40%, ${this.appearance.colors.highlight}, transparent 75%)`;
      this.element.style.setProperty('--beam-palette', gradient);
      return <UpstreamBeam size={this.variant} theme={this.appearance.mode} colorVariant={variants[this.appearance.name]} duration={3.6 / this.speed} borderRadius={this.options.radius ?? 20} staticColors>
        <NativeContent content={this.options.content} />
      </UpstreamBeam>;
    });
  }
  setVariant(variant: BeamVariant): void { this.variant = variant; this.render(); }
  setSpeed(speed: number): void { this.speed = speed; this.render(); }
}
