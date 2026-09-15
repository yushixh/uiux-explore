## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060916-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060875-full.webp
- Component on Kage: https://kage.design/component/ramp-testimonials

## Before you start
Ask the user what their product is, who it serves, and what their brand personality and visual identity are. Then apply the principles below to create a testimonial section tailored to that product and brand—not a copy of any reference.

## Build this section
Create a premium customer-testimonial section for a modern B2B software website. It should feel editorial, calm, credible, and slightly playful through motion rather than decoration.

### Content structure
- Add a small, muted eyebrow above the main heading that communicates broad adoption or accumulated proof, such as a customer count or short credibility signal.
- Use a short, confident, human-centered headline focused on evidence and outcomes.
- Place one compact primary CTA beneath the heading. It should be a low-emphasis light button, not a loud conversion banner.
- Below the heading block, create a testimonial wall made of several rows of cards. Use enough cards to create the impression of a large customer base.
- Each card should contain:
  - A small square company/avatar mark area. Use neutral generated initials, abstract shapes, or text placeholders appropriate to the user’s brand; do not use real logos.
  - Customer name in medium-weight dark text.
  - Role and company in smaller muted text, clamped to one or two lines.
  - A concise quote in readable muted body text, clamped where necessary.
- Vary quote lengths and metadata slightly while keeping every card structurally consistent.

### Layout and alignment logic
- Use a full-width section with generous vertical whitespace and a centered content column.
- Center-align the eyebrow, headline, and CTA as one vertically stacked intro group.
- Keep the intro width narrow enough for a strong headline silhouette, approximately 520–700px depending on viewport.
- Place the testimonial wall below with a wider viewport-spanning container, approximately 1200–1500px on desktop.
- Use a dense multi-column grid on desktop: around 3–4 cards visible per row, with cards approximately 320–400px wide and 180–220px tall.
- Offset or vary rows slightly so the wall feels organic rather than like a rigid table, while preserving consistent gutters.
- On smaller screens, switch to one or two columns and allow horizontal overflow only if it improves the browsing experience. Never let text become cramped.
- Add subtle white gradient masks at the left and right edges of the wall if the cards scroll horizontally, suggesting additional content without showing hard clipping.
- Keep the next page section visually separated by ample whitespace.

### Typography hierarchy
- Use a modern sans-serif with clean, neutral forms. Prefer the user’s brand font when available.
- Eyebrow: approximately 14–16px, regular or medium weight, muted gray, with comfortable letter spacing.
- Main heading: approximately 44–56px on desktop, 34–42px on mobile, medium or semibold weight, tight line-height around 0.98–1.08.
- CTA label: approximately 14–16px, medium weight.
- Customer name: 14–16px, medium weight, near-black.
- Role/company: 14–16px, regular weight, medium gray.
- Quote: 15–17px, regular weight, medium gray, line-height around 1.35–1.5.
- Preserve strong contrast between names/headline and supporting metadata/quotes.

### Spacing
- Give the section approximately 120–180px top and bottom padding on desktop; reduce to 80–112px on mobile.
- Use 16–24px between eyebrow, heading, and CTA according to the heading’s line count.
- Leave approximately 72–112px between the intro group and the testimonial wall.
- Use 16–24px card gaps, with slightly larger horizontal than vertical gaps if the layout permits.
- Inside cards, use 16–24px padding and a consistent 16–20px gap between identity metadata and the quote.

### Colour
- Use a warm or neutral near-white page background, approximately `#FFFFFF` or `#FAFAF8`.
- Use near-black for the heading and customer names, approximately `#111111` or `#171717`.
- Use cool or warm gray for supporting copy, approximately `#6F6F6B` to `#858581`.
- Use a very light gray border, approximately `#E7E7E3` or `#EAEAE7`.
- Keep the CTA fill subtly off-white or pale gray, approximately `#F3F3F0`, with dark text.
- If using edge masks, fade from the page background to transparent; do not use a conspicuous overlay colour.
- Adapt these values to the user’s brand while preserving a quiet, high-trust contrast system.

### Borders, radius, and surfaces
- Use 1px low-contrast borders around cards.
- Use a medium rounded corner, approximately 14–18px, on testimonial cards.
- Use a smaller radius, approximately 8–10px, on the CTA and company mark containers.
- Avoid heavy shadows. If needed, use only a barely visible shadow such as `0 2px 10px rgba(0,0,0,0.03)`.
- Keep cards white or only slightly differentiated from the page background so the border does most of the separation work.

### Interaction and motion
- If the testimonial wall scrolls or animates, use a slow, continuous marquee or gently staggered row movement. Keep it subtle and non-distracting.
- Pause movement on hover, focus, or when the user prefers reduced motion.
- Add a restrained hover state: slightly darker border, minimal elevation, or a 1–2px translate effect—not a dramatic scale.
- Ensure the CTA has clear hover, focus-visible, and pressed states.
- Respect `prefers-reduced-motion` and provide normal vertical browsing when motion is disabled.
- Make all cards readable and keyboard accessible; do not hide essential testimonial content behind hover.

### Responsive and accessibility requirements
- Preserve the centered intro hierarchy across breakpoints.
- Ensure the wall does not create accidental horizontal page scrolling.
- Clamp long roles and quotes gracefully, but provide an accessible full value where appropriate.
- Use semantic heading levels, a labelled testimonial region, visible keyboard focus, and sufficient colour contrast.

## Never
- Never use the reference company’s logo, product name, customer names, company names, exact copy, or recognizable testimonial wording.
- Never reproduce the reference layout pixel-for-pixel; reinterpret the system for the user’s product and brand.
- Never use copied illustrations, screenshots, brand marks, or imagery from the reference.
- Never make up claims of customer count, adoption, or results unless the user supplies them; use neutral placeholder proof language instead.
- Never let motion prevent reading, interaction, or access to the testimonials.
