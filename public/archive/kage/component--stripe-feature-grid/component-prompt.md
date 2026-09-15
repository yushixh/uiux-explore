## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789067515-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Component on Kage: https://kage.design/component/stripe-feature-grid

# Before you start
Ask me what my product does, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Goal
Build a three-option feature grid that helps users choose between distinct ways to adopt or use a product. Each option should represent a meaningful path, with a visual proof point above concise explanatory copy and a clear next step.

## Design language

### Layout and alignment
- Use a full-width, deep navy section with a centered content container capped around 1180–1240px.
- Add a short introductory statement at the top, aligned to the same left edge as the cards. Keep it to roughly 2–3 lines on desktop and give it generous bottom spacing.
- Place three equal-width cards in a single row on desktop with 16–20px gaps. Each card consists of:
  1. A visual demonstration panel with a fixed aspect ratio around 1.35:1.
  2. A text block directly below, not enclosed in a separate contrasting card.
  3. A small text link or action beneath the description.
- Keep all card text aligned to the same baseline and give the visual panels equal height so the grid feels orderly.
- On tablet, use two columns; on mobile, stack the cards vertically while preserving the visual-first structure.
- Use responsive container padding of approximately 32px desktop, 24px tablet, and 20px mobile.

### Typography hierarchy
- Use a modern sans-serif with a humanist or neutral feel; use the product's own font if available.
- Intro heading: approximately 28–32px, 1.1 line-height, medium weight. Emphasize the first sentence or key phrase in near-white and render the supporting sentence in a muted blue-gray.
- Card title: approximately 16–18px, 1.3 line-height, semibold. Bold only the lead phrase when a sentence-style title improves scanning.
- Card description: approximately 16px, 1.4 line-height, regular weight, muted blue-gray.
- Links: approximately 15–16px, medium weight, bright accent color, with a compact right-pointing arrow or chevron.
- Maintain strong contrast between headings and supporting copy without making the section feel overly bold.

### Colour
- Section background: deep navy around #0B1738 or #0C183A.
- Subtle section edge or divider: #1A2A50.
- Primary text: #F7F9FC.
- Secondary text: #9AA9C7 or #A5B2CC.
- Link/accent text: periwinkle or lavender around #8B8CFF.
- Visual panels should use saturated, product-relevant colours—electric blue, indigo, violet, teal, or warm contrasting tones—rather than decorative gradients by default.
- Ensure visual content remains legible and meaningful in high contrast and does not depend on colour alone.

### Visual panels
- Create three distinct miniature product scenes that communicate the three paths: for example, a guided conversational workflow, a directory of prebuilt integrations, and a technical code/API workspace. Adapt these concepts to the user's product.
- Treat each panel as a contained, polished product preview with layered surfaces, subtle glow, and carefully cropped content.
- Use abstract UI, code, data, or interface fragments generated for the user's product. Do not use unrelated stock imagery.
- Apply a consistent panel treatment: 8–10px radius, hidden overflow, a faint 1px border, and subtle inner highlights or shadows.
- The visual should feel dense enough to reward inspection, but the primary message must remain understandable at a glance.

### Borders, radius, and depth
- Use thin, low-contrast borders around the visual panels: approximately rgba(150,170,220,0.14).
- Use 8px radius for visual panels and 4–6px radius for small UI elements inside them.
- Avoid heavy shadows on the overall section. Use restrained inner shadows and soft ambient colour inside the visual previews only.
- Keep the text area open against the section background; do not add unnecessary card borders around the descriptions.

### Interaction and accessibility
- Make each card's visual, title, and link part of one coherent clickable target when appropriate, while preserving a clearly labeled text link.
- On hover, slightly lift or scale the visual preview by 1–2%, brighten its border, and shift the arrow a few pixels to the right. Keep motion under 220ms with an ease-out curve.
- Provide visible keyboard focus rings with a high-contrast lavender or white outline.
- Respect `prefers-reduced-motion` by disabling transforms and using only colour or border changes.
- Use semantic headings, descriptive link labels, alt text for meaningful previews, and sufficient colour contrast.

### Content structure
- Intro: one direct statement explaining the decision users are making, followed by a short benefit-oriented clarification.
- Each card: a path-specific title, one or two sentences explaining who it suits and why, then a short action link.
- Keep descriptions comparable in length so the three choices feel balanced. Make the paths mutually distinct rather than presenting three variations of the same feature.

## Never
- Never copy the reference site's logos, product names, brand marks, or proprietary interface details.
- Never reuse the reference's exact copy, card content, code snippets, partner marks, or visual compositions.
- Never import illustrations, screenshots, icons, imagery, or logos from the reference; create original product-relevant UI scenes instead.
- Never make the cards feel like unrelated marketing tiles or rely on decorative visuals without explanatory value.
- Never sacrifice responsive behaviour, keyboard access, focus visibility, or readable contrast for visual similarity.
