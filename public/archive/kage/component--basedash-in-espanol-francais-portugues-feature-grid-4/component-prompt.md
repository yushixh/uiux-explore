## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106703-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106655341-full.webp
- Component on Kage: https://kage.design/component/basedash-in-espanol-francais-portugues-feature-grid-4

## Before you start
Ask me what my product is, who it is for, and what its brand personality and supported languages are. Then apply the principles below to create an FAQ section tailored to my product—not a copy of any reference. The interface should support Spanish, French, and Portuguese content, with wording and text lengths that feel natural in each language.

## Build this section
Create a responsive FAQ accordion for a modern software product marketing page. It should feel calm, editorial, trustworthy, and highly legible rather than overly decorative.

### Layout and alignment
- Place the section in a centered content container with a maximum width of approximately 896px; use about 24px horizontal padding on small screens and 32–48px on larger screens.
- Start with a left-aligned section heading, followed by a full-width list of FAQ rows.
- Keep the heading and rows on the same vertical alignment axis.
- Use a generous gap between the heading and the first row, approximately 22–28px.
- Each row should be a horizontal flex layout: question text on the left and a small disclosure chevron on the right.
- Give rows approximately 24–30px vertical padding on desktop and 20–24px on mobile. Let the question text wrap naturally instead of truncating it.
- Use a minimum row height around 68–72px on desktop, while allowing it to grow for longer translated questions.
- Keep the section spacious above and below so it reads as a distinct page section.

### Typography hierarchy
- Use a clean contemporary sans-serif or the product’s existing UI font.
- The section heading should be medium or regular weight, around 30–32px on desktop and 25–28px on mobile, with tight but comfortable line height around 1.15.
- FAQ questions should be around 18px on desktop and 16–17px on mobile, with a line height around 1.45.
- Use regular or slightly medium weight for questions; avoid heavy bold styling.
- Preserve readable multilingual wrapping and do not reduce font size merely to force every question onto one line.

### Colour and surface
- Use a warm off-white page background near `#FAF8F5` or adapt this to the brand’s light neutral.
- Use near-black warm text near `#242220`.
- Use subtle divider lines near `#DEDAD4`; they should be visible but quiet.
- Keep the section free of cards, shadows, gradients, and loud accent colours unless the user’s brand specifically requires them.
- If the product has a colour accent, use it sparingly for focus states or the expanded state rather than for every row.

### Borders and shape
- Draw a 1px horizontal divider above the first row and below every row, or use a consistent border-bottom with a top border on the list.
- Avoid vertical borders and boxed cards.
- Use a small, unobtrusive chevron icon with a stroke colour around `#77736D`.
- Keep corners effectively square; the FAQ list should feel like an editorial ruled list rather than a rounded panel.

### Interaction
- Make every row fully clickable/tappable, not only the chevron.
- Use accessible buttons with `aria-expanded` and a relationship to the answer panel.
- Open one item at a time by default unless the product context benefits from multiple expanded answers.
- Animate the chevron rotation and answer expansion subtly, around 180–240ms with an ease-out curve. Respect `prefers-reduced-motion`.
- On hover, use a very subtle background tint or text shift; do not create a dramatic card effect.
- Provide a clearly visible keyboard focus ring with sufficient contrast.
- Answers should appear below the question with a restrained inset or width, comfortable line height, and enough bottom padding before the next divider.
- Ensure the accordion works correctly for Spanish, French, and Portuguese, including accents, longer phrases, keyboard navigation, screen readers, and right-to-left-safe icon placement even if RTL is not currently required.

### Content guidance
- Use questions that address the product’s most important objections, setup concerns, capabilities, security, pricing, or workflow differences.
- Keep the questions concise and genuinely useful. Write localized copy rather than translating word-for-word.
- Do not include unnecessary labels, badges, illustrations, or decorative graphics.

## Never
- Never copy the reference’s logos, product names, brand language, exact questions, or exact copy.
- Never reuse illustrations, imagery, screenshots, icons, or other distinctive visual assets from the reference.
- Never reproduce the reference as a pixel-for-pixel clone; adapt the system to my product and brand.
- Never use dense cards, heavy shadows, excessive rounded corners, loud gradients, or decorative elements that weaken scanability.
- Never hide important answers from keyboard users or screen readers.
- Never force Spanish, French, or Portuguese text into awkward single-line layouts.
