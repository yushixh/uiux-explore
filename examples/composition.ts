import '../src/styles/tokens.css';
import { WeatherCard, TextField, ColorScope, composePalette, type WeatherData } from '../src/components';

// This host imports no library UI or app.css. Each instance owns only its state.
const data: WeatherData = {
  city: '上海', location: 'SHANGHAI, CN', high: 33, low: 26,
  periods: {
    day: { temperature: 31, condition: '晴朗', localTime: '14:00' },
    night: { temperature: 26, condition: '晴朗', localTime: '21:00' },
  },
};
const first = new WeatherCard({ data });
const second = new WeatherCard({ data: { ...data, city: '杭州', location: 'HANGZHOU, CN' }, mode: 'night' });
const mount = document.querySelector<HTMLElement>('#example')!;
mount.className = 'font-sans text-ink mx-auto max-w-4xl p-8';
mount.innerHTML = `<h1 class="text-xl mb-2">独立组件组合</h1><p class="text-sm text-muted mb-8">两个天气实例、原生表单，无组件库页面依赖。</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6" id="weather-examples"></div><button type="button" class="rounded-control border border-line px-4 py-2 text-sm mb-8" id="toggle-first">只切换第一个天气</button><form id="profile" class="grid gap-6 max-w-md" novalidate><div id="name-mount"></div><div id="email-mount"></div><button type="submit" class="rounded-control bg-ink text-white px-4 py-3 text-sm">检查表单数据</button></form><output id="result" class="block mt-4 text-sm" role="status"></output>`;
document.querySelector('#weather-examples')!.append(first.element, second.element);
const globalColors = new ColorScope(mount, { palette: 'ocean' });
const firstColors = new ColorScope(first.element, { parent: globalColors });
const secondColors = new ColorScope(second.element, { parent: globalColors, palette: composePalette('forest', { secondary: '#b396d0', highlight: '#e3b7d1' }) });
document.querySelector('#toggle-first')!.addEventListener('click', () => first.setMode(first.mode === 'day' ? 'night' : 'day'));
const name = new TextField({ id: 'example-name', name: 'name', label: '显示名称', value: '林间', hint: '无图标的文本输入变体。' });
const email = new TextField({ id: 'example-email', name: 'email', label: '电子邮箱', type: 'email', leadingIcon: 'mail', value: 'lin@example.com', required: true, hint: '由宿主表单决定校验策略。' });
document.querySelector('#name-mount')!.append(name.element);
document.querySelector('#email-mount')!.append(email.element);
const formColors = new ColorScope(document.querySelector<HTMLElement>('#profile')!, { parent: globalColors, palette: 'iris' });
document.querySelector<HTMLFormElement>('#profile')!.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const valid = form.checkValidity();
  email.setStatus(valid ? 'success' : 'error', valid ? '格式正确。' : '请检查邮箱格式。');
  document.querySelector('#result')!.textContent = valid ? JSON.stringify(Object.fromEntries(new FormData(form))) : '请检查表单。';
});

export { first, second, name, email, data };
if (import.meta.hot) import.meta.hot.dispose(() => { first.destroy(); second.destroy(); name.destroy(); email.destroy(); firstColors.destroy(); secondColors.destroy(); formColors.destroy(); globalColors.destroy(); });
