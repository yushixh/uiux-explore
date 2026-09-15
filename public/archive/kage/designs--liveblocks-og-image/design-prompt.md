## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/liveblocks-io/6cc138af-9823-44f7-94fe-cb6f58bd874b-1789072815096.webp
- Design on Kage: https://kage.design/designs/liveblocks-og-image

## Before you start
Ask the user what product this social card is for, who the audience is, and what brand assets they already have (brand name, wordmark/logo file, brand colours, typeface, and the exact headline they want on the card). Wait for their answers before building. Everything below is applied to *their* product, not to the reference.

## Page structure
Produce a **single 1200×630 social card image** (an Open Graph / Twitter card). Build it as a standalone HTML file with a fixed 1200×630 body (render to PNG via a headless screenshot) or as a standalone SVG at 1200×630. Layers, in order:

1. **Background layer** — full-bleed near-black canvas (`#0A0A0C`) with a subtle noise/grain texture at low opacity and a soft radial vignette that darkens the corners. No gradients brighter than the centre.
2. **Headline block** — the one and only message: a two-line bold sans headline, centred horizontally and sitting slightly above vertical centre (roughly 45–55% down the canvas). Use the user's actual positioning statement, broken over two lines with the second line equal or slightly longer than the first.
3. **Cursor chips** — two small collaborative-cursor elements overlapping the headline's edges at diagonal opposite corners (one lower-left, one upper-right). Each is a small cursor-arrow SVG plus a rounded pill label. One chip uses the primary brand accent, the other a secondary accent. Labels should read as a person's name or a short agent/feature tag relevant to the user's product.
4. **Wordmark lockup** — the user's logo mark + wordmark, small and centred, near the bottom edge (~85% down). Nothing else: no nav, no URL, no border frame.

## Design language
- **Canvas**: exactly 1200×630; keep ~100px safe padding on all sides so nothing clips when cropped by link previews.
- **Hierarchy by scale and value, not decoration**: one dominant element (the headline) at ~90–100px bold, line-height ~1.0, letter-spacing about -1%. Everything else is an order of magnitude smaller — chips ~16px labels, wordmark ~26px equivalent.
- **Colour discipline**: near-black ground (`#0A0A0C`) and pure white (`#FFFFFF`) type carry the card; colour appears *only* on the two cursor chips — e.g. one warm accent (magenta `#EC3D8F`) and one cool accent (lavender `#B9C6F2`), swapped for the user's brand palette. Never colour the headline.
- **Type pairing**: a single bold grotesque sans throughout (one family, two sizes effectively). No serifs, no italics, no all-caps except inside tiny chip labels if the brand calls for it.
- **Chips**: pill/rounded-rect radius ~8–10px, solid accent fill, dark or white label text for contrast, a small rotated cursor-arrow glyph attached at the pill's top-left or bottom-left corner. Chips may overlap the headline slightly — the overlap is what makes the card feel alive.
- **Texture**: grain/noise at ~3–5% opacity over the whole canvas plus a soft vignette; keep it barely perceptible so it reads as depth, not as a filter.
- **Motion**: this is a static image — no animation — but imply motion through the cursors' diagonal placement, as if two people are editing the headline in real time.
- **Composition balance**: diagonal symmetry (chip low-left ↔ chip high-right), centred text axis, and a single small brand anchor at the bottom. Avoid clutter: at most these four layers.

## Never
- Do not use the Liveblocks name, wordmark, logo glyph, or any of its copy (e.g. "Realtime infrastructure for multiplayer apps and agents"); the user's own brand and headline replace them.
- Do not copy the exact chip labels from the reference ("Stacy", "AI") — derive placeholder names/tags from the user's product context.
- Do not reuse the reference's specific colours or typeface as-is; substitute the user's brand palette and font, keeping the same roles (dark ground, white headline, two accent chips).
- Never present the output as the reference product or add its imagery, illustrations, or icon sets.
