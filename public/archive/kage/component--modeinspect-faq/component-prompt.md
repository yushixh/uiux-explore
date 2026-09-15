## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106493-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-faq

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Design the FAQ section
Build a refined, editorial FAQ block for a modern software or digital product. The section should feel confident, quiet, and highly scannable, with generous vertical space and a clear question-first interaction model.

### Layout and alignment
- Use a warm, light neutral background covering the entire section, approximately `#E5E1DB` or a brand-adjusted equivalent.
- Constrain content to a wide centered container, approximately 90–92% of the viewport width, with a maximum width around 1200–1320px.
- Add substantial top and bottom padding: roughly 120–150px on desktop and 72–96px on mobile.
- Place a large headline at the top-left, with a maximum width of about 760–900px. Use one or two lines depending on the product's messaging and viewport.
- Below the heading, create a single-column accordion list spanning the content width. Align every question and control to the same horizontal edges.
- Separate rows with thin horizontal rules rather than boxed cards. Keep the first rule close enough to the heading to establish hierarchy, with approximately 38–48px of space between heading and list.
- Each row should be generous in height, around 84–100px on desktop, with vertically centered content. Let row height grow naturally when an answer is open.
- On mobile, reduce horizontal padding while preserving generous row height and ensure long questions wrap cleanly.

### Typography hierarchy
- Use a modern sans-serif or distinctive display sans that matches the user's brand. The heading should be large, light-to-regular in weight, and tightly tracked; target roughly 56–68px on desktop with a line-height around 0.95–1.05.
- Use a noticeably different typographic treatment only if it supports the user's brand—such as an accent face or emphasized phrase—but maintain readability and avoid decorative imitation.
- Questions should be medium-sized, approximately 17–19px on desktop and 16–17px on mobile, with medium or semibold weight and a line-height around 1.3.
- Keep question text dark and high contrast, approximately `#111111` or a brand-equivalent near-black.
- Answer copy, when expanded, should be smaller than the question, around 15–17px, with comfortable line-height around 1.55 and a muted text colour such as `#4F4B46`.

### Colour, borders, and shape
- Use a restrained two-tone palette: warm off-white background, near-black typography, and subtle warm-gray rules.
- Set dividers to approximately `#C7C2BB` with 1px thickness. They should be visible but understated.
- The plus control should be a small outlined circular button, approximately 28–30px in diameter, with a 1px border around `#A9A49D` and a transparent or matching background.
- Use a simple plus glyph with thin strokes, centered precisely. If the row is open, animate or transform the plus into a minus while retaining the same control styling.
- Avoid card shadows, gradients, heavy fills, and excessive corner rounding. The overall section should be flat and architectural.

### Interaction and accessibility
- Make the entire FAQ row or at least the question-and-control area keyboard-accessible and clickable, not only the small icon.
- Use semantic disclosure buttons with `aria-expanded` and link each answer panel using `aria-controls`.
- Allow one or multiple answers to remain open based on the product's content needs; choose the behavior deliberately and state it in the implementation.
- Animate opening and closing with a restrained height/opacity transition of about 180–260ms. Do not make the animation bouncy.
- Provide visible `:focus-visible` styling with a high-contrast outline that fits the brand.
- Ensure the plus/minus icon, row boundaries, and expanded state remain understandable without relying on colour alone.

### Responsive behavior
- Preserve the left alignment and editorial rhythm at all breakpoints.
- Scale the heading fluidly with `clamp()`, for example from roughly 38px on small screens to 68px on large screens.
- Keep controls comfortably tappable; use at least a 44px effective hit area even if the visible circle is smaller.
- Test long questions, long answers, keyboard navigation, reduced motion, and narrow screens.

## Never
- Never copy the reference's logos, product names, or branded wording.
- Never reuse the reference's exact FAQ questions or answer copy.
- Never copy any distinctive typeface treatment, brand mark, illustration, or imagery from the reference.
- Never use decorative imagery when the design can remain typographic and structural.
- Never make the accordion inaccessible, dependent on hover, or operable only through the tiny plus icon.
