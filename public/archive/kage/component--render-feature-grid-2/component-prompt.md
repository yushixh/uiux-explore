## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073949-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073879-full.webp
- Component on Kage: https://kage.design/component/render-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and visual assets they already use. Then apply the principles below to their product rather than reproducing this reference.

## Build an editorial feature-grid section
Create a responsive product feature section for the user's product. It should communicate several capabilities in a composed, premium SaaS layout: a large introductory headline followed by an asymmetric grid of feature cards. The section should feel clear, technical, and quietly expressive rather than busy.

### Layout and alignment
- Place the section inside a centered content container, approximately 1040–1120px wide on desktop.
- Use a very pale, almost white lavender background behind the section, with a subtle vertical or radial wash that is strongest near the heading and fades toward the grid.
- Align the heading and grid to the same left and right container edges.
- Use a 2-column grid on desktop with thin rules between cards. Mix card spans to create rhythm:
  - compact half-width cards for focused features;
  - a full-width feature row for an especially important capability;
  - additional half-width cards below;
  - another full-width row for a broad platform capability.
- Keep the grid structure visible through light borders rather than elevated cards. Avoid floating shadows and excessive rounded containers.
- Give each card generous internal padding, approximately 64–80px on desktop. Vertically center or top-align content consistently within each row.
- Let visual demonstrations occupy the open side or lower portion of a card. They should support the feature message, not compete with it.
- At tablet widths, preserve the editorial rhythm where possible; at small widths, collapse into one column, remove unnecessary internal dividers, and reduce padding to approximately 28–32px.

### Typography hierarchy
- Use a modern sans-serif with a light or regular weight and slightly generous letter spacing. Prefer a clean grotesk or contemporary geometric sans.
- Set the main heading very large, approximately 56–68px on desktop, with tight line-height around 0.98–1.05. Break it into two lines naturally.
- Emphasize one short phrase in the heading with a restrained multi-colour gradient or brand accent, while keeping the surrounding text near-black.
- Use feature titles around 34–40px on desktop with tight line-height, regular weight, and short line lengths.
- Use body copy around 16–18px with 1.4–1.55 line-height and a dark grey rather than pure black.
- Make supporting links compact, medium-weight, and accent-coloured. Include a simple right arrow as text or an icon.
- On mobile, scale the heading to roughly 40–48px and feature titles to 28–32px without making the copy feel cramped.

### Colour and visual language
- Use near-black text such as #111116 and secondary text around #303038.
- Use a soft background around #F8F7FF or #F6F4FF, with subtle lavender gradients such as #E9DFFF and #DCCBFF.
- Use a vivid but controlled accent range for highlighted words and links: violet #7C22D3, magenta #B336B5, teal #239F83, sky blue #65B6D5, and warm sand #D7B879. Adapt these hues to the user's brand palette.
- Keep card interiors mostly white or translucent white, approximately #FFFFFFD9, so the background wash remains perceptible.
- Use hairline borders around #DCDCE2 or rgba(20,20,30,.14). Ensure contrast remains accessible.

### Borders, radius, and spacing
- Use square or minimally rounded card corners, approximately 0–4px radius. The reference relies on a structured editorial frame rather than pill-shaped UI.
- Use 1px borders and avoid drop shadows except for tiny interface mockups if absolutely necessary.
- Establish a generous vertical gap between the heading and grid, approximately 56–72px.
- Use a spacing scale based on 8px, with larger section padding around 96–128px vertically on desktop and 64–80px on mobile.
- Keep paragraphs and titles constrained to readable measures, generally 18–25rem per text block.

### Feature content and visual demonstrations
- Write original, product-specific feature copy with concise, benefit-led titles and one or two sentences of explanation.
- Include a small documentation or details link where useful, but do not force every card to have the same amount of content.
- Create lightweight CSS or HTML visualizations for the cards: for example, a preview environment panel, a thin line chart, a code window, a metrics dashboard, or a logs table. Keep them abstract and tailored to the user's product.
- Use faint grid lines, pale panels, tiny status dots, simple labels, and restrained accent strokes to suggest real product interfaces.
- Keep mock interfaces low-contrast and partially cropped when they sit near a card edge; the text remains the primary information layer.
- If animations are added, use subtle reveal, chart-line, or status transitions only on hover or when entering the viewport. Respect prefers-reduced-motion.

### Interaction and responsive behaviour
- Make documentation or details links visibly interactive with a slight colour or arrow movement on hover and a clear keyboard focus state.
- If cards are clickable, make the entire card a coherent link and provide hover feedback through a barely perceptible background tint or border change, not a dramatic lift.
- Ensure the grid remains readable and visually balanced when copy wraps differently.
- On small screens, stack cards in a logical narrative order, keep visualizations below their related text, and prevent charts or mockups from overflowing horizontally.
- Use semantic headings, accessible link labels, sufficient colour contrast, and meaningful aria labels for any decorative visuals.

## Never
- Never copy the reference's logos, product names, brand marks, or trademarked interface labels.
- Never reuse the reference's exact headline, feature copy, documentation labels, or wording.
- Never reproduce its illustrations, screenshots, charts, code samples, icons, or imagery; create original abstract visuals for the user's product.
- Never make the result look like a pixel-for-pixel clone. Preserve only the underlying principles: an editorial headline, an asymmetric bordered feature grid, restrained colour, generous spacing, and quiet product visualizations.
- Never add decorative imagery that does not clarify a feature or fit the user's own brand.
