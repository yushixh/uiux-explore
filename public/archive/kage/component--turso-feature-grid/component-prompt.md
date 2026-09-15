## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073738-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Component on Kage: https://kage.design/component/turso-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what visual brand it uses. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Design the section
Build a dark, self-contained feature section that explains why an established approach no longer fits a changing product or technical environment, then contrasts the old model with a more scalable or differentiated model.

### Layout and alignment
- Use a full-width section with a very dark background, approximately `#0b1013`, and a subtle 1px outer border around a large rounded container.
- Center the content inside a max-width of roughly 1120–1200px, with generous vertical padding of 64–96px on desktop and 40–56px on mobile.
- Place the heading and explanatory copy in a narrow centered column. Keep the heading to roughly 2–3 lines and the paragraph to 4–6 readable lines.
- Add a short conclusion or emphasis line below the paragraph. Let one phrase use the product’s accent colour while the remaining text stays muted.
- Below the narrative, place a second bordered diagram panel with rounded corners. Use a two-column comparison on desktop and stack the columns on smaller screens.
- Keep both comparison columns visually balanced, with a clear gap or subtle divider between them. Align each column’s title, subtitle, and visual from the same left edge.
- The left visual should communicate a centralized or conventional model: one large container holding a regular grid of related units.
- The right visual should communicate a distributed, isolated, or next-generation model: a top-level control layer above several individually bounded units. Use a faint dashed boundary or grouped enclosure to distinguish the fleet.
- Treat the diagram as explanatory UI, not as a literal product interface. Use generic labels or labels derived from the user’s product domain.

### Typography hierarchy
- Use a clean sans-serif with a bold, compact headline around 36–40px on desktop, 28–32px on mobile, with tight line-height around 1.05–1.15.
- Use a 16–18px body size, around 1.4 line-height, in a low-contrast grey such as `#858d91`.
- Use 18–20px semibold labels for comparison headings and 13–15px muted subtitles.
- Use 15–16px semibold text for diagram controls and unit labels; use 11–12px grey supporting labels where needed.
- Maintain strong contrast for the main heading and primary diagram labels, approximately `#f4f6f5`.

### Colour and visual language
- Use near-black surfaces from `#0b1013` to `#10161a`, with slightly lighter nested panels around `#111a20` or `#14202a`.
- Use cool grey text for supporting content: `#858d91` to `#a0a8aa`.
- Choose one bright brand accent appropriate to the user’s product. A vivid mint/teal around `#44e8b1` works well for emphasis, but replace it if the brand calls for another colour.
- Apply the accent sparingly to one highlighted sentence, status mark, or key boundary—not to every card.
- Use thin, low-contrast borders around `#253038`; use a slightly brighter blue-grey border around the primary diagram or selected grouping.
- Add only very subtle gradients or glow effects, if any. The section should feel technical, calm, and precise rather than glossy.

### Borders, cards, and spacing
- Use 1px borders and large outer radii around 14–16px. Use 8–10px radii for inner unit cards.
- Give the narrative a consistent vertical rhythm: heading to paragraph 24–28px, paragraph to emphasis 22–28px, emphasis to diagram 40–48px.
- Give the diagram panel 36–56px of internal padding on desktop and 20–24px on mobile.
- Use a regular grid with equal-width cells, consistent 8–12px gaps, and enough padding that each unit feels isolated.
- Differentiate the old and new models with structure, not excessive colour: a solid outer enclosure for the centralized model and a control bar plus dashed fleet boundary for the distributed model.

### Interaction and responsive behaviour
- If the diagram includes hoverable units, provide a restrained hover state: slightly brighter border, a small surface lift, and clearer supporting text. Do not animate the entire layout.
- Use transitions around 150–200ms with an ease-out curve.
- Preserve the comparison relationship at all breakpoints. On mobile, stack the models vertically, keep the diagram cells readable, and allow horizontal breathing room rather than shrinking labels excessively.
- Ensure borders, muted text, and accent text meet accessible contrast requirements. Respect reduced-motion preferences.

## Never
- Never reuse logos, product names, exact copy, labels, illustrations, diagrams, or imagery from the reference.
- Never reproduce the reference’s distinctive wording or exact grid contents.
- Never make the section dependent on an image asset; build the visual comparison with HTML/CSS or the product’s own neutral UI primitives.
- Never add decorative effects that compete with the explanatory hierarchy.
