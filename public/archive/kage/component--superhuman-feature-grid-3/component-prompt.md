## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060754-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060721-full.webp
- Component on Kage: https://kage.design/component/superhuman-feature-grid-3

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colour palette, and typography are. Then apply the principles below to my product rather than reproducing the reference.

## Build a responsive feature-grid section
Create a polished marketing-page section that helps visitors scan a product’s capabilities through a visual showcase and category-filtered benefit cards. Use the following as reusable design rules.

### Structure and layout
- Place the section on a soft warm off-white canvas, approximately `#F7F6F2`.
- Start with a centered introductory block: an optional small eyebrow, a concise headline, a one-sentence supporting paragraph, and a compact action row. Keep the headline large and calm, around 44–56px desktop, with a readable max width of roughly 850px.
- Below the introduction, create a responsive feature showcase with a 2-column grid and consistent rounded corners:
  - One dominant feature spans both columns and is split horizontally into a dark colour panel on the left and a product/interface preview on the right. The text panel should occupy about 42% of the width.
  - Beneath it, add two equal supporting cards. Each card pairs a short eyebrow and benefit statement with a cropped, abstract product UI preview. Keep the text legible even when the preview is visually busy.
- Add a horizontal category navigation below the showcase. It should contain 4–6 evenly distributed items with simple line icons, labels, and a clear active state. Separate it from the content below with a thin rule; use an underline or darker bottom border for the active item.
- Under the tabs, show a three-column grid of smaller benefit cards. Each card should include a small rounded-square icon tile, a compact heading, and a brief explanatory paragraph. On tablet use two columns; on mobile use one column.
- Use a generous vertical rhythm: approximately 72–104px around the section intro, 24px between major cards, 48–64px between showcase and tabs, and 56–80px between tabs and the benefit grid.
- Keep the overall content width around 1180–1240px and align every grid edge to the same container.

### Typography
- Use a contemporary sans-serif with a friendly, high-quality editorial feel.
- Establish a clear hierarchy: large regular-weight headline, medium-weight card headings, small uppercase or sentence-case eyebrows, and muted body copy at 16–18px with 1.45–1.6 line height.
- Prefer short, benefit-led statements. Avoid dense paragraphs and avoid making every heading bold.
- Use near-black text such as `#242322` on light surfaces and warm white such as `#F8F7F3` on dark panels.

### Colour and surfaces
- Keep the page mostly neutral and let each feature tile have a distinct accent surface.
- Use deep teal or forest tones around `#0B4C4A`, dark berry around `#451B25`, and pale stone around `#E2E0DC` for the showcase cards. Adjust these colours to suit the user’s brand.
- Benefit cards should be subtle off-white or pale grey with very low-contrast tonal variation from the page background, approximately `#F0F0EB`.
- Use small pastel icon tiles—mint, blush, lavender, or pale blue—with dark monochrome glyphs. Keep accents soft rather than neon.
- Product previews should look like simplified UI fragments: panels, text lines, lists, dialogs, and controls. They may use gentle translucency, blurred layering, and a restrained accent gradient, but must remain secondary to the copy.

### Borders, radius, and depth
- Use large rounded corners on showcase tiles, approximately 12–16px; use 10–14px on smaller cards and icon tiles.
- Use subtle borders such as `1px solid rgba(36,35,34,.10)` and very soft shadows only where needed to distinguish cards.
- Avoid heavy outlines, glossy effects, excessive drop shadows, and overly decorative gradients.
- Crop interface previews inside their cards so they feel like glimpses of a real product rather than full screenshots.

### Interaction and responsiveness
- Make category tabs interactive. The active tab should update the three-card benefit grid with a short crossfade or slide transition, while preserving a clear keyboard-focus ring.
- Add restrained hover feedback to cards: a slight lift, border-colour change, or gentle preview movement. Do not let hover effects alter layout.
- On small screens, turn the tab rail into a horizontally scrollable row with hidden scrollbar and snap points. Keep labels fully readable.
- Stack the showcase panels vertically on mobile, with the text panel first and the interface preview below it. Maintain a minimum touch target of 44px for tabs and controls.
- Ensure strong contrast, visible focus states, semantic headings, accessible tab roles, and reduced-motion support.

### Content guidance
- Write original copy for the user’s product. Use concise category labels and concrete outcomes rather than generic feature names.
- Create interface previews from neutral CSS shapes or invented UI data that communicate the feature without relying on external assets.

## Never
- Never copy the reference product’s logo, iconography, product names, labels, screenshots, interface text, or marketing copy.
- Never use the reference brand name or reproduce its exact colour combinations, typography, proportions, or visual assets.
- Never include logos, product names, copy, illustrations, or imagery from the reference; invent equivalents for the user’s product instead.
- Never make the section dependent on imagery or external brand assets to communicate its value.
