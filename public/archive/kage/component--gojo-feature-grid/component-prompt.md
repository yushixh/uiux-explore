## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106542-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-feature-grid

# Before you start
Ask the user what their product does, who it is for, and what its brand personality and visual identity are. Then adapt the principles below to their product and brand—do not reproduce the reference literally.

## Goal
Build a feature-grid section that communicates consolidation: several separate tools, workflows, or services are replaced by one unified product experience. The section should feel editorial, confident, and easy to scan rather than like a dense comparison table.

## Structure and layout
- Use a spacious, centered content container with a maximum width of roughly 1150–1200px and generous horizontal padding that reduces smoothly on smaller screens.
- Create a two-column desktop layout:
  - Left column: vertically centered headline and supporting paragraph.
  - Right column: a visual comparison diagram.
- Give the left column approximately 42–46% of the available width and the right column the remaining 54–58%.
- On mobile, stack the text above the diagram. Preserve the visual sequence: multiple source cards first, a connector treatment second, and one destination card last.
- Keep the section on a white or near-white background with substantial top and bottom whitespace. It should read as a distinct, self-contained block.

## Comparison diagram
- Arrange five compact source cards in a single row on desktop, with equal widths, consistent gaps, and a shared baseline. These cards represent separate utilities, competitors, workflows, or categories in the user's product domain.
- Each source card should be a quiet outlined tile, approximately 108–115px wide and 100px tall on desktop, with a small symbolic mark or abstract icon near the top and a short label beneath it.
- Below the source row, use a subtle connector: several thin, evenly spaced vertical lines descending toward the destination card. Avoid arrows or overly technical flowchart styling; the connector should feel almost diagrammatic and understated.
- Make the destination card substantially wider than an individual source card and place it directly beneath the connector. Use a very pale tinted surface to establish hierarchy. Center a simple abstract product mark, a bold product/category label, and a one-line supporting descriptor inside it.
- If there are too many source items for one row, allow horizontal wrapping or reduce the number of visible items; never let cards become unreadably narrow.
- On mobile, use a 2–3 column source-card grid and adapt the connector so it remains visually intelligible. The destination card should span the full available width.

## Typography
- Use a modern sans-serif with slightly tight display tracking and a friendly, highly legible text face.
- Set the headline large and bold, approximately 40–44px on desktop, 32–36px on mobile, with a line height around 1.05–1.15. Keep it to one or two lines where possible.
- Set the paragraph around 18–20px with a 1.55–1.65 line height and a muted gray colour. Limit its measure to roughly 430–480px so it remains readable.
- Source-card labels should be compact, around 13–14px, medium weight, and neutral gray.
- The destination label should be 16–18px and semibold; its descriptor should be around 14px and muted.
- Add a small disclaimer or attribution note below the main grid, set in 13–14px gray text with a comfortable line height. Use neutral, factual language relevant to the user's product rather than promotional copy.

## Colour
- Base background: white or warm white, approximately #FFFFFF or #FCFCFD.
- Primary text: near-black, approximately #17181B.
- Supporting text and labels: cool medium gray, approximately #73757B.
- Source-card borders: very light gray, approximately #E1E2E5.
- Destination-card background: an extremely pale brand-tinted lavender, blue, or another colour appropriate to the user's identity; a comparable starting point is #F0F0FF.
- Destination-card border: a slightly darker low-contrast tint, approximately #BFC0D3.
- Use a single restrained accent colour for the abstract destination mark, approximately #4D45B8 as a starting point, then tune it to the brand.
- Keep icon colours and decoration subdued; the hierarchy should come from scale, spacing, and grouping rather than a rainbow palette.

## Borders, radius, and spacing
- Use 1px borders throughout the cards.
- Source cards should have a soft radius around 8–10px; the destination card can use the same radius or a slightly larger 9–12px radius.
- Use a consistent 12–16px internal card padding and approximately 12–14px gaps between source cards.
- Separate the source row and destination card with around 20–24px of connector space.
- Keep at least 64–96px of vertical breathing room around the section on desktop, with slightly reduced but still generous spacing on mobile.
- Avoid shadows or use only an extremely subtle shadow; this component should feel flat, precise, and calm.

## Interaction and accessibility
- If the source cards are clickable, add a restrained hover state: slightly darken the border, raise the surface contrast, and optionally translate the card upward by 1–2px. Do not use dramatic scaling.
- Make the relationship between source cards and the destination card understandable without colour alone. Use labels, alignment, and the connector treatment.
- Provide accessible names for icons and cards, maintain visible keyboard focus rings, and preserve readable contrast for all text.
- Respect reduced-motion preferences and keep transitions short, roughly 150–200ms.

## Implementation guidance
- Build the section from reusable components such as `ComparisonIntro`, `SourceToolCard`, `Connector`, and `UnifiedProductCard`.
- Use CSS Grid for the two-column layout and the source-card row; use responsive breakpoints based on available space rather than device names when practical.
- Use abstract CSS shapes, simple inline SVGs, or neutral placeholder marks for icons. The visual system should remain useful even when the user's product has no app-icon ecosystem.
- Ensure long labels wrap gracefully and the diagram does not overflow its container.

## Never
- Never copy the reference's logos, product names, labels, disclaimer wording, or exact marketing copy.
- Never use the reference's branded mark, app icons, illustrations, or imagery.
- Never imply affiliation, endorsement, or direct replacement of named third-party products unless the user explicitly supplies legally approved content.
- Never recreate the exact pixel dimensions, spacing, colour values, or visual identity; use the principles as a starting point for an original implementation.
- Never turn the section into a crowded feature matrix, noisy flowchart, or decorative hero graphic.
