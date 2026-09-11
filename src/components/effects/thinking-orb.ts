import { MODE_FRAMES, resolvePreset, type OrbState } from 'thinking-orbs/engine';
import { MotionController } from '../motion-controller';
import { resolveAppearance, type Appearance, type ColorScope } from '../color-scope';

export type { OrbState } from 'thinking-orbs/engine';
export type OrbSize = 20 | 64;
export interface ThinkingOrbOptions { state?: OrbState; size?: OrbSize; colors?: ColorScope; paused?: boolean; speed?: number }

/** Uses the official geometry and painter with a local, resumable animation clock. */
export class ThinkingOrb {
  readonly element = document.createElement('canvas');
  private motion: MotionController;
  private state: OrbState;
  private size: OrbSize;
  private appearance: Appearance = resolveAppearance();
  private unsubscribe: (() => void) | undefined;
  constructor(options: ThinkingOrbOptions = {}) {
    this.state = options.state ?? 'working'; this.size = options.size ?? 64;
    this.element.className = 'thinking-orb';
    this.element.setAttribute('role', 'img');
    this.element.dataset.layout = 'element'; this.element.dataset.layoutLabel = 'Orb 画布';
    this.resize();
    this.motion = new MotionController(this.element, seconds => this.paint(seconds));
    this.motion.setSpeed(options.speed ?? 1); this.motion.setPaused(options.paused ?? false);
    this.unsubscribe = options.colors?.subscribe(appearance => { this.appearance = appearance; this.motion.repaint(); });
  }
  setState(state: OrbState): void { this.state = state; this.motion.repaint(); }
  setSize(size: OrbSize): void { this.size = size; this.resize(); this.motion.repaint(); }
  setPaused(paused: boolean): void { this.motion.setPaused(paused); }
  setActive(active: boolean): void { this.motion.setActive(active); }
  setSpeed(speed: number): void { this.motion.setSpeed(speed); }
  reset(): void { this.motion.reset(); }
  private resize(): void {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    this.element.width = this.element.height = this.size * dpr;
    this.element.style.width = this.element.style.height = `${this.size}px`;
  }
  private paint(seconds: number): void {
    const ctx = this.element.getContext('2d'); if (!ctx) return;
    const dpr = this.element.width / this.size;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, this.size, this.size);
    const { mode, speed, opts } = resolvePreset(this.state, this.size);
    const frame = MODE_FRAMES[mode](this.size, seconds * speed, opts);
    const n = parseInt(this.appearance.colors.accent.slice(1), 16);
    const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    const s = parseInt(this.appearance.colors.secondary.slice(1), 16);
    const secondary = [(s >> 16) & 255, (s >> 8) & 255, s & 255];
    const ink = (white: number, alpha = 1) => {
      const w = Math.min(1, Math.max(0, white)) * .84;
      const ramp = rgb.map((c, i) => { const ink = c * (1 - w * .35) + secondary[i]! * w * .35; return Math.round(this.appearance.mode === 'dark' ? ink * (1 - w) : ink + (255 - ink) * w); });
      return `rgba(${ramp.join(',')},${alpha})`;
    };
    for (const line of frame.lines) { ctx.strokeStyle = ink(line.white, line.a); ctx.lineWidth = line.w; ctx.beginPath(); ctx.moveTo(line.x1, line.y1); ctx.lineTo(line.x2, line.y2); ctx.stroke(); }
    for (const dot of frame.dots) { ctx.fillStyle = ink(dot.white, dot.a); ctx.beginPath(); ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2); ctx.fill(); }
    const labels: Record<OrbState, string> = { working: '处理中', searching: '搜索中', solving: '求解中', listening: '聆听中', connecting: '连接中', weaving: '编织中', composing: '生成中', breathing: '思考中', shaping: '塑形中' };
    if (this.element.getAttribute('aria-label') !== labels[this.state]) this.element.setAttribute('aria-label', labels[this.state]);
  }
  destroy(): void { this.motion.destroy(); this.unsubscribe?.(); }
}
