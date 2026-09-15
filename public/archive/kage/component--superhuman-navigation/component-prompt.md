## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060753-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060721-full.webp
- Component on Kage: https://kage.design/component/superhuman-navigation

## Before you start
Ask the user what their product is, who it serves, and what brand personality, colours, and navigation items they want. Then apply the principles below to create an original navigation header for that product rather than reproducing this reference.

## Design language

Build a premium, minimal desktop navigation bar for a modern software product.

### Layout and alignment
- Use a full-width header with a clean white or near-white background, approximately `#FFFFFF` or `#FCFCFC`.
- Keep the header in one horizontal row with a maximum content width around 1200–1280px and generous horizontal padding, typically 24–32px on desktop.
- Align the brand mark and wordmark on the left, the primary navigation near the left-to-centre area, and utility actions on the far right.
- Use flexbox with consistent vertical centring. Allow the centre navigation to grow naturally rather than forcing equal-width columns.
- Create three logical groups: brand, primary links, and utility/account actions. Maintain approximately 32–40px between the brand and primary links, and 28–36px between primary links and the utility group where space allows.
- On narrower screens, collapse the primary links into a menu button and preserve the most important account or conversion action.
- Reserve a slim visual band or section boundary immediately below the header. It may use a very pale tint or gradient related to the product brand, such as `#F0ECFF` fading into `#F8F7FF`, but it should remain secondary.

### Typography hierarchy
- Use a clean sans-serif UI typeface with strong legibility, such as an appropriate system sans or a modern grotesk.
- Set the brand wordmark in a compact semibold or bold style with modest letter spacing; it should be visually distinct without becoming oversized.
- Set navigation labels at approximately 14–15px, medium weight, with a dark charcoal colour around `#292929`.
- Use slightly smaller or lower-contrast styling for secondary utility actions when needed, around `#333333` to `#555555`.
- Keep all labels short and scannable. Use sentence case unless the product's brand system requires another treatment.

### Colour, borders, and shape
- Use a restrained monochrome palette: near-black text around `#252525`, muted secondary text around `#666666`, and white surfaces.
- Give the header a subtle bottom border in a light neutral such as `#EEEEEE`, or use the pale lower band as the separation mechanism.
- Style the sign-in or account control as a compact outlined button: white or transparent fill, `#D9D9D9` border, approximately 8–10px radius, and 12–16px horizontal padding.
- Use small chevrons or downward carets beside links that open menus. Keep them thin, understated, and separated from the label by about 5–7px.
- If the brand uses an icon, keep it simple and geometric at roughly 24px. Do not let the icon dominate the wordmark.

### Interaction
- Make navigation links keyboard accessible and provide clear focus states using a 2px brand-colour outline or a high-contrast ring with at least 2px offset.
- On hover, slightly darken the label or apply the product's accent colour; avoid dramatic animation.
- Dropdown indicators should rotate or change subtly when menus are open. Menus should be positioned directly beneath their trigger, use a white surface, a soft border, a small shadow, and an 8–12px radius.
- Make the outlined account button show a restrained hover state, such as a light neutral fill `#F5F5F5`.
- Keep transitions around 150–200ms and respect `prefers-reduced-motion`.
- Ensure touch targets are at least 44px tall on mobile and that the mobile menu is easy to dismiss.

### Responsive behaviour
- At tablet widths, reduce gaps and horizontal padding before hiding secondary links.
- At mobile widths, use a compact header with the brand at left and a menu control at right. The menu can open as a full-width panel or anchored sheet using the same typography, spacing, and border language.
- Keep the header height visually calm: approximately 64–72px on desktop and 56–64px on mobile.

## Never
- Never copy the reference site's logo, wordmark, product name, navigation labels, or exact copy.
- Never reuse its brand identity, proprietary icons, or distinctive visual assets.
- Never include illustrations, photographs, or imagery from the reference.
- Never make the header crowded with too many links, heavy shadows, oversized typography, or decorative effects.
- Never treat the prompt as a request for a pixel-perfect clone; adapt the structure and principles to the user's own product and brand.
