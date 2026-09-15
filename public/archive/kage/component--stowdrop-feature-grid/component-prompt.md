## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067822-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-feature-grid

## Before you start
Ask what the user's product does, who it is for, and what visual brand it uses. Then apply the principles below to that product rather than copying the reference.

## Build an editorial workflow feature section
Create a dark, spacious feature section that explains how the product transforms a simple input into a useful result. The section should feel like a calm editorial interlude: a small overline establishes context, a large statement communicates the benefit, a supporting paragraph adds clarity, and a diagram makes the underlying workflow tangible.

### Layout and alignment
- Use a centered, wide container with a maximum width around 1180–1240px and generous horizontal padding of 32–56px.
- Begin with a thin horizontal divider and a small uppercase overline aligned to the left. Use the divider to extend from the overline toward the right edge.
- Place the main copy in a two-column row: a large headline on the left, roughly 42–48% of the row, and a supporting paragraph on the right, vertically aligned around the middle of the headline.
- Keep the headline compact, usually three or four lines, with a maximum measure around 440px. Keep the paragraph to roughly 360–500px so it remains easy to scan.
- Below the copy, add a wide diagram panel spanning the full container. Use a minimum height around 350px on desktop, with generous internal whitespace.
- Inside the panel, show a left-to-right process: an input card on the left, a central source or processing card, a vertical stack of three to four transformation cards, and a final output card on the right.
- Connect cards with subtle curved or angled lines. The lines should clarify flow but remain secondary to the cards.
- Add a small, understated monospace or letter-spaced caption centered beneath the diagram panel.
- On narrow screens, stack the headline and paragraph, then convert the diagram to a vertical or wrapped flow. Preserve the order and relationships without forcing tiny cards or horizontal overflow.

### Typography hierarchy
- Use a near-white sans-serif for the main headline, with a large responsive size around 48–64px, tight line-height around 0.95–1.05, and slight negative tracking.
- Use a muted gray sans-serif for supporting copy, around 16–18px with a line-height around 1.6.
- Set the overline in small uppercase text around 10–12px, with strong letter spacing around 0.22em and a warm accent colour.
- Card titles should be medium-weight, around 14–16px; card descriptions should be 11–13px with a muted colour.
- Use a compact monospace style for technical captions or metadata, around 10–12px, with low contrast.

### Colour and visual tone
- Use a near-black page background, approximately `#090A0A` or `#0B0B0C`.
- Use a slightly lighter near-black for the diagram panel, approximately `#0C0D0E`.
- Use warm off-white for the headline, approximately `#E8E9E8`.
- Use cool muted gray for body and card descriptions, approximately `#8C8D8E`.
- Use a restrained amber-orange accent, approximately `#E8753C`, for overlines and small functional icons.
- Keep connectors very subtle, around `#242627` or `rgba(150,150,150,0.18)`.
- Avoid gradients, bright fills, or excessive accent colour; the contrast should come primarily from typography and structure.

### Borders, cards, and spacing
- Give the diagram panel a 1px border around `#27292A` and a radius around 16–18px.
- Use dark charcoal cards around `#17191A`, with a 1px border around `#292B2C` and a radius around 11–13px.
- Cards should have compact but comfortable padding, approximately 14–18px horizontally and 12–15px vertically.
- Pair each card with a small line icon or abstract indicator on the left, using the accent colour sparingly.
- Let the central transformation stack be visually dominant through its vertical rhythm, not through brighter colours.
- Use large vertical gaps between the section heading, diagram, and caption—roughly 56–72px—so the feature feels intentional and unhurried.

### Interaction and motion
- If cards are interactive, use a restrained hover state: slightly brighter border, a subtle lift of 1–2px, and a small increase in icon brightness.
- If the diagram animates, reveal connectors and cards in flow order with a short, low-energy fade or draw animation. Do not make the section feel like a dashboard or game.
- Respect `prefers-reduced-motion` and keep all information available without animation.
- Ensure the section remains readable and structurally clear with JavaScript disabled.

### Never
- Never use logos, product names, brand marks, or copy from the reference.
- Never reproduce the reference’s exact wording, card labels, diagram labels, or workflow.
- Never use illustrations, screenshots, or imagery from the reference.
- Never copy the exact card positions, connector paths, proportions, or visual details; invent a workflow appropriate to the user's product.
- Never sacrifice responsive readability to preserve a desktop-only diagram.
