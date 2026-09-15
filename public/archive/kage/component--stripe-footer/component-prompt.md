## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789067516-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Component on Kage: https://kage.design/component/stripe-footer

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to that product rather than reproducing the reference literally.

## Build a minimal global footer base
Create the bottom section of a modern software website footer. It should feel quiet, precise, and spacious: a low-contrast utility bar beneath the main footer navigation, with regional settings on the left and legal ownership information below it. Include a small, abstract brand accent on the far right, but derive its shape and colour from the user's own brand system.

### Layout and alignment
- Use a full-width footer with a very pale cool background, approximately `#F7F9FC`.
- Separate this lower utility area from the navigation above with a 1px horizontal rule in a subtle cool grey such as `#E3E8EF`.
- Keep the content aligned to the same centered max-width container used by the rest of the site; use approximately 32px horizontal padding on desktop and 20px on mobile.
- Stack the controls vertically on the left: a regional/language selector first, followed by copyright or legal text with a modest gap.
- Place the selector and copyright near the lower edge of the bar with balanced vertical padding, around 36–44px on desktop.
- Reserve the far-right corner for a small decorative geometric accent. It should be optically aligned with the selector area, not treated as a primary action.
- On narrow screens, preserve the left alignment, allow the accent to remain visible without overlap, and reduce padding to roughly 24–28px.

### Typography hierarchy
- Use a clean UI sans-serif or the product's existing typeface.
- The regional selector should be slightly emphasized: 16px, medium weight, with a compact line height around 1.3.
- Legal text should be quieter: 15–16px, regular weight, with a line height around 1.4.
- Use near-black blue-grey text such as `#172333` for primary footer text and a slightly softened variant such as `#465366` for secondary information.
- Keep all text crisp and functional; this is not a promotional footer area.

### Controls and iconography
- Precede the region/language label with a small globe or localization icon, approximately 16px, using the product's accent colour.
- Make the selector visibly interactive with a pointer cursor, hover colour shift, and an accessible focus ring. It may open a language/region menu, but keep the menu behaviour consistent with the host product.
- Use an inline-flex row with about 8px between icon and label.
- Do not add unnecessary buttons, social icons, or extra navigation to this lower bar.

### Colour, borders, and shape
- Prefer a near-white cool surface rather than pure white: approximately `#F7F9FC`.
- Use a delicate divider around `#E1E7EF` so the boundary is visible but understated.
- Use an expressive accent colour from the user's own palette for the globe icon and geometric mark; if no palette exists, choose a restrained violet-blue around `#5B45C5`.
- Keep the footer's geometry mostly square and architectural. The decorative mark can be a small skewed quadrilateral or another simple brand-derived shape.
- Avoid heavy shadows. If the selector has a menu, use a subtle shadow and a small radius around 6–10px.

### Interaction and accessibility
- Make the region selector keyboard accessible and clearly focusable.
- Provide an accessible label for the globe icon and ensure sufficient contrast for all text.
- Add a restrained hover transition of about 150–200ms to the selector's colour or underline.
- Ensure the decorative mark is hidden from assistive technology if it is purely visual.

## Never
- Never use logos, product names, company names, copyright wording, navigation labels, or copy from the reference.
- Never reproduce the reference site's exact accent shape, colours, proportions, or layout as a branded imitation.
- Never include illustrations, photographs, or imagery from the reference.
- Never assume the user's product is a payment platform; use neutral, product-specific regional and legal labels.
- Never make the decorative accent more visually prominent than the functional footer controls.
