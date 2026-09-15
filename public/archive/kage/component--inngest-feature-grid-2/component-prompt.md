## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074883-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Component on Kage: https://kage.design/component/inngest-feature-grid-2

# Build a dark editorial feature-grid section

## Before you start
Ask the user what their product does, who it is for, and what their brand identity is (colours, type style, tone, and preferred framework). Then apply the principles below to their product rather than reproducing the reference literally. Use their product terminology and write original feature names and descriptions.

## Goal
Create a responsive website section that explains a product's core capabilities through a six-item feature grid. The section should feel like a premium developer-tool or infrastructure brand: confident, technical, quiet, and highly legible. It should work as a standalone section inside an existing page.

## Structure and layout
- Use a full-width near-black section with a subtle, low-contrast grain or tonal texture; provide a solid-colour fallback for accessibility and performance.
- Constrain content to a centered max-width of roughly 1200–1280px with generous horizontal gutters: about 32px on mobile, 48px on tablet, and 64–80px on desktop.
- Place a large introductory heading at the top, aligned to the same left edge as the grid. Keep it to one or two short lines on desktop and use an original message relevant to the user's product.
- Put a supporting paragraph below the heading, constrained to approximately 650–750px so it remains readable.
- Follow with a six-item grid: three columns by two rows on desktop, two columns on tablet, and one column on small screens.
- Do not put each feature inside a conventional raised card. Let the dark background remain visible between items; the rhythm should come from alignment, spacing, and typography.
- Each feature item should have: a small abstract technical glyph, a feature title, a two- or three-line description, and a compact text link with a directional arrow.
- Keep the first and second row aligned consistently. Use roughly 56–76px between columns and 60–84px between rows on desktop, reducing spacing progressively on smaller screens.
- Give the intro-to-grid transition generous breathing room, approximately 64–96px.

## Typography
- Use a modern grotesk or neutral sans-serif with excellent rendering at large sizes.
- The main heading should be uppercase or otherwise display-oriented, with a light-to-regular weight, generous tracking (around 0.01–0.03em), tight line-height around 0.95–1.1, and a desktop size around 52–64px. Scale down to about 38–44px on tablet and 30–36px on mobile.
- Feature titles should use sentence case, medium weight, around 25–30px on desktop and 21–24px on mobile, with a line-height near 1.15.
- Supporting copy should be muted, around 16–18px, with a 1.5–1.65 line-height and a comfortable maximum width.
- Feature descriptions should be around 15–16px, with a 1.5–1.65 line-height.
- Links should be uppercase or small-cap styled, around 13–14px, medium weight, with modest tracking around 0.02em.

## Colour and surface
- Use an approximate background of #151515 or #181818, with barely perceptible tonal variation toward #202020. Avoid obvious gradients.
- Use warm white for the heading and titles, approximately #F2F1EE or #F5F5F3.
- Use cool or warm grey for supporting text, approximately #A7A7A5, and a slightly brighter #C7C7C3 for links.
- Glyphs should be thin, low-contrast strokes around #777775 to #9A9A96; do not make them colourful or decorative.
- If adding a texture, keep contrast extremely low and ensure text contrast remains accessible. Respect reduced-motion and low-bandwidth preferences.

## Borders, radius, and icons
- Avoid large outlined card borders. If separation is needed on mobile, use a 1px border in approximately #2A2A2A or a very subtle divider.
- Keep the section and feature items square or minimally rounded; do not use pill-shaped containers.
- Create simple original glyphs with CSS, inline SVG, or a neutral icon library: examples include nodes, stacked layers, a queue, a calendar-like grid, or connected circles. They should be small, abstract, monochrome, and consistent in stroke weight.
- Keep glyphs above each title with roughly 22–28px of vertical separation. Do not use emoji.

## Interaction and accessibility
- Make each “learn more” link a real keyboard-focusable link with a meaningful destination and accessible label.
- Animate only subtle properties such as link colour, arrow translation, or opacity. On hover, brighten the link and move the arrow 3–5px to the right; do not cause layout shift.
- Provide a visible focus ring with sufficient contrast, such as a 2px warm-white or brand-colour outline with a 3px offset.
- Make the entire feature item optionally clickable only if that behaviour is clear; otherwise keep the link as the sole target.
- Ensure the grid collapses cleanly on mobile, text remains readable, and all interactive states work with keyboard navigation and reduced motion.

## Implementation notes
- Use semantic HTML: a section with a heading, an introductory paragraph, and a list of six feature items.
- Keep content data-driven so the user can easily replace feature names, descriptions, glyphs, and URLs.
- Do not depend on external image assets. If using texture or glyphs, generate them in CSS/SVG and keep them lightweight.
- Match the user's existing design tokens when available; the values above are starting points, not requirements.

## Never
- Never copy logos, product names, feature names, descriptions, or calls to action from the reference.
- Never use the reference's exact copy, typography pairing, icon drawings, or decorative texture.
- Never include illustrations, photography, screenshots, or imagery from the reference.
- Never present this as a literal clone of the source website.
- Never sacrifice contrast, responsive behaviour, semantic structure, or keyboard accessibility for visual similarity.
