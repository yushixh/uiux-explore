## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106745-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-cta

# Build a spacious multi-column mega-footer for your product

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a version for my product—use my content, naming, and brand tokens rather than reproducing the reference.

## Goal
Design a large footer that helps visitors explore a broad product sitemap without feeling like a directory dump. It should have a light navigation area with grouped links, followed by a visually distinct dark utility strip for company metadata, system status, legal links, and preferences.

## Design language

### Layout and alignment
- Use a full-width footer with a centered content container, approximately 960–1120px wide depending on the product’s page grid.
- Add subtle vertical alignment rails or container boundaries if they fit the brand; these should be extremely low contrast and never compete with the links.
- In the light section, reserve a narrow left column for a small uppercase eyebrow such as a sitemap label, and use the remaining width for 3–4 link columns.
- Keep each column top-aligned. Group links under a compact heading and stack related links beneath it.
- Use consistent column widths and generous horizontal gutters so long labels remain readable.
- Place the dark utility area directly below the sitemap. Arrange its contents in one horizontal row on desktop: company note at left, operational status near the middle, and legal/preferences links at right.
- On smaller screens, collapse the sitemap into a responsive grid or stacked groups, and allow the utility row to wrap into two or three clearly separated rows.

### Typography hierarchy
- Use a neutral, modern sans-serif or the product’s existing UI font.
- Make the sitemap eyebrow small, uppercase, and lightly tracked: around 10–11px with 0.12–0.16em letter spacing.
- Keep group headings medium-weight and compact, around 12–14px.
- Use link labels around 13–14px with comfortable line height, approximately 1.8–2.1.
- In the dark strip, use 12–13px text. Make the operational status slightly more prominent through colour rather than size.
- Avoid oversized footer headlines; this component is about orientation and exploration, not another marketing hero.

### Spacing
- Give the light sitemap area generous vertical padding, approximately 64–96px on desktop.
- Use 18–26px between a group heading and its first link, and 10–14px between individual links.
- Maintain at least 40–72px of horizontal space between columns.
- Give the dark utility strip approximately 24–32px of vertical padding.
- Keep the final footer visually quiet with ample breathing room around its boundaries.

### Colour
- Use the product’s light surface for the sitemap area, typically near-white such as `#FAFAF8` or `#FFFFFF`.
- Use a soft charcoal for primary links, around `#45454A`, with a slightly lighter muted tone such as `#77777D` for secondary labels.
- Use a deep charcoal or near-black for the utility strip, around `#202126` or `#24252B`.
- Use muted grey text in the dark strip, approximately `#85868D`.
- If the brand has a status colour, use a small saturated accent dot—blue is a possible default around `#2F80ED`—but adapt it to the product brand.
- Keep all divider and rail lines subtle, around `#ECECEF` on light surfaces and `rgba(255,255,255,0.06)` on dark surfaces.

### Borders and radius
- Prefer no visible card borders or rounded containers; the footer should feel like part of the page canvas.
- Use 1px horizontal separators only where needed to clarify the transition between regions.
- Keep corners square or use a very small radius, approximately 0–4px. Avoid boxed-in link groups.

### Interaction and accessibility
- Make every link a real, keyboard-focusable anchor with a clear hover and focus state.
- On hover, shift link colour toward the product’s accent or darken it slightly; do not use aggressive underlines if the brand is minimal.
- Provide a visible `:focus-visible` outline with sufficient contrast, especially inside the dark strip.
- Make the status indicator decorative while exposing its meaning in text, for example “All systems operational.”
- Ensure link columns remain usable at narrow widths and do not force horizontal scrolling.
- Respect reduced-motion preferences; any hover transition should be short and subtle.

## Content structure
- Use realistic navigation groups relevant to the user’s product, such as Product, Solutions, Resources, Company, or Developers.
- Keep group lengths reasonably balanced, but do not add filler links solely to make columns equal.
- Include a concise company or product-origin line in the dark strip.
- Include one operational-status link and a compact set of legal or privacy links.

## Never
- Never copy the reference’s logos, product names, navigation labels, copy, or exact sitemap.
- Never use illustrations, background imagery, textures, or decorative graphics from the reference.
- Never reproduce the reference’s exact spacing, typography, colours, or layout measurements; use the rules as a flexible system for the user’s product.
- Never make the footer visually louder than the main page content.
- Never hide important links behind an inaccessible interaction or rely on hover alone.
