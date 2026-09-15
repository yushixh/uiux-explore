## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060352-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-logo-cloud

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original logo-cloud section for that product rather than reproducing the reference.

## Goal
Build a compact customer-logo cloud that communicates social proof with confidence and restraint. It should feel like a calm transition between major page sections: a short trust statement above a bordered logo field, with a clear hierarchy between larger featured marks and smaller supporting marks.

## Design language

### Layout and alignment
- Use a full-width section with a centered content container, approximately 1080–1120px wide on desktop.
- Place a short eyebrow-style trust statement near the upper-left edge of the container rather than centering it. Keep it visually understated.
- Separate the statement from the logo area with generous vertical whitespace and a thin horizontal divider.
- Put the logos inside a second, lightly bounded panel or row area with a matching thin border. The panel may span the viewport while its contents align to the same inner container.
- Arrange logos in two responsive rows: a prominent first row with fewer, larger marks and a quieter second row with more, smaller marks. Distribute each row evenly using CSS grid or flex with consistent column widths; do not rely on arbitrary absolute positioning.
- Vertically center every logo within its grid cell, and maintain consistent row height so the cloud feels intentional even when marks have different aspect ratios.
- On smaller screens, reduce the number of columns to 2–3, allow natural wrapping, and preserve comfortable horizontal and vertical padding. Avoid horizontal scrolling unless the product specifically calls for it.

### Typography
- Use the product’s sans-serif typeface, or a clean neutral sans-serif fallback.
- Set the trust statement in a medium-weight, approximately 14–15px style with relaxed tracking and a subdued grey. It should read as context, not a headline.
- Do not add a large heading, paragraph, CTA, or competing copy to this component.

### Colour
- Use a near-white background, approximately `#FFFFFF` or `#FCFCFC`.
- Use soft neutral borders around `#E5E7EB` or an equivalent low-contrast grey.
- Render all customer marks as monochrome muted grey, approximately `#969696` to `#A5A5A5`, regardless of their original brand colours. If actual logos are unavailable, use neutral text-based placeholders with varied but tasteful wordmark treatments.
- Keep contrast sufficient for legibility while ensuring the marks remain secondary to the surrounding page content.

### Spacing, borders, and radius
- Use roughly 32–40px of top padding before the trust statement, 24–32px between the statement and divider, and 40–52px of padding inside the logo area.
- Give the outer section generous side padding, around 24px on mobile and 48px or more on desktop.
- Use 1px solid borders with no strong shadow. Prefer square corners or a very subtle 2–4px radius so the strip feels editorial and infrastructure-oriented rather than like a card.
- Keep sufficient breathing room around every mark; do not let logo bounding boxes touch or create visual collisions.

### Logo treatment and interaction
- Use real customer marks only when the implementing product has permission and assets available; otherwise use invented, text-only placeholder marks that match the intended scale and rhythm.
- Normalize logos by constraining them with `max-width` and `max-height`, preserving each mark’s aspect ratio rather than forcing a common width.
- Featured logos can be approximately 120–160px wide; supporting marks can be approximately 90–125px wide, adjusted for the product’s brand system.
- If logos link to customer stories, make the entire logo cell clickable with a subtle hover transition: slightly darken the mark and reveal a gentle background tint. Keep focus states clearly visible for keyboard users.
- If there is no meaningful destination, do not add interaction or misleading hover affordances.
- Build the component accessibly: use meaningful alt text for image logos, an appropriate landmark or section label, and responsive behavior that does not depend on colour alone.

## Never
- Never copy the reference’s logos, product names, wording, exact logo arrangement, or brand-specific assets.
- Never use the reference company names or reproduce its trust statement verbatim.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never introduce bright multicolour marks, heavy shadows, oversized headings, promotional CTAs, or distracting animation unless they are clearly justified by the user’s own brand.
- Never stretch, crop, recolour inconsistently, or overlap logo marks.
