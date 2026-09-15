## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/arc-net/d72a523c-28ba-48c9-b0cf-967eb0a1d954-1789060022427.webp
- Design on Kage: https://kage.design/designs/arc-og-image

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo or monogram, brand colours, typeface). Wait for the answers before designing. Everything below is applied to *their* brand — this reference only defines the composition and treatment.

Produce the deliverable as a **1200×630 social card image** (Open Graph / Twitter summary_large_image size). Build it as a single self-contained HTML file at exactly 1200×630 with inline CSS, then screenshot it to PNG (e.g. Playwright/Puppeteer at deviceScaleFactor 2), or as an inline SVG with the same viewport. No external assets, no fonts fetched at runtime unless the user supplies them.

## Page structure
One fixed canvas, no scroll, no sections:
- **Background layer**: full-bleed flat field in the brand's most ownable saturated hue, plus a very subtle monochrome noise/grain overlay (SVG feTurbulence or a tiny repeating PNG at ~4–6% opacity) so the flat colour doesn't band.
- **Focal layer**: the product's logo or a one-letter monogram, centred both axes, occupying no more than ~25% of the canvas width. Render it as a die-cut sticker: thick solid white outline (~3–4% of canvas width), rounded continuous silhouette, one soft drop shadow (large blur, low opacity, slight y-offset).
- **Text layer (optional)**: at most a short wordmark or tagline below or beside the mark. If the mark is strong, use no text at all — the reference carries zero copy.
- **Safe area**: keep all content within the central ~55% of the canvas so link previews that crop edges never clip the mark.

## Design language
- **One object, one message**: hierarchy comes from a single centred mark surrounded by negative space, not from layout. Nothing competes; there is no grid — compose radially.
- **Colour**: one flat, saturated background hue (the reference uses a warm salmon pink, ~#F29EA4). The mark itself is built from 2–3 gradient strokes that are *not* the background hue (the reference pairs light-to-deep blue, ~#5B8DEF→#1E22AA, with coral-rose, ~#F07575→#EF8E8E). A clean white outline is the only separator between mark and background.
- **Sticker treatment**: white border thick enough to read at 120px wide, corner radius following the mark's own curves, shadow soft enough to suggest lift without a visible light source.
- **Texture**: grain is atmosphere, not decoration — keep it near-invisible at full size but present enough to kill flat-colour banding.
- **Type (if used)**: one geometric, rounded sans-serif, small relative to the canvas, in white or a dark shade of the background hue; never set more than one line.
- **No motion**: the card is a static image; design for legibility at thumbnail scale first, full size second.

## Never
- Never reproduce the Arc loop-'A' mark, its exact blue-and-coral gradient pairing, or its sticker version — replace with the user's own logo or a generic placeholder monogram.
- Never use the name "Arc", its wordmark, copy, or any The Browser Company assets.
- Never add photography, illustrations or icon sets from the reference — it contains none beyond the mark.
- Never present the result as Arc's card; it is the user's product in this composition.
