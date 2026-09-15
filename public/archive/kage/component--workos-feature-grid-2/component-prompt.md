## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073891-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073860-full.webp
- Component on Kage: https://kage.design/component/workos-feature-grid-2

# Before you start

Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Apply the principles below to create an original feature-grid section for their product—not a copy of the reference.

## Build this section

Create a responsive, developer-oriented feature section that communicates a unified platform or cohesive product experience. The section should feel polished, technical, and confident while remaining easy to scan.

### Layout and alignment

- Use a very dark navy background, approximately `#030625` to `#070A2F`, with enough vertical padding to feel like a major page section.
- Begin with a centered eyebrow label in a bright cyan/teal accent, followed by a large centered headline. Keep the eyebrow close to the headline and leave generous space below the headline before the main content.
- Below the heading, use a two-column layout inside a wide max-width container, roughly 1180–1240px. The left column should be narrower, around 40%, and the right code/product preview should occupy around 60%.
- Align the main content columns to the top. On smaller screens, stack them vertically with the explanatory content first and the preview second.
- In the left column, place a short supporting paragraph, then a primary call-to-action and an understated secondary text link with a small line icon. Under those actions, show a compact two-column grid of feature items.
- Each feature item should contain a small icon tile followed by concise supporting copy. Keep the grid airy and avoid card-heavy styling; the dark background should remain visible between items.
- In the right column, create a large rounded code or product preview panel. It should visually balance the feature grid and have enough height to read as a substantial product proof point.

### Typography hierarchy

- Use a clean modern sans-serif with a technical, product-led feel. Use the user’s brand font when available; otherwise use a neutral sans-serif such as Inter, Geist, or system sans.
- Eyebrow: medium or semibold, approximately 24px desktop, with tight tracking and a bright accent colour.
- Main heading: bold, approximately 48–56px desktop with a tight line-height around 1.05–1.12. Keep it to one or two lines where possible.
- Supporting paragraph: 18–20px, line-height around 1.6, in a muted lavender-grey rather than pure white.
- Feature copy: 14–16px with a relaxed line-height around 1.45–1.6. Keep each item to a few short lines.
- Code text: 12–14px monospace with comfortable line spacing. Use subtle syntax colouring, not excessive rainbow highlighting.
- On mobile, reduce the headline to roughly 34–40px and preserve the contrast between heading, body, and feature text.

### Colour and visual tone

- Use approximately `#05072C` for the primary background and `#171B40` or `#1B2047` for the code-panel surface.
- Use near-white `#F7F8FF` for the main heading and soft lavender-grey `#B9BEDA` for body copy.
- Use a saturated cyan or turquoise accent around `#27E7D0`, optionally blending toward `#46B7FF` for links or interface highlights.
- Make the primary button a vivid turquoise gradient or solid turquoise with dark navy text. Add a soft cyan glow around it, but keep the glow controlled and local.
- Feature icon tiles can use a deep blue surface around `#10235B`, with cyan or electric-blue line icons.
- Keep contrast high and avoid introducing large areas of unrelated colour.

### Borders, radius, and depth

- Use a large radius on the code panel, around 18–22px, with a subtle border such as `1px solid rgba(150,160,220,0.12)`.
- Use smaller 6–10px radii for icon tiles and controls.
- Separate the code panel’s tab bar from its content with a faint horizontal border around `rgba(180,190,240,0.14)`.
- Avoid visible borders around every feature item. Use spacing and icon alignment to establish grouping.
- Add a very subtle shadow or outer glow to the preview panel and primary button; the overall section should remain crisp rather than glossy.

### Code/product preview behaviour

- Build a tabbed preview with several technology or product modes across the top. The active tab should use the accent colour and a clear underline or bottom indicator.
- Make tabs keyboard accessible and clickable. Switching tabs should update the example content or at minimum visibly change the active state.
- Use realistic but fictional code and data relevant to the user’s product. Include line numbers, indentation, syntax highlighting, and a few highlighted tokens to create an authentic developer-tool feel.
- Keep the preview decorative enough to support the message but readable enough to suggest real implementation value.
- On narrow screens, allow the tab row to scroll horizontally rather than wrapping into a tall stack.
- Make the CTA buttons visibly interactive with hover, focus, and pressed states. Preserve accessible focus indicators.

### Responsive and accessibility rules

- At desktop widths, maintain the strong left/right relationship between benefits and preview. At tablet widths, reduce the gap and typography modestly before stacking.
- Ensure the feature grid becomes one column or remains a comfortable two-column grid depending on available width; never let copy become cramped.
- Respect reduced-motion preferences. If adding glow or tab transitions, keep them short and disable nonessential motion when requested.
- Use semantic headings, lists for the features, buttons for tab controls, and sufficient colour contrast.

## Never

- Never reuse logos, product names, branded wording, exact feature copy, code identifiers, or interface labels from the reference.
- Never copy the reference’s exact layout proportions, typography, icons, code sample, colour treatment, or decorative background pattern.
- Never include illustrations or imagery from the reference; use CSS, text, icons, and the user’s own product concepts instead.
- Never invent a generic feature list before understanding the user’s product and brand.
- Never make every feature a heavy bordered card or bury the main value proposition in dense technical detail.
