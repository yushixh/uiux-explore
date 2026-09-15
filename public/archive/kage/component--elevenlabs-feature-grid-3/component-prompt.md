## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060952-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-feature-grid-3

## Before you start
Ask me what my product is, who it is for, and what its brand, visual identity, and primary conversion goal are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section
Create a responsive feature-grid section that explains a product's capabilities through a headline area and a bento-style set of cards. The composition should feel editorial, premium, calm, and product-led, with generous whitespace and believable interface previews rather than decorative marketing artwork.

### Structure and layout
- Use a centered content container with a maximum width of approximately `1120–1200px` and horizontal padding of `32px` on desktop, reducing to `20–24px` on mobile.
- Begin with a small eyebrow label, followed by a large left-aligned headline and a concise supporting paragraph. On desktop, place the headline and paragraph in two columns with a gap of roughly `64–96px`; stack them vertically on narrow screens.
- Add a prominent call-to-action button below the headline. Use one primary action only unless the product clearly requires a secondary action.
- Below the introduction, create a bento grid with two large cards in the first row: a visual demonstration card on the left and a metrics, analytics, or interface-preview card on the right. Let the cards be approximately equal in width, with a `16–20px` gap.
- Add a second row of three smaller cards beneath, each with a compact icon or symbol, a short label, and a brief explanation. Keep their heights consistent.
- Optionally include a slim social-proof or customer-result strip below the grid, but only if it supports the product's conversion goal. Keep it visually quieter than the feature cards.
- On mobile, stack all cards in a single column. Preserve the visual card first, then the analytics card, then the supporting capability cards.

### Visual language
- Use a warm off-white page background around `#FCFCFB` or `#F8F8F6`, with cards in a subtly contrasting neutral such as `#F2F2EF`.
- Use near-black text around `#111111`, muted supporting text around `#6F6F6A`, and very light borders around `#E3E3DE`.
- Use large rounded corners on feature cards, approximately `24–28px`; use a smaller `10–14px` radius for embedded interface panels and controls.
- Keep borders thin and low contrast. Avoid heavy shadows; if needed, use a barely visible shadow such as `0 2px 10px rgba(0,0,0,.04)`.
- Use a restrained accent colour derived from the user's brand for charts, badges, status indicators, or one visual highlight. Do not let the accent overpower the neutral system.
- The visual showcase card may use a soft abstract gradient, blurred colour fields, subtle noise, or a product-specific visual treatment, but it must remain supportive of the interface content and accessible.

### Typography
- Use the product's brand typeface if available; otherwise use a clean contemporary sans-serif.
- Set the main heading in a confident display size around `40–56px` desktop with tight line-height of `0.98–1.08`; use `32–40px` on mobile.
- Make the eyebrow and card labels small, muted, and medium-weight, around `13–15px`.
- Use body copy at `16–18px` with approximately `1.35–1.5` line-height.
- Use compact card descriptions at `14–16px` with comfortable line spacing. Keep line lengths short enough to scan.
- Establish hierarchy through scale and weight, not excessive colour or decoration.

### Card content and previews
- Make each card communicate one distinct capability or outcome.
- In the large visual card, show a believable, simplified product moment such as a conversation, workflow, editor, output, or status sequence. Use short placeholder content relevant to the user's product.
- In the analytics card, show a realistic miniature dashboard element: a chart, timeline, KPI, table, or progress view. Include labels and values that support the story, but avoid making the card look like a full application screen.
- For the three compact cards, use simple line icons or abstract glyphs inside small bordered icon containers. Icons should be consistent in stroke weight and should not become the focal point.
- Align card text to a shared baseline where practical, and anchor descriptions near the bottom of large cards so the visual previews have room above them.

### Interaction and responsiveness
- Add a subtle hover state to interactive cards: a slight border-colour change, a `translateY(-2px)` movement, or a very soft shadow. Do not animate the whole grid aggressively.
- Give the primary CTA a clear hover and focus-visible state, with keyboard-accessible focus treatment.
- If previews are interactive, support a lightweight hover, tooltip, tab, or animated chart state, but keep the section understandable without interaction.
- Respect `prefers-reduced-motion` and ensure sufficient contrast for all text and chart labels.

### Implementation guidance
- Use semantic HTML: a section, heading hierarchy, paragraph text, links or buttons, and lists where appropriate.
- Make the grid easy to edit by keeping feature data separate from presentation markup.
- Use CSS Grid for the desktop bento layout and responsive breakpoints rather than fixed heights that cause clipping.
- Keep the section visually balanced even when text lengths vary; use sensible minimum heights and let mobile cards grow naturally.

## Never
- Never reuse logos, product names, proprietary labels, exact copy, customer names, or branded assets from the reference.
- Never copy the reference's exact card content, chart values, icon artwork, gradient, layout proportions, or visual treatment.
- Never use illustrations or imagery from the reference; create an original product-appropriate preview or use neutral interface primitives.
- Never invent a visual identity without first adapting the palette, type, content, and accent to the user's product and brand.
- Never sacrifice accessibility, responsive behaviour, or readable content for visual similarity.
