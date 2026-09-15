## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073962-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-feature-grid-3

## Before you start
Ask the user what their product does, who the section is for, and what their brand personality and visual system are. Then apply the principles below to create an original feature-grid section for that product—not a replica of this reference.

## Build this section
Create a responsive feature-grid section that introduces a product’s paid, professional, or enterprise capabilities. The composition should have:

1. A centered section heading with a short supporting sentence.
2. One dominant, wide feature panel that acts as the visual anchor. Use a dark surface, concise copy on the left, a primary CTA, and a small secondary pricing or qualification note.
3. Several floating capability pills distributed through the open space of the dark panel. They should feel like annotations around the feature rather than a conventional list.
4. A lower row of two or more equal-width light cards for related offerings. Each card should include a title, short description, CTA, optional pricing/context text, and a contained visual area near the bottom.

## Reusable design language

### Layout and alignment
- Constrain the section to a centered max-width of roughly 1024–1120px, with responsive horizontal gutters of 24–32px.
- Place the heading above the grid, centered, with thin horizontal rules or subtle dividers extending outward on larger screens if they suit the product’s brand.
- Make the primary feature panel span the full grid width and use a minimum height around 400–460px on desktop. Align the text block to the left with generous inset padding, roughly 40px.
- Keep the floating pills in the panel’s visual field, avoiding the text block and CTA. Position them with absolute or grid-area-based placement on desktop, but convert them into a compact wrapped list or simplified arrangement on mobile.
- Place supporting cards below with equal widths and a 24–32px gap. Stack them vertically below approximately 720px viewport width.
- Let lower-card visuals bleed toward or sit flush with the card’s bottom edge, while keeping titles, descriptions, and actions aligned consistently across cards.

### Typography hierarchy
- Use a friendly, modern sans-serif with a strong but not overly heavy display weight.
- Section heading: approximately 28–34px, weight 700–800, tight line-height.
- Feature-panel heading: approximately 21–26px, weight 650–750.
- Card headings: approximately 21–24px, weight 700.
- Body copy: approximately 15–17px, line-height 1.5–1.65; keep measure narrow enough to scan quickly.
- Capability pills and metadata: approximately 12–14px, medium weight.
- Use sentence case and short, benefit-oriented copy. Preserve a clear contrast between headings, supporting text, and pricing notes.

### Colour
- Keep the page background warm white or very pale gray, around `#FFFFFF` to `#FAFAF9`.
- Use a deep navy or near-black feature surface around `#0D1422`–`#121927` rather than pure black.
- Use white or cool off-white for the feature-panel heading, around `#F3F4F6`.
- Use muted blue-gray panel copy around `#9AA4B2`–`#AAB3C0`.
- Use white cards with subtle gray borders and dark text, approximately `#171717`.
- Primary actions may use black or a brand-dark fill with white text; use a pale gray or white button for actions placed on the dark panel.
- Keep decorative visuals mostly monochrome or brand-neutral so the content remains dominant. Adapt the accent colour to the user’s brand rather than copying any reference hue.

### Borders, radius, and depth
- Use a restrained 1px border around light cards, approximately `#E5E7EB` or a brand-equivalent neutral.
- Use corner radii around 10–14px for the major panel and cards; use 7–9px for buttons and capability pills.
- Avoid heavy shadows. If separation is needed, use a very soft shadow such as `0 8px 24px rgba(15, 23, 42, 0.05)`.
- Give the dark panel a clean, solid surface. Any depth should come from layered shapes, floating labels, or subtle tonal variation—not gradients that compete with the copy.

### Interaction and responsiveness
- Make every CTA a real button or link with a visible hover, focus, and active state.
- Capability pills can gain a slight border or surface-color shift on hover, but should remain visually secondary.
- Add a clear keyboard focus ring using the product’s accent colour.
- Ensure the entire section works without relying on absolute positioning: on smaller screens, hide or reposition decorative elements and place capability pills in a readable flow.
- Respect reduced-motion preferences; if decorative shapes float or drift, keep movement subtle and disable it when requested.
- Maintain sufficient contrast and provide meaningful accessible names for buttons and links.

### Content and visual treatment
- Use a concise enterprise or professional value proposition in the primary panel.
- Keep the lower cards focused on distinct adjacent capabilities, avoiding repeated copy.
- For card visuals, use original abstract UI fragments, diagrams, charts, provider/network maps, or pricing tiles that communicate the capability without requiring imagery. Build them as HTML/CSS or neutral generated shapes where practical.
- Make visual assets partially contained and softly cropped so the cards feel like a cohesive system rather than a gallery.

## Never
- Never use logos, product names, brand names, or copy from the reference.
- Never reproduce the reference’s exact layout, floating object arrangement, illustrations, provider marks, pricing values, or imagery.
- Never make the section dependent on the reference product or its terminology.
- Never use generic placeholder text that obscures the hierarchy; write original, product-relevant copy after learning about the user’s product and brand.
- Never sacrifice readability, responsive behavior, keyboard access, or contrast for decorative resemblance.
