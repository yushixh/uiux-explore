## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073950-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073879-full.webp
- Component on Kage: https://kage.design/component/render-testimonials

# Build a customer testimonial showcase section

## Before you start
Ask the user what their product is, who it serves, and what their brand personality, colours, typography, and content style are. Then apply the principles below to their product rather than reproducing the reference literally.

Create a responsive testimonial section for a modern software or developer-product website. The section should feel calm, credible, editorial, and highly structured. It should communicate customer trust through one strong quote and a restrained set of customer references.

## Design language

### Layout and alignment
- Use a centered content container with a maximum width of approximately 1040–1120px on desktop.
- Place the component inside a pale, near-white surface with a subtle technical grid treatment: thin horizontal and vertical rules may extend across the section and align to the container edges. Keep the grid quiet and decorative, never more prominent than the content.
- Add generous vertical padding, approximately 72–104px on desktop and 48–64px on mobile.
- Begin with a horizontal customer-mark strip. Arrange 4–6 customer marks in evenly sized columns with consistent gaps. Each mark sits above a fine divider line or within a lightly ruled cell.
- Below the mark strip, place the featured quote in the same container, aligned to the left. Limit the quote to roughly 780–900px so it remains readable and has a deliberate editorial measure.
- Put the author attribution beneath the quote, aligned with its left edge. Keep the composition asymmetrical but balanced through whitespace.
- On small screens, allow the logo/mark row to wrap into two rows or become horizontally scrollable; stack the quote and attribution while preserving clear spacing.

### Typography hierarchy
- Use the product’s brand typeface where available. Otherwise use a clean contemporary sans serif with excellent screen readability.
- Make the quote the visual focal point: approximately 24–30px on desktop, 20–24px on mobile, with a line height around 1.25–1.4 and normal or slightly tight tracking.
- Use a dark charcoal rather than pure black for the quote, around #171717–#242424.
- Keep the quote to 3–5 lines on desktop when possible. Avoid oversized display quotation marks unless they are native to the product’s brand.
- Style the attribution as compact, uppercase or small-label text with modest letter spacing. A monospace or technical label style can work for developer-focused brands, but only if it fits the user’s brand.
- Make the author name and role visually distinct from the quote without adding unnecessary decoration.

### Colour
- Use an off-white or very light neutral background such as #FCFCFB, #FAFAFA, or a brand-appropriate equivalent.
- Use thin rules in a low-contrast grey such as #E2E2DF or #DCDCDC.
- Render customer marks in black, charcoal, or muted grey. Do not allow the marks to become a louder visual element than the quote.
- Use one subtle brand accent for the author label or an active mark, approximately a pale cyan/blue such as #CDECF2, or an equivalent colour from the user’s palette.
- Maintain strong text contrast and ensure the component remains legible in dark mode if the product supports it.

### Borders, grid, and radius
- Use 1px borders and hairline dividers with low contrast.
- Prefer square or very lightly rounded corners, approximately 0–4px, to preserve the precise editorial/technical character.
- Avoid cards with heavy shadows. If a contained quote panel is needed, use a flat surface and a subtle border rather than elevation.
- Ensure grid lines do not interfere with text; interrupt, fade, or hide them behind content when necessary.

### Interaction and behaviour
- If multiple testimonials are available, support discreet previous/next controls, tabs, or auto-rotation, but keep the featured quote stable and readable.
- Clearly indicate the active customer mark with stronger contrast, a small accent, or a slightly heavier underline; keep inactive marks muted.
- Respect `prefers-reduced-motion`; never make the quote difficult to read because of animation.
- If there is no interaction, the row can simply act as a visual index for the featured quote.
- Make all controls keyboard accessible, provide visible focus states, and use accessible labels.

### Content guidance
- Use a specific, outcome-oriented customer quote rather than generic praise.
- Include the speaker’s name, role, and company in a concise attribution.
- Use real customer marks supplied by the user, or neutral text placeholders during development. Preserve consistent visual weight even when marks have different proportions.

## Never
- Never copy the reference site’s logos, customer names, product names, testimonial copy, or exact attribution.
- Never use illustrations, photography, or imagery from the reference.
- Never reproduce the reference’s exact layout measurements, wording, branding, or visual assets; derive a fresh implementation from the design principles.
- Never make the logo row more prominent than the testimonial itself.
- Never sacrifice readability for decorative grid lines, excessive tracking, or animation.
- Never invent endorsements or imply that placeholder customers are real.
