## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060673-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060620-full.webp
- Component on Kage: https://kage.design/component/planetscale-chart

## Before you start
Ask what the user's product does, who will use this screen, and what their brand language is. Then apply the principles below to create an original performance-monitoring chart for that product—not a copy of the reference.

## Build this section
Create a technical performance section with a short section heading, an explanatory paragraph, and a large embedded analytics card. The card should feel like a calm, precise observability tool: compact summary metrics at the top, a time-range overview beneath them, a legend, and a detailed multi-series line chart.

### Layout and alignment
- Use a centered content column with a readable maximum width of approximately 1080–1160px.
- Keep the section heading, supporting copy, chart, and any follow-up content aligned to the same left edge.
- Place the chart inside a wide card, approximately 780–900px wide on desktop, with the card allowed to become full-width on smaller screens.
- Organize the card into four horizontal layers:
  1. A six-column metric summary row: metric label, value or range, and a small qualifier.
  2. A compact timeline navigator with day labels, a selected interval, and a separate recent-period capsule.
  3. A legend row with coloured status dots, percentile names, current values, and a timestamp aligned to the far right.
  4. A plotting area with horizontal gridlines, y-axis labels, x-axis time labels, several coloured series, and one prominent event/change marker.
- Use consistent inset padding of about 20–24px inside the card. Give the plot more vertical space than the navigator so the data remains legible.
- On narrow screens, let summary metrics wrap or become a horizontally scrollable row; keep the chart horizontally scrollable rather than compressing labels into illegibility.

### Typography hierarchy
- Use a neutral sans-serif or developer-oriented system font. A restrained monospace face may be used for numerical values, timestamps, or technical labels.
- Section heading: compact, semibold, around 16–18px, with an understated underline or bottom rule if it suits the brand.
- Supporting paragraph: 15–17px, relaxed line height around 1.55, with a muted text colour.
- Metric labels: 12–13px, semibold, dark charcoal; values: 11–13px with strong contrast; qualifiers: 10–11px and muted.
- Axis labels and timeline labels: 10–11px, muted, never heavier than the metric labels.
- Keep numeric formatting consistent and make the selected/important value visually stronger than surrounding metadata.

### Colour
- Base page background: near-white, approximately #FAFAF9 or #FFFFFF.
- Card background: #FFFFFF.
- Primary text: deep charcoal around #202124; secondary text: #6B7075; tertiary axis text: #92979B.
- Borders and gridlines: very light neutral gray around #E5E7E8 and #F0F1F1.
- Use a restrained data palette with clearly distinguishable lines: green around #2F9E44 for p50, blue around #2878B5 for p95, violet around #6842A5 for p99, and muted orange around #C98A72 for an outlier or higher percentile.
- Use translucent fills sparingly, such as a pale violet/blue wash at 8–12% opacity beneath a series, to help show distribution without overpowering the lines.
- Reserve saturated colour for data, selected ranges, links, and event markers—not for decoration.

### Borders, radius, and visual weight
- Use a 1px solid border around the chart card, approximately #E3E5E6.
- Prefer square or gently rounded corners, around 2–6px, rather than a soft consumer-app appearance.
- Separate metric cells with subtle vertical rules; avoid heavy shadows. If elevation is needed, use only a diffuse shadow such as 0 2px 10px rgba(20,25,30,0.04).
- Keep chart strokes thin, approximately 1–1.5px, with a slightly larger dot at key points.
- Make the selected timeline range a crisp outlined rectangle with a pale tinted interior; make the event marker a vertical rule with a small circular or pill-shaped annotation.

### Chart behaviour and interaction
- Render the detailed plot using real responsive chart primitives rather than a static image.
- Show hover or focus states: a vertical guide, tooltip containing the time and all series values, and emphasized points on each series.
- Allow the overview range to be dragged or selected; update the detailed chart range when the selection changes.
- Make metric cells and legend items optionally clickable for toggling or highlighting series, while preserving a visible active state.
- Provide keyboard-focus states and accessible labels for metrics, range controls, legend toggles, and chart events. Do not rely on colour alone to distinguish series; pair colours with labels and, where useful, distinct line styles.
- Preserve a calm default state: no animation on initial load beyond a subtle draw-in, and no excessive motion when changing ranges.

### Content structure
- Use generic, product-appropriate metric names such as request latency, events, throughput, records processed, records changed, and failures; adapt them to the user's domain.
- Include a short explanatory note below the chart describing what changed over the selected period and optionally a text link to deeper benchmarks or reports.
- If adding a testimonial or supporting callout outside the chart, keep it visually separate from the analytics card and use it only when it supports the product story.

## Never
- Never copy the reference's logos, product names, brand marks, or proprietary wording.
- Never reuse the exact chart data, labels, timestamps, values, layout proportions, or copy from the reference.
- Never include illustrations, screenshots, decorative imagery, or background artwork from the reference.
- Never make the chart a non-responsive image when the surrounding product can support interactive data.
- Never use colour, shadows, gradients, or rounded cards as decoration without improving data comprehension.
- Never hide important values behind hover only, and never sacrifice legibility on mobile.
