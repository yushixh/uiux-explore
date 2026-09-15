## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106505-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106472876-full.webp
- Component on Kage: https://kage.design/component/hob-footer

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colour palette, and preferred theme behaviour are. Then apply the principles below to create an original footer for my product—not a copy of the reference.

## Goal
Build a minimal website footer that feels spacious, calm, and editorial. It should act as a soft visual ending rather than a dense navigation area: pair a large, low-contrast brand wordmark or brand-shaped typographic element with a small utility area containing theme controls and concise attribution/location metadata.

## Design language

### Layout and alignment
- Use a full-width footer with a white or near-white background and a generous horizontal container, capped around 1180–1280px.
- Keep the footer visually sparse. Place the main brand element on the left and the utility cluster alongside it, rather than distributing many links across multiple columns.
- Align the utility cluster vertically near the upper or visual centre of the brand element. On wide screens, use a horizontal flex layout with a large gap; on narrow screens, stack the elements while preserving generous breathing room.
- Allow the oversized brand element to sit close to or partially beyond the top/bottom rhythm of the footer, but keep it clipped cleanly within the section. It should feel like a background presence, not a conventional navigation logo.
- Give the footer approximately 32–56px of vertical padding on desktop and 28–40px on mobile.

### Typography hierarchy
- Treat the primary brand element as display typography: very large, approximately 130–180px on desktop and 72–110px on mobile, with a rounded or soft grotesk character if appropriate for the product.
- Render the brand element in a pale tint so it remains legible but deliberately subdued.
- Use small supporting metadata at roughly 12–14px, with a relaxed line height around 1.4–1.6.
- Use medium or regular weight for the metadata; avoid bold headings, dense labels, or unnecessary navigation copy.
- Keep attribution and location on separate lines when that improves scanning.

### Colour
- Base background: white or warm white, approximately `#FFFFFF` to `#FCFBF8`.
- Primary oversized brand tint: a very pale warm cream, approximately `#FFF3D8` or `#FFF1D1`.
- Supporting text: soft neutral gray, approximately `#999999` or `#8F8F8F`.
- Utility control background: translucent white or very light gray, approximately `#F7F7F6`.
- Active theme icon/text can use a darker neutral, approximately `#333333`; inactive controls should remain around `#B8B8B8`.
- Keep contrast intentionally gentle, while ensuring interactive controls and metadata still meet practical accessibility expectations.

### Borders and radius
- Enclose the theme selector in a slim pill, approximately 108–116px wide and 38–42px tall.
- Use a 1px border around `#E7E7E7`, with a fully rounded radius around 999px.
- Separate theme choices with generous internal padding rather than visible dividers.
- If showing an active option, use a subtle filled capsule or slight tonal shift instead of a strong accent colour.
- Avoid heavy shadows; at most use a very soft shadow such as `0 1px 5px rgba(0,0,0,0.04)`.

### Interaction
- Make each theme option a real button with an accessible label, supporting system, light, and dark modes when relevant to the product.
- Provide hover and focus-visible states through a slight background change, darker icon colour, or a soft inset ring.
- Persist the selected theme and respect the user’s system preference on first visit.
- Keep transitions understated, around 150–200ms, with no bouncing or decorative motion.
- Ensure the footer remains useful with JavaScript disabled or when theme controls are unavailable.

### Responsive behaviour
- On desktop, keep the brand and utility area on one horizontal line with clear separation.
- On mobile, reduce the display type, allow the brand to wrap or scale fluidly, and place the utility cluster below or beside it depending on available width.
- Prevent the theme pill and metadata from being squeezed; use a stable minimum width and sensible wrapping.
- Preserve the large negative space and the quiet visual hierarchy at every breakpoint.

## Never
- Never reuse logos, product names, attribution text, location text, copy, illustrations, or imagery from the reference.
- Never reproduce the reference brand wordmark or its exact letterforms; create a brand treatment based on the user’s own product.
- Never turn the footer into a dense sitemap, newsletter block, or multi-column link directory unless the product genuinely requires it.
- Never use loud gradients, oversized shadows, aggressive borders, or high-saturation colours that overpower the restrained composition.
- Never make theme controls decorative only: they must be keyboard accessible, labelled, and visibly focusable.
