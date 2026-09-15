## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060909-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original feature showcase for that product—not a replica of any reference.

## Build a dark feature showcase section
Create a self-contained responsive section for a modern software product. The section should communicate a broad promise about the product, followed by a sequence of feature stories. Each story combines a short heading, a concise supporting paragraph, and a large visual panel that represents the capability through abstract interface-like graphics, diagrams, or system metaphors.

### Layout and alignment
- Place the component inside a very dark rounded container, approximately `#1B1B1B`, against a light page background or the surrounding brand canvas.
- Use a narrow reading column, approximately 680–720px wide, centered within the dark container. Keep all headings, descriptions, and visual panels aligned to the same left and right edges.
- Begin with a section heading and introductory paragraph, then stack features vertically with generous separation.
- Give each feature a consistent rhythm: feature title, description, a large visual panel, then substantial space before the next feature.
- Make visual panels wide and tall enough to feel cinematic, with a restrained 1px border and a radius of roughly 10–14px. Preserve their aspect ratio across breakpoints rather than allowing them to collapse into shallow banners.
- On smaller screens, reduce outer padding while keeping the text and panel edges aligned. Allow visual compositions to simplify or crop gracefully, but never let text become difficult to read.

### Typography hierarchy
- Use a contemporary sans-serif with a clean, slightly technical character.
- Main section heading: approximately 30–36px, weight 650–750, tight line-height around 1.05–1.15, colour `#F5F5F2`.
- Feature headings: approximately 15–17px, weight 650–700, colour `#F5F5F2`.
- Introductory and feature descriptions: approximately 14–16px, regular weight, line-height 1.6–1.75, colour `#A7A7A3` or `#B5B5B0`.
- Keep paragraphs short—ideally two or three lines on desktop—so the visual panels carry much of the storytelling.
- Use sentence case and avoid excessive labels, metadata, or decorative typography.

### Colour and visual language
- Use a near-black foundation such as `#1B1B1B` or `#181818`.
- Use panel surfaces around `#151719` to `#1D1F22`, with subtle tonal gradients rather than flat empty rectangles.
- Use cool electric blue accents around `#3D8BFF` and soft magenta accents around `#F044B8`, optionally blending them into violet around `#8A66FF`.
- Keep accent colours concentrated in glows, paths, highlights, active nodes, or key objects. Most of each panel should remain dark and quiet.
- Use borders near `rgba(255,255,255,0.13)` and fine guide lines near `rgba(255,255,255,0.08)`.
- Add atmospheric radial glows sparingly, with blur and low opacity. The effect should feel polished and infrastructural rather than neon-heavy.

### Visual panel direction
Create original CSS, SVG, or lightweight React visuals instead of relying on external imagery. Possible metaphors include:
- A secure browser or application frame connected to service nodes.
- A central product hub surrounded by abstract integration tiles, without recognizable third-party logos.
- A global network or payment-routing sphere made from dots, arcs, and thin connecting lines.
- Compliance or security badges represented by generic symbols and invented short labels.
- Responsive desktop and mobile interface silhouettes connected by a shared glow.

Each panel should have a clear focal point, layered depth, and enough negative space to feel premium. Use soft shadows, glass-like translucent surfaces, blurred gradients, dotted paths, and thin technical lines. Keep decorative motion optional and subtle: slow glow movement, a gently travelling path, or a small pulse on an active node. Respect `prefers-reduced-motion`.

### Borders, radius, and depth
- Outer dark container: radius approximately 14–18px.
- Inner visual panels: radius approximately 10–14px.
- Use thin, low-contrast borders instead of strong card shadows.
- Give central objects a faint blue or magenta bloom, but avoid excessive blur that reduces edge clarity.
- Preserve a disciplined grid and consistent panel padding even when the internal artwork is expressive.

### Interaction and accessibility
- If feature panels are interactive, make the whole panel keyboard-focusable and provide a visible focus ring using a blue-violet accent.
- Hover states may slightly increase border contrast, brighten a node, or shift a glow; do not introduce dramatic scaling or distracting movement.
- Provide meaningful accessible names and descriptions for any interactive visual.
- Do not encode essential information in colour alone.
- Ensure sufficient contrast for all text and controls, and support reduced motion.

## Never
- Never copy the reference’s logos, product names, brand marks, or exact feature copy.
- Never use recognizable third-party logos or trademarked interface assets in the visuals.
- Never reuse the reference’s illustrations, screenshots, imagery, or exact compositions.
- Never make the section a literal clone; adapt the structure and visual principles to the user’s product and brand.
- Never fill every area with glow, gradients, or decoration at the expense of hierarchy and readability.
