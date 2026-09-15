## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060832-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-navigation

## Before you start
Ask the user what their product is, who the navigation is for, and what brand personality, colour palette, and navigation items should be used. Then apply the principles below to their product rather than reproducing this reference.

## Build a dark utility navigation bar
Create a responsive website header for a modern software product. It should feel calm, premium, and highly legible, with a compact horizontal layout on desktop and an appropriate collapsed pattern on smaller screens.

### Layout and alignment
- Use a full-width header with a very dark near-black background, approximately `#101010` or `#111111`.
- Keep the header content inside a centered max-width container of roughly 1120–1240px, with around 28–32px of horizontal padding.
- Use a single horizontal flex row, vertically centered, with a height around 84–96px on desktop.
- Place the brand mark and wordmark at the far left as one linked unit.
- Follow the brand with the primary navigation links, using a moderate gap of approximately 24–28px.
- Push secondary utility actions to the right with `margin-left: auto`. Keep the language selector visually grouped with the utility links, followed by community/help and account actions.
- Preserve generous empty space around the navigation; the header should not feel densely packed.
- On smaller screens, retain the brand and replace the full navigation with a compact menu button or disclosure pattern. Ensure all destinations remain keyboard accessible.

### Typography hierarchy
- Use a clean modern sans-serif system font or the product’s existing brand typeface.
- Set navigation text around 14px with a medium or regular weight and approximately 1.4 line height.
- Make the brand wordmark slightly larger and bolder than the navigation, around 21–23px, while keeping it optically aligned with the icon.
- Use modest contrast rather than dramatic size differences: primary and utility links should read as a coherent group.
- Avoid underlines in the resting state; use a clear colour or opacity change on hover and focus.

### Colour and states
- Use a near-black background such as `#101010` with a subtle lower boundary around `#1c1c1c` if separation from the page is needed.
- Set regular navigation text to a muted light grey near `#b8b8b8`.
- Set the brand and important account action to a brighter neutral near `#f0f0f0`.
- Use a restrained accent colour selected from the user’s brand for active links, focus rings, and the brand mark. Keep it sparing.
- For hover states, raise text brightness toward `#ffffff` or apply the brand accent. For keyboard focus, use a visible 2px outline with sufficient contrast.

### Controls, borders, and radius
- Style the language or locale selector as a compact outlined control, approximately 48–54px wide and 32–36px high.
- Give this control a 1px border around `#2d2d2d`, a subtle translucent background such as `rgba(255,255,255,0.02)`, and a small radius of 7–9px.
- Pair the locale icon with a small chevron and keep the control’s internal spacing tight but comfortable.
- Use minimal borders elsewhere; the navigation should be defined primarily by spacing and contrast rather than boxes.
- Give the mobile menu button the same border, radius, and focus treatment as the locale control.

### Interaction and accessibility
- Make the entire brand area, every link, locale selector, and mobile menu control keyboard reachable.
- Provide visible hover, focus-visible, and active states without relying on colour alone.
- The locale selector should expose a clearly labelled menu with sensible alignment and escape-to-close behaviour.
- The mobile menu should animate subtly, if animated at all, and respect reduced-motion preferences.
- Maintain adequate hit areas of at least 40px for controls and links on touch devices.

### Never
- Never copy the reference’s logo, brand mark, product name, navigation labels, or exact copy.
- Never use the reference product’s colours or identity as a substitute for the user’s brand system.
- Never include illustrations, decorative imagery, or unrelated visual assets from the reference.
- Never make the navigation an exact pixel-for-pixel reproduction; adapt the structure and principles to the user’s product.
- Never hide essential destinations from keyboard users or rely only on hover interactions.
