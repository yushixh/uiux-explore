## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060456-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-navigation

## Before you start
Ask the user what their product is, who it serves, and what their brand personality and visual system are. Then apply the principles below to create an original version for that product rather than reproducing the reference.

## Design goal
Build a two-level SaaS website header: a narrow promotional announcement bar above a calm, highly legible primary navigation. The result should feel premium, efficient, and trustworthy, with the announcement separated from the main navigation so neither hierarchy overwhelms the other.

## Layout and alignment
- Use a full-width stacked header at the top of the page.
- Make the announcement bar approximately 48px tall on desktop, with its content centered horizontally.
- Place a short announcement sentence in the center, followed by a small right-pointing arrow or equivalent action affordance.
- Include a compact dismiss control aligned to the far right with generous inset from the viewport edge.
- Make the primary navigation approximately 66–72px tall, with a thin bottom border.
- Constrain the navigation contents to a wide responsive container, roughly 1180–1280px, centered in the viewport with 24–32px horizontal padding.
- Align the brand mark or wordmark at the far left, followed by navigation links with consistent horizontal gaps.
- Keep the main links on one line on desktop. Use dropdown chevrons only for destinations that contain grouped content.
- Push authentication and conversion actions to the far right using flex spacing or an equivalent layout rule.
- On smaller screens, collapse the links into a menu button while retaining the primary action where space allows; do not let the header wrap awkwardly.

## Typography hierarchy
- Use a modern sans-serif appropriate to the product brand, with excellent rendering at small sizes.
- Announcement text: approximately 13–14px, medium weight, with tight line height.
- Navigation links: approximately 15–16px, regular-to-medium weight, with clear contrast against the background.
- Button labels: approximately 14px, medium or semibold weight.
- Keep text compact and avoid oversized navigation typography; the header should support the page rather than become the hero.

## Colour
- Use a near-black announcement background, approximately `#050505` to `#111111`.
- Use white or near-white announcement text, approximately `#F7F7F5`.
- Use a white or warm-white navigation background, approximately `#FFFFFF` or `#FCFCFB`.
- Use a dark charcoal for navigation text, approximately `#252525` to `#303030`.
- Use muted gray for secondary icons and chevrons, approximately `#777777`.
- Use a dark charcoal primary button, approximately `#25282B`, with white text.
- Use a white secondary button with a subtle gray border, approximately `#D5D7D8`.

## Borders, radius, and controls
- Separate the main navigation from page content with a 1px border in a very light gray such as `#E5E6E7`.
- Keep the announcement bar edge-to-edge and visually flat, without a card container.
- Use compact pill-like controls with approximately 9–11px corner radius.
- Give the secondary button a transparent or white fill and a 1px border.
- Give the primary button a solid dark fill, modest horizontal padding, and a subtle hover darkening rather than a dramatic animation.
- Keep the logo or brand area visually prominent through shape and weight, not excessive size.

## Interaction and states
- Make dropdown navigation items visibly interactive with a small chevron that rotates or changes state when opened.
- On hover, slightly darken or underline navigation links without shifting layout.
- Let the announcement link use a subtle underline, opacity change, or arrow movement on hover.
- Make the dismiss button keyboard accessible, with a clear focus ring and an accessible label.
- Provide visible keyboard focus states for every link and button using a 2px outline with an appropriate offset.
- Ensure touch targets are at least 44px high on mobile, even if the visual glyph is smaller.
- Keep transitions brief and restrained, around 150–200ms.

## Responsive behavior
- Preserve the announcement bar's readability by allowing its message to wrap or shorten on narrow screens, while keeping the dismiss control accessible.
- Reduce horizontal padding on small screens to approximately 16px.
- Replace the desktop navigation links with a menu trigger below the breakpoint where they no longer fit comfortably.
- Maintain clear separation between the brand, menu control, and primary conversion action.

## Never
- Never copy the reference site's logo, product name, navigation labels, announcement copy, or exact wording.
- Never use the reference brand's logo or any recognizable branded symbol.
- Never reproduce the reference component pixel-for-pixel; adapt the hierarchy and rules to the user's product and brand.
- Never add illustrations, photography, or decorative imagery to this navigation component.
- Never rely on color alone for interactive states or accessibility.
- Never allow links, buttons, or the announcement text to overlap, clip, or wrap in a confusing way.
