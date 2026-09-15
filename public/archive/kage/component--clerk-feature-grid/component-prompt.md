## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060782-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-feature-grid

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for my product—not a replica of the reference.

## Build this section
Create a full-width, dark-mode feature section that introduces a product capability area and presents its benefits in an editorial bento grid. The section should feel premium, technical, calm, and highly polished, with visual depth coming from abstract UI-like motifs rather than decorative illustrations.

### Structure and layout
- Use a near-black section background, approximately `#121214` to `#151518`, with generous vertical padding of about `96px–140px` on desktop.
- Begin with a centered intro block constrained to roughly `680px–760px` wide.
- Place a small accent eyebrow above the heading, followed by a strong two-line-or-less heading and a short supporting paragraph.
- Add one understated text link or CTA beneath the paragraph, using a small directional arrow or chevron.
- Below the intro, create a responsive bento grid with 3 conceptual columns on desktop and 2–3 rows. Do not make every card identical: use a mix of standard tiles, vertically tall tiles, and wide horizontal tiles.
- Keep the grid inside a centered max-width container around `1160px–1240px`.
- Use consistent gutters around `8px–12px` and let cards align to a shared grid baseline.
- Recommended desktop pattern: a tall feature card in one column, stacked cards in another, a tall or stacked feature in the third, followed by a row of smaller capability cards and one wide card spanning two columns. Adapt the exact arrangement to the amount of content.
- On tablet, reduce to two columns while preserving a few intentional spans. On mobile, use one column with comfortable vertical spacing and avoid overly tall empty cards.

### Card design
- Cards should use a slightly lighter charcoal surface, approximately `#202023` or `#222225`, against the darker section background.
- Give each card a subtle 1px border around `rgba(255,255,255,0.07)` and a radius of `14px–18px`.
- Use generous internal padding, approximately `24px` on compact cards and `28px–32px` on larger cards.
- Anchor card titles and descriptions toward the lower portion of the card, while reserving the upper or central area for an abstract product visualization.
- Use a clear visual hierarchy: compact white title, muted gray description, and a small accent label where needed.
- Card titles should be around `13px–15px`, medium or semibold. Body copy should be `13px–15px`, with a line-height around `1.45–1.6` and a color near `#9b9ba3`.
- Add subtle surface variation, radial glows, faint gradients, blur, and low-contrast shadows to give the visual areas depth without reducing readability.
- Visual motifs can include abstract authentication states, device panels, status indicators, nodes, code-like lines, profile placeholders, locks, cards, or system diagrams—but they must be newly designed for the user's product.
- Keep visual motifs monochromatic or nearly monochromatic: charcoal, graphite, soft gray, and occasional muted accent colour. Avoid busy imagery.

### Typography and colour
- Use the user's brand font if available; otherwise choose a modern neutral sans-serif with a clean grotesk feel.
- Main heading: approximately `34px–44px` desktop, weight `600–700`, tight line-height around `1.05–1.15`, and colour `#f4f4f5`.
- Supporting paragraph: approximately `16px–18px`, line-height around `1.45`, colour `#a4a4ab`.
- Eyebrow and CTA may use a restrained lavender, blue, green, or brand accent around medium contrast; a reference-like lavender would be approximately `#b9a7ff`.
- Use pure white sparingly. The overall contrast should feel soft and cinematic rather than stark.
- Keep all text left-aligned inside cards, while the intro remains centered.

### Section transitions
- If this section touches light content above or below, use a subtle angular or clipped transition at the section edge, such as a shallow inset notch or chamfer. Keep it geometric and understated, not ornamental.
- Ensure the transition does not interfere with content, keyboard focus, or responsive layout.

### Interaction and accessibility
- Cards may gently brighten their border or surface on hover, for example moving the border to `rgba(255,255,255,0.14)` and translating or scaling the visual motif by only a few pixels.
- If cards are links, make the entire card target clickable and provide visible focus styles with a high-contrast outline.
- Respect `prefers-reduced-motion`; disable ambient movement and hover transforms when requested.
- Maintain WCAG-friendly contrast, semantic heading order, meaningful link labels, and responsive text wrapping.
- Use CSS and lightweight DOM/CSS shapes for abstract visuals where practical; do not make the section dependent on external image assets.

### Content guidance
- Write original, concise feature names relevant to my product. Each card should communicate one distinct capability or benefit.
- Keep descriptions to one or two short sentences. Use the grid to express breadth while letting the larger cards carry the most important capabilities.
- Preserve the feeling of a complete capability system: core feature, supporting controls, security/reliability, integrations or extensibility, and developer/admin tooling as appropriate for my product.

## Never
- Never copy the reference's logos, product names, feature names, descriptions, CTA wording, or brand-specific copy.
- Never reuse the reference's illustrations, icons, screenshots, imagery, or exact abstract motifs.
- Never reproduce the exact card order, proportions, measurements, or visual composition; use the layout principles to make an original version.
- Never use a light background for the primary grid unless my brand clearly requires it.
- Never sacrifice readability for atmospheric effects, oversized empty areas, or decorative visuals.
