## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060396-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060376-full.webp
- Component on Kage: https://kage.design/component/arc-navigation

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, and navigation items are. Then apply the principles below to create a navigation bar for my product—not a copy of the reference.

## Design language

Build a slim, full-width top navigation with a bold, energetic, technology-friendly feel.

### Layout and alignment
- Use a full-bleed header spanning the viewport width.
- Keep the content in a centered inner container with a practical maximum width, around 1180–1280px, and responsive horizontal padding of roughly 32px on desktop and 20px on mobile.
- Align the brand mark and navigation links vertically along one compact row, approximately 96–100px tall on desktop.
- Place the brand mark at the far left of the inner container, followed by a horizontal navigation group with generous but controlled gaps of about 30–36px.
- Keep navigation labels on one line and vertically center the row.
- On smaller screens, preserve the visual height and spacing only if the user’s navigation fits; otherwise collapse secondary links into an accessible menu rather than allowing wrapping.

### Background and edge treatment
- Use a saturated horizontal or subtly diagonal gradient, approximately from electric blue `#3F36E8` through vivid indigo `#5333E8` to violet `#6B39E8`.
- Add very subtle tonal variation or fine texture only if it supports the brand; avoid noisy effects that reduce legibility.
- Finish the bottom edge with a repeating, shallow scalloped or wave cutout. The edge should feel intentional and playful, with a wave height of roughly 5–8px and a repeat width of roughly 20–28px.
- Implement the edge with CSS masking, an SVG mask, or a pseudo-element so it remains crisp and responsive. Ensure the following page background shows cleanly beneath the cutout.

### Typography
- Use a clean modern sans-serif with a medium-to-semibold weight, such as the product’s existing UI font or a close system fallback.
- Navigation labels should be compact, approximately 13–15px on desktop, with a line height around 1.2.
- Use white or near-white text, approximately `#FFFFFF` or `#F8F8FF`.
- Keep labels visually equal in hierarchy; reserve stronger emphasis for the active item only if the product needs it.
- If a navigation item includes a small utility glyph, keep it optically aligned with the text and sized around 13–15px.

### Brand mark and icons
- Reserve a compact area for the user’s own brand mark on the left, generally 24–32px wide/high.
- Do not invent a detailed logo. Use the user-provided asset, a neutral placeholder shape during development, or a simple text treatment if no mark exists.
- Any accompanying icons should be minimal, monochrome, and aligned to the text baseline with a small 4–6px gap.

### Interaction
- Make every navigation item a clear, keyboard-focusable link or button.
- On hover, use a subtle increase in brightness, opacity, underline, or a small colour shift rather than a heavy animation.
- Provide a visible focus ring with sufficient contrast against the gradient, such as a 2px light outline with a 2px offset.
- If there is an active route, indicate it with a restrained treatment such as brighter text, a small underline, or slightly increased weight.
- Keep transitions short, around 150–200ms, and respect `prefers-reduced-motion`.

### Borders, radius, and spacing
- Avoid a conventional rectangular bottom border; the scalloped edge is the defining separation from the page content.
- Keep the header corners square where it meets the viewport edges.
- Use consistent internal spacing and avoid crowding the logo against the first link.
- Ensure text contrast remains accessible across the entire gradient.

## Never
- Never reuse the reference’s logo, product name, navigation labels, or exact copy.
- Never reproduce the reference image or its brand-specific visual identity literally.
- Never add illustrations, photography, or decorative imagery from the reference.
- Never hard-code the reference product or its routes; derive content and branding from my product.
- Never sacrifice keyboard access, responsive behaviour, or text contrast for visual similarity.
