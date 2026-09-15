## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073778-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-stats

## Before you start
Ask the user what their product is, who it serves, and what their brand personality and visual system are. Then apply the principles below to create an original customer-proof or stats section for that product—not a copy of any reference.

## Goal
Build a dark, editorial stats/testimonial section that communicates measurable customer outcomes through a dense, scrollable collection of proof cards. Treat each card as a short case-study fragment: a strong result or operational detail, followed by a source link and a compact attribution row.

## Design language

### Layout and alignment
- Use a full-width section inside a centered container, with a subtle editorial grid rather than a floating card wall.
- On desktop, use three or four equal-width columns separated by 1px vertical rules. Offset the content rhythm across columns so cards do not all begin and end on the same horizontal lines; a masonry layout is appropriate.
- Keep each card flush with the grid: avoid excessive shadows, detached panels, or large rounded containers.
- Give every testimonial a generous internal inset, approximately 28–32px horizontally and 26–34px vertically.
- Let cards vary in height according to their content. Use consistent minimum padding and a 1px horizontal divider between adjacent cards.
- Add a centered “read more” control or pagination affordance near the bottom if the collection is truncated. It should feel secondary and integrated into the grid.
- On tablet, reduce to two columns. On mobile, collapse to one column while preserving clear separators and comfortable reading width.
- Align all attribution rows to the left, with any customer mark or text label aligned on the opposite side only when it improves balance.

### Typography hierarchy
- Use a modern sans-serif with a calm, technical feel. Apply the user's own typeface where available.
- Make the quote or result the dominant element: approximately 18–20px desktop, 1.45–1.6 line-height, regular weight, and a soft light-gray rather than pure white.
- Emphasize metrics naturally within the sentence through wording or slightly stronger weight, not oversized dashboard numerals.
- Style source links at 13–14px with an underline or low-contrast bottom border and a small arrow/chevron.
- Use author names at 14px medium weight and company/role metadata at 13px in a dimmer gray.
- Keep logos or customer labels visually restrained; they should support credibility, not overpower the quote.

### Colour
- Use a near-black charcoal background around `#101114` or `#111214`.
- Use borders and grid rules in a very subtle gray such as `#202226` or `#25272B`.
- Use primary text around `#B7B8BD`, with headings or emphasized text near `#E5E7EB`.
- Use secondary metadata and inactive links around `#73767D` to `#8B8E95`.
- If the product has an accent colour, reserve it for tiny interaction states, arrows, focus rings, or carefully selected metric emphasis. Do not introduce bright colour into every card.
- Add a very subtle dark gradient or fade at the lower edge only if it helps communicate that more content continues below; keep it functional, not decorative.

### Borders and radius
- Use 1px solid dividers with low contrast. The grid structure is more important than individual card outlines.
- Prefer square or nearly square corners, approximately 0–4px radius. Avoid glossy, heavily rounded testimonial cards.
- If a “read more” button is used, give it a thin border, 4–6px radius, compact horizontal padding, and a dark transparent fill.
- Avoid drop shadows; depth should come from spacing, typography, and the grid.

### Content and interaction
- Write concise, believable proof statements that combine a concrete metric, operational improvement, or product outcome with enough context to feel credible.
- Include a source link such as a customer story, case study, or details view. Make the whole card or only the link clickable based on the product's interaction model, but make the affordance clear.
- Use small circular avatars only if the product has real customer imagery available; otherwise use initials or a neutral abstract placeholder rather than invented portraits.
- On hover, gently brighten the source link and border, reveal a subtle arrow translation of 2–3px, and optionally lift the quote colour slightly. Keep motion under 180ms and avoid card scaling.
- Ensure keyboard focus is visible with a 2px accent-colour outline or accessible high-contrast ring.
- Respect reduced-motion preferences.
- Make the grid responsive and accessible: semantic list/article markup, readable contrast, alt text for real avatars, and links with descriptive accessible names.

## Never
- Never reuse logos, product names, customer names, exact copy, metrics, avatars, illustrations, or imagery from the reference.
- Never recreate the reference's brand identity or make the section appear to belong to another company.
- Never use a generic logo wall with no proof, context, or meaningful outcome.
- Never make every card identical in height if the content naturally varies.
- Never rely on colour alone to communicate hierarchy or interaction.
- Never add gradients, glassmorphism, oversized numerals, or decorative imagery unless they are clearly appropriate to the user's own brand.
