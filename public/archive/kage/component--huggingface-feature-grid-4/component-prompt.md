## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073963-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-feature-grid-4

## Before you start
Ask the user what their product is, who it is for, and what brand personality, content, and visual system should be used. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a feature-grid section that introduces a family of products, capabilities, community projects, or resources. It should feel open, editorial, and community-oriented: highly scannable at the top, but with enough variation in card placement and content length to feel lively rather than corporate.

## Structure
- Use a centered section container with a maximum width of approximately 1120–1200px and generous horizontal padding.
- Begin with a compact decorative marker or neutral geometric accent above the heading. Keep it abstract and brand-appropriate.
- Place a centered section heading, followed by one concise supporting sentence in a muted tone.
- Add a large card field below the introduction. Use 4 columns on wide screens, 2 columns on tablets, and 1 column on small screens.
- Create a masonry-like staggered rhythm without relying on fragile JavaScript: use CSS grid columns or independent column stacks, and offset selected cards vertically by roughly 32–56px at desktop widths.
- Keep the overall grid aligned to the same container edges even when individual cards are offset.
- Each card should contain: a small colored status dot or category accent, a bold title, a compact metadata row with a small icon and metric, and a short description anchored toward the lower part of the card.
- Use varied card heights, approximately 190–270px, based on content. Avoid making every card identical if the product content benefits from natural variation.

## Layout and alignment rules
- Center the intro; left-align all card content.
- Give cards generous internal padding, approximately 24px on desktop and 20px on mobile.
- Keep title and metadata close together at the top, with the description separated by flexible vertical space so card bottoms feel intentional.
- Use a consistent gap of approximately 20–24px between cards and columns.
- Let descriptions wrap naturally to two or three lines; do not force awkward truncation.
- On mobile, remove stagger offsets and use a single clean vertical flow.

## Typography
- Use a clean contemporary sans-serif with a friendly, technical character; prefer the user’s existing brand font when available.
- Section heading: bold or extra-bold, around 28–34px desktop and 25–29px mobile, with tight line-height around 1.1.
- Supporting text: 16–18px, line-height around 1.5, in a soft gray.
- Card title: 18–20px, semibold or bold, line-height around 1.2.
- Metadata: 14–16px, regular weight, dark gray.
- Description: 15–16px, line-height around 1.55, medium gray.
- Use strong contrast for titles, but keep secondary content visibly subordinate.

## Colour
- Use a warm or neutral near-white page background, approximately `#FFFFFF` or `#FCFCFB`.
- Use near-black text, approximately `#111111` or `#171717`.
- Use muted gray for supporting text, approximately `#737373` to `#858585`.
- Card surfaces should be white or only slightly tinted, approximately `#FFFFFF`.
- Use very pale borders, approximately `#ECECEC` or `#E8E8E8`.
- Assign each card a small accent dot or marker from a restrained but varied palette, such as orange `#F59E0B`, violet `#8B5CF6`, blue `#3B82F6`, green `#84CC16`, and rose `#F3A6B8`. Ensure accents support the brand and maintain accessible contrast where used as text or controls.
- Keep the palette mostly quiet; colour should organize the cards, not dominate the section.

## Borders, radius, and depth
- Use a 1px subtle border around each card.
- Use a medium-large rounded corner, approximately 18–24px.
- Avoid heavy shadows. If elevation is needed, use an extremely soft shadow such as `0 2px 8px rgba(0,0,0,0.04)`.
- On hover, slightly raise or translate a card by 2–4px, increase border contrast modestly, and transition over 160–220ms. Do not introduce dramatic scale effects.

## Interaction and accessibility
- If cards link to detail pages, make the entire card clickable with a clear hover and keyboard focus state.
- Preserve a visible focus ring using the product’s accent colour with sufficient contrast.
- Include meaningful accessible labels for metadata icons; never make an icon the only carrier of meaning.
- Keep motion subtle and respect `prefers-reduced-motion`.
- Make the grid responsive without horizontal scrolling, and ensure descriptions and titles remain readable at all breakpoints.

## Content guidance
- Use realistic, product-specific labels and metrics supplied by the user’s product. Keep labels short and descriptions concrete.
- If the product has no metrics, replace the metadata row with another compact signal such as category, status, integrations, or update date.
- The section should communicate breadth and community or ecosystem value without requiring the user to read every card.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the reference card labels, metrics, descriptions, decorative mark, or exact arrangement.
- Never make the section depend on a copied visual asset or branded mascot.
- Never use arbitrary staggered positioning that causes overlap, clipping, inaccessible content, or poor mobile behavior.
- Never sacrifice readability for visual irregularity.
