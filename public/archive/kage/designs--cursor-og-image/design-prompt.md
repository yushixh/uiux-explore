## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cursor-com/1b926a64-dd36-492d-809b-5b7b714d24d7-1789072668322.webp
- Design on Kage: https://kage.design/designs/cursor-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo mark, brand colours, typefaces). Wait for the answers before designing. Everything below is applied to their product and their assets, not to the reference brand.

## Deliverable
Produce a **1200×630 social share card** (Open Graph / Twitter summary large image). Build it as a single self-contained HTML file with a 1200×630 fixed-size stage (render to PNG via a headless browser or screenshot tool), or as a standalone SVG with `width="1200" height="630"`. Output one static image — no animation needed.

## Canvas composition
- **Background field**: one solid near-black plane filling the entire 1200×630 canvas. No gradients, no patterns, no border, no vignette.
- **Single focal lockup**: the product's mark and wordmark placed together as one group, horizontally centered and at the optical vertical center (slightly above true center reads best). The lockup should occupy roughly 45–55% of the canvas width, leaving enormous margins on all sides.
- **Mark**: a simple geometric container shape (hexagon, square, circle — or the user's existing mark) with the brand's motif expressed as a **negative-space cutout** inside it. The shape is filled in the foreground colour; the motif appears as background showing through.
- **Wordmark**: the product name in all caps, positioned to the right of the mark with a gap of about half the mark's width. Cap height should approximately match the mark's height so the two read as one unit.
- **Nothing else**: no tagline, no URL, no screenshot, no UI mockup. If the user insists on a supporting line, add a single small tagline centered below the lockup in muted colour — but the default is one lockup only.

## Design language
- **Hierarchy by scale and contrast, not layout**: with only one element on the canvas, hierarchy comes entirely from the mark's scale against the empty field. Keep at least 120px of clear space between the lockup and any canvas edge.
- **Colour treatment**: a two-colour card — near-black background (`#0B0B09`–`#111111`) and warm off-white foreground (`#F5F5F2`). If the user's brand uses a dark palette, invert: light background, near-black lockup. Never more than the background colour plus one foreground colour.
- **Typography**: a geometric or grotesque sans with a slightly extended feel, set in ALL CAPS with generous letter-spacing (`letter-spacing: 0.04em–0.08em`), medium-to-bold weight (500–700). One typeface only. Wordmark size around 90–110px cap height at 1200px canvas scale.
- **Mark craft**: geometric shapes only — straight edges, symmetric construction, no rounded-blob styling. The negative-space cutout should be the most distinctive element on the card; make it bold enough to survive being displayed at 200px wide in a chat preview.
- **Density and rhythm**: maximum negative space. The empty field is the composition; do not fill it with texture, noise, or secondary content.
- **Contrast check**: pure white-on-black or near equivalents only — the lockup must stay readable at small thumbnail sizes and in dark-mode chat clients.

## Never
- Do not reproduce the reference brand's logo, cursor-arrow motif, wordmark, or name — use the user's own branding or explicit placeholder branding (e.g. "ACME" with a generic geometric mark).
- Do not add screenshots, gradients, glass effects, or decorative elements — the strength of this composition is its restraint.
- Never present the result as the reference product; it is a template of a composition style, applied to the user's product.
