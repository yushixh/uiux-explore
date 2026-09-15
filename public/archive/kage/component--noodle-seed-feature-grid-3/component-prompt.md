## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/noodle-seed/892ab390-1bf9-4a7d-a1b3-8cebe5820ba8-1789106718-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/noodle-seed/892ab390-1bf9-4a7d-a1b3-8cebe5820ba8-1789106640138-full.webp
- Component on Kage: https://kage.design/component/noodle-seed-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and visual assets they already use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a dark, high-trust feature section that explains how a product fits into a broader workflow or ecosystem. Combine a concise editorial introduction, a central connection diagram, and a lower feature grid that explains the product journey in practical stages.

## Design language

### Layout and alignment
- Use a near-black page background, approximately `#050505` to `#080808`.
- Constrain the section to a centred max-width of roughly `1120–1180px`, with generous horizontal padding of `32–72px` on desktop.
- Start with a left-aligned headline block. Keep the headline width around `680–760px` so it reads as a confident statement rather than a full-width banner.
- Place a short supporting paragraph below the headline, followed by two understated inline text links. Separate links with generous spacing rather than buttons.
- Below the introduction, create a large ecosystem diagram with three zones:
  1. a compact source/product node on the left,
  2. a visually prominent central system or capability node,
  3. a set of connected destination/integration nodes on the right.
- Use thin horizontal connector lines and a restrained vertical connector to make the relationships legible. The diagram should feel like an architectural systems map, not a decorative illustration.
- Add a compact row of foundational capability pills below the central diagram. Keep their widths balanced and align them to the same grid.
- Divide the next content block from the diagram with a subtle full-width rule, approximately `#242424`.
- In the lower feature grid, use a large left column for the main statement and supporting text, with three narrower columns on the right for sequential benefits or stages. Add subtle vertical dividers between the right-hand columns.
- On smaller screens, stack the diagram nodes into a readable flow, allow connectors to simplify or become vertical, and turn the lower grid into a single-column or two-column layout. Never preserve desktop density at the expense of comprehension.

### Typography hierarchy
- Use a modern neutral sans-serif with clean numerals and a slightly technical feel.
- Main headline: large, light-weight, approximately `48–58px` desktop with `1.02–1.1` line-height; use responsive sizing down to roughly `36–42px` on mobile.
- Supporting copy: `17–19px`, `1.5–1.65` line-height, in a muted grey.
- Link labels and diagram labels: `14–16px`; use medium weight and slightly muted colour.
- Lower feature statement: large and editorial, approximately `44–54px` desktop, with deliberate line breaks controlled by column width rather than hardcoded copy.
- Feature headings: `15–17px`, medium weight, near-white.
- Feature descriptions: `15–16px`, relaxed `1.5` line-height, muted grey.
- Avoid excessive uppercase text. If labels need a technical character, use small uppercase lettering with modest tracking only for short metadata labels.

### Colour
- Background: approximately `#050505`.
- Primary text: warm near-white, approximately `#F2F1EF`.
- Secondary text: `#858585` to `#9A9A9A`.
- Borders, rules, and connector lines: `#242424` to `#303030`.
- Node surfaces: subtly lighter black, approximately `#0A0A0A` or `#0D0D0D`.
- Accent colour: select one brand-specific warm or vivid accent for the central node, small icons, active states, and glow. A restrained amber range such as `#C9823F` or `#E09A55` can work, but adapt it to the user’s brand.
- Keep contrast intentional: accents should guide the eye, not turn the diagram into a neon dashboard.

### Borders, radius, and depth
- Use `1px` borders with low-contrast grey rather than bright outlines.
- Give node cards and capability pills a restrained `12–16px` radius.
- Use larger cards sparingly; avoid excessive shadows.
- The central node may have a soft, localised accent glow with low opacity, plus a layered inset treatment to suggest a system core. Keep it abstract and CSS- or SVG-generated.
- Use generous vertical spacing: roughly `80–120px` between major blocks and `24–40px` between related elements.

### Components and interaction
- Build diagram nodes as reusable cards with an icon slot, label, and optional status or description.
- Use simple line icons or abstract geometric marks that are original to the user’s product; do not rely on branded third-party logos.
- Links should have a subtle colour shift or underline/arrow movement on hover. Keep motion quick and restrained.
- Nodes may gain a faint accent border or glow on hover, while connector lines can brighten to reinforce the relationship.
- Respect `prefers-reduced-motion`; provide a static diagram when motion is disabled.
- Ensure every interactive element has a visible focus state and accessible text. The diagram must remain understandable without animation.

## Content guidance
- Write a clear, product-specific headline about control, continuity, visibility, or coordinated workflow.
- Use the diagram to explain inputs, the product’s central role, connected destinations, and the underlying safeguards or capabilities.
- In the lower grid, describe a three-step progression from an early useful outcome, through continued progress, to completion inside the product. Keep each item concise and benefit-led.
- Use realistic content lengths, but do not reuse wording from the reference.

## Never
- Never use the reference’s logos, product names, brand names, or third-party AI service names.
- Never copy the reference’s exact headline, supporting copy, labels, feature names, or wording.
- Never reproduce the reference’s central chip artwork, iconography, illustrations, or imagery.
- Never make a pixel-for-pixel clone or preserve the exact content arrangement if it does not suit the user’s product.
- Never use decorative imagery where a clear, semantic systems diagram would communicate better.
- Never sacrifice accessibility, responsive behaviour, or legibility to match the reference’s visual density.
