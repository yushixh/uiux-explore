## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/betterment-com/cc9edb83-a940-4a63-965f-035fd7e2253d-1789146501192.webp
- Design on Kage: https://kage.design/designs/betterment-og-image

## Before you start
Ask the user what product or page this social card is for, who the audience is, and what brand assets they already have (name, logo/mark, exact brand colours, typeface). Wait for the answers before designing. Everything below is applied to their brand, not to the reference.

Deliverable: a 1200×630 social card (OG image) produced as HTML/CSS rendered to PNG, or as a standalone SVG. Keep all critical content inside a safe zone of roughly 80px from every edge so platform cropping doesn't clip it.

## Page structure
- **Canvas**: a single 1200×630 full-bleed frame. No header, footer, or UI chrome — this is one image.
- **Background layer**: a smooth vertical gradient from a lighter mid-tone brand colour at the top to a deep dark shade of the same hue at the bottom, filling the entire canvas edge to edge.
- **Focal lockup (center layer)**: one horizontal brand lockup, dead-centre both horizontally and vertically. The brand mark sits to the left at the same visual height as the wordmark's cap height, with a small consistent gap (~0.25× the mark's width) before the wordmark begins. The lockup should span roughly 55–65% of the canvas width, leaving generous empty bands above and below.
- **No supporting content**: no headline, URL, tagline or badge on this card — the lockup is the only message. (If the user insists on a supporting line, place it as one short line centred below the lockup at ~1/12 of canvas height, in the same white, at low-to-mid weight.)

## Design language
- **One focal point rule**: the entire composition supports a single centred lockup; everything else is negative space. If more than one element competes, delete elements, don't shrink them.
- **Scale**: the lockup is the largest thing on the canvas by far — wordmark letters roughly 90–110px tall at 1200×630, so it stays legible at 200px-wide thumbnails.
- **Colour treatment**: two-hue palette. A cool gradient ground (approximately #3B6BD4 at top falling to #0B2B66 at bottom, using the user's own brand hue) with warm accent + white foreground (accent ~#FFC53A, foreground #FFFFFF). The accent mark and white wordmark must both contrast strongly against every point of the gradient.
- **Type pairing**: one rounded, geometric humanist sans for the wordmark — medium-to-bold weight, slightly tight letter-spacing (-1% to -2%), no uppercase. If the user has no brand font, fall back to a rounded geometric stack (e.g. Nunito Sans / Manrope / Quicksand bold) and say so.
- **Mark behaviour**: the logo mark is a simple filled geometric shape (arch, circle, wave, etc.) in the accent colour, optically aligned to the wordmark's x-height/cap-height, never floating above or below the text baseline.
- **Depth without decoration**: depth comes only from the background gradient and the contrast of the lockup — no shadows, borders, grids, patterns or texture on the card.
- **Motion**: none. This is a static image; do not add animation.

## Never
- Do not use the Betterment name, its sunrise-arch mark, its wordmark, or its exact blue/yellow palette — reproduce the *composition* (centred lockup on a vertical brand-colour gradient) with the user's own branding and placeholder copy if assets are missing.
- Do not add stock illustrations, photography, screenshots or icon sets to the card.
- Do not present the output as Betterment or imply any affiliation with it.
