## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/railway-com/87569956-4268-4c80-9b21-29a75c7f6d8a-1789060086522.webp
- Design on Kage: https://kage.design/designs/railway-og-image

## Before you start
Ask the user what product this social card is for, who the audience is, what one short headline/tagline should appear, and what brand assets they already have (logo/icon file, wordmark, brand colours, brand typeface). Wait for their answers before writing any code. Everything below is applied to *their* brand, not to the reference.

## Page structure
Produce a single **1200×630** image — build it as a fixed-size HTML/CSS page (or one SVG) that can be rendered to PNG with a headless browser or screenshot tool. No scroll, no responsive behaviour; one fixed composition:

1. **Canvas**: full 1200×630 frame, near-black background (#0A0A0F) with a very subtle dot-grid or noise texture (low opacity, ~4–8%) so the black is not flat.
2. **Brand lockup (top-left)**: small icon + wordmark, roughly 28–32px tall, placed ~64px from the top and left edges. Keep it noticeably smaller than the headline.
3. **Headline block (bottom-left)**: the tagline as 2–3 short lines, ALL CAPS, heavy weight (~800), ~90–110px, line-height ~0.95, left-aligned, sitting near the bottom-left margin. This block is static and typographic — no effects.
4. **Product visual (right two-thirds)**: an isometric cluster of 3–4 dark UI cards (e.g. service/deployment cards) arranged on a diagonal flowing from top-right to bottom-right. Let at least two cards crop off the canvas edges — the crop creates depth and implies a larger product.
5. **Connectors**: thin curved lines linking the cards, drawn as SVG bezier paths with a purple gradient stroke, a soft glow/blur filter, and small glowing node dots at endpoints — they should read as a live pipeline/topology.
6. **Card contents**: each card carries a small icon chip, a short label, and a muted status line with a green check — enough detail to look like the real product, not enough to become the focal point.

## Design language
- **Focal hierarchy**: the giant headline owns the left column; the isometric product visual owns the right; the wordmark is the smallest element. Exactly one giant type moment per card.
- **Composition**: split the canvas diagonally — quiet typographic corner vs. busy rendered corner. Use generous margins (~64px) for the type, but let the visual run edge-to-edge and get cropped.
- **Colour**: background #0A0A0F, primary text #FFFFFF, muted text #6D6A75, connector/accent gradient #8B5CF6→#C084FC, status green #34D399. Swap the accent for the user's brand accent if they have one; never use more than two accent colours.
- **Type**: one geometric/heavy sans throughout. Headline 90–110px, all caps, tight leading, slight negative tracking. Card labels ~24–28px medium; status lines ~20px regular in the muted grey.
- **Cards**: 18–24px corner radius, 1px border at rgba(255,255,255,0.08), deep soft drop shadow, isometric feel via CSS `transform: rotate/rotateX` or a skew on a shared group so all cards share one projection angle.
- **Glow and depth**: reserve glow for the connector lines and node dots only — the headline and wordmark stay flat. Layer cards with overlap so the diagonal reads as depth, not decoration.
- **Legibility test**: shrink the render to ~40% and confirm the headline still reads and the accent still pops — OG cards are mostly seen small.

## Never
- Do not use the reference product's logo, wordmark, name, headline copy, or its exact card labels.
- Do not reproduce third-party logos from the reference (e.g. VCS, database, or language icons) — use neutral placeholder icon shapes.
- Never present the result as the reference product; it is the user's own brand applied to this composition.
