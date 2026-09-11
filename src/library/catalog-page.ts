import { createElement, query, setPressed } from '../lib/dom';
import { icon, type IconName } from '../lib/icons';
import { SegmentedControl, ColorScope, palettes, composePalette, type PaletteName, type ColorMode } from '../components';
import { LibraryShell } from './library-shell';
import type { CatalogEntry, ComponentDemo } from './catalog';
import type { LayoutLevel } from './layout-inspector';
import './workbench.css';

interface Settings { palette: PaletteName | 'inherit'; mix: PaletteName | ''; mode: ColorMode | 'inherit'; paused: boolean }

export function createCatalogPage(entries: readonly CatalogEntry[]) {
  const shell = new LibraryShell();
  const abort = new AbortController(); const { signal } = abort;
  const colors = new ColorScope(shell.element);
  const demos = new Map<string, ComponentDemo>();
  const pending = new Map<string, Promise<ComponentDemo>>();
  const originalCodes = new Map<string, string>();
  const settings = new Map(entries.map(entry => [entry.id, { palette: 'inherit', mix: '', mode: 'inherit', paused: false } as Settings]));
  let selected = entries.find(entry => entry.id === location.hash.slice(1))?.id ?? entries[0]!.id;
  let inspecting = false; let level: Exclude<LayoutLevel, 'off'> = 'container';

  shell.actions.innerHTML = '<details class="global-palette"><summary aria-label="全局配色"><span class="palette-dots" aria-hidden="true"></span></summary><div class="global-palette-options" role="group" aria-label="全局配色方案"></div></details><div class="global-mode"></div>';
  const globalPalette = query<HTMLDetailsElement>(shell.actions, '.global-palette');
  const paletteTrigger = query(globalPalette, 'summary');
  const paletteChoices = query(globalPalette, '.global-palette-options');
  palettes.forEach(palette => {
    const button = createElement<HTMLButtonElement>('<button type="button" class="global-palette-option"><span class="palette-dots" aria-hidden="true"></span></button>');
    button.dataset.palette = palette.id;
    button.setAttribute('aria-label', palette.name);
    button.title = palette.name;
    for (const color of palette.colors) {
      const dot = document.createElement('i'); dot.style.backgroundColor = color;
      query(button, '.palette-dots').append(dot);
    }
    button.addEventListener('click', () => {
      colors.setPalette(palette.id); syncGlobalPalette(); applyAll();
      globalPalette.open = false; paletteTrigger.focus();
    }, { signal });
    paletteChoices.append(button);
  });
  function syncGlobalPalette(): void {
    const palette = palettes.find(item => item.id === colors.selection)!;
    paletteTrigger.title = `全局配色：${palette.name}`;
    const dots = query(paletteTrigger, '.palette-dots'); dots.replaceChildren();
    for (const color of palette.colors) {
      const dot = document.createElement('i'); dot.style.backgroundColor = color; dots.append(dot);
    }
    paletteChoices.querySelectorAll<HTMLButtonElement>('button').forEach(button => setPressed(button, button.dataset.palette === palette.id));
  }
  syncGlobalPalette();
  const modeControl = new SegmentedControl<ColorMode>({ label: '全局明暗', value: 'light', shape: 'pill', effect: 'gooey', iconOnly: true, options: [{ value: 'light', label: '明亮', icon: 'sun' }, { value: 'dark', label: '深色', icon: 'moon' }], onChange: value => { colors.setMode(value); applyAll(); } });
  query(shell.actions, '.global-mode').append(modeControl.element);

  shell.sidebar.innerHTML = `<div class="catalog-search">${icon('search')}<input type="search" placeholder="搜索组件" aria-label="搜索组件" autocomplete="off"/><kbd>/</kbd></div><nav class="component-navigation" aria-label="组件"></nav><div class="sidebar-bottom"><span>${entries.length} 个组件</span><a href="https://github.com/Jakubantalik/Libraries.dev" target="_blank" rel="noreferrer">上游源码 ↗</a></div>`;
  const navigation = query(shell.sidebar, 'nav');
  const symbols: Record<string, IconName> = { orbs: 'orb', beam: 'beam', gooey: 'gooey', metal: 'metal', image: 'image', weather: 'sun', input: 'keyboard' };
  for (const [group, label] of [['effects', '动态组件'], ['base', '基础组件']] as const) {
    const section = createElement<HTMLDivElement>(`<div class="nav-group" data-group="${group}"><p class="nav-group-title">${label}</p></div>`);
    entries.filter(entry => entry.group === group).forEach(entry => {
      const link = createElement<HTMLAnchorElement>('<a class="component-link"><span class="nav-symbol" aria-hidden="true"></span><span></span></a>');
      link.href = `#${entry.id}`; link.dataset.component = entry.id;
      query(link, '.nav-symbol').innerHTML = icon(symbols[entry.id] ?? 'grid');
      link.lastElementChild!.textContent = entry.name;
      link.addEventListener('click', event => { event.preventDefault(); void choose(entry.id); }, { signal });
      section.append(link);
    }); navigation.append(section);
  }
  shell.main.innerHTML = `<div class="workspace-toolbar"><div class="workspace-location"><span class="current-group"></span><span aria-hidden="true">/</span><span class="current-name"></span></div><button class="inspect-toggle" type="button" aria-pressed="false">${icon('layers')}<span>布局检查</span></button></div><div class="inspector-toolbar" hidden><div class="inspector-levels"></div><button class="close-inspector" type="button" aria-label="关闭布局检查">×</button></div><div class="workbench"><div class="preview-mount"></div><aside class="appearance-panel" aria-label="组件外观"><div class="appearance-heading"><h2>外观</h2><button class="reset-appearance" type="button">重置</button></div><fieldset class="palette-field"><legend>配色方案</legend><label class="inherit-choice"><input type="radio" name="component-palette" value="inherit" checked/>跟随全局</label><div class="palette-options"></div></fieldset><label class="property-select"><span>混合辅色</span><select aria-label="混合辅色"><option value="">原配色</option></select></label><div class="color-chips" aria-label="当前配色"></div><label class="property-select"><span>明暗</span><select aria-label="组件明暗"><option value="inherit">跟随全局</option><option value="light">明亮</option><option value="dark">深色</option></select></label><div class="motion-property"><span>动效</span><button type="button" class="pause-effect" aria-pressed="false">暂停</button></div><p class="motion-preference" hidden>已跟随系统减少动态效果</p></aside></div><div class="load-status" role="status" hidden></div><div class="empty-state" hidden><h2>未找到组件</h2><button class="empty-reset" type="button">清除筛选</button></div><p class="sr-only result-count" role="status"></p>`;
  const mount = query(shell.main, '.preview-mount');
  const workbench = query(shell.main, '.workbench');
  const loadStatus = query(shell.main, '.load-status');
  const search = query<HTMLInputElement>(shell.sidebar, 'input[type="search"]');
  const inspectButton = query<HTMLButtonElement>(shell.main, '.inspect-toggle');
  const pause = query<HTMLButtonElement>(shell.main, '.pause-effect');
  const mix = query<HTMLSelectElement>(shell.main, '[aria-label="混合辅色"]');
  const localMode = query<HTMLSelectElement>(shell.main, '[aria-label="组件明暗"]');
  const swatches = query(shell.main, '.palette-options');
  palettes.forEach(palette => {
    mix.add(new Option(palette.name, palette.id));
    const label = createElement<HTMLLabelElement>('<label class="palette-option"><input type="radio" name="component-palette"/><span class="palette-dots" aria-hidden="true"></span><span class="palette-label"></span></label>');
    query<HTMLInputElement>(label, 'input').value = palette.id;
    query(label, '.palette-label').textContent = palette.name;
    for (const color of palette.colors) { const dot = document.createElement('i'); dot.style.background = color; query(label, '.palette-dots').append(dot); }
    swatches.append(label);
  });
  const levels = new SegmentedControl<Exclude<LayoutLevel, 'off'>>({ label: '布局层级', value: level, options: [{ value: 'container', label: '容器' }, { value: 'region', label: '分区' }, { value: 'element', label: '元素' }], onChange: value => { level = value; updateInspector(); } });
  query(shell.main, '.inspector-levels').append(levels.element);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  function updateCode(id: string): void {
    const demo = demos.get(id); if (!demo) return;
    const base = demo.getCode?.() ?? originalCodes.get(id) ?? '';
    const palette = demo.panel.colors.selection;
    const prelude = `import { ColorScope } from './src/components';\n\nconst mount = document.querySelector<HTMLElement>('#mount')!;\nconst colors = new ColorScope(mount, {\n  palette: ${JSON.stringify(palette, null, 2).replaceAll('\n', '\n  ')},\n  mode: '${demo.panel.colors.appearance.mode}',\n});\n\n`;
    const instanceNames: Record<string, string> = { orbs: 'orb', beam: 'beam', gooey: 'gooey', metal: 'metal', image: 'image', weather: 'weather' };
    const pauseCode = settings.get(id)?.paused && instanceNames[id] ? `\n\n${instanceNames[id]}.setPaused(true);` : '';
    demo.panel.setCode(prelude + base + pauseCode + '\n\n// 容器卸载时调用 colors.destroy();');
  }
  function apply(id: string): void {
    const demo = demos.get(id); if (!demo) return;
    const state = settings.get(id)!;
    const base = state.palette === 'inherit' ? colors.selection : state.palette;
    if (state.mix) {
      const palette = palettes.find(item => item.id === state.mix)!;
      demo.panel.colors.setPalette(composePalette(base, { secondary: palette.colors[1], highlight: palette.colors[2] }));
    } else demo.panel.colors.setPalette(state.palette === 'inherit' ? undefined : state.palette);
    demo.panel.colors.setMode(state.mode === 'inherit' ? undefined : state.mode);
    demo.setPaused?.(state.paused);
    updateCode(id);
  }
  function applyAll(): void { demos.forEach((_, id) => apply(id)); syncProperties(); }
  function syncProperties(): void {
    const state = settings.get(selected)!;
    shell.main.querySelectorAll<HTMLInputElement>('[name="component-palette"]').forEach(input => { input.checked = input.value === state.palette; });
    mix.value = state.mix; localMode.value = state.mode;
    const demo = demos.get(selected);
    pause.disabled = !demo?.setPaused || reduced.matches;
    setPressed(pause, state.paused); pause.textContent = state.paused ? '播放' : '暂停';
    query(shell.main, '.motion-preference').hidden = !reduced.matches;
    const chips = query(shell.main, '.color-chips'); chips.replaceChildren();
    if (demo) for (const [name, value] of [['主色', demo.panel.colors.appearance.colors.accent], ['辅色', demo.panel.colors.appearance.colors.secondary], ['亮色', demo.panel.colors.appearance.colors.highlight]]) {
      const chip = document.createElement('span'); chip.style.backgroundColor = value!; chip.title = `${name} ${value}`; chip.setAttribute('aria-label', `${name} ${value}`); chips.append(chip);
    }
  }
  async function choose(id: string): Promise<void> {
    if (!entries.some(entry => entry.id === id)) return;
    selected = id; history.replaceState(null, '', `#${id}`);
    const entry = entries.find(item => item.id === id)!;
    query(shell.main, '.current-group').textContent = entry.group === 'effects' ? '动态组件' : '基础组件';
    query(shell.main, '.current-name').textContent = entry.name;
    navigation.querySelectorAll<HTMLAnchorElement>('[data-component]').forEach(link => { if (link.dataset.component === id) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
    demos.forEach((demo, key) => { demo.panel.element.hidden = key !== id; if (key !== id) demo.stop?.(); });
    loadStatus.hidden = true;
    try {
      let demo = demos.get(id);
      if (!demo) {
        loadStatus.hidden = false; loadStatus.textContent = '正在载入组件…';
        if (!pending.has(id)) pending.set(id, Promise.resolve(entry.create(entry, { colors })));
        demo = await pending.get(id)!;
        if (signal.aborted) { demo.destroy(); return; }
        if (!demos.has(id)) {
          demos.set(id, demo); originalCodes.set(id, query(demo.panel.element, 'code').textContent ?? '');
          demo.panel.element.hidden = selected !== id; mount.append(demo.panel.element);
          demo.onUpdate?.(() => updateCode(id));
          apply(id);
        }
      }
      demo.setActive?.(selected === id);
      if (selected === id) { loadStatus.hidden = true; syncProperties(); updateInspector(); }
    } catch (error) {
      pending.delete(id);
      if (selected === id) { loadStatus.hidden = false; loadStatus.textContent = '组件未能载入。'; const retry = document.createElement('button'); retry.textContent = '重试'; retry.type = 'button'; retry.addEventListener('click', () => { void choose(id); }, { once: true }); loadStatus.append(retry); }
      console.error(error);
    }
  }
  function filter(): void {
    const term = search.value.trim().toLowerCase();
    const matches = entries.filter(entry => `${entry.name} ${entry.english} ${entry.keywords}`.toLowerCase().includes(term));
    navigation.querySelectorAll<HTMLAnchorElement>('[data-component]').forEach(link => { link.hidden = !matches.some(entry => entry.id === link.dataset.component); });
    navigation.querySelectorAll<HTMLElement>('.nav-group').forEach(group => { group.hidden = !matches.some(entry => entry.group === group.dataset.group); });
    query(shell.main, '.empty-state').hidden = matches.length > 0; workbench.hidden = !matches.length;
    query(shell.main, '.result-count').textContent = `${matches.length} 个组件`;
    if (!matches.length) demos.get(selected)?.stop?.();
    else if (!matches.some(entry => entry.id === selected)) void choose(matches[0]!.id);
    else demos.get(selected)?.setActive?.(true);
  }
  function updateInspector(): void {
    setPressed(inspectButton, inspecting); query(shell.main, '.inspector-toolbar').hidden = !inspecting;
    demos.forEach((demo, id) => demo.inspector.setLevel(inspecting && id === selected ? level : 'off'));
  }
  document.addEventListener('pointerdown', event => {
    if (event.target instanceof Node && !globalPalette.contains(event.target)) globalPalette.open = false;
  }, { signal });
  globalPalette.addEventListener('focusout', event => {
    if (event.relatedTarget instanceof Node && !globalPalette.contains(event.relatedTarget)) globalPalette.open = false;
  }, { signal });
  shell.main.querySelectorAll<HTMLInputElement>('[name="component-palette"]').forEach(input => input.addEventListener('change', () => { settings.get(selected)!.palette = input.value as Settings['palette']; apply(selected); syncProperties(); }, { signal }));
  mix.addEventListener('change', () => { settings.get(selected)!.mix = mix.value as Settings['mix']; apply(selected); syncProperties(); }, { signal });
  localMode.addEventListener('change', () => { settings.get(selected)!.mode = localMode.value as Settings['mode']; apply(selected); syncProperties(); }, { signal });
  pause.addEventListener('click', () => { settings.get(selected)!.paused = !settings.get(selected)!.paused; apply(selected); syncProperties(); }, { signal });
  query(shell.main, '.reset-appearance').addEventListener('click', () => { settings.set(selected, { palette: 'inherit', mix: '', mode: 'inherit', paused: false }); apply(selected); syncProperties(); }, { signal });
  inspectButton.addEventListener('click', () => { inspecting = !inspecting; updateInspector(); }, { signal });
  query(shell.main, '.close-inspector').addEventListener('click', () => { inspecting = false; updateInspector(); }, { signal });
  query(shell.main, '.empty-reset').addEventListener('click', () => { search.value = ''; filter(); search.focus(); }, { signal });
  search.addEventListener('input', filter, { signal });
  shell.home.addEventListener('click', event => { event.preventDefault(); search.value = ''; filter(); void choose(entries[0]!.id); }, { signal });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && globalPalette.open) {
      globalPalette.open = false; paletteTrigger.focus(); event.preventDefault(); return;
    }
    const editing = event.target instanceof HTMLElement && (event.target.matches('input,textarea,select') || event.target.isContentEditable);
    if (event.key === '/' && !editing && !event.metaKey && !event.ctrlKey) { event.preventDefault(); search.focus(); }
    if (event.key === 'Escape') { if (document.activeElement === search) { search.value = ''; filter(); search.blur(); } else { inspecting = false; updateInspector(); } }
  }, { signal });
  window.addEventListener('hashchange', () => { void choose(location.hash.slice(1)); }, { signal });
  reduced.addEventListener('change', syncProperties, { signal });
  void choose(selected);
  return { element: shell.element, destroy: () => { abort.abort(); demos.forEach(demo => demo.destroy()); colors.destroy(); modeControl.destroy(); levels.destroy(); } };
}
