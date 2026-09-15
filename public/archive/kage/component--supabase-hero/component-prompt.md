## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060352-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-hero

## Before you start
Ask me what my product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original hero section for that product—not a copy of the reference.

## Design language

Build a light, technical SaaS homepage hero that communicates both speed-to-value and platform breadth. The section should feel calm, precise, developer-friendly, and premium, with restrained visual detail rather than loud decoration.

### Structure and layout
- Use a full-width page section with a slim announcement strip at the top and a compact navigation row beneath it if the hero is being shown in a full-page context.
- Keep the main content inside a centered container around 1080–1120px wide.
- Give the hero generous vertical breathing room: roughly 150–180px between navigation and the headline on desktop.
- Place the primary hero content in a two-column row. The left side contains the headline and actions; the right side contains a concise supporting paragraph. Align the text blocks to the same top baseline.
- Use a large headline split across two lines. Make the first line near-black and the second line an accent colour or subtle gradient to create a clear emphasis without requiring an image.
- Put two adjacent CTAs below the headline: a filled primary action and a quiet outlined secondary action. Keep both compact, highly legible, and equal in height.
- Below the introductory row, create a responsive bento grid of capability cards. Use a deliberately asymmetric layout: one large feature card spanning roughly two columns, several medium cards, and a second row of smaller cards. The grid should visually suggest an integrated platform rather than a list of unrelated features.
- Let the cards have consistent outer alignment and gaps, but vary their internal composition and visual treatment. On small screens, collapse to one column while preserving the large card’s priority.
- End the section with a short statement that reinforces the “use one or use the whole platform” idea, adapted to the user’s product.

### Typography hierarchy
- Use a modern grotesk or system sans-serif with excellent rendering at large sizes.
- Hero headline: approximately 48–56px on desktop, 1.02 line-height, medium or regular weight, with tight letter spacing around -0.04em. Reduce to 38–44px on mobile.
- Supporting copy: approximately 16px, 1.45 line-height, in a muted neutral colour; constrain it to about 390px so it remains scannable.
- Card titles: 16–17px, medium weight, near-black.
- Card descriptions: 14–15px, around 1.45 line-height. Use selective bold emphasis only for important product concepts.
- Supporting labels, announcement text, and metadata can use 12–14px with comfortable tracking.

### Colour
- Use an almost-white background such as #FCFCFB or #FFFFFF.
- Use near-black text such as #171717 and secondary text such as #6B6B6B.
- Use a fresh but controlled brand accent for the highlighted headline and primary CTA, for example mint green around #45D39C or an equivalent colour derived from the user’s brand.
- Primary button text should be dark enough for strong contrast, such as #10251D.
- Keep illustrations mostly monochrome using #C9CECB, #E4E7E5, and #F3F4F2, with only small accent-colour details.
- Avoid filling every card with colour; the white canvas and line-based graphics should do most of the work.

### Cards, borders, and radius
- Use very light 1px borders around cards, approximately #E2E4E2.
- Use subtle corner radii around 10–12px; do not use heavy shadows. If depth is needed, use a barely visible shadow such as 0 1px 3px rgba(0,0,0,0.04).
- Give cards 24–26px of internal padding on desktop and 18–20px on mobile.
- Keep card backgrounds white or only slightly tinted from the page background.
- Use thin technical linework, grids, diagrams, abstract interface fragments, or data patterns inside cards. These visuals should sit in the lower or secondary area of each card so the title and description remain immediately readable.
- Include small, simple line icons beside card titles when useful, using a consistent stroke weight and rounded geometry.

### Interaction and responsive behaviour
- Primary and secondary buttons should have clear hover and focus states: slightly darker or brighter fill for the primary action, a subtle tinted background for the secondary action, and a visible keyboard focus ring.
- Navigation dropdown indicators may rotate or reveal a simple menu on click; do not make hover the only way to access navigation.
- Cards may lift by 1–2px or strengthen their border on hover, but keep the interaction restrained and avoid distracting animation.
- If card visuals are animated, use slow, low-contrast motion such as drifting dots, a cursor, or a gently updating diagram. Respect `prefers-reduced-motion`.
- Ensure the bento grid remains readable at tablet widths and becomes a single-column stack on narrow screens. Preserve logical reading order: headline, supporting copy, actions, then capabilities.
- Maintain WCAG-compliant contrast, semantic headings, descriptive button labels, and accessible names for decorative graphics.

## Never
- Never reuse logos, product names, taglines, feature names, or exact copy from the reference.
- Never reproduce the reference’s illustrations, diagrams, icons, announcement content, or branded visual motifs exactly.
- Never use screenshots or imagery from the reference; create original abstract visuals appropriate to the user’s product.
- Never turn the hero into a dense feature catalogue with equal visual weight for every card.
- Never rely on colour alone to communicate hierarchy or interaction.
- Never sacrifice mobile readability, keyboard access, or reduced-motion support for visual similarity.
