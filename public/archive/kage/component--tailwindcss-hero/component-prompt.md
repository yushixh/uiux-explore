## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073866-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-hero

## Before you start
Ask the user what their product is, who it is for, and what brand voice, colours, and visual identity they want. Then apply the principles below to create an original hero for that product rather than reproducing this reference.

## Design language

Build a desktop-first landing-page hero for a developer-oriented or technical product, with a responsive mobile layout.

### Layout and alignment
- Use a full-width white or near-white canvas with a centered content frame, approximately 1180–1240px wide.
- Add a subtle technical grid: very thin horizontal and vertical rules, roughly 1px in `#edf0f2`, with a faint crosshatched or patterned strip at the far edges if it suits the brand. Keep the grid decorative and low contrast.
- Align the hero content to the left edge of the main frame rather than centering the text.
- Reserve generous top and bottom breathing room. On desktop, use roughly 96–120px of top padding and 88–120px of bottom padding; reduce this substantially on mobile.
- Stack the headline, supporting paragraph, and actions in a clear vertical rhythm. Use about 20–28px between headline and paragraph, 38–48px between paragraph and actions, and 80px or more before the lower preview area.
- Below the hero copy, introduce a visual proof area: a large dark code/editor panel on the left and a smaller product/card preview on the right. Let the two items feel like a composed showcase rather than a conventional equal-column feature grid. Collapse them into one column on narrow screens.

### Typography hierarchy
- Use a modern grotesk or geometric sans-serif with a clean, slightly distinctive lowercase form. Avoid decorative display fonts.
- Make the main headline extremely prominent: approximately 88–104px on large desktop screens, with a tight line height around 0.92–1.0 and slightly negative letter spacing. Constrain it to about 820–900px so it wraps into 3 intentional lines.
- Use near-black text, approximately `#05070b` or `#080a0f`.
- Set the supporting paragraph around 18–20px with a 1.45–1.55 line height, medium weight, and a maximum width around 760px. Use a softened charcoal such as `#4b535c`.
- Where the product teaches syntax, highlight inline technical tokens with a bright cyan accent such as `#159fc0`, using a monospace font and semibold weight.
- Optional tiny implementation labels may appear above sections in a faint monospace style around 12px, but they should remain secondary and unobtrusive.

### Colour, borders, and surfaces
- Keep the primary surface white, approximately `#ffffff`, with a barely tinted page frame around `#fafbfc` if needed.
- Use solid black or near-black for the primary action and headline.
- Use cyan or teal sparingly for links, inline code, focus states, and small accents; an approximate range is `#0ea5c6` to `#27b8d2`.
- The code preview should use a very dark navy-black background around `#171b27` or `#111722`, with muted line numbers in `#687181` and syntax colours in cool blue, cyan, lavender, and warm pink.
- Use 1px borders in `#e5e7eb` or `#eef0f2`. Give controls and preview cards modest rounding, around 14–18px for large panels and 999px for pill controls.
- The main CTA can be a black pill with white text. The secondary search/action control should be a white pill with a light border, subtle shadow, an icon on the left, and a muted keyboard shortcut on the right.

### Interaction and responsive behaviour
- Make the primary CTA visibly clickable with a small hover lift or dark-to-charcoal transition; preserve a strong keyboard focus ring using the brand accent.
- Treat the secondary search control as an interactive command/search trigger. Include an accessible label and support a keyboard shortcut visually, but do not make the shortcut the only way to use it.
- Add hover and focus states to any navigation or text links using colour or a restrained underline.
- On screens below roughly 768px, reduce the headline to about 48–64px, keep the line height tight, and allow it to wrap naturally without horizontal overflow.
- Stack actions on very small screens or let them wrap with consistent 12px gaps. Make controls at least 44px tall.
- On mobile, place the code preview above or below the card preview in a single-column flow, and simplify the grid so it does not create visual noise.
- Respect `prefers-reduced-motion`; keep transitions subtle and optional.

## Never
- Never copy the reference's logo, product name, headline, paragraph, navigation labels, code content, card content, or exact calls to action.
- Never use the reference's specific artwork, screenshots, illustrations, imagery, or branded assets.
- Never reproduce the exact grid dimensions, line breaks, component proportions, or visual arrangement pixel-for-pixel.
- Never invent a brand identity that conflicts with the user's product; use their product language, audience, and colours instead.
- Never sacrifice readable contrast or responsive behaviour for decorative fidelity.
