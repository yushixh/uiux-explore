## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067515-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Component on Kage: https://kage.design/component/raycast-hero

## Before you start

Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create an original hero section for that product rather than reproducing this reference.

## Build this section

Create a full-viewport, dark product landing-page hero with a compact rounded navigation bar at the top and a highly focused, vertically centered content block. The composition should feel calm, premium, technical, and unusually spacious.

### Layout and alignment

- Use a near-black page background, approximately `#08090A` or `#090A0B`.
- Add a top navigation container inset from the viewport edges: approximately 38–40px from the sides and 16–20px from the top on desktop.
- Make the navigation a wide, single-row rounded rectangle with a subtle dark fill and thin border. Use flex alignment: brand on the left, navigation links in the middle, and the primary utility action on the right.
- Keep the navigation height around 74px on desktop, with horizontal padding around 28–32px.
- Center the hero content horizontally in the viewport. The hero should occupy most of the first screen, but do not overcrowd it with artwork or decorative elements.
- Use a constrained content width of roughly 600–700px for the heading and supporting copy.
- Place the main content around the vertical middle of the viewport, with the CTA cluster lower in the same centered column.
- On smaller screens, hide or collapse secondary navigation links, reduce outer page padding to 16–20px, and preserve the centered hierarchy.

### Typography hierarchy

- Use a clean modern sans-serif system or brand font with excellent rendering at large sizes.
- Set the primary headline in a bold weight, approximately 64–72px on desktop with a line height around 0.98–1.05. Use one or two short lines and allow natural wrapping rather than forcing a dense paragraph shape.
- The headline should be the clear visual anchor: bright white, approximately `#F5F5F5` or `#FAFAFA`.
- Use supporting copy at approximately 17–19px with a 1.25–1.4 line height, regular-to-medium weight, and a softer white such as `#D3D3D5`.
- Keep the supporting copy to two or three concise lines and use a slightly narrower measure than the heading.
- Use small utility text below the primary action at approximately 12–13px, with muted gray `#85858B` and optional monospace styling for technical requirements or installation details.
- Navigation links should be understated: 14–15px, medium weight, and muted gray `#98989D` in their resting state.

### Spacing and rhythm

- Leave substantial empty space between the navigation and the hero heading; the emptiness is intentional and communicates confidence.
- Use approximately 22–28px between the heading and supporting paragraph.
- Use approximately 42–56px between the supporting paragraph and the primary CTA.
- Stack metadata beneath the CTA with 12–16px spacing, then place the secondary text link roughly 34–42px below the metadata.
- Keep the overall vertical rhythm symmetrical and avoid adding extra cards, badges, or feature lists inside the hero.

### Colour, borders, and surfaces

- Use a nearly black background: `#08090A`.
- Use white and cool-neutral grays for text; reserve a very subtle warm or pink accent only for tiny brand-specific highlights or the secondary link border.
- Navigation surface: approximately `#0D0E10`, with a 1px border in `#202124` and a soft shadow or faint outer glow.
- Navigation radius: approximately 16–18px.
- Primary CTA should be a light, high-contrast pill or rounded button with a background around `#F1F1F0`, text around `#242426`, and a radius of 9–11px. Include a small platform or action glyph only if it is meaningful for the user's product; otherwise use a simple text action.
- Secondary CTA should be visually quieter: transparent or near-transparent fill, a 1px border around `#4A3037` or an appropriate low-contrast brand colour, white text, and a pill radius around 999px.
- Keep shadows restrained. Avoid gradients, glassmorphism, loud glows, and decorative background effects unless the user's brand specifically requires them.

### Interaction and responsive behaviour

- Make navigation links and both CTAs keyboard accessible with visible focus states.
- On hover, brighten muted navigation links slightly and raise the primary CTA contrast without adding a large animation.
- Give buttons a quick 150–200ms transition with a subtle translateY or scale effect, not a bouncy or distracting motion.
- Ensure the top navigation remains usable on mobile: collapse links into a menu or selectively retain only the most important action.
- Preserve the headline's readability across widths with responsive type scaling, for example using `clamp()`, and prevent awkward overflow.
- Respect `prefers-reduced-motion` and disable nonessential transitions when requested.

## Never

- Never copy the reference's logo, product name, navigation labels, headline, supporting copy, CTA wording, or technical metadata.
- Never reuse the reference's exact brand palette, typography, spacing measurements, or button text as fixed content; adapt them to the user's product and brand.
- Never include logos, product names, copy, illustrations, icons, or imagery from the reference.
- Never recreate the hero as a pixel-for-pixel clone. Use the same design principles—focus, restraint, centered hierarchy, and generous negative space—to make an original section.
