## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060824-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-footer

## Before you start
Ask the user what their product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create a footer for that product—do not reproduce the reference literally.

## Build a minimal utility footer
Create a single, full-width footer bar intended to sit at the bottom of a modern product website. The component should feel quiet, functional, and carefully aligned rather than promotional.

### Layout and alignment
- Use a full-bleed horizontal container with a very dark near-black background, approximately `#0d0c10`.
- Set a comfortable desktop height around `64–72px`; allow the height to grow naturally on smaller screens.
- Use a centered inner wrapper with a maximum width appropriate to the product, typically `1100–1240px`, and horizontal padding of roughly `56–64px` on desktop.
- Arrange three functional zones on desktop:
  1. A compact locale or region selector aligned to the left.
  2. A single-line group of utility links centered or positioned in the middle.
  3. A copyright or legal statement aligned to the right.
- Keep all three zones vertically centered on the same baseline. Use flex or grid with deliberate column sizing instead of manually positioned elements.
- On narrow screens, let the content wrap into a clean stacked or two-row layout: locale first, links second, legal text last. Preserve consistent left alignment and comfortable vertical spacing.

### Typography
- Use the product’s existing sans-serif font if available; otherwise choose a clean, neutral sans-serif with understated character.
- Use small body text around `14–16px`, with normal or slightly light weight and approximately `1.3` line height.
- Make the legal line and links visually equivalent in hierarchy; do not introduce a large footer heading.
- Use muted light-gray text, approximately `#aaa8ae`, against the dark background. Avoid bright white except for a focused or hovered item.
- Keep link labels concise and evenly spaced. Do not use uppercase styling unless it belongs to the user’s brand.

### Spacing and rhythm
- Give the locale selector and legal text enough breathing room from the viewport edges.
- Use approximately `20–28px` gaps between utility links, adjusting responsively so the group never feels cramped.
- Keep the footer visually sparse: negative space is part of the component’s identity.
- Provide a touch target of at least `40px` in height for interactive items even if the visible text is smaller.

### Colour, borders, and shape
- Use a flat, uninterrupted dark surface with no gradients, imagery, or decorative graphics.
- Avoid visible borders by default. If separation is needed, use a very subtle top border around `#1b1a20`.
- Use small or no corner radius because the footer is a full-width structural band. If the product’s wider system uses contained panels, a radius up to `4px` is acceptable.
- For hover and focus states, transition link text toward a lighter color such as `#f0eef2`; use a clearly visible, accessible focus ring rather than relying on color alone.

### Interaction
- The locale selector should communicate that it opens a menu, using a small chevron or equivalent indicator. The menu should be keyboard accessible, dismissible, and positioned without being clipped by the footer.
- Utility links should have obvious hover, focus, and active states while remaining visually restrained.
- Preserve visible keyboard focus, with a focus outline in a complementary light or accent color and sufficient contrast against the dark surface.
- Keep the footer usable when text is translated or labels become longer; allow wrapping rather than clipping.

### Responsive behaviour
- Desktop: one horizontal row with left, middle, and right alignment.
- Tablet: reduce outer padding and link gaps while retaining the horizontal structure if space permits.
- Mobile: stack or wrap the zones deliberately, never compressing the text to an unreadable size. Ensure links have adequate vertical separation for touch input.

## Never
- Never copy the reference site’s logos, product names, brand identifiers, or exact text.
- Never reuse the reference’s specific navigation labels, copyright wording, typography files, or brand colors as fixed content.
- Never include illustrations, photography, icons, or imagery from the reference.
- Never create a pixel-for-pixel copy; adapt the structure and design principles to the user’s product and brand.
- Never hide focus states, truncate translated labels, or make the locale control inaccessible.
