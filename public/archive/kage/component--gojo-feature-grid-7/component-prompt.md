## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106544-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-feature-grid-7

## Before you start
Ask the user what their product is, who it is for, and what brand personality, colours, typography, and feature they want to communicate. Then apply the principles below to create an original version for their product—not a copy of the reference.

## Build this section
Create a responsive feature-grid section that explains one important product capability through a calm editorial layout and an interactive visual preview.

### Layout and alignment
- Use a wide, centred content container with a maximum width of approximately 1150–1250px and generous horizontal gutters.
- On desktop, use a two-column composition: a narrower text column on the left and a larger product-preview column on the right. Align the top of the feature label and preview near the same vertical rhythm, while allowing the copy to sit slightly lower if that creates better balance.
- Give the preview roughly 58–64% of the available row width and the text roughly 38–42%, with a substantial gap between them.
- Place a short explanatory caption directly below the preview, aligned to its left edge.
- Add a light horizontal rule or section boundary below the feature row, followed by the beginning of the next feature area. Ensure the next heading has enough top padding to feel like a deliberate transition.
- On small screens, stack the text above the preview, keep the preview full width, and reduce the section’s vertical whitespace without making it feel compressed.

### Typography hierarchy
- Use a neutral sans-serif or the product’s own brand typeface.
- The eyebrow should be small, uppercase, letter-spaced, and muted; pair it with a simple line icon only if the product already has an icon language.
- The feature heading should be a compact, bold sentence of roughly 24–30px on desktop, with tight line-height around 1.1–1.2.
- Supporting text should be 16–18px, medium grey, with a relaxed line-height around 1.55–1.7 and a readable measure of approximately 38–46 characters.
- Beneath the paragraph, use a vertical list of one or two concise value statements separated by thin rules. Keep these statements around 15–16px and use the same dark text as the heading.
- The preview caption should be understated, around 13–14px, and lower contrast than the body copy.

### Spacing
- Use approximately 64–96px of vertical padding around the feature row on desktop, depending on the surrounding page density.
- Keep 16–24px between eyebrow, heading, and paragraph; use 20–28px before the supporting statement list.
- Give each list row 14–18px of vertical padding.
- Leave 12–18px between the preview and its caption.
- Preserve generous empty space around the feature so the product visual remains the focal point.

### Colour
- Use a warm or neutral near-white page background, approximately `#FAFAF8` or `#FFFFFF`.
- Use near-black for headings, approximately `#171717`.
- Use a soft neutral grey for body text, approximately `#777777`.
- Use a very light divider, approximately `#E6E6E3`.
- Keep the preview’s internal interface colours distinct from the page, using a deep charcoal or warm dark surface such as `#24211F`, with muted cream text around `#E8E1D7` and one restrained accent colour around `#2F8FD8` or an appropriate brand accent.
- Do not use colour decoration outside the preview unless it supports the user’s brand system.

### Preview and interaction
- Build a rounded product mockup or functional UI preview rather than using an unrelated decorative image. It should show the same interface or state in two contrasting conditions, such as before/after, inactive/active, or default/customized.
- Give the preview a radius of approximately 10–14px, a subtle border, and a soft shadow that separates it from the page without looking elevated or glossy.
- Add a visible draggable comparison handle or slider when the two states benefit from direct comparison. Use a narrow divider line across the preview and a compact circular handle with a simple horizontal drag cue.
- Make the handle keyboard accessible: support arrow keys, provide an accessible label, and expose the comparison position to assistive technology. On touch devices, make the hit area at least 44px.
- If a comparison interaction is not appropriate for the user’s feature, use a simple segmented control or toggle in the preview while preserving the same restrained visual language.
- Include subtle hover and active feedback, but avoid large animations. Any transition should be quick and gentle, around 150–250ms.
- Keep the mock interface legible and believable, but make it clearly an illustrative product preview tailored to the user’s product.

### Responsive and accessibility requirements
- Ensure the two-column layout collapses cleanly without horizontal scrolling.
- Maintain sufficient contrast for all text and controls.
- Respect `prefers-reduced-motion` by disabling comparison transitions and non-essential animation.
- Keep the feature heading and supporting copy selectable HTML text rather than text baked into an image.
- Use semantic section, heading, list, and figure/figcaption elements where appropriate.

## Never
- Never copy the reference site’s logos, product names, feature names, or marketing copy.
- Never reuse the reference interface, screenshots, illustrations, icons, or imagery.
- Never reproduce the exact brand palette, typography treatment, layout measurements, or visual assets; adapt the principles to the user’s product and brand.
- Never make the preview decorative at the expense of explaining the feature.
- Never hide the interaction behind an inaccessible gesture or rely on colour alone to communicate state.
