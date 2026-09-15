## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106542-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-navigation

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original navigation section for their product—not a copy of the reference.

## Build a floating hero navigation
Create a responsive top navigation placed inside a large hero section. The navigation should feel like a calm, premium control layer over an atmospheric background, with clear grouping and strong edge alignment.

### Layout and alignment
- Use a wide hero container with generous horizontal margins on desktop and a clearly rounded outer top-level surface; keep the navigation aligned to the same inner content grid as the hero.
- Arrange three zones in one horizontal row: brand mark and wordmark on the left, primary navigation links centered, and one prominent action on the right.
- Use flexbox with `align-items: center`; keep the left and right zones visually balanced while allowing the center links to remain readable.
- Provide approximately 28–32px horizontal padding and 28–34px vertical padding inside the navigation on desktop.
- On smaller screens, reduce padding to around 16–20px, hide or collapse secondary links behind a menu control, and preserve the primary action if it remains useful.
- Ensure the header remains legible over the hero background. A subtle translucent overlay, gradient, or text shadow is acceptable when needed.

### Typography hierarchy
- Use a clean modern sans-serif with medium weight for the brand name and navigation labels.
- Keep navigation text compact, approximately 14–16px, with relaxed line height and modest letter spacing.
- Make the action label slightly more prominent through contrast and medium weight rather than oversized type.
- Use sentence case for links and keep labels short enough to scan instantly.

### Colour and contrast
- Treat the hero image or visual field as an atmospheric backdrop: use muted, softly blended tones rather than a busy, high-detail image.
- Approximate backdrop tones may include warm taupe `#88786D`, muted olive `#777D68`, dusty rose `#9A706C`, and deep plum `#443B43`; adapt these to the user's brand.
- Use off-white text such as `#F5F3EF` for the brand and links, with slightly reduced opacity around 70–85% for inactive navigation items.
- Use a light CTA surface around `#FAF9F6` with dark text around `#242321`.
- Check WCAG-friendly contrast, especially where text crosses bright or detailed areas of the background.

### Borders, radius, and surface treatment
- Give the hero/navigation surface a large rounded corner treatment, approximately 18–24px, to create a soft card-like frame.
- Keep borders minimal or invisible; if separation is needed, use a subtle translucent white border around `rgba(255,255,255,0.16)`.
- Style the CTA as a compact pill or softly rounded rectangle with approximately 8–10px radius, 14–18px horizontal padding, and a minimum height of about 34–40px.
- Avoid heavy shadows. A very soft shadow or translucent overlay can help separate the navigation from the background without making it feel boxed in.

### Branding and icon treatment
- Use a small, simple product-specific mark beside the wordmark, approximately 18–22px square.
- If the product has no mark, use a neutral geometric placeholder or typographic treatment rather than borrowing an existing logo.
- Keep the brand group visually stronger than the navigation links, but do not make it oversized.

### Interaction
- Add a subtle colour or opacity transition to navigation links on hover and focus, such as moving from `rgba(255,255,255,0.72)` to `#FFFFFF` over 150–200ms.
- Give the CTA a restrained hover state: slightly darken the surface, add a small elevation change, or shift the label contrast without dramatic animation.
- Provide a clearly visible keyboard focus ring using a 2px light outline with a small offset.
- If the navigation becomes sticky, preserve the same hierarchy while adding a slightly more opaque background once the page scrolls.

### Responsive behaviour and accessibility
- Use a semantic `<header>` and `<nav aria-label="Primary navigation">`.
- Make every interactive element at least 44px high on touch devices, even if the visual label is smaller.
- Maintain a logical tab order: brand link, navigation links, then the primary action.
- Support reduced motion by disabling hover transforms and animated transitions when requested.

## Never
- Never use the reference product's logo, product name, navigation labels, CTA copy, or brand identity.
- Never copy the reference hero background, colour composition, layout proportions, or exact visual treatment.
- Never include illustrations or imagery from the reference; use original, brand-appropriate visual material or a neutral background.
- Never sacrifice text contrast for the sake of a blurred or decorative backdrop.
- Never make the navigation dependent on hover alone or hide essential controls without an accessible mobile alternative.
