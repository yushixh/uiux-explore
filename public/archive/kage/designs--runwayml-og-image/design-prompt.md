## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/89370747-7699-4034-81b1-650c02a28dbc-1789073700462.webp
- Design on Kage: https://kage.design/designs/runwayml-og-image

# 1200×630 social card — cinematic gradient + single-line headline

## Before you start
Ask the user what product or page this card is for, who the audience is, and what brand assets they already have (brand name, wordmark, colours, typeface, tagline). Wait for the answers. Everything below is applied to that brand, using placeholder name and copy — never the reference brand.

## Output
Produce a 1200×630 OG/social card image. Recommended: a single self-contained HTML file with a fixed 1200×630 canvas, rendered to PNG at exactly 1200×630 (e.g. Playwright `page.screenshot()` on the clipped body), or a standalone SVG. It is a static asset: no scroll, no animation, no interactivity.

## Page structure
1. **Full-bleed background field (100% of canvas):** a soft, out-of-focus atmospheric gradient. Build it with 3–4 layered radial-gradients and a slight blur: a pale warm light source anchored lower-left/centre-left, fading through a muted sage-grey midtone, into a deep desaturated teal, with the top-left and top-right corners pushed darkest (a gentle corner vignette). It should read like a defocused still, not a hard-edged gradient — no banding, no visible gradient stops, no shapes.
2. **Headline zone (optical middle, ~42–55% of canvas height):** one single line of white text spanning roughly 80% of the canvas width, left edge starting ~8% from the left. This is the only message on the card. If the brand line is too long for one line, reduce size rather than wrapping.
3. **Wordmark zone (bottom centre, baseline ~88–90% of canvas height):** the brand name only, lowercase, small, white, centred horizontally. No tagline, no URL, no icon next to it.

## Design language
- Atmosphere over product: no screenshots, no UI mockups, no devices. The image itself is the mood; text floats directly on it.
- Colour: approximate anchors — pale warm mist `#f0eee7`, sage-grey transition `#9aa8a2`, deep teal `#2d4a50`, near-black teal corners `#15232a`. All text pure white `#ffffff`. Keep the palette to this one warm-to-cool sweep; no accents, no secondary hues.
- Hierarchy by scale alone: one large light headline (~64–72px at 1200px width, weight 300, tracking ≈ -0.01em) and one small wordmark (~26–30px, weight 400). Nothing between them. Contrast comes from the size gap and the dark backdrop, not from weight or colour changes.
- Legibility without boxes: never put text on plates or pills. Instead, ensure the darkest gradient areas sit behind the text zones — deepen the top corners and the mid-right region so white type always clears 4.5:1 against the background.
- Type: one neo-grotesque family throughout (Inter, Helvetica Now or the brand's sans). No serifs, no all-caps, no letterspacing games. The wordmark may be set lowercase in the same face.
- Borders, radius, shadow: none. The card is borderless, edge-to-edge, with no cards, chips, buttons or logos beyond the wordmark.
- Composition: generous negative space is the point — at least 40% of the canvas should carry no text. Align the headline to the horizontal centre line and the wordmark to the vertical axis so the two elements form a quiet vertical relationship.
- No motion; export once, crisp at 2× if a retina variant is wanted.

## Never
Never use the reference brand's name, wordmark, tagline or exact headline copy ("runway", "Building Real-World Intelligence"). Never reproduce its imagery, film stills or icon set. Deliver the card as the user's own brand: placeholder name and headline unless the user supplied real ones, and never present the result as the reference product.
