## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073776-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-feature-grid-2

## Before you start
Ask what the user's product is, who it is for, and what visual brand system it uses. Then apply the principles below to that product rather than reproducing the reference literally.

## Build a dark workflow feature grid
Create a feature section that explains several related capabilities through a row of visual cards. The section should feel technical, calm, and infrastructure-oriented, with enough visual structure to make abstract workflows understandable at a glance.

### Layout and alignment
- Use a full-width, very dark section with a centered content container, approximately 1200–1320px wide.
- Begin with a bordered introductory band. Place the heading and supporting paragraph on the left, aligned to the same inner gutter as the cards below.
- Keep the intro copy constrained to roughly 560px so the heading remains prominent and the description stays readable.
- Put a small text link or directional action on the far right of the intro band; align it vertically toward the lower half of the header.
- Below the intro, create a horizontally arranged card track with 3–5 equal-width cards. On smaller screens, allow horizontal scrolling or convert the track into a one-column/stacked layout without making cards cramped.
- Let the final card partially disappear beyond the viewport on wide layouts when appropriate, signalling that more capabilities can be explored horizontally.
- Each card has two zones: an upper diagram area and a lower content area. Keep the diagram zone at a consistent height across cards.
- Align all card titles, descriptions, and links to the same left inset. Maintain consistent card widths and gaps.

### Typography hierarchy
- Use a modern sans-serif with a technical, neutral character.
- Set the section heading large and assertive, around 28–32px, medium or semibold weight, with tight line-height.
- Use a 16–18px supporting paragraph with relaxed line-height and muted contrast.
- Card titles should be around 23–26px, medium weight, and clearly brighter than body text.
- Card descriptions should be 15–16px with approximately 1.55 line-height and a subdued grey tone.
- Make secondary links compact and quiet, around 15px, with a small arrow or directional glyph.

### Colour and visual language
- Use an almost-black background around #0D0E10 or #101114.
- Use slightly lighter card surfaces around #141518, with the diagram region subtly darker or indistinguishable from the page background.
- Use borders in a low-contrast charcoal such as #24262A or rgba(255,255,255,0.09).
- Use primary text around #E3E3E5, secondary text around #92949A, and link text around #A7A9AE.
- Render workflow diagrams with thin strokes and small rectangular nodes. Use restrained accent colours—such as green #8BCB63, violet #8464E8, magenta #C04C9B, and blue #6E86D8—to distinguish workflow types without turning the section into a colourful illustration.
- Keep accents localized to diagram lines, node outlines, labels, or small connector arrows. The surrounding UI should remain monochrome.

### Borders, radius, and spacing
- Prefer square or very lightly rounded geometry: use 0–4px radius for the section frame and cards.
- Use 1px borders throughout, with slightly stronger borders at the outer section edges and between header/card zones.
- Give the intro band approximately 40–48px horizontal padding and 32–40px vertical padding.
- Give the diagram area around 28–40px padding and the content area around 28–40px on desktop; reduce these proportionally on mobile.
- Keep 16–24px between the card title, description, and example link. Use a generous gap between the intro and card track.

### Diagram treatment
- Build simple schematic workflow diagrams using HTML/CSS/SVG or the user's preferred rendering method—not decorative stock graphics.
- Show nodes such as inputs, models, gates, outputs, environments, or routers as compact outlined boxes with short generic labels.
- Connect nodes with thin lines, subtle arrowheads, and occasional looped paths. Use small uppercase labels sparingly above or beside paths.
- Keep diagrams centred within their zone and leave ample negative space. Each diagram should communicate a different relationship or process while sharing the same visual grammar.
- Add a quiet hover state: slightly brighten the card border, raise the diagram contrast, and shift the example link or arrow by a few pixels. Respect reduced-motion preferences.

### Responsive and interaction details
- Make the card row keyboard accessible if it scrolls horizontally, with visible focus states.
- Preserve readable card content at narrow widths; never shrink text below comfortable reading sizes.
- Ensure overflow is intentional and does not create accidental page-level horizontal scrolling.
- Use subtle transitions only; avoid dramatic animation or glowing effects.

### Never
- Never use the reference's logos, product names, brand names, or exact copy.
- Never copy the reference diagrams, labels, card titles, or workflow arrangements one-for-one.
- Never use illustrations, stock imagery, or decorative artwork from the reference.
- Never assume the user's product is an AI infrastructure product; adapt the workflow concepts and terminology to the user's actual offering.
- Never sacrifice accessibility, focus visibility, or responsive behaviour for visual similarity.
