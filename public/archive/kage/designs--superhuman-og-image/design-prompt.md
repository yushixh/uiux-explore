## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/superhuman-com/1f7d17be-24f6-47c6-8058-aed5ff910680-1789060099252.webp
- Design on Kage: https://kage.design/designs/superhuman-og-image

## Before you start
Ask the user what product this social card is for, who the audience is, and what brand assets they already have (product name, logo/icon shape, brand colours, typeface). Wait for the answers. Everything below is a composition system to apply to *their* brand — do not recreate Superhuman.

Produce a single **1200×630 social card** (Open Graph / Twitter summary_large_image size), delivered as an HTML/CSS page rendered to PNG, or as an SVG that can be rasterised. Treat it as a static image: no animation, no interactivity.

## Page structure
1. **Canvas** — one fixed 1200×630 frame, `overflow: hidden`. Mentally divide it into a left brand field (~55% width) and right product zone (~45%).
2. **Background gradient field** — a diagonal gradient sweeping from bright crimson at the top-left (~`#E0331F`) through mid red (~`#C0304A`) down into deep indigo-blue at the bottom (~`#34348F`). Add 1–2 very large, heavily blurred radial glows (white/red at low opacity) to break the flatness, plus subtle noise or a soft blurred blob texture.
3. **Brand lockup (left half)** — vertically and horizontally centred as a block: a white rounded-square app icon (radius ~22% of its size, simple one-colour glyph inside), the wordmark beside it in bold uppercase with wide letter-spacing (~0.06em), then the tagline below as two short centred lines in a light-weight sans at roughly 45% of the wordmark's cap height. White text only; generous space above and below the block.
4. **Product mock (right half)** — a cropped screenshot-like window that bleeds off the top edge and right edge of the canvas (only its bottom-left corner is visible inside the frame). Build it as: a slim browser chrome bar (traffic-light dots, one tab, URL bar), then a light document-style app UI with small realistic text (11–13px), a heading row, and grey body paragraphs with one short phrase softly highlighted.
5. **Floating action card** — overlapping the mock near its lower-left, a white rounded card (radius ~14px, soft drop shadow ~`0 12px 32px rgba(0,0,0,0.18)`) with three stacked rows: a title row with an info icon and check/close/ellipsis affordances on the right; a one-line result sentence where the key value is set in the brand accent colour and bold; a footer row with a small circular icon + label + a muted source count. This card is the focal detail — keep everything else in the mock quieter than it.
6. **Safe zone check** — keep the lockup fully inside the frame with breathing room; only the product mock may bleed.

## Design language
- **Split composition**: saturated brand field on the left for identity, real product UI on the right for proof. The seam between them is organic (the mock overlaps it), not a hard vertical line.
- **Focal hierarchy on the left**: icon → wordmark → tagline, all white, all on one vertical centre axis with tight vertical rhythm between the three elements.
- **Focal detail on the right**: exactly one floating card with accent-coloured key text; the surrounding mock uses grey, low-contrast text so the card pops without a border.
- **Depth by bleed**: cropping the mock off the canvas edges makes a static image feel like a captured moment; never shrink the mock to fit.
- **Colour**: limit to three tones — brand red, deep blue/indigo, white — plus neutral greys inside the mock. Approximate hexes: red `#E0331F`→`#B12B3F`, indigo `#34348F`→`#2B2B7A`, white `#FFFFFF`, mock greys `#6B7280`/`#9CA3AF`, highlight `#EFE9F6`, accent text in the card `#C4271E`.
- **Type**: one geometric/neutral sans family throughout. Wordmark: bold uppercase, ~72–80px, letter-spacing ~0.06em. Tagline: light/regular weight, ~34–38px, line-height ~1.25, sentence case. Mock text: 11–13px, normal weight, greys only. Never more than three sizes on the left half.
- **Radius & shadow**: large radii on the app icon and floating card (~14–22px), near-flat radii on the browser window (top corners only), shadows only on elements that float (the card), never on text.
- **Texture**: the gradient is never flat — one blurred glow and/or grain keeps the red field from banding.
- **Contrast rule**: white text must sit on the darkest part of the gradient; keep the top-right red area clear of small text.

## Never
- Do not use the Superhuman name, wordmark, icon glyph, tagline copy, or the mock document's text; invent placeholder branding and copy for the user's product.
- Do not use real third-party logos, browser tab titles, or UI chrome from named products in the mock.
- Do not present the output as Superhuman or reuse its exact gradient with its identity; it must read as the user's own brand.
