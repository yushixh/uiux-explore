## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073271-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-gallery

## Before you start
Ask what the user's product is, who it is for, and what its brand personality, colour palette, and typography are. Then apply the principles below to create a version for that product rather than reproducing the reference literally.

## Build a template discovery gallery
Create a responsive section for browsing a curated collection of templates, examples, projects, or other visual resources. The section should feel editorial, calm, and highly scannable.

### Layout and alignment
- Use a full-width, very light neutral page background with a centered content container, approximately 1180–1240px wide.
- Place a single horizontal header row above the grid: a strong section heading aligned left, followed by category filter pills and a compact “browse all” action aligned right on large screens.
- On smaller screens, let the filters wrap or become horizontally scrollable; move the browse action below or keep it as the final visible control.
- Use a three-column grid on desktop, two columns on tablet, and one column on narrow mobile screens.
- Keep all preview images at a consistent aspect ratio, around 1.55:1, with metadata directly underneath. Use equal row and column gaps, approximately 22–24px horizontally and 28–34px vertically.
- Each card should contain: a preview frame, an author/avatar row or source indicator, a one-line title, and a compact metrics row. Preserve a clear visual hierarchy between the preview and the metadata.
- Include a final browse or load-more affordance in the grid or immediately beneath it, centered and visually quiet.

### Typography
- Use the product’s UI sans-serif or a similarly clean sans-serif.
- Set the section heading at roughly 22–26px, weight 650–700, with tight letter spacing.
- Use 14–15px regular text for card titles and filter labels; use approximately 12–13px for metrics and secondary metadata.
- Keep titles dark and readable, but avoid oversized promotional typography. Use muted text for counts and supporting information.
- Use numerals and icons consistently so the metrics row reads as lightweight metadata rather than a second headline.

### Colour
- Page background: warm near-white, approximately #FAFAFA or #F9F9F8.
- Primary text: near-black, approximately #171717.
- Secondary text and icons: neutral gray, approximately #737373.
- Filter pills: white or #FCFCFC with a subtle gray border around #E5E5E5; active states may use near-black fill with white text or a very pale brand tint.
- Card preview surfaces can vary according to the content, but keep the surrounding UI neutral and avoid competing accent colours.
- Use colour sparingly; the previews should provide most of the visual variety.

### Borders, radius, and elevation
- Give preview frames a thin border around #E3E3E3 and a medium corner radius of approximately 8–10px.
- Clip preview content to the same radius and use `object-fit: cover` while preserving the intended preview composition.
- Use small circular avatars, approximately 30–34px, with a subtle border where needed.
- Keep cards mostly flat: no heavy shadows. If elevation is needed for hover or controls, use a very soft shadow such as `0 2px 10px rgba(0,0,0,0.06)`.
- Buttons and filter pills should have a radius around 999px for pills, and 8–10px for rectangular browse actions.

### Interaction
- Make each card clickable with a clear hover state: slightly raise the preview, strengthen its border, or reveal a restrained overlay action without obscuring the artwork.
- Make filter pills keyboard accessible and show a visible focus ring. The selected category should have a clear visual state.
- Keep the browse-all control discoverable but understated; it may include a small right-pointing chevron.
- Add lazy loading for preview images and use a neutral skeleton or empty frame while content loads.
- Ensure the entire section remains usable with keyboard navigation, adequate contrast, and touch targets of at least ตร 44px where practical.

### Content behavior
- Use realistic, varied preview thumbnails with consistent cropping and intentional art direction. Do not let titles or metrics create uneven card heights.
- Clamp long titles to one or two lines and keep metadata aligned consistently.
- If there are more items than fit in the initial view, show a clear continuation affordance rather than an abrupt cutoff.

## Never
- Never use logos, product names, copy, illustrations, imagery, avatars, or exact content from the reference.
- Never reproduce the reference grid as a pixel-for-pixel clone.
- Never make every preview use the same visual treatment if the user’s product needs a different content style.
- Never rely on colour alone to communicate the selected filter or interactive state.
- Never use placeholder text that implies the referenced product or service.
