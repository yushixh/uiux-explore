## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060820-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-card

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, typography, and desired call to action are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Design language

Create a responsive trust-and-support feature section for a modern consumer product. The section should make users feel that the product is dependable, accessible, and transparent while giving them one clear next step.

### Layout and alignment
- Use a spacious, asymmetric feature-grid composition rather than a conventional equal-column card grid.
- Place a central message block on larger screens, with a prominent heading and one primary CTA.
- Arrange four or more supporting cards around the central block in a loose two-column rhythm, allowing cards to feel staggered vertically. Keep the composition balanced, but avoid making every edge line up.
- Each supporting card should communicate one concrete reassurance or service benefit. Use a compact visual or symbolic area above a small label and concise explanatory copy.
- On mobile, collapse into a single-column flow. Put the central message first, followed by the cards in a logical priority order; preserve generous gaps and avoid overly dense stacking.
- Keep the overall content within a centred max-width container of roughly 1120–1200px, with generous horizontal padding of about 24px on mobile and 64px or more on desktop.

### Typography hierarchy
- Use a contemporary, highly legible sans-serif with a warm, human feel.
- Set the central heading in a heavy weight, approximately 40–52px on desktop and 32–38px on mobile, with tight line-height around 0.95–1.05. Keep it to two or three lines.
- Use card labels as compact, semibold pill-like text or small badges, around 14–16px.
- Use card descriptions at approximately 16–18px with a semibold or medium weight and a comfortable 1.25–1.35 line-height.
- Make the CTA text bold and easy to scan. Avoid long paragraphs; every card should be understandable at a glance.

### Colour
- Use a very light warm background, approximately `#FFFFFF` or `#FAFAF8`.
- Alternate saturated accent cards in a lively coral/red around `#FF4B4B` or `#FF5A52` with dark ink cards around `#102532` or `#122A36`.
- Use white or near-white text on both card colourways, checking contrast carefully.
- For visual accents, use a small set of brand-specific colours with restraint. If the product has no palette, choose one vivid warm accent and one deep blue-black neutral.
- Keep the central message primarily dark ink on the light background so it remains the visual anchor.

### Borders, radius, and depth
- Give cards generously rounded corners, approximately 28–32px on desktop and 24–28px on mobile.
- Use minimal or no visible borders. Separate surfaces through colour contrast and whitespace rather than outlines.
- Avoid heavy shadows; if needed, use a very soft shadow such as `0 6px 20px rgba(16,37,50,0.06)`.
- Make cards feel tactile and editorial, with generous internal padding of about 24–28px.

### Card content and visual treatment
- Reserve the upper portion of each card for a simple product-relevant visual: an abstract interface fragment, icon, badge, document, message bubble, or geometric object. Build it from CSS or neutral placeholders so the visual supports the idea without dominating it.
- Place the small benefit label below or alongside the visual, then the supporting sentence beneath it.
- Vary visual placement slightly between cards while keeping text alignment consistent.
- Ensure the central CTA is visually distinct from secondary card content: use a dark filled pill-shaped button with white text, approximately 16px vertical and 24px horizontal padding, and a 999px radius.
- On hover, cards may lift by 2–4px or subtly brighten, while the CTA can darken or translate by 1px. Keep motion quick and restrained, around 150–220ms, and respect `prefers-reduced-motion`.

### Responsive behaviour and accessibility
- Preserve a clear reading order in the DOM: central heading and CTA, then supporting benefits.
- Never rely on colour alone to distinguish meaning; include visible text and accessible labels.
- Provide keyboard-visible focus styles for the CTA and any interactive cards.
- Maintain at least WCAG AA contrast, comfortable touch targets, and text that remains readable without zooming.
- Keep the grid stable at tablet widths: reduce card size and gaps before allowing awkward overflow.

## Never
- Never use logos, product names, brand marks, or recognisable UI from the reference.
- Never reuse the reference’s exact copy, claims, headings, labels, or CTA wording.
- Never copy the exact card arrangement, illustrations, imagery, device mockups, or icon artwork.
- Never make the result look like a clone of the reference; reinterpret the trust-and-support pattern for the user’s own product and brand.
- Never use decorative visuals that imply unsupported guarantees, financial protection, certifications, or regulated status.
