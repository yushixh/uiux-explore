## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073893-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073860-full.webp
- Component on Kage: https://kage.design/component/workos-footer

## Before you start
Ask the user what their product does, who it is for, and what visual brand system they want to use. Then apply the principles below to their product rather than reproducing the reference.

## Build an enterprise website footer
Create a large, calm footer for a modern B2B software product. It should feel like the final navigational map of the site: easy to scan, highly structured, and visually quiet.

### Layout and alignment
- Use a full-width footer with a very light cool-gray background, approximately `#F8F8FA`, separated from the preceding section by whitespace or a subtle tonal transition rather than a heavy rule.
- Constrain the inner content to a centered maximum width of roughly 1160–1240px, with responsive horizontal padding of 32px on desktop and 20–24px on mobile.
- On large screens, arrange the footer as a grid: a compact brand mark area on the left, followed by four navigation columns. Keep columns aligned to a shared top baseline.
- Use one larger products or platform column and several shorter supporting columns. Let link lists remain naturally sized; do not force every column to equal height.
- Add a bottom row with muted copyright text on the left and social links on the right. Align both to the same baseline and give this row ample separation from the navigation grid.
- On small screens, collapse the columns into a single vertical flow or accordion groups. Preserve clear section headings and generous tap targets; stack copyright and social links when needed.

### Typography hierarchy
- Use a clean sans-serif system or brand font with a restrained, technical B2B tone.
- Section headings should be small, medium-weight labels around 13–14px, with muted gray text and slightly increased letter spacing.
- Links should be 14px on desktop, around 15px on mobile, with comfortable 1.7–2 line-height and regular weight.
- Copyright and utility text should be 12–13px and lower contrast than the links.
- Avoid oversized marketing headlines in this component; the footer is for orientation and discovery.

### Spacing and rhythm
- Give the footer approximately 64–76px of top padding and 28–40px of bottom padding on desktop.
- Use 24–32px between the brand area and the link grid, and 26–34px between link groups where columns stack.
- Keep 8–12px vertical spacing between individual links.
- Separate the navigation area from the legal/social row with roughly 44–64px of whitespace.
- Ensure the footer remains airy even when one navigation group contains substantially more links than the others.

### Colour, borders, and shape
- Use an off-white or cool-gray surface around `#F8F8FA` or `#F7F7F9`.
- Use primary link text around `#626576`, headings around `#9295A3`, and copyright text around `#999BA6`.
- Use a single restrained brand accent for the mark and interactive states, approximately `#8790C8` or a value derived from the user’s brand.
- Do not add card borders or decorative containers around each column. If a divider is needed above the footer, use a 1px line around `#EEEFF3`.
- Keep the footer’s radius at zero when it spans the viewport. If it sits inside a shell, use a subtle 8–12px radius consistent with the rest of the product.

### Interaction
- Make every link visibly interactive with a subtle colour shift on hover and keyboard focus; use the brand accent or a darker neutral rather than underlining everything by default.
- Add a clear `:focus-visible` outline with sufficient contrast and a 2–3px offset.
- Social icons should be simple, recognizable, consistently sized at about 18–20px, and placed in generous 36–40px hit areas.
- If mobile navigation groups become accordions, animate expansion gently and expose the expanded state to assistive technology with `aria-expanded`.
- Ensure link contrast, keyboard navigation, screen-reader labels, and touch targets meet accessibility expectations.

### Content structure
- Include a brand mark area, several link groups such as Products, Developers, Resources, and Company, plus a copyright/legal row and social links.
- Use realistic categories and link labels generated for the user’s product. Keep labels short and scannable.
- If the product has a large catalog, allow one column to be longer without making the overall layout feel crowded.

## Never
- Never copy the reference’s logo, product names, company name, customer names, link labels, or exact copy.
- Never reuse logos or social marks from the reference; use the user’s own brand assets or neutral placeholders.
- Never include the reference’s illustrations, photographs, customer imagery, or decorative graphics.
- Never reproduce the exact spacing, dimensions, typography, or visual treatment as a pixel-perfect clone.
- Never invent claims, navigation destinations, or legal language without adapting them to the user’s product.
