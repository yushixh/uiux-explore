## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073747-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073722-full.webp
- Component on Kage: https://kage.design/component/upstash-feature-grid-2

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section
Create a responsive feature-grid / bento section that explains several product capabilities through a mixture of concise copy and lightweight UI demonstrations. The section should feel polished, technical, calm, and premium, with enough visual substance that each feature feels like part of a real product rather than a generic card list.

### Layout and alignment
- Place the section on a very pale, softly tinted background, with a centered heading block above the grid.
- Use a responsive bento grid with intentional card proportions rather than identical tiles:
  - On desktop, use two columns in the first row, with two cards of approximately equal width.
  - In the second row, make the left card wider—roughly two-thirds of the row—and the right card narrower—roughly one-third.
  - Let the grid collapse to one column on smaller screens while preserving a sensible reading order.
- Align every card's title and description to the same left inset. Keep visual demonstrations anchored toward the bottom of each card so cards feel structured even when copy lengths vary.
- Use generous outer margins and consistent gaps between cards. Keep the section comfortably contained rather than stretching edge to edge.
- The heading should be centered with a clear separation from the cards; avoid excessive decoration around it.

### Typography hierarchy
- Use a modern sans-serif with a clean, highly legible appearance. Use the user's brand font when available.
- Make the section heading large and confident, with tight line-height and medium-to-bold weight.
- Add a quieter subtitle beneath it in a larger body size and muted gray-green color.
- Card titles should be compact, dark, and semibold; card descriptions should be smaller, relaxed, and clearly secondary.
- Use monospaced typography inside code or developer-oriented UI elements.
- Keep copy concise: one benefit-led title and a short two-line explanation per card.

### Colour
- Use a near-white base such as #F7FAF9 or a very pale mint wash such as #EEF8F5.
- Use white cards around #FFFFFF with dark evergreen text around #073B32 or #0B4037.
- Use muted gray-green body text around #71807C.
- Use a vivid product accent—approximately #12B886 or #16B98A—for active states, data points, and positive metrics.
- Use a warm secondary accent around #D9A52D for selected numeric values or highlights.
- Keep decorative UI low contrast; the overall palette should feel airy and restrained.

### Cards, borders, and radius
- Use large rounded cards with approximately 28–34px corner radius.
- Prefer very subtle borders such as #F0F3F2 and extremely soft shadows, or no visible shadow if the background contrast is sufficient.
- Give cards generous internal padding, approximately 32px on desktop and 24px on mobile.
- Maintain a clean white card surface even when the page background is tinted.
- Use smaller rounded containers for metric cells, tabs, badges, and code blocks; these can use 10–14px radii.

### Card content patterns
- Include a distributed-performance card with a minimal row of repeated vertical indicators or dots. Make the visualization abstract and data-like, with pale tracks and bright accent endpoints; do not use a literal map.
- Include a usage-and-pricing card with three compact metric cells. Each cell should have a muted label and a prominent value, using restrained accent colours.
- Include a developer API card that is visibly wider and contains a small segmented tab control above a dark code panel. The code should be short, invented, and generic to the user's product; syntax highlighting should use only a few subtle accent colours.
- Include an ecosystem or compatibility card with a simple abstract orbit/network diagram made from concentric low-contrast rings and generic geometric nodes. Do not use recognizable third-party logos.
- Ensure each visual supports the card's message and remains understandable without animation.

### Interaction and responsiveness
- Tabs in the developer card may switch the displayed example, with a clear active state using the accent colour. If tabs are not implemented, render them as a convincing static control.
- Add restrained hover feedback to cards—such as a slight border tint, gentle lift, or accent shift—without making the layout jump.
- On mobile, stack cards vertically, reduce visual density, allow metric cells to wrap or become a horizontal scroll-free row, and keep code horizontally scrollable within its own panel.
- Respect reduced-motion preferences and ensure all controls have visible keyboard focus states.
- Keep the section usable without JavaScript if practical; the essential hierarchy and content should remain intact.

### Content guidance
- Replace all reference copy with original benefit-led copy relevant to the user's product.
- Make the four benefits meaningfully different: performance/reach, predictable economics, developer integration, and compatibility/ecosystem.
- Keep the heading and subtitle specific to the user's product rather than using generic SaaS language.

## Never
- Never copy the reference's logos, product names, brand marks, or recognizable third-party symbols.
- Never reuse the reference's exact heading, card titles, descriptions, metrics, code, labels, or UI copy.
- Never use illustrations or imagery from the reference; create abstract CSS-based visualizations or original interface details instead.
- Never reproduce the exact grid proportions, decorative diagram, typography, or colour values if they conflict with the user's brand.
- Never make every card identical when the content benefits from a varied bento composition.
- Never sacrifice accessibility, responsive behavior, or text legibility for visual similarity.
