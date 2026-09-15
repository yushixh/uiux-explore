## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073849-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-navigation

## Before you start
Ask the user what their product is, who it serves, and what visual brand system it already uses. Then apply the principles below to create an original navigation header for that product rather than reproducing the reference.

## Design the component
Build a responsive website navigation bar with a dark, atmospheric developer-tool aesthetic. Treat this as a reusable system, adapting the content, brand, and navigation labels to the user's product.

### Layout and alignment
- Use a full-width header approximately 80px tall on desktop, with a subtle visual layer or border beneath it.
- Keep the content in a centered container with a maximum width around 1200–1280px and horizontal padding of 32px on desktop, reducing to 20–24px on smaller screens.
- Align the brand at the far left, primary navigation near the horizontal center, and one compact utility action at the far right.
- Use flexbox with `align-items: center`; allow the central navigation to remain visually balanced rather than forcing every region to have identical widths.
- Give navigation links roughly 32–48px of horizontal breathing room, with a consistent 8–12px gap between a label and any dropdown chevron.
- On mobile, collapse the primary links into a menu button or disclosure panel while preserving the brand and utility action.

### Typography hierarchy
- Use a modern sans-serif system or product typeface with clean, highly legible forms.
- Set navigation labels around 15–16px, medium weight, with comfortable line height.
- Make the brand wordmark or product name slightly larger and heavier than navigation labels, around 24–28px, while keeping it visually compact.
- Avoid excessive text decoration; use weight, spacing, and colour contrast to establish hierarchy.

### Colour and visual treatment
- Use a near-black navy or indigo header background, approximately `#17133F` to `#21134F`.
- Add a very subtle horizontal or diagonal gradient shifting toward saturated violet and blue, such as `#20134D` → `#2B1870`, keeping it atmospheric rather than loud.
- Use off-white for the brand and primary text, approximately `#F7F7FF`.
- Use muted lavender-grey for inactive navigation, approximately `#B9B5D2`, and transition to near-white on hover or focus.
- Add a thin lower edge or glow in deep violet/blue, approximately `#241A78`, with low opacity.
- Ensure text and controls maintain accessible contrast against the dark background.

### Borders, radius, and effects
- Keep the header mostly borderless; if a divider is used, make it a 1px low-opacity line rather than a strong rule.
- Use small radii around 6–10px for dropdown surfaces, mobile menu panels, or utility controls.
- Avoid heavy shadows. A soft, low-opacity inset glow or subtle bottom gradient is enough to separate the header from the page.
- Keep the brand mark simple and geometric, but generate an original mark or use the user's existing brand asset.

### Interaction
- Make every navigation item keyboard accessible and provide a visible focus state using a subtle violet outline or softly tinted focus background.
- On hover, gently brighten the label and optionally raise opacity or underline with a short transition of 150–200ms.
- Items with children should expose a clear chevron and open a keyboard-accessible dropdown on click or appropriate pointer interaction; do not rely on hover alone.
- Dropdowns should align with their trigger, use the same dark palette, and have enough padding for comfortable selection.
- The right-side utility action may be an icon-only control, but include an accessible label and a tooltip or visible label where appropriate.
- Keep the header sticky only if it supports the user's page context; if sticky, preserve the same compact height and avoid obscuring content.

### Responsive behaviour
- Preserve the left-to-right priority: brand first, essential action second, secondary links inside the mobile menu.
- Prevent labels from wrapping awkwardly. At intermediate widths, reduce navigation gaps before hiding or collapsing links.
- Make touch targets at least 44px high and provide adequate separation between adjacent controls.

## Never
- Never copy the reference site's logo, product name, navigation labels, or exact wording.
- Never use the Astro brand, its star mark, or any recognisable derivative of its identity.
- Never reuse the reference's exact colour gradient, proportions, spacing measurements, or pixel arrangement as a literal replica.
- Never include the reference site's GitHub icon or any other branded utility icon; choose an appropriate original or user-provided alternative.
- Never add illustrations, photography, or decorative imagery from the reference.
- Never hard-code the example product's content when the user's product and brand should determine the final navigation.
