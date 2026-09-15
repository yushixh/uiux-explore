# 验收入口

## 运行检查

```bash
npm ci
npm run build
npm run dev
```

构建会执行严格类型检查，但不会自动运行浏览器检查。启动开发服务器后打开 [集成检查页](http://127.0.0.1:5173/tests/behavior.html)，保持页面可见并等待结束；通过时显示 `25 checks passed`，失败时显示 `FAIL` 与具体检查项。

覆盖配色继承与混合、原生表单、业务状态保留、Orb 暂停恢复、Gooey 的实际液态色块位置、窄容器、文字对比度、模拟低动态模式、图像静态显隐和销毁清理。测试页仅用于开发，不进入生产构建。

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
