## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060822-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-gallery-4

# Before you start
Ask what the user's product is, who it is for, and what their brand language, visual assets, and primary conversion goal are. Then apply the principles below to create an original gallery for that product and brand—not a copy of the reference.

## Build an editorial product gallery
Create a responsive, image-first gallery section for a product-focused website. It should feel like a carefully arranged catalogue or visual archive: confident, sparse, tactile, and highly dependent on photography. Use the user's real product imagery when available, with sensible placeholders only during development.

### Layout and alignment
- Use a full-width gallery with a strict column system and thin rules separating cells; begin with a large hero image that spans the full content width or most of it.
- Let the hero image dominate the first visual moment. Preserve its intended crop with `object-fit: cover`, while allowing the focal point to be configured per image.
- Follow the hero with a three-column product row on desktop. Each product cell should have a short label and a small action link above or below a generously sized image area.
- Add a second, visually distinct showcase band beneath the light gallery: use a near-black background and a wide, studio-lit product composition. This can be a single image or a small arranged set, but it should read as a new chapter.
- Keep all cell boundaries aligned vertically and horizontally. On smaller screens, collapse to one column or a horizontally scrollable product rail, while preserving the hero's prominence.
- Avoid centered floating cards. Images should sit directly within the page grid, with the grid itself doing the framing.

### Typography hierarchy
- Use a neutral grotesk or similarly plain sans-serif with a technical/editorial feel.
- Product labels: 12–14px, regular weight, tight line-height, sentence case.
- Purchase or detail links: 12–14px, slightly contrasting colour, optionally underlined or marked with a subtle arrow.
- If a campaign title is needed, use a large display size with compact line-height and let it interact with the image, but keep supporting copy minimal.
- Do not add large blocks of descriptive text; the photography should carry the narrative.

### Spacing and sizing
- Use a compact outer gutter on large screens, approximately 24–40px, with a smaller 16–20px gutter on mobile.
- Keep a consistent cell rhythm: 16–24px internal padding around labels and 32–72px around product imagery depending on image scale.
- Give product images generous vertical breathing room and allow different products to have different visual scale without breaking the row.
- Make the hero feel immersive, but do not force every image into the same aspect ratio if the source photography benefits from its native composition.
- Reserve substantial vertical space between the light gallery and the dark showcase so the colour change feels intentional rather than accidental.

### Colour and materials
- Primary light canvas: approximately `#f5f6f4` or a soft neutral white.
- Main text: approximately `#161616`.
- Grid rules: very light grey, approximately `#c9ccca`, 1px.
- Links or small accents may use a muted blue, approximately `#3f7180`, unless the user's brand calls for another accent.
- Dark showcase background: approximately `#050505` or `#0b0b0b`.
- Let product colours provide the strongest visual accents; do not add decorative colour blocks that compete with the imagery.

### Borders and radius
- Use crisp 1px dividers and square or nearly square image containers.
- Keep border radius at `0–2px`; the catalogue quality depends on a precise, engineered grid rather than soft cards.
- Do not use shadows around cells. Image treatment, contrast, and spacing should establish hierarchy.

### Interaction and behaviour
- Make each product tile clickable with a clear, accessible link target.
- On hover, use restrained feedback: slightly increase image scale, reveal a subtle tint, or underline the link. Keep transitions around 180–280ms and avoid dramatic motion.
- If the gallery is a carousel on mobile, provide visible previous/next controls, pagination, or a scrollbar and support touch swiping.
- Lazy-load below-the-fold imagery, preserve aspect-ratio boxes to prevent layout shift, and provide meaningful alt text.
- Respect reduced-motion preferences.
- Ensure the dark showcase remains readable and navigable with keyboard focus states that meet contrast requirements.

### Content model
Use a data-driven structure so the section can be reused:
- `heroImage`
- `products[]` with `name`, `image`, `href`, and optional `meta`
- `showcaseImage` or `showcaseItems[]`
- optional `sectionLabel` and `campaignTitle`

## Never
- Never copy the reference site's logos, product names, brand marks, or wording.
- Never reuse the reference's exact photography, image compositions, collage elements, or illustrations.
- Never invent a lookalike product or use imagery that implies the user's product is something it is not.
- Never turn the section into generic rounded ecommerce cards, a dense product table, or a promotional banner with excessive copy.
- Never hide essential product names, prices, or actions inside hover-only interactions.
- Never use the reference brand's exact typography, colour signature, layout proportions, or distinctive graphic details as a direct replica.
