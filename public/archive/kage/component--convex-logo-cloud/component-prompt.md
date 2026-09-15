## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074851-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074817179-full.webp
- Component on Kage: https://kage.design/component/convex-logo-cloud

# Build a trusted-by logo cloud section

## Before you start
Ask the user what their product is, who it serves, and what brand personality, colours, typography, and customer or partner names are appropriate. Apply the principles below to their product and brand rather than reproducing the reference literally.

Create a horizontal social-proof section that communicates credibility through a curated row of customer, partner, or ecosystem logos.

## Design language

### Layout and alignment
- Use a full-width section with a warm, lightly tinted neutral background, approximately `#F7EEDC` or a colour derived from the user's brand.
- Constrain the content to a wide centered container, approximately `1120–1240px` on desktop.
- Place a small trust label centered above the logo row. The label should be optically centered, not aligned to the page edges.
- Make the label a compact outlined capsule or small rounded rectangle with uppercase text and generous letter spacing.
- Position one horizontal row of approximately 5–8 logo marks beneath the label. Distribute them evenly across the container with flexible gaps rather than hard-coded positions.
- Keep the entire section visually quiet: use generous vertical padding, roughly `56–88px`, with more space between the label and logos than between the logo baseline and the section edges.
- On smaller screens, allow the logo row to wrap into two balanced rows or become a horizontally scrollable strip. Preserve consistent gaps and avoid cramped marks.

### Typography hierarchy
- The trust label should be small, uppercase, and understated: approximately `10–12px`, medium weight, with `0.08–0.14em` letter spacing.
- Use the user's brand typeface for the label and any text-based marks. Do not introduce a decorative display typeface.
- Logos may use their own approved wordmark styling, but keep their overall visual scale comparable so no single mark dominates without a deliberate reason.

### Logo treatment
- Use real, approved customer or partner assets supplied by the user, or neutral text placeholders during prototyping.
- Prefer single-colour or reduced-colour marks so the row feels cohesive. A subtle opacity treatment around `0.8–0.95` is acceptable.
- Normalize logos by visual height, not file dimensions. Aim for a mark height of roughly `24–34px`, allowing wider wordmarks to occupy more horizontal space.
- Preserve each logo's aspect ratio and clear space. Do not force every mark into identical boxes.

### Colour, borders, and radius
- Use a soft warm background such as `#F7EEDC`, with near-black text and marks around `#151515`.
- The label border should be thin, approximately `1px`, in a muted near-black such as `#26221D`.
- Keep the label fill transparent or only slightly lighter/darker than the section background.
- Use a restrained radius of approximately `4–7px` for the label; the logo area itself should not use cards, shadows, or individual containers.
- If the user's brand is colourful, retain the calm composition while adapting the background and mark colour to maintain accessible contrast.

### Interaction and responsive behaviour
- If logos link to customer stories or external sites, make each mark keyboard-focusable with a subtle focus ring and a small opacity or colour shift on hover.
- Do not add loud hover animations, tooltips, carousels, or auto-scrolling. The component should feel stable and editorial.
- On mobile, use a two-row grid or intentional horizontal overflow with touch scrolling; never shrink logos below a legible size.
- Ensure the section has sufficient contrast and visible focus states for keyboard users.

## Content guidance
- Use a short, generic trust label appropriate to the user's product, such as “Trusted by” or “Used by teams at”.
- Select a small set of genuinely relevant customer, partner, or integration marks. Curate for recognition and visual balance rather than filling every available space.

## Never
- Never copy the reference's logos, product names, wording, or exact customer list.
- Never use logos, names, copy, illustrations, or imagery from the reference as placeholders in the final implementation.
- Never present invented customers as real social proof.
- Never add decorative illustrations, hero imagery, gradients, cards, heavy shadows, or unrelated marketing content to this component.
- Never distort, crop, recolour, or remove the clear space from an approved logo asset.
- Never make the logo row so dense that marks become difficult to identify or read.
