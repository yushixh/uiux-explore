import './styles/tokens.css';
import './styles/app.css';
import { query } from './lib/dom';

type Module = 'workbench' | 'archive';
interface Page {
  element: HTMLElement;
  destroy(): void;
}

// Each module loads with its own styles the first time it is opened.
const loaders: Record<Module, () => Promise<() => Page>> = {
  workbench: async () => {
    const [{ catalog }, { createCatalogPage }] = await Promise.all([
      import('./library/catalog'),
      import('./library/catalog-page'),
    ]);
    return () => createCatalogPage(catalog);
  },
  archive: async () => (await import('./library/archive/archive-page')).createArchivePage,
};
const requested = (): Module => (location.hash.startsWith('#archive') ? 'archive' : 'workbench');

const mount = query(document, '#app');
let current: Module | undefined;
let page: Page | undefined;

async function route(): Promise<void> {
  const next = requested();
  if (next === current) return;
  current = next;
  try {
    const create = await loaders[next]();
    if (current !== next) return; // A newer navigation replaced this one while it loaded.
    page?.destroy();
    page = create();
    mount.replaceChildren(page.element);
  } catch (error) {
    if (current !== next) return;
    current = undefined;
    page?.destroy();
    page = undefined;
    mount.textContent = '页面未能载入，请刷新重试。';
    console.error(error);
  }
}
void route();
window.addEventListener('hashchange', route);
window.addEventListener('popstate', route);
if (import.meta.hot)
  import.meta.hot.dispose(() => {
    page?.destroy();
    window.removeEventListener('hashchange', route);
    window.removeEventListener('popstate', route);
  });
