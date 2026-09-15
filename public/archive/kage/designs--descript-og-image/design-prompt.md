## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/descript-com/140eb617-eeea-4ac6-adcc-40e32e55f71f-1789146856616.webp
- Design on Kage: https://kage.design/designs/descript-og-image

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, logo), plus what one message the card should deliver. Wait for the answers. Then produce a **1200×630 social share card** (Open Graph image) as a single HTML/CSS file sized 1200×630 rendered to PNG (e.g. via headless Chrome/Puppeteer) or as an SVG — inspired by the composition described below, but carrying the user's own branding and copy, never the reference's.

## Page structure
Work top to bottom inside a fixed 1200×630 canvas:

1. **Background field** — one flat, deep wine/burgundy colour filling the entire canvas. No gradient, no texture, no border.
2. **Headline block (top ~25%)** — a three-line, centred, sentence-case serif statement. Short parallel lines, each ending in a period, stacked with tight leading. This is the promise of the product.
3. **Product screenshot (centre, ~55% width)** — a white app window with rounded corners and a soft wide shadow, showing a simplified mock of the user's real UI (e.g. a split pane: document/list on the left, media/preview on the right). It is the focal point and sits roughly on the vertical centre line.
4. **Flanking filmstrips (mid-height)** — horizontal rows of 2–4 small video-still tiles on each side of the screenshot, rounded corners, bleeding off the left and right canvas edges as if continuing beyond the frame. They sit slightly behind the screenshot so it overlaps them. One small circular avatar tile overlaps the right strip as an accent.
5. **Brand lockup (bottom ~12%)** — centred: a small geometric red mark beside the product name set lowercase in a clean sans. Nothing else in this band.

## Design language
- **One dark stage, floating content.** A single saturated dark field (~#4A1E2E burgundy) acts as the backdrop; every element floats on it without panels or dividers. Content earns attention by contrast, not by containers.
- **Editorial serif as the voice.** Use a high-contrast display serif (a free stand-in such as Fraunces or Playfair Display) at roughly 90–100px on a 1200px canvas, line-height ~1.05, sentence case, terminal periods. Three short lines read faster than one long sentence.
- **Cream on burgundy, not pure white text.** Headline colour is a warm off-white (~#F3EDE4); pure white is reserved for the product screenshot itself, which then reads as the brightest, most credible object on the card.
- **One accent colour, used once.** A single red (~#E4483F) appears only on the logo mark. All other colour comes from the mock screenshot and still tiles, so the brand accent stays scarce and loud.
- **Real UI as proof.** The centred screenshot should look like the actual product (legible panes, plausible content), not an abstract illustration. White window, ~12px radius, one large soft drop shadow (e.g. rgba(0,0,0,0.35) blur ~40px).
- **Implied motion at the edges.** The side strips of stills — faces, devices, captions — bleed off the canvas to suggest a timeline continuing beyond the frame. Keep tiles small (~90–130px tall), rounded ~8px, human-centred where possible (use stock/placeholder imagery).
- **Quiet–busy–quiet rhythm.** Generous empty burgundy above the headline and below the lockup; density concentrated only in the middle band. Keep at least ~40px of stage colour around the lockup.
- **Static card discipline.** Everything centred or symmetric; hierarchy is purely positional and scale-based: headline → screenshot → lockup.

## Never
- Do not use the Descript name, wordmark, logo mark, red
