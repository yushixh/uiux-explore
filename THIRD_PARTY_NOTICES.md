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
