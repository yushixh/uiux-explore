## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/81666b05-7983-4e17-85c9-eae9593d3d46-1789059997848.webp
- Design on Kage: https://kage.design/designs/supabase-og-image

## Before you start
Ask the user what product the card is for, who it is for, and what brand assets already exist (name, logo glyph, accent colour, typeface). Wait for the answers. Everything below is applied to their brand, not to the reference.

Produce the card as a 1200×630 social share image — ideally an HTML/CSS file at exactly 1200×630 rendered to PNG (e.g. with Playwright or a screenshot step), or a standalone SVG with that viewBox. Use placeholder branding and copy throughout.

## Page structure
- **Canvas**: one flat 1200×630 rectangle in near-black (approx #1C1C1C). No background image, no gradient, no border, no noise.
- **Lockup zone** (top, centred at roughly y = 18%): the brand glyph (about 40×40px) horizontally adjacent to the wordmark in lowercase bold sans, white, around 28–32px. Glyph and text share one optical baseline and sit as a single centred unit with a small gap (8–12px).
- **Headline zone** (centred at roughly y = 45–55%): a two-line stacked headline, each line 68–80px in the same bold geometric sans, line-height about 1.15, both lines centre-aligned. Line 1 is white; line 2 uses the single brand accent colour (reference palette uses approx #3ECF8E).
- **Everything else**: deliberate emptiness. No URL, no CTA, no product screenshot, no footer strip. Margins of at least 96px on all sides are never crossed by content.

## Design language
- One vertical centred axis carries the whole card; nothing is off-axis, so the composition survives aggressive cropping in chat clients and feeds.
- Hierarchy is built almost entirely by colour inversion on identical type: same size, same weight, same family for both headline lines — only the fill colour changes. Apply this rule to the user's copy (e.g. white payoff line, accent-coloured second line).
- Use exactly one accent colour per card, reserved for the second headline line and the glyph; everything else is white on near-black. Two or three colours total, zero tints or opacity tricks.
- Type: a single heavy geometric sans throughout (Circular/Circular-like; fall back to system geometric sans). Wordmark lowercase, headline sentence case, tracking slightly tight (-1% to -2%) at headline sizes so the two lines read as one block.
- Flat colour only: no shadows, no strokes, no gradients, no rounded panels. Contrast between white and #1C1C1C is the entire visual engine.
- Density is extremely low — two content clusters and space. Keep the headline to at most ~30 characters per line so it holds at 200px-wide previews.
- No motion or interaction: it is a static image; ensure text contrast passes WCAG AA at small sizes.

## Never
Never reproduce the reference's name, wordmark, lightning-bolt glyph, or its exact tagline copy; substitute the user's own brand and a fresh two-line headline. Do not add product screenshots, illustrations, logos of third parties, or decorative imagery that the reference card does not have. Never present the result as the reference product.
