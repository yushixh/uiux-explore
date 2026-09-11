import { createElement, query } from '../lib/dom';
import { icon } from '../lib/icons';
import './library-shell.css';

/** Page geometry only; navigation, data and demos belong to the caller. */
export class LibraryShell {
  readonly element: HTMLDivElement;
  readonly actions: HTMLDivElement;
  readonly main: HTMLElement;
  readonly home: HTMLAnchorElement;
  readonly sidebar: HTMLElement;

  constructor() {
    this.element = createElement<HTMLDivElement>(`
      <div class="library-shell">
        <header class="library-header">
          <div class="library-header-inner">
            <a class="wordmark" href="./" aria-label="Daylight，全部组件">${icon('sun')}<span>daylight<span class="text-accent">.</span></span></a>
            <h1 class="sr-only">组件库</h1>
            <div class="library-header-actions"></div>
          </div>
        </header>
        <div class="library-body"><aside class="library-sidebar" aria-label="组件目录"></aside><main id="main-content" class="main-content" tabindex="-1"></main></div>
      </div>`);
    this.actions = query<HTMLDivElement>(this.element, '.library-header-actions');
    this.main = query(this.element, 'main');
    this.home = query<HTMLAnchorElement>(this.element, '.wordmark');
    this.sidebar = query(this.element, '.library-sidebar');
  }
}
