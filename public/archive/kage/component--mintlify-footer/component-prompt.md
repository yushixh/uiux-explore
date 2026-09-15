## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060646-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060616-full.webp
- Component on Kage: https://kage.design/component/mintlify-footer

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original footer for that product—not a literal reproduction of the reference.

## Build this section
Create a full-width SaaS or developer-product footer with two connected zones: an optional pre-footer conversion band and a large navigation footer.

### Layout and alignment
- Use a centered content container, approximately 1080–1120px wide, with generous horizontal gutters that reduce smoothly on smaller screens.
- Add a pre-footer band above the navigation footer. Keep its content on one horizontal row on desktop: a large, confident statement on the left and two compact actions on the right. On mobile, stack the statement and actions vertically.
- Separate the pre-footer and footer with a very light horizontal rule. Use a subtle abstract background treatment only if it fits the user's brand; it should remain secondary to the text and controls.
- In the main footer, reserve a narrow first column for the product identity or a short brand statement, then place 4–5 navigation columns to its right. Keep all columns aligned to the same top baseline.
- Use CSS Grid on desktop and collapse to a two-column or stacked layout on tablet/mobile. Preserve clear grouping rather than forcing every column into equal height.
- Place a small service-status control near the lower left of the navigation area, followed by a bottom utility row with appearance controls on the left and social/legal or community links on the right.

### Typography hierarchy
- Use a distinctive display or editorial sans/serif style for the pre-footer headline, around 30–38px desktop with tight line-height and slight negative tracking.
- Use a neutral, highly legible sans-serif for navigation and controls.
- Make column labels small and muted, approximately 14px, with medium weight.
- Make navigation links approximately 14–15px with comfortable 2.1–2.5rem vertical row spacing; use near-black text for primary links.
- Keep utility text and status labels smaller, around 12–13px.
- Establish hierarchy through size, weight, and colour rather than decorative effects.

### Spacing
- Give the pre-footer approximately 56–72px of vertical padding.
- Give the main footer approximately 96–112px top padding and 48–64px bottom padding.
- Use 32–56px gaps between navigation columns depending on available width.
- Add a generous gap between the main navigation and the bottom utility rule, then use a thin divider to close the section.
- On mobile, reduce outer padding while retaining generous spacing between groups.

### Colour
- Use a warm off-white or white page background, approximately `#FFFFFF` or `#FCFCFA`.
- Use near-black for headings and important links, approximately `#111312`.
- Use a cool warm-gray for column labels and secondary utility text, approximately `#9A9C9A`.
- Use a very pale gray divider, approximately `#ECEDEA`.
- If the brand has an accent colour, apply it sparingly to the primary CTA, status indicator, focus states, and small decorative details. A restrained green accent around `#28A866` works for a calm developer-tool aesthetic, but adapt it to the user's brand.
- Keep buttons high contrast: a dark filled primary action and a light bordered secondary action are a useful default.

### Borders, controls, and radius
- Use 1px low-contrast rules rather than heavy containers or card borders.
- Give buttons approximately 6–8px radius, 12–14px horizontal padding, and 10–12px vertical padding.
- Use a compact outlined status pill with a small coloured dot and concise availability text.
- Keep the footer mostly flat and open; avoid enclosing each link group in cards.
- Make keyboard focus states clearly visible with an accent-coloured outline or accessible high-contrast ring.

### Interaction
- Navigation links should transition subtly on hover, such as changing from near-black to the brand accent or gaining a light underline. Avoid exaggerated motion.
- Buttons should provide a small colour and elevation change on hover and a clear pressed state.
- If appearance controls are included, make them real controls with labels or accessible tooltips, and persist the selected preference where appropriate.
- On mobile, allow navigation groups to become clearly separated stacks or accessible accordions; do not hide links without an obvious control.
- Ensure all links, buttons, social icons, and status controls have descriptive accessible names and visible focus states.

### Responsive behaviour
- At widths below roughly 800px, stack the CTA content and reduce the number of footer columns per row.
- At narrow mobile widths, use a single-column flow or two-column link groups with generous touch targets.
- Keep the brand identity and primary conversion action easy to find near the top of the footer.

## Never
- Never copy logos, product names, navigation labels, marketing copy, legal text, icons, or exact content from the reference.
- Never reuse the reference's illustrations, decorative imagery, branded marks, or distinctive background graphics.
- Never assume the reference's typography, colours, or exact dimensions should be copied; translate the structural principles into the user's brand.
- Never create inaccessible icon-only controls, low-contrast links, or hover-only navigation.
