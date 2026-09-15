## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060912-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060875-full.webp
- Component on Kage: https://kage.design/component/ramp-navigation

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and conversion goal the header should express. Then apply the principles below to create an original version for that product—not a visual copy of any reference.

## Build this section
Create a responsive website header with two horizontal layers:

1. **Announcement strip**
   - Place a full-width, near-black strip at the very top, approximately `#1A1A1A`.
   - Center a single concise announcement sentence in small, highly legible sans-serif type, around 13–14px with medium weight.
   - Include a short underlined text link immediately after the message, using a slightly brighter or white colour.
   - Add a dismiss control at the far right with generous hit area, subtle opacity, and an accessible label. Use a simple “×” or close icon, not an illustration.
   - Keep the strip visually compact: roughly 40px tall on desktop, with horizontal padding that scales down on mobile.

2. **Primary navigation row**
   - Use a white or very lightly tinted background, approximately `#FFFFFF` or `#FCFCFA`, with a thin bottom border around `#E9E9E6`.
   - Constrain content to a wide max-width container, approximately 1150–1250px, centered on the page. On very wide screens, preserve comfortable outer margins rather than stretching every item to the viewport edges.
   - Align the brand mark or wordmark at the far left, navigation links beside it, and account/conversion actions at the far right. Use the user’s own brand mark; do not invent a reference logo.
   - Make the navigation row approximately 60–64px tall. Vertically center every item on the same baseline and avoid uneven gaps.
   - Use a clean sans-serif type system: navigation labels around 14px, medium weight, with line-height near 20px. Keep text dark charcoal, approximately `#111111`.
   - Group product-oriented links before informational links, then separate the right-side account and CTA group with flexible space. Use consistent horizontal gaps of roughly 26–34px between primary links.
   - For links that open menus, add a small downward chevron with a 6–8px gap. The icon should be visually lighter than the label and aligned to the text baseline.
   - Include a low-emphasis account link, a bright primary CTA using a vivid yellow or another brand-appropriate accent, and a dark filled secondary CTA. Example accent values may be `#EFFF00` for the primary action and `#1B1B1B` for the dark action, but adapt them to the user’s brand.
   - Style buttons with compact horizontal padding around 16–20px, a height of approximately 36px, medium-to-bold text, and a moderate radius around 7–9px. The primary action should be the most visually noticeable element without becoming oversized.

## Responsive and interaction rules
- On desktop, keep all navigation and actions on one line.
- On smaller screens, collapse the link group into a menu button while retaining the brand and the most important action if space allows. Do not let labels wrap awkwardly.
- Provide hover and focus states: links can shift to a darker or accent colour, dropdown chevrons can rotate when open, and buttons can slightly change brightness or translate by 1px. Keep transitions around 150–200ms.
- Ensure keyboard navigation, visible focus rings, adequate contrast, and touch targets of at least 44px where practical.
- If a dropdown is implemented, use a clean panel aligned to its trigger, with a white background, thin border, soft shadow, 10–14px radius, and generous internal spacing. Close it on outside click and Escape.

## Never
- Never reuse any logo, product name, brand wording, announcement copy, navigation labels, or CTA copy from the reference.
- Never copy the exact spacing, proportions, typography, colour choices, or menu structure as a branded imitation; use the rules as a flexible pattern.
- Never include illustrations, photography, decorative imagery, or unrelated visual assets in this navigation component.
- Never make the announcement strip or navigation dependent on hover alone.
- Never omit accessible labels, focus states, responsive behaviour, or a usable mobile navigation path.
