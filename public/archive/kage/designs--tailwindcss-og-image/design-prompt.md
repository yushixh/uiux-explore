## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/3d85cbd6-c866-4b9d-9104-acc4bfe514bb-1789073669311.webp
- Design on Kage: https://kage.design/designs/tailwindcss-og-image

## Before you start
Ask the user what product the card is for, who it is for, and what brand assets they already have (name, logo mark, accent colour, fonts). Wait for the answers. Everything below is applied to *their* product — the reference only supplies composition and visual language.

## Canvas
Produce one 1200×630 image, e.g. a fixed-size HTML/CSS page (`width:1200px; height:630px`) rendered to PNG, or a hand-authored SVG. Keep a ~48px safe margin; nothing important within ~60px of the edges because crops vary by platform.

Lay the canvas out in four corner-weighted regions around an empty centre:

1. **Background layer** — near-black blueprint canvas (~#0a0f1c) with a faint isometric/perspective grid (1px strokes at rgba(148,163,184,0.12)) plus a handful of small "×" crosshair ticks sitting on grid intersections.
2. **Focal illustration, centre-left (~55% of width)** — the user's key figure, number or object drawn as flat isometric line art: 1–1.5px white strokes, extruded sides left unfilled, upward-facing faces filled with diagonal hatch lines at ~35% opacity. For a product release this is the version number; otherwise use the product's hero stat or a schematic of the product itself.
3. **Data panel, top-right (~30% width)** — a compact monospace spec table with 1px rgba-white borders: a header row with the project name and build channel, then 3–5 rows of real metadata (e.g. component or language percentages right-aligned), and one oversized numeral (72–96px monospace) in its own cell for the headline figure.
4. **Brand lockup, bottom-left** — small logo mark in the accent colour + lowercase wordmark in white, sitting on the bottom margin.
5. **Axis gadget, bottom-right** — a tiny x/y/z isometric axis sketch with a wireframe cube to reinforce the technical-drawing mood; swap for any small schematic glyph that fits the brand.

## Design language
- **One dark canvas, one accent.** Background near #0a0f1c; all line work and text in desaturated white (rgba(226,232,240,0.65–0.95)); a single brand accent (reference uses sky ~#38bdf8) appears only on the logo mark. No gradients.
- **Blueprint illustration rules.** Wireframe strokes only — no solid fills except 45° hatching on upward faces; modest extrusion depth; objects appear to float with no ground shadow.
- **Type pairing and scale.** Monospace for every label, table cell and numeral (micro labels 11–12px, table rows 13–14px, headline numeral 72–96px); a geometric sans only for the wordmark (~40px). Data is right-aligned within the table for scannability.
- **Composition.** Corner anchoring: illustration centre-left, metadata top-right, brand bottom-left, gadget bottom-right. The centre of the canvas stays empty — the density contrast between the dense spec table and the vast dark field is what creates hierarchy.
- **Flatness.** No shadows, no rounded corners beyond ~2px on the table, no photographic or glossy elements; everything is line art on a grid.
- **Static output.** No motion; the card is a single rendered frame.

## Never
Do not use the Tailwind wave logo, the "tailwindcss" wordmark, the 4.3 version, the TypeScript/Rust/CSS percentage copy, or any other text or iconography from the reference. Do not present the result as Tailwind CSS — the card carries the user's own placeholder branding and copy.
