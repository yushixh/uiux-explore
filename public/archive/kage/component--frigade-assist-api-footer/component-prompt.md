## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106746-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-footer

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original footer for that product—not a copy of the reference.

## Design the footer
Build a short, atmospheric footer section that feels like a calm final note at the bottom of a technical or product-led page.

### Layout and alignment
- Use a full-width, very dark section with a compact height relative to the rest of the page; it should feel like a visual closing band, not a large content-heavy footer.
- Keep the main composition centered on the page's vertical axis.
- Add extremely subtle inset vertical guide lines near the left and right edges, with optional additional lines slightly farther in to suggest a framed grid.
- Place a small abstract brand cue or neutral geometric emblem around the horizontal center and slightly above the vertical midpoint. This must be generated for the user's brand, not reproduced from any reference.
- If the product requires footer links or legal text, keep them sparse, low-contrast, and aligned to the same page container; do not let navigation overpower the atmospheric treatment.
- Make the section responsive: reduce or remove the outer guide lines on narrow screens and preserve generous breathing room around the central mark.

### Typography hierarchy
- Use a restrained sans-serif typeface consistent with the user's product.
- Keep any footer utility text small, around 11–13px, with relaxed letter spacing and muted contrast.
- Avoid prominent headings in this component; the visual role is closure and brand presence, not a new call to action.

### Spacing
- Use a wide desktop container, approximately 1120–1240px, with 24px horizontal padding on mobile.
- Provide generous vertical padding, approximately 56–96px on desktop and 40–64px on mobile.
- Keep the central emblem visually isolated with ample empty space around it.
- Use a consistent 8px spacing rhythm for any links, metadata, or legal details.

### Colour and atmosphere
- Start with a near-black charcoal background, approximately `#202024` or a brand-appropriate equivalent.
- Use guide lines in a barely perceptible lighter charcoal, approximately `#2A2A30`, with low opacity.
- Render the central brand cue as a soft tonal shape around `#2A2A2F` to `#34343A`, using low contrast rather than a bright accent.
- If utility text is present, use muted gray around `#77777F`; reserve brighter text around `#B8B8C0` only for essential interaction.
- Avoid gradients unless the user's brand system calls for one; the reference effect should come primarily from tonal contrast and subtle opacity.

### Borders, radius, and surface treatment
- Keep the section edge-to-edge with no visible rounded outer container.
- Use 1px borders or pseudo-element rules for the vertical framing lines, with low opacity.
- If adding a small emblem container, use either no container or a very soft radius between 8px and 16px; avoid cards and heavy elevation.
- Do not introduce shadows that make the footer look like a separate floating panel.

### Interaction
- Any links should use a quiet color transition on hover, becoming modestly brighter without changing layout.
- If the central brand cue is interactive, use only a restrained opacity or transform transition; it should remain secondary.
- Respect reduced-motion preferences and ensure all controls retain accessible focus states, even if those states are more visible than the resting design.

### Implementation guidance
- Prefer CSS pseudo-elements for decorative guide lines and subtle ambient details so the structure remains semantic and easy to adapt.
- Keep decorative elements aria-hidden and ensure the footer still works if all decoration is removed.
- Match the user's existing container width, type scale, and color tokens where available instead of hard-coding the approximations above.

## Never
- Never copy the reference's logo, emblem, or any recognizable brand symbol.
- Never use the reference product name, brand name, URLs, or exact marketing copy.
- Never reuse the reference's illustrations, imagery, assets, or decorative glyphs.
- Never make the footer so low-contrast that essential links, legal information, or keyboard focus states become inaccessible.
- Never treat this as a pixel-perfect recreation; adapt the composition and visual principles to the user's product and brand.
