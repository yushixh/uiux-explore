## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106569-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106538010-full.webp
- Component on Kage: https://kage.design/component/desert-ant-labs-gallery

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, and content they want to express. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a tilted feature-card gallery
Create a horizontally flowing gallery section that showcases several product features, use cases, projects, or editorial items as large portrait cards. The gallery should feel tactile, playful, and slightly imperfect, with enough visual energy to draw the eye without becoming difficult to scan.

### Layout and alignment
- Use a full-width gallery viewport with generous horizontal overflow; allow the first and last cards to be partially cropped at the edges to suggest more content.
- Arrange 4–6 tall cards in a single horizontal row, with small, consistent overlaps or tight gaps between them.
- Use portrait-oriented cards with an approximate aspect ratio of 0.62–0.7 (for example, 400px wide by 600px high), adapting fluidly to the viewport.
- Give each card a small, intentional rotation variation—roughly between -3deg and 3deg—rather than making every card perfectly aligned. Keep text and controls internally upright.
- Position the row slightly beyond the section bounds or use horizontal scrolling so the gallery feels expansive. On smaller screens, show one dominant card plus portions of adjacent cards.
- Keep the content near the top of each card aligned consistently: a compact category label, then a bold title, then a short supporting statement. Place the visual media below this content and let it fill the remaining card height.

### Typography hierarchy
- Use a contemporary sans-serif with a friendly, slightly expressive character.
- Card titles should be large and bold, approximately 28–42px desktop and 24–32px mobile, with tight line-height around 0.95–1.05.
- Supporting descriptions should be 16–20px with a relaxed line-height around 1.2–1.35.
- Category labels should be compact uppercase or small caps at 10–12px, with generous letter spacing around 0.12–0.18em. They may sit inside a subtle translucent pill.
- Use sentence-case content and keep descriptions short enough to read at a glance.

### Spacing, surfaces, and shape
- Use approximately 24–32px internal card padding on desktop and 20–24px on mobile.
- Give cards large rounded corners, approximately 24–32px, with a soft, friendly silhouette.
- Use a warm off-white page background such as `#F5F4EC` or `#F7F6EF`.
- Give each card its own muted but distinctive surface colour: dusty teal `#155B61`, blush `#C3A0A8`, sage `#B8BEA8`, terracotta `#E56C45`, or comparable colours suited to the user's brand.
- Use dark charcoal text such as `#101312` on light cards and warm white such as `#F7F4E9` on dark cards. Check contrast for every combination.
- Avoid heavy borders. If separation is needed, use a 1px translucent border such as `rgba(16,19,18,.12)` and a very soft shadow like `0 12px 30px rgba(20,25,20,.08)`.
- Media should be edge-to-edge or nearly edge-to-edge in the lower portion of each card, with the same corner treatment as the card. Use real product-relevant visuals, abstract textures, or user-provided media rather than decorative filler.
- Apply a restrained colour grade or overlay to unify media with its card surface, while preserving the subject and avoiding illegible text.

### Interaction and motion
- Make cards clickable if they represent destinations. Add a clear hover/focus state: slightly reduce rotation, lift the card by 4–8px, and strengthen the shadow.
- Preserve visible keyboard focus with a high-contrast outline or ring.
- If the gallery scrolls, support trackpad, touch, mouse drag, and keyboard controls. Use a native horizontal scroller where possible rather than hiding overflow without a way to reach all cards.
- Keep motion quick and calm, around 180–280ms with an ease-out curve. Respect `prefers-reduced-motion` by removing rotation and lift transitions.
- On mobile, prevent cards from becoming too narrow; use snap points or a deliberate peek of the next card to communicate horizontal navigation.

### Responsive behaviour
- Desktop: show roughly three to four prominent cards plus cropped neighbours, maintaining the oversized editorial feel.
- Tablet: show two to three cards with reduced rotation and slightly smaller padding.
- Mobile: show one card at a time with adjacent-card peeks, a controlled horizontal scroll, and text sizes that remain comfortably readable.
- Ensure the card's text remains above the visual focal point and never overlaps important media content.

## Never
- Never reuse any logos, product names, feature names, copy, imagery, illustrations, or exact card content from the reference.
- Never reproduce the reference's exact card order, dimensions, rotations, colours, or image treatments.
- Never use random stock imagery when the user's product content or brand assets should be featured.
- Never sacrifice readability, contrast, keyboard access, or touch usability for the tilted visual effect.
