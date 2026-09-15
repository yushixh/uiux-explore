## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106638-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106570706-full.webp
- Component on Kage: https://kage.design/component/thousand-feature-grid-2

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Goal
Build a responsive feature-grid section that explains several product capabilities through an editorial headline, concise supporting copy, and a set of polished UI-preview cards. The section should feel calm, human, tactile, and slightly playful, with product details doing the visual storytelling instead of decorative illustrations.

## Design language

### Layout and alignment
- Use a wide, centered content container with generous horizontal margins: approximately `48px` on desktop, `24px` on tablet, and `18px` on mobile.
- Begin with a two-column section introduction: a large headline aligned left and a short explanatory paragraph aligned right. On small screens, stack them with the paragraph beneath the headline.
- Place a thin horizontal divider below the introduction, with roughly `32px` of space above and below it.
- Use an asymmetric bento-style grid beneath the divider. On desktop, make the first feature card occupy the left column and span two rows; place two horizontally wider cards in the right column, stacked vertically.
- Keep card edges aligned to a clear grid. Use a gap of approximately `20px`; reduce it to `14–16px` on smaller screens.
- On mobile, collapse to one column while preserving the reading order: primary feature first, then supporting features.
- Give the primary card enough internal height for a large interface preview. Avoid forcing all cards to equal height if doing so weakens the composition.

### Typography hierarchy
- Use a friendly, rounded display sans or humanist grotesk for headings. The main section headline should be bold, compact, and highly legible at approximately `44–52px` desktop, with a `0.95–1.05` line-height.
- Distinguish the second line or supporting phrase of the main headline with a lighter weight or softer colour rather than introducing a different typeface.
- Card titles should be bold and approximately `23–27px`, with tight line-height and a maximum width that encourages intentional wrapping.
- Card descriptions should be approximately `15–17px`, use a relaxed `1.45` line-height, and include occasional bold phrases for emphasis.
- UI mockups may use a compact mono or neutral sans for filenames, metadata, labels, timestamps, and technical details. Keep these details subtle and secondary.

### Colour
- Use a warm off-white page background, approximately `#F4F1E8` or `#F6F3EA`.
- Use cards in a slightly lighter cream, approximately `#FBFAF5`, with dark near-black text around `#171715`.
- Use muted grey-beige body text around `#77756D` and faint divider/border tones around `#DDD9CD`.
- Give interface preview areas restrained pastel surfaces: pale sage around `#DCEED4`, powder blue around `#DDEAF1`, and soft yellow around `#F8E39A`.
- Use almost-black controls and buttons around `#171715`, with warm white text. Accent colours should appear sparingly in status dots, highlights, tags, and selected text.
- Maintain strong contrast for all meaningful text; pastel surfaces are for atmosphere, not for low-contrast copy.

### Borders, radius, and depth
- Use a fine, low-contrast `1px` border on cards, approximately `#DEDACF`.
- Use large, soft card corners around `22–26px`; use approximately `12–16px` for nested UI panels.
- Keep shadows extremely subtle: a diffuse warm shadow such as `0 8px 24px rgba(55, 48, 32, 0.06)`. The visual language should feel printed and tactile rather than glossy.
- Add generous card padding, approximately `38–40px` on desktop and `24px` on mobile.
- Let interface previews sit inside their own inset surface with rounded corners and enough breathing room from the card copy.

### Feature-card composition
- Each card should start with a concise benefit-oriented title and one short explanatory paragraph.
- Use realistic but invented product UI previews that communicate the feature: for example, a document editor with formatting controls, a share panel with permissions, or a contextual comment thread.
- Keep previews schematic and product-specific to the user’s product, but make them feel functional through small details such as toolbars, filenames, avatars, timestamps, status pills, tables, highlighted text, and compact actions.
- In the tall primary card, let the preview occupy most of the lower card area and resemble a document or workspace surface.
- In horizontal cards, use wider preview compositions with layered panels or a small floating browser/document window to create depth.
- Align preview content carefully. Use thin rules, restrained labels, small controls, and generous whitespace rather than dense dashboards.
- If avatars are needed, use abstract coloured circles or generated initials; do not rely on external imagery.

### Interaction
- If cards or preview controls are interactive, provide restrained hover states: slightly darker border, a small upward translation of `1–2px`, or a very soft shadow increase.
- Buttons, tabs, tags, and permission controls should have visible focus states and keyboard accessibility.
- Avoid making decorative mockup controls appear deceptively functional unless the surrounding card is actually interactive.
- Use gentle transitions around `160–220ms` with an ease-out curve.
- Respect `prefers-reduced-motion` by disabling movement and using only colour or border changes.

### Responsive behaviour and accessibility
- Keep the headline readable without excessive wrapping; use fluid type such as `clamp()` where appropriate.
- Preserve generous touch targets of at least `44px` for actual controls.
- Ensure the grid remains understandable when stacked and that every feature has a meaningful text alternative.
- Do not encode important information through colour alone.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the reference’s exact text, UI labels, filenames, URLs, avatars, or interface content.
- Never make a pixel-for-pixel copy of the layout; adapt the grid proportions, feature count, and preview concepts to my product.
- Never use loud gradients, heavy drop shadows, excessive glassmorphism, or dense dashboard styling.
- Never sacrifice readability or accessibility for the editorial aesthetic.
