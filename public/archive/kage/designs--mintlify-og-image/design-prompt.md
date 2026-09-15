## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mintlify-com/ec4d52b0-e40d-44b9-80fa-56f32982b39c-1789060079031.webp
- Design on Kage: https://kage.design/designs/mintlify-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo mark, brand colours, typeface). Wait for the answers. Everything below is applied to *their* brand, not to the reference.

## Deliverable
Produce a single **1200×630** social share image (Open Graph card) as an HTML/CSS file sized exactly 1200×630 (renderable to PNG via a headless browser or screenshot tool), or as an SVG with `viewBox="0 0 1200 630"`. Use placeholder branding and copy if the user has none. Ship it as one self-contained file.

## Page structure
1. **Canvas** — full-bleed near-black background covering the entire 1200×630 area, with no border, vignette or rounded corners.
2. **Background line-art layer** — behind everything, a set of large, faint geometric strokes: 2–3 oversized circle outlines (radius roughly 300–500px) partially cropped by the canvas edges, plus 4–6 long diagonal lines running corner-to-corner at roughly 45°. All strokes 1–2px, at very low contrast against the background. Optionally one or two lines slightly brighter than the rest to break uniformity.
3. **Centered brand lockup** — the sole focal element, horizontally and vertically centered: a logo mark on the left and a lowercase wordmark to its right, vertically aligned on a shared optical midline, separated by a gap of roughly 0.5× the wordmark x-height. Nothing else on the canvas — no headline, no URL, no tagline.

## Design language
- **Focal hierarchy:** one lockup, centered, occupying about 40–50% of the canvas width. Everything else is atmosphere. Do not add secondary text; if the user insists on a tagline, keep it small, single-line, low-contrast, well below the lockup.
- **Colour:** near-black canvas `#0A0A0A`; background line strokes `#1E1E1E`–`#242424` (just a few percent above the canvas); wordmark near-white `#FAFAFA`; one saturated brand accent for the mark. In the reference the accent is a green gradient from roughly `#2BC970` (bright end) to `#148C4E` (deep end) — substitute the user's accent, and prefer a subtle two-stop gradient on the mark over a flat fill.
- **Type:** a geometric sans-serif with rounded, friendly terminals, lowercase wordmark, medium-to-semibold weight, slightly tight tracking (-1% to -2%). Wordmark cap-height around 80–110px on the 630px-tall canvas. No display serif, no all-caps.
- **Mark treatment:** the mark is a simple, rounded organic silhouette (leaf/droplet family) that reads at small sizes, sitting optically slightly taller than the lowercase wordmark's x-height so the pair feels balanced. Draw a simple placeholder shape with the accent gradient if the user has no logo.
- **Depth without noise:** background geometry is layered *behind* and *darker* than the lockup — the lockup must never overlap a visibly bright stroke. Line art may bleed off-canvas; the lockup never does.
- **Spacing:** keep a safe margin of at least 80px on all sides for the lockup; the lockup's visual centre sits at the true centre of the canvas, adjusted optically if the mark is visually heavier than the text.
- **Motion:** none — this is a static image.

## Never
- Never reproduce the mintlify name, its leaf mark, its exact gradient values, or any copy or imagery from the reference; the output must carry the user's own brand with placeholder assets if none are supplied.
- Never present the result as the reference product or include its wordmark, logo, or recognizable iconography.
