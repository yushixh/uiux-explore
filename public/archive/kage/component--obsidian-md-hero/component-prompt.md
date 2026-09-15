## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060832-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-hero

## Before you start
Ask the user what their product does, who it is for, and what visual brand it already has. Then apply the principles below to create an original hero for that product—not a replica of the reference.

## Build this section
Create a full-width, dark product-landing-page hero for a thoughtful software product. The section should combine a sparse navigation bar, a high-impact message, a primary download or signup action, and a large product interface preview beneath it.

### Layout and alignment
- Use a near-black page background, approximately `#101010`, with a wide centered container capped around 1120–1200px.
- Place the navigation in a single horizontal row near the top with generous side padding. Keep the brand area on the left, primary navigation beside it, and utility links/actions on the right.
- Use a two-part hero flow rather than a dense split layout: first a left-aligned text block, then a wide visual preview below it.
- Give the hero substantial vertical breathing room: roughly 110–150px between the navigation and headline, and 64–88px between the calls to action and preview.
- Keep the text block constrained to approximately 650–720px so the headline and supporting copy remain easy to scan.
- Position the product preview as the visual anchor. Use a wide desktop application frame with a smaller mobile frame overlapping its lower-right edge. The overlap should feel intentional and remain contained within the section.
- On smaller screens, stack the navigation carefully, preserve the left alignment, scale the preview to the viewport, and move the mobile frame below or partially over the desktop frame without causing horizontal overflow.

### Typography hierarchy
- Use a clean modern sans-serif with a slightly soft, contemporary feel.
- Set the headline in a bold weight, approximately 60–72px on desktop with a line height around 0.98–1.05. Use a short, benefit-led statement on one or two lines.
- Set supporting copy at approximately 30–38px with a relaxed line height around 1.1–1.2. Keep it visibly secondary but still prominent.
- Navigation and utility text should be compact, around 14–16px, with medium contrast.
- Use near-white for the headline, around `#F2F1F4`; use muted light gray for supporting copy, around `#B8B6BC`.
- Keep the copy editorial and confident. Avoid excessive labels, badges, or decorative eyebrow text unless the product genuinely needs one.

### Colour and controls
- Keep the overall palette quiet: page background around `#101010`, interface surfaces around `#1D1D1F` and `#242426`, dividers around `#363638`, and secondary text around `#A7A5AA`.
- Reserve a saturated accent for the main CTA and meaningful product highlights. A vivid violet such as `#7C3AED` or `#8B45F5` works well, but adapt it to the user’s brand.
- Make the primary CTA a filled rounded rectangle, approximately 270px wide and 60px high on desktop, with high-contrast text and a radius around 7–9px.
- Pair it with a low-emphasis text link for an alternate platform, plan, or path. The secondary action should use the accent colour without a filled background.
- Include visible hover and focus states: slightly brighten or darken the filled button, underline or increase contrast on the text link, and show a clear keyboard focus ring.

### Product preview treatment
- Build an original, believable application mockup rather than using an image. Use a dark window with subtle borders, rounded corners around 8–12px, a sidebar, a main working area, and one distinctive product surface relevant to the user’s product.
- Keep the preview slightly subdued so it supports the message. Use soft contrast, restrained shadows, and only a few accent-coloured details.
- A desktop frame can be approximately 960px wide and 590px tall, with a compact top bar and clearly separated columns. Add a smaller portrait mobile frame, roughly 220px wide, overlapping the lower-right corner.
- Use realistic interface density: navigation rows, tabs, headings, body text, tags, graph nodes, cards, or controls should be legible at a glance but must be invented for the user’s product.
- Add a subtle shadow and 1px border to the frames. Do not make the mockup brighter than the headline and CTA.

### Spacing, borders, and motion
- Use an 8px spacing system with larger section gaps at 48px, 64px, 96px, and 128px.
- Keep navigation items evenly spaced and vertically centered. Avoid heavy separators in the page chrome.
- Use thin, low-contrast borders and modest corner radii throughout; this is a calm, premium interface rather than a bubbly dashboard.
- If motion is added, use gentle opacity and translate transitions for the preview or CTA only. Respect `prefers-reduced-motion` and do not use distracting parallax.

### Accessibility and implementation
- Use semantic header, nav, main, and button/link elements.
- Ensure the headline has a clear H1, all interactive controls have accessible names, and the mockup is either meaningfully described or marked decorative.
- Maintain WCAG-compliant contrast, visible focus states, responsive behavior, and no clipped content at narrow widths.

## Never
- Never copy the reference’s logo, product name, navigation labels, headline, supporting copy, or interface text.
- Never use the reference’s branded imagery, screenshots, illustrations, graph treatment, or mobile content.
- Never reproduce the exact layout proportions or mockup contents; reinterpret the design language for the user’s product and brand.
- Never add stock imagery, decorative illustrations, or invented branding when a clear product interface preview will communicate the idea better.
