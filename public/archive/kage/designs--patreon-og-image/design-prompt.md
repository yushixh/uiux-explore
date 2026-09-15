## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/patreon-com/58c60078-c3c4-4242-b2aa-1c98ebc37b20-1789146359394.webp
- Design on Kage: https://kage.design/designs/patreon-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name or wordmark, brand colours, typeface, and whether they have a photo they can use as the card background). Wait for the answers. Everything below is applied to their product with placeholder branding and copy — never reproduce the reference brand.

## Deliverable
Produce a single **1200×630** social share card (Open Graph / Twitter / Slack preview image). Build it as a self-contained HTML file with a fixed 1200×630 root element (render to PNG via a headless browser or screenshot tool), or as an SVG. Keep all critical content inside a ~48px safe margin; the outer ~10% of the card is often cropped in link previews.

## Page structure
1. **Full-bleed background photograph** covering the entire 1200×630 canvas — one moody, atmospheric image with a dark overall exposure. If the user has no photography, build a layered CSS/SVG placeholder: a near-black base (#17110f) with large soft organic shapes (blurred radial gradients or abstract leaf-like blobs) in deep red (#8e1f2f), crimson (#7a1024) and mossy green (#4a5a2a) concentrated along the top and right, leaving a calmer dark zone in the lower-left where the type will sit.
2. **Subject placement**: if using a photo with a person or focal object, position it on the right third, facing or pointing back toward the left where the headline lives. The lower-right may be busier; the lower-left must stay quiet and dark.
3. **Headline block**: two lines of oversized white type filling the lower half — line one starts near the left margin, line two is indented (staggered) so the second line runs wider and slightly lower, roughly 90–120px cap height for the 630px canvas, line-height tight (~1.0), tracking slightly negative. Use a light or regular weight grotesque (e.g. the user's brand sans, or a placeholder like Inter Light / Helvetica Neue Light). The type overlaps the photo directly — no panel, scrim or box behind it; if the chosen photo is too busy, add a subtle bottom-up dark gradient (#17110f at 0% → 45% opacity) purely to hold contrast.
4. **Wordmark**: the brand name (or a placeholder wordmark) set in small all-caps sans, ~24–28px, letter-spaced, white, pinned to the bottom-left corner roughly 48px from the edges, optically aligned to sit near the baseline zone of the headline. This is the only brand element.
5. **Optional optional-extras to avoid**: no logos rows, no URLs, no buttons, no secondary copy. Three layers only: photo, headline, wordmark.

## Design language
- **Three-layer hierarchy**: image establishes mood, one short headline carries the entire message, one small wordmark brands it. Nothing else competes.
- **Type scale is extreme**: headline at roughly 15–20% of the canvas height, wordmark at roughly 4%. The ~5× jump between them is what makes the card readable at thumbnail size.
- **Staggered line breaks**: break the headline into two lines and indent the second line so the text block reads as a composed shape, not a left-aligned rectangle. Break on meaning, not on width.
- **Contrast by exposure, not overlay**: use photography dark enough (near-black base, deep reds and greens) that white type sits directly on it. Darkening scrims are a last resort, kept as soft gradients, never solid panels.
- **Palette discipline**: dark near-black ground (#17110f–#1a1512), one warm accent family (deep reds #8e1f2f / #7a1024) and one organic secondary (moss/olive greens #4a5a2a); type and wordmark pure white (#ffffff). Swap these hues for the user's own brand palette but keep the same value structure: very dark ground, rich mid-tone accents, white type.
- **Composition rule**: subject mass on the right, type mass on the bottom-left, gaze or visual vectors pointing from subject toward type.
- **No motion**: a social card is static — design for legibility at ~600×315 and at 120px-wide thumbnails; check the headline stays legible when scaled to 25%.

## Never
- No Patreon name, wordmark, logo, coral brand colour, tagline, or the reference headline copy.
- No photography or illustration taken from the reference; use the user's own imagery or the abstract gradient placeholder described above.
- Never present the result as Patreon's card or reuse its exact composition with its branding; apply the composition to the user's product, name and copy.
