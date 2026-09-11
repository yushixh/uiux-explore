import { createElement, setPressed } from '../lib/dom';
import { icon, type IconName } from '../lib/icons';
import type { LiquidIndicator } from './effects/liquid-indicator';

export interface Segment<T extends string> { value: T; label: string; icon?: IconName }
export interface SegmentedControlOptions<T extends string> {
  label: string;
  options: readonly Segment<T>[];
  value: T;
  shape?: 'pill' | 'rounded';
  iconOnly?: boolean;
  effect?: 'gooey';
  onChange: (value: T) => void;
}

export class SegmentedControl<T extends string> {
  readonly element: HTMLDivElement;
  private readonly buttons: HTMLButtonElement[];
  private readonly options: SegmentedControlOptions<T>;
  private readonly abort = new AbortController();
  private selected = 0;
  private liquid?: LiquidIndicator;

  constructor(options: SegmentedControlOptions<T>) {
    this.options = options;
    this.element = createElement<HTMLDivElement>('<div class="segmented" role="group"></div>');
    this.element.setAttribute('aria-label', options.label);
    this.element.dataset.shape = options.shape ?? 'rounded';
    this.element.dataset.iconOnly = String(options.iconOnly ?? false);
    if (options.effect) this.element.dataset.effect = options.effect;
    this.element.style.setProperty('--segments', String(options.options.length));
    const thumb = document.createElement('span');
    thumb.className = 'segment-thumb';
    thumb.setAttribute('aria-hidden', 'true');
    this.element.append(thumb);
    this.buttons = options.options.map(option => {
      const button = createElement<HTMLButtonElement>('<button type="button" class="segment-button"></button>');
      button.setAttribute('aria-label', option.label);
      if (option.icon) button.innerHTML = icon(option.icon);
      if (options.iconOnly && option.icon) {
        button.title = option.label;
      } else {
        const label = document.createElement('span');
        label.textContent = option.label;
        button.append(label);
      }
      button.addEventListener('click', () => { this.setValue(option.value); options.onChange(option.value); }, { signal: this.abort.signal });
      this.element.append(button);
      return button;
    });
    this.setValue(options.value);
    if (options.effect === 'gooey') {
      void import('./effects/liquid-indicator').then(({ LiquidIndicator }) => {
        if (this.abort.signal.aborted) return;
        this.liquid = new LiquidIndicator(this.selected);
        this.element.prepend(this.liquid.element);
        this.element.dataset.liquidReady = 'true';
      }).catch(error => {
        if (!this.abort.signal.aborted) console.warn('Liquid indicator unavailable; using the standard thumb.', error);
      });
    }
  }

  setValue(value: T): void {
    const selected = this.options.options.findIndex(option => option.value === value);
    if (selected < 0) throw new RangeError('Unknown segment');
    this.selected = selected;
    this.element.style.setProperty('--selected', String(selected));
    this.buttons.forEach((button, index) => setPressed(button, index === selected));
    this.liquid?.setValue(selected);
  }

  destroy(): void { this.abort.abort(); this.liquid?.destroy(); }
}
