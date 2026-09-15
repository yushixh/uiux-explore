## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060472-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/posthog-com/73877279-c1a4-4217-acde-d4b5e92c7eb5-1789060452-full.webp
- Component on Kage: https://kage.design/component/posthog-navigation

## Before you start
Ask me what my product does, who uses it, and what its brand personality and visual identity are. Then apply the principles below to create an original navigation system for my product—not a copy of the reference.

## Design goal
Build a desktop-first application navigation shell for a software product. Use a persistent global bar across the top, slim vertical navigation rails at the left and right edges, and a large central workspace that visually sits above the background. The navigation should feel friendly, slightly playful, and highly scannable while keeping the current product area obvious.

## Reusable design language

### Layout and alignment
- Use a full-viewport shell with a horizontal top bar inset slightly from the viewport edges or aligned to a comfortable outer gutter.
- Keep the top bar compact, approximately 48–56px high, with the brand mark at the far left, primary links immediately after it, and utility actions at the far right.
- Place the main navigation in a narrow left rail and optional secondary or contextual navigation in a narrow right rail. Rails should remain visually quieter than the central workspace.
- Reserve the central region for the current page or dashboard. Give it a generous max-width and use a large rounded top container or panel to establish a distinct workspace boundary.
- Align rail items to a consistent vertical rhythm. Each item should have an icon above or beside a short label, with enough room for two-line labels where necessary.
- On smaller screens, collapse both rails into a menu or bottom navigation and allow the top-bar links to become a compact menu.

### Typography hierarchy
- Use a modern sans-serif with strong legibility and a mildly geometric or humanist character.
- Use medium or semibold weight for navigation labels, regular weight for secondary labels, and bold weight for the active page or primary action.
- Keep top-level navigation around 13–15px, rail labels around 12–14px, and prominent workspace headings around 32–48px depending on the product.
- Use tight line-height for headings and relaxed line-height for explanatory text or wrapped rail labels.

### Colour
- Adapt the palette to the user's brand, but preserve clear tonal roles:
  - page/background layer: a muted, lightly tinted neutral such as `#DDE8D5` or the brand's softest surface colour;
  - central workspace: pale warm white or translucent light surface such as `#F4F4E9`;
  - primary text: deep near-black navy such as `#101827`;
  - muted text: olive-gray or neutral gray such as `#566052`;
  - primary action: saturated amber/orange such as `#F3A31A`;
  - active navigation accent: vivid blue such as `#277CF2`;
  - borders and dividers: low-contrast gray-green such as `#AAB5A3`.
- Give active navigation a visible but compact treatment: a coloured icon, tinted background, underline, or small accent indicator. Do not make every navigation item equally loud.
- Ensure text and icons meet accessible contrast ratios, especially over textured or tinted backgrounds.

### Borders, surfaces, and radius
- Use thin 1px borders with moderate contrast to define the top bar, cards, and workspace without making the shell feel rigid.
- Give the main workspace a large radius, approximately 22–32px, and use smaller 6–12px radii for controls and utility buttons.
- Use restrained shadows: a soft, broad shadow under the central workspace and a subtle inset or border around the top bar.
- The top bar may use a lightly translucent or opaque surface, but it must remain readable over the page background.

### Interaction and states
- Make the active route unmistakable through a combination of icon treatment, text weight, and a background or accent marker.
- Add hover states that gently brighten the item surface or shift the icon colour; avoid large movement that destabilizes the vertical rail.
- Make the primary top-right CTA visually dominant with a filled amber button and a slightly darker lower edge or shadow for tactile emphasis.
- Keep search, help, account, and other utilities compact and icon-led, with accessible tooltips and visible keyboard focus rings.
- If the rail can expand, use a short easing transition and preserve the active item position. On touch devices, provide a clear open/close control and prevent the rail from obscuring essential content.
- Ensure every icon-only control has an accessible label and every navigation item is keyboard reachable.

## Never
- Never reuse the reference site's logos, product names, navigation copy, illustrations, background artwork, or imagery.
- Never reproduce the exact menu labels, icon designs, wording, spacing measurements, or page composition from the reference.
- Never make the navigation dependent on colour alone to communicate the active state.
- Never add decorative texture or imagery that reduces label readability or makes the product feel like a visual copy.
- Never hide essential navigation or account actions behind an unexplained interaction on desktop.
