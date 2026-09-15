## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097620-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097588315-full.webp
- Component on Kage: https://kage.design/component/labs-winszn-feature-grid-3

## Before you start
Ask what the user's product is, who it is for, and what brand direction, voice, and visual identity it already has. Then apply the principles below to that product rather than reproducing this reference.

## Build a numbered process feature grid
Create a full-width editorial feature section that explains a product, service, workflow, or set of benefits as a sequence of horizontal rows. The component should feel intentional, premium, restrained, and easy to scan—not like a collection of boxed cards.

### Layout and alignment
- Use a dark, near-black section background, with a centered content container that has generous horizontal padding.
- Build four or more rows in a single vertical stack. Each row should use a three-column layout:
  1. a narrow index column for a two-digit step number;
  2. a medium label column for the short stage name;
  3. a wide description column for one or two sentences.
- Keep the left edges of all columns perfectly aligned across rows. The description column should occupy the most width and have a readable maximum line length.
- Place a thin horizontal divider between rows and optionally above the first row. Dividers should span the full inner container.
- Give each row substantial vertical padding so the section breathes; do not compress the content into a dense list.
- On smaller screens, preserve the reading order: index above or beside the label, followed by the description. A practical mobile arrangement is a two-column top line for index and label, with the description below; keep dividers full width.
- Let the component sit comfortably within the surrounding page rhythm, with enough top and bottom space to feel like a deliberate section rather than an isolated widget.

### Typography hierarchy
- Use a clean geometric or contemporary sans-serif with slightly rounded forms, matching the user's brand where possible.
- Make the stage label the dominant element in each row: large, bold, and compact, with sentence case or title case.
- Make descriptions materially smaller and lighter than labels, while keeping enough contrast for comfortable reading. Use a relaxed line height for descriptions that wrap.
- Render indexes in a small uppercase-looking numeric style with increased letter spacing. Keep them visually secondary but distinct through an accent colour.
- Avoid excessive typographic decoration, all-caps body copy, or multiple competing font styles.

### Colour
- Use an approximate background of `#151413` or another brand-appropriate near-black.
- Use warm off-white for labels, approximately `#F2F0EC`.
- Use muted warm grey for descriptions, approximately `#AAA7A1`.
- Use a restrained coral-orange accent for indexes, approximately `#D95735`; adapt this to the user's brand accent if needed.
- Use a low-contrast divider colour around `#302E2B`, clearly visible but never bright.
- Maintain accessible contrast for all readable text, especially on smaller screens.

### Borders, shape, and surface
- Use 1px horizontal rules with no gradients or heavy shadows.
- Keep the section flat and editorial: no cards, filled panels, floating containers, or decorative illustrations.
- Use square or only very subtly rounded corners where controls or adjacent components require them; the row system itself should not rely on rounded cards.
- Keep the accent limited to indexes or a similarly small metadata detail so the hierarchy remains calm.

### Interaction and responsive behaviour
- This can be static, but if rows are clickable, make the entire row an accessible link or button and provide a subtle hover state: slightly brighter description text, a restrained accent shift, or a minimal background tint.
- Add a visible keyboard focus ring that fits the brand palette without changing the layout.
- Do not make content dependent on hover; every description must remain visible and understandable by default.
- Ensure long labels and descriptions wrap gracefully without overlap. Test the layout at narrow mobile widths and large desktop widths.
- Use semantic markup such as a section, heading structure, and an ordered list where the content represents an actual sequence.

## Never
- Never copy the reference's logos, product names, brand names, or proprietary wording.
- Never reuse the reference's exact process labels, descriptions, or content structure when it does not fit the user's product.
- Never include the reference's illustrations, imagery, icons, or decorative assets.
- Never turn the rows into generic rounded cards with arbitrary shadows.
- Never sacrifice readability or accessibility for visual similarity.
