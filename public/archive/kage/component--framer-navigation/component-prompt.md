## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060389-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-navigation

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create a navigation header for that product—not a copy of the reference.

## Design the section
Build a single responsive top navigation bar for a modern software product.

### Layout and alignment
- Use a full-width header with a near-black background and a compact horizontal layout.
- Keep the content vertically centered in a bar approximately 64–72px tall.
- Align the main content to a consistent max-width container, with comfortable horizontal padding that scales from about 24px on desktop to 16px on mobile.
- Place the brand mark and brand name on the left as one grouped element.
- Follow it with the primary navigation links in a single row, using generous gaps rather than visible separators.
- Keep account access and the primary conversion action grouped on the far right.
- On smaller screens, collapse secondary navigation into a menu button while preserving the brand and primary action or account entry.

### Typography hierarchy
- Use a clean sans-serif UI typeface with a neutral, contemporary feel.
- Set the brand name and primary action at roughly 14–15px with medium weight.
- Set navigation links and account access at roughly 14px with regular-to-medium weight.
- Keep the hierarchy understated: the CTA should stand out primarily through contrast, not oversized type.
- Use normal line height and avoid all-caps labels unless they fit the user's brand.

### Colour
- Header background: near black, approximately `#050505` to `#0A0A0A`.
- Primary text: soft white, approximately `#F5F5F5`.
- Secondary navigation and account text: muted gray, approximately `#8E8E93` to `#A1A1A6`.
- Primary action surface: white or a brand-equivalent high-contrast colour, approximately `#F5F5F5`.
- Primary action text: near black, approximately `#111111`.
- Ensure text and controls meet accessible contrast requirements.

### Borders, radius, and surfaces
- Keep the header visually light: avoid heavy borders, shadows, or decorative panels.
- If a divider is needed, use a subtle one-pixel line around `#1D1D1F`.
- Give the primary action a pill-like or softly rounded radius of approximately 8–10px.
- Use a transparent or very dark surface for the navigation itself so the bar feels integrated with the page.

### Interaction and states
- Make the brand, navigation items, account entry, and CTA keyboard accessible.
- Add a restrained hover transition: secondary links can shift toward `#F5F5F5`, while the CTA can slightly darken or lift with a subtle shadow.
- Show a clear `:focus-visible` outline using the product's accent colour or a high-contrast light ring.
- For links with submenus, use a small chevron and reveal the menu on click or keyboard activation; do not rely only on hover.
- Keep the header usable when scrolling, using a sticky position only if it supports the product experience; if sticky, preserve the same quiet visual treatment.

### Responsive behaviour
- Prevent the navigation from becoming cramped by collapsing links before they overlap the account controls.
- On mobile, use a compact menu trigger with a clear accessible label and an animated disclosure panel.
- Maintain touch targets of at least 44px, even if the visible labels are smaller.

## Never
- Never use the reference product's logo, wordmark, product name, navigation labels, or exact copy.
- Never reproduce the reference brand mark or any distinctive icon silhouette; create a neutral or user-provided brand treatment instead.
- Never copy the exact spacing, proportions, colors, or pixel arrangement as a fixed design.
- Never include illustrations or imagery from the reference.
- Never assume the user's product needs the same number of links, submenu structure, authentication actions, or CTA wording.
