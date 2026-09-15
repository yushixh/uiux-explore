## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/505646fd-fe47-4d0f-bf4c-63bc3dd03018-1789106583403.webp
- Design on Kage: https://kage.design/designs/airpods-5-og-image

# 1200×630 social card — minimal floating product hero

## Before you start
Ask the user what product or feature the card promotes, who it is for, and what brand assets they have (product imagery or render, logo, colours, typeface). Wait for the answers; apply everything below to *their* product. The output must be a single 1200×630 asset — e.g. an HTML/CSS file rendered to PNG, or an SVG.

## Page structure
- **Canvas**: one flat background layer, a near-neutral tone (e.g. #f5f5f7 for light products, near-black #1d1d1f for dark ones). No gradient sweeps, no texture.
- **Hero object**: the product image or render, centred, occupying roughly 50–60% of the canvas height, positioned slightly above true centre so it floats. If photography is unavailable, build a simple stylised product silhouette in CSS/SVG with soft inner shading.
- **Lighting**: soft, diffuse top-lighting — large blurred drop shadows (blur ~60–90px, ~6–10% opacity black) beneath the object so it appears to hover.
- **Optional text zone**: keep at least the top 90px and bottom 90px clear so platform UI never collides with the subject. If the user wants text baked in, place a single short headline top-centre or bottom-centre in one weight only, max two lines.

## Design language
- One idea per card: the object *is* the message. No badges, feature lists, arrows or decorative shapes.
- Hierarchy: product → (optional) one headline → nothing else. Suggested scale if text is used: ~64–72px semibold for headline, nothing smaller than 28px.
- Colour: monochrome scheme — a single neutral background plus the product's natural tones; allow one small dark accent from the product itself to anchor contrast.
- Type: one clean geometric sans (system stack or brand face), regular/semibold weights only, generous letter-spacing on any small label.
- Borders/radius/shadows: no borders, no radii needed on the canvas; only soft realistic shadows on the object.
- Motion: none — it's a static image; export at exactly 1200×630.

## Never
- Never reproduce the reference's earbuds photography, "R" marking, or Apple product imagery; use the user's own product visuals or clearly placeholder shapes.
- Never use the wordmark, tagline or copy from the reference.
- Never present the card as the reference brand's asset.
