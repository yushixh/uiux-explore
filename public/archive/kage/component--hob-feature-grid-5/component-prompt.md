## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106504-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106472876-full.webp
- Component on Kage: https://kage.design/component/hob-feature-grid-5

# Build an asymmetric feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature section for my product—not a copy of the reference.

## Goal
Create a marketing-page section that explains several product capabilities through a structured, editorial feature mosaic. It should feel quiet, practical, and trustworthy: concise writing first, with a small number of carefully chosen product visuals supporting the most important capabilities.

## Layout and alignment
- Use a centered content container with a maximum width of approximately `1200–1280px` and responsive horizontal padding of `24px` on mobile, `32px` on tablet, and `48px` or more on desktop.
- Begin with a left-aligned section heading and a short supporting sentence. Keep the heading visually dominant but compact, with the intro separated from the grid by approximately `40–56px`.
- Build the main content as an asymmetric bento grid rather than a uniform card matrix. On desktop, use three columns with roughly equal widths and a consistent gap of `16–24px`.
- Let cards span different vertical heights. Place one or two visually richer cards in prominent positions, while smaller text-led cards balance the composition.
- Use a clear reading order in the DOM: heading, description, then features in a logical sequence. Make the visual arrangement responsive without requiring the user to infer the order.
- On screens below roughly `900px`, collapse to two columns or a single column depending on available width. On mobile, stack cards in a natural narrative order with `16px` gaps.
- Align card content to a common left edge and maintain generous internal padding, approximately `28–32px` on desktop and `22–24px` on mobile.

## Typography
- Use a clean modern sans-serif appropriate to the product brand.
- Section heading: approximately `40–48px`, weight `500–600`, line-height around `1.05–1.15`; reduce to `32–36px` on mobile.
- Supporting copy: approximately `16px`, line-height `1.5–1.6`, using a softer neutral colour and a readable maximum width of `620–720px`.
- Card titles: approximately `21–24px`, weight `500–600`, line-height around `1.2`.
- Card descriptions or bullet points: approximately `15–16px`, line-height around `1.55–1.7`. Keep each point short and scannable.
- If using lists, use restrained dash or dot markers rather than decorative icons. Keep the text column narrow enough to avoid dense, overly long lines.

## Colour and surfaces
- Use a warm or neutral page background, approximately `#FFFFFF` or `#FAFAF9`.
- Give feature cards a subtly contrasting surface, approximately `#F5F5F4` to `#F7F7F6`.
- Use near-black for headings, approximately `#171717` or `#1C1C1C`.
- Use a muted grey for supporting text, approximately `#6B6B6B` to `#737373`.
- Keep the palette restrained. If the product has an accent colour, use it sparingly for links, small status details, or subtle interactive feedback rather than filling every card.
- Product screenshots should sit naturally within the card surface, with enough whitespace and no heavy decorative framing.

## Borders, radius, and depth
- Use a soft corner radius of approximately `14–18px` for feature cards; reduce slightly on very small screens if needed.
- Prefer no visible border when the surface contrast is sufficient. If separation is needed, use a fine border such as `1px solid #EEEEEC`.
- Avoid strong shadows. If elevation is necessary for a floating visual, use a very subtle shadow such as `0 4px 18px rgba(0,0,0,0.06)`.
- Clip screenshots and media to the card radius so the whole mosaic feels intentional and polished.

## Content and visual hierarchy
- Give every card a specific, benefit-oriented title and two to four concise supporting points.
- Vary the card structure: text-only cards should feel complete with whitespace, while visual cards can reserve the lower half or one side for a cropped dashboard, workflow, device view, diagram, or other product-relevant artifact.
- Use visuals to demonstrate a capability, not as decoration. Prefer abstracted or newly generated product UI examples that match my product rather than generic stock imagery.
- Keep the visual treatment monochrome or low-saturation unless my brand calls for stronger colour.
- Ensure each card communicates its idea even if the media fails to load; provide meaningful alternative text and a sensible fallback background.

## Interaction and accessibility
- If cards are clickable, make the entire card a clear link with a visible hover/focus state: a small surface shift, border change, or subtle translate effect is enough.
- Do not make non-interactive cards appear clickable.
- Respect `prefers-reduced-motion`; keep transitions short and disable movement for users who request reduced motion.
- Maintain WCAG AA contrast for all text, provide keyboard-visible focus states, and use semantic headings, lists, and landmark structure.
- Avoid relying on colour alone to distinguish feature types or states.

## Responsive details
- At tablet widths, preserve the editorial rhythm but reduce card heights and internal padding.
- At mobile widths, avoid tiny multi-column screenshots. Let media become a wider, shorter crop below the text, or hide secondary decorative detail while retaining the explanatory content.
- Prevent horizontal overflow and ensure long titles or bullets wrap naturally.

## Never
- Never copy the reference site's logos, product names, brand identity, or exact wording.
- Never reuse the reference's copy, screenshots, interface labels, illustrations, diagrams, or imagery.
- Never reproduce the exact card order, dimensions, visual assets, or distinctive composition one-for-one.
- Never add generic decorative art just to fill empty space.
- Never sacrifice readability or accessibility to preserve an asymmetric layout.
