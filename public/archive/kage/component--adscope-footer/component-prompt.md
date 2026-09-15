## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106705-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106621890-full.webp
- Component on Kage: https://kage.design/component/adscope-footer

## Before you start
Ask what the user's product does, who it serves, and what its brand personality, colours, and conversion goal are. Then apply the principles below to create an original CTA-plus-footer section for that product rather than reproducing the reference.

## Build this section
Create a full-width closing section with two distinct vertical zones:

1. **Conversion band**
   - Use a vivid brand-led background, approximately acid chartreuse `#DFFF32` or a similarly energetic colour chosen from the user's brand palette.
   - Centre-align the content on desktop: a large, concise headline, a supporting sentence beneath it, one prominent primary CTA, and a small reassurance line below the button.
   - Keep the content column readable and constrained to roughly `720–1000px`; let the background extend edge to edge.
   - Use a bold, modern sans-serif headline around `56–64px` on desktop with tight line-height around `0.98–1.05`. Supporting copy should be approximately `20–22px`, with a comfortable line-height around `1.45`.
   - The CTA should be a dark or near-black pill button, approximately `#050505`, with white text, generous horizontal padding, a height around `56–60px`, and a radius of `999px`. Add a subtle hover treatment such as a small upward movement, colour shift, or slight shadow; preserve a clearly visible keyboard focus ring.
   - Place generous vertical padding around the band, approximately `72–112px`, so the CTA feels like a decisive final conversion moment.
   - Add a low-contrast, oversized geometric motif partially cropped at one or more edges. It can be made with CSS shapes, pseudo-elements, gradients, or simple lines. Keep it tonal—roughly `10–20%` darker or lighter than the band—and place it behind the content with `pointer-events: none`.

2. **Quiet utility footer**
   - Use a warm off-white or very light neutral background, approximately `#F3F3F1`, separated from the CTA by the colour change rather than a heavy divider.
   - Use a wide centered container, approximately `1056–1200px`, with generous top and bottom padding around `88–120px` on desktop.
   - Arrange the footer in two broad areas: a brand and copyright block on the left, and grouped navigation on the right. On desktop, align both areas to the top of their respective columns.
   - The brand block should contain an abstract, product-appropriate mark and a wordmark placeholder supplied by the user's product—not copied branding. Keep the mark modest, around `24px`, and the wordmark around `24–28px` with medium-to-bold weight.
   - Put the copyright or small supporting legal text below the brand with a generous gap. Use muted grey such as `#777A78`, approximately `16px`, and a line-height around `1.4`.
   - Build navigation groups with compact uppercase category labels in small tinted rectangular chips. Chips should use a subtle neutral fill such as `#E9E9E5`, dark grey text, `12–13px` type, slight tracking, and a small radius around `2–4px`.
   - Under each chip, stack text links with approximately `16–20px` type, `1.6–2.1` line-height, and generous vertical separation. Use near-black `#151515` for links and a muted colour on hover, with underlines or another clear affordance where appropriate.
   - Include social links and essential legal links only when relevant to the user's product. Keep groups visually separate with a desktop gap of roughly `56–88px`.

## Responsive behaviour
- At widths below roughly `800px`, stack the brand block above the link groups and make the footer container full-width with `24–32px` side padding.
- Reduce the headline to around `40–48px`, supporting copy to `17–19px`, and CTA width to fit comfortably on narrow screens; allow the button to become full-width if needed.
- Let the navigation groups wrap into a simple two-column or stacked layout. Prevent long legal labels from overflowing.
- Hide, simplify, or reposition decorative geometry on small screens so it never reduces text contrast or causes horizontal scrolling.

## Accessibility and implementation
- Use semantic `footer`, navigation landmarks, heading hierarchy, real links, and a real button or link for the CTA.
- Maintain WCAG-conscious contrast, especially for text placed over the bright band and for muted copyright text.
- Ensure visible focus states, adequate touch targets, and reduced-motion support for hover or entrance effects.
- Keep the decorative motif inaccessible to screen readers and ensure the layout works without it.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the reference brand mark, exact wording, exact decorative geometry, or exact spacing as a direct copy.
- Never make the CTA or footer navigation depend on hover alone.
- Never sacrifice legibility for the oversized background treatment.
