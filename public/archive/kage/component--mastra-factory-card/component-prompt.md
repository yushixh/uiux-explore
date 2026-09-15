## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106663-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106606408-full.webp
- Component on Kage: https://kage.design/component/mastra-factory-card

## Before you start
Ask what the user's product does, who uses it, and what its brand personality and visual system are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a configurable workflow board card
Create a large, self-contained feature card that demonstrates a configurable, multi-stage work process. The component should feel like a product UI preview inside a marketing page: operational, information-dense, calm, and highly legible at a glance.

### Layout and alignment
- Use a wide landscape card with a dark surface, generous outer padding, and a large radius in the 20–28px range.
- Add a short explanatory text block in the upper-left: one concise, high-contrast heading followed by one or two muted lines explaining that stages and rules can be configured.
- Place the workflow preview below the text, separated by generous vertical spacing and optionally a very subtle horizontal divider.
- Build the preview as a four-column kanban-style board. Columns should share equal or near-equal widths, align to a common top edge, and maintain consistent gutters.
- Give every column a compact header with a small status icon, stage label, and optional count. Keep the header visually quieter than the cards.
- Stack several work-item cards in each column. Vary the number of cards slightly to make the board feel realistic, while preserving a stable grid rhythm.
- On narrow screens, allow horizontal scrolling or switch to a carefully designed stacked layout; never compress the cards until their metadata becomes unreadable.

### Typography hierarchy
- Use a modern sans-serif with crisp rendering and modestly tight tracking.
- Make the feature heading approximately 15–17px, medium or semibold, with near-white text.
- Use 14–16px body text with a muted gray tone and comfortable line height.
- Make stage labels, metadata, tags, and controls small—roughly 10–12px—with strong contrast differences between primary and secondary information.
- Work-item titles should be semibold and compact, with truncation or line clamping for long content.
- Use tabular or clearly separated metadata for identifiers, authors, timestamps, and branch/context information.

### Colour and visual hierarchy
- Start with a near-black page background such as #080808 or #0A0A0A.
- Use a slightly lifted card surface around #101010–#141414.
- Use an inner board surface around #0B0B0B and subtle panel variations around #111111.
- Use primary text near #F1F1F1, secondary text around #8A8A8A, and tertiary metadata around #5F5F5F.
- Keep borders extremely subtle: #202020 to #292929 with low contrast.
- Assign restrained semantic accent colours to stages or labels—cool blue, violet, amber, and green—using small dots or icons rather than large filled areas. Example accents: #4EA7FF, #9B7CFF, #E6AA52, and #61C58A.
- Ensure accent colours support scanning but do not overpower the monochrome interface.

### Borders, radius, and depth
- Use a large outer radius around 24px and a thin, low-contrast border.
- Use 10–14px radius for work-item cards and 8–10px radius for compact controls.
- Separate cards with spacing rather than heavy shadows. If depth is needed, use a very soft shadow such as 0 12px 30px rgba(0,0,0,0.22).
- Use fine dividers between metadata rows and controls only when they improve grouping.

### Work-item card anatomy
Each item should include a compact combination of:
- a muted identifier and age/author line;
- a bold, truncated title;
- one row of tiny coloured labels or tags;
- one row of operational indicators such as impact and effort;
- a full-width, dark action or next-step selector at the bottom.

Make the bottom selector look like a quiet input or dropdown with a label on the left and a chevron on the right. Keep it visually subordinate to the work title while making its affordance clear.

### Interaction and states
- Make work cards hoverable with a subtle border lift, slight surface change, or restrained glow.
- Make stage controls and bottom selectors keyboard accessible, with visible focus states that use the product's accent colour.
- Use tooltips or accessible labels for icon-only status indicators.
- If selectors open, use a dark popover aligned to the control with a thin border, compact options, and clear selected/hovered states.
- Preserve the dense layout during interaction; avoid large animations. Use short transitions around 150–220ms.
- Support reduced-motion preferences.

### Responsive and accessibility requirements
- Maintain strong contrast for text and controls, especially against near-black surfaces.
- Do not rely on colour alone to communicate stage or severity; pair accents with text or icons.
- Ensure truncated titles expose their full content on hover or through accessible labels.
- Keep touch targets at least 40px where practical, even if the visual controls are compact.
- Use semantic headings, lists, buttons, and comboboxes rather than making the entire preview a flat image.

## Never
- Never reuse logos, product names, brand marks, or exact copy from the reference.
- Never copy the reference's issue titles, identifiers, usernames, labels, or workflow terminology verbatim.
- Never import its illustrations, screenshots, imagery, or decorative assets.
- Never reproduce the exact column arrangement, card contents, spacing measurements, or visual details as a pixel-for-pixel clone.
- Never make the board depend on inaccessible colour-only status cues or non-semantic clickable containers.
