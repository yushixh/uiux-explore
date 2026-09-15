## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060208-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060182-full.webp
- Component on Kage: https://kage.design/component/linear-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original feature-grid section for that product—not a replica of the reference.

## Build this section
Create a dark, premium product-marketing feature section that introduces one capability and previews it through a subtle interface visualization. The section should feel calm, technical, spacious, and editorial, with content carrying the hierarchy and the visual demo supporting it.

### Layout and alignment
- Use a near-black full-width canvas, approximately `#08090A` to `#0B0C0D`.
- Constrain the primary content to a centered max-width of roughly 1180–1280px, with generous horizontal padding that scales from 24px on mobile to 40–64px on desktop.
- Start with a thin horizontal divider across the viewport or content frame.
- Place the feature introduction in a two-column layout: a wide heading block on the left and a copy/action block on the right. Use approximately a 1:1.1 or 1:1.2 column ratio, with a 64–96px gap on desktop.
- Vertically center the two content blocks within a generous band, using roughly 128–160px top and bottom spacing on desktop.
- Below the copy, place a wide, cropped product visualization. Let it extend beyond or overlap the content frame slightly, but keep it subordinate through low opacity, gradients, and darkness.
- Add a compact secondary feature-navigation row near the bottom of the section. Use two groups separated by a thin vertical rule on desktop; stack or scroll the groups horizontally on small screens.
- On mobile, collapse the introduction to one column, place the description beneath the heading, and keep the visualization wide with horizontal overflow or a carefully cropped viewport rather than shrinking every detail.

### Typography hierarchy
- Use a modern neutral sans-serif with crisp rendering and modest tracking.
- Make the main heading large and tight: approximately 46–56px desktop, 36–42px mobile, 0.96–1.02 line-height, and slightly negative letter spacing. Break it across two lines when useful, but let the user's product language determine the wording.
- Set the supporting paragraph around 22–26px desktop and 18–21px mobile, with a 1.25–1.35 line-height and a comfortable maximum width of 520–600px.
- Use small navigation and utility labels around 13–15px, with relaxed line-height and muted contrast.
- Make the text link compact and quiet, around 14–16px, with a subtle arrow or directional indicator.

### Colour and contrast
- Use primary text around `#F2F3F5`, secondary copy around `#C3C6CC`, and utility text around `#777B84`.
- Use dividers and visualization grid lines around `#24272B` or `rgba(255,255,255,0.10)`.
- Keep the product visualization mostly monochrome: charcoal panels, muted grey labels, and faint grid lines.
- Introduce only one restrained data accent chosen for the user's brand. A cool teal/cyan around `#16A6B8` can be used for small points or highlights, with optional muted amber or coral accents around `#B58A4A` / `#A84D5B`.
- Apply a bottom and side fade using gradients into the page background so the visualization feels embedded rather than like a bright card.

### Borders, panels, and radius
- Use 1px hairline borders with low opacity; avoid heavy card outlines.
- Give the visualization panel a subtle dark translucent surface such as `rgba(255,255,255,0.035)` and a faint top border.
- Use restrained radii, approximately 8–12px on large visualization panels and 4–6px on small controls.
- Avoid shadows unless they are extremely soft and nearly invisible against the dark background.

### Visualization treatment
- Build an original abstract planning, analytics, workflow, or reporting interface relevant to the user's product.
- Combine faint vertical time/grid columns, thin horizontal guides, a few outlined bars or paths, and sparse clusters of small accent points.
- Keep labels minimal and low contrast. The visualization should be legible on close inspection but read from a distance as texture and evidence of product depth.
- Use layered panels or charts with slight overlap to create depth, while ensuring the main headline remains the strongest focal point.
- If animated, use slow opacity shifts, point drift, or line drawing with pauses; respect `prefers-reduced-motion` and never make the background distracting.

### Interaction
- Make the “learn more” or equivalent CTA visibly interactive with a subtle colour lift and arrow translation on hover/focus.
- Make secondary feature items keyboard accessible if they are links or tabs. Use an understated hover colour change rather than pills or large filled buttons.
- Preserve clear focus states using a thin, accessible outline in the brand accent.
- If the feature navigation changes the visualization, use a gentle crossfade or transform and keep the transition around 200–350ms.

### Responsive and accessibility requirements
- Maintain readable contrast for all meaningful text; decorative visualization elements may be low contrast.
- Provide meaningful text alternatives or an accessible summary for the visualization, and hide purely decorative chart layers from assistive technology.
- Ensure the layout works at narrow widths without clipping important copy or controls.
- Keep the section performant: prefer CSS/SVG or lightweight DOM shapes over large image assets.

## Never
- Never use logos, product names, or branded terminology from the reference.
- Never copy the reference’s exact headline, supporting copy, labels, navigation items, or CTA wording.
- Never reuse its illustrations, screenshots, charts, data points, imagery, or distinctive visual composition verbatim.
- Never assume the user's product is a project-management tool; adapt the content and visualization to their domain.
- Never turn the section into a generic bright dashboard, a dense card grid, or a high-contrast neon display.
