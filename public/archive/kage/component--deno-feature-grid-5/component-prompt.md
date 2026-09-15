## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073868-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-feature-grid-5

## Before you start

Ask the user what their product does, who it is for, and what their brand direction is (including preferred typefaces, colours, tone, and framework). Then apply the principles below to create an original version for their product rather than reproducing the reference.

## Design language

Build a tall, minimalist feature-grid section for a modern software product. Treat the section as two stacked, centered content groups with a strong editorial rhythm and unusually generous whitespace between them.

### Layout and alignment

- Use a full-width, near-white canvas, approximately `#ffffff` or `#fcfcfc`.
- Constrain text to a readable central measure: roughly `680–760px` for the main headline and `560–700px` for supporting copy.
- Center-align every element in both feature groups.
- Start with a primary feature statement near the top of the section: a large two-line headline followed by a short explanatory paragraph.
- Leave a substantial vertical gap after the first feature group before introducing the next one. The whitespace should feel intentional and premium, not like an empty loading state.
- Use a second centered headline and paragraph to introduce a deployment, compatibility, workflow, or ecosystem-oriented feature.
- Under the second paragraph, place a single horizontal row of approximately six to eight compact platform or capability markers. Use abstract, product-relevant symbols or simple typographic badges generated for the user’s product; do not use recognizable third-party logos.
- Finish the row with a small muted clarification line, such as an “and more” statement, aligned to the same center axis.
- On smaller screens, keep the centered composition but reduce headline size, allow natural wrapping, tighten the vertical gap, and let the marker row wrap or become a horizontally scrollable strip without clipping.

### Typography hierarchy

- Use a clean contemporary sans-serif with a rounded or neutral character. If the product has a brand font, use it consistently.
- Main feature headings: approximately `64–72px`, weight `650–750`, line-height `0.98–1.08`, with slightly tightened letter spacing around `-0.04em`.
- Secondary feature heading: approximately `58–68px`, using the same weight and tracking.
- Supporting paragraphs: approximately `18–20px`, weight `400–450`, line-height around `1.45–1.6`.
- The small closing clarification: approximately `14–16px`, medium gray, with comfortable line-height.
- Keep headings visually dominant and avoid adding labels, eyebrow text, or unnecessary UI chrome unless the user’s product needs them.

### Spacing

- Use a responsive outer gutter of `24px` on mobile, growing to `48–80px` on larger screens.
- Give each heading-to-paragraph relationship roughly `20–28px` of space.
- Give the second paragraph to marker row approximately `32–44px`.
- Give the marker row to the clarification line approximately `24–32px`.
- Use a deliberately large gap between the first and second feature groups, around `clamp(220px, 25vw, 420px)` depending on the surrounding page context.
- Avoid dense cards, divider lines, or multiple competing columns; the whitespace is part of the component’s identity.

### Colour, borders, and radius

- Use near-black for headings, approximately `#050505` or `#111111`.
- Use a softer gray for body text, approximately `#666666` to `#707070`.
- Keep the background plain white or near-white, with no gradients unless the user’s brand specifically calls for one.
- Give each small marker a white or lightly tinted circular container with a very subtle shadow, for example `0 6px 16px rgba(0,0,0,0.08)`, and an optional `1px` border around `#f1f1f1`.
- Use fully rounded markers, `border-radius: 999px`, sized around `48–64px` with even spacing of `14–22px`.
- Avoid heavy card borders and strong shadows; the page should feel almost print-like.

### Interaction and accessibility

- If the platform markers are interactive, make the entire circular marker a keyboard-focusable button or link with a visible focus ring in the product’s accent colour.
- Add concise accessible labels describing each capability or platform represented by a marker.
- Use subtle hover feedback only: a slight upward translation of `2–3px`, a modest shadow increase, or a small background tint. Do not use distracting animation.
- Respect `prefers-reduced-motion` and preserve readable text contrast.
- Ensure the responsive marker row never causes horizontal page overflow.

## Never

- Never copy the reference’s logos, product names, exact copy, or branded symbols.
- Never use the reference product name or mention its platform list.
- Never reuse illustrations, imagery, icons, or recognizable third-party marks from the reference.
- Never reproduce the exact headline wording or layout as a pixel-for-pixel clone; translate the underlying hierarchy and spacing principles into the user’s product and brand.
- Never fill the intentional whitespace with decorative content just to make the section denser.
