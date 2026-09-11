import { createElement, query } from '../lib/dom';
import { SegmentedControl } from '../components';
import { ColorScope } from '../components/color-scope';
import './preview-panel.css';

export interface PreviewPanelOptions {
  id: string;
  name: string;
  code: string;
  onReset: () => void;
  onViewChange?: (view: 'preview' | 'code') => void;
  parentColors?: ColorScope;
}

/** Shared frame: identity → preview or code → controls. No descriptive slots. */
export class PreviewPanel {
  readonly element: HTMLElement;
  readonly stage: HTMLDivElement;
  readonly controls: HTMLDivElement;
  readonly colors: ColorScope;
  private readonly abort = new AbortController();
  private readonly view: SegmentedControl<'preview' | 'code'>;
  private timer = 0;
  private code: string;
  currentView: 'preview' | 'code' = 'preview';

  constructor(options: PreviewPanelOptions) {
    this.code = options.code;
    this.element = createElement(`
      <section class="component-panel rounded-panel border border-line bg-paper min-w-0 overflow-hidden">
        <header class="panel-heading"><h2 class="panel-name text-sm font-medium"></h2><div class="panel-view"></div></header>
        <div class="panel-stage relative"></div>
        <div class="code-stage" hidden>
          <div class="code-toolbar"><span class="font-mono">TypeScript</span><button type="button" class="copy-button">复制代码</button></div>
          <pre tabindex="0"><code></code></pre>
          <p class="copy-status" role="status" hidden></p>
        </div>
        <footer class="panel-footer"><div class="panel-controls"></div><button type="button" class="reset-demo">重置</button></footer>
      </section>`);
    this.element.id = options.id;
    const heading = query(this.element, 'h2');
    heading.id = `${options.id}-heading`;
    heading.textContent = options.name;
    this.element.setAttribute('aria-labelledby', heading.id);
    query(this.element, 'code').textContent = options.code;
    this.stage = query<HTMLDivElement>(this.element, '.panel-stage');
    this.colors = new ColorScope(this.stage, options.parentColors ? { parent: options.parentColors } : {});
    this.controls = query<HTMLDivElement>(this.element, '.panel-controls');
    const codeStage = query(this.element, '.code-stage');
    const footer = query(this.element, '.panel-footer');
    this.view = new SegmentedControl<'preview' | 'code'>({
      label: `${options.name}展示方式`, value: 'preview', iconOnly: true,
      options: [{ value: 'preview', label: '预览', icon: 'eye' }, { value: 'code', label: '代码', icon: 'code' }],
      onChange: view => {
        this.currentView = view;
        this.stage.hidden = view !== 'preview';
        codeStage.hidden = view !== 'code';
        footer.hidden = view !== 'preview';
        options.onViewChange?.(view);
      },
    });
    query(this.element, '.panel-view').append(this.view.element);
    const reset = query(this.element, '.reset-demo');
    reset.setAttribute('aria-label', `重置${options.name}`);
    reset.addEventListener('click', options.onReset, { signal: this.abort.signal });
    query(this.element, '.copy-button').addEventListener('click', () => { void this.copy(this.code); }, { signal: this.abort.signal });
  }

  setCode(code: string): void { this.code = code; query(this.element, 'code').textContent = code; }

  private async copy(code: string): Promise<void> {
    const button = query<HTMLButtonElement>(this.element, '.copy-button');
    const status = query(this.element, '.copy-status');
    try {
      await navigator.clipboard.writeText(code);
      if (this.abort.signal.aborted) return;
      button.textContent = '已复制';
      status.hidden = true;
    } catch {
      if (this.abort.signal.aborted) return;
      const range = document.createRange();
      range.selectNodeContents(query(this.element, 'code'));
      const selection = window.getSelection();
      selection?.removeAllRanges(); selection?.addRange(range);
      button.textContent = '已选中';
      status.hidden = false;
      status.textContent = '请按 ⌘C / Ctrl+C 复制';
    }
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => { button.textContent = '复制代码'; status.hidden = true; }, 3500);
  }

  destroy(): void { this.abort.abort(); this.view.destroy(); this.colors.destroy(); window.clearTimeout(this.timer); }
}
