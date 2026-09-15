## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067823-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-hero-2

# Before you start

Ask the user what their product does, who it is for, and what their brand identity should feel like. Then apply the principles below to create an original hero and proof section for that product—do not reproduce the reference literally.

## Build this section

Create a dark, editorial landing-page section that begins with an immersive product showcase and transitions into a clear proof-and-benefits area. The composition should feel premium, quiet, private, and technically confident rather than like a conventional SaaS dashboard.

### Layout and alignment

- Use a near-black page background, approximately `#0b0c0d`, with a slightly lighter lower content surface around `#111315`.
- Start with a large media-led hero: place a wide product screenshot, device mockup, or product-relevant visual near the top of the viewport. It should occupy most of the content width while remaining framed by generous dark margins.
- Give the visual a strong horizontal silhouette. If using a device frame, use a restrained laptop or desktop frame with subtle hardware details; if not, use a rounded rectangular media panel with a dark border.
- Keep the hero media visually dominant and let the content begin below it with substantial vertical separation. The transition should feel intentional, like an editorial scroll rather than a standard centered hero.
- Below the media, use a constrained max-width container, approximately `1120–1240px`, with a two-column grid. The left column should be wider—roughly 1.15–1.3 times the right column—and contain the section label, headline, and stacked benefit rows. The right column should contain compact metrics, outcomes, or supporting proof.
- Align all text and dividers to a consistent vertical grid. Do not center every element; use left alignment for the headline, benefit copy, labels, and metrics.
- On small screens, collapse to one column. Keep the visual above the copy, stack proof metrics beneath the benefits, and reduce headline size without losing its deliberate line breaks.

### Typography hierarchy

- Use a clean contemporary sans-serif with strong rendering at large sizes. A grotesk or modern neo-grotesk works well.
- The eyebrow is small, uppercase, letter-spaced, and understated: approximately `11–12px`, medium weight, with a warm accent colour.
- The primary headline should be bold and highly legible, around `52–68px` desktop with a tight line-height of `0.95–1.02`. Use two or three short lines and allow one final word or punctuation mark to carry the accent colour.
- Benefit titles should be compact and semibold, around `15–17px`; supporting descriptions should be `14–16px`, regular weight, with a muted grey and comfortable `1.45–1.6` line-height.
- Proof labels should be uppercase, monospaced or technical-looking, around `10–11px`, with wide tracking and low contrast.
- Proof values should be large, crisp, and numeric—approximately `44–56px`—with a small unit beside them in the accent colour. Keep explanatory text below quiet and concise.

### Spacing and rhythm

- Use an expansive hero area with approximately `64–96px` of top padding and `120–180px` of breathing room between the hero visual and the proof content, depending on viewport height.
- Keep the lower content section airy: approximately `32–48px` between the eyebrow and headline, `52–72px` before the benefit list, and `28–40px` between benefit rows.
- Separate stacked benefits with thin horizontal rules. Use generous internal padding, approximately `24–32px` vertically, so the list feels calm rather than dense.
- Give the metrics grid consistent gaps of `32–52px`, and leave enough empty space around it to preserve the premium tone.

### Colour and surface treatment

- Use near-black for the main background: `#0b0c0d`.
- Use a subtly lighter charcoal for content contrast: `#111315` or `#141618`.
- Use warm off-white for primary text: `#f2f1ee`.
- Use cool muted grey for descriptions and secondary labels: `#85868a` to `#a1a2a4`.
- Use a restrained warm peach, copper, or amber accent—approximately `#e9a477`—for eyebrow text, icons, units, and one small emphasis in the headline.
- Keep contrast purposeful. The accent should appear as a recurring signal, not as a large fill or gradient.

### Borders, radius, and visual details

- Use 1px dividers around `#292b2e` with low opacity. Avoid bright white borders.
- Give the hero media a radius of approximately `18–24px`; if it sits inside a device frame, use a larger outer radius around `24–32px`.
- Use subtle shadows rather than obvious glow: a broad black shadow around the media can help it separate from the page.
- Keep icons minimal and line-based, around `18–20px`, tinted in the warm accent. Use icons only when they clarify each benefit.
- Add very restrained ambient details—such as tiny points, faint grain, or barely visible edge marks—only if they support the brand. They must never compete with the product visual or typography.

### Interaction and responsive behaviour

- If the hero contains a product preview, support a gentle hover treatment such as a slight lift, a minimal brightness change, or a subtle cursor-responsive parallax. Keep it slow and understated.
- Avoid autoplay video unless the product truly benefits from motion; prefer a stable visual with an accessible pause or reduced-motion fallback.
- Make any interactive media or CTA keyboard accessible, with a visible focus ring using the accent colour.
- Respect `prefers-reduced-motion` and remove parallax, scale, and animated ambient details when requested.
- Ensure decorative media has appropriate alt text when informative, or an empty alt attribute when purely decorative.

### Content model

Use product-specific content supplied by the user. The lower section should include:

1. A short positioning eyebrow.
2. A concise, memorable headline expressing the product's strongest promise.
3. Three benefit rows, each with a small icon, a short title, and a two- or three-sentence explanation.
4. A proof area with three or four measurable outcomes, comparisons, or trust signals. Use realistic values only when the user provides them; otherwise use qualitative proof or clearly marked placeholders.
5. One short sentence explaining why the proof matters.

Build the component with semantic HTML, responsive CSS, and reusable data-driven benefit and metric items. Keep the visual and all copy original to the user's product.

## Never

- Never use logos, product names, taglines, statistics, or exact copy from the reference.
- Never reuse the reference's character, illustration, artwork, screenshots, device content, or imagery.
- Never imply that the user's product has performance, privacy, or security claims that the user has not provided.
- Never copy the exact composition, line breaks, measurements, or decorative marks; use the underlying principles to make a distinct design.
- Never turn the hero into a generic centered SaaS banner, a noisy gradient, or a dense dashboard mockup.
- Never sacrifice readability, accessibility, semantic structure, or mobile behaviour for visual similarity.
