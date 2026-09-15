## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060359-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060339-full.webp
- Component on Kage: https://kage.design/component/notion-feature-grid

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section
Create a responsive feature-grid section that explains how the product helps a team or audience work better. Use realistic placeholder content tailored to the product after I answer your questions.

### Layout and alignment
- Place the section inside a generous centered container, approximately 1100–1200px wide on desktop.
- Begin with a prominent left-aligned section headline above the grid. Keep the headline short, assertive, and no more than two lines.
- Use a three-card bento composition:
  - Two equal-width cards in the first row, side by side.
  - One wide card spanning the full grid beneath them.
- Give the primary cards a soft neutral background and let each card combine a small eyebrow, a bold feature title, a circular arrow CTA, and a product-interface preview.
- Make the lower wide card visually distinct through composition rather than excessive decoration: reserve one area for copy and use the remaining space for an oversized, partially cropped interface preview.
- Add a small “explore more” or equivalent label beneath the main grid, followed by a single horizontal row of five compact secondary cards on desktop.
- Each secondary card should contain a small product-specific visual marker, a concise use-case title, and a trailing arrow. Allow these cards to wrap or become a horizontal scroll region on smaller screens.
- On tablet, use two columns for the primary cards and let the wide card remain full width. On mobile, stack all primary cards and use a two-column or horizontally scrollable treatment for secondary cards.
- Keep all card content aligned to consistent inner padding; align headings and arrows to a predictable vertical rhythm.

### Typography hierarchy
- Use the product’s own typeface where available; otherwise use a modern sans-serif system stack.
- Section headline: bold or semibold, approximately 44–56px on desktop with tight line-height around 0.98–1.08; reduce to 32–40px on mobile.
- Eyebrow labels: 13–15px, regular weight, with restrained contrast.
- Feature titles: 21–26px, bold, with compact line-height and a maximum width that encourages two lines when appropriate.
- Secondary card titles: 16–18px, semibold or bold, with enough line-height for two lines.
- Use sentence case and strong contrast. Avoid excessive all-caps labels.

### Spacing and proportions
- Use roughly 72–112px of space above and below the section on desktop, adapting to the surrounding page.
- Use a 20–28px gap between the headline and primary grid.
- Use a 20–24px grid gap between major cards.
- Use 24–32px of inner card padding, with 16–20px on mobile.
- Primary cards should feel tall enough for the interface previews to be legible, generally 400–540px depending on viewport width.
- The lower wide card can be shorter, around 280–360px, with its visual preview extending toward or slightly beyond the card’s lower/right edge.
- Keep secondary cards compact and equal height, around 140–170px on desktop.

### Colour and surfaces
- Start from the product’s brand palette, but preserve a mostly calm, editorial surface hierarchy.
- Use an off-white page background around `#FFFFFF` or `#FAFAF9`.
- Use a very light neutral for primary feature cards, around `#F7F7F6` to `#F2F2F0`.
- Use white or near-white inner interface panels, around `#FFFFFF`, so previews feel like layered product surfaces.
- Use near-black text around `#111111` and muted supporting text around `#686868`.
- If the product has accent colours, introduce them sparingly in preview data, status chips, icons, small highlights, or one soft-tinted panel—not as a noisy full-card gradient.
- Ensure all text, arrows, and interactive controls meet accessible contrast standards.

### Borders, radius, and depth
- Use subtle 1px borders around secondary cards, approximately `rgba(17,17,17,0.12)`.
- Primary cards may use either a barely visible border or no border if the background separation is clear.
- Use medium rounded corners on the main cards, approximately 12–16px; use 10–14px on compact cards.
- Keep shadows very soft and optional: for example `0 8px 28px rgba(0,0,0,0.06)` on floating interface previews only.
- Avoid heavy shadows, glossy effects, and ornamental gradients that compete with the content.

### Interface previews
- Build original, abstracted product mockups using HTML/CSS or the project’s existing icon system rather than copied screenshots.
- Show enough recognizable structure to communicate the capability: tables, dashboards, cards, timelines, chat panels, charts, task lists, or automation flows as appropriate.
- Crop and layer previews so they feel like visual evidence of the feature, but keep key information decorative and non-essential.
- Use varied preview compositions across the three cards so the grid does not feel repetitive.
- Do not make the previews depend on external image assets unless the user explicitly provides them.

### Interaction and accessibility
- Make each feature card and secondary use-case card an accessible link or button with a clear hover and focus state.
- On hover, use a subtle lift or border-colour change and animate the arrow a few pixels in the direction it points; keep motion restrained.
- Preserve visible keyboard focus rings and meaningful accessible labels.
- Respect `prefers-reduced-motion` by disabling transforms and transitions when requested.
- Ensure the layout remains usable at narrow widths, with no clipped text or inaccessible horizontal content.

## Never
- Never use logos, product names, branded copy, illustrations, screenshots, icons, or imagery from the reference.
- Never reproduce the reference’s exact wording, card content, artwork, or interface details.
- Never assume the user’s product is the referenced product; adapt the structure and visual principles to the user’s brand.
- Never use decorative visuals that obscure the feature’s explanation or reduce accessibility.
