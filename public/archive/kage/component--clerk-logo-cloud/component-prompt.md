## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060782-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what visual brand system they want to use. Then apply the principles below to create a version for their product rather than reproducing the reference.

## Build a trusted-by logo cloud
Create a full-width social-proof section that presents a short “trusted by” statement alongside a row of recognizable customer or partner marks. The component should feel like a quiet credibility signal: highly legible, orderly, and visually secondary to the hero or main content above it.

### Layout and alignment
- Use a single horizontal strip on desktop, divided into a statement panel and several equal-width logo cells.
- Keep the statement panel slightly wider than or comparable to each logo cell, with its copy aligned to the left and vertically centered.
- Center each logo mark within its own cell both vertically and horizontally; do not allow marks to determine the cell widths.
- Use a responsive layout: on narrower screens, let the cells wrap into a compact grid or stack the statement above the logos while preserving clear grouping.
- Make the section span the content viewport, with a restrained maximum height and generous horizontal padding.
- Use subtle vertical rules between cells and a thin horizontal rule along the top and bottom edges.

### Typography hierarchy
- Use a compact, semibold sans-serif statement around 15–17px with approximately 1.35 line height.
- Limit the statement to two or three short lines; use normal sentence case rather than a large promotional headline.
- Keep any supporting label or metadata smaller and lower contrast, around 12–13px.
- Logos should be rendered as assets or carefully recreated wordmarks, not ordinary body text; preserve each mark’s natural proportions.

### Colour
- Use a near-white or very pale neutral background, approximately `#FAFAFA` to `#FFFFFF`.
- Use near-black text around `#171717` for the trust statement.
- Use muted gray rules around `#E8E8E8` or `#EEEEEE`.
- Prefer monochrome logo treatments in near-black (`#151515`) or dark gray (`#343434`) so the strip remains cohesive. If the user’s brand requires colour, reduce saturation and contrast consistently across all marks.

### Borders, sizing, and radius
- Use 1px solid borders for the top, bottom, and cell dividers.
- Keep the outer section square or use only a very small radius, approximately 0–4px; this is a structural band rather than a floating card.
- Give each cell enough space for a logo with a typical maximum width of roughly 130–160px and maximum height of 28–34px.
- Preserve logo clear space and avoid scaling one mark so large that it dominates the others.

### Interaction and responsive behaviour
- The logo cloud is primarily static. If logos link to customer stories or external sites, make each cell keyboard-focusable and use a subtle opacity or colour change on hover and focus.
- Keep hover effects restrained: approximately 70–85% opacity at rest transitioning to full opacity, or a small contrast increase.
- Ensure visible focus states meet accessibility requirements.
- On mobile, reduce logo cell padding, use a two-column grid where appropriate, and maintain consistent logo sizing. Avoid horizontal scrolling unless the product specifically needs a marquee.
- Provide meaningful accessible labels for linked logos and an appropriate section label for screen readers.

### Implementation guidance
- Build this as a reusable component with configurable trust copy, logo list, links, and responsive column count.
- Use CSS grid for predictable equal cells and flex/grid alignment inside each cell.
- Treat logos as replaceable content so the structure works for startups, developer tools, SaaS products, or enterprise software.
- Check that long brand names, missing logo assets, and small screens do not break the grid.

## Never
- Never use the reference site’s logos, product names, trust statement, or exact copy.
- Never copy the reference component’s brand-specific marks, wordmarks, iconography, or proportions.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never turn the strip into a loud carousel, animated marquee, or oversized testimonial section unless the user explicitly asks for that behaviour.
- Never reduce accessibility by using low-contrast text, unlabeled logo links, or focus states that are invisible.
