## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060391-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-testimonials

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create a version for that product—not a copy of the reference.

## Design goal
Build a premium testimonial section that feels like a curated set of customer stories rather than a conventional review list. Use a dark, editorial presentation with strong visual storytelling, an oversized proof-oriented heading, and a horizontally browsable card row.

## Layout and alignment
- Use a near-black section background, approximately `#000000` or `#050505`.
- Keep the content in a wide responsive container with generous horizontal padding: about `40px` on desktop, `24px` on tablet, and `20px` on mobile.
- Create a header row above the cards. Align a large heading to the left and a compact secondary action to the right; vertically align the action near the lower portion of the heading rather than centering it mechanically.
- Set the heading in a constrained width so it wraps into two or three short lines. Use a statement about customer outcomes or credibility, not a generic “Testimonials” label.
- Place the cards in a horizontal row below the header. On wide screens, show several cards at once with the next card slightly clipped at the viewport edge to signal additional content.
- On smaller screens, preserve horizontal overflow or convert it into a swipeable carousel. Keep cards wide enough to feel immersive rather than shrinking them into narrow columns.
- Use consistent card widths and gaps, approximately `12–16px` between cards. Let the grid extend slightly beyond the main text container if that creates a deliberate carousel edge.

## Typography hierarchy
- Use a clean contemporary sans-serif for the heading and interface text, with a bold or semibold weight around `600–700`.
- Make the heading large and compact: approximately `44–56px` on desktop with a line-height around `0.98–1.05`; scale to `34–42px` on mobile.
- Use small, understated labels and metadata inside cards, approximately `11–14px`, with generous letter spacing only for uppercase utility labels.
- Keep testimonial quotes or story titles visually secondary to the section heading but large enough to read comfortably inside each card.
- Use tight heading tracking and avoid excessive all-caps text.

## Cards and content structure
- Build each testimonial as a tall rounded card, roughly `260–360px` wide and `360–520px` tall depending on the content.
- Use a full-bleed image, video still, gradient, or product-specific visual background when appropriate to the user’s brand. Add a dark overlay so text remains readable.
- Position story title or testimonial quote toward the lower portion of the card, with supporting attribution or category metadata near it.
- Vary the visual treatment between cards while preserving shared dimensions and typography, creating a curated campaign or case-study feel.
- If there is no suitable imagery for the user’s product, use abstract colour fields, subtle texture, or a UI/product screenshot instead of generic stock photography.

## Colour, borders, and shape
- Use white or near-white primary text, approximately `#F5F5F5`, against the black background.
- Use muted secondary text around `#A5A5A5` or `#8E8E8E`.
- Give cards a very subtle one-pixel border, approximately `rgba(255,255,255,0.14)`, so their edges emerge from the dark background without looking boxed in.
- Use rounded corners around `14–18px` for cards and around `9–11px` for the small action button.
- Keep the button dark charcoal, approximately `#1A1A1A`, with a subtle lighter hover state around `#2A2A2A` and white text.
- Avoid strong shadows; let contrast, imagery, spacing, and hairline borders create the hierarchy.

## Interaction and motion
- Make the secondary action clearly clickable and give it a restrained hover state: slight background lift, no dramatic scale.
- Make cards clickable if they lead to full customer stories. On hover, use a subtle image zoom, overlay shift, or upward content transition while preserving legibility.
- If using a carousel, support mouse drag, touch swipe, keyboard navigation, and visible focus states. Do not rely on auto-advancing motion.
- Keep transitions short and calm, around `180–300ms`, with reduced-motion support.
- Ensure the partially clipped card edge is intentional and does not create accidental horizontal page scrolling.

## Responsive and accessibility requirements
- Preserve strong contrast and readable type at every breakpoint.
- Provide meaningful accessible names for story cards and the action button.
- Use semantic section, heading, link, and button elements.
- Keep keyboard focus visible against the black background.
- On mobile, stack the heading and action if the header row becomes cramped, then maintain a comfortable swipeable card row.

## Never
- Never copy the reference’s logos, product names, brand identity, or exact wording.
- Never reuse its testimonial copy, story titles, customer names, or attribution details.
- Never import its exact images, illustrations, video stills, or visual assets.
- Never reproduce the reference pixel-for-pixel or preserve its exact card content and composition.
- Never use generic filler testimonials that do not make sense for the user’s product.
- Never sacrifice accessibility or responsive behaviour just to imitate the visual crop.
