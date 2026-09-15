## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073903-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-feature-grid

# Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to my product rather than reproducing the reference literally.

## Build this section
Create a responsive, dark-mode feature-grid section for a developer-oriented software product. The section should communicate a clear product philosophy through a short headline, then support it with four feature cards arranged in a two-column grid on desktop and a single column on mobile.

## Design language

### Layout and alignment
- Use a full-width section with a deep, nearly black purple background, roughly `#120D22` to `#1A102B`.
- Constrain the content to a centered max-width of approximately 1080–1120px with comfortable horizontal gutters: about 24px on mobile and 48–64px on larger screens.
- Place a compact headline above the grid, aligned to the same left edge as the cards. Use two short lines: the first in white and the second in a vivid accent colour. Keep the headline width narrow enough to create a deliberate line break.
- Use a 2 × 2 grid on desktop with a generous horizontal gap of roughly 44–56px and a vertical gap of roughly 64–76px. Collapse to one column below approximately 720px.
- Each card is a vertical composition: visual preview first, then title, then supporting paragraph. Keep all text left-aligned.
- Make the visual previews consistent in height, around 170–190px desktop, while allowing them to scale fluidly on smaller screens.

### Typography hierarchy
- Use a modern geometric or neo-grotesk sans-serif with excellent readability at small sizes.
- Main heading: bold or extra-bold, approximately 52–60px desktop, 40–46px mobile, with tight line-height around 0.95–1.05.
- Card titles: bold, approximately 22–25px, with line-height around 1.15.
- Card descriptions: regular, approximately 16px, with line-height around 1.45–1.55 and a muted white colour.
- Use white or near-white for primary text, around `#F7F5FA`. Use a bright pink-magenta accent around `#F04AB5` for the emphasized headline line.
- Links in descriptions should be visibly underlined and use the same near-white or a subtle accent tint; preserve accessible contrast.

### Card visuals
- Do not rely on literal screenshots. Build abstract, product-specific UI vignettes using HTML/CSS primitives, restrained icons, text fragments, bars, rows, badges, terminal-like panels, timelines, chat messages, or charts that communicate each feature.
- Enclose every visual in a rounded rectangular frame, approximately 12–14px radius, with a thin 2px multi-colour gradient border. Blend pink/magenta on one side through violet and warm yellow-green on the other; approximate colours include `#F044B5`, `#8C4DFF`, and `#D7F04B`.
- Keep the inside of each preview darker than the section background, around `#160C27` or `#1D1032`, with a faint inner glow and subtle purple shadows.
- Add small, low-contrast UI details so the visuals feel alive but not noisy: thin separators, soft purple bars, tiny labels, terminal dots, status indicators, or highlighted code fragments.
- Maintain a shared visual system across all four previews, but vary the internal metaphor so each card explains a distinct capability.

### Background and atmosphere
- Add a very subtle abstract texture or low-opacity line/icon pattern toward the lower half of the section, using deep violet around `#28134A` or `#32145B`. It should add depth without reducing text legibility.
- Use restrained radial glows behind the grid, especially violet near the lower center and magenta near selected edges. Avoid gradients that make the content difficult to read.
- Keep the overall mood technical, confident, energetic, and premium rather than playful or cartoon-like.

### Interaction and responsive behaviour
- If the previews animate, use subtle looping motion only: a caret blink, a status pulse, a bar drawing in, or a message appearing. Respect `prefers-reduced-motion` by disabling animation.
- On hover, cards may lift by 2–4px and slightly brighten their border glow. Do not make the entire section feel like a collection of oversized buttons unless the product requires clickable cards.
- Preserve the gradient frame and readable contrast on touch devices. Avoid hover-only information.
- Ensure the grid, headline, and previews remain visually balanced when copy wraps to additional lines.
- Use semantic headings, accessible contrast, keyboard-visible focus states for any links, and no dependence on colour alone to communicate status.

## Content guidance
- Write original, product-specific copy based on the user's product. Use one concise benefit-led title and one or two sentences per card.
- Give each visual a clear relationship to its card's benefit, but keep the visuals illustrative rather than literal dashboard replicas.
- Avoid overly technical filler and keep the section scannable.

## Never
- Never use logos, product names, brand names, or exact copy from the reference.
- Never copy the reference's UI screenshots, illustrations, icons, layouts at pixel level, or distinctive text examples.
- Never include the reference's customer logos or recognizable third-party marks.
- Never use imagery when a simple CSS/HTML product vignette can communicate the idea.
- Never sacrifice readability for decorative gradients, texture, animation, or visual density.
