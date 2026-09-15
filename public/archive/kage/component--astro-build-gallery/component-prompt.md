## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073852-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-gallery

## Before you start
Ask what the user's product is, who it is for, and what visual brand it uses. Then apply the principles below to that product rather than reproducing this reference.

## Build a themed gallery section
Create a responsive gallery section for a software product that showcases templates, resources, examples, or other visual items. The section should feel premium, editorial, and easy to scan.

### Design language

- **Overall composition:** Use a deep, nearly black navy background, approximately `#080813` to `#0d0b1d`, with a very subtle vertical or radial tonal shift. Keep the section self-contained and spacious.
- **Container and alignment:** Center the content in a max-width container of roughly `1200–1280px`. Align the eyebrow, heading, description, filter row, and gallery to the same left edge. Add approximately `32px` horizontal padding on desktop and `20px` on mobile.
- **Header hierarchy:** Place a small coloured eyebrow above a large, bold section title. Use an eyebrow around `14–16px`, medium weight, in a warm pink, coral, or product-appropriate accent. Use a title around `32–38px`, tight line-height, and near-white text such as `#f5f3f7`. Follow it with a restrained description around `16px`, `1.5` line-height, and muted lavender-gray such as `#b5b1c0`; keep the copy width around `380–460px`.
- **Filter controls:** Place a horizontal row of rounded category pills below the description with generous separation from the header. Use a selected pill with a light surface such as `#f5f5f2` and dark text, while inactive pills use a subtly lighter translucent dark surface such as `rgba(255,255,255,0.035)` with a faint border and muted text. Use approximately `44px` height, `16–24px` horizontal padding, `999px` radius, and `14–16px` text. Allow horizontal scrolling or wrapping on narrow screens.
- **Section divider:** Add a thin horizontal divider beneath the filter row, approximately `#252334`, before the gallery begins. It should provide structure without becoming visually dominant.
- **Gallery layout:** Use a three-column grid on desktop with two visible rows. Keep cards visually large and image-led, with approximately `16px` gaps. The first row can use a slightly taller aspect ratio than the second, or use consistent card ratios if the content requires it. Collapse to two columns on medium screens and one column on small screens.
- **Preview cards:** Represent each item with a screenshot-like preview, either from user-provided assets or generated abstract UI mockups. Use `overflow: hidden`, a dark border around `#252331`, and a radius around `14–16px`. Preserve the artwork's internal contrast and let each preview have its own visual identity while keeping card dimensions consistent.
- **Depth and continuation:** Fade or mask the lower/right portion of the final gallery row into the background using a gradient overlay from transparent to the section background. Place a centered or slightly lower-centered rounded “browse more” style CTA above the fade. Give it a translucent dark surface, a thin light border, muted-white text, and a simple directional arrow or equivalent icon. The CTA should visibly invite exploration without overpowering the gallery.
- **Interaction:** Make filter pills keyboard accessible and clearly indicate the active state. On hover, preview cards may lift by `2–4px`, brighten their border, or reveal a subtle shadow; keep motion short and restrained. The browse CTA should brighten slightly on hover and show a clear focus ring. If filters are functional, update the gallery without causing layout jumps.
- **Responsive behaviour:** Keep the heading readable and the filter controls usable at all widths. On mobile, reduce the title to roughly `28–32px`, stack the header naturally, use a horizontally scrollable pill row, and ensure previews do not become too short to recognize.

### Content guidance

Use neutral, product-specific labels and original preview content relevant to the user's product. Treat the previews as visual examples, not as dense readable text: hierarchy, contrast, color blocks, charts, cards, and navigation shapes matter more than exact wording.

### Never

- Never copy the reference's logos, product names, brand marks, or recognizable interface content.
- Never reuse the reference's exact category labels or marketing copy.
- Never copy the reference screenshots, illustrations, imagery, or distinctive artwork.
- Never make the component depend on the reference brand or its assets.
- Never sacrifice keyboard access, contrast, responsive layout, or visible focus states for visual similarity.
