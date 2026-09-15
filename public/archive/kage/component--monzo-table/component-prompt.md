## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060822-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-table

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colour palette, and content structure they want. Then apply the principles below to create an original footer navigation section for that product—not a replica of this reference.

## Build a large, grouped footer navigation section
Create a footer that closes a marketing or product website with a calm, highly legible information architecture. It should support many destinations while still feeling spacious and intentional.

### Layout and alignment
- Use a full-width dark footer surface with a large rounded top-left and top-right corner radius, approximately `56–64px` on desktop.
- Keep the content inside a wide responsive container with generous horizontal padding: roughly `48–64px` on desktop, reducing to `24px` on small screens.
- Organise the main links into four evenly distributed columns on large screens. Align every column to the same top baseline.
- Use a fifth content group below the first column or as a separate row for lower-priority legal, privacy, and platform information. Let its position follow the product’s information hierarchy rather than forcing symmetry.
- Leave substantial vertical breathing room between the link groups and the footer’s lower controls. The bottom area can contain a centred locale/language selector and an optional oversized wordmark or typographic brand treatment.
- On tablet and mobile, collapse to two columns or a single column depending on available width. Preserve clear group separation and avoid tiny, horizontally scrolling link grids.
- Keep all link text left-aligned. Make multi-line labels wrap naturally with a comfortable line height.

### Typography hierarchy
- Use a modern sans-serif with a friendly, highly readable appearance; use the product’s existing typeface if one exists.
- Section headings should be bold and prominent, approximately `24–28px` on desktop with a tight line height around `1.1`.
- Links should be medium or semibold, approximately `16px`, with a line height around `1.45–1.6` so dense lists remain scannable.
- For long section headings, allow intentional wrapping rather than shrinking the type excessively.
- Use consistent heading-to-list spacing, around `16–22px`, and list-item spacing around `18–24px`.

### Colour and contrast
- Use a deep blue-black or similarly expressive brand-dark background, approximately `#102332` or adapt it to the user’s palette.
- Use warm white text for headings and links, approximately `#F7F7F2`, rather than pure white where appropriate.
- If links need a secondary state, use a muted cool grey such as `#B8C4CC`, while preserving WCAG-compliant contrast.
- A locale selector may use a subtly lighter slate pill, approximately `#435464`, with light text and an optional accessible icon.
- Ensure keyboard focus indicators remain clearly visible against the dark surface; use a bright brand accent or a two-tone outline.

### Borders, radius, and surfaces
- Keep the primary footer visually clean with no heavy internal grid lines.
- Use the large rounded top corners as the defining container treatment; use smaller radii, around `999px`, for compact pills such as the locale selector.
- If a divider is needed near legal content, use a very subtle 1px line such as `rgba(255,255,255,.16)`.
- Avoid excessive cards or nested panels inside the footer; grouping should come from whitespace and typography.

### Interaction and accessibility
- Every destination should be a real, keyboard-focusable link with a generous hit area.
- On hover, use a restrained colour change, underline, or slight opacity shift; do not rely only on motion.
- Add visible `:focus-visible` styles with strong contrast and a sensible outline offset.
- Make the locale selector behave like a clear button or link, with an accessible label and an obvious expanded state if it opens a menu.
- Preserve logical reading order on mobile and ensure the footer works with screen readers and keyboard navigation.
- Respect reduced-motion preferences and avoid decorative animation that delays access to links.

### Responsive behaviour
- Desktop: four main navigation columns with generous gaps and a distinct lower control area.
- Tablet: reduce column gaps and use a two-column arrangement where necessary.
- Mobile: stack groups or use a carefully designed accordion only if the number of links makes the page excessively long. If using accordions, keep headings keyboard accessible and expose expanded/collapsed state.
- Keep the rounded top corners, but reduce them to roughly `32–40px` on narrow screens.

## Never
- Never copy the reference site’s logos, wordmarks, product names, link labels, brand-specific copy, or exact content hierarchy.
- Never use the reference site’s illustrations, imagery, flags, or other branded visual assets.
- Never reproduce the exact colours, dimensions, spacing values, or column arrangement if they do not suit the user’s product.
- Never make the footer a screenshot-like imitation; translate the underlying principles into the user’s own brand system.
- Never sacrifice contrast, keyboard access, responsive behaviour, or readable link grouping for visual similarity.
