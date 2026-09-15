## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073962-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original organization/logo-cloud section for that product—not a copy of the reference.

## Build this section
Create a responsive social-proof logo cloud that presents a short credibility statement above a compact grid of organization cards. The component should feel like a trustworthy directory of customers, partners, or community members rather than a loud marketing banner.

### Layout and alignment
- Place the section on a clean, near-white background with a centered max-width container of roughly 1100–1200px.
- Add a short centered heading above the grid, aligned to the same overall container. Keep the heading visually modest so the organization cards remain the focal point.
- Use a 4-column desktop grid with two rows in the reference-like density; adapt to 2 columns on tablet and 1 column on small screens.
- Each card is a horizontal flex row: compact logo/avatar area on the left, organization name and metadata in the middle, and optional status badge integrated near the name.
- Keep card content vertically centered and consistent across every tile. Allow metadata to truncate gracefully rather than increasing card height.
- Use equal-width cards, small gaps between cards, and generous outer whitespace. On mobile, preserve the same information hierarchy while allowing the grid to stack.

### Typography hierarchy
- Use a modern sans-serif with a neutral, highly legible feel.
- Section heading: approximately 14–16px, medium weight, muted gray, with comfortable line height.
- Organization name: approximately 14–15px, semibold, dark charcoal.
- Metadata: approximately 12–13px, regular weight, low-contrast gray; use separators such as dots sparingly.
- Badge text: approximately 10–11px, semibold, compact, and readable at small sizes.
- Avoid oversized display typography; this component should communicate breadth and credibility through repetition and structure.

### Colour
- Page background: near white, approximately `#FFFFFF` or `#FCFCFB`.
- Card surface: white, approximately `#FFFFFF`.
- Primary text: dark charcoal, approximately `#1F2933`.
- Secondary metadata and heading: cool gray, approximately `#8A9299` to `#A0A7AD`.
- Borders: very pale gray, approximately `#E8EAEC` or `#EEF0F1`.
- Badges should use a dark neutral fill such as `#1F2933` with white or pale-gray text, unless the user's brand calls for a different restrained accent.
- Logo marks may use varied brand colors, but use original placeholder marks or initials for the user's product and do not reproduce third-party marks from the reference.

### Borders, radius, and spacing
- Give each card a 1px subtle border and a small radius around 7–10px.
- Use a very soft shadow only if needed for separation; prefer borders and whitespace over elevation.
- Card height should be compact, approximately 56–64px on desktop.
- Use 12–16px horizontal card padding, with 10–12px internal gaps.
- Logo/avatar containers should be approximately 30–34px square, with a 7–9px radius; keep the mark optically centered.
- Separate the heading from the grid with approximately 28–36px of vertical space. Keep section padding generous, roughly 48–72px vertically depending on the surrounding page.

### Interaction and responsive behaviour
- If cards are clickable, make the entire tile the hit target and provide a subtle hover state: slightly darker border, minimal background tint, or a small elevation change.
- Keep hover motion restrained and fast, around 150–200ms; do not make logos bounce or scale dramatically.
- Add visible keyboard focus styles with a clear outline or brand-colored ring.
- Preserve readable truncation for long names and metadata using ellipsis, while exposing the full value through a title, tooltip, or accessible label when appropriate.
- Use semantic markup: a section with a heading, a list/grid of organization items, alt text or accessible labels for marks, and sufficient color contrast.

### Content model
Use realistic but invented organization names, metadata, and badge categories that fit the user's product. Keep names short enough for the compact cards, vary the badge presence naturally, and make the metadata line feel informative without becoming dense.

## Never
- Never reuse the reference's logos, organization names, product names, badges, copy, or exact metadata.
- Never copy the reference's precise card arrangement, brand marks, or visual assets; derive an original version from the design principles.
- Never add logos or imagery supplied by the reference unless the user independently provides permission and assets.
- Never use decorative illustrations or stock imagery to fill the section.
- Never make the component feel like a noisy logo wall, an oversized hero, or a dense data table.
