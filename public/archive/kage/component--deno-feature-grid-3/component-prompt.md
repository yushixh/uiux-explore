## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073866-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-feature-grid-3

## Before you start
Ask the user what their product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section
Create a responsive, editorial feature grid that explains several product capabilities through alternating text-and-visual modules. The section should feel like a confident developer-product landing page: spacious, precise, slightly playful, and grounded in believable interface details.

Use three stacked feature moments:

1. **Light capability panel** — a wide, very pale blue panel with a two-column layout. Place a realistic code-editor/browser-window visualization on the left and a text block on the right. The visual should include a compact title bar, subtle window controls, syntax-colored code, a restrained shadow, and a softly rounded frame. The text block should have a large two-line heading, two short paragraphs, and one prominent pill-shaped CTA with a simple right-pointing arrow.

2. **White editorial panel** — switch the visual/text order. Put a narrow text column on the left and a large technical visualization on the right. Use a bold multi-line heading, body copy with inline code-style tokens or links, and a secondary pill CTA. The visual can be an abstract API/browser-compatibility matrix: many small outlined labels arranged in rows, with a handful of brightly highlighted labels in different accent colours. Add one simple hand-drawn-style accent mark near the visual, but keep it generic and avoid illustrative storytelling.

3. **Dark security panel** — use a near-black background and center the content in a constrained column. Add a large white heading, muted explanatory copy, then a wide terminal/security-console card. The card should have a dark charcoal surface, a subtle border, a narrow left navigation/list column, and a larger monospace output area with coloured status text, warnings, prompts, and error messages. This final panel should feel denser and more operational than the two light panels above.

## Reusable design language

### Layout and alignment
- Use a full-width stack of feature panels with a shared maximum content width of approximately 1120–1200px.
- Align all text and visual content to a consistent grid; use roughly 45/55 or 40/60 column splits depending on the module.
- Give the first two panels generous vertical padding, approximately 110–150px on desktop.
- Keep the dark panel visually distinct with a larger top and bottom inset and a centered heading block.
- On screens below 800px, collapse every two-column module into one column. Put the visual either above or below the copy based on reading order, reduce padding to roughly 56–72px, and make visual cards horizontally scrollable or safely clipped rather than shrinking technical content into illegibility.
- Maintain generous whitespace between feature modules; do not make the grid feel like a dense dashboard.

### Typography
- Use a modern sans-serif with a sturdy grotesk character for headings and a highly legible sans-serif for body copy; fall back gracefully to system fonts.
- Feature headings should be bold, tightly tracked, and approximately 42–58px on desktop with a line-height around 0.98–1.08. Use 34–40px on mobile.
- Body copy should be approximately 18–20px with a 1.45–1.6 line-height and a muted grey tone.
- Keep text measures controlled: approximately 28–36rem for descriptive copy and narrower for the editorial text column.
- Use monospace typography for code, terminal output, labels, and inline technical tokens.
- Use sentence case for headings and keep supporting copy short enough to scan.

### Colour
- Base light background: white, approximately `#FFFFFF`.
- Soft capability-panel background: very pale cool blue, approximately `#EEF6FF` or `#F0F7FF`.
- Primary text: near-black, approximately `#090A0D`.
- Secondary text: cool charcoal, approximately `#5D6672`.
- Dark security-panel background: approximately `#0B0D10`.
- Terminal surface: approximately `#181B20`, with a border around `#2A2E35`.
- Primary CTA accent: vivid mint/green, approximately `#61F5A7`; use near-black text on it.
- Technical visualization accents may use small, intentional highlights such as cyan `#16B9E8`, lime `#19E879`, yellow `#F2D21B`, and magenta `#D522E8`. Keep most labels neutral so the accents carry meaning.
- Ensure all body text and controls meet accessible contrast requirements; do not rely on colour alone to communicate status.

### Borders, surfaces, and shape
- Use subtle 1px borders around editor, matrix, and terminal cards, approximately `rgba(15, 23, 42, 0.12)` on light surfaces and `#2A2E35` on dark surfaces.
- Use restrained corner radii: around 8–12px for technical cards, 999px for pill CTAs, and 0px or minimal radius for the large page panels.
- Add soft shadows only to raised editor and visualization cards: for example `0 12px 28px rgba(15, 23, 42, 0.10)`.
- Code labels and tokens should look like compact chips with light borders, subtle fills, and 4–6px radii.

### Interaction and motion
- CTAs should have a clear hover state: slightly deepen or brighten the mint fill, shift the arrow a few pixels to the right, and preserve a strong focus ring.
- Links and inline technical tokens may underline on hover.
- Technical visualizations can use a restrained entrance animation or gentle label shimmer, but the content must remain understandable without animation.
- Respect `prefers-reduced-motion`; never make the visual noise compete with the headline or CTA.
- Ensure keyboard focus is visible and all buttons/links have meaningful accessible labels.

### Content and implementation guidance
- Use original, product-appropriate headings and copy supplied by the user or generated for their product. Do not reuse the reference's claims, wording, code, labels, or product concepts.
- Build the visualizations from HTML/CSS and lightweight components where possible so they remain responsive, selectable, and accessible. Use realistic placeholder technical content rather than a static screenshot.
- Keep the feature grid modular so each panel can be reordered, removed, or reused independently.

## Never
- Never use logos, product names, brand marks, or proprietary symbols from the reference.
- Never reuse the reference's headings, body copy, CTA labels, code snippets, terminal messages, API names, or exact technical labels.
- Never copy the reference's illustrations, hand-drawn mark, imagery, screenshots, or distinctive visual assets.
- Never reproduce the exact layout, proportions, spacing, colour palette, or decorative arrangement; use the rules as inspiration and adapt them to the user's product and brand.
- Never make the section inaccessible, dependent on colour alone, or unusable on mobile.
