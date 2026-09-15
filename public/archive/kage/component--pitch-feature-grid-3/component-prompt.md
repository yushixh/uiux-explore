## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060647-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-feature-grid-3

# Before you start
Ask the user what their product is, who it is for, and what their brand personality, colours, typography, and content priorities are. Then apply the principles below to their product rather than reproducing the reference.

## Build an editorial feature-grid section
Create a responsive feature section for a modern collaborative software product. The section should feel like a polished marketing-page module: calm and spacious at first glance, but with expressive colour, rounded product previews, and a clear editorial rhythm.

### Structure and layout
- Use a wide, centered content container with generous horizontal gutters: approximately `max-width: 1280–1440px`, with `clamp(24px, 5vw, 72px)` side padding.
- Place the feature module in a horizontal grid on large screens. The primary feature card should occupy roughly 8–9 columns of a 12-column grid; let the next feature card peek in from the right to suggest a larger, scrollable sequence.
- The main card should have three layers:
  1. A compact top row with a small numbered index such as `(01)`, a prominent feature title, and a small cluster of abstract interface-control icons aligned to the right.
  2. A large visual preview beneath it, inset within the card and framed by a soft lavender or brand-tinted background.
  3. A bottom caption row with a simple directional arrow or line icon, a bold feature label, and one or two lines of explanatory copy.
- Keep the feature card visually dominant, but preserve enough whitespace around it that it does not feel like a dense dashboard.
- If the grid is horizontally scrollable, hide or soften the scrollbar and use an intentional partial next-card reveal. On mobile, switch to a vertical stack or a snap-scrolling carousel with one card visible at a time.
- Below or after the feature module, allow a separate testimonial or proof grid to follow with ample vertical separation. Keep it visually distinct rather than mixing testimonials into the feature card itself.

### Alignment and spacing
- Align the index, title, preview, and caption to a consistent left edge.
- Use generous section spacing: approximately `96–160px` above and below the module on desktop, reducing to `64–96px` on mobile.
- Use a compact gap between index and title, a medium gap between the heading row and preview, and a large, comfortable gap before the caption.
- Maintain an 8px spacing rhythm where practical. Use approximately `32–56px` internal card padding on desktop and `24–28px` on mobile.
- Give the preview enough height to feel like a real product moment, generally a `4:3` or `16:10` composition rather than a shallow banner.

### Typography
- Use a friendly contemporary sans-serif with rounded forms or subtle humanist character. If the user has a brand font, use it; otherwise choose a clean variable sans-serif.
- Make the feature title large and assertive, approximately `56–76px` on desktop with tight line-height around `0.95–1.05`; scale to `40–52px` on mobile.
- Set the index in a smaller but noticeable size, approximately `18–24px`, with enough weight and colour contrast to read as a structural marker.
- Use a bold `20–26px` caption heading and `16–19px` supporting text with a relaxed `1.35–1.5` line-height.
- Keep the main title and caption copy short. Let the visual preview carry much of the product storytelling.

### Colour and visual treatment
- Start with a near-white page background such as `#FCFBFF` or `#FFFFFF`.
- Use a saturated primary accent adapted to the user's brand; a vivid violet around `#5723E8` or `#5B20E6` works well for the reference-like energy.
- Use a soft tinted preview surface around `#F0E9FF`, with optional gradients toward `#E3D5FF` and `#FAF8FF`.
- Use a very dark plum or ink such as `#211047` for high-contrast UI elements and a charcoal such as `#3E3B46` for body copy.
- Keep accent icons, arrows, index text, and key labels in the primary colour so the section has a coherent visual signal.
- The product preview can contain abstract interface panels, cards, toolbars, text blocks, and placeholder media, but it should be clearly tailored to the user's product and use neutral or generated content.

### Borders, radius, and depth
- Use large rounded corners on the outer feature card, approximately `28–40px`; use `20–28px` for the inner preview.
- Prefer subtle borders such as `1px solid rgba(40, 20, 90, 0.08)` over heavy outlines.
- Use very soft shadows only where needed: for example `0 12px 40px rgba(50, 24, 110, 0.08)`. The section should feel light and editorial, not like a stack of floating cards.
- Use pill-shaped controls or badges inside the product preview, with radii around `999px`.

### Product preview content
- Build a believable, non-functional miniature interface that communicates the product's core value in a few seconds.
- Include layered panels and one or two clear focal elements, such as a canvas, document, board, timeline, analytics view, or collaboration surface depending on the user's product.
- Use intentional hierarchy: one large focal panel, a few supporting controls, and limited decorative detail.
- If adding interface icons, use a consistent stroke weight and simple geometric forms. Icons should support comprehension, not become decoration overload.
- Ensure the miniature interface remains legible at a glance and scales gracefully on small screens.

### Interaction and motion
- If the section uses horizontal cards, support mouse/touch drag or native horizontal scrolling and provide keyboard-accessible focus states.
- Add a restrained hover state: a slight lift or preview translation, a stronger border tint, or a subtle gradient shift. Avoid excessive bounce or rotation.
- Use a soft reveal animation when the section enters the viewport: fade and translate upward by roughly `12–20px`, with staggered timing for the preview and caption.
- Respect `prefers-reduced-motion` and keep all content usable without animation.
- Any arrow or directional affordance should be decorative unless the card is genuinely clickable. If clickable, provide a clear focus ring and an accessible label.

### Responsive behaviour
- On tablet, reduce the title size and let the feature card use most of the viewport width while retaining a small next-card preview.
- On mobile, make the card full-width with smaller corner radii and internal padding, stack the index/title controls cleanly, and place the caption directly below the preview.
- Avoid forcing tiny interface text inside the miniature preview; simplify or hide secondary controls at narrow widths.
- Maintain strong contrast and generous tap targets of at least `44px` for interactive elements.

## Never
- Never copy the reference's logos, product names, brand marks, or proprietary interface details.
- Never reuse the reference's exact marketing copy, feature names, testimonials, numbers, or icon arrangements.
- Never use the reference's illustrations, photographs, screenshots, or other imagery; create neutral placeholders or product-specific visuals for the user's product instead.
- Never make the section a pixel-for-pixel recreation. Preserve the editorial feature-grid principles while giving the user's product its own content, palette, hierarchy, and visual language.
- Never sacrifice accessibility for visual similarity: maintain semantic headings, readable contrast, keyboard access, responsive layout, and reduced-motion support.
