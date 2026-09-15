## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073962-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073922-full.webp
- Component on Kage: https://kage.design/component/mistral-hero

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the design principles below to create an original hero for my product—not a copy of the reference.

## Build this section
Create a desktop-first website hero with a compact global navigation above it and a bold, editorial content area beneath. The hero should feel confident, technical, tactile, and slightly unconventional, using a strict architectural grid rather than a conventional centered marketing layout.

### Layout and alignment
- Use a full-width page with a thin, fixed-height top navigation bar, approximately 48–52px tall.
- Divide the navigation into bordered cells: a small brand mark area at the far left, several primary navigation links, and action links aligned to the far right.
- Under the navigation, divide the hero into a large left column occupying roughly 70% of the width and a narrower right rail occupying roughly 30%.
- In the upper portion of the left column, place a very large two-line headline aligned to the left and anchored toward the lower edge of the panel. Give it generous breathing room rather than centering it vertically.
- Place a concise supporting paragraph in the upper portion of the right rail, aligned left and positioned low enough to visually balance the headline.
- Below the headline, use a bright abstract modular grid panel spanning the left column. Construct it from large rectangular blocks with visible grid lines and a small amount of tiny utilitarian labeling. The visual should be generated with CSS or simple HTML shapes, not an image.
- Continue the right rail below the supporting paragraph with a small vertical control or scroll cue, then a compact “featured” or “latest” content card near the bottom. This rail can remain visually quiet and information-dense.
- Preserve crisp vertical and horizontal alignments across the navigation, headline, grid, and right rail. On smaller screens, stack the rail below the main hero and reduce the headline size while retaining the asymmetry.

### Typography hierarchy
- Use a clean grotesk or modern sans-serif with tight, professional letterforms.
- Make the headline extremely large, approximately 88–104px on desktop, with a tight line-height around 0.9–1.0 and slightly negative tracking. It should dominate the page.
- Use a compact supporting paragraph at approximately 22–26px with a tight line-height around 1.05–1.15.
- Keep navigation labels, metadata, and feature-card labels around 13–16px.
- Use small uppercase or compact technical labels at 9–11px with modest tracking.
- Keep the copy short: one memorable statement, one clarifying sentence, and concise utility labels.

### Colour
- Use a warm off-white page background around #F7F7F5 or #F5F5F2.
- Use near-black text around #111111.
- Use very light neutral borders around #DDDDD8 or #E3E3DE.
- Make the lower visual panel highly saturated, combining vivid vermilion #F04412, orange-red #FF4B0B, signal red #E81408, deep crimson #C9002B, and amber #FF8A00.
- Keep the navigation and right rail mostly neutral so the colour grid becomes the visual focal point.
- Ensure text and borders maintain strong contrast and remain accessible.

### Borders, sizing, and surface treatment
- Use 1px solid borders to articulate the navigation cells, main column split, rail sections, and grid divisions.
- Keep corners square or nearly square, using 0–2px radius throughout; avoid soft cards and rounded SaaS styling.
- Use generous outer padding in the headline area, approximately 40–56px on desktop.
- Make the coloured grid feel physically assembled from rectangles of unequal widths and heights. Vary block sizes while keeping all edges snapped to a consistent underlying grid.
- The featured card may use a restrained 1px border and a small thumbnail-like abstract colour block, but avoid shadows.

### Interaction and motion
- Navigation links should have subtle background or colour changes on hover, with transitions around 150–200ms.
- The primary action may reveal a compact dropdown indicator or menu on click, but keep the interaction understated.
- The modular grid can have a very subtle block-level hover response—such as a small colour shift or opacity change—without becoming playful or distracting.
- The feature card should be clickable with a clear hover state and keyboard-visible focus ring.
- Any scroll cue should be decorative but accessible: provide an accessible label if it is interactive, and respect `prefers-reduced-motion`.

### Responsive behaviour
- At tablet widths, reduce the headline to approximately 64–78px and preserve the left/main versus right/rail relationship where space allows.
- At mobile widths, convert the navigation into a compact menu, stack the headline, supporting statement, visual grid, and featured content vertically, and use a headline size around 48–64px.
- Keep the grid dense and visually legible on mobile rather than shrinking it into a thin strip.
- Prevent horizontal overflow and maintain adequate tap targets of at least 44px.

## Never
- Never use the reference brand’s logo, product name, company name, or exact wording.
- Never copy the reference headline, supporting copy, navigation labels, article text, or feature names.
- Never reproduce the exact arrangement, dimensions, or colour sequence of the reference grid; create a new composition for the user’s product.
- Never use the reference’s illustrations, pixel characters, screenshots, photographs, or other imagery.
- Never turn the section into a generic centered hero, a rounded-card dashboard, or a soft gradient landing page.
- Never sacrifice semantic HTML, responsive behaviour, keyboard accessibility, or readable contrast for visual similarity.
