## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106701-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106655341-full.webp
- Component on Kage: https://kage.design/component/basedash-in-espanol-francais-portugues-navigation

# Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original navigation header for that product rather than reproducing the reference.

## Design direction
Build a minimal SaaS website navigation bar as a single, full-width horizontal row. It should feel precise, quiet, and premium, with generous breathing room and a clear visual hierarchy between navigation links and the primary action.

## Layout and alignment
- Use a full-width header with a centred content container, typically 1120–1240px wide, with 24–32px horizontal padding on smaller screens.
- Keep the header around 70–76px tall on desktop.
- Align every item vertically to the centre of the row.
- Place the product brand at the far left, the main navigation near the middle, and account/conversion actions at the far right.
- Use flexbox with `justify-content: space-between`; group related links and actions so spacing remains stable.
- Keep the primary navigation compact rather than spreading links across the entire viewport.
- On mobile, collapse the main links into a menu button while preserving the brand and the most important action.

## Typography hierarchy
- Use a clean contemporary sans-serif with excellent legibility; use the product's own typeface if available.
- The brand should be slightly larger and heavier than navigation labels, approximately 19–21px and medium weight.
- Navigation and account links should be approximately 14–15px, regular to medium weight, with comfortable line height.
- The primary CTA should use 14–15px semibold text.
- Avoid oversized or decorative type in the header; this component should support the page rather than dominate it.

## Colour
- Use a warm off-white or very pale neutral background, approximately `#F8F7F3` or an appropriate brand equivalent.
- Use near-black text, approximately `#171614`, for the brand and CTA.
- Use a softer charcoal, approximately `#68655F`, for secondary navigation and login links.
- Use a near-black filled button with light text for the primary action, unless the user's brand calls for another high-contrast treatment.
- Ensure text and controls meet accessible contrast requirements.

## Borders and shape
- Add a subtle 1px bottom border, approximately `#DDDAD3`, to separate the header from the page without creating a heavy rule.
- Keep the header background flat and untextured.
- Use a restrained button radius, around 8–10px, with a compact height of roughly 38–40px and horizontal padding of 20–24px.
- Keep the brand mark simple and geometric if the product has one; otherwise use a typographic wordmark or text treatment rather than inventing a detailed illustration.

## Interaction
- Navigation links should transition gently to a darker or brand-accent colour on hover, using roughly 150–200ms ease-out.
- Links with submenus may show a small downward chevron; keep it subtle and align it optically with the label.
- The primary CTA should darken or shift slightly on hover and provide a visible keyboard focus ring.
- Login and navigation links should have clear focus states and sufficiently large clickable areas.
- If dropdowns are present, open them predictably on click or keyboard interaction and support Escape to close; do not rely only on hover.
- Make the header responsive without allowing labels to collide or wrap awkwardly.

## Never
- Never copy the reference site's logos, product names, navigation labels, or button copy.
- Never reuse the reference's exact brand mark, typography, spacing measurements, or visual proportions as a direct replica.
- Never include the reference's copy, illustrations, imagery, icons, or other distinctive branded assets.
- Never assume the user's product uses the same languages, information architecture, or call-to-action wording.
- Never sacrifice keyboard accessibility, responsive behaviour, or readable contrast for visual similarity.
