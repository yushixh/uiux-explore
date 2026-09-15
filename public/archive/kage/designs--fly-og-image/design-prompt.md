## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fly-io/db93fd12-4100-40b6-bdb9-993ad06900e9-1789073681174.webp
- Design on Kage: https://kage.design/designs/fly-og-image

## Before you start
Ask the user what product or page this card is for, who the audience is, and what brand assets they already have (name, tagline or headline, brand colours, any typeface or mascot/illustration style). Wait for the answers before designing. Everything below is applied to *their* product with placeholder branding and copy — it is a compositional recipe, not a reference clone.

## Page structure
Produce a **1200×630 social card** (e.g. a single HTML/CSS file sized exactly 1200×630 rendered to PNG via headless Chrome, or a standalone SVG that can be rasterised).

1. **Background canvas** — one full-bleed vertical gradient: pale powder blue (#cfe4f0) at the top dissolving into soft peach-pink (#f5cfc4) at the bottom, like a sky. Add 2–3 faint, low-contrast distant silhouettes (soft clouds or blurred shapes, ~15–20% opacity) scattered mid-canvas for depth.
2. **Headline block (left ~50% of width)** — the only text on the card. A short two-line headline in sentence case, left-aligned, vertically centred slightly above the middle. Generous safe margin (~90–110px from the left edge) so text survives preview cropping. No body copy, no CTA, no URL.
3. **Illustration cluster (right ~40%, bleeding off the top and right edges)** — one hero object that represents the product, anthropomorphised (a face, wings, or limbs) in a hand-drawn style with bold dark outlines and flat fills. Two to four smaller companion objects behind and around it at decreasing scale, plus one or two small satellite details (tiny birds, stars) in the gaps.
4. **Connective ribbon layer** — 3–4 long wavy ribbon strokes in teal (#4fd6c5), magenta-pink (#ef6ea8) and sky blue (#6fa9e6), ~8–14px thick with rounded ends, sweeping from the lower-left region up through the illustration to the upper-right. They pass *behind* the headline (never through the letterforms) and overlap the illustration edges.

## Design language
- **One message per card.** The headline is the entire copy load; keep it under ~8 words and split it over two lines with a deliberate break.
- **Hierarchy via contrast, not size alone.** The type is the darkest element on the canvas (near-black charcoal, #242424), so it wins the focal order instantly at thumbnail scale. Background stays pastel; illustration stays mid-saturation.
- **Type:** a high-contrast old-style or transitional serif (Georgia, Freight, Source Serif or similar), sentence case, ~100–120px on a 1200px canvas, tight leading (~1.02–1.08), slight negative tracking. Never all-caps, never a geometric sans for this card style.
- **Colour:** pastel sky gradient (#cfe4f0 → #f5cfc4) as the field, one saturated hero-object colour (here a violet #9b7ceb — substitute the user's brand colour), one warm accent for the companion character (yellow #eec643), and 3 ribbon accents (teal #4fd6c5, magenta #ef6ea8, blue #6fa9e6). Text stays charcoal; never colour the headline.
- **Illustration rules:** hand-drawn feel — bold near-black outlines (~3–5px), flat fills with a subtle noise/grain texture overlay, simple dot eyes and expressive beaks/mouths, exaggerated proportions (oversized wings, tilted stances). The hero object is unmistakably a representation of the user's product (a server, a document, a phone, a chart — whatever fits), given personality.
- **Composition & motion:** asymmetric split, text left / image right. Diagonal energy flows lower-left → upper-right via the ribbons. Let the illustration cluster bleed off the top and right edges; never centre-align everything. Vertical rhythm: headline optical centre sits at ~45% height.
- **Static output:** no animation is required; if exporting from HTML, add `@media print`-safe fonts or embedded webfonts and ensure the PNG is exactly 1200×630, sRGB, under ~1MB.

## Never
- Do not use the Fly.io name, wordmark, or the headline "Computers for agents" — replace with the user's own placeholder brand and copy.
- Do not copy the winged bird-server characters, their specific shapes, faces or the exact illustration set; invent an equivalent mascot concept from the user's product domain.
- Do not reproduce the exact gradient stops, ribbon colours or composition pixel-for-pixel; keep the compositional grammar but re-express it with the user's palette.
- Never present the result as Fly.io's card or include their logo, favicon or tagline.
