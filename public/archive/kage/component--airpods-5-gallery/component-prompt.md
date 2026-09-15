## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106644-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-gallery

## Before you start
Ask what the user's product is, who it is for, and what visual brand language they use. Then apply the principles below to create an original product-detail gallery for that product—not a copy of the reference.

## Build this section
Create a premium, editorial product gallery section for a product page. The section should help visitors inspect several product benefits or details through large visual cards, with a restrained, high-end presentation.

### Layout and alignment
- Use a wide, light section with a centered max-width container of approximately 1120–1280px.
- Align the heading and gallery to the same left edge.
- Place a short, confident heading above the gallery with generous separation from the preceding section.
- Use a horizontal carousel or scroll track of oversized cards. The active card should occupy most of the viewport/container width, while a narrow slice of the next card remains visible on the right to signal that more content is available.
- Keep the gallery track capable of horizontal overflow without causing the page itself to scroll sideways.
- Each card should contain a large media area and a concise caption beneath it, aligned to the card’s left edge.
- Position previous/next controls toward the lower-right of the gallery region, below or beside the captions. Controls should not compete with the product imagery.
- On smaller screens, switch to one nearly full-width card with a smaller peek of the next card; reduce outer margins while preserving generous whitespace.

### Typography hierarchy
- Use a modern sans-serif system font or the product’s brand typeface.
- Set the section heading in a bold, compact display style: approximately 52–64px on desktop, 36–44px on mobile, with tight line-height around 0.95–1.05.
- Use caption text at approximately 16–18px with 1.35–1.5 line-height.
- Give the key phrase in each caption stronger weight, followed by a lighter or regular-weight explanatory phrase.
- Keep copy short enough to scan in one glance.

### Spacing
- Use approximately 96–144px of top/bottom section padding on desktop and 64–88px on mobile.
- Leave roughly 64–80px between the heading and the card track.
- Use 24–32px between the media card and its caption.
- Use 24–40px between cards, depending on viewport width.
- Maintain consistent horizontal gutters of 40–80px on desktop and 20–24px on mobile.

### Colour and surfaces
- Use a near-white page background, approximately `#FFFFFF` or `#FBFBFD`.
- Use a very light neutral media surface, approximately `#F5F5F7` to `#F7F7F9`, so product imagery remains the visual focus.
- Use near-black text, approximately `#1D1D1F`.
- Use muted secondary text around `#6E6E73`.
- Keep the palette minimal; derive any accent colour from the user’s product brand rather than introducing decorative colour.

### Borders, radius, and imagery
- Give media cards a large, soft radius of approximately 24–32px on desktop and 18–24px on mobile.
- Avoid heavy borders. If separation is needed, use a barely visible `#E8E8ED` 1px border.
- Make the media area tall and spacious, around a 1.0–1.15 aspect ratio, with the product or focal subject centered and ample negative space.
- Use `object-fit: contain` for isolated product imagery and `object-fit: cover` only when the supplied visual is an environmental or lifestyle image.
- Do not add distracting shadows; use at most a very subtle, diffuse shadow.

### Interaction and accessibility
- Make the carousel usable with previous/next buttons, touch dragging, trackpad scrolling, and keyboard focus.
- Show a small portion of the next slide on desktop and mobile as an affordance, but never let captions overlap or become unreadable.
- Disable or visually soften the previous button at the first slide and the next button at the final slide.
- Use circular or softly rounded controls around 36–44px, with a pale neutral fill such as `#F2F2F4` and a darker icon on hover.
- Add smooth, restrained slide transitions around 300–500ms with an ease-out curve; respect `prefers-reduced-motion`.
- Provide accessible labels such as “Previous product detail” and “Next product detail,” visible focus states, and meaningful alt text for every image.
- Ensure the component remains legible and functional at narrow widths and does not rely on hover alone.

### Content model
Support a reusable array of gallery items containing:
- a media asset
- a short benefit-led caption
- optional emphasized lead text
- meaningful alternative text
- an optional theme or background variant

Use the user’s own product, benefits, imagery, and brand voice when populating the component.

## Never
- Never use logos, product names, slogans, or copy from the reference.
- Never reproduce the reference product, photography, illustrations, or imagery.
- Never create a pixel-for-pixel clone of the reference layout.
- Never assume the user’s product has the same colour palette, proportions, or content structure.
- Never hide carousel controls from keyboard or screen-reader users.
- Never use decorative imagery when clear product-focused media would communicate the benefit better.
