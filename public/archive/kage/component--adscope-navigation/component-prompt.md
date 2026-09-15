## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106702-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106621890-full.webp
- Component on Kage: https://kage.design/component/adscope-navigation

# Build a minimal SaaS navigation bar

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to my product rather than reproducing any reference literally.

## Goal
Create a polished, desktop-first website header for a modern software product. The navigation should feel calm, credible, and lightweight, with the primary call to action immediately discoverable without overpowering the rest of the page.

## Design language

### Layout and alignment
- Use a full-width header with a centered content container, approximately 1120–1240px wide.
- Keep the header compact: roughly 68–76px tall on desktop.
- Arrange three zones on one horizontal line: brand at the left, primary navigation links near the centre, and account/conversion actions at the right.
- Vertically centre every element within the header.
- Use generous horizontal breathing room, but keep the main navigation visually closer to the centre than to either edge.
- On smaller screens, collapse or hide secondary navigation and preserve only the brand plus the most important action; use a menu control when needed.

### Typography hierarchy
- Use a clean sans-serif typeface with a neutral, highly legible appearance.
- Brand text should be medium-to-semibold, approximately 20–24px.
- Navigation links should be regular or medium weight at approximately 14px, with comfortable line height.
- Button labels should be 14px with medium-to-semibold weight.
- Avoid oversized display typography inside the header.

### Colour
- Use a near-white or white header background, approximately `#FFFFFF` or `#FCFCFB`.
- Use near-black text for the brand and primary button, approximately `#111111`.
- Use muted charcoal for navigation links, approximately `#4B4B4B`.
- Use a very light neutral divider or page transition below the header, approximately `#EDEDEB` or `#F1F1EF`.
- If the brand includes a small symbol, use one restrained accent colour that fits the product identity; a soft periwinkle/lilac such as `#A7A6D8` is one possible direction, not a requirement.

### Borders and radius
- Keep borders subtle and low contrast.
- Give the secondary account button a thin border around `#D8D8D5`, with a compact radius around 9–10px.
- Give the primary CTA a matching radius, around 9–10px, with a solid dark fill.
- Buttons should have balanced horizontal padding, approximately 18–22px, and a height around 36–40px.
- Avoid pills unless they are an intentional part of the product brand; this component is better with softly rounded rectangles.

### Interaction
- Make all navigation links visibly interactive with a restrained hover state: slightly darker text, a subtle underline, or a small colour shift.
- On hover, the outlined account button can receive a very light neutral background such as `#F5F5F3`.
- On hover, the dark CTA can shift to a slightly lighter charcoal such as `#292929`.
- Add visible keyboard focus states using a 2px accent or dark outline with an offset.
- Ensure the mobile menu, if present, is keyboard accessible and has an obvious open/closed state.
- Keep transitions short and subtle, around 150–200ms; do not animate the entire header unnecessarily.

### Content behaviour
- Use product-appropriate labels rather than copying any reference wording.
- Keep the main conversion action short and action-oriented.
- Distinguish the secondary action for existing users from the primary action for new users through outline versus filled treatment.
- Use semantic `<header>`, `<nav>`, links, and buttons where appropriate, with an accessible navigation label.

## Responsive requirements
- At widths below approximately 768px, reduce horizontal padding and prevent links or buttons from wrapping.
- At narrow widths, replace the central link group with a menu trigger or simplify the navigation according to the product’s information architecture.
- Preserve the primary CTA if space allows; otherwise place it prominently in the opened mobile menu.
- Keep touch targets at least 44px where practical.

## Never
- Never use the reference product’s logo, symbol, product name, navigation labels, button copy, or brand colours as-is.
- Never copy the reference layout as a pixel-perfect reproduction; adapt the structure to the user’s product and brand.
- Never include illustrations, photography, decorative imagery, or unrelated graphic assets in this navigation component.
- Never create inaccessible low-contrast text, tiny touch targets, or hover-only interactions.
- Never add extra menus, badges, dropdowns, or promotional elements unless the product’s requirements justify them.
