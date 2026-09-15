## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/rocketmoney-com/3f5b0bc5-0681-4f2c-b7e0-f64ec40bb9a0-1789146527361.webp
- Design on Kage: https://kage.design/designs/rocketmoney-og-image

## Before you start
Ask the user what product or feature the card is announcing, who the audience is, and what brand assets they already have (name, wordmark, logo geometry, brand colours, typeface). Wait for the answers before designing. Everything below is applied to their brand, not to the reference.

## Deliverable
Produce one **1200×630 social card** image. Build it as a single self-contained HTML file sized exactly 1200×630 (render to PNG via a headless screenshot) or as an inline SVG. Use placeholder branding and copy throughout — a fictitious wordmark, a placeholder headline, and a mock app screen that represents the user's product.

## Page structure
- **Canvas**: 1200×630, flat warm off-white background, no texture or vignette. Two zones: a text column on the left (~55% width) and a device hero on the right (~45%).
- **Wordmark** (top-left, ~64px margin): logo mark + wordmark lockup in the brand accent colour, roughly 44px tall. Anchors the top-left corner of the safe area.
- **Headline** (below wordmark, generous gap): the value proposition in two short lines, the largest type on the canvas. Keep it left-aligned and ragged-right.
- **Feature bullets** (below headline, ~40px gap): three short benefits, each a small round bullet + text, indented from the headline edge. Gray, noticeably smaller than the headline.
- **Device mockup** (right zone): a smartphone rotated ~30° clockwise, top-right corner pushed toward the upper-right and the bottom cut off by the canvas edge. Screen content, top to bottom: a saturated brand-colour status header (time, date, gear icon), a white summary card with a big number and a small line chart, a secondary benefit row, then a list section with 3–4 labelled rows. The phone bleeds off the edges so only ~70% of it is visible.
- **Safe area**: keep all meaningful text inside the left ~60% and 48px+ from every edge so platform UI and cropping never clip it.

## Design language
- **Hierarchy by scale, not decoration**: wordmark (medium) → headline (huge, two lines, tight leading ~0.95) → bullets (small). Exactly three type sizes on the canvas; no subheads, no captions.
- **Colour discipline**: one saturated brand colour owns the outside of the phone (~#E02B4C crimson red on a ~#F1F1EF warm-gray canvas); the headline is near-black ~#1A1A1A; bullets ~#6B6B6B. All other colour (chart purple ~#6C5CE7, success green ~#2FA36B) lives *inside* the device screen, so the mockup reads as the energetic object and the text stays calm.
- **Type**: a single bold geometric-grotesque sans for everything. Headline ~76–84px bold; wordmark ~44px bold; bullets ~28–30px regular weight. Sentence case, no all-caps except tiny in-screen labels.
- **Contrast of density**: the left column is airy (big gaps, few words); the screen is dense (numbers, labels, rows). That juxtaposition is the composition — don't decorate the background to bridge them.
- **Device treatment**: near-black bezel, corner radius ~48px, thin subtle drop shadow (soft, low opacity — no glow). The 25–35° rotation and edge-cropping do the visual work.
- **Screen UI realism**: white cards with 16–20px radius on a brand-gradient header; one chart with a coloured line, soft area fill, and a dashed reference line with a marker dot; small-caps gray section labels; right-aligned tabular numerals; one underlined text link. Include a plausible status bar (time, date) so it reads as a real screenshot.
- **No motion** — it's a static share image; express energy only through rotation, cropping and colour.

## Never
- Do not use the Rocket Money name, wordmark, rocket icon, headline copy, bullet copy, or its app screens/figures.
- Do not present the output as Rocket Money or imply affiliation; use the user's own brand (or clearly placeholder branding if they have none).
- Do not add stock photography, illustrations, badges, or decorative background shapes — the composition is type + one cropped device on a flat field.
