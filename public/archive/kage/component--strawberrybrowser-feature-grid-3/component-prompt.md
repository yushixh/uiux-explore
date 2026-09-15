## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/strawberrybrowser-com/0a6dd4bb-409f-4c45-aa48-6abac7e2076e-1789060562-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/strawberrybrowser-com/0a6dd4bb-409f-4c45-aa48-6abac7e2076e-1789060532-full.webp
- Component on Kage: https://kage.design/component/strawberrybrowser-feature-grid-3

# Build an editorial feature grid for a modern software product

## Before you start
Ask the user what their product is, who it is for, and what their brand personality, colour palette, typography, and visual assets are. Apply the principles below to their product rather than reproducing the reference. If they have no brand system, propose a restrained editorial direction that suits the product.

## Goal
Create a responsive feature-grid section that communicates several product capabilities through a sequence of large visual cards followed by concise explanatory copy. The section should feel polished, calm, and premium: visual demonstrations do most of the work, while the text gives each capability a clear name and one-sentence benefit.

## Structure and layout
- Use a centered content container with a generous maximum width, approximately 1040–1160px on desktop.
- Arrange features in a two-column grid on desktop. Each feature occupies one column; maintain a consistent horizontal gap of roughly 16–24px.
- Give every feature a large visual panel above its text. Use a consistent aspect ratio or carefully matched heights so the grid feels intentional.
- Let visual panels have generous internal whitespace and crop or reveal interface mockups near the edges, creating the feeling of looking into a larger product surface.
- Place the feature title directly below the panel with a small, deliberate gap. Put the supporting description beneath it with slightly more separation.
- Keep the text block aligned to the panel edges rather than centering it.
- On smaller screens, collapse to one column, preserve the order of the features, and reduce panel height without making the interface previews unreadable.
- Use generous vertical spacing between rows so each feature reads as its own editorial unit.

## Visual language
- Page background: warm near-white, approximately `#FDFCF9` or `#FAF9F6`.
- Feature panels: a subtly warmer off-white, approximately `#F8F7F3`, with a very light border around `#E9E7E1`.
- Use soft, low-contrast surfaces inside the mockups: white cards, pale grey controls, and a restrained accent colour derived from the user's brand.
- Borders should be thin, quiet, and functional rather than decorative. Avoid heavy shadows; if needed, use a barely visible shadow such as `0 8px 24px rgba(30, 30, 25, 0.05)`.
- Use rounded corners consistently: approximately 14–18px for outer panels and 10–14px for inner interface cards. Avoid excessive pill-shaped containers except for small tags or controls.
- Maintain strong contrast for text while keeping secondary copy soft: primary text around `#292927`, secondary text around `#85837E`.
- If an accent is needed, use one saturated brand colour sparingly for status indicators, buttons, highlights, or small interface details.

## Typography
- Use a clean contemporary sans-serif or the user's brand typeface.
- Feature titles should be compact, semibold, and approximately 18–21px on desktop with a tight line-height around 1.2.
- Descriptions should be regular weight, approximately 16px, with a relaxed line-height around 1.4–1.5 and a comfortable maximum width.
- Avoid oversized marketing headlines inside the grid. The hierarchy should be panel first, title second, description third.
- Keep letter spacing neutral or very slightly tight for headings; do not use all caps for feature titles.

## Mockup content
- Build abstract, product-relevant UI scenes that demonstrate the feature: cards, forms, workflows, dashboards, documents, or automation steps depending on the user's product.
- Make mockups feel plausible and dimensional through layering, subtle borders, small labels, and partial cropping at the panel edges.
- Keep UI copy generic and specific to the user's product only after asking for its terminology. Do not fill the panel with dense fake content.
- Use a mixture of one larger focal interface and a few supporting details, rather than a busy collage.
- Ensure the visual still communicates the capability when viewed quickly or on a narrow screen.

## Interaction and responsiveness
- If the panels are clickable, make the entire feature unit an accessible link or button with a clear hover state: slightly stronger border, a subtle translate or lift of 1–2px, and a gentle transition around 180–240ms.
- Do not make decorative mockup elements interactive unless they serve a real interaction.
- Respect reduced-motion preferences.
- Preserve keyboard focus visibility and provide meaningful accessible labels for any feature links or controls.
- Keep the grid static by default; avoid carousels or auto-advancing motion.

## Implementation guidance
- Use semantic HTML, such as a section containing an ordered or unordered list of feature items.
- Keep the visual mockups componentized so each feature can swap its scene without changing the grid layout.
- Use CSS Grid with a mobile breakpoint around 700–800px, but adapt it to the user's existing design system.
- Make all spacing, colours, radii, and typography tokens easy to adjust.
- Use real images or product screenshots only if the user supplies them; otherwise create lightweight CSS or HTML mockups that match the brand.

## Never
- Never copy the reference site's logos, product names, feature names, or marketing copy.
- Never reuse its exact interface screenshots, illustrations, imagery, icons, or branded visual assets.
- Never imitate the reference as a pixel-for-pixel composition; use the layout principles to create an original section for the user's product.
- Never add ornamental gradients, loud shadows, or excessive animation that compete with the feature explanations.
- Never sacrifice accessibility, responsive behaviour, or readable contrast for visual similarity.
