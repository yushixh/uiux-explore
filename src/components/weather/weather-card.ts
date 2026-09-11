import { createElement, query } from '../../lib/dom';
import { icon } from '../../lib/icons';
import { MotionController } from '../motion-controller';
import './weather-card.css';

export type DayPeriod = 'day' | 'night';
export interface WeatherPeriod { temperature: number; condition: string; localTime: string }
export interface WeatherData {
  city: string;
  location?: string;
  high: number;
  low: number;
  periods: Record<DayPeriod, WeatherPeriod>;
}
export interface WeatherCardOptions { data: WeatherData; mode?: DayPeriod; paused?: boolean }

const sun = `<svg class="weather-sun" viewBox="0 0 88 88" fill="none" aria-hidden="true"><g class="sun-rays" stroke="#f8bc42" stroke-width="2.4" stroke-linecap="round"><path d="M44 8v7m0 58v7M8 44h7m58 0h7M18.5 18.5l5 5m41 41 5 5m0-51-5 5m-41 41-5 5M30.2 10.7l2.7 6.5m22.2 53.6 2.7 6.5M10.7 30.2l6.5 2.7m53.6 22.2 6.5 2.7M10.7 57.8l6.5-2.7m53.6-22.2 6.5-2.7M30.2 77.3l2.7-6.5m22.2-53.6 2.7-6.5"/></g><circle cx="44" cy="44" r="22" fill="#ffce59"/><circle cx="39" cy="38" r="15" fill="#ffe28c" opacity=".4"/></svg>`;
const moon = `<svg class="weather-moon" viewBox="0 0 88 88" fill="none" aria-hidden="true"><path d="M66.7 54.7A29 29 0 0 1 33.3 17.1 29 29 0 1 0 66.7 54.7Z" fill="#e8edff"/><circle cx="29" cy="48" r="4" fill="#b7c5e7" opacity=".32"/><circle cx="42" cy="61" r="2.5" fill="#b7c5e7" opacity=".35"/></svg>`;

export class WeatherCard {
  readonly element: HTMLDivElement;
  private data: WeatherData;
  private period: DayPeriod;
  private motion: MotionController;

  constructor(options: WeatherCardOptions) {
    this.data = options.data;
    this.period = options.mode ?? 'day';
    this.element = createElement<HTMLDivElement>(`
      <div class="weather-component">
        <article class="weather-card" data-layout="container" data-layout-label="天气容器">
          <div class="weather-atmosphere" aria-hidden="true">
            <div class="day-atmosphere"><i class="warm-blob"></i><i class="coral-blob"></i></div>
            <div class="night-atmosphere"><i class="indigo-blob"></i><i class="blue-blob"></i></div>
            <div class="weather-stars"><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <div class="weather-content">
            <div class="weather-reading" data-layout="region" data-layout-label="读数与天体">
              <div class="temperature-stack" data-layout="element" data-layout-label="温度行框" aria-hidden="true">
                <span class="temperature temperature-day"><span data-value="day"></span><sup>°</sup></span>
                <span class="temperature temperature-night"><span data-value="night"></span><sup>°</sup></span>
              </div>
              <div class="celestial-frame" data-layout="element" data-layout-label="天体画布" aria-hidden="true">${sun}${moon}<span class="star-spark spark-one">✦</span><span class="star-spark spark-two">✦</span></div>
            </div>
            <div class="weather-location" data-layout="region" data-layout-label="地点分组">
              <h3 class="weather-city" data-layout="element" data-layout-label="城市行框"></h3>
              <p class="weather-location-line"><span class="location-icon" data-layout="element" data-layout-label="定位图标">${icon('pin')}</span><span class="location-text" data-layout="element" data-layout-label="地点行框"></span></p>
            </div>
            <div class="weather-spacer" aria-hidden="true"></div>
            <div class="weather-footer" data-layout="region" data-layout-label="天气与时间">
              <div class="weather-conditions">
                <p class="condition-line" data-layout="element" data-layout-label="天气行框"><i aria-hidden="true"></i><span data-value="condition"></span></p>
                <div class="weather-range">
                  <span class="temperature-pair" data-layout="element" data-layout-label="最高温组合">${icon('up')}<span class="sr-only">最高</span><span data-value="high"></span></span>
                  <span class="temperature-pair" data-layout="element" data-layout-label="最低温组合">${icon('down')}<span class="sr-only">最低</span><span data-value="low"></span></span>
                </div>
              </div>
              <div class="weather-time"><span data-value="time" data-layout="element" data-layout-label="时间行框"></span><span class="time-caption" data-layout="element" data-layout-label="时间说明">当地时间</span></div>
            </div>
          </div>
          <span class="sr-only weather-announcement" role="status" aria-atomic="true"></span>
        </article>
      </div>`);
    this.motion = new MotionController(this.element);
    this.motion.setPaused(options.paused ?? false);
    this.update();
  }

  get mode(): DayPeriod { return this.period; }
  setMode(mode: DayPeriod): void { this.period = mode; this.update(); }
  setData(data: WeatherData): void { this.data = data; this.update(); }
  setPaused(paused: boolean): void { this.motion.setPaused(paused); }
  setActive(active: boolean): void { this.motion.setActive(active); }
  destroy(): void { this.motion.destroy(); }

  private update(): void {
    const { data, period, element } = this;
    element.dataset.mode = period;
    for (const mode of ['day', 'night'] as const) query(element, `[data-value="${mode}"]`).textContent = String(data.periods[mode].temperature);
    query(element, '.weather-city').textContent = data.city;
    query(element, '.location-text').textContent = data.location ?? '';
    query(element, '.weather-location-line').hidden = !data.location;
    query(element, '[data-value="high"]').textContent = `${data.high}°`;
    query(element, '[data-value="low"]').textContent = `${data.low}°`;
    query(element, '[data-value="condition"]').textContent = data.periods[period].condition;
    query(element, '[data-value="time"]').textContent = data.periods[period].localTime;
    query(element, '.weather-card').setAttribute('aria-label', `${data.city}天气`);
    query(element, '.weather-announcement').textContent = `${data.city}，${period === 'day' ? '白天' : '夜晚'}，${data.periods[period].temperature} 摄氏度，${data.periods[period].condition}。`;
  }
}
