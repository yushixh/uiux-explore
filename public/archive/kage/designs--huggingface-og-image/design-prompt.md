## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/3b9b40c8-7480-44fb-8849-e2f2d14bca03-1789073699538.webp
- Design on Kage: https://kage.design/designs/huggingface-og-image

## Before you start
Ask the user what product this social card is for, who the audience is, and what brand assets they already have (logo or mark, brand colours, typeface, tagline or headline). Wait for their answers before designing. Everything below is applied to *their* product, not to any reference brand.

## Page structure
Produce a single static **1200×630** social card image (Open Graph / Twitter card), implemented as HTML/CSS rendered to PNG (e.g. with Playwright or `wkhtmltoimage`) or as an SVG. Build it top to bottom as:

1. **Canvas**: a full-bleed light background — white (`#ffffff`) at the top fading into a very subtle cool grey (`#f3f4f6` → `#eceef1`) at the bottom edge. No other decorative elements; the gradient must be barely perceptible.
2. **Focal row (the only content)**: one horizontally centered, vertically centered row composed of two parts with a comfortable gap (~60–70px at this scale):
   - **Brand mark on the left**: a playful round-ish mark, roughly 200px tall, treated as a sticker — white die-cut outline (~8–10px) around it plus a soft, low-opacity drop shadow below so it lifts off the flat background. Use the user's logo if provided; if not, build a simple friendly geometric placeholder (e.g. a rounded shape or smiling abstract form) in their primary brand colour.
   - **Headline on the right**: the product's tagline or positioning line, left-aligned, wrapped to exactly two lines. This is the largest type on the canvas (~88–96px, extra-bold).
3. **Whitespace**: keep the top ~25% and bottom ~25% of the canvas completely empty. The focal row occupies only the middle band.

## Design language
- **Hierarchy by scale, not decoration**: there are exactly two elements — the mark and the headline. No secondary text, no URLs, no buttons, no badges. Contrast does all the work: ~200px mark next to ~90px two-line type.
- **Type**: a single bold grotesque/geometric sans throughout, weight 700–800, line-height tight (~1.05), letter-spacing slightly negative (about −0.02em) so the two lines read as one dense block. Never let the headline wrap to a third line — if the copy is too long, reduce the size until it fits two lines.
- **Colour**: three-tone palette — light neutral canvas (`#ffffff` → `#f0f1f3`), near-black navy ink for the headline (around `#0e1b2e`), and one saturated brand accent colour reserved for the mark (in the reference mood, a warm yellow like `#ffd21e` with a darker `#ff9d0b` secondary tone). The headline never uses the accent colour; the accent lives only in the mark so it pops against the neutral field.
- **Depth**: the flat background stays flat. The only shadow in the composition belongs to the sticker outline around the mark — soft, diffuse, low opacity (`rgba(0,0,0,0.12)`), offset downward.
- **Composition**: center the focal row as one unit; balance mark and text optically, aligning the text block's left edge consistently. Leave asymmetric breathing room rather than padding everything to the edges.
- **Legibility at thumbnail size**: test the render at ~300px wide. If the headline becomes unreadable, increase type weight or contrast rather than adding size to the canvas elements.
- **Motion**: none — this is a static image export. Design for a single frame.

## Never
Do not use the Hugging Face emoji/mascot, its hugging-face mark, its wordmark, its tagline copy ("The AI community building the future") or its exact colour pair as the user's branding. Never present the output as that product — replace all mark, copy and colours with the user's own (or clearly placeholder) assets.
