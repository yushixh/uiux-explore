## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106743-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what their brand identity looks like. Then apply the principles below to their product rather than reproducing the reference literally.

## Build a monochrome logo-cloud section
Create a slim, understated logo-cloud section that communicates social proof through a single horizontal row of customer, partner, or integration marks. It should feel like a calm transition between major sections, with the logos visually subordinate to the page’s main message.

### Design language

- **Layout and alignment:** Place the component inside a centered page container with a maximum width around 1040–1160px. Use a shallow horizontal strip, approximately 72–96px tall on desktop, with a single row of logos aligned to a shared vertical centerline. Distribute marks with generous, consistent horizontal gaps rather than forcing every logo into identical boxes. Allow the row to extend beyond the visible container and softly clip or fade at the left and right edges so the strip feels continuous. On smaller screens, use horizontal overflow or a slow marquee, but preserve readable spacing and avoid stacking into a dense grid.
- **Logo treatment:** Render all marks in a neutral monochrome treatment—dark gray at roughly `#5F6168` or `#676970`—with reduced contrast against an off-white background. If source logos are colored, normalize them with grayscale and moderate opacity. Preserve each logo’s aspect ratio and use a controlled height range, roughly 16–22px, so wordmarks and symbols feel balanced without distorting them.
- **Typography hierarchy:** This component may not need a heading. If a label is necessary, use a small uppercase or sentence-case supporting label in a muted sans-serif, around 11–13px with medium weight and slight letter spacing. Do not let supporting text compete with the logos or the next section’s headline.
- **Spacing:** Use approximately 24–32px of horizontal padding inside the strip and 20–28px of vertical padding. Keep at least 28–44px between adjacent logos, adjusting for unusually wide marks. Leave clear separation from the content section below—roughly 64–96px—so the trust signal reads as a distinct, quiet band.
- **Colour:** Use a white or very lightly tinted background around `#FFFFFF` to `#FAFAFB`. Keep any container rules or dividers extremely subtle, around `#ECEDEF` to `#F1F1F3`. Avoid gradients unless they are only used as nearly invisible edge fades. The overall contrast should be intentionally soft.
- **Borders and radius:** Prefer no visible card border or radius if the strip sits directly on the page. If the surrounding design calls for a bounded band, use a 1px border in `#ECEDEF`, a radius between 0 and 8px, and no heavy shadow. Keep the edges crisp and editorial.
- **Interaction:** Logos can be static. If they link to customer or partner pages, make each mark keyboard-focusable and provide a subtle opacity or contrast increase on hover and focus. If using an automatic marquee, pause it on hover and when the user prefers reduced motion; do not make the movement fast enough to impede scanning.
- **Responsive behavior:** On narrow screens, reduce the logo height to around 14–18px and the gap to 24–32px while maintaining generous breathing room. Use a masked overflow row rather than squeezing all marks into tiny columns. Ensure the implementation supports `prefers-reduced-motion: reduce` and remains usable with keyboard navigation.

### Never

- Never copy logos, product names, brand names, or exact customer marks from the reference.
- Never reuse the reference’s copy, layout proportions, or page-specific headline.
- Never include illustrations, decorative imagery, or unrelated visual assets from the reference.
- Never invent recognizable partner branding; use the user’s approved marks or neutral placeholders during development.
- Never make the logo cloud more prominent than the product’s primary content.
