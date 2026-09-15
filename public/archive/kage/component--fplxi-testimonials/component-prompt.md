## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073156-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073135-full.webp
- Component on Kage: https://kage.design/component/fplxi-testimonials

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, and typography they want to use. Then apply the principles below to create a testimonial section for their product—not a literal copy of the reference.

## Build a testimonial carousel section
Create a wide, compact testimonial component that presents one customer quote at a time inside a dark, softly rounded panel. It should feel credible, calm, and editorial, with enough structure to communicate social proof without looking like a dense review grid.

### Layout and alignment
- Use a full-width container with a reasonable maximum width, approximately 1200–1280px, and responsive side padding of 24–48px.
- Place the testimonial inside a horizontal panel with a minimum height around 190px on desktop; allow it to grow naturally on smaller screens.
- Add a small uppercase eyebrow in the upper-left, such as a category or audience label. Keep it visually secondary.
- Place a compact slide counter in the upper-right, such as “1 of 5”, aligned to the same top baseline as the eyebrow.
- Put the main quote below the eyebrow, aligned to the left and constrained to a readable width of roughly 560–760px. On desktop it may span two lines; on mobile it should reflow naturally.
- Below the quote, show contributor metadata in one horizontal row: a small avatar or initial tile, name, and one or two muted credibility details.
- Anchor a progress indicator near the bottom-left. Use one active segment and several inactive segments rather than a large pagination control.
- Anchor previous and next controls near the bottom-right. Keep them compact and visually subordinate to the quote.
- On mobile, stack or wrap metadata as needed, retain the counter at the top-right, and keep navigation reachable without letting controls overlap the quote.

### Typography hierarchy
- Use a clean sans-serif font with a humanist or modern grotesk character.
- Eyebrow: uppercase, 10–12px, medium weight, increased letter spacing, muted grey.
- Quote: 18–22px desktop, 16–19px mobile, regular or medium weight, tight but comfortable line height around 1.35–1.45. Use curly quotation marks only if they fit the product’s voice.
- Contributor name: 12–14px, medium weight, high-contrast text.
- Supporting metadata and slide count: 11–13px, muted text with enough contrast to remain legible.

### Colour and surface
- Use a near-black charcoal surface, approximately #171817 to #242524, with a subtle vertical or diagonal tonal shift if desired.
- Use warm off-white for the quote, approximately #F4F2EC.
- Use neutral grey for labels and metadata, approximately #8F918D; use a slightly brighter grey such as #B6B8B3 for secondary emphasis.
- Use one brand-accent colour for the active progress segment or small rating detail. A muted gold around #D6B84C works for a warm accent, but adapt it to the user’s brand.
- Keep the surrounding page background clearly separated from the panel, using a light neutral or the product’s existing page colour.

### Borders, radius, and depth
- Use a 14–16px corner radius on the outer panel.
- Add a very subtle 1px border, approximately rgba(255,255,255,0.08), rather than a heavy outline.
- Use a restrained shadow such as 0 8px 24px rgba(0,0,0,0.12) when the panel sits on a light background.
- Keep internal dividers minimal; rely on spacing and contrast to establish hierarchy.

### Interaction
- Make the previous and next buttons real controls with accessible labels and visible keyboard focus states.
- Use a short, calm slide transition such as a 180–260ms fade or horizontal crossfade. Avoid dramatic motion.
- Update the counter and progress indicator with the active slide.
- If autoplay is included, make it slow, pause on hover and focus, and provide a way to stop it; manual navigation is preferable by default.
- Ensure the quote, contributor metadata, and progress state are readable by screen readers, with an appropriate carousel region label.
- Keep controls usable at touch sizes of at least 40–44px even if the visible arrow icon is smaller.

### Content guidance
- Use a concise, specific first-person customer statement that demonstrates an outcome or moment of value.
- Pair it with a plausible contributor name, role or relevant context, and one credibility signal appropriate to the product.
- Avoid stuffing the panel with star ratings, long paragraphs, or multiple competing calls to action.

## Never
- Never copy the reference’s logos, product names, brand marks, or identifying UI text.
- Never reuse the reference quote, contributor name, rating copy, counter values, or exact testimonial content.
- Never reproduce the reference’s imagery, illustrations, avatar artwork, or decorative assets.
- Never make the component dependent on the referenced product or page.
- Never treat the visual description as a fixed template; adapt colour, copy, type, content model, and interaction details to the user’s product and brand.
