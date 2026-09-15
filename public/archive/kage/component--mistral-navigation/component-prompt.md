## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073962-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073922-full.webp
- Component on Kage: https://kage.design/component/mistral-navigation

## Before you start
Ask me what my product does, who it is for, and what its brand identity is. Then apply the principles below to create a navigation header for my product—not a copy of the reference.

## Goal
Build a polished desktop-first website navigation bar for a modern software or technology product. The header should feel editorial, precise, calm, and highly scannable, with the brand at the far left, primary navigation in the middle, and high-priority actions at the far right.

## Design language

### Layout and alignment
- Use a single horizontal row with a height of approximately 48–52px.
- Align all content to a shared vertical centerline.
- Place a compact brand mark or wordmark in a fixed-width left cell, separated from the first navigation item by a subtle vertical divider.
- Arrange primary navigation items in adjacent cells rather than floating links. Each cell should use consistent horizontal padding and have a subtle right border to create a structured grid.
- Keep the primary navigation left-aligned after the brand area; do not distribute items with large gaps.
- Push conversion actions to the right using an auto margin or a flexible spacer.
- Separate the action area from the navigation with a stronger vertical divider.
- Include one prominent primary action and one secondary contact or sales action. The primary action may include a small downward chevron if it opens a menu; the secondary action may include a compact directional arrow.
- The component should remain usable on smaller screens: collapse the primary links into a menu button, preserve the main CTA, and avoid horizontal overflow.

### Typography hierarchy
- Use a clean modern sans-serif with strong legibility at small sizes.
- Navigation labels should be approximately 15–16px, medium weight, with tight line-height around 1.1–1.2.
- Keep labels in sentence case or title case according to the product’s brand system; do not overuse uppercase text.
- CTA labels should match the navigation size but use slightly stronger weight or contrast.
- Maintain consistent baseline alignment between labels, icons, and the brand mark.

### Colour
- Use a warm off-white or very light neutral header background, approximately `#F8F8F6` or `#FAFAF8`.
- Use near-black text, approximately `#171717` or `#111111`.
- Use very light grey borders, approximately `#DFDFDB` or `#E5E5E1`.
- Give the main CTA a near-black background, approximately `#111111`, with white text around `#FFFFFF`.
- Use a light neutral background for the secondary action, or let it sit directly on the header background if the layout benefits from a lighter treatment.
- Preserve strong contrast for text and focus indicators.

### Borders and radius
- Use 1px solid borders for cell separators and the bottom edge of the header.
- Prefer square or very subtly rounded corners, around `0–3px`, to maintain a structured, technical feel.
- Avoid pills, oversized rounded containers, gradients, shadows, and decorative effects.
- Keep the brand cell and navigation cells visually connected as one continuous bar.

### Interaction
- On hover, lightly tint navigation cells with a soft neutral background such as `#F0F0EC`; do not make the movement dramatic.
- Show a clear but restrained focus-visible outline for keyboard users, using a dark outline or a high-contrast brand colour.
- If a navigation item has a submenu, reveal it on click or keyboard interaction, with a small chevron that rotates or changes state.
- Ensure the CTA remains visually dominant without becoming oversized.
- Make the entire interactive cell or button clickable where appropriate, not only the text.
- Support Escape to close open menus and provide correct keyboard navigation and accessible labels for icon-only controls.

### Implementation guidance
- Use semantic `<header>`, `<nav>`, lists for navigation items, and buttons for menu triggers.
- Keep the header at the top of the page and optionally make it sticky only if that supports the product experience; if sticky, use a subtle bottom border rather than a heavy shadow.
- Use CSS variables or design tokens for colours, spacing, borders, and header height so the component can be adapted to the user’s product.
- Use a simple inline SVG or icon library for chevrons and arrows, matching the stroke weight of the typography. Do not use emoji as interface icons.

## Never
- Never copy the reference’s logos, product names, navigation labels, CTA copy, or exact arrangement of words.
- Never use any illustrations, photography, screenshots, or imagery from the reference.
- Never reproduce the reference brand mark; create a neutral placeholder structure or use the user’s own brand asset.
- Never rely on colour alone to communicate open, active, or focused states.
- Never hide essential navigation behind hover-only interactions or create inaccessible keyboard behaviour.
