import { createElement, query } from '../../lib/dom';
import { icon } from '../../lib/icons';
import { ColorScope } from '../../components';
import { LibraryShell, setPageTitle } from '../library-shell';
import { createAppearanceControls } from '../appearance-controls';
import type { ArchiveIndex, ArchiveRecord } from './types';
import './archive.css';

const statusNames: Record<string, string> = {
  source: '源码已存',
  snippet: '运行代码已存',
  prompt: 'Prompt 已存',
  reference: '产品参考',
  locked: '需要 Plus',
  login: '需要登录',
};
const sections = { components: '组件', references: '设计参考', resources: '源码与资料' };
type Section = keyof typeof sections;
type View = 'preview' | 'code' | 'prompt';
type Variant = 'original' | 'project';
const variantNames: Record<Variant, string> = { original: '原始版', project: '本项目版' };
const variantNotes: Record<Variant, string> = {
  original: '归档时的原站实现、样式、默认参数与素材',
  project: '本项目的本地演示与适配',
};
// Live previews are heavy, images lazy-load, text rows are cheap.
const pageSizes: Record<Section, number> = { components: 12, references: 24, resources: 40 };
const SEARCH_DELAY = 180;

function fileUrl(file: string): string {
  return '/archive/' + file.split('/').map(encodeURIComponent).join('/');
}
function safeUrl(url: string | undefined): string {
  try {
    const parsed = new URL(url ?? '');
    return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '';
  } catch {
    return '';
  }
}
function textNode(tag: string, text: string, className = ''): HTMLElement {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  return element;
}
/** Authored source first, then styles, notes and manifests; preview adapters and shared runtime last. */
function fileRank(file: string): number {
  if (file.includes('/runtime/') || file.endsWith('provenance.json')) return 5;
  if (file.endsWith('runtime-entry.js')) return 4;
  if (file.endsWith('.json')) return 3;
  if (/\.(txt|md)$/.test(file)) return 2;
  if (/\.s?css$/.test(file)) return 1;
  return 0;
}
const byReadingOrder = (files: readonly string[]) =>
  files
    .map((file, index) => ({ file, index }))
    .sort((a, b) => fileRank(a.file) - fileRank(b.file) || a.index - b.index)
    .map(entry => entry.file);

export function createArchivePage() {
  const shell = new LibraryShell({ module: 'archive' });
  shell.element.classList.add('archive-shell');
  const abort = new AbortController();
  const { signal } = abort;
  const colors = new ColorScope(shell.element);
  const appearance = createAppearanceControls(colors);

  let data: ArchiveIndex | undefined;
  let selected: ArchiveRecord | undefined;
  let section: Section = 'components';
  let source = '';
  let category = '';
  let kind = '';
  let availability = '';
  let term = '';
  let selectedId = '';
  let view: View = 'preview';
  let page = 0;
  let version = 0;
  let renderedKey = '';
  let listTitle = sections[section];
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;
  let searchTimer: ReturnType<typeof setTimeout> | undefined;
  const contents = new Map<string, string>();
  const fileSelections = new Map<string, string>();
  const variantChoices = new Map<string, Variant>();
  const sectionRoutes = new Map<Section, string>();
  const haystacks = new Map<ArchiveRecord, string>();
  const sourceNames = new Map<string, string>();
  const categoryNames = new Map<string, string>();

  shell.actions.innerHTML = `
    <span class="archive-date"></span>
    <a class="archive-manifest" href="/archive/index.json" download title="下载归档索引">索引 ↓</a>`;
  shell.actions.append(...appearance.elements);
  shell.sidebar.setAttribute('aria-label', '资源目录');
  shell.sidebar.innerHTML = `
    <p class="archive-side-title">资源库</p>
    <nav class="archive-sections" aria-label="资源分区"></nav>
    <div class="archive-category-label">按用途</div>
    <nav class="archive-categories" aria-label="资源分类"></nav>
    <div class="archive-side-footer">
      <span class="archive-total"></span>
      <button type="button" class="coverage-open">收录范围与来源 ↗</button>
    </div>`;
  shell.main.innerHTML = `
    <div class="archive-filters">
      <div class="archive-search">
        ${icon('search')}
        <input type="search" placeholder="搜索组件…" aria-label="搜索资源" autocomplete="off" />
        <kbd>/</kbd>
      </div>
      <select class="source-select" aria-label="来源站点"><option value="">全部来源</option></select>
      <select class="availability-select" aria-label="可用内容">
        <option value="">全部内容</option>
        <option value="source">有源码</option>
        <option value="prompt">有 Prompt</option>
        <option value="missing">尚无源码</option>
      </select>
    </div>
    <div class="archive-results-heading">
      <h1 class="archive-heading">组件</h1>
      <span class="archive-count" role="status">正在读取本地归档…</span>
      <button class="archive-clear" type="button">清除筛选</button>
    </div>
    <div class="archive-grid" aria-label="资源列表"></div>
    <div class="archive-pager">
      <button type="button" class="page-prev" aria-label="上一页">←</button>
      <label class="page-jump">第 <input type="number" class="page-input" min="1" inputmode="numeric" aria-label="页码" /> / <span class="page-total">0</span> 页</label>
      <button type="button" class="page-next" aria-label="下一页">→</button>
    </div>
    <dialog class="archive-inspector" aria-label="资源内容">
      <button class="inspector-close" type="button" aria-label="关闭资源内容">×</button>
      <section class="archive-detail"></section>
    </dialog>
    <dialog class="coverage-dialog" aria-labelledby="coverage-title">
      <div class="coverage-heading">
        <h2 id="coverage-title">收录范围与来源</h2>
        <button class="coverage-close" type="button" aria-label="关闭收录范围">×</button>
      </div>
      <div class="coverage-content"></div>
    </dialog>`;
  const search = query<HTMLInputElement>(shell.main, '.archive-search input');
  const sourceSelect = query<HTMLSelectElement>(shell.main, '.source-select');
  const availabilitySelect = query<HTMLSelectElement>(shell.main, '.availability-select');
  const detail = query(shell.main, '.archive-detail');
  const list = query(shell.main, '.archive-grid');
  const pageInput = query<HTMLInputElement>(shell.main, '.page-input');
  const dialog = query<HTMLDialogElement>(shell.main, '.coverage-dialog');
  const inspector = query<HTMLDialogElement>(shell.main, '.archive-inspector');
  const categories = query(shell.sidebar, '.archive-categories');
  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const frame = entry.target as HTMLIFrameElement;
        if (frame.dataset.src) {
          frame.src = frame.dataset.src;
          delete frame.dataset.src;
        }
        observer.unobserve(frame);
      }
    },
    { rootMargin: '160px' },
  );

  function readRoute(): void {
    const params = new URLSearchParams(location.hash.split('?')[1] ?? '');
    selectedId = params.get('id') ?? '';
    const requested = params.get('section');
    section =
      requested && requested in sections
        ? (requested as Section)
        : (data?.records.find(r => r.id === selectedId)?.section ?? 'components');
    source = params.get('source') ?? '';
    category = params.get('category') ?? '';
    kind = params.get('kind') ?? '';
    availability = params.get('has') ?? '';
    term = params.get('q') ?? '';
    page = Math.max(0, Number(params.get('page')) || 0);
    const rawView = params.get('view');
    view = rawView === 'code' || rawView === 'prompt' ? rawView : 'preview';
    search.value = term;
    availabilitySelect.value = availability;
  }
  function writeRoute(push = false): void {
    const params = new URLSearchParams({ section });
    const values = {
      source,
      category,
      kind,
      has: availability,
      q: term,
      id: selectedId,
      page: page ? String(page) : '',
    };
    for (const [key, value] of Object.entries(values)) if (value) params.set(key, value);
    history[push ? 'pushState' : 'replaceState'](null, '', '#archive?' + params);
    sectionRoutes.set(section, location.hash);
  }
  function hasAvailability(r: ArchiveRecord): boolean {
    if (!availability) return true;
    if (availability === 'preview') return r.section === 'components';
    if (availability === 'source') return r.files.length > 0;
    if (availability === 'prompt') return r.prompts.length > 0;
    if (availability === 'snippet') return r.status === 'snippet';
    return !r.files.length;
  }
  function matches(r: ArchiveRecord, words: readonly string[]): boolean {
    if (r.section !== section || (source && r.source !== source) || (kind && r.kind !== kind)) return false;
    const haystack = haystacks.get(r) ?? '';
    return hasAvailability(r) && words.every(word => haystack.includes(word));
  }

  function link(text: string, url: string, className = ''): HTMLAnchorElement {
    const anchor = document.createElement('a');
    anchor.textContent = text;
    anchor.href = safeUrl(url) || '#';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.className = className;
    return anchor;
  }
  function button(text: string, label: string, run: () => void): HTMLButtonElement {
    const element = document.createElement('button');
    element.type = 'button';
    element.textContent = text;
    element.setAttribute('aria-label', label);
    element.addEventListener('click', run, { signal });
    return element;
  }
  function openContent(r: ArchiveRecord, nextView: View): void {
    selected = r;
    selectedId = r.id;
    view = nextView;
    writeRoute();
    void renderDetail();
    if (!inspector.open) inspector.showModal();
  }
  function relatedLink(r: ArchiveRecord, label?: string): HTMLAnchorElement {
    const anchor = document.createElement('a');
    anchor.href = '#archive?' + new URLSearchParams({ section: r.section, id: r.id });
    anchor.textContent = label ?? r.name;
    anchor.addEventListener(
      'click',
      event => {
        event.preventDefault();
        inspector.close();
        location.hash = anchor.hash;
      },
      { signal },
    );
    return anchor;
  }
  /** Text actions shared by cards and rows; every record links back to its original page. */
  function recordActions(r: ArchiveRecord): HTMLDivElement {
    const actions = textNode('div', '', 'archive-card-actions') as HTMLDivElement;
    if (r.files.length) actions.append(button('源码', `查看 ${r.name} 源码`, () => openContent(r, 'code')));
    if (r.prompts.length)
      actions.append(button('Prompt', `查看 ${r.name} Prompt`, () => openContent(r, 'prompt')));
    if (r.section === 'components')
      actions.append(button('放大', `放大 ${r.name}`, () => openContent(r, 'preview')));
    const origin = link('原站 ↗', r.url);
    origin.setAttribute('aria-label', `${r.name} 原网页`);
    actions.append(origin);
    return actions;
  }
  function titleButton(r: ArchiveRecord): HTMLButtonElement {
    const initial: View = r.section === 'references' || !r.files.length ? 'preview' : 'code';
    return button(r.name, `查看 ${r.name} 详情`, () => openContent(r, initial));
  }

  function renderCard(r: ArchiveRecord): HTMLElement {
    const card = textNode('article', '', 'archive-card');
    card.dataset.id = r.id;
    card.setAttribute('aria-label', r.name);
    card.classList.toggle('is-target', r.id === selectedId);
    const header = textNode('header', '', 'archive-card-heading');
    const title = textNode('div', '', 'archive-card-title');
    const heading = textNode('h2', r.name);
    if (r.section !== 'components') heading.replaceChildren(titleButton(r));
    title.append(heading, textNode('span', sourceNames.get(r.source) ?? r.source));
    header.append(title);
    card.append(header);

    if (r.section === 'components') {
      const controls = textNode('div', '', 'archive-variants');
      controls.setAttribute('role', 'group');
      controls.setAttribute('aria-label', `${r.name} 版本`);
      const stage = textNode('div', '', 'archive-card-stage');
      const frames = new Map<Variant, HTMLIFrameElement>();
      const buttons = new Map<Variant, HTMLButtonElement>();
      const selectVariant = (variant: Variant) => {
        variantChoices.set(r.id, variant);
        for (const [key, element] of buttons) element.setAttribute('aria-pressed', String(key === variant));
        for (const [key, frame] of frames) frame.hidden = key !== variant;
        if (frames.has(variant)) return;
        const frame = document.createElement('iframe');
        frame.title = `${r.name} · ${variantNames[variant]}`;
        frame.setAttribute('sandbox', 'allow-scripts');
        frame.dataset.src = variant === 'original' ? r.originalPreviewUrl! : r.localPreviewUrl!;
        stage.append(frame);
        frames.set(variant, frame);
        observer.observe(frame);
      };
      for (const variant of ['original', 'project'] as const) {
        const element = button(variantNames[variant], variantNames[variant], () => selectVariant(variant));
        element.title = variantNotes[variant];
        buttons.set(variant, element);
        controls.append(element);
      }
      header.append(controls);
      card.append(stage);
      selectVariant(variantChoices.get(r.id) ?? 'original');
    } else if (safeUrl(r.image)) {
      const image = document.createElement('img');
      image.src = safeUrl(r.image);
      image.alt = r.name;
      image.loading = 'lazy';
      image.referrerPolicy = 'no-referrer';
      image.className = 'archive-reference-image';
      image.addEventListener(
        'error',
        () => {
          image.remove();
          card.classList.add('image-unavailable');
        },
        { once: true },
      );
      card.append(image);
    } else {
      const summary = textNode('div', '', 'archive-card-summary');
      summary.append(
        textNode('p', r.description || r.name),
        textNode('span', '设计参考 · ' + (r.prompts.length ? '已保存 Prompt' : '产品介绍')),
      );
      card.append(summary);
    }

    const footer = textNode('footer', '', 'archive-card-footer');
    const provenance =
      r.section === 'components' ? '本地运行' : r.kind === 'page' ? '整页设计' : r.product || '设计参考';
    footer.append(textNode('span', provenance, 'archive-card-caption'), recordActions(r));
    card.append(footer);
    return card;
  }
  /** Source and reference material has no preview of its own, so it reads as a dense list. */
  function renderRow(r: ArchiveRecord): HTMLElement {
    const row = textNode('article', '', 'archive-row');
    row.dataset.id = r.id;
    row.setAttribute('aria-label', r.name);
    row.classList.toggle('is-target', r.id === selectedId);
    const title = textNode('div', '', 'archive-row-title');
    const heading = textNode('h2', '');
    heading.append(titleButton(r));
    const context = [sourceNames.get(r.source) ?? r.source, r.description].filter(Boolean).join(' · ');
    title.append(heading, textNode('span', context));
    const content = r.files.length ? `${r.files.length} 个文件` : (r.accessNote ?? '原站目录条目');
    row.append(
      title,
      textNode('span', statusNames[r.status] ?? r.status, 'status-pill ' + r.status),
      textNode('span', content, 'archive-row-content'),
      recordActions(r),
    );
    return row;
  }

  function render(): void {
    if (!data) return;
    const sectionRecords = data.records.filter(r => r.section === section);
    sourceSelect.replaceChildren(new Option('全部来源', ''));
    for (const s of data.sources) {
      const count = sectionRecords.filter(r => r.source === s.id).length;
      if (count) sourceSelect.add(new Option(`${s.name} · ${count}`, s.id));
    }
    if (source && !sectionRecords.some(r => r.source === source)) source = '';
    sourceSelect.value = source;

    const words = term.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const narrowed = data.records.filter(r => matches(r, words));
    const results = narrowed.filter(r => !category || r.categoryId === category);
    const pageSize = pageSizes[section];
    const pageCount = Math.ceil(results.length / pageSize);
    if (selectedId) {
      const index = results.findIndex(r => r.id === selectedId);
      if (index >= 0) page = Math.floor(index / pageSize);
    }
    page = Math.min(page, Math.max(0, pageCount - 1));
    const counts = new Map<string, number>();
    for (const r of narrowed) counts.set(r.categoryId, (counts.get(r.categoryId) ?? 0) + 1);

    const nav = query(shell.sidebar, '.archive-sections');
    nav.replaceChildren();
    for (const [id, name] of Object.entries(sections)) {
      const item = createElement<HTMLButtonElement>(
        '<button type="button"><span></span><small></small></button>',
      );
      item.firstElementChild!.textContent = name;
      item.lastElementChild!.textContent = String(data.records.filter(r => r.section === id).length);
      item.setAttribute('aria-pressed', String(section === id));
      item.addEventListener(
        'click',
        () => {
          sectionRoutes.set(section, location.hash);
          location.hash = sectionRoutes.get(id as Section) ?? '#archive?section=' + id;
        },
        { signal },
      );
      nav.append(item);
    }
    categories.replaceChildren();
    const listed = data.categories.filter(c => counts.has(c.id) || c.id === category);
    for (const c of [{ id: '', name: '全部' + sections[section] }, ...listed]) {
      const item = createElement<HTMLButtonElement>(
        '<button type="button"><span></span><small></small></button>',
      );
      item.firstElementChild!.textContent = c.name;
      item.lastElementChild!.textContent = String(c.id ? (counts.get(c.id) ?? 0) : narrowed.length);
      item.setAttribute('aria-pressed', String(category === c.id));
      item.addEventListener(
        'click',
        () => {
          category = c.id;
          selectedId = '';
          page = 0;
          writeRoute(true);
          render();
        },
        { signal },
      );
      categories.append(item);
    }

    search.placeholder = `搜索${sections[section]}…`;
    listTitle = (category && categoryNames.get(category)) || sections[section];
    query(shell.main, '.archive-heading').textContent = listTitle;
    if (!inspector.open) setPageTitle(listTitle, '资源库');
    query(shell.main, '.archive-count').textContent = `${results.length.toLocaleString()} 项`;
    query(shell.sidebar, '.archive-total').textContent =
      `${data.sources.length} 个来源 · ${data.records.length.toLocaleString()} 项归档`;

    // Rebuilding a card reloads its live preview, so an unchanged page keeps its elements.
    const visible = results.slice(page * pageSize, (page + 1) * pageSize);
    const key = [section, selectedId, ...visible.map(r => r.id)].join('|');
    if (key !== renderedKey) {
      renderedKey = key;
      observer.disconnect();
      list.dataset.section = section;
      list.replaceChildren(...visible.map(section === 'resources' ? renderRow : renderCard));
      if (!results.length)
        list.append(
          textNode('p', `没有匹配的${sections[section]}。试试其他关键词或清除筛选。`, 'archive-empty'),
        );
    }
    query<HTMLButtonElement>(shell.main, '.page-prev').disabled = page === 0;
    query<HTMLButtonElement>(shell.main, '.page-next').disabled = page + 1 >= pageCount;
    query(shell.main, '.archive-pager').hidden = pageCount <= 1;
    query(shell.main, '.page-total').textContent = String(pageCount);
    pageInput.max = String(Math.max(1, pageCount));
    pageInput.value = String(pageCount ? page + 1 : 0);
    writeRoute();
  }

  async function renderDetail(): Promise<void> {
    const token = ++version;
    const r = selected;
    detail.replaceChildren();
    if (!r || !data) {
      detail.append(textNode('p', '选择一个资源查看源码和 Prompt。', 'archive-empty'));
      return;
    }
    const records = data.records;
    setPageTitle(r.name, '资源库');
    const header = createElement(
      '<header class="archive-detail-heading"><p></p><h2></h2><div class="archive-meta"></div></header>',
    );
    query(header, 'p').textContent =
      `${sourceNames.get(r.source) ?? r.source} / ${categoryNames.get(r.categoryId) ?? ''}`;
    query(header, 'h2').textContent = r.name;
    const meta = query(header, '.archive-meta');
    meta.append(
      textNode('span', statusNames[r.status] ?? r.status, 'status-pill ' + r.status),
      textNode('span', r.section === 'components' ? '交互组件' : sections[r.section]),
      link('原站 ↗', r.url),
    );
    if (safeUrl(r.productUrl)) meta.append(link('打开产品 ↗', r.productUrl!));
    detail.append(header);
    if (r.description) detail.append(textNode('p', r.description, 'archive-description'));
    if (r.accessNote && r.status !== 'source')
      detail.append(textNode('p', r.accessNote, 'archive-access-note'));
    const parent = records.find(x => x.id === r.parentId);
    if (parent) {
      const row = textNode('div', '所属页面 / ', 'archive-parent');
      row.append(relatedLink(parent));
      detail.append(row);
    }

    const toolbar = createElement(
      '<div class="archive-viewbar"><div class="archive-views" role="group" aria-label="查看内容"></div><span class="archive-file-count"></span></div>',
    );
    const views: readonly (readonly [View, string])[] = [
      ...(r.section === 'components' ? ([['preview', '预览']] as const) : []),
      ['code', '源码'],
      ['prompt', 'Prompt'],
    ];
    for (const [value, label] of views) {
      const item = button(label, label, () => {
        view = value;
        writeRoute();
        void renderDetail();
      });
      item.setAttribute('aria-pressed', String(view === value));
      query(toolbar, '.archive-views').append(item);
    }
    query(toolbar, '.archive-file-count').textContent =
      view === 'code'
        ? `${r.files.length} 个文件`
        : view === 'prompt'
          ? r.prompts.length
            ? '原站 Prompt'
            : '未提供 Prompt'
          : '当前资源';
    detail.append(toolbar);
    const stage = textNode('div', '', 'archive-content');
    detail.append(stage);

    if (view === 'preview') {
      const variant = variantChoices.get(r.id) ?? 'original';
      const preview =
        r.section === 'components' ? (variant === 'project' ? r.localPreviewUrl : r.originalPreviewUrl) : '';
      if (preview) {
        const frame = document.createElement('iframe');
        frame.title = `${r.name} 本地预览`;
        frame.src = preview;
        frame.setAttribute('sandbox', 'allow-scripts');
        stage.append(
          frame,
          textNode('span', variant === 'project' ? '本项目版' : '原始版 · 本地运行', 'preview-caption'),
        );
      } else if (safeUrl(r.image)) {
        const image = document.createElement('img');
        image.src = safeUrl(r.image);
        image.alt = `${r.name} 原站参考图`;
        image.loading = 'lazy';
        image.referrerPolicy = 'no-referrer';
        image.addEventListener(
          'error',
          () => {
            image.remove();
            stage.append(textNode('p', '原站参考图暂不可用，源码和 Prompt 仍可本地查看。', 'archive-empty'));
          },
          { once: true },
        );
        stage.classList.add('image-content');
        stage.append(image, textNode('span', '静态参考图 · 不支持交互 · 图片需要联网', 'preview-caption'));
      } else {
        const note =
          r.status === 'source'
            ? '尚未接入本地交互预览；已保存原站源码。'
            : r.status === 'snippet'
              ? '尚未接入本地交互预览；目前已保存设计代码片段。'
              : '此条目是参考目录，尚无本地交互预览。';
        stage.append(textNode('p', note, 'archive-empty'));
        const actions = textNode('div', '', 'archive-preview-actions');
        if (r.files.length)
          actions.append(
            button('查看已保存代码', '查看已保存代码', () => {
              view = 'code';
              writeRoute();
              void renderDetail();
            }),
          );
        actions.append(link('到原站查看 ↗', r.url));
        stage.append(actions);
      }
    } else {
      const files = byReadingOrder(view === 'prompt' ? r.prompts : r.files);
      if (view === 'code' && r.previewOrigin === 'upstream-bundle')
        stage.append(
          textNode(
            'p',
            '已保存原站设计片段与公开网页的 JavaScript 运行实现。运行入口经过依赖适配，并非作者原始 TSX。',
            'preview-caption',
          ),
        );
      if (!files.length) {
        const missing =
          view === 'prompt'
            ? '原站未公开提供该资源的 Prompt。'
            : (r.accessNote ??
              (r.status === 'prompt'
                ? '该条目提供设计 Prompt，原站未提供对应产品源码。'
                : '原站未提供可归档的组件源码。'));
        stage.append(textNode('p', missing, 'archive-empty'));
      } else {
        const filebar = createElement(
          '<div class="archive-filebar"><select aria-label="选择文件"></select><button type="button" class="archive-copy">复制</button><a class="archive-download" download>下载 ↓</a></div>',
        );
        const select = query<HTMLSelectElement>(filebar, 'select');
        const copy = query<HTMLButtonElement>(filebar, '.archive-copy');
        for (const file of files) select.add(new Option(file.split('/').slice(-3).join('/'), file));
        const selectionKey = `${r.id}:${view}`;
        const remembered = fileSelections.get(selectionKey);
        if (remembered && files.includes(remembered)) select.value = remembered;
        const pre = createElement<HTMLPreElement>('<pre tabindex="0"><code></code></pre>');
        const code = query(pre, 'code');
        stage.append(filebar, pre);
        let fileVersion = 0;
        let currentText = '';
        const loadFile = async () => {
          const current = ++fileVersion;
          const file = select.value;
          currentText = '';
          code.textContent = '正在读取文件…';
          fileSelections.set(selectionKey, file);
          copy.disabled = true;
          query<HTMLAnchorElement>(filebar, 'a').href = fileUrl(file);
          try {
            let text = contents.get(file);
            if (text === undefined) {
              const response = await fetch(fileUrl(file), { signal });
              if (!response.ok) throw Error('missing');
              text = await response.text();
              // A dev server answers unknown paths with the app shell.
              if (/^<!doctype html>/i.test(text)) throw Error('missing');
              contents.set(file, text);
            }
            if (current !== fileVersion || token !== version || signal.aborted) return;
            currentText = text;
            code.textContent = text;
            copy.disabled = false;
            if (r.source === 'halaska' && r.line && file.endsWith('.jsx'))
              pre.scrollTop = Math.max(0, (r.line - 3) * 19);
          } catch {
            if (!signal.aborted && current === fileVersion)
              code.textContent = '文件未能读取。请检查本地归档或重新选择文件。';
          }
        };
        select.addEventListener('change', () => void loadFile(), { signal });
        copy.addEventListener(
          'click',
          async () => {
            try {
              await navigator.clipboard.writeText(currentText);
              copy.textContent = '已复制';
            } catch {
              copy.textContent = '请选中文本复制';
            }
            if (copiedTimer) clearTimeout(copiedTimer);
            copiedTimer = setTimeout(() => {
              if (filebar.isConnected) copy.textContent = '复制';
            }, 1800);
          },
          { signal },
        );
        if (view === 'prompt' && r.promptOrigin === 'upstream-template')
          stage.append(
            textNode(
              'p',
              r.source === 'vantaui'
                ? '原站“阅读此页”询问模板，不是组件重建 Prompt。'
                : '按原站公开 Copy prompt 模板生成，源码与说明保持原文。',
              'preview-caption',
            ),
          );
        void loadFile();
      }
    }
    if (token !== version || signal.aborted) return;

    const children = records.filter(x => x.parentId === r.id);
    const peers = records
      .filter(
        x =>
          x.id !== r.id && x.section === r.section && x.categoryId === r.categoryId && x.kind !== 'example',
      )
      .sort((a, b) => Number(b.source !== r.source) - Number(a.source !== r.source))
      .slice(0, 6);
    const related = textNode('div', '', 'archive-related');
    const links = textNode('div', '', 'related-links');
    if (children.length) {
      related.append(textNode('h3', `包含 ${children.length} 个参考区块`));
      children.forEach(x => links.append(relatedLink(x)));
      related.append(links);
    } else if (peers.length) {
      const family = r.family === 'text-morph';
      related.append(
        textNode('h3', family ? '其他框架实现' : r.section === 'components' ? '同类组件' : '相关资料'),
      );
      const entries = family ? records.filter(x => x.family === r.family && x.id !== r.id) : peers;
      for (const x of entries) {
        const framework = x.framework ? ` / ${x.framework}` : '';
        links.append(relatedLink(x, `${x.name} · ${sourceNames.get(x.source) ?? x.source}${framework}`));
      }
      related.append(links);
    }
    detail.append(related);
  }

  function filter(): void {
    if (searchTimer) clearTimeout(searchTimer);
    source = sourceSelect.value;
    availability = availabilitySelect.value;
    term = search.value;
    kind = '';
    selectedId = '';
    page = 0;
    writeRoute();
    render();
  }
  function goToPage(next: number): void {
    page = Math.max(0, next);
    selectedId = '';
    writeRoute(true);
    render();
    query(shell.main, '.archive-results-heading').scrollIntoView({ block: 'start' });
  }

  // Typing waits for a pause; every other filter applies at once.
  search.addEventListener(
    'input',
    () => {
      if (searchTimer) clearTimeout(searchTimer);
      searchTimer = setTimeout(filter, SEARCH_DELAY);
    },
    { signal },
  );
  for (const select of [sourceSelect, availabilitySelect])
    select.addEventListener('change', filter, { signal });
  query(shell.main, '.archive-clear').addEventListener(
    'click',
    () => {
      if (searchTimer) clearTimeout(searchTimer);
      source = category = kind = availability = term = selectedId = '';
      search.value = '';
      sourceSelect.value = availabilitySelect.value = '';
      page = 0;
      writeRoute(true);
      render();
    },
    { signal },
  );
  query(shell.main, '.page-prev').addEventListener('click', () => goToPage(page - 1), { signal });
  query(shell.main, '.page-next').addEventListener('click', () => goToPage(page + 1), { signal });
  pageInput.addEventListener(
    'change',
    () => {
      const requested = Math.round(Number(pageInput.value));
      if (Number.isFinite(requested) && requested >= 1) goToPage(requested - 1);
      else pageInput.value = String(page + 1);
    },
    { signal },
  );
  query(shell.sidebar, '.coverage-open').addEventListener('click', () => dialog.showModal(), { signal });
  query(dialog, '.coverage-close').addEventListener('click', () => dialog.close(), { signal });
  query(inspector, '.inspector-close').addEventListener('click', () => inspector.close(), { signal });
  for (const modal of [dialog, inspector])
    modal.addEventListener(
      'click',
      event => {
        if (event.target === modal) modal.close();
      },
      { signal },
    );
  inspector.addEventListener(
    'close',
    () => {
      version++;
      detail.replaceChildren();
      setPageTitle(listTitle, '资源库');
    },
    { signal },
  );
  const route = () => {
    if (!location.hash.startsWith('#archive')) return;
    if (inspector.open) inspector.close();
    const previous = section;
    readRoute();
    render();
    if (section !== previous) window.scrollTo({ top: 0 });
  };
  window.addEventListener('hashchange', route, { signal });
  window.addEventListener('popstate', route, { signal });
  document.addEventListener(
    'keydown',
    event => {
      const editing =
        event.target instanceof HTMLElement &&
        (event.target.matches('input,textarea,select') || event.target.isContentEditable);
      if (
        event.key === '/' &&
        !editing &&
        !event.metaKey &&
        !event.ctrlKey &&
        !dialog.open &&
        !inspector.open
      ) {
        event.preventDefault();
        search.focus();
      }
      if (event.key === 'Escape' && document.activeElement === search) {
        search.value = '';
        filter();
      }
    },
    { signal },
  );

  readRoute();
  setPageTitle('资源库');
  void fetch('/archive/index.json', { signal })
    .then(async response => {
      if (!response.ok) throw Error('index');
      const index = (await response.json()) as ArchiveIndex;
      if (signal.aborted) return;
      data = index;
      for (const s of index.sources) sourceNames.set(s.id, s.name);
      for (const c of index.categories) categoryNames.set(c.id, c.name);
      for (const r of index.records)
        haystacks.set(
          r,
          [
            r.name,
            r.description,
            r.product,
            ...r.tags,
            categoryNames.get(r.categoryId),
            sourceNames.get(r.source),
          ]
            .join(' ')
            .toLocaleLowerCase(),
        );
      readRoute();
      query(shell.actions, '.archive-date').textContent = '本地归档 · ' + index.fetchedAt.slice(0, 10);
      const coverage = query(dialog, '.coverage-content');
      coverage.append(
        textNode(
          'p',
          '组件只收录可在本地实际操作的示例。原始版使用归档时的原站实现、样式和素材；本项目版保留本地适配。设计参考与源码资料独立浏览。',
        ),
      );
      for (const s of index.sources) {
        const block = document.createElement('section');
        block.append(textNode('h3', `${s.name} · ${s.count}`), textNode('p', s.note), link('原站 ↗', s.url));
        coverage.append(block);
      }
      render();
    })
    .catch(() => {
      if (signal.aborted) return;
      query(shell.main, '.archive-count').textContent = '归档索引未能读取';
      list.append(button('重新加载', '重新加载', () => location.reload()));
    });

  return {
    element: shell.element,
    destroy(): void {
      abort.abort();
      observer.disconnect();
      version++;
      if (copiedTimer) clearTimeout(copiedTimer);
      if (searchTimer) clearTimeout(searchTimer);
      appearance.destroy();
      colors.destroy();
    },
  };
}
