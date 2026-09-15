## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073853-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-logo-cloud-3

## Before you start
Ask what the user's product is, who it is for, and what their brand style, colours, and content priorities are. Then apply the principles below to create an original sponsor or partner logo section for that product—not a copy of the reference.

## Build this section
Create a sponsor logo cloud with a concise, centered heading above a large rounded container. The section should feel premium, open-source, and community-supported while remaining adaptable to the user's brand.

### Layout and alignment
- Use a centered content column with a maximum width of roughly 900–1,050px.
- Place a two-line heading above the grid, centered, with a maximum text width around 700px so the line breaks feel intentional.
- Build the logo area as a responsive CSS grid inside one unified container.
- Use a deliberately varied editorial grid rather than a uniform list: a three-column first row, two wider cells in the middle, a four-column supporting row, and a final four-column row. Preserve the sense of asymmetry while allowing the layout to collapse cleanly on smaller screens.
- Give each tile enough internal space for a logo or wordmark to breathe. Center content both horizontally and vertically.
- On mobile, reduce to one or two columns, keep tile heights consistent within each responsive row, and avoid cramped wordmarks or horizontal scrolling.
- Keep the heading-to-grid gap generous, approximately 36–48px.

### Typography
- Use a modern sans-serif with a bold, high-contrast heading. The heading should be approximately 32–40px on desktop, 28–32px on mobile, with a tight line-height around 1.05–1.15.
- Keep supporting text, if used, muted and compact at 14–16px.
- Treat sponsor marks as assets or stylized wordmarks, not as ordinary body copy. Use optical sizing and weight differences so each mark feels balanced despite different proportions.

### Colour
- Use a near-black navy page background, approximately `#050713`.
- Use a subtly lighter tile surface, approximately `#0B0E1A`.
- Set grid dividers and the outer border to a low-contrast blue-gray such as `#202536` or `rgba(150, 160, 190, 0.16)`.
- Set the heading to a soft white, approximately `#F4F5F8`.
- Keep inactive or secondary text muted around `#A7ACBC`.
- Allow sponsor marks to retain distinctive accent colours, but ensure they meet contrast requirements against the dark tile background. If brand assets are unavailable, use tasteful text-based placeholders with restrained, varied accent colours rather than inventing detailed logos.

### Borders, radius, and spacing
- Give the complete grid a 14–18px outer radius and a 1px subtle border.
- Clip tile dividers to the rounded outer container.
- Use 1px internal borders with no heavy shadows.
- Aim for desktop tile heights around 120–240px depending on the row, with approximately 24–40px of internal padding.
- Use consistent alignment and equal visual weight even when tile widths differ.

### Interaction and accessibility
- If sponsor tiles link to external sites, make the entire tile keyboard-focusable and provide a visible focus ring in the user's accent colour.
- Add a restrained hover treatment: slightly brighten the tile surface, increase border contrast, and optionally scale the mark by no more than 1–2%. Avoid distracting animations.
- Include accessible names for every linked sponsor mark and ensure decorative logo imagery has appropriate alt text handling.
- Respect reduced-motion preferences.
- Do not make colour alone the only signal for interactivity.

## Never
- Never copy the reference's logos, sponsor names, product names, or exact marketing copy.
- Never use Astro branding, imagery, illustrations, or assets from the reference.
- Never reproduce the exact logo arrangement as a pixel-for-pixel clone; adapt the grid to the user's product and content.
- Never fabricate official partnerships or imply endorsement without the user's supplied data.
- Never use low-contrast marks, inaccessible focus states, or a dense logo wall that sacrifices legibility.
