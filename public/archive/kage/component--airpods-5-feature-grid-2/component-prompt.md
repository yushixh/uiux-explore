## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106644-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-feature-grid-2

## Before you start
Ask the user what their product is, who it is for, and what visual brand language they want to use. Apply the principles below to their product and brand; do not reproduce the reference literally.

## Build an editorial product feature section
Create a responsive feature section for the user's product that combines a high-impact visual statement with a calm, information-rich feature grid. The section should feel premium, spacious, and highly legible rather than like a conventional dashboard or card wall.

### Structure and layout
- Use three stacked zones:
  1. A large cinematic hero panel with a full-bleed visual or brand-appropriate background treatment.
  2. A centered explanatory intro on a light, quiet surface.
  3. A three-column feature grid with one concise benefit per column.
- Let the hero span the full available width. Give it a substantial aspect ratio and enough height for the visual to feel immersive, but keep the text readable over it.
- Place the hero eyebrow and headline in the upper-middle region, centered on desktop. Use a constrained text width so the headline forms intentional lines rather than stretching across the viewport.
- Keep the intro copy in a narrower measure than the feature grid. Center-align it and separate it from the grid with generous vertical space.
- Constrain the lower content to a centered max-width of roughly 960–1120px. Align the three feature columns to a shared top and use equal column widths with consistent gaps.
- On smaller screens, collapse the three columns into a vertical stack or a two-column layout where appropriate. Preserve generous spacing, but reduce the hero height and headline size fluidly.

### Typography hierarchy
- Use a clean modern sans-serif or the product’s existing brand typeface.
- Hero eyebrow: medium or semibold, approximately 20–28px desktop, with tight line-height.
- Hero headline: bold, approximately 64–84px desktop, with a tight 0.95–1.02 line-height; use responsive `clamp()` sizing and allow two or three purposeful lines.
- Intro lead: bold opening sentence followed by supporting copy in the same centered block. Use approximately 20–26px with 1.15–1.3 line-height.
- Feature titles: semibold, approximately 16–19px, with compact line-height.
- Feature descriptions: medium or regular, approximately 16–18px with 1.3–1.45 line-height. Keep each description to a short paragraph for fast scanning.
- Use restrained letter spacing. Avoid all-caps except for a small eyebrow when it suits the brand.

### Colour and contrast
- Use a visually rich hero treatment derived from the user’s brand: a photograph, abstract gradient, video still, texture, or product render. If the visual is dark, use near-white text such as `#F5F5F7`.
- Add a subtle dark overlay or gradient behind hero copy when needed, rather than applying a heavy opaque panel.
- Use a light content surface around `#F5F5F7` or `#FAFAFA`, with primary text around `#1D1D1F` and secondary text around `#6E6E73`.
- Keep icons monochrome and high contrast. Use one restrained accent colour only if it belongs to the user’s brand.
- Ensure WCAG-conscious contrast for all text, including text placed over imagery.

### Icons, borders, and shape
- Give each feature a small, simple monochrome icon above its title. Prefer a consistent stroke or filled-icon family with an optical size around 28–40px.
- Do not use decorative containers around every feature unless the product’s brand requires them; the reference relies on whitespace rather than visible cards.
- If separators are useful, use extremely subtle rules such as `#D2D2D7` at 1px, but avoid turning the grid into a dense table.
- Use minimal radii: approximately 0–16px depending on the product’s visual language. The hero may remain square-edged or use a restrained radius; do not over-round the composition.

### Spacing and rhythm
- Hero content should have generous inset spacing: roughly 64–120px vertically and 24–48px horizontally depending on viewport size.
- Give the intro section approximately 88–144px of top and bottom padding.
- Place the feature grid after a clear gap of approximately 64–96px. Use 32–56px between icon, title, and description as a system of smaller internal gaps.
- Maintain a consistent vertical rhythm and avoid filling every empty area. The whitespace is part of the premium feel.

### Interaction and responsive behaviour
- If the hero uses video or motion, respect `prefers-reduced-motion` and provide a still fallback.
- If the hero visual is interactive, keep controls discreet, keyboard accessible, and positioned away from the headline.
- Feature items may reveal a subtle accent, tint, or upward shift on hover, but the content must remain fully understandable without hover.
- Do not rely on hover for essential information. Ensure focus states are clearly visible and touch targets are at least 44px where controls exist.
- On mobile, keep the copy centered or switch to left alignment consistently; do not mix alignment modes without a clear reason.

### Content guidance
- Write original copy for the user’s product. Use one strong promise in the hero, one concise explanatory paragraph, and three differentiated benefits.
- Make the three benefits complementary rather than repetitive: for example, control, adaptation, and awareness, translated into the user’s product domain.
- Keep claims specific and credible. Use footnotes or disclosure links only if the product requires substantiation.

## Never
- Never use logos, product names, copy, illustrations, photography, product renders, icons, or other imagery from the reference.
- Never reproduce the reference’s exact text, visual subject, layout proportions, or branded artwork.
- Never assume the user’s product is a consumer audio product; adapt the hierarchy and benefits to the user’s actual offering.
- Never sacrifice readability for a cinematic background or decorative effect.
