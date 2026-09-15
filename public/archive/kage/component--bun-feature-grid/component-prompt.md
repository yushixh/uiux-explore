## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073822-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-feature-grid

# Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and technical vocabulary are. Then adapt the principles below to my product rather than reproducing the reference literally.

## Build an interactive workflow feature section
Create a responsive feature section that explains how a technical product supports a complete workflow. The section should feel editorial, precise, and operational: users should understand the value proposition while being able to inspect realistic steps and their corresponding output.

### Content structure
- Use a two-column desktop composition inside a generous centered container.
- In the left column, place:
  - A large, tightly set headline explaining the product's broad workflow value.
  - A short supporting paragraph that clarifies that each step is concrete and inspectable.
  - A vertical sequence of five numbered workflow items.
- In the right column, place a large dark output or preview panel that responds to the selected workflow item.
- Below the panel, include a quiet status caption and compact previous, replay/play, and next controls.
- Treat the workflow list as the feature grid: each row represents one capability and should expose a concise title, an example command or action, and—when active—a short explanatory description plus an optional documentation link.

### Layout and alignment rules
- Use a max-width of roughly 1120–1240px with generous horizontal margins.
- On desktop, make the text/workflow column approximately 40% wide and the output panel approximately 60% wide, with a 56–72px gap.
- Align the headline, list, panel, caption, and controls to a consistent vertical rhythm; avoid unnecessary card nesting.
- The active workflow item may use a soft filled rectangle extending to the column edges, while inactive items remain visually light and open.
- Keep the output panel dominant but not oversized: use a 16:9-ish or 1.35:1 aspect ratio, with a minimum height that keeps technical output readable.
- On smaller screens, stack the columns, placing the headline and workflow list before the output panel. Preserve the active state and make controls easy to tap.

### Typography hierarchy
- Use a bold grotesk or modern sans-serif for the main heading, with large display sizing around 56–76px on desktop, tight line-height around 0.9–1.0, and slight negative tracking.
- Use a neutral sans-serif for descriptions and interface labels, around 16–18px with 1.45–1.6 line-height.
- Use a monospaced font for step numbers, commands, output, status labels, and technical tokens.
- Make step numbers small and clearly separated from titles; use uppercase or compact labels sparingly.
- Keep paragraph measure around 38–48 characters so the introduction remains easy to scan.

### Colour direction
Adapt the palette to the user's brand, but begin with a restrained technical palette:
- Page background: warm white, approximately `#FAFAF8` or `#FFFFFF`.
- Primary text: near-black, approximately `#101010`.
- Secondary text: cool medium gray, approximately `#686868`.
- Active row background: very pale neutral gray, approximately `#F1F1F0`.
- Output panel: deep charcoal, approximately `#111113`.
- Output text: soft gray-white, approximately `#D8D8D8`.
- Accent: a vivid pink-magenta or another single brand accent, approximately `#D92A83`, used for prompts, bullets, active indicators, or key status values.
- Maintain strong contrast and use colour as a functional state signal rather than decoration.

### Borders, radius, and surfaces
- Prefer thin, low-contrast rules around `#E4E4E1` or subtle horizontal dividers over heavy card borders.
- Give the output panel a small radius around 3–6px; keep the list surface mostly square or use a restrained 2–4px radius.
- Avoid shadows, gradients, glass effects, and excessive rounded cards.
- Use generous internal padding in the active row and output panel, approximately 20–28px.

### Interaction and motion
- Selecting a workflow item updates the output panel, caption, and selected-state indicator.
- The active row should be obvious through its pale background, accent marker, or stronger text—not through a dramatic animation.
- Support previous/next navigation and a replay or play control for the output sequence.
- If autoplay exists, pause it when the user hovers or focuses the output panel and provide an accessible pause/play control.
- Use short, restrained transitions around 150–250ms for active-row changes and output swaps.
- Make every control keyboard accessible with visible focus states, descriptive labels, and appropriate ARIA state attributes.
- On touch devices, ensure rows and controls have at least a comfortable 44px hit area.

### Implementation guidance
- Build the component from data-driven workflow items so titles, commands, descriptions, output states, and documentation links can be replaced easily.
- Use semantic headings, an ordered list for the workflow sequence, and a live-region strategy that does not overwhelm screen readers when output changes.
- Use realistic placeholder commands and output for the user's product, but keep the panel legible and concise rather than simulating a full terminal.
- Ensure the section works without JavaScript as a readable list, then progressively enhance it with selection and playback.

## Never
- Never copy the reference's logo, product name, brand identity, or exact wording.
- Never reuse the reference's commands, release notes, output text, labels, or documentation copy.
- Never reproduce the exact layout measurements, typography, or visual styling as a pixel-for-pixel copy; use the underlying interaction and hierarchy as inspiration.
- Never use illustrations, screenshots, or imagery from the reference.
- Never add decorative visuals that compete with the workflow, output, or product explanation.
