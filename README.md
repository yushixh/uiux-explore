# Daylight UI

## 资源库

[本地资源库](http://127.0.0.1:5173/#archive) 聚合七个来源、1,976 个归档条目。左侧独立区分 **组件（98）／设计参考（1,692）／源码与资料（186）**，各区按用途与来源筛选。

组件使用卡片画廊，每张卡片直接操作，并可切换 **原始版／本项目版**；两个版本均在本地运行，切换保留各自状态。源码和 Prompt 从卡片打开，支持复制与下载。原始版使用归档时的原站实现、样式、默认参数和素材；本项目版保留本地演示与适配。Context、静态排版、仅自动播放的示例及尚未接入运行的源码不计入组件。

源码与 Prompt 保存在 `public/archive/`。明确区分完整源码、片段、设计参考和未获取的 Plus 内容。完整范围、缺口、来源与复建方式见 [归档说明](archive/README.md)，检查结果见 [资源库验收](docs/qa-archive.md)。

### 原网页与原作者

以下保留全部七个归档来源的原网页与原站署名（Bencho 的重复输入合并为一项）。站点作者、目录策展人与被收录产品的作者分别记录。

| 来源原网页 | 原作者／团队 | 署名依据与原仓库 |
| --- | --- | --- |
| [Halaska](https://ui.halaska.com/) | [Halaska Studio](https://halaska.com/) | [官方仓库与 LICENSE](https://github.com/Halaska-Studio/ui) |
| [Bencho](https://bencho.dev/) | [Lorenzo Cabra](https://x.com/cabralorenzo) | [原站署名与许可](https://bencho.dev/licence) |
| [Built by Designers](https://builtbydesigners.com/) | 策展：[Juliette / @shedsgns](https://x.com/shedsgns)、[Phil / @PhilHedayatnia](https://x.com/PhilHedayatnia) | 原站 About / Curated by；77 个产品各自的作者见逐项清单 |
| [Torph](https://torph.lochie.me/) | [Lochie Axon](https://twitter.com/lochieaxon) | [官方仓库与 LICENSE](https://github.com/lochie/torph) |
| [Typehug](https://typehug.aliszu.com/) | [aliszu / alexszczurek](https://github.com/alexszczurek) | [官方仓库](https://github.com/alexszczurek/typehug)、包内 LICENSE 署名 aliszu |
| [VantaUI](https://www.vantaui.com/) | [Arete / @theahruhte](https://x.com/theahruhte)、[Zel / @imdenze_l](https://x.com/imdenze_l) | 原站页脚 Created by |
| [Kage](https://kage.design/) | [Chris Gregori](https://kage.design/terms) | 原站 Terms 的运营者署名；被分析的设计归对应产品所有 |

全部 **1,976 个条目的原页面、可核实署名及原产品链接**见 [逐项来源与作者清单](archive/ATTRIBUTION.md)。无法核实的个人设计师明确标注，不以站点运营者代替原设计作者。上游 LICENSE 和版权声明保留原样。

原工作台的五项动态组件来自 [Libraries.dev](https://libraries.dev/)，作者为 [Jakub Antalik](https://github.com/Jakubantalik)；各包原仓库与版权声明见 [第三方说明](THIRD_PARTY_NOTICES.md)。

TypeScript + Tailwind CSS 组件工作区，包含天气、输入框，以及接入 Libraries.dev 的 Border Beam、Thinking Orbs、Gooey、Metal、Image 五项动态组件。

## 快速开始

推荐 Node.js 24（见 `.nvmrc`），最低版本为 22.12。使用 npm 和已提交的 `package-lock.json` 安装依赖：

```bash
npm ci
npm run dev
```

打开 [组件工作区](http://127.0.0.1:5173/)。开发服务器只监听本机，端口固定为 5173；端口被占用时会明确报错。

```bash
npm run typecheck  # 严格 TypeScript 检查
npm run build      # 类型检查 + 生产构建，输出到 dist/
npm run preview    # 本地查看生产构建
```

## 配色与工作区

- 五套配色：日光、海蓝、苔绿、鸢紫、石墨。支持全局选择、单组件覆盖、混合其他方案的辅色，以及独立明暗。
- `ColorScope` 将颜色作为独立能力：CSS 组件继承变量，Canvas / React 适配器订阅同一份颜色；`composePalette()` 可以覆盖任意颜色字段。颜色值使用六位 HEX。
- 换配色保留组件业务状态；外观重置与组件状态重置各自独立。配色选择保留在本次页面会话中，刷新恢复默认。
- 左侧目录与搜索、单组件工作区、右侧外观面板。小屏变为横向目录与上下排列。代码随当前配色和配置更新。
- 动态组件按需加载；天气和输入框仍是原生 DOM。Orb 直接使用官方引擎，其他四项在内部使用 React 适配层；宿主 API 仍为 `element` 与实例方法。
- `MotionController` 统一暂停、不可见、标签页隐藏和减少动态效果。Orb 保留本地动画时间；天气的持续动画使用同一控制。Image 是图像显现效果，不调用生成服务。

```ts
import './src/styles/tokens.css';
import { ColorScope, composePalette } from './src/components';
import { ThinkingOrb } from './src/components/effects';

const mount = document.querySelector<HTMLElement>('#mount')!;
const colors = new ColorScope(mount, {
  palette: composePalette('ocean', { secondary: '#b396d0' }),
  mode: 'light',
});
const orb = new ThinkingOrb({ colors, state: 'searching', size: 64 });
mount.append(orb.element);
// 卸载时：orb.destroy(); colors.destroy();
```

架构与来源见 [新版架构](docs/architecture-v4.md) 和 [第三方说明](THIRD_PARTY_NOTICES.md)。开发服务器的 `/tests/behavior.html` 包含配色、生命周期与低动态集成检查；该检查页不进入生产构建。

滑动选择的实际位移、暂停恢复及窄容器回归见 [Gooey 专项复验](docs/qa-gooey.md)。

## 目录

```text
src/
  components/          # 可复用组件、ColorScope、MotionController
    effects/           # 五种动态组件的适配器
  library/             # 目录、预览面板、演示与布局检查器
  lib/                 # DOM 与 SVG 图标工具
  styles/              # 设计变量、基础样式与页面样式
  main.ts              # 应用入口
public/                # 本地演示图像与站点图标
examples/              # 不依赖工作区的独立组合示例
tests/                 # 浏览器集成检查
docs/                  # 架构、验收与历史记录
```

## 基础组件与通用能力

- 组件筛选、搜索、空结果恢复与搜索快捷键 `/`；手机复用同一套导航。
- 天气：日夜柔光与天体过渡、手动切换、自动演示、暂停与重置。天气均为示例数据。
- 输入：原生 input、关联标签、提示与反馈、清空、焦点、成功、错误、禁用。邮箱校验仅在演示层进行，不提交到外部服务。
- 七个面板共用预览 / 代码 / 复制 / 重置外壳。
- 容器、分区、元素三层布局检查，直接测量真实布局元素。元素层展示行框与图标画布，不表示字形轮廓或基线。
- 支持减少动态效果与窄屏布局。
- 页面文字限于识别、操作、数据与反馈；用途逐项记录在 [文案审计](docs/content-policy.md)。

## 分层与复用

`styles/tokens → lib + 基础控件 → components → library → main`

- 基础组件入口为 `src/components/index.ts`，动态组件入口为 `src/components/effects/index.ts`。
- `WeatherCard` 接收完整天气数据与日夜状态，不内置日夜自动播放定时器。
- `TextField` 接收输入属性与回调，不内置邮箱业务校验。保留原生 form / FormData 行为，ID 由调用方唯一指定。
- `SegmentedControl<T>` 同时服务天气、输入框示例状态与布局检查。
- 预览外壳、布局检查、示例数据、自动播放和目录导航均留在 `library/` 与页面层。
- Shell 只提供页面插槽，Catalog 统一注册组件元信息，CatalogPage 编排筛选与检查；入口不包含具体页面布局。
- 交互实例提供 `destroy()` 清理监听；WeatherCard 的可见性由共享 MotionController 管理，自动切换时段仍由演示层管理。HMR 时销毁实例和全局快捷键监听。

详见 [当前架构](docs/architecture-v4.md)。

开发服务器下访问 `/examples/composition.html` 可以查看一个只引入公共组件与设计变量的独立组合示例：两个天气实例与原生表单。它不引用组件库页面的 CSS 或演示逻辑。

## 验收

运行方式见 [验收入口](QA.md)。浏览器集成页目前包含 25 项检查；它不进入生产构建，也不会由 `npm run build` 自动执行。新版接入与验证见 [v4 验收](docs/qa-v4.md) 和 [Gooey 专项复验](docs/qa-gooey.md)。

[v3 页面重构](docs/qa-v3.md) 与 [v2 组件复用](docs/qa-v2.md) 保留为历史记录，不代表当前功能清单。历史截图仅保留在本地 `artifacts/`，不随仓库分发。

## 范围与仓库约定

天气、笔记、邮箱校验和图像均为本地演示，不提交到外部服务。Image 是图像显现效果，不调用图像生成服务；无 WebGL2 或启用减少动态效果时采用静态显隐。

Image 的独立加载块较大，Vite 构建仍会提示超过 500 KB；该提示不影响构建，不会让首页预先加载整个图像渲染器。

依赖、构建输出、测试截图和本地环境文件均由 `.gitignore` 排除，`docs/` 中保留文字验收记录。更新依赖时同时提交 `package.json` 与 `package-lock.json`。第三方来源与许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
