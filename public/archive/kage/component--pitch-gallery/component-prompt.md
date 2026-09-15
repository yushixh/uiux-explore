## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060650-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-gallery

## Before you start
Ask the user what their product is, who it is for, and what brand personality, colors, and content guidelines should shape the implementation. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Design language

Build a self-contained FAQ accordion section with a confident, editorial SaaS feel.

### Layout and alignment
- Use a full-width, deep-color section with generous vertical padding; on desktop, aim for roughly 110–150px top padding and 120–160px bottom padding.
- Center the content in a constrained column around 600–640px wide, while allowing the section background to span the viewport.
- Place a small eyebrow label above the heading, followed by a prominent centered heading.
- Keep the heading and FAQ list aligned to the same center axis.
- Stack the questions vertically with a clear 22–26px gap between rows.
- On smaller screens, reduce horizontal gutters to 20–24px and let question text occupy the available width beside the expand control.

### Typography hierarchy
- Use a compact uppercase or small-label eyebrow at approximately 15–17px, medium weight, with comfortable letter spacing.
- Use a large display heading around 46–54px on desktop and 34–40px on mobile. Choose a rounded or humanist sans-serif if it suits the user’s brand.
- Set question labels in a strong semibold or bold weight, approximately 25–29px on desktop and 18–22px on mobile.
- Use a relaxed line height around 1.15–1.25 for questions so long labels can wrap naturally without looking cramped.
- Center the heading, but left-align question copy within each row for quick scanning. If the product’s brand calls for a more formal treatment, retain the same hierarchy with a suitable typeface.

### Color
- Use a saturated dark background, approximately `#291064` to `#32136F`, or a comparable brand color supplied by the user.
- Make the heading a soft lavender or near-white, approximately `#C9B4FF` or `#F6F3FF`, rather than pure white.
- Use semi-transparent lighter panels for the question rows, approximately `rgba(236, 225, 255, 0.24)` over the background.
- Set question text to warm white, approximately `#FBFAFF`.
- Use a near-white circular control, approximately `#FAF9FF`, with a dark purple plus icon for clear affordance.
- Preserve accessible contrast for all text and interactive states; adjust the approximated colors if the user’s palette requires it.

### Borders, shape, and spacing
- Give each FAQ row a pill-like rounded rectangle with approximately 22–24px radius, or use a radius large enough to feel soft without becoming a capsule at multiple lines.
- Add a subtle 1px border in a low-opacity light lavender, such as `rgba(255,255,255,0.28)`.
- Set row height to roughly 80px for single-line questions and allow it to grow to around 112–120px when text wraps.
- Use 28–34px horizontal padding on desktop; use 20–22px on mobile.
- Place the expand control at the far right, vertically centered, with a 32–34px circular hit area. Keep at least 44px of actual clickable/tappable area through button padding if needed.
- Avoid shadows unless they are extremely subtle; the contrast between the background and translucent panels should provide the depth.

### Interaction
- Make every question row a keyboard-accessible button or disclosure trigger, not a decorative container.
- On hover, slightly increase panel brightness or border opacity and transition over 150–200ms.
- On focus-visible, show a clear 2px outline with strong contrast and an offset from the row.
- Animate the plus icon into a minus or rotate it subtly when the item opens.
- Reveal the answer with a restrained height/opacity transition, while keeping the layout stable and respecting reduced-motion preferences.
- Allow one or multiple items to remain open based on the product’s content needs, and expose expanded state with `aria-expanded` and a correctly associated answer region.
- Include realistic answer content supplied by the user; do not leave interactive rows nonfunctional.

## Never
- Never reuse logos, product names, slogans, or exact copy from the reference.
- Never reproduce the reference section pixel-for-pixel or treat its colors as mandatory.
- Never include the reference’s illustrations, imagery, decorative wordmarks, or other branded visual assets.
- Never make the rows clickable without visible keyboard focus or accessible disclosure semantics.
- Never sacrifice readable contrast, responsive wrapping, or touch target size for visual similarity.
