## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ynab-com/be23c356-740f-4db8-bf5d-603404fcab26-1789146549001.webp
- Design on Kage: https://kage.design/designs/ynab-og-image

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, wordmark treatment, brand colours, typeface). Wait for the answers. Everything below is applied to *their* brand — the reference card is only a composition and style lesson, never its content.

## Deliverable
Produce a single **1200×630 social card image** (open-graph / link-preview size). Build it as a fixed-size HTML/CSS document (body exactly 1200×630, no scroll) rendered to PNG, or as a standalone SVG with `viewBox="0 0 1200 630"`. Use placeholder branding and placeholder copy throughout.

## Page structure
1. **Full-bleed background field** — one flat, saturated brand colour covering the entire canvas (no gradient unless the brand calls for it). All content sits inside ~70px side margins.
2. **Left visual cluster (~55% width)** — a phone mockup containing a simplified, believable home screen of the user's product: 4–6 white rounded cards with a label left and a small coloured pill right (pill colour = the accent colour, used for numbers/highlights). Behind the phone, one large organic blob shape in a secondary brand colour that bleeds off the bottom edge. Scatter 6–10 thin-stroke doodles (plus signs, four-point sparkles, small circles) in cream and the secondary colour around the phone, varying size and rotation so they feel hand-placed, not tiled.
3. **Right text column (~45% width, vertically centred)** — a 3-line headline in the display face, very large (~95px, tight leading, no more than 3 words per line), with a hand-drawn wavy underline (SVG path, accent colour, stroke-width ~6, slightly overshooting the word) beneath the first word only. Below it, one plain subhead line (~40px, regular weight) stating the offer or promise.
4. **Wordmark lockup, bottom-right** — the brand name in the display face, cream, with a single accent-coloured period after it; aligned to the bottom-right margin. It is the only element touching the bottom edge.

## Design language
- **One field, one accent**: the whole card is a single saturated background (e.g. `#5C5FE8` periwinkle indigo). Text is warm cream (`#FFF9E8`) or pure white. The accent colour (e.g. `#B7E64C` lime) appears only in: the squiggle underline, the wordmark period, the blob, the phone bezel outline, and in-app amount pills. A second supporting tone (e.g. `#38BFA3` teal) may colour a few doodles and an in-app header gradient. Never introduce a colour the background doesn't already prepare for.
- **Scale does the hierarchy**: headline ≈ 95px heavy, subhead ≈ 40px regular, in-app card labels ≈ 15px. Nothing in between; no eyebrows, rules or ornament to fake hierarchy.
- **Type**: one geometric-rounded sans for everything, bold for the headline, regular for support. Rounded terminals and generous letter-spacing on the wordmark only.
- **The mockup must read as real product**: simplified but plausible UI — status bar, screen title, rounded white cards (radius ~14px) with label + pill rows. Keep card text at real legible sizes so the screenshot feels trustworthy at card scale.
- **Doodles as connective tissue**: thin (2–3px stroke) line doodles at low density; they fill negative space in the flat background and point the eye toward the phone and headline, but never overlap text.
- **Composition**: two-column split with the visual slightly lower than the text's optical centre; the wordmark anchors the bottom-right diagonal corner opposite the blob's bottom-left bleed. Nothing else near the canvas edges except margins.
- **No shadows or 3D**: flat shapes throughout; depth comes from layering (blob behind phone, doodles around both), not from shadows.

## Never
- Never use the YNAB name, wordmark,
