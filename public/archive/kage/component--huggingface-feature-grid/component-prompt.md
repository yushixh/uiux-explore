## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073962-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-feature-grid

## Before you start
Ask me what my product does, who it is for, and what its visual brand should feel like. Then apply the principles below to create an original trending-resource section for my product, using my product language, content types, and brand system rather than reproducing the reference.

## Goal
Build a responsive feature-grid section that highlights three categories of popular or recently active resources. The component should make it easy to compare categories at a glance, scan individual items quickly, and follow a clear path to browse each category in full.

## Design language

### Layout and alignment
- Place the section in a wide, centered container with generous horizontal margins; use approximately `max-width: 1120px` to `1240px` depending on the surrounding page.
- Start with a centered section label separated by thin horizontal rules extending to the left and right. The label should combine a short phrase with a small, brand-appropriate symbol or emoji-like accent, but use an accent suited to the user's product.
- Below the label, create three equal-width columns with a generous gap, approximately `32px` to `48px`.
- Give each column a centered category heading with a small icon or glyph above or beside the heading. Keep the three headings aligned on one baseline.
- Under each heading, stack five compact cards with consistent vertical spacing. Keep card heights aligned by using a predictable title and metadata structure.
- Use the center column as the visual focal point: its cards can be more colourful and expressive, while the left and right columns should remain quieter and more information-dense.
- Add one centered, understated browse link beneath each column. Align these links horizontally across the grid.
- On smaller screens, collapse to one column or a deliberate two-column layout, preserving category order and making the browse links remain attached to their category.

### Typography hierarchy
- Use a friendly, highly legible sans-serif with strong weight contrast.
- Make the section label bold and compact, approximately `18px` to `20px`.
- Set category headings around `16px` to `18px`, semibold, with clear but not excessive emphasis.
- Use `14px` to `15px` for resource names. Prefer a monospace or technical typeface for identifiers, handles, filenames, or other developer-oriented names when appropriate for the product.
- Set metadata around `12px` to `13px` in a muted gray. Keep supporting metrics visually subordinate to names.
- Use a single line for names where possible, truncating with an ellipsis rather than allowing uneven card heights.
- Keep browse links around `14px` to `15px`, with a thin underline or subtle bottom border to signal clickability.

### Colour
- Use a mostly white or near-white page background, approximately `#FFFFFF` or `#FCFCFB`.
- Make the quiet cards white with a very light gray border around `#E5E7EB` and minimal shadow.
- Use primary text near `#171717`, secondary text around `#8A8A8A`, and dividers around `#E5E7EB`.
- For the focal column, use a varied set of saturated gradient or solid fills—such as coral, amber, blue, violet, and orange—adapted to the user's brand palette. Ensure text meets contrast requirements on every card.
- Add a subtle, broad glow or tinted wash behind the focal column only if it supports the brand; keep it soft and avoid decorative noise.
- Use small neutral icons and metadata separators rather than introducing additional competing colours.

### Borders, radius, and depth
- Use a restrained radius on quiet cards, approximately `6px` to `8px`; use a slightly larger radius, approximately `8px` to `10px`, on colourful focal cards.
- Keep borders thin, around `1px`, and low contrast.
- Use a very subtle shadow on cards, such as `0 2px 8px rgba(20, 20, 20, 0.04)`, mainly to separate them from the background.
- Avoid heavy panels around the entire grid; the whitespace should provide most of the grouping.
- Maintain approximately `10px` to `12px` between stacked cards and `28px` to `40px` between the cards and the browse links.

### Card content and interaction
- Each quiet card should contain a prominent resource name on the first line and a compact metadata row beneath it, such as update time, usage count, downloads, saves, or another meaningful activity signal.
- Separate metadata values with small dots or lightweight icon separators.
- Each colourful card should include a short title, a one-line description, and optional compact activity indicators aligned to an edge. Keep the copy concise and allow truncation.
- Make every card fully clickable, with a clear hover state: a slight upward translation, stronger shadow, or border colour shift. Do not rely on colour change alone.
- On hover and keyboard focus, preserve readable text contrast and show a visible focus ring using the product's accent colour.
- Make the category heading optional as a link, but ensure the browse link is the obvious route to the full category.
- Support reduced motion by disabling lift and animated gradient effects when `prefers-reduced-motion` is enabled.
- Ensure touch targets are at least `44px` high and that keyboard users can move through cards in a logical column-by-column order.

## Never
- Never copy the reference's logos, product names, labels, resource names, metrics, or exact wording.
- Never use the reference's specific emoji, illustrations, imagery, gradients, or decorative symbols as-is.
- Never reproduce the exact card data, ordering, dimensions, spacing values, or visual treatment; reinterpret the structure for the user's product and brand.
- Never make the colourful column so dominant that the other categories become difficult to scan.
- Never use tiny, low-contrast metadata or remove visible focus states.
- Never hard-code the design around one fixed viewport; make the grid responsive and content-safe.
