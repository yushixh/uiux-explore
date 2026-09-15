## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060672-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060620-full.webp
- Component on Kage: https://kage.design/component/planetscale-logo-cloud

# Before you start
Ask the user what their product is, who it serves, and what their brand system looks like. Ask whether the logos should be real customer or partner marks, text-only placeholders, or approved local assets. Then apply the principles below to their product and brand—do not reproduce the reference literally.

## Build a structured customer logo wall
Create a large social-proof section for a software product that introduces a roster of customers, partners, or companies using the product. The section should feel credible, editorial, technical, and highly scannable. It should work as a reusable component in the user's site rather than as a page-specific imitation.

### Layout and alignment
- Place the component inside a centered content column with a comfortable maximum width, approximately 1080–1200px on desktop.
- Use a short lead-in above the grid: one or two compact paragraphs followed by a supporting line such as a customer-introduction label. Keep the lead-in left aligned and let its width be narrower than the grid.
- Below the lead-in, create a rigid logo matrix with five columns on large screens. Each cell should have equal width and a consistent height, roughly 120–145px depending on the logo scale.
- Align every logo to the visual center of its cell, both horizontally and vertically. Use an inner flex wrapper so marks with different proportions still feel balanced.
- On medium screens, reduce to three columns; on small screens, use two columns or a horizontally scrollable grid only if the number of logos is very large. Preserve the orderly matrix rather than creating a loose cloud.
- Keep the grid edge-to-edge within its container, with no floating cards, shadows, or staggered positions.
- Use data-driven rendering so the number of rows and logo assets can change without changing the layout code.

### Typography hierarchy
- Use the product's existing typeface where possible. For a technical brand, pair a clean sans-serif UI face with a restrained monospace face for eyebrow text or supporting copy.
- Set the intro at approximately 16–18px with a 1.45–1.6 line height and a neutral, readable weight.
- Use a smaller eyebrow or label at approximately 13–15px, with modest letter spacing and medium weight.
- If a quote or attribution follows the grid, keep it secondary: approximately 14–16px, with subdued colour and clear separation from the logo wall.
- Do not typeset company names as a generic uniform heading if approved logo assets exist; the mark itself is the content.

### Spacing
- Give the section generous vertical breathing room: approximately 72–120px above and below on desktop, reduced to 48–72px on mobile.
- Leave 24–40px between the lead-in copy and the grid.
- Give each logo cell 24–32px of horizontal and vertical internal padding.
- Maintain consistent gaps around the optional quote or attribution below the matrix.
- Size each logo by its visual footprint rather than its source file dimensions. A practical default is a maximum width of 150–180px and maximum height of 42–52px, with smaller or unusually wide marks allowed to use less.

### Colour
- Start with a very light warm or neutral background, approximately #F8F8F7 or #FAFAF9, unless the user's brand requires another surface.
- Use near-black for primary text and rules, approximately #171717 or #202020.
- Use a thin, low-contrast grid rule around #4A4A47 at roughly 1px, or use a lighter #D8D8D3 for a softer version. Keep contrast sufficient for structure without making the grid feel heavy.
- Preserve approved logo colours when they are important to recognition, but keep the surrounding UI restrained. If the brand direction calls for a quieter treatment, offer a monochrome version using #161616 with optional hover colour restoration.
- Use one restrained brand accent for linked lead-in text or interactive states, typically a saturated blue, green, or other colour taken from the user's system.

### Borders and radius
- Use square or nearly square cells with no visible card radius, approximately 0–4px, so the matrix reads as one continuous table.
- Draw borders between cells and around the outer edge. Avoid doubled borders by using a single border system or carefully controlled negative margins.
- Do not add card shadows, gradients, glass effects, or decorative backgrounds behind individual marks.

### Interaction and accessibility
- If logos link to customer stories or company pages, make the entire cell the interactive target with a clear accessible label.
- On hover or focus, use a subtle treatment: slightly stronger background tint, a small opacity or colour shift, or restoration from muted to full-colour. Avoid movement that disrupts the matrix.
- Provide visible keyboard focus using a 2px outline or inset focus ring with sufficient contrast.
- Include meaningful alt text for every logo; if a logo is decorative and its company name is already exposed elsewhere, mark it appropriately.
- Ensure the grid reflows cleanly without clipped marks, and test long or unusually shaped logos.
- Respect reduced-motion preferences and keep interactions instantaneous or gently eased.

### Content and implementation guidance
- Use only logos the user has permission to display, preferably as optimized SVGs with consistent viewBox padding.
- Normalize asset sizing through CSS rather than editing each logo until it appears artificially uniform.
- Include a small set of varied logo proportions in development to validate the visual centering and responsive behavior.
- If there are too many logos for the page, support a deliberate “show more” expansion or pagination rather than an accidental wall that overwhelms the surrounding content.

## Never
- Never copy the reference's logos, customer names, product names, quote, attribution, wording, or exact logo ordering.
- Never use PlanetScale branding, marks, colours, or distinctive page-specific copy unless the user's own brand independently calls for them.
- Never source or recreate trademarked logos without the user's approved assets or permission.
- Never add illustrations, stock imagery, decorative icons, or a hero-style visual treatment to this logo-cloud component.
- Never make every logo look identical if that harms recognition; preserve each approved mark's essential proportions.
- Never sacrifice responsive layout, accessible labels, keyboard focus, or readable contrast for visual density.
