## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060822-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-gallery-3

# Build an immersive editorial product gallery

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create a version for their product—do not reproduce the reference's brand, products, copy, or imagery.

## Goal
Create a vertically flowing product gallery that alternates between a high-impact, full-width feature image and smaller supporting product tiles. The composition should feel like a premium editorial catalogue: image-led, sparse, tactile, and slightly unconventional, while remaining easy to scan and navigate.

## Layout and alignment
- Use a full-bleed page section with a strict vertical rhythm and almost no outer page padding at desktop widths.
- Make the main feature a large portrait or near-square media panel spanning the full viewport width. Let the image dominate the page and use deliberate cropping to create drama.
- Place supporting tiles in a simple two- or three-column grid above and below the feature. Give each tile equal width and align them with thin vertical rules.
- Keep tile media on a very pale neutral background, with products positioned centrally and generous breathing room around them.
- Use a narrow caption zone at the bottom or top of each tile. Align captions consistently to the left, with a small secondary action or link beneath the title.
- On mobile, collapse supporting tiles to one column while preserving the feature's visual priority. Avoid shrinking every image into a dense card grid.
- Allow the main feature image to use `object-fit: cover`; choose a responsive aspect ratio that preserves the subject's focal point across breakpoints.

## Typography hierarchy
- Use a clean grotesk or neutral sans-serif with a compact, utilitarian feel.
- Keep product labels and captions small, approximately 11–13px, with normal or slightly tight line-height.
- Use sentence case or restrained lowercase for supporting labels; avoid oversized marketing headlines inside the gallery.
- Make links visually subtle but discoverable through colour, underline, or a small arrow rather than heavy buttons.
- Use tabular or monospaced numerals only when the user's brand benefits from a technical, catalogued feeling.

## Spacing
- Use a compact caption inset of roughly 20–28px on desktop and 14–18px on mobile.
- Give the supporting grid generous media height and whitespace; the objects should never feel cramped.
- Use a strong vertical gap between gallery groups, approximately 48–96px depending on viewport size.
- Keep the feature caption close to its image, but leave enough separation for it to read as metadata rather than an overlay.

## Colour
- Base the page on near-white and cool pale grey surfaces, approximately `#F4F6F5` or `#F7F8F7`.
- Use near-black for primary text and the feature background, approximately `#050505` or `#111111`.
- Use a single vivid accent for links or small product details, such as warm orange `#F4512A`, electric blue `#2563EB`, or a colour taken from the user's brand.
- Keep image backgrounds quiet and neutral so the feature image provides the main contrast.

## Borders and radius
- Use 1px hairline rules in a low-contrast grey such as `#C9CDCB` to divide supporting tiles and caption areas.
- Prefer square corners or an almost imperceptible radius of 0–4px. The gallery should feel engineered and editorial, not soft or card-based.
- Do not add shadows to the tile system. Let scale, cropping, and contrast create hierarchy.

## Interaction
- Make every product tile and the main feature image keyboard-accessible when clickable.
- On hover, use a restrained change such as a slight image scale, a subtle brightness shift, or an accent-colour link transition; keep the motion quick and quiet.
- Add a clear focus-visible outline for keyboard users.
- If the gallery supports lightbox viewing, open the image without losing the item's title and metadata, and provide close, previous, and next controls.
- Respect reduced-motion preferences and avoid parallax or distracting autoplay effects.
- Use lazy loading for supporting images, but load the primary feature image with priority.

## Content and implementation guidance
- Use the user's own product photography, renders, screenshots, or generated media with consistent art direction.
- Choose one visually arresting feature asset and several calmer supporting assets with related colour and composition.
- Keep captions informative and short: identify the item, collection, or category without filling the gallery with body copy.
- Ensure every image has meaningful alt text; decorative imagery should use an empty alt attribute.
- Build the component responsively with semantic figures, links, and sections, and avoid relying on absolute positioning for the overall layout.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never recreate the reference's exact product arrangement, image treatment, captions, or brand-specific accent details.
- Never turn the gallery into a generic rounded-card grid with excessive shadows, badges, or promotional buttons.
- Never sacrifice accessibility, readable captions, keyboard navigation, or mobile performance for visual impact.
