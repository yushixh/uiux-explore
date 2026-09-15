## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mock-magic-video-presets/68797593-d96e-42ba-90d2-8956020e6a30-1789106517332.webp
- Design on Kage: https://kage.design/designs/mock-magic-video-presets-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo mark, colours, typeface). Wait for the answers. Everything below is applied to *their* product — the reference is only a composition and colour-discipline lesson, never a source of content.

## Page structure
Produce a single static social-card image at exactly **1200×630** (e.g. an HTML file with a 1200×630 body rendered to PNG via Playwright/Satori/puppeteer, or a standalone SVG). One canvas, three zones:

1. **Wordmark, top-left** — a small (~56px) monochrome logo mark sitting alone at ~56–64px from the top and left. It anchors the corner and nothing else competes there.
2. **Headline block, left half** — a two-line product statement in white, roughly 64–72px, left-aligned at the same 56–64px margin, vertically centred around 45–50% of canvas height. Max-width ~560px so the line breaks are deliberate, not accidental.
3. **Device cluster, right half** — 2–3 overlapping device frames (a large laptop anchored top-right bleeding off the right edge, a phone overlapping its left edge, a small wearable overlapping the phone's lower-left) all cropped by the canvas edge on the right/bottom. Every screen is filled with the *same* vivid artwork so the cluster reads as one idea, not three products.

## Design language
- **Canvas discipline:** pure black `#000000` background. No gradients, no texture, no border. The card's frame is the black itself.
- **Asymmetric split:** left ~55% is typography and negative space; right ~45% is dense product collage. The tension between empty and full is the whole composition.
- **Type:** one clean neo-grotesque sans (SF Pro / Inter class), regular-to-medium weight — not bold, not condensed. White `#FFFFFF` on black. Line-height ~1.2–1.3. Only one text block on the card; the headline *is* the layout.
- **Colour restraint:** the only chroma on the card lives inside the device screens. Use one warm/cool artwork pair — cobalt blue `#2b5cc4`, burnt orange `#e07020`, with small green `#3e8e4e` and red `#c74a3c` accents — applied as an abstract painterly texture shared across all screens. Everything outside the screens stays monochrome (black, white, silver `#b9bdc4`, dark bezel `#1a1a1a`).
- **Depth by layering, not decoration:** devices overlap each other with clear z-order (laptop behind, phone mid, wearable front), realistic rounded-corner bezels and subtle edge highlights. Shadows are soft and low-contrast; the black background does the separating.
- **Bleed:** at least one element must be cropped by the canvas edge. Cropping signals a real render, not a floating sticker.
- **Focal hierarchy:** wordmark (small, corner) → headline (largest element) → device cluster (second mass). Nothing else. No URL bar, no CTA, no feature list — a social card gets ~1 second of attention.
- **Motion:** none. This is a static asset; export as PNG/SVG.

## Never
- Do not reuse the reference's logo mark, wordmark, headline copy, or its blue/orange painting artwork — invent placeholder branding and copy for the user's product (or abstract placeholder art in the user's own palette).
- Do not draw Apple logos, Apple device names, or pixel-copies of iPhone/MacBook/Watch hardware; use generic device silhouettes with plausible bezels.
- Never present the output as Mock Magic or imply any affiliation with it.
