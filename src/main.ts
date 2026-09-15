import './styles/tokens.css';
import './styles/app.css';
import { query } from './lib/dom';
import { catalog } from './library/catalog';
import { createCatalogPage } from './library/catalog-page';
import { createArchivePage } from './library/archive/archive-page';

let mode = location.hash.startsWith('#archive') ? 'archive' : 'workbench';
let page = mode === 'archive' ? createArchivePage() : createCatalogPage(catalog);
const mount = query(document, '#app');
mount.replaceChildren(page.element);
function route() {
  const next = location.hash.startsWith('#archive') ? 'archive' : 'workbench';
  if (next === mode) return;
  page.destroy(); mode = next;
  page = mode === 'archive' ? createArchivePage() : createCatalogPage(catalog);
  mount.replaceChildren(page.element);
}
window.addEventListener('hashchange', route);
window.addEventListener('popstate', route);
if (import.meta.hot) import.meta.hot.dispose(() => { page.destroy(); window.removeEventListener('hashchange', route); window.removeEventListener('popstate', route); });
