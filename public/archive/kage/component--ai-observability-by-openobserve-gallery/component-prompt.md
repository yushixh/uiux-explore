## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106508-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106452566-full.webp
- Component on Kage: https://kage.design/component/ai-observability-by-openobserve-gallery

# Build a dark FAQ accordion section

## Before you start
Ask me what my product is, who it is for, and what visual brand or design system it uses. Then apply the principles below to create an original FAQ section tailored to my product—not a copy of the reference.

## Goal
Build a responsive FAQ section for a modern software product. The component should feel focused, trustworthy, and easy to scan, especially when answers contain technical detail. Use an accordion interaction with multiple questions and a small number of expanded answers.

## Design language

### Layout and alignment
- Place the section on a very dark plum/navy background, approximately `#100622` to `#16092b`.
- Center the section within the page and constrain the FAQ list to approximately `760px–800px` on desktop so long answers remain readable.
- Add a centered section heading above the list, with around `32px` of space between the heading and the first item.
- Stack items vertically with `12px–14px` gaps between them.
- On mobile, use horizontal page padding of `20px–24px`; allow the accordion to fill the available width.
- Keep all question text and controls aligned consistently to the left and right edges of each panel.

### Typography hierarchy
- Use a clean modern sans-serif font or the product’s existing brand font.
- Set the heading at approximately `24px–28px`, weight `700`, with tight line-height around `1.15`.
- Set question labels at approximately `16px`, weight `650–700`, line-height around `1.4`.
- Set answer text at approximately `15px–16px`, regular weight, line-height around `1.5–1.65` for comfortable reading.
- Use a soft near-white for primary text, approximately `#F7F4FA`, and a slightly muted lavender-white such as `#E4DEEC` for answers.

### Panels, borders, and spacing
- Give each accordion item a translucent charcoal-plum surface, approximately `#2A213D` or `rgba(255,255,255,0.12)` over the dark background.
- Use a subtle 1px border in muted violet, approximately `#5E5274`; increase its brightness slightly for the active item, such as `#75688E`.
- Use a modest radius of `7px–9px`; avoid highly rounded pill shapes.
- Closed items should have approximately `20px` vertical padding and `20px` horizontal padding.
- Expanded items should preserve the same horizontal padding, with the answer separated from the question by approximately `18px–20px`.
- Keep expanded answers compact enough that the list still feels like a single cohesive component.

### Interaction
- Make each entire row a keyboard-accessible button or disclosure control, not only the chevron.
- Show a chevron on the far right. Rotate it upward when open and downward when closed; use a simple thin stroke rather than a filled icon.
- Animate open/close with a restrained `150ms–220ms` height and opacity transition. Respect `prefers-reduced-motion`.
- Provide clear hover, focus-visible, and active states without changing the overall palette dramatically.
- Use a visible focus ring with a lavender or cool violet color, approximately `#A894D8`.
- Choose whether one or several items can remain open based on the product’s content, but ensure the state is obvious and the interaction is usable with keyboard and screen readers.
- Include accurate `aria-expanded`, `aria-controls`, and semantic heading structure.

### Responsive behavior
- Preserve the centered narrow reading measure on desktop.
- At smaller widths, reduce the heading to approximately `22px–24px` and reduce panel padding to `16px`.
- Allow long questions to wrap naturally while keeping the chevron aligned to the top or center in a stable way.
- Never let the answer text or controls overflow horizontally.

## Content guidance
Use realistic, product-specific questions and answers supplied by me. Keep questions concise and outcome-oriented. Answers may include technical terminology, but break dense information into readable sentences and paragraphs.

## Never
- Never reuse logos, product names, brand names, or exact copy from the reference.
- Never reproduce the reference FAQ wording, question order, dimensions, or visual details exactly.
- Never include illustrations, screenshots, decorative imagery, or background artwork from the reference.
- Never make the panels excessively rounded, brightly coloured, or visually noisy.
- Never sacrifice keyboard accessibility, semantic markup, or readable contrast for visual similarity.
