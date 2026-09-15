## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/replicate-com/18021eac-ea1d-469d-8210-9b10eacb77c7-1789073922-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/replicate-com/18021eac-ea1d-469d-8210-9b10eacb77c7-1789073887-full.webp
- Component on Kage: https://kage.design/component/replicate-gallery

## Before you start
Ask me what my product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to my product rather than reproducing the reference literally.

## Build a community model gallery section
Create a responsive website section for discovering community-contributed models, tools, templates, or other catalog items. The section should feel like a real, active ecosystem: users can narrow the content with compact category filters, scan rich preview cards, and understand why the community matters through a centered editorial interlude.

### Structure and layout
- Use a full-width section with a very light, nearly white background and a generous vertical rhythm.
- Begin with a compact filter area aligned to the same content container as the gallery. Introduce it with a short sentence and a small directional cue, then place filter options in a wrapping row of pill-shaped controls.
- Make the selected filter visually solid and high-contrast; keep inactive filters white or transparent with a thin dark outline. Allow the filters to wrap naturally on narrow screens.
- Follow the filters with a horizontal model-card rail. Show two full cards and a partial third card on wide screens to imply additional content off-canvas. On smaller screens, convert this into a horizontally scrollable carousel with snap points and no awkward page overflow.
- Each card should be a compact horizontal rectangle: a fixed visual preview panel on the left and structured metadata on the right. Keep card widths consistent so the rail feels like a deliberate system rather than a masonry layout.
- Insert a centered community statement between gallery rows. Above it, use two staggered horizontal rows of circular contributor avatars or abstract contributor marks connected by fine dotted guide lines. This should communicate network and participation without overpowering the content.
- Under the contributor rows, use a large centered headline, a short explanatory paragraph, and two adjacent calls to action. Continue with another dense card grid below the editorial block.
- On mobile, stack the editorial content, reduce the avatar rows or make them horizontally scrollable, and preserve the card rail as a swipeable region.

### Card anatomy
- Use a thin, dark neutral border around every card and avoid heavy shadows.
- The preview image should be edge-to-edge within its panel, use a consistent aspect ratio, and crop with `object-fit: cover`.
- In the metadata panel, show a small publisher/avatar mark, publisher name, separator, and item name on the first line. Use stronger weight for the item name.
- Add a muted two-line description with a deliberate ellipsis or line clamp.
- Finish with a small accent-coloured usage/run count at bottom left and a subtle verification or status indicator at bottom right.
- Make the entire card keyboard-focusable and clickable. Add a restrained border-colour or background change on hover and a visible focus ring. Do not rely on hover alone to expose essential information.

### Typography
- Use the product’s own sans-serif or grotesk typeface. If none exists, use a clean system sans stack.
- Keep filter labels and metadata compact, around 13–15px, with comfortable line height.
- Set the community headline large and calm, approximately 44–52px on desktop with tight line height; reduce to 32–38px on mobile.
- Use regular or book weight for the headline, medium weight for item names, and muted regular text for descriptions.
- Center the headline and supporting copy, but keep all browsing controls and card metadata left-aligned.

### Spacing and alignment
- Use a centered max-width container around 1180–1240px, with 24–32px horizontal padding.
- Give the filter block 24–32px of bottom space before the first rail.
- Use 8–12px gaps between filter pills and 24–32px gaps between cards.
- Give the contributor interlude substantial separation from the rails, roughly 96–140px above and below depending on viewport size.
- Keep the editorial copy constrained to roughly 620–760px so the headline remains readable and visually distinct from the wide gallery.
- Use a consistent baseline and left edge for all gallery rows, even when the editorial content is centered.

### Colour and visual language
- Start with an off-white or white canvas, approximately `#ffffff` or `#fafafa`.
- Use near-black for primary text and selected controls, approximately `#171717`.
- Use a soft neutral grey for descriptions and secondary metadata, approximately `#6f6f6f`.
- Use a warm accent for counts, status labels, or small highlights, approximately `#b45f4f`, adapted to the product brand.
- Keep borders subtle but clearly visible, approximately `#222222` at low visual weight or `#d8d8d8` for secondary dividers.
- Contributor avatar rings may use a restrained multicolour treatment or the product’s accent palette, but keep the surrounding interface mostly monochrome.
- If the page includes a decorative colour field behind the gallery, use a shallow abstract gradient or solid brand wash only as atmosphere; never let it reduce text contrast.

### Borders, radius, and controls
- Use square or very lightly rounded cards, around 0–4px radius, for a technical catalog feel.
- Use fully rounded filter pills with approximately 999px radius and 10–14px vertical padding.
- Use small rectangular buttons for the primary and secondary calls to action, around 4–6px radius, with clear border contrast.
- Avoid excessive shadows, glass effects, and decorative gradients on content cards.

### Interaction and accessibility
- Filters should visibly update the active state and either filter the cards or demonstrate a loading/empty state.
- Horizontal rails should support mouse drag or touch scrolling, keyboard access, scroll snapping, and a subtle affordance that more cards are available.
- Respect reduced-motion preferences; keep transitions short and restrained.
- Provide meaningful alt text for preview images and avatars, semantic headings, visible focus states, sufficient colour contrast, and accessible names for icon-only controls.
- Preserve the editorial block as useful content even if images fail to load.

### Never
- Never copy the reference site’s logos, product names, model names, exact copy, contributor identities, or imagery.
- Never reproduce the reference’s exact card data, avatar artwork, brand marks, or decorative illustrations.
- Never assume the user’s product is an AI model marketplace; adapt the catalog language and metadata to the product’s actual domain.
- Never use placeholder text that implies real endorsements, usage numbers, or official verification unless the product genuinely supports those concepts.
- Never make the gallery a static image: build real responsive cards, filters, scrolling behaviour, and accessible interactions.
