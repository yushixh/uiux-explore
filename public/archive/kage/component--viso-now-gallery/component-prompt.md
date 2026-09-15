## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/viso-now/0aea1f2c-e643-44c4-ac70-db26df0b3931-1789106575-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/viso-now/0aea1f2c-e643-44c4-ac70-db26df0b3931-1789106536289-full.webp
- Component on Kage: https://kage.design/component/viso-now-gallery

## Before you start
Ask the user what their product does, who it is for, and what brand direction they want to use. Then apply the principles below to create an original gallery section for that product rather than reproducing the reference.

## Build a template discovery gallery
Create a polished, responsive gallery section for a software product that showcases reusable workflows, use cases, projects, or templates. The section should feel like a curated library: visually rich, highly scannable, and calm rather than dashboard-like.

### Layout and alignment
- Use a mostly white or softly tinted background with generous vertical breathing room.
- Constrain the content to a centered max-width of approximately 1120–1200px.
- Add a small eyebrow label above the heading. Pair it with a tiny coloured circular accent, sized around 6–8px.
- Create a heading row: place a large section title on the left and a compact outlined browse button on the right. Align both to the lower edge or optical baseline of the row.
- Place the cards below with a consistent gap. Use four columns on wide screens, two columns on tablets, and one column on small screens. Let the grid collapse naturally without horizontal scrolling.
- Keep all card media the same aspect ratio, approximately 16:10 or 4:3, so the gallery reads as a coherent visual system.
- On mobile, stack the heading and CTA or allow the CTA to align beneath the heading with clear separation.

### Typography hierarchy
- Use a modern grotesk or system sans-serif with a clean, slightly editorial feel.
- Make the main heading bold and prominent, roughly 52–60px on desktop with tight line-height around 0.95–1.05; scale to roughly 36–44px on mobile.
- Set the eyebrow in uppercase, small 11–12px text with increased letter spacing and muted contrast.
- Use card titles at approximately 15–16px, medium or semibold weight, with a compact line-height.
- Use card descriptions at approximately 14–15px, regular weight, with a relaxed 1.3–1.45 line-height and a softer grey colour.
- Keep titles to one or two lines and descriptions short enough to preserve a consistent rhythm across rows.

### Colour
- Start with a near-white page background such as `#FFFFFF` or `#FCFCFB`.
- Use near-black for the heading and card titles, approximately `#090909` or `#171717`.
- Use a neutral grey for supporting copy, approximately `#707070` to `#858585`.
- Use a very subtle border grey such as `#ECECEC` for the CTA and any supporting dividers.
- Choose one brand accent for the eyebrow dot and optional interactive states; a vivid pink-magenta around `#D84CB3` can work, but adapt it to the user's brand.
- Keep imagery visually varied but avoid letting saturated thumbnails overpower the typography.

### Borders, radius, and media
- Give thumbnail images a medium rounded corner, approximately 9–12px.
- Use `object-fit: cover` and preserve a consistent crop across every card.
- Add a faint border or very soft shadow around media only when needed to separate it from the background; avoid heavy elevation.
- Make the browse button pill-like with a 999px radius, approximately 12–16px horizontal padding, a 1px light border, and a compact arrow or directional affordance.
- Keep card text outside the image with a small top gap, around 9–12px.

### Interaction
- Make the entire card discoverable as a link or button, not just the title.
- On hover, use a restrained image scale of about 1.02–1.04 inside an overflow-hidden frame, or introduce a subtle border/shadow change. Keep the transition around 180–240ms.
- Ensure keyboard focus is clearly visible with a high-contrast outline or accent-coloured ring.
- The browse CTA should have a subtle background or border transition on hover and a clear pressed state.
- Preserve readable text and usable tap targets on touch devices; do not rely on hover to reveal essential information.

### Content and accessibility
- Use realistic, product-specific titles and one-sentence descriptions generated for the user's product, not generic filler.
- Provide meaningful alt text for each thumbnail and semantic heading structure.
- If the gallery is longer than the visible set, make the browse CTA lead to a complete gallery or expose a clearly labelled expansion state.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never recreate the exact card titles, descriptions, thumbnails, or brand language shown in the reference.
- Never make the grid feel cramped, use inconsistent image ratios, or add decorative effects that compete with the gallery content.
- Never hide essential card information behind hover-only interactions.
