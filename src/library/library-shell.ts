import { createElement, query } from '../lib/dom';
import './library-shell.css';

export type LibraryModule = 'workbench' | 'archive';

/** Tab and history entries name the current view first. */
export function setPageTitle(...parts: string[]): void {
  document.title = [...parts.filter(Boolean), 'UIUX Explore'].join(' · ');
}

/** Page geometry only; navigation, data and demos belong to the caller. */
export class LibraryShell {
  readonly element: HTMLDivElement;
  readonly actions: HTMLDivElement;
  readonly main: HTMLElement;
  readonly home: HTMLAnchorElement;
  readonly sidebar: HTMLElement;

  /** Pass `heading` when the page has no visible h1 of its own. */
  constructor(options: { module: LibraryModule; heading?: string }) {
    this.element = createElement<HTMLDivElement>(`
      <div class="library-shell">
        <header class="library-header">
          <div class="library-header-inner">
            <a class="wordmark" href="./" aria-label="UIUX Explore，全部组件">
              <img class="brand-mark" src="/favicon.svg?v=3" width="24" height="24" alt="" />
              <span class="wordmark-text">UIUX <span class="wordmark-name">Explore</span></span>
            </a>
            <nav class="module-navigation" aria-label="工作区模块">
              <a href="#orbs" data-module="workbench">组件工作台</a>
              <a href="#archive" data-module="archive">资源库</a>
            </nav>
            <div class="library-header-actions"></div>
          </div>
        </header>
        <div class="library-body">
          <aside class="library-sidebar" aria-label="组件目录"></aside>
          <main id="main-content" class="main-content" tabindex="-1"></main>
        </div>
      </div>`);
    this.actions = query<HTMLDivElement>(this.element, '.library-header-actions');
    this.main = query(this.element, 'main');
    this.home = query<HTMLAnchorElement>(this.element, '.wordmark');
    this.sidebar = query(this.element, '.library-sidebar');
    query(this.element, `.module-navigation [data-module="${options.module}"]`).setAttribute(
      'aria-current',
      'page',
    );
    if (options.heading) {
      const heading = createElement<HTMLHeadingElement>('<h1 class="sr-only"></h1>');
      heading.textContent = options.heading;
      query(this.element, '.module-navigation').after(heading);
    }
  }
}
