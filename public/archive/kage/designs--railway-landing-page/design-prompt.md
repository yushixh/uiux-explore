## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060635-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060083072.webp
- Design on Kage: https://kage.design/designs/railway-landing-page

## Before you start
Ask the user what product they are building, who it is for, and which brand assets they already have (name, logo, colours, typefaces). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product, not a page to copy.

## Page structure
1. **Top nav** — thin dark bar: logo left, 4–5 text links with dropdown carets, secondary link, and a quiet 'Sign in' + one button on the right.
2. **Hero** — full-bleed illustrated backdrop (night sky, stars, gradient horizon, landscape motif) behind a centred serif headline (one confident phrase), a single-line subhead with one highlighted word, two buttons (solid accent + ghost), then a large product-UI screenshot framed as the hero's centrepiece, with a small tab strip beneath it for switching views.
3. **Customer logo wall** — two rows of six cells separated by visible 1px hairlines, logos in muted grayscale.
4. **Feature chapter 1 (headline capability)** — eyebrow tag, serif heading, short paragraph with 'Learn more →', a full-width canvas-style product screenshot (nodes/cards on a dark canvas), then a 3-column blurb row with small icons, ending in an 'Alternative to' icon row.
5. **Feature chapter 2 (split row)** — text left (heading, paragraph, two checklist items: bold line + one grey support line), product screenshot card right; 'Alternative to' row.
6. **Feature chapter 3 (split row)** — same skeleton mirrored, different screenshot.
7. **Feature chapter 4 (full-width visual)** — centred heading, a wide dashboard screenshot composed of a 2×3 grid of chart tiles, then the 3-column blurb row and 'Alternative to' row.
8. **Feature chapter 5 (stacked windows)** — heading + paragraph, overlapping/stacked window screenshots for depth, 3-column blurb row, 'Alternative to' row.
9. **Testimonials** — centred serif heading, one-line intro, three quote cards (logo, quote, avatar + name/role); below it a second serif heading introducing a horizontal row of tweet-style cards with avatars and handles.
10. **Live stats** — serif headline with a large number, one-line support text, then a dense table of rows (label in letter-spaced monospace, value in monospace flip-counter digits with dim leading characters).
11. **Closing band** — a quiet dark band with two or three large media cards before the footer.
12. **Footer** — a 'Featured' column of two announcement cards on the left; six link columns (product, compare, contact, resources, company, legal); bottom bar with logo, an 'All systems operational' status pill, and copyright.

## Design language
- **Canvas**: near-black navy base `#0A0D12`. Mark chapter changes by shifting section backgrounds to tinted darks — deep green `#0C1310` around observability, deep purple `#141020` around dev-workflow — never with hard dividers.
- **Hierarchy**: serif display type for every heading (`clamp(40px, 5vw, 64px)`, tight leading, white `#F5F5F7`); monospace for eyebrows, tags, counters, nav meta (11–12px, letterspaced, often as a small pill with a hairline border); 14–15px sans in muted grey `#9BA1A6` for all body copy. Never centre body copy — centre only headings and CTAs.
- **Chapter rhythm**: every feature chapter follows the same skeleton (eyebrow → serif heading → one-line support + 'Learn more →' → visual → 3-up blurb row → competitor row). Repeat it with alternating layouts (full-bleed, split, stacked) so the page reads as a scannable sequence, not random blocks.
- **Colour discipline**: one saturated accent — violet `#7C5CFF` — reserved for the primary button and status dots; green `#34D399` only for success/online states; charts may use muted multi-hues (violet, pink, teal, amber) on dark tiles. Everything else is white/grey on near-black.
- **Borders & depth**: hairline borders at `rgba(255,255,255,0.08)` divide grid cells (logo wall) and cards; radius 8–14px on cards and screenshots, fully rounded pills; no drop shadows — depth comes from tint shifts, stacking offsets, and 1px outlines with a faint inner glow on screenshot frames.
- **Density swing**: airy hero and chapter intros, dense data moments (logo wall, chart tiles, counter table) to create contrast down the page.
- **Motion**: hero tab strip swaps the screenshot; stats render as ticking monospace counters; a thin vertical progress rail with dot markers tracks scroll position on the left; hover = underline reveal or arrow nudge; buttons lighten slightly on hover.

## Never
Do not reuse Railway's logo, wordmark, name, the train/mountain hero illustration, its headline copy, customer logos or testimonial quotes, or its dashboard screenshots. Build the same visual language around the user's own brand, product UI and customers.
