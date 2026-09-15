## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106543-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-feature-grid-5

## Before you start
Ask the user what their product is, who it is for, and what visual brand it should express. Apply the principles below to that product rather than reproducing the reference component literally.

## Build an editorial feature-grid section
Create a responsive feature section for a modern software product. The component should explain one focused capability through a calm, editorial split layout: descriptive content on the left and a product UI preview or abstract interface panel on the right.

### Layout and alignment
- Use a wide, centered container with a maximum width of approximately `1150–1250px` and generous horizontal padding of `32–64px`.
- On large screens, use a two-column grid with the copy taking roughly `42%` of the width and the visual `58%`; align both columns near the vertical center.
- Keep the left content flush-left and vertically ordered: compact category label, strong headline, supporting paragraph, then a short list of capability rows.
- Give the visual enough breathing room rather than making it edge-to-edge. It should feel like a contained preview placed beside the copy.
- On small screens, stack the copy above the visual. Preserve the visual’s aspect ratio and reduce outer padding without making the section feel cramped.
- Include generous vertical padding, approximately `72–120px` on desktop and `56–80px` on mobile. If this sits in a sequence of feature sections, use subtle horizontal rules or spacing to distinguish sections.

### Typography hierarchy
- Use a clean contemporary sans-serif with a slightly heavy, compact headline weight.
- Category label: uppercase or small caps, around `11–12px`, medium weight, increased letter spacing around `0.14em`.
- Headline: approximately `24–28px` on desktop, `22–25px` on mobile, with `font-weight: 650–750` and a tight line-height around `1.15`.
- Supporting copy: `16–17px`, regular weight, line-height around `1.55`; constrain its measure to roughly `38–45ch`.
- Detail rows: `15–16px`, with comfortable line-height and enough vertical padding to scan quickly.

### Colour and surfaces
- Use a warm or neutral near-white page background, approximately `#FAFAF9` or `#FFFFFF`.
- Use a very dark charcoal for primary text, approximately `#171717`, rather than pure black.
- Use a muted neutral for supporting text, approximately `#777777` or `#858585`.
- Use pale gray dividers, approximately `#E7E7E5`, at low contrast.
- Let the product preview use the product’s own brand colours, but keep its surrounding frame understated so the interface remains the visual focus.

### Borders, radius, and visual treatment
- Use `1px` horizontal dividers between capability rows and, where useful, a subtle divider at the section boundary.
- Keep the copy area mostly unboxed; the whitespace is part of the design.
- Give the preview a modest border radius of approximately `10–14px`, with `overflow: hidden` and a faint border such as `#E1E1DF`.
- Avoid heavy shadows. If elevation is needed, use a soft, diffuse shadow with low opacity.
- Add a small category icon only if it helps identify the capability; keep it monochrome, geometric, and visually secondary.

### Interaction and responsive behaviour
- Capability rows may gain a subtle background tint or text-colour change on hover, but do not make the interaction loud.
- If rows are interactive, provide a clear keyboard focus state using a visible outline or low-contrast focus ring.
- Keep the visual preview static unless the product requires interaction; any animation should be short, restrained, and respect `prefers-reduced-motion`.
- Ensure the grid remains readable at tablet widths: reduce the column gap before switching to a single column.
- Use semantic headings, a real list for feature details, responsive images or UI previews, and sufficient colour contrast.

### Content structure
Use original, product-specific content supplied by the user. The section should contain:
1. A concise capability label.
2. One outcome-oriented headline.
3. A short explanation of why the capability matters.
4. Two to four scannable supporting details separated by fine rules.
5. A visual representation of the capability that matches the user’s product, such as a UI screenshot, rendered interface mockup, or CSS-built preview.

## Never
- Never use the reference product’s logo, product name, brand identity, or proprietary UI.
- Never copy the reference headline, supporting copy, feature-row wording, or keyboard shortcuts.
- Never reuse the reference illustration, screenshot, interface layout, icons, or imagery.
- Never make the result look like a pixel-for-pixel recreation; reinterpret the layout for the user’s product and brand.
- Never sacrifice accessibility, responsive behaviour, or readable contrast for visual similarity.
