## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073868-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-gallery

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Build this section
Create a full-width product-marketing section that explains a technical benefit and demonstrates it with a large interactive code-workspace panel, followed by the beginning of a visual showcase section.

### Design language

- Use an editorial, highly structured layout with a faint technical grid in the background. The grid should use very thin lines, approximately `#e5e7eb` at 50–70% opacity, with larger vertical guides aligned to the main content container.
- Keep the content inside a centered max-width container of roughly `1180–1240px`. Use generous horizontal padding: about `48px` on desktop, `24px` on tablet, and `20px` on mobile.
- Start with a small uppercase eyebrow label in a bright accent colour chosen from the product brand. It should use a compact monospace or strongly geometric sans-serif style, around `11–12px`, semibold, with roughly `0.12em` letter spacing.
- Place a bold, compact headline beneath it. Use a modern sans-serif display face, approximately `40–48px` on desktop, `34–40px` on tablet, and `30–34px` on mobile. Keep line height tight at about `0.98–1.08`, with slightly negative tracking. The headline should communicate one concrete product outcome.
- Add a short explanatory paragraph below the headline. Constrain it to approximately `680–760px` so it remains readable, use `17–18px` text with `1.55–1.7` line height, and set the colour to a muted charcoal such as `#4b5563`.
- If useful for the product’s visual system, include a subtle developer-facing token or utility label above the paragraph in a tiny monospace style. Keep it low contrast, around `#d1d5db`, so it reads as annotation rather than primary content.
- Separate the introduction from the demo with substantial vertical space, approximately `64–72px` on desktop and `40–48px` on mobile.

### Code workspace demo

- Build a large dark demo panel spanning the full content width. Use a near-black navy background such as `#171a24` or `#151923`, with a slightly lighter internal surface around `#202431`.
- Give the outer workspace a dark border, approximately `#0b0d13`, and a rounded corner radius of `12–14px`. Use a restrained shadow or a subtle inset edge; avoid glossy effects.
- Divide the workspace into an asymmetric editor layout: a wider left area and a narrower right area, with the left area split horizontally into a code editor above and a terminal below. On desktop, use a roughly `62% / 38%` column split; on mobile, stack the panels vertically.
- Add thin separators between panes using `#303542`. Make the pane boundaries visually clear without overpowering the code.
- Place small circular window controls in the top-left of the workspace, using muted slate colours such as `#4b5563`, `#374151`, and `#26303d`. Keep them decorative and compact.
- Add tab labels along the top of the editor. The active tab should have a slightly lighter filled background, such as `#343946`, while inactive tabs remain transparent or subtly muted. Use `12–13px` sans-serif or monospace text in `#d1d5db` and `#9ca3af`.
- Render believable sample code with syntax highlighting, but keep it generic to the user’s product. Use a monospace font around `13–14px`, `1.8–2` line height, and muted line numbers in `#697184`. Use a restrained palette such as pale blue `#93c5fd`, mint `#86efac`, lavender `#c4b5fd`, warm yellow `#fde68a`, and soft pink `#f9a8d4` against the navy surface.
- Include a terminal pane with a small tab label and a mostly quiet output area. The empty space is intentional: it gives the demo visual weight and suggests a fast, uncluttered workflow.
- Add a second right-hand file or output pane to communicate that the workflow produces a useful result. Keep its content sparse and legible rather than filling it with dense code.
- The demo should feel like a product proof point, not a full IDE. Prioritize composition, hierarchy, and visual credibility over functional completeness.

### Follow-on showcase section

- After the workspace, continue the same grid and container system into a new editorial block with another small uppercase eyebrow and a large two-line headline describing creative freedom or breadth of use cases.
- Place a muted supporting paragraph beneath it, then introduce a wide horizontal gallery of product/site examples.
- The gallery may use several adjacent cards or screenshots with varied proportions, but create original placeholder previews using CSS blocks, gradients, typography, and abstract layouts. Do not use external imagery unless the user provides it.
- Allow the gallery to extend slightly beyond the container or clip at the viewport edge to create an editorial, browsable feel. On mobile, enable horizontal scrolling with hidden or subtle scrollbars.
- Use a modest radius around `10–14px` and a thin neutral border around gallery items. Keep the gallery visually richer than the text while preserving the monochrome grid background.

### Responsive and interaction rules

- On narrow screens, reduce the headline size, stack the workspace panes, let code scroll horizontally, and preserve comfortable `20–24px` outer padding.
- Make tabs, gallery cards, and any demo controls keyboard accessible. Use visible focus rings in the brand accent colour.
- If tabs are interactive, show a clear active state and switch between believable file contents without changing the overall layout. If no real interaction is needed, make the workspace a polished static demonstration.
- Respect reduced-motion preferences. Use only subtle hover transitions: slight border or background changes, never exaggerated scaling.
- Ensure text contrast meets accessibility standards and never rely on colour alone to communicate active or selected states.

## Never

- Never copy the reference’s logos, product names, brand marks, or exact marketing copy.
- Never reuse the reference’s illustrations, screenshots, imagery, or recognizable website previews.
- Never reproduce the exact code samples, tab labels, file names, or product-specific terminology from the reference.
- Never make the result a pixel-for-pixel imitation; adapt the layout principles, proportions, tone, and interaction model to the user’s product and brand.
- Never sacrifice responsive behaviour, semantic HTML, keyboard access, or readable contrast for visual similarity.
