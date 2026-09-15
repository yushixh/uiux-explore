## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106745-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-faq

## Before you start
Ask what the user's product is, who it is for, and what brand personality and visual system it uses. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Design language

Build a clean, compact FAQ accordion for a modern software or SaaS website.

### Layout and alignment
- Place the FAQ inside a centered content column, approximately 680–760px wide on desktop, with generous horizontal gutters on smaller screens.
- Stack questions vertically with consistent gaps of 8–12px.
- Make each item a full-width horizontal row with the question aligned left and the expand/collapse control aligned right.
- Keep the text and icon vertically centered within each row.
- Use a responsive layout: preserve comfortable tap targets on mobile and allow long questions to wrap without colliding with the control.
- Include several concise, product-specific questions. Keep the section visually focused rather than adding unnecessary decoration.

### Typography hierarchy
- Use the product’s existing sans-serif typeface, or a neutral contemporary sans-serif fallback.
- Set question text at approximately 15–16px with a 1.4 line height and medium/regular weight.
- Use the surrounding page’s heading hierarchy if a section title is included; keep it clearly secondary to the page hero and avoid oversized display typography.
- Use the brand’s primary text colour for questions and a slightly muted colour for expanded answers.

### Spacing
- Give each row approximately 18–22px vertical padding and 20–24px horizontal padding.
- Maintain 8–12px between rows.
- Add approximately 48–80px of space above and below the FAQ group, adapting to the surrounding page sections.
- When an answer opens, add 12–16px of separation below the question and 18–24px of bottom padding so the content remains readable.

### Colour
- Use a very light neutral row background, approximately `#F7F7F8` or a close brand-appropriate equivalent.
- Use a near-black navy or charcoal for question text, approximately `#202433`.
- Use a muted slate for answer text, approximately `#667085`.
- Use the product’s accent colour sparingly for active states or links; a saturated blue such as `#1769FF` is a suitable starting point, but defer to the user’s brand.
- Keep the surrounding section background white or softly off-white, approximately `#FFFFFF` or `#FCFCFD`.

### Borders and radius
- Use little or no visible border; if separation is needed, use a subtle 1px border near `#EEF0F3`.
- Give rows a soft rounded corner, approximately 10–12px.
- Avoid heavy shadows. If an open or hovered row needs elevation, use only a very subtle shadow such as `0 2px 8px rgba(16,24,40,0.06)`.

### Interaction
- Make the entire row clickable, not only the plus icon.
- Show a simple plus icon on closed items, aligned to the right with an approximately 20–24px hit area.
- Animate the icon into a minus or rotate it subtly when the item opens; use a quick, understated 160–220ms transition.
- Animate answer expansion smoothly without causing abrupt layout jumps.
- Provide clear hover, focus-visible, and active states that meet accessible contrast requirements.
- Use semantic buttons and accessible accordion behavior: keyboard navigation, `aria-expanded`, and an associated answer region.
- Decide whether multiple items may remain open based on the product context, but keep the behavior predictable and explain it through interaction rather than visual clutter.

## Never
- Never copy the reference’s logos, product names, branded wording, or exact FAQ questions.
- Never reuse copy, illustrations, icons, imagery, or distinctive decorative motifs from the reference.
- Never make the accordion dependent on hover or hide the control on touch devices.
- Never sacrifice readable wrapping, keyboard access, or sufficient tap targets for visual compactness.
