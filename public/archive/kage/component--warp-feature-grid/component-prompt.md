## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060389-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-feature-grid

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Goal
Build a responsive feature-grid section that explains several related capabilities while showing a visual preview of the currently selected capability. The section should feel like a technical product interface: clear, systematic, editorial, and useful rather than decorative.

## Structure
- Place the section inside a centered content container with a generous maximum width, approximately 1120–1200px.
- Add a small eyebrow label above the section title. Use compact, technical wording relevant to my product.
- Add one prominent section heading and a short supporting sentence below it.
- Below the introduction, create a two-column panel:
  - Left column: a vertical list of 5–7 feature rows.
  - Right column: a larger visual preview that changes to represent the active row.
- Keep the two columns aligned at the top and give the preview column roughly 50% of the panel width. On smaller screens, stack the preview below the feature list or place it below the active item.
- Use a consistent row height and clear separators so the list reads like a navigation system, not a collection of cards.

## Feature list behavior
- Every row includes a small sequential index, a concise feature title, and a one- or two-line explanation.
- Use a subtle tinted background for the active row; inactive rows remain on the base surface.
- Make each row keyboard accessible and visibly focusable.
- On hover, gently change the row background and index color. On selection, update the preview with a short fade or crossfade; avoid dramatic motion.
- If implementing interaction is out of scope, show the first item as selected and make the interaction structure easy to extend.

## Preview panel
- Treat the right side as a product UI specimen rather than a generic illustration.
- Add a narrow top bar with a small terminal or system cue, a centered muted status label, and a compact control on the right. Keep these elements abstract and specific to my product’s domain.
- Inside, show one or two pale interface cards with realistic but invented UI details: status lines, activity rows, progress indicators, tags, controls, or structured text.
- Use restrained depth: thin borders, very soft shadows, and a light tinted surface. The preview should feel like an interface captured inside the section, not a separate marketing graphic.
- Ensure the preview has enough internal padding and a minimum height that balances the feature list. On mobile, preserve legibility and avoid horizontal overflow.

## Design language
- Overall mood: precise, developer-oriented, calm, slightly futuristic, and editorial.
- Use a warm near-white page background, approximately `#FAFAF8` or `#FCFCFB`.
- Add a faint square grid and sparse tiny dot texture behind the section using CSS gradients. Keep it subtle, around 5–10% opacity, and never let it reduce text contrast.
- Main text: near-black charcoal, approximately `#17171A`.
- Secondary text: cool gray, approximately `#606067`.
- Accent: electric blue or indigo, approximately `#3157D5` or `#4A45C8`, reserved for indices, active states, links, and small system cues.
- Active row surface: cool lavender-gray, approximately `#F0F0F5`.
- Preview surface: very pale lavender, approximately `#F5F4FA`, with inner cards around `#FAFAFD`.
- Use 1px borders in a light neutral gray such as `#D9D9DE`; use slightly darker separators around the main panel.
- Use square or very restrained corners: approximately 0–4px for the outer grid and 3–6px for inner UI cards. Avoid large rounded marketing cards.
- Use a monospace or technical sans-serif treatment for the eyebrow, indices, feature titles, and preview labels. Use a clean sans-serif for the main heading if that suits my brand, or use one type family with clear weight contrast.
- Typography should be compact and intentional: eyebrow around 11–12px with slight tracking, heading around 36–48px desktop and 28–34px mobile, feature titles around 16–18px, descriptions around 13–15px, and preview metadata around 11–13px.
- Use a disciplined spacing scale based on 4px or 8px units. Give the introduction roughly 32–48px of bottom space, feature rows 24–32px of internal padding, and the panel enough outer padding to feel architectural without becoming airy.
- Align text and borders to a consistent vertical grid. Keep index columns narrow and titles aligned across all rows.

## Responsive and accessibility requirements
- Support keyboard navigation for feature selection and provide an obvious `:focus-visible` state.
- Use semantic headings, buttons or tabs for selectable rows, and meaningful accessible labels for the preview.
- Maintain WCAG-compliant contrast; do not rely on color alone to communicate selection.
- At narrow widths, reduce heading size, allow descriptions to wrap, and simplify preview details while preserving the core hierarchy.
- Respect reduced-motion preferences and replace crossfades with an instant state change when requested.

## Content guidance
Use original, product-specific copy based on my product. Keep feature titles short and parallel in structure. Make the preview content support the selected feature, but keep it believable and understated. Do not use filler Latin text.

## Never
- Never copy the reference’s logos, product names, brand marks, or proprietary interface labels.
- Never reuse the reference’s exact feature titles, descriptions, numbers, or copy.
- Never reproduce the reference’s exact preview UI, iconography, controls, or layout details one-for-one.
- Never use illustrations or imagery from the reference; prefer CSS-built interface details or original product-relevant UI.
- Never turn every feature into a separate floating card with oversized rounded corners.
- Never use excessive gradients, glassmorphism, heavy shadows, loud animation, or decorative elements that compete with the product story.
- Never assume the product is a developer tool if my product and audience suggest a different visual language; adapt the principles to my brand.
