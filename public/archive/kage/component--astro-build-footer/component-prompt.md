## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073854-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-footer

## Before you start
Ask the user what their product is, who it serves, and what brand personality, colours, typography, and links should be used. Then apply the principles below to their product rather than reproducing the reference.

## Build this component
Create a responsive website footer for a modern software or developer-focused product. The footer should feel editorial, calm, and premium: a dark full-width surface with a clear newsletter conversion area, grouped navigation links, and a compact bottom bar for legal information and social destinations.

### Layout and alignment
- Use a full-width footer with a deep near-black navy background, approximately `#070914`.
- Constrain the inner content to a centred max-width of roughly 1180–1240px with responsive horizontal padding of 32px on desktop and 20–24px on mobile.
- Add generous top and bottom padding, approximately 48–64px, so the footer feels like a deliberate closing section rather than a cramped sitemap.
- On desktop, use a grid: a wider left column for newsletter signup and three or four narrower columns for grouped links. Align all column headings to the same top baseline.
- Make the signup column approximately 1.5–2 times wider than a link column. Keep link groups vertically compact and consistently spaced.
- Add a thin divider above the lower utility bar with a muted border around `#272b39`. Give the lower bar roughly 32–44px of top padding and 8–16px of bottom padding.
- Place copyright/license text on the left and social links on the right on desktop. Stack or wrap these areas gracefully on smaller screens.
- On mobile, collapse the main grid into a single column or a two-column link layout. Keep the newsletter block first, followed by links, then the utility bar.

### Typography hierarchy
- Use a clean sans-serif system or product font with a technical/editorial character.
- Newsletter and column headings should be semibold, around 16–18px, with a line-height near 1.3 and high contrast.
- Supporting newsletter copy should be 16px with a relaxed 1.45 line-height and a muted light-grey colour.
- Navigation links should be around 16px with approximately 1.9 line-height for easy scanning.
- Bottom-bar metadata can be 14–16px, slightly muted, and should not compete with the main navigation.
- Use sentence case for headings and links; avoid excessive uppercase styling.

### Colour, borders, and surfaces
- Use a near-black blue background such as `#070914` or `#080a16`.
- Use primary text around `#f4f5f7`, secondary text around `#b4b7c3`, and subdued text around `#858a99`.
- Use borders in the `#272b39`–`#303442` range with 1px thickness.
- Give the email field a transparent or slightly darker fill, a 1px muted border, and a radius of approximately 8–10px.
- Use a full-width submit button below the input. It can use a soft grey surface such as `#30313a` with near-white text, or an accent colour from the user's brand. Keep the button radius around 999px or 20–24px to create a pill shape.
- Avoid gradients, heavy shadows, and decorative effects unless they clearly fit the user's existing brand.

### Newsletter interaction
- Include a short benefit-oriented heading and one or two lines of explanatory copy.
- Use a clearly labelled email input with a useful placeholder, plus a prominent submit button beneath or beside it depending on available width.
- Show visible hover and keyboard-focus states: brighten the border, add a subtle focus ring, and slightly change the button background.
- Validate the email field accessibly and provide a concise success or error message without causing the layout to jump.

### Navigation and social links
- Group links under descriptive headings such as resources, company, community, or legal, adapting the labels to the user's product.
- Keep each group to a manageable number of links and maintain consistent vertical rhythm.
- Links should brighten on hover and have a clear focus state; do not rely on colour alone for keyboard usability.
- Represent social destinations with accessible text labels or familiar icons, but preserve a simple, evenly spaced horizontal row on desktop.
- Include a compact legal/copyright area in the bottom bar, with enough spacing to distinguish separate items.

### Responsive and accessibility requirements
- Ensure the footer remains readable at narrow widths without horizontal scrolling.
- Use semantic `footer`, `nav`, headings, lists, labels, and form controls.
- Maintain WCAG-friendly contrast, visible focus indicators, keyboard navigation, and touch targets of at least 44px where practical.
- Respect reduced-motion preferences and keep interactions subtle.

## Never
- Never copy the reference site's logos, product names, Astro-specific wording, link labels, or copyright text.
- Never reuse the reference's exact newsletter copy, social icon arrangement, or brand identity.
- Never include illustrations, screenshots, decorative imagery, or other visual assets from the reference.
- Never make the footer feel like a pixel-for-pixel clone; adapt the structure, content, accent colour, and typography to the user's product and brand.
- Never hide legal links, form labels, focus states, or accessible names behind visual-only treatments.
