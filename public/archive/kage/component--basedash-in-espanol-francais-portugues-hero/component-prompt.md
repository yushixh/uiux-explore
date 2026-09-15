## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106701-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106655341-full.webp
- Component on Kage: https://kage.design/component/basedash-in-espanol-francais-portugues-hero

## Before you start
Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create an original hero section for that product rather than reproducing this reference.

## Build this section
Create a polished desktop-first SaaS homepage hero for a data, operations, or AI product. The section should communicate a precise product promise above the fold, reinforce trust with concise proof points, offer a low-friction primary action and a considered secondary action, then show a large, believable product UI preview beneath it.

### Layout and alignment
- Use a very light warm background, approximately `#FAF8F4`, with a thin full-width header divider around `#DED9D2`.
- Keep the header in a centered container, roughly 1040–1120px wide, with a compact brand area on the left, restrained navigation in the middle, and authentication/actions on the right. On mobile, collapse navigation into a menu and preserve a prominent action.
- Center-align the hero copy in a max-width of about 760–850px. Provide generous top spacing after the header: approximately 52–64px on desktop.
- Use a short, assertive headline on one or two lines, followed by a supporting paragraph constrained to around 680px so it remains easy to scan.
- Place a horizontal row of three compact proof or capability signals beneath the paragraph. Each item should have a small, original line icon or abstract mark, a muted accent colour, and two short lines of uppercase microcopy. On narrow screens, stack or wrap these items cleanly.
- Place two adjacent CTAs below the proof row: a dark filled primary button and a light outlined secondary button. Add a small reassurance line beneath them, such as trial, setup, or cancellation information, adapted to the user’s product.
- Add substantial separation before the product preview. The preview should sit in a centered container around 1100px wide and use a subtle outer shadow.
- Build the preview as a realistic application shell rather than a decorative screenshot: a main analytics/workspace area taking roughly 70–75% of the width and a conversational assistant or detail panel taking the remaining 25–30%.
- Under the preview, include a small centered uppercase eyebrow or customer-scale statement with generous bottom spacing.

### Typography
- Use a modern neutral sans-serif with high legibility. The headline should be approximately 46–52px on desktop, weight 400–500, tight line-height around 1.05–1.12, and slightly negative tracking.
- Supporting copy should be 18–20px with a 1.4–1.5 line-height and a soft charcoal colour around `#5F5B57`.
- Navigation and buttons should be 14–15px; use medium or semibold weight for actions.
- Proof labels and the bottom eyebrow should be monospaced or tightly tracked sans-serif, around 10–11px, uppercase, with letter spacing around 0.12–0.18em.
- Keep application UI text between 12–16px, with clear numeric emphasis for headline metrics.

### Colour and visual tone
- Overall tone: calm, exact, trustworthy, lightly editorial, and enterprise-ready rather than flashy.
- Use near-black for primary text and the primary CTA, approximately `#171615` or `#1B1A18`.
- Use warm off-white surfaces between `#FFFDF9` and `#FAF8F4`.
- Use subdued taupe-grey for secondary text, approximately `#77716B`.
- Use a muted copper/terracotta accent for proof marks and small labels, approximately `#A86F4A`.
- Within the product preview, use restrained chart colours such as orange `#E78B42`, blue `#4B7BE5`, green `#3FA36F`, and pink `#D978B7`; ensure these colours support meaning and remain accessible.
- Use teal or green sparingly for verified/status indicators, around `#328F8A` or `#3D9B78`, and red only for negative deltas.

### Product preview construction
- Give the preview a 1px border around `#D9D5CE`, a 14–16px radius, and a soft shadow such as `0 8px 24px rgba(35,30,25,.08)`.
- Use a thin top bar or workspace toolbar with a section title, a small icon, date-range controls, and a filter/select control.
- Create a dashboard area with: a metric card, a stacked or multi-series chart, and a data table. Include grid lines, labels, small legends, verified states, and realistic but generic values. Keep all content original and appropriate to the user’s product.
- Add a vertical divider before the assistant/detail panel. The panel should have a small header, a coloured user request bubble, a concise generated response, and small source/context chips. Finish with an input field and send button at the bottom.
- Make the preview feel like a working interface through consistent alignment, table rows, controls, hover-ready affordances, and subtle status indicators—not through excessive decoration.
- Ensure the dashboard remains legible at smaller widths. On mobile, either stack the assistant panel below the main workspace or show a carefully cropped/condensed preview while keeping the hero copy and CTAs usable.

### Interaction and accessibility
- Buttons should have visible hover, focus, and pressed states; slightly darken or elevate the primary CTA and tint the outlined button on hover.
- Navigation dropdowns, filters, date controls, and the assistant input should look interactive, with clear focus rings and sensible keyboard order.
- Add `aria-label`s to icon-only controls and maintain WCAG-friendly contrast for all text and controls.
- If the product preview is animated, use restrained transitions for chart loading, status changes, or assistant responses. Respect `prefers-reduced-motion`.

## Never
- Never use the reference’s logo, product name, navigation labels, headline, claims, customer names, metrics, or exact copy.
- Never copy the reference dashboard, chart composition, assistant conversation, UI labels, or data values one-to-one.
- Never reuse recognizable illustrations, icons, imagery, screenshots, or brand marks from the reference.
- Never make unsupported performance, compliance, ranking, or customer-scale claims for the user’s product.
- Never sacrifice responsive layout, accessibility, or readable hierarchy to imitate the screenshot exactly.
