## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073776-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-feature-grid-3

## Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section
Create a dark, technical feature-grid section for a developer-facing product. It should feel like a sequence of clearly organized product capabilities rather than a generic marketing card wall. Use several editorial subsections with generous vertical rhythm:

1. A full-width section heading aligned to the main content container.
2. A sequence of large feature rows. Each row should pair a compact product UI visualization on one side with a short eyebrow and strong benefit statement on the other. Alternate the visual/text placement where appropriate to create movement.
3. A compact three-column grid beneath a heading for operational capabilities. Each card should have a title, concise supporting copy, and a restrained UI detail or diagram near the bottom.
4. An optional final two-column “bring it into your product” area with explanatory copy on one side and a framed interface preview on the other.

Use the user's own product concepts, terminology, and brand colours for all content and examples.

## Design language

### Layout and alignment
- Use a centered content frame with a maximum width around 1200–1280px and a thin outer boundary or very subtle grid structure.
- Align every heading, rule, card edge, and visualization to a consistent column system.
- Let section headings span the full content width; separate them from their content with thin horizontal rules.
- Use large feature rows with an approximately 1:1 or 5:4 visual-to-copy split. Keep copy vertically centered rather than top-aligned.
- Use a three-column grid for smaller capabilities on desktop, collapsing to one column on narrow screens.
- Preserve generous negative space: approximately 72–120px between major subsections, 40–64px inside feature rows, and 24–32px inside cards.
- On mobile, stack visual and copy areas, reduce section padding to roughly 48–64px, and maintain visible rules between modules.

### Typography hierarchy
- Use a clean contemporary sans-serif with a slightly technical feel; use a monospace face only for data, labels, timestamps, code, or UI annotations.
- Main section headings: 28–34px, medium weight, tight line height around 1.1.
- Feature eyebrows: 15–17px, medium weight, using an accent colour.
- Feature statements: 28–36px on desktop, 24–30px on mobile, with a compact line height and a maximum width that encourages two or three lines.
- Card titles: 20–24px, medium weight.
- Body copy: 15–17px, line height 1.5–1.65, in a muted grey.
- UI labels and chart annotations: 11–13px, often monospace, with increased letter spacing where useful.

### Colour
- Base page: near-black charcoal, approximately `#101114` or `#111216`.
- Alternate panels: `#15171B` to create barely perceptible layering.
- Primary text: cool off-white around `#E6E7EA`.
- Secondary text: muted slate grey around `#858991`.
- Rules and card borders: low-contrast `#24262C` or `rgba(255,255,255,0.08)`.
- Use one primary brand accent supplied by the user. If none exists, choose a restrained electric violet around `#8665FF`.
- Add sparing semantic accents for interface details: electric blue `#3D8BFF`, lime `#9BEA5C`, magenta `#E44BB8`, and red `#E05268`. Do not use all accents equally; most of the page should remain charcoal and grey.
- Use subtle gradients, glow, or diagonal hatch textures only inside visual demos, never as a broad decorative background.

### Borders, radius, and surfaces
- Prefer square or nearly square geometry: 0–6px corner radius for cards and framed demos.
- Use 1px borders with low contrast; create hierarchy through spacing and surface shifts rather than heavy shadows.
- Product previews should look like simplified observability dashboards, queues, timelines, charts, status lists, or application panels made from HTML/CSS.
- Keep demo surfaces dark, with faint internal dividers, small badges, progress bars, timestamps, and status indicators.
- Avoid ornamental cards floating with large shadows; the visual language should feel engineered and integrated into the grid.

### Interaction and motion
- Make cards and demo links keyboard accessible with visible focus states.
- If cards are interactive, use a restrained hover state: border brightening, a small accent shift, or a 2–4px translate—not a dramatic scale effect.
- Add subtle animated states only when they clarify the product story: a progress bar advancing, a chart pulse, a status dot changing, or a timeline marker moving.
- Respect reduced-motion preferences and ensure the section communicates fully as a static layout.
- Use arrows or small text links only where they help users explore a capability; keep them understated.

## Content and implementation guidance
- Write concise, benefit-led copy specific to the user's product. Avoid repeating the same sentence pattern in every module.
- Make each visualization demonstrate the feature being described instead of serving as generic decoration.
- Build the section from reusable data-driven components so the user can add, remove, or reorder feature rows and cards.
- Use semantic HTML, responsive CSS, and accessible colour contrast. Keep visualizations lightweight and avoid external image dependencies when CSS or inline SVG can communicate the idea.

## Never
- Never use logos, product names, or branded copy from the reference.
- Never copy the reference's exact feature names, sentences, UI labels, diagrams, layout proportions, or ordering.
- Never reuse its illustrations, screenshots, imagery, icons, or distinctive visual assets.
- Never make the result feel like a direct clone; adapt the structure and principles to the user's product and brand.
- Never sacrifice readability or accessibility for decorative neon effects.
