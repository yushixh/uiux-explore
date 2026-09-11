import { WeatherCard, SegmentedControl, type DayPeriod, type WeatherData } from '../components';
import { createElement, setPressed, query } from '../lib/dom';
import { icon } from '../lib/icons';
import { PreviewPanel } from './preview-panel';
import { LayoutInspector } from './layout-inspector';
import type { ComponentMetadata, DemoContext } from './catalog';
import './demos.css';

const demoWeather: WeatherData = {
  city: '上海', high: 33, low: 26,
  periods: {
    day: { temperature: 31, condition: '晴朗', localTime: '14:00' },
    night: { temperature: 26, condition: '晴朗', localTime: '21:00' },
  },
};

export function createWeatherDemo(metadata: ComponentMetadata, context: DemoContext) {
  const weather = new WeatherCard({ data: demoWeather });
  let timer = 0;
  let playing = false;
  let onUpdate = () => {};
  const abort = new AbortController();
  const panel = new PreviewPanel({
    id: metadata.id, name: metadata.name,
    parentColors: context.colors,
    onReset: () => { setPlaying(false); setMode('day'); },
    onViewChange: view => { setPlaying(false); weather.setActive(view === 'preview'); },
    code: `import { WeatherCard } from './src/components';

const weather = new WeatherCard({
  mode: 'day',
  data: {
    city: '上海',
    high: 33,
    low: 26,
    periods: {
      day: {
        temperature: 31,
        condition: '晴朗',
        localTime: '14:00',
      },
      night: {
        temperature: 26,
        condition: '晴朗',
        localTime: '21:00',
      },
    },
  },
});

document.querySelector('#mount')!.append(weather.element);
weather.setMode('night');`,
  });
  panel.stage.classList.add('weather-stage');
  const canvas = createElement<HTMLDivElement>('<div class="weather-preview-canvas"><div class="weather-demo-mount"></div><span class="weather-demo-note">示例数据</span></div>');
  query(canvas, '.weather-demo-mount').append(weather.element);
  const controls = createElement<HTMLDivElement>('<div class="weather-controls"></div>');
  const switcher = new SegmentedControl<DayPeriod>({
    label: '天气日夜状态', shape: 'pill', value: 'day',
    options: [{ value: 'day', label: '白天', icon: 'sun' }, { value: 'night', label: '夜晚', icon: 'moon' }],
    onChange: mode => { setPlaying(false); setMode(mode); },
  });
  const play = createElement<HTMLButtonElement>(`<button type="button" class="weather-play" aria-label="自动演示日夜切换" aria-pressed="false">${icon('play')}</button>`);
  controls.append(switcher.element, play);
  panel.stage.append(canvas);
  panel.controls.append(controls);
  const inspector = new LayoutInspector(canvas);
  play.addEventListener('click', () => { setPlaying(!playing); if (playing) setMode(weather.mode === 'day' ? 'night' : 'day'); }, { signal: abort.signal });

  function setMode(mode: DayPeriod): void {
    weather.setMode(mode); switcher.setValue(mode); canvas.dataset.mode = mode;
    onUpdate();
  }
  function schedule(): void {
    window.clearTimeout(timer);
    if (!playing || document.hidden) return;
    timer = window.setTimeout(() => { setMode(weather.mode === 'day' ? 'night' : 'day'); schedule(); }, 4500);
  }
  function setPlaying(value: boolean): void {
    playing = value;
    setPressed(play, value);
    play.innerHTML = icon(value ? 'pause' : 'play');
    play.setAttribute('aria-label', value ? '暂停日夜演示' : '自动演示日夜切换');
    schedule();
  }
  document.addEventListener('visibilitychange', schedule, { signal: abort.signal });
  return { panel, inspector, onUpdate: (callback: () => void) => { onUpdate = callback; }, getCode: () => `import { WeatherCard } from './src/components';\n\nconst weather = new WeatherCard({\n  mode: '${weather.mode}',\n  data: ${JSON.stringify(demoWeather, null, 2).replaceAll('\n', '\n  ')},\n});\nmount.append(weather.element);\n\n// 卸载时调用 weather.destroy();`, setPaused: (paused: boolean) => { weather.setPaused(paused); play.disabled = paused; if (paused) setPlaying(false); }, setActive: (active: boolean) => weather.setActive(active && panel.currentView === 'preview'), stop: () => { setPlaying(false); weather.setActive(false); }, destroy: () => { setPlaying(false); weather.destroy(); abort.abort(); switcher.destroy(); inspector.destroy(); panel.destroy(); } };
}
