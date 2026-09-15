## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073963-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073922-full.webp
- Component on Kage: https://kage.design/component/mistral-gallery

## Before you start
Ask the user what their product is, who it is for, and what their brand identity looks like. Then apply the principles below to create an original version for that product rather than reproducing the reference.

## Build a split-feature case study carousel
Create a responsive, horizontally browsable gallery for showcasing customer stories, projects, editorial features, products, or other high-value content. The section should feel like a premium case-study showcase: one large featured card is fully visible, while the next card is intentionally cropped at the right edge to invite exploration.

### Layout and alignment
- Use a full-width section with a warm, near-white background around `#F5F4F1` and generous vertical breathing room.
- Place the carousel in a wide centered container, approximately `calc(100% - 80px)` on desktop, with a sensible max-width around `1440px`.
- Use a horizontal track with a consistent gap of roughly `8px` between cards. The lead card should occupy about 75% of the viewport/container width; the following card should remain partially visible.
- Give cards a substantial desktop height, approximately `480px`, while preserving a responsive aspect ratio on smaller screens.
- Let the gallery align flush to the main content grid rather than centering each card independently.
- Position controls beneath the cards: pagination/progress on the left and previous/next buttons on the right. On mobile, stack or compress these controls without losing the visual hierarchy.
- On smaller screens, show one card at a time with a small preview of the next card or use a controlled snap carousel.

### Card composition
- Make each card an image-led panel with a dark overlay or dark surface so text remains readable.
- Use a strong editorial image or product-specific visual as the background, with `background-size: cover` and a considered focal point.
- Add a subtle dark gradient from the text area outward; never rely on the image alone for contrast.
- Place the content inside the card with approximately `32px` desktop inset, increasing the bottom inset when needed to accommodate the CTA.
- Put a small category pill near the upper-left content area. Use a pale neutral fill around `#F2F2EE`, dark text around `#17181C`, compact uppercase or small monospace-like lettering, and a radius of `4px`.
- Use a short, high-contrast headline below the category. Set it in a clean sans-serif, around `32–36px` on desktop with tight line-height around `1.1`; reduce to `24–28px` on mobile. Keep the headline to a few lines and constrain its width for comfortable reading.
- Place a light CTA button near the bottom-left: pale surface around `#F5F5F3`, dark text, medium weight, approximately `146px × 44px`, and a radius around `6px`. Include a small directional arrow or chevron with clear spacing.
- If a customer or partner mark is needed, represent it with an abstract text treatment or neutral placeholder styling created for the user’s product; do not reuse any reference identity.

### Typography and colour
- Use a modern neutral sans-serif throughout, with slightly condensed or tight display sizing for headlines if it suits the user’s brand.
- Maintain a clear hierarchy: small category label, large two-to-three-line title, then a compact action.
- Use white or near-white text around `#FAFAF7` on dark cards.
- Keep the surrounding section quiet and low contrast so the imagery and featured card dominate.
- Use muted control text and surfaces around `#E9E8E4` and `#DCDCD7`; active pagination should be a dark bar around `#1B1C21`, while inactive indicators can be soft gray around `#C9CAC6`.

### Borders, radius, and depth
- Use a card radius of approximately `8px`; clip the image and all internal content to the same radius.
- Avoid heavy borders on the cards. If separation is needed, use a subtle `1px` border in `rgba(20, 22, 24, 0.08)`.
- Keep shadows minimal or absent; the contrast between the light page and dark cards should provide the separation.
- Give pagination and arrow controls softly rounded corners around `6px`, with understated hover states.

### Interaction
- Make the carousel keyboard accessible with visible focus states, semantic buttons, and sensible ARIA labels.
- Support drag/swipe and touch scrolling where appropriate, while preserving snap points and preventing accidental page movement.
- The active pagination indicator should clearly show the current slide, using an elongated dark pill rather than only a dot.
- Previous/next buttons should have hover and pressed states: slightly darker surface, subtle translation or opacity change, and no distracting animation.
- Use a short ease-out transition when changing slides. Do not autoplay unless the user’s product specifically benefits from it; if autoplay is used, provide pause control.
- Ensure text remains legible over every image with responsive overlays and test long headlines without overflow.

### Responsive behaviour
- On desktop, preserve the dominant lead card and cropped preview card composition.
- On tablet, reduce card height, inset, and headline size while keeping the next-card hint visible.
- On mobile, prioritize readability: use a single prominent card, generous touch targets of at least `44px`, and compact pagination beneath it. Avoid making the user decipher a dense multi-card strip.

## Never
- Never copy the reference’s logos, partner identities, product names, or case-study copy.
- Never reuse its exact imagery, illustrations, visual assets, or photographic subjects.
- Never reproduce the reference page as a branded clone; adapt the structure, hierarchy, and interaction rules to the user’s product and brand.
- Never use inaccessible low-contrast text, tiny touch targets, or pagination that communicates no active state.
- Never let cropped neighbouring cards obscure the active card’s content or make the carousel impossible to operate with keyboard and touch.
