# 配色与动态组件（2026-09-11）

页面依然遵循 styles / lib → components → library → main。与 v3 的区别是引入独立配色能力、统一动效控制和可延迟加载的第三方适配器。网站从两项扩展为七项，页面采用目录 + 单组件预览 + 外观面板；组件实例按首次访问创建，切换时保留状态并暂停隐藏实例。

## 配色

`components/color-scope.ts` 包含配色数据、`composePalette`、`resolveAppearance` 和 `ColorScope`。Palette 不包含业务状态、组件尺寸或动画参数。每个预设提供主色、辅色、亮色，并解析出背景、文字、边界和语义状态色。自定义值使用六位 HEX。

`ColorScope` 把 `--ui-*` 写在宿主节点，并向需要直接颜色值的渲染器发送更新。子作用域可以单独继承或覆盖配色、明暗。`setPalette(undefined)` 恢复继承，`destroy()` 解除订阅并恢复原有变量。没有模块级“当前组件配色”单例。

演示页有一个全局作用域，每个 `PreviewPanel.stage` 是子作用域。右侧“混合辅色”从另一方案组合 secondary / highlight；这些覆盖不会修改原始预设。成功 / 错误继续使用独立的 positive / negative 字段。

天气将日夜氛围中的色值映射到配色变量，同时保持各时段文字对比。输入框的焦点、选区、表面与边界使用语义变量；新增 compact / comfortable 尺寸。

## 五项接入

| 本地公开类 | 官方实现 | 适配方式 |
| --- | --- | --- |
| ThinkingOrb | thinking-orbs/engine | 官方九种几何 + 本地双色深度着色 + MotionController 时钟；20 / 64 两个已验证的预设 |
| BorderBeam | border-beam | 官方五种形态；本地变量控制颜色层，原生内容通过 NativeContent 接入 |
| Gooey | liquid-gooey | 官方 Morph / Move；原生按钮语义，独立轮廓与清晰内容层 |
| LiquidMetal | metal-fx | 官方金属材质；每实例的 SVG 色阶只作用于材质与辉光，原生内容不滤色 |
| ImageGeneration | img-fx + three | 官方三种像素效果、手动显现与重显现；减少动态或无 WebGL2 时使用静态显隐 |

`components/effects/index.ts` 为动态组件公开入口；核心 `components/index.ts` 保持不加载 React。演示工厂分别动态导入单项适配器，Image / three 仅访问图像组件时加载。React 仅是四个官方组件的内部运行时，既有页面和原生组件没有迁移到 React。

官方 npm 包与仓库 main 的功能存在差异，因此接入以实际安装版本的类型与浏览器行为为准。没有修改 node_modules。来源及版本记录在根目录第三方说明。

## 动效与清理

`MotionController` 独立跟踪调用方的 paused、active、IntersectionObserver 和系统 reduced-motion。Orb 积累局部 elapsed 时间，暂停 / 切换速度不会跳到系统时钟的新相位。颜色更新可以重画当前帧而不推进时钟。

ReactSurface 管理 React root、颜色订阅、可见性与 pause props；CSS 光束的动画通过作用域暂停。Gooey 在没有运动时由上游引擎休眠，减少动态时采用零时长状态更新。天气保留 CSS 过渡，并在隐藏时暂停太阳持续旋转；演示的日夜自动播放仍由 library 层管理。

Image 的实际图像是本地 `sample-landscape.svg`，只是演示素材。减少动态模式允许立即显现 / 收起，不需要执行粒子过渡。

Image 重显现后的延迟由适配层管理，上游仅负责材质重组。暂停时保存剩余时长，恢复后继续；这避开上游暂停会清除自动显现计时器的问题。销毁时同时取消本地计时器。

布局检查测量 DOM 容器 / 区域 / 元素。Canvas 内部粒子不伪装成可测量的 DOM 元素。动态插入通过已有 MutationObserver 重测。

## 验证

`tests/behavior.html` 通过开发服务器运行，验证颜色继承与覆盖、混色、原生 FormData、业务状态保留、Orb 暂停 / 恢复、模拟系统低动态事件、图像静态显隐、销毁恢复样式。系统偏好模拟仅存在于该测试页。正式页面不替换浏览器 API。

独立组合页 `/examples/composition.html` 展示两张天气卡片及原生表单各自不同的作用域，不依赖工作区 CSS。
