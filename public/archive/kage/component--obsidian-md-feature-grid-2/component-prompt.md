## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060833-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-feature-grid-2

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a feature-grid section for my product—not a copy of the reference.

## Goal
Build a dark, editorial feature-grid section that introduces several capabilities through short explanations and cropped product demonstrations. The section should feel like a set of focused product stories: clear enough to scan, visually rich enough to reward exploration, and consistent enough to read as one system.

## Design language

### Layout and alignment
- Use a centered content container with a maximum width of approximately `1120–1200px` and generous horizontal breathing room.
- Begin with an introductory block aligned to the same left edge as the grid. Keep it relatively narrow, around `620–700px`, so the heading and paragraph form a readable editorial measure.
- Use a two-column grid on desktop with equal-width cards and a gap of approximately `24px`.
- Stack cards into one column below roughly `760px`; preserve the same reading order and make each card’s demonstration shorter on small screens.
- Each feature card should have two zones: an upper text area and a lower visual/demo area. Give the text zone a consistent minimum height so adjacent cards align even when copy lengths differ.
- Keep all card content aligned to a shared inner padding, approximately `24px` desktop and `20px` mobile.
- Let demonstrations extend to the card edges or sit inside a subtly inset frame, but use the same treatment consistently across the grid.

### Typography hierarchy
- Use a large, bold section heading around `48–56px` with tight line-height around `1.05–1.1`; reduce to `36–42px` on mobile.
- Use a supporting paragraph around `22–26px`, with a relaxed line-height of `1.25–1.35` and a constrained width.
- Feature titles should be prominent but compact: approximately `24–28px`, semibold or bold, with line-height near `1.15`.
- Feature descriptions should be around `18–20px`, with line-height around `1.3–1.4` and a softer contrast than the title.
- Use occasional inline links with a brand-accent colour and a visible hover transition; keep link styling restrained rather than decorative.
- Prefer a clean sans-serif system or brand font. Avoid excessive font weights and avoid all-caps labels unless the product’s brand specifically calls for them.

### Colour
- Use a near-black page background, approximately `#101010` or `#0D0D0D`.
- Use slightly lighter charcoal cards, approximately `#202020`, to establish a quiet surface hierarchy.
- Use very dark demo panels, approximately `#171717`, so interface previews feel embedded within the cards.
- Use warm off-white for primary text, approximately `#F1F1F1`.
- Use muted grey for supporting text, approximately `#B8B8B8`.
- Use a single brand accent for links, active states, highlights, or small interface details. Choose the accent from the user’s product brand rather than assuming purple.
- Keep contrast accessible: body text should remain readable against both the page and card surfaces.

### Borders, radius, and depth
- Add a subtle one-pixel border around cards, approximately `rgba(255,255,255,0.10)`.
- Use a restrained corner radius around `10–14px`; keep the card silhouette soft but not pill-like.
- Avoid heavy shadows. If separation is needed, use a very faint shadow or rely on the difference between page and card surfaces.
- Make the demo area share the card’s lower corners, clipping overflow so screenshots, diagrams, or UI mockups do not spill outside the card.

### Product demonstrations
- Give every card a distinct visual treatment that explains the feature: for example, a document snippet with an autocomplete popover, a node-and-edge relationship map, a spatial canvas, or a settings/list interface.
- Demonstrations should look like believable fragments of the user’s product, not generic decorative placeholders.
- Use layered panels, thin dividers, small labels, restrained highlights, and realistic density to communicate software functionality.
- Keep visual details subordinate to the card title and description; the demo is evidence of the feature, not a separate hero.
- Crop or mask complex demonstrations so the grid remains tidy and the user can understand the concept at a glance.
- If the product has no existing visual language, establish one consistently across all demos: same panel colour, border treatment, typography scale, and accent behaviour.

### Interaction
- Make cards subtly responsive to hover or focus with a small border-colour shift, slight surface lift, or gentle demo emphasis. Do not use dramatic scaling.
- Links should visibly change colour or underline on hover and have clear keyboard focus states.
- If a card is clickable, make the entire card or a clearly defined action target clickable—not an ambiguous mixture—and provide an accessible label.
- Respect reduced-motion preferences and ensure the section works fully without animation.

### Spacing and rhythm
- Separate the intro from the grid by approximately `56–80px`.
- Use `24px` between grid columns and rows on desktop; use `16–20px` on mobile.
- Give the section generous vertical padding, approximately `96–128px` desktop and `64–80px` mobile.
- Keep text blocks compact enough that the visual demonstrations begin at a predictable vertical position.

### Accessibility and implementation
- Use semantic section, heading, paragraph, and list/card structure.
- Preserve a logical heading hierarchy and readable text contrast.
- Provide meaningful accessible names for interactive demos and links.
- Ensure responsive behaviour does not require horizontal scrolling.
- Build the section from reusable data-driven feature-card components so the user can add, remove, or reorder features easily.

## Never
- Never use logos, product names, or branded copy from the reference.
- Never reproduce the reference’s exact feature titles, descriptions, screenshots, diagrams, interface labels, or content.
- Never copy illustrations, imagery, portraits, graph structures, or visual assets from the reference.
- Never assume the user’s product uses the reference’s dark palette, purple accent, typography, or exact dimensions; adapt the system to the user’s brand.
- Never make the demos purely decorative if a believable product-specific interface fragment can communicate the feature more clearly.
