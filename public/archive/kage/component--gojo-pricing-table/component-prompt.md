## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106544-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-pricing-table

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want (or inspect the existing product context if available). Then apply the principles below to create an original pricing section for that product—not a copy of any reference.

## Build this section
Create a responsive pricing-table section with a centered heading, supporting sentence, plan-scope segmented control, and two pricing cards. The component should help users compare a flexible recurring option with a stronger-value one-time or premium option, while making the recommended choice visually clear.

### Design language

- **Layout and alignment:**
  - Place the section in a wide, centered container with a maximum width of approximately 960–1100px and generous horizontal padding.
  - Center-align the heading, supporting text, and segmented control.
  - Add a compact segmented toggle above the cards for a meaningful pricing dimension such as billing frequency, seat count, or usage tier. Use two options and make the active state unmistakable.
  - Place two equal-width cards in a horizontal grid with a small gap on desktop; stack them vertically on narrow screens.
  - Keep all card content aligned consistently: optional badge, plan name, price row, explanatory copy, then full-width CTA. Use equal card heights where practical.
  - Leave generous whitespace above the cards and between the pricing section and any following content.

- **Typography hierarchy:**
  - Use the product’s existing sans-serif font, or a clean modern sans-serif fallback.
  - Make the section heading bold and prominent, roughly 36–42px on desktop and 30–34px on mobile, with tight line-height around 1.05–1.15.
  - Use a muted 16–18px supporting sentence with comfortable line-height.
  - Plan names should be semibold at approximately 18–20px.
  - Make the primary price the strongest element in each card, approximately 34–40px, bold, and tightly aligned with a smaller muted billing suffix.
  - Use 15–17px body copy with a relaxed 1.45–1.6 line-height.
  - Keep badge and segmented-control labels compact, around 12–14px.

- **Colour:**
  - Start from the product’s brand palette rather than hardcoding the reference colours.
  - Use a near-white page background, approximately `#FFFFFF` or `#FCFCFD`.
  - Use near-black text around `#171717`, with secondary text around `#737373`.
  - Keep the standard card mostly white or transparent against the page.
  - Give the recommended card a very subtle tinted background derived from the brand colour; as a neutral fallback use a pale lavender-blue such as `#F0F0FF`.
  - Use a dark filled CTA for the recommended plan, approximately `#171717`, with white text. Use an outlined or white CTA for the secondary plan.
  - Ensure all text and controls meet accessible contrast requirements, including muted text.

- **Borders, radius, and surfaces:**
  - Use a thin, low-contrast border around cards, approximately `#E3E3E3`; make the recommended card border slightly more visible or brand-tinted.
  - Use a restrained card radius around 8–12px and avoid excessive pill-shaped containers except for the segmented control and small value badge.
  - Give cards subtle depth through a very light shadow only if needed, such as `0 1px 3px rgba(0,0,0,.06)`.
  - Use a compact pill badge for the value message with a dark background and high-contrast text.
  - Keep buttons around 40–48px high, full width within each card, with a radius matching the product’s control language.

- **Interaction:**
  - The segmented control should have clear hover, focus-visible, and selected states. Animate the active background gently when switching options.
  - Changing the toggle should update plan scope, prices, supporting copy, and any relevant CTA labels without shifting the layout unexpectedly.
  - Buttons need clear hover and pressed states, with a visible keyboard focus ring.
  - If the recommended plan changes with the toggle, move the badge and visual emphasis accordingly.
  - Respect reduced-motion preferences and do not rely on colour alone to communicate selection.

- **Responsive behaviour:**
  - On mobile, keep the heading and toggle centered, stack the cards, and preserve comfortable 20–24px page gutters.
  - Keep prices and CTA labels legible without truncation. Let supporting copy wrap naturally.
  - Ensure the selected toggle state remains obvious and touch targets are at least approximately 44px high.

## Never
- Never reuse logos, product names, or brand-specific wording from the reference.
- Never copy the reference plan names, prices, promotional claims, or CTA copy.
- Never reproduce the reference’s exact colours; derive colours from the user’s product brand.
- Never include the reference’s illustrations, imagery, icons, or decorative assets.
- Never make the design dependent on the reference product or its business model.
- Never hide important pricing terms, billing cadence, scope limits, or cancellation details.
