## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tally-so/8873d519-e012-4a77-bd60-f7e8803b75a7-1789060953-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tally-so/8873d519-e012-4a77-bd60-f7e8803b75a7-1789060926-full.webp
- Component on Kage: https://kage.design/component/tally-feature-grid-5

## Before you start
Ask the user what their product is, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a responsive feature-grid section that explains several product capabilities through one prominent feature card and a stack of smaller supporting cards. The section should feel approachable, modern, and lightly playful while remaining clear and conversion-oriented.

## Design language

### Layout and alignment
- Use a centered content container with a maximum width of approximately 1120–1240px and generous horizontal padding on smaller screens.
- Start with a left-aligned section heading and short supporting paragraph. Keep the text measure around 520px so the introduction remains easy to scan.
- Below the introduction, use an asymmetric two-column grid on desktop: a large feature card occupying roughly 58–60% of the width and a vertical stack of three smaller cards occupying the remaining 40–42%.
- Make the large card substantially taller than the supporting cards. Use the lower portion of the large card for a believable, product-specific UI preview rather than decorative filler.
- Give the smaller cards consistent heights and vertical gaps. Each should have a simple icon or symbol, a concise title, one short explanatory paragraph, and—where useful—a small control, input, URL field, or button preview.
- Align card content to a shared left edge. Preserve generous internal padding, approximately 32px on desktop and 24px on mobile.
- On mobile, collapse to one column in reading order: heading, large feature card, then supporting cards. Do not preserve awkward desktop proportions.
- If the section continues into another feature group, create a clear but generous vertical transition rather than a heavy divider.

### Typography hierarchy
- Use a bold contemporary sans-serif for headings, with a strong section title around 42–56px on desktop and 32–40px on mobile.
- Use a compact, bold card title around 18–20px.
- Use comfortable body text around 17–19px with approximately 1.35–1.5 line height.
- Use near-black text such as #111111 or #151515 on a white or warm-white background.
- Keep copy concise and benefit-led. Use sentence case, not all caps.
- Add occasional hand-drawn-style emphasis under a heading or around a key word only if it supports the product’s brand; it should feel imperfect and organic, not like a standard UI underline.

### Colour
- Use a predominantly white or warm-white canvas, approximately #FFFFFF or #FCFCFA.
- Use a vivid brand accent for icons and hand-drawn emphasis, approximately #D62BC7, #C92BCB, or an equivalent colour derived from the user’s brand.
- Use a bright action colour for any demo button, approximately #0878D1 or an equivalent accessible brand colour.
- Use soft neutral fills for miniature controls and fields, approximately #EEEEEE–#F3F3F3.
- Keep the palette restrained: mostly monochrome, with one expressive accent and one action colour.

### Borders, shadows, and radius
- Use fine light-gray card borders, approximately #D5D5D5, with 1px thickness.
- Use medium rounded corners around 10–14px. Keep the radius consistent across cards and UI previews.
- Use very subtle shadows only where a card contains a floating interface preview: for example, 0 4px 14px rgba(0,0,0,0.08). Avoid glossy or excessive elevation.
- The overall look should feel tactile and paper-like, with crisp borders and lots of open space.

### Visual previews and icons
- Use simple line icons or small geometric symbols with the accent colour. Keep stroke weight consistent and avoid relying on external icon brands.
- Build miniature interface previews from HTML/CSS: browser-window chrome, form fields, compact buttons, link fields, or simple panels. Make them believable but generic to the user’s product.
- A large preview may slightly overflow or sit near the lower edge of its card to create visual momentum, but it must remain contained and accessible.
- Optional hand-drawn marks can use irregular SVG paths or CSS strokes in the accent colour. Keep them sparse and supportive of hierarchy.

### Interaction
- If cards are interactive, make the entire card or its primary action keyboard accessible and provide visible hover and focus states.
- On hover, use a subtle border-colour shift, slight translateY(-2px), or restrained shadow increase—never a dramatic animation.
- Buttons and controls in previews should look interactive but must not imply functionality that does not exist. Use clear labels and accessible contrast.
- Respect prefers-reduced-motion and avoid animation as the sole way to communicate meaning.

### Responsive and accessibility requirements
- Maintain readable line lengths and adequate contrast.
- Ensure the grid does not require horizontal scrolling at any viewport width.
- Give icons and decorative marks appropriate aria-hidden treatment when they do not convey meaning.
- Use semantic headings, section landmarks, and logical keyboard focus order.

## Never
- Never use logos, product names, brand marks, or copy from the reference.
- Never reproduce the reference’s exact card text, layout measurements, illustrations, hand-drawn characters, or UI screenshots.
- Never use the reference’s imagery or decorative artwork; create original CSS/SVG details only when needed.
- Never make the section depend on third-party image assets or inaccessible icon glyphs.
- Never overcrowd the cards, use a dense dashboard aesthetic, or add decoration that competes with the feature hierarchy.
