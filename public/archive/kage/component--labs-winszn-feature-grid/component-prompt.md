## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097620-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097588315-full.webp
- Component on Kage: https://kage.design/component/labs-winszn-feature-grid

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual identity are. Then apply the principles below to their product and brand—create an original implementation rather than reproducing this reference.

## Build an evidence-led feature grid
Create a dark, editorial section for showcasing a collection of products, projects, case studies, experiments, or capabilities. The section should feel curated and verifiable rather than promotional: each item presents visual proof, a clear outcome, a short explanation, and compact supporting metadata.

### Layout and alignment
- Use a near-black page background, approximately `#0d0b0b`, with a centered content container that is about 92–94% of the viewport width and capped around 1200–1400px.
- Begin the section with a thin horizontal divider in muted brown-gray, approximately `#3b3732`.
- Place a small uppercase eyebrow on the left and a compact item count or index on the right. Use a generous gap before the main heading row.
- In the heading row, use a two-column layout: a large headline occupying roughly half the width and a supporting paragraph aligned to the other half. Keep both columns top-aligned.
- Below the introduction, use a two-column card grid with a consistent gap of roughly 20–24px. Cards should be equal width and stacked vertically with generous row spacing.
- On smaller screens, collapse the heading and cards to one column. Preserve the card order and reduce outer padding without making the content feel cramped.

### Card anatomy
- Make every card a single rounded container with a subtle 1px border, approximately `#3a3732`, and a radius around 22–26px. Clip all media to the top corners.
- Divide the card into two clear zones:
  1. A media or proof panel at the top, generally with a 16:9 or slightly taller aspect ratio.
  2. A dark information panel beneath it, separated by a fine horizontal rule.
- Let the proof panel vary by item: use an abstract interface preview, data view, typographic composition, simulation, or another product-specific visual. The previews should feel like real evidence, not decorative filler.
- If an item has no suitable preview, use a very dark proof panel with a small uppercase “source” or equivalent state label near the top and a large, bottom-aligned result statement.
- Use internal card padding of about 28–30px on desktop and 20–22px on mobile.
- Keep the card title and status indicator on one row where possible. The status should be a tiny muted olive dot (`#a5aa78`) followed by small uppercase text, aligned to the far right.
- Follow the title with a short one-line descriptor, then a readable 2–3 line explanation. Use a divider before the evidence line.
- End with a compact uppercase evidence or metric line and a row of pill-shaped tags. Add a small arrow affordance at the lower-right to indicate that the entire card is actionable.

### Typography hierarchy
- Use a contemporary grotesk or humanist sans-serif with a slightly warm feel. Avoid overly geometric display fonts.
- Section eyebrow, count, evidence line, and tags: 10–11px, uppercase, letter spacing around `0.16em`; use muted olive or gray-green (`#9da080`) for labels and subdued gray (`#8f8b85`) for evidence.
- Main section heading: large, bold, tight leading, approximately 56–68px on desktop and 42–50px on mobile. Use warm off-white `#f2efeb`.
- Supporting copy: 18–21px with 1.55–1.7 line height; use warm gray `#aaa49e`.
- Card title: 29–34px, bold, with tight leading and off-white text.
- Card subtitle: 16–18px, medium weight, in `#aaa7a1`.
- Card body: 15–17px, 1.55 line height, in `#a29e99`.
- Keep numeric metrics and evidence language visually crisp, but do not let monospace styling dominate unless it fits the user's brand.

### Colour and surfaces
- Use a restrained palette: page background `#0d0b0b`, card surface `#171614`, warm white `#f2efeb`, body gray `#a29e99`, divider `#3a3732`, and muted olive accent `#a5aa78`.
- Allow each proof panel to have its own strong visual palette—blue, cream, violet, green, or other brand-relevant colours—while keeping the surrounding card chrome consistent.
- Add a very subtle shadow or inset highlight only if needed to separate cards from the background; avoid glossy, glassmorphic surfaces.

### Borders, radius, and spacing
- Use 1px low-contrast borders throughout. The design should feel precise and archival, not high-contrast or ornamental.
- Use a 22–26px outer card radius and 14–18px radius for smaller pills or controls.
- Use a spacing scale based on 8px: 8, 16, 24, 32, 48, 64, and 96px. Give the section a large vertical opening and closing margin.
- Keep text blocks comfortably narrow so descriptions remain easy to read. Avoid stretching body copy across the full card width.

### Interaction
- Make each card keyboard-focusable and clickable as a whole, with a clear but subtle focus ring in the accent colour.
- On hover, slightly brighten the border, lift the card by 2–4px, and apply a restrained transform or scale to the proof image. Keep transitions around 180–260ms with an ease-out curve.
- Ensure the arrow affordance shifts a few pixels on hover. Do not rely on hover alone to communicate clickability.
- Respect `prefers-reduced-motion` by disabling image zoom and lift transitions.
- Provide meaningful alt text for proof visuals and preserve readable contrast for all metadata.

### Content system
- Use realistic, product-specific content supplied by the user: a project name, concise promise, short explanation, measurable evidence, and 3–5 technology, category, or capability tags.
- Keep evidence factual and concrete. Prefer counts, test results, dates, or observable outcomes over vague marketing claims.
- Vary the preview composition across cards, but keep the information architecture identical so the grid remains scannable.

## Never
- Never copy the reference's logos, product names, project names, written copy, metrics, technology labels, or exact card content.
- Never reuse the reference's illustrations, screenshots, imagery, artwork, or distinctive visual compositions.
- Never make a pixel-for-pixel clone or preserve the reference's exact ordering and proportions.
- Never use a generic logo wall, inflated claims, or decorative imagery that does not help explain the featured item.
- Never sacrifice accessibility, responsive behaviour, keyboard interaction, or readable contrast for visual similarity.
