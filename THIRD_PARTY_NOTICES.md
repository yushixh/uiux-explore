# Third-party components

Daylight integrates the following MIT-licensed packages by Jakub Antalik. Original copyright notices and licenses are retained in their npm distributions. The local adapter code is in `src/components/effects/`; no package files are modified.

| Package | Installed version | Source |
| --- | --- | --- |
| border-beam | 1.3.0 | https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/border-beam |
| thinking-orbs | 0.3.1 | https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/thinking-orbs |
| liquid-gooey | 0.2.1 | https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/liquid-gooey |
| metal-fx | 2.0.10 | https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/metal-fx |
| img-fx | 0.5.1 | https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/img-fx |

React / React DOM (MIT) provide the internal adapter runtime. Three.js (MIT) provides img-fx's renderer. Exact dependency versions are recorded in package-lock.json.

The local Orb painter follows the upstream ink-ramp approach, extending it to the selected accent / secondary palette while preserving depth order. The geometry is imported from the unmodified published engine. Metal uses a per-instance color transfer over the upstream material rather than changing the library's shared preset singleton.

`public/sample-landscape.svg` is a locally authored geometric illustration used only to demonstrate image reveal. No external image service is contacted.

## Libraries.dev license

Copyright (c) 2026 Jakub Antalik (border-beam, thinking-orbs, metal-fx, img-fx)

Copyright (c) 2026 Jakub (liquid-gooey)

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# 资源归档补充（2026-09-15）

`public/archive/` 保存用户指定的七个站点的公开来源内容。逐站范围与缺口见 [归档说明](archive/README.md)，具体下载地址与提取方法见 [来源记录](archive/sources.json)。

- Halaska、Torph、Typehug 的官方仓库保留在各自 `upstream/`，许可文件保持原样。
- Bencho 的 12 个独立组件源码包使用 MIT，版权归 Lorenzo Cabra；保留 `public/archive/bencho/LICENSE`。图片空桩保留在原始源码中，独立预览使用自制几何占位图。
- VantaUI 只归档免费详情页公开的 Manual 源码；其余 75 项保留目录元信息。沿用原站条款，不把它们标为 MIT。
- Kage 的内容是设计分析与 Prompt；参考图归原产品所有。Built by Designers 是产品参考目录。两者均不代表相应产品公开了源代码。
- `previews/runtime.js` 为上述部分库源码的本地预览构建；第三方依赖的打包许可说明保存在旁边的 `runtime.js.LEGAL.txt`。

Bencho 的另外 17 项本地预览来自公开网页构建产物的静态提取，署名 Lorenzo Cabra；原始 TSX 未取得。提取字节区间、bundle SHA-256、原网址与依赖适配说明保存在 `public/archive/bencho/runtime/provenance.json`，原声明另存为 `original-declarations.js.txt`。这部分保留原站归属并沿用原站条款。

### 本地原始预览补充

- Bencho 的 `runtime/exact-runtime.js` 保留原公开 bundle 中组件及 React、动效、图标等运行依赖，来源和字节区间见 `exact-provenance.json`；作者 Lorenzo Cabra，原网页 https://bencho.dev/。适配版独立保留。
- Halaska 与 Torph 的原始预览沿用各自完整归档仓库的组件和示例；字体下载来源保留在 `public/archive/previews/fonts/`，供离线还原排版。
- Torph 官方示例使用 `web-haptics@0.0.6`；源码中的原作者及各上游许可保持不变。
