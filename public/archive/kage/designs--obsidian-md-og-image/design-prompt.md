## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/91fb2998-f7fa-49ad-9740-c23f99f05743-1789060136570.webp
- Design on Kage: https://kage.design/designs/obsidian-md-og-image

# Social card in the style of a dark app-brand OG image

Produce a **1200×630 Open Graph social card image** (for example an HTML/CSS file rendered to PNG at exactly 1200×630, or a standalone SVG with a 1200×630 viewBox). Use **placeholder branding and copy** — do not reproduce any real product's name, logo or tagline.

## Before you start
Ask the user:
1. What product or project is the card for, and who is it shared with (Slack, X, LinkedIn previews)?
2. What brand assets exist: product name, tagline, logo/app-icon artwork or a description of it, and brand colours?
3. Light or dark brand direction, and any font they already use?

Wait for the answers. Everything below is applied to *their* brand, not to the reference.

## Canvas and composition
- Canvas: 1200×630, background near-black `#0a0a0d` with a very subtle texture — either a barely-visible noise/smoke layer at 3–5% opacity or a soft radial vignette darkening toward the corners. It must not read as flat pure black or as a visible gradient band.
- One horizontal lockup, vertically centred, starting about 150px from the left edge:
  1. **App icon**: a rounded square (~280×280px, corner radius ~22%, i.e. a squircle) filled a slightly lighter charcoal than the canvas (e.g. `#1b1b1f`), containing the brand mark or a simple abstract placeholder shape in the brand's accent colour. Add a faint 1px inner highlight on the top edge.
  2. **Wordmark**: the product name to the right of the icon, ~64px gap between icon and text. Bold geometric sans-serif, ~140px, white `#ffffff`, tight letter-spacing (around -0.02em).
  3. **Tagline**: directly below the wordmark, ~56–64px, regular weight, same typeface, in the brand's accent colour (in the reference this is a lavender-purple around `#9a86f0`; substitute the user's brand accent).
- Keep the text block top-aligned with the icon's upper third so the whole lockup feels optically centred.
- Leave the entire right third of the canvas empty. Negative space is the design; do not add decoration, URLs, patterns or secondary content there.
- No drop shadows on text; at most a very soft shadow under the icon.

## Design language
- Hierarchy by scale and colour contrast only: white display type first, accent-coloured subline second, icon as the left anchor. Only three values on the card: near-black ground, white headline, one accent.
- Use a single sans-serif family in two weights (bold for the name, regular for the tagline) rather than pairing two typefaces.
- The accent colour appears exactly twice — the logo shape and the tagline — which ties the lockup together.
- Corners are generous and rounded on the icon; text and canvas stay square. No borders, no cards, no panels.
- Test legibility at 300×158: the name must still be readable, which is what the huge type scale and empty right side buy you.

## Never
- Never use the name "Obsidian", its gem/crystal logo, or the copy "Sharpen your thinking."
- Never copy any real wordmark, icon set or illustration from the reference; build placeholder shapes and type from the user's own brand assets.
- Never present the result as the reference product.
