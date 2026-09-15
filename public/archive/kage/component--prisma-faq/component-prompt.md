## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073821-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-faq

## Before you start
Ask me what my product is, who it is for, and what visual brand it uses. Then apply the principles below to create an FAQ section for my product—not a copy of the reference. Use my product’s terminology and write original questions and answers that address real user objections.

## Build this component
Create a responsive FAQ section with a centered `FAQ` heading above a vertically stacked accordion list. The section should feel editorial, calm, and highly legible rather than like a card grid or a dense support page.

### Layout and alignment
- Use a white or near-white page background with a centered content column.
- Keep the FAQ list relatively narrow: roughly `min(100% - 2rem, 768px)` on desktop, expanding to the available width on mobile.
- Center the heading horizontally and give it generous separation from the accordion, approximately `72–88px` above and `64–80px` below depending on viewport size.
- Each accordion row should span the full content width and align all question text to the same left edge.
- Place a compact chevron control at the far right of every row, vertically aligned with the question text.
- Use a simple vertical flow; do not place FAQs into columns or cards.
- On mobile, use side padding of approximately `20–24px`, reduce the heading/list gap, and allow long questions to wrap without colliding with the chevron.

### Typography
- Use the product’s existing sans-serif brand font if available; otherwise use a clean contemporary sans-serif such as Inter, Geist, or system UI.
- The heading should be prominent but controlled: approximately `36–40px`, `font-weight: 600`, tight line-height around `1.1`, and dark charcoal rather than pure black.
- Questions should be approximately `16px` on desktop and mobile, with `font-weight: 600` and line-height around `1.4`.
- Answers should be approximately `16px`, regular weight, line-height around `1.6`, and visibly softer than the questions for hierarchy.
- Keep text left-aligned within rows; only the section heading is centered.

### Colour and surfaces
- Use an approximate background of `#FFFFFF` or `#FAFAFA`.
- Use dark charcoal such as `#242424` for the heading and questions.
- Use muted grey such as `#707070` for expanded answers.
- Use very subtle horizontal dividers such as `#E5E5E5` or `rgba(0,0,0,0.12)`.
- Avoid decorative colour blocks, gradients, shadows, or prominent accent fills unless they are part of the user’s brand.

### Borders, spacing, and shape
- Separate rows with a 1px horizontal border; avoid enclosing the entire list in a rounded card.
- Give collapsed rows approximately `18–22px` of vertical padding, producing a compact but breathable rhythm.
- When open, place the answer below the question with approximately `12–16px` of gap and `16–24px` of extra bottom padding.
- Keep corners square or use only a very subtle radius of `0–4px`; the reference relies on alignment and whitespace instead of containers.
- Ensure the first and last rows have a clear boundary only if needed by the surrounding layout; do not add heavy framing.

### Interaction and accessibility
- Implement each row as an accessible button or native disclosure pattern with a clear expanded/collapsed state.
- Allow one or multiple items to be open based on what best suits the product, but initially show one useful answer so the section communicates its behaviour.
- Rotate or swap the chevron when an item opens; keep the icon small, thin, and muted, around `14–16px`.
- Animate height and opacity subtly over roughly `180–240ms`, without dramatic motion.
- Provide visible keyboard focus states using a restrained outline or focus ring that meets contrast requirements.
- Make the whole question row clickable, not only the chevron.
- Use semantic heading levels, buttons, and answer regions; support reduced-motion preferences.

### Content guidance
- Write concise, specific questions that reflect likely concerns about the product, onboarding, pricing, compatibility, migration, security, or workflow.
- Answers should be useful and direct, usually two to four short sentences. Avoid marketing filler.
- Keep the number of items manageable—approximately five to seven questions.

## Never
- Never copy the reference’s product names, questions, answers, or wording.
- Never use logos, brand marks, product names, illustrations, screenshots, or imagery from the reference.
- Never reproduce the reference as a pixel-perfect clone; adapt its underlying hierarchy and interaction model to my product and brand.
- Never use dense cards, excessive shadows, decorative graphics, or distracting animation.
- Never hide important answer content from keyboard users or screen readers.
