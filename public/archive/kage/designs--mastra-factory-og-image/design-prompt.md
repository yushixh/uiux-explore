## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/851c697c-9bd7-489b-a43b-e735b1bbd525-1789106605727.webp
- Design on Kage: https://kage.design/designs/mastra-factory-og-image

## Before you start
Ask the user what product the card is for, what name/title should appear, and what brand assets (logo/wordmark, colours, typeface) they have. Wait for the answers, then apply this composition to their brand — not to the reference product.

## Goal
Produce a single 1200×630 Open Graph social card image. Implement it as a 1200×630 HTML/CSS block (or SVG) and render it to PNG.

## Page structure
- One full-bleed solid near-black canvas (#0a0a0a), no imagery, gradient or pattern.
- Top-left corner (~64px padding): the brand wordmark with a small geometric logo mark to its left, both in white, wordmark at roughly 32px medium weight.
- Lower-left: the page or product title as the dominant element — bold sans-serif, ~120px, white, sitting on a baseline roughly 90px from the bottom edge, aligned to the same left padding as the wordmark.
- Everything else: empty space. Do not add a third element.

## Design language
- Hierarchy comes purely from scale and position: small wordmark top-left anchors brand, huge title bottom-left carries the message, diagonal negative space does the rest.
- Monochrome only: white text (#fff) on near-black (#0a0a0a). If the user's brand has an accent colour, allow at most one subtle accent use, never on the title.
- Single geometric sans-serif throughout; wordmark ~32px medium, title ~120px bold, tight tracking on the title.
- Flat colour, no shadows, borders, radii or effects. Safe margins of at least 64px so text survives crop previews.

## Never
- Do not reproduce the mastra name, its dotted logo mark, or the word "Factory" as the title unless that is the user's actual content. Use placeholder branding and copy.
