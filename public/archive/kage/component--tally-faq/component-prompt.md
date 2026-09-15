## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tally-so/8873d519-e012-4a77-bd60-f7e8803b75a7-1789060955-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tally-so/8873d519-e012-4a77-bd60-f7e8803b75a7-1789060926-full.webp
- Component on Kage: https://kage.design/component/tally-faq

## Before you start
Ask the user what their product is, who it is for, and what brand direction, typography, and colour palette they want. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Design language

Build a restrained, full-width FAQ accordion with a calm editorial feel and an emphasis on scanning.

### Layout and alignment
- Use a vertically stacked list of FAQ rows inside the page's main content width; allow the list to span broadly rather than placing it in a decorative card.
- Align every question to the same left edge and every disclosure control to the same right edge.
- Give each row a comfortable, consistent height of approximately 56–64px on desktop, with responsive horizontal padding that becomes smaller on mobile.
- Keep the section visually open: avoid sidebars, badges, thumbnails, illustrations, or unnecessary section chrome.
- If the FAQ is followed by a footer, preserve a large vertical breathing space or responsive section padding between the final row and footer content.

### Typography hierarchy
- Use a clean sans-serif or the user's approved brand font.
- Set questions in a medium-to-semibold weight, approximately 16–18px on desktop and 15–16px on mobile.
- Use a compact line height around 1.35–1.5 so longer questions remain easy to scan.
- Do not add a separate heading unless the product's information architecture needs one; the rows can stand on their own as a compact FAQ block.

### Colour
- Use a near-white or white background, approximately `#FFFFFF` to `#FCFCFB`.
- Use a deep charcoal for question text, approximately `#303030` or `#262626`, rather than pure black.
- Use very light neutral dividers, approximately `#EAEAEA` to `#F0F0F0`.
- Set the chevron to a medium charcoal, approximately `#3A3A3A`, with enough contrast to remain clearly interactive.
- For hover or focus, use a barely tinted neutral background such as `#F7F7F5`, or a subtle brand tint derived from the user's palette.

### Borders and radius
- Separate rows with 1px horizontal rules; include a top rule if it improves the section boundary and a bottom rule at the end of the list.
- Keep the overall surface flat and unboxed. Do not use a heavy outer border or shadow.
- If a hover/focus surface is introduced, use a small radius around 4–8px, while keeping the default rows visually edge-to-edge.

### Interaction
- Make the entire row a button or disclosure trigger, not only the chevron.
- Show a simple right-pointing chevron for collapsed rows. Rotate it smoothly by roughly 90 degrees when a row opens.
- Expand answers inline beneath the question, preserving the same left alignment and adding measured vertical padding rather than abrupt content movement.
- Animate height and chevron rotation subtly, around 150–220ms with an ease-out curve.
- Decide whether multiple questions may remain open based on the product's content needs; support keyboard activation, visible focus states, correct `aria-expanded`, and an accessible relationship between each trigger and answer.
- Ensure the hit area is at least 44px tall and that mobile layouts do not cause horizontal overflow.

## Never
- Never copy the reference's logos, product names, or exact FAQ copy.
- Never reuse its distinctive footer branding, social icons, illustrations, or imagery.
- Never reproduce the reference as a pixel-for-pixel layout; adapt the structure to the user's product, content, and brand.
- Never hide keyboard focus, sacrifice contrast, or make the chevron the only clickable target.
