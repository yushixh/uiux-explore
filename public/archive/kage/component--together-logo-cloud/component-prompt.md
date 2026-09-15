## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/together-ai/60591018-8706-471e-a3f2-ad3109f52987-1789073939-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/together-ai/60591018-8706-471e-a3f2-ad3109f52987-1789073908-full.webp
- Component on Kage: https://kage.design/component/together-logo-cloud

## Before you start
Ask the user what their product does, who it is for, and what their brand identity is (including colours, type style, and tone). Then apply the principles below to create a version for their product rather than reproducing the reference.

## Build a trusted-by logo cloud
Create a slim, full-width social-proof strip for a modern software or AI product. It should sit between major page sections and communicate adoption through a quiet row of customer or ecosystem logos. The component should feel credible, spacious, and intentionally understated.

### Layout and alignment
- Use a full-width horizontal section with a very pale cool-blue background, approximately `#F0F8FF` or a brand-adjusted equivalent.
- Keep the section compact: roughly 96–140px tall on desktop, with generous horizontal padding of 40–64px.
- Arrange a small uppercase eyebrow such as a trust label on the left, followed by the logo list in one horizontal row.
- Vertically center every item along a shared axis. Treat each logo as an equal visual slot rather than aligning by its raw bounding box.
- Use flexbox or grid with generous, consistent gaps—approximately 32–56px between marks. Let the row breathe instead of filling every available pixel.
- On smaller screens, either allow controlled horizontal scrolling or wrap into two balanced rows. Preserve the trust label as a distinct first item and avoid awkward logo collisions.
- Ensure the section remains useful with any number of logos: support 5–10 marks and distribute remaining space naturally.

### Typography hierarchy
- Render the trust label in a compact sans-serif, uppercase, with a small size around 9–11px, medium weight, and letter spacing around `0.08em`.
- Keep the label visually quieter than the product’s headline but slightly more legible than the logos.
- Do not add a headline, paragraph, button, or extra explanatory copy; this component works through a single concise trust cue.

### Logo treatment
- Use real customer or partner marks supplied by the user, preferably monochrome SVGs or wordmarks.
- Normalize visual weight with constrained height, typically 18–28px, and a max width appropriate to each mark.
- Apply a muted monochrome treatment rather than full brand colour: approximately `#9AA7AE` to `#B8C4CA`, with some marks allowed to be slightly lighter.
- If the source logos vary widely, use `object-fit: contain`, consistent height boxes, and modest opacity around `0.55–0.8`.
- Preserve each logo’s proportions and clear space; never stretch, crop, or force every wordmark to the same width.

### Colour, borders, and surface
- Use a near-white cool blue surface, approximately `#F1F8FD`, with enough contrast from adjacent white sections to establish separation.
- Keep text and marks in soft cool gray rather than black; target label colour around `#44515A` and logo colour around `#AAB6BC`.
- Avoid strong shadows, gradients, decorative patterns, or bright accent colours.
- The section may use a very subtle 1px top or bottom border in approximately `#E4EEF4`, but no visible card outline is necessary.
- Use no corner radius when the strip spans the viewport; if placed inside a contained card, use a restrained radius of 8–12px.

### Interaction and accessibility
- The logos can be static if they are purely decorative proof points. If they link to customer stories or external sites, make the entire mark an accessible link with a visible-on-focus outline.
- Add meaningful accessible labels for linked logos; if the logos are decorative and a nearby label already communicates their purpose, mark the images appropriately.
- On hover, use only a subtle increase in opacity or a small colour shift toward `#71808A`; do not animate scale or create visual noise.
- Respect reduced-motion preferences. Keep any mobile marquee optional, slow, and paused on hover/focus; a static or scrollable row is preferred.
- Check contrast for the trust label and ensure the strip remains readable at zoom and on narrow screens.

### Responsive behaviour
- Desktop: one centered horizontal row with the label at the start and evenly spaced marks.
- Tablet: reduce gaps modestly and allow the logo row to use the full width.
- Mobile: stack the label above a horizontally scrollable logo row or wrap into two rows; hide the scrollbar visually but preserve keyboard and touch access.

### Never
- Never copy the reference site’s logos, product names, trust label wording, exact logo order, or exact copy.
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never invent customer relationships or imply that a company uses the product without user-provided evidence.
- Never make all logos equally prominent if their native visual weights differ; normalize them thoughtfully.
- Never turn the strip into a crowded carousel, promotional banner, or testimonial section.
