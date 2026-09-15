## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060390-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-feature-grid-3

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and type choices are. Then apply the principles below to my product rather than reproducing the reference literally.

## Build this section
Create a responsive feature-grid section for a software product, focused on making a complex capability feel controlled, measurable, and trustworthy. The section should feel like an editorial product showcase with embedded interface panels—not a generic SaaS card grid.

### Structure and layout
- Use a centered content container with a maximum width of roughly 1120–1200px and generous horizontal margins.
- Start with a small technical eyebrow label above a large headline, followed by a concise supporting sentence. Keep this intro left-aligned.
- Place the main feature area inside a large, lightly tinted panel with a thin border. Divide it into an asymmetric grid:
  - A wide upper region containing two adjacent product views: a metrics/chart panel on the left and an activity or work-queue panel on the right.
  - A lower region with descriptive copy on the left and a framed secondary product preview on the right.
- Let the upper panels share a baseline and use a clear vertical divider. Keep the lower copy intentionally sparse so the product preview becomes the visual anchor.
- Add a small status or activity note beneath the secondary preview to suggest live operational feedback.
- On smaller screens, collapse to one column while preserving the hierarchy: intro, primary dashboard, secondary dashboard, then status note. Allow horizontal overflow only inside dense data views, never on the page itself.

### Visual language
- Aim for a technical editorial aesthetic: precise, calm, slightly futuristic, and highly legible.
- Use an off-white page background around `#FAFAFC` with a very subtle dotted or ruled grid pattern in `#E7E7ED`. Keep the main feature panel a pale lavender-gray around `#F3F2FA`.
- Use near-black text around `#17171C`, muted secondary text around `#6C6B76`, and a saturated indigo-violet accent around `#3824D8` for bullets, links, chart lines, and small emphasis.
- Use additional restrained chart colours such as muted olive `#AAA77C` and soft periwinkle `#8A82DD`; keep them low-saturation and functional rather than decorative.
- Apply thin 1px borders in `#D8D7E0`. Use square or very slightly rounded corners, approximately 0–4px; avoid soft, bubbly cards and large shadows.
- Use a modern grotesk or neo-grotesk sans-serif for headings. Use a compact monospace font for eyebrow labels, dashboard labels, metadata, chart legends, and activity rows.
- Establish hierarchy with a large, heavy headline; compact monospace labels; medium-weight feature titles; and small, muted metadata. Keep line-height tight in headings and relaxed in supporting copy.

### Interface details
- Make the dashboard panels feel like believable product UI: include a slim utility/header row, faint separators, compact legends, metric values, chart axes, list rows, status pills, and small circular avatars or indicators.
- Use a stacked area or line chart with a simple axis and legend in the metrics panel. Prioritize the visual rhythm of the chart over realistic data accuracy.
- Use an operational list in the adjacent panel, with each row containing a small accent bullet, truncated task text, compact tags, and a time or status value.
- Frame the secondary preview like a browser or application window with a narrow top chrome bar, then show a simplified form or workflow surface inside it. Keep its content generic and brand-neutral.
- Make links or references in the status note use the accent colour and a subtle underline. Keep controls understated and mostly static unless the product needs interaction.
- If adding interaction, use gentle hover changes: border darkening, a slight background shift, or accent emphasis. Avoid dramatic motion. On mobile, ensure charts and dense rows remain readable and can scroll within their own panel.

### Spacing and alignment
- Use an 8px spacing system. Give the section generous vertical breathing room, approximately 96–144px above and below.
- Keep the intro’s eyebrow, heading, and description aligned to the same left edge as the feature panel.
- Use approximately 20–28px internal padding in dashboard panels and 32–48px in the outer feature panel.
- Maintain consistent row heights, baseline alignment, and divider positions. The precision of the alignment is part of the visual identity.

### Content guidance
- Write original copy for my product. Use a concise governance, observability, workflow, reliability, or control-oriented message appropriate to its audience.
- Show one measurable signal, one active work queue, one explanatory feature statement, and one verification or follow-up status.
- Keep interface labels short and technical, but do not use fake brand names or references to the source design.

### Accessibility and implementation
- Use semantic headings and regions, sufficient contrast, visible keyboard focus states, and descriptive labels for charts and status indicators.
- Treat the chart as decorative only if the same information is available in accessible text.
- Build with reusable components and responsive CSS; do not hard-code the layout to a single screenshot size.

## Never
- Never copy the reference’s logos, product names, brand marks, or trademarked interface labels.
- Never reuse its exact headline, supporting copy, task text, metrics, chart values, or status messages.
- Never copy its illustrations, screenshots, imagery, browser content, or recognizable UI composition pixel-for-pixel.
- Never use decorative imagery when a simple product-generated interface preview will communicate the idea better.
- Never turn the section into a generic equal-card grid, a glossy gradient-heavy SaaS hero, or an over-rounded card layout.
