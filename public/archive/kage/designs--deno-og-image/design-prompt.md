## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/70192788-83e0-4de0-9957-fbc7dbb97674-1789073667462.webp
- Design on Kage: https://kage.design/designs/deno-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo mark, brand colours, typeface). Wait for their answers before writing any code. Everything below is applied to *their* product and brand, not to the reference.

## Canvas
Produce a single static **1200×630 social card image** — implement it as a fixed-size HTML/CSS document (a `1200×630` container, no scroll) intended to be rendered to PNG, or as an equivalent standalone SVG. Keep every element inside the canvas.

## Composition (top to bottom)
1. **Background**: a vertical gradient from pure white at the top to a pale blue-lavender (`#ffffff → #e8ecf7`) at the bottom. Nothing else decorates the canvas.
2. **Left anchor column (~35% width)**: a small circular logo mark next to a bold lowercase wordmark, followed by a lighter-weight connector phrase (e.g. "is your") — all on one shared baseline, left-aligned with ~100px side inset and vertically centred in the 630px height.
3. **Right stack column**: 8–10 short capability terms of the product, one per line, left-aligned to a common column starting around x≈44% and bleeding to the right edge. Each term is set in the same heavy sans at ~48–56px with line-height ≈1.45. One term per line, no truncation, no wrapping.
4. **Selected row**: the term nearest vertical centre is the message. It sits on a solid accent-colour highlight rectangle — like a text-selection swipe — that starts at the text column and runs full-bleed to the right edge of the canvas, slightly taller than the cap height with a small radius (~6–8px) on its left corners. The term on the bar is near-black and full opacity.
5. **Faded context rows**: every other term is the same size and weight but dimmed by opacity — ~90–100% for the rows adjacent to the selection, stepping down to ~10–15% at the top and bottom edges — so the stack reads like a vertical carousel frozen on the chosen term. Read the whole card as one sentence: wordmark + connector phrase + selected term.

## Design language
- **Hierarchy through opacity, not scale**: all list items share identical size and weight; the selection is expressed only by the accent highlight bar and full opacity. Exactly one focal point per card.
- **Type**: one heavy geometric grotesque throughout (700–800 weight). The wordmark is the heaviest element; the connector phrase is the same family at a lighter weight (~400) and slightly smaller. Sentence-case throughout, tight tracking on the wordmark.
- **Colour**: near-black ink (`#111`) for type, white→pale blue gradient background (`#ffffff → #e8ecf7`), and a single saturated brand accent for the highlight bar (mint green `#3fe081` in spirit — substitute the user's brand accent). Faded text uses opacity of the ink colour, never a separate gray fill.
- **Edges and depth**: no borders, no shadows, no cards. The only radius is the small rounding on the highlight bar's left corners; its right side bleeds off-canvas.
- **Rhythm and density**: airy — roughly 10 lines fill the 630px height with generous whitespace in the left column; density comes from the repeated type, not from boxes.
- **Motion**: none — this is a static export; do not add animation.
- **No photography, illustration, or iconography** beyond the user's own logo mark.

## Never
- No Deno logo, dinosaur mark, "deno" wordmark, or the exact term list from the reference.
- No copy, photography, or illustrations lifted from the reference.
- Never present the result as Deno's card — use the user's brand, placeholder wording, and their accent colour throughout.
