## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060915-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060875-full.webp
- Component on Kage: https://kage.design/component/ramp-feature-grid

## Before you start
Ask the user what their product is, who it serves, and what their brand identity should feel like. Then apply the following principles to their product and brand rather than reproducing this reference literally.

## Build an editorial feature-and-proof grid
Create a spacious, vertically stacked feature section for a modern B2B software product. The section should combine alternating feature statements, supporting links, large visual proof panels, and customer testimonials. It should feel like a sequence of confident editorial stories—not a conventional collection of equal cards.

### Layout and alignment
- Place the section inside a centered container with a maximum width of approximately 1150–1200px and generous horizontal padding of 64px on desktop.
- Use a vertical rhythm of three or more feature rows, with substantial separation between rows: approximately 120–180px of vertical space.
- Alternate the visual relationship between rows:
  - One row can place a large media panel on the left and a text/testimonial column on the right.
  - The next can place a concise feature statement on the left and a product-interface proof panel on the right.
  - Continue alternating to create visual movement while keeping the overall grid aligned.
- Use a two-column desktop grid, generally around 1.05fr / 0.95fr. Let media occupy most of its column and keep text blocks narrower for readability.
- Align text to the top of its column when introducing a feature, and push testimonial details lower in the column when the composition benefits from a deliberate editorial offset.
- On smaller screens, collapse each row into one column. Keep the feature heading close to its supporting link, then place the media and testimonial beneath it in a logical reading order.
- Ensure the entire section remains visually balanced even when one feature has more copy than another; use whitespace rather than adding unnecessary UI.

### Typography hierarchy
- Use a clean, modern sans-serif with a slightly humanist or neutral character.
- Feature headlines should be large and compact: approximately 28–34px on desktop, 1.02–1.12 line-height, with a medium or semibold weight.
- Emphasize only the key phrase in each headline with a near-black colour; use a softer gray for the explanatory continuation so the sentence has a clear visual cadence.
- Supporting links should be approximately 15–17px, medium weight, and use a right-arrow affordance with comfortable spacing.
- Testimonial quotes should be approximately 16–18px with a 1.35–1.5 line-height. Keep them conversational and limit the measure to roughly 430–500px.
- Attribution should be smaller, approximately 14–15px. Separate the person’s name from their role or company using weight or colour rather than decorative styling.
- Avoid all-caps labels unless the product’s brand explicitly calls for them.

### Colour and surfaces
- Use a warm off-white or white page background, approximately `#FCFCFA` or `#FFFFFF`.
- Use near-black for primary text, approximately `#111111`.
- Use a calm gray for secondary copy and metadata, approximately `#6B6B6B`.
- Keep links understated, using the same dark gray or black rather than a bright accent colour.
- For interface mockups or document previews, use soft neutral surfaces such as `#F2F1EE`, `#F7F7F5`, and white content cards.
- If the brand has an accent colour, reserve it for subtle product-interface details or hover states; do not let it overpower the editorial layout.

### Media and component styling
- Use large visual panels with a restrained corner radius of approximately 12–16px. The panels may contain a product UI mockup, a document preview, or a customer video still appropriate to the user’s product.
- Keep media aspect ratios intentional: approximately 4:3 for lifestyle/video panels and 1:1 or 5:4 for interface/product panels.
- Crop imagery cleanly and apply `object-fit: cover` where appropriate. Avoid busy compositions that compete with the adjacent feature copy.
- For video media, place a small pill-shaped control near the bottom-right corner. Use a translucent charcoal or warm-gray surface, a simple play icon, and concise neutral text. Make the control visibly clickable without dominating the image.
- For product mockups, create a believable but simplified interface with layered white cards, fine gray dividers, modest shadows, and clear information hierarchy. The mockup should demonstrate the product benefit without becoming a full application screen.
- Use borders around interface cards sparingly, approximately `1px solid #E5E4E0`; use soft shadows such as `0 8px 24px rgba(20,20,20,0.06)` only where layering needs to be communicated.
- Keep all radii consistent across media, buttons, cards, and controls; avoid mixing sharp rectangles with highly rounded pills without a clear purpose.

### Interaction
- Make feature links and “read more” links keyboard accessible and visibly respond on hover and focus.
- On hover, slightly darken the link and shift the arrow a few pixels to the right; keep the motion subtle and fast, around 150–200ms.
- Video controls should show a clear hover state through a small contrast or opacity change and should expose an accessible label.
- Respect reduced-motion preferences. Do not use parallax, aggressive zooming, or distracting scroll-triggered effects.
- Ensure focus rings remain visible against both the page background and media panels.

### Responsive behaviour
- At tablet widths, reduce the container padding to approximately 32–40px and preserve the alternating rhythm where space allows.
- At mobile widths, use 20–24px side padding, 28–30px feature headings, and 64–96px between feature groups.
- Stack media and copy without awkward horizontal offsets. Keep quote attribution attached to its quote and avoid forcing equal-height rows.
- Make video controls large enough to tap comfortably and prevent interface mockups from becoming too small to understand.

## Never
- Never use logos, product names, copy, illustrations, imagery, screenshots, or testimonial content from the reference.
- Never reproduce the reference’s exact layout, wording, brand palette, or media subjects.
- Never create a generic equal-width card grid when an alternating editorial composition better communicates the product story.
- Never use decorative imagery that does not support the feature being explained.
- Never sacrifice readability or accessibility for visual similarity.
