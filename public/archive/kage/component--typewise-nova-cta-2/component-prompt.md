## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/typewise-nova/b4948f23-79f3-4392-9236-ca27a7b6b602-1789106479-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/typewise-nova/b4948f23-79f3-4392-9236-ca27a7b6b602-1789106444891-full.webp
- Component on Kage: https://kage.design/component/typewise-nova-cta-2

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original FAQ section for that product rather than reproducing a reference design.

## Build this section
Create a dark, full-width FAQ accordion for a modern software product. Keep the content column centered with a comfortable maximum width of roughly 860–960px. Use a vertical stack of separate accordion cards with very small gaps between them; the first item should be expanded on initial render while the others remain collapsed.

### Layout and alignment
- Align every question and answer to the same left edge.
- Give each row generous horizontal padding, approximately 22–24px on desktop and 16–18px on mobile.
- Use a question row height of about 64–68px on desktop and at least 60px on mobile.
- Place the expand/collapse control at the far right, vertically centered, with enough hit area for touch interaction.
- The expanded answer should sit directly beneath its question inside the same card, with a modest bottom padding and readable line length.
- Make the component responsive: on narrow screens, preserve the card rhythm and allow question text to wrap naturally rather than shrinking it excessively.

### Typography
- Use a clean contemporary sans-serif, or the product's existing brand font.
- Questions should be semibold or bold, around 16px desktop and 15–16px mobile, with tight but comfortable line-height.
- Answers should be regular weight, around 16px, with a 1.55–1.7 line-height and lower contrast than the questions.
- Keep the hierarchy obvious: high-contrast question, muted explanatory answer, small high-contrast control.

### Colour
Use approximate values and adapt them to the product brand:
- Page background: near-black charcoal, `#09090B`.
- Accordion surface: subtly lighter charcoal, `#151519`.
- Border: low-contrast cool gray, approximately `#35353D`.
- Question text: soft white, `#F2F2F4`.
- Answer text: muted gray, `#92929B`.
- Accent control: restrained electric blue, approximately `#6C8DFF`.
- Avoid gradients and excessive decoration; the contrast between background, surface, text, and accent should do the work.

### Borders and shape
- Use a 1px solid border around each card.
- Set a medium rounded radius, approximately 16px, so the section feels polished without becoming playful.
- Keep the expanded card and collapsed cards visually consistent; do not remove the border when an item opens.
- Avoid shadows or use only an extremely subtle shadow that does not lighten the dark UI.

### Interaction
- Each entire question row should be clickable, keyboard accessible, and implemented with an accessible button/disclosure pattern.
- Show a simple plus icon for collapsed items and a minus icon for the expanded item, using the accent colour.
- Animate height and opacity gently over roughly 180–240ms with an ease-out curve.
- Preserve readable focus states: add a visible accent outline or ring for keyboard focus.
- Support one open item at a time unless the user's product needs multiple simultaneous answers.
- Include appropriate `aria-expanded`, `aria-controls`, and unique panel IDs.

## Never
- Never copy logos, product names, brand-specific copy, or exact FAQ wording from the reference.
- Never copy illustrations, imagery, or decorative artwork from the reference.
- Never make the section dependent on a particular product category; write questions and answers for the user's product.
- Never sacrifice keyboard access, touch target size, or reduced-motion support for visual fidelity.
- Never use the reference's exact spacing, typography, colours, or wording as immutable values; treat them as starting principles and adapt them to the user's brand.
