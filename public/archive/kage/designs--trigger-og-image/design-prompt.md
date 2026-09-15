## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/bdfaa436-4afa-4d6d-8590-cae7d321e125-1789073647892.webp
- Design on Kage: https://kage.design/designs/trigger-og-image

## Before you start
Ask the user what this card announces (product launch, feature release, changelog post), the brand name, whether they have a logo file, their brand colours and typeface, and the headline they want. Wait for the answers before writing code — everything below is applied to *their* brand, not the reference product.

Deliverable: one static **1200×630 social card image**. Build it as a single HTML/CSS frame sized exactly 1200×630 and render it to PNG (e.g. a Playwright/Puppeteer screenshot at 2x), or as an SVG with a `viewBox="0 0 1200 630"`. Placeholder branding and copy are fine; use the user's assets where provided.

## Card structure
- **Canvas**: one full-bleed 1200×630 frame, no header/footer chrome, no border frame, no URL or CTA.
- **Backdrop layer (full bleed)**: an abstract mock of a product UI panel — a run/timeline view with labelled rows, horizontally striped duration bars of varying widths, small timestamp chips (e.g. `4.5s`, `17.5s`) and tiny status dots. Rotate the whole mock roughly -15° to -20° and scale it ~1.4x so it bleeds off all four edges diagonally.
- **Depth treatment**: blur the mock 4–10px, increasing blur and darkness toward the edges and corners (depth-of-field feel), then add a dark gradient scrim strongest over the bottom-left text zone and top-left lockup.
- **Brand lockup (top-left, ~56px inset)**: mark + wordmark on one line, ~28–32px tall; the mark takes the primary brand colour, the word may split into two colours (name in accent 1, suffix in accent 2).
- **Headline (bottom-left, ~64px inset)**: two lines, sentence case, no terminal punctuation, 64–80px bold, line-height ~1.05, near-white. This is the only large element.
- **Nothing else**: no tagline, no buttons, no logos of integrations.

## Design language
- One idea per zone: brand top-left, message bottom-left, product texture everywhere else. Keep the diagonal band between lockup and headline relatively calm — it is the eye's path down the card.
- Colour: near-black base `#0d0d11`; headline white `#f7f7f8`; two brand accents reserved for the lockup only (e.g. green `#34d27b` + violet `#8b5cf6`). The mock UI uses its own small-scale palette — one saturated highlight (blue `#3b82f6`) against neutral gray `#4a4e57` striped bars, plus tiny green/orange dots `#22c55e` / `#f97316` — so texture reads as a different "layer" than brand.
- Type: a single geometric/neo-grotesque sans (Inter or Manrope) throughout; semibold ~30px for the wordmark, bold 64–80px for the headline with tight leading. No second typeface, no italics.
- Depth comes only from rotation + scale + progressive blur + scrim. No drop shadows on text, no glow behind the headline.
- Legibility rule: text may only sit on blurred or scrimmed areas. If any mock element collides with the headline or lockup, darken the scrim or push the mock further off-canvas.
- It is a static asset: no motion, no hover states. Check the headline stays readable when the card is previewed small (zoom the HTML to ~40%).

## Never
- Do not use the reference product's name, wordmark, triangle mark, or its real UI labels and copy (e.g. "Live reloading", "Debug", its durations) — invent neutral placeholder labels for the mock and use the user's brand and copy only.
- Do not reproduce the reference headline text; write copy for the user's product.
- Never present the result as the reference product or reuse its exact brand colours when the user has their own palette.
