## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067517-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Component on Kage: https://kage.design/component/raycast-feature-grid-6

## Before you start
Ask the user what their product does, who it is for, and what their brand looks and sounds like. Then apply the principles below to their product—use their actual visual language, terminology, and feature priorities rather than reproducing this reference.

## Build a premium dark feature-grid section
Create a responsive feature showcase for a software product. The section should feel like a quiet, high-end developer tool interface: concise content, generous negative space, subtle panels, and functional UI previews that demonstrate each capability.

### Structure and layout
- Use a near-black page background and a centered content container with a maximum width around 1160–1240px.
- Build a 2-column grid with a consistent gap of approximately 36–44px on desktop. On small screens, collapse to one column.
- Make the first feature span the full grid width and use a shorter, wide card. Place its explanatory content on the left and a larger product UI preview on the right.
- Place two equal-width cards beneath it. These cards should be taller and use their upper area for a visual demonstration, with the feature icon, title, and description anchored toward the bottom.
- Keep all cards aligned to a shared outer grid and maintain generous internal padding, approximately 24px on desktop and 18–20px on mobile.
- Use CSS grid or flex layouts that remain robust when titles or descriptions become longer. Avoid fixed heights that clip content.

### Card styling
- Page background: approximately `#08090A` or `#0A0A0B`.
- Card background: subtly lighter black, approximately `#0D0E10` to `#111214`.
- Use a 1px low-contrast border around cards, approximately `rgba(255,255,255,0.10)`, with a 10–14px radius.
- Add only very restrained shadows, such as `0 12px 36px rgba(0,0,0,0.18)`. The design should rely on contrast and spacing, not heavy elevation.
- Use a faint blue/cyan abstract glow or gradient inside the wide card’s preview area if it suits the brand. Keep it atmospheric and low-opacity, with approximate accents `#16C7E8`, `#1457FF`, and `#3020C9`; do not let decoration compete with the feature text.
- Ensure cards have visible focus styles and a subtle hover treatment: slightly brighten the border, lift the card by 1–2px, or increase the preview contrast. Respect `prefers-reduced-motion`.

### Typography hierarchy
- Use the product’s brand font when available; otherwise use a clean modern sans-serif such as Inter, Geist, or system UI.
- Feature titles should be medium-weight, approximately 17–20px, with tight line-height around 1.2 and a near-white colour such as `#F2F3F5`.
- Descriptions should be approximately 14–16px, line-height 1.5–1.65, and muted gray such as `#92959B`. Keep line lengths around 38–55 characters where practical.
- Use sentence case and concise, outcome-oriented copy. Keep titles short enough to scan quickly.
- Icons should be small, simple, and monochrome—approximately 20–22px—with a light gray or white stroke. Align the icon and title on one horizontal baseline with an 8–12px gap.

### Demonstration previews
- Each card needs a small, plausible UI artifact related to the feature: a command field, shortcut keycaps, list, form, status panel, or other product-native control.
- Treat previews as miniature interface compositions, not decorative screenshots. Use realistic hierarchy, subtle dividers, small controls, and restrained contrast.
- For keyboard shortcuts, use dark keycaps with a thin border, a slight inner highlight, large readable labels, and small plus signs between keys.
- For a command or form preview, use a dark floating panel, a short prompt or label, a visible caret or input state, and one high-contrast action button. Keep controls legible without turning the preview into a full application.
- If real screenshots are unavailable, build the preview in HTML/CSS with semantic elements and accessible labels rather than relying on images.
- Use decorative gradients, glows, or blur only behind the interface preview and keep text and controls crisp.

### Spacing and responsive behaviour
- Use a consistent spacing scale based on 4 or 8px units. Typical values: 8px icon gap, 12–16px text gap, 24–32px card padding, and 36–44px grid gap.
- On tablet widths, reduce the wide preview’s footprint while preserving the left-to-right relationship.
- Below roughly 700px, stack each card’s content and preview naturally, reduce padding, and let keycaps or controls wrap without overflow.
- Preserve comfortable touch targets of at least 44px for interactive elements.

### Accessibility and implementation
- Use semantic section, article, heading, and button/link elements where appropriate.
- Maintain WCAG-friendly contrast for all meaningful text and controls.
- Give icons and preview imagery useful accessible labels, or mark purely decorative elements as hidden from assistive technology.
- Make the entire card clickable only if it has a clear destination; otherwise do not imply interactivity.

## Never
- Never copy the reference’s logos, product names, feature names, wording, or brand-specific terminology.
- Never reuse the reference’s exact UI copy, screenshots, illustrations, gradients, imagery, or icon artwork.
- Never make the result look like a pixel-for-pixel recreation; adapt the grid and visual principles to the user’s product and brand.
- Never add fake brand marks, invented customer logos, or decorative imagery that does not support the feature being explained.
- Never sacrifice readability for glow, blur, animation, or visual density.
