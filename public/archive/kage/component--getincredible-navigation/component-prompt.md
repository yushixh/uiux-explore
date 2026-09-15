## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/getincredible-com/e2886fef-b68a-4ec0-9c25-0cadbf1e05de-1789067377-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/getincredible-com/e2886fef-b68a-4ec0-9c25-0cadbf1e05de-1789067365-full.webp
- Component on Kage: https://kage.design/component/getincredible-navigation

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, typefaces, and navigation items they want. Then apply the principles below to create an original navigation header for that product rather than reproducing the reference.

## Design direction
Build a minimal desktop-first website header with a quiet, premium feel. The header should establish brand recognition on the left and give the user one obvious primary action on the right.

### Layout and alignment
- Use a full-width white header with a centered content container, approximately 1120–1240px wide.
- Keep the header compact: around 64–80px tall on desktop, with 20–28px horizontal padding.
- Align the brand lockup vertically at the center of the header; place the primary CTA at the far right of the same row.
- Use `display: flex`, `align-items: center`, and `justify-content: space-between` so the two ends remain balanced at different viewport widths.
- Keep the left brand area visually small and precise. If the product needs navigation links, place them between the brand and CTA only when they are necessary; otherwise preserve the intentionally sparse composition.
- On mobile, reduce horizontal padding to roughly 16–20px, allow the brand name to scale down slightly, and keep the CTA usable without wrapping. Hide or collapse secondary links behind an accessible menu if they exist.

### Typography hierarchy
- Use a modern grotesk or geometric sans-serif with a confident, clean appearance.
- The brand wordmark should feel bold and compact, roughly 20–24px with a heavy weight around 700–800 and tight letter spacing.
- CTA text should be short, clear, and semibold or bold at approximately 14–16px.
- Avoid excessive text hierarchy: this header should have one brand label and one primary action, not multiple competing labels.

### Colour
- Header background: warm white or pure white, approximately `#FFFFFF` or `#FCFCFA`.
- Main text and brand mark: near-black, approximately `#080808` to `#111111`.
- Primary CTA: near-black fill, approximately `#090909`.
- CTA text: white, approximately `#FFFFFF`.
- If borders are needed, use a very subtle warm grey such as `#F0EFEC`; do not add strong divider lines unless the product's brand requires them.

### Borders, radius, and shape
- Keep the header itself flat and borderless or use an extremely subtle bottom border.
- Make the CTA a rounded pill with a radius of 9999px.
- Give the CTA approximately 14–18px vertical padding and 20–24px horizontal padding, with enough height for comfortable touch interaction.
- Keep the brand mark and wordmark crisp and simple. Use the user's own icon, monogram, or text treatment; do not fabricate a detailed logo.

### Interaction
- Add a restrained hover state to the CTA, such as a slight lightening to `#242424`, a 1–2px upward translation, or a subtle shadow; avoid exaggerated animation.
- Add `:focus-visible` styling with a clear high-contrast outline, such as a 2px outline in `#111111` with a 3px offset.
- Ensure the CTA has an accessible label and a minimum touch target of about 44px in height.
- If a mobile menu is present, make its open/close state keyboard accessible, expose `aria-expanded`, and keep the transition short and purposeful.

### Responsive and implementation notes
- Preserve the visual balance between the left brand and right action rather than forcing equal-width columns.
- Prevent the CTA text from wrapping.
- Use semantic `<header>` and `<nav>` elements where appropriate, and ensure the header remains legible against the page background.
- Keep the section visually lightweight so the first content block below it can begin close to the header without feeling crowded.

## Never
- Never copy the reference's logo, wordmark, product name, or exact CTA copy.
- Never use the reference brand's specific icon or recreate its distinctive mark.
- Never copy any surrounding page copy, illustrations, imagery, or visual assets.
- Never make the header visually busy with unnecessary links, dropdowns, badges, or decorative effects.
- Never sacrifice keyboard accessibility, contrast, responsive behaviour, or touch-target size for visual similarity.
