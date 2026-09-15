## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073739-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Component on Kage: https://kage.design/component/turso-testimonials-2

# Build a three-card customer stories section

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to my product rather than reproducing a reference design literally. Use realistic, original customer-story content that fits my product and audience.

## Goal
Create a dark testimonial/case-study section that communicates breadth of use cases through three compact customer story cards. The section should feel credible, technical, premium, and easy to scan.

## Design language

### Layout and alignment
- Use a full-width section with a very dark near-black background, approximately `#0D1115` or `#0E1216`.
- Center the section content within a max-width of roughly 1120–1180px.
- Place a large, centered heading above the cards. Keep it to one or two lines with a maximum text width of about 700px.
- Add generous vertical separation between the heading and the card grid: approximately 48–64px.
- Use a three-column card grid on desktop with equal-width cards and a gap of 24px.
- Collapse to one column on small screens and two columns at an intermediate breakpoint if appropriate.
- Keep every card internally aligned to the same structure. Use flex column layout so the story link sits at the bottom and cards remain visually balanced even when text lengths differ.
- Cards should have substantial but not excessive internal padding, around 28px.

### Typography hierarchy
- Use a clean modern sans-serif with strong rendering at small sizes; use the product’s existing font if available.
- Section heading: bold, approximately 36–40px desktop, 30–34px mobile, with a tight line-height around 1.05–1.15.
- Customer or company label: semibold, approximately 19–21px, in a bright off-white.
- Add a short mint divider beneath the label, around 140px wide and 1px high. It should act as a visual accent, not a decorative illustration.
- Primary testimonial statement: semibold, approximately 18px, with a 1.45 line-height. This is the strongest text inside each card.
- Supporting explanation: regular weight, approximately 16px, with a 1.55 line-height and muted contrast.
- Card link: semibold, approximately 14–15px, using the accent colour and a right arrow. Keep the language short and action-oriented.
- Use sentence case. Avoid excessive uppercase labels or dense metadata.

### Colour
- Page background: near-black `#0D1115`.
- Card background: subtly lighter or nearly identical, around `#0F1418`.
- Main heading and primary text: warm white, approximately `#F2F4F3`.
- Supporting copy: cool grey, approximately `#858D91`.
- Borders: faint blue-grey, approximately `#253038`; keep them low contrast against the background.
- Accent divider and links: mint/seafoam, approximately `#61E6C1` or `#58DDBA`.
- Do not introduce many accent colours. The restrained mint-on-charcoal palette should make the proof feel technical and focused.

### Borders, radius, and depth
- Give each card a 1px solid border using the subdued border colour.
- Use a medium rounded corner, approximately 14–16px.
- Avoid heavy shadows. If depth is needed, use only a very subtle shadow such as `0 8px 24px rgba(0,0,0,0.12)`.
- Maintain generous negative space around the grid so the cards feel deliberate rather than dashboard-like.

### Content structure
Each card should contain:
1. A customer/company label or short story identifier.
2. A mint horizontal divider.
3. A bold one- or two-sentence outcome statement.
4. A muted paragraph adding context, scale, or mechanism.
5. A bottom-aligned text link such as “Read the story →”.

Write original content for the user’s product. Make the three stories demonstrate distinct use cases or customer outcomes, and avoid unsupported claims. Keep the copy concise enough that the cards remain scannable.

### Interaction and responsive behaviour
- Make the entire card link target clickable if that matches the product’s interaction conventions, while preserving a visible text link for clarity.
- On hover, slightly brighten the card border and move the arrow a few pixels to the right; use a quick 150–200ms ease transition.
- Preserve accessible colour contrast and visible keyboard focus states with a mint outline or equivalent.
- Ensure links have descriptive accessible names and cards do not rely on colour alone to communicate interactivity.
- On mobile, keep the heading centered or use the product’s established alignment, reduce card padding to around 22–24px, and maintain comfortable vertical spacing.

## Never
- Never copy logos, product names, customer names, exact wording, claims, or links from the reference.
- Never use the reference’s copy, illustrations, imagery, or branded assets.
- Never make up recognizable companies or unverifiable statistics for the user’s product.
- Never turn the cards into a dense pricing table, dashboard, or carousel unless the product requirements explicitly call for it.
- Never sacrifice readable contrast or force equal-height cards through clipped or hidden content.
