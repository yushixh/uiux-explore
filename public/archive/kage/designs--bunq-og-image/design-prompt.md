## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bunq-com/593eb1f4-83b0-4b17-84e9-adfcb6724ed8-1789146742474.webp
- Design on Kage: https://kage.design/designs/bunq-og-image

## Before you start

Ask the user what product they are building, who it is for, and what brand assets they already have (brand name, primary colours, typeface). Wait for the answers before writing any code. Everything below is applied to *their* brand — the reference composition is only a layout and colour-discipline model. Do not reproduce the reference brand in any way.

Deliver the result as a single **1200×630 social share card**: either an SVG, or an HTML/CSS file with a fixed 1200×630 container that can be rendered to PNG with a headless browser (Playwright/Puppeteer screenshot). No scrolling, no responsive behaviour — it is one fixed-canvas image.

## Page structure

A single static canvas, top to bottom / left to right:

1. **Full-bleed background** — a deep navy vertical (or slightly diagonal) gradient across the whole 1200×630 canvas, darker toward the bottom. Keep ~64px safe padding on all sides for text.
2. **Left text column (~55% width), vertically centred** — the hero zone. A short two-line headline in white, then a supporting paragraph of two to three short lines directly below. Nothing else: no logo lockup needed beyond what the user's brand requires, no buttons, no URL.
3. **Right focal zone (~45% width)** — a photographic or rendered product shot (device, card, object in a hand) anchored to the right edge and bleeding off the bottom-right corner. The product itself carries the brand's saturated accent colours so it reads as the focal point.
4. **Grounding** — one soft drop shadow under the focal object where it meets the canvas; nothing else gets shadow or outline.

## Design language

- **Hierarchy by scale alone.** One dominant headline (~90–100px, extra-bold, line-height ~1.05, two lines max) and one supporting paragraph (~30–34px, regular, line-height ~1.5). No intermediate weights, no labels, no badges — the jump in size does all the work.
- **Colour restraint.** The canvas is essentially monochrome navy: gradient from roughly `#0e3158` at the top to `#081e3c` at the bottom. All text is white `#ffffff`. Allow exactly one saturated colour zone — the product itself (e.g. its screen or surface) — using 3–5 vivid brand hues. Everywhere else stays quiet, so the eye lands on the product first, then the headline.
- **Type pairing.** A single rounded geometric sans throughout (Circular/Manrope/Figtree family feel). Headline in sentence case, tight but not cramped tracking. Supporting copy in the same face at regular weight, sentence case, max ~65 characters per line.
- **Composition rules.** Asymmetric ~55/45 split; text block left-aligned, optically centred vertically; focal object tilted a few degrees and cropped by the canvas edge for depth. Avoid centring everything — the off-balance is what keeps it from looking like a template.
- **Surfaces and effects.** No cards, borders, strokes, gradients-on-elements, or glass. The only depth cue is a soft, wide shadow under the focal object.
- **Motion.** None — this is a static image. Do not add animation for its own sake.

## Never

- Never use the bunq wordmark, the 'BANK OF THE FREE' tagline, the exact rainbow-stripe screen pattern, or any photography from the reference.
- Never present the result as bunq or imply the user's product is bunq.
- Never add copy, claims, or imagery the user did not provide — use their brand name, colours, and type only, with placeholder text clearly marked if assets are missing.
