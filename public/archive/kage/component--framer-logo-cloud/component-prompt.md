## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060389-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-logo-cloud

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original logo-cloud section for that product—not a copy of the reference.

## Design goal
Build a compact social-proof logo cloud that feels quiet, credible, and premium. It should support the surrounding page rather than behave like a promotional banner: use repetition, generous negative space, and consistent visual weight so the logos read as a single visual texture.

## Layout and alignment
- Place the section on a full-width, high-contrast background that fits the user's brand; a near-black background such as `#050505` works for a dark variant.
- Center the logo cloud horizontally in a constrained content region, roughly `560–760px` wide on desktop.
- Arrange logos in two balanced rows with 4 items per row on wide screens. Use CSS grid or flexbox with equal column widths rather than individually positioning marks.
- Keep the overall cloud visually centered, with approximately `36–48px` horizontal gaps and `28–40px` vertical gaps. Let each logo sit in a consistent-height cell so different wordmarks align optically.
- Use responsive breakpoints: reduce to 2 columns on narrow screens, preserve comfortable tap-safe spacing, and allow long wordmarks to scale down without wrapping.
- Keep the section vertically compact but give it enough breathing room—approximately `56–88px` top and bottom padding depending on the surrounding sections.

## Typography and logo treatment
- Use text-based placeholder brand marks or user-provided assets, but design them as an even family rather than showcasing one logo above the others.
- Mix subtle wordmark characteristics—light, regular, and semibold weights or restrained serif/sans variations—only when this reflects the user's ecosystem. Avoid excessive stylistic contrast.
- For a dark treatment, use off-white marks around `#F2F2F0`, with most marks at `85–95%` opacity. Avoid pure white unless needed for optical balance.
- Match each mark’s apparent height, not its width. A useful starting range is `20–28px` cap height, with simple icon-plus-wordmark combinations kept near the same visual footprint.
- Use an accessible text alternative for every logo, even when the visual mark is an image or SVG.

## Colour, borders, and shape
- Prefer a flat background with no decorative panel, gradient, shadow, or texture unless the user's brand specifically calls for one.
- If the section needs separation, use a very subtle 1px divider such as `rgba(255,255,255,0.12)` on dark backgrounds or `rgba(0,0,0,0.10)` on light backgrounds.
- Do not put every logo inside a visible card. The reference works because the marks float directly on the background.
- If using a light version, start with a background near `#F7F7F5` and logo colour near `#171717`, then soften the logos with opacity.
- Use no or minimal radius; this is an editorial logo cloud rather than a collection of pills.

## Interaction and accessibility
- Logo marks can remain static if they are only social proof. If they link to customer stories or external sites, make the entire mark a clear link with a subtle opacity or brightness change on hover and a visible keyboard focus ring.
- Keep hover transitions short and restrained, around `150–200ms`; do not animate the grid or make logos bounce, slide, or continuously scroll.
- Ensure sufficient contrast, meaningful alt text, keyboard access for links, and a reduced-motion fallback.
- Preserve the original aspect ratio of SVGs and images; never stretch a logo to fit a cell.

## Content structure
- Include a short optional eyebrow or sentence only if the product needs context; the logo cloud should be able to work without a headline.
- Use a curated set of recognizable customer or partner marks, but keep the number small enough to maintain the compact rhythm.
- If real logos are unavailable, use neutral placeholder wordmarks that do not imitate recognizable companies.

## Never
- Never copy the reference’s logos, product names, brand marks, exact arrangement, or wording.
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never imply endorsements or customer relationships that the user's product cannot substantiate.
- Never use a logo asset without permission or distort, recolour, or crop it against its brand guidelines.
- Never let the logo cloud overpower the page’s primary call to action.
