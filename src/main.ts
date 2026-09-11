import './styles/tokens.css';
import './styles/app.css';
import { query } from './lib/dom';
import { catalog } from './library/catalog';
import { createCatalogPage } from './library/catalog-page';

const page = createCatalogPage(catalog);
query(document, '#app').replaceChildren(page.element);
if (import.meta.hot) import.meta.hot.dispose(page.destroy);
