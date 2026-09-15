## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060391-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-gallery

# Build an editorial showcase mosaic section

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, typography, and content are. Then apply the principles below to my product—do not reproduce the reference literally.

## Goal
Create a dark, premium portfolio or customer-showcase section that presents a collection of projects, templates, case studies, or product examples in an asymmetric masonry grid. The section should feel like a curated editorial wall: one large feature card establishes hierarchy, while smaller cards introduce variety and visual rhythm.

## Design language

### Layout and alignment
- Use a full-width near-black section, approximately `#050505`, with a centered content container capped around 1160–1240px.
- Give the section generous top and bottom breathing room, roughly 96–140px on desktop.
- Place the heading and the secondary action in one horizontal row: align the heading to the left and the compact button to the right.
- Below the header, use a multi-column masonry-style grid with tight, consistent gaps of about 8–12px.
- Let the first card span approximately two columns and one row, making it the visual anchor. Pair it with narrower portrait cards on the right, then continue with a second row of mixed-width cards.
- Keep card edges aligned to a deliberate grid even when image proportions differ. Use fixed aspect-ratio wrappers so the composition remains stable while media crops inside them.
- On smaller screens, collapse to one column or a simple two-column layout. Preserve the feature card as the first and largest item, and avoid forcing tiny unreadable cards.
- The overall composition should remain edge-to-edge within the content container, with no unnecessary card padding around the media.

### Typography hierarchy
- Use a clean contemporary sans-serif with slightly rounded forms, or the product’s existing brand font.
- Set the section title large and compact, around 40–48px desktop with a tight line-height near 1.05; use 30–36px on mobile.
- Use light or white text for the title, approximately `#F5F5F5`.
- Keep card labels, navigation fragments, and supporting copy small and restrained. Overlay text should be legible but never overpower the preview itself.
- Use a medium or semibold weight for buttons and important card headlines; use regular weight for supporting descriptions.

### Colour and media treatment
- Keep the surrounding canvas nearly black, around `#050505` to `#0A0A0A`.
- Let each card have its own visual identity through product screenshots, photography, gradients, video stills, or branded surfaces supplied by the user.
- Add a subtle dark scrim or gradient behind overlay text, especially near the bottom of image cards, rather than placing text in a separate opaque panel.
- Maintain strong contrast for controls: primary light text on dark surfaces, and muted white or charcoal surfaces for secondary controls.
- Avoid applying one global colour filter to all project previews; the variety is part of the gallery’s appeal.

### Borders and radius
- Use a small-to-medium radius, approximately 12–16px, on every gallery tile.
- Clip all media to the card radius with `overflow: hidden`.
- Add a very subtle border or inner highlight, such as `rgba(255,255,255,0.12)`, to separate dark cards from the background.
- Keep gaps consistent and avoid heavy shadows; the grid should feel clean and image-led.

### Card content and interaction
- Each card should support an image, video, or embedded preview with `object-fit: cover` and a clear focal point.
- Add optional small metadata or project branding inside the preview only when the user provides it.
- On hover, gently scale the media by roughly 1.02–1.04 and transition over 250–400ms. Keep the card radius and layout fixed so neighbouring items do not move.
- Optionally reveal a subtle translucent overlay, arrow, or “View project” affordance on hover, but keep the default state visually calm.
- Make the entire card keyboard-focusable and clickable if it leads somewhere. Provide a visible focus ring that meets accessible contrast requirements.
- The header action should look like a compact dark rounded button with light text, around 12–14px horizontal padding, and a small hover lift or background change.
- Respect reduced-motion preferences by disabling scale and reveal animations when requested.
- Use meaningful alt text for static media and accessible labels for cards whose purpose is not clear from visible text.

## Content model
Create the gallery from reusable data so the user can replace items without changing the layout. Each item should support:
- title or accessible label
- media source and media type
- aspect ratio or grid span
- optional description or metadata
- destination URL

Use realistic placeholder content that matches my product only after asking about it. Do not invent a brand identity that conflicts with the user’s product.

## Responsive behaviour
- Desktop: asymmetric multi-column mosaic with one dominant feature tile.
- Tablet: retain the hierarchy but reduce the number of columns and card heights.
- Mobile: use one or two columns with generous enough tile heights for readable overlays; keep the heading and action stacked if they no longer fit.
- Ensure media is lazy-loaded where appropriate and that the layout does not shift while images load.

## Never
- Never copy the reference’s logos, product names, project names, screenshots, photography, illustrations, or written copy.
- Never use the reference brand’s exact content, assets, or wording.
- Never make every card the same size when an editorial hierarchy is intended.
- Never sacrifice legibility for decorative overlays.
- Never use inaccessible hover-only interactions or remove keyboard focus states.
- Never add imagery or brand assets from the reference; use neutral placeholders or assets supplied for my product instead.
