## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106645-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-feature-grid-4

# Build an immersive feature-grid carousel section

## Before you start
Ask me what the user's product is, who it is for, and what their brand identity, visual language, and available assets are. Then apply the principles below to create an original version for that product and brand—not a copy of the reference.

## Goal
Create a premium, editorial feature section that introduces several product capabilities through a horizontally browsable row of visual cards, followed by a strong transition into the next product story. The section should feel cinematic, spacious, and highly art-directed while remaining responsive and accessible.

## Structure and layout
- Use a deep, near-black plum background for the feature-carousel region, approximately `#10001F` or `#140022`.
- Give the section generous vertical padding: roughly 80–120px on desktop and 56–80px on mobile.
- Place the carousel inside a full-width layout with a left-aligned content rail and intentional horizontal overflow. On large screens, show around 3–4 cards with the next card partially visible to signal that more content exists.
- Use a responsive horizontal track rather than forcing all cards into a fixed desktop grid. On mobile, show one card at a time with a small portion of the next card visible.
- Each feature item consists of a tall visual panel above a short text block. Keep all text blocks aligned to the same top baseline and use consistent card widths.
- Use large visual panels with a 20–24px radius and `overflow: hidden`. Aim for an aspect ratio around 0.9:1 or 1:1.05, depending on the product imagery.
- Leave a large quiet area below the card descriptions before the carousel controls or section transition; the negative space is part of the premium composition.
- End with a separate story panel that shifts into a bright, atmospheric gradient. Its layout should be clearly distinct from the dark carousel while still feeling like the same page.
- In the story panel, center a small eyebrow, a large headline, and an optional product demonstration visual beneath it. Use a tall, single-column composition on mobile and a centered composition on desktop.

## Feature-card content and hierarchy
- Keep card copy concise: a bold lead phrase followed by a lighter explanatory sentence.
- Use a two-level text treatment: approximately 16–18px semibold for the lead and 16–18px regular/medium for supporting copy, with a line height around 1.25–1.4.
- Make the visual do most of the communication. Use product-specific renders, abstract compositions, interface previews, textures, or motion frames supplied by the user; do not overfill the card with text.
- Maintain consistent copy lengths where possible so the track feels orderly, but allow natural wrapping rather than truncating meaningful content.
- If footnote markers are needed, style them as small superscript text with an accessible reference elsewhere on the page.

## Typography
- Use a modern sans-serif with strong clarity and a slightly tight display feel. Prefer the user's brand font; otherwise use a system sans stack.
- The carousel copy should be compact and confident, with white lead text around `#F5F2F7` and muted supporting text around `#9B91A5`.
- The story-panel eyebrow should be approximately 20–26px semibold.
- The story headline should be large and compact: roughly 52–76px on desktop, 38–52px on mobile, with a line height around 0.95–1.05. Keep it to two or three lines and center it.
- Use subtle letter spacing only for small labels; avoid excessive uppercase styling.

## Colour and imagery
- Feature region: deep plum/black background, approximately `#10001F`.
- Primary text: soft white, approximately `#F7F5F8`.
- Secondary text: desaturated lavender-grey, approximately `#A49AAA`.
- Story transition: use a smooth vertical or radial gradient moving from coral red `#F4513F` through pink `#E94D76` and soft blush `#F2B4D7` into near-white `#FFFDFD`.
- Keep imagery high contrast and art-directed. Different cards may use distinct colour worlds, but they should share a consistent crop, radius, and visual density.
- Avoid adding decorative effects that compete with the product visuals. If using glow, grain, or blur, keep it subtle and performance-conscious.

## Borders, radius, and depth
- Avoid visible borders around feature cards unless the user's brand requires them.
- Use 20–24px corner radii on image panels and 16–24px on any supporting surfaces.
- Do not use heavy shadows on the dark background. Let contrast, cropping, and spacing create hierarchy.
- On the light story panel, use soft shadows only where needed to separate a product render or device mockup from the gradient.

## Carousel interaction
- Support touch swiping, trackpad scrolling, mouse dragging if appropriate, and keyboard navigation.
- Provide previous/next circular controls near the lower-right edge of the carousel on desktop. Use subdued translucent dark circles, approximately `rgba(255,255,255,.10)`, with light icons.
- The active next control may be brighter than the disabled previous control. Clearly communicate disabled states with reduced opacity and `aria-disabled`.
- Include an accessible label such as “Feature carousel” and descriptive labels for each control.
- Ensure focus rings are visible and meet contrast requirements.
- Do not autoplay by default. If motion is used, respect `prefers-reduced-motion` and keep transitions short and eased.
- Preserve the partial-card affordance without making the page horizontally scrollable outside the carousel.

## Responsive behaviour
- Desktop: maintain a broad editorial canvas, large cards, and generous gaps of roughly 20–24px.
- Tablet: reduce card width and section padding while keeping at least part of the next card visible.
- Mobile: use a single-column viewport over a horizontal track, reduce radii slightly if needed, and keep controls reachable without covering copy.
- Let the story headline scale fluidly with `clamp()` and keep the product visual within the viewport.
- Ensure all important information remains available without relying on hover.

## Accessibility and implementation
- Use semantic section headings, a list for feature cards, and buttons for carousel controls.
- Provide meaningful alternative text for informative images and empty alt text for purely decorative visuals.
- Keep text readable over imagery with an overlay or image treatment when necessary.
- Build the track with CSS scroll snapping or an equivalent robust interaction model, and avoid layout shifts while images load.
- Lazy-load offscreen visual assets and reserve their dimensions.
- Keep the carousel usable with keyboard-only input and screen readers.

## Never
- Never copy the reference site's logos, product names, trademarks, or brand-specific navigation.
- Never reuse the reference's exact marketing copy, headlines, captions, footnotes, or button labels.
- Never copy its illustrations, photography, renders, device imagery, or other visual assets.
- Never reproduce the exact card count, artwork, crop, gradient, spacing measurements, or composition as a pixel-for-pixel imitation.
- Never assume the user's product, audience, or brand should use the same colours or visual style; adapt the rules to their context.
- Never hide essential content behind hover, autoplay, or an inaccessible carousel interaction.
