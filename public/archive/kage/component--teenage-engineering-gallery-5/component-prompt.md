## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060823-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-gallery-5

## Before you start
Ask me what my product is, who it is for, and what its brand personality, visual identity, and product catalogue are. Then apply the principles below to my product rather than reproducing the reference literally.

## Build an editorial product gallery
Create a responsive gallery section for a premium product catalogue. The section should combine cinematic, full-width feature panels with compact product comparison rows, allowing the visual story and the shopping journey to coexist.

### Layout and alignment
- Use a vertically flowing sequence of gallery groups. Each group contains one large editorial feature panel followed by a three-column product grid.
- Make feature panels full viewport width, with a tall aspect ratio or generous vertical height. Centre the featured product in the frame, but allow intentional cropping and asymmetry when it improves the composition.
- Use dark feature panels and light product-grid panels to create a clear visual rhythm.
- Product grids should have three equal columns on desktop, separated by thin vertical rules. Stack to one column on small screens while preserving the same product order.
- Align all labels to a consistent inset from each grid cell's top and left edge. Keep the product image visually centred within a generous fixed-height area.
- Use a full-bleed layout with minimal outer margins; introduce horizontal padding only for small labels and controls.
- Keep feature captions understated and positioned near a lower corner rather than competing with the product image.

### Typography hierarchy
- Use a neutral grotesk or modern sans-serif with a technical, precise feel.
- Product names and feature captions should be small, regular-weight text, approximately 12–14px with tight line height.
- Secondary shopping links should be slightly smaller or the same size, using a muted accent colour and sentence case.
- Avoid large marketing headlines inside the gallery; let scale, lighting, and whitespace carry the editorial emphasis.
- Use normal or light weights, generous tracking where useful, and avoid bold UI-heavy typography.

### Spacing and sizing
- Give feature panels substantial vertical breathing room: target roughly 70–100vh on desktop, with responsive reduction on mobile.
- Use approximately 24–32px internal padding for labels on desktop and 16–20px on mobile.
- Keep product-grid cells tall enough for isolated product photography, roughly 440–560px on desktop depending on image proportions.
- Maintain a consistent gap between product metadata and imagery, around 28–44px.
- Let the final gallery group end with generous whitespace rather than an abrupt crop.

### Colour and imagery
- Feature panels: near-black, approximately `#050505` to `#111111`.
- Product grids: cool off-white, approximately `#F3F6F6` or `#F5F7F7`.
- Primary text: charcoal on light surfaces, approximately `#303638`; soft white on dark surfaces, approximately `#E9EEEE`.
- Shopping links: muted blue-grey accent, approximately `#4D8796`; provide a stronger contrast on hover.
- Use high-quality isolated product photography with controlled studio lighting and shadows. On dark panels, products may emerge from black backgrounds; on light grids, use clean cutouts or subtle grounding shadows.
- Preserve consistent scale and visual treatment within each product row, while allowing different product silhouettes.

### Borders and radius
- Use 1px solid rules in a low-contrast grey, approximately `#B9C1C1`, between product-grid columns and beneath grid groups.
- Avoid decorative cards, drop shadows, and excessive containers.
- Use square corners or a very small radius, no more than 2–4px, to retain an engineered editorial character.

### Interaction and responsive behaviour
- Make each product cell and its shopping link keyboard accessible and clearly clickable without turning the layout into conventional rounded cards.
- On hover, gently increase link contrast and apply a subtle image scale of approximately 1.02–1.04, keeping the transition around 250–400ms.
- Respect `prefers-reduced-motion` by disabling image movement and using only colour changes.
- Preserve image aspect ratios and use `object-fit: contain` for product shots; never crop important product details in the catalogue grid.
- On mobile, stack feature panels and product cells, reduce panel height, keep the editorial black/light alternation, and maintain readable metadata with comfortable tap targets.
- Include meaningful alt text and ensure all text and links meet accessible contrast requirements.

### Content model
Use data-driven content so the gallery can be reused: each group should support one feature image, an optional caption, and an array of products with name, image, optional variant label, and destination URL. Use placeholder content and neutral asset names for the implementation.

## Never
- Never copy logos, product names, brand names, captions, or shopping copy from the reference.
- Never use the reference brand's products, exact imagery, image compositions, or distinctive product marks.
- Never add unrelated illustrations, decorative artwork, or stock imagery when the product photography itself should carry the design.
- Never reproduce the reference page pixel-for-pixel; translate its principles into the user's product and brand.
- Never sacrifice semantic HTML, keyboard access, responsive behaviour, or readable contrast for visual similarity.
