## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106593-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106544280-full.webp
- Component on Kage: https://kage.design/component/speechmark-faq

# Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, and typography are. Then apply the principles below to create an FAQ section tailored to my product—not a copy of the reference.

## Design language

Build a calm, editorial FAQ accordion for a modern software marketing page. The section should feel trustworthy, spacious, and easy to scan.

### Layout and alignment
- Use a very light, cool-tinted background across the FAQ section, approximately `#F4F8FA` or a colour adapted from my brand.
- Place the FAQ in a centred content column with a comfortable maximum width of roughly `860–980px` on desktop. Keep the left and right edges aligned with the surrounding page content.
- Stack questions vertically in a single column; do not use cards or a multi-column grid.
- Each item should be separated by a thin horizontal rule spanning the full content width.
- Give the list generous vertical padding: approximately `24–30px` per closed row on desktop, with slightly tighter spacing on mobile.
- Keep the section visually open below the final item so it can transition naturally into the next section.
- On small screens, use `20–24px` side gutters and allow question text to wrap naturally without squeezing the chevron.

### Typography hierarchy
- Use a refined serif or humanist display face for the question text, with a strong editorial character. If the product brand uses a different type system, preserve its personality while maintaining high readability.
- Questions should be visually prominent but not oversized: approximately `20–23px` on desktop, `18–20px` on mobile, with a `1.25–1.4` line-height and medium-to-semibold weight.
- Use a dark navy ink for headings and questions, approximately `#142E55` or an appropriate brand equivalent.
- Answer copy should be smaller and lighter than the question, around `16–18px`, with a `1.55–1.7` line-height and a readable measure. Use a muted navy-grey such as `#536477`.
- Maintain a clear distinction between question and answer through size, weight, and colour rather than decorative elements.

### Borders, chevrons, and surfaces
- Use subtle one-pixel dividers, approximately `#D4DDE2`; avoid heavy borders, shadows, or filled cards.
- Place a small chevron at the far right of every row, aligned to the vertical centre of the question text. Use a simple stroke icon in a muted blue such as `#2E6A93`.
- Closed chevrons should point downward; open chevrons may rotate upward with a smooth transition.
- Keep the FAQ surface flat and minimal. Do not add rounded containers unless they are already central to my brand language.

### Interaction
- Make the entire question row a keyboard-accessible button or disclosure control, not only the chevron.
- Clicking or pressing Enter/Space should expand and collapse the answer with a restrained height and opacity transition, approximately `180–240ms` using an ease-out curve.
- Preserve layout stability and avoid abrupt jumps where possible.
- Support either one open item at a time or multiple open items, choosing the behaviour that best fits my product’s content. Make the state obvious through the visible answer and chevron rotation.
- Include visible `:focus-visible` styling with a clear outline or accessible colour treatment.
- Respect reduced-motion preferences.
- Use semantic disclosure patterns and appropriate ARIA attributes, including an accessible name for each control.

### Responsive behaviour
- Keep the single-column structure at every breakpoint.
- Reduce typography and row padding modestly on mobile, but retain enough breathing room for touch targets of at least `44px`.
- Ensure long questions wrap cleanly while the chevron remains fixed at the right edge.

## Content guidance
Use real questions and answers for my product. Questions should address practical objections, privacy or security, setup requirements, pricing, compatibility, workflow, and differentiation where relevant. Keep answers concise and specific; avoid vague marketing filler.

## Never
- Never copy the reference’s product name, question wording, answer copy, or calls to action.
- Never use logos, product names, brand marks, illustrations, icons with distinctive branding, or imagery from the reference.
- Never reproduce the reference page as a whole; build only the reusable FAQ component and adapt its content and brand expression to my product.
- Never use decorative imagery when typography, rules, and interaction are sufficient.
- Never sacrifice keyboard access, focus visibility, contrast, or mobile usability for visual similarity.
