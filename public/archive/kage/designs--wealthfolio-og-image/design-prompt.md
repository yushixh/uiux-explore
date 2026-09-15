## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfolio/5c997297-9e15-48af-bc7d-aa224871f56b-1789106443708.webp
- Design on Kage: https://kage.design/designs/wealthfolio-og-image

## Before you start
Ask the user what product they are building, who it is for, where this card will be shared (X, Slack, LinkedIn, iMessage), and what brand assets they already have (name, logo shape, colours, typefaces). Wait for the answers before producing anything. Everything below is applied to *their* product with placeholder branding and copy if assets are missing — never to the reference product.

## Page structure
Produce a single social card image at exactly 1200×630 (build it as HTML/CSS sized to the canvas and export to PNG, or as an equivalent SVG). Top to bottom / left to right:

- **Canvas**: full-bleed warm cream gradient, subtly warmer toward the corners and top-right, no border, no visible frame.
- **Left text column** (~55% of width, vertically centred, ~64px left margin):
  - **Wordmark row**: small rounded-square or circular badge mark (~56px) next to the brand name, both in the same dark ink.
  - **Two-line display headline**: line 1 in roman, line 2 in italic, ending each line with a period; roughly 76–84px, tight leading (~0.95), sentence case.
  - **Subhead**: one or two lines of neutral sans-serif (~28px, mid-gray); two key words set bold inside yellow highlighter blocks.
  - **Meta line**: bold domain + dot-separated trust claims in small gray sans, separated by middots.
- **Right mockup composition** (~45% width, bleeding off the right edge):
  - **Desktop window**: ~16px corner radius, hairline border, soft large shadow; a simplified product UI — tab pills on top, one large currency figure with a small delta line under it, an olive-green area chart with a row of small time-range pills, then 4–5 account rows (name, muted meta, right-aligned amounts in green or red).
  - **Phone mockup**: dark-bezel phone overlapping the window's lower-right corner, running the same simplified UI scaled down, so the two-device overlap reads clearly even at thumbnail size.

## Design language
- **Hierarchy**: the left column is the only text zone; scale steps down wordmark → headline → subhead → meta with no intermediate sizes. Mockups contain only plausible small data so the headline always wins first read.
- **Colour**: cream background #F7F0E6 → #FCF8F1 with a warm #F1E1CE tint at the edges; charcoal-olive ink #3A382F for wordmark and headline; mid gray #6E6A5F for subhead and meta; one yellow accent #F2E559 used only for highlighted words; muted olive-green #A9BB92 chart fill with a darker olive stroke; ledger green #3E7C3F for positive figures and muted red #C04A3E for negative ones.
- **Type**: pair exactly two families — a high-contrast serif (mixing roman and italic) for wordmark and headline, and a neutral geometric sans for subhead, meta and all text inside the mockups.
- **Highlight treatment**: yellow blocks sit behind single words like a marker stroke — dark text unchanged, ~4–6px horizontal padding, ~4px radius, never recolour the text itself.
- **Depth and borders**: shadows and hairline borders belong only to the mockup windows and phone; the card background itself is flat.
- **Density rhythm**: generous whitespace on the left, deliberately dense small-scale fake data inside the mockups so the product looks real at 300px-wide previews.
- **Safe area**: keep wordmark, headline and meta inside ~60px margins so link-preview crops never clip them.

## Never
- Do not copy Wealthfolio's name, badge logo, serif wordmark styling, headline copy ("Grow Wealth. Keep Control."), subhead wording, or its dashboard figures — use the user's brand and invented placeholder data.
- Do not reuse the specific leaf/clover mark or the exact chart shape; draw a different simplified chart and a different logo geometry.
- Never present the card as Wealthfolio's product or imply affiliation with it.
