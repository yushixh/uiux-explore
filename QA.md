# 验收入口

## 运行检查

```bash
npm ci
npm run build
npm test
```

构建会执行严格类型检查，但不会运行浏览器检查。`npm test` 依次执行归档完整性检查和 `scripts/browser-checks.mjs`：后者自行启动开发服务器，在无头浏览器中运行集成检查页与页面回归检查，任何一项失败都会以非零状态退出。浏览器使用 Playwright 自带的 Chromium（`npx playwright install chromium`），未安装时改用本机 Chrome。

也可以手动查看：`npm run dev` 后打开 [集成检查页](http://127.0.0.1:5173/tests/behavior.html)，保持页面可见并等待结束；通过时显示 `25 checks passed`，失败时显示 `FAIL` 与具体检查项。

页面回归检查覆盖：每页单一 h1 与页面标题、明暗两种模式下页面外壳的文字对比度（≥ 4.5:1）与最小字号（11px）、切换模块后保留明暗、资源库两个弹窗居中、源码默认打开作者文件、390 / 360 px 无横向滚动且顶栏明暗切换完整可见。组件舞台与归档预览内部不在对比度检查范围内。

集成检查页覆盖配色继承与混合、原生表单、业务状态保留、Orb 暂停恢复、Gooey 的实际液态色块位置、窄容器、文字对比度、模拟低动态模式、图像静态显隐和销毁清理。测试页仅用于开发，不进入生产构建。

## 当前记录

- [资源库验收](docs/qa-archive.md)：七来源归档、完整性检查、源码/Prompt 浏览与窄屏复验。
- [七组件接入验收](docs/qa-v4.md)：工作区、配色与组件接入。
- [Gooey 专项复验](docs/qa-gooey.md)：滑动选择修复、实际 Browser 操作及新增防回归断言。
- [当前架构](docs/architecture-v4.md)：组件分层和生命周期。

自动断言不代替视觉检查；修改组件后仍应在工作区检查实际运动、键盘操作、深浅模式及窄屏。现有记录未宣称完成 Safari / Firefox 或真实移动设备专项验证。

## 历史记录

- [v3 页面重构](docs/qa-v3.md)。
- [v2 组件独立复用](docs/qa-v2.md)。

这些记录描述对应历史版本，不是当前功能清单。截图仍保留在本地 `artifacts/`、`artifacts/v2/` 和 `artifacts/v3/`，由 `.gitignore` 排除，不随仓库分发。
