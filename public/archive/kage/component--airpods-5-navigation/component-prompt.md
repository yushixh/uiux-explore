## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106642-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-navigation

## Before you start
Ask the user what their product is, who it is for, and what brand, visual identity, and localization rules should be applied. Then use the principles below to design an original version for that product—not a copy of the reference.

## Build a regional availability banner and global navigation
Create a responsive website header with two stacked layers:

1. A compact regional notice that helps visitors confirm their country or market before browsing or purchasing.
2. A primary navigation bar containing the brand mark, key product/category links, and utility actions.

### Layout and alignment
- Keep the header full-bleed across the viewport.
- Use a centered content container with a maximum width around `980–1100px` on desktop and consistent horizontal padding of `24–40px`.
- The regional notice should be a short horizontal row, approximately `68–72px` tall on desktop. Place explanatory text on the left, a country/region selector near the center-right, then a primary confirmation button and dismiss control.
- Align all controls vertically to the center of the banner.
- Make the primary navigation roughly `60–68px` tall and place it directly beneath the notice with no visible gap.
- On desktop, arrange the brand mark at the left, navigation links in a single horizontal row, and search/menu or account/bag actions at the right.
- On small screens, collapse the main links into a menu trigger while keeping the region selector and confirmation action usable. Allow the notice text to wrap naturally rather than forcing overflow.

### Typography hierarchy
- Use a neutral sans-serif system font or the product’s brand typeface.
- Regional notice copy: `12–14px`, regular weight, with comfortable line-height around `1.35`.
- Navigation links: `12–14px`, regular or medium weight; keep them visually secondary to the confirmation action.
- Selector text: `15–17px`, medium weight.
- Confirmation button label: `14–16px`, medium weight.
- Avoid oversized headings: this is a utility/navigation component, not a hero section.

### Colour and visual treatment
- Use a near-black charcoal for the regional notice, approximately `#252525` to `#2B2B2B`.
- Use warm white or light gray text for the notice, approximately `#F5F5F7`, with muted secondary text around `#C7C7C7`.
- Give the country selector a subtly lighter translucent surface, approximately `rgba(255,255,255,0.10)`, with a soft border around `rgba(255,255,255,0.08)`.
- Use a light neutral confirmation button, approximately `#F5F5F7` or `#FFFFFF`, with dark text around `#1D1D1F`.
- For the primary navigation, use a restrained translucent dark surface or a subtle product-context gradient. If using a gradient, keep it atmospheric and low contrast—for example, blending deep blue `#173F71`, muted gray-violet `#77758A`, and warm beige `#C6A77D`—so the navigation remains readable.
- Add a mild backdrop blur, such as `backdrop-filter: blur(18px)`, but preserve strong text contrast.
- Icons should be thin, understated, and use the same muted light color as the navigation links.

### Borders, radius, and spacing
- Use a thin divider between the two header layers, around `1px` with low-opacity white or black.
- Give the selector and confirmation button a radius around `8–10px`; use a pill shape only if it fits the product’s existing brand language.
- Keep the dismiss control compact, around `32–36px` square, with a generous hit area.
- Use `8px` internal spacing between icon and label, `16–24px` between adjacent controls, and `24–40px` between major layout groups.
- Keep the navigation links evenly spaced, but do not distribute them so widely that the header feels empty.

### Interaction and accessibility
- Make the entire country selector keyboard accessible and expose its expanded state if it opens a menu.
- Show a clear hover and focus state for every link, control, and icon button. Prefer a subtle opacity or background change rather than dramatic animation.
- The confirmation button should have a clear pressed state and should be the strongest action in the notice.
- The dismiss button should have an accessible label and remain visible against the dark background.
- Use semantic `header`, `nav`, button, and link elements; provide accessible names for search, menu, and other icon-only controls.
- Respect reduced-motion preferences and keep transitions short, around `150–200ms`.
- Ensure color contrast remains WCAG-compliant, especially when the navigation sits over a gradient or changing background.

### Responsive behavior
- At tablet widths, reduce horizontal gaps and shorten navigation labels only if the product’s content allows it.
- At mobile widths, stack or wrap the regional message and controls into two compact rows, then show only the brand mark and essential menu/action icons in the primary navigation.
- Avoid horizontal scrolling and prevent the notice from becoming taller than necessary.

## Never
- Never use logos, product names, brand names, navigation labels, or exact copy from the reference.
- Never reproduce the reference site’s specific visual assets, imagery, background crop, or icon designs.
- Never assume the user’s product is in the same industry or uses the same localization terminology.
- Never copy exact spacing, dimensions, or color values as a fixed template; adapt the system to the user’s brand and content.
- Never omit keyboard navigation, focus states, accessible labels, or a usable mobile layout.
