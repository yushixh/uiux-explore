## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074882-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074862354-full.webp
- Component on Kage: https://kage.design/component/runwayml-tabs

## Before you start
Ask what the user's product is, who it is for, and what their brand language, colour palette, and content are. Then apply the principles below to create an original version for that product—not a replica of the reference.

## Build an editorial tabbed feature section
Create a responsive section that lets visitors switch between several product stories, use cases, audiences, or capabilities. The section should feel calm, premium, and content-led: a simple tab row sits above a large bordered panel containing a compact navigation column and a dominant media area.

### Layout and alignment
- Place the component inside a wide page container with generous horizontal margins; use approximately `max-width: 1240px` and center it.
- Build the top-level tabs as a single horizontal row. Each tab is a large text label, distributed across the available width with flexible spacing rather than enclosed in individual pills.
- Connect tab labels with thin horizontal rules or a continuous divider treatment. The active tab should be darker and visually anchored by a dark underline or short active segment; inactive tabs should be lighter and lower contrast.
- Put the tab navigation immediately above the content panel, with a compact gap of roughly `24–32px`.
- Use a large rounded rectangular panel with a very light border. Inside, create a two-column layout: a narrow left navigation rail and a wider right media/content region.
- Keep the left column vertically centered or comfortably padded, while the media frame dominates the panel. A useful desktop ratio is roughly `28% / 72%`.
- On smaller screens, allow the tabs to scroll horizontally without wrapping. Stack the panel content vertically, placing the text navigation above the media, and reduce the panel padding.

### Typography hierarchy
- Use a clean contemporary sans-serif with a neutral, highly legible appearance.
- Make top-level tabs medium-to-semibold and approximately `22–26px` on desktop.
- Make the selected item in the internal navigation around `22–24px`, medium weight, and near-black.
- Make inactive internal items the same size or slightly smaller, using a pale gray so the active choice is immediately legible.
- Keep line-height relaxed—approximately `1.2–1.35`—and avoid excessive supporting copy in this component.

### Spacing
- Give the outer section substantial vertical breathing room, approximately `96–160px` depending on the surrounding page.
- Use `20–32px` between tab labels and `28–40px` of padding inside the main panel.
- Give the internal navigation items `20–28px` vertical separation.
- Keep the media frame inset from the panel edges and use a consistent gap of approximately `40–56px` between the text rail and media.

### Colour and surfaces
- Use a white or near-white page background such as `#FFFFFF` or `#FAFAFA`.
- Use near-black for active text and rules, approximately `#202020` to `#303030`.
- Use soft neutral gray for inactive labels, approximately `#A9A9A9` to `#C5C5C5`.
- Use a subtle panel border around `#E7E7E7`; avoid strong shadows.
- If the product uses media, let the media retain its natural colour and use it as the visual focal point. If no media is available, create an appropriately proportioned neutral media placeholder rather than adding decorative artwork.

### Borders and radius
- Give the main content panel a thin `1px` border and a generous radius around `18–22px`.
- Give the media frame a slightly smaller radius around `10–14px`, with `overflow: hidden` so images or video stay neatly clipped.
- Keep tab rules and active indicators thin and precise, generally `1–2px`.
- Avoid rounded tab pills, heavy shadows, gradients, and ornamental borders.

### Interaction and accessibility
- Tabs must be functional, not decorative: selecting a tab updates the panel content and the internal active item.
- Use semantic tab markup with `role="tablist"`, `role="tab"`, and `role="tabpanel"`, or an equivalent accessible component pattern.
- Support keyboard navigation with visible focus states, arrow-key movement where appropriate, and clear `aria-selected`/`aria-controls` relationships.
- Animate changes subtly: use a short fade or crossfade for media and content, approximately `180–280ms`; do not animate layout aggressively.
- Preserve the active underline and text contrast on hover, focus, and selected states. Respect `prefers-reduced-motion`.
- On mobile, make the horizontal tab list touch-friendly with at least `44px` target height and ensure the selected tab can be scrolled into view.

### Content and implementation guidance
- Use realistic, product-specific labels supplied by the user, with a small set of three to five tabs and two to five items per panel.
- Keep each panel visually consistent even when media aspect ratios differ; use a defined aspect ratio and `object-fit: cover` for images or video.
- Build the component from reusable data so adding or removing tabs does not require duplicating layout code.

## Never
- Never reuse the reference's logos, product names, labels, marketing copy, or exact content.
- Never copy the reference's imagery, video, illustrations, or recognizable visual assets.
- Never reproduce the reference as a pixel-for-pixel clone; adapt the structure and principles to the user's product and brand.
- Never hide important tab content behind inaccessible hover-only interactions.
- Never use heavy gradients, excessive shadows, pill-shaped tabs, or cluttered decorative elements unless the user's brand explicitly requires them.
