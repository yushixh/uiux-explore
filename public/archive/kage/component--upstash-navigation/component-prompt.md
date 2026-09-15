## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073746-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073722-full.webp
- Component on Kage: https://kage.design/component/upstash-navigation

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original announcement bar and navigation header for that product—do not reproduce the reference literally.

## Design goal
Build a restrained SaaS website header made of two horizontal layers: a slim announcement bar above a spacious primary navigation row. The result should feel trustworthy, modern, and easy to scan, with the announcement visible but secondary to the main navigation.

## Structure and layout
- Use a full-width header at the top of the page.
- Create an announcement strip approximately 36px tall on desktop, followed by a primary navigation row approximately 96–105px tall.
- Keep the content inside a centered max-width container, approximately 1180–1240px wide, with 32–40px horizontal padding on desktop.
- In the announcement strip, center a single-line message horizontally. Include a short lead-in, an underlined or subtly emphasized link, and a small right-pointing arrow or equivalent affordance.
- In the main row, use a three-part layout: brand mark and wordmark aligned left, navigation links centered or placed in the middle, and one account/action button aligned right.
- Keep the navigation vertically centered in the row. Use generous empty space so the header feels airy rather than dense.
- On smaller screens, collapse the navigation into a menu button while preserving the announcement message in a concise, wrapping-safe form. Keep the primary action easy to reach.

## Typography hierarchy
- Use a clean modern sans-serif appropriate to the user's brand.
- Announcement text: approximately 14px, medium weight, with a compact line height around 20px.
- Main navigation links: approximately 16px, regular-to-medium weight, with enough contrast for clear readability but not excessive emphasis.
- Wordmark: approximately 19–21px, semibold or bold.
- Action button label: approximately 15–16px, semibold.
- Avoid oversized type; this is a utility header whose hierarchy comes from spacing, weight, and placement.

## Colour and visual tone
- Use a very pale mint or cool off-white announcement background, approximately #ECF9F3, with dark green-black text around #173B32.
- Separate the announcement strip from the main row with a subtle 1px border around #D2E8DF.
- Use a white or near-white main navigation background, approximately #FCFDFC.
- Use deep green-gray for primary text, approximately #183B33, and a softer muted green-gray for secondary navigation text, approximately #687A74.
- Use a fresh medium green accent for the brand mark or key interactive details, approximately #35B996.
- The account button can use a very pale green surface, approximately #E7F3EE, with dark green text around #1E725D.
- Preserve strong text contrast and ensure hover states remain accessible.

## Borders, radius, and effects
- Use a thin, low-contrast horizontal border beneath the announcement bar and, if needed, beneath the full header.
- Keep the main navigation mostly flat; avoid heavy shadows, gradients, or decorative effects.
- Give the account button a soft pill-like radius around 14–16px, with approximately 12–16px horizontal padding and 10–12px vertical padding.
- Use small rounded surfaces for notification badges or compact status indicators, around 8–12px radius.
- If the header is sticky, use a subtle backdrop blur and a very light shadow only after scrolling.

## Interaction
- Announcement links should have a visible underline or another clear affordance and a hover colour shift toward the accent green.
- Navigation links should transition subtly on hover, such as changing from muted green-gray to deep text colour; do not use exaggerated animations.
- The account/action button should slightly darken or increase contrast on hover and show a clear focus ring for keyboard users.
- Any dropdown indicator beside a navigation item should be a small, understated chevron and should expose a menu on click or keyboard interaction.
- On mobile, the menu button needs an accessible label, visible focus state, and a clear open/closed state.
- Keep transitions short and restrained, roughly 150–200ms.

## Responsive behavior
- At desktop widths, preserve the three-part alignment and single-line navigation.
- At tablet widths, reduce gaps between links and container padding before hiding important content.
- At mobile widths, show the brand on the left and a menu trigger on the right; place the account action inside the opened menu or retain it as a compact secondary action.
- Prevent announcement text from colliding with the viewport edges; allow a controlled second line if necessary rather than clipping it.

## Accessibility and implementation
- Use semantic `header`, `nav`, and link/button elements.
- Provide an accessible name for the brand link and menu trigger.
- Ensure keyboard focus is visible and the contrast ratio is appropriate for all text and controls.
- Keep the header content independent from page-specific copy so it can be configured for the user's product.

## Never
- Never use the reference site's logo, wordmark, product name, or exact announcement copy.
- Never copy the reference navigation labels, ordering, or proprietary wording.
- Never reuse its logo shape, icon artwork, illustrations, or imagery.
- Never recreate the header as a pixel-for-pixel imitation; adapt the layout principles to the user's product and brand.
- Never add decorative imagery or brand assets from the reference.
