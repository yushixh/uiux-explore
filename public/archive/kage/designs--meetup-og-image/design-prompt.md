## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/meetup-com/dc3478b2-85ef-4f49-990d-d3eb92797114-1789146409089.webp
- Design on Kage: https://kage.design/designs/meetup-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers before generating anything — every choice below is applied to *their* product, not to the reference.

## Deliverable
Produce a single **1200×630 social share card** (Open Graph image) — for example an HTML/CSS file sized exactly 1200×630 that can be screenshotted to PNG, or an inline SVG with the same dimensions. Use the user's brand name and tagline as placeholder copy if they have them; otherwise use neutral placeholder wording.

## Page structure
Layout the canvas as three zones:

1. **Wordmark row (top-left)** — the brand logo mark plus lowercase wordmark in the same near-black as the headline, sitting in the top-left corner at roughly 24–28px height. Nothing else in that row; it anchors the card without competing with the headline.
2. **Headline block (lower-left)** — the focal element: a 3-line stacked statement in lowercase-ish sentence form, each line breaking on a natural word, set left-aligned starting about 35–40% down the canvas. Reserve roughly 1/3 of the canvas on the right and a band at the bottom as intentional empty space.
3. **Inline icon punctuation** — 2–3 small illustrated glyphs embedded directly in the text flow (one before or after a word, one mid-sentence, one before the final word), each roughly 0.8–1× the cap height of the text. They carry the accent colours and the personality; there is no other imagery on the card.

## Design language
- **Hierarchy by scale, not weight-variation**: one wordmark element and one giant headline do all the work. Headline ≈120–150px on a 630px-tall canvas, line-height ≈0.95–1.0, tracking slightly tight (-1 to -2%), so the three lines read as one dense mass.
- **Composition**: everything hugs the left edge; the right ~30% and bottom ~15% stay empty. Deliberate asymmetry makes the card legible at small thumbnail sizes.
- **Colour**: near-white background (#FFFFFF or warm off-white #FAF8F6), near-black ink (#0E0E0E) for all type and logo work, then 2–3 saturated accents appearing *only* inside the inline icons (e.g. orange #ED8C3B, purple #9B87F0, pink #F06D9A — swap for the user's palette). No gradients, no background texture, no shadows.
- **Type pairing**: a single ultra-bold geometric/grotesque sans (700–900 weight) for both wordmark and headline; no second typeface needed at this size.
- **Icon treatment**: hand-drawn feel — organic blob or circular shapes with thick, slightly wobbly black outlines and a soft watercolor/marker fill texture, never crisp flat vector or 3D. Icons sit on the text baseline, aligned optically with the x-height.
- **Motion**: none — it's a static image; ensure the PNG/SVG is crisp at 2× and crops safely in circular previews (keep critical content out of the outer 10% where possible).

## Never
Never use the Meetup logo, the squiggle-'m' mark, the 'meetup' wordmark, the copy 'The people platform', or the specific watercolor compass/people/heart illustrations. Do not present the result as Meetup or reuse its brand red. Build the card for the user's own product with their assets and copy.
