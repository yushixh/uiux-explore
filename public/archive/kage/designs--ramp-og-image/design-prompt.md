## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/bf99583e-6458-4fe5-9cfe-adbf22697d1b-1789070601621.webp
- Design on Kage: https://kage.design/designs/ramp-og-image

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name or wordmark, logo mark, brand colours, typeface). Wait for the answers. Every rule below is then applied to *their* product — the reference is only for composition and mood. If they have no logo mark, use a simple geometric placeholder glyph.

## Page structure
Produce a **single 1200×630 social card image** (HTML/CSS sized exactly 1200×630 and rendered to PNG, or an SVG with `width=1200 height=630` and a PNG export path). This is an OG image: no scrolling, no navigation, everything must fit and be legible at small share sizes.

1. **Canvas** — full-bleed warm light-grey background (≈ `#E9E8E4`). No gradient, no pattern; it is the quiet stage everything floats on.
2. **Left wordmark zone** — the brand wordmark plus small logo glyph, set in near-black (`#111`), vertically centred in the left third of the canvas. Big display-size lowercase text with generous empty space around it; this zone breathes.
3. **Centre hero object** — one large product artefact (a card, device, document or app window) at roughly 400×270px, centred slightly right of the wordmark. Give it a rich dark surface with a subtle texture (fine concentric or contour lines at low opacity), a small embossed brand mark in the top-left corner, and one realistic physical detail (a chip, port, badge). Deep drop shadow to lift it off the canvas.
4. **Right rail of UI tiles** — three to four small white cards (≈ 320px wide) stacked vertically along the right edge, bleeding slightly off the canvas top and bottom for a collage feel. Top tile: a transaction/notification row (small logo chip, name, one-line status, amount right-aligned). Middle tile: a mini data-viz card with filter tab labels and a stacked area chart in 4–5 saturated colours on a white ground. Bottom tile: a compact user row with avatar, name and a status pill.
5. **Bottom-centre currency/conversion chip** — two small stacked tiles under the hero object: a muted grey tile showing a source amount, a small down-arrow, and a bright accent-coloured tile below it showing a converted amount. This is the one deliberate spot of accent colour in the lower half.
6. **One progress vignette** — inside one of the tiles include a labelled progress bar (e.g. spent vs. monthly limit) with a green fill, to signal real product state rather than decoration.

## Design language
- **Composition rule:** hero-first asymmetry. One big dark focal object, one typographic anchor in emptiness, then a rail of small supporting tiles. Nothing is centred symmetrically; tiles deliberately bleed off edges to imply a larger world beyond the crop.
- **Hierarchy by scale contrast:** display wordmark ≈ 90–100px, hero object at ~35% of canvas height, tile text 11–20px. Only three levels exist — if a fourth size appears, merge it.
- **Colour:** one warm neutral canvas (`#E9E8E4`), white tiles (`#FFFFFF`), near-black ink (`#111114`) for wordmark and hero object. Accents are rationed: one saturated yellow chip (≈ `#F3F56A`), one green for success/progress (≈ `#3DBE7B`), and a multi-colour palette for chart layers only (pink `#EEA8DD`, dark green `#1E3A2B`, blue `#4A7BD0`, orange `#E8641C`, olive `#8FA47E`). No gradients anywhere except the fine-line texture on the hero object.
- **Type:** a single grotesque sans (e.g. Inter or similar) throughout. Wordmark in lowercase, tight tracking, medium-bold weight. Tile text uses real UI hierarchy: 16–20px semibold for amounts and names, 11–12px regular grey for labels and captions. Tabular numerals for money values.
- **Tiles:** white cards with 10–14px radius, 1px hairline borders in `#E5E3DE` or none, very soft shadows (`0 10px 30px rgba(0,0,0,0.08)`). Inner spacing is tight — 12–16px padding — so tiles read as real app components, not posters.
- **Realism:** every tile contains plausible data (currency amounts, names, statuses, axis labels like `$2.0m`) in realistic UI detail; legibility of the wordmark and hero matters most, tiles can be slightly soft at small sizes.
- **Motion:** none — it is a static image. If animated for a preview, limit to gentle float/parallax on tiles only.

## Never
- Do not use the Ramp name, its ramp-arrow logo, its wordmark, or any of the reference's copy ("UPS", "$331", "¥8,973", "Leah", "My Ramp") — invent placeholder branding, names and amounts for the user's product.
- Do not copy the UPS logo, the avatar photo or any third-party marks; use abstract placeholder shapes for logos and avatars.
- Do not present the result as Ramp or embed any Ramp branding in the generated card.
