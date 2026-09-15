## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/labs-winszn-xyz/6ad37686-f9b4-4b5c-8ea7-3a5a769d110e-1789097587229.webp
- Design on Kage: https://kage.design/designs/labs-winszn-og-image

## Before you start
Ask the user what product or project this is, who it is for, and what brand assets they already have (name or wordmark text, one accent colour, any secondary colour, and a preferred typeface). Wait for the answers before generating anything. Then produce **one 1200×630 Open Graph social card** as a single self-contained HTML file with a fixed 1200×630 body (render to PNG via a headless screenshot, or export the same layout as SVG), using *their* branding and copy as placeholders — not the reference's.

## Canvas composition (top to bottom)
1. **Canvas**: exactly 1200×630, flat near-black background (≈ #161616), no gradients, no textures. Consistent outer margin of ~70px on all sides; keep all critical content inside it so platform crops can't clip it.
2. **Wordmark lockup (top-left, y ≈ 70–90)**: a small solid accent square (~16px) beside the studio/product name set in uppercase, ~13px, letter-spacing ~0.18em, warm off-white (≈ #CFCBC2). This is the only branding on the card.
3. **Accent slab (top-right bleed)**: one flat orange rectangle (≈ 275px wide × 500px tall) anchored flush to the top and right edges, fill ≈ #EB4604. It is pure geometry — no imagery, no text inside.
4. **Overlap square**: a slightly lighter near-black square (≈ 270×215px, fill ≈ #1F1F1F) sitting on top of the accent slab's left edge (overlapping it by ~100–120px), vertically around the middle-lower third. The tonal step between the two darks creates depth with zero shadows.
5. **Headline (left column, starting y ≈ 250)**: the card's focal point. Three short lines of display copy in a neo-grotesque sans (Helvetica/Neue Haas/Inter class), ~76px, line-height ~1.05, letter-spacing ≈ -0.01em, pure white, sentence case ending with a period. Left-aligned, max-width ≈ 640px, so the right column of blocks stays clear.
6. **Hairline rule (y ≈ 550)**: a 1px rule in ≈ #3A3A3A spanning from the left margin to the right margin.
7. **Footer metadata row (below the rule, y ≈ 580–595)**: left side, one uppercase tracked micro-label (~13px, letter-spacing ~0.15em, grey ≈ #8A8A85) naming the studio's discipline; right side, two right-aligned hex codes printed as text — the accent hex in its own colour (#EB4604) and a quiet secondary hex in a sage/olive tone (≈ #99A57D). This palette-footnote device is the card's signature detail: replace with the user's own hex values.

## Design language
- **Colour system**: one near-black ground, one off-white for display type, one hot accent used in exactly two places (the slab and one footer token), one muted secondary used only in the footer. Never more than these four values; everything else is tonal greys of the background.
- **Type system**: a single grotesque family carrying the whole card. Contrast is built by scale and tracking, not by weight jumps: display at ~76px with tight leading versus micro-labels at ~13px with wide (+0.15–0.18em) tracking and uppercase. Sentence case for the headline, all-caps for everything auxiliary.
- **Composition rules**: asymmetric two-column weight — type mass on the left ~55%, geometric mass on the right ~25% with breathing room between. Blocks bleed off an edge to imply a larger canvas. Depth comes only from flat fills overlapping (tonal step), never from shadows, gradients or borders.
- **Rhythm**: quiet top (micro-label), large empty black field, dense headline block, then a hard horizontal break (hairline) into a fine-grained footer. One accent moment, everything else monochrome.
- **Motion/interaction**: none — it is a static export. Ensure AA contrast for headline and footer text against the dark ground at small preview sizes.

## Never
- No use of the reference's name (
