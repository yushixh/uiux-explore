import { TextField, SegmentedControl } from '../components';
import { createElement, query } from '../lib/dom';
import { PreviewPanel } from './preview-panel';
import { LayoutInspector } from './layout-inspector';
import type { ComponentMetadata, DemoContext } from './catalog';
import './demos.css';

type DemoState = 'default' | 'error' | 'success' | 'disabled';

export function createInputDemo(metadata: ComponentMetadata, context: DemoContext) {
  const abort = new AbortController();
  let currentState: DemoState = 'default';
  let currentSize: 'compact' | 'comfortable' = 'comfortable';
  let onUpdate = () => {};
  const panel = new PreviewPanel({
    id: metadata.id, name: metadata.name,
    parentColors: context.colors,
    onReset: () => { setState('default'); currentSize = 'comfortable'; size.setValue(currentSize); field.setSize(currentSize); onUpdate(); },
    code: `import { TextField } from './src/components';

const email = new TextField({
  id: 'contact-email',
  name: 'email',
  label: '电子邮箱',
  type: 'email',
  placeholder: 'you@example.com',
  leadingIcon: 'mail',
  required: true,
  autocomplete: 'email',
  onInput: () => email.setStatus('default'),
});

const form = document.querySelector('form')!;
form.noValidate = true;
form.append(email.element);
form.addEventListener('submit', event => {
  event.preventDefault();
  const valid = email.input.checkValidity();
  email.setStatus(
    valid ? 'success' : 'error',
    valid ? '邮箱格式正确' : '请输入有效邮箱',
  );
});

email.setDisabled(false);`,
  });
  panel.stage.classList.add('input-stage');
  const canvas = createElement<HTMLDivElement>(`
    <div class="input-preview-canvas">
      <div class="input-demo-content">
        <form class="input-demo-form" novalidate>
          <div class="input-demo-mount"></div>
          <div class="input-demo-action"><button type="submit" title="验证邮箱（Enter）">验证 <kbd aria-hidden="true">↵</kbd></button></div>
        </form>
      </div>
    </div>`);
  const field = new TextField({
    id: 'demo-email', name: 'email', label: '电子邮箱', type: 'email', placeholder: 'you@example.com',
    required: true, autocomplete: 'email', leadingIcon: 'mail',
    onInput: () => { currentState = 'default'; field.setStatus('default'); switcher.setValue('default'); onUpdate(); },
  });
  query(canvas, '.input-demo-mount').append(field.element);
  const controls = createElement<HTMLDivElement>('<div class="input-controls"></div>');
  const switcher = new SegmentedControl<DemoState>({
    label: '输入框预览状态', value: 'default',
    options: [{ value: 'default', label: '默认' }, { value: 'error', label: '错误' }, { value: 'success', label: '成功' }, { value: 'disabled', label: '禁用' }],
    onChange: setState,
  });
  controls.append(switcher.element);
  const size = new SegmentedControl<'compact' | 'comfortable'>({ label: '输入框尺寸', value: 'comfortable', options: [{ value: 'compact', label: '紧凑' }, { value: 'comfortable', label: '舒适' }], onChange: value => { currentSize = value; field.setSize(value); onUpdate(); } });
  controls.append(size.element);
  panel.stage.append(canvas);
  panel.controls.append(controls);
  const inspector = new LayoutInspector(canvas);
  query<HTMLFormElement>(canvas, 'form').addEventListener('submit', event => {
    event.preventDefault();
    const valid = field.input.validity.valid;
    field.setStatus(valid ? 'success' : 'error', valid ? '邮箱格式正确' : field.value.trim() ? '请输入有效邮箱' : '请输入电子邮箱');
    switcher.setValue(valid ? 'success' : 'error');
    currentState = valid ? 'success' : 'error'; onUpdate();
  }, { signal: abort.signal });
  function setState(state: DemoState): void {
    currentState = state;
    field.setDisabled(state === 'disabled');
    query<HTMLButtonElement>(canvas, '[type="submit"]').disabled = state === 'disabled';
    if (state === 'error') { field.setValue('hello@'); field.setStatus('error', '请输入有效邮箱'); }
    else if (state === 'success') { field.setValue('hello@daylight.design'); field.setStatus('success', '邮箱格式正确'); }
    else if (state === 'disabled') { field.setValue('hello@daylight.design'); field.setStatus('default'); }
    else { field.setValue(''); field.setStatus('default'); }
    switcher.setValue(state);
    onUpdate();
  }
  return { panel, inspector, onUpdate: (callback: () => void) => { onUpdate = callback; }, getCode: () => `import { TextField } from './src/components';\n\nconst form = document.createElement('form');\nform.noValidate = true;\nmount.append(form);\nconst email = new TextField({\n  id: 'contact-email', name: 'email', label: '电子邮箱',\n  type: 'email', required: true, size: '${currentSize}',\n  value: ${JSON.stringify(field.value)},\n  onInput: () => email.setStatus('default'),\n});\nform.append(email.element);\nemail.setDisabled(${currentState === 'disabled'});\nemail.setStatus('${currentState === 'disabled' ? 'default' : currentState}');\nform.addEventListener('submit', event => {\n  event.preventDefault();\n  const valid = email.input.checkValidity();\n  email.setStatus(valid ? 'success' : 'error',\n    valid ? '邮箱格式正确' : '请输入有效邮箱');\n});\n\n// 卸载时调用 email.destroy();`, destroy: () => { abort.abort(); switcher.destroy(); size.destroy(); field.destroy(); inspector.destroy(); panel.destroy(); } };
}
