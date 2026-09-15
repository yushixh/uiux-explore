## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/domestika-org/0913f44c-12dc-4316-bfca-0b137dd69489-1789146384773.webp
- Design on Kage: https://kage.design/designs/domestika-og-image

## Before you start
Ask the user what product or brand this social card is for, who it is for, and what brand assets they already have (name, primary brand colour as a hex value, typeface if any, and an optional brand glyph). Wait for the answers — every decision below is applied to *their* brand, not to any reference. If they have no brand colour, propose one saturated hue and confirm before building.

## Deliverable
Produce a **1200×630** social card image (the Open Graph / link-preview format). Build it as either:
- a standalone SVG (1200×630 viewBox, text converted to paths or using a bundled webfont), or
- a single HTML file with a fixed 1200×630 container rendered to PNG (e.g. via Playwright/Puppeteer screenshot).

Use placeholder branding: a placeholder wordmark (or the user's real name once given) and their brand colour.

## Card structure
1. **Background field**: one flat colour filling the entire 1200×630 canvas, edge to edge, no border, no gradient, no texture.
2. **Wordmark block**: the single content element — the brand name set in bold uppercase white type, centred horizontally and optically centred vertically (nudge up ~10–15px above mathematical centre so it reads centred). Target ~55–60% of canvas width; keep ≥64px clear on all sides as a safe margin for platform cropping.
3. **(Optional) glyph integration**: if the brand has a small mark, it may sit within the wordmark itself (e.g. above one letter, replacing an accent) rather than as a separate lockup element.
4. **Nothing else**: no tagline, no URL, no handle, no photography, no secondary blocks. If the user insists on a supporting line, it sits centred below the wordmark in the same white, small and light-weight, and the wordmark scales down slightly to compensate.

## Design language
- **One-element hierarchy**: the wordmark is the only focal point; all recognition comes from colour + type. Reject any element that competes at a similar visual weight.
- **Negative space as the layout tool**: empty background should cover roughly 80–85% of the canvas. Density comes from a single confident element, not from content.
- **Colour treatment**: exactly two colours — one saturated flat brand hue (reference saturation level: something like #F02A10) for the field, pure white (#FFFFFF) for the type. No gradients, no shadows, no strokes, no second hue. Contrast between type and field must be high enough to survive dark-mode and light-mode previews.
- **Type**: a heavy geometric sans (700–900 weight), uppercase, tight-to-normal tracking (−1% to 0), sized so the wordmark spans ~55–60% of the 1200px width. Line height 1 for a single line. If a glyph is integrated into the wordmark, it must match the stroke weight of the letters exactly.
- **Shape and finish**: zero radius, zero borders, zero effects. The card is a flat print-like object.
- **Motion/interaction**: none — this is a static exported image.
- **Testing rule**: verify legibility at 300×158 (small preview size) before delivering; the wordmark must still be readable and the colour field unmistakable.

## Never
- Never reproduce the Domestika name, wordmark, chevron/crown glyph, or any copy from the reference — use the user's own brand name and, if none exists, an explicit placeholder like "BRANDNAME".
- Never present the result as Domestika or imply affiliation.
- Never add stock imagery, illustrations, taglines or extra colours not requested; never ship a gradient background or drop shadow — the language is strictly flat.
