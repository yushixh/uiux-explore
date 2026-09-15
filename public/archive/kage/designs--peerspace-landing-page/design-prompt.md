## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/peerspace-com/2a6d29c3-21bf-4d34-8c1e-93824205de9d-1789146208431-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/peerspace-com/2a6d29c3-21bf-4d34-8c1e-93824205de9d-1789146201971.webp
- Design on Kage: https://kage.design/designs/peerspace-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product, not the reference site.

## Page structure
1. **Header (transparent over hero)** — wordmark left; right cluster: language/globe icon, a "browse" dropdown with chevron, one secondary text link, a quiet "log in" link, and a small solid dark sign-up button.
2. **Hero** — full-bleed photograph of the product being used in the real world. A white search card floats centred over the photo with three inline fields (activity / location / date) plus a solid dark search button with a → arrow. Below the photo, on solid black, an oversized two-line white headline; a tiny uppercase photo credit sits at the far right ("Name — City, ST").
3. **Announcement banner** — solid deep-violet block. Left: an angled collage/triptych of photos; right: small eyebrow ("Announcing the 2026"), huge condensed all-caps display title, and an arrow link underneath.
4. **Category picker (white)** — left column: medium heading, one line of subcopy, then an interactive tag cloud of ~18 activities (the active tag bold/underlined, the rest plain), closed by a solid dark button. Right column: a large photo matching the active tag, with a vertical rotated label along its edge and a small location credit.
5. **Social-proof filmstrip (black)** — giant display words split above and below a full-width horizontal image carousel with big thin-arrow buttons at the sides; right-aligned small text plus a light button; a vertical rotated credit caption at the section edge.
6. **City list (black)** — left heading, then a single column of city names set huge in dimmed grey, each row followed by a tiny country/state code; rows brighten (or reveal a photo) on hover. Small dark "view all" button below.
7. **Value-prop carousel (white)** — oversized two-line heading that overlaps a photo card; right column holds a 24–28px heading, a short paragraph, thin prev/next arrows and a "01 / 03" counter.
8. **Editorial CTA break (cream)** — full-bleed warm interior photo with a large circular portrait centred; display text overlaps the circle and a small white pill button with → sits beneath.
9. **Blog teaser (white)** — tiny uppercase eyebrow, bold heading, dark "view all" button left; arrows right. A horizontal row of 4+ cards: image, uppercase category eyebrow, short title; one card may be a typographic wordmark pattern instead of a photo for rhythm.
10. **Directory section (cream)** — heading with arrows, a scrollable tab row with an active underline, then a 3-column grid of location links, each with a tiny uppercase state/country caption; a dark button closes it.
11. **Earn/host section (black)** — left: photo card; right: heading, one-line subhead, two lines of body copy, light button.
12. **Footer (black)** — stacked wordmark left; six link columns (company, explore, host, countries, support, download); bottom bar with locale selector, privacy link, social icons, copyright.

## Design language
- **Colour**: near-black `#111111`, white `#FFFFFF`, warm cream `#F0E8DC`, one saturated UI accent in deep violet `#2C1B47`. Let photography supply all other colour. Sections are solid background blocks that alternate dark → light → cream down the page; never gradients, never grey-on-grey.
- **Type**: a single grotesque sans family in many weights. Display headlines 96–160px, weight 600–700, line-height ~0.95, letter-spacing −0.02em. Section headings 40–56px, body 16px/1.5, micro-labels 11px uppercase with +0.08em tracking. Reuse the tiny uppercase credit pattern ("Name — City, ST") under or beside every photo and link grid.
- **Hierarchy**: exactly one oversized typographic moment per section; everything supporting stays very small, so scale contrast — not decoration — builds hierarchy.
- **Rhythm and density**: pad sections 96–160px vertically; alternate sparse sections (city list, CTA break) with dense ones (tag cloud, link grid, footer) so the page breathes then compresses.
- **Photography**: hard-edged, no frames or radius, either full-bleed or occupying half the grid; always colour-rich and candid, never stock-posed. Supply all colour the UI withholds.
- **Buttons**: small slightly-rounded rectangles (4–8px radius), dark fill on light sections and white on dark, 13–14px medium labels; the → arrow is the recurring affordance for advancing or discovering.
- **Borders and shadows**: avoid borders for separation — background-colour changes do it. Hairlines `#2A2A2A` on dark and `#E5E0D8` on light only for list rows. Shadows restricted to the floating search card: `0 8px 24px rgba(0,0,0,.12)`.
- **Interaction**: hover swaps imagery (tag cloud → photo, city row → brighten/reveal), carousels advance with thin long-arrow icons and a "01 / 03" counter, active tabs get a short underline. Cross-fade image swaps in ~300ms; no bounce or parallax gimmicks.
- **Signature details**: vertical rotated captions (`writing-mode: vertical-rl`) on section edges, dimmed-grey giant text that awaits hover, and collage/triptych arrangements rather than single tidy images.

## Never
Do not copy the Peerspace wordmark, logo, "Open Door Awards" name, any headline or body copy, its photography, or its icon set. Never present the result as Peerspace or imply affiliation — rebuild the design language around the user's own brand assets and content.
