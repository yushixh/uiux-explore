## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/beehiiv-com/23eb8ac3-d7aa-449f-95ad-92bcd925810d-1789067454-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/beehiiv-com/23eb8ac3-d7aa-449f-95ad-92bcd925810d-1789067406-full.webp
- Component on Kage: https://kage.design/component/beehiiv-testimonials-2

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Apply the principles below to that product and brand rather than reproducing the reference literally.

## Build a focused testimonial section
Create a single, centered testimonial card for a modern software or technology website. The section should feel calm, premium, and credible, with the customer quote as the dominant visual element.

### Layout and alignment
- Place the component inside a very dark page section with substantial vertical whitespace above and below.
- Use a centered content container with a maximum width of approximately 1020–1080px and responsive horizontal gutters of 24–32px.
- Render one wide testimonial card rather than a dense grid. Keep the card visually self-contained.
- Give the card generous internal padding: approximately 72–88px on desktop, reducing to 40–48px on tablet and 28–32px on mobile.
- Center-align the quote and author information.
- Constrain the quote to roughly 680–760px so line lengths remain readable and the text forms a strong, balanced block.
- Stack the author avatar, name, and role vertically beneath the quote with clear but restrained spacing.
- On small screens, preserve the centered composition, reduce the quote size, and allow natural line wrapping without horizontal overflow.

### Typography hierarchy
- Make the testimonial quote the hero: use a clean contemporary sans-serif, medium or regular weight, with a large responsive size around 30–36px on desktop and 23–28px on mobile.
- Use tight but comfortable line height around 1.15–1.25; the quote should feel compact and editorial rather than like body copy.
- Use bright off-white text for the quote, approximately `#F5F4FA`.
- Set the author name in a smaller semibold style around 14–16px, using the same off-white colour.
- Set the author role and company in a 16–18px regular style with muted lavender-grey colour around `#AAA7C4`.
- Keep text rendering crisp and avoid excessive letter spacing. Use curly quotation marks only if they suit the product's voice.

### Colour, surface, and borders
- Use a page background close to midnight navy-black, approximately `#07051A` or `#08061C`.
- Use a subtly lighter indigo-violet card surface, approximately `#12102D` to `#171437`.
- Add a very fine, low-contrast 1px border in muted indigo, approximately `rgba(150, 145, 210, 0.35)`.
- The card may use a barely perceptible vertical or radial indigo gradient, but keep it understated and avoid decorative effects.
- Use a moderate rounded corner radius of approximately 8–10px; the card should feel polished, not pill-shaped.
- Avoid heavy shadows. If needed, use only a soft, low-opacity shadow that separates the card from the dark page.

### Author details and interaction
- Include a small circular avatar placeholder or an abstract, product-appropriate portrait treatment, approximately 42–48px in diameter, with a subtle border or ring.
- Keep the avatar secondary to the quote; do not use it as a decorative focal point.
- Make the card static by default. If the product has multiple testimonials, a carousel can be added, but controls should be minimal, accessible, and placed outside the quote's reading path.
- If carousel controls are present, provide visible keyboard focus states, aria labels, and a reduced-motion alternative. Do not introduce auto-rotation unless it can be paused.
- Preserve the generous empty space around the card so the testimonial reads as a deliberate trust-building pause in the page.

### Responsive behavior
- At desktop widths, keep the card wide and the quote comfortably multi-line.
- At mobile widths, reduce padding and typography proportionally while retaining a single-column centered layout.
- Ensure the author role can wrap naturally and remains legible.
- Maintain at least 24px page gutters and a minimum 16px gap between stacked elements.

## Never
- Never copy the reference's logos, product names, customer names, company names, testimonial wording, or branded claims.
- Never reuse the reference's exact copy, avatar, imagery, illustrations, or visual assets.
- Never make the card a pixel-for-pixel recreation; adapt the layout and styling principles to the user's product and brand.
- Never sacrifice readability for forced line breaks or overly decorative effects.
- Never hide carousel controls from keyboard and screen-reader users if interaction is added.
