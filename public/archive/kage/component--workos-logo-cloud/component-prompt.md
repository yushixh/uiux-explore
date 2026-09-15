## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073890-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workos-com/c1ef5d6b-8620-4482-aad7-47f439cf35f9-1789073860-full.webp
- Component on Kage: https://kage.design/component/workos-logo-cloud

# Customer logo cloud

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create a customer logo section tailored to that product—not a copy of the reference.

Build a polished B2B customer logo cloud that communicates trust through order, consistency, and restraint. The component should feel like a calm proof point between larger sections, with a compact label, a structured grid, and an optional link to explore more customers.

## Design language

### Layout and alignment
- Place the section inside a wide, centered container with generous horizontal margins; cap the content width around 1120–1200px.
- Add a small eyebrow label aligned to the left edge of the grid. Use concise, uppercase wording such as a category label, but write original copy appropriate to the user’s product.
- Below the label, use a dense rectangular grid of equal-sized logo cells. Prefer 6–8 columns on desktop and 2 columns on small screens, with the number of rows determined by the available customer set.
- Keep every cell the same height, roughly 88–100px on desktop, so the cloud reads as a designed system rather than a loose collection of logos.
- Center each customer mark both horizontally and vertically within its cell. Allow different logo aspect ratios, but constrain them to a consistent maximum width and height.
- Add a centered secondary link beneath the grid with a small directional arrow or chevron. Give it enough separation from the grid to feel like an intentional next step.
- On mobile, preserve the grid rhythm with fewer columns, smaller cells, and comfortable side padding. Avoid horizontal scrolling unless the product specifically calls for it.

### Typography hierarchy
- Eyebrow: 11–12px, uppercase, medium weight, generous letter spacing around 0.14–0.18em.
- Logo marks: use the supplied customer assets or neutral text placeholders in a restrained, brand-safe treatment. Do not force every mark into the same typographic style; preserve each mark’s silhouette while normalizing its visual weight.
- Follow-up link: 13–14px, regular or medium weight, with a subtle arrow and a clear hover state.
- Use the product’s existing typeface if available. Otherwise use a clean sans-serif with crisp rendering and slightly generous line height.

### Colour
- Use the product’s own neutral palette where available. As a starting point, use an off-white page background around `#FFFFFF` or `#FCFCFD`.
- Make cells a barely perceptible cool gray, approximately `#FAFAFC` to `#F7F8FB`.
- Separate cells with very light borders around `#F0F1F5` or use a 1px grid divider rather than prominent individual cards.
- Render logos in a muted slate/lavender-gray around `#858BA8` or a brand-appropriate equivalent. Avoid vivid colors so the section remains secondary.
- Use darker muted text around `#72788F` for the eyebrow and link, with a slightly darker hover color around `#3F4660`.

### Borders, radius, and surfaces
- Favor square or very lightly rounded cells, with a radius between `0` and `4px`. The reference treatment is closer to a tiled matrix than a set of floating cards.
- Use subtle 1px borders and avoid shadows, gradients, glass effects, or heavy elevation.
- Ensure adjacent cells align cleanly and do not create doubled or uneven seams. A CSS grid with controlled borders or gap-based tiles both work, provided the result feels precise.
- Keep the surrounding section open and spacious; the grid should be the only strong structural element.

### Interaction and accessibility
- If the “view more” link leads to a customer directory, give it a clear hover and keyboard-focus state without making it visually loud.
- If individual logos are clickable, make the entire tile an accessible link, add a descriptive accessible name, and use a subtle background or border change on hover.
- Preserve sufficient contrast for the eyebrow, link, borders, and logo treatments; muted does not mean unreadable.
- Use real image alt text for meaningful customer marks, and empty alt text only when a neighboring text label already communicates the same information.
- Make the grid responsive and test long names, narrow screens, high zoom, and reduced-motion preferences.

## Content guidance
- Use a varied set of recognizable customer or partner marks relevant to the user’s product, but use only assets the user is authorized to display.
- If real logos are unavailable, use neutral, original text-based placeholders that demonstrate spacing and hierarchy without inventing misleading endorsements.
- Keep the section concise; its job is to reinforce trust, not become a portfolio gallery.

## Never
- Never copy the reference’s logos, customer names, product names, wording, or exact arrangement.
- Never use the WorkOS brand, OpenAI, Anthropic, Cursor, Perplexity, or any other reference logo or name from the source image.
- Never copy proprietary illustrations, imagery, icons, or logo artwork from the reference.
- Never make unsupported claims of customer adoption or endorsement.
- Never use a loud multicolor logo treatment, oversized marks, heavy shadows, or decorative effects that overpower the surrounding page.
- Never treat inaccessible low-contrast logos as acceptable merely because the section is meant to feel subtle.
