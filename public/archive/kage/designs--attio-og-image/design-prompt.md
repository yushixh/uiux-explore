## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/7960880a-2ea4-411b-b93d-ba863f84325e-1789066874297.webp
- Design on Kage: https://kage.design/designs/attio-og-image

## Before you start
Ask the user what they are building, who it is for, what the card is announcing (product launch, feature, event), and what brand assets they already have (name, logo mark, colours, typeface). Wait for the answers. Everything below is then applied to *their* product with placeholder branding and copy — never to the reference product.

## Deliverable
Produce a single **1200×630** social card image. Best done as one self-contained HTML file with a fixed `1200×630` root (no scroll) that can be screenshotted to PNG via a headless browser, or as a standalone SVG with the same geometry. All text must be real text/vector shapes, not a photo.

## Page structure
- **Canvas**: one frame, 1200×630, off-white background, ~80px safe margin all round. No sections, no scrolling — a single composed rectangle.
- **Top band (upper ~45%)**: a motif of five outlined isometric hexagonal prism shapes, overlapping in a horizontal chain that starts near the horizontal centre and runs to the right edge, slightly cropped by the margin. Each shape is a thin solid outline with dashed interior fold lines, like a technical dieline. Faint dashed hairline grid lines (horizontal and vertical, aligned to the safe margins) sit behind them and are most visible on the left half of the canvas.
- **Bottom-left block**: a three-line headline, left-aligned, sentence case, ending in a period. The three lines step down in tone — line 1 near-black, line 2 mid gray, line 3 lightest gray — so the type fades as it descends.
- **Bottom-right**: logo mark + wordmark lockup in solid ink, sitting on roughly the same baseline as the headline's last line. This is the only fully black element in the lower half.

## Design language
- **Colour**: off-white ground `#F1F1F2`; near-black ink `#1A1A1A` for headline line 1 and the logo; mid gray `#8B8E94` for line 2; light gray `#B9BCC2` for line 3; hairlines `#DCDCDC`. Optional single brand accent only if the user's brand demands it — the reference works with zero accents.
- **Type**: one geometric grotesk sans throughout. Headline bold, ~96px, line-height ~0.95, tight tracking, sentence case with a terminal period for a deadpan, confident voice. Wordmark medium weight, ~64px, letter-spacing slightly negative.
- **Linework aesthetic**: 2px solid outlines on shapes, dashed 1.5px interior lines, generously rounded corners on the geometry. The illustration style reads as an engineering drawing — no fills, no gradients inside shapes, no shadows.
- **Composition**: exactly two anchors (motif top-right, headline bottom-left) creating diagonal tension; everything else is negative space. Do not add extra copy, buttons, or decoration.
- **Texture**: expose the underlying layout grid as faint dashed hairlines so the whitespace feels constructed rather than empty.
- **Motion**: none — it is a static image; export at exactly 1200×630 and keep text above ~24px so it stays legible in Slack/X previews.

## Never
No reference-brand name, wordmark, logo mark, or headline copy ("Customer Relationship Magic." and similar) — invent placeholder brand and copy for the user's product. Do not copy the specific hexagon-prism motif verbatim; use the *language* (outlined isometric forms with dashed fold lines) with the user's own geometry. Never present the result as the reference product.
