## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073819-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what visual brand language they already use. Then apply the principles below to create an original version for that product—not a replica of the reference.

## Build a three-step feature grid
Create a responsive website section that explains a product workflow as three sequential steps. The section should feel calm, premium, technical, and highly scannable, with generous whitespace and a clear progression from an introductory heading to three cards and one primary CTA.

### Content structure
- Use a short, outcome-focused section heading spanning one or two lines. Keep it large and direct.
- Place three equal-width cards in a single row on desktop, ordered from step 1 to step 3.
- Each card contains:
  - A large upper visual area with a distinct, very soft brand-tinted background.
  - A compact, abstract UI or product-state mockup inside the visual area. Build it from simple CSS shapes, text placeholders, status pills, lines, or controls relevant to the user’s product. It should communicate the step without becoming a full screenshot.
  - A lower white content area with a small numbered step marker, a concise title, and a two-to-four-line description.
- Add one rounded, outline-style CTA below the grid, aligned to the left edge of the section content.
- Use realistic product-specific copy supplied by the user; do not use generic filler if the product context is known.

### Layout and alignment
- Constrain the section to a centered max-width of approximately 1180–1240px.
- Use generous vertical separation between the preceding content and this section; the reference composition relies on a large quiet gap before the heading.
- Align the heading, card grid, and CTA to the same left content edge.
- Use a 3-column grid with a gap of roughly 18–24px on desktop.
- Cards should have equal heights and keep their visual panels at approximately 45–50% of the card height.
- On tablet, use two columns where practical; on small screens, stack cards vertically with consistent spacing.
- Keep the CTA clearly separated from the cards by approximately 48–56px.

### Typography hierarchy
- Use the product’s brand typeface, or a clean modern sans-serif fallback.
- Section heading: approximately 42–50px, line-height 1.05–1.15, medium-to-semibold weight, with tight tracking.
- Card title: approximately 21–24px, medium weight.
- Card description: approximately 15–17px, line-height 1.5–1.65, using a muted neutral.
- Step number: approximately 13–14px, medium weight, placed inside a small pale circular or softly rounded marker.
- Avoid excessive font weights; use size, spacing, and colour for hierarchy.

### Colour and surfaces
- Use a warm or neutral near-white page background, approximately `#FFFFFF` or `#FCFCFB`.
- Use near-black text, approximately `#171717` or `#1C1C1C`.
- Use muted grey body text, approximately `#686868`.
- Give each visual panel a different low-saturation pastel tint, such as pale cyan `#E8FBFA`, pale butter `#FFF6DC`, and pale blush `#FDEBEC`. Adapt these to the user’s brand palette while maintaining low contrast.
- Keep the card content area white or very slightly off-white.
- Use subtle borders around cards, approximately `#E7E7E5`, and avoid heavy shadows. If a shadow is needed, keep it diffuse and low opacity.
- The outline CTA should use a dark neutral border and text, with a subtle hover fill or colour shift.

### Borders, radius, and spacing
- Use a card border radius of approximately 16–18px, with the visual panel and content area clipped inside the same outer radius.
- Use a thin 1px border with a restrained contrast.
- Keep internal card padding around 22–28px.
- Use approximately 22–30px between the step marker/title row and the description.
- Make the CTA pill-shaped with a radius of 999px, around 14–18px vertical padding and 22–26px horizontal padding.

### Abstract product visuals
- Design original miniature interface compositions for the user’s product. Prefer a few recognizable details over a dense mockup.
- Use subtle neutral panels, small labels, hairline dividers, tiny indicators, and one or two brand-colour accents.
- Keep the mockups centered within each tinted panel and give them enough breathing room.
- The visual states should progress logically across the three steps, for example setup → action → result, but choose a sequence appropriate to the user’s product.

### Interaction and accessibility
- Make the CTA visibly interactive with hover, focus-visible, and active states.
- If cards are links, make the whole card or a clearly identified affordance clickable and provide a hover treatment that does not disrupt readability.
- Preserve keyboard focus visibility and sufficient colour contrast in the text and CTA.
- Respect reduced-motion preferences; any hover animation should be subtle, such as a slight lift or border-colour change.
- Ensure the layout remains readable and usable at mobile widths without horizontal scrolling.

## Never
- Never copy the reference’s logos, product names, proprietary labels, or exact marketing copy.
- Never reuse the reference’s illustrations, screenshots, imagery, or identifiable UI designs.
- Never assume the user’s product is the same as the reference product.
- Never make every card visually identical if distinct step states can improve comprehension.
- Never add dense decoration, dramatic gradients, heavy shadows, or unrelated navigation elements to this component.
