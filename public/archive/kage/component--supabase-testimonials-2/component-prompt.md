## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060353-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-testimonials-2

## Before you start
Ask the user what their product is, who it is for, and what their brand identity looks like. Then apply the principles below to their product rather than reproducing this reference literally.

## Build a fading masonry testimonials section
Create a responsive testimonials section that presents many short customer quotes as a vertically scrolling or visually stacked masonry wall. The section should feel like an authentic social-proof stream: varied, lightweight, and content-rich, but still controlled enough to fit into a polished product landing page.

### Design language

- **Layout and alignment:** Use a full-width, centered section with a constrained content width around `1200–1440px`. Arrange testimonial cards in 4–5 responsive masonry columns on desktop, reducing to 2 columns on tablet and 1 column on mobile. Let cards have different heights based on quote length, while keeping consistent column gaps of roughly `16–24px`. Offset or stagger columns subtly rather than forcing every card into a rigid horizontal row.
- Keep the testimonial wall inside a fixed visual window, approximately `420–560px` tall. Allow the content to continue beyond the visible area, using clipping and a bottom fade to suggest more testimonials without showing an abrupt cutoff. Leave generous whitespace below the wall before the next section.
- Each card should be a compact rounded rectangle with a small author row at the top: a neutral avatar or initials circle, a handle/name, and optionally a tiny social-platform mark. Follow with a short quote in a relaxed paragraph style. Use realistic variation in quote length and card height.
- **Typography hierarchy:** Use a modern sans-serif system or brand font. Testimonial text should be approximately `15–17px`, with `1.45–1.6` line height and medium-gray colouring. Author names or handles should be `13–15px`, slightly darker and medium weight. Do not use oversized headings inside the wall; the testimonials should read as supporting evidence rather than the page's primary headline.
- **Spacing:** Give cards around `20–24px` internal padding, with `12–16px` between the author row and quote. Use `16–24px` column and row gaps. Keep the overall section padding generous, around `64–96px` vertically, adapting downward on smaller screens.
- **Colour:** Use a near-white page background such as `#FFFFFF` or `#FAFAF9`. Cards can be white with text around `#666666`, author text around `#222222`, and muted metadata around `#8A8A8A`. Use a very subtle border such as `#E8E8E8` and an extremely soft shadow like `0 1px 3px rgba(0,0,0,0.04)`. The bottom fade should transition from transparent to the surrounding page colour, optionally with a faint neutral tint; it must obscure the lower card edges gracefully.
- **Borders and radius:** Use a `1px` low-contrast border and rounded corners around `16–20px`. Keep the cards calm and tactile, not glossy or elevated. Avatars may be circular with a `50%` radius and a thin neutral outline.
- **Interaction:** If the cards are interactive, add a restrained hover state: slightly darker border, a barely visible lift, or a subtle background shift. Do not make every card animate independently on load. If implementing an auto-scrolling or vertically animated stream, keep the speed slow, pause on hover/focus, respect `prefers-reduced-motion`, and ensure all quotes remain readable and keyboard accessible. On mobile, prioritize readability over maintaining many columns.
- **Content behavior:** Use concise, believable first-person quotes with a mix of positive observations, outcomes, and specific use cases. Include author identifiers, but avoid making the section feel like a directory. The visual density should communicate breadth while the fade provides a clean editorial transition into the next section.

### Responsive behavior
- On large screens, show a dense 4–5 column wall with a few cards partially visible near the top and bottom edges.
- On tablet, use 2–3 columns and reduce the visible content height if needed.
- On mobile, use one column or a carefully clipped two-column layout only if text remains comfortably readable. Increase card width and preserve clear author/quote separation.
- Make the fade and clipping work at every breakpoint; never allow horizontal overflow or text to be cut off within a card.

### Never
- Never use logos, product names, testimonial copy, usernames, avatars, illustrations, imagery, or social-platform branding from the reference.
- Never copy the exact number, order, wording, or arrangement of the reference cards.
- Never make the section depend on unreadable tiny text, excessive motion, or a hard visual cutoff.
- Never treat this as a direct visual clone; adapt the layout, tone, colours, density, and content to the user's product and brand.
