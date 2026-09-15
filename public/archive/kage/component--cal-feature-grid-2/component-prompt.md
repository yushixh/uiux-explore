## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060423-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060392-full.webp
- Component on Kage: https://kage.design/component/cal-feature-grid-2

# Build a benefits feature grid for your product

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to my product rather than reproducing the reference literally.

## Goal
Create a spacious, editorial feature section that explains several product benefits through a consistent grid of cards. The section should feel like a premium modern SaaS landing page: calm, highly legible, lightly technical, and focused on showing how the product helps users.

## Structure
- Place the section inside a very light neutral page background, approximately `#f7f7f7` or `#f8f8f8`.
- Add a centered intro block above the cards.
- Include a small pill-shaped eyebrow with a simple neutral icon and short category label.
- Follow it with a large, confident heading of roughly 44–56px on desktop, with tight line-height around 0.98–1.08. Use a dark near-black such as `#202124`.
- Add a centered supporting paragraph beneath it in muted gray, approximately `#8a8a8a`, at 16–18px with comfortable line-height.
- Optionally include two compact calls to action below the paragraph: one dark filled button and one light outlined button. Keep them secondary to the feature grid.
- Below the intro, create a two-column grid on desktop with four cards. Use equal column widths and a gap of approximately 12–16px.
- On smaller screens, collapse to one column while preserving the same card order and generous vertical rhythm.

## Card design
- Each card should have a white or near-white surface, approximately `#ffffff` or `#fdfdfd`.
- Use a thin, low-contrast border around each card, approximately `#dedede`, with a radius of 14–18px.
- Add a restrained shadow such as `0 3px 10px rgba(0,0,0,0.04)`; the cards should feel layered but not glossy.
- Give each card a consistent top copy area with 20–24px internal padding.
- Use a bold card title at roughly 18–20px, with near-black text and tight line-height.
- Use a supporting description beneath it at approximately 16px, line-height 1.45–1.55, in a neutral gray such as `#858585`.
- Keep copy widths readable and avoid dense paragraphs. Write benefit-led headlines that describe an outcome, not a technical feature name.
- Give the visual area enough height to create a strong lower anchor. Align visual treatments consistently across cards even when their internal UI differs.

## Product-interface vignettes
Use simple, believable interface fragments as visual proof inside the cards. They should be abstracted examples of the user's product, not decorative illustrations.

- Use white surfaces, faint gray borders, subtle dividers, compact controls, and small labels.
- Keep UI text sparse and legible. Use small typography around 12–15px for interface labels.
- For settings or form-like cards, show grouped fields, select controls, toggles, or segmented options inside a nested panel.
- For a shareable or public-facing feature, show a nested preview panel with a compact header, a small status or link chip, and a few metadata rows.
- For a calendar, timeline, or data feature, use a simple grid with faint lines and a few muted colored blocks. Suitable accent colors include lavender `#d9c7ff`, pale blue `#d5e8ff`, and soft green `#d8f0df`.
- For notifications or automation, show a compact stacked toast/card treatment with a small status indicator and a short confirmation message.
- Keep the visual language monochrome first, using one or two soft accents only where they clarify state or hierarchy.
- Ensure every vignette is responsive and clipped cleanly within the card; do not allow mock UI to overflow awkwardly.

## Layout and spacing
- Constrain the overall section to approximately 1120–1180px on large screens.
- Use generous outer spacing: approximately 72–112px above the intro and 40–56px between the intro and cards.
- Use a subtle vertical or horizontal grid-line treatment only if it supports the product's brand. Lines should be extremely faint, around `#e9e9e9`.
- Maintain consistent card heights where possible, but prioritize natural content and visual balance over rigid equalization.
- Leave enough whitespace below the grid for the next section; the ending may include a short centered continuation heading or link, but it should not compete with the cards.

## Typography
- Prefer a clean contemporary sans-serif with rounded details and excellent UI legibility.
- Use weight 650–750 for the main heading and card titles, 400–500 for body copy, and 500–600 for controls.
- Keep headings slightly letter-tight, around `-0.02em` to `-0.04em`; keep body text near normal tracking.
- Avoid oversized body text, all-caps labels, and excessive typographic decoration.

## Interaction
- Buttons should have clear hover and focus states: the dark button can lift slightly and shift toward `#333333`; the light button can gain a subtly darker border.
- Cards may lift by 1–2px on hover with a slightly stronger shadow, but avoid making the entire grid feel animated.
- Interactive mock controls can respond visually to hover or focus, but they do not need full product functionality unless requested.
- Respect reduced-motion preferences and maintain visible keyboard focus rings.

## Accessibility and implementation
- Use semantic section, heading, paragraph, list, and button/link elements.
- Preserve a logical heading hierarchy and sufficient contrast.
- Make the grid usable at mobile widths without horizontal scrolling.
- Build the cards as reusable data-driven components so the user can change the number of benefits and their visual demonstrations easily.

## Never
- Never copy the reference's logos, product names, brand marks, or branded interface labels.
- Never reuse the reference's exact headline, supporting copy, button labels, feature names, or sample data.
- Never reproduce the reference's illustrations, screenshots, imagery, or exact mock interface compositions.
- Never make the result look like a pixel-for-pixel clone; adapt the principles to the user's product, audience, and brand.
- Never use visual decoration that makes the feature cards harder to scan or understand.
