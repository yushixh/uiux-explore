## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060459-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-hero-2

## Before you start
Ask what the user's product is, who it is for, and what brand, visual identity, and core promise should shape the section. Then apply the principles below to create an original hero for that product—not a copy of the reference.

## Build this section
Create a full-width, editorial SaaS hero with a near-black canvas and a highly focused central message. The section should feel premium, technical, calm, and atmospheric while remaining easy to scan.

### Layout and alignment
- Use a centered, constrained content frame with a thin border or grid edge at the left and right.
- Reserve the upper portion for the hero statement. Vertically center a small eyebrow above a large headline, with generous empty space around the text.
- Make the headline the visual anchor: one or two lines, centered, and sized responsively with `clamp()` so it remains dominant without overflowing on mobile.
- Place a large, shallow elliptical or semicircular form beneath the headline. The shape should rise from below the fold or lower edge of the hero, creating the impression of a planet, horizon, or interface surface.
- Add a five-column feature strip beneath or overlapping the lower edge of the hero. Each item should have an icon, a short bold statement, and one muted supporting sentence.
- On smaller screens, change the feature strip to a two-column or single-column stack while preserving the central alignment and visual hierarchy.

### Atmospheric visual treatment
- Base background: approximately `#101010` or `#0D0D0D`.
- Add extremely subtle vertical pinstripes or a fine architectural grid using low-opacity lines around `rgba(255,255,255,0.035)`; keep them barely visible.
- Render the large arc as a very dark filled shape, around `#111111`, with a thin luminous rim.
- Use a restrained multi-colour glow along the arc: warm amber/orange at one side (`#E8A64A`, `#E9794F`), pale yellow near the crown (`#D4D878`), and cool cyan/blue on the other side (`#72C6D0`, `#668FDB`). Blur the glow softly and keep it subordinate to the headline.
- Add a subtle radial haze behind the arc and text, but avoid a busy or glossy background.

### Typography
- Use a modern grotesk or neutral sans-serif with clean, compact letterforms.
- Eyebrow: small, medium-weight, muted gray, approximately `#929292`, with comfortable tracking.
- Headline: large, bold, near-white `#F5F5F3`, with tight letter spacing and a compact line height around `0.9–1.0`.
- Feature titles: 15–17px, semibold, near-white.
- Feature descriptions: 14–16px, regular, muted gray around `#929292`, with a relaxed line height.
- Keep copy concise: the message should be understood from the eyebrow, headline, and feature titles before reading the descriptions.

### Borders, spacing, and surfaces
- Use hairline dividers around `rgba(255,255,255,0.12)` for the frame and feature columns.
- Avoid cards with heavy shadows. Let the shared background unify the entire section.
- Use generous top and bottom padding, roughly 96–160px for the hero statement depending on viewport height.
- Give each feature cell consistent padding, approximately 28–32px horizontally and 36–44px vertically.
- Align all feature icons and text to the same vertical rhythm. Use simple 18–22px line icons in muted gray, with no filled badges.
- Add a small trademark or qualifier only if it is relevant to the user's own product; do not make it visually dominant.

### Interaction and responsiveness
- If the feature items are interactive, add a quiet hover state: brighten the icon and title, slightly increase the arc glow, or reveal a subtle accent line. Avoid dramatic movement.
- Respect `prefers-reduced-motion`; disable animated glow, parallax, and line movement when requested.
- Keep text readable over the background with sufficient contrast.
- On mobile, reduce the headline size, let the arc extend beyond the viewport, and retain visible dividers between feature items.
- Build the arc with CSS/SVG or another lightweight procedural technique rather than requiring external imagery.

## Never
- Never use logos, product names, brand copy, or recognizable wording from the reference.
- Never copy the reference's exact headline, feature statements, icon set, proportions, or layout measurements.
- Never include the reference product's illustrations, imagery, trademarks, or recognizable visual assets.
- Never make the gradient overpower the content or turn the section into a generic neon effect.
- Never sacrifice accessibility, responsive behavior, semantic headings, or reduced-motion support for visual similarity.
