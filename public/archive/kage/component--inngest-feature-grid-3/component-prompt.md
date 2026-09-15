## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074884-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Component on Kage: https://kage.design/component/inngest-feature-grid-3

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original feature section for my product—not a copy of the reference.

## Build this section
Create a dark, editorial feature-grid section for a technical software product. The section should communicate several product capabilities at a glance and lead naturally into evidence, such as a dashboard, chart, workflow preview, or metrics panel.

### Layout and alignment
- Use a wide, centered container with generous horizontal gutters: approximately 64–80px on desktop and 24px on mobile.
- Place the section inside a large near-black panel with a subtle 1px outline and a modest corner radius, visually separated from the surrounding page background.
- Begin with a large uppercase or sentence-case headline aligned to the left. Let it occupy no more than roughly half the content width and wrap across two lines when appropriate.
- Add a short accent rule beneath the headline, around 330–360px wide on desktop and shorter on mobile.
- Follow with a three-column feature grid on desktop. Each column contains: a small square marker, a concise title, a two- or three-line description, and a compact documentation or detail link with an arrow.
- Make the first feature visually active using the accent colour; keep the other feature markers and headings more muted.
- Place a wide proof panel beneath the feature row. It can contain a chart, table, dashboard fragment, or product telemetry visualization. Keep its top edge aligned with the grid and allow it to extend nearly the full inner width.
- Collapse to one column on small screens. Preserve the reading order: heading, features, then proof panel. Keep the active state visible without relying on hover.

### Typography hierarchy
- Use a clean sans-serif with a technical/editorial feel.
- Set the main heading in large display type, approximately 52–64px desktop, 36–44px mobile, with tight line-height around 0.98–1.05 and medium weight.
- Feature titles should be 18–20px, medium weight, with strong contrast for the active item and softer contrast for inactive items.
- Body descriptions should be 14–16px with a 1.45–1.6 line-height and muted colour.
- Links should be compact, uppercase or small-label typography with modest tracking around 0.08em; pair the label with a right arrow.
- Keep labels, metrics, and chart annotations smaller and quiet so they support rather than compete with the headline.

### Colour
Use these as approximate starting points, adapting them to the user's brand:
- Page background: charcoal black, approximately `#111111`.
- Main section panel: near black, approximately `#050505`.
- Proof panel surface: dark graphite, approximately `#202020`.
- Primary text: warm white, approximately `#F2F1ED`.
- Secondary text: cool gray, approximately `#A5A5A5`.
- Quiet text and chart labels: approximately `#737373`.
- Borders and chart gridlines: low-contrast gray, approximately `#303030`.
- Active accent: warm coral-red, approximately `#F05B45`; use it for the rule, active marker, selected state, and restrained chart highlights.
- If the product brand has a different accent, substitute it consistently rather than introducing several competing colours.

### Borders, radius, and surfaces
- Use thin, low-contrast borders rather than heavy cards or shadows.
- Give the outer panel a radius around 8–12px; use a similar or slightly smaller radius for the proof panel.
- Keep the feature columns visually open—avoid enclosing each one in separate cards unless the product genuinely needs stronger grouping.
- Use a very subtle texture, gradient, or tonal variation only if it improves depth; never let decoration reduce text legibility.

### Interaction and responsive behaviour
- Documentation/detail links should have a clear hover state: accent-colour text or arrow movement of 2–4px, with an accessible focus ring.
- If the feature grid is interactive, clicking or focusing a feature should update the proof panel and active marker. Make the state change clear through colour and a subtle transition, not animation alone.
- Keep transitions short, around 150–250ms, and respect `prefers-reduced-motion`.
- Ensure keyboard users can reach every link or feature control, and maintain WCAG-friendly contrast.
- On mobile, avoid horizontal overflow; allow the chart or proof panel to scale responsively or scroll within its own bounded region.

### Content guidance
- Write original, product-specific capability titles and descriptions after learning about the user's product.
- Keep each description focused on an outcome or concrete technical benefit.
- Use one consistent link treatment such as “Read docs”, “Explore”, or “View details”, but do not reuse reference copy.
- The proof panel should reinforce the capabilities above with believable, legible data or interface detail rather than acting as decoration.

## Never
- Never use logos, product names, or branded marks from the reference.
- Never reuse the reference's exact headline, feature titles, descriptions, labels, or link copy.
- Never copy the reference's chart data, graph shapes, annotations, or product-specific UI.
- Never use illustrations, imagery, or decorative line art from the reference.
- Never reproduce the reference pixel-for-pixel; adapt the layout principles to the user's product, content, and brand.
- Never sacrifice accessibility, responsive behaviour, or content clarity for visual similarity.
