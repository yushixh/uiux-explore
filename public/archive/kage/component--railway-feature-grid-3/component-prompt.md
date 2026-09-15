## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060663-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060635-full.webp
- Component on Kage: https://kage.design/component/railway-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what brand direction, colour palette, and tone they want. Then apply the principles below to create an original feature-grid section for their product—not a copy of the reference.

## Build this section
Create a full-width, dark product feature section that introduces one major capability, shows it through a large interface preview, and reinforces it with three supporting benefits.

### Layout and alignment
- Use a deep, atmospheric section background with a restrained editorial feel; the section may be taller than the viewport and should have generous vertical breathing room.
- Constrain the content to roughly 1120–1200px and align the text, product preview, benefit grid, and lower metadata row to the same left and right edges.
- Begin with a compact category pill or eyebrow, followed by a large left-aligned headline and a short supporting paragraph. Keep the copy block around 520–600px wide.
- Place a large dashboard or product UI preview beneath the introduction. It should span nearly the full content width, use a dark inset surface, and feel like a real working interface rather than a decorative card.
- Under the preview, use a three-column feature grid with equal-width columns and consistent gaps. Each item contains a small line icon, a short title, and a two-line description.
- Finish the component with a subtle divider and a small comparison, compatibility, or “alternative to” row. Keep this secondary content visually quiet.
- On small screens, stack the intro and benefit items, let the product preview scroll horizontally or scale carefully, and preserve readable chart labels without forcing the whole dashboard to shrink excessively.

### Typography hierarchy
- Use a refined serif or humanist display face for the main headline, approximately 34–48px on desktop with a tight 1.05–1.15 line height. Use the user’s brand typeface if available.
- Use a neutral sans-serif for eyebrow, body copy, interface labels, and benefit titles.
- Make the headline high contrast and slightly soft rather than aggressively bold. Supporting text should be 16–18px with a 1.45–1.6 line height and muted contrast.
- Keep benefit titles around 15–17px, medium or semibold; descriptions around 14–16px with relaxed line height.

### Colour and atmosphere
- Suggested base background: near-black plum or charcoal, approximately #111019 or #12131A.
- Suggested atmospheric panel tint: deep blue-green charcoal, approximately #172C2D or #193032, optionally fading into the base background.
- Use warm off-white for primary text, approximately #F1F0E9; muted text can use #9EA5A2 or #858C89.
- Use a restrained accent for pills, links, active states, or data series—such as soft green #79B89A, violet #7C4DFF, blue #4777D9, or amber #D6B55B—adapted to the user’s brand.
- Keep charts colourful enough to read but avoid rainbow styling. Use two to five coordinated series with low-opacity grid lines.

### Dashboard preview
- Build a convincing dark application surface with a thin border, approximately #30333A, and a 10–14px radius.
- Include a compact top navigation bar, a date/filter control, an action button, and a grid of six metric cards arranged three across by two down on desktop.
- Each card should have a concise metric title, faint horizontal rules or grid lines, axis labels, and a simple line, area, or stacked-bar chart. Use generated data with varied but believable patterns.
- Keep the dashboard UI subordinate to the section message: the chart preview should be detailed enough to communicate capability, but not so dense that it competes with the headline.
- Use subtle inner surfaces around #15151E or #181821, 1px separators, small radii around 5–8px, and restrained shadows rather than glossy effects.

### Borders, spacing, and decorative structure
- Use thin, low-contrast borders throughout: rgba(255,255,255,0.10–0.16).
- Use 24–32px outer card padding and 12–16px gaps inside the dashboard.
- Leave approximately 72–120px between the intro, preview, and supporting feature grid depending on viewport size.
- Optional: add a very subtle vertical guide line or timeline marker near the content edge to create continuity through the section. Keep it abstract and do not reproduce any recognizable reference ornament.
- Use large corner radii, around 14–18px, for the outer showcase panel; use smaller radii for controls and chart cards.

### Interaction and motion
- Make the category pill, “learn more” link, and dashboard controls visibly interactive with hover and focus states.
- On hover, links may brighten and shift an arrow a few pixels; buttons may gain a slightly brighter border or tinted background.
- Add restrained motion only where useful: chart lines can draw in on entry, cards can fade upward by a few pixels, and dashboard data can update subtly. Respect `prefers-reduced-motion`.
- Ensure keyboard focus is visible and colour contrast remains accessible.

## Never
- Never use the reference company’s logo, product name, interface labels, exact copy, or brand-specific navigation.
- Never reproduce the reference dashboard, chart data, iconography, decorative timeline, or layout as a pixel-for-pixel clone.
- Never copy the reference illustrations, imagery, screenshots, competitor names, or comparison marks.
- Never use the supplied product’s existing copy or branding unless the user explicitly provides and requests it; invent neutral, product-appropriate content instead.
- Never let decorative detail overpower the feature story or make the dashboard unusable on mobile.
