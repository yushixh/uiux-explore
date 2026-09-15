## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073271-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-navigation

## Before you start
Ask me what my product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create a navigation header tailored to my product—not a replica of the reference.

## Build this component
Create a minimal, full-width SaaS website navigation header for the top of a desktop page. The header should feel calm, precise, and lightweight, with three clear zones: a compact product mark at the far left, a small set of navigation links centered or positioned toward the right half, and authentication actions at the far right.

### Design language

- **Layout and alignment**
  - Use a single horizontal row inside a full-width header, approximately 56–64px tall.
  - Keep the content vertically centered and constrain it to a responsive max-width container with comfortable horizontal padding.
  - Place the brand mark on the left, primary navigation links after a flexible spacer, and account actions at the far right.
  - Maintain consistent gaps between links; keep the navigation visually compact rather than filling the entire width.
  - On smaller screens, collapse or hide lower-priority links and preserve the primary action, using a menu control if needed.

- **Typography hierarchy**
  - Use a modern neutral sans-serif with highly legible letterforms.
  - Render navigation labels in a small-to-medium size, approximately 13–14px, with regular weight and muted colour.
  - Make the brand mark visually stronger through shape and weight, not oversized text.
  - Use slightly higher contrast and medium weight for the primary authentication action.

- **Colour**
  - Use a near-white header background, approximately `#FFFFFF` or `#FAFAFA`.
  - Use a very light bottom divider, approximately `#EAEAEA` or `#F0F0F0`.
  - Set standard navigation text to a neutral grey such as `#666666`; use `#171717` for stronger emphasis.
  - Use a dark filled primary action, approximately `#181818`, with white text.
  - Keep secondary controls white or transparent with a subtle light-grey border.
  - Add accessible hover and focus contrast without introducing decorative colour.

- **Borders and radius**
  - Use a 1px bottom border across the full header.
  - Give the secondary and primary action buttons a modest radius of approximately 8–10px.
  - Avoid pill-shaped controls unless they fit the user's existing brand system.
  - Use a thin, understated border around the secondary action and no heavy shadows.

- **Interaction**
  - Navigation links should transition gently to a darker text colour on hover.
  - Buttons should provide a subtle background or opacity change on hover and a visible keyboard focus ring.
  - If a navigation item has a submenu, indicate it with a small chevron and provide an accessible expanded state.
  - Ensure all controls have semantic labels, adequate hit areas, and responsive keyboard navigation.

### Content and implementation guidance
- Use placeholder labels appropriate to the user's product rather than copying any reference labels.
- Build the header with semantic HTML, such as `header`, `nav`, lists for link groups, and buttons for menus or dropdowns.
- Keep the component easy to adapt to light and dark brand themes through CSS variables or design tokens.
- Make the mobile behavior intentional: preserve hierarchy, avoid cramped links, and ensure the account action remains discoverable.

## Never
- Never use the reference product's logo, product name, navigation labels, or authentication copy.
- Never copy the exact arrangement as a branded replica; adapt the structure to the user's product and brand.
- Never include illustrations, photographs, decorative imagery, or unrelated visual assets from the reference.
- Never rely on colour alone for hover, focus, active, or expanded states.
- Never remove keyboard accessibility, semantic structure, or responsive behavior.
