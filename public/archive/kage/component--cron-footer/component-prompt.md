## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cron-com/13c2d880-1e0a-4e61-bc53-4a819d6c2d36-1789060776-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cron-com/13c2d880-1e0a-4e61-bc53-4a819d6c2d36-1789060767-full.webp
- Component on Kage: https://kage.design/component/cron-footer

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual system are. Then apply the principles below to create a version for their product—not a copy of the reference.

## Design brief
Build a minimal dark utility footer for the bottom of a modern product landing page. The footer should feel intentionally quiet: it provides essential navigation and legal links, but does not introduce a large sitemap, promotional message, newsletter form, social grid, logo lockup, or decorative artwork.

### Layout and alignment
- Use a full-width footer with a very dark near-black background, approximately `#0D0D0B`.
- Keep the content inside a centered responsive container, capped around `1200–1280px`, with horizontal padding of `32px` on desktop and `20–24px` on mobile.
- Place one compact row of links near the top of the footer’s content area, aligned to the left on desktop.
- Use a generous vertical footprint beneath the links so the footer feels spacious rather than tightly packed; target roughly `150–180px` total height depending on the surrounding page.
- Arrange links horizontally with consistent gaps of approximately `24–28px`; allow the row to wrap naturally or stack with a small gap on narrow screens.
- Do not force the footer links to be vertically centered in the entire section—the reference treatment keeps them visually high, with calm negative space below.

### Typography hierarchy
- Use a clean modern sans-serif already established by the product, or a neutral system sans-serif fallback.
- Keep each link small, approximately `12–13px`, with regular weight and slightly relaxed tracking around `0` to `0.01em`.
- Use sentence case and short, utility-oriented labels.
- There should be no heading, tagline, copyright block, or secondary explanatory text unless the user’s product genuinely requires it.

### Colour
- Footer background: approximately `#0D0D0B` or another brand-appropriate near-black.
- Link text: subdued warm gray, approximately `#5C5A56` at rest.
- On hover and keyboard focus, raise contrast to approximately `#A6A39C` or the brand’s accessible equivalent.
- Preserve sufficient contrast for usability even though the visual intent is low emphasis; do not make links indistinguishable from the background.

### Borders and radius
- Avoid visible cards, pills, panels, or rounded containers.
- Use no border by default. If a divider is needed to separate the footer from the preceding section, use a subtle 1px line around `#181816`.
- Keep the footer’s shape rectangular and flush with the viewport edges.

### Interaction and accessibility
- Every utility item must be a real link with a clear hover state and visible `:focus-visible` treatment, such as a subtle underline or a higher-contrast text colour.
- Preserve a comfortable clickable area of at least about `32px` in height, even if the text itself is small.
- Ensure the link row remains readable and usable when it wraps on mobile.
- Respect reduced-motion preferences; avoid animated entrance effects or decorative motion.
- Use semantic `<footer>` and navigation markup with an accessible label where appropriate.

### Responsive behaviour
- On large screens, keep the links in a single compact horizontal row.
- On smaller screens, allow wrapping or use a simple vertical stack; maintain consistent spacing and avoid cramped text.
- Keep the same quiet visual hierarchy across breakpoints rather than adding mobile-only decoration.

## Never
- Never reuse any logo, product name, trademark, or branded asset from the reference.
- Never copy the reference’s exact link labels or marketing copy; invent neutral labels relevant to the user’s product.
- Never include illustrations, photographs, icons, or imagery from the reference.
- Never recreate the exact page, spacing measurements, typography, or visual identity; use the principles as inspiration for an original implementation.
- Never make the footer more prominent than the product content above it.
