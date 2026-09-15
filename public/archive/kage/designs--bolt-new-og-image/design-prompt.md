## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/1a11d5a2-b894-41a7-8ce8-ae1103e8e5f7-1789073699363.webp
- Design on Kage: https://kage.design/designs/bolt-new-og-image

## Before you start
Ask the user what product they are promoting, who the audience is, and what brand assets they already have (name/wordmark, colours, typeface). Wait for their answers before building. Everything below is applied to their brand, not to the reference product.

## The deliverable
Produce a single **1200×630 social card** (Open Graph image), delivered as an HTML/CSS page sized exactly 1200×630 (render to PNG via screenshot) or as a standalone SVG. No interactivity — this is a static image.

## Page structure
1. **Canvas**: a single 1200×630 dark surface with a very soft radial glow anchored at the top-right corner (brand accent colour at low opacity fading to the base background). Everything else sits on this near-black field.
2. **Left column (roughly the left 45%, vertically centred)**: the wordmark first — large, lowercase, bold, optionally italicised, with the domain suffix or secondary word at a much smaller size tucked against it. Directly below, a two-line tagline in a muted gray-blue at a mid scale (about 28–32px), line-height generous enough to read as calm, not crowded. Nothing else on this side; the emptiness is the point.
3. **Right half (a product mock, cropped)**: a stack of three rounded-rectangle panels suggesting app windows or chat cards, offset diagonally so each recedes up and to the right, all bleeding off the right edge of the canvas so the viewer senses continuation. The frontmost panel is the hero: a mock prompt/input surface with one line of placeholder copy in light gray, and two small line icons (e.g. attachment and sparkle) bottom-left inside it. The two panels behind are mostly dark silhouettes distinguished only by their top-edge borders.
4. **Light streak**: a thin, sharp horizontal white gradient streak grazing the top edge of one of the back panels — the single brightest element on the card, acting as the accent that pulls the eye across the composition.

## Design language
- **Focal hierarchy**: wordmark → tagline → frontmost mock panel → glow/streak. Only one element gets the bright accent; everything else stays in the near-black-to-gray range.
- **Colour**: base background #0a0f18–#0b1220 (near-black navy); panels #111a26–#141e2b with ~1px borders in #2a3b52; primary text #ffffff, secondary text #8a97a8 (muted blue-gray); one accent (e.g. #4a9eff) used only in the radial glow and faintly in a panel edge. Total palette: three greys plus one accent.
- **Type**: one sans-serif family, three sizes only — wordmark (~90–110px bold), tagline (~30px regular, muted), UI mock text (~30px light gray). Lowercase wordmark with tight letter-spacing; tagline set in sentence case across exactly two lines.
- **Depth without shadows**: instead of drop shadows, use stacked offset panels, thin light borders on top edges, and one light streak to imply layering. Rounded corners ~14–18px on panels.
- **Cropping as a device**: deliberately let the panel stack overflow the right edge and let the glow bleed off the top-right corner — the card should feel like a window onto a larger product, not a framed graphic.
- **Density**: extremely low. Left half is ~60% empty; the right half carries one readable mock element and two hint elements.

## Never
- Do not use the bolt name, "bolt.new" wordmark, its exact tagline copy, its icons, or its logo. Replace all branding and copy with the user's own placeholder brand and a placeholder prompt-style sentence.
- Do not present the result as belonging to or made by the reference product.
