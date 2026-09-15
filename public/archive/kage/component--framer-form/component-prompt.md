## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060392-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-form

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Design goal
Build a compact dark-mode discovery sidebar for a social, community, marketplace, or content product. The section should support two related tasks: browsing a short list of trending items and quickly following recommended people or accounts. Keep it subordinate to the primary feed while making each row easy to scan and act on.

## Layout and alignment
- Use a narrow sidebar card or stacked sidebar cards, approximately 300–340px wide on desktop.
- Place the section in a two-column desktop layout: a flexible primary feed on the left and the discovery rail on the right. On smaller screens, move the rail below the feed or turn it into horizontally scrollable sections.
- Use two vertically stacked panels with a consistent 16px outer radius and a 1px low-contrast border.
- Give each panel 14–16px internal padding.
- Align section titles and utility links on one baseline: title on the left, a subtle “view all” style action on the right.
- Build rows as compact horizontal flex layouts: thumbnail or avatar on the left, text content in the middle, and an action or metadata area on the right.
- Keep row spacing around 10–14px. Separate the two panels with 14–16px of vertical space.
- Ensure long names and titles truncate gracefully rather than pushing buttons outside the card.

## Typography hierarchy
- Use a neutral system sans-serif or the product’s brand sans-serif.
- Section headings: 13–14px, semibold, with tight line height.
- Utility links: 12–13px, medium weight, muted grey; increase contrast on hover.
- Item titles and account names: 13–14px, medium or semibold, near-white.
- Supporting metadata and handles: 12–13px, regular weight, muted grey.
- Use a compact 1.25–1.35 line height and avoid oversized type; this is a dense utility component.

## Colour and surfaces
- Use a near-black page background around `#0D0D0E`.
- Use slightly lifted card surfaces around `#171718` to `#1C1C1D`.
- Use a subtle border around `#29292B` and very soft dividers around `#242426`.
- Primary text should be an off-white around `#F2F2F2`; secondary text around `#9A9A9F`; tertiary text around `#707075`.
- Use a bright product accent for primary actions, approximately `#4EA1FF` or a brand-appropriate equivalent.
- Follow buttons should use a lighter neutral fill around `#303033` with near-white text; a following state can use a darker, lower-contrast treatment around `#252527` with muted text.
- Do not use colour decoration merely for appearance; reserve the accent for clear interactive emphasis.

## Borders, radius, and imagery
- Use 1px borders with low contrast and no heavy shadows. If elevation is needed, use a very soft black shadow such as `0 8px 24px rgba(0,0,0,.18)`.
- Use 16px radius for panels, 8–10px radius for thumbnails, and fully rounded 999px avatars and pill buttons.
- Use small square or softly rounded thumbnails with a consistent size, approximately 34–40px.
- Use neutral placeholder blocks or generated abstract colour fields for media during implementation. The visual system should work even when thumbnails are unavailable.

## Interaction and states
- Make the entire content row feel discoverable, but keep the explicit action button independently clickable.
- Add subtle hover states: slightly brighter panel or row background, brighter utility link, and a small change in button contrast.
- Follow buttons should show clear pressed, loading, success, and following states without causing the row to jump in width.
- Provide visible keyboard focus rings using the product accent.
- Support touch targets of at least 40px, even when the visual control is compact.
- If the list can grow, show only a deliberate short preview and expose the rest through a secondary action rather than creating an overly tall sidebar.
- Include sensible accessible labels for thumbnails, links, and follow controls; do not rely on colour alone to communicate state.

## Responsive behaviour
- At tablet widths, reduce the rail width only if text remains readable; otherwise place it below the main content.
- At mobile widths, use full-width cards with 14–16px side gutters. Consider a horizontal carousel for trending items and a vertical list for suggested accounts.
- Preserve the title/action alignment and the compact hierarchy at every breakpoint.

## Never
- Never copy the reference’s logos, product names, usernames, item names, exact copy, or brand identifiers.
- Never reuse the reference’s artwork, screenshots, avatars, thumbnails, illustrations, or imagery.
- Never make the section visually dominant over the primary content area.
- Never use dense text without truncation, inaccessible low-contrast labels, or follow buttons that shift position between states.
- Never treat this as a literal recreation; adapt the structure and principles to my product’s brand, content model, and interaction patterns.
