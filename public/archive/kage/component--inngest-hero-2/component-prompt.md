## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074882-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Component on Kage: https://kage.design/component/inngest-hero-2

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, and type system it uses. Then apply the principles below to create an original hero for that product rather than reproducing the reference.

## Build this hero
Create a full-width, text-led hero section for a technical B2B software product. The composition should feel confident, durable, and editorial: a large statement on the left, generous negative space, and a restrained abstract visual on the right.

### Layout and alignment
- Use a dark full-bleed section with a minimum height of roughly 620–720px on desktop, adapting naturally to the viewport without forcing awkward cropping.
- Constrain the content to a centered max-width of approximately 1200–1280px with 32–40px horizontal gutters.
- Align the text block to the left edge of the content container and vertically center it in the hero.
- Give the text block about 58–64% of the desktop width so line wrapping feels intentional; keep the abstract visual in the remaining right-side area, partially cropped at the edge.
- On mobile, stack the composition into one column: preserve the text first, reduce the visual to a subtle background accent, and avoid horizontal overflow.
- Do not add navigation, badges, cards, or multiple competing calls to action inside this cut unless the user's product clearly requires them.

### Typography hierarchy
- Use a clean contemporary sans-serif or the user's existing brand font.
- Set the main statement in a large regular-weight display style: approximately 48–58px on desktop, 1.03–1.12 line-height, with responsive sizing down to about 34–40px on mobile.
- Use normal or slightly tight tracking, around -0.03em to -0.045em; avoid heavy bold weight.
- Write a multi-line message with deliberate line breaks or a controlled max-width. It should combine a sharp contrast or memorable opening with a concise explanation of the product's value.
- Use bright but softened white for the type, approximately #F2F2F0, rather than pure white.

### Colour and surface
- Use a near-black charcoal background, approximately #111212 or #121313.
- Add a very subtle grain/noise treatment or fine tonal variation across the background, around 3–6% opacity. It should be barely perceptible and must not reduce text contrast.
- Keep the palette monochrome unless the user's brand calls for a restrained accent.
- Render the abstract right-side mark in a low-contrast grey, approximately #777877 at 30–55% opacity, so it supports the message rather than becoming an illustration.

### Abstract visual
- Use an original, simple geometric or infrastructural form made from a dotted, stippled, or softly repeated pattern. It may suggest connection, continuity, or a loop, but should remain non-literal.
- Place it behind or beside the text, oversized and partially clipped by the right and/or bottom edge.
- Keep its detail fine enough to feel atmospheric at a distance. Do not use a recognisable icon, logo, product symbol, or literal diagram.
- If implementing with CSS, SVG, canvas, or generated elements, ensure it is decorative with `aria-hidden="true"` and does not affect layout.

### Borders, radius, and interaction
- This hero does not need a card boundary, visible border, or corner radius; it should read as an uninterrupted page surface.
- If a CTA is needed for the user's product, place it beneath the statement with a clear 20–28px gap. Use a compact pill or softly rounded button with a high-contrast fill and a subtle hover lift or colour shift.
- Keep hover and focus states accessible, with a visible focus ring in the brand accent colour.
- Respect reduced-motion preferences; any grain, dots, or ambient movement should be static or gently animated only when motion is allowed.

### Responsive behaviour
- Preserve the statement's readable measure at every width, targeting roughly 18–24 characters per line on desktop only when that suits the copy; never let the text span edge to edge.
- Reduce hero height, type size, and gutters on small screens while maintaining generous vertical breathing room.
- Hide, simplify, or reposition the decorative form if it competes with the mobile copy.
- Maintain WCAG-appropriate contrast and ensure the hero remains useful if decorative assets fail to load.

## Never
- Never copy the reference's logos, product names, or exact wording.
- Never reuse its specific abstract mark, illustration, imagery, or recognizable shape.
- Never assume the user's product, brand colours, font, CTA language, or value proposition; ask first and adapt them.
- Never make the texture so strong that it looks dirty or harms readability.
- Never use decorative visuals as a substitute for clear product messaging.
