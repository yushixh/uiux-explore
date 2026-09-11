export type PaletteName = 'daylight' | 'ocean' | 'forest' | 'iris' | 'graphite';
export type ColorMode = 'light' | 'dark';
export interface PaletteColors {
  accent: string; secondary: string; highlight: string; surface: string;
  raised: string; ink: string; muted: string; line: string; onAccent: string;
  positive: string; negative: string;
}
export interface PaletteSelection { base: PaletteName; overrides?: Partial<PaletteColors> }
export type PaletteInput = PaletteName | PaletteSelection;
export interface Appearance { name: PaletteName; mode: ColorMode; colors: PaletteColors }

export const palettes: ReadonlyArray<{ id: PaletteName; name: string; colors: readonly [string, string, string] }> = [
  { id: 'daylight', name: '日光', colors: ['#a4673e', '#e9a26d', '#f3cd8b'] },
  { id: 'ocean', name: '海蓝', colors: ['#386bc0', '#719fdc', '#a7d4e8'] },
  { id: 'forest', name: '苔绿', colors: ['#39715c', '#7fae8c', '#c3d49c'] },
  { id: 'iris', name: '鸢紫', colors: ['#7955b0', '#b396d0', '#e3b7d1'] },
  { id: 'graphite', name: '石墨', colors: ['#515963', '#949ca6', '#c7cdd4'] },
];

export function mixColor(a: string, b: string, weight: number): string {
  const n = (color: string, i: number) => parseInt(color.slice(i, i + 2), 16);
  return '#' + [1, 3, 5].map(i => Math.round(n(a, i) * (1 - weight) + n(b, i) * weight).toString(16).padStart(2, '0')).join('');
}

/** A palette is data. Composition never changes a preset or component state. */
export function composePalette(base: PaletteInput, overrides: Partial<PaletteColors>): PaletteSelection {
  const selection = typeof base === 'string' ? { base } : base;
  return { base: selection.base, overrides: { ...selection.overrides, ...overrides } };
}

export function resolveAppearance(input: PaletteInput = 'daylight', mode: ColorMode = 'light'): Appearance {
  const selection = typeof input === 'string' ? { base: input } : input;
  const preset = palettes.find(p => p.id === selection.base) ?? palettes[0]!;
  const [accent, secondary, highlight] = preset.colors;
  const dark = mode === 'dark';
  const colors: PaletteColors = {
    accent: dark ? mixColor(accent, '#ffffff', .35) : accent,
    secondary, highlight,
    surface: dark ? mixColor(accent, '#101318', .90) : mixColor(accent, '#ffffff', .955),
    raised: dark ? mixColor(accent, '#20242b', .90) : '#ffffff',
    ink: dark ? '#eef0f4' : '#28313b', muted: dark ? '#a3acba' : '#697582',
    line: dark ? '#353e49' : '#dfe4ea', onAccent: dark ? '#161c24' : '#ffffff',
    positive: dark ? '#88c2a1' : '#39765a', negative: dark ? '#ed9c9c' : '#b74747',
    ...selection.overrides,
  };
  return { name: preset.id, mode, colors };
}

/** Scoped CSS + subscribed drawing colors. Children may inherit or override independently. */
export class ColorScope {
  private palette: PaletteInput | undefined;
  private mode: ColorMode | undefined;
  private listeners = new Set<(appearance: Appearance) => void>();
  private unsubscribe: (() => void) | undefined;
  private previous = new Map<string, string>();
  private originalTheme: string | undefined;
  constructor(readonly element: HTMLElement, private options: { parent?: ColorScope; palette?: PaletteInput; mode?: ColorMode } = {}) {
    this.palette = options.palette; this.mode = options.mode;
    this.originalTheme = element.dataset.theme;
    for (const key of Object.keys(resolveAppearance().colors)) this.previous.set(`--ui-${key}`, element.style.getPropertyValue(`--ui-${key}`));
    this.unsubscribe = options.parent?.subscribe(() => this.update());
    this.update();
  }
  get selection(): PaletteInput { return this.palette ?? this.options.parent?.selection ?? 'daylight'; }
  get appearance(): Appearance { return resolveAppearance(this.selection, this.mode ?? this.options.parent?.appearance.mode ?? 'light'); }
  setPalette(palette?: PaletteInput): void { this.palette = palette; this.update(); }
  setMode(mode?: ColorMode): void { this.mode = mode; this.update(); }
  subscribe(listener: (appearance: Appearance) => void): () => void { this.listeners.add(listener); listener(this.appearance); return () => { this.listeners.delete(listener); }; }
  private update(): void {
    const appearance = this.appearance;
    this.element.dataset.theme = appearance.mode;
    for (const [key, value] of Object.entries(appearance.colors)) this.element.style.setProperty(`--ui-${key}`, value);
    this.listeners.forEach(listener => listener(appearance));
  }
  destroy(): void {
    this.unsubscribe?.(); this.listeners.clear();
    for (const [key, value] of this.previous) { if (value) this.element.style.setProperty(key, value); else this.element.style.removeProperty(key); }
    if (this.originalTheme === undefined) delete this.element.dataset.theme; else this.element.dataset.theme = this.originalTheme;
  }
}
