## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073819-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what brand direction, colour palette, and visual assets they want to use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this component
Create a responsive feature section that explains how several products or capabilities work together as one cohesive platform. The section should feel like an integrated system rather than a collection of unrelated feature cards.

### Structure and layout
- Place the component inside a large, softly framed section with a near-white background and a subtle atmospheric treatment such as a very faint blurred colour wash or paper-like texture. Keep the effect quiet so the content remains primary.
- Begin with a centered introduction: a strong two-line headline, followed by a short explanatory paragraph constrained to roughly 650–750px.
- Below the introduction, stack three large feature panels vertically. Alternate the visual arrangement so the first and third panels place explanatory content on the left and a product preview on the right, while the middle panel reverses that order.
- Use a generous maximum width around 1180–1240px. Each feature panel should be a two-column composition with approximately equal halves, a 1px light border, a 20–24px radius, and a white or translucent surface.
- Connect the large panels with a slim vertical centre line and small transition labels between them. These labels can represent a shared contract, configuration, workflow, or data handoff. Use them to make the relationship between products explicit.
- Finish with a wide supporting-tools panel divided into two columns. Each item should include a small icon tile, a title, a short italic or muted descriptor, body copy, and a simple text link.
- On small screens, collapse every panel into one column, place the product preview after its explanatory content, hide or simplify the centre connector, and keep horizontal padding between 20px and 24px.

### Content hierarchy
- Use one clear section headline at approximately 44–56px desktop size, 1.0–1.08 line-height, with tight letter spacing and a near-black colour.
- Supporting introductory copy should be 17–19px with a 1.5–1.6 line-height and a muted gray tone.
- Feature labels should be small, approximately 13–14px, medium weight, and paired with a tiny coloured status dot.
- Feature titles should be around 26–30px, semibold, and visually distinct from body copy.
- Feature descriptions and bullet points should be 15–16px with a 1.55–1.7 line-height. Keep bullet lists compact and align bullets consistently.
- Use short “Learn more” text links with a right arrow. Make the entire link comfortably tappable and provide a visible hover or focus state.
- Avoid dense marketing language: each feature should communicate one job, one benefit, and a concise set of supporting details.

### Spacing and alignment
- Use a spacing system based on 8px increments, with larger section gaps of 48–96px.
- Give the outer section generous internal padding, approximately 48–64px on desktop and 24–32px on mobile.
- Align all text to the same internal column edge. Centre only the introductory heading, paragraph, and connector labels.
- Give feature content approximately 36–48px of padding. Let the preview side reach the panel edges where appropriate, while preserving the panel radius through clipping.
- Keep the transition labels visually lightweight so they connect the panels without competing with them.

### Product preview surfaces
- Build previews from HTML/CSS UI fragments rather than relying on generic stock imagery. Examples include a code editor, dashboard, deployment timeline, database status card, chart, or configuration screen relevant to the user’s product.
- Place each preview inside a bright, polished browser-like or application-like frame with a small top bar, subtle separators, compact labels, and realistic placeholder data.
- Add one restrained visual motif across the previews—such as a coloured route, shared data line, status indicator, or repeated accent—to communicate continuity across the stack.
- Use soft gradients, glow, blur, or abstract colour fields behind the UI only as supporting atmosphere. Keep the interface itself crisp and readable.
- Preview panels can use a small accent palette such as cyan `#20C4C7`, warm yellow `#F2C230`, coral `#EE5A67`, and blue-green `#55C9B9`, but adapt the accents to the user’s brand.

### Colour, borders, and surfaces
- Use an overall background close to `#FFFFFF` or `#FBFBFA` and primary text near `#171717`.
- Use secondary text around `#6F7072`, muted labels around `#8B8B8B`, and borders around `#E8E8E6`.
- Keep the main cards white or translucent white against a slightly textured or softly tinted section background.
- Use 18–24px corner radii for major panels, 10–14px for nested UI surfaces, and pill shapes only for compact status labels or connector tags.
- Shadows should be extremely subtle: use diffuse, low-opacity shadows or none at all. The visual polish should come from spacing, borders, colour fields, and layered UI previews.

### Interaction and accessibility
- Make each “Learn more” link keyboard accessible with a clear `:focus-visible` treatment.
- Add gentle hover motion to links and preview surfaces—such as an arrow shift of 2–4px, a slight border-colour change, or a small lift—but avoid distracting animation.
- Respect `prefers-reduced-motion` and disable nonessential transitions when requested.
- Ensure colour is not the only way to communicate status; pair dots with text labels.
- Maintain readable contrast, semantic headings, proper list markup, responsive reflow, and touch targets of at least 44px.

## Never
- Never use the reference’s logos, product names, brand names, or exact copy.
- Never reproduce the reference’s illustrations, artwork, screenshots, decorative objects, or imagery.
- Never make a pixel-for-pixel clone or preserve the reference’s exact content order when a different arrangement better serves the user’s product.
- Never use invented brand assets when the user has not supplied them; use neutral, original CSS/HTML visualizations instead.
- Never sacrifice readability, accessibility, or responsive behaviour to preserve the desktop composition.
