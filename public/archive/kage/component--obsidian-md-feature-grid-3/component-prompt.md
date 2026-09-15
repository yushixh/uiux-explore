## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060833-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-feature-grid-3

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature section for my product rather than reproducing the reference.

## Build this section
Create a responsive feature-grid section for a software product homepage. Use a dark, editorial layout with two balanced columns:

- **Left column:** a large feature headline, a short supporting paragraph, and a vertical list of three feature points.
- **Right column:** a simplified product UI preview inside a large rounded frame. The preview should visually demonstrate the feature through believable interface elements such as a title, input field, rows, avatars, permissions, statuses, or other controls relevant to the user's product.

The section should feel like a product capability showcase, not a generic card grid. Keep the copy concise and make the interface preview carry much of the explanation.

## Design language

### Layout and alignment
- Place the section inside a wide centered container, approximately 1120–1200px maximum width.
- Use a two-column grid on desktop, with the text column taking roughly 45% and the product preview 55%; keep a 56–80px gap between columns.
- Vertically align the text content around the middle of the preview rather than forcing both columns to start at the same point.
- Give the section generous vertical padding, approximately 80–120px on desktop.
- Stack the columns on smaller screens, placing the text before the preview. Reduce the gap and padding proportionally.
- Keep the feature list left-aligned and constrain paragraph width to approximately 480px for comfortable reading.

### Typography hierarchy
- Use the user's brand typeface, or a clean modern sans-serif fallback.
- Make the heading large and compact: approximately 52–64px on desktop, 1.05–1.12 line-height, with strong weight.
- Use a muted supporting paragraph at approximately 22–26px with 1.35–1.5 line-height.
- Style important phrases inside feature descriptions with a heavier weight, while keeping the explanatory text regular and muted.
- Use approximately 16–18px body text and 14–16px interface text in the preview.
- Keep headings short, specific, and benefit-led.

### Colour
- Start with a near-black background around `#101010` or adapt it to the user's brand dark surface.
- Use a warm off-white for primary text, around `#F2F1F4`.
- Use a soft gray for secondary copy, around `#B8B6BE`.
- Use one expressive accent for links, icons, and emphasis—violet or another brand-appropriate colour around `#A98AFF`.
- Make the preview contrast strongly against the dark page: use an off-white panel around `#FAFAF8`, with a saturated accent backing layer around `#9B7CF2`.
- Use restrained accent colours in avatars, status markers, or controls; do not let them compete with the main headline.

### Borders, surfaces, and radius
- Use subtle borders around dark interactive feature items, approximately `1px solid rgba(255,255,255,0.08)`.
- Highlight the active feature with a slightly lighter charcoal surface around `#222222` and a soft border.
- Give the active feature row a medium radius around 8–10px and internal padding around 16–20px.
- Place the UI preview on a large rounded outer frame with approximately 20–24px radius and hidden overflow.
- Use a solid accent backing panel behind the white interface, with the backing visible as a left or top band rather than a heavy shadow.
- Keep the inner interface clean, with light gray dividers around `#E4E2E2`, minimal shadows, and 10–14px control radii.

### Feature list and interaction
- Show three vertically stacked feature items with a small line icon or simple glyph on the left.
- Keep inactive items visually quiet; the active item gets the darker raised surface and slightly stronger contrast.
- If interaction is implemented, allow clicking or hovering a feature item to update the preview content, accent colour, or highlighted UI state. Use a restrained transition of roughly 180–250ms.
- Preserve keyboard focus visibility with an accent-coloured outline.
- Do not rely on hover alone to communicate the active state; provide a persistent selected state on touch devices.
- The preview can be static if the product does not need interaction, but it must remain legible and clearly connected to the feature copy.

### Product preview details
- Build a convincing but simplified application surface rather than a decorative illustration.
- Include a clear inner panel heading, a subtle divider, one compact input or control, and several rows of structured information.
- Use circular initials or abstract user/status markers only when they support the product story.
- Keep generous empty space in the preview so it feels calm and premium.
- Ensure the preview remains readable when reduced on mobile; avoid tiny text or dense tables.

## Responsive and accessibility requirements
- At widths below approximately 800px, switch to one column and make the preview full width.
- Scale the headline down to approximately 38–46px on mobile.
- Maintain at least 44px touch targets for clickable feature rows.
- Use semantic headings, lists, buttons, and labels.
- Maintain strong text contrast and visible focus states.
- Respect reduced-motion preferences by disabling nonessential transitions.

## Never
- Never copy the reference's logos, product names, brand identity, or exact wording.
- Never reuse the reference's feature copy, names, people, initials, or interface data.
- Never reproduce the reference's illustration or UI pixel-for-pixel; invent a product preview relevant to the user's product.
- Never use decorative imagery when a functional interface preview would communicate the feature better.
- Never make every feature item equally prominent; preserve a clear active-versus-inactive hierarchy.
