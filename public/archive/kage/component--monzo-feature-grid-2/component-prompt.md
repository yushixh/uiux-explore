## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060819-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-feature-grid-2

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and content priorities are. Then apply the principles below to create an original feature-grid section for that product rather than reproducing the reference.

## Build this section
Create a responsive product-offering section with three parts:

1. **Intro block**
   - Centre-align a concise, confident headline and a supporting sentence.
   - Place a prominent primary call-to-action beneath the supporting copy.
   - Keep the intro visually calm and generous, with approximately 56–80px of spacing below any preceding disclaimer or context text.
   - Use the user's product language and a CTA appropriate to their conversion goal.

2. **Featured horizontal panel**
   - Add a large, wide feature card beneath the intro, with a second card partially visible at the right edge on larger screens to signal that more content is available.
   - Use a two-column internal layout on desktop: copy aligned to the left and optional product UI, diagram, or empty visual space on the right. On small screens, stack the content and allow cards to scroll horizontally or show one card at a time.
   - The primary panel should use a very pale tinted surface, approximately `#F1F8F5`; alternate panels may use a deep ink surface around `#102231` with light text.
   - Give the panel a large radius of roughly 40–56px and generous internal padding of 48–64px desktop, reducing to 28–32px on mobile.
   - Include a short feature title, a readable description limited to around 45–55 characters per line, and a secondary outlined action.
   - Beneath the panel, place carousel controls in a centred row: circular previous/next buttons, a short active progress bar, and several small inactive dots. Use accessible labels and visible keyboard focus states.

3. **Offerings grid**
   - Add a second centred heading and optional supporting CTA before the grid.
   - Display six cards in a three-column grid on desktop and two or one columns at smaller breakpoints. Maintain equal card heights within each row where practical.
   - Each card should have a pale mint or brand-tinted background, approximately `#F1F8F5`, with 28–36px rounded corners and 24–28px padding.
   - Reserve a compact top row for a product thumbnail, icon, badge, or price label on the right. Do not let this decorative element compete with the title.
   - Place the title below the top row using a strong display weight, followed by a short description. Pin legal notes, metadata, or supporting details near the bottom of the card with smaller text.
   - Use small circular outlined arrow buttons where cards link to detail pages. They should have a dark ink stroke, a simple arrow icon, hover/focus feedback, and a minimum 44px hit area.
   - Finish with a centred outlined “view more” style action after the grid when there are additional offerings.

## Design language

### Layout and alignment
- Use a clean, wide page container with a maximum width around 1120–1240px and responsive horizontal gutters of 24px on mobile and 48–64px on desktop.
- Centre the introductory and section-heading content; left-align all card content for scanability.
- Use a generous vertical rhythm: 80–120px between major sections, 24–32px between heading and body copy, and 24px grid gaps.
- Let the featured carousel extend slightly beyond the main content width only when it helps communicate horizontal continuation; never cause accidental page-level overflow.

### Typography
- Use the user's brand font if available; otherwise choose a friendly contemporary sans-serif with a sturdy, highly legible bold weight.
- Main section heading: approximately 40–48px, line-height 1.05, weight 700–800; reduce to 32–36px on mobile.
- Card titles: approximately 24–28px, line-height 1.1, weight 700.
- Body copy: approximately 16–18px, line-height 1.4–1.5, using a muted ink colour.
- Legal or metadata text: approximately 12–14px, line-height 1.35.
- Keep headings short and avoid overly wide text measures.

### Colour
- Page background: warm white, approximately `#FFFFFF` or `#FCFCFB`.
- Primary ink: near-black blue, approximately `#10212B`.
- Muted copy: approximately `#687277`.
- Soft card surface: pale green-grey, approximately `#F1F8F5`.
- Dark featured surface: approximately `#102231` with text around `#FFFFFF`.
- Accent colours should come from the user's brand; use them sparingly for thumbnails, badges, progress states, or emphasis rather than colouring every surface.
- Ensure text and controls meet WCAG contrast requirements.

### Borders, buttons, and radius
- Prefer very subtle or no borders around filled cards; use a 1.5–2px dark ink outline for secondary and tertiary pill buttons.
- Primary buttons should be dark ink with white text, pill-shaped, approximately 48px tall, with 20–28px horizontal padding.
- Secondary buttons should be transparent or surface-coloured with a dark outline and the same pill shape.
- Use large rounded corners for feature panels, medium-large corners for cards, and fully rounded corners for buttons and circular controls.
- Add a restrained hover treatment: slight colour shift, arrow translation of 2–3px, or a subtle lift. Avoid exaggerated shadows.

### Interaction and accessibility
- Make the carousel functional with previous/next controls, pagination state, touch/trackpad scrolling, and optional autoplay disabled by default.
- On desktop, show a deliberate sliver of the next panel; on mobile, show one complete card with a small continuation cue.
- Cards and arrows should be keyboard accessible, with clear focus rings in an accessible accent or ink colour.
- Respect reduced-motion preferences and provide an equivalent non-animated experience.
- Ensure all images, thumbnails, and icons have meaningful alt text or are marked decorative where appropriate.

## Never
- Never copy the reference site's logos, product names, brand-specific wording, or exact marketing copy.
- Never reuse its illustrations, card thumbnails, screenshots, product imagery, or other distinctive visual assets.
- Never reproduce the exact arrangement as a branded clone; adapt the structure, proportions, content model, and visual language to the user's product.
- Never use placeholder legal claims that could be mistaken for real compliance or financial guidance; use the user's actual approved content.
- Never sacrifice responsive behaviour, keyboard access, contrast, or readable text just to match a screenshot.
