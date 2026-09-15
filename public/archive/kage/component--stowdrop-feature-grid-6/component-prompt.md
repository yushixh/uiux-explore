## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067826-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-feature-grid-6

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Design the component
Build a dark, editorial FAQ section for a modern software product. The component should feel quiet, precise, and highly scannable while accommodating many questions in a compact vertical structure.

### Layout and alignment
- Use a very dark charcoal page background, approximately `#090A0A`, with the FAQ contained in a subtly lighter rounded panel around `#121415`.
- Constrain the content to a narrow reading measure, approximately `720–820px`, centered horizontally within the panel.
- Give the panel generous horizontal padding: about `clamp(24px, 8vw, 160px)` on large screens, reducing to `24px` on mobile.
- Place a large section heading above the list. It may be center-aligned or left-aligned depending on the product brand, but keep the question list aligned to one consistent vertical edge.
- Build the list as stacked full-width rows. Each row should have the question on the left and a compact expand/collapse control on the right.
- Separate rows with thin horizontal rules rather than individual cards. Keep the layout single-column and avoid unnecessary decoration.
- Ensure the component remains comfortable on mobile: questions may wrap, while the control stays aligned to the row’s top or center without causing horizontal overflow.

### Typography hierarchy
- Use a clean contemporary sans-serif or the product’s own brand typeface.
- Make the section heading oversized and confident, approximately `clamp(42px, 6vw, 76px)`, with tight line-height around `0.95–1.05` and slightly negative tracking.
- Set questions at approximately `17–20px`, medium or semibold weight, with a line-height around `1.35`.
- Set answers at approximately `15–17px`, regular weight, with a more relaxed `1.6` line-height and a readable maximum width.
- Use near-white for primary text, around `#F1F2F2`, and a muted cool gray for answers and secondary text, around `#A7ABAC`.

### Spacing, borders, and shape
- Leave generous space between the heading and the first row: approximately `56–88px`.
- Give each collapsed row `24–30px` of vertical padding; use `28–36px` when the question wraps on small screens.
- Use a subtle one-pixel divider around `#2A2D2E`, with enough contrast to establish rhythm without looking like a data table.
- Give the outer panel a large radius, approximately `28–40px`; keep individual rows unboxed.
- Use a small circular control around `24px` in diameter with a one-pixel border around `#5C6264`. The plus/minus icon should be thin and centered.

### Colour and active state
- Keep the overall palette restrained: charcoal background `#090A0A`, panel `#121415`, primary text `#F1F2F2`, muted text `#A7ABAC`, dividers `#2A2D2E`.
- Choose one warm brand accent for the active or close control, such as orange `#FF762F`; adapt it to the user’s brand if appropriate.
- The active row can use the accent for its control, while the answer remains understated so the content—not the decoration—gets emphasis.

### Interaction
- Make every row button-like and keyboard accessible, with a generous hit area across the full row.
- Clicking or pressing Enter/Space should expand one answer with a smooth height and opacity transition of roughly `180–240ms`.
- Rotate or morph the plus icon into a minus icon when open; do not rely on colour alone to communicate state.
- Decide whether multiple rows can remain open based on the product’s content needs; default to allowing multiple answers open if comparison is useful.
- Add visible focus styling, such as a two-pixel outline using the chosen accent with a small offset.
- Respect `prefers-reduced-motion` by removing height and opacity animation.
- Include semantic `button`, `aria-expanded`, and `aria-controls` attributes, and use a properly associated answer region.

## Never
- Never use the reference product’s logo, product name, brand name, or exact copy.
- Never copy the reference questions, answer text, contact details, or ordering verbatim.
- Never reuse its illustrations, screenshots, icons as branded assets, or imagery.
- Never reproduce the reference as a pixel-for-pixel clone; preserve only the reusable interaction, hierarchy, spacing logic, and dark FAQ-list pattern.
- Never sacrifice keyboard access, readable contrast, responsive wrapping, or reduced-motion support for visual similarity.
