## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/cc604ab0-0b69-48f6-88cd-d3d22c48efa6-1789073659558.webp
- Design on Kage: https://kage.design/designs/prisma-og-image

## Before you start
Ask the user what product or announcement this card is for, who will see it (X/Slack/LinkedIn shares), the exact headline copy it must carry, and which brand assets already exist (logo mark, wordmark, brand colours, typeface). Wait for the answers before designing. Everything below is applied to *their* brand — the reference composition is the template, not the content.

## Page structure
Produce a single static image at exactly **1200×630** (e.g. an HTML/CSS page of that size rendered to PNG, or an SVG). No scrolling, no sections — one canvas with four zones:

1. **Canvas** — flat near-white background with a barely-perceptible warm tint. All content lives inside ~72px safe margins.
2. **Logo lockup (top-left)** — a small geometric mark (~40px) beside the wordmark in a medium-weight sans, total lockup height ~40–48px, anchored at the top-left safe margin. It is the smallest branded element on the card.
3. **Headline (left-centre)** — the one message, left-aligned in three short lines, starting around 35–40% down the canvas. This is the largest element by far and occupies only the left half of the canvas.
4. **Accent diagonal (lower-right)** — 3–4 parallel colour stripes (~28–36px tall each, hard edges, no radius) running at roughly a 12–15° upward slope, bleeding off both the right and bottom edges. Behind them, a soft blurred radial glow in the warmest accent colour (heavy blur, low opacity) warms the mid-canvas. The upper-right quadrant stays completely empty.

## Design language
- **Focal hierarchy:** mark → headline → accent. The mark whispers, the headline shouts, the stripes gesture. Never add secondary copy, buttons, URLs or avatars — one idea per card.
- **Type:** one geometric sans family throughout. Headline at ~96–110px, medium-to-semibold weight (500–600), tight line-height (~1.05), sentence case, broken into 2–3 short lines with a ragged right edge. Wordmark ~32–36px in the same family so the card feels like one voice.
- **Colour:** near-white canvas (#FAF9F6), headline in a warm near-black grey (#3A3A38), and brand colour confined to the mark plus the stripe band — three or four saturated hues (teal ≈ #40CFC5, yellow ≈ #F8C84A, coral ≈ #F86B60, with a softer pink if a fourth stripe is needed) in adjacent parallel bands. Accent hues must not appear anywhere else on the canvas except the glow.
- **Shape and edge:** stripes and the mark share the same diagonal energy — the mark's internal colour fields echo the stripe angle. Everything is hard-edged except the glow, which uses a large-blur, low-opacity radial gradient. No borders, no card shadows, no rounded containers.
- **Legibility:** the card must survive at ~600px wide in a chat preview — headline still readable, lockup still recognisable, stripes still distinct. Keep the headline within the left 60% so the accent never competes with it.
- **Motion:** none — this is a static asset. Deliver as PNG (or SVG) at exactly 1200×630.

## Never
- Never reuse the reference product's name, wordmark, logo mark, headline copy or its exact stripe palette as if it were the user's brand — substitute the user's own (or clearly placeholder) branding and copy.
- Never add photography, screenshots of the product, or decorative icons; the composition works on type, space and one diagonal accent alone.
- Never present the output as the reference product's card.
