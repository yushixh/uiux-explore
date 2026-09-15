## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073271-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-feature-grid

# Build a responsive editorial feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Goal
Design a feature-grid section that communicates several product capabilities through short, scannable cards and lightweight visual demonstrations. The section should feel premium, quiet, and product-led: the written message is clear first, while each card’s lower area can show a simple UI vignette, diagram, abstract shape, or product preview.

## Structure and layout
- Place the section inside a centered content container with a maximum width of approximately `1180–1240px` and generous outer whitespace.
- Use a three-column grid on desktop with equal-width cards and a consistent gap of `16px`.
- Use three rows when the content supports it; every card should have a consistent overall height of roughly `380–420px` so the grid feels intentional.
- On tablet, use two columns; on small screens, collapse to one column while preserving card hierarchy and comfortable spacing.
- Keep all cards aligned to the same grid tracks. Avoid masonry behavior unless the product content genuinely requires it.
- Each card should have generous internal padding, approximately `32px` on desktop and `24px` on smaller screens.
- The card header occupies the upper portion: a compact title followed by a short supporting description. Visual content sits below it and may be centered, bottom-anchored, or allowed to bleed to the card edges.
- Include one or two cards with stronger editorial emphasis, such as a larger headline, while keeping them within the same grid rhythm rather than changing the card dimensions.
- Clip visual demos to the card boundary with `overflow: hidden`; allow selected demos to extend beyond the content padding for a more immersive preview.

## Typography
- Use the product’s brand sans-serif or a clean contemporary sans-serif fallback.
- Card titles should be semibold or bold, around `18–21px`, with a line height of `1.2–1.3` and tight letter spacing.
- Supporting descriptions should be `16px`, medium gray, with a line height around `1.45–1.55`; limit text width so descriptions remain easy to scan.
- For an emphasized card, use a large display heading around `42–50px`, bold, with tight line height and intentional line breaks.
- Do not overfill cards with copy. Prefer one title and one or two short sentences per feature.

## Colour and surface
- Use a warm or neutral near-white page background, approximately `#FAFAFA` to `#FFFFFF`.
- Use white card surfaces such as `#FFFFFF` or a subtly tinted equivalent that contrasts just enough with the page.
- Use near-black for primary text, approximately `#171717` to `#222222`.
- Use a restrained gray for supporting text, approximately `#6B6B6B` to `#777777`.
- Keep visual demos within the product’s brand palette. If no palette exists, use mostly monochrome neutrals with one restrained accent colour.
- Do not use gradients or bright decoration unless they are essential to the product’s identity.

## Borders, radius, and depth
- Give each card a thin, low-contrast border such as `1px solid #E8E8E8` or `#E5E5E5`.
- Use a large, soft corner radius around `16–18px`.
- Keep shadows extremely subtle or omit them entirely. If used, use a diffuse shadow such as `0 2px 10px rgba(0,0,0,0.04)`.
- Ensure visual previews, diagrams, and mock interfaces inherit the card’s radius or are clipped cleanly at the card edge.

## Visual demonstration rules
- Make every visual directly support the feature it accompanies; do not add generic decoration.
- Prefer simple, buildable representations: small interface fragments, connected nodes, buttons, device frames, abstract shapes, swatches, or repeated icons.
- Use generous negative space and avoid dense dashboards.
- Where a visual includes repeated marks or thumbnails, vary opacity and scale subtly to create depth without visual noise.
- If actual product assets are unavailable, create original CSS/SVG/HTML placeholders that communicate the concept without borrowing recognizable brand marks.
- Keep the visual treatment consistent across the grid even when the individual compositions differ.

## Interaction and accessibility
- Cards may have a gentle hover state: slightly darken the border, raise the card by `1–2px`, or shift the visual preview subtly. Keep motion under `200ms` and respect `prefers-reduced-motion`.
- If cards are clickable, make the entire card the target and provide a clear focus-visible outline.
- Use semantic headings, meaningful accessible labels, and sufficient contrast for all text.
- Ensure the grid remains readable and visually balanced at mobile widths.

## Content guidance
Create original feature names and descriptions for my product. Organize the features so the grid tells a progression—for example, starting with the core promise, then showing collaboration or integrations, followed by customization, deployment, automation, or mobile access as relevant. Do not force features that my product does not have.

## Never
- Never copy the reference layout’s exact content, wording, product names, logos, icons, or branded marks.
- Never use the reference product’s logo or recreate a recognizable logo-like symbol.
- Never copy its illustrations, screenshots, device mockups, image assets, or exact visual compositions.
- Never reuse the reference’s specific feature titles, supporting copy, or brand colour choices as-is.
- Never make every card visually identical; preserve a purposeful mix of text-led and demo-led compositions.
- Never sacrifice readability for decorative visuals or add imagery that does not explain the feature.
