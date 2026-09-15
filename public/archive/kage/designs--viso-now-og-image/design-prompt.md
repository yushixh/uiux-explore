## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/viso-now/eabb5c90-7b5b-4e40-969c-ee12179a11d2-1789106535170.webp
- Design on Kage: https://kage.design/designs/viso-now-og-image

## Before you start
Ask the user what they are building, who the product is for, and what brand assets they already have (name/domain to show as the wordmark, one accent colour, and a typeface if any). Wait for the answers before producing anything. Everything below is applied to *their* product, not to the reference; use neutral placeholder brand and copy until they answer.

Produce a **1200×630 social/OG card image** — either as a fixed-size HTML/CSS file rendered to PNG (e.g. via Playwright/Puppeteer screenshot at exactly 1200×630) or as an SVG with `viewBox="0 0 1200 630"`. Text must stay crisp and legible when the card is shrunk into a Slack/X preview.

## Page structure
- **Canvas**: split into two vertical panels, roughly 55/45. Left panel is white (the message), right panel is a pale gray stage (the product object). No imagery, gradients or photography anywhere — type on the left, one UI object on the right.
- **Left panel** (safe margins ~64px horizontal, content vertically centred with the wordmark anchored near the bottom):
  1. **Eyebrow**: one short uppercase announcement label (~20px, 600 weight, 0.15em letter-spacing, gray) preceded by a small accent-coloured dot.
  2. **Headline**: the value proposition in two lines (~64–70px, bold, tight leading ~1.1). The first phrase is near-black; the final phrase is set in the accent colour. This two-tone trick is the focal point of the whole card.
  3. **Subline**: two short lines (~26–28px, regular, mid-gray) explaining the mechanism in plain language.
  4. **Wordmark**: brand/domain name (~32px, semibold, near-black) pinned to the bottom-left with ~56px bottom margin; colour one punctuation mark (a dot) in the accent.
- **Right panel**: a single floating dark UI card, horizontally and vertically centred, occupying ~55% of the panel width. It is a miniature of the product's core surface — e.g. a prompt/command input:
  - Rounded rectangle (radius ~24–28px), near-black fill, soft wide shadow.
  - Top: the user's input sentence in white semibold text (~28–30px, ~1.35 line-height) ending with an accent-coloured text caret.
  - Bottom-right control row: a small gray mode label with a chevron, then an accent-coloured square button (~56px, radius ~12px) with a single white glyph (up arrow / send).

## Design language
- **Composition**: one message, one object. The left half carries the narrative top-to-bottom; the right half holds exactly one floating card with generous empty space around it. Resist adding logos, badges, URLs or secondary cards.
- **Hierarchy**: built purely from type scale and colour, not decoration. Step down ~20px caps → ~68px bold headline → ~27px gray body → 32px wordmark. The accent colour creates the emphasis; weight creates the rhythm.
- **Colour palette** (sampled from the reference): white `#FFFFFF` left panel, pale gray `#F4F4F6` right panel, near-black `#1A1A1C` for headline and card fill, mid-gray `#6B7280` for subline and card label, accent pink `#FF6E7D`. Use the accent **no more than four times**: eyebrow dot, one headline phrase, the input caret, the submit button. Restraint is what makes it read as premium.
- **Type**: a single geometric sans throughout (weights 600–700 do all the work); no serif pairing, no all-caps body. Keep letter-spacing only on the eyebrow.
- **Cards & surfaces**: the one floating card gets radius 24–28px and a diffuse shadow like `0 18px 44px rgba(0,0,0,0.18)`; panels themselves are flat with no borders or inner shadows.
- **Density & whitespace**: high whitespace, low element count — roughly five text elements and one card on the entire canvas. Bottom-left wordmark anchoring balances the centred card.
- **Motion**: this is a static image; nothing needs to animate. If rendering as HTML, an optional slow-blinking CSS caret is acceptable, but the frame must read complete at rest.

## Never
- Do not reuse the Viso.ai name, wordmark, "Meet Viso Now" eyebrow, the headline wording, or the "Monitor equipment condition in the yard" prompt sentence — invent placeholder brand and copy for the user's product.
- Do not add logos, illustrations, photography, gradients or icon sets from the reference; the card contains no imagery beyond one UI mock.
- Never present or label the result as Viso / Viso Now.
