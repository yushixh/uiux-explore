## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073825-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-feature-grid-4

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and terminology should shape the section. Then apply the principles below to their product rather than reproducing any reference literally.

## Build an expandable feature comparison section
Create a responsive feature-comparison table for a modern software product. The section should help visitors compare one primary offering against two or more alternatives across a long list of capabilities, while keeping the first view compact and easy to scan.

### Structure and layout
- Place the component inside a spacious, mostly white or very lightly tinted page section.
- Use a centered container with a maximum width of approximately 1120–1200px and responsive horizontal padding of 24px on mobile, 40px on tablet, and 64px or more on desktop.
- Use a single bordered table/card with a subtle 1px outline and a small radius of 4–8px. Avoid heavy card shadows.
- The header row has one wide left column for “Feature” and several narrow, evenly sized comparison columns. Allocate roughly 60–70% of the width to feature descriptions and divide the remainder equally among the compared products.
- Keep feature text left-aligned. Center the comparison headings and all status indicators.
- Organize rows into optional uppercase category bands such as “Runtime”, “Storage”, or “Collaboration”. Category bands should span the table visually, use a slightly tinted background, and have clear top and bottom separators.
- Each feature row should contain a concise title and, when useful, a smaller explanatory line beneath it. Allow the left column to grow vertically while keeping status cells centered along the row.
- Show only a useful initial subset of rows, then finish the visible table with a full-width reveal area and a centered rounded button such as “Show all features”. The reveal control should expand the remaining rows in place without navigating away.
- On narrow screens, preserve readability: either allow horizontal scrolling with the feature column remaining visually prominent, or transform each comparison row into a stacked layout. Do not squeeze labels into unreadable widths.

### Typography hierarchy
- Use a neutral, highly legible sans-serif for body text and table labels.
- Use a strong display or grotesk style only for any surrounding section heading; the table itself should remain restrained.
- Table header labels: 13–14px, medium weight, muted colour.
- Category labels: 11–12px, uppercase, medium or semibold weight, with approximately 0.12em letter spacing.
- Feature names: 15–16px, regular or medium weight, near-black.
- Supporting descriptions: 13–14px, normal weight, muted gray, with comfortable line height around 1.4.
- Keep the visual hierarchy driven by size, weight, and alignment rather than bold colour blocks.

### Colour and status language
- Use an off-white or white surface such as `#ffffff` against a page background around `#fafafa` or `#f7f7f7`.
- Use near-black text around `#171717`, secondary text around `#666666`, and faint rules around `#e3e3e3`.
- Give the primary product column a subtle visual emphasis through slightly stronger text or a very pale tinted header, not a loud filled column.
- Represent support states with compact circular badges, approximately 28–32px in diameter:
  - supported: pale mint background around `#dff3ec` with a green check around `#16866a`;
  - partial or limited: pale warm background around `#f5ecd8` with a dark gold dash around `#b48727`;
  - unavailable: pale gray background around `#f0f0f0` with a neutral gray cross around `#777777`.
- Pair icons with accessible text labels or `aria-label`s so status is not communicated by colour alone.

### Borders, spacing, and geometry
- Use 1px horizontal dividers between rows and avoid vertical dividers unless needed for clarity.
- Header and category rows can use slightly darker rules, around `#d9d9d9`.
- Give table cells approximately 16–24px vertical padding and 24px horizontal padding on desktop. Reduce horizontal padding to 14–16px on mobile.
- Maintain an 8px spacing rhythm for internal gaps; use 4–8px between a feature title and its description.
- Keep the table edges crisp and quiet. Use a 6px radius for the outer container and a fully rounded or pill-shaped reveal button.
- The reveal button should have a white or page-coloured background, a thin border around `#d8d8d8`, 12–16px horizontal padding, and a small downward chevron.

### Interaction and accessibility
- The “show all” control must be a real button with a clear expanded/collapsed state, keyboard focus styling, and an animated chevron rotation.
- Expand and collapse the hidden rows with a short, restrained transition; never delay access to the content for animation.
- Add hover and focus states to the reveal button using a slightly darker border and a subtle background tint.
- Keep comparison headers readable and visually fixed where useful during horizontal scrolling. Ensure the feature name and status meaning remain understandable on touch devices.
- Use semantic table markup when the layout remains tabular: `table`, `thead`, `tbody`, `th`, and `td`. Provide a caption or accessible section heading.

### Content guidance
- Use invented, product-relevant feature categories and labels supplied by the user. Keep rows concise and factual.
- Include a mix of yes/no, partial, and nuanced capability states so the comparison has a clear scanning pattern.
- Avoid excessive explanatory prose inside cells; the table is for rapid evaluation.

## Never
- Never copy the reference’s logos, mascots, product names, brand marks, or proprietary copy.
- Never reuse the reference’s exact feature labels, competitor names, row order, or status data.
- Never include illustrations, screenshots, or imagery from the reference.
- Never make the design depend on colour alone to communicate support states.
- Never turn the table into a visually noisy dashboard with heavy shadows, gradients, oversized icons, or dense decoration.
- Never reproduce the reference layout pixel-for-pixel; adapt the underlying comparison and progressive-disclosure principles to the user’s product and brand.
