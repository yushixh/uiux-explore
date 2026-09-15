## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060391-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-gallery-2

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a version for my product—not a copy of the reference.

## Build this component
Create a responsive product-surface gallery: a three-column grid of related offerings, tools, or product capabilities. Each card should have a visual preview area above a compact information and action area below. The component should feel like a technical product catalog embedded in a larger marketing page.

### Layout and alignment
- Use a centered content container with a maximum width of approximately 1130–1180px.
- On desktop, use three equal columns with shared vertical rules and no large gaps between cards; let the borders define the grid.
- Give each card a preview region around 315–350px tall, with the preview centered both horizontally and vertically and generous whitespace around it.
- Place the title, description, and action area in a consistent lower panel. Align all text to the same left inset, approximately 18–20px.
- Keep the card bottoms aligned even when descriptions have different lengths. Use a flexible content stack or fixed minimum heights for the lower panels.
- On tablet, switch to two columns; on mobile, stack cards into one column while preserving the visual order.
- If this section sits above another section, leave a clear vertical separation of roughly 110–130px and align the next section to the same outer container.

### Background and visual texture
- Use a very light cool off-white background, approximately `#f8f8fc` or `#f7f7fb`.
- Add a restrained graph-paper texture: thin vertical and horizontal lines in approximately `#e7e7ed`, spaced about 74–80px apart, with occasional tiny square or dot marks. Keep the texture subtle enough that previews and text remain dominant.
- The grid borders should be slightly darker than the background texture, approximately `#d6d6dc`.

### Preview region
- Treat each preview as a framed product screenshot or UI mockup, but generate content appropriate to the user's product.
- Use a consistent aspect ratio, approximately 1.65:1 to 1.85:1, with a width around 78–84% of the card.
- Add a very subtle shadow such as `0 3px 8px rgba(20,20,30,.12)` and a thin neutral edge. Use a small radius of 2–4px, not a soft consumer-app card radius.
- Vary the preview themes when useful—light analytics surface, dark editor, terminal-like interface—but keep them unified through scale and placement.
- Preview content should be legible only as a visual cue; do not rely on it for essential information.

### Typography hierarchy
- Use a compact technical sans-serif or a clean monospace family for labels and supporting copy, depending on the user's brand. A good default pairing is a geometric sans for headings and a monospace for card metadata and descriptions.
- Card titles should be approximately 14–16px, semibold, with tight line height around 1.25.
- Descriptions should be approximately 13–14px, with a 1.45–1.55 line height and muted dark-gray color `#686871`.
- Use modest letter spacing and sentence case. Avoid oversized marketing headlines inside the cards.
- If a heading introduces the gallery or a following section, use a stronger 25–30px heading with a dense, confident rhythm.

### Card content and actions
- Give every card a short title, one or two lines of explanatory copy, and exactly one primary action pattern.
- For high-intent actions, use a full-width dark button in the lower panel: near-black purple-gray `#1d1924` or an equivalent brand color, white text, 13–14px semibold type, and a height of about 40px.
- For command or install-style actions, use a bordered input-like code row instead of a button. Use a white or near-white fill, a 1px border around `#d2d2d6`, monospace text, and a small copy affordance on the right.
- Add secondary environment or compatibility metadata below a code row using muted text and small separators; make it clearly secondary to the command.
- Use consistent vertical spacing: approximately 18–20px top padding, 10–12px between title and description, and 16–18px before the action.

### Borders, radius, and interaction
- Use 1px solid borders with square or nearly square corners, generally `border-radius: 0–3px`.
- Keep the visual language engineered and modular rather than elevated and pill-shaped.
- On hover, slightly brighten or tint the preview frame, raise it by 1–2px, and transition the shadow and transform over 160–220ms.
- Dark buttons may shift to a slightly lighter tone on hover, such as `#2a2433`; maintain strong contrast and a visible keyboard focus ring.
- Code-row copy controls should provide a clear copied state, such as a checkmark and short status text, without changing the row's dimensions.
- Make the entire card or only the relevant action clickable according to the user's product semantics; do not create ambiguous nested links.
- Ensure keyboard focus is visible, touch targets are at least 44px where practical, and previews have meaningful accessible labels.

### Content behavior
- Use realistic, product-specific titles, descriptions, and interface previews supplied by the user's product.
- Preserve a balanced rhythm across cards: similar copy lengths, consistent action placement, and no card that feels visually heavier without a deliberate reason.
- If there are more than three items, consider a horizontal continuation or a second row, but keep the primary row visually dominant.

## Never
- Never reuse logos, product names, taglines, button labels, descriptions, code commands, or other copy from the reference.
- Never reproduce the reference's exact screenshots, UI content, illustrations, or imagery.
- Never assume the user's product is a terminal, developer tool, or software factory; adapt the component's content and preview surfaces to the user's product.
- Never use decorative imagery that competes with the product previews.
- Never turn every action into a pill, floating card, or generic rounded SaaS tile.
- Never hide essential information inside a screenshot or rely on hover alone to communicate an action.
