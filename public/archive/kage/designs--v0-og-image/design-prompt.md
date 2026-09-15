## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/49505cbf-a650-47cc-87fa-eaa2f3e23d15-1789067363998.webp
- Design on Kage: https://kage.design/designs/v0-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name/wordmark, brand colours, typeface). Wait for the answers. Everything below is applied to their product, not to the reference.

## Page structure
Produce a single **1200×630 social card image** (e.g. an HTML/CSS layout rendered to PNG with a 1200×630 viewport, or a hand-authored SVG — offer both options). Composition, top to bottom:

1. **Full-bleed canvas** — one flat near-black background (#000–#0a0a0a) with no texture, gradient, border or vignette. The empty field is the design.
2. **Wordmark lockup, top-left** — the user's logo or wordmark in pure white, small relative to the canvas (cap height ~28–36px), positioned with generous margins (~72px from top, ~64px from left). It anchors the corner but stays quiet.
3. **Headline, optical centre-left** — one short line of copy on a single row, vertically centred (slightly above true centre reads better) and horizontally starting left-of-centre, so the line sits a touch asymmetric rather than dead-centred. Size ~76–90px, medium/semibold weight, tight tracking. End the line with a **text caret**: a thin vertical bar (~5–6px wide, ~1em tall) immediately after the final period, suggesting a cursor mid-typing.
4. **Nothing else** — no sub-copy, no URL, no illustration, no imagery, no call-to-action. Two elements and a caret total.

## Design language
- **One focal point.** The headline carries ~95% of the visual weight; the wordmark whispers. If the user has more copy, cut it or push it to a second card — density is the enemy here.
- **Extreme type-scale contrast.** Headline ≈80px, wordmark ≈28px — roughly a 1:3 ratio that makes the headline feel monumental on a small card.
- **Monochrome treatment.** Pure black background (#000) with pure white (#fff) type; no greys large enough to matter, no accent colour, no gradients. If the user's brand has an accent colour, allow it in *one* place only (e.g. the caret), never the text.
- **Typeface.** A geometric neo-grotesque sans (Geist/Inter/Söhne class) at medium weight with tight letter-spacing (-2% to -3%); the headline reads as a system UI enlarged, which suits developer products.
- **Space as structure.** Margins of ~10% of canvas width; let the empty black field balance the two elements. The layout is asymmetric: corner-anchored mark, centre-floating line — not a centred stack.
- **The caret is the signature detail.** A 1em-tall thin white bar (optionally with a soft blink in animated variants) reframes the headline as an input being typed, hinting at generative/chat behaviour without saying it.
- **Legibility at thumbnail size.** High contrast, no fine strokes, no elements thinner than ~4px; test the card at 200px wide before shipping.

## Never
- Never reproduce the v0 wordmark, its logo geometry, or its exact copy ('Think it. Build it. Ship it.'). Use the user's brand name and a headline written for their product in the same short, three-beat cadence if it fits.
- Never present the result as v0 or Vercel, and never add photography, illustrations, screenshots or UI chrome to this card — the composition stays type-only.
