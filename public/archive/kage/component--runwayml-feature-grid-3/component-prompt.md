## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074882-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074862354-full.webp
- Component on Kage: https://kage.design/component/runwayml-feature-grid-3

## Before you start
Ask the user what their product is, what kinds of updates or features this section should promote, and what their brand voice and visual identity are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build an editorial feature grid
Create a spacious “latest updates” section for a modern software, creative, or technology product. It should feel like a curated editorial feed rather than a dense dashboard: image-led stories, strong headlines, short descriptions, and a quiet text link for each item.

### Content structure
- Start with one left-aligned section heading such as “Latest updates” or “What’s new.” Keep it short and specific to the user’s product.
- Follow with four feature items arranged as a two-column grid on desktop.
- Each grid item is a horizontal story row: a compact visual thumbnail on the left and a text block on the right.
- Each text block contains a multi-line headline, a short two-to-three-line summary, and a “Read more”/“Learn more” style link with a small right-pointing chevron.
- Use realistic, product-specific copy supplied or approved by the user. Do not use placeholder lorem ipsum.
- Keep headline lengths varied but reserve enough height so the grid maintains a composed rhythm. Descriptions should be informative but subordinate.

### Layout and alignment
- Use a centered content container with a maximum width around 1080–1200px and generous horizontal padding, approximately 7–8vw on large screens.
- Place the section heading above the grid with approximately 48–64px of separation.
- Use two equal grid columns with a broad 56–72px horizontal gap and 64–88px vertical row gap.
- Within each story, use a thumbnail width around 265–285px and a flexible text column; align the text to the top of the image.
- Keep all headlines and body copy left aligned. Align the action link beneath the summary, with enough breathing room to feel like a separate action.
- On medium screens, reduce thumbnail width and grid gaps while preserving the image/text relationship.
- On small screens, switch to one column. Stack the thumbnail above the text, or retain a compact horizontal row only if the viewport comfortably supports it. Ensure every story has clear separation and no cramped wrapping.
- Keep the section visually independent from the surrounding page with whitespace rather than a heavy container or card treatment.

### Typography hierarchy
- Use a contemporary sans-serif with a neutral, slightly editorial character; prefer the product’s existing typeface when available.
- Section heading: approximately 36–42px, line-height 0.98–1.08, medium or regular weight, with subtle negative tracking around -0.03em.
- Story headlines: approximately 23–27px, line-height 0.95–1.02, regular or medium weight, with tight tracking. Let them wrap naturally rather than truncating.
- Summaries: approximately 14–16px, line-height 1.15–1.3, regular weight, with reduced contrast.
- Links: approximately 14px, line-height 1, medium weight. Pair the label with a simple chevron and keep the link visually restrained.
- Use consistent text widths so long headlines do not overwhelm adjacent stories.

### Colour and surface
- Use a warm or neutral near-white page background, approximately #FAFAF8 or #FFFFFF.
- Use a very dark charcoal for headings, approximately #303030–#383838, rather than pure black.
- Use a softer grey for summaries, approximately #6F6F6F–#777777.
- Keep links close to the heading colour, around #252525, with a subtle hover shift toward black.
- Thumbnail visuals may use abstract, softly blurred, atmospheric gradients or product-specific imagery chosen by the user. Aim for muted blue, teal, olive, sand, charcoal, or warm amber tones rather than loud saturated colours.
- If the surrounding page has a dark footer or adjacent dark section, preserve a clean, high-contrast transition without adding a decorative divider.

### Images, borders, and radius
- Give every thumbnail a consistent aspect ratio around 1.65:1, such as 264×140px, and use `object-fit: cover`.
- Use a restrained radius around 7–9px; keep it consistent across all thumbnails.
- Avoid visible borders around the stories. If needed for accessibility or separation, use a very subtle neutral border such as #E8E8E5 at 1px.
- Do not place the text inside a card background. The open layout and whitespace are the primary framing device.
- Provide meaningful alt text for every image and preserve a sensible placeholder treatment when imagery is unavailable.

### Interaction and accessibility
- Make the entire story or at least the thumbnail, headline, and action link part of one clear link target without creating nested interactive elements.
- On hover, use a small, elegant response: slight image scale such as `transform: scale(1.02)`, a modest opacity or colour change on the link, and a short 180–240ms ease transition.
- Keep the chevron aligned with the link label and animate it by a few pixels on hover if appropriate.
- Provide visible keyboard focus states with a 2px outline or ring in a high-contrast colour.
- Respect reduced-motion preferences and disable transform animations when requested.
- Ensure the component works with screen readers, has logical heading structure, and maintains readable contrast.

### Never
- Never copy the reference site’s logos, product names, brand marks, headlines, summaries, or exact copy.
- Never reuse the reference site’s illustrations, thumbnails, imagery, or distinctive visual assets.
- Never assume the user’s product is the same as the reference product; replace all content with the user’s own domain and brand voice.
- Never make the grid feel like a crowded card dashboard, add unnecessary badges, or use heavy shadows and decorative borders.
- Never rely on colour or imagery alone to communicate story meaning.
