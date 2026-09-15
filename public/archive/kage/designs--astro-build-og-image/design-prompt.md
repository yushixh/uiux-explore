## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/e064bbaa-9564-4de6-aad0-af304596f8d4-1789073665567.webp
- Design on Kage: https://kage.design/designs/astro-build-og-image

## Before you start
Ask the user what product or project the social card is for, who the audience is, and what brand assets they already have (name or wordmark, logo mark, brand colours, typeface). Wait for their answers. Everything below is applied to *their* brand and copy, not to the reference product. Produce a **1200×630** image — e.g. a single HTML/CSS file rendered to PNG at exactly 1200×630, or an equivalent SVG with `width="1200" height="630"` and a `viewBox="0 0 1200 630"`. Use placeholder branding and placeholder copy if the user has none.

## Page structure
This is a single-canvas social card, not a scrolling page. Compose it in three layers:

1. **Background layer** — a near-black canvas (#0c0c14) with a subtle square grid (1px lines at ~5% white opacity, cell ~48px) covering the whole canvas, plus a large soft radial glow of the brand accent colour (violet, ~#4b2fd0 at 30–40% opacity, heavily feathered) anchored at the bottom-left corner so the dark field has depth instead of reading flat.
2. **Left text column** (roughly x 100–700, vertically centered as a stack) — three elements in order, all left-aligned: (a) a small wordmark row near the top of the stack, logo mark plus name at ~44–56px height in bold white; (b) the headline, two lines, ~90–100px: a short phrase in regular weight white, then the key phrase in the same size but heavy weight *and* italic, slightly indented right, so the emphasis shift is the card's focal point; (c) below the headline, a rounded-square app icon ~170×170 with a 2–3px gradient border (accent colour → secondary accent), dark fill, containing a simple face or symbol, placed so it hangs toward the bottom-left of the card.
3. **Right visual field** (roughly x 780–1280, full height) — no text. 9–11 rounded pills (fully rounded caps, ~48–64px tall, 180–460px wide) stacked in loose rows with varied x-offsets, each filled with a single saturated hue from the brand palette (violet, blue, teal, yellow, orange, pink, red, plus one white pill) and blurred with a large Gaussian blur (~20–30px) so they read as glowing abstract content lines; let several bleed off the right edge and crop the top and bottom rows at the canvas boundary.

## Design language
- **Focal hierarchy:** one message, one emphasis trick. The wordmark is small, the headline dominates (~15% of canvas height per line), and the only styling variation within the headline (regular → heavy italic) does the work of ten badges. Keep everything else subordinate.
- **Asymmetric split:** text owns the left ~55%, imagery owns the right ~45%. Never centre the text; the left-aligned stack creates a clean vertical axis for the eye.
- **Colour:** dark base #0c0c14, white type #ffffff, one dominant accent (violet ≈ #7c5cff family) for glow, gradient borders and at least one pill; secondary pills sample 5–7 saturated hues (blue ≈ #4a6cf7, teal ≈ #33d6c8, yellow ≈ #ffc93d, orange ≈ #ff8a3d, pink ≈ #ff4fd8, red ≈ #ff4d5e) but always blurred, so the multicolour area feels like ambience, not clutter.
- **Type:** a geometric/grotesque sans for everything; wordmark in bold, headline at ~90px with tight leading (~1.05) and the italic-bold switch as the single expressive move. No more than two type sizes on the card.
- **Texture and glow:** flat dark surfaces are avoided — always add either the faint grid texture or a large soft glow. Blur is a first-class tool: blur the decorative shapes, never the text.
- **Borders, radius, shadow:** everything decorative is pill-rounded or rounded-square (radius 24–32px); depth comes from outer glow ( coloured box-shadow or blurred duplicates), not drop shadows. Use a 2–3px gradient stroke on the one icon-style element.
- **Motion:** none — this is a static export. Design it so it reads at a glance at ~500px wide (preview-size test: headline and colour field must still be legible).

## Never
- Do not use the reference product's name, wordmark, logo mark, rocket or mascot imagery, or its exact tagline. Invent placeholder branding for the user's product.
- Do not copy the reference copy verbatim; write a headline in the user's voice following the regular-then-italic emphasis pattern.
- Do not add photographs, stock illustration sets, badges, buttons, URLs or a fake screenshot to the card — it stays wordmark + headline + icon + abstract blurred shapes.
- Do not present the result as the reference brand or ship it in the reference's exact colour palette if the user supplies their own.
