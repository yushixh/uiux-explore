## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060910-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-testimonials

## Before you start
Ask what the user's product is, who it serves, and what its brand looks and sounds like. Then apply the principles below to create an original testimonial section for that product—not a visual copy of any reference.

## Build a focused customer-story carousel
Create a testimonial section for a modern software product. The section should feel editorial, spacious, credible, and quietly premium. It should showcase one featured customer story at a time while making the presence of adjacent stories visible at the edges.

### Content structure
- Begin with a short, centered introductory statement explaining that real customers built or achieved something meaningful with the product.
- Place a simple text link beneath it, such as a customer-stories or case-studies destination, with a subtle right-arrow affordance.
- Leave generous vertical breathing room before the carousel.
- Use a three-card horizontal carousel: one fully visible featured card in the center and two partially cropped neighbouring cards at the left and right edges. On smaller screens, show only the active card and optionally a slim hint of the next card.
- The active card should contain:
  - A small customer mark or abstract brand-signifier area at the top left. Use the user's own customer assets or a neutral placeholder system.
  - A short context sentence describing the customer's achievement.
  - A large first-person quote as the visual focal point.
  - A narrow, understated vertical accent rule beside the quote. Adapt its colour to the user's brand.
  - A compact metrics column on the right with two or three outcomes. Each metric has a large value and a small explanatory label.
  - A person attribution row at the bottom left with a small circular or softly rounded portrait, name, and role.
  - A compact outlined “Read story” style button at the bottom right, using the user's wording and an arrow icon.
- Finish with previous and next controls centered below the cards. Make them square, lightly bordered, keyboard accessible, and clearly indicate disabled or active states.

### Layout and alignment rules
- Use a wide, centered section with a maximum content width around 1200px and horizontal page padding of 24–40px.
- Center-align the intro content, with a readable max width of approximately 360–450px.
- The carousel track should be wider than the active card so neighbouring cards can peek into view. Keep the active card around 680–760px wide and 520–580px tall on desktop, depending on the content.
- Align the active card's internal content to a consistent grid: brand mark at the top, context and quote in the left two-thirds, metrics in the right third, attribution and CTA along the bottom.
- Use CSS grid for the card's main content and flexbox for attribution, buttons, and controls.
- Preserve generous empty space around the quote; do not compress the card to fit excessive copy.
- On mobile, stack the metrics below the quote, reduce card height, and keep the attribution and CTA aligned in a single responsive row where possible.
- Ensure adjacent cards are visually subordinate: lower contrast, partly clipped, and never competing with the active card.

### Typography hierarchy
- Use a clean sans-serif or the user's brand typeface.
- Intro copy: 15–17px, regular weight, relaxed line-height around 1.5, muted dark grey.
- Intro link: 14px, semibold, with a small arrow and a clear hover state.
- Context line: 13–15px, regular weight, medium-dark grey.
- Quote: 25–32px on desktop, 20–25px on mobile, semibold or bold, with tight but comfortable line-height around 1.15–1.25. Keep it highly legible rather than oversized.
- Metric value: 28–34px, medium or semibold weight.
- Metric label: 12–14px, regular weight, muted grey.
- Person name: 13–14px, medium weight; role: 12–13px, muted grey.
- Use sentence case and restrained emphasis. The quote should dominate, but the metrics should remain easy to scan.

### Colour and surface
- Start with a warm off-white page background near `#FCFBF8` or `#FAFAF7`.
- Use a slightly warmer, subtly contrasting active card surface near `#F4F3EE` or `#F2F1EC`.
- Use near-black text around `#111111`, secondary text around `#66645F`, and disabled text around `#A6A49E`.
- Use a very pale border around `#E4E2DC` and a soft shadow such as `0 8px 24px rgba(20, 20, 16, 0.04)` only when needed to separate the card from the page.
- Make the quote accent rule a restrained brand colour; if no brand colour exists, use a very pale blue-to-lilac or warm neutral accent rather than a saturated rainbow treatment.
- Keep adjacent cards lower contrast than the active card, using the same surface family with reduced opacity or a soft mask at the viewport edges.

### Borders, radius, and spacing
- Use a card radius around 16–20px with a very subtle border or no visible border if the surfaces already separate clearly.
- Use 1px borders on buttons and carousel controls, around `#DAD8D1`.
- Use 8–12px radius for small buttons and controls; use a pill or circular crop for portraits.
- Establish a 8px spacing system. Use approximately 32–40px internal card padding on desktop and 24px on mobile.
- Separate the quote from the context by 28–40px, and separate the main content from the attribution row by at least 40px.
- Give the intro-to-carousel transition generous space, roughly 72–100px, so the section does not feel crowded.

### Interaction and accessibility
- The carousel should support previous/next buttons, swipe or drag on touch devices, and optional keyboard arrow navigation.
- Animate transitions with a restrained 300–450ms ease-out slide or fade. Do not use abrupt or distracting motion.
- Keep the active card fully opaque and adjacent cards partially visible as a discoverability cue.
- Add visible hover, focus-visible, and pressed states to links, buttons, and controls.
- Respect `prefers-reduced-motion` by disabling sliding motion or reducing it to a simple opacity/state change.
- Use semantic headings, blockquotes, accessible button labels, and meaningful alt text for customer portraits. Ensure sufficient colour contrast.
- If the user has more than a few stories, include a small progress indicator or accessible slide status without overpowering the design.

### Responsive behaviour
- At large desktop widths, show the complete active card with approximately 20–28% of each neighbouring card visible.
- At tablet widths, reduce the active card width and card padding while retaining the two-column quote/metrics relationship if it remains readable.
- At mobile widths, show one card per view, stack content vertically, reduce typography modestly, and place controls close beneath the card.
- Prevent horizontal page overflow; clip only the carousel viewport, not the entire page.

## Never
- Never copy the reference's logos, customer names, product names, testimonial wording, metrics, portraits, or brand marks.
- Never reuse the reference's exact colours, layout proportions, copy, or visual assets; translate the principles into the user's product and brand.
- Never invent customer claims or performance numbers without user-provided evidence; use clearly marked sample content or placeholders during implementation.
- Never make the carousel auto-advance in a way that harms reading, accessibility, or user control.
- Never fill the section with decorative illustrations or imagery when typography, spacing, and customer evidence can carry the design.
