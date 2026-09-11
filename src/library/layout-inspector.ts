import './layout-inspector.css';

export type LayoutLevel = 'off' | 'container' | 'region' | 'element';
const SVG_NS = 'http://www.w3.org/2000/svg';

/** Measures actual layout elements, never recreates their layout in an overlay. */
export class LayoutInspector {
  private level: LayoutLevel = 'off';
  private readonly overlay: SVGSVGElement;
  private readonly resizeObserver: ResizeObserver;
  private readonly mutationObserver: MutationObserver;
  private frame = 0;
  private destroyed = false;
  private readonly stage: HTMLElement;

  constructor(stage: HTMLElement) {
    this.stage = stage;
    this.overlay = document.createElementNS(SVG_NS, 'svg');
    this.overlay.classList.add('layout-overlay');
    this.overlay.setAttribute('aria-hidden', 'true');
    stage.append(this.overlay);
    this.resizeObserver = new ResizeObserver(() => this.schedule());
    this.resizeObserver.observe(stage);
    stage.querySelectorAll('[data-layout]').forEach(element => this.resizeObserver.observe(element));
    this.mutationObserver = new MutationObserver(records => {
      if (records.some(record => !this.overlay.contains(record.target))) this.schedule();
    });
    this.mutationObserver.observe(stage, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['hidden', 'data-mode', 'data-state'] });
    void document.fonts.ready.then(() => this.schedule());
  }

  setLevel(level: LayoutLevel): void {
    this.level = level;
    this.overlay.dataset.level = level;
    this.overlay.style.display = level === 'off' ? 'none' : 'block';
    this.schedule();
  }

  private schedule(): void {
    if (this.destroyed) return;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.draw());
  }

  private draw(): void {
    this.overlay.replaceChildren();
    if (this.level === 'off' || !this.stage.getClientRects().length) return;
    const bounds = this.stage.getBoundingClientRect();
    this.overlay.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    this.stage.querySelectorAll<HTMLElement>(`[data-layout="${this.level}"]`).forEach(element => {
      if (!element.getClientRects().length || getComputedStyle(element).visibility === 'hidden') return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = rect.left - bounds.left;
      const y = rect.top - bounds.top;
      const group = document.createElementNS(SVG_NS, 'g');
      const outline = document.createElementNS(SVG_NS, 'rect');
      for (const [key, value] of Object.entries({ x, y, width: rect.width, height: rect.height, rx: this.level === 'container' ? 4 : 1 })) outline.setAttribute(key, String(value));
      const title = document.createElementNS(SVG_NS, 'title');
      title.textContent = `${element.dataset.layoutLabel ?? ''} · ${Math.round(rect.width)} × ${Math.round(rect.height)}`;
      group.append(title, outline);
      if (this.level !== 'element') {
        const label = document.createElementNS(SVG_NS, 'text');
        label.setAttribute('x', String(x + 4));
        label.setAttribute('y', String(Math.max(12, y - 5)));
        label.textContent = `${element.dataset.layoutLabel ?? ''}  ${Math.round(rect.width)} × ${Math.round(rect.height)}`;
        group.append(label);
      }
      this.overlay.append(group);
    });
  }

  destroy(): void {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
    this.overlay.remove();
  }
}
