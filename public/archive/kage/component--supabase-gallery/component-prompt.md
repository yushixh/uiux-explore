## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060353-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-gallery

## Before you start
Ask the user what their product is, who the audience is, and what visual brand system they already use. Then apply the principles below to their product and brand rather than reproducing this reference literally.

## Build an editorial customer-story gallery
Create a responsive website section that presents customer stories, testimonials, or portfolio highlights. The section should feel polished, spacious, editorial, and product-led. Use fictional, product-appropriate content and neutral placeholder marks; do not rely on any reference-specific brands or copy.

### Layout and alignment
- Place the section inside a wide centered container, approximately 1120–1280px at desktop widths.
- Add a subtle horizontal divider above the section to create a clear transition from the content before it.
- Use a header row with the section title aligned left and a small text link aligned right. On narrow screens, stack these elements while preserving a comfortable gap.
- Make the title a two-line editorial statement: the first line can use a softer or muted tone, while the key phrase is darker and more emphatic.
- Below the header, create a horizontal story gallery. Give the active story most of the width—roughly 65–75%—and place several narrow inactive story panels beside it.
- The active panel should be tall and visually dominant. Inactive panels should be tall, narrow, and mostly colour-blocked, with enough visible identity to suggest that they are selectable.
- On mobile, convert the gallery into a horizontally scrollable carousel or stacked cards. Keep the active story easy to understand without requiring awkward horizontal page overflow.
- Align all content to a consistent left edge and use generous whitespace around the section.

### Typography hierarchy
- Use a clean modern sans-serif with slightly tight heading spacing.
- Section heading: approximately 30–40px desktop, 1.05–1.15 line-height, medium-to-semibold weight.
- Use muted gray for the introductory part of the heading and near-black for the emphasized line.
- Story label: 14–16px, medium weight.
- Supporting description: 13–15px with relaxed line-height and reduced contrast.
- Featured quote or narrative: 20–25px desktop, around 1.25–1.35 line-height, readable and lightweight rather than overly bold.
- Author attribution should be small and subdued, optionally paired with a circular avatar placeholder.
- The secondary link should be compact, underlined, and visually quiet.

### Colour and surface treatment
- Use a warm or neutral near-white page background, approximately `#FAFAF9` or `#FFFFFF`.
- Use near-black text around `#111111` and muted text around `#6B6B6B`.
- Give the featured card a bold brand-appropriate gradient or saturated solid background. A useful starting point is a pink-to-coral-to-orange gradient such as `#F72585` → `#FF1744` → `#FF6B00`, but adapt it to the user's palette.
- Use white or high-contrast text on the featured card, with lower-opacity white for metadata and supporting copy.
- Give each inactive panel its own distinct, restrained brand colour, such as deep navy, dark teal, black, or saturated blue. Ensure text and marks meet contrast requirements.
- Keep the overall page restrained so the featured card is the primary visual event.

### Borders, radius, and spacing
- Use a thin divider around `#E5E5E5` or `#EAEAEA`.
- Give cards a modest radius of approximately 6–10px; avoid exaggerated pill shapes.
- The active card and inactive panels should share a consistent radius and sit close together, with narrow 6–10px gaps.
- Use generous vertical section padding, approximately 88–128px on desktop and 56–80px on mobile.
- Within the featured card, use approximately 32px desktop padding, increasing the separation between the metadata at the top and the quote near the lower portion.
- Preserve a clear visual rhythm: heading, gallery, then enough bottom space before the next section.

### Interaction and accessibility
- Treat each inactive panel as a selectable story tab or carousel control with an obvious hover, focus, and active state.
- On hover, slightly brighten the panel, reveal a subtle label, or increase its width without causing layout instability. Keep transitions around 180–280ms with an ease-out curve.
- On activation, update the featured story content and selected colour treatment; announce changes accessibly if implemented as a carousel.
- Provide visible keyboard focus rings and meaningful accessible labels for every story control.
- If the gallery auto-rotates, do not autoplay by default unless there is a clear pause control; respect `prefers-reduced-motion`.
- Make the entire featured card clickable only if it leads to a relevant story destination, and preserve a clear focus target.

### Content behaviour
- Use short, believable customer-story metadata and a concise narrative that can fit in the featured card.
- Prevent text overflow with sensible line lengths, but do not truncate the main quote aggressively.
- Ensure the layout still works with longer product names, translated text, and missing avatars.

## Never
- Never copy logos, product names, customer names, company names, quotations, or other copy from the reference.
- Never reuse the exact gradient, card proportions, colour sequence, or visual marks as a literal replica.
- Never include the reference site's illustrations, imagery, avatars, or brand assets.
- Never make the gallery dependent on hover alone or hide essential story information behind inaccessible interactions.
- Never use excessive shadows, dense borders, or decorative elements that compete with the featured story.
