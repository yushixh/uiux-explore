## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073974-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073921-full.webp
- Component on Kage: https://kage.design/component/bolt-new-feature-grid-2

# Build a dark bento feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for my product rather than reproducing the reference literally.

## Goal
Design a premium feature-grid section that communicates a product's built-in capabilities or platform breadth. The section should feel confident, technical, and polished: a strong centered introduction leads into an asymmetrical bento grid where every card has a clear job and a distinct but restrained visual cue.

## Layout and alignment
- Use a near-black page background, approximately `#111214` to `#151618`.
- Add a very subtle horizontal divider or hairline near the top of the section in a cool charcoal tone.
- Center the section intro within a max-width of roughly `760–860px`.
- Give the intro generous top spacing, around `112–140px` on desktop, with the heading and paragraph vertically stacked and centered.
- Use a two-line headline treatment where the first line is muted and the second line is brighter or more emphatic. Keep the line height tight and make the second line feel like the conclusion of the thought.
- Place the feature grid below the intro with approximately `64–72px` of separation.
- Build a five-card bento grid inside a centered container with a max-width around `1200–1240px`:
  - top row: two medium cards followed by one wider/taller card;
  - bottom row: one compact card followed by one wide card, while the right-hand card continues vertically across both rows.
- Use CSS grid rather than absolute positioning for the structural layout. A suitable desktop model is 12 columns with consistent `8–10px` gaps, using spans to create the asymmetric composition.
- Keep the grid visually balanced: the tall right card should anchor the composition, while the two left columns create a stepped rhythm.
- Add a thin framed baseline or connector beneath the grid, with a small centered vertical tick extending downward. Follow it with a centered concluding statement. This can be omitted if it does not suit the product narrative.
- On tablet, simplify to two columns while preserving one tall anchor card. On mobile, stack cards in a single column, reorder them by product importance, and reduce decorative effects.

## Card styling
- Cards should have a dark charcoal surface, approximately `#1b1c1f`, with subtle variation between cards rather than obvious colour blocks.
- Use a `1px` border around each card in `rgba(255,255,255,0.14)` and a radius of approximately `10–12px`.
- Avoid heavy shadows. Use a faint inset highlight or soft outer shadow only where it helps separate cards from the page.
- Clip decorative visuals to the card boundary with `overflow: hidden`.
- Place the card title near the top, centered or aligned consistently, with compact padding of roughly `26–32px`.
- Use strong, short titles in a white or near-white colour, approximately `#f2f2f3`, at `18–21px` with medium-to-semibold weight.
- Keep supporting copy small and readable, around `14–16px`, with a muted grey such as `#b5b6ba` and comfortable line height.
- For cards with bottom captions, align the caption to the lower edge so the grid feels intentional and the visual has room to breathe.

## Visual language for card content
- Give each capability a simple abstract visual rather than a generic icon. Suitable motifs include:
  - a looping or linked form for continuity and scale;
  - a luminous curve or trajectory for growth and enterprise readiness;
  - a protected object or focal light for security and access control;
  - a circular metric badge for optimization or performance;
  - a tilted surface or panel for publishing, deployment, or workflow completion.
- Use deep navy and electric blue accents, approximately `#09213d`, `#0b4fa3`, `#1687ff`, and `#8dc8ff`.
- Keep most of each visual dark and let the blue appear as a focused rim light, glow, gradient, or highlight. The effect should feel embedded in the interface rather than decorative wallpaper.
- Use blurred radial gradients and subtle bloom sparingly. Avoid noisy particle fields, excessive neon, or illustrations that compete with the card labels.
- A metric card may use a bold number inside a circular blue-ring badge, but the number and claim must be based on my product rather than invented proof.
- Make visuals responsive and non-essential: they should enhance comprehension but never prevent the titles and copy from being understood.

## Typography hierarchy
- Use the product's brand font if available; otherwise use a clean modern sans-serif such as Inter, Geist, or a system sans stack.
- Intro headline: approximately `48–56px` on desktop, `36–42px` on tablet, and `30–36px` on mobile; weight `600–700`; line height around `0.98–1.08`.
- Intro paragraph: approximately `18–20px` on desktop, `16–18px` on mobile; line height around `1.45`; constrain the width to about `680px`.
- Card titles: `18–21px`, weight `600`.
- Supporting copy and closing statement: `14–18px`, with the closing statement allowed to use `20–24px` and a stronger weight.
- Use muted text for context and bright text only for the key phrase or product promise.

## Colour, borders, and atmosphere
- Base background: `#111214`.
- Card surfaces: `#1a1b1e` and `#202124`.
- Primary text: `#f4f4f5`.
- Secondary text: `#b6b7bb`.
- Dividers and borders: `rgba(255,255,255,0.12–0.16)`.
- Accent blue range: `#0878ed` through `#65b8ff`, with deep navy backgrounds around `#071a30`.
- Keep contrast accessible, especially for small supporting text and captions.

## Interaction and motion
- If cards are interactive, use a subtle hover state: slightly brighten the border, lift the card by `1–2px`, and increase the blue glow only within the visual region.
- Do not make the whole card feel like a button unless it actually links somewhere. Use clear focus-visible outlines for keyboard users.
- Animate decorative curves, glows, or metric rings slowly and gently on entry or hover. Keep motion under roughly `500ms` for UI transitions and respect `prefers-reduced-motion`.
- Ensure all content remains legible without animation, hover, or JavaScript.

## Responsive and implementation notes
- Implement with semantic HTML: a section, introductory heading and paragraph, an unordered list or grouped set of feature cards, and an optional closing statement.
- Use CSS Grid with a clear mobile fallback. Do not rely on fixed pixel heights that cause content clipping.
- Use `aspect-ratio`, `min-height`, and responsive padding to preserve visual proportion while allowing copy to wrap.
- Provide meaningful accessible labels for decorative visuals only when they convey information; otherwise mark them as decorative.
- Keep the section performant by using CSS gradients and lightweight DOM elements instead of large image assets.

## Never
- Never copy the reference's logos, product names, brand marks, or proprietary interface elements.
- Never reuse the reference's exact copy, feature labels, claims, statistics, or wording.
- Never copy illustrations, 3D objects, imagery, or visual assets from the reference.
- Never assume the user's product is a developer platform; adapt the capabilities, content, and visual motifs to the product and brand I provide.
- Never use decorative effects that reduce readability, create inaccessible contrast, or become the primary message.
