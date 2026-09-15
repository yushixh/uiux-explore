## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/render-com/205ac90d-5b58-49c9-b2e8-82e226c3af1c-1789073685078.webp
- Design on Kage: https://kage.design/designs/render-og-image

## Before you start
Ask the user what product or announcement the social card is for, who the audience is, and what brand assets they already have (name, logo, colours, typeface). Wait for their answers before writing any code. Everything below is applied to *their* brand, not to the reference product.

Produce the card as a single 1200×630 image — an HTML/CSS file sized exactly 1200×630 (screenshot it to PNG) or a standalone SVG. No scrolling, no responsive behaviour.

## Page structure
- **Canvas**: 1200×630, near-black background with two very subtle radial glows (one cool purple in a corner, one faint teal/green near the opposite edge) — barely visible, just enough to stop the black feeling flat.
- **Wordmark row (top-left, ~64px safe margin)**: small logo mark plus product name, roughly 28–32px tall total, white, sitting alone on one line. It is an anchor, not a focal point.
- **Headline (left column, vertically centred)**: the main message set in three short lines, sentence case, white. Each line breaks on a natural phrase. Occupies roughly the left 45% of the canvas.
- **Tile mosaic (right ~55%, bleeding off top, right and bottom edges)**: a regular grid of square cells with faint outlines. Most cells are empty (background only); roughly 6–8 cells are filled with gradient blocks carrying horizontal bars, scattered in a loose diagonal cluster — clustered but with breathing gaps, never a solid block.

## Design language
- **Hierarchy by subtraction**: one dark field, one big headline, one small wordmark, one decorative zone. Nothing competes; the eye reads wordmark → headline → texture.
- **Colour**: base #0B0B10–#101014 near-black; accent gradient from deep violet ~#4C1D95 to mint/teal ~#6EE7B7 with occasional lime ~#C9F36B bars; all text pure white. Only the tiles carry saturation — background and type stay monochrome.
- **Type**: a single geometric/neo-grotesque sans throughout. Headline in regular (not bold) weight, ~96–110px, line-height ~1.15, sentence case. Wordmark text ~28px, medium weight. No serif, no italics, no all-caps.
- **Tiles**: square cells ~100–110px, 1px borders at rgba(255,255,255,0.07). Filled tiles get a linear purple→teal gradient at varied angles, overlaid with 4–8 horizontal bars of differing widths and thicknesses in mint, teal and lime — evoking log lines or code without showing any real text.
- **Composition rules**: keep all text inside a ~64px safe margin; let only the decorative grid bleed off-edge. Place headline lines flush-left with consistent left edge. Leave deliberate empty zones in the mosaic so it reads as data appearing, not wallpaper.
- **Motion**: none — the artefact is a static image.

## Never
Do not use the reference product's logo, wordmark, name, headline copy, or its exact tile artwork and arrangements. Do not imitate its brand colours exactly if the user has their own palette — map the same structure (dark base + one warm/cool gradient accent) onto their colours. Never present the output as the reference product's card.
