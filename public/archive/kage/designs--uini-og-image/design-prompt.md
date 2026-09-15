## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/uini-io/25faf734-f337-434b-a6d2-d1f9fa9f4bd9-1789059812646.webp
- Design on Kage: https://kage.design/designs/uini-og-image

## Before you start
Ask the user: what product is this card for, who is it for, what single sentence should headline it, and what brand assets already exist (name, wordmark, logo/app icon, accent colour, typeface)? Wait for the answers before designing. Everything below is applied to their brand; use placeholder branding only where assets are missing.

## Goal
Produce one static social card image, exactly **1200×630 px** (1.91:1), for Open Graph / X / Slack / LinkedIn previews. Best done as a single HTML file with a 1200×630 root container rendered to PNG via headless Chrome/screenshot tooling, or as an SVG exported at that size. No animation; everything must stay legible scaled down to ~440px wide.

## Page structure
A single canvas split into two vertical halves with an implied (not drawn) boundary at ~48% width:

1. **Brand panel (left, white)** — `padding: 56px 48px`, flex column with space-between:
   - Top: rounded app icon (squircle, ~64px, accent fill, simple white glyph) beside a bold lowercase wordmark (~26px).
   - Headline (~64–72px, weight 700–800, line-height ~1.1, three lines): one word set in the accent colour, the rest near-black.
   - Support line: two short sentences, ~22px, muted gray, max-width ~440px.
   - Step row: three tinted pill chips, each with a small accent circle holding a number plus a one-word label, joined by small accent arrows.
   - Footer: dark pill button with a short white CTA label, and the product domain in small gray text beside it.
   - Two large flat decorative circles in a paler tint of the accent, bleeding off the top-left and bottom-left corners behind the content.

2. **Product vignette (right, warm tint)** — background in a very pale wash of the accent (cream/peach, subtle gradient). A centred vertical mini-pipeline, top to bottom:
   - **Trigger card** (white, ~18px radius, soft shadow, ~420px wide): small icon tile, bold title, gray meta line ("page · audience"), a tiny tinted count badge top-right, and a row of three small chips each led by an accent dot.
   - **Connector**: 1px dotted vertical line with a centred micro-label — 11–12px uppercase, ~0.08em letter-spacing, accent colour.
   - **Conversation card** (larger, ~460px): header row (accent logo tile, bold title, gray meta, green status pill with dot) above a chat body — an inbound light-gray bubble aligned left and an accent-coloured reply bubble aligned right, ~15–16px text.
   - **Second connector** with its own micro-label.
   - **Result row**: two compact white cards side by side, each with a tiny icon, an uppercase accent eyebrow and one bold one-line takeaway.

## Design language
- Split composition: the left half sells in type, the right half proves it with UI. The right column reads top-to-bottom as a before → during → after story; keep that narrative order.
- Hierarchy: the headline is by far the largest element; everything in the vignette stays small (13–16px) so it reads as a real product, not a poster. Eyebrow micro-labels are the smallest type (~11px, uppercase, tracked).
- Colour: white canvas on the left (#FFFFFF), warm cream wash on the right (~#FBF1E6 with slightly deeper ~#F8E7D6 toward the edges). One accent — e.g. coral orange ~#F26643 — does all the work: one headline word, numbered dots, micro-labels, reply bubble, badges, arrows. Near-black text ~#1C1C1C; gray meta ~#6E6E6E. A single secondary status green ~#2BA579 appears exactly once.
- Type: one geometric sans throughout; headline at 700–800 weight with slight negative tracking, body at 400–500. Scale roughly 68 / 26 / 22 / 16 / 15 / 12. Uppercase micro-labels with +0.08em tracking.
- Shape and depth: cards 14–20px radius, inner bubbles 10–12px, chips fully rounded. Shadows soft and diffuse (e.g. `0 10px 30px rgba(60,40,20,0.08)`), plus hairline 1px borders at ~6% black where cards sit on the cream. No hard edges; no gradients inside cards.
- Connectors: dotted 1px lines tie the cards into a pipeline; labels sit centred on the line, optionally inside a small tinted pill.
- Decoration: at most two large flat tinted circles cropped by canvas corners; never behind critical text.
- Static output: verify contrast and crop-safety with ~40–56px outer margins before export.

## Never
- Never use the reference's name ("uini"), wordmark, logo glyph, headline or support copy, chat lines, insight strings, domain or CTA text.
- Never recreate the reference's "behaviour → interview → insight" wording; substitute the user's own three-step story.
- Never present the result as uini.io or imply it is that product.
- Never let decorative shapes overlap the headline, step row or CTA.
