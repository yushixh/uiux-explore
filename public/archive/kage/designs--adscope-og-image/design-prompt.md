## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/adscope/409d7a1d-92c0-40b0-b9fb-2f3876456faf-1789106620991.webp
- Design on Kage: https://kage.design/designs/adscope-og-image

## Before you start
Ask the user what product this social card is for, who will see it when the link is shared (X, Slack, LinkedIn, iMessage), what brand assets they already have (name, colours, typeface, logo), and what the single most convincing thing about the product is. Wait for the answers. Everything below is applied to *their* product with *their* branding — the reference is only a composition to learn from. Produce the card as a 1200×630 image: either a single HTML/CSS file at exactly 1200×630 rendered to PNG (e.g. with Playwright), or an SVG with `width="1200" height="630"`. Keep all text as real text, never baked-in raster type.

## Page structure
Build the 1200×630 canvas as a full-bleed, slightly cropped product screenshot — the UI itself is the image:

1. **Canvas & frame** — a black (#0E0E0C) backdrop. The product UI panel sits nearly edge-to-edge with a rounded top-left corner (~24px radius) so the dark ground peeks out at that corner, reading as a crisp screenshot floating on dark.
2. **KPI band (top ~90px, full width)** — four equal-width stat cards in solid candy colours (lime, periwinkle, orange, pink), each holding one huge bold currency/count figure (~64–72px) with a small circled info icon at its right. This band is the card's headline; the numbers do the talking.
3. **Toolbar row** — left: two source chips with small placeholder platform glyphs and labels; centre: a rounded search field with a magnifier icon; right: a segmented toggle whose active segment is tinted lavender, plus a filter button with a funnel icon.
4. **Campaign grid (3 columns)** — two-plus rows of white cards, each containing: a bold title line, a status pill (Active = lime, Paused = pink), a light type chip (e.g. "Leads campaign"), three beige metric tiles (bold value over a small grey label), and a black circular arrow button pinned top-right. Crop the last row at the canvas's bottom edge so the grid bleeds off.
5. **Phone mockup (overlapping lower-left)** — a straight-on phone with dark bezel and notch, layered over the grid's left column. Its screen shows the mobile dashboard: a wordmark row, a 2×2 grid of mini KPI tiles reusing the same candy colours, and a bottom sheet titled "Pinned ads" listing two pinned-item cards (square thumbnail, name, pin icon, small metric chips like spend/reached/leads).

## Design language
- **Hierarchy:** let the coloured KPI band be the headline; the oversized numerals (~64–72px, bold, tight tracking) are the first read, everything else recedes. No headline copy is needed — the product is the pitch.
- **Palette:** cream canvas #F5F2EC behind the UI; white #FFFFFF cards; candy accents — lime #D9F45B, periwinkle #8F95F2, orange #F2763A, pink #F2A9EA; ink black #111111 for numerals, text and circle buttons; lavender tint #C9C6F5 for active toggle segments; beige #EFEAE0 for inner metric tiles.
- **Numbers-first pattern:** every metric is a bold value over a 12–13px sentence-case label at ~60% black. Never decorate numbers — give them room and weight.
- **Pills and chips:** fully rounded; status colours use the accent palette at full saturation with black text; type chips are pale beige with grey text.
- **Cards, radius, shadow:** stat cards ~16–20px radius with no borders; grid cards white with hairline borders or none; inner metric tiles beige. Depth comes from *overlap* (phone over grid, panel over black canvas), not heavy shadows — at most one soft shadow under the phone.
- **Type:** one grotesque sans throughout; semibold/bold numerals, medium labels, sentence case everywhere.
- **Cropping as a device:** bleed the grid off the bottom edge and let the phone cover the left column — the card should imply a larger live product beyond the frame.
- **Density and rhythm:** high and even; the KPI band is loud, the toolbar is quiet, the grid is informationally dense with consistent 16–20px gutters.

## Never
- Do not use real platform logos (Google, Meta or any other), real campaign names, real ad copy or photographic ad thumbnails — invent placeholder glyphs, generic campaign names ("Spring Launch — B2B") and neutral grey placeholder thumbnails.
- Do not reproduce the reference's product name, wordmark, flower glyph, tagline or any of its campaign titles and figures; substitute the user's own branding and fictional data.
- Never present the result as the reference product — it is a 1200×630 social card for the user's product, styled after this composition.
