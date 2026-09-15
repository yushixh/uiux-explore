## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/d652d23a-d8d4-4103-8014-794a8c98541c-1789066880200.webp
- Design on Kage: https://kage.design/designs/framer-og-image

## Before you start
Ask the user what product or site this social card is for, who will see it when shared (X, Slack, LinkedIn, iMessage), and what brand assets they already have: a logomark (glyph, not wordmark), brand colours, and a display typeface. Wait for the answers. Everything below is applied to *their* brand, not to the reference.

## Canvas structure
Produce a **1200×630 social card image** — a single HTML file with a fixed 1200×630 body rendered to PNG (e.g. Playwright/Puppeteer screenshot at exactly 1200×630), or a standalone 1200×630 SVG.

1. **Full-bleed mosaic background**: four-to-five uneven columns of placeholder tiles filling the whole canvas edge-to-edge. Tiles vary in height (masonry rhythm, not a uniform grid); tiles touching the canvas edges are deliberately cropped mid-content so the mosaic feels like a window onto something bigger.
2. **Thin gutters**: 8–12px gaps between tiles, filled with the near-black background so the mosaic reads as many separate artefacts, not one image.
3. **Centre cross**: a solid near-black vertical column (~200px wide) spanning the full height, crossed by a near-black horizontal band (~180–220px tall) across the vertical middle. Together they form a plus-shaped calm zone over the noisy collage.
4. **Logomark**: the user's glyph in solid white, roughly 90–110px tall, dead-centre at the cross intersection. This is the *only* brand element — no headline, no tagline, no URL. Keep it at least 60px inside the canvas so aggressive crop previews (X, iMessage) never clip it.
5. **Optional small caption**: only if the user asks for one, a tiny lowercase wordmark or handle in a bottom corner, ≤14px, white at ~70% opacity. Default is mark-only.

## Design language
- **Focal hierarchy through contrast, not size**: one calm solid-black zone amid deliberate visual noise; the mark is the highest-contrast element and everything else recedes into texture. Do not add competing text near the mark.
- **Grid rhythm**: masonry columns with mixed tile heights and at least one tile of each scale (full-height, half, small fragment). Cropped edge tiles create energy; the centred cross creates stillness. The composition is a figure-ground trick: noise vs. silence.
- **Colour**: background and gutters near-black `#0A0A0A`; mark pure white `#FFFFFF`. Tiles are highly saturated placeholders drawn from the user's palette or a tight analogous set — e.g. red `#E23B2E`, orange `#E8762C`, lime `#B6E93D`, pink `#F273B0`, violet `#7A5CF0`, sky `#5C8DF0`. No muted or pastel tones; saturation is what makes the mosaic read at thumbnail size.
- **Tile content**: build placeholder art, not screenshots — CSS gradients, oversized display-type specimens used as graphic texture (tight tracking, big scale, cropped by the tile), simple abstract shapes, or duotone colour blocks. Each tile should feel like a distinct mini-composition.
- **Type pairing**: if tiles contain type specimens, use one heavy display face at very large sizes with tight leading; letterforms are texture, not message — no readable sentences beyond a word or two.
- **Borders, radius, shadow**: tiles are square or ≤8px radius, zero shadows, flat print-collage feel. Depth comes only from colour contrast.
- **Motion**: none — this is a static render; design purely for the frozen 1200×630 frame.

## Never
- Never reproduce the Framer logomark, wordmark, name, or any of the actual site thumbnails visible in the reference.
- Never present the result as Framer's card; all branding and tile content must be placeholder art built from the user's own brand assets.
- Never add a headline, CTA, or marketing copy to the canvas — the composition works precisely because the mark is the only message.
