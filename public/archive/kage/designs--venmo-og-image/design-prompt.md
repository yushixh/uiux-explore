## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/venmo-com/bda80c2c-2425-405d-a5ed-85583272725a-1789146467376.webp
- Design on Kage: https://kage.design/designs/venmo-og-image

## Before you start
Before writing any code, ask the user:
1. What product or brand the card is for, and who it is for.
2. What brand assets exist: brand name, primary brand colour (hex), typeface (or fallback), and whether they have real photography/illustration or need a placeholder.
3. Which tagline or headline they want on the card, and the main action the card should communicate.
Wait for the answers. Everything below is applied to **their** product with **their** branding — placeholder branding and copy until they reply.

## Canvas structure
Produce a single social card image at exactly **1200×630** (render an HTML file sized 1200×630 and screenshot it to PNG at 2× for sharpness, or emit an SVG). Top to bottom:

1. **Canvas** — flat white (#FFFFFF) field filling the full 1200×630, with generous internal padding (~72px left, ~48px top/right/bottom). If shown inside a preview frame, sit it on a near-white #FAFAFA backdrop with a large ~40px corner radius on the card itself.
2. **Left text column (~45% width)** — a small bold eyebrow label (e.g. the page or product name, ~26–28px, near-black) pinned near the top-left; below it, with clear breathing room, the main headline set on two lines at display scale (~120–140px, heavy weight, tight ~1.0 line-height, slightly negative tracking). Nothing else lives in this column — the whitespace is the design.
3. **Right photo panel (~55% width)** — a full-height image block with ~40px rounded corners, inset ~48px from the top, right and bottom edges. Use the user's photography if provided; otherwise a warm, human placeholder (solid warm gradient or abstract shape is fine — never stock people from the reference).
4. **Overlay chips on the photo** — two white pill-shaped UI chips floating over the photo: one in the upper third, one in the lower third. Each pill has full 999px radius, a small circular avatar (or initials disc), and a two-weight label: a name in medium/semibold followed by a short action or memo in regular gray. Add a subtle soft shadow so pills read against the photo.
5. **Brand accent shape** — one flat geometric shape in the brand colour (e.g. an oversized initial or simple wedge) partially tucked behind/within the photo panel, so the brand colour appears once, decisively, without competing with the photo.

## Design language
- **Hierarchy is scale-driven, three steps only:** eyebrow (~28px bold) → display headline (~130px, the loudest element) → chip labels (~24–26px). Nothing else earns type; there are no paragraphs on the card.
- **Asymmetric split over centring:** text owns the left column, imagery owns the right; never centre the headline, never run text over the photo.
- **Colour discipline:** white field, near-black #111 type, exactly one saturated brand accent (use the user's brand hex; a vivid blue like #008CFF works as a stand-in). All other colour comes from the photograph. No gradients on the canvas, no extra accent colours.
- **Type pairing:** one geometric grotesque family throughout; reserve the heaviest weight for the headline and eyebrow, medium/regular for chips. Tight leading on the headline (~1.02), normal leading on chips.
- **Shape language:** consistent large radius (~40px) on the photo panel and card; fully-rounded pills for UI chips; no borders anywhere — separation is done with whitespace and shadow.
- **Thumbnail test:** at 200px wide the eyebrow may blur, but the headline, the photo and the accent colour must still read. Max three type sizes, one focal image, one accent.
- **Motion:** none — it is a static export. Ensure the render is pixel-exact at 1200×630 with no scrollbars or body margins.

## Never
- Never use the Venmo name, wordmark, the 'Venmo everything' headline, the 'Wes paid' / 'Leona for Game Day' chip copy, the Venmo blue V logo shape, or the reference photography.
- Never present the output as Venmo or imply affiliation; substitute the user's brand name, headline and accent colour throughout.
- Never add extra sections, taglines, URLs or QR codes to the card — the composition is eyebrow + headline + one photo panel + two chips + one accent shape, and that is all.
