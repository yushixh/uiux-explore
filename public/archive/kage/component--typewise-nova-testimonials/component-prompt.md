## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/typewise-nova/b4948f23-79f3-4392-9236-ca27a7b6b602-1789106478-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/typewise-nova/b4948f23-79f3-4392-9236-ca27a7b6b602-1789106444891-full.webp
- Component on Kage: https://kage.design/component/typewise-nova-testimonials

# Before you start
Ask the user what their product does, who it serves, and what brand personality, colours, and type choices they want to use. Then apply the principles below to create an original production-proof or testimonial section for their product—not a copy of the reference.

## Goal
Build a dark, high-credibility social-proof section that communicates that real customers use the product and that their usage produces measurable outcomes. The component should feel like a calm, premium proof point near the middle or lower portion of a marketing page.

## Structure and layout
- Use a full-width section with a nearly black background and a centred content container, approximately 1120–1200px wide.
- Give the section generous vertical breathing room: roughly 120–180px top and bottom on desktop, reduced proportionally on smaller screens.
- Start with a small uppercase eyebrow aligned to the left. Use it to establish credibility, such as a short phrase meaning “trusted in real use,” but write original copy for the user’s product.
- Place a large headline below the eyebrow, left aligned. Keep it to one or two short lines and make the message outcome-oriented rather than promotional.
- Add a compact outline button or text button on the same horizontal band as the headline, aligned to the far right on desktop. It should invite visitors to view more customer evidence, stories, or results. Stack it below the heading on mobile.
- Below the heading row, create a three-column metrics or testimonial-proof row. Each column should have a prominent statistic or short quoted outcome, followed by a concise explanation. On smaller screens, stack the columns vertically or use a horizontally scrollable strip with clear snap behaviour.
- Separate columns with subtle vertical rules on desktop. Remove or replace those rules with horizontal dividers on narrow screens.
- Keep all content inside a consistent left and right alignment grid; avoid centred text in the primary layout.

## Typography
- Use a modern sans-serif with a clean, slightly technical feel. Use a heavy or semibold weight for the main heading and metric values, and regular weight for supporting copy.
- Eyebrow: 11–13px, uppercase, medium weight, increased letter spacing around 0.12em.
- Main heading: approximately 44–56px on desktop with a tight 1.05–1.12 line height; reduce to 34–42px on mobile.
- Metric values: approximately 48–72px, with tight tracking and enough room for percentages, multipliers, or other units.
- Supporting descriptions: 14–17px with a relaxed 1.45–1.6 line height and a readable max width.
- Use sentence case for headlines and descriptions; reserve uppercase for the eyebrow and optional labels.

## Colour
- Page background: near-black, approximately #07070B or #08090D.
- Primary text: soft white, approximately #F3F4F8.
- Secondary text: cool muted grey, approximately #9A9EAE.
- Borders and dividers: low-contrast blue-grey, approximately #242936, with opacity if needed.
- Use one restrained electric blue accent for the eyebrow, links, button emphasis, or one highlighted metric, approximately #4D7CFF or #5B86FF.
- If the product brand has a meaningful secondary accent, use it on only one metric or detail so the proof remains trustworthy rather than decorative.
- Maintain accessible contrast for all body text and controls.

## Borders, surfaces, and radius
- Keep the main section open and editorial rather than placing everything inside a large card.
- Use 1px dividers with low opacity between metric columns.
- If the action is a button, use a transparent or subtly lighter dark fill such as #111218, a 1px border around #343742, and a 10–14px radius.
- Use a 10–14px radius for any testimonial cards or supporting surfaces introduced by the product, with no heavy shadows.
- Avoid excessive gradients; a very subtle radial blue glow may be used behind one area if it supports the brand, but it must not reduce text legibility.

## Content behaviour and interaction
- The action control should have a clear hover and focus state: slightly brighter border, a modest surface lift, and a small arrow or directional icon shift if an icon is used.
- If there are more than three proof items, support a carousel or “view more” pattern, but keep the first three visible without interaction on desktop.
- If using a carousel on mobile, include accessible previous/next controls or pagination and allow keyboard navigation; do not rely on an automatic, fast-moving ticker.
- Use subtle transitions around 150–220ms with an ease-out curve.
- Respect reduced-motion preferences.
- Ensure the section remains persuasive when statistics are unavailable by allowing short customer quotes, role/company descriptors, or qualitative outcomes in the same visual slots.

## Responsive details
- Desktop: headline and action share a row; three proof columns sit below with vertical dividers.
- Tablet: reduce heading size and gap, while keeping the action beside the heading where space permits.
- Mobile: stack eyebrow, heading, action, and proof items; preserve generous spacing and left alignment. Avoid shrinking the metric text so far that the numbers lose impact.
- Keep tap targets at least 44px high and provide visible keyboard focus styles.

## Implementation guidance
- Use semantic HTML: a section with a heading, an unordered list for proof items, and real buttons or links for actions.
- Make the component data-driven so the number of proof items, labels, quotes, colours, and action text can be changed easily.
- Do not invent unverifiable customer claims for the user’s product. Use placeholders or ask the user for approved metrics and testimonials.

## Never
- Never reuse logos, product names, brand names, customer names, statistics, testimonials, or exact copy from the reference.
- Never copy the reference layout pixel-for-pixel; reinterpret the hierarchy and proof pattern for the user’s product.
- Never include the reference’s illustrations, UI mockups, imagery, stars, or decorative assets unless the user supplies an original equivalent.
- Never use unsupported claims or fabricated performance numbers.
- Never make the section depend on colour alone to communicate meaning.
