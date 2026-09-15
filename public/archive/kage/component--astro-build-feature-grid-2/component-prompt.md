## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073852-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-feature-grid-2

## Before you start

Ask the user what their product does, who it is for, and what visual brand they want to use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section

Create a dark, high-density feature section that presents a product’s capabilities as a responsive bento-style grid. The section should feel polished, technical, and editorial, with a short intro followed by cards of deliberately varied sizes and visual treatments.

### Layout and alignment

- Use a very dark navy-black page background, approximately `#050711` to `#080A14`.
- Center the section in a max-width container of roughly `1180–1240px`, with generous horizontal padding that reduces smoothly on mobile.
- Begin with a compact intro block aligned to the left:
  - a small coloured eyebrow,
  - a large bold heading,
  - and a muted two-line description constrained to approximately `480–560px`.
- Leave a substantial vertical gap between the intro and the grid so the heading feels like a section marker rather than a card label.
- Use a three-column desktop grid with consistent gutters of approximately `14–18px`.
- Mix card spans and heights to create a bento rhythm:
  - a first row of three prominent cards with large visual areas,
  - a wide horizontal card paired with a narrower card,
  - several compact two-column rows,
  - and one or two tall cards that span multiple rows.
- Keep all card content aligned to a predictable internal padding system, approximately `24–26px` on desktop and `20px` on mobile.
- On tablet, collapse to two columns while preserving varied spans where practical. On small screens, use one column and let every card become a natural-height stack.
- Avoid excessive whitespace between cards; the grid should read as one cohesive system.

### Typography hierarchy

- Use a modern sans-serif with a slightly technical feel. Use a strong weight for headings and card titles, but keep body text relaxed and readable.
- Intro eyebrow: `14–16px`, bold, with a saturated accent colour.
- Main heading: approximately `32–38px`, line-height `1.05–1.15`, weight `700–800`.
- Intro description: approximately `16–18px`, line-height `1.45–1.6`, in a cool muted grey.
- Card titles: approximately `16px`, weight `650–750`, near-white.
- Card descriptions: approximately `16px`, line-height `1.45–1.55`, using a softer grey such as `#A4A8B8`.
- Keep text widths narrow enough that descriptions form comfortable short paragraphs rather than full-width lines.

### Colour, surfaces, borders, and radius

- Page background: `#060812`.
- Card surface: subtly lighter navy-black, approximately `#0B0E1A` or `#0D101D`.
- Card border: a thin, low-contrast cool border such as `rgba(155, 165, 205, 0.16)`.
- Card radius: approximately `14–16px`; use the same radius across the system.
- Primary text: `#F3F4F8`.
- Secondary text: `#A5A9B8`.
- Accent colours may use a restrained pink-to-purple or blue-to-violet range, for example `#E44F74`, `#B65AE8`, and `#5D8BFF`. Use accents for eyebrows, small highlights, glows, and statuses—not for large text blocks.
- Add very subtle inset highlights or radial glows inside visual cards, keeping contrast low enough that the text remains dominant.
- Avoid heavy shadows. If used, prefer a broad, nearly invisible shadow such as `0 18px 50px rgba(0,0,0,.18)`.

### Card composition and visual language

- Give the largest cards a generous visual stage above their text, roughly `190–250px` tall on desktop.
- Use abstract, product-relevant UI motifs generated with CSS or simple inline shapes: panels, grids, documents, code-like lines, framework nodes, image placeholders, folder trees, or transition frames.
- Visuals should be understated monochrome blue-grey with one controlled accent glow. They should suggest a capability without becoming illustrations.
- Text-led cards can omit a large visual and rely on strong spacing, clear hierarchy, and occasional small interface details near the bottom.
- Maintain a consistent visual baseline: cards should feel related even when their visual motifs differ.
- Use a few wide cards to create breathing room and a few compact cards to increase information density.
- Populate the section with generic capability categories appropriate to the user’s product. Do not reuse the reference’s names or copy.

### Interaction and responsiveness

- If cards are interactive, make the entire card keyboard-focusable with a visible focus ring using the current accent colour.
- On hover, use a restrained transition: slightly brighten the border, lift the card by `1–2px`, and increase the opacity of a background glow. Keep transitions around `180–240ms` with an ease-out curve.
- Do not make cards wobble, scale aggressively, or rely on hover alone to reveal essential information.
- Ensure long titles and descriptions wrap naturally without breaking the grid.
- Preserve accessible contrast, semantic heading order, visible keyboard focus, and reduced-motion support.

## Never

- Never copy the reference’s logos, product names, feature names, wording, or exact content.
- Never reuse its illustrations, icon marks, framework logos, screenshots, or imagery.
- Never reproduce the exact card ordering, dimensions, or decorative graphics; reinterpret the bento structure for the user’s product.
- Never use branded assets from the reference. Create neutral CSS-based visuals or original product-appropriate motifs instead.
- Never sacrifice readability for visual density or make the grid dependent on animation.
