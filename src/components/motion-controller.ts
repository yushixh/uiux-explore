/** Tracks visibility, user pause and reduced motion separately. Animation time never jumps. */
export class MotionController {
  private abort = new AbortController();
  private observer: IntersectionObserver;
  private reduced = matchMedia('(prefers-reduced-motion: reduce)');
  private visible = false;
  private paused = false;
  private active = true;
  private frame = 0;
  private elapsed = 0;
  private last = 0;
  private running = false;
  private speed = 1;
  private destroyed = false;
  constructor(private element: HTMLElement, private draw?: (seconds: number) => void, private onChange?: (paused: boolean) => void) {
    this.observer = new IntersectionObserver(([entry]) => { this.visible = entry?.isIntersecting ?? false; this.sync(); });
    this.observer.observe(element);
    document.addEventListener('visibilitychange', () => this.sync(), { signal: this.abort.signal });
    this.reduced.addEventListener('change', () => this.sync(), { signal: this.abort.signal });
    this.sync();
  }
  get isReduced(): boolean { return this.reduced.matches; }
  setPaused(value: boolean): void { this.paused = value; this.sync(); }
  setActive(value: boolean): void { this.active = value; this.sync(); }
  setSpeed(value: number): void { this.speed = Math.max(.1, Math.min(3, value)); }
  repaint(): void { this.draw?.(this.reduced.matches ? .6 : this.elapsed); }
  reset(): void { this.elapsed = 0; this.last = 0; this.repaint(); }
  private sync(): void {
    if (this.destroyed) return;
    const running = this.visible && this.active && !this.paused && !this.reduced.matches && !document.hidden;
    const changed = running !== this.running;
    this.running = running;
    this.element.dataset.motion = running ? 'running' : 'paused';
    this.element.dataset.reducedMotion = String(this.reduced.matches);
    cancelAnimationFrame(this.frame); this.last = 0;
    this.repaint();
    if (changed || !running) this.onChange?.(!running);
    if (running && this.draw) this.frame = requestAnimationFrame(this.tick);
  }
  private tick = (now: number): void => {
    if (!this.running) return;
    if (this.last) this.elapsed += Math.min(64, now - this.last) / 1000 * this.speed;
    this.last = now; this.draw?.(this.elapsed);
    this.frame = requestAnimationFrame(this.tick);
  };
  destroy(): void { this.destroyed = true; this.running = false; this.element.dataset.motion = 'paused'; cancelAnimationFrame(this.frame); this.observer.disconnect(); this.abort.abort(); }
}
