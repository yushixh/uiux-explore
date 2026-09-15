## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/02cf683e-6d59-4481-9b33-da1ad55f9c16-1789060079242.webp
- Design on Kage: https://kage.design/designs/planetscale-og-image

## Before you start
Ask the user what product or company this social card is for, who will see it when the link is shared, and what brand assets exist (name, logo, colours, typefaces). Wait for the answers. Everything below is applied to their brand, not to the reference.

## Page structure
Produce a single static image at exactly 1200×630 (for example an HTML/CSS file rendered to PNG, or a standalone SVG). One centered column, no navigation or footer:

1. **Canvas background** — full-bleed near-black field with a very subtle 1px dot grid (~24px spacing) overlaid, masked so the dots are faint at the top corners and vanish toward the centre; this keeps the flat dark field from feeling empty.
2. **Wordmark block** (top ~15–30% of height) — the brand's logo mark and wordmark side by side, horizontally centered, the brightest element on the card.
3. **Tagline** (at ~40% height) — one short line of uppercase text in a monospace face with generous letter-spacing, sized around 30–34px, in mid-gray; it states a single confident claim, e.g. a "companies run on X" style proof line using the user's own copy.
4. **Customer / proof wall** (from ~50% height to the bottom edge) — a 5-column grid of the user's customer names or partner marks, each cell centered, one muted gray tone per cell, 3–4 rows. Let the final row be partially cut off by the canvas edge and rendered at reduced opacity so the wall reads as continuing past the frame.

## Design language
- **Hierarchy is brightness, not size alone**: wordmark at full white, tagline at mid-gray, logo wall at muted gray — three clearly separated contrast tiers on one background.
- **Colour discipline**: monochrome only. Background ≈ `#0B0B0C`–`#111113`, primary text `#FFFFFF`, tagline ≈ `#9A9A9F`, logo wall ≈ `#6E6E73` with one or two cells allowed slightly dimmer (~`#4A4A4E`) for variation. Do not introduce brand colour on this card.
- **Type pairing**: one geometric/neutral sans for the wordmark, one monospace for the uppercase tagline with ~0.15–0.25em tracking — the mono line is the technical signature of the card.
- **Logo-wall treatment**: convert every mark to a single flat gray; keep each logo's native proportions but normalize visual weight and cap height so the grid reads as an even texture. Do not box, outline or tile the cells — spacing alone (~48–56px column gap, ~56–64px row gap) defines the grid.
- **Texture and edges**: the dot grid is the only ornament; keep it at very low contrast. No borders, no cards, no shadows, no gradients other than the opacity fade on the bottom row.
- **Composition**: everything centered on a single vertical axis; generous top margin (~90–110px), tight internal spacing between wordmark and tagline, then let the grid run off the bottom — the crop is intentional and communicates scale.

## Never
Do not reuse the reference product's name, circular logo, wordmark, tagline copy or any of its customer logos (Square, Cash App, Cursor, Intercom, Etsy, Slack, Notion, etc.). Use the user's own branding, their own customers, and placeholder marks where none exist. Never present the finished card as the reference product.
