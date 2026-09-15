## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060820-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-feature-grid-4

# Build a reusable three-card feature showcase

## Before you start
Ask the user what their product does, who it is for, and what their brand identity and visual language are. Ask what three features or benefits should be highlighted. Then apply the principles below to their product and brand rather than reproducing the reference literally.

## Component goal
Create a prominent feature-grid section that introduces one product theme, gives users two clear next steps, and explains three related features. It should feel warm, spacious, trustworthy, and editorial—not like a dense dashboard or generic pricing table.

## Design language

### Layout and alignment
- Place the section inside a wide, soft-tinted container with generous horizontal padding and a large corner radius, approximately 40–56px on desktop.
- Centre-align the introductory content: a short, confident heading, a two-line maximum supporting paragraph, and a compact row of two actions.
- Keep the intro vertically separated from the cards by roughly 44–56px.
- Use a three-column grid on desktop. Each column should have equal width and a consistent gap of approximately 24px.
- Align each card's media, title, and body copy to the same left edge. Keep titles at a consistent baseline where possible.
- On tablet, use two columns or a horizontally scrollable row depending on the product context. On mobile, stack the cards with 24–32px vertical spacing.
- Constrain the overall content width to roughly 1080–1160px so the cards remain readable and the section does not feel stretched.
- Let the section have generous top and bottom padding, approximately 64–96px on desktop and 40–56px on mobile.

### Typography hierarchy
- Use a bold, friendly display or heading face for the section title, around 36–44px desktop, 30–36px mobile, with tight line-height around 1.05–1.15.
- Use a neutral, highly legible sans-serif for supporting text and card descriptions.
- Set the intro paragraph around 18–21px with a 1.35–1.5 line-height and a muted tone.
- Set card titles around 22–26px, bold, with a compact line-height.
- Set card descriptions around 16–18px with a 1.35–1.5 line-height. Keep them short enough to scan, but allow useful detail.
- Use sentence case and plain-language benefit-led headings. Avoid making every card title the same length if that would make the copy unnatural.

### Colour
- Use a very light, slightly tinted section background—approximately #F1F8F5 or a brand-appropriate equivalent rather than stark white.
- Use a deep blue-black for headings and primary button text, approximately #071923.
- Use a soft neutral grey for supporting and body copy, approximately #667276.
- Use one strong brand accent for the primary action and/or one media tile, approximately #FF4D4D, #FF5A52, or a suitable colour from the user's brand.
- Keep the card imagery or visual treatments varied but harmonised: one photographic treatment, one product/UI treatment, and one lifestyle or illustrative treatment can create rhythm.
- Ensure all text and controls meet WCAG AA contrast requirements; do not rely on pastel backgrounds for essential text contrast.

### Media cards
- Make each media area a large rectangle with a 24–30px radius and a consistent aspect ratio, approximately 1:1 or 1.15:1.
- Crop media deliberately with `object-fit: cover`; keep the focal subject visible across responsive breakpoints.
- If using a product screenshot, place it inside a bold colour field or framed device treatment, but use the user's own interface and brand.
- Maintain equal media heights across all cards on desktop so the grid feels orderly.
- Do not add decorative media merely for filler: every visual should reinforce the associated feature.

### Buttons and interaction
- Show two actions beneath the intro when the product has both an exploratory path and a conversion path.
- Make the secondary action outlined with a 2px dark border, transparent or section-colour fill, pill radius around 999px, and medium-bold text.
- Make the primary action a dark filled pill with light text and generous horizontal padding.
- Use approximately 14–18px vertical and 22–28px horizontal button padding, with a 16–18px label.
- On hover, slightly raise or brighten the button and transition over 160–220ms. On focus, show a clear high-contrast focus ring.
- Cards may have a subtle hover lift or image scale of 1–2%, but keep interaction restrained and do not make the entire card appear clickable unless it has a real destination.
- Links embedded in descriptions should use an underline or another persistent non-colour cue.

### Responsive and accessibility requirements
- Preserve the reading order: intro, actions, then feature one through feature three.
- Use semantic headings, a labelled section, real buttons or links, descriptive image alt text, and keyboard-visible focus states.
- Do not let long card titles or descriptions create awkward clipping; allow natural wrapping.
- Stack the two CTAs vertically or let them wrap cleanly on narrow screens.
- Test at mobile widths, zoomed text, reduced motion, and high-contrast settings.

## Content model
Use replaceable data for:
- section eyebrow or title
- supporting description
- secondary and primary CTA labels and destinations
- three feature objects, each with media, title, description, optional inline link, and optional theme colour

Use realistic copy for the user's product, but keep the section concise and benefit-focused.

## Never
- Never use the reference product's logo, product name, trademark, or brand-specific wording.
- Never copy the reference heading, feature titles, descriptions, CTA labels, pricing, rates, or any other copy.
- Never reuse the reference photos, screenshots, device mockups, illustrations, icons, or imagery.
- Never recreate the exact composition as a branded imitation; adapt the layout principles to the user's product and brand.
- Never sacrifice contrast, keyboard access, semantic structure, or responsive behaviour for visual similarity.
