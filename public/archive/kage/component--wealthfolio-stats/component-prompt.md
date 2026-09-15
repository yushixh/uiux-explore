## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106473-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106444729-full.webp
- Component on Kage: https://kage.design/component/wealthfolio-stats

## Before you start
Ask the user what their product does, who it is for, and what brand direction they want (for example: editorial, technical, playful, or premium). Then apply the principles below to their product and content rather than reproducing a reference design.

## Build a proof-point stats section
Create a responsive social-proof section for a software product landing page. It should communicate traction through a row of four metric cards, followed by a smaller row of external-recognition or community links. The section should feel credible, quiet, and editorial: let the numbers carry the emphasis and keep supporting copy concise.

### Layout and alignment
- Place the section inside a wide, centered container with a maximum width of approximately 900–1,050px.
- Use a four-column grid on desktop with equal-width cards and a consistent gap of 16–20px.
- Stack cards into two columns on medium screens and one column on narrow screens; preserve comfortable card padding at every breakpoint.
- Center-align the metric number and all supporting text within each card.
- Put the recognition links in a separate horizontal row beneath the cards, centered as a group. Allow the row to wrap naturally on smaller screens.
- Keep the stats area visually distinct from adjacent sections using generous vertical padding and, if needed, a subtle background shift rather than a heavy divider.

### Typography hierarchy
- Make the primary metric large and prominent, roughly 34–40px on desktop, with a sturdy serif or display face if that suits the product brand. Use tabular numerals where available.
- Set the metric label below it in a compact monospace, grotesk, or technical sans style at roughly 14–16px.
- Add an optional qualifier beneath the label at 11–12px with lower contrast and slightly increased tracking.
- Keep labels short enough to scan in one glance. Avoid excessive all-caps or decorative typography.
- Use a clear line-height hierarchy: tight for the metric, relaxed enough for two-line supporting text.

### Colour and surface
- Start with a warm near-white page background around `#F7F5F1` or adapt the hue to the user's brand.
- Use cards close to white, around `#FCFBF8`, with primary text around `#292827` and secondary text around `#686561`.
- Recognition badges may use restrained accent colours—muted amber, coral, lavender, or blue—but keep them pale and use the accent mainly for borders, tiny marks, or labels.
- Maintain accessible contrast for all text; do not rely on colour alone to distinguish metrics or links.

### Borders, radius, and depth
- Give each metric card a subtle 1px border around `#E8E5DF` and a soft radius of approximately 14–18px.
- Use a very light shadow only if needed, such as `0 3px 12px rgba(35, 31, 28, 0.03)`; the component should remain mostly flat.
- Recognition badges should be shorter, pill-like or softly rounded rectangular controls with a 1px tinted border and compact internal padding.
- Keep corner treatments consistent across cards, badges, and the rest of the product interface.

### Interaction
- Make recognition badges and community destinations clearly clickable with an appropriate link target and accessible name.
- On hover, slightly raise the badge or deepen its border colour; use a quick 150–200ms transition.
- On keyboard focus, show a visible focus ring that meets accessibility requirements.
- Metric cards may remain static unless the user's product benefits from linking each proof point to a source; if linked, make the entire card an obvious, keyboard-accessible target.
- Use semantic markup: a section with a descriptive heading if needed, a list for metrics, and links for external destinations.

### Responsive behaviour
- Prevent numbers from wrapping awkwardly by reserving enough horizontal space or reducing the metric size at narrow widths.
- Keep the recognition row readable when wrapped: use consistent gaps and avoid forcing all badges into a single line.
- Ensure the section does not become visually dense on mobile; increase vertical spacing between the metric grid and recognition links.

## Never
- Never copy logos, product names, exact wording, statistics, badges, or destination names from the reference.
- Never reuse the reference's brand identity, typeface pairing, colour accents, or visual assets as a literal reproduction.
- Never include illustrations, photographs, or imagery from the reference.
- Never invent unverifiable claims for the user's product; use supplied metrics or clearly marked placeholder content.
- Never make the cards feel like a dashboard if the surrounding page is a calm marketing site.
