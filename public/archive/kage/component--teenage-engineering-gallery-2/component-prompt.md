## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060821-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-gallery-2

## Before you start
Ask what the user's product is, who it is for, and what their brand identity and visual direction are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build an editorial product gallery
Create a responsive product-gallery section that combines one large, immersive feature panel with a row of smaller supporting product cards. The design should feel like a premium product catalogue: quiet, precise, image-led, and confident, with very little decorative UI.

### Layout and alignment
- Use a full-width vertical gallery with a large featured panel at the top and a three-column supporting grid beneath it.
- Make the hero panel substantially taller than the supporting cards, approximately 70–75vh on desktop, with the featured product visually centred inside a generous field of negative space.
- Place a small status or utility label near the top-left of the hero with consistent outer padding of about 24–32px.
- Place a discreet product caption near the lower-left of the hero, aligned to the same inset as the top label.
- Use a strict three-column grid below the hero. Each card should have equal width, a consistent aspect ratio, and vertical dividers between neighbouring cards.
- Keep card labels at the top of each cell, with the product image occupying the remaining area below. Align all labels to a shared baseline.
- Remove unnecessary outer gutters on wide screens so the gallery can feel like a continuous page surface; introduce 16–24px side padding on smaller screens.
- On mobile, stack the cards or use a horizontally scrollable row, but preserve the editorial order: feature first, related items second.

### Image treatment
- Use high-quality product photography or product renders with a controlled studio look.
- The hero image should sit against a dark, subtly graduated background and use a realistic soft shadow or glow to give the object physical presence.
- Supporting card images should use light, near-white backgrounds with generous whitespace and consistent object scale.
- Use `object-fit: contain` for products whose full silhouette should remain visible; avoid aggressive cropping.
- Lazy-load supporting images and reserve their dimensions to prevent layout shift.

### Typography hierarchy
- Use a compact neutral sans-serif or grotesk with a technical, editorial feel.
- Keep labels small and calm: approximately 11–13px, regular weight, with tight line height around 1.15–1.25.
- Use sentence case for utility text and short product labels; avoid oversized headings inside the gallery.
- Product names should be slightly more prominent than secondary actions, but remain understated.
- Use a small accent colour or a second line for actions such as “view”, “shop”, or equivalent, rather than large buttons.

### Colour
- Base page background: near-black, approximately `#050505`.
- Hero background: charcoal to slate gradient, approximately `#171717` through `#62676B`, depending on the product imagery.
- Supporting grid background: cool off-white, approximately `#F5F7F6` or `#F1F3F2`.
- Primary text on dark surfaces: soft white, approximately `#EDEFEF`.
- Primary text on light surfaces: deep charcoal, approximately `#202326`.
- Secondary text: muted grey, approximately `#747A7D`.
- Use one restrained brand accent for links or selected states, such as a warm orange near `#F4511E`, only if it fits the user's brand.

### Borders and radius
- Use fine, low-contrast rules around `1px solid rgba(30, 35, 36, 0.28)` on light cards and `rgba(255,255,255,0.08)` on dark surfaces.
- Keep the gallery mostly square-edged: use `border-radius: 0` or at most 2–4px.
- Avoid floating cards, heavy shadows, pills, and ornamental containers. The structure should come from the grid and image fields.

### Interaction
- Make each product card fully clickable, with a clear accessible link target.
- On hover, gently increase image scale by about 2–4% or shift the image opacity/contrast subtly; do not use dramatic motion.
- Change the action text or accent colour on hover and provide an equally visible keyboard focus ring.
- If the hero is part of a carousel, provide small, unobtrusive controls and announce the active item to assistive technology; otherwise keep it static.
- Respect reduced-motion preferences and ensure all text remains readable over imagery.

### Responsive behaviour
- Preserve the hero's visual calm at all breakpoints by reducing image scale before reducing the negative space.
- On tablet, use the same three-column structure if each card remains legible; otherwise switch to two columns.
- On mobile, use a single column or a controlled horizontal scroller with snap points, never a cramped three-column grid.
- Keep labels and touch targets comfortably readable, with at least 44px of interactive area.

## Never
- Never reuse logos, product names, copy, illustrations, photography, renders, or imagery from the reference.
- Never reproduce the reference product, its markings, packaging, or distinctive industrial details.
- Never add generic stock imagery when the user's product can be represented with a clean, abstract, or brand-appropriate visual.
- Never turn the gallery into a conventional rounded-card dashboard, dense ecommerce listing, or loud promotional banner.
