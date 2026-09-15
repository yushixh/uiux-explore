## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106507-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106452566-full.webp
- Component on Kage: https://kage.design/component/ai-observability-by-openobserve-card

## Before you start
Ask the user what their product does, who it is for, and what visual brand it uses. Then apply the principles below to create a version for that product rather than reproducing this reference.

## Build a flexible deployment-options section
Create a responsive marketing section that presents several ways a customer can use, deploy, or configure the product. The section should feel trustworthy, technical, and approachable, with a strong contrast between a deep atmospheric background and bright informational cards.

### Layout and alignment
- Use a full-width section with a deep indigo-to-violet background, approximately `#10052D` at the bottom transitioning toward `#433A9B` near the top. A subtle vertical gradient is enough; avoid decorative noise unless it supports the brand.
- Center the content in a constrained container around `1180–1240px` wide with generous horizontal padding of `32px` on desktop and `20px` on mobile.
- Place a small outlined eyebrow pill above the heading. Include a small mint status dot and short, product-specific label.
- Center-align the eyebrow, heading, and supporting paragraph. Keep the heading to one or two lines and the paragraph to roughly two lines on desktop, with a maximum width around `760px`.
- Place three equal-width cards in one row below the introduction, with a gap of approximately `24px`. On tablet, allow two columns; on mobile, stack the cards vertically.
- Give the card row enough breathing room: approximately `48–56px` between the paragraph and cards, and `32px` between stacked mobile cards.
- Each card should have a consistent minimum height around `230px`, with content aligned from the top rather than vertically centered.

### Typography hierarchy
- Use a clean modern sans-serif with a friendly geometric feel. Use a heavier weight for headings and card titles, and a regular or medium weight for body copy.
- Main heading: approximately `32–36px`, line-height `1.15`, weight `600–700`, white.
- Supporting paragraph: approximately `16–18px`, line-height `1.6`, color `#C9C6DB`.
- Card title: approximately `18px`, line-height `1.3`, weight `650–700`, near-black `#24232A`.
- Card description: approximately `14–16px`, line-height `1.5`, color `#5D5A62`.
- Eyebrow text: approximately `13–14px`, semibold, white.

### Colour, borders, and shape
- Use near-white cards, approximately `#FAFAF8` or `#FFFFFF`, against the dark background.
- Card corners should be rounded but not pill-like: approximately `10–12px`.
- Keep card borders very subtle, such as `1px solid rgba(255,255,255,0.7)` or a pale gray `#E9E8EC`. Use a soft shadow only if needed to separate cards from the gradient.
- Use a violet or purple accent for simple line icons, approximately `#5A25B9` or `#6130C7`. Icons should be small-to-medium and sit above the title with about `20–24px` of space below them.
- The eyebrow pill can use a thin lavender border, approximately `rgba(190,190,255,0.7)`, with a mint dot around `#8CF2AE`.
- Preserve strong contrast and check text readability across desktop and mobile.

### Content and interaction
- Give every card a short, distinct title and a concise two- or three-sentence explanation. The labels should reflect the user's actual product options; do not reuse reference wording.
- Use a simple, consistent icon per card. Prefer an icon library or inline SVG with accessible labels rather than decorative image assets.
- Cards may be static if the options are informational. If they lead to setup documentation or plan details, make the whole card keyboard-focusable and clickable, with a subtle border, shadow, or translate transition on hover and focus.
- Use a restrained interaction: on hover, slightly raise the card by `2–4px` and strengthen its shadow or border. On focus, show a clearly visible accent ring.
- Ensure the section works without animation, supports reduced-motion preferences, and remains readable when text wraps.
- Use semantic HTML: a section, heading hierarchy, an introductory paragraph, and a list or grid of cards. Keep icons decorative unless they convey unique meaning.

### Responsive behavior
- On narrow screens, reduce the main heading to approximately `28–32px`, keep the intro centered, and let cards fill the available width.
- Preserve generous vertical rhythm while reducing side padding. Do not compress card text into tiny type.
- Prevent horizontal scrolling and ensure focus states are not clipped by rounded containers.

## Never
- Never copy logos, product names, brand names, or exact marketing copy from the reference.
- Never reuse the reference's specific card labels, descriptions, icons, illustrations, diagrams, or imagery.
- Never make the output look like a pixel-for-pixel recreation; adapt the structure and visual principles to the user's product and brand.
- Never rely on color alone to communicate an option or interaction.
- Never omit keyboard focus states, responsive behavior, semantic structure, or accessible contrast.
