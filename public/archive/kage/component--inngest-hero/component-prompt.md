## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074881-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Component on Kage: https://kage.design/component/inngest-hero

# Build a cinematic developer-tool hero section

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, typography, and primary conversion goal are. Then apply the principles below to my product rather than reproducing the reference literally.

## Goal
Create a full-viewport landing-page hero for a technical software product. The section should feel bold, futuristic, and editorial, with an atmosphere of complexity being made simple. Make the messaging and primary action immediately legible even when the background is visually rich.

## Structure and layout
- Use a near-full-screen hero, approximately `min-height: 720px` on desktop and `min-height: 680px` on mobile.
- Place a compact navigation bar at the top with generous horizontal padding. Keep the brand mark at left, navigation links in the middle or left-center, and utility actions plus a filled CTA at right.
- Below the navigation, align the hero content to a centered max-width container, but let the headline occupy the left half or left two-thirds of the viewport.
- Use a two-part oversized headline: one solid-weight line followed by one outlined or lower-emphasis line. The line break should be intentional and expressive, not caused by accidental wrapping.
- Put a short, uppercase supporting statement beneath the headline, followed by two horizontally aligned CTAs.
- Leave the right side comparatively open so a subtle technical visual system can live there without competing with the headline.
- On small screens, collapse navigation into a menu control, stack the actions if needed, reduce the headline size while preserving its dramatic line breaks, and keep the visual background low contrast.

## Typography
- Use a modern grotesk or geometric sans-serif with strong uppercase forms and slightly condensed proportions if available.
- Hero headline: uppercase, tight line-height around `0.82–0.95`, large desktop size around `clamp(4.5rem, 10vw, 9rem)`, with modest negative tracking.
- Make the first headline treatment solid and bright; make the second treatment outlined with a transparent fill and a 1–2px light stroke. Ensure the outlined text remains readable and accessible.
- Supporting text should be uppercase, compact, monospaced or technical in character, around `0.75–0.9rem`, with generous letter spacing.
- Navigation and buttons should use concise labels, medium-to-bold weight, and clear uppercase or sentence-case hierarchy consistent with the brand.

## Colour and atmosphere
- Start from a nearly black background, approximately `#0B0B0C` or `#101011`.
- Use warm white for primary text, approximately `#F4F2EE`.
- Use a vivid warm accent for the primary CTA and tiny background highlights, approximately `#FF5A3D` or a brand-appropriate equivalent.
- Keep secondary text and outlines muted, approximately `#AAA8A3`.
- Build depth with a very subtle charcoal gradient, faint grain, and sparse points of warm and cool light. The background must remain dark enough for text contrast.

## Background visual system
- Create an abstract technical atmosphere rather than a literal product screenshot: scattered particles, tiny fragments of code-like glyphs, faint coordinates, or softly glowing nodes.
- Concentrate most of the detail toward the right and behind the lower half of the hero, leaving a calmer zone behind the headline.
- Use low opacity, blur, and restrained motion so the visual reads as ambient texture rather than decoration demanding attention.
- If using animation, make particles drift slowly and respect `prefers-reduced-motion`.
- Avoid relying on image assets; use CSS, SVG, canvas, or generated abstract geometry where practical.

## Borders, surfaces, and controls
- Keep the hero mostly surface-free and immersive; do not add a conventional card around the content.
- Use thin, subtle borders around secondary controls, approximately `rgba(244,242,238,0.9)`, with a small radius around `5–8px`.
- Give the primary button the accent fill with dark text or high-contrast light text, depending on accessibility testing. Use approximately `12–16px` vertical padding and `18–26px` horizontal padding.
- Use a restrained radius, roughly `6px`, avoiding overly rounded SaaS styling.
- Navigation dividers and utility controls should use low-contrast strokes around `rgba(244,242,238,0.2)`.

## Interaction and accessibility
- Add clear hover, focus-visible, and active states to every link and button. Use a slight brightness or border change rather than large movement.
- The primary CTA should be visually dominant; the secondary CTA should remain clearly clickable without competing with it.
- Preserve keyboard navigation, semantic heading structure, visible focus rings, and sufficient contrast for outlined text and muted navigation.
- Keep the hero stable while loading; background effects should never block interaction or cause layout shift.

## Never
- Never copy the reference site's logos, product names, navigation labels, headline, supporting copy, button copy, or brand-specific messaging.
- Never reuse the reference's exact artwork, particle arrangement, glyph composition, illustration, imagery, or source assets.
- Never make the background brighter or busier than the content.
- Never sacrifice readable contrast, responsive behaviour, reduced-motion support, or keyboard accessibility for visual impact.
- Never use generic placeholder copy in the final implementation; derive concise messaging from my product and audience after asking the questions above.
