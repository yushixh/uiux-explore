## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060672-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060620-full.webp
- Component on Kage: https://kage.design/component/planetscale-tabs

## Before you start
Ask what the user's product is, who it is for, and what their brand language, typefaces, and colour palette are. Then apply the principles below to create an original tabs section for that product rather than reproducing this reference.

## Design language

Build a technical, editorial tabbed content section with a quiet documentation-like tone. It should feel precise, information-dense, and highly legible rather than glossy or promotional.

### Layout and alignment
- Place the component in a centered content column with a maximum width of roughly 1080–1180px.
- Use a single outer border around the tab panel and its content, with the tabs forming the panel's top row.
- Divide the tab row into equal-width segments. Keep labels horizontally and vertically centered.
- Use a generous but controlled content inset, approximately 24–32px on desktop; reduce it to 16–20px on small screens.
- Align all body copy, links, diagrams, and quotations to the same internal content edge.
- Let the active tab reveal a substantial content panel below it. The panel may contain an introductory paragraph, a second explanatory paragraph, a technical diagram or media block, and a quote or proof point.
- Keep the component's vertical rhythm spacious enough for scanning, with approximately 24px between paragraphs and 48–72px around a major diagram.
- On narrow screens, allow the tab labels to wrap or make the tab row horizontally scrollable; never let labels become cramped or overlap.

### Typography hierarchy
- Use a monospaced or technical-feeling typeface for labels and body copy, or pair a neutral grotesk with a subtle monospace accent if that better fits the user's brand.
- Tab labels should be medium or semibold, around 15–16px, with slightly increased tracking.
- Body text should be around 16px with a 1.5–1.65 line-height. Keep line lengths readable even inside the wide panel.
- Use short linked or highlighted technical terms in the brand accent colour.
- Supporting quotes should be visually separated with a thin vertical rule, slightly smaller text, and a muted attribution beneath.
- If the surrounding page includes section headings, use a compact bold heading with a subtle underline or bottom rule rather than a large display treatment.

### Colour
- Use an off-white page background near #FAFAF9 or #F7F7F5.
- Use near-black text and active surfaces near #111111 or #151515.
- Use a very light neutral panel background near #FCFCFB.
- Use thin borders in #303030 at normal opacity, with softer secondary rules near #B8B8B3.
- Use a restrained blue-teal accent for inline links or highlighted technical terms, approximately #16739A–#237D9D. Adapt this accent to the user's brand rather than treating it as mandatory.
- Maintain strong contrast for the active tab: light text on a near-black fill.

### Borders, radius, and surfaces
- Use square or nearly square corners: 0–2px radius.
- Use 1px solid borders throughout; the visual language should be ruled and architectural.
- Avoid shadows, gradients, glass effects, and floating-card treatments.
- If displaying a technical diagram, keep it monochrome and diagrammatic: thin lines, rectangular nodes, dashed connectors, and centered labels. Make it responsive within the panel.

### Interaction
- Tabs must be real, keyboard-accessible controls with clear selected state using `aria-selected`, focus styling, and associated tab panels.
- Clicking or pressing Enter/Space on a tab should switch the visible content without navigating away.
- The active tab uses a near-black background and light text; inactive tabs use the page/panel background with dark text.
- Add a restrained hover state, such as a slightly darker neutral fill or stronger text colour, without introducing animation-heavy effects.
- Use a short, subtle transition for background and colour changes, but keep content switching immediate and calm.
- On mobile, preserve the strong active/inactive contrast and ensure the tab controls remain easy to tap, with at least 44px of height.

## Never
- Never copy the reference's logos, product names, company names, testimonials, technical claims, or exact wording.
- Never reuse the reference's illustrations, diagrams, imagery, or distinctive node labels; create new content and original diagram structure for the user's product.
- Never make the component a pixel-for-pixel recreation or imitate a brand identity without adapting it to the user's product.
- Never use decorative gradients, oversized rounded cards, drop shadows, or unrelated visual embellishments.
- Never sacrifice keyboard access, focus visibility, responsive behaviour, or readable contrast for visual similarity.
