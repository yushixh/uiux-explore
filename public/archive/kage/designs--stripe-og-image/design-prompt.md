## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/d12f7877-3cd3-4617-8613-1584ea38edf4-1789059984218.webp
- Design on Kage: https://kage.design/designs/stripe-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have: the brand/wordmark name, whether they have a logo file or want text set as the wordmark, their brand colours, and any typeface preference. Wait for the answers before generating anything. Everything below is applied to **their** brand, not to the reference product.

## Deliverable
Produce a **1200×630 social card** (Open Graph / share-card aspect ratio) as a single image — either an HTML/CSS file rendered to PNG, or a standalone SVG. No HTML page layout around it; the card is the entire canvas.

## Page structure
1. **Full-bleed gradient field (entire canvas)** — the background *is* the design. One diagonal composition axis running from the lower-left corner up toward the upper right, at roughly a 15–20° tilt to the horizontal. Arrange the colour stops so the dominant brand colour occupies the upper-right two-thirds, a secondary hot accent sits at mid-left, and one cool colour anchors the bottom-left corner.
2. **Wordmark (sole foreground element)** — the brand name only, in white, centered horizontally and slightly above the vertical midpoint (about 45% down). No tagline, no URL, no logo mark, no other copy.

## Design language
- **One-element focal hierarchy:** a single white wordmark floating on a saturated field. Everything else is colour. If the user insists on supporting copy, keep it to one small line below the wordmark at ~10% of the wordmark's size — but push back first.
- **Diagonal motion:** the gradient bands must sweep along one shared diagonal axis; never stack horizontal bands. Build the flow with layered linear gradients rotated to the same angle, or streaked canvas/SVG strokes, so the bands look pulled like silk, not like a smooth two-colour fade.
- **Colour ramp:** 4–5 stops with warm dominance and a single cool anchor for tension. Approximate registers to hit (adapt to the user's palette): dominant warm `#FF7A00`, hot accent `#FF3D8F`, mid violet `#B473FF`, cool anchor `#9AA8FF`, plus one light highlight streak `#FFC24B` tracing a band edge in the upper-left area. Edges between bands stay soft and organic — no hard stops, no visible banding.
- **Texture over flatness:** add a subtle anisotropic streak texture (SVG `feTurbulence` stretched along the diagonal, or thin overlapping translucent strokes) so the field reads as material, not a default `linear-gradient()`.
- **Type treatment:** lowercase if the wordmark allows it, extra-bold geometric sans, tight letter-spacing, set in pure white at 100% opacity. The wordmark should span roughly 30–35% of the canvas width (≈400px at 1200px wide). Never outline, shadow or gradient-fill the type.
- **Contrast discipline:** position the wordmark where the background luminance is mid-range (the boundary between the hot accent and the dominant colour works well), so the white type pops without glow.
- **No furniture:** no border, no rounded frame, no drop shadow, no badge. The gradient field is the frame; leave generous breathing room — the wordmark should sit alone with at least 200px of clear colour on all sides.

## Never
Never use the reference brand's wordmark, name, exact logo geometry or its precise colour ramp as the output — substitute the user's own branding throughout. No photography, illustrations, icon sets or UI chrome from the reference. Never present the result as the reference product; it is the user's brand rendered in this composition.
