import { Component, useLayoutEffect, useRef, type ReactNode, type ErrorInfo } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { MotionController } from '../motion-controller';
import { resolveAppearance, type Appearance, type ColorScope } from '../color-scope';
import './effects.css';

/** A native DOM slot keeps original event handlers and form semantics intact. */
export function NativeContent({ content }: { content: HTMLElement }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => { ref.current?.append(content); return () => { content.remove(); }; }, [content]);
  return <div className="native-effect-content" ref={ref} />;
}

class EffectBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Effect rendering failed', error, info.componentStack); }
  render() { return this.state.failed ? <p role="status">效果暂不可用，请刷新后重试。</p> : this.props.children; }
}

export class ReactSurface {
  readonly element = document.createElement('div');
  protected appearance: Appearance = resolveAppearance();
  protected frozen = true;
  protected reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  protected motion: MotionController;
  private root: Root;
  private unsubscribe: (() => void) | undefined;
  private renderContent: (() => ReactNode) | undefined;
  private destroyed = false;
  constructor(colors?: ColorScope) {
    this.element.className = 'effect-surface';
    this.element.dataset.layout = 'region'; this.element.dataset.layoutLabel = '动态效果';
    this.root = createRoot(this.element);
    this.motion = new MotionController(this.element, undefined, paused => {
      this.frozen = paused;
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.render();
      this.onMotionChange();
    });
    this.unsubscribe = colors?.subscribe(appearance => { this.appearance = appearance; this.render(); });
  }
  protected mount(render: () => ReactNode): void { this.renderContent = render; this.render(); }
  protected onMotionChange(): void {}
  protected render(): void { if (this.renderContent && !this.destroyed) this.root.render(<EffectBoundary>{this.renderContent()}</EffectBoundary>); }
  setPaused(paused: boolean): void { this.motion.setPaused(paused); }
  setActive(active: boolean): void { this.motion.setActive(active); }
  destroy(): void { if (this.destroyed) return; this.destroyed = true; this.motion.destroy(); this.unsubscribe?.(); this.root.unmount(); }
}
