## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/68761dd8-a22e-4d6c-a800-f44116d67cd4-1789106654361.webp
- Design on Kage: https://kage.design/designs/basedash-in-espanol-francais-portugues-og-image

## Before you start

Ask the user these questions and wait for the answers before building:

- What product or company is this social card for, and what is its one-line value proposition (the headline)?
- Who is the audience, and where will the card be shared (X, LinkedIn, Slack, iMessage) — any cropping or dark-mode concerns?
- What brand assets exist: logo mark or wordmark, brand colours (hex), typeface (or acceptable fallback), and the exact headline copy? If any are missing, use placeholder branding and copy and say so.
- Preferred output pipeline: an HTML/CSS file rendered to a 1200×630 PNG (e.g. via Playwright/Puppeteer screenshot), or a standalone SVG at 1200×630? Confirm before building.

Everything below is applied to the user's product with their brand — the reference composition is a layout grammar, not the content.

## Page structure

A single 1200×630 canvas, dark, split composition, top to bottom:

1. **Background** — full-bleed near-black ground with a faint radial glow rising behind the right-hand mockup card so that half of the canvas is not dead flat.
2. **Brand mark** — a small logo mark (≈40–48px tall) in white at the top-left, sitting on generous margins (≈80–90px from the left edge, ≈56–64px from the top). It whispers; the headline shouts.
3. **Headline block** — left column, roughly 45% of the width, positioned slightly below vertical centre: a short value-proposition headline broken into 3 stacked lines, white, each line on its own row, ending with a full stop. This is the largest element on the canvas.
4. **Product mockup card** — right column, roughly 55% of the width: one floating dashboard card (≈520×420) with rounded corners and a slightly lighter surface. Inside, top to bottom: a short card title, a muted subtitle, a two-column KPI row (label, big figure, coloured delta) separated by a hairline divider, and a two-series line chart filling the bottom third with a highlighted endpoint dot on the top series.
5. **Export** — keep all content inside ≈60px safe margins; output exactly 1200×630, no bleed, no watermark.

## Design language

- **Composition**: asymmetric ~45/55 split — claim on the left, artifact on the right. Exactly one focal element per side; nothing competes with the headline.
- **Hierarchy via scale, not decoration**: headline ≈88–96px → card title ≈20px → KPI figures ≈30px → labels and deltas ≈12–14px. Big jumps between levels, no middle sizes.
- **Colour discipline**: near-black ground `#0B0B0C`–`#151112`; pure white `#FFFFFF` for the headline and card title; muted grey `#8A8A8E` for labels and subtitles. Two saturated accents exist only inside the mockup — violet ≈`#B06EF7` and blue ≈`#4D7CFE` for the chart series, green ≈`#2FBF71` for a positive delta. Accents never leak into the headline or the logo.
- **Type**: one geometric grotesque family throughout; weight does the work — 800 for the headline, 600 for the card title, 700 for numerals, 500 for labels. Headline leading tight, ≈1.02; use tabular numerals for figures so the KPI columns align.
- **Surfaces and borders**: card radius ≈16–20px; 1px hairline border `rgba(255,255,255,0.08)`; card surface one step lighter than the canvas (≈`#171316`) with a subtle warm gradient wash across its top; large soft shadow (≈40px blur, low opacity) to float it off the background.
- **Chart treatment**: two smooth lines, ≈3px stroke, rounded caps, an outer glow matching each line colour, faint horizontal gridlines at `rgba(255,255,255,0.06)`, and a single endpoint dot on the top series. Suggested end figures should be believable, not inflated.
- **Rhythm and density**: vast negative space everywhere except inside the mockup card; the card is the only dense zone and even it stays airy (two KPIs maximum). The eye path is mark → headline → card.
- **Motion**: none — this is a static export. If a preview is requested, only the glows may breathe; never animate layout at export size.

## Never

- No logos, wordmarks, pixel-grid marks, copy, taglines, figures or chart data taken from the reference product — invent placeholder branding, headline and numbers for the user's product.
- Never present the result as Basedash or imply it is their card.
- No photography, stock icon sets or third-party logos anywhere on the card; the only imagery is the abstract dashboard mockup itself.
