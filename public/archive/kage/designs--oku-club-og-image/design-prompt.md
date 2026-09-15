## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/oku-club/edcd3c62-2bab-45a9-aa48-9fee66be9b47-1789146207947.webp
- Design on Kage: https://kage.design/designs/oku-club-og-image

## Before you start

Ask the user what product or page this social card is for, who the audience is, and which brand assets they already have (name, wordmark/logo, brand colours, typefaces). **Wait for the answers before building.** Everything below is a design system to apply to *their* brand, not to the reference.

## Output target

Produce a single 1200×630 social card image. Cleanest implementations: a self-contained HTML file with a fixed 1200×630 `.card` element (render to PNG via a screenshot tool / Puppeteer), or a standalone SVG with the same geometry. Everything must stay legible when the card is scaled down to ~450px wide in a chat or link preview.

## Canvas structure

- **Background**: one flat warm paper tone filling the full 1200×630 canvas. No gradient, no border, no footer strip, no URL pill.
- **Text column (left ≈55%)**: a vertically centred, left-aligned block starting ~80px from the left edge. Two stacked elements only: (1) a small brand lockup — compact glyph + wordmark, ~30px tall; (2) ~40px below it, the headline in exactly two lines at ~72–80px — the largest object on the canvas. No subline, no CTA, no domain.
- **Illustration zone (right ≈40%)**: one hand-drawn scene pinned to the right edge, bleeding off the top and right (optionally the bottom). It must never touch or overlap the text column — the empty gutter between text and art is the composition's spine.
- **Bottom-left region**: intentionally empty. Keep ≥120px clear below the headline so the card breathes.

## Design language

- **Hierarchy**: exactly two tiers — lockup, then headline — at a size ratio of roughly 1:2.5–1:3. Sentence case, max two lines, with the line break balanced so both lines are similar width.
- **Type**: one high-contrast old-style or transitional serif for both lockup and headline (regular/medium weight). Headline line-height ~1.05–1.1, normal tracking. No sans-serif anywhere on the card.
- **Colour**: two values only — warm paper `#F7F5F0` (or the user's lightest brand neutral) and ink `#1B1A17` (or their darkest). Text, lockup and illustration all share the same ink. No accent colour.
- **Illustration**: grainy, hand-inked storybook style — rough textured edges, solid ink fills with paper-coloured negative lines, visible brush/crayon grain. The subject should humanise the product's core activity (a person mid-use of the user's product plus its key object), drawn in the same two values.
- **Composition**: asymmetric ≈55/40 split with a clear gutter, art bleeding off at least one edge, text block vertically centred. Generous ~80–100px margins; nothing is cropped except the illustration.
- **Restraint**: no shadows, no cards, no badges, no background pattern. Whitespace is the dominant material — if more than ~55% of the canvas isn't empty paper, simplify.
- **Static by nature**: it's a still image, but sanity-check the headline is readable at ~30% scale before shipping.

## Never

- Never reuse the reference's name, its reading-person glyph, its headline copy, or its illustration. Use placeholder branding and copy from the user's own product.
- Never present the result as the reference product, or copy its wordmark, logo, icon set or imagery.
- Never add gradients, stock photography, or UI chrome (URL pills, buttons, borders) to the card.
