## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060207-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060182-full.webp
- Component on Kage: https://kage.design/component/linear-feature-grid

# Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for that product rather than reproducing the reference.

## Build this section
Create a dark, editorial feature-grid section that introduces three product principles or capabilities. The section should feel calm, technical, premium, and spacious, with the content doing most of the communication and the visuals acting as quiet supporting artifacts.

### Layout and alignment
- Use a centered, wide content container with generous horizontal padding: approximately 40–48px on desktop and 20–24px on mobile.
- Begin with a small uppercase eyebrow aligned to the container's left edge.
- Place a large introductory statement below it, spanning most of the available width. Use a short first clause in bright text, followed by a longer supporting clause in a visibly dimmer tone so the hierarchy is expressed through contrast rather than excessive styling.
- Follow the introduction with a three-column grid on desktop. Each column should have equal width and consistent internal alignment.
- Add subtle vertical rules between columns, but do not place a rule on the outer edges. Collapse to one column on small screens and replace vertical rules with restrained horizontal separators where useful.
- Give each card a tall visual area above its text. Keep the cards aligned along the same baseline for labels, titles, and descriptions.
- Use responsive typography: a large statement around 40–56px on desktop with tight line-height, scaling to roughly 28–36px on mobile; card titles around 15–17px; descriptions around 13–15px.

### Visual language
- Use a near-black background, approximately `#08090A` or `#0A0B0D`.
- Use off-white for primary text, approximately `#F1F2F3`.
- Use cool gray for secondary statement text, approximately `#777A82`, and softer gray for descriptions, approximately `#85878E`.
- Use very subtle rules and diagram strokes, approximately `#24262B` to `#34363D`; lines should remain visible without competing with the copy.
- Keep the palette monochrome. If the user's brand requires an accent, introduce it sparingly in the diagrams or a tiny interaction state rather than turning the grid into a colorful card system.
- Use a modern grotesk or system sans-serif. Keep letter spacing slightly tight in the large statement and slightly tracked in the eyebrow and small figure labels.
- Use small uppercase figure labels such as `FIG 01`, but generate original labels and content relevant to the user's product.

### Card composition
- Each feature card should contain: a small figure label, a quiet abstract visual, a concise feature title, and one or two lines of supporting copy.
- Prefer abstract, CSS-built or inline-SVG visualizations: layered slabs, connected modules, stacked panels, flowing paths, grids, or other simple forms that metaphorically support the feature. Use thin strokes, near-black fills, and minimal depth rather than decorative illustrations.
- Keep visual canvases consistent in height, approximately 250–290px on desktop, while allowing the artwork to sit centered or slightly low within that space.
- Make the copy specific to the user's product, but keep it compact and avoid marketing-heavy paragraphs.
- The visual should not be required to understand the feature; the title and description must communicate the value on their own.

### Spacing, borders, and radius
- Use a generous vertical rhythm: approximately 28–40px from eyebrow to statement, 80–110px from statement to grid, and 28–36px between a card's visual and its title.
- Keep card columns separated by 1px rules with low opacity.
- Avoid conventional rounded cards. Use square or nearly square visual containers and no visible outer card background.
- If an SVG or CSS shape needs a radius, keep it subtle, approximately 4–10px, and use it only to clarify the form.
- Finish the section with ample bottom padding, approximately 110–140px, and optionally a faint full-width horizontal rule.

### Interaction and motion
- If cards are interactive, add a restrained hover state: slightly brighten the figure strokes, lift the visual by 2–4px, or reveal a barely perceptible accent. Keep titles and layout stable.
- Animate diagram lines or layers only when it supports the concept. Use slow, subtle transitions around 300–600ms with ease-out timing.
- Respect `prefers-reduced-motion` and provide a static version of every visual.
- Do not add prominent buttons, badges, gradients, or noisy hover effects unless the user's product genuinely requires them.

## Never
- Never copy the reference's logos, product names, brand wording, feature names, or exact marketing copy.
- Never reuse the reference's specific diagrams, illustrations, imagery, or figure compositions; invent new abstract visuals for the user's product.
- Never reproduce the reference pixel-for-pixel or preserve its exact content hierarchy when a different structure better serves the user's brand.
- Never use stock imagery, decorative 3D renders, or visual noise when a simple diagram can communicate the idea.
- Never sacrifice accessibility: maintain readable contrast, semantic headings, responsive behavior, keyboard usability for interactive elements, and reduced-motion support.
