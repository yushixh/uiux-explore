## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/loom-com/c384a931-6938-4c5e-b36b-e07415522afb-1789060440-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/loom-com/c384a931-6938-4c5e-b36b-e07415522afb-1789060413-full.webp
- Component on Kage: https://kage.design/component/loom-testimonials

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual system are. Then apply the principles below to create an original testimonial section for that product—not a copy of the reference.

## Build a centered testimonial carousel
Create a responsive customer-testimonial section designed to sit between major marketing sections. Its job is to make one specific customer voice feel memorable and trustworthy while keeping the interaction simple.

### Layout and alignment
- Use a wide, centered stage inside the page container, with a maximum width around 1080–1120px and generous horizontal breathing room.
- Give the stage a very pale blue background, approximately `#EAF4FF`, with large rounded bottom corners and a soft, almost imperceptible shadow or edge separation.
- Center the content column rather than aligning it to the page grid. Keep the quote readable at roughly 620–700px wide.
- Place a compact customer or company mark above the quote. Treat it as a neutral content slot that can be replaced by the user’s own customer identity.
- Put previous and next controls on either side of the quote, vertically aligned around the quote’s midpoint. Keep them outside the main text column on desktop; move them below the attribution or into a compact row on narrow screens.
- Place the customer avatar and attribution beneath the quote in a horizontal row. Align the avatar, person name, and role/company cleanly, with the text left-aligned within the row.
- Maintain large vertical padding: approximately 48–72px above the mark, 28–40px around the quote, and 56–76px below the attribution.
- On mobile, reduce the stage padding to around 28–32px, allow the quote to use most of the width, and avoid controls overlapping the text.

### Typography hierarchy
- Make the quote the visual focal point: use a bold or semibold sans-serif at approximately 24–30px desktop with a 1.2–1.35 line height. Use responsive sizing down to 20–23px on mobile.
- Keep the quote to roughly three or four lines on desktop when possible. Use balanced line wrapping and avoid overly narrow text blocks.
- Render the attribution name at approximately 14–16px, semibold or bold, and the role/company at 12–14px in a softer neutral colour.
- Keep the customer mark visually secondary. It can be small and compact, with enough contrast to be legible but not so much that it competes with the quote.
- Use the product’s own typeface or a close modern sans-serif; preserve clear weight contrast rather than relying on decorative styling.

### Colour and surface
- Use an off-white page background around `#FFFFFF` or `#FCFCFB`.
- Use a calm, low-saturation blue panel around `#EAF4FF` or adapt the hue to the user’s brand while retaining high contrast.
- Use near-black text around `#171A1F` for the quote and `#24272C` for the attribution name.
- Use muted blue-grey text around `#536273` for the role/company.
- Use white controls with a subtle border such as `#E7EBF0` and a soft shadow around `rgba(20, 35, 55, 0.10)`.
- Ensure text and controls meet accessible contrast requirements, especially if the brand palette is lighter or more saturated.

### Borders, radius, and controls
- Use a large panel radius around 32–44px desktop, reducing to 24–28px on mobile.
- Make navigation buttons circular, approximately 52–58px square on desktop and 44–48px on mobile.
- Use simple left and right arrow icons with a 1.5–2px stroke. Do not use oversized labels inside the controls.
- Add visible keyboard focus rings and `aria-label` values such as “Previous testimonial” and “Next testimonial.”
- Implement the panel as an accessible carousel: provide a clear live-region strategy or polite announcement for slide changes, support keyboard activation, and pause any autoplay when the user interacts. Prefer no autoplay unless it clearly benefits the product.
- Animate transitions with a restrained 200–350ms fade or horizontal slide. Respect `prefers-reduced-motion`.

### Content and credibility
- Use one concise, specific customer statement per slide. Preserve a natural speaking voice and avoid generic claims.
- Include the speaker’s name, role, organisation, and optional avatar as structured content.
- Allow the customer mark and avatar to be replaced by text or a neutral placeholder when imagery is unavailable.
- Add pagination only if there are enough slides to make the current position useful; small dots may sit beneath the attribution without distracting from the quote.

### Never
- Never copy the reference’s logos, customer names, product names, quote, attribution, or exact wording.
- Never use the reference’s brand marks, portrait, imagery, or illustrations.
- Never reproduce the exact visual identity or treat the section as a Loom-branded component.
- Never make the carousel dependent on colour alone to communicate state.
- Never let navigation controls obscure the quote, become difficult to operate on mobile, or reduce the testimonial to an unsubstantiated generic claim.
