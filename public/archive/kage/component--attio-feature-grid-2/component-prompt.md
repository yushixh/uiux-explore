## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060460-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction, typography, colour palette, and content they want to use. Then apply the principles below to create an original feature-grid section for that product—not a reproduction of the reference.

## Goal
Build a dark, editorial feature-grid section that presents several product capabilities as a sequence of large, quiet panels. The section should feel premium, technical, and spacious, with a clear split between explanatory content and an area reserved for product visuals, demos, diagrams, or generated UI.

## Structure and layout
- Use a full-width section with a near-black background and a thin, low-contrast grid system.
- Organise the content as three vertically connected feature areas:
  1. A two-column feature panel with explanatory content on the left and a large visual canvas on the right.
  2. A centred ecosystem or integration panel with a headline, supporting text, CTA, and a horizontal row of capability tiles or integration placeholders.
  3. A lower two-column developer/platform panel with copy on the left and an abstract product or technical visual area on the right.
- Keep the primary content inside a centred max-width container of roughly 1180–1280px, while allowing borders and background treatments to extend to the viewport edges.
- Use visible vertical and horizontal rules to define the columns and panel boundaries. The rules should be subtle rather than decorative.
- In the first panel, make the left column approximately 50% of the content width and reserve the right half for a large, mostly empty visual stage. On desktop, the copy should sit toward the upper third while the feature selector sits low in the same column.
- In the centred panel, create generous vertical space around the heading. Place a row of evenly sized rounded tiles near the lower half of the panel. The tiles should feel like a system of connected capabilities, not ordinary cards.
- On smaller screens, collapse each two-column panel into one column, move the visual stage below the copy, and make the tile row horizontally scrollable or wrap neatly without causing overflow.

## Alignment and spacing
- Use a consistent outer gutter of 24–32px on desktop and 16–20px on mobile.
- Use generous panel heights: approximately 560–760px for the split panels and 560–700px for the centred panel, adjusting to the amount of content.
- Align labels, headings, body copy, buttons, and selectors to the same left edge.
- Keep the main heading measure tight—roughly 12–18 words or 420–560px—so it wraps into two or three deliberate lines.
- Use spacing steps based on 8px: 8, 12, 16, 24, 32, 48, 64, and 96px.
- Separate the main heading from its eyebrow by 24–32px, and the CTA from the heading block by 28–40px.
- Keep secondary navigation items vertically spaced with 20–28px between rows.

## Typography
- Use a clean modern sans-serif with a technical, contemporary feel. Use the product’s own typeface if available.
- Main split-panel headings: approximately 40–48px desktop, 32–38px mobile, with a 0.98–1.05 line-height and slight negative tracking.
- Centred panel headline: approximately 40–44px desktop, 32–36px mobile.
- Use bright off-white for the most important phrase and a cool muted grey for the continuation or supporting phrase. This creates a controlled emphasis within a single headline.
- Eyebrows and category labels should be 13–14px, medium weight, and compact.
- Body copy should be 15–17px with a 1.4–1.55 line-height and a restrained grey colour.
- Feature selector labels should be 16–18px; the selected item may include a short description while inactive items remain single-line labels.
- Buttons should use 12–14px text with medium weight and compact horizontal padding.

## Colour
Use approximate values, adapting them to the user’s brand:
- Page background: #0D0E0F or #101112.
- Panel background: #101112 to #141516.
- Primary text: #F2F3F4.
- Secondary text: #858A96 or #9296A1.
- Grid and divider lines: rgba(210, 220, 235, 0.14), with some lines reduced to 0.08 opacity.
- Tile background: #1A1C1F or #202225.
- Tile border: rgba(255, 255, 255, 0.08).
- Eyebrow background: a dark desaturated indigo such as #17233B; eyebrow text: #B9C8E8.
- CTA background: transparent or #151719; CTA border: rgba(255, 255, 255, 0.18); CTA text: #E6E8EB.
- Do not use bright gradients or saturated colour blocks; keep emphasis tonal and atmospheric.

## Borders, radius, and visual texture
- Use 1px dividers and a thin outer frame where the section meets adjacent content.
- Keep large panel corners square or very subtly rounded, around 0–4px, so the grid feels architectural.
- Use 10–14px radius for compact buttons and eyebrow pills.
- Use 18–24px radius for capability tiles, with a soft inner highlight or faint shadow.
- Add a barely visible technical texture to visual stages—fine vertical lines, a sparse dot/grid pattern, or low-opacity geometric traces. Keep it subtle enough that text remains dominant.
- Visual canvases should feel intentionally spacious; do not fill every empty area with decoration.

## Interaction
- Make the feature labels interactive tabs or accordion controls. The active item should reveal its supporting description and use brighter text; inactive items should remain muted.
- On tab change, update the adjacent visual canvas with a short fade or 180–240ms opacity/transform transition. Avoid flashy animation.
- Buttons should have a restrained hover state: slightly brighter border, a small arrow shift of 2–4px, and a minor text-colour lift.
- Capability tiles can lift 2–4px on hover and brighten their border. If they represent integrations, make them keyboard-focusable and provide accessible names.
- Respect reduced-motion preferences and ensure all controls have visible focus states.

## Responsive behaviour and accessibility
- Preserve the visual hierarchy on mobile: eyebrow, headline, supporting copy, CTA, then feature controls and visual stage.
- Keep contrast high enough for readable text and focus indicators.
- Use semantic headings, buttons for tabs, and `aria-selected`/tabpanel relationships where appropriate.
- Do not rely on colour alone to communicate the active feature.

## Never
- Never copy the reference’s logos, product names, brand names, exact copy, or integration marks.
- Never reuse its illustrations, screenshots, geometric artwork, or imagery.
- Never reproduce the reference layout pixel-for-pixel; adapt the principles to the user’s product and brand.
- Never use placeholder logos that resemble real companies.
- Never overcrowd the visual stages, add noisy gradients, or sacrifice readability for decorative grid lines.
