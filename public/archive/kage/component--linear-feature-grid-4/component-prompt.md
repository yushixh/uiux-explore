## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060208-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060182-full.webp
- Component on Kage: https://kage.design/component/linear-feature-grid-4

## Before you start
Ask the user what their product does, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a dark, editorial feature section that introduces one product capability and supports it with a visually rich row of workflow or interface cards. The section should feel calm, premium, and spacious rather than like a dense dashboard.

## Structure and layout
- Use a near-black full-width background, approximately `#08090A` or `#0A0B0D`.
- Add a very subtle horizontal divider near the top of the section, approximately `#1B1D20` at low opacity.
- Create a two-column introductory row inside a centered max-width container of roughly `1180–1240px`.
- Align the left edge of the section title and the right edge of the supporting copy to the same container grid.
- Make the left column narrow, around `42%` of the content width; make the right column around `58%`.
- Give the intro generous vertical breathing room: approximately `120–150px` above and `150–190px` below on desktop.
- Use a large, two-line heading on the left. On smaller screens, stack the columns and preserve a clear gap between heading and copy.
- Place a horizontally arranged card rail beneath the intro. Let the rail extend wider than the text container and crop at the viewport edges so the first and last cards are only partially visible. This partial reveal should suggest additional content.
- Use three to five cards with consistent widths, roughly `390–430px` on desktop, and a `12–16px` gap. Avoid making the cards fill the entire screen height.
- On mobile, make the rail horizontally scrollable with touch-friendly scrolling, while keeping the first card fully readable and hinting at the next card.

## Typography
- Use a modern neutral sans-serif or the product’s existing font.
- Set the section heading around `46–52px`, with a line height near `0.98–1.05`, medium or semibold weight, and tight tracking around `-0.03em`.
- Set the supporting paragraph around `23–27px`, with `1.25–1.35` line height, normal or book weight, and slightly negative tracking.
- Keep body and utility text noticeably quieter than the heading: use approximately `#A5A7AB` for secondary copy and `#777A80` for muted labels.
- Use a small text link below the paragraph, around `14–16px`, with an understated arrow or directional affordance. It should be visible without competing with the heading.
- Keep card interface text compact and hierarchy-driven: small labels, short activity lines, and one or two stronger values or titles.

## Cards and visual treatment
- Build believable miniature workflow panels rather than generic empty rectangles. Each card may show a task prompt, status line, activity log, progress row, or grouped items appropriate to the user’s product.
- Use a dark card surface slightly lighter than the page, approximately `#111316` to `#15171A`.
- Add a thin, low-contrast border around each card, approximately `#292C31`, with opacity around `60–80%`.
- Use a restrained radius around `10–14px`; avoid excessive glassmorphism or large decorative shadows.
- Include a compact top bar with tiny controls, a contextual label, or a status indicator. Keep these details subtle and aligned.
- Use nested surfaces sparingly, approximately `#191B1F` or `#1D2024`, to separate prompts, issue rows, or activity blocks.
- Use one restrained accent colour derived from the user’s brand for status dots, icons, or highlights. Do not introduce a rainbow palette.
- Let the bottom of the cards fall below the visible fold or crop slightly if that creates the same sense of depth; ensure the visible content still feels intentional.
- Add a very soft fade or tonal darkening at the outer edges of the rail only if needed to integrate the crop with the page background.

## Interaction
- Make the feature link and cards keyboard accessible.
- On hover, cards may lift by `2–4px`, brighten their border slightly, or reveal a subtle accent; keep the motion restrained.
- If the rail is scrollable, support trackpad, touch, mouse drag if appropriate, and visible keyboard focus states.
- Use short transitions around `180–240ms` with an ease-out curve.
- Respect `prefers-reduced-motion` by removing movement and keeping only colour or border changes.

## Responsive behavior
- Below roughly `800px`, stack the heading and description, reduce the heading to around `36–42px`, and reduce the paragraph to around `19–22px`.
- Reduce section padding while retaining generous whitespace.
- Keep cards large enough to read, but allow horizontal scrolling rather than shrinking them into a dense multi-column grid.
- Ensure no text or card content is hidden behind the viewport edge except where the intentional rail crop is used.

## Never
- Never use logos, product names, branded icons, or copy from the reference.
- Never reproduce the exact card contents, interface screens, layout dimensions, or visual assets from the reference.
- Never use illustrations or imagery from the reference.
- Never make the section a literal clone; adapt the composition, content, accent colour, and interface details to the user’s product and brand.
- Never sacrifice readability for the cropped-card effect.
