## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073869-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-footer

## Before you start
Ask what the user's product is, who it serves, and what its brand personality, colour palette, and navigation structure are. Then apply the principles below to create an original footer for that product—not a copy of the reference.

## Design the section
Build a spacious, editorial website footer with three layers:

1. **Optional visual lead-in**
   - If the product benefits from a showcase or portfolio moment, place a large, wide visual panel above the navigation.
   - Use the user's own content or a neutral, product-relevant visual treatment; keep it contained within the main page grid.
   - Give the panel generous breathing room and a subtly rounded outer corner, while avoiding decorative clutter.
   - If imagery is not appropriate for the product, replace this with a simple statement, featured link, or omit the layer entirely while preserving the vertical rhythm.

2. **Navigation grid**
   - Use a full-width, centered container with a maximum width around 1180–1240px.
   - Divide the navigation into three or four equal columns on desktop using very thin vertical rules.
   - Add a thin horizontal rule above and below the grid. Extend rules to the container edges rather than enclosing the section in a heavy box.
   - Each column starts with a compact, semibold group label, followed by vertically stacked links with comfortable gaps of roughly 24–30px.
   - Keep all labels left-aligned to the same column baseline. Make link groups short and scannable.
   - On smaller screens, collapse to one column or two columns depending on content length; remove unnecessary vertical dividers and retain horizontal separators where useful.

3. **Utility bar**
   - Place a slim bottom row beneath the navigation grid with generous top and bottom padding.
   - Put theme or display controls on the left as a small pill-shaped control cluster with subtle icon buttons.
   - Put copyright, legal, and policy links on the right on desktop; stack or wrap them naturally on mobile.
   - Use a centered dot or similarly quiet separator between legal items.

## Reusable visual rules

### Layout and alignment
- Use a pale, nearly white canvas such as `#ffffff` or `#fcfcfb`.
- Align every layer to the same max-width container and left/right gutters; use approximately 32–48px horizontal padding on desktop and 20–24px on mobile.
- Create a strong vertical pause between the visual lead-in and the navigation grid, approximately 96–144px depending on viewport height.
- Keep the footer content airy rather than dense: navigation grid padding around 56–72px vertically, utility bar padding around 36–48px.
- Use a consistent spacing scale based on 4px or 8px increments.

### Typography
- Use a clean sans-serif system or brand typeface.
- Group labels: 14–16px, medium or semibold, near-black.
- Navigation links: 15–17px, regular weight, dark gray.
- Utility/legal text: 13–15px, medium gray.
- Use approximately `#171717` for headings, `#303030` for links, and `#666666` for secondary text.
- Keep line-height relaxed, around 1.5–1.7 for link lists and legal text.

### Colour, borders, and shape
- Keep the overall palette monochrome and calm so the footer does not compete with the page above it.
- Use hairline borders around `#e7e7e5` or `#ededeb`; use 1px rules with low contrast.
- Use small radii around 8–12px for the optional visual panel and 999px for the compact control pill.
- Avoid shadows, gradients, loud fills, and heavy boxed cards unless they are clearly part of the user's brand.

### Interaction
- Make every navigation and policy item a real link with a clear hover and keyboard focus state.
- On hover, shift links toward the brand accent or underline them subtly; do not cause layout movement.
- Give icon controls accessible labels and a visible focus ring, for example `2px solid` in the brand accent with a 2px offset.
- If the footer includes theme controls, implement them functionally where possible and persist the user's choice.
- Ensure the grid remains readable at narrow widths, with no clipped text or horizontal overflow.

## Accessibility and implementation
- Use semantic `<footer>`, navigation landmarks, heading elements for group labels, and unordered lists for link groups.
- Maintain WCAG-compliant contrast for text and focus indicators.
- Support keyboard navigation, reduced motion preferences, and responsive layouts from mobile through wide desktop.

## Never
- Never reuse logos, product names, navigation labels, copyright text, or other copy from the reference.
- Never copy the reference's exact grid proportions, imagery, content, or visual arrangement; adapt the principles to the user's product and brand.
- Never use illustrations, screenshots, or imagery from the reference.
- Never create a footer that feels cramped, overly boxed, or dependent on decorative effects.
