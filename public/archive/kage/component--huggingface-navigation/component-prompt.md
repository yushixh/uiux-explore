## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073961-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-navigation

## Before you start
Ask what the user's product is, who uses it, and what its brand personality and visual system are. Then apply the principles below to create an original navigation header for that product—not a copy of the reference.

## Build this component
Create a desktop-first global navigation bar for a developer-facing software product. It should sit at the top of the page as a single, clean horizontal row with a white or near-white background and enough breathing room to feel professional and lightweight.

### Layout and alignment
- Use a centered, full-width header container with a maximum content width appropriate to the product; keep consistent horizontal padding at desktop and reduce it responsively on smaller screens.
- Arrange the row from left to right: brand area, flexible global search, primary navigation links, utility controls, and one visually prominent account action.
- Keep all controls vertically centered on the same baseline. Align icons, labels, badges, and separators so the row reads as one coherent system.
- Let the search field absorb available horizontal space, with a sensible minimum and maximum width so it does not crowd the navigation.
- Collapse or simplify the navigation below desktop width: preserve the brand and account action, while moving links into an accessible menu or drawer.
- Use a subtle bottom border or shadow only if needed to distinguish the header from page content.

### Typography hierarchy
- Use the product's brand typeface if available; otherwise use a neutral sans-serif system stack.
- Set the brand name slightly heavier than navigation labels.
- Use compact, medium-weight navigation text with clear hover and focus states.
- Keep search placeholder text and secondary utility labels lower contrast than active navigation.
- Use small, bold or semibold text for release/status badges, ensuring it remains readable at compact sizes.

### Spacing and sizing
- Target a header height around 64–72px on desktop.
- Use an 8px spacing rhythm, with approximately 16–24px between major groups and 8–12px between an icon and its label.
- Give the search input a comfortable height around 36–40px and horizontal padding around 12–14px.
- Keep clickable targets at least 36–44px high, even when the visible labels are small.
- Avoid excessive gaps between primary links; the navigation should feel dense but not cramped.

### Colour
- Use a warm white or white background, approximately `#FFFFFF` or `#FCFCFB`.
- Use near-black text for the brand and primary actions, approximately `#171A21`.
- Use dark gray for standard navigation labels, approximately `#343842`.
- Use muted gray for placeholder text and inactive icons, approximately `#8A9099`.
- Use a very light gray input fill or border, approximately `#F7F7F6` and `#DFE1E5`.
- Choose an accent colour that belongs to the user's brand for active links, badges, focus rings, or status indicators; do not assume the reference palette.
- Ensure text and controls meet accessible contrast requirements.

### Borders and radius
- Give the search field a thin, low-contrast border around `#E1E3E6` and a subtle inner or outer shadow if helpful.
- Use a modest radius of approximately 8–10px for the search input.
- Use pill-shaped styling only for small status badges and the primary account action when it fits the brand; otherwise use a compact rounded rectangle.
- Keep dividers extremely subtle, approximately `#ECEDEF`, and use them sparingly.

### Interaction and accessibility
- Make the brand, every navigation item, search field, utility control, and account action keyboard accessible.
- Add visible focus rings using the product's accent colour without shifting layout.
- Give search an understandable label for assistive technology even if the visual label is a placeholder.
- Support hover, active, and current-page states with changes in colour, weight, background, or underline—not colour alone.
- Make badges supplementary rather than the only way to communicate a feature's availability.
- If a menu opens on smaller screens, provide an accessible button, clear expanded state, escape-to-close behavior, and click-away handling.
- Preserve adequate touch target sizes and prevent the header from overflowing horizontally.

## Never
- Never reuse logos, mascots, icons, product names, navigation labels, search copy, or badges from the reference.
- Never copy the reference site's exact spacing, typography, colours, proportions, or visual treatment.
- Never include the reference product's illustrations, imagery, or branded assets.
- Never hard-code the component around the reference product; use the user's product, brand, information architecture, and content.
- Never sacrifice keyboard access, responsive behavior, or contrast for visual similarity.
