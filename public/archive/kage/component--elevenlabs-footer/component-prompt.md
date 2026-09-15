## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060955-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-footer

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and typography are. Then apply the principles below to create a footer tailored to that product rather than reproducing the reference.

## Build this section
Create a minimal, spacious website footer containing several columns of text links. The reference is intentionally understated: it feels like a lower-page navigation area rather than a promotional block.

### Design language
- **Layout and alignment:** Use a full-width footer with a very light, near-white background such as `#fafafa` or `#fbfbfb`. Constrain the content to a centered max-width of roughly `880–1080px`, depending on the product’s page width. Place the link groups in a horizontal grid on desktop, with each column left-aligned and vertically starting on the same baseline. Keep the groups relatively narrow rather than stretching links across the entire viewport. Leave substantial empty space below or around the links so the footer feels calm and deliberate.
- **Columns:** Use three or four link groups based on the user’s information architecture. Do not add arbitrary headings if the product does not need them; the reference works because the links appear as simple, independent navigation lists. Keep related destinations together, with the most important or frequently used links in the first column.
- **Typography hierarchy:** Use a clean sans-serif chosen to match the product brand. Links should be small-to-medium body text, approximately `14–16px`, with a regular weight around `400–500`, a line height around `1.75–1.9`, and strong readability. Avoid large footer headlines, oversized branding, or dense all-caps labels.
- **Spacing:** Use generous horizontal gaps of approximately `64–120px` between columns and vertical gaps of `6–12px` between links. Add enough top padding—roughly `16–32px` in the visible component, or more if this is the complete footer—to preserve the airy composition. On mobile, stack the columns with `28–40px` vertical separation and reduce the horizontal padding to `20–24px`.
- **Colour:** Use near-black text around `#111111` or `#151515` on a white or near-white surface. If secondary links need differentiation, use a muted charcoal such as `#5f5f5f`, but keep contrast accessible. Avoid decorative colour blocks unless they are part of the user’s brand system.
- **Borders and radius:** Prefer no visible border and no card container. If a divider is needed to separate this area from the content above, use a subtle `1px` line around `#e8e8e8`. Do not use rounded cards; this is a page-level navigation region.
- **Interaction:** Links should have a clear hover and keyboard-focus state. A simple colour shift to the brand accent, slight underline, or opacity change is enough. Preserve a visible `2px` focus ring with sufficient contrast. If one link opens a policy or settings menu, show a small downward chevron and make the entire control easy to activate; on mobile, support a clearly discoverable expanded/collapsed state if the columns become accordions.
- **Responsive behaviour:** At smaller widths, transform the desktop grid into a vertical stack or compact accordion. Keep link tap targets at least `40px` high where practical, prevent text from colliding, and maintain the same calm whitespace and left alignment.
- **Accessibility:** Use semantic `<footer>`, `<nav>`, and unordered lists. Give each navigation group an accessible label when headings are visually omitted. Ensure focus order follows the visual order and that muted text still meets contrast requirements.

## Never
- Never copy the reference’s logos, product names, brand-specific copy, exact link labels, or exact content structure.
- Never use illustrations, decorative imagery, or promotional graphics from the reference.
- Never make the footer visually loud with gradients, oversized headings, dense metadata, or unrelated calls to action.
- Never treat the reference as a pixel-perfect layout; adapt the number of columns, links, spacing, and colours to the user’s product and brand.
