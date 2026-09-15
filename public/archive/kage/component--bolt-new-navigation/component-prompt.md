## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073973-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073921-full.webp
- Component on Kage: https://kage.design/component/bolt-new-navigation

## Before you start
Ask me what my product is, who it is for, and what brand personality, colours, and navigation items it uses. Then apply the principles below to create a version for my product rather than copying the reference.

## Build a dark SaaS website header
Create a full-width top navigation bar for a modern software product. Treat it as a reusable responsive component that can sit above a hero section or dashboard-like page.

### Design language
- Use a near-black background, approximately `#101012`, with a very subtle change in tone or shadow at the bottom edge.
- Keep the header visually quiet: the navigation should support the page rather than become the focal point.
- Use a three-part horizontal structure inside a centered container: brand area on the left, primary navigation in the middle, and account/action controls on the right.
- Set the content width to roughly `calc(100% - 32px)` on small screens and a maximum width around `1180–1240px` on larger screens.
- Give the header approximately `16px` horizontal padding and `14–18px` vertical padding. Keep the total height near `68px`.
- Align every item vertically to the same center line. Use flexbox and avoid uneven baseline alignment.

### Typography and controls
- Use a clean sans-serif system font or the product’s existing UI font.
- Brand treatment should be visually strongest, around `20–24px`, bold or semibold, with compact letter spacing.
- Navigation links should be approximately `14px`, medium weight, with muted light-gray text around `#b8b8bd`.
- Secondary account actions can use the same muted text, while the primary action should be more prominent.
- Use a vivid accent button, approximately blue `#1683ed` or an appropriate brand equivalent, with white text, `14px` semibold type, `12–14px` horizontal padding, and `8–10px` radius.
- If a navigation item opens a menu, pair its label with a small downward chevron and keep the icon lighter and smaller than the text.
- Keep the brand area visually distinct through typography and spacing, not through a large decorative mark.

### Spacing, borders, and radius
- Use generous gaps between the three header groups: approximately `48–72px` between the brand and navigation where space allows, and `28–40px` between navigation and account actions.
- Use `24–32px` gaps between individual navigation links, depending on label length.
- Avoid heavy borders. If a divider is needed, use a 1px line around `rgba(255,255,255,0.08)` or a very soft bottom shadow.
- Keep the button radius moderately rounded, around `8px`; do not use pill styling unless it matches the product brand.
- If the content below has a rounded container or panel, let it begin close beneath the header while preserving a small visual separation.

### Interaction and responsive behaviour
- Add a subtle hover transition of roughly `150–200ms`: links should shift toward `#f4f4f5`, and the primary button may brighten slightly or lift by 1px.
- Provide visible keyboard focus states using a 2px accent-colour outline with a small offset.
- Dropdown triggers should expose a clear expanded state and support keyboard navigation; do not rely on hover alone.
- On narrow screens, preserve the brand and primary action when possible, then collapse the navigation into a menu button. The menu should open as an accessible popover or full-width panel using the same dark surface.
- Ensure sufficient touch targets: at least `44px` high for buttons and menu controls.
- Keep the header sticky only if it benefits the page; if sticky, use a slightly opaque dark background and a subtle backdrop blur without reducing text contrast.

### Accessibility
- Use semantic `header` and `nav` elements.
- Give the navigation an accessible label, use real links and buttons, and expose dropdown and mobile-menu state with ARIA attributes.
- Maintain at least WCAG AA contrast for text and controls.

## Never
- Never use the reference product’s logo, wordmark, product name, or exact navigation copy.
- Never copy the reference layout as a pixel-perfect reproduction; adapt the structure to the user’s product and content.
- Never reuse the reference’s illustrations, imagery, icons, or decorative assets.
- Never invent brand claims or product-specific copy before asking for the user’s product context.
- Never sacrifice responsive behaviour, keyboard access, or readable contrast for visual similarity.
