## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067518-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Component on Kage: https://kage.design/component/raycast-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what brand personality, colour palette, and visual assets they already use. Then apply the principles below to create an original feature showcase for that product—not a copy of the reference.

## Build a dark feature showcase section
Create a responsive website section that introduces several capabilities of a software product while spotlighting one selected capability. The composition should feel premium, calm, and editorial: a text-led column on the left and a large visual or demo panel on the right.

### Layout and alignment
- Use a near-black section background, approximately `#08090B`, with generous vertical padding of `clamp(72px, 11vw, 160px)`.
- Constrain the content to a centered max-width of roughly `1160px–1280px`.
- On desktop, use a two-column grid around `0.85fr 1.15fr`, with a gap of `clamp(48px, 8vw, 112px)`.
- Align both columns near the top, but allow the right media panel to extend vertically beyond the main text block for an asymmetrical, product-marketing feel.
- Keep the left column readable with a max-width of approximately `380px–440px`.
- At widths below `760px`, collapse to one column. Place the media panel beneath the text and reduce the section padding while preserving generous breathing room.

### Typography hierarchy
- Use a clean contemporary sans-serif with crisp rendering and slightly tight tracking.
- Set the main capability statement at approximately `24px–28px`, `font-weight: 600`, and `line-height: 1.35`.
- Present the remaining capabilities as continuation text or adjacent supporting lines at the same size, but lower their emphasis with a muted colour. Use one or two brighter phrases to establish the active capability.
- Add a compact selected-feature label below the main copy. It should combine a small product-specific symbol placeholder and a short title at `13px–14px`, medium weight.
- Add one concise supporting sentence below the label at `14px–16px`, `line-height: 1.5`, using subdued text. Include a subtle text link only if the product needs a secondary action.
- Avoid oversized hero typography; this section should feel like a focused product capability moment.

### Colour and visual treatment
- Use approximately `#08090B` for the background and `#F4F5F7` for primary text.
- Use a muted grey such as `#666A73` for inactive capability text and `#A2A6AE` for supporting copy.
- Use the user's brand accent sparingly for the active label, tiny icon, focus state, or a very subtle highlight. Do not introduce a bright gradient unless it belongs to the user's brand.
- The media panel should be dark and low contrast, using a surface around `#0B0D10` with a faint internal gradient or soft shadow. It should suggest a product screenshot, interactive preview, or abstract interface without requiring real imagery.
- If a thin divider or accent line is used, keep it extremely subtle and short; it should support the composition rather than become decoration.

### Borders, radius, and spacing
- Give the media panel a `1px` border in approximately `rgba(255,255,255,0.12)` and a restrained radius of `10px–14px`.
- Use a soft shadow or inset highlight with very low opacity; preserve the nearly black appearance.
- Keep `24px–32px` between the main copy and the selected-feature label, and `12px–16px` between the label and its description.
- Use consistent internal padding in the media panel, approximately `24px–40px` on desktop and `18px–24px` on mobile.
- Do not crowd the section with cards, pills, or multiple competing borders.

### Interaction and responsive behaviour
- If the capability list is interactive, make each capability keyboard accessible and provide a visible focus ring using the product's accent colour.
- On hover or selection, transition the active text from muted grey to primary text over `180ms–240ms`; do not use dramatic motion.
- The media panel may crossfade or gently translate between previews over `250ms–400ms`, with reduced-motion support that disables movement.
- Ensure the section remains useful without hover, JavaScript, or imagery: show a sensible default capability and readable fallback content.
- Provide meaningful accessible labels for controls and descriptive alternative text for any product preview.

### Content structure
- Use original copy describing the user's own product capabilities. Keep the list scannable and sentence-like rather than turning every capability into a separate card.
- Use a compact feature metadata row beneath the copy for the currently highlighted capability.
- Treat the right side as a visual explanation of the selected capability, not as a generic decorative image.

## Never
- Never use logos, product names, copy, illustrations, screenshots, icons, or imagery from the reference.
- Never reproduce the reference's exact layout, wording, spacing, or visual assets.
- Never assume the user's brand is the reference brand; ask first and adapt the system to the user's product.
- Never rely on low-contrast text that fails accessibility standards.
- Never use a broken-image state as the intended visual treatment.
