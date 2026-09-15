## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/6d2127e8-7428-454e-adad-732e1f84cf32-1789073696789.webp
- Design on Kage: https://kage.design/designs/mistral-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, colours, typeface, any mascot or mark). Wait for the answers. Then produce a **1200×630 Open Graph social card** — as an SVG, or as a single HTML/CSS file sized exactly 1200×630 that can be rendered to PNG (e.g. with Playwright/Puppeteer or `wkhtmltoimage`). Apply the composition below to *their* brand: their name, their colours, their copy. Placeholder text and a placeholder logo block are fine while iterating.

## Page structure
A single fixed-size canvas (1200×630), no scroll, split into two stacked halves:

1. **Upper field (~0–315px): flat near-white background**
   - Headline block flush left with generous margin (~56px from left, starting ~100px from top): a two-line statement in near-black, tight leading, each line ending in a period. This is the only large type on the card.
   - Wordmark lockup anchored to the right edge at roughly the same vertical zone as the second headline line: a small logo mark followed by the brand name in the same near-black, sized so the lockup reads as a signature, not a second headline.
2. **Lower field (~315–630px): flat horizontal colour bands**
   - 4–5 full-width stacked bands of the brand's accent ramp, stepping from the lightest accent at the top band to the deepest at the bottom. Bands have hard edges, no gradients between them, equal-ish heights.
   - One small pixel-art / low-fi mascot or mark sitting on the baseline of one of the darker bands, flush left with the same margin as the headline — a small detail that rewards a closer look.
   - One or two faint hairline bezier guide paths with visible anchor-point squares traced inside the bands on the right half, barely visible (low-contrast stroke) as a drafting/engineering motif.

## Design language
- **Focal hierarchy:** one giant headline in the top-left quadrant is the first read; the wordmark right of centre is second; the colour bands are the atmosphere behind everything. Nothing else competes.
- **Composition rule:** split the canvas ~50/50 horizontally — calm light field on top for type, saturated field below for colour. All left-edge elements share one margin line; the wordmark aligns right.
- **Colour:** near-white top (≈ #FAFAF8), near-black type (≈ #1A1A1A), and a bottom ramp of the brand accent stepping light→dark (reference ramp: ≈ #FFAF00 → #FF7000 → #FA500F → #E10500 → #C4001F). Bands are flat fills only; the only gradient allowed on the card is inside the logo mark itself.
- **Type:** a single neo-grotesque sans throughout. Headline ~72–80px, line-height ~1.05, slight negative tracking, sentence case with terminal periods. Wordmark text ~40–48px in the same weight/colour as the headline so the two feel like one typographic system.
- **Shape and effect:** zero border-radius, zero shadows, zero strokes on containers. Hard-edged bands, pixel-level crispness. The playful signal comes from the pixel mascot and stepped colour ramp, not from rounded or skeuomorphic detail.
- **Detail layer:** add at most one hidden-in-plain-sight element (pixel mascot, faint vector guides) at very small scale or very low contrast so the card stays clean at feed size but reveals craft when enlarged.
- **Motion:** none — this is a static image. Keep everything legible when downscaled to ~600px wide.

## Never
- Do not reuse Mistral's name, wordmark, pixel 'M' logo, the cat mascot, the 'Frontier AI. In your hands.' copy, or its exact orange-to-red ramp. Use the user's brand assets or clearly neutral placeholders.
- Do not add photography, illustrations, drop shadows, glass effects or rounded corners — the reference language is strictly flat.
- Do not present the output as Mistral's card or include any Mistral branding in the result.
