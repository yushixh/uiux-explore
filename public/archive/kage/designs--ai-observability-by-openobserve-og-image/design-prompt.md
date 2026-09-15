## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/eefaaee1-edc7-4bb9-b05e-05d601caf612-1789106451293.webp
- Design on Kage: https://kage.design/designs/ai-observability-by-openobserve-og-image

## Before you start
Ask the user what product or brand this social card is for, who the audience is, what copy must appear (name, optional tagline), and what brand assets already exist (logo mark, brand colours, typeface). Wait for the answers before building — everything below is applied to *their* brand as placeholder-safe output, never to the reference product.

## Canvas structure
- Produce a **single image at exactly 1200×630** — either a standalone SVG with `viewBox="0 0 1200 630"`, or a single HTML file with a fixed 1200×630 container rendered to PNG (e.g. Playwright/Puppeteer screenshot). Deliver an image file, not a web page.
- **Background layer:** one base fill plus four large blurred radial blobs anchored to the corners, so the edges carry colour and the centre stays near-white.
- **Focal layer:** one centred lockup (symbol + wordmark) sitting on both the horizontal and vertical midlines. If the user supplies a tagline, add one short line centred beneath the lockup with wide letter-spacing.
- Nothing else. No URL bar, no badges, no secondary panels — the card is one focal statement with generous negative space (≥35% of the canvas empty).
- Keep all content inside ~96px margins; nothing critical within ~60px of an edge so platform crops never clip it.

## Design language
- **Composition rule:** exactly one focal element, optically centred, occupying no more than ~60% of canvas width. Hierarchy comes from contrast and scale, not from stacking multiple messages.
- **Gradient recipe:** base `#F5F2EF`. Corner blobs: mint `#D7F0E4` (top-left), lavender `#E2DDF6` (top-right), peach `#F8D8C8` (bottom-right), pale blue `#DCE6F6` (bottom-left). Blur radius 150–200px at ~85% opacity so the blobs bleed into the base with no hard edges. Vary these hues to the user's brand but keep the pastel-light, low-saturation register.
- **Ink treatment:** wordmark in near-black `#2A2523` with a subtle linear-gradient fade toward a warm umber `#6E534A` at the lower-right — the single place the dark type and pastel field interact. Flat, no drop shadows, no outlines.
- **Symbol treatment:** a circular badge ~150px diameter (~12.5% of canvas width): a ring built from 3–4 solid brand-colour segments enclosing a white inner disc; inside the disc, one simple black line-glyph of the user's choosing (a waveform, spark, or other domain symbol drawn as clean strokes). ~45px gap between symbol and wordmark.
- **Type:** lowercase geometric sans-serif, semibold, tight tracking (−1% to −2%), scaled so the wordmark's letter height is roughly one-sixth of canvas height (~100px). No all-caps, no serif, no more than two type sizes on the whole card; any tagline sits at ≥32px with wide (+8%) tracking.
- **Legibility rule:** dark-on-pastel only. Downscale the finished card to ~300px wide and confirm the name is still instantly readable — that is the acceptance test for this composition.
- **Depth:** softness comes only from the blurred background; the foreground lockup is perfectly flat and crisp.

## Never
- Never reproduce the reference product's name, wordmark, its multicolour ring-with-heartbeat mark, or its exact pastel palette — build the same composition with the user's own branding and placeholder copy.
- Never present the output as the reference product, and never add logos, photography or illustration beyond what the user supplies.
