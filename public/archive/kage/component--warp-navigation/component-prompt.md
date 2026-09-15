## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060388-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-navigation

## Before you start
Ask me what my product is, who it is for, and what brand personality, colours, typography, and navigation destinations I want to use. Then apply the principles below to create a version for my product—not a copy of the reference.

## Design goal
Build a compact desktop-first website header for a technical SaaS or developer product. Make it feel precise, confident, slightly retro-computing, and highly functional. Use a single horizontal row with a small product mark at the far left, primary navigation in the middle-left, secondary utility actions on the right, and one dark primary CTA at the far right.

## Layout and alignment
- Use a white header approximately 64px tall, with a maximum content width around 1120–1200px and centered horizontal alignment.
- Keep the header content on one baseline and vertically center every item.
- Place a small square product mark on the left, followed by generous separation before the primary links.
- Group primary navigation links together with consistent gaps of roughly 24–28px.
- Push utility actions to the right using flexible space rather than manually offsetting individual items.
- Put a compact icon-plus-label utility item first on the right, followed by text links, then the primary CTA.
- Keep horizontal padding around 24px on desktop and reduce it to 16px on smaller screens.
- On mobile, collapse or replace the link groups with a menu control while preserving the CTA if space allows.
- Add a subtle technical background detail directly below the header: a very faint dotted grid or square grid spanning the viewport, with a short fade into the page background. It must remain decorative and never reduce text contrast.

## Typography hierarchy
- Use a crisp monospace or technical sans-serif for navigation labels to create a developer-tool character.
- Primary links should be small, approximately 12–13px, medium weight, with modest letter spacing.
- Utility links can use the same size and weight but slightly lower visual emphasis.
- The CTA should use compact 12–13px semibold text with a little tracking and sentence case or lowercase styling, depending on the product brand.
- Avoid oversized branding or a wordmark that competes with the links.

## Colour
- Header background: near-white, approximately `#FFFFFF` or `#FCFCFC`.
- Main text: almost-black charcoal, approximately `#17151D`.
- Secondary text: muted charcoal, approximately `#4F4C56`.
- Primary CTA: deep ink purple/black, approximately `#191622`, with white text around `#FFFFFF`.
- CTA hover: slightly lighter purple-black, around `#2A2535`.
- Bottom grid: extremely subtle cool gray, approximately `#E8E8EC`, at low opacity.
- Keep the palette restrained; use colour contrast and spacing rather than decorative accents to establish hierarchy.

## Borders, shape, and surface treatment
- Use a thin, understated bottom divider around `#E8E7EB`, or let the grid begin immediately below the header with no heavy rule.
- Give the CTA a compact rectangular shape with a small radius, around 1–3px; avoid pill styling.
- Keep the product mark square or softly rounded with a thin dark outline and simple internal geometry.
- Avoid shadows, gradients, glass effects, and excessive border treatments.

## Interaction
- Navigation links should have a clear hover state, such as a darker text colour, a subtle underline, or a small opacity shift; keep it quiet and fast.
- The CTA should darken or lift slightly on hover and show a visible focus ring for keyboard users.
- Utility icons should align optically with their labels and expose an accessible tooltip or label when needed.
- If a navigation item opens a menu, use a small caret and provide a clear active or expanded state.
- Ensure all links and controls have comfortable keyboard focus states and touch targets of at least 40px where practical.

## Content structure
Use realistic placeholder labels that match the user's product and brand after asking the initial questions. Typical groups are:
- Product or brand mark
- Primary destinations such as Products, Solutions, Resources, Enterprise, and Pricing
- A developer/community utility link with a small icon
- A secondary conversion link such as Book a demo
- One primary conversion CTA such as Get started

## Never
- Never copy the reference's logo, product name, exact labels, or exact wording.
- Never reuse the reference's illustrations, imagery, icon artwork, or distinctive brand assets.
- Never assume the user's product is Warp or use Warp-specific copy.
- Never make the header visually noisy, oversized, pill-shaped, gradient-heavy, or dependent on decorative imagery.
- Never sacrifice semantic HTML, responsive behaviour, accessibility, or keyboard navigation for visual similarity.
