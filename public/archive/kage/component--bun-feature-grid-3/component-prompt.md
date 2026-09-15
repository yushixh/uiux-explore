## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073825-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-feature-grid-3

## Before you start
Ask me what my product does, who it is for, and what its visual brand is. Then apply the principles below to create a version for my product, using my terminology, content, and brand rather than reproducing the reference.

## Build a categorized feature-grid section
Create a responsive feature matrix for a developer-oriented product or software platform. The section should communicate breadth at a glance by grouping concise capabilities into labeled categories. It should feel like a product capability index: structured, technical, calm, and easy to scan.

### Layout and alignment
- Use a centered content container with a maximum width of approximately `1135–1180px` on desktop.
- Build a three-column grid on large screens with equal-width columns.
- Divide the grid into horizontal category bands. Each band contains one category per column; use two or more bands depending on the amount of content.
- Add thin vertical rules between columns and thin horizontal rules between bands. Let the outer border be similarly subtle rather than visually heavy.
- Keep every category cell left-aligned and consistent in internal padding, approximately `24px` horizontally and `26–30px` vertically.
- Give each category a compact uppercase eyebrow at the top, followed by a vertical list of capabilities. Each list item should have a feature name and one short explanatory line.
- Maintain equal column widths and align category headings across each row. If one category contains fewer items, preserve the grid rhythm instead of collapsing the cell.
- On smaller screens, collapse to one column or two columns based on available width. Keep dividers logical, avoid cramped three-column text, and retain generous side padding.

### Content hierarchy
- Category labels are short, uppercase, letter-spaced, and visually muted.
- Feature names are the strongest text inside each cell. Use a monospace or code-like typeface when the product is technical, especially for APIs, commands, file formats, or primitives.
- Feature descriptions are compact, plain-language summaries beneath each name. Limit them to one line where practical, allowing natural wrapping on narrow screens.
- Keep names and descriptions close together, then use a consistent vertical gap before the next item. A list gap around `17–21px` works well.
- Use real product-specific content supplied by the user. Prefer concise nouns, API names, commands, or capability phrases over marketing paragraphs.

### Typography
- Use a clean sans-serif for category labels and descriptions, with a readable system fallback such as `Inter`, `ui-sans-serif`, or the brand’s own sans-serif.
- Use a technical monospace for feature names where appropriate, such as `ui-monospace`, `SFMono-Regular`, `Menlo`, or `monospace`.
- Approximate sizing: category labels `11–12px`, feature names `14–16px`, descriptions `13–14px`.
- Use medium or semibold weight for feature names and regular weight for descriptions.
- Set body text line-height around `1.35–1.5`; use slightly tighter line-height for monospace labels.

### Colour
- Start with a near-white background: `#ffffff` or `#fdfdfd`.
- Use near-black for primary text: approximately `#171717`.
- Use a softened graphite for descriptions: approximately `#5f5f63`.
- Use muted gray for category labels: approximately `#6f6f72`.
- Use a vivid raspberry/magenta accent for feature names: approximately `#a80058` to `#b00063`. Adjust this to the user’s brand accent if one exists.
- Keep grid rules understated: approximately `#dedede` to `#e5e5e5`.
- Ensure text and accent colors meet accessible contrast requirements; do not use the accent purely as decoration if it becomes difficult to read.

### Borders, radius, and surface treatment
- Prefer a flat, editorial surface with no card shadows, gradients, or ornamental backgrounds.
- Use `1px` solid borders for the grid and cell dividers.
- Keep corners square or use only a very small radius, approximately `0–2px`; this is a matrix, not a set of floating cards.
- Avoid excessive decoration. The visible structure should come from alignment, rules, spacing, and typography.

### Interaction and responsive behavior
- If feature names link to documentation or detail pages, make the entire name or item an accessible link.
- On hover and keyboard focus, subtly darken or underline the accent feature name; do not introduce large motion or layout shifts.
- Provide clear `:focus-visible` styling with a visible outline or underline.
- Preserve readable tap targets on mobile, with enough vertical spacing between adjacent items.
- Use semantic markup: a section with a heading or accessible label, grouped category headings, and lists for capabilities. Ensure the layout remains understandable when CSS is unavailable.

### Implementation guidance
- Build the section as a reusable component driven by data: categories, feature names, descriptions, and optional URLs should be separate from the layout.
- Use CSS Grid for the matrix and CSS custom properties for colors, spacing, borders, and typography so the visual system can be adapted to the product brand.
- Do not force identical cell heights unless the content genuinely requires a strict comparison table; prioritize natural content flow while preserving the row structure.

## Never
- Never copy the reference product’s logos, product names, API names, commands, or exact feature copy.
- Never reuse the reference brand’s identity as if it belongs to my product.
- Never copy illustrations, screenshots, imagery, or decorative assets from the reference.
- Never turn the grid into glossy cards with shadows, gradients, or unrelated visual effects.
- Never fill the section with long marketing copy; keep it concise, categorized, and scannable.
