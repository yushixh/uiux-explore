## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106663-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106606408-full.webp
- Component on Kage: https://kage.design/component/mastra-factory-hero

## Before you start
Ask the user what their product is, who it is for, and what brand personality, typography, and colour palette they want. Then apply the principles below to create an original hero for that product—do not reproduce the reference literally.

## Build this section
Create a dark, centered product hero for a software, developer, or technical product. The composition should communicate a sense of systems, infrastructure, and depth while keeping the product value proposition immediately readable.

### Layout and alignment
- Use a near-black full-width background, approximately `#080808`, with a minimum hero height of roughly `900px` on desktop and enough top padding to sit comfortably below a navigation bar.
- Keep all primary content in a narrow centered column, approximately `620–760px` wide.
- Place an abstract technical focal point above the text: a central circular node surrounded by several large, thin concentric rings. Center it on the same vertical axis as the text below.
- Let the rings extend beyond the focal area and fade or crop at the edges. Use uneven opacity so the graphic feels atmospheric rather than diagrammatic.
- Under the graphic, stack a small eyebrow, a large two-line headline, a concise supporting paragraph, a row of primary actions, and an understated secondary text link.
- Keep the text block optically centered, not merely mathematically centered. Use generous gaps between the graphic, headline, paragraph, and actions.
- On small screens, scale the orbital graphic down, reduce headline size, allow the headline to wrap naturally, and stack the actions vertically or let them wrap without horizontal overflow.

### Graphic treatment
- Build the orbital motif with CSS borders, pseudo-elements, SVG circles, or canvas; do not rely on a stock image.
- Use 3–5 concentric circles with very thin strokes, approximately `1px`, in cool grey-white tones such as `rgba(235,235,235,0.18)` to `rgba(235,235,235,0.7)`.
- Add a central circular medallion or node with a subtle charcoal gradient from approximately `#3b3b3d` to `#111112`, a faint border, and a soft downward shadow.
- Put a simple abstract mark or geometric symbol inside the node that belongs to the user’s product; keep it monochrome and avoid recognizable third-party logos.
- Add a very subtle vertical or radial glow only if it improves hierarchy. The background should remain predominantly black.

### Typography hierarchy
- Use a modern sans-serif with a clean, slightly technical feel. Use a monospaced or letter-spaced style only for code-like labels or metadata.
- Eyebrow: 16–18px, semibold, near-white `#eeeeee`.
- Headline: 60–72px on desktop, around `1.02` line-height, bold or semibold, near-white `#f2f2f2`; use a maximum width that encourages two balanced lines.
- Supporting copy: 15–17px, `1.55–1.7` line-height, muted grey `#969698`, with a maximum width around `560px`.
- Secondary link: 15–16px, muted grey-white, with a clear hover transition.

### Buttons and interaction
- Provide two adjacent actions beneath the paragraph: one filled or elevated primary button and one dark secondary button with a subtle border or tonal contrast.
- Use pill-like buttons with approximately `999px` radius, 14–16px vertical padding, and 24–30px horizontal padding.
- The primary button may use a restrained light or brand accent fill; the secondary action can use `#202021` with a border around `#303033`.
- If one action represents a command or code snippet, render it in a monospaced font and include a small copy icon. Make the copy interaction accessible, provide an `aria-label`, and give brief visible or screen-reader confirmation after copying.
- Add understated hover states: slight lift or brightness increase, a clearer border, and a fast `150–220ms` transition. Respect `prefers-reduced-motion`.
- If the rings animate, keep the motion extremely slow and subtle—such as a soft opacity pulse or gentle scale shift—and pause or remove it for reduced-motion users.

### Spacing, borders, and responsive behavior
- Use a consistent spacing scale based on 8px, with larger intentional gaps of 32–56px between major blocks.
- Keep borders hairline-thin and low contrast; avoid cards, heavy shadows, or excessive decoration around the text.
- Maintain strong contrast for all text and controls, with visible keyboard focus rings in a light neutral or brand colour.
- Ensure the hero remains visually balanced if the headline wraps to three lines or the supporting copy is longer in the user’s product.
- Keep the focal graphic decorative with `aria-hidden="true"` unless it conveys essential information.

## Never
- Never copy the reference’s logos, product names, brand marks, or exact marketing copy.
- Never reuse recognizable illustrations, icons, imagery, or proprietary symbols from the reference.
- Never hard-code the reference product or its wording; use the user’s product, audience, and brand voice.
- Never make the orbital graphic overpower the headline or reduce the hero to decoration without a clear value proposition.
- Never sacrifice responsive layout, semantic heading structure, keyboard accessibility, or reduced-motion support for visual similarity.
