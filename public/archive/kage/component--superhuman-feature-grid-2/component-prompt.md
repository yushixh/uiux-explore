## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060756-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/superhuman-com/aa0f5749-a8ae-405c-9afb-679f6a47222d-1789060721-full.webp
- Component on Kage: https://kage.design/component/superhuman-feature-grid-2

# Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and visual assets are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Build this section
Create a responsive feature showcase that explains several product capabilities through an editorial bento grid. The section should feel premium, calm, and product-led: concise labels and benefit-focused headlines sit alongside simplified UI previews that make each capability tangible.

## Design language

### Layout and alignment
- Use a warm, near-white page background, approximately `#F7F6F2`.
- Build a centered grid inside a wide max-width container, around 1200–1280px, with 24px horizontal gutters on desktop and 16px on mobile.
- Use a bento arrangement with one wide feature spanning the top row and two equal feature cards beneath it. Let the cards have slightly different visual compositions while preserving a clean shared baseline.
- Give cards generous fixed or aspect-ratio-driven heights on desktop, roughly 255–300px. Stack them into a single column on narrow screens, preserving readable content order.
- Align text to the left with consistent internal padding of roughly 32px desktop and 24px mobile. Keep text blocks narrow enough that headlines wrap into intentional lines rather than long paragraphs.
- Place product UI previews in the open area of each card—often offset, cropped, or overlapping the edge—so the copy remains dominant and the interface feels like an evidence layer.
- Follow the grid with a full-width, high-contrast enterprise or proof section. Use a deep colour field and a two-column layout: copy on the left, layered product-window previews on the right. On mobile, stack the copy above the preview.

### Typography hierarchy
- Use a modern sans-serif with a humanist or neo-grotesk feel. Avoid decorative display fonts.
- Feature eyebrow: 13–15px, medium weight, muted but high-contrast enough to read.
- Feature headline: 25–32px desktop, 23–28px mobile, regular to medium weight, tight line-height around 1.05–1.15. Write benefit-led statements, not feature names alone.
- Proof-section eyebrow: 16–18px, medium weight.
- Proof-section headline: 42–52px desktop and 34–42px mobile, regular weight, tight line-height around 1.05–1.12.
- Supporting copy: 16–18px with 1.4–1.5 line-height. Keep paragraphs to approximately 2–4 lines.
- Use sentence case and deliberate line breaks only when they improve composition.

### Colour
- Keep the page neutral and let each feature card have its own quiet, recognisable colour story.
- Suggested card colours: soft lavender `#E8E2FF`, warm stone `#E8E6E0`, muted blush or lilac `#F0DDF0`, and deep plum `#421B27`.
- Use near-black text `#252329` on light cards and warm white `#F8F6F2` on dark cards.
- Add one or two restrained accent gradients in UI preview areas, such as lavender-to-blue `#B8A8FF` to `#9BC9FF` or pink-to-orange `#F39ACD` to `#F6A875`. Keep gradients soft and atmospheric rather than glossy.
- The proof section may use a deep indigo/plum background around `#28164A`, with lavender-white copy around `#E9E1F7`.

### Borders, radius, and depth
- Use large rounded card corners, approximately 14–18px, with a consistent radius system.
- Prefer no visible borders on the coloured cards; where separation is needed, use a subtle warm-gray border such as `rgba(40,35,45,.10)`.
- Keep shadows very restrained. UI mockups may use a soft shadow like `0 12px 32px rgba(30,20,40,.16)` to separate them from the card.
- UI previews should look like simplified product surfaces: white or off-white panels, thin gray dividers, compact controls, small neutral text, and one clear highlighted action or selection. Do not make them fully functional or overly detailed.
- Use controlled cropping and layering to suggest a larger product without cluttering the card.

### Interaction and responsive behaviour
- If cards are interactive, make the whole card keyboard-focusable and use a subtle hover treatment: a 2–4px upward translation, a slightly deeper shadow, or a gentle shift in the preview—not all three at once.
- Preserve visible focus rings using an accessible accent colour.
- On touch devices, remove hover-only motion and keep tap targets at least 44px.
- Respect `prefers-reduced-motion`; disable floating or transition effects when requested.
- Ensure colour contrast meets WCAG AA, especially in the dark proof section.
- Keep the grid visually balanced even if headlines have different lengths; use flexible content areas and avoid forcing text to overlap the UI previews.

### Content direction
- Give each card a short category label and a single specific outcome-oriented headline.
- Choose capabilities that feel complementary, such as turning a rough idea into a structured plan, connecting work across teams, or bringing AI assistance into an existing workflow.
- The proof section should communicate trust, scale, or suitability for demanding organisations without relying on logos or named customers.

## Implementation notes
- Build with semantic HTML, accessible headings, and CSS grid/flexbox.
- Use CSS variables for colours, spacing, radii, and typography so the visual system can be adapted to my brand.
- Use local CSS shapes or neutral placeholder UI for previews rather than external images. Keep the section performant and responsive from 320px upward.

## Never
- Never copy the reference’s logos, product names, exact copy, customer names, or brand identifiers.
- Never reuse its illustrations, screenshots, imagery, or distinctive interface artwork; invent neutral UI previews for my product instead.
- Never reproduce the exact card arrangement, text line breaks, gradient artwork, or decorative treatment if they are recognisable to the reference.
- Never make the section dependent on inaccessible hover interactions, tiny text, or low-contrast colour combinations.
- Never use the reference’s visual identity as the product’s brand; adapt these principles to the product and brand details I provide.
