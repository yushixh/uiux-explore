## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/replicate-com/18021eac-ea1d-469d-8210-9b10eacb77c7-1789073922-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/replicate-com/18021eac-ea1d-469d-8210-9b10eacb77c7-1789073887-full.webp
- Component on Kage: https://kage.design/component/replicate-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what their brand identity and content are. Then apply the principles below to create an original feature-grid section for that product—not a visual copy of the reference.

## Build this section
Create a responsive feature grid that showcases a curated set of featured products, resources, templates, models, or other primary content. The section should feel like an editorial discovery surface: compact, useful, and easy to scan at a glance.

### Layout and alignment
- Use a full-width section with a centered content container and generous horizontal gutters.
- Arrange cards in a two-column grid on desktop, with consistent row and column gaps of approximately 32px.
- Let the collection extend beyond the viewport or container at larger widths so a partial card can appear at the right edge, communicating that more content is available. Only use this overflow treatment when it supports the product’s browsing model; otherwise use a normal responsive grid.
- Keep every card the same height, with a media panel on the left and information panel on the right.
- Use a media width of roughly 36–40% of each card and let the content area fill the remainder.
- On small screens, switch to one column. Preserve the horizontal media/content relationship where practical, or stack media above content if the available width makes text too cramped.
- Align card titles, descriptions, metadata, and actions to a predictable vertical rhythm. Keep card content padded around 16px.

### Typography hierarchy
- Use a neutral sans-serif with a crisp, utilitarian feel.
- Card title: 16–18px, medium or semibold, dark charcoal, with a small secondary slash or delimiter only if the content model needs it.
- Supporting description: 14–15px, regular weight, around 1.45 line-height, muted charcoal-gray. Clamp to two or three lines so cards remain equal in height.
- Metadata such as usage, date, category, or status: 12–13px, regular or medium weight, using the accent colour sparingly.
- Keep labels and metadata visually subordinate to the title; avoid oversized headings inside individual cards.

### Colour
- Use a warm near-white or white page background, approximately #FAFAF8 or #FFFFFF.
- Use dark charcoal text around #292929 rather than pure black.
- Use a soft secondary text colour around #737373.
- Use a restrained warm accent—such as brick, terracotta, or the product’s brand accent—around #B54A2A for highlighted metadata or links.
- Images should provide most of the visual colour. Use a neutral fallback surface around #EDEBE7 when media is unavailable.

### Borders and shape
- Give every card a thin, solid border around #303030 or a softer brand-appropriate equivalent.
- Use square or very lightly rounded corners: 0–3px. The visual language should feel editorial and structured rather than pill-shaped.
- Avoid shadows by default. If elevation is needed for the product, use an extremely subtle shadow rather than a floating-card effect.
- Use a 1px divider between media and content when the card background is not enough to separate the two areas.

### Media and content details
- Use a fixed aspect-ratio media area, approximately 4:3 or 1:1 depending on the product’s content.
- Crop media with `object-fit: cover`; allow each image to feel distinct while maintaining a consistent frame.
- Include a small icon, avatar, category marker, or provider label beside the title only when it helps identify the item.
- Include one compact line of secondary metadata near the bottom of the card, such as usage count, status, or a category.
- If an item has a verification or featured state, represent it with a small understated icon and label—not a large badge.

### Interaction
- Make the full card or a clearly defined title area clickable.
- On hover, slightly darken the border or apply a minimal background tint, and transition over 120–180ms. Do not use dramatic scaling or motion.
- Preserve visible focus rings for keyboard users using the brand accent or a high-contrast outline.
- If the grid is horizontally scrollable, support trackpad, touch, and keyboard navigation; hide scrollbars only if discoverability remains clear and the layout still communicates that more items exist.
- Ensure truncated descriptions do not hide essential information, and provide accessible names for images and icons.

### Responsive and accessibility requirements
- Maintain at least 16px page gutters on small screens and approximately 32–80px on larger screens, depending on the product’s container.
- Keep text contrast at WCAG AA levels.
- Avoid relying on colour alone to communicate status.
- Use semantic links or buttons, meaningful alt text, and logical tab order.

## Never
- Never copy the reference’s logos, product names, brand marks, icons, imagery, or written copy.
- Never reuse its exact card content, model names, counts, or labels.
- Never reproduce the reference as a pixel-for-pixel clone; adapt the layout principles to the user’s product and brand.
- Never add decorative illustrations or imagery from the reference.
- Never make the grid so dense that titles, descriptions, or metadata become difficult to scan.
