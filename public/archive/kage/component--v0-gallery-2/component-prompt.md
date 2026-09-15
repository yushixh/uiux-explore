## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073272-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-gallery-2

## Before you start
Ask the user what their product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a featured project gallery section
Create a responsive gallery section for a software product, creative platform, marketplace, or community. The section should showcase a curated set of projects, templates, or work samples in a horizontally oriented card rail.

### Layout and alignment
- Place the section inside a wide page container with generous horizontal padding, roughly 48px on desktop and 20–24px on mobile.
- Use a single header row: a large, left-aligned section title and a compact right-aligned “browse all” style action with a subtle chevron or arrow.
- Keep the title and action vertically centered, with approximately 44–56px of space below the header before the cards begin.
- Use a horizontal, non-wrapping card rail. On desktop, show around three full cards plus a clearly visible slice of the next card at the viewport edge to signal that more content is available.
- On smaller screens, show one full card and part of the next card; allow touch scrolling and hide the scrollbar without removing keyboard accessibility.
- Each card consists of a tall visual preview followed immediately by a compact metadata row. Keep all cards aligned to the same top edge and use a consistent preview aspect ratio, approximately 0.64–0.72 width-to-height depending on the product’s content.
- Let the rail extend to or slightly beyond the page container edge while preserving a clean, intentional crop at the viewport boundary.

### Card structure
- Use large preview surfaces as the primary visual focus. Previews may contain product UI, editorial compositions, dashboards, websites, or other content appropriate to the user’s product.
- Give each preview a thin neutral border and a medium corner radius, around 10–12px. Clip all preview content to the radius.
- Keep the metadata outside the preview on the page background rather than overlaying it.
- Use a small circular avatar, creator mark, or category badge on the left, followed by a title and one or two muted engagement or attribution details.
- Truncate long titles gracefully and keep metadata to one compact line where possible. Use a second line only when it improves clarity.
- Make the whole card or preview an interactive link. Add a restrained hover treatment such as a slight lift, stronger border, or subtle shadow; avoid dramatic scaling that disrupts the rail.

### Typography
- Use the product’s brand typeface if available; otherwise use a modern sans-serif system stack.
- Set the section title in a bold, compact display style around 30–34px on desktop, with tight line-height near 1.05 and slight negative tracking. Scale to roughly 24–28px on mobile.
- Use 14–16px medium text for card titles and 12–13px regular text for supporting metadata.
- Make the browse action 13–14px with medium weight. Keep hierarchy clear through weight and tone rather than excessive font sizes.

### Colour and visual tone
- Start with a very light neutral page background, approximately #FAFAFA or #FFFFFF, and near-black primary text around #171717.
- Use muted secondary text around #737373 and subtle borders around #E5E5E5.
- Let each preview preserve its own distinct palette; the surrounding gallery chrome should remain quiet so the work is the focus.
- If the product has a stronger brand colour, use it sparingly for avatars, category marks, focus states, and selected interaction states rather than tinting every card.

### Spacing, borders, and radius
- Use a 24–32px gap between the section title and browse action when space permits.
- Set the horizontal gap between preview cards around 16px on desktop and 12px on mobile.
- Place metadata about 8–10px below each preview, with a 10–14px gap between the avatar and text block.
- Use 1px borders with approximately #E1E1E1 and 10–12px preview radii. Keep avatar and badge shapes circular where appropriate.
- Avoid heavy shadows by default; if used, keep them soft and low contrast, such as 0 4px 16px rgba(0,0,0,0.06).

### Interaction and accessibility
- Make the browse action visibly clickable and include a clear focus ring.
- Support mouse wheel/trackpad, touch, keyboard focus, and optional previous/next controls when the rail contains more items than fit on screen.
- Do not rely on hover to reveal essential information.
- Ensure card links, controls, and text meet accessible contrast requirements, and provide meaningful accessible names for previews and avatars.
- Use responsive image loading, fixed preview dimensions or aspect-ratio containers, and object-fit behavior to prevent layout shift.

### Content behavior
- Populate the gallery with believable, varied project entries relevant to the user’s product, but keep the copy concise.
- Design for at least six items so the horizontal browsing behavior is obvious.
- Preserve consistent card dimensions even when preview content has radically different visual styles.

## Never
- Never use logos, product names, copy, illustrations, imagery, avatars, or project content from the reference.
- Never reproduce the reference gallery’s exact card artwork, text, branding, or asset arrangement.
- Never make the rail feel like a dense dashboard or a grid unless the user explicitly asks for that pattern.
- Never hide overflow in a way that prevents users from discovering or reaching additional cards.
- Never sacrifice responsive behavior or keyboard accessibility for the visual effect.
