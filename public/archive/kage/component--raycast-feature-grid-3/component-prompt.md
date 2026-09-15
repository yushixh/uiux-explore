## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067516-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Component on Kage: https://kage.design/component/raycast-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what their brand looks and sounds like. Then apply the principles below to create an original version for their product—not a copy of the reference.

## Build a dark, tabbed feature-grid section
Create a full-width website section that introduces a collection of product capabilities, integrations, templates, or extensions. The section should feel premium, calm, and highly visual, with a short editorial statement above a responsive three-card grid.

### Layout and alignment
- Use a near-black page background, approximately `#08090B` or `#0A0B0D`.
- Constrain the content to a centered max-width of roughly `1180–1240px`; use generous horizontal gutters, around `32–48px` on desktop.
- Place the intro copy on the left and a compact category tab control on the right on larger screens. Align both along their lower edge; stack them vertically on smaller screens.
- Keep the intro concise: a bright first sentence followed by a muted supporting sentence. Limit the text block to approximately `360–440px` so it remains editorial rather than becoming a paragraph.
- Put the cards in a three-column grid with equal widths and a gap of approximately `24–32px`. On tablet use two columns; on mobile use one column with horizontal scrolling only if the product genuinely benefits from browsing cards side-by-side.
- Give the section substantial vertical breathing room: approximately `96–140px` above the heading area and `48–72px` between the controls and cards.

### Typography hierarchy
- Use a clean modern sans-serif with a slightly tight, polished appearance.
- Intro lead: `18–22px`, medium or semibold, line-height around `1.25`, colour `#F4F5F7`.
- Intro support text: same size or slightly smaller, regular weight, line-height around `1.3`, colour `#6F737C`.
- Tab labels: `13–15px`, medium weight. Active text is near-white; inactive text is muted gray.
- Card title: `16–18px`, medium weight, near-white, placed beside a small icon tile.
- Card description: `16–17px`, regular or medium weight, line-height around `1.45`, near-white or softly tinted white. Keep descriptions to two or three lines where possible.

### Tabs and interaction
- Build a pill-shaped segmented control with a translucent dark background, a subtle inner highlight, and a thin low-contrast border.
- Use rounded corners around `999px`; give the control `6–8px` internal padding.
- The active tab should appear as a smaller raised pill with a soft gray/white gradient or translucent highlight, subtle shadow, and clear contrast. Inactive tabs should remain quiet but readable.
- Make tabs keyboard accessible. Add visible focus styles, hover brightening, and a restrained animated transition around `180–240ms`.
- Switching tabs should update the cards without shifting the surrounding layout unexpectedly. Use a short fade or lift transition, but do not over-animate.

### Card construction
- Use three tall cards with rounded corners around `16–20px`, a thin border such as `rgba(255,255,255,0.10)`, and a very subtle inset highlight at the top edge.
- Give each card its own saturated, atmospheric background—such as deep indigo `#20245B`, cobalt `#123D72`, or emerald `#075A31`—with darker edges and a soft radial glow. Adapt these hues to the user's brand rather than reproducing them exactly.
- Keep a consistent internal padding of approximately `24px`; use a vertical flex layout so the visual area can occupy the remaining height.
- Header row: small rounded-square icon tile on the left, title beside it, and a compact square arrow/action button on the right. Use a translucent tile and a thin border so the icon remains legible against the coloured background.
- Action button: approximately `36–40px` square, rounded `8–10px`, with a subtle translucent fill and a chevron or neutral action glyph. Add hover feedback with a slight lift and brighter border.
- Place the card description below the header with around `28–36px` of separation. Keep it readable against the saturated background.
- Separate the description from the visual area with a faint horizontal divider, approximately `rgba(255,255,255,0.10)`.
- The lower visual should communicate the feature through an abstract, product-neutral interface motif: a diagram, translated text stack, media player, chart, command panel, or other UI fragment. Use CSS, inline SVG, or generated geometric elements rather than relying on external imagery.
- Let visual motifs bleed toward the bottom and sides, with controlled clipping via `overflow: hidden`. They should feel like glimpses into a larger interface, not full screenshots.
- Preserve a consistent card height, around `500–560px` on desktop, while allowing content to reflow naturally on mobile.

### Colour, depth, and surface treatment
- Base background: `#08090B`; primary text: `#F5F6F8`; muted text: `#737780`.
- Use subtle white borders and shadows rather than heavy drop shadows. A suitable shadow is `0 16px 48px rgba(0,0,0,0.22)`.
- Add low-opacity radial gradients behind the card visuals to create depth, but keep the overall page dark and restrained.
- Maintain strong contrast for all text and controls. Do not allow the saturated surfaces or decorative motifs to reduce readability.

### Responsive behaviour
- At widths below roughly `900px`, stack the intro and tabs, then use a two-column card grid if space permits.
- At widths below roughly `640px`, use one column, reduce card padding to `20px`, and preserve a visually substantial card height without forcing text into cramped lines.
- Ensure tab labels remain usable on touch devices; allow horizontal scrolling or wrapping rather than truncating labels.

## Never
- Never use logos, product names, exact copy, illustrations, screenshots, imagery, or icons from the reference.
- Never reproduce the reference's exact card content, colour combinations, layouts, or branding.
- Never make the tabs decorative only; they must represent a usable category or filter interaction.
- Never sacrifice text contrast, keyboard access, responsive behaviour, or reduced-motion preferences for visual similarity.
