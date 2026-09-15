## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073865-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-feature-grid

# Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, and technical capability are. Then apply the principles below to create an original feature section for my product—not a replica of this reference.

## Design the section
Build a polished, responsive feature-grid section that explains one important developer-facing capability through a large code or product-interface preview on the left and a compact explanatory content block on the right.

### Layout and alignment
- Use a warm near-white page background, approximately `#fafafa` or `#fbfbfb`.
- Place the section inside a centered container with a maximum width of roughly 1160–1240px and generous vertical padding, around 120–160px on desktop.
- Create a two-column composition: the visual column should occupy about 60% of the width and the text column about 40%, with a 72–112px gap.
- Align the text block vertically around the middle of the visual rather than forcing both columns to share a strict top edge.
- Let the visual extend beyond its nominal grid area with controlled overlap: use two or more layered browser/code windows, offset slightly in both axes, so the section feels dynamic while remaining orderly.
- On smaller screens, stack the visual above the text, reduce the offsets, and make every panel fit within the viewport without horizontal scrolling.
- Keep the overall composition calm and spacious; the code preview is the visual anchor, while the content block is the reading anchor.

### Typography hierarchy
- Use a modern grotesk or system sans-serif with a clean, high-contrast appearance.
- Set the feature heading large and compact, approximately 40–48px on desktop with a 0.95–1.05 line-height and slightly tight letter spacing. Use 32–38px on mobile.
- Use a supporting paragraph around 18px with a 1.45–1.6 line-height and a muted grey tone.
- Keep the heading to two or three lines when appropriate; do not use a long marketing paragraph.
- Render technical terms, filenames, commands, or API names in a small monospace inline treatment with a subtle grey background and a 3–5px radius.
- Use a short label, eyebrow, or icon cluster above the heading only when it adds meaning; keep it visually secondary.

### Code and interface preview
- Build a believable but generic code editor mockup rather than a decorative rectangle. Include a slim top bar, tiny circular window controls, a filename or tab, a divider, and readable syntax-highlighted code.
- Use one primary editor card and an optional secondary package/config card overlapping its lower edge. The cards should have a white or very light surface, a thin border around `#e3e3e3`, a 7–10px radius, and a soft shadow such as `0 8px 24px rgba(0,0,0,0.08)`.
- Use monospace text around 12–14px with generous line spacing. Keep the code snippets short enough to scan and make the content relevant to the user's product without copying reference content.
- Use restrained syntax colours: deep charcoal for identifiers, muted blue for keywords, muted red or rose for strings, and subdued green or teal for values. Avoid rainbow syntax highlighting.
- Ensure the preview communicates the capability even if it is static; add small details such as line numbers, tabs, or a config panel only when they improve comprehension.

### Colour, borders, and controls
- Use near-black text around `#080808`, secondary text around `#666666`, white surfaces around `#ffffff`, and hairline borders around `#e5e5e5`.
- Introduce one bright brand accent for the primary action, such as mint `#63f2ad`, while adapting it to the user's brand if needed. Keep the accent concentrated rather than colouring the entire section.
- Style the CTA as a rounded pill with approximately 16–24px horizontal padding, 13–16px vertical padding, dark text, and a right-pointing arrow or chevron.
- Give the CTA a subtle hover state: slightly darken or brighten the accent, lift it by 1–2px, and animate the arrow a few pixels to the right. Keep transitions around 160–220ms.
- Do not overuse rounded cards. The text block should remain open and editorial, while the code windows provide the contained UI surfaces.

### Content strategy and interaction
- Lead with a concise, outcome-oriented heading that states what becomes easier.
- Follow with two or three sentences explaining the practical benefit, using the user's terminology and avoiding vague claims.
- Make the CTA specific to the next step, such as exploring a workflow, reading documentation, or trying the capability.
- Add responsive motion only if appropriate: a very subtle reveal or layered-card entrance on scroll, respecting `prefers-reduced-motion`.
- Make the section accessible: semantic heading structure, descriptive labels for the preview, keyboard-visible focus states, sufficient colour contrast, and a non-colour-dependent explanation of syntax.

## Never
- Never use the reference product's logo, product name, brand marks, or exact marketing copy.
- Never copy the reference code, filenames, package names, icons, or CTA wording.
- Never reuse the reference illustration, imagery, screenshot, or exact visual arrangement; create a new preview suited to my product.
- Never make the code window purely decorative if a meaningful product-specific example can be shown.
- Never crowd the section with extra cards, badges, navigation, or unrelated features.
- Never sacrifice mobile readability for the desktop overlap effect.
