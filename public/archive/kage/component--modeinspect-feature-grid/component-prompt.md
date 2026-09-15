## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106491-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-feature-grid

# Build a tabbed product workflow feature section

## Before you start
Ask me what my product does, who it is for, and what its brand direction is (including preferred typefaces, colours, tone, and visual references). Apply the principles below to my product and brand; do not reproduce the reference product, wording, or imagery.

## Goal
Create a responsive feature section that explains a product through a small sequence of workflow stages. Users should be able to switch between stages and see a corresponding visual product demo. The section should feel editorial, tactile, precise, and premium rather than like a generic SaaS card grid.

## Structure and layout
- Place the component inside a wide, centred page container with generous outer whitespace.
- Start with a left-aligned intro block: a large two-line headline, followed by a compact explanatory paragraph. Keep the text measure narrow enough to preserve hierarchy and leave open space around it.
- Below the intro, create one unified showcase shell with softly rounded corners and a subtle border.
- The top of the shell is a four-column tab/navigation row. Each tab contains a small uppercase eyebrow and a short supporting description. On desktop, tabs divide the full width evenly; on mobile, stack them vertically or convert them into a horizontally scrollable tab strip while preserving readable descriptions.
- Below the tabs, place a large visual stage. Use a dark, lightly textured or tonal background behind an inset light canvas. The inset canvas should contain an abstract, product-specific UI preview built from HTML/CSS rather than a screenshot.
- Keep the demo stage visually dominant, with generous padding and an intentional crop or partial off-canvas positioning so it feels like a window into a larger product.
- The active tab should correspond to the preview content. Include four distinct states that demonstrate different workflow moments, not merely colour changes.

## Alignment and proportions
- Align the intro and showcase to the same container edges.
- Use a 12-column mental grid: the intro should occupy roughly 5–6 columns, while the showcase spans the full grid.
- Give the navigation row consistent cell heights and vertical alignment. Let the active cell use a slightly brighter surface and a strong top rule or inset accent line.
- Keep the preview composition asymmetrical but balanced: combine one or two framed interface panels with generous negative space and a clear focal element.
- On small screens, reduce the preview scale, preserve the focal panel, and prevent horizontal overflow outside intentional scrolling areas.

## Typography
- Use a modern grotesk or humanist sans-serif for body and headline text, with a distinctive display treatment only if it fits the user’s brand.
- Headline: large, light-to-regular weight, tight tracking, approximately 56–72px desktop and 38–48px mobile; use a tight line-height around 0.95–1.05.
- Optional emphasis phrase: use a contrasting display face, outlined treatment, or alternate weight sparingly to create a memorable editorial break, but keep it legible and brand-appropriate.
- Body copy: approximately 17–20px desktop, 15–17px mobile, with 1.35–1.5 line-height and muted contrast.
- Tab eyebrows: uppercase, compact monospace or narrow sans-serif, approximately 10–12px, with generous letter spacing.
- Tab descriptions: approximately 14–16px, medium line-height; active descriptions should have stronger contrast and weight.

## Colour and surfaces
Use the user’s brand palette first. If no palette exists, begin with:
- warm page background: #E9E6E0 or #F0EEE9
- primary text: #151515
- muted text: #6D6B66
- showcase outer surface: #2B2B29
- inset canvas: #F7F7F5
- subtle rule: #C9C6BF
- active accent: a vivid but slightly softened lime or brand accent such as #D7F58A
- preview panel darks: #111111 and #242424

Maintain high text contrast. Use the accent for active states and important product controls, not as a general background wash.

## Borders, depth, and radius
- Use thin, low-contrast 1px borders for the shell, tab dividers, and preview UI.
- Use a medium-large radius around 14–18px for the outer showcase and 10–14px for the inset canvas.
- Product-preview cards can use smaller 0–4px radii and crisp dark outlines to suggest a designed interface inside the softer marketing shell.
- Prefer subtle layered shadows and tonal contrast over heavy drop shadows. If using a shadow, keep it broad and low opacity.
- A faint grain or photographic tonal texture may be simulated with CSS gradients or a noise overlay, but it must remain subtle and accessible.

## Interaction and states
- Tabs must be keyboard accessible buttons with visible focus rings, correct aria-selected state, and predictable arrow-key or tab navigation.
- Clicking or selecting a tab should update the preview with a short, restrained crossfade or slide transition; do not use distracting animation.
- Make the active tab unmistakable through a top accent rule, stronger text contrast, and a surface shift.
- Respect prefers-reduced-motion and disable transitions when requested.
- The visual preview should communicate state changes with realistic interface details such as panels, controls, tables, cards, diagrams, or forms relevant to the user’s product.
- Ensure the section remains useful if JavaScript is unavailable by showing the first feature state as the default content.

## Responsive behaviour
- Desktop: four equal tabs in one row and a wide, cinematic preview stage.
- Tablet: retain the row if space permits, otherwise allow compact wrapping while keeping each tab readable.
- Mobile: stack the intro and showcase, make tabs vertically selectable or horizontally scrollable, and scale the preview without shrinking text below comfortable reading sizes.
- Keep all controls large enough for touch interaction and maintain visible focus/active states.

## Content guidance
- Write four concise workflow-oriented feature labels, each with a one- or two-sentence explanation.
- Make each preview state demonstrate a meaningful product outcome: for example, discover, configure, build, and share—adapt these to the user’s product.
- Use realistic but original placeholder data that fits the product domain.

## Never
- Never use the reference product’s logos, partner logos, product names, or brand marks.
- Never copy the reference headline, tab labels, descriptions, interface copy, prices, or other wording.
- Never use the reference screenshot, its exact UI arrangement, cursor treatment, or imagery.
- Never create a pixel-for-pixel replica; reinterpret the layout and visual language for the user’s product.
- Never rely on illustrations or decorative imagery from the reference.
- Never sacrifice accessibility, responsive behaviour, or readable contrast for visual similarity.
