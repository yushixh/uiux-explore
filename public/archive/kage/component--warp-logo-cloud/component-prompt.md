## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060388-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what brand direction they want to use. Then apply the principles below to create an original trust-building logo-cloud section for that product—not a copy of the reference.

## Build this section
Create a wide, horizontal social-proof band that presents a short credibility statement above or beside a row of customer or partner marks. The section should feel like a quiet transition between major homepage sections: informative, polished, and visually restrained rather than promotional.

### Layout and alignment
- Use a full-width section with a centered inner container and generous horizontal padding, approximately `64px` on desktop and `24px` on mobile.
- Organize the content as a compact label followed by a single horizontally distributed logo row.
- Keep the label aligned with the logo system, preferably left-aligned on desktop; allow a stacked layout on narrow screens.
- Use a fixed-height or minimum-height band of roughly `120–170px`, depending on the surrounding page rhythm.
- Distribute logos evenly with flex or grid, but preserve each mark’s natural aspect ratio. Do not force every logo into identical boxes.
- On small screens, allow horizontal scrolling or a controlled two-row wrap; avoid shrinking logos until they become illegible.

### Background and visual texture
- Use a very light neutral background, approximately `#FAFAF9` or `#FFFFFF`.
- Add an extremely subtle technical grid or ruled texture if it suits the product: thin lines around `#E8E8E5`, spaced roughly `72–96px` apart. Keep the texture low contrast so it supports, rather than competes with, the logos.
- Use a faint top and bottom border, approximately `1px solid #E5E5E2`, when the section needs clearer separation.

### Typography hierarchy
- Set the credibility label in a small, understated sans-serif at approximately `12–14px`, medium weight, with optional letter spacing of `0.04em`.
- Use muted text around `#777773` or `#6F6F6B`; the label should read as context, not a headline.
- Do not add a large title, paragraph, or call to action. The logo marks are the primary content.

### Logo treatment
- Render all marks in a consistent monochrome treatment, ideally dark charcoal around `#3D3D3B`, or use each partner’s approved single-color mark if available.
- Target a visual height of approximately `20–28px`, adjusting by optical weight so light and heavy marks feel balanced.
- Keep generous gaps between marks, approximately `36–72px` on desktop.
- Use real accessible text alternatives for every logo; if a logo is decorative and the company name is already adjacent in accessible text, mark it appropriately.
- If logos are interactive, use a subtle opacity transition from about `0.7` to `1` on hover and provide a visible keyboard focus state. Otherwise, keep them static.

### Borders, radius, and spacing
- Prefer a flat, editorial presentation with no cards and no drop shadows.
- If individual logo containers are necessary for responsive behavior, use transparent backgrounds, a `1px` border near `#E6E6E3`, and a small radius of `6–10px`; do not make the cloud look like a collection of tiles.
- Use approximately `16–24px` between the label and logo row, with `32–48px` vertical padding inside the section.

### Responsive and accessibility behavior
- Preserve sufficient contrast between the marks and background.
- Ensure the section remains understandable when logos fail to load by providing meaningful alt text or text fallbacks.
- On mobile, avoid clipped logos unless the row is clearly scrollable and has an accessible interaction model.
- Respect reduced-motion preferences; any hover or marquee behavior should be disabled or simplified for users who prefer reduced motion.

## Never
- Never copy the reference’s logos, product names, company names, wording, or exact logo order.
- Never use the reference brand’s logo assets, illustrations, imagery, or distinctive proprietary artwork.
- Never reproduce the exact grid dimensions, spacing measurements, or page composition as a pixel-for-pixel clone.
- Never invent credibility claims for the user’s product; use placeholders or ask for verified customer information.
- Never make the section visually louder than the surrounding page or turn it into a generic carousel without a clear need.
