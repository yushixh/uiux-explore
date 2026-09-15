## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060472-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060452-full.webp
- Component on Kage: https://kage.design/component/posthog-logo-cloud

## Before you start
Ask the user what their product is, who it is for, and what their brand identity looks like. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a split-panel social-proof logo cloud
Create a standalone social-proof section that communicates that real customers or recognizable organizations use the product. The focus is on trust, variety, and visual rhythm rather than on a testimonial quote.

### Content structure
- Start with a short, assertive section heading that introduces customer proof.
- Follow it with one sentence explaining why the proof is credible. Keep it conversational and specific to the user's product, but do not overclaim.
- Below the intro, create a large bordered logo-cloud container divided vertically into two equal or near-equal panels.
- Give each panel a small centered label in a shallow header row. The labels should describe two meaningful groups, such as “Growing teams” and “Established organizations,” or another distinction relevant to the product.
- Populate each panel with a varied set of customer marks arranged in an informal but intentional grid. Use different logo widths and occasional rows with two or three marks so the cloud feels curated rather than mechanically tiled.
- Include a compact outlined CTA beneath the container, aligned with the section edge. Use product-specific copy such as “See customer stories” or “Explore examples.”

### Layout and alignment
- Use a wide, centered section with a maximum width around 1100–1280px and responsive horizontal padding of 20–32px.
- Align the heading, supporting sentence, logo container, and CTA to the same outer content edges.
- Keep the intro left-aligned unless the user's brand clearly favors centered editorial layouts.
- Make the logo container wide and shallow-to-medium in height on desktop, with a clear vertical divider. On mobile, stack the panels vertically and replace the divider with a horizontal rule.
- Use a shallow panel header row, approximately 28–36px tall, separated from the logos by a 1px rule.
- Arrange logos with CSS grid or flex-wrap, but control each mark's maximum width and row gap so the composition remains airy. Center marks within their available cells while allowing different visual sizes.
- On smaller screens, reduce the number of columns, preserve generous breathing room, and prevent any logo from overflowing or becoming unreadable.

### Design language
- Use a warm, lightly tinted page background such as `#f1f2ee` or adapt it to the user's brand palette.
- Use an off-white logo container such as `#fbfcf8` to create a subtle raised surface without a heavy shadow.
- Use near-black text such as `#17191c`, with muted supporting text around `#41464b`.
- Use thin neutral borders around `#b9bcb6` and internal rules around `#d3d5cf`.
- Keep the main container radius modest, around 6–10px. Use a small 4–6px radius for the CTA.
- Use a clear sans-serif typeface. Make the heading approximately 32–40px, with a firm weight and tight line height. Set the supporting sentence around 17–20px with a 1.4–1.5 line height. Make panel labels 13–15px, medium or semibold.
- Use a spacing rhythm based on 8px increments: 12–16px between heading and paragraph, 24–36px before the logo cloud, 28–48px internal panel padding, and 20–28px before the CTA.
- Logos should generally retain their original brand colors when the user's product context supports colorful customer marks. If brand consistency is more important, use a restrained monochrome treatment with a small number of accent marks.
- Avoid drop shadows unless the user's existing design system uses them; the visual interest should come from the panel split, varied marks, and restrained color.

### Interaction and accessibility
- If the logos link to customer stories, make each logo a clearly labeled link with an accessible name and a subtle hover treatment such as opacity change, slight color shift, or a 1px accent underline.
- Keep hover effects quiet and avoid movement that disrupts the grid.
- Ensure keyboard focus states are visible around linked logos and the CTA.
- Use real text or accessible labels rather than relying on images alone. Preserve sufficient contrast for headings, labels, borders, and controls.
- If the logo list is long, consider a progressive “View all customers” interaction, but do not hide important proof behind an unexplained carousel.

### Never
- Never reuse logos, product names, customer names, text, labels, or copy from the reference.
- Never reproduce the exact panel categories, logo ordering, proportions, or decorative details.
- Never use the reference's brand identity as the user's brand identity; adapt colors, typography, and tone to the user's product.
- Never include copied illustrations, imagery, or UI assets from the reference.
- Never make unsupported customer or usage claims.
