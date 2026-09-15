## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073974-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073921-full.webp
- Component on Kage: https://kage.design/component/bolt-new-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and typography are. Then apply the principles below to create an original feature-grid section for that product—not a visual copy of the reference.

## Build this section
Create a responsive, dark-mode feature grid that communicates several product benefits through a polished bento layout. The section should feel like a premium product-marketing moment: editorial copy paired with abstract, UI-inspired demonstrations rather than stock imagery.

### Layout and alignment
- Use a centered content container, approximately 1100–1200px wide, with generous horizontal gutters that shrink gracefully on smaller screens.
- Organize the content as a bento grid with consistent gaps of roughly 8–12px on desktop and 12–16px on mobile.
- Start with one full-width, wide card. Place concise explanatory copy on the left and a compact product-style visual on the right.
- Follow with two equal-width cards: one can emphasize a large metric or outcome, while the other pairs copy with a partially cropped interface visualization.
- Finish with a full-width expressive card using a subtle brand-colour gradient and a centred design-system or workflow visualization.
- Keep card content aligned to a clear internal grid. Preserve deliberate whitespace around copy; do not fill every area with decoration.
- On mobile, stack cards in a single column, keeping the wide card's text before its visual and ensuring cropped visual elements do not cause horizontal overflow.

### Typography hierarchy
- Use a modern sans-serif or the product’s brand typeface.
- Set card headings in a semibold or bold weight, around 18–22px, with tight line-height around 1.15–1.25.
- For the section’s major metric, use an oversized display value around 72–104px desktop, scaling to 56–72px on mobile.
- Use muted supporting text around 15–17px with a 1.45–1.6 line-height and a readable measure of roughly 32–42 characters per line.
- Use occasional italic or contrasting accent treatment only for a short phrase in the expressive card; keep most text crisp and neutral.

### Colour and atmosphere
- Use a near-black page background, approximately #0D0E10 or #101114.
- Use slightly lifted card surfaces around #151619–#191A1D.
- Use subtle borders around #2A2C31 with roughly 70–85% opacity.
- Set primary text to a soft white such as #F2F1F4 and secondary text to #A7A6AD.
- Add restrained cool blue highlights around #54B9F3 or #4C8DFF for status dots, glows, or active states.
- For the final expressive card, use a deep plum/mauve base around #3A1D2E or #432236, with a low-contrast radial or linear gradient. Adapt the accent hue to the user’s brand rather than defaulting to pink.
- Keep decorative glows soft and localized; use blurred radial gradients with low opacity instead of loud neon fills.

### Borders, radius, and surfaces
- Give cards a medium rounded corner, approximately 14–18px, with consistent radius across the grid.
- Use 1px borders and very subtle inner highlights to separate cards from the dark page.
- Avoid heavy shadows. Prefer faint ambient shadows or low-opacity inset highlights for depth.
- Build visual mockups from simple nested panels, pills, dots, labels, charts, typography samples, or abstract blocks. They should suggest a real product interface without reproducing one.
- Allow visual artwork to be clipped by the card with `overflow: hidden` when it creates a cinematic, partially revealed composition.

### Interaction and motion
- If cards are interactive, add a gentle border-brightening and 1–2px lift on hover, with a 180–240ms ease-out transition.
- Keep interactive affordances subtle; the grid should not feel like a dashboard full of controls.
- Add optional low-amplitude animation to status dots, gradients, or mockup elements, respecting `prefers-reduced-motion`.
- Ensure all meaningful links and controls have visible keyboard focus states using a bright brand-colour outline.

### Content strategy
- Use short, benefit-led headings and supporting copy tailored to the user’s product.
- Include one quantified outcome only if the user can substantiate it; otherwise use a qualitative claim or a clearly labelled illustrative value.
- Make each card communicate a distinct benefit: for example, intelligent automation, scale, reliability, speed, customization, or a cohesive workflow.
- Keep the visual treatment supportive of the message rather than turning the grid into a gallery of unrelated effects.

## Never
- Never use logos, product names, slogans, or exact copy from the reference.
- Never reproduce the reference’s specific card arrangement, illustrations, UI screenshots, metrics, or decorative artwork one-for-one.
- Never use the reference’s branded typography, colour accents, or proprietary visual language without adapting it to the user’s brand.
- Never use stock imagery or unrelated illustrations; create abstract, CSS- or component-built product visualizations instead.
- Never sacrifice readability, responsive behaviour, accessibility, or semantic HTML for visual similarity.
