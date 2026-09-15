## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060506-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060491-full.webp
- Component on Kage: https://kage.design/component/anthropic-table

# Before you start
Ask me what my product is, who it is for, and what its brand should feel like. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Build this component
Create a responsive editorial resource-index section: a short introductory statement on the left and a list of resource rows on the right. The section should help users scan a small collection of links and understand each item’s category at a glance. Use realistic placeholder content tailored to my product only after asking about the product and brand.

## Design language

### Layout and alignment
- Use a wide two-column layout inside a centered container with generous horizontal gutters.
- On desktop, make the intro column narrower—roughly 30–34% of the content width—and the resource list occupy the remaining 66–70%.
- Align the top of the intro statement with the first row of the list.
- Give the list a consistent row structure: the resource title aligned to the left and its category or metadata aligned to the right.
- Use a full-width divider below every row, including the final row if the section transitions into another band.
- Keep the section visually spacious, with substantial vertical padding above and below. Do not add a card container, outer border, or decorative background panel.
- On smaller screens, stack the intro above the list. Preserve clear separation between the statement and rows, and allow long titles or categories to wrap naturally without clipping.

### Typography hierarchy
- Set the intro statement in a large, bold sans-serif with a compact line height; use 2–4 short lines depending on the viewport.
- Set resource titles in a medium-to-semibold sans-serif, sized for comfortable scanning rather than display impact.
- Set categories or metadata in a slightly lighter-weight, muted sans-serif. Keep them visually secondary but readable.
- Use a restrained typographic scale: approximately 26–32px for the intro on desktop, 15–17px for row titles, and 14–16px for metadata. Reduce the intro size on mobile.
- Avoid all-caps labels unless they are essential to the product’s brand language.

### Spacing
- Use approximately 64–96px of vertical section padding on desktop and 40–64px on mobile.
- Use a 32–56px horizontal gap between the intro and list columns.
- Make rows approximately 54–60px tall on desktop, with 16–20px of horizontal breathing room if needed.
- Use consistent gaps between title and category columns; reserve enough width for categories while allowing titles to take the majority of the row.
- Let whitespace, not decoration, create hierarchy.

### Colour
- Start with a warm, very pale neutral background around `#F1F1E8` or `#F3F2E9`, then adapt it to my brand.
- Use near-black text around `#171716` for the intro and resource titles.
- Use a softer charcoal around `#6F6F69` for categories and metadata.
- Use a low-contrast divider around `#C9C9C0` with enough contrast to define rows without becoming prominent.
- Ensure all text meets accessible contrast requirements against the chosen background.

### Borders and radius
- Use 1px horizontal rules only; avoid vertical rules and heavy outlines.
- Keep corners square or use a very subtle radius no larger than 2–4px where the product system requires it.
- Do not place the list inside a rounded card or add drop shadows.

### Interaction
- Treat each row as an interactive link or clickable target when appropriate.
- On hover and keyboard focus, provide a quiet but clear state: slightly darken the title, shift the background by a small amount, or add a subtle underline.
- Make the entire row clickable rather than only the text.
- Preserve the divider rhythm during interaction; do not introduce large animations.
- Include visible `:focus-visible` styling and ensure touch targets are at least 44px tall.
- If categories are not interactive, keep them visually passive and aligned to the right on wide screens, then place them below the title or align them to the left on narrow screens.

## Implementation guidance
- Use semantic HTML such as a `section`, heading, and list of links.
- Make the layout accessible to screen readers and keyboard users.
- Use CSS Grid for the two-column section and for the title/metadata relationship within each row.
- Keep the component data-driven so titles, categories, links, and intro copy can be replaced easily.
- Do not reproduce the exact content, dimensions, or branding of the reference; translate the underlying editorial pattern into my product’s visual system.

## Never
- Never use logos or marks from the reference.
- Never use the reference product name or any recognizable product-specific names.
- Never reuse the reference copy, row titles, categories, or exact wording.
- Never add illustrations, photography, or imagery from the reference.
- Never make a pixel-for-pixel copy of the layout; adapt the proportions, typography, colors, and content to my product and brand.
