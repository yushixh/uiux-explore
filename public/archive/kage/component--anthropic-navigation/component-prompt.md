## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060505-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060491-full.webp
- Component on Kage: https://kage.design/component/anthropic-navigation

# Build a minimal split navigation bar for a modern software product

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and type system are. Then apply the principles below to create a navigation bar for my product—use my brand instead of reproducing any reference site's identity, wording, or assets.

## Design goal
Create a quiet, editorial navigation header with three clear zones: a left-aligned brand mark or wordmark, a centered-to-right primary navigation group, and a right-side action cluster. The component should feel premium and deliberate, with generous horizontal breathing room and a strong visual hierarchy.

## Layout and alignment
- Use a full-width header with a restrained maximum content width, approximately 1180–1240px, centered in the viewport.
- Set the header height around 68–76px on desktop.
- Align all items on one horizontal centerline.
- Keep the brand at the far left; place the primary links toward the right with consistent gaps of roughly 24–30px.
- Group the main call-to-action and any secondary control together at the far right.
- Use a flexible layout such as `display: flex`, with the brand taking available space so navigation remains right-weighted while staying balanced.
- On smaller screens, collapse the links into a menu button while preserving the brand and primary action where possible.
- Ensure a minimum touch target of 44px for links, buttons, and disclosure controls.

## Typography hierarchy
- Use the product's brand sans-serif or a clean, contemporary sans-serif fallback.
- The wordmark should be compact, uppercase or otherwise strongly branded, around 20–24px, with medium-to-bold weight and slight tracking.
- Navigation labels should be understated: approximately 14–15px, regular-to-medium weight, with comfortable line height.
- The primary action should use the same general size as the navigation but stronger contrast and weight.
- Avoid oversized text; this is a utility-focused header, not a hero section.

## Colour
Adapt the palette to the user's brand. As a neutral starting point:
- Header background: warm off-white, approximately `#F2F2EC`.
- Main text and wordmark: near-black, approximately `#171717`.
- Secondary icon strokes: muted charcoal, approximately `#55554F`.
- Primary action background: near-black, approximately `#171717`.
- Primary action text: off-white, approximately `#F4F4ED`.
- Optional bottom divider: very subtle warm grey, approximately `#DFDFD6`.
Maintain strong text contrast and do not use colour merely for decoration.

## Borders, shape, and spacing
- Keep the visual treatment flat and refined; avoid shadows unless the user's brand specifically calls for them.
- Use a subtle 1px bottom border or omit it if the surrounding page provides enough separation.
- Give the primary action a compact pill or softly rounded rectangle shape, around 8–10px radius.
- If the action includes a separate dropdown affordance, divide it with a faint vertical separator and give both parts equal visual weight.
- Use approximately 16–22px horizontal padding inside the action and 10–12px vertical padding.
- Maintain generous outer margins, with around 24–32px horizontal padding on desktop and 16–20px on mobile.

## Interaction and accessibility
- Links should have a clear hover and focus state, such as a subtle underline, colour shift, or background tint.
- Dropdown indicators should be small chevrons, aligned optically with their labels; animate a rotation on open if the menu is interactive.
- Dropdown menus should open predictably on click or keyboard activation, not hover alone.
- The primary action should have a slightly darker or lighter hover state and a visible `:focus-visible` ring.
- Support keyboard navigation, Escape-to-close for menus, correct ARIA attributes, and screen-reader labels for icon-only controls.
- On mobile, use an accessible menu drawer or popover with clear open and close controls.
- Respect reduced-motion preferences.

## Content behavior
- Keep labels short and scannable.
- Use one primary action only; do not allow competing buttons to dominate the header.
- If the product has many destinations, group them into purposeful dropdowns rather than shrinking the type or crowding the row.

## Never
- Never use the reference site's logo, wordmark, product name, navigation copy, or exact brand identity.
- Never copy the reference layout so literally that it feels like a replica; adapt the structure to the user's product and content.
- Never use illustrations, photography, or imagery from the reference.
- Never hide essential navigation behind hover-only interactions.
- Never sacrifice contrast, keyboard access, or touch-target size for visual minimalism.
