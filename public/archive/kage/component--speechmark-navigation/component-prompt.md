## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106591-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106544280-full.webp
- Component on Kage: https://kage.design/component/speechmark-navigation

# Build a soft editorial navigation bar

## Before you start
Ask me what my product is, who it is for, and what brand personality, typography, colours, and voice I want to use. Then apply the principles below to create a version for my product—not a copy of the reference.

## Goal
Create a slim, premium-feeling website header for a modern digital product. The navigation should feel calm and highly legible, with a small brand lockup on the left, primary links across the right half, and a single prominent action at the far right.

## Design language

### Layout and alignment
- Use a full-width header approximately 72–88px tall with a very light, cool-tinted background.
- Keep the content in a centered container with generous horizontal padding, around 48–64px on desktop and 20–24px on mobile.
- Arrange the header as a three-part flex layout: brand lockup on the left, navigation links on the right, and the CTA as the final item.
- Keep the brand vertically centered. Use a small rounded-square mark followed by a wordmark or product name set as one coherent lockup.
- Place links in a horizontal row with consistent gaps of roughly 28–36px. Give the CTA a little more separation from the final text link.
- Add a very subtle, oversized abstract curved or organic shape clipped by the far-right edge of the header. It should sit behind the content and function as atmosphere, not decoration that demands attention.
- On smaller screens, collapse the text links into a menu button or compact drawer while preserving the brand and CTA hierarchy. Do not allow the header to wrap awkwardly.

### Typography hierarchy
- Use a refined sans-serif or humanist typeface for navigation links, approximately 13–15px, regular weight, with slightly relaxed line height.
- Set the wordmark with stronger character than the links—either a distinctive serif, soft display face, or custom-feeling treatment—while keeping it readable at small sizes.
- Use medium or semibold weight for the CTA label. Keep labels short and sentence case.
- Prioritise optical balance over strict geometric sizing: the icon, wordmark, links, and button should appear aligned along one visual baseline.

### Colour
- Use a near-white cool background such as `#F4F9FC` or `#F7FBFD`.
- Use deep blue-black text such as `#182936` for the wordmark and `#26343B` for navigation links.
- Use a saturated but approachable blue for the primary CTA, approximately `#2D78C9` or `#347FCB`, with white text.
- If using the ambient edge shape, keep it low contrast: pale blue tones around `#DCEBF7`, `#E8F3FA`, and `#F1F8FC` with soft transparency.
- Avoid heavy shadows. If the CTA needs separation, use a subtle blue-tinted shadow such as `0 6px 18px rgba(35, 105, 175, 0.16)`.

### Borders and radius
- Keep the header borderless, or use an almost invisible bottom border around `#EAF1F5`.
- Make the brand mark a compact rounded square, around 28–32px, with a radius of 7–9px.
- Make the CTA a generous pill with a radius of 999px, around 38–42px high, and horizontal padding of 20–24px.
- Avoid card-like containers around the navigation; the header should feel open and integrated with the page.

### Interaction
- Give navigation links a restrained hover state: slightly darker colour, a subtle underline, or a small opacity shift—never a loud animation.
- On focus, show a clear accessible outline with sufficient contrast and a small offset from the element.
- Let the CTA darken or shift slightly toward a deeper blue on hover, with a quick 150–200ms ease transition and a small upward or shadow lift if appropriate.
- Make the entire CTA easy to tap, with at least a 44px effective touch target.
- Ensure the mobile menu has clear open, close, focus, and keyboard behaviour.

## Responsive behaviour
- Desktop: show the full horizontal navigation and keep the header visually airy.
- Tablet: reduce link gaps and container padding before changing the hierarchy.
- Mobile: retain the brand lockup, replace links with a menu trigger, and keep the CTA only if it remains comfortable; otherwise place the primary action at the top of the opened menu.

## Accessibility and implementation
- Use semantic `<header>` and `<nav>` elements.
- Mark the current page where relevant with `aria-current`.
- Ensure text and controls meet WCAG contrast requirements and are keyboard accessible.
- Keep the decorative abstract shape aria-hidden and remove it if it interferes with readability.
- Build the component with reusable tokens for spacing, colour, radius, type, and transitions so it can adapt to the user's product.

## Never
- Never use the reference product's logo, wordmark, icon, product name, navigation labels, or CTA copy.
- Never copy the exact decorative shape, proportions, spacing, or visual identity from the reference.
- Never include illustrations, photography, or imagery from the reference.
- Never assume the user's product, audience, or brand uses the same colours or typography; ask first and adapt the system accordingly.
- Never sacrifice accessibility or mobile usability for visual resemblance.
