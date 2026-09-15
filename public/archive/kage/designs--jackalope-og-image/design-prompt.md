## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/jackalope/9fc9e3fd-285b-4d05-a4b4-8d77be8b9b45-1789192902136.webp
- Design on Kage: https://kage.design/designs/jackalope-og-image

## Before you start
Ask the user what product this card is for, who it is for, and what brand assets they already have: product name, one-line value proposition, domain, brand colours (hex), typeface(s), and any mascot or brand symbol. Also ask what the product's own interface looks like (key screens, nav labels, primary button colour), since the card features a mock of the product UI. Wait for the answers. Everything below is applied to that product's brand, not to the reference.

## Page structure
One static 1200×630 image. Easiest build: an HTML/CSS file with a 1200×630 body, screenshotted at 2× (2400×1260) via Playwright or Puppeteer; or an equivalent hand-built SVG. Zones top to bottom, left to right:

1. **Canvas** — flat warm off-white field, no gradient, ~64px safe margin on the left, bottom and top for all text; only the product panel and decorative lines may bleed off the edges.
2. **Trace layer** — two or three thin (2–3px) rounded lines in the hot accent and a cool secondary, running roughly horizontally with right-angle bends and small ~8px dot nodes, entering and exiting the canvas edges; the top trace passes behind the product panel.
3. **Motif strip** (left half, upper-middle) — a row of 7–9 repeated *outline* silhouettes of the brand symbol, hue shifting from the hot accent through violet to blue, ending in a single *solid* near-black silhouette: a visual “many → one”.
4. **Headline block** (bottom-left) — two lines of ~112px heavy sans, tight leading (~0.95) and tracking (~-0.02em); line 1 in near-black, line 2 in the hot accent, each ending with a period.
5. **Meta line** — the domain or handle in monospace, ~26px, letter-spaced, muted ink, directly under the headline.
6. **Product panel** (right half) — a dark rounded rectangle (radius ~18px), 1px subtle border plus soft shadow, tilted a few degrees with a slight perspective, bleeding off the right and bottom edges. Inside: a top bar with small logo + product name and context switchers; a tab nav row; a page title with a short subtitle; filter tabs with counts; a search field; a prominent accent-coloured primary button; and a four-column board where each column has a header + count and one card showing a title, an author/agent + date meta line, and a status row with an icon and a colour-coded status label.

## Design language
- Hierarchy is built from three mass contrasts only: the huge two-line statement, the dark panel, and the small mono line. Nothing else competes for attention; the motif is mid-tone and recedes.
- Colour palette: warm off-white canvas (#F6F2EA), near-black ink (#141414), one hot accent (#F4560A) reserved for the second headline line, the primary button and one trace; a cool blue-violet (#4F4DE8) as secondary for traces and the motif tail; a violet midpoint (#8B5CF6) in the motif hue ladder; panel surface #18181B with #2A2A2E borders and green/teal status colours (#34D399, #2DD4BF).
- Flat colour everywhere: no background gradients or glows; depth comes only from the dark panel, its shadow, and the trace lines.
- Type pairing: heavy geometric sans for the statement in sentence case with terminal periods (declarative, editorial rhythm); monospace for the domain/meta line; UI text inside the panel at 13–16px. Two families, three sizes maximum.
- Traces behave like a circuit diagram: thin, rounded, orthogonal, with dot nodes marking junctions; they may cross the canvas but never cover text, and they sit behind the panel so the UI stays legible.
- The mock UI must read at card scale: real-looking labels, counts and statuses, generous internal padding, exactly one vivid accent CTA — a believable screenshot, not a wireframe.
- Static asset: no animation; verify the statement and meta line survive platform edge-cropping.

## Never
- Do not reuse the jackalope/rabbit mascot, the copy “Many agents. One workspace.”, the domain “jackalope.dev”, or the names Codex, Claude Code, Grok or OpenCode. Invent placeholder branding and copy for the user's product.
- Do not recreate the reference's exact logo, icon set or screenshot; rebuild a generic mock of the user's own UI instead.
- Never present the result as Jackalope or imply any affiliation with it.
