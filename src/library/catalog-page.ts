import { createElement, query, setPressed } from '../lib/dom';
import { icon, type IconName } from '../lib/icons';
import { codeLiteral } from '../lib/code-literal';
import {
  SegmentedControl,
  ColorScope,
  palettes,
  composePalette,
  type PaletteName,
  type ColorMode,
} from '../components';
import { LibraryShell, setPageTitle } from './library-shell';
import { createAppearanceControls, paletteDots } from './appearance-controls';
import type { CatalogEntry, ComponentDemo } from './catalog';
import type { LayoutLevel } from './layout-inspector';
import './workbench.css';

interface Settings {
  palette: PaletteName | 'inherit';
  mix: PaletteName | '';
  mode: ColorMode | 'inherit';
  paused: boolean;
}
const defaults = (): Settings => ({ palette: 'inherit', mix: '', mode: 'inherit', paused: false });
const groups = [
  ['effects', '动态组件'],
  ['base', '基础组件'],
] as const;
const symbols: Record<string, IconName> = {
  orbs: 'orb',
  beam: 'beam',
  gooey: 'gooey',
  metal: 'metal',
  image: 'image',
  weather: 'sun',
  input: 'keyboard',
};
const instanceNames: Record<string, string> = {
  orbs: 'orb',
  beam: 'beam',
  gooey: 'gooey',
  metal: 'metal',
  image: 'image',
  weather: 'weather',
};
const componentsModule = './src/components';

export function createCatalogPage(entries: readonly CatalogEntry[]) {
  const shell = new LibraryShell({ module: 'workbench', heading: 'UIUX Explore 组件工作台' });
  const abort = new AbortController();
  const { signal } = abort;
  const colors = new ColorScope(shell.element);
  const demos = new Map<string, ComponentDemo>();
  const pending = new Map<string, Promise<ComponentDemo>>();
  const originalCodes = new Map<string, string>();
  const settings = new Map(entries.map(entry => [entry.id, defaults()]));
  let selected = entries.find(entry => entry.id === location.hash.slice(1))?.id ?? entries[0]!.id;
  let inspecting = false;
  let level: Exclude<LayoutLevel, 'off'> = 'container';
  let chipTimer = 0;

  const appearance = createAppearanceControls(colors, applyAll);
  shell.actions.append(...appearance.elements);

  shell.sidebar.innerHTML = `
    <div class="catalog-search">
      ${icon('search')}
      <input type="search" placeholder="搜索组件" aria-label="搜索组件" autocomplete="off" />
      <kbd>/</kbd>
    </div>
    <nav class="component-navigation" aria-label="组件"></nav>
    <div class="sidebar-bottom">
      <span>${entries.length} 个组件</span>
      <a href="https://github.com/Jakubantalik/Libraries.dev" target="_blank" rel="noreferrer">上游源码 ↗</a>
    </div>`;
  const navigation = query(shell.sidebar, 'nav');
  for (const [group, label] of groups) {
    const section = createElement<HTMLDivElement>(
      `<div class="nav-group" data-group="${group}"><p class="nav-group-title">${label}</p></div>`,
    );
    for (const entry of entries.filter(item => item.group === group)) {
      const link = createElement<HTMLAnchorElement>(
        '<a class="component-link"><span class="nav-symbol" aria-hidden="true"></span><span></span></a>',
      );
      link.href = `#${entry.id}`;
      link.dataset.component = entry.id;
      query(link, '.nav-symbol').innerHTML = icon(symbols[entry.id] ?? 'grid');
      link.lastElementChild!.textContent = entry.name;
      link.addEventListener(
        'click',
        event => {
          event.preventDefault();
          void choose(entry.id);
        },
        { signal },
      );
      section.append(link);
    }
    navigation.append(section);
  }

  shell.main.innerHTML = `
    <div class="inspector-toolbar" hidden>
      <div class="inspector-levels"></div>
      <button class="close-inspector" type="button" aria-label="关闭布局检查">×</button>
    </div>
    <div class="workbench">
      <div class="preview-mount"></div>
      <aside class="appearance-panel" aria-label="组件外观">
        <div class="appearance-heading">
          <h2>外观</h2>
          <button class="reset-appearance" type="button">重置外观</button>
        </div>
        <fieldset class="palette-field">
          <legend>配色方案</legend>
          <label class="inherit-choice"><input type="radio" name="component-palette" value="inherit" checked />跟随全局</label>
          <div class="palette-options"></div>
        </fieldset>
        <div class="property-group">
          <label class="property-select">
            <span>辅色取自</span>
            <select class="mix-select"><option value="">当前配色</option></select>
          </label>
          <div class="color-chips" role="group" aria-label="当前色值，点击复制"></div>
          <p class="chip-status" role="status"></p>
        </div>
        <label class="property-select">
          <span>明暗</span>
          <select class="mode-select">
            <option value="inherit">跟随全局</option>
            <option value="light">明亮</option>
            <option value="dark">深色</option>
          </select>
        </label>
        <div class="motion-property">
          <span>动效</span>
          <button type="button" class="pause-effect" aria-pressed="false">暂停</button>
        </div>
        <p class="motion-preference" hidden>已跟随系统减少动态效果</p>
      </aside>
    </div>
    <div class="load-status" role="status" hidden></div>
    <div class="empty-state" hidden>
      <h2>未找到组件</h2>
      <button class="empty-reset" type="button">清除筛选</button>
    </div>
    <p class="sr-only result-count" role="status"></p>`;
  const mount = query(shell.main, '.preview-mount');
  const workbench = query(shell.main, '.workbench');
  const loadStatus = query(shell.main, '.load-status');
  const search = query<HTMLInputElement>(shell.sidebar, 'input[type="search"]');
  const pause = query<HTMLButtonElement>(shell.main, '.pause-effect');
  const mix = query<HTMLSelectElement>(shell.main, '.mix-select');
  const localMode = query<HTMLSelectElement>(shell.main, '.mode-select');
  const swatches = query(shell.main, '.palette-options');
  const chips = query(shell.main, '.color-chips');
  const chipStatus = query(shell.main, '.chip-status');
  // One button, shown in the heading of whichever panel is current.
  const inspectButton = createElement<HTMLButtonElement>(
    `<button class="inspect-toggle" type="button" aria-pressed="false" title="布局检查">${icon('layers')}<span>布局检查</span></button>`,
  );
  for (const palette of palettes) {
    mix.add(new Option(palette.name, palette.id));
    const label = createElement<HTMLLabelElement>(
      '<label class="palette-option"><input type="radio" name="component-palette" /><span class="palette-label"></span></label>',
    );
    query<HTMLInputElement>(label, 'input').value = palette.id;
    query(label, '.palette-label').textContent = palette.name;
    query(label, '.palette-label').before(paletteDots(palette.colors));
    swatches.append(label);
  }
  const levels = new SegmentedControl<Exclude<LayoutLevel, 'off'>>({
    label: '布局层级',
    value: level,
    options: [
      { value: 'container', label: '容器' },
      { value: 'region', label: '分区' },
      { value: 'element', label: '元素' },
    ],
    onChange: value => {
      level = value;
      updateInspector();
    },
  });
  query(shell.main, '.inspector-levels').append(levels.element);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  /** The sample leads with one import per module, then the colour scope the component reads. */
  function updateCode(id: string): void {
    const demo = demos.get(id);
    if (!demo) return;
    const base = demo.getCode?.() ?? originalCodes.get(id) ?? '';
    const leading = /^import \{ ([^}]+) \} from '([^']+)';\n+/.exec(base);
    const imports =
      leading?.[2] === componentsModule
        ? [`import { ColorScope, ${leading[1]} } from '${componentsModule}';`]
        : [`import { ColorScope } from '${componentsModule}';`, ...(leading ? [leading[0].trimEnd()] : [])];
    const scope = [
      "const mount = document.querySelector<HTMLElement>('#mount')!;",
      'const colors = new ColorScope(mount, {',
      `  palette: ${codeLiteral(demo.panel.colors.selection, '  ')},`,
      `  mode: '${demo.panel.colors.appearance.mode}',`,
      '});',
    ];
    const instance = instanceNames[id];
    const pauseCode = settings.get(id)?.paused && instance ? `\n\n${instance}.setPaused(true);` : '';
    demo.panel.setCode(
      `${imports.join('\n')}\n\n${scope.join('\n')}\n\n${base.slice(leading?.[0].length ?? 0)}${pauseCode}\n\n// 容器卸载时调用 colors.destroy();`,
    );
  }
  function apply(id: string): void {
    const demo = demos.get(id);
    if (!demo) return;
    const state = settings.get(id)!;
    const base = state.palette === 'inherit' ? colors.selection : state.palette;
    if (state.mix) {
      const palette = palettes.find(item => item.id === state.mix)!;
      demo.panel.colors.setPalette(
        composePalette(base, { secondary: palette.colors[1], highlight: palette.colors[2] }),
      );
    } else demo.panel.colors.setPalette(state.palette === 'inherit' ? undefined : state.palette);
    demo.panel.colors.setMode(state.mode === 'inherit' ? undefined : state.mode);
    demo.setPaused?.(state.paused);
    updateCode(id);
  }
  function applyAll(): void {
    demos.forEach((_, id) => apply(id));
    syncProperties();
  }
  function syncProperties(): void {
    const state = settings.get(selected)!;
    shell.main.querySelectorAll<HTMLInputElement>('[name="component-palette"]').forEach(input => {
      input.checked = input.value === state.palette;
    });
    mix.value = state.mix;
    localMode.value = state.mode;
    const demo = demos.get(selected);
    pause.disabled = !demo?.setPaused || reduced.matches;
    setPressed(pause, state.paused);
    pause.textContent = state.paused ? '播放' : '暂停';
    query(shell.main, '.motion-preference').hidden = !reduced.matches;
    chips.replaceChildren();
    if (!demo) return;
    const { accent, secondary, highlight } = demo.panel.colors.appearance.colors;
    for (const [name, value] of [
      ['主色', accent],
      ['辅色', secondary],
      ['亮色', highlight],
    ] as const) {
      const chip = createElement<HTMLButtonElement>('<button type="button" class="color-chip"></button>');
      chip.style.backgroundColor = value;
      chip.title = `${name} ${value} · 点击复制`;
      chip.setAttribute('aria-label', `复制${name} ${value}`);
      chip.addEventListener('click', () => void copyColor(name, value), { signal });
      chips.append(chip);
    }
  }
  async function copyColor(name: string, value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      chipStatus.textContent = `已复制${name} ${value}`;
    } catch {
      chipStatus.textContent = `${name} ${value}`;
    }
    window.clearTimeout(chipTimer);
    chipTimer = window.setTimeout(() => {
      chipStatus.textContent = '';
    }, 2400);
  }
  async function choose(id: string): Promise<void> {
    const entry = entries.find(item => item.id === id);
    if (!entry) return;
    selected = id;
    history.replaceState(null, '', `#${id}`);
    setPageTitle(entry.name, '组件工作台');
    navigation.querySelectorAll<HTMLAnchorElement>('[data-component]').forEach(link => {
      if (link.dataset.component === id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    demos.forEach((demo, key) => {
      demo.panel.element.hidden = key !== id;
      if (key !== id) demo.stop?.();
    });
    loadStatus.hidden = true;
    try {
      let demo = demos.get(id);
      if (!demo) {
        loadStatus.hidden = false;
        loadStatus.textContent = '正在载入组件…';
        if (!pending.has(id)) pending.set(id, Promise.resolve(entry.create(entry, { colors })));
        demo = await pending.get(id)!;
        if (signal.aborted) {
          demo.destroy();
          return;
        }
        if (!demos.has(id)) {
          demos.set(id, demo);
          originalCodes.set(id, query(demo.panel.element, 'code').textContent ?? '');
          demo.panel.element.hidden = selected !== id;
          mount.append(demo.panel.element);
          demo.onUpdate?.(() => updateCode(id));
          apply(id);
        }
      }
      demo.setActive?.(selected === id);
      if (selected === id) {
        loadStatus.hidden = true;
        demo.panel.actions.append(inspectButton);
        syncProperties();
        updateInspector();
      }
    } catch (error) {
      pending.delete(id);
      if (selected === id) {
        loadStatus.hidden = false;
        loadStatus.textContent = '组件未能载入。';
        const retry = createElement<HTMLButtonElement>('<button type="button">重试</button>');
        retry.addEventListener('click', () => void choose(id), { once: true });
        loadStatus.append(retry);
      }
      console.error(error);
    }
  }
  function filter(): void {
    const term = search.value.trim().toLowerCase();
    const matches = entries.filter(entry =>
      `${entry.name} ${entry.english} ${entry.keywords}`.toLowerCase().includes(term),
    );
    navigation.querySelectorAll<HTMLAnchorElement>('[data-component]').forEach(link => {
      link.hidden = !matches.some(entry => entry.id === link.dataset.component);
    });
    navigation.querySelectorAll<HTMLElement>('.nav-group').forEach(group => {
      group.hidden = !matches.some(entry => entry.group === group.dataset.group);
    });
    query(shell.main, '.empty-state').hidden = matches.length > 0;
    workbench.hidden = !matches.length;
    query(shell.main, '.result-count').textContent = `${matches.length} 个组件`;
    if (!matches.length) demos.get(selected)?.stop?.();
    else if (!matches.some(entry => entry.id === selected)) void choose(matches[0]!.id);
    else demos.get(selected)?.setActive?.(true);
  }
  function updateInspector(): void {
    setPressed(inspectButton, inspecting);
    query(shell.main, '.inspector-toolbar').hidden = !inspecting;
    demos.forEach((demo, id) => demo.inspector.setLevel(inspecting && id === selected ? level : 'off'));
  }
  function change(update: (state: Settings) => void): void {
    update(settings.get(selected)!);
    apply(selected);
    syncProperties();
  }

  shell.main.querySelectorAll<HTMLInputElement>('[name="component-palette"]').forEach(input =>
    input.addEventListener(
      'change',
      () =>
        change(state => {
          state.palette = input.value as Settings['palette'];
        }),
      { signal },
    ),
  );
  mix.addEventListener(
    'change',
    () =>
      change(state => {
        state.mix = mix.value as Settings['mix'];
      }),
    { signal },
  );
  localMode.addEventListener(
    'change',
    () =>
      change(state => {
        state.mode = localMode.value as Settings['mode'];
      }),
    { signal },
  );
  pause.addEventListener(
    'click',
    () =>
      change(state => {
        state.paused = !state.paused;
      }),
    { signal },
  );
  query(shell.main, '.reset-appearance').addEventListener(
    'click',
    () => {
      settings.set(selected, defaults());
      apply(selected);
      syncProperties();
    },
    { signal },
  );
  inspectButton.addEventListener(
    'click',
    () => {
      inspecting = !inspecting;
      updateInspector();
    },
    { signal },
  );
  query(shell.main, '.close-inspector').addEventListener(
    'click',
    () => {
      inspecting = false;
      updateInspector();
    },
    { signal },
  );
  query(shell.main, '.empty-reset').addEventListener(
    'click',
    () => {
      search.value = '';
      filter();
      search.focus();
    },
    { signal },
  );
  search.addEventListener('input', filter, { signal });
  shell.home.addEventListener(
    'click',
    event => {
      event.preventDefault();
      search.value = '';
      filter();
      void choose(entries[0]!.id);
    },
    { signal },
  );
  document.addEventListener(
    'keydown',
    event => {
      const editing =
        event.target instanceof HTMLElement &&
        (event.target.matches('input,textarea,select') || event.target.isContentEditable);
      if (event.key === '/' && !editing && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        search.focus();
      }
      if (event.key !== 'Escape') return;
      if (document.activeElement === search) {
        search.value = '';
        filter();
        search.blur();
      } else {
        inspecting = false;
        updateInspector();
      }
    },
    { signal },
  );
  window.addEventListener('hashchange', () => void choose(location.hash.slice(1)), { signal });
  reduced.addEventListener('change', syncProperties, { signal });
  void choose(selected);

  return {
    element: shell.element,
    destroy(): void {
      abort.abort();
      window.clearTimeout(chipTimer);
      demos.forEach(demo => demo.destroy());
      appearance.destroy();
      levels.destroy();
      colors.destroy();
    },
  };
}
