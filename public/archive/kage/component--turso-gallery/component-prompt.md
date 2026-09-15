## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073740-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Component on Kage: https://kage.design/component/turso-gallery

## Before you start
Ask the user what their product does, who it is for, and what visual brand it uses. Then apply the principles below to create an original infrastructure or systems-visualization section for that product—not a copy of the reference.

## Goal
Build a dark, editorial showcase panel that explains a relationship between one primary/local resource and a larger distributed set of connected resources. The component should feel like a premium product-website feature graphic: quiet, technical, spacious, and easy to scan at a glance.

## Design language

### Layout and alignment
- Use a full-width section with a very dark near-black background, approximately `#0d1115`.
- Place the visualization inside a large centered container with a thin border and generous internal padding. The container may use a wide aspect ratio and should feel like a framed viewport rather than a conventional card.
- Keep the graphic horizontally centered inside the frame, leaving visible negative space around it. On desktop, use a two-part composition: one standalone source node on the left and a larger two-row grid or cluster on the right.
- Align all nodes to a strict underlying grid. Use consistent card widths, heights, column gaps, and row gaps; avoid decorative randomness.
- Connect the source node to the cluster with a subtle horizontal line or routed connector. The connector should sit behind the cards and remain visually quieter than the nodes.
- On smaller screens, preserve the relationship by stacking or compressing the layout gracefully. The graphic may become horizontally scrollable or transform into a vertical source-to-cluster flow, but it must remain readable without clipping.

### Typography hierarchy
- Keep text minimal. Use a small, muted monospace or technical sans-serif label inside the source node and optional short labels on selected nodes.
- Use a compact uppercase or lowercase technical label at approximately `12–13px`, with moderate letter spacing and low contrast.
- Do not add a large heading inside the visualization; the surrounding page can provide the narrative hierarchy.

### Colour
- Base page background: near-black navy, approximately `#0d1115`.
- Visualization surface: deep blue-green black, approximately `#001817` or `#031b1b`.
- Node cards: muted dark green-gray, approximately `#132928`.
- Node card highlights: slightly lighter green-gray, approximately `#193331`.
- Primary accent for outlines and important system marks: vivid turquoise, approximately `#00f0c8` to `#17d9bd`.
- Secondary connector and grid marks: desaturated blue-gray, approximately `#1c3740`.
- Cloud or secondary status icon: pale gray-green, approximately `#a9b8b3`.
- Text: soft gray-green, approximately `#899895`; use bright off-white sparingly.
- Keep glow restrained: use a small turquoise outer glow around important icons or strokes, never a broad neon wash.

### Borders, radius, and surfaces
- Outer frame: `1px` solid border around `#243137`, with a large radius around `16px`.
- Inner visualization viewport: use a subtle rectangular surface with little or no radius, approximately `#001817`.
- Resource cards: medium radius around `8–10px`, thin dark blue-gray border, and a faint inset highlight or shadow.
- Give cards a slightly tactile, layered appearance with a darker lower edge, but avoid gradients that overpower the diagram.
- Use dashed or segmented boundary lines around the distributed cluster to communicate a logical region or deployment zone.

### Node and icon treatment
- Represent each resource with a simple abstract icon centered in its card. Use an original geometric mark relevant to the user's product; do not reuse a database symbol from the reference.
- Draw the icon with a bright turquoise outline and a darker teal fill. Keep the shape bold enough to remain recognizable at small sizes.
- If nodes have a status or cloud indicator, place it near the lower-right corner as a small monochrome line icon with subdued contrast.
- Make the source node slightly more prominent than the repeated cluster nodes through size, spacing, or label treatment—not through excessive colour.

### Interaction and motion
- If the visualization is interactive, allow node hover or focus to raise the card slightly, brighten its border, and reveal a concise tooltip or status label.
- Hovering the source or a cluster node may highlight its connector path and gently dim unrelated nodes.
- Use short, subtle transitions around `150–250ms`; avoid continuous animation unless it communicates live system activity.
- Ensure keyboard focus is visible and the diagram remains understandable with motion reduced or disabled.

### Responsive and accessibility requirements
- Preserve sufficient contrast between the viewport, cards, borders, and icons.
- Provide accessible labels for each meaningful node and connector relationship; treat purely decorative lines as hidden from assistive technology.
- Ensure the visualization does not rely on colour alone to communicate state.
- On mobile, reduce node count or use a representative cluster if necessary, while retaining the source-to-distributed-system concept.

## Never
- Never use the reference's logos, product names, brand marks, or exact labels.
- Never copy the reference's database-shaped icon, illustration, node arrangement, or pixel-level composition.
- Never reuse its marketing copy, screenshots, imagery, or decorative artwork.
- Never turn the section into a generic colorful dashboard; preserve the calm, dark, diagrammatic character while adapting the content and brand to the user's product.
- Never sacrifice readability for neon effects, excessive glow, random positioning, or unnecessary animation.
