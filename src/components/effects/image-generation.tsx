import { createRef } from 'react';
import { ImageGeneration as UpstreamImage, type ImageGenerationHandle, type ImageGenerationPreset } from 'img-fx';
import { ReactSurface } from './react-surface';
import type { ColorScope } from '../color-scope';

export type ImagePreset = ImageGenerationPreset;
export class ImageGeneration extends ReactSurface {
  private preset: ImagePreset = 'pixels-organic';
  private ref = createRef<ImageGenerationHandle>();
  private staticVisible = false;
  private supported = true;
  private regenerationTimer = 0;
  private regenerationRemaining = 0;
  private regenerationStarted = 0;
  constructor(private options: { colors?: ColorScope; src: string; onPhase?: (phase: string) => void }) {
    super(options.colors); this.element.classList.add('image-surface');
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2'); this.supported = Boolean(gl);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    this.mount(() => {
      const c = this.appearance.colors;
      if (this.reduced || !this.supported) return <div className="image-effect-card static-image-preview" aria-label="图像显现静态预览"><img src={options.src} alt="湖泊与群山" hidden={!this.staticVisible}/></div>;
      return <UpstreamImage ref={this.ref} preset={this.preset} theme={this.appearance.mode} paused={this.frozen} pixelScale={1.2} cardBg={c.surface} colors={[c.accent, c.secondary, c.highlight, c.raised, c.accent, c.secondary, c.highlight]} images={[options.src]} autoReveal={false} revealInitialDelay={0} onCycle={event => { this.staticVisible = event.phase === 'visible' || event.phase === 'reveal'; options.onPhase?.(event.phase); }}>
        <div className="image-effect-card" aria-label="图像显现预览" data-layout="element" data-layout-label="图像画布区域" />
      </UpstreamImage>;
    });
  }
  setPreset(preset: ImagePreset): void { this.preset = preset; this.render(); }
  reveal(): void { this.clearRegeneration(); if (this.reduced || !this.supported) { this.staticVisible = true; this.render(); this.options.onPhase?.('visible'); } else this.ref.current?.triggerReveal({ hold: 'manual' }); }
  hide(): void {
    const regenerating = this.regenerationRemaining > 0;
    this.clearRegeneration();
    if (this.reduced || !this.supported) { this.staticVisible = false; this.render(); this.options.onPhase?.('idle'); }
    else { this.ref.current?.triggerHide(); if (regenerating) this.options.onPhase?.('idle'); }
  }
  regenerate(): void {
    if (this.reduced || !this.supported) { this.reveal(); return; }
    if (this.frozen || !this.ref.current?.isImageActive()) return;
    this.clearRegeneration();
    this.regenerationRemaining = 1600;
    // The upstream auto-reveal timeout is discarded on pause. Own the delay so
    // tab switches, offscreen previews and manual pause preserve remaining time.
    this.ref.current.triggerRegenerate({ autoReveal: false, tintFromImage: false });
    this.options.onPhase?.('regenerate');
    this.scheduleRegeneration();
  }
  protected onMotionChange(): void {
    if (!(this.regenerationRemaining > 0)) return;
    if (this.reduced) this.reveal();
    else if (this.frozen) this.clearRegeneration(false);
    else this.scheduleRegeneration();
  }
  private scheduleRegeneration(): void {
    if (this.frozen || this.regenerationTimer || !this.regenerationRemaining) return;
    this.regenerationStarted = performance.now();
    this.regenerationTimer = window.setTimeout(() => {
      this.regenerationTimer = 0; this.regenerationRemaining = 0;
      this.ref.current?.triggerReveal({ hold: 'manual' });
    }, this.regenerationRemaining);
  }
  private clearRegeneration(reset = true): void {
    if (this.regenerationTimer) {
      clearTimeout(this.regenerationTimer);
      this.regenerationRemaining = Math.max(1, this.regenerationRemaining - (performance.now() - this.regenerationStarted));
      this.regenerationTimer = 0;
    }
    if (reset) this.regenerationRemaining = 0;
  }
  destroy(): void { this.clearRegeneration(); super.destroy(); }
}
