## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789067511-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Component on Kage: https://kage.design/component/stripe-navigation

# Build a distinctive SaaS website navigation header

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and preferred type style are. Then apply the principles below to create a navigation system tailored to that product rather than reproducing a reference site.

## Goal
Create a desktop-first website header for a modern software product. It should feel precise, trustworthy, and conversion-oriented, with primary navigation on the left and account/sales actions on the right. Use a restrained header surface over a subtle, energetic abstract background treatment.

## Design language

### Layout and alignment
- Use a full-width header approximately 76–82px tall, with a thin lower divider.
- Keep the content in a centered responsive container with generous horizontal padding, approximately 32–48px on large screens.
- Align all controls to a single vertical centerline.
- Place the brand mark at the far left, followed by primary navigation links with consistent gaps of roughly 28–34px.
- Use compact downward chevrons only for navigation items that reveal menus; do not add them to simple links.
- Push utility and conversion actions to the far right with `margin-left: auto`.
- Keep the header visually calm despite the colourful background: use a mostly opaque light surface behind the navigation.
- At tablet and mobile widths, collapse links into a menu button and preserve one prominent action where space allows.

### Typography hierarchy
- Use a clean, highly legible sans-serif chosen to match the user’s brand.
- Render navigation labels at approximately 14px, medium weight, with tight line height around 20px.
- Make the brand wordmark or brand treatment visually stronger than the links, but avoid excessive scale.
- Use concise action labels; the primary action may use semibold text.
- Maintain strong contrast and avoid decorative typography in functional controls.

### Colour
- Default header surface: soft white or near-white, approximately `#FFFFFF` with slight translucency if the background should show through.
- Main text: deep navy or charcoal, approximately `#0A2540` / `#102A43`.
- Secondary action surface: white with a subtle warm or neutral border, approximately `#D9DEE7`.
- Primary action: use the product’s strongest brand colour; for a vivid technology brand, a saturated indigo or violet around `#5146E5` can work.
- Primary action text should be white, approximately `#FFFFFF`.
- Behind the header, create a non-literal abstract diagonal gradient using several broad blurred bands: pale blue `#B9D9FF`, lavender `#C8B5FF`, coral `#FF8A9A`, orange `#FFB000`, and pink `#F29BCB`. Keep opacity moderate and ensure text remains readable.
- Do not rely on colour alone to communicate menu state or focus.

### Borders, buttons, and radius
- Add a very subtle bottom border around `#E7EBF0`.
- Use small button radii, roughly 4–6px, for a crisp, enterprise-oriented feel; adapt to the user’s brand if it is more rounded.
- Give buttons approximately 12–18px horizontal padding and 10–12px vertical padding.
- Use a 1px border on secondary actions and no heavy shadows.
- If a chevron is present, size it around 12px and give it a small gap from its label.

### Interaction
- Navigation items with menus should open on click or keyboard activation, with a polished dropdown or mega menu aligned to the triggering item.
- Add a subtle colour shift or underline/accent on hover, and a clear visible focus ring for keyboard users.
- Buttons should have hover and pressed states using a modest darkening or lightening of the base colour.
- Keep menus openable and dismissible with Escape, outside click, and keyboard navigation.
- Ensure the header remains readable and usable over the gradient at all viewport sizes.
- On mobile, use a full-width or anchored menu panel with clear grouping, adequate tap targets of at least 44px, and an obvious close control.

## Responsive behaviour
- Large desktop: show the full navigation and both utility actions.
- Medium widths: reduce gaps and container padding before hiding content.
- Small screens: replace the horizontal navigation with a menu trigger; retain the most important conversion action if it fits, otherwise place it inside the menu.
- Do not allow labels or buttons to collide, wrap awkwardly, or become difficult to tap.

## Accessibility
- Use semantic `header` and `nav` elements.
- Give the brand link an accessible name.
- Use real buttons for menu triggers and buttons, not clickable generic containers.
- Provide `aria-expanded`, `aria-controls`, and appropriate menu semantics where applicable.
- Maintain WCAG-compliant contrast, visible focus states, and logical tab order.

## Never
- Never copy the reference site’s logos, product names, navigation labels, button copy, or exact wording.
- Never reuse the reference brand identity or imply an affiliation with it.
- Never copy the exact gradient artwork, proportions, spacing measurements, or visual arrangement; reinterpret the principles for the user’s product and brand.
- Never include illustrations or imagery from the reference.
- Never hide essential navigation behind inaccessible hover-only interactions.
- Never sacrifice readability for a decorative background.
