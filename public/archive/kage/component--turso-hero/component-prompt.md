## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073738-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Component on Kage: https://kage.design/component/turso-hero

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero for my product—not a copy of the reference.

## Build a developer-focused hero section
Create a responsive, dark-mode hero for a software or developer product. The section should communicate the product's core promise immediately, make the implementation feel tangible through a code-oriented preview, and provide one clear primary conversion action.

### Structure and layout
- Use a very dark near-black page background, approximately `#0b0f12` or `#0d1114`.
- Include a compact top navigation inside the hero: brand mark area on the left, a horizontal set of product/navigation links in the centre or beside it, and authentication plus a primary action on the right. On small screens, collapse links into a menu and keep the main CTA visible where practical.
- Separate the navigation from the hero with a subtle 1px horizontal border, approximately `#293238`.
- Below the navigation, use a two-column hero grid with a text block on the left and a product/code preview on the right. Keep the content inside a centred max-width container of roughly `1160–1240px`, with generous side padding of `32–56px` on desktop.
- Vertically align the text and preview around the centre of the hero. Let the text column occupy roughly 45% and the preview 55%, with a `56–88px` gap.
- Place a trust or social-proof strip directly below the main hero content. Treat it as a bordered panel or divided row, not as a competing headline.
- On mobile, stack the text first and preview second, then place the trust strip below. Avoid horizontal overflow; code should scroll internally if necessary.

### Typography hierarchy
- Use a modern grotesk or system sans-serif with strong weight contrast and tight display tracking.
- Make the main headline large and compact: approximately `56–72px` on desktop, `0.92–0.98` line-height, `700–800` weight. Reduce to approximately `40–48px` on mobile.
- Break the headline into intentional lines for rhythm. Use the primary text colour for the setup and a vivid accent colour for the most important promise or outcome.
- Use an accessible off-white for the headline, approximately `#f4f7f6`; use a muted grey for supporting text, approximately `#8b9497`, at `18–20px` with `1.6` line-height and a readable maximum width around `480px`.
- Keep navigation and button labels compact and confident, generally `14–16px` with medium or semibold weight.

### Colour and visual language
- Keep most of the interface monochrome so the product promise and CTA carry attention.
- Use one energetic mint/teal accent for highlighted headline text, links, focus states, and primary buttons. A useful starting point is `#42e8c2` or `#4be8c5`; adapt it to the user's brand.
- Use near-white text on the primary CTA, with a dark text colour if the accent has sufficient contrast. Verify WCAG contrast rather than relying on colour alone.
- Keep secondary text and code comments subdued, but never below usable contrast.

### Code or product preview
- Build the preview as a realistic framed interface rather than a generic rectangle: a rounded panel with a thin border, a small top bar, a tab or filename, and syntax-highlighted sample content relevant to the user's product.
- Use a panel background slightly lighter than the page, approximately `#10161a`, with a border around `#293238` and a radius of `10–14px`.
- Add restrained metadata in the top bar, such as a filename, status, or environment label. Keep it visually secondary.
- Use a dark editor surface, comfortable internal padding of `18–24px`, a monospace font around `13–15px`, and `1.8–2` line-height.
- Syntax highlighting should use a small, coherent palette: muted grey comments, lavender or pink keywords, mint strings/functions, and blue-green values. Do not use rainbow colouring.
- If interaction is visible, allow tabs or a copy action to work and provide keyboard focus states; otherwise make it a static preview with no misleading controls.

### Spacing, borders, and shape
- Use a consistent spacing scale based on 8px. Give the hero text block approximately `28–36px` between headline, paragraph, and CTA.
- Make the primary CTA a pill or softly rounded button with approximately `10–24px` radius, `14–18px` vertical padding, and `22–28px` horizontal padding.
- Add a subtle hover state: slightly brighten the mint, lift the button by 1px, or add a restrained glow. Include a visible focus ring.
- Keep borders thin and low contrast. Use rounded corners consistently, but avoid excessive cards or decorative containers.
- The trust strip should use muted text and monochrome customer/product names or abstract placeholders. Give it generous padding and clear vertical separators if multiple items are shown.

### Content and behaviour
- Write original, product-specific copy after learning the user's positioning. The headline should express a memorable outcome in one or two short statements; the paragraph should clarify what the product enables and why it is different.
- Use one dominant hero CTA and, only if needed, a quieter secondary action. The CTA should state a concrete next step.
- Ensure semantic heading order, descriptive button labels, keyboard navigation, reduced-motion support, and responsive behaviour.
- On hover, links may change to the accent colour and reveal a small chevron for menus. Keep animation quick and subtle—roughly `150–220ms`—and do not animate the headline or code excessively.

## Never
- Never copy the reference's logo, product name, headline, paragraph, navigation labels, code, customer names, or exact marketing language.
- Never reuse the reference's brand identity as the user's identity; adapt the palette, type, copy, and code example to the user's product.
- Never include the reference's illustrations, imagery, mascots, customer logos, or distinctive graphic assets.
- Never make the code preview decorative at the expense of readability or invent controls that do not work.
- Never use excessive gradients, noisy backgrounds, low-contrast text, or a dense navigation that competes with the hero message.
