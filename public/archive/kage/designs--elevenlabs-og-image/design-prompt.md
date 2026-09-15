## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/739514f0-6888-4336-8d0c-fa92ac7af835-1789060753591.webp
- Design on Kage: https://kage.design/designs/elevenlabs-og-image

# Social card: wordmark over warped grid

## Goal
Produce an Open Graph social card image, exactly **1200×630 px**, inspired by a minimal "bold wordmark over a barely-there warped grid" composition. Use placeholder branding: a simple **"II"** two-bar glyph as the logo mark and **"Brandmark"** as the company name.

## Canvas & export
- Fixed canvas of 1200×630 with ~80px safe margins.
- Build as a single HTML file styled at 1200×630 and screenshot it to PNG (or produce an equivalent SVG). Verify the exported image is exactly 1200×630.

## Background
- Warm off-white field: `#F5F4F1`.
- A hairline warped grid: 1px light-gray (`#D9D7D1`) lines forming an undulating tile/mesh that wobbles like distorted graph paper. Render with SVG paths or a tiled SVG pattern — never a photograph.
- Pattern density increases toward the edges and corners; apply a soft radial mask so the center fades almost to plain field, creating a quiet glow directly behind the wordmark.

## Focal element
- One element only: the lockup "IIBrandmark" — the two-bar glyph followed by the name — optically centered horizontally and vertically (wordmark straddling the midline).
- Near-black ink: `#191919`.
- Bold grotesque sans (Helvetica Now, Neue Haas Grotesk, or Inter Tight Bold), tight tracking (~-0.02em), CamelCase "Brandmark".
- Display scale: the lockup spans roughly 50% of the canvas width (approx 560–620px).

## Palette
- Three inks max: `#F5F4F1` field, `#191919` wordmark, `#D9D7D1` pattern lines.
- No colour accents, no hue gradients, no photos or illustrations.

## Hierarchy
- The wordmark is the only focal point; the warped grid is texture. If a tagline is needed, place a single small line under the wordmark in gray, widely-tracked caps and leave the rest of the card empty.

## Never
- Don't crowd the card: no URLs, buttons, avatars, badges or feature icons.
- Don't let pattern lines cross the wordmark at full strength — keep the center faded.
- Don't reuse "ElevenLabs" or its actual logo; placeholder branding only.
- Don't deviate from the 1200×630 export size.
