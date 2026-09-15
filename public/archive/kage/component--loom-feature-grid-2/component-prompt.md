## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/loom-com/c384a931-6938-4c5e-b36b-e07415522afb-1789060438-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/loom-com/c384a931-6938-4c5e-b36b-e07415522afb-1789060413-full.webp
- Component on Kage: https://kage.design/component/loom-feature-grid-2

# Build an alternating feature showcase section

## Before you start
Ask me what my product does, who it is for, and what visual brand direction, colours, typography, and tone I want to use. Then apply the principles below to create an original version for my product—not a reproduction of the reference.

## Goal
Create a polished marketing section that explains several product capabilities through an alternating editorial grid. The section should feel spacious, confident, friendly, and easy to scan: each feature pairs a short benefit-led explanation with a colourful visual panel, followed by a contrasting security or trust callout.

## Structure
- Use a white or very lightly tinted page background.
- Begin with a centered section heading near the top. Use a short, assertive statement that wraps to no more than two lines on desktop.
- Follow with three feature rows inside a constrained max-width container, approximately 960–1120px wide:
  1. Text on the left, visual panel on the right.
  2. Visual panel on the left, text on the right.
  3. Text on the left, visual panel on the right.
- Give each row generous vertical separation, around 120–180px on desktop, so the component feels editorial rather than like a dense dashboard.
- Align text blocks vertically around the centre of their visual panels. Keep text columns around 280–340px wide and visual panels around 450–520px wide.
- Finish with a wide, dark rounded callout card beneath the feature rows. It should have a centered heading, supporting copy, and one primary button.

## Layout and alignment rules
- Use CSS Grid for each feature row, with approximately 40% text / 60% visual space and a gap of 56–88px.
- Alternate the visual position without changing the internal alignment or hierarchy of the content.
- Keep the section heading and callout content centered, while feature copy is left-aligned.
- On screens below roughly 760px, collapse every row into one column. Place the visual above the text for a consistent mobile rhythm, or use the row’s natural order if it improves the product story.
- Make all visual panels responsive and preserve their intended aspect ratio. Avoid letting artwork dictate excessive page width.
- Ensure the callout card fits inside the main page margins and does not touch the viewport edges.

## Typography hierarchy
- Use a modern sans-serif with a warm, highly legible appearance. Prefer the product’s existing brand font when available.
- Section heading: very bold, approximately 48–64px desktop, tight line-height around 0.95–1.05, slight negative tracking. Reduce to 34–42px on mobile.
- Feature headings: bold, approximately 25–32px desktop with a compact 1.1 line-height. Allow natural two- or three-line wrapping.
- Feature body: 17–19px, line-height around 1.55–1.7, with a comfortable measure of roughly 28–36 characters per line.
- Links: 16–18px, semibold or bold, using a brand accent colour. Include a simple right arrow with enough spacing to read as part of the link.
- Callout heading: approximately 42–56px desktop, bold and compact; supporting copy: 18–21px with generous line-height.

## Colour and visual language
- Page background: white or near-white, approximately #FFFFFF or #FAFAFB.
- Primary text: near-black, approximately #111214.
- Secondary text: deep charcoal, approximately #292B31.
- Link and action accent: a saturated blue in the range of #246BCE–#2F80ED; choose a colour that fits the user’s brand.
- Feature visual panels should use distinct, soft pastel backgrounds—such as pale periwinkle, lavender, blush, mint, or powder blue—rather than generic grey cards. Approximate examples: #EAF1FF, #EBD8FA, #E3F2EC, and #E8ECF8.
- Visual panels may contain abstract representations of the product, interface fragments, comments, captions, media controls, charts, or other product-relevant proof. Keep them illustrative and specific to the user’s product.
- Use white or translucent floating cards inside visuals to create depth, with restrained shadows such as 0 8px 24px rgba(17,18,20,0.12).
- The closing trust card should use a near-black background around #111214, white text, and a vivid blue or brand-coloured button.

## Borders, radii, and depth
- Feature visual panels: large rounded corners, approximately 28–40px.
- Closing callout: very large radius, approximately 44–64px desktop, reduced to 28–36px on mobile.
- Buttons: pill-shaped, around 999px radius, with 14–18px horizontal padding and a minimum height of 48px.
- Avoid visible borders around the main feature rows. Use soft shadows only inside visual mockups or floating interface elements.
- Keep corner treatment consistent across panels, mock interface cards, and buttons, while allowing the main feature artwork to feel more expressive.

## Content and interaction
- Write original, benefit-led copy for the user’s product. Each feature should have a short title, a two- to four-sentence explanation, and a concise action link.
- Make action links keyboard accessible and provide visible hover and focus states. On hover, shift the arrow slightly to the right and increase colour contrast without changing layout.
- The callout button should have a clear hover state, such as a subtle brightness increase or 2px upward translation, and a strong focus ring.
- If the visual panels include simulated controls, keep them decorative unless the product requirements call for interaction. Do not create fake functionality that implies a real editor or player.
- Use subtle entrance animation only if appropriate: a short fade-and-rise as rows enter the viewport, with `prefers-reduced-motion` support. Never let animation delay access to content.
- Add meaningful alt text to informative visuals; mark purely decorative artwork as presentational.

## Responsive behaviour
- At tablet widths, reduce row gaps and visual sizes while preserving the alternating rhythm.
- At mobile widths, use 24px page gutters, 64–96px between rows, 30–36px panel radii, and 16–18px body text.
- Keep the heading readable and avoid awkward single-word lines by controlling its max-width rather than forcing manual line breaks.
- Stack the dark trust card’s content vertically and keep its button comfortably tappable.

## Never
- Never copy the reference’s logos, product names, branded icons, screenshots, exact copy, illustrations, imagery, or interface content.
- Never use the reference product’s people, avatars, video frames, code examples, or embedded branding.
- Never reproduce the exact dimensions, wording, colour palette, or artwork composition; use the layout principles to create a distinct design for the user’s product.
- Never make the feature grid so decorative that the product benefits become difficult to scan.
- Never omit responsive behaviour, keyboard focus states, accessible contrast, alt text, or reduced-motion support.
