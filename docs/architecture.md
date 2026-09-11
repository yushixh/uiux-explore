# Daylight UI 的分层与复用

此文件保留 v3 设计记录。2026-09-11 的独立配色、动态组件适配和工作区调整见 [v4 架构](architecture-v4.md)。

依赖方向为：组件库演示 → 独立组件 → 基础控件与共享设计变量。组件不能导入 `library/` 或页面入口。

## 目录与职责

- `src/styles/tokens.css`：Tailwind 主题与共享空间、图标、动效变量。
- `src/styles/primitives.css`：图标和分段选择器的基础样式。
- `src/lib/`：与业务无关的 DOM 与 SVG 图标函数。
- `src/components/`：公开组件接口。WeatherCard、TextField、SegmentedControl 可以分别实例化，可同时存在多份。
- `src/library/preview-panel.ts`：组件预览 / 代码 / 复制 / 重置外壳。
- `src/library/*-demo.ts`：上海示例数据、自动播放、邮箱校验、示例状态等演示逻辑。
- `src/library/layout-inspector.ts`：测量带布局元信息的真实节点，并绘制 SVG 边界。元信息不改变组件排版。
- `src/library/catalog-page.ts`：组件目录、筛选、搜索与检查模式编排。
- `src/main.ts` 与 `src/styles/app.css`：页面启动、卸载与全局基本样式。

## 组件契约

**WeatherCard** 接收 `WeatherData` 和 `DayPeriod`。高低温、两时段天气说明与当地时间均由宿主提供。`setData()` 与 `setMode()` 只更新本实例；它不读页面主题、不启动定时器、不查询页面外的元素。色彩与位移动效由组件 CSS 表达。

**TextField** 接收唯一的 `id`、`name`、标签、原生输入类型、提示、图标和回调。调用方保证同一文档内的 ID 唯一。原生 input 保留在 light DOM 中，支持宿主 form 的提交与 FormData。数据变化通过 `onInput` 回调向外报告；校验策略由宿主决定，宿主通过 `setStatus()` 显示反馈。`setDisabled()` 管理输入与清空按钮的可用性；清空后保留输入焦点。卸载时调用 `destroy()` 解除监听。

**SegmentedControl<T>** 用联合类型限定候选值。外部 `setValue()` 同步显示，不触发 `onChange`；用户操作才回调，因此宿主更新不会形成循环。它复用于天气状态、输入框示例状态和布局检查层级。

## 空间结构

天气卡片的内容区使用真实 CSS Grid：读数行、地点组、弹性留白、底部信息组。读数行由弹性数值列与图标尺寸列组成；底部由天气组与时间组组成。温度的数值与度符号、箭头与温度、定位图标与文本分别拥有局部对齐规则。

输入框组合由标签区、输入区、反馈区组成。输入区是前置图标、弹性输入、清空按钮三列；没有图标时明确变为两列。清空按钮为空时保留占位，避免输入文字的可用宽度跳动。反馈区保留最小一行高度，较长文案可自然扩展。

检查层级对应 `data-layout="container|region|element"`。这些节点就是组件真实的布局节点；通过 ResizeObserver 与文本变化监听重新测量。元素层展示 CSS 行框与 SVG 画布边界，不宣称测得字形轮廓或文字基线。

## 引用方式

在使用 Vite + Tailwind 的宿主中引入基础主题后，从 `src/components` 导入组件。组件自身的 CSS 随入口导入，不需要组件库页面的 app.css 或演示模块。

```ts
import './src/styles/tokens.css';
import { TextField } from './src/components';

const name = new TextField({
  id: 'profile-name', name: 'name', label: '你的名字',
  type: 'text', hint: '用于个人资料展示。',
});
document.querySelector('form')!.append(name.element);
```

基础主题负责全局 reset、字体与 token；组件 CSS 包含关键局部变量的回退值。这里采用原生 DOM + TypeScript，组件本身没有 React/Vue 依赖。

## 页面层重构（2026-09-10）

`main.ts` 只加载样式、创建目录页并注册卸载。页面分为：

- `library-shell.ts/css`：品牌入口、头部操作插槽、主内容插槽和全页几何关系，不认识天气或邮箱。
- `catalog.ts`：组件注册表。一个条目提供 ID、名称、搜索词和工厂，导航与面板名称由同一来源生成。
- `catalog-page.ts`：筛选、搜索、快捷键与布局检查的编排；依赖注册表传入的 ComponentDemo 接口，不直接导入具体演示模块。
- `preview-panel.ts/css`：名称 → 预览或代码 → 状态操作。预览 / 代码复用 SegmentedControl，底部提供 controls 插槽与重置动作，不接收描述文案。
- `demos.css`：天气和输入的宿主陈列约束，支持共同外沿、不同自然高度。
- `layout-inspector.css`：检查模式自身的标注样式。

页面网格沿“页头 / 主区 → 筛选工具栏 / 组件集合 → 面板标题 / 内容 / 操作 → 组件自身分区”建立约束。桌面卡片顶部共线；输入框不再通过附加文案或固定高度填满天气卡片的高度。小屏主区为单列，搜索与筛选重排；没有第二套移动导航。

组件层保持单向依赖。WeatherData.location 变为可选字段；缺席时隐藏地点附属行，保留城市标题。其他公开组件的行为契约不变。

文案审计见 [页面文案审计](content-policy.md)。状态反馈按需显示，设计与实现解释只在项目文档中保留。
