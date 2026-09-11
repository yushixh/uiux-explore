import { createElement, query } from '../../lib/dom';
import { icon, type IconName } from '../../lib/icons';
import './text-field.css';

export type FieldStatus = 'default' | 'error' | 'success';
export interface TextFieldOptions {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'search' | 'tel' | 'url';
  placeholder?: string;
  hint?: string;
  value?: string;
  leadingIcon?: IconName;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  size?: 'compact' | 'comfortable';
  autocomplete?: AutoFill;
  onInput?: (value: string, event: Event) => void;
  onBlur?: (value: string) => void;
}

/** Native input remains inside the caller's form, so submit and FormData work. */
export class TextField {
  readonly element: HTMLDivElement;
  readonly input: HTMLInputElement;
  private readonly hint: HTMLElement;
  private readonly clearButton: HTMLButtonElement;
  private readonly options: TextFieldOptions;
  private readonly abort = new AbortController();

  constructor(options: TextFieldOptions) {
    this.options = options;
    this.element = createElement<HTMLDivElement>(`
      <div class="text-field" data-state="default" data-layout="container" data-layout-label="输入框组合">
        <div class="field-label-row" data-layout="region" data-layout-label="标签区"><label data-layout="element" data-layout-label="标签行框"></label><span class="field-required"></span></div>
        <div class="field-control" data-layout="region" data-layout-label="输入区">
          <span class="field-leading" data-layout="element" data-layout-label="前置图标"></span>
          <input class="field-input" data-layout="element" data-layout-label="输入行框" />
          <button class="field-clear" type="button" data-layout="element" data-layout-label="清空按钮">${icon('close')}</button>
        </div>
        <div class="field-message" data-layout="region" data-layout-label="反馈区"><span class="field-message-icon" aria-hidden="true"></span><p data-layout="element" data-layout-label="提示行框"></p></div>
      </div>`);
    const label = query<HTMLLabelElement>(this.element, 'label');
    label.htmlFor = options.id;
    label.textContent = options.label;
    this.input = query<HTMLInputElement>(this.element, 'input');
    this.input.id = options.id;
    this.input.name = options.name;
    this.input.type = options.type ?? 'text';
    this.input.placeholder = options.placeholder ?? '';
    this.input.required = options.required ?? false;
    this.input.defaultValue = options.value ?? '';
    this.input.autocomplete = options.autocomplete ?? 'off';
    this.hint = query(this.element, '.field-message p');
    this.hint.id = `${options.id}-description`;
    this.input.setAttribute('aria-describedby', this.hint.id);
    query(this.element, '.field-required').textContent = options.required ? '必填' : '选填';
    const leading = query(this.element, '.field-leading');
    if (options.leadingIcon) leading.innerHTML = icon(options.leadingIcon);
    else { leading.hidden = true; this.element.classList.add('without-leading'); }
    this.clearButton = query<HTMLButtonElement>(this.element, '.field-clear');
    this.clearButton.setAttribute('aria-label', `清空${options.label}`);
    this.clearButton.addEventListener('click', () => {
      this.setValue('');
      this.input.focus();
      this.input.dispatchEvent(new Event('input', { bubbles: true }));
    }, { signal: this.abort.signal });
    this.input.addEventListener('input', event => {
      this.updateClearButton();
      options.onInput?.(this.value, event);
    }, { signal: this.abort.signal });
    this.input.addEventListener('blur', () => options.onBlur?.(this.value), { signal: this.abort.signal });
    this.setValue(options.value ?? '');
    this.setStatus('default');
    this.setDisabled(options.disabled ?? false);
    this.setSize(options.size ?? 'comfortable');
  }

  get value(): string { return this.input.value; }
  setValue(value: string): void { this.input.value = value; this.updateClearButton(); }
  focus(): void { this.input.focus(); }
  setSize(size: 'compact' | 'comfortable'): void { this.element.dataset.size = size; }
  setDisabled(disabled: boolean): void {
    this.input.disabled = disabled;
    this.element.dataset.disabled = String(disabled);
    this.updateClearButton();
  }
  setStatus(status: FieldStatus, message?: string): void {
    this.element.dataset.state = status;
    this.input.setAttribute('aria-invalid', String(status === 'error'));
    this.hint.textContent = message ?? this.options.hint ?? '';
    query(this.element, '.field-message-icon').innerHTML = status === 'default' ? '' : icon(status === 'error' ? 'alert' : 'check');
    const feedback = query(this.element, '.field-message');
    feedback.setAttribute('role', status === 'error' ? 'alert' : 'status');
    feedback.setAttribute('aria-live', 'polite');
  }
  private updateClearButton(): void {
    const visible = (this.options.clearable ?? true) && this.value.length > 0 && !this.input.disabled;
    this.clearButton.style.visibility = visible ? 'visible' : 'hidden';
    this.clearButton.disabled = !visible;
  }
  destroy(): void { this.abort.abort(); }
}
