## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/0f42ec86-79b6-4b53-9ad7-cdd5f83ce160-1789073657435.webp
- Design on Kage: https://kage.design/designs/inngest-og-image

## Before you start
Ask the user what product or feature the card is announcing, who the audience is, and what brand assets they already have (name, logo mark, brand colours, typeface). Wait for the answers before writing any code — everything below is applied to *their* brand, not to the reference.

Deliverable: **one 1200×630 social card image** (Open Graph / Twitter / Slack preview size). Produce it as either (a) a single self-contained HTML file with a fixed 1200×630 body that can be rendered to PNG with a headless-browser screenshot, or (b) an equivalent standalone SVG. Use placeholder branding and copy if the user hasn't supplied real assets.

## Page structure
A social card is a single frame, not a scrolling page. Compose it top to bottom:

1. **Canvas** — one flat, fully saturated brand-colour field covering the entire 1200×630 frame, with a subtle grain/noise texture layered over it (SVG `feTurbulence` as a data-URI background at ~5–8% opacity). No gradient, no imagery, no border.
2. **Logo lockup** — top-left, inset roughly 72px from the left and top: a small geometric brand mark (~44px tall) beside the product name set in bold uppercase with slight letter-spacing, both in white. This is the smallest element on the card.
3. **Headline block** — starting ~230px from the top, left-aligned to the same 72px margin: a two-line statement, each line ~96–104px bold sans with tight leading (~1.02). Line one is solid fill; line two is the same typeface at the same size but rendered as a hollow outline only. End each line with a period.
4. **Empty lower third** — the bottom ~40% of the canvas carries nothing. Do not fill it; the void balances the heavy type above.

## Design language
- **One colour does all the work.** A single saturated field (approx. `#ff4a1d` in the reference; substitute the user's brand colour) plus white type. No secondary colours, no gradients.
- **Hierarchy by treatment, not size.** Both headline lines share one typeface, one size, one weight; the second line flips from solid fill to stroke-only (`-webkit-text-stroke: 3px white; color: transparent`, or SVG `stroke` + `fill: none`). This solid/outline pairing is the card's signature move.
- **Type scale is extreme.** The headline is ~25% of the canvas height; the wordmark is roughly one-quarter of the headline size. Use a geometric/grotesk bold sans (the user's brand font if provided, otherwise a bold Inter/Helvetica-class fallback).
- **Left-align everything to one margin** (~72px). Ragged right edge is fine; the aligned left edge plus the terminal periods give the copy a declarative, poster-like rhythm.
- **Texture over flatness.** A faint monochrome noise overlay prevents banding and softens the flat field — keep it barely perceptible.
- **No borders, no shadows, no rounded containers, no icons.** The only graphic elements are the mark, the wordmark and the two headline lines.
- **Keep the focal stack vertical and tight:** lockup → headline → emptiness. Nothing competes for the centre-right of the frame.

## Never
- Never use the Inngest chain-link logo mark, the "INNGEST" wordmark, or the copy "Unbreakable agents. / Invisible infra." — build the lockup and headline from the user's own brand name and message, or clearly generic placeholders.
- Never present the result as Inngest's card or imply their branding.
- Never add photography, illustrations, icons, badges or extra copy lines from the reference — the composition depends on restraint.
