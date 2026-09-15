## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060360-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/notion-com/9e072824-4b09-4216-9cff-06c643793f91-1789060339-full.webp
- Component on Kage: https://kage.design/component/notion-footer

## Before you start
Ask the user what their product is, who it serves, and what visual brand it uses. Then apply the principles below to create an original footer for that product—not a copy of the reference.

## Design a calm, editorial navigation footer
Build a responsive website footer that closes a modern product landing page with strong information architecture and a generous, premium amount of whitespace. The footer should feel editorial and confident rather than promotional or crowded.

### Layout and alignment
- Use a centered, full-width footer container with a generous horizontal gutter: approximately 56–72px on desktop and 24px on mobile.
- On large screens, use a two-part upper area:
  - A left brand panel occupying roughly 30–32% of the width.
  - A right navigation area occupying the remainder, arranged as four evenly spaced vertical link columns.
- Align all navigation column headings and links to the same left edge within each column.
- Place the brand mark or product wordmark at the top of the left panel, then position a short editorial statement or brand principle lower in that panel with a substantial vertical gap. Keep this statement visually distinct from navigation, using a serif or otherwise expressive typeface if it suits the user's brand.
- Add a lower utility row separated from the upper content by generous whitespace rather than a heavy divider. It should contain copyright/legal text on the left or center-left, secondary privacy/cookie links nearby, and a language or region selector aligned to the far right.
- On smaller screens, stack the brand panel and navigation. Turn the columns into a two-column or accordion-based layout depending on the number of links, then stack the utility controls with comfortable spacing.
- Preserve a strong baseline rhythm and avoid making every area touch the edges of the viewport.

### Typography hierarchy
- Use a clean sans-serif for navigation, utility text, and interface controls.
- Make navigation headings small and muted, approximately 14px with medium weight.
- Make navigation links approximately 15–16px, with comfortable 8–12px vertical spacing and a dark, readable colour.
- Render the editorial statement at approximately 17–20px with relaxed line-height around 1.35–1.5. Add a smaller attribution line beneath it in muted text.
- Keep legal and utility text around 13–14px so it remains secondary but legible.
- Use restrained font weights; hierarchy should come from size, colour, spacing, and grouping rather than bold text everywhere.

### Colour and surface
- Prefer a warm white or near-white background, approximately `#FCFCFB` or `#FFFFFF`.
- Use near-black for primary text, approximately `#171717`.
- Use a neutral gray for headings, attribution, legal text, and secondary links, approximately `#737373`.
- Keep the overall palette monochrome unless the user's brand requires a subtle accent.
- If a separator is needed, use a very light gray such as `#EAEAEA`, never a strong rule that dominates the content.

### Borders, radius, and controls
- Keep the footer mostly borderless; rely on whitespace and alignment to define regions.
- Use a subtle 1px border for the language/region selector, approximately `#E5E5E5`.
- Give the selector a pill shape with a radius around 999px, compact horizontal padding, and enough height for comfortable pointer interaction.
- Include a small language or globe icon and a downward chevron inside the selector. The control should look like a quiet utility, not a primary call to action.
- Avoid decorative cards, shadows, gradients, and excessive corner rounding.

### Interaction and accessibility
- Make every navigation item a real link with a clear hover and focus state. A muted link can transition to near-black and optionally receive a subtle underline.
- Give the language selector a visible keyboard focus ring and indicate that it opens a menu.
- Preserve at least 44px of touch target height for compact controls and mobile links.
- Ensure sufficient contrast for all body links and legal text, and support keyboard navigation in logical column order.
- If navigation columns collapse on mobile, use clear disclosure buttons with `aria-expanded` and maintain a predictable reading order.

### Content structure
- Use product-specific, original labels based on the user's information architecture.
- Typical groups might include product, resources, company, and audiences, but rename or remove groups to suit the product.
- Keep each group concise; do not overload the footer with every possible destination.
- Include relevant legal, privacy, copyright, and locale controls in the bottom row.

## Never
- Never reuse the reference product's logo, wordmark, product name, navigation labels, quote, attribution, or exact copy.
- Never copy the reference's branding, content hierarchy verbatim, or distinctive visual assets.
- Never use illustrations, photography, or imagery from the reference.
- Never invent a footer that depends on a specific brand unless the user's product and brand have been provided.
- Never make the footer visually dense, overly decorative, or dominated by a large call-to-action.
