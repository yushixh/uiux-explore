## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060473-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060452-full.webp
- Component on Kage: https://kage.design/component/posthog-feature-grid-3

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colour palette, and illustration or visual language they already use. Then apply the principles below to create an original resource-link section for that product rather than reproducing the reference.

## Design goal
Build a relaxed editorial feature-grid section that introduces a small set of secondary resources or next steps. The section should feel useful and slightly playful: clear enough to scan quickly, but more characterful than a standard list of cards.

## Layout and alignment
- Use a wide, responsive two-column composition inside the page's main content container.
- Keep the text column on the left and reserve the right side for a decorative visual, product detail, or deliberately open space. The visual should support the content rather than compete with it.
- Align the heading, supporting copy, and link list to the same left edge.
- Let the section breathe vertically; avoid compressing the links into a dense navigation block.
- On smaller screens, stack the columns, keeping the text and links first and placing the visual below or beside them only when space allows.
- Use a flexible grid such as `minmax(0, 1.1fr) minmax(220px, 0.9fr)` and collapse to one column around tablet width.

## Typography hierarchy
- Use a prominent but compact section heading, approximately 32–40px on desktop and 26–32px on mobile, with a bold or semibold weight and tight line-height around 1.05–1.15.
- Set the supporting paragraph at approximately 17–20px with a relaxed line-height around 1.4–1.55 and a readable maximum width of roughly 560px.
- Render each resource as a clearly legible 17–19px semibold link. Keep labels short and let them wrap naturally rather than truncating them.
- Use sentence case and a friendly editorial voice appropriate to the user's brand.

## Spacing
- Give the heading 28–40px of space before the supporting copy, depending on the surrounding page rhythm.
- Place the link list 24–36px below the paragraph.
- Use 14–20px vertical spacing between links; include enough room for a comfortable tap target on mobile.
- Keep approximately 48–96px of section padding above and below, tuned to the rest of the page rather than applied mechanically.

## Colour
- Start with a warm, quiet background around `#F1F2EE` or another lightly tinted neutral instead of pure white.
- Use a deep near-black for headings and links, around `#17202B`.
- Use a softer charcoal for supporting text, around `#3F4650`.
- Use a muted grey for list markers, around `#6E746F`.
- If the brand needs an accent, reserve it for hover states or a small visual detail; do not colour every link brightly.

## Links and interaction
- Present resources as a simple vertical list, optionally with small circular bullets or another restrained marker.
- Use visible underlines or another unmistakable affordance for links. Underlines may be offset slightly from the text for a polished editorial feel.
- On hover and keyboard focus, strengthen the underline, shift the colour toward the brand accent, or make a subtle 1–2px movement. Keep the interaction quick and restrained.
- Ensure focus states are clearly visible and never rely on colour alone.
- Use real links with meaningful accessible labels and a generous clickable area.

## Borders, radius, and visual treatment
- Avoid turning every resource into a rounded card; the open list is part of the component's character.
- If a container or visual frame is used, keep the border thin, around `1px solid #D8DCD5`, with a modest radius of 8–16px.
- Prefer irregular or editorial placement for the supporting visual, while keeping its bounding area aligned to the overall grid.
- Any illustration or visual asset must be newly created for the user's product and can be abstract, diagrammatic, photographic, or omitted entirely.

## Responsive and accessibility requirements
- Preserve strong contrast between text and background.
- Maintain a logical heading level and a semantic list of links.
- Make the entire component usable with keyboard navigation and screen readers.
- Avoid layout shifts when links receive focus or hover.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the exact wording, visual asset, proportions, or brand-specific styling of the source.
- Never hide the links behind cards, icons, or hover-only interactions if that harms scanability.
- Never use low-contrast text, tiny tap targets, or decorative visuals that overpower the resource list.
