## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106473-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106444729-full.webp
- Component on Kage: https://kage.design/component/wealthfolio-card

## Before you start
Ask the user what their product does, who it is for, and what its brand personality, colours, and visual system are. Then apply the principles below to create an original version for that product—not a copy of this reference.

## Design the component
Build a self-contained responsive section that communicates a privacy-conscious connection or integration flow: a trusted local destination on the left, a central connection step, a small intermediary or aggregator node, and several external source categories branching on the right. Adapt the labels, number of sources, and terminology to the user's product.

### Layout and alignment
- Place the component inside a wide, softly elevated outer panel with generous horizontal padding and a restrained maximum width.
- Use a left-to-right flow on desktop: local destination → connection step → aggregator → external sources.
- Align the primary nodes along a shared horizontal centre line. Stack the external source cards vertically and connect them to the intermediary with branching dotted paths.
- Make the local destination and external sources rectangular cards; make the central connection step a larger circular badge; use a smaller rounded-square badge for the intermediary.
- Keep the diagram visually balanced with ample negative space. Use absolute positioning or SVG for connectors so lines remain anchored to nodes as the layout changes.
- On narrow screens, switch to a vertical flow or allow the diagram to scroll horizontally; never compress labels until they become hard to read.

### Typography hierarchy
- Use a warm, highly legible serif or humanist display face for the primary conceptual labels if that suits the user's brand; pair it with a neutral sans-serif or understated monospace for metadata.
- Make node titles medium-sized and semibold, with secondary descriptions smaller, lighter, and clearly subordinate.
- Use short labels and sentence case. Keep explanatory captions close to the node they describe.

### Colour and visual tone
- Start from a warm off-white canvas, approximately `#F7F6F1` or the user's equivalent.
- Use near-black brown for major text, approximately `#34322D`, and muted taupe-gray for supporting text, approximately `#99978F`.
- Use cream-white node surfaces, approximately `#FFFEFA`, with a subtle warm border around `#E5E3DA`.
- Reserve a deep olive-brown or brand accent, approximately `#4B4329`, for the main connection badge and small emphasis points.
- Keep connector lines pale and understated, approximately `#C9C7BE`, with small filled endpoint dots.
- Use low-contrast shadows only: broad, soft, and barely visible rather than glossy or dramatic.

### Borders, radius, and spacing
- Use 1px low-contrast borders throughout.
- Give rectangular cards a generous radius around 18–22px; use a full pill or circle for the connection badge.
- Give the outer panel a larger radius around 24–30px and a faint inset or inner boundary to contain the diagram.
- Use a consistent spacing scale based on 8px: roughly 16–24px internal card padding, 32–56px between major nodes, and 12–18px between an icon, title, and caption.
- Keep icon containers quiet and small, using pale tinted squares or circles rather than heavy illustrations.

### Interaction and responsive behaviour
- If the nodes represent clickable integrations, add a subtle hover state: slightly darken the border, lift the card by 1–2px, and reveal a restrained accent tint.
- If the flow is explanatory only, keep it static and avoid adding unnecessary controls.
- Animate connectors or nodes only with a slow, low-key opacity or stroke-dash transition when the section enters the viewport; respect `prefers-reduced-motion`.
- Ensure connectors do not overlap text and maintain clear contrast in both light and dark brand adaptations.

## Never
- Never reuse any logos, product names, provider names, labels, copy, icons, illustrations, or imagery from the reference.
- Never recreate the exact node arrangement, wording, or connector geometry; reinterpret the information architecture for the user's product.
- Never use branded third-party marks unless the user explicitly supplies assets and has permission to use them.
- Never make the diagram look like a surveillance, banking, or security claim unless the user's product can substantiate it.
- Never sacrifice readability on mobile for the sake of preserving the desktop layout.
