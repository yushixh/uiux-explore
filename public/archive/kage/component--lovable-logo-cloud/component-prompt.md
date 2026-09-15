## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060910-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-logo-cloud

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create a version for that product rather than reproducing the reference.

## Build a production-proof logo cloud
Create a polished B2B social-proof section that communicates credibility through customer or partner logos. The section should feel calm, editorial, and premium, with the logos presented as evidence rather than decoration.

### Layout and alignment
- Use a warm near-white page background, approximately `#FCFBF9` or a colour appropriate to the user's brand.
- Place the section in a centered, readable container roughly `960–1120px` wide.
- Start with substantial vertical whitespace, around `150–190px` above the section heading on desktop and `88–120px` on mobile.
- Center-align the introductory content: a compact headline, followed by a short explanatory paragraph.
- Use a bold, dark headline around `32–38px` on desktop with tight line-height around `1.05–1.15`; scale it to `28–32px` on mobile.
- Set the supporting paragraph to approximately `16px`, `1.45–1.6` line-height, with a muted neutral colour and a maximum width of about `380–440px` so it remains easy to scan.
- Below the intro, create a logo field using a simple responsive grid. On desktop, use 3–4 columns; on tablet, 2 columns; on mobile, 1–2 columns depending on logo legibility.
- Give each logo tile generous padding, approximately `48–72px` vertically and `32–48px` horizontally. Keep the logo itself optically centered, with a consistent maximum width and height rather than forcing identical dimensions.
- If the section includes a preceding logo strip or adjacent proof panel, separate it from this section with a very thin horizontal rule and maintain a shared column grid. Do not let the introductory copy drift outside the grid's central axis.

### Typography and visual hierarchy
- Use the user's brand typeface where available; otherwise use a clean contemporary sans-serif with sturdy, highly legible bold weights.
- Establish hierarchy through weight, scale, and whitespace rather than decorative colour.
- Keep the heading visually dominant, the paragraph secondary, and the logos quiet but recognizable.
- Avoid all-caps labels unless the user's brand system already uses them.

### Colour, borders, and surfaces
- Use near-black for the heading, approximately `#171717` or the user's equivalent.
- Use a neutral gray for supporting text, approximately `#626262`.
- Use hairline borders around or between logo cells, approximately `#E7E5E1`, with low visual contrast.
- Keep tiles the same colour as the page background or use a barely perceptible off-white surface such as `#FFFFFF`.
- Do not add shadows, gradients, loud accent fills, or decorative patterns.
- Use small or zero corner radius for a precise editorial grid; if the product's brand is softer, a restrained radius of `8–12px` is acceptable.

### Logo treatment and interaction
- Accept logos as data so the user can replace them with real customer or partner assets.
- Preserve each logo's original proportions and use `object-fit: contain`; normalize only the visual footprint, not the artwork.
- Use monochrome or original-colour logos according to the user's brand and legal requirements, but keep contrast balanced across the grid.
- Do not invent recognizable brands. Use neutral placeholders or user-provided assets during implementation.
- The section can remain static. If logos are clickable, make the entire tile an accessible link with a subtle background or border transition on hover and a visible keyboard focus state.
- Respect reduced-motion preferences and keep hover transitions brief, around `150–200ms`.
- Ensure the grid collapses cleanly on narrow screens, with no clipped logos or awkward wrapping.

### Content behaviour
- Keep the heading to one or two lines and the supporting copy to two or three lines.
- Use a flexible number of logo items so the component works with different customer counts.
- If there are too few logos to fill a row, preserve intentional centering or use a balanced layout rather than leaving an accidental-looking final cell.

### Accessibility and implementation
- Give every logo meaningful alternative text, or mark purely decorative duplicates as hidden from assistive technology.
- Maintain visible focus states and sufficient colour contrast.
- Use semantic section and heading elements, responsive CSS, and reusable logo-card data.

## Never
- Never copy the reference's logos, product names, company names, or exact marketing copy.
- Never use the reference brand's logo assets, typography as a fixed identity, or distinctive wording.
- Never add unrelated illustrations, stock imagery, mascots, or decorative artwork.
- Never reproduce the exact layout pixel-for-pixel; adapt the grid, spacing, colours, and content to the user's product and brand.
- Never fabricate customer claims or imply endorsement without assets and copy supplied by the user.
