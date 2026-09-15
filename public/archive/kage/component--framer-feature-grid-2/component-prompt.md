## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060390-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what their brand, visual identity, and primary accent colour are. Then apply the principles below to create an original feature-grid section tailored to that product—not a copy of the reference.

## Build this section
Create a dark, premium feature-grid section that communicates the breadth of a software platform through a collection of product capability tiles. The section should feel like a carefully art-directed product overview: quiet, spacious, high contrast, and visually rich without becoming noisy.

### Layout and alignment
- Use a near-black page background, approximately `#000000` or the user's brand equivalent.
- Place a large heading above the grid, aligned to the same left edge as the grid. Use a short two-line statement rather than a long paragraph.
- Keep the heading width constrained so the line break feels intentional; on desktop it should occupy roughly 300–420px.
- Build the feature area as one large rounded rectangular container with a thin internal grid system. Use an asymmetric editorial layout rather than equal cards everywhere.
- The reference composition uses three visual bands:
  - A wide upper row with one narrower metric/product tile and one larger interface tile.
  - A middle area with several smaller tiles, mixing approximately one-third and one-half widths.
  - A wide lower row with a large analytics tile and a narrower experimentation or results tile.
- Use CSS Grid with explicit columns and rows. Let some tiles span multiple columns or rows to create hierarchy.
- Keep every tile’s label anchored near its bottom edge, with consistent left and bottom padding. Labels should remain aligned even when the visual content varies.
- Give the overall grid a large desktop radius of approximately `24–32px`; clip all internal previews to that radius.
- On smaller screens, collapse to one column or a simple two-column rhythm. Preserve the featured tile hierarchy, but avoid forcing tiny dashboard previews into narrow spaces.

### Tile composition
- Each tile should combine two layers:
  1. A subdued product preview, data visualization, browser frame, settings panel, or abstract UI treatment.
  2. A clear capability label with a right-pointing arrow.
- Keep UI previews decorative and partially obscured or faded so they support the message rather than compete with it.
- Use realistic interface primitives—tables, metrics, tabs, charts, settings fields, status badges, and browser controls—but generate original content relevant to the user’s product.
- Vary the visual treatment by capability: performance can use metrics, content management can use a table, collaboration can use a branching or activity view, localization can use language rows, and analytics can use a chart.
- Allow some previews to fade into the background using a bottom or side gradient. This creates depth and ensures the navigation label remains legible.
- Avoid decorative illustrations unless they are genuinely part of the user’s product language.

### Typography
- Use a modern sans-serif with a clean, slightly compact appearance.
- Section heading: approximately `44–58px`, weight `500–650`, line-height `0.98–1.08`, with tight tracking around `-0.04em`.
- Tile labels: approximately `16–18px`, weight `450–550`, line-height `1.2`.
- Use smaller text inside UI previews, approximately `11–14px`, with muted contrast.
- Keep the heading and tile labels bright, approximately `#F5F5F5` to `#FFFFFF`.

### Colour and contrast
- Base background: `#000000`.
- Tile surfaces should be nearly black, around `#050505` to `#111111`, with subtle tonal variation between previews.
- Internal dividers and outer borders should be low contrast, around `rgba(255,255,255,0.12)` to `rgba(255,255,255,0.18)`.
- Use muted secondary text around `#8A8A8A` or `#A0A0A0`.
- Use one restrained accent colour for data highlights and status states, such as electric blue `#168BFF`, violet `#8B5CF6`, or the user’s brand accent. Do not make every tile colourful.
- Use soft black gradients and subtle glows to blend previews into the dark surface. Keep shadows broad and low opacity rather than harsh.

### Borders, radius, and spacing
- Use `1px` borders throughout; avoid heavy card outlines.
- Outer section padding: approximately `32–48px` on desktop, reduced to `20–24px` on mobile.
- Tile minimum heights should be substantial enough for the preview to read—roughly `260–420px` depending on the span.
- Use consistent internal tile padding, approximately `24–48px`, while allowing larger featured tiles more breathing room.
- Use a subtle inner highlight or radial gradient sparingly to create a polished glassy edge, but keep the overall look matte and dark.

### Interaction and motion
- Make each tile clickable or keyboard-focusable if it represents a destination.
- On hover, slightly brighten the border, lift the label’s arrow a few pixels to the right, and increase the preview opacity or scale it very subtly—approximately `1.01` to `1.03`.
- Use a fast, understated transition around `180–280ms` with an ease-out curve.
- Keep hover motion contained within the tile; do not cause the grid to reflow.
- Provide visible focus states with a bright, accessible outline.
- Respect `prefers-reduced-motion` by removing scale and transition effects.

### Responsive behaviour
- At tablet widths, reduce heading size and simplify the grid to two columns.
- At mobile widths, stack the tiles vertically, preserve the featured analytics or hero tile first where appropriate, and maintain comfortable label padding.
- Ensure charts, tables, and interface previews do not become unreadably small; crop or simplify them instead.
- Keep all text and controls accessible with sufficient contrast.

## Never
- Never use the reference brand’s logo, product name, or exact marketing copy.
- Never copy the reference tile labels, dashboard text, metrics, table contents, or interface layout literally.
- Never reuse the reference’s illustrations, screenshots, imagery, or proprietary UI assets.
- Never make every tile look identical or turn the section into a generic equal-card grid.
- Never sacrifice label legibility for decorative interface detail.
- Never rely on colour alone to communicate status or interaction.
