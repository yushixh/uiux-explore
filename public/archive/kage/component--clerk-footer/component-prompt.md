## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060784-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-footer

## Before you start
Ask the user what their product is, who it serves, and what brand personality, colours, typography, and legal/social destinations should be used. Then apply the principles below to create a footer for their product—not a copy of the reference.

## Build this component
Create a quiet, minimal website footer with a broad horizontal layout and substantial empty space. Treat it as the final utility zone of a marketing page: useful and trustworthy, but visually subordinate to the content above.

### Layout and alignment
- Use a full-width footer with a centered content container, approximately 92–94% of the viewport width on desktop and a comfortable 20–24px horizontal gutter on small screens.
- Organize the footer into two vertical bands:
  1. An upper utility band containing a small number of secondary links, aligned toward the right or distributed according to the product’s information architecture.
  2. A lower band separated by a thin horizontal rule, containing copyright/legal text on the left and a compact row of social or community links on the right.
- Keep the lower row horizontally balanced with `display: flex`, `justify-content: space-between`, and a moderate gap between social icons.
- On narrow screens, allow the lower row to wrap or stack cleanly; preserve readable spacing and avoid cramped icon clusters.
- Give the footer generous vertical padding, approximately 28–40px above the divider and 26–36px below it. The component should feel spacious rather than dense.

### Typography hierarchy
- Use a neutral sans-serif or the product’s existing UI typeface.
- Render utility links and legal text in a small body size, approximately 12–14px, with a medium or regular weight.
- Use slightly stronger contrast for actionable links than for copyright text, but avoid headline-like emphasis.
- Keep line height around 1.4–1.6 for legibility.

### Colour
- Use a near-white or very light neutral background, approximately `#F7F7F8` or `#F8F8F8`.
- Use a subtle divider around `#E3E3E5`.
- Use muted charcoal for legal text, approximately `#5F6168`.
- Use a slightly darker neutral for links and icons, approximately `#45474F` or `#565861`.
- If the product has an established brand colour, reserve it for hover or focus states rather than making the whole footer colourful.

### Borders, radius, and surfaces
- Use a single 1px horizontal divider across the content container.
- Avoid cards, shadows, gradients, or decorative panels; the footer should read as one quiet surface.
- Keep the outer footer corners square unless the surrounding page uses a clearly rounded shell.
- Social links may use small rounded hit areas, but do not add visible circular backgrounds by default.

### Interaction and accessibility
- Make every utility and social item a real link with a clear accessible name.
- Give icon links a minimum 32–40px clickable area even if the visual icon is only 16–18px.
- On hover, transition link/icon colour smoothly to the product accent or a darker neutral; use approximately 150–200ms.
- Provide a clearly visible keyboard focus ring with sufficient contrast and an offset from the icon or text.
- Use recognizable monochrome social icons only when those networks are relevant to the user’s product. Keep their visual weight consistent.
- Respect reduced-motion preferences and ensure the footer remains fully usable without hover.

### Responsive behaviour
- At desktop widths, preserve the left/right split and the long, open horizontal rhythm.
- At tablet widths, reduce gaps slightly while maintaining the divider and alignment.
- At mobile widths, stack copyright/legal content and social links if needed, aligning both to the same edge or using a deliberate centered treatment. Do not let links overflow or become smaller than comfortable touch targets.

## Never
- Never copy the reference’s logos, product names, copyright copy, link labels, or exact social destinations.
- Never reuse its illustrations, imagery, icon arrangement, or distinctive brand assets.
- Never hard-code the reference product’s colours, typography, or wording when the user’s brand provides different guidance.
- Never make the footer the visual focus of the page.
- Never omit keyboard accessibility, meaningful link labels, or mobile layout behaviour.
