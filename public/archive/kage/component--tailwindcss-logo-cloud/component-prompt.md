## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073867-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-logo-cloud

# Build a sponsor logo-grid section

## Before you start
Ask me what my product is, who it is for, and what its brand direction is (including typography, colour palette, tone, and any existing design system). Then apply the principles below to create a version suited to my product—not a copy of the reference.

## Purpose
Create a sponsor, customer, partner, or ecosystem logo section that communicates credibility through a calm editorial introduction followed by a dense but orderly field of marks. The section should feel designed as part of a technical product website: precise, minimal, confident, and easy to scan.

## Structure and layout
- Use a full-width section inside a centered page frame, with a maximum content width around 1180–1280px on desktop.
- Begin with a compact eyebrow label in uppercase, followed by a large headline and a short supporting paragraph. Keep this intro left-aligned.
- Place a single primary CTA beneath the paragraph. Use a compact pill or softly rounded button with a clear action and an optional arrow icon.
- Separate the introduction from the logo field with generous vertical whitespace, approximately 56–80px.
- Build the logo field as a four-column grid on desktop. Each cell should have a consistent height of roughly 125–155px, with logos centered both vertically and horizontally.
- Use hairline horizontal and vertical rules so the grid feels architectural. The grid may extend to the section edges while the intro remains aligned to the page frame.
- On medium screens use three columns; on small screens use two columns, and allow the final row to contain fewer cells without forcing awkward empty content.
- Keep each logo inside a padded cell with a maximum visual width around 150–190px and maximum height around 42px. Preserve each mark’s proportions.
- Ensure the section is responsive without horizontal scrolling. Use CSS grid, not a manually positioned collage.

## Alignment and spacing
- Align the eyebrow, heading, paragraph, and CTA to the same left edge.
- Use a clear vertical rhythm: eyebrow to heading 16–22px, heading to paragraph 16–24px, paragraph to CTA 28–40px.
- Give grid cells consistent internal padding, approximately 28–40px desktop and 24px mobile.
- Avoid excessive gaps between marks and cell boundaries; the grid should feel dense, deliberate, and evenly paced.
- Allow the final grid row to preserve the same cell height and border treatment.

## Typography
- Use the product’s display typeface for the headline if available; otherwise use a modern sans-serif with a distinctive, slightly editorial feel.
- Eyebrow: uppercase, small size around 11–12px, medium or semibold weight, increased letter spacing around 0.12em. Use the brand accent colour.
- Headline: approximately 38–48px on desktop, 30–36px on mobile, with a tight line-height around 0.98–1.08 and strong but not overly heavy weight.
- Supporting copy: 16–18px, line-height 1.55–1.7, restrained contrast, and a readable maximum width around 680–760px.
- CTA label: 13–15px, semibold, with enough contrast and padding to feel intentional.
- Do not let the logos compete with the headline. Treat them as visual assets with individually appropriate wordmark sizing rather than forcing identical text sizes.

## Colour
- Default background: warm white or near-white, approximately #ffffff or #fafafa.
- Primary text: near-black, approximately #08090a or #111318.
- Supporting text: cool muted gray, approximately #5f636b or #6b7280.
- Grid rules: very subtle gray, approximately #e5e7eb at full opacity or #dfe3e8 with reduced opacity.
- Eyebrow accent: choose a vivid brand accent; a cyan-blue around #159fbd is one possible direction, but adapt it to the user’s brand.
- Logo treatment should be monochrome near-black by default. If supplied logos have colour, use a consistent monochrome treatment only when legally and technically appropriate; otherwise retain their original brand colours with controlled sizing.
- CTA: near-black fill with white text for a high-contrast primary action, or use the product’s strongest brand colour if that is more appropriate.

## Borders, radius, and surfaces
- Use 1px rules for grid lines and section separators.
- Keep the overall section surface flat and untextured; do not add cards, drop shadows, or gradients unless the product’s brand requires them.
- Use a small radius around 999px for the pill CTA. Logo cells should generally have no radius so the grid remains continuous.
- If the page uses a framed content rail, use very subtle side rules to connect the intro and grid visually.

## Logo handling
- Use placeholder or user-provided partner names and assets, not invented references to the source design.
- Provide accessible alt text for every logo, such as “Partner name logo.”
- Normalize optical size rather than geometric size: wide wordmarks may be shorter, compact marks may be slightly larger.
- Keep enough whitespace around symbols and wordmarks so neighbouring cells never appear crowded.
- If logos are links, give each cell a clear hover and focus treatment without changing the grid’s dimensions.

## Interaction and accessibility
- Make the CTA visibly interactive with a subtle hover colour shift, slight shadow or translation, and a strong keyboard focus ring.
- For linked logos, use a restrained hover state such as opacity change, a small contrast increase, or a subtle background tint. Avoid dramatic animations.
- Respect `prefers-reduced-motion` and keep transitions short, around 150–220ms.
- Use semantic section markup, a heading hierarchy, real links and buttons, and visible focus states.
- Maintain at least WCAG AA contrast for all text and controls.

## Never
- Never copy the reference page’s logos, product names, sponsor names, exact copy, or brand assets.
- Never use the reference site’s logo marks, illustrations, screenshots, or imagery.
- Never recreate the section as a pixel-for-pixel clone or preserve its exact content/order of sponsors.
- Never use a noisy masonry layout, excessive decoration, gradients, shadows, or oversized logos that undermine the editorial grid.
- Never hide important sponsor or partner information behind a carousel when a clear responsive grid works better.
