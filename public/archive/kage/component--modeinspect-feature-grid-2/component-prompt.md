## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106491-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-feature-grid-2

# Build an editorial feature-grid section

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, typography, and visual references are. Then apply the principles below to create a version for my product—not a copy of the reference.

## Goal
Create a feature section that explains several product capabilities through a confident intro and a structured, asymmetric card grid. The section should feel like a thoughtful product manifesto: quiet, precise, spacious, and grounded in real interface behaviour. Use the user's actual product concepts and vocabulary in the final copy.

## Layout and alignment
- Use a warm, lightly tinted page background and a centered content wrapper with a maximum width around 1120–1200px.
- Begin with a generous top offset, then place a left-aligned heading and supporting paragraph above the grid.
- Make the grid three columns on desktop with consistent gutters of roughly 20–24px.
- Use cards of different heights to create a controlled bento/editorial rhythm. The first card may span two rows, while the remaining cards occupy one grid cell each.
- Keep all card content aligned to the same inner left edge. Use a small numbered index and a thin horizontal rule at the top of every card.
- Each card should contain: index, feature title, concise explanatory paragraph, and—where useful—a small interface vignette near the bottom.
- Maintain generous internal padding, approximately 32px desktop and 24px mobile. Let the miniature UI previews sit low in the card so the text remains the primary reading path.
- On tablet, reduce to two columns while preserving the varied card heights. On mobile, collapse to one column and use a natural vertical sequence; avoid tiny side-by-side previews.
- Ensure the introductory heading, paragraph, and grid share the same wrapper alignment.

## Typography hierarchy
- Use a modern grotesk or neutral sans-serif with a clean, slightly editorial feel.
- Intro heading: large, light-to-regular weight, approximately 56–64px desktop with tight line-height around 0.98–1.05; scale to 40–48px on mobile.
- Intro paragraph: approximately 18–20px with a 1.45 line-height and a readable max-width around 600px.
- Card titles: approximately 25–30px, regular weight, with tight line-height.
- Card descriptions: approximately 16–18px, muted colour, line-height around 1.55–1.65; constrain line length so cards remain easy to scan.
- Card indices and miniature UI labels should be small, around 11–12px, with subtle tracking and muted contrast.
- Use sentence case and short, direct feature names. Avoid overly promotional language.

## Colour and surface treatment
- Start with a soft warm stone background, approximately `#dedbd5` or a close brand-appropriate equivalent.
- Use slightly lighter warm-white cards, approximately `#f5f2ee`.
- Use near-black for primary text, approximately `#151515`.
- Use a softened charcoal-grey for supporting copy, approximately `#6d6a66`.
- Use very subtle grey-beige rules and borders, approximately `#c9c5be`.
- If the product has an accent colour, reserve it for small interface details, active states, highlights, or controls rather than large decorative areas. A pale chartreuse accent such as `#d7f792` can be used only as a fallback.
- Keep contrast accessible even though the palette is quiet.

## Borders, radius, and depth
- Give cards a soft radius around 12–14px, with a thin low-contrast border around `1px solid rgba(30, 28, 25, 0.10)`.
- Use restrained shadows: a broad, faint shadow such as `0 8px 24px rgba(30, 28, 25, 0.04)` rather than a strong floating effect.
- Miniature UI previews may use a slightly smaller radius, around 10–12px, and a subtly stronger border to distinguish them from the card surface.
- Keep the section flat and tactile; avoid gradients, glassmorphism, heavy shadows, and decorative ornament.

## Miniature interface previews
- Build small, believable UI fragments that demonstrate the feature: token rows, responsive layouts, data lists, state controls, canvas selections, sliders, or compact AI input controls.
- These previews should be schematic but functional-looking, using simple boxes, text rows, pills, dividers, and status colours.
- Match the product's visual language and use realistic but invented data relevant to the user's product.
- Do not use screenshots or external imagery. Prefer CSS-built interface fragments that remain sharp and responsive.
- Keep previews visually subordinate to the card title and explanation.

## Interaction and motion
- If cards are interactive, use a subtle hover treatment: a small lift of 1–2px, a slightly stronger border, or a gentle shift in the preview accent.
- Do not make the whole card appear clickable unless it performs an action. If cards link somewhere, provide a clear affordance and preserve keyboard focus styles.
- Use short, restrained transitions around 160–220ms with an ease-out curve.
- Respect `prefers-reduced-motion` and keep the layout stable—no dramatic reveals or parallax.
- Make all interactive controls keyboard accessible, with visible focus rings.

## Responsive and accessibility requirements
- Use CSS Grid with explicit responsive breakpoints rather than hard-coded positioning.
- Preserve semantic heading order and use real text for indices and labels.
- Ensure text, rules, controls, and accent states meet accessible contrast requirements.
- Avoid relying on colour alone to communicate status; pair states with text or shape differences.
- Test long feature titles and descriptions so the cards do not overflow or create awkward alignment.

## Never
- Never use the reference product's logos, product names, brand marks, or exact copy.
- Never reproduce the reference's illustrations, screenshots, miniature UI content, or imagery.
- Never copy the exact card titles, feature ordering, text, data values, or visual assets.
- Never make the result dependent on external image URLs or proprietary assets.
- Never turn the section into a generic marketing hero, dense dashboard, or decorative masonry collage.
- Never sacrifice readability, responsiveness, or accessibility in order to imitate the reference layout exactly.
