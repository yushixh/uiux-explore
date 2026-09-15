## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060505-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060491-full.webp
- Component on Kage: https://kage.design/component/anthropic-banner

## Before you start
Ask the user what their product is, who it is for, and what visual brand language they already use. Then apply the principles below to create an original announcement banner for that product—not a copy of the reference.

## Design the component
Build a wide promotional announcement banner with a calm, editorial feel. It should work as a standalone section within a larger page and communicate one important launch, update, event, or product message.

### Layout and alignment
- Use a full-width horizontal section with a near-black background and a fixed or responsive minimum height that feels substantial rather than like a notification strip; target roughly 620–680px on desktop, adapting fluidly on smaller screens.
- Center the content both horizontally and vertically within the dark panel.
- Constrain the text stack to approximately 600–760px so the headline remains readable and does not span the entire viewport.
- Stack the headline, supporting text, and CTA in a single centered column.
- Give the headline the most visual weight, followed by a short supporting statement and then the CTA.
- Preserve generous empty space around the content. Do not add side illustrations, decorative cards, or competing elements.
- On mobile, reduce the section height and horizontal padding while keeping the same centered composition. Allow the headline to wrap naturally.

### Typography hierarchy
- Use a distinctive editorial or serif display face for the headline if it fits the product’s brand; otherwise choose the brand’s strongest display style. Avoid defaulting to a generic bold sans-serif.
- Set the headline in an oversized responsive style, approximately 64–76px on desktop with tight line-height around 0.95–1.05 and modest negative tracking. Use 34–48px on mobile.
- Keep the headline to one or two deliberate lines where possible. Balance the line lengths rather than forcing an arbitrary break.
- Use a smaller, readable supporting paragraph around 22–26px on desktop and 18–21px on mobile, with approximately 1.15–1.3 line-height.
- Use sentence case and concise copy. The CTA label should be short and action-oriented.
- Keep all text centered and use a warm off-white text colour rather than pure white.

### Colour
- Use a near-black background such as `#151515` or `#141414`.
- Use a warm ivory for primary text and button fill, such as `#F3F1E9` or `#F5F3EC`.
- Use a slightly muted ivory or warm grey for supporting text, such as `#D9D7CF`, while maintaining strong contrast.
- If the surrounding page is visible, use a soft warm neutral such as `#EEEDE5` to separate the banner from adjacent sections.
- Keep the palette intentionally limited; the message should be carried by typography and spacing rather than colour effects.

### Borders, radius, and CTA
- Keep the banner itself borderless and flat.
- Create a compact pill-like or softly rounded CTA with approximately 8–10px corner radius, a warm ivory background, and near-black text.
- Use comfortable horizontal padding around 18–22px and vertical padding around 10–13px; the button should feel precise rather than oversized.
- Include a simple directional arrow or equivalent affordance only if it suits the product’s interaction language.
- On hover, slightly darken the button, shift the arrow a few pixels, or apply another restrained state transition. Use a 150–220ms ease-out transition.
- Ensure keyboard focus is clearly visible with an accessible focus ring or contrasting outline.

### Responsive and accessibility behaviour
- Maintain readable contrast and a minimum 44px interactive target for the CTA.
- Use `clamp()` or equivalent responsive sizing for the headline and section spacing.
- Avoid overflow when the headline wraps on narrow screens.
- Respect reduced-motion preferences by disabling arrow movement and nonessential transitions.
- Give the banner meaningful semantic structure: one heading, supporting text, and a clearly labelled link or button.

## Never
- Never copy the reference’s logos, product names, model names, or exact marketing copy.
- Never reuse its illustrations, imagery, decorative marks, or brand-specific symbols.
- Never reproduce the reference as a pixel-perfect clone; adapt the composition to the user’s product and brand.
- Never add unnecessary navigation, multiple CTAs, gradients, noisy decoration, or unrelated content.
- Never sacrifice responsive layout, keyboard access, focus visibility, or text contrast for visual similarity.
