## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060950-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-hero

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, typography, and primary conversion goal are. Then apply the principles below to create an original hero for that product—not a copy of any reference.

## Build this section
Create a polished, responsive SaaS/product hero with a simple top navigation, a two-column introductory area, and a large interactive showcase panel beneath it. The section should feel editorial, calm, premium, and highly usable, with generous whitespace and restrained visual styling.

### Layout and alignment
- Use a clean, near-white page background and a centred content container with a maximum width around 1150–1250px.
- Add a compact top navigation row: brand wordmark placeholder on the left, several text links in the middle or beside it, and two right-aligned authentication/actions. Keep the navigation height around 64–72px.
- Below the navigation, leave substantial vertical breathing room before the hero copy. On desktop, use a two-column grid around 1:1.1 or 1:1.2: the left column contains the headline and CTAs; the right column contains a short supporting paragraph. Align both columns near the vertical centre of the hero intro.
- Use a large showcase card directly below the intro, spanning the full content width. On mobile, collapse the intro to one column and stack the actions; make the showcase horizontally scrollable or vertically simplified rather than forcing a cramped desktop layout.
- Keep all major content aligned to the same left and right container edges. Avoid excessive decorative elements outside the main showcase.

### Typography hierarchy
- Use a modern sans-serif with a neutral, highly legible appearance. Use a large, light-to-regular headline around 46–58px on desktop, with tight line-height around 0.98–1.05 and a maximum width that creates two balanced lines. Scale it to roughly 36–42px on mobile.
- Supporting copy should be 16–18px, line-height 1.45–1.6, and limited to approximately 34–42 characters per line where practical.
- Navigation, tab labels, captions, and buttons should be 14–16px. Use medium weight for active states and regular weight for inactive labels.
- Prefer sentence case and short labels. Maintain strong contrast without relying on heavy bold typography.

### Colour and visual language
- Start with an off-white background around #FCFCFB or #FAFAF9, with primary text around #111111 and secondary text around #666666–#777777.
- Use a near-black filled primary button around #080808 with white text. Use a white or transparent secondary button with a subtle neutral border.
- The showcase card can use a very pale warm grey such as #F4F3F1, while its internal media area remains slightly lighter, around #F8F8F7.
- If the user's brand uses colour, introduce it primarily inside the media showcase and active product states, not as a loud page-wide gradient.
- Ensure all text and controls meet accessible contrast requirements.

### Borders, radius, and spacing
- Use a thin, low-contrast border around cards and secondary controls, approximately #E5E5E3 or rgba(0,0,0,0.10).
- Give the main showcase a generous radius around 20–28px; use 999px pill radii for compact buttons and segmented controls.
- Use a 4px or 8px spacing system. Leave around 28–40px between the headline and CTA row, 24–40px between the intro and showcase, and 0–1px dividers between showcase navigation bands.
- Keep button heights around 42–46px with horizontal padding around 20–24px.

### Showcase interaction
- At the top of the showcase, provide a segmented product/category tab row. The active tab should appear as a white raised pill or inset tab with a subtle border and shadow; inactive tabs should blend into the panel.
- In the main media area, show a horizontally arranged set of product examples or content states. The centre item should be the visual and interaction focus, with adjacent items partially visible to imply a carousel.
- Use abstract, product-relevant visual placeholders for the media—such as gradients, charts, documents, interfaces, or softly textured shapes—rather than generic stock imagery. Keep the visual system consistent with the user's brand.
- Add a clear play or preview control to the focused item when the content is demonstrative. Make it a circular, high-contrast button with a simple icon and an accessible label.
- Include concise labels and descriptions beneath or near each showcase item. Keep the active item darker and more prominent than neighbouring items.
- Add subtle previous/next controls or drag/swipe support. On touch devices, support horizontal swiping and preserve enough peeking content to communicate that more items exist.
- Add a bottom feature/product navigation row. Style the selected item as a white pill with a border; keep the rest as plain text. Include a repeated conversion button at the far right on desktop, but move it below the row on mobile.
- Add hover, focus-visible, pressed, and disabled states. Animate tab changes and carousel movement with restrained 180–300ms transitions; do not use distracting autoplay.
- Make the component keyboard navigable, provide visible focus rings, and expose tab and carousel semantics to assistive technology.

### Responsive behaviour
- At widths below roughly 800px, reduce navigation links or collapse them into a menu, stack the hero columns, and make the showcase controls wrap or scroll.
- Reduce media item sizes while preserving a clearly dominant active item. Ensure no text, buttons, or tabs are clipped unexpectedly.
- Respect reduced-motion preferences and provide a static fallback for users who disable animation.

## Never
- Never use the reference product's logo, product names, navigation labels, or exact marketing copy.
- Never reproduce the reference's exact artwork, gradients, media assets, illustrations, or imagery.
- Never hard-code the reference brand or assume its content model; use the user's product, audience, and brand system.
- Never make the hero dependent on autoplay, inaccessible hover-only interactions, or low-contrast text.
- Never copy the exact spacing, proportions, card contents, or carousel item arrangement; preserve only the reusable interaction and layout principles.
