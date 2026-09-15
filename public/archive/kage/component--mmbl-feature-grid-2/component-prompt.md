## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060566-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060540-full.webp
- Component on Kage: https://kage.design/component/mmbl-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what brand direction, voice, and visual identity they want. Then apply the principles below to create an original version for that product—not a copy of this reference.

## Design objective
Build a feature-grid section that explains how an input, capture, or raw user action becomes an organised outcome. The component should communicate the transformation visually, using a left-to-right workflow rather than relying on a long explanation.

## Layout and alignment
- Use a deep, full-width section with a centred content container approximately 1120–1200px wide.
- Add a slim utility row at the top with small supporting labels at opposite sides and a subtle horizontal divider beneath it.
- Place the main introduction below with a two-column layout: a large headline on the left and a short explanatory paragraph aligned toward the right.
- Below the introduction, create a visual workflow in two columns. The left side should be a larger capture/input panel, roughly 55–60% of the available width; the right side should be a narrower output panel.
- Align the top of the output panel with the input panel’s content area, not necessarily with its outer edge.
- On smaller screens, stack the columns vertically, preserve the input-before-output sequence, and keep generous horizontal padding.
- Use deliberate asymmetry and open negative space; do not make every element a rigid equal-width card.

## Typography hierarchy
- Use a modern sans-serif with a clean, slightly editorial feel.
- Make the main heading large and compact, around 56–68px on desktop with tight line-height around 0.98–1.05.
- Use two visual weights or tones within the heading to distinguish the primary promise from its supporting phrase.
- Keep supporting copy muted, around 16–18px with a 1.45–1.6 line-height and a readable maximum width of roughly 400px.
- Use small labels and metadata at 11–14px. Make the primary input text noticeably larger, around 24–28px, with comfortable line-height.
- Use medium or semibold weights for task titles, buttons, and section labels; avoid excessive all-caps text.

## Colour system
- Use a near-black indigo background, approximately #10101A or #11111C.
- Use a slightly lighter blue-violet surface for the main capture panel, approximately #1B1C30 or #1D1E33.
- Use off-white primary text around #F2F1F7 and cool grey secondary text around #A9A8B7.
- Use fine borders and dividers around #2B2C3C.
- Introduce a restrained, playful accent palette for status rings, labels, and audio/data marks: mint #55E0C0, lavender #A879F5, coral #F27687, sky blue #73B8F4, and warm amber #F3B34D.
- Keep accents local to metadata, controls, and visualisation details; the background and large text should remain calm.

## Cards, borders, and spacing
- Use a generous section rhythm: approximately 48–64px between utility row, introduction, and workflow.
- Give the main capture panel a radius around 20–24px and internal padding around 40px on desktop.
- Use thin, low-contrast borders rather than heavy shadows. If depth is needed, use a very subtle dark violet shadow.
- Output task cards should have a transparent or background-matched surface, 1px border, and a 18–22px radius.
- Stack output cards with approximately 12–16px vertical gaps.
- Present metadata as compact pill labels with fully rounded corners, 8–12px horizontal padding, and tinted backgrounds derived from the accent colour.
- Make the primary action a full-width or nearly full-width rounded rectangle with a bright lavender or brand-appropriate accent fill, dark text, and approximately 10–12px radius.

## Visual language and interaction
- Represent the raw input with a small label, a prominent conversational sentence or product-specific input, and a colourful waveform, signal, or abstract activity indicator. Keep it CSS-based or procedurally generated.
- Represent the transformed output with a small success/status marker, a result count or summary, and two or more stacked task/result cards.
- Each result card should include a simple circular state control, a clear title, and one or two metadata pills such as category, owner, date, priority, or status—adapt these to the user’s product.
- Include a replay, inspect, continue, or equivalent action beneath the results only if it makes sense for the product. It should feel like the next step in the workflow, not a generic CTA.
- If implementing interaction, allow the input visualisation to subtly animate, allow result cards to change state on click, and provide visible hover/focus states. Keep motion restrained: short opacity, colour, or transform transitions around 150–250ms.
- Ensure keyboard focus is visible, controls have accessible labels, and colour is not the only way to communicate status.
- The visual should feel like a realistic product UI, but all content must be newly written for the user’s product and audience.

## Responsive behaviour
- Below tablet width, switch the introduction to one column and make the paragraph full-width or left-aligned beneath the heading.
- Stack the input and output panels, reducing panel padding to approximately 24px.
- Reduce the headline to roughly 40–48px on mobile while retaining its compact line breaks.
- Let metadata pills wrap naturally and prevent buttons or task titles from overflowing.

## Never
- Never use the reference product’s logo, product name, brand name, or trademarked language.
- Never reuse the reference’s exact headline, task text, labels, button copy, or metadata values.
- Never copy the reference layout pixel-for-pixel; reinterpret the workflow for the user’s product.
- Never use the reference’s illustrations, screenshots, waveform artwork, icons, or imagery directly. Create original CSS, SVG, or component-based equivalents.
- Never add decorative content that competes with the core input-to-output explanation.
- Never sacrifice contrast, keyboard access, or responsive behaviour for visual similarity.
