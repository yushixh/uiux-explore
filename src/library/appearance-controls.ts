import { createElement, query, setPressed } from '../lib/dom';
import { SegmentedControl, palettes, type ColorMode, type ColorScope, type PaletteName } from '../components';

/** Global palette and mode for this page session; a reload restores the defaults. */
const session: { palette: PaletteName; mode: ColorMode } = { palette: 'daylight', mode: 'light' };

export function paletteDots(colors: readonly string[]): HTMLSpanElement {
  const dots = createElement<HTMLSpanElement>('<span class="palette-dots" aria-hidden="true"></span>');
  for (const color of colors) {
    const dot = document.createElement('i');
    dot.style.backgroundColor = color;
    dots.append(dot);
  }
  return dots;
}

/** Header controls shared by every module, so the choice survives moving between them. */
export function createAppearanceControls(colors: ColorScope, onChange: () => void = () => {}) {
  const abort = new AbortController();
  const { signal } = abort;
  colors.setPalette(session.palette);
  colors.setMode(session.mode);

  const picker = createElement<HTMLDetailsElement>(`
    <details class="global-palette">
      <summary aria-label="全局配色"></summary>
      <div class="global-palette-options" role="group" aria-label="全局配色方案"></div>
    </details>`);
  const trigger = query(picker, 'summary');
  const choices = query(picker, '.global-palette-options');
  function sync(): void {
    const palette = palettes.find(item => item.id === session.palette)!;
    trigger.title = `全局配色：${palette.name}`;
    trigger.replaceChildren(paletteDots(palette.colors));
    choices
      .querySelectorAll<HTMLButtonElement>('button')
      .forEach(button => setPressed(button, button.dataset.palette === palette.id));
  }
  for (const palette of palettes) {
    const button = createElement<HTMLButtonElement>(
      '<button type="button" class="global-palette-option"></button>',
    );
    button.dataset.palette = palette.id;
    button.setAttribute('aria-label', palette.name);
    button.title = palette.name;
    button.append(paletteDots(palette.colors));
    button.addEventListener(
      'click',
      () => {
        session.palette = palette.id;
        colors.setPalette(palette.id);
        sync();
        onChange();
        picker.open = false;
        trigger.focus();
      },
      { signal },
    );
    choices.append(button);
  }
  sync();

  const mode = new SegmentedControl<ColorMode>({
    label: '全局明暗',
    value: session.mode,
    shape: 'pill',
    effect: 'gooey',
    iconOnly: true,
    options: [
      { value: 'light', label: '明亮', icon: 'sun' },
      { value: 'dark', label: '深色', icon: 'moon' },
    ],
    onChange: value => {
      session.mode = value;
      colors.setMode(value);
      onChange();
    },
  });
  const modeMount = createElement<HTMLDivElement>('<div class="global-mode"></div>');
  modeMount.append(mode.element);

  document.addEventListener(
    'pointerdown',
    event => {
      if (event.target instanceof Node && !picker.contains(event.target)) picker.open = false;
    },
    { signal },
  );
  picker.addEventListener(
    'focusout',
    event => {
      if (event.relatedTarget instanceof Node && !picker.contains(event.relatedTarget)) picker.open = false;
    },
    { signal },
  );
  // Registered before the page's own shortcuts: Escape closes the open picker and nothing else.
  document.addEventListener(
    'keydown',
    event => {
      if (event.key !== 'Escape' || !picker.open) return;
      picker.open = false;
      trigger.focus();
      event.preventDefault();
      event.stopImmediatePropagation();
    },
    { signal },
  );

  return {
    elements: [picker, modeMount] as const,
    destroy(): void {
      abort.abort();
      mode.destroy();
    },
  };
}
