## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wise-com/276f93e8-36da-4521-b39b-a692535846aa-1789060795662.webp
- Design on Kage: https://kage.design/designs/wise-og-image

## Before you start
Ask the user what product or link this card is for, who will see it (X, Slack, LinkedIn, iMessage), and what brand assets they already have (name, logo/wordmark file, primary brand colours, typeface). Wait for the answers before writing any code. Everything below is applied to *their* brand, not to the reference.

## Deliverable
Produce a single **1200×630** social share card (OG image). Build it as HTML/CSS rendered to PNG (e.g. a fixed-size 1200×630 container captured headlessly) **or** as a standalone SVG — both are acceptable; pick whichever the user prefers. Use placeholder branding and copy wherever the user has not supplied real assets.

## Page structure (canvas composition)
- **Background**: one single flat colour filling the entire 1200×630 canvas — the brand's brightest, most distinctive colour (approx. `#9FE870` in the reference). No gradient, no texture, no vignette, no border.
- **Single focal element**: the wordmark (glyph + wordmark lockup) centred both horizontally and vertically, optically nudged a touch above true centre. It is the *only* element on the card.
- **Negative space**: the lockup occupies roughly 15–20% of the canvas width (in the reference the lockup spans ~40% of the width but ~15% of the height); everything else is empty field. Do not fill the space with tags, URLs, or secondary marks.
- **Optional variant** (only if the user asks for a headline variant): keep the centred lockup and add one short line of heavy type beneath it in the dark ink colour — but the default is brand-only.

## Design language
- **Two-colour rule**: exactly two colours from the brand palette — a vivid field colour and a near-black ink (reference: field ≈ `#9FE870`, ink ≈ `#163300`). Contrast is high; the mark must survive being shrunk to a 200×105 thumbnail.
- **Type as logo**: if no logo file exists, set the brand name in an extra-bold geometric sans (700–900 weight), lowercase or as supplied, with tight tracking (−2% to −4%). The mark should feel like an asset, not a headline.
- **Focal hierarchy by subtraction**: one element, one centred axis, ~80% negative space. Hierarchy comes from isolation, not size stacking.
- **Flatness**: zero shadows, zero borders, zero radius tricks, zero illustration. Flat fills only.
- **Safety margins**: keep the lockup inside a centre-safe area (at least 120px from every edge) so link previews never crop it.
- **Motion**: none — this is a static raster export.

## Never
Do not copy the Wise wordmark, its flag glyph, its exact colour values or any of its copy. Do not present the output as Wise's card. Use the user's own brand name and a placeholder lockup if no assets exist. Do not add stock imagery, gradients, taglines or footer URLs to the card.
