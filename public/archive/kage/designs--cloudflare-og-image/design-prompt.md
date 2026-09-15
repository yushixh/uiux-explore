## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cloudflare-com/aec27aec-0f8b-4c18-8486-51e2b3ce4474-1789213760824.webp
- Design on Kage: https://kage.design/designs/cloudflare-og-image

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo/mark, brand colours, typeface). Wait for the answers. Everything below is applied to *their* brand — the reference is only a compositional and stylistic model. The deliverable is a **1200×630 Open Graph / social card image**, produced as a single HTML/CSS file rendered to PNG (e.g. a fixed 1200×630 container screenshotted with Playwright or Puppeteer) or as a standalone SVG that can be exported to PNG.

## Page structure
A social card has no scrolling sections — compose one frame, top to bottom:

1. **Full-bleed background** — one saturated brand colour filling the entire 1200×630 canvas, edge to edge.
2. **Texture layer** — a faint repeating pattern of tiny dots or glyph-like marks tiled across the whole background at very low opacity (~5–8%), giving the flat colour a subtle woven depth.
3. **Bottom glow** — a large radial gradient anchored to the bottom centre: a warm light tone fading upward and outward into the background colour, like a light source below the frame.
4. **Logo lockup** — the user's mark in a single light colour, small (~120–150px wide), centred horizontally, sitting roughly 12–15% from the top of the frame.
5. **Headline capsule** — the focal element: a horizontally centred pill (border-radius ~9999px) in an off-white tint, hugging a short 2–3 word headline. Fill the capsule with padding (~60–80px horizontal, ~40–50px vertical) so the text never touches the curve. Centre the whole group slightly above the vertical midpoint.
6. **Nothing else** — no URL, no tagline sub-line, no CTA button, no illustration. The card is logo + headline + atmosphere.

## Design language
- **One focal point.** Build hierarchy with scale and value, not with more elements. The capsule is the only high-contrast object; everything else is atmosphere.
- **Vertical axis.** Every element is horizontally centred on a single axis; spacing is generous and roughly symmetric top-to-bottom (logo → gap → capsule → gap → glow).
- **Colour treatment.** Full-bleed saturated brand orange ≈ `#F76B15`; capsule in warm off-white ≈ `#FFF6EE`; headline in a very dark warm brown ≈ `#3A1D0E` (near-black but warm, echoing the background hue); glow from ≈ `#FFD9A0` at ~60% opacity fading to transparent. If the user's brand colour differs, swap the orange for it and keep the value structure: saturated field / near-white capsule / dark warm text.
- **Texture, not decoration.** The dot/glyph grid is the only background interest — keep it barely perceptible and never let it reduce headline legibility.
- **Type.** One line, one weight: a bold neo-grotesque or geometric sans at roughly 120–140px, normal case (sentence case reads friendlier than all-caps here), slightly tight letter-spacing (-0.02em). Keep the headline to 2–3 words so the capsule stays an obvious focal shape.
- **Shape and edge.** The capsule's full rounding is the only soft shape; the frame itself stays square. No drop shadows, no borders — separation is done purely with value contrast.
- **Legibility at small size.** The card must read when shrunk to a chat preview: check contrast of text on the capsule and the mark on the background at ~400px wide.

## Never
- Do not reproduce the Cloudflare cloud mark, name, wordmark, or the exact copy "Start building" — use the user's own logo and a placeholder or user-supplied headline.
- Do not copy the reference's typeface; use a similar-feeling licensed or open bold sans chosen for the user's brand.
- Do not add extra content (URLs, buttons, second lines, photography) that would break the single-message composition.
