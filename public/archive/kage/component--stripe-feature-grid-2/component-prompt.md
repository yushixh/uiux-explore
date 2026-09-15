## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789067512-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Component on Kage: https://kage.design/component/stripe-feature-grid-2

# Before you start
Ask what the user's product does, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a responsive feature-grid section that presents a suite of related product capabilities as a coherent system. The section should feel premium, editorial, and product-led: a short introductory statement leads into a varied bento layout of cards, each making one capability concrete through an interface preview, diagram, or abstract visual treatment.

## Structure and layout
- Use a wide, light section with a centered content container and generous horizontal gutters: approximately 32px on mobile, 5–8vw on desktop, capped around 1200–1280px.
- Begin with a restrained logo or trust-mark strip only if it is relevant to the user's product; keep it separate from the feature grid with a subtle divider and generous vertical padding.
- Add an intro block above the cards. Align it to the left edge of the grid, with a large statement split into two tones: a dark, confident lead phrase followed by a muted explanatory phrase. Keep the copy to roughly 2–3 lines on desktop.
- Use a 3-column CSS grid on desktop with 16px gaps. Create hierarchy through spanning rather than decoration:
  - one dominant lead card spanning two columns and roughly two rows;
  - two standard cards alongside or below it;
  - a row of three equal cards;
  - one wide card spanning two columns near the bottom.
- Do not force the exact reference arrangement if the user's content needs a different rhythm. Preserve the principle of alternating large, medium, and wide modules with a clear reading order.
- On tablet, collapse to two columns while retaining one featured card spanning both columns. On mobile, use one column and let every card become a natural-height block; keep the featured card first.
- Cards should share aligned outer edges, consistent gutters, and a calm vertical rhythm. Avoid masonry layouts that make scanning unpredictable.

## Card design
- Give every card a very light surface, typically `#FFFFFF` or `#FCFCFD`, with a 1px border around `#E5E7EB` and a subtle shadow such as `0 4px 18px rgba(15, 23, 42, 0.04)`.
- Use medium corner rounding, approximately 8–12px. Keep the page background close to white, such as `#FAFAFB`, so the card boundaries remain visible without looking heavy.
- Place a concise capability heading in the upper-left of each card. Use sentence case, a maximum of two or three lines, and avoid paragraph-length descriptions.
- Include a small square affordance in the upper-right, around 32–36px, with a pale tinted background and a minimal expand, arrow, or chevron icon. It should communicate that the card can be explored without competing with the heading.
- Keep card headings and controls aligned consistently, even when visual previews vary in height.
- Make cards feel like windows into the product: use simplified, believable UI fragments such as checkout panels, tables, charts, mobile screens, maps, cards, or conversational panels. Use realistic hierarchy and spacing, but keep previews clearly illustrative and subordinate to the card title.

## Visual language
- Use a dark navy/ink primary text colour around `#102333` or adapt it to the user's brand. Use a cool slate secondary colour around `#64748B`.
- Reserve saturated colour for product previews and atmospheric backgrounds. A useful starting palette is violet `#6D5CE7`, magenta `#D946EF`, coral `#FF9B72`, warm yellow `#FFD166`, and sky blue `#8CCBFF`; adjust or replace these to suit the user's brand.
- Build abstract backgrounds from broad, soft gradients and blurred colour fields rather than literal illustrations. Keep the centre of UI previews mostly light so text and controls remain legible.
- Use fine separators, compact labels, small radii, and restrained contrast inside mock interfaces. Product UI should look credible at a glance without becoming a fully functional duplicate.
- Typography should be modern and highly legible: a clean sans-serif, large intro text around 34–52px with a line-height of 0.98–1.08, card headings around 24–28px with a line-height near 1.05, and UI labels around 10–14px. Use regular or medium weights rather than overly bold display text.
- Apply responsive type scaling with `clamp()` and maintain strong contrast: at least 4.5:1 for normal text.

## Spacing and composition
- Use approximately 24px card padding on desktop and 20px on mobile. Give the intro 56–96px of bottom space before the grid.
- Let the visual preview occupy most of the card's lower area. Avoid crowding the heading against the artwork; use 32–64px of breathing room where appropriate.
- Allow oversized previews to crop or extend toward card edges when that creates energy, but clip them cleanly with the card's radius.
- Balance visual density across the grid: a detailed lead preview can sit next to quieter cards with one dominant object or a simple chart.
- After the grid, leave generous whitespace before the next section so the feature set feels like a complete narrative chapter.

## Interaction and accessibility
- Make each card a clear interactive target if it leads to a detail page. The whole card should be keyboard-focusable, with a visible focus ring in the product's accent colour.
- On hover, slightly raise the card (`translateY(-2px)`), deepen the shadow, and shift the corner affordance or icon subtly. Use a 160–220ms ease-out transition and respect `prefers-reduced-motion`.
- Keep hover effects understated; the visual previews should not constantly animate. If using chart motion or gradient movement, trigger it only on interaction and provide a reduced-motion alternative.
- Use semantic headings in a logical hierarchy, meaningful accessible names for cards, and decorative gradients marked as non-content.
- Ensure the layout works from 320px wide upward, with no horizontal overflow and no critical text embedded only inside images.

## Implementation guidance
- Prefer CSS Grid with explicit spans for the desktop composition and media queries for tablet/mobile changes.
- Build the card as a reusable component with variants for `featured`, `standard`, and `wide` rather than hard-coding every tile.
- Use CSS gradients, lightweight SVG shapes, and HTML/CSS UI mockups where possible. Optimise any real assets and lazy-load below-the-fold media.
- Keep the section's content model data-driven so the user can reorder cards, change titles, and swap previews without rewriting layout code.

## Never
- Never copy the reference's logos, product names, company names, or exact marketing copy.
- Never reuse the reference's illustrations, screenshots, maps, interface text, or imagery.
- Never reproduce the exact card arrangement, gradient artwork, icon treatment, or visual assets; reinterpret the underlying layout and hierarchy for the user's product.
- Never make the section dependent on inaccessible image-only text, hover-only information, or motion to understand the capabilities.
