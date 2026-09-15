## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/9cd60332-9d74-4482-aa34-db8bb91b5d3b-1789060100151.webp
- Design on Kage: https://kage.design/designs/clerk-og-image

## Before you start
Ask the user what product this card is for, who it is for, and what brand assets they already have (name or wordmark, logo glyph, brand colours, typeface). Wait for the answers before building. Everything below is applied to *their* product with placeholder branding and copy — never reproduce the reference brand.

## Page structure
Produce a single static image at exactly **1200×630** (HTML/CSS rendered to PNG, or an SVG). It has three layers, top to bottom of the canvas:

1. **Background canvas** — full-bleed near-black with a soft radial blue glow rising from the right-centre, plus ultra-faint abstract line-art (schematic traces, ~5–8% white) confined to the upper-right quadrant.
2. **Wordmark lockup** — small logo glyph + product name, white, top-left with ~64px safe margins. The smallest text on the card.
3. **Headline block** — a two-line value-proposition headline anchored to the bottom-left, with one or two key words tinted in a lighter accent hue. No URL, tagline bar, or footer metadata.
4. **Hero artwork** — a large abstract 3D-looking brand object (derived from the user's logo glyph, not copied) filling the right half, allowed to bleed slightly off the right edge, with a glowing orb or accent element at its visual centre.

## Design language
- **Composition is a diagonal**: wordmark top-left → headline bottom-left → artwork right. Keep the lower-left quadrant clear for text; let the artwork own the right half.
- **Hierarchy by extreme scale contrast**: headline ~64–72px bold across two lines (~1.05–1.1 line-height, tight −1 to −2% tracking, sentence case); wordmark ~28–32px; nothing else has text. One message, one focal size.
- **Colour**: monochrome dark base `#0B0D12`–`#101623`; one accent family — deep blue `#1D4ED8` to steel `#3B6FA8` gradients on the artwork, pale sky `#9CC9F0` for tinted headline words, pure white `#FFFFFF` for primary text. No second accent hue.
- **Depth treatment**: artwork uses smooth multi-stop gradients, inner highlights and soft shadows to fake 3D gloss; text stays perfectly flat and high-contrast. Background glow sits *behind* the artwork, never over it.
- **Texture discipline**: line-art details must be barely perceptible at 40px preview height — if they read at thumbnail size, reduce opacity.
- **Legibility check**: headline must survive rendering at ~240×126px. If it doesn't, raise type size or darken the backdrop locally.

## Never
- No Clerk wordmark, logo glyph, or the distinctive 3D C-shape with the centre orb; build an equivalent from the user's own mark.
- No copy from the reference ("The most comprehensive User Management Platform") — write original value-proposition copy for the user's product.
- No stock photography, illustration sets, or icon grids — the card is type + one hero object only.
- Never present the output as Clerk's card or use its name anywhere in the asset.
