## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073867-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-feature-grid

# Build a responsive feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand personality, type style, and colour palette are. Then apply the principles below to my product rather than reproducing the reference literally. If I have no established brand, propose a restrained visual direction that fits the product.

## Goal
Create a polished feature showcase section for a software product or developer tool. The section should explain why the product is useful through a strong editorial layout and compact visual demonstrations. Make the content feel scannable, credible, and crafted—not like a generic collection of cards.

## Structure and layout
- Start with a generous section intro aligned to the same left edge as the grid.
- Use a small uppercase eyebrow with increased tracking, followed by a large, concise headline and a one- or two-line supporting paragraph.
- Place the feature cards inside a wide responsive grid with a subtle page-level grid or ruled background if it suits the brand.
- Use a 12-column desktop grid with varied spans: one prominent lead card spanning the full width, followed by two-column rows and, later, three-column cards.
- Keep gutters tight and consistent, approximately 8–16px between cards, with 24–48px outer padding depending on viewport width.
- Let card heights vary according to their demonstrations, but align rows cleanly and avoid excessive empty space.
- On medium screens, collapse wide compositions into two columns; on small screens, stack cards in a single column while preserving the lead card’s priority.
- Make each card a self-contained story: a compact visual or demo area, a title, and a short explanation.

## Card composition
- Use a white or near-white card surface against a very light grey page background.
- Give each card a generous top area for a thin line icon, abstract diagram, code preview, data visualisation, UI mockup, or other product-relevant demonstration.
- Position the icon or visual beside the title on larger cards, and above the title on compact cards when that improves readability.
- Reserve the lower or larger portion of each card for a believable, simplified product interaction—not decorative filler.
- Mix visual treatments across cards: responsive layouts, code blocks, colour systems, data tables, controls, timelines, or small UI previews. Each should communicate the feature in a few seconds.
- For the lead card, use a wide, detailed demo that can include labelled breakpoints, tabs, or a responsive preview. It should visibly carry more weight than the surrounding cards.

## Typography
- Use a modern sans-serif with a slightly technical, highly legible feel. Use the product’s brand font if available.
- Eyebrow: 11–13px, uppercase, semibold, letter spacing around 0.12em.
- Section heading: 40–56px desktop, tight line-height around 0.95–1.05; scale to 32–40px on mobile.
- Card titles: 22–28px for prominent cards and 18–22px for compact cards, with medium or semibold weight.
- Body copy: 15–17px, line-height around 1.55, in a softened dark grey rather than pure black.
- Code and technical labels: use a monospace face at 12–14px, with clear contrast and generous line spacing.
- Keep descriptions short—usually one or two sentences—and avoid dense paragraphs.

## Colour
- Page background: approximately #f7f7f6 or a similarly warm, almost-white neutral.
- Card surface: #ffffff.
- Primary text: #111318 or another near-black chosen from the brand.
- Secondary text: #5f636b.
- Fine grid lines and borders: #e5e7e8, with low contrast.
- Use one vivid accent colour for eyebrows, links, highlights, active states, and small demo details; a suitable starting point is magenta #d946a8, but adapt it to the user’s brand.
- For dark code or UI demos, use a deep navy/charcoal such as #111827, with restrained syntax accents rather than rainbow decoration.
- Maintain accessible contrast for all explanatory text and controls.

## Borders, surfaces, and radius
- Use 1px solid borders around cards and demo panels, generally #e4e5e7.
- Use a soft radius around 16–20px for outer cards and 8–12px for inner demo panels.
- Avoid heavy shadows. If separation is needed, use a very subtle shadow such as 0 2px 8px rgba(17, 24, 39, 0.04).
- Keep the visual language clean and slightly tactile: rounded white panels, crisp borders, and occasional inset backgrounds.
- Line icons should be simple, monochrome, and lightweight; create original abstract diagrams or CSS-built visuals rather than copying artwork.

## Interaction and responsive behaviour
- If cards are clickable, make the whole card a clear interactive target with a visible hover state: slightly darkened border, subtle lift, or an accent detail.
- Add a smooth 150–220ms transition for hover and focus states, but do not over-animate the grid.
- Ensure keyboard focus is obvious with a 2px accent outline or equivalent.
- Any tabs, sliders, toggles, or comparison controls inside demos should be functional where practical and should include accessible labels.
- Respect `prefers-reduced-motion` and disable nonessential movement when requested.
- Keep demo content clipped neatly within its panel; use horizontal scrolling only when it is meaningful for the product.

## Implementation guidance
- Build the section from reusable data-driven card components so features can be added or reordered easily.
- Use CSS Grid for the macro layout and CSS variables for colours, spacing, borders, and radii.
- Avoid relying on external images unless they are essential to the user’s product. Prefer CSS, inline SVG, HTML, and generated placeholder content for demos.
- Make the component production-ready: semantic headings, responsive behaviour, accessible contrast, keyboard support, and no layout shift.

## Never
- Never copy the reference’s logos, product names, feature names, exact copy, code samples, labels, or brand language.
- Never reuse its illustrations, icons, screenshots, photographs, or imagery; create original equivalents appropriate to my product.
- Never reproduce the exact card ordering, dimensions, demo content, or visual composition one-for-one.
- Never make every card identical when varied spans and demonstration types would improve hierarchy.
- Never use decorative visuals that do not help explain the feature.
- Never sacrifice readability, accessibility, or mobile usability for visual similarity.
