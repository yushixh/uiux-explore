## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073964-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073922-full.webp
- Component on Kage: https://kage.design/component/mistral-feature-grid-3

## Before you start
Ask the user what their product is, who it serves, and what visual brand system it already uses. Then apply the principles below to create an original capability or feature-grid section for that product—not a visual copy of the reference.

## Goal
Build a premium, editorial feature-grid section that presents four related product capabilities or value propositions. The section should feel calm, spacious, precise, and easy to scan at a glance.

## Design language

### Layout and alignment
- Use a centered, wide content container with a maximum width around 1200px and responsive horizontal gutters of approximately 32–40px on desktop and 20–24px on mobile.
- Place four equal-width cards in one row on large screens. Each card should be tall and vertically generous, with a minimum height around 400–460px depending on viewport size.
- Align cards to a shared grid. Use thin vertical dividers between cards and a thin border around the overall grid or its outer edges.
- Add a short, 3–5px high accent rule above the first card or across a selected portion of the grid. Choose an accent colour from the user’s brand rather than copying the reference.
- Put a small category icon or abstract marker near the upper-left of each card. Keep it compact and optically aligned with the card’s inner padding.
- Anchor each card’s title to the lower-left so all four titles line up along the same baseline. Use flex or grid layout rather than manual positioning.
- On medium screens, use two columns. On small screens, stack cards vertically or use a horizontally scrollable strip only if the product context benefits from browsing; preserve readable card heights and clear separators.

### Typography hierarchy
- Use a modern sans-serif or the product’s existing brand typeface.
- Card titles should be short, sentence-case phrases, approximately 22–26px on desktop, with medium-to-semibold weight, tight line-height around 1.1–1.2, and restrained letter spacing.
- Optional eyebrow labels should be small, uppercase or sentence-case, around 11–13px with increased tracking.
- Avoid adding body copy unless the user’s content requires explanation; the reference pattern relies on short, high-impact titles and generous negative space.
- Ensure titles remain readable and do not wrap into awkward single-word lines.

### Spacing
- Use generous card padding: approximately 24–32px on desktop and 20–24px on mobile.
- Keep the icon close to the top padding while leaving most of the card intentionally empty.
- Maintain 0px or very small gaps between cards when dividers are used; the grid should read as one architectural unit.
- Give the section sufficient breathing room above and below, typically 64–112px depending on the surrounding sections.

### Colour
- Use a warm near-white or very light neutral background, approximately `#F5F5F2` or `#F7F7F5`.
- Use near-black text, approximately `#151515` or `#1A1A1A`.
- Use subtle cool-grey borders, approximately `#DCDCD7` or `#E2E2DE`, at 1px.
- Use one restrained accent colour for the top rule and icon details, selected from the user’s brand. Avoid making every card brightly coloured.
- If the surrounding page uses a dark section, retain the same grid logic but invert to a deep charcoal background around `#151521`, soft off-white text around `#F1F0F4`, and low-contrast borders around `#343440`.

### Borders and radius
- Prefer square corners or a very small radius between 0 and 4px for an editorial, architectural feel.
- Use 1px borders and dividers with enough contrast to define columns without looking heavy.
- Do not add strong card shadows; the structure should come from spacing, rules, and alignment.

### Icons and interaction
- Use simple, compact icons, abstract glyphs, or small pixel-inspired marks that are original to the product. They should support categorisation, not become illustrations.
- If cards are clickable, make the entire card the hit area and provide a subtle hover state: slightly stronger border contrast, a barely perceptible background shift, or a small icon/title translation of 2–4px.
- Add a visible keyboard focus state with a clear outline and preserve sufficient colour contrast.
- Respect reduced-motion preferences and avoid dramatic animations. Any transition should be short, around 150–250ms.
- On touch devices, ensure the full card is comfortably tappable and never rely on hover to reveal essential information.

### Content guidance
- Write four parallel, benefit-led labels of similar length and grammatical form.
- Keep the language specific to the user’s product and audience. The visual system should remain useful whether the content describes features, services, workflows, or outcomes.
- If the section needs supporting text, place it above the grid rather than overcrowding the cards.

## Implementation requirements
- Build the section with semantic HTML and accessible headings and links/buttons.
- Use CSS Grid for the column structure and a layout method that keeps card titles aligned at the bottom.
- Make all dimensions responsive and test at desktop, tablet, and narrow mobile widths.
- Do not use external imagery or copied assets; create simple CSS/SVG/icon-library marks that fit the user’s brand.

## Never
- Never use logos, product names, or branded marks from the reference.
- Never reuse the reference’s exact copy, labels, icon designs, illustrations, imagery, or distinctive assets.
- Never reproduce the reference page as a whole; build only an original feature-grid component based on the underlying layout principles.
- Never fill the empty space with decorative content just to imitate density.
- Never sacrifice accessibility, responsive behaviour, or readable contrast for visual similarity.
