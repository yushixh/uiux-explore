## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074882-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074862354-full.webp
- Component on Kage: https://kage.design/component/runwayml-logo-cloud

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colour palette, and typography are. Then apply the principles below to create a version for my product—not a copy of the reference.

## Design goal
Build a compact partner-logo cloud section that communicates social proof with editorial restraint. The section should feel like a calm pause between larger, more expressive sections: one short credibility statement followed by a balanced row of organization marks.

## Layout and alignment
- Use a full-width, light background section with a centered content column.
- Keep the content column comfortably narrow, around 720–900px on desktop, while allowing the section itself to span the viewport.
- Place a single sentence above the logos, centered horizontally. The statement should be brief and treated as supporting context, not a headline.
- Arrange approximately 5–7 partner marks in one horizontal row on wide screens. Distribute them with generous, optically even spacing rather than rigid equal-width cards.
- Align the visual centers of all marks even when their source aspect ratios differ. Give each mark a constrained box so one large wordmark does not overpower the others.
- On smaller screens, allow the row to wrap into two or three balanced rows, or use a horizontally scrollable row only if the brand has a strong editorial/utility feel. Avoid cramped logos and avoid card containers.
- Leave generous vertical breathing room above the statement and below the logo row. The component should feel intentionally sparse.

## Typography
- Use the product's own sans-serif or grotesk typeface where available; otherwise use a clean modern sans-serif.
- Supporting statement: approximately 15–17px desktop, 14–16px mobile, regular weight, with a relaxed line-height around 1.4–1.6.
- Use a muted grey for the statement, approximately `#969696` to `#A5A5A5` on a white background.
- Keep the statement on one line at desktop widths when possible, but allow natural wrapping on mobile.
- Do not add a heading, eyebrow, or explanatory paragraph unless the product genuinely needs one.

## Logo treatment
- Render marks in a unified monochrome treatment, preferably near-black or soft charcoal such as `#171717`, while permitting slightly lighter marks for optical balance.
- If source logos are colourful, use grayscale or a single-colour variant so the row reads as one system.
- Preserve each mark's proportions and recognizable silhouette; never stretch or crop logos.
- Set a consistent visual height, roughly 24–50px depending on the mark, with a maximum width around 120–150px.
- Use `object-fit: contain` or equivalent and tune individual marks optically when their intrinsic whitespace makes them appear too small.
- Keep the logos static by default. If they are links, use a subtle opacity transition on hover/focus, for example from `0.72` to `1`, with visible keyboard focus.

## Spacing and sizing
- Desktop section padding: approximately 48–72px top and 56–80px bottom.
- Mobile section padding: approximately 36–48px top and 44–56px bottom.
- Gap between statement and logo row: approximately 24–32px.
- Horizontal logo gap: approximately 44–72px on desktop and 24–36px on mobile.
- Use responsive CSS so the logo scale and gaps reduce smoothly rather than jumping at one breakpoint.

## Surface, borders, and radius
- Prefer a plain white or very pale neutral surface, approximately `#FFFFFF` or `#FAFAF8`.
- Do not place logos in individual bordered cards.
- If the component needs separation from adjacent sections, use whitespace first; a very subtle 1px divider such as `#EEEEEC` is acceptable.
- Avoid visible shadows, gradients, decorative radius, and ornamental containers. If the surrounding product uses rounded section surfaces, use only a subtle radius around 12–20px at the outer section boundary.

## Interaction and accessibility
- Treat the statement as semantic text and the logo row as a list.
- Provide meaningful accessible labels for every logo; do not rely on the image alone.
- If marks link to partner pages, make the entire mark clickable, use descriptive labels, and provide a clear `:focus-visible` outline.
- Ensure sufficient contrast for the statement and marks, and keep the component usable when logos wrap on narrow screens.
- Respect reduced-motion preferences; any hover transition should be short and nonessential.

## Never
- Never copy logos, partner names, product names, wording, or brand marks from the reference.
- Never use the reference site's illustrations, imagery, icons, or decorative assets.
- Never reproduce the exact logo order, spacing measurements, typography, or page composition as a literal clone.
- Never invent recognizable organizations to imitate the reference; use the user's real partners, neutral placeholder marks, or an abstract internal representation.
- Never turn the section into a dense grid of cards, a carousel, or a loud marketing banner unless the user's product requirements explicitly call for it.
