## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067515-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Component on Kage: https://kage.design/component/raycast-navigation

# Build a dark floating product navigation bar

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create a navigation bar tailored to that product rather than reproducing the reference literally.

## Goal
Create a desktop-first top navigation component for a polished software product. It should feel compact, premium, and self-contained: a rounded dark container sits against a nearly black page background, with the brand on the left, primary navigation in the middle, and account plus one prominent call-to-action on the right.

## Design language

### Layout and alignment
- Place the navigation inside a centered container with a maximum width around 1200px and horizontal gutters of roughly 24–40px.
- Use a single horizontal flex row with vertically centered content and a height of approximately 74px.
- Keep the brand group anchored to the left; place the main navigation after it with a flexible gap rather than relying on fixed absolute positions.
- Push utility actions such as sign-in and the primary CTA to the far right using auto spacing.
- Use approximately 28–32px horizontal padding inside the navigation surface and 16–20px vertical padding.
- Navigation links should have consistent gaps of about 28–34px. Keep the overall bar visually balanced with clear breathing room between brand, links, and actions.
- On smaller screens, collapse or hide lower-priority links behind a menu button while preserving the brand and primary action.

### Typography hierarchy
- Use the product’s chosen sans-serif UI font, with crisp rendering and slightly relaxed tracking.
- Brand text: 15–16px, medium or semibold weight.
- Navigation and utility links: 14–15px, regular or medium weight.
- Primary CTA label: 14–15px, medium or semibold weight.
- Keep text hierarchy subtle; the CTA and brand should be the strongest elements, while standard links remain quiet.

### Colour
- Page background: near-black, approximately `#08090A`.
- Navigation surface: slightly lighter charcoal, approximately `#0D0F10`.
- Main text: soft white, approximately `#F2F2F0`.
- Secondary navigation text: muted gray, approximately `#98999B`.
- Hover text: near-white, approximately `#E8E8E6`.
- Border: low-contrast gray-black, approximately `#242628`.
- CTA surface: warm off-white, approximately `#F1F0EE`.
- CTA text and icon: dark charcoal, approximately `#252627`.
- If the user’s brand has an accent colour, reserve it for a small brand mark, active state, or focus treatment rather than saturating the whole header.

### Borders, radius, and depth
- Give the navigation container a 14–16px corner radius.
- Use a 1px subtle border around the surface, with a soft inset highlight if needed.
- Avoid heavy shadows; use a very restrained shadow or glow to separate the bar from the dark background.
- Make the CTA a compact rounded rectangle with an 8–10px radius and approximately 12–16px horizontal padding.
- Keep the CTA height around 36–40px so it feels integrated rather than oversized.

### Brand treatment
- Build the brand group from a simple abstract mark and text label, but derive both from the user’s product identity.
- Keep the mark compact, around 20–24px square, and align it optically with the label.
- Do not allow the brand mark to dominate the navigation; the wordmark should remain readable at a glance.

### Interaction
- Add a smooth 150–200ms colour and opacity transition to links and buttons.
- On link hover, shift muted text toward the primary text colour; do not add loud underlines unless the product’s brand calls for them.
- Give the CTA a slight brightness or translate-up effect on hover, and a pressed state that returns it to its resting position.
- Provide a clear keyboard focus ring using the product’s accent colour with sufficient contrast against the dark surface.
- Mark the current section with a restrained active colour or subtle indicator, without changing the bar’s overall calm appearance.
- Ensure all links and buttons have accessible names and at least 44px effective tap targets, even if their visible contents are smaller.

### Implementation guidance
- Use semantic HTML: a `header`, a `nav` with an accessible label, lists for navigation links, and buttons for menu or account controls.
- Keep the component reusable by accepting brand content, navigation items, active item, utility links, CTA label, and responsive breakpoint as props or configuration.
- Prevent the layout from overflowing when labels become longer; allow the link group to compress, wrap only where intentional, or collapse responsively.

## Never
- Never copy the reference product’s logo, wordmark, product name, navigation labels, or CTA copy.
- Never use the reference brand’s exact icon, symbol, or distinctive visual mark.
- Never reuse any reference-specific illustrations, imagery, or decorative assets.
- Never hard-code the exact reference spacing or text content when the user’s product requires a different hierarchy.
- Never make the header visually identical; preserve the underlying principles while adapting the layout, colours, typography, and content to the user’s brand.
