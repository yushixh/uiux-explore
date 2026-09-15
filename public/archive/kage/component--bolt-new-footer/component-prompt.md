## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073975-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073921-full.webp
- Component on Kage: https://kage.design/component/bolt-new-footer

# Before you start
Ask the user what their product is, who it serves, and what their brand personality and visual identity are. Then apply the principles below to create an original footer for that product rather than reproducing the reference.

## Build this component
Create a full-width dark footer with two distinct zones:

1. A prominent conversion panel at the top, arranged as a two-column row on large screens:
   - Left: a short, confident headline split across two lines and a smaller supporting sentence beneath it.
   - Right: a compact product-action surface resembling an input/composer, with placeholder text, a small utility control, an optional mode or planning control, and a primary action button.
2. A navigation area beneath it:
   - Use four link groups distributed across a wide content container.
   - Keep the first three groups as vertically stacked text links.
   - Use the final group for social/community actions represented by small circular icon buttons.
   - Finish with a very subtle oversized abstract typographic or geometric texture near the bottom edge. It should read as atmosphere, not as content.

## Design language

### Layout and alignment
- Use a nearly black page background around `#0d0d0f` for the upper CTA zone and a deeper black around `#000000` for the navigation zone, with a soft, understated transition between them.
- Center content in a max-width container of approximately `1150–1200px`; use about `64px` horizontal padding on desktop and `24px` on mobile.
- Give the CTA zone generous vertical padding, approximately `48–72px` above and `170–200px` below if it transitions into the navigation area.
- Align the headline and composer vertically near the top of the CTA row rather than centering them mechanically.
- Use a four-column navigation grid on desktop with flexible column widths; give the social column a similar footprint but keep its content narrow.
- On medium screens, allow the CTA columns to compress; on small screens stack the headline above the composer and collapse the navigation into one or two columns.
- Preserve the large empty areas around the content. The footer should feel calm and editorial, not densely packed.

### Typography hierarchy
- Use a modern sans-serif system or brand font with a clean, slightly technical character.
- Set the main CTA heading at roughly `36–40px`, weight `600–700`, line-height around `1.05`, and a modest negative letter-spacing of about `-0.03em`.
- Set supporting copy around `18px`, weight `500`, line-height `1.4`.
- Set navigation links around `16px`, weight `400–500`, line-height near `1.5`.
- Render group labels in an uppercase micro-label style: approximately `10px`, weight `600`, letter-spacing `0.25em`, with muted contrast.
- Avoid oversized body copy or excessive font weights; the headline should be the only strong typographic focal point.

### Colour and surfaces
- Use warm white or cool white text around `#f2f2f3` for the main heading.
- Use muted gray for supporting copy and links, around `#a8a8ad`, with brighter hover states around `#ededee`.
- Use label text around `#737379` and inactive icons around `#8a8a8f`.
- Style the composer as a slightly lighter charcoal surface around `#1d1d20`, with a subtle border around `#303034`.
- Use a restrained blue accent for the primary action, approximately `#2e78aa` or a shade appropriate to the user's brand; keep it softened rather than neon.
- Make the decorative texture low contrast, using gray values around `#1b1b1d` to `#29292c` with a fade into black.

### Borders, radius, and depth
- Give the composer a rounded radius of approximately `22–24px`; use a thin, low-contrast border and a very subtle shadow or inset highlight.
- Use a pill-shaped primary button with a radius of `999px`, compact horizontal padding, and a clear disabled/loading state if the action cannot yet be submitted.
- Make social buttons small circles, approximately `32px` in diameter, with a barely visible charcoal fill; brighten the fill and icon on hover.
- Avoid card-heavy styling in the link area. Let spacing and alignment create hierarchy instead of dividers.

### Interaction and accessibility
- Links should transition smoothly from muted gray to near-white on hover and keyboard focus.
- Social buttons should have visible focus rings and accessible labels; use familiar generic social icons only when they are relevant to the user's product.
- The composer should include a real label or accessible name, sensible placeholder text generated for the user's product, and a clearly identifiable submit action.
- Support keyboard navigation, reduced-motion preferences, and touch targets of at least `44px` where practical.
- On mobile, keep the composer controls legible and allow the action row to wrap without clipping.

### Decorative finish
- Add an oversized abstract wordmark-like texture or geometric pattern anchored low in the footer, but generate it from generic shapes, lines, gradients, or a brand-neutral typographic treatment.
- Apply a vertical mask or gradient so the texture fades into the background and remains subordinate to the navigation.
- Do not let the decoration affect layout, readability, or interaction.

## Responsive behaviour
- Desktop: two-column CTA, four navigation columns, wide negative space.
- Tablet: narrower two-column CTA if it remains comfortable; otherwise stack it, and reduce navigation to two columns.
- Mobile: stack CTA content, use full-width composer and button, arrange links in one or two columns, and scale down or crop the decorative texture.
- Ensure the footer has no horizontal overflow at any viewport width.

## Never
- Never copy the reference's logo, product name, brand name, exact copy, link labels, social identities, or button wording.
- Never reuse the reference's distinctive decorative lettering or artwork; create a new abstract texture suited to the user's brand.
- Never use copied illustrations, imagery, icons, or proprietary assets from the reference.
- Never make the footer visually identical; preserve only the structural and interaction principles.
- Never sacrifice contrast, semantic HTML, keyboard access, or responsive behaviour for visual similarity.
