## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073822-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-hero

## Before you start
Ask the user what their product is, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original hero for that product—not a copy of any reference.

## Design the section
Build a technical product hero for a developer tool, runtime, platform, CLI, API, or infrastructure product. The section should make the value proposition immediately legible while giving technically minded visitors a concrete first action and evidence of performance.

### Layout and alignment
- Use a centered, wide content container with generous horizontal margins; approximately 1120–1180px on desktop.
- Create a two-column hero grid: the left column is approximately 48% wide and contains the announcement, headline, supporting copy, install block, and secondary link; the right column is approximately 52% wide and contains a bordered benchmark, compatibility, or workflow panel.
- Align both columns to a shared top baseline, but allow the right panel to sit slightly lower if needed to create visual balance.
- Give the hero generous vertical padding, approximately 64–88px desktop and 40–56px mobile.
- On small screens, collapse to one column: headline and install action first, evidence panel second. Avoid horizontal overflow.
- If the page has a global announcement strip or navigation, keep the hero visually separated from it with a thin rule or clear whitespace.

### Typography hierarchy
- Use a bold, condensed or tightly tracked sans-serif for the main headline. Make it large and compact: approximately 56–68px desktop, 42–52px tablet, and 34–42px mobile, with a line-height around 0.95–1.02.
- Keep the headline to 3–5 short lines and use one accent colour to emphasize a meaningful word or phrase, not decorative text.
- Use a neutral sans-serif for body copy, approximately 18–20px with 1.4–1.55 line-height. Limit the paragraph width to roughly 430–500px.
- Use small uppercase or monospace metadata for release labels, versions, command snippets, chart annotations, and technical qualifiers. Use letter spacing around 0.06–0.12em where appropriate.
- Make the primary action label clear and compact; avoid marketing-heavy button copy.

### Colour
- Use a mostly monochrome palette: near-black `#111111` or `#0B0B0B`, white `#FFFFFF`, body grey `#5F5F5F`, and light border grey `#D9D9D9`.
- Choose one vivid brand accent for emphasis, approximately magenta `#E6298F`, electric blue, lime, orange, or another colour appropriate to the user's brand. Use it sparingly for highlighted headline text, status labels, active chart elements, and small markers.
- Keep the evidence panel predominantly white with black type and pale grey chart tracks so the accent reads as a signal of speed or selection.
- Ensure all text and controls meet accessible contrast requirements.

### Borders, controls, and radius
- Prefer crisp 1px borders and square or nearly square geometry. Use a radius between `0px` and `4px`; avoid soft cards and excessive pill shapes.
- Render the install command as a dark terminal-style rectangle with monospace text, a coloured prompt symbol, and a copy affordance at the far edge.
- Place platform choices or variants in a compact segmented control beneath the command. Give the selected segment a dark fill with white text and unselected segments a white fill with dark text.
- Build the benchmark panel as a single bordered rectangle with a tab row, strong dividers, and tightly organized labels. Use horizontal bars, values, units, and a small explanatory footer rather than decorative imagery.
- Use hover and focus states that strengthen the border or invert the control colours; provide a visible keyboard focus ring.

### Interaction and behaviour
- Make benchmark tabs switch the panel's dataset or metric while preserving the same layout. The active tab should be unmistakable through dark fill, contrast, and a bottom or side divider.
- Make the copy control copy the command and provide a short confirmation such as “Copied”.
- If the chart is animated, animate only the bars or active indicator with a quick, restrained transition; respect `prefers-reduced-motion`.
- Keep the primary install action visible without requiring interaction. Secondary links should look textual and use an arrow or understated external-link cue.
- On mobile, make tabs horizontally scrollable or wrap cleanly, and ensure command text can be copied without being clipped.

### Content structure
- Start with a small release, status, or category eyebrow.
- Follow with a concise statement of what the product does and its strongest differentiator.
- Add one paragraph that explains the practical workflow or compatibility benefit.
- Provide an immediately executable install or “try it” command.
- Support the claim with a benchmark, comparison, system status, workflow preview, or other information-dense proof panel.

## Never
- Never reuse logos, mascots, product names, exact copy, commands, version strings, benchmark labels, or data from the reference.
- Never reproduce the reference's illustrations, icons, imagery, chart values, tab names, or brand-specific visual assets.
- Never make the hero a pixel-for-pixel recreation; change the content, proportions, accent colour, panel subject, and interaction details for the user's product.
- Never use decorative imagery where a clear interface, metric, command, or product-specific proof would communicate more effectively.
- Never sacrifice readability, responsive behaviour, or keyboard accessibility for visual similarity.
