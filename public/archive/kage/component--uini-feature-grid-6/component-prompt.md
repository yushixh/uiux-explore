## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/uini-io/ef5b466a-1fe9-4cb6-9300-79049ee31244-1789059861-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/uini-io/ef5b466a-1fe9-4cb6-9300-79049ee31244-1789059824-full.webp
- Component on Kage: https://kage.design/component/uini-feature-grid-6

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original feature section for that product—not a copy of the reference.

## Build this section
Create a responsive feature-grid section that explains one sophisticated product capability through a two-column composition:

- **Left column:** a small abstract accent mark, a large benefit-led heading, and two short explanatory paragraphs. Keep the copy specific to the user's product and focused on the outcome enabled by the feature.
- **Right column:** a realistic, self-contained product UI mockup showing the capability in use. Use a rules-builder or configuration panel when appropriate: a clear title, grouped conditions, compact controls, a secondary exclusion area, and one strong action. Add a small result/person row beneath or overlapping the main card to show the system's output.
- On smaller screens, stack the copy above the UI preview while preserving generous breathing room and a clear reading order.

## Design language

### Layout and alignment
- Use a wide, centered container with approximately 60–64px horizontal padding on desktop and 20–24px on mobile.
- Split the section into two columns, roughly 42% for narrative and 58% for the interface, with a 72–112px gap depending on viewport width.
- Vertically align the narrative around the visual center of the UI card rather than at its top.
- Keep the left text measure narrow, around 390–460px. Let the interface occupy a generous 580–650px area.
- Place the accent mark above the heading with a 28–36px gap. Separate heading and body copy by 24–32px; separate the two paragraphs by 20–24px.
- Give the UI preview a soft surrounding panel or glow so it reads as a product demonstration, not a floating screenshot.

### Typography
- Use a clean contemporary sans-serif with a restrained, editorial SaaS feel.
- Heading: approximately 40–48px desktop, 34–40px mobile; weight 500–600; line-height 1.05–1.15; use a tight two- or three-line wrap.
- Body: approximately 17–19px; weight 400; line-height 1.65; use muted charcoal rather than pure black.
- UI labels: 13–15px, medium weight. Supporting metadata and tags: 11–12px with relaxed contrast.
- Use sentence case throughout. Avoid excessive uppercase labels or heavy display typography.

### Colour
- Page background: warm near-white, approximately `#FCFCFB` or `#FAFAF8`.
- Primary text: near-black charcoal, approximately `#161616`.
- Body text: muted grey, approximately `#5E625F`.
- UI card: white, approximately `#FFFFFF`.
- UI surround: very pale warm grey, approximately `#F7F7F5`.
- Borders and dividers: soft grey, approximately `#E5E5E1`.
- Accent mark: use a restrained terracotta or coral, approximately `#D77A58`; choose a brand-appropriate equivalent if the user's palette differs.
- Positive/status indicator: muted green, approximately `#2DB487`.
- Primary action: near-black fill with white text; use the user's brand colour when a stronger brand action is appropriate.

### Borders, radius, and elevation
- Use a 1px low-contrast border on the main UI card and controls.
- Main interface card radius: 16–18px. Secondary result row radius: 14–16px. Small controls: 8–10px.
- Use a very soft shadow such as `0 12px 32px rgba(20, 24, 22, 0.06)`; avoid dramatic depth.
- Keep the surrounding preview panel nearly borderless, with subtle tonal separation from the page.
- Buttons should be compact, pill-like or softly rounded, with generous horizontal padding.

### Interface composition and interaction cues
- Make the mockup feel like a working product surface: include a small status dot, a clear rule title, contextual metadata, condition rows, dropdown chevrons, and a prominent action button.
- Represent conditions as compact bordered controls arranged in rows, with enough spacing to remain legible. Include an “add condition” affordance in the accent colour.
- Separate the primary rule area from exclusions with a faint dashed or solid divider and a distinct subheading.
- Include one result row beneath the builder with an avatar initial or neutral status marker, a name placeholder, supporting metadata, and small event tags. This communicates the connection between configuration and outcome.
- Interactions should be visually implied rather than fully animated: controls may show hover borders, the action button may darken slightly on hover, and dropdowns should have clear affordances. If implemented, use subtle 150–200ms transitions.
- Ensure all controls have accessible labels, visible focus states, sufficient contrast, and responsive wrapping.

## Never
- Never use the reference product's logo, product name, brand identity, or exact wording.
- Never copy the reference's interface labels, user names, event names, or CTA copy; invent content for the user's product.
- Never reproduce the reference screenshot pixel-for-pixel or preserve its exact layout proportions if they do not suit the user's product.
- Never add illustrations, stock imagery, decorative photos, or unrelated visual assets from the reference.
- Never turn the UI mockup into a non-functional image if the user's implementation can support semantic HTML and responsive controls.
