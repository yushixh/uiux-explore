## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/typewise-nova/54678855-8aae-4788-9709-311864128f8b-1789106443713.webp
- Design on Kage: https://kage.design/designs/typewise-nova-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo/symbol, brand colours, typeface). Wait for their answers. Everything below is applied to *their* product and branding — not to the reference.

## Deliverable
Produce a single **1200×630 social card image** (Open Graph / Twitter / Slack preview). Best done as a standalone HTML/CSS file sized 1200×630 that can be screenshotted to PNG, or as an SVG with equivalent geometry. Use placeholder branding and placeholder copy unless the user supplied real ones. Design for legibility at small preview sizes: nothing critical inside the outermost 60px safe margin, and expect the corners to be cropped on some platforms.

## Page structure (canvas zones, top to bottom)
1. **Logo lockup zone (top-left, ~90–110px margins)** — a compact horizontal lockup: a rounded geometric badge (~70px) containing a simple monogram, followed by the wordmark in white semibold. This is the only brand furniture on the canvas.
2. **Headline zone (lower-left, starting ~55–60% down the canvas)** — the value proposition set as two lines, left-aligned, ragged right, occupying roughly the left two-thirds. This is the focal point.
3. **Decorative arc zone (top-right and bottom-left corners)** — thin luminous curved strokes that enter and exit the canvas edges, sweeping through the corners. They never touch the type or logo.
4. **Negative space** — the entire centre and right-centre of the canvas stays empty dark canvas. Do not fill it.

## Design language
- **Canvas**: near-black with a faint blue cast (approx. `#05070E`–`#070B14`). Flat, no noise, no vignette patterns beyond the arc glows.
- **One accent colour**: an electric royal blue (approx. `#2E6BFF` for solid fills, ramping to `#7EB0FF` at the brightest point of glows). It appears in exactly two places: the logo badge and the arcs. Everything else is white (`#F5F7FA`) on black.
- **Hierarchy by scale, not weight variety**: one sans-serif family throughout. Wordmark ~40px semibold; headline ~90–100px medium with slightly tight line-height (~1.1) and normal letter-spacing. No more than these two type sizes on the card.
- **Arcs as the only ornament**: 1–2px core strokes with a soft outer glow (blur/gaussian spread in blue), plus a subtle wide gradient falloff. They follow one consistent diagonal flow (top-right to bottom-left) so the composition reads as a single gesture. At most two or three arcs total.
- **Alignment discipline**: everything left-aligned to the same vertical axis; the logo and headline share the left margin. The right side of the canvas is deliberately sacrificed to darkness and the arc.
- **Contrast strategy**: pure white type on near-black for maximum thumbnail legibility; no text over glow areas.
- **Motion**: none — this is a static export. Any hover/animation the agent adds outside the export must not alter the 1200×630 composition.

## Never
Never reproduce the Typewise name, the "tw" script monogram, the hexagonal badge shape, the exact copy "AI Customer Service for Enterprises", or the specific arc paths. Do not present the output as Typewise or reuse its wordmark, logo, illustrations, photography or icon set — substitute the user's own branding and copy throughout.
