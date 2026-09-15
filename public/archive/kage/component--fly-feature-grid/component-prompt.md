## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/fly-io/55088b40-21c4-4b5b-a67c-8a1494f33e2d-1789073897-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fly-io/55088b40-21c4-4b5b-a67c-8a1494f33e2d-1789073866-full.webp
- Component on Kage: https://kage.design/component/fly-feature-grid

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for that product rather than reproducing the reference.

## Build this section
Create a responsive feature-grid component that introduces a product capability with a spacious promotional header and a row of supporting feature cards. The section should feel editorial, technical, optimistic, and slightly playful, while remaining easy to scan.

### Layout and alignment
- Place the component inside a wide centered container with a subtle 1px outline, approximately `max-width: 1230px`, and a desktop radius of `18px`.
- Use a two-part structure: a large upper introduction panel and a lower three-column feature grid.
- Give the upper panel generous internal padding: roughly `104px 150px 64px` on desktop. Keep the text block left-aligned and constrain it to approximately `720px`.
- Position a primary CTA below the supporting copy with around `32px` of vertical separation.
- Put compact circular previous/next controls toward the lower-right of the upper panel. They should align visually with the CTA row without competing with the headline.
- Divide the lower area into three equal columns with 1px vertical separators. Each card should have around `32px` horizontal padding and `34px` top padding.
- Reserve substantial empty space beneath each card's description for a small supporting visual or illustration. Align these visuals toward the lower center of each card and keep them secondary to the text.
- On smaller screens, stack the cards vertically, remove or reduce the vertical dividers, reduce the hero padding, and move carousel controls into a clear row below the CTA.

### Typography hierarchy
- Use a distinctive editorial serif or high-contrast display face for the main heading; make it bold, approximately `46–52px` on desktop with tight line-height around `1.05`.
- Use a neutral sans-serif for descriptions, labels, buttons, and card headings.
- Set the hero supporting copy around `22–24px`, with a relaxed line-height around `1.35` and a muted dark gray colour.
- Set card headings around `17–19px`, medium or semibold, with strong contrast.
- Set card descriptions around `14–16px`, line-height near `1.5`, using a softer gray so the heading leads.
- Use sentence case and concise copy. Preserve clear differences between display, supporting, and metadata-like text.

### Colour and atmosphere
- Use a very light neutral page background, approximately `#FAFAF9` or `#FFFFFF`.
- Give the upper panel a soft multi-colour wash rather than a flat fill: pale aqua around `#CFF7F3`, blush pink around `#F8DDE4`, and powder blue around `#CDEBFA`, blending through a mostly white center.
- Add a very subtle fine grain, dot, or halftone texture over the gradient at low opacity if the implementation supports it; it should be atmospheric, not decorative noise.
- Use near-black text around `#111111`, supporting text around `#5F6470`, and borders around `#D5D7DB`.
- Make the primary CTA and circular navigation controls a vivid violet/purple, approximately `#7438E8` to `#7B35D9`, with white text or icons.
- Keep the lower card region white or near-white so the gradient header remains the visual focus.

### Borders, radius, and depth
- Use a thin, cool-gray outer border and subtle shadow, such as `0 8px 24px rgba(30, 40, 60, 0.06)`.
- Round only the outer container corners, approximately `18px`; keep internal card corners square so the grid reads as one architectural surface.
- Use 1px separators with low contrast. Avoid heavy card shadows, excessive outlines, or floating pill containers.
- Give the CTA a modest radius around `5–7px`, with compact horizontal padding and a clear hover state.
- Make circular navigation buttons approximately `48px` in diameter with simple chevron icons and a slightly darker hover colour.

### Interaction and responsive behaviour
- Make the navigation controls functional if the feature row represents a carousel or additional set of feature panels. Use accessible labels such as “Previous” and “Next.”
- On hover, slightly darken the CTA and navigation controls; do not introduce large transforms or distracting animation.
- If cards are clickable, make the entire card or a clearly indicated action target accessible, with a visible keyboard focus ring.
- Support reduced-motion preferences. Use only subtle fades or horizontal transitions for changing feature content.
- Ensure long card descriptions do not overflow or become clipped. Let illustrations scale within a fixed visual area while preserving their aspect ratio.
- On mobile, maintain comfortable touch targets of at least `44px` and keep the reading order: heading, description, CTA, navigation, then feature cards.

### Content and visuals
- Write original product-specific copy for the user's product. Use one strong promise in the hero, one explanatory sentence or two, and three concise feature themes.
- Use simple, lightweight supporting visuals that communicate each feature concept. They can be abstract diagrams, tiny interface motifs, or original illustrations, but they should share one visual language and sit low in each card.
- Keep illustrations understated enough that the feature names and descriptions remain the primary information.

## Never
- Never copy logos, product names, brand marks, or proprietary labels from the reference.
- Never reuse the reference's exact copy, headings, button text, feature names, or illustrations.
- Never reproduce the reference artwork, characters, imagery, or distinctive visual assets.
- Never assume the user's product uses the reference brand's colours, typography, or tone; adapt the rules to the user's brand.
- Never make the gradient, texture, carousel controls, or illustrations more prominent than the product message.
- Never sacrifice accessibility, responsive layout, keyboard navigation, or readable contrast for visual similarity.
