## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060674-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060620-full.webp
- Component on Kage: https://kage.design/component/planetscale-footer

## Before you start

Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original footer for that product—use the product's own navigation labels, legal requirements, and social destinations rather than reproducing any reference content.

## Design goal

Build a highly scannable, editorial footer for a software product. Treat the footer as a structured index: group related destinations into labeled columns, separate utility/legal information into its own band, and place social links in a final low-emphasis row. The result should feel precise, calm, technical, and easy to navigate without relying on imagery or decorative graphics.

## Layout and alignment

- Use a centered, full-width footer container with a maximum content width of approximately 1080–1200px.
- Create a top navigation grid with 4–6 equal columns. On wide screens, columns are separated by thin vertical dashed rules; the grid has a matching outer border or boundary.
- Align every column's heading and link list to the same left edge. Keep link groups compact and let the tallest group determine the height of the top grid.
- Put legal links and the copyright/ownership statement in a distinct horizontal band beneath the navigation grid, separated by a dashed horizontal rule. Stack the legal links and copyright line when the viewport is narrow.
- Place social links in a separate bottom row with a comfortable top margin, outside the boxed navigation/legal area if that suits the brand. Use separators between inline links.
- On mobile, collapse the columns into a single vertical stack or a two-column grid. Remove or replace vertical dashed separators so they do not create visual clutter, while retaining horizontal section boundaries.
- Give the footer generous outer padding: roughly 32–40px on desktop and 24px on mobile. Use 24–40px column gaps and 16–24px row gaps.

## Typography hierarchy

- Use a monospaced or highly technical sans-serif typeface if that matches the product's brand; otherwise choose a readable brand typeface with strong numeral and punctuation clarity.
- Column headings should be small, medium-to-bold, and visibly distinct from links—approximately 14–16px with a modest underline or another restrained emphasis.
- Navigation links should be approximately 15–16px, with a line height around 1.5–1.6 for fast scanning.
- Legal and social links can use the same size as navigation links, but lower contrast or lighter weight. Copyright text should be slightly quieter than the links.
- Preserve sentence case or the product's established casing consistently. Avoid oversized marketing headlines in this component.

## Colour

- Use a warm near-white background around `#F7F7F5` or adapt it to the user's brand surface colour.
- Use a deep charcoal text colour around `#3F3F3D`, not absolute black.
- Use a softer grey around `#777773` for secondary legal or copyright text.
- Use a muted charcoal border around `#5B5B57`; dashed rules should remain visible but subtle.
- Links should inherit the main text colour and transition to a darker or brand-accent colour on hover. Ensure all text meets accessible contrast requirements.

## Borders, rules, and radius

- Use 1px dashed borders for the column dividers and horizontal section boundaries; keep dash spacing consistent.
- Prefer square or nearly square corners, with a radius of `0–2px`. This component should feel structured rather than card-like.
- Avoid heavy shadows, gradients, thick dividers, and ornamental containers.
- Use thin vertical bars, dots, or small gaps as separators between inline legal and social links. Make sure separators are decorative and are not announced redundantly by screen readers.

## Interaction and accessibility

- Make every destination a real keyboard-focusable link with a clear visible focus state, such as a 2px outline in the brand accent colour with a small offset.
- On hover, use a restrained underline, colour shift, or slight opacity change—do not animate layout or make links jump.
- Preserve a generous hit area, especially on mobile; aim for at least 44px of vertical touch target space even if the text line itself is smaller.
- Use semantic `<footer>`, navigation landmarks with accessible labels, lists for link groups, and a clearly associated copyright/legal region.
- Keep the visual order and DOM order logical: navigation groups first, legal information second, social links last.
- Respect reduced-motion preferences and avoid animations that are necessary to understand the footer.

## Responsive behaviour

- At desktop widths, maintain the multi-column index and aligned dashed dividers.
- At tablet widths, reduce column count or spacing before allowing text to wrap awkwardly.
- At mobile widths, allow long labels to wrap naturally, keep all content within the viewport, and use full-width horizontal separators between stacked groups.
- Do not hide important legal, accessibility, or navigation links solely to simplify the mobile layout.

## Content guidance

- Derive section names and links from the user's actual product architecture, such as company, platform, developers, resources, community, or support.
- Include only useful destinations; avoid filling columns with placeholder links just to balance heights.
- Use the legally required privacy, terms, cookie, consent, and copyright destinations for the user's region and business.
- Include only the social channels the product actively maintains.

## Never

- Never copy the reference site's logos, product names, navigation labels, legal copy, copyright year, social links, or wording.
- Never use the reference site's exact column structure if it conflicts with the user's information architecture.
- Never include copied illustrations, imagery, icons, or decorative artwork from the reference.
- Never use a generic placeholder brand in the finished implementation; ask for the user's product and brand first.
- Never sacrifice keyboard access, contrast, responsive wrapping, or legal visibility for visual similarity.
