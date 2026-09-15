## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789067513-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Component on Kage: https://kage.design/component/stripe-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original version for that product—not a replica of any reference site.

## Build this section
Create a spacious editorial feature section for a modern software product. It should introduce a focused theme, provide one primary call to action, and present a horizontally arranged set of customer or content stories supported by smaller resource cards below.

### Layout and alignment
- Place the section inside a wide, centered container with a maximum width around 1180–1240px and responsive side gutters of 24–32px.
- Use a two-column header: a compact heading and primary action on the left, and a short explanatory paragraph on the right. Align both columns to the same top baseline.
- Put a four-card story rail below the header. Each card should have a tall visual area with a consistent aspect ratio around 4:5, rounded corners, and a short title plus text link beneath it.
- Allow the story rail to overflow horizontally on smaller screens rather than shrinking cards until they become unreadable. On mobile, show roughly 1.15–1.3 cards so the next item is visibly discoverable; support touch scrolling and hide the scrollbar.
- Add subtle previous/next controls near the section header or rail edge on desktop. Disable the relevant control at the beginning or end and provide accessible labels.
- Follow with two or more compact resource tiles in a balanced grid. Each tile combines a short bold lead-in, supporting copy, and a text link; optional abstract brand-neutral colour shapes may occupy one side as a decorative accent.
- Keep all elements aligned to a consistent vertical grid. Use generous separation between the story rail, resource tiles, and adjacent page sections.

### Typography hierarchy
- Use a clean contemporary sans-serif or the product’s own typeface.
- Section heading: 28–34px, weight 500–650, tight line-height around 1.05–1.15; allow it to wrap naturally across two lines.
- Supporting paragraph: 16–18px, line-height 1.4–1.55, in a muted dark gray.
- Story title and supporting copy: 15–17px, line-height around 1.35–1.5.
- Use bold inline lead-ins for resource tile descriptions, followed by regular-weight explanatory text.
- Links should be medium or semibold weight and visually distinct without relying on underlines alone; add a small directional chevron or arrow.

### Colour
- Use a warm or cool near-white page background, approximately #FFFFFF or #FAFBFC.
- Use a deep ink colour around #102331 or #172B3A for headings and primary text.
- Use a muted slate around #5F6B76 for supporting copy.
- Use a vivid but accessible brand accent for links and buttons, approximately #635BFF or an equivalent colour from the user’s brand.
- Primary action buttons may use a saturated accent fill with white text; keep hover states slightly darker or more saturated.
- Decorative card accents can use soft tints, gradients, or abstract geometric colour fields, but they must support the user’s brand rather than imitate another company.

### Borders, surfaces, and shape
- Use very light separators around #E5E9EE or rgba(16,35,49,0.12).
- Story imagery should use a radius around 6–10px; resource tiles may use 6–8px.
- Keep card surfaces mostly flat and editorial. Avoid heavy shadows; if needed, use a barely visible shadow such as 0 2px 8px rgba(16,35,49,0.06).
- Maintain consistent card heights and image cropping so the rail feels deliberate and balanced.

### Interaction and accessibility
- Make each story card’s image, title, and link part of one coherent interactive target where appropriate.
- Add visible hover and focus states: slight image scale or colour shift, stronger link contrast, and a clear 2px focus ring using the accent colour.
- Make carousel controls keyboard accessible, with `aria-label`, disabled states, and sensible focus order.
- Respect reduced-motion preferences by disabling image zoom and animated transitions when requested.
- Provide meaningful alt text for editorial imagery and ensure decorative graphics are hidden from assistive technology.
- Keep body text and links at accessible contrast ratios and preserve a minimum touch target of 44px for controls.

## Never
- Never copy the reference site’s logos, product names, customer names, exact copy, illustrations, imagery, card artwork, or brand-specific decorative motifs.
- Never use the reference company’s wording or recreate its exact content hierarchy as a branded clone.
- Never make the section dependent on inaccessible hover-only behaviour, autoplaying media, or unreadable carousel controls.
