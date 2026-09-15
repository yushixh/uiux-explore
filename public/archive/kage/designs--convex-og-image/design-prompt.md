## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/convex-dev/5704689a-4e54-47c5-9b94-ca2cfc834ea7-1789073646778.webp
- Design on Kage: https://kage.design/designs/convex-og-image

## Before you start
Ask the user what product or announcement the card is for, who will see it (X, Slack, LinkedIn, iMessage previews), what one short punchy line it should carry, and which brand assets already exist (name, logo file, brand colours, typeface). Wait for the answers — every decision below is applied to their brand, not to any reference. If their brand has fewer than three accent colours, reduce the stripe count rather than inventing colours.

## Output
Produce one social card at exactly 1200×630 as a single self-contained HTML file (fixed-size body, real text, CSS only) that can be screenshotted to PNG, or as a standalone SVG with `viewBox="0 0 1200 630"`. Keep all text inside a ~64px safe margin so link previews never crop it. No external images; fonts from system stacks or one Google Fonts link.

## Card structure
1. **Background field** — full-bleed warm cream (#F2EFE4) with a faint graph-paper grid (~45px cells, hairlines at ~5% black) across the whole canvas; subtle enough to almost disappear at feed size.
2. **Headline block** — upper-left, starting ≈150px from the top and 64px from the left: a two-line statement in ALL CAPS, each line ≈110–120px, weight 800–900, letter-spacing −0.01em, line-height 0.95, in near-black ink. Choose line breaks so both lines have similar width and the block ends before the ribbon's corner zone on the right.
3. **Signature stripe ribbon** — an L-shaped band framing the bottom edge and right edge: parallel flat stripes (~42px tall each) running left-to-right across the lower third, then making one shared rounded 90° turn (outer corner radius ≈120px, stripes nested concentrically, never overlapping) and running off the top-right corner. Accent stripes sit inside the ribbon ordered light-to-dark toward the outside, and the outermost stripe uses the dark ink colour so it doubles as the brand band.
4. **Wordmark lockup** — bottom-left inside the dark band: a small circular geometric mark (~44px) beside the product name in lowercase, set in the cream colour, vertically centred, with ~56px left padding and clear space below.

## Design language
- **One idea per card**: a single oversized statement, one decorative ribbon, one brand lockup — nothing else competes for attention.
- **Poster hierarchy**: type is the loudest element, the colour ribbon second, the wordmark last; scale the headline until it nearly touches the safe margins.
- **Flat everything**: solid fills only — no gradients, shadows, borders, textures or photography. Contrast comes from colour adjacency and type weight alone.
- **Palette**: cream #F2EFE4 for the background and reversed type, near-black ink #2B201A for headline and outer band (warm it toward brown so it sits with the cream), then three accent stripes — amber #F6A800, red-orange #E5482F, purple #8B2EB2 — replaced by the user's own accents.
- **Ribbon geometry**: all stripes identical thickness; the turn is one shared concentric corner, not separate bends; the ribbon must read as a single object sweeping bottom-left → top-right and enclosing the composition's bottom and right.
- **Type**: one heavy grotesque for the headline (e.g. Archivo, Inter or Helvetica at 800+), a rounded lowercase sans for the wordmark; no more than two families, no italics, no light weights.
- **Texture budget**: the hairline graph-paper grid is the only decoration; it hints at technical/developer territory without clutter.
- **Motion**: none — this is a static image; interactions do not apply.

## Never
- Never use Convex's logo, wordmark, the copy "All gas no breakages", or its exact stripe artwork; never present the result as Convex or mention the company.
- Never reuse the reference's headline text or tagline — write all copy from the user's product and positioning.
- Never introduce stock photography, illustrations, 3D renders or emoji that break the flat poster language.
