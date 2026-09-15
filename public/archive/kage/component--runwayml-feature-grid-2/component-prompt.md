## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074882-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074862354-full.webp
- Component on Kage: https://kage.design/component/runwayml-feature-grid-2

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual system are. Then apply the principles below to create a version for my product—not a copy of the reference.

## Build an immersive feature-grid section
Create a large, self-contained feature section that presents a product area, initiative, or group of capabilities inside an atmospheric visual panel. The section should feel editorial and premium: one clear narrative introduction on the left, and a concise list of related feature entries on the right.

### Layout and alignment
- Use a wide container with generous horizontal page margins; on desktop, make the panel approximately 2–3 times wider than it is tall.
- Place the content inside a rounded rectangular panel with a two-column layout: an editorial copy column on the left and a feature-list column on the right.
- Vertically center both columns within the panel rather than aligning them to the top.
- Keep the left column narrower than half the panel width so the headline wraps into several intentional lines.
- Give the right column a consistent readable width and align every feature entry to the same left edge.
- Separate the feature entries with thin horizontal rules. Use generous vertical padding so each row feels like an independent destination.
- On smaller screens, stack the columns vertically while preserving the hierarchy: introduction first, feature list second. Reduce the panel padding without making the content feel cramped.
- Keep the panel height driven by content on mobile; avoid forcing a desktop-height composition.

### Typography hierarchy
- Use a clean modern sans-serif with a neutral, highly legible character.
- Add a small eyebrow label above the main statement, set in compact body text with medium weight.
- Set the main statement in a large, tightly leading size with a regular or medium weight. It should be the dominant element, but not oversized like a hero headline.
- Keep feature titles at a medium-large body/display size and use a restrained weight.
- Set feature descriptions smaller and lighter than their titles, with comfortable line height and a slightly reduced contrast.
- Use sentence case and short, informative copy. Keep line lengths deliberately controlled.

### Colour and atmosphere
- Use a deep, muted visual field behind the content: for example, an olive-charcoal or blue-green base around `#26352F`, with soft desaturated tan/green areas around `#85846A` and `#B0A98A`.
- The background may be a heavily blurred image, abstract texture, or layered radial gradients, but it must remain atmospheric and low-detail so text stays readable.
- Add a subtle dark overlay or gradient, especially behind the copy, to improve contrast.
- Use warm off-white text around `#F4F4EF` for primary content.
- Use a softened off-white around `#D8D9D0` for descriptions and secondary text.
- Use translucent warm-white rules around `rgba(244,244,239,0.65)`.
- Ensure accessible contrast regardless of the chosen background treatment.

### Borders, radius, and spacing
- Give the outer panel a medium-large corner radius, approximately `12–16px`.
- Clip the background treatment to the panel radius so no texture escapes beyond its edges.
- Use a subtle light border around the panel, such as `1px solid rgba(255,255,255,0.18)`, only if needed to distinguish it from the page.
- Use generous internal padding: approximately `clamp(28px, 6vw, 78px)` horizontally and vertically.
- Keep the left and right columns separated by a substantial responsive gap, approximately `clamp(40px, 8vw, 140px)`.
- Keep the call-to-action close to the introductory copy, with roughly `28–36px` of space after the statement.

### Interaction
- Add one understated outlined action button beneath the editorial statement. Use a transparent background, a thin light border, compact padding, and a small radius.
- Include a directional arrow affordance at the far right of every feature row.
- Make each feature row keyboard accessible and clickable if it represents a destination.
- On hover and focus, gently brighten the row title and arrow, and subtly increase the rule contrast; avoid dramatic movement or scale effects.
- Use visible `:focus-visible` styling with a light outline or ring.
- Keep transitions short and calm, around `160–240ms`, with an ease-out curve.
- Respect reduced-motion preferences.

### Responsive behaviour
- At desktop widths, preserve the two-column composition and generous negative space.
- At tablet widths, reduce the gap and panel padding before collapsing the layout.
- At mobile widths, use one column, let the headline wrap naturally, and make each feature row comfortably tappable with at least `44px` of interactive height.
- Ensure arrows and divider lines remain aligned and do not collide with long titles or descriptions.

### Content guidance
- Write a concise eyebrow that names the product area or initiative.
- Write a 4–7 line editorial statement explaining the larger ambition or customer value.
- Include 3–4 related feature entries, each with a short title, one or two sentences of description, and a directional affordance.
- Adapt all content to my product and brand after asking the initial questions.

## Never
- Never reuse the reference’s logos, product names, feature names, wording, or exact copy.
- Never reproduce the reference’s background image, imagery, illustration, or recognisable visual assets.
- Never make the component dependent on the source website or its brand identity.
- Never turn every item into a loud card with heavy shadows, gradients, or oversized icons.
- Never sacrifice text contrast or keyboard accessibility for the atmospheric background.
