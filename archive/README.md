# 公开组件与设计参考归档

快照日期：2026-09-15。8 个输入链接去重后为 7 个来源；Bencho 只归档一次。

网页入口：[本地资源库](http://127.0.0.1:5173/#archive)。内容文件位于 `public/archive/`，生产构建会一同复制，源码与 Prompt 浏览不需要原站在线。

## 原网页与原作者

七个站点的原网页、作者／团队、个人主页及署名依据完整保留在 [项目 README 的来源表](../README.md#原网页与原作者)。全部 1,976 个条目的原页面及已公开署名见 [逐项来源与作者清单](ATTRIBUTION.md)，包括 Built by Designers 的 77 个产品作者，以及 Kage 已收录的原产品链接。

目录策展人和站点运营者不等于原产品设计师。无法核实的个人作者明确标注；不补造姓名。来源去重、分类聚合和本地预览均保留原作者归属，上游 LICENSE 与版权声明保持原样。

## 实际收录

| 来源 | 目录条目 | 已保存内容 | 缺口 |
| --- | ---: | --- | --- |
| [Halaska](https://ui.halaska.com/) | 138 | 官方完整仓库、当前完整 Kit JSX、类型声明、LLM API 文档；按组件/模式导出建立索引 | 未公开独立的逐组件生成 Prompt |
| [Bencho](https://bencho.dev/) | 29 | 12 套完整 TSX/CSS、12 份原站模板 Prompt；另 17 项设计代码片段和公开网页 JavaScript 运行实现；29 项全部可本地交互 | 17 项未提供作者原始 TSX 包，已从公开构建产物接入预览；6 份设计片段是原始模板函数 |
| [Torph](https://torph.lochie.me/) | 26 | 完整官方仓库；React、Vue、Svelte、TypeScript 四个实现入口及 22 个官方示例 | 未公开组件生成 Prompt |
| [Typehug](https://typehug.aliszu.com/) | 4 | 完整官方仓库；core、pl、en、all 四个包及文档 | 排版工具库，不是视觉组件集合；未公开生成 Prompt |
| [Kage](https://kage.design/) | 1,615 | 1,358 个组件参考和 257 个整页设计的原文 Prompt、分类、来源和父子关系 | 原站不提供这些参考产品的组件源码；参考图保持原站 URL |
| [Built by Designers](https://builtbydesigners.com/) | 77 | 去重后的完整公开产品目录、说明、作者、产品 URL、参考图 URL | 产品目录未提供统一的组件源码或 Prompt；未递归抓取这些外链产品 |
| [VantaUI](https://www.vantaui.com/) | 87 | 12 个明确免费组件的公开 Manual 源码、CSS、用法与安装说明；完整组件/区块目录 | 75 个 Plus 条目仅保留元信息，按用户指示未获取付费内容 |

合计 **1,976 个条目**：192 个源码入口、17 个片段、1,615 个设计 Prompt 参考、77 个产品参考、75 个 Plus 条目。

**1,639 份 Prompt 文件** = Kage 1,615 + Bencho 12 + VantaUI 12。VantaUI 的 12 份是原站 `buildChatPrompt` 的“阅读该页面并回答问题”模板，不能理解为重建组件的详细设计 Prompt。Halaska 的 `llms.txt` 单列为 API 文档，不计作组件 Prompt。

## 层级与聚合

- 工作台和资源库是两个模块。原有七个组件仍在工作台。
- 左侧首先区分组件（98）、设计参考（1,692）、源码与资料（186）。组件区只收录有实际操作入口、且本项目版和原始版都能本地运行的示例；再按用途与来源聚合。
- Kage 使用站点地图中的规范组件类型分类，完整保留“整页 → 内部组件”的父子关系。整页是顶层条目。
- 卡片直接显示组件；源码、Prompt、关联条目在弹窗查看，没有固定列表与详情双列。Torph 聚合为一张 TextMorph 卡片，其他框架源码仍独立关联。相同用途不等于源码相同，不把不同作者实现合并丢弃。
- 每个条目有稳定来源 ID。全量源码和 Prompt 分别计算 SHA-256；本快照没有发现完全相同的条目。共享 Halaska Kit 使用导出名区分组件，避免把同一文件里的 138 个导出错误合并。

## 文件与复建

```text
public/archive/
  index.json                 # 网页索引：来源、类型、关联、文件路径、状态
  integrity.json             # 全文件字节数与 SHA-256
  library-records.json        # 四个源码库 + 产品目录的提取结果
  reference-records.json      # Kage/VantaUI 公开页面提取结果
  crawl-report.json           # 1,701 个站点地图详情页，全部成功
  halaska/                   # Kit、LLM 文档、完整 upstream/
  bencho/                    # 逐组件源码、CSS、Prompt、片段、LICENSE
    runtime/                 # 公开构建产物的静态提取、运行适配、字节区间和来源哈希
  torph/upstream/             # 完整官方仓库
  typehug/upstream/           # 完整官方仓库
  kage/                      # 逐条原文 Prompt 和元信息
  builtbydesigners/           # 产品目录与逐项元信息
  vantaui/                   # 免费组件原始文件路径、Prompt、目录
  previews/                  # 98 张双版本组件卡片、字体、变体索引；另保留基础演示文件
archive/
  sources.json               # 来源地址、采集方式与快照时间
  snapshots/                 # 提取输入压缩快照 + 哈希清单
  evidence/                  # 可恢复抓取缓存（不入 Git）
```

完整仓库源码、许可和文档保持原样。下载来源见 `sources.json`；快照的散列校验见 `snapshots/manifest.json`。没有伪造仓库 commit；该版本以实际下载内容哈希固定。

```bash
npm run archive:restore                 # 无网络，恢复库提取所需原始输入
node scripts/extract-libraries.mjs      # 仅解析 JS 字面量，不执行下载的脚本
node scripts/extract-vanta.mjs          # 从公开 Manual 的 DOM 文本恢复文件
npm run archive:previews                # 静态提取 Bencho 运行实现，再编译本地预览
npm run archive:index                   # 重建索引与完整性清单
npm run test:archive                    # 完整性、关系、计数、源码语法检查
npm run build
```

Kage 采集器 `python3 scripts/crawl-references.py` 按已保存站点地图读取全部组件/整页详情，支持缓存续跑、6 个并发、失败重试与失败报告。缓存恢复后可再次联网抓取；它不会自动替换站点地图为“最新版本”。更新快照需要先明确更新发现入口和版本记录。

VantaUI 官网 `/r/...` 接口未登录返回 401；免费详情页给出的公开 registry 域名本次连接超时，因此通过网页可见的 Manual 内容提取 12 项源码。原始行内容保存在压缩 DOM 快照中；没有从登录态、隐藏变量或付费接口提取源码。

## 预览和使用边界

- **98 张可操作组件卡片**：Bencho 29、Halaska 68、Torph 1，每张都有不同 URL 的本项目版和原始版。`previews/variants.json` 是准入清单；`manifest.json` 的 131 个基础演示文件还包含工具与静态样例，不等于组件数。
- Bencho 原始版：从固定 SHA-256 的公开 bundle 静态选取组件与完整依赖闭包，保留原始 React、动效库、图标实现、默认参数、嵌入配图、SVG 滤镜及原站 CSS、Inter 字体。`exact-provenance.json` 记录字节区间，依赖替换为空。去掉原站目录与应用启动部分，按原站浅色、light fill、flat surface 展示。
- Bencho 本项目版：12 项来自公开 TSX/CSS，其中作者图片空桩使用本地占位图；另 17 项使用依赖适配后的运行实现。Create menu 的键盘与 Escape 增强仅在本项目版。原始版没有占位素材或此类增强。
- Halaska 原始版：使用已归档完整 Kit 中的原组件、原站示例参数和状态处理、默认 `#555555` accent、原始 Geist / Geist Mono 字体；只摘出当前组件的演示内容，原文件不改写。35 个可操作模式也使用原组件。ContextSources、ToolStream、Taskboard 这三个只有静态/自动播放内容的模式归入资料。
- Torph 原始版：原仓库 `site/src/surfaces/demos/control.tsx` 的 Spring 可操作示例，原 SCSS、Inter / SN Pro 字体与 `web-haptics@0.0.6`。本项目版保留文字切换示例；其他框架源码可在关联资料中查看。
- 字体及来源清单位于 `previews/fonts/`；原始组件没有运行时远程素材请求。每个预览运行在仅允许脚本的 sandbox iframe 中。使用已核实的公开源码编译，不在应用中动态执行归档文本。
- 原始版对应 **2026-09-15 归档快照**；组件周围的目录导航与页面排布属于本地画廊。未声称与原站今后的更新自动同步，也未完成所有组件、所有状态的逐像素截图比对。
- Kage 和 Built by Designers 参考图保留远程地址，需要联网；图像不可用时仍可查看本地元信息和 Prompt。
- 归档文件不是许可证授权声明；MIT 库保留 LICENSE，其他来源保留原站条款和作者归属。未公开内容明确标记，不以示例占位代码冒充原站源码。

验证记录见 `docs/qa-archive.md`。
