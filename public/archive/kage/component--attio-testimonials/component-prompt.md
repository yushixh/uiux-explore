## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060461-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-testimonials

# Before you start
Ask the user what their product is, who it serves, and what their brand personality and visual identity are. Then apply the principles below to create a testimonial section tailored to that product and brand—not a replica of any reference.

## Goal
Build a premium customer-testimonial section for a modern software product. It should communicate broad customer trust at the top, let visitors switch between featured customers, and present one substantial customer story with a measurable outcome and supporting visual.

## Design language

### Layout and alignment
- Use a wide, centered content container with generous horizontal gutters; on large screens, target roughly 72–96px side padding and a maximum width around 1200–1280px.
- Structure the section as three connected layers:
  1. An introductory trust block with a small eyebrow, a large two-line statement, and a compact text button.
  2. A full-width customer selector rail divided into equal cells.
  3. A featured story panel split into two equal columns: editorial text on the left and a visual/media area on the right.
- Align the eyebrow, headline, button, and story copy to the same left content edge.
- Keep the introductory block vertically spacious; do not crowd the trust statement against the selector rail.
- On small screens, stack the split story vertically, allow the customer rail to scroll horizontally or become a compact segmented selector, and reduce the outer gutters to approximately 20–24px.
- Keep the section’s overall silhouette calm and rectangular, with no floating cards or excessive decoration.

### Typography hierarchy
- Use a clean contemporary sans-serif with a slightly tight, editorial feel.
- Eyebrow: 12–14px, medium weight, uppercase or sentence case depending on the user’s brand, with restrained tracking.
- Trust headline: approximately 40–56px on desktop, 34–42px on mobile, with tight line-height around 0.98–1.08. Use a darker colour for the primary proof statement and a softer muted colour for the supporting line.
- Story category: 11–13px, uppercase, medium weight, muted gray, with modest letter spacing.
- Story outcome: 28–36px, strong weight, tight line-height; make the metric or concrete result visually prominent.
- Story explanation: 24–32px, regular-to-medium weight, muted gray, with a short readable line length.
- Button text: 13–14px, medium weight.

### Colour
- Start from a light neutral canvas, approximately #FAFAF8 or #FFFFFF, and adapt it to the user’s brand palette.
- Primary text: near-black, approximately #171717 or #1C1C1C.
- Secondary text: cool muted gray, approximately #737983 or #74777D.
- Borders and dividers: very light gray, approximately #E3E5E6 or rgba(20, 25, 30, 0.12).
- Eyebrow or small label may use a very pale brand-tinted background such as #EEF5FF with brand-colored text around #35638F, but only if it fits the user’s identity.
- Keep the visual largely monochrome so the customer evidence and imagery carry the emphasis.

### Borders, radius, and surfaces
- Use 1px hairline borders between the intro block, selector cells, and featured story columns.
- Selector cells should be flat and border-separated rather than card-like.
- Use a small radius—around 8–12px—for the compact text button and any eyebrow pill.
- Avoid shadows, gradients, thick outlines, and large rounded containers.
- Let the media fill its entire half of the story panel and crop cleanly with `object-fit: cover`; do not place it inside a padded card.

### Customer selector interaction
- Treat each customer cell as a button or tab with an accessible label and visible keyboard focus state.
- The active customer should be distinguishable through a subtle background shift, darker text, a small underline, or another restrained brand-consistent cue—not a loud colour treatment.
- Clicking or tapping a customer updates the featured category, result, supporting headline, and media.
- Use a short, refined transition such as a 180–260ms fade or crossfade; avoid dramatic motion.
- If implementing a static version, show one selected customer and make the rail look intentionally interactive with hover and focus states.
- Ensure the control has proper semantics, including `aria-selected` for tabs if tabs are used.

### Content model
- Intro: a trust-oriented customer count or credibility statement, followed by a supporting line.
- Selector: 3–5 customer names represented with text or user-provided wordmarks; keep them evenly distributed.
- Story: category, measurable result, concise explanation of the customer’s transformation, and one relevant image or media asset.
- Write original placeholder content for the user’s product. Use believable but clearly replaceable customer names and metrics if real content is not provided.
- Make the outcome specific and concrete rather than using generic praise.

### Responsive and accessibility requirements
- Maintain strong contrast between primary text and the light background.
- Do not rely on colour alone to communicate the active customer.
- Add visible `:focus-visible` styles and ensure all interactive elements are keyboard reachable.
- Give media meaningful alt text, or mark it decorative when it adds no informational value.
- On narrow screens, preserve hierarchy: trust statement first, selector second, story content before or alongside the image depending on the user’s product needs.

## Never
- Never copy the reference’s logos, customer names, product names, wording, metrics, or exact testimonial copy.
- Never reuse the reference’s illustrations, photographs, imagery, icons, or wordmarks.
- Never make a pixel-for-pixel copy of the reference layout; use the underlying testimonial and editorial principles for the user’s own product.
- Never add decorative gradients, heavy shadows, noisy animations, or unrelated visual elements.
- Never invent claims that could be presented as verified customer evidence without clearly marking them as placeholder content.
