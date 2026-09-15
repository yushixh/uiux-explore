## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060644-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060616-full.webp
- Component on Kage: https://kage.design/component/mintlify-stats-2

## Before you start
Ask the user what their product is, who uses it, and what their brand personality and visual system are. Then apply the principles below to their product rather than reproducing this reference literally.

## Build a live activity stats strip
Create a slim, full-width statistics section for a modern software website. It should communicate ongoing usage or operational activity at a glance without feeling like a dense analytics dashboard.

### Design language

- **Layout and alignment**
  - Place the section inside a centered content container with a generous maximum width, approximately 1100–1180px, and responsive horizontal padding of 24–32px.
  - Use a thin top and bottom divider spanning the viewport or the section container.
  - On large screens, use a horizontal layout: a strong activity label on the left, followed by a flexible row of metric groups.
  - Each metric group should contain a muted descriptor and a compact value badge. Allow the groups to wrap naturally rather than forcing overflow.
  - On smaller screens, switch to a two-column or stacked arrangement while preserving clear reading order and comfortable vertical spacing.
  - Vertically center all content in the band. Keep the overall component compact, with approximately 48–72px of vertical height depending on the responsive breakpoint.

- **Typography hierarchy**
  - Use the product’s sans-serif typeface, or a clean neutral sans-serif fallback.
  - Set the section label in a medium or semibold weight, around 15–16px, with near-black text.
  - Set metric descriptors in a regular weight at roughly 13–14px, using a soft neutral gray.
  - Set values in a slightly smaller monospace or tabular-number style, around 12–14px, so digits align and feel precise.
  - Keep line height tight but readable; avoid oversized display typography.

- **Colour**
  - Use a warm or cool white background around `#FFFFFF` or `#FCFCFB`.
  - Use primary text around `#171717` and secondary labels around `#737373`.
  - Use very light neutral dividers around `#EAEAEA` or `#EEEEEE`.
  - Give value badges a subtle brand-tinted wash, such as pale mint `#EFFAF6`, with dark desaturated green text around `#287A63`. Adapt this tint to the user’s brand colour rather than assuming green.
  - Keep contrast sufficient for accessibility; the tinted badge is a highlight, not the only way to convey meaning.

- **Borders, badges, and spacing**
  - Use 1px horizontal rules with no heavy card shadow.
  - Style each value as an inline badge with approximately 8–12px horizontal padding and 4–6px vertical padding.
  - Give badges a small radius, around 3–5px, so they feel like data labels rather than pills.
  - Maintain 24–36px of horizontal space between metric groups and 8–12px between a descriptor and its value badge.
  - Use a restrained vertical rhythm: approximately 14–18px between wrapped rows and enough breathing room around the entire strip.

- **Content behavior and interaction**
  - Treat the metrics as live or recently updated values, but do not add distracting animation by default.
  - If the product supports live updates, use a subtle number transition or a quiet “updated” state; avoid flashing, pulsing, or noisy ticker effects.
  - Ensure long labels and large values wrap or reflow gracefully.
  - The stats can remain informational and non-interactive. If a metric links to deeper analytics, show a discreet hover/focus treatment without turning the badges into oversized buttons.
  - Implement semantic markup: use a section with an accessible heading and a list of metric items, with labels associated clearly with their values.

### Responsive behavior

- At desktop widths, keep the activity label visually anchored at the start and distribute the metrics across the remaining space.
- At tablet widths, reduce gaps and allow metrics to wrap to a second line.
- At mobile widths, stack the heading above a compact two-column grid or vertical list. Preserve the tinted value badges and dividers, but avoid horizontal scrolling.

### Never

- Never copy logos, product names, brand marks, or proprietary wording from the reference.
- Never reuse the reference’s exact metric labels, numbers, typography treatment, spacing, or visual proportions as fixed content.
- Never include illustrations, decorative imagery, screenshots, or unrelated graphics.
- Never make the strip visually dominant over the surrounding page.
- Never rely on colour alone to communicate status or meaning.
- Never use excessive pill shapes, gradients, shadows, animated tickers, or dashboard-like clutter.

Build an original version using the user’s product data, brand colours, type scale, and accessibility requirements while preserving the calm, compact, scan-friendly purpose of the component.
