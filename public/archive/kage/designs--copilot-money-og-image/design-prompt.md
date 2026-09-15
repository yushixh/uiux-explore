## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/copilot-money/a7ba1fa3-51a6-49ec-8178-ada382335631-1789146538881.webp
- Design on Kage: https://kage.design/designs/copilot-money-og-image

## Before you start
Ask the user what product or feature the card is announcing, who it is for, what brand assets they already have (name, logo mark or app icon, brand colours, typeface), and where the card will be shared (X, Slack, LinkedIn, iMessage). Wait for their answers. Everything below is applied to their brand and copy, not to the reference product.

## Page structure
Produce a **single static image at exactly 1200×630** (build it as one self-contained HTML file with a fixed 1200×630 artboard and render it to PNG via a headless-browser screenshot, or produce an equivalent standalone SVG — no external images; every element drawn in CSS/SVG).

1. **Background** — full-bleed deep-navy gradient: radial glow from behind the headline fading to near-black at the corners.
2. **Logo lockup (top-left)** — a rounded-square app icon (approx. 56×56, 16px radius, translucent fill) with the wordmark to its right, vertically centred; both on a 64px margin.
3. **Headline block (left column, ~55% width)** — a three-line maximum display headline, vertically centred slightly above the middle, left-aligned on the same 64px margin. This is the focal point.
4. **Subline (bottom-left)** — one short line naming the platforms or availability, on the same 64px margin, sitting near the bottom edge.
5. **Device cluster (right ~45%)** — two or three device mockups (a phone, a tablet or laptop) rotated 4–8°, overlapping each other, bleeding off the right and bottom edges. Each screen shows a simplified dark-mode mock of the user's product UI: sidebar, a line chart, a few coloured stat elements — abstract shapes, not real screenshots.

## Design language
- **Palette (three text tones max over one background):** background gradient #14345F → #0A1B33 with corners darkening to ~#071022; headline pale ice-blue ~#CBDDF3; wordmark near-white ~#F3F8FE; subline muted steel-blue ~#9CB4D6. Device screens near-black navy #0A1526; UI accents a single brand blue ~#2F7DF6 plus tiny orange ~#E8A33D / green ~#3FBF8F data highlights.
- **Hierarchy is scale alone:** wordmark ~30px medium, headline ~120–135px medium weight with line-height ~1.0, subline ~24px regular. Nothing else competes; there is no middle size step.
- **Type:** one geometric sans-serif throughout (or the user's brand face); no serif, no second family, no italics. Headline may break into three short lines that form a clean left ragged block.
- **Composition:** strict asymmetric split — all text lives in the left 55% on one shared 64px margin, imagery owns the right 45%. Keep all text inside the margins (platforms crop card edges slightly).
- **Depth treatment:** no borders, cards, dividers or text shadows; depth comes only from the background gradient plus soft, large drop shadows under devices (e.g. 0 30px 60px rgba(0,0,0,.45)). Devices have dark bezels and consistent rotation so they read as one cluster.
- **Motion:** none — the output is a static image. Export at exactly 1200×630 (2× optional), sRGB PNG.

## Never
- Never use the reference's name, wordmark, paper-plane logo icon, or the copy "Your money, beautifully organized." or "Available for iPhone, iPad, Mac, and Web".
- Never reproduce Copilot's app screens, its typeface or its exact colour treatment; substitute the user's placeholder brand, copy and drawn-from-scratch UI mocks.
- Never present the result as Copilot Money or imply any affiliation with it.
