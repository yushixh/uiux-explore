## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/resend-com/e47aa046-edd7-4e6d-b01e-6a3c61710111-1789060000037.webp
- Design on Kage: https://kage.design/designs/resend-og-image

## Before you start
Ask the user what they are building, who the card is for, and what brand assets they already have (name, logo mark or monogram, colours, display typeface). Wait for the answers before designing. Everything below is applied to *their* product and announcement, not to the reference.

## Page structure
Produce a single static social-card image at **1200×630** (e.g. an HTML/CSS page rendered to PNG via Playwright/Puppeteer, or an SVG). Layout is a single centered column, top to bottom:

1. **Canvas background**: near-black (#0A0A0A) with two very subtle diagonal light streaks sweeping up from the bottom-left and mid-right (low-opacity white linear gradients, blurred), plus a gentle vignette. Keep them barely perceptible.
2. **App icon tile** (top center, ~70px from top): a rounded square (~90×90px, ~24px radius) in #161616 with a 1px rgba(255,255,255,0.12) border and the brand glyph/monogram centered in white. This anchors the column.
3. **Headline** (~55px below the icon): one line of display copy in a high-contrast serif, ~95px, centered, white with a vertical gradient fading slightly to gray at the baseline. Leave ≥64px safe margins left/right.
4. **Code-editor mockup** (~70px below the headline): a centered window ~840px wide whose top edge is fully visible but whose bottom **bleeds off the canvas** — only ~250–280px of it shows. Inside, top to bottom:
   - Window surface #111214 with rounded top corners (~16px) and a 1px rgba(255,255,255,0.08) border.
   - Tab bar (~52px tall): 7–8 short placeholder tabs (technology or mode names). Active tab is a white pill with dark text; inactive tabs are gray #8A8F98 text; the last one or two tabs fade toward the right edge.
   - 1px divider, then the code area: a gray line-number gutter and 7–9 lines of placeholder code in a neutral monospace (~16px, line-height ~1.7). Keywords white, identifiers light gray #D4D4D8, punctuation/strings #6B7280. No real API keys or real vendor names — use dummy tokens.

## Design language
- **Focal hierarchy**: exactly one hero moment — the serif headline. The icon is the anchor above it, the code window is proof below it. No badges, no taglines, no URL strips competing for attention.
- **Colour discipline**: monochrome only — background #0A0A0A, panels #111214–#161616, primary text #FFFFFF, secondary #9CA3AF, tertiary #6B7280, hairlines rgba(255,255,255,0.08–0.12). Depth comes from light gradients and borders, not glows or coloured shadows.
- **Type pairing**: an elegant high-contrast serif for the display line (Fraunces/Tiempos-like), tight tracking, used at one huge size; a neutral monospace (JetBrains Mono/SF Mono-like) for everything inside the window. Nothing in between — no mid-weight sans labels.
- **Shape language**: generous radius on the icon (24px), modest radius on the window (16px), fully rounded pill for the active tab; 1px strokes instead of shadows throughout.
- **Crop as rhythm**: letting the code window run off the bottom edge makes the composition feel like a still from a larger page — always crop the last element, never cram it to fit.
- **Motion**: none. It is a static render; optimise for legibility at small thumbnail sizes (headline must survive ~600px-wide previews).

## Never
Never reuse the reference product's name, its "R" monogram, the exact headline wording, its code snippet, or its tab labels. Use the user's own brand mark, copy and placeholder code. Never present the result as the reference product.
