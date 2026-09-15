## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073817-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-navigation

# Build an announcement bar and floating SaaS navigation header

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and conversion goal are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Component goal
Create a responsive website header composed of:
1. A compact announcement bar at the very top for a timely message and optional CTA.
2. A large, airy navigation panel beneath it, visually separated from the page with generous whitespace and a soft rounded container.

The header should feel modern, calm, technical, and conversion-oriented. Prioritise fast scanning: brand at the left, primary navigation in the centre, and utility actions at the right.

## Layout and alignment
- Use a full-width announcement bar with a single horizontal content row centred within a max-width container.
- Place the announcement’s main message first, supporting details second, and a compact outlined action after them. Add a dismiss control at the far right.
- Below it, use a wide navigation surface with a max-width around 1240–1280px and horizontal padding around 48px on desktop.
- Give the navigation surface a soft radius of approximately 18–24px and enough vertical padding to make it feel like a substantial panel rather than a thin navbar.
- Align all nav items to one consistent optical baseline.
- Structure the main row as three zones: brand block, centred or flexible navigation links, and right-side actions.
- Keep the brand visually stable while allowing the centre links to collapse or disappear at smaller widths.
- On mobile, retain the brand and one primary action, replace the full menu with a menu button, and keep the announcement copy concise or horizontally scrollable without awkward wrapping.
- Make the header sticky only if it supports the product’s browsing experience; if sticky, add a subtle shadow or backdrop treatment after scrolling.

## Typography hierarchy
- Use a contemporary sans-serif with excellent UI legibility.
- Announcement message: approximately 13–14px, medium weight; supporting text can use regular weight and slightly lower contrast.
- Navigation links: approximately 14–15px, medium weight, with comfortable letter spacing.
- Primary CTA: approximately 14–15px, semibold or bold.
- Avoid oversized type; the impact should come from spacing, contrast, and composition.

## Colour and surface language
- Use a very dark blue-black or charcoal for the announcement background, approximately #17202B, with a subtle diagonal or tonal gradient if it fits the brand.
- Use near-white for the navigation surface, approximately #FCFCFA, against a very pale warm-gray page background such as #F5F5F2.
- Use near-black for primary text, approximately #171717.
- Use muted gray for secondary links and announcement details, approximately #6F7277.
- Use a bright, brand-specific accent for the main CTA rather than copying any reference colour. Ensure the CTA has strong contrast and passes accessibility checks.
- Keep decorative texture extremely subtle: a low-opacity grain, hairline pattern, or soft radial variation is acceptable, but it must not reduce readability.

## Borders, radius, and depth
- Use a faint border around the navigation panel, approximately rgba(20, 24, 30, 0.06–0.10).
- Give the panel a very soft shadow, such as 0 8px 30px rgba(20, 24, 30, 0.04), rather than a pronounced card shadow.
- Use a small radius, around 999px, for pill-shaped announcement actions and primary buttons.
- Use a compact dismiss icon with a sufficiently large invisible hit area, at least 40px square.
- Keep strokes and separators light; the component should feel refined, not boxed in.

## Interaction and states
- Add hover and focus-visible states to every link and button.
- Navigation links should transition colour smoothly and may show a subtle underline or small indicator on the active route.
- Dropdown-capable links should expose a clear chevron and open on click or keyboard activation, not hover alone.
- The primary CTA should gain a modest brightness or elevation change on hover, with a visible focus ring.
- The announcement bar’s dismiss control should remove the bar without shifting the navigation awkwardly; animate the height and opacity briefly.
- Support keyboard navigation, semantic landmarks, accessible names, and a mobile menu with focus management.
- Respect reduced-motion preferences.

## Content model
Use generic, product-specific placeholders supplied by the user for:
- Brand name and optional brand mark
- Announcement message and optional supporting detail
- Primary navigation categories
- Sign-in or secondary account action
- Main conversion CTA
Do not assume every product needs the same number of links or account actions.

## Responsive behaviour
- Desktop: show the complete three-zone navigation and announcement row.
- Tablet: reduce horizontal gaps and allow the centre links to wrap only if necessary; otherwise collapse them into a menu.
- Mobile: use a compact header, menu trigger, and one high-priority CTA. Ensure all controls remain comfortably tappable.
- Test long brand names, translated labels, zoomed text, and narrow screens so the layout does not collide or overflow.

## Never
- Never use logos, product names, copy, illustrations, icons, textures, or imagery from the reference.
- Never reproduce the reference brand mark or its exact announcement wording.
- Never make the header dependent on a screenshot or hard-coded positioning.
- Never sacrifice contrast, keyboard access, or mobile usability for visual similarity.
- Never use decorative effects that compete with the navigation or primary CTA.
