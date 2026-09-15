## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106507-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106452566-full.webp
- Component on Kage: https://kage.design/component/ai-observability-by-openobserve-feature-grid-4

## Before you start
Ask what the user's product is, who it is for, and what visual brand system it uses. Apply the principles below to that product rather than reproducing the reference literally.

## Build a dark resource-card carousel section
Create a responsive content section for a software product website that showcases educational resources such as articles, guides, videos, or documentation. The section should feel editorial and polished, with a clear visual hierarchy and a carousel-like arrangement of three resource cards.

### Layout and alignment
- Place the component on a deep, nearly black-purple background, approximately `#100622` or `#120728`.
- Use a centered max-width container of roughly `1120–1200px` with generous horizontal padding on smaller screens.
- Arrange three cards in a horizontal carousel on desktop: the middle card is the active item and is slightly larger and more prominent; the outer cards are narrower or visually recede slightly.
- Keep the cards aligned around a shared horizontal centerline, with approximately `12–16px` gaps between them.
- On tablet and mobile, switch to a single-card carousel or horizontally scrollable snap track. Keep the active card fully visible and avoid cramped multi-column layouts.
- Below the cards, place compact pagination indicators centered beneath the track. Include a short text link such as “Explore all resources” aligned centrally below the indicators, with a subtle arrow affordance.
- If the section continues into another heading, leave a generous vertical gap so the resource carousel reads as a complete module.

### Card structure
- Each card is a vertically stacked tile with two zones: a media thumbnail on top and a text panel below.
- Use a white or warm-white card surface around `#FAFAF8` for strong contrast against the dark page.
- Give cards a soft radius of approximately `16–18px`; use `overflow: hidden` so media follows the same rounded silhouette.
- The active center card may be a little taller or wider than the side cards, but preserve consistent proportions and avoid dramatic scaling.
- Media should occupy about `55–62%` of the card height. Use product-relevant abstract diagrams, interface crops, or editorial artwork generated for the user's content—not generic decoration.
- Apply a subtle neutral border such as `1px solid rgba(255,255,255,0.2)` or a faint shadow to separate white cards from the background.

### Typography hierarchy
- Use a clean modern sans-serif with a slightly heavy weight for headings.
- Resource metadata is a small uppercase or compact label, around `11–12px`, medium or semibold weight, with generous letter spacing. Pair it with a small outline icon appropriate to the resource type.
- Resource titles should be the strongest text inside each card: approximately `16–18px`, `700` weight, and `1.2–1.3` line height. Allow titles to wrap naturally to two or three lines.
- Use near-black text on the card, approximately `#242229`.
- The section link should be white or soft lavender, around `15–16px`, with a clear hover state and an arrow that shifts slightly on hover.

### Spacing
- Give the card text panel approximately `20–22px` horizontal padding and `20–24px` vertical padding.
- Separate metadata from the title by `10–12px`.
- Maintain at least `28–36px` between the card row and pagination, and `28–40px` between pagination and the browse-all link.
- Use generous section padding, approximately `72–104px` vertically, depending on the surrounding page rhythm.

### Colour and accents
- Keep the page background consistently deep purple-black: approximately `#100622`.
- Use warm white card surfaces around `#FAFAF8` and dark charcoal card text around `#25232A`.
- Use restrained purple accents for metadata and controls, approximately `#6248A8` or `#7257C8`.
- Let each media thumbnail have its own soft accent palette—lavender, pale blue, cream, mint, or muted violet—while maintaining good contrast and a cohesive editorial feel.
- Pagination should use subdued gray-purple inactive dots and a bright white active pill.

### Interaction and accessibility
- Make each card fully clickable with a clear hover state: a slight upward translation, stronger shadow, or subtle border emphasis is sufficient.
- The active carousel item should be visually obvious without relying only on scale; update the active pagination indicator as the user navigates.
- Support previous/next controls if the carousel is interactive, but keep them visually quiet and place them where they do not obscure card content.
- Enable keyboard navigation, visible focus rings, touch swiping, and reduced-motion behavior.
- Use semantic links, descriptive accessible labels, and preserve readable contrast.

### Never
- Never copy logos, product names, article titles, labels, brand marks, or exact copy from the reference.
- Never reuse the reference's illustrations, thumbnails, screenshots, or imagery; create new content that fits the user's product.
- Never hard-code a three-card layout that becomes clipped or unusable on mobile.
- Never make the carousel auto-advance in a way that disrupts reading or accessibility.
- Never treat the cards as decoration only: each item should communicate a resource type, title, and clear destination.
