## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060359-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060339-full.webp
- Component on Kage: https://kage.design/component/notion-navigation

# Build a minimal SaaS navigation bar

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a version for my product rather than reproducing the reference.

## Design goal
Create a calm, premium website header for a software product. The navigation should feel lightweight and trustworthy, with the primary links visually centered, utility actions grouped on the right, and one clearly emphasized call to action.

## Structure and alignment
- Use a full-width header with a shallow height of approximately 64–72px.
- Keep the content inside a centered max-width container, approximately 1180–1280px, with 24–32px horizontal padding.
- Place a small, simple brand mark or product wordmark at the far left. It should occupy a compact footprint and align vertically with the navigation.
- Keep the primary navigation near the horizontal center of the header rather than tightly beside the brand mark. Use a single row of 3–5 links.
- Put utility actions at the far right: a lower-emphasis sign-in link followed by one prominent CTA button.
- Use flex alignment with `align-items: center`; maintain consistent vertical centering across the mark, links, and button.
- On narrow screens, collapse or replace the primary links with a menu control, preserve the CTA only if space permits, and prevent wrapping within the header.

## Typography hierarchy
- Use the product’s sans-serif brand font if available; otherwise use a clean system sans-serif stack.
- Navigation and utility links should be compact and readable, around 14–15px with medium weight and approximately 1.2 line-height.
- Keep link text in sentence case, not all caps.
- Make the CTA slightly more prominent through weight and contrast rather than oversized type; use approximately 14–15px and medium or semibold weight.
- Avoid large headline styling in the header.

## Colour
- Use a white or near-white header background, approximately `#FFFFFF` or `#FCFCFB`.
- Use near-black text for navigation and utility links, approximately `#171717` to `#242424`.
- Use a saturated but accessible brand colour for the CTA, approximately `#147AC2` or an equivalent colour from the user’s brand palette.
- CTA text should be white, approximately `#FFFFFF`.
- If a divider is needed, use a very subtle neutral line such as `#F0F0EE`; do not make the border visually dominant.
- Define hover, focus, and pressed states with small colour or opacity shifts while preserving accessible contrast.

## Borders, radius, and sizing
- Keep the header mostly borderless; use a bottom border only when it helps separate the navigation from page content.
- Give the CTA a compact pill-like radius, approximately 8–10px, without making it excessively rounded.
- Use a button height of approximately 36–40px with horizontal padding around 16–18px.
- The brand mark may be geometric or typographic, but it should remain small and monochrome or use restrained brand colour.
- Do not add cards, shadows, gradients, decorative separators, or unnecessary containers.

## Spacing and interaction
- Use approximately 28–36px between primary navigation items.
- Keep 20–28px between the sign-in link and the CTA.
- Provide comfortable click targets of at least 40px high for links and controls, even if the visible text is smaller.
- Dropdown indicators, where needed, should be subtle chevrons positioned close to the relevant label.
- On hover, links may darken slightly or gain a restrained underline; avoid dramatic animation.
- Add a visible keyboard focus ring using the brand colour or a high-contrast outline.
- Keep transitions short and understated, around 150–200ms.
- Ensure the header is usable with keyboard navigation, screen readers, and touch input. Mark dropdown triggers and the mobile menu correctly with ARIA attributes.

## Responsive behaviour
- Desktop: brand at left, primary navigation centered, utilities and CTA at right.
- Tablet: reduce horizontal gaps and container padding before removing content.
- Mobile: use the brand at left and a compact menu trigger at right; place navigation links in an accessible drawer or popover. Keep the CTA prominent inside the mobile menu if it cannot fit in the top row.

## Never
- Never copy the reference product’s logos, product names, navigation labels, CTA copy, or exact brand assets.
- Never reuse copy, illustrations, imagery, icons, or distinctive visual marks from the reference.
- Never make the result look like a branded clone; adapt the hierarchy and interaction model to the user’s product and brand.
- Never use a crowded multi-row header, oversized decorative treatment, or low-contrast text.
- Never rely on colour alone to communicate focus, state, or menu availability.
