## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060398-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060376-full.webp
- Component on Kage: https://kage.design/component/arc-logo-cloud

# Build a scrolling testimonial logo cloud

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create a version for my product—not a copy of the reference.

## Goal
Create a horizontal social-proof section that presents short customer or press endorsements alongside the names of their publications, companies, or communities. It should feel energetic, editorial, and highly legible while remaining lightweight and responsive.

## Design language

### Layout and alignment
- Make the component a full-width, horizontally clipped band with content arranged in one continuous row.
- Use several testimonial items in sequence. Each item should contain a quoted sentence followed by a bold source name, with generous horizontal gaps between items.
- Let the row extend beyond both viewport edges and hide overflow so the strip feels like a marquee or an excerpt from a larger stream.
- On wide screens, keep the content on one line. On narrow screens, preserve the horizontal flow rather than wrapping individual testimonials; allow users to see a partial next item at the edge.
- Vertically center all text within the band and maintain a consistent baseline between quote and source.
- Consider a slow, unobtrusive auto-scroll, but ensure the component remains readable, pauses or reduces motion when `prefers-reduced-motion` is enabled, and supports touch dragging if interactive.

### Typography hierarchy
- Use a bold, modern sans-serif with slightly tight tracking for both quotes and source names.
- Make quotes prominent but compact: approximately 16–20px on desktop and 14–17px on mobile, with a line height around 1.2.
- Render source names in the same or slightly heavier weight, with clear separation from the quote; do not rely on a tiny caption style.
- Keep quotation marks integrated into the sentence and use sentence case.
- Avoid excessive contrast between quote and source: the source should be immediately scannable but visually subordinate to the statement.

### Colour and texture
- Use a saturated blue-violet or electric indigo as the primary text colour, approximately `#2738B8` to `#3547C8`.
- Use a warm off-white or pale cream content background, approximately `#FFFDEB` or `#FFFBE3`.
- Add a narrow decorative top band with a softly varied blue, violet, and purple texture or gradient, approximately `#4339B8`, `#5D43C7`, and `#283EAE`. Keep it abstract and brand-neutral.
- If a texture is used, make it subtle enough that text contrast remains strong and the component still works with a flat colour fallback.
- Keep the palette limited to one dominant text colour, one light surface, and one decorative accent treatment.

### Borders and shape
- Use thin, wavy horizontal rules above and below the testimonial band rather than conventional straight borders.
- The waves should be small and regular, around 1–3px in amplitude, with the same indigo used for the text.
- Avoid cards, drop shadows, or separate rounded containers; the strip should read as one continuous field.
- If the implementation cannot use an SVG or CSS wave, use a subtle repeating radial-gradient or a compact zigzag/wave pattern as a fallback.

### Spacing and sizing
- Give the main strip approximately 26–34px of vertical padding on desktop and 20–26px on mobile.
- Use generous horizontal item spacing, roughly 48–96px depending on viewport width.
- Keep the decorative top band shallow, around 18–28px high.
- Allow the section to be visually dense horizontally but spacious vertically; the rhythm should come from repeated quotes and separators rather than large empty margins.
- Ensure the band has enough height for the largest text size without clipping ascenders or descenders.

### Interaction and accessibility
- If animated, use a slow linear marquee with duplicated content for a seamless loop; never jump visibly when the sequence repeats.
- Pause on hover and keyboard focus if motion is enabled. Respect `prefers-reduced-motion` by disabling automatic movement.
- Provide accessible text for every testimonial and source. Do not use images as the only representation of a source name.
- If the row is draggable, expose an appropriate cursor and avoid preventing normal page scrolling on touch devices.
- Maintain WCAG-appropriate contrast between text and the cream background.

## Never
- Never reuse logos, publication names, product names, testimonial copy, or brand-specific wording from the reference.
- Never reproduce the reference page’s exact sequence, spacing, texture, typography, or artwork; translate the underlying pattern into the user’s brand.
- Never add illustrations, photographs, or imagery from the reference.
- Never make the text dependent on a logo image; use editable text or the user’s own approved assets.
- Never let the marquee move so quickly that the endorsements cannot be read.
- Never omit the reduced-motion and responsive behavior.
