## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097620-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097588315-full.webp
- Component on Kage: https://kage.design/component/labs-winszn-feature-grid-2

# Before you start
Ask what the user's product does, who it is for, and what brand personality, typefaces, colours, and content they want to use. Then apply the principles below to create an original feature-grid section for that product—not a visual copy of any reference.

## Build this section
Create a dark, editorial feature-grid section for the user's website. The grid should present a small set of offerings, capabilities, plans, or product features as substantial cells rather than compact dashboard cards. Use four items in a two-column desktop grid, with each item feeling like a page from a carefully typeset catalogue. The component should be reusable and responsive.

## Design language

### Layout and alignment
- Place the grid inside a centred container with a maximum width of roughly 1200px and comfortable side gutters: about 40px on desktop, 20px on mobile.
- Use a two-column grid on desktop with equal-width columns. Collapse to one column below approximately 700px.
- Give every cell a substantial minimum height, around 420–480px on desktop, so the section feels architectural rather than like a list of tiles.
- Use a thin outer border and thin internal rules. Avoid card gaps: the cells should meet edge-to-edge as one framed system.
- Apply a generous inset, approximately 36–40px on desktop and 24px on mobile.
- Align the contents of each cell to a consistent vertical rhythm. A typical structure is: optional visual cue, title row, supporting paragraph, divider, then a compact feature list.
- Let the top row accommodate cells without visual cues while the lower row can include a small product-specific object, icon, diagram, or interface preview. Keep those visuals understated and aligned to the same left content edge.
- Round only the outside bottom corners of the overall grid, around 22–26px. Keep internal corners square so the grid reads as a single frame.
- On mobile, preserve the border system and spacing, but reduce cell height and stack cells naturally. Do not force equal heights if doing so creates excessive empty space.

### Typography hierarchy
- Use a warm, near-white display face for titles, with a large, confident size around 30–34px desktop and 26–30px mobile. Use tight line-height around 0.98–1.05 and slight negative tracking.
- Titles may wrap to two lines. Keep the title block visually dominant but not oversized.
- Use a muted warm-grey sans-serif for descriptions, around 15–17px with 1.45–1.6 line-height.
- Pair small metadata with a restrained monospace or technical grotesk style: uppercase, letter-spaced, around 10–11px. Use this for duration, cadence, category labels, and feature bullets.
- In the title row, place the title on the left and a compact duration, cadence, or qualifier on the right. Keep the qualifier aligned to the baseline or upper title edge and avoid making it compete with the heading.
- Keep body copy short—one or two sentences—and give it enough width to remain readable.

### Colour
- Use a nearly black brown background, approximately `#0D0B0A` or `#100E0D`.
- Use warm off-white for primary headings, approximately `#F1EEE8`.
- Use a soft taupe-grey for descriptions, approximately `#AAA39B`.
- Use a low-contrast brown-grey for borders and dividers, approximately `#302C29` or `#383330`.
- Use a restrained warm olive or khaki for metadata, approximately `#A9A889`.
- Use a tiny burnt orange or red-orange accent, approximately `#E6502E`, for the short horizontal marks that introduce list items. Keep the accent sparse.
- If adding a visual cue, prefer an off-white object with subtle grey shading and one small accent-colour detail. The visual should support the content, not become an illustration-led hero.

### Borders, radius, and surfaces
- Use 1px borders with low contrast; the grid should be legible through structure rather than bright lines.
- Keep the surface flat and matte. Do not add gradients, glassmorphism, drop shadows, or bright filled cards.
- Use a 1px horizontal divider above the feature list, with roughly 24–28px vertical separation from the paragraph.
- Feature list rows should be compact but breathable, around 22–26px apart. Each row begins with a short 12–14px orange line, followed by uppercase tracking-heavy text.
- Use subtle hover feedback only if the cards are interactive: slightly brighten the border, shift the title or visual by 2–3px, and transition over 180–240ms. Do not add loud transforms or glowing effects.

### Content and behaviour
- Give each item one clear promise, one concise explanation, and three supporting capabilities or outcomes.
- Make the whole cell clickable only when it leads somewhere meaningful; otherwise render it as a static information block.
- If cells are clickable, expose keyboard focus with a visible warm outline and preserve sufficient contrast.
- Add responsive handling for long titles, missing images, and variable list lengths. The layout should remain balanced when content changes.
- Use semantic HTML: a section with an accessible heading, a list of feature items, and links or buttons only where appropriate.
- Respect reduced-motion preferences and avoid animation that is required to understand the content.

## Never
- Never reuse logos, product names, brand names, or exact copy from the reference.
- Never copy the reference's illustrations, 3D objects, product photography, icons, or imagery; create a new visual language appropriate to the user's product, or omit visuals entirely.
- Never reproduce the reference layout as a pixel-for-pixel clone; use the underlying editorial grid, spacing, hierarchy, and restraint as inspiration.
- Never use generic SaaS dashboard styling, colourful gradients, excessive shadows, pill-shaped UI, or dense conventional pricing-card patterns.
- Never invent brand details before asking about the user's product and identity.
