## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074850-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074817179-full.webp
- Component on Kage: https://kage.design/component/convex-hero

## Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero for that product—not a replica of this reference.

## Build a dark developer-product hero
Create a full-width hero section for a technical SaaS, developer tool, or infrastructure product. The composition should feel confident, practical, and slightly editorial: a concise navigation header sits above a two-column hero, with the product promise on the left and a visually rich product/demo panel on the right.

### Layout and alignment
- Use a deep, warm near-black background, approximately `#24191A`, with a centered max-width container around `1180–1240px`.
- Keep the header compact and horizontally aligned: brand mark at the far left, primary navigation beside it, and utility/account actions at the far right. On smaller screens, collapse navigation into a menu and preserve one prominent action.
- Give the hero generous top and bottom padding, roughly `72–96px` above the content and `120–160px` below it on desktop.
- Use a two-column grid with approximately `42%` for copy and `58%` for the product panel. Vertically center both columns, but allow the panel to sit slightly lower than the headline for a more dynamic composition.
- Let the hero transition into the next section through several thick, parallel curved bands or rails. They should run horizontally along the bottom, then bend upward behind or beside the demo panel. Use three distinct accent colours, each on its own layer, with large rounded bends and no visible gradients.
- Stack the columns on mobile. Keep the decorative rails behind the content, simplify their geometry, and prevent them from creating horizontal overflow.

### Typography hierarchy
- Use a bold, condensed or tightly set sans-serif display face for the headline. Set it in uppercase, with very tight line-height around `0.86–0.95`, tracking around `-0.04em`, and a desktop size around `60–76px`. Limit the headline to two or three short lines.
- Make the supporting paragraph substantially smaller, around `18–21px`, with a `1.3–1.45` line-height and a readable maximum width of about `430px`. Use bold emphasis selectively at the beginning or on the central promise.
- Navigation labels should be compact and medium-weight, around `15–16px`. Small labels inside the product panel can use a monospaced or technical face, uppercase styling, and increased letter spacing.
- Ensure the headline remains legible and dominant; do not allow the demo panel or decoration to compete with it.

### Colour, surfaces, and shape
- Use warm off-white text around `#F7F5F0` and muted secondary text around `#D1C7C0`.
- Use a near-black brown hero surface around `#24191A` rather than a neutral black.
- Primary action: a light filled pill or rounded button with dark text. Secondary action: transparent or dark-filled with a thin light border. Buttons should have roughly `999px` radius, `12–16px` vertical padding, and `20–24px` horizontal padding.
- The right-side demo panel should resemble a dark application card: background around `#160F10`, a slightly lighter inner surface around `#282022`, border around `#514547`, and a subtle shadow. Use `10–14px` corner radius and a thin double-surface or inset-border treatment to create depth.
- Inside the panel, organize a small technical heading, a prominent prompt/input row, and two compact command or suggestion cards. Include understated copy affordances such as copy icons, but make them decorative unless the product requires functionality.
- Use accent rails in warm yellow `#F5B51B`, bright red `#F43B36`, and saturated magenta-purple `#92247C` or colours derived from the user's brand. Keep their widths consistent, around `24–28px`, with rounded outer corners.

### Interaction and responsive behaviour
- Add subtle hover states to navigation links, utility pills, buttons, and copy controls. Use a small brightness or background change and a quick `150–220ms` transition.
- Make the primary CTA visually decisive; the secondary CTA should remain clearly available without equal visual weight.
- If the demo panel contains prompts or commands, allow copy controls to provide a small confirmation state such as “Copied”.
- Ensure keyboard focus rings are visible against the dark background.
- At mobile widths, reduce the headline to approximately `44–56px`, keep buttons stacked or wrapped cleanly, and place the demo panel below the copy. Hide or reduce utility navigation if necessary.

## Never
- Never reuse the reference product's logo, product name, navigation labels, headline, paragraph, commands, or button copy.
- Never copy the exact panel content, decorative rail geometry, proportions, or branded colour palette without adapting it to the user's product.
- Never use the reference's logos, icons, illustrations, screenshots, or imagery; use neutral placeholders, CSS shapes, or the user's own assets.
- Never sacrifice readability, responsive behaviour, semantic HTML, keyboard access, or sufficient colour contrast for visual similarity.
