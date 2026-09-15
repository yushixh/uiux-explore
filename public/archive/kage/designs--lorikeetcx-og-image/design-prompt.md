## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lorikeetcx-ai/2ae1c9ca-c4f1-416e-87d9-53e72891f801-1789141727851.webp
- Design on Kage: https://kage.design/designs/lorikeetcx-og-image

## Before you start

Ask the user what product or feature the card is announcing, who the audience is, and what brand assets already exist (brand name, logo, colours, typeface). Wait for the answers, then apply everything below to *their* brand — the reference composition is a layout system, not the content.

## Deliverable

Produce a single **1200×630 social card image** (OG image for X/Slack/LinkedIn/iMessage). Render it as HTML/CSS sized 1200×630 and screenshot it to PNG, or hand-write an SVG with the photos as embedded raster images. Export at exactly 1200×630 (1× is fine; 2400×1260 @2x is a bonus).

## Page structure (layers, bottom to top)

1. **Canvas** — full-bleed warm white (#FDFCF9). All content sits on it; nothing is boxed in a panel.
2. **Gradient light rays** — 6–8 vertical blurred stripes rising from the bottom edge to roughly 55–65% of the canvas height, fading to transparent at the top. Left side magenta (#FF3DBE), middle violet (#7B5CFF), right side amber (#FFC838). Vary widths (60–140px), blur heavily (30–60px), let them overlap slightly. They must never reach the wordmark.
3. **Corner photo collage** — four photos, each bleeding *off* an edge so only an inward-facing rounded corner (radius ~20px) is visible: top-right, mid-left, bottom-left, bottom-right. Each ~160–200px wide, cropped by the canvas edge. They imply a bigger scene without competing with the centre.
4. **Hero photo** — one large rounded-rectangle photo (~520×360px, radius 24px) centred horizontally, vertically slightly below centre. This is the single focal image; everything else is subordinate.
5. **Wordmark lockup** — top-centre, ~30–40px below the top edge: a small multicolour abstract mark (~56px) beside a bold high-contrast serif logotype (~90px cap height, near-black #191919). Generous clear space around it; no pill or photo may overlap it.
6. **Notification pills** — five frosted chips anchored to the compositions: 2–3 overlap the hero photo's edges (one bottom-right, one lower-left), 1 hangs off the right edge near the top-right photo, 1–2 sit on the gradient area at lower left/right. Each pill: fully-rounded (999px), height ~44px, icon (~24px rounded-square with a tinted pastel background) + short status copy ("Rent payment processed"-style placeholders), padded ~10px 16px.

## Design language

- **Focal hierarchy by scale and placement, not weight**: one hero image, one wordmark, everything else small and cropped. Never add a second large image or a headline block.
- **Colour**: warm white canvas #FDFCF9; near-black type #191919; ray gradients magenta #FF3DBE → violet #7B5CFF → amber #FFC838 in that left-to-right order; pill icon tints pastel violet #EDEBFF, amber #FFF3CC, mint #E3F5EA with darker icon strokes (#6D5AE6, #C79000, #2FA36B). Keep the gradient out of the top third so the wordmark stays legible.
- **Type pairing**: one expressive high-contrast serif for the logotype only; a clean geometric/humanist sans (weight 500–600) for pill labels at ~15–16px. No other type on the card.
- **Pills as glass**: background rgba(255,255,255,0.78) with backdrop-blur(8px), hairline border rgba(0,0,0,0.08), soft shadow `0 4px 16px rgba(0,0,0,0.10)`. Copy stays short — status + object, no sentences.
- **Radii**: photos 20–24px, pills fully rounded, icons 6–8px. No sharp corners anywhere.
- **Static by nature**: no motion, but the composition must read at 300px wide — check the wordmark and hero photo survive thumbnail size, and keep critical content inside the central ~1040×540 safe zone.

## Never

- Never use the reference's brand name, bird logo, serif wordmark, photography, or its pill copy ("Payroll plan upgraded", "Flight rescheduled", etc.). Use the user's brand and invented placeholder statuses.
- Never present the result as Lorikeet or reuse its exact colour lockup; derive hues from the user's palette.
- Never fill the card with text blocks, taglines, or URLs — the reference works because it carries one wordmark and a handful of chips.
