## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060424-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060392-full.webp
- Component on Kage: https://kage.design/component/cal-faq

## Before you start
Ask me what my product is, who it is for, and what its brand personality, typeface, colour palette, and content priorities are. Then apply the principles below to create an FAQ section for that product rather than reproducing a reference page.

## Build this component
Create the opening section of a polished FAQ area: a full-width, light neutral panel with a small centred category pill near the top and a large, bold heading aligned to the left below it. The questions can follow beneath this introduction, but the component should make the heading treatment the visual anchor.

## Design language

### Layout and alignment
- Use a wide, centred content container with generous horizontal gutters: approximately 68px on desktop, 32px on tablet, and 20px on mobile.
- Give the section substantial vertical breathing room, around 64–96px above the label and 72–112px below the heading before the FAQ list begins.
- Centre the small label horizontally, but align the main heading and subsequent FAQ content to the container’s left edge.
- Keep the heading on one or two lines at desktop widths; allow natural wrapping on smaller screens rather than shrinking it excessively.
- Use a subtle full-height or full-width grid treatment only if it supports the product’s visual language. It should remain background structure, not decoration.
- The FAQ list should be readable and scannable, ideally a single column with generous row spacing or a restrained two-column layout on wide screens.

### Typography hierarchy
- Treat the label as metadata: 12–14px, medium weight, compact line height, and slightly increased letter spacing if appropriate.
- Set the main heading in a contemporary sans-serif, approximately 48–64px on desktop, 38–48px on tablet, and 32–40px on mobile.
- Use a heavy or bold weight for the heading, with tight line height around 0.95–1.05 and modest negative letter spacing.
- Use 16–18px body text for questions and answers, with 1.45–1.6 line height for comfortable reading.
- Preserve a clear scale contrast between the pill, heading, question text, and answer text.

### Colour
- Use an off-white or very pale neutral background near `#F8F8F7` or `#FAFAF9`.
- Use near-black text around `#202124` or `#18181B` for the heading.
- Use softened charcoal around `#52545A` for supporting copy.
- Use a subtle border/grid colour around `#E4E4E1` or `#E8E8E6`.
- The label may use a white or slightly tinted fill with a faint shadow and a dark neutral text colour.
- If the product has a strong accent colour, reserve it for interactive states or small details rather than making the entire heading colourful.

### Borders, radius, and surfaces
- Give the category label a thin, low-contrast border, fully rounded corners, and compact horizontal padding of roughly 10–12px.
- Keep major section surfaces flat and quiet; avoid cards around the heading unless the product’s brand explicitly calls for them.
- FAQ rows may use 1px separators or very subtle borders. If using bordered question cards, use a restrained radius around 8–12px and avoid heavy shadows.
- Use shadows sparingly: a faint, short shadow on the pill is acceptable, but the overall section should feel crisp and grounded.

### Interaction
- Make each FAQ question keyboard-accessible and operable with Enter and Space.
- Use a clear plus/minus or chevron affordance aligned consistently at the far edge of each row.
- Animate expansion and collapse smoothly with a short 180–240ms transition, preserving reduced-motion preferences.
- Provide visible hover, focus-visible, and expanded states without relying on colour alone.
- Ensure the entire question row is an accessible button or disclosure control, with correct `aria-expanded` and `aria-controls` relationships.

### Responsive behaviour
- Reduce the section’s horizontal padding and heading size progressively at tablet and mobile breakpoints.
- Keep the label centred even when the heading and FAQ list remain left aligned.
- Prevent long questions from colliding with the disclosure icon; reserve a fixed affordance column.
- Maintain generous touch targets of at least 44px for each interactive FAQ row.

## Never
- Never copy logos, product names, brand marks, or proprietary symbols from the reference.
- Never reuse the reference’s exact FAQ copy, wording, testimonials, or content structure.
- Never copy illustrations, imagery, avatars, screenshots, or decorative assets from the reference.
- Never make the result dependent on the reference brand’s typeface, colour identity, or exact spacing values.
- Never sacrifice accessibility, keyboard support, responsive behaviour, or readable contrast for visual similarity.
