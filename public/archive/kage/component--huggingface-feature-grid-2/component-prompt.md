## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073962-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-feature-grid-2

# Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and visual references are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a polished landing-page feature mosaic that introduces several major product capabilities through a combination of short editorial copy and cropped UI previews. The section should make a broad, technically complex product feel clear, calm, and easy to explore.

## Design language

### Layout and alignment
- Use a centered content container, approximately 1024–1200px wide, with generous horizontal margins.
- Begin with a centered section intro: a small abstract decorative mark, a bold headline, and one muted supporting sentence. Keep the intro visually quiet and allow substantial whitespace beneath it.
- Below the intro, create a responsive bento grid with two columns on desktop and one column on smaller screens.
- Use asymmetrical card spans rather than a uniform list: one wide card beside one narrower card in the first row, then a narrow card beside a wide card in the second row. Preserve consistent outer edges and gutters.
- Cards should have a fixed or minimum visual height, with their content preview occupying the lower portion. On mobile, stack cards in a logical reading order and let previews crop or scale without causing horizontal overflow.
- Align card headings and descriptions to a consistent inset, approximately 32px desktop and 20–24px mobile. Keep the card header height visually consistent across cards.

### Typography hierarchy
- Use the product’s existing sans-serif brand font, or a clean contemporary sans-serif fallback.
- Section heading: bold, near-black, approximately 28–32px desktop with tight line-height around 1.1.
- Section subtitle: muted gray, approximately 16px, with comfortable line-height around 1.4.
- Card title: semibold or bold, approximately 18px, with compact line-height.
- Card description: regular, approximately 15px, in a soft gray; keep it to one or two lines where possible.
- UI preview text should be smaller than the surrounding marketing copy and should feel like authentic interface detail, while remaining legible enough to communicate the concept.

### Colour
- Keep the overall canvas white or near-white, such as #FFFFFF or #FCFCFC.
- Use near-black for primary text, such as #111111 or #171717.
- Use neutral gray for secondary copy, such as #777777 or #8A8A8A.
- Use a very light gray for dividers and card borders, such as #E6E6E6 or #ECECEC.
- Allow each preview to introduce restrained product-specific accent colours, but keep accents soft and subordinate to the content. Avoid turning the whole section into a colourful dashboard.
- If the brand has a distinctive accent, use it sparingly for small icons, status dots, tags, buttons, or highlighted preview elements.

### Borders, radius, and surfaces
- Give every feature card a thin, low-contrast border around 1px solid #E5E5E5.
- Use a medium rounded corner, approximately 12–14px. Keep the radius consistent across cards and internal preview surfaces.
- Prefer flat white surfaces and subtle separation over heavy shadows. If needed, use only a barely visible shadow such as 0 2px 8px rgba(0,0,0,0.04).
- Separate the card’s editorial header from its preview with a fine horizontal rule or a slight surface transition.

### Feature-card content
- Give each card a short, benefit-led title and a supporting sentence that explains the capability in plain language.
- Build simplified, original UI mockups below the header: for example, a collaboration activity feed, a code or workflow panel, a modality/category explorer, and a creator or portfolio overview.
- Treat previews as visual evidence rather than fully functional product screens. Use realistic but invented labels, neutral avatars or abstract placeholders, small metadata rows, tabs, cards, charts, code lines, and thumbnails as appropriate.
- Crop previews at the card boundary so they feel like windows into a larger product. Ensure the crop looks intentional, not broken.
- Maintain enough contrast between the preview and its background to make the section readable even when the preview is detailed.

### Interaction and responsiveness
- If cards are clickable, make the entire card an accessible link with a clear hover state: slightly darken the border, raise the surface by a subtle amount, or shift a small arrow/icon.
- Do not rely on hover alone; preserve clear titles and descriptions on touch devices.
- Add visible keyboard focus states with a 2px accent or high-contrast outline.
- Keep all decorative previews inert unless the product genuinely benefits from interaction. If adding tabs or filters, make them keyboard accessible and ensure the card still communicates its value without JavaScript.
- On small screens, reduce section spacing, use 20–24px card padding, stack the grid, and preserve readable preview crops rather than shrinking every detail excessively.

## Implementation guidance
- Use semantic HTML such as a section, heading group, and list of feature cards.
- Build the grid with CSS Grid and explicit column spans or grid areas so the asymmetric rhythm is easy to maintain.
- Keep preview components modular and reusable, with data-driven card content.
- Support reduced-motion preferences and avoid distracting animations. A restrained opacity, border, or translate transition is enough.
- Check colour contrast, focus visibility, text wrapping, and overflow at desktop, tablet, and mobile widths.

## Never
- Never reuse logos, product names, brand marks, or trademarked UI identifiers from the reference.
- Never copy the reference’s exact marketing copy, labels, usernames, code, screenshots, avatars, or interface text.
- Never use the reference’s illustrations, imagery, screenshots, or visual assets.
- Never reproduce the exact card ordering, dimensions, spacing measurements, or decorative mark; adapt the structure to the user’s product and brand.
- Never make the section depend on inaccessible hover effects, tiny unreadable text, or horizontal scrolling.
