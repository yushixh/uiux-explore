## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060782-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-feature-grid-2

# Build an expandable feature showcase section

## Before you start
Ask me what my product does, who it is for, and what its brand language should feel like. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Goal
Create a spacious, editorial product-feature section for a modern software website. The section should explain several related capabilities while letting one selected capability take visual focus through a large product UI preview. It should feel polished, calm, technical, and conversion-oriented.

## Structure and layout
- Use a full-width, mostly white section with a centered max-width container of approximately 1180–1240px.
- Build a two-column composition on desktop:
  - Left column: approximately 34–38% width, containing the eyebrow, headline, supporting paragraph, link-style CTA, and an accordion list.
  - Right column: approximately 62–66% width, containing a large product preview or abstract UI mockup.
- Vertically align the text area around the upper-middle of the preview rather than strictly at its top.
- Give the section generous vertical padding, approximately 140–190px on desktop. Keep the composition airy and avoid dense card grids.
- Add a subtle transition into the next section if useful: a dark lower band, angled corner treatment, or restrained geometric edge. This transition must support the product’s brand rather than replicate the reference.
- On mobile, stack the text and preview. Put the preview below the introductory content and either keep the accordion open by default or use compact collapsible rows.

## Left-column hierarchy
- Use a small, coloured eyebrow in a compact 12–14px semibold style.
- Use a bold headline in roughly 36–48px desktop type, with tight line-height around 0.98–1.08. Keep it to two or three lines.
- Use a muted supporting paragraph at roughly 16px with 1.45–1.6 line-height and a comfortable maximum width.
- Follow with a small text CTA or inline link, using medium weight and a subtle arrow or directional indicator.
- Separate accordion items with thin horizontal rules rather than enclosing them in cards.
- Each accordion row should contain:
  - a small circular status marker on the left;
  - an uppercase or small-caps category label with modest letter spacing;
  - a chevron or plus/minus affordance on the right.
- The active row expands to reveal a concise description and, optionally, one or more monospace component/API labels. Keep this content scannable.
- Use one vivid accent for the active marker, eyebrow, and active inline labels. In the default treatment, use a violet close to `#6952D9` or adapt it to the brand.

## Product preview treatment
- Show a realistic but generic interface mockup relevant to the selected feature: for example, an authentication panel, admin workspace, profile editor, analytics surface, or configuration dialog.
- Make the active preview the strongest object in the section, with a white or near-white panel, a 1px border around `#D9DDE3`, a radius around 10–14px, and a restrained shadow such as `0 14px 40px rgba(28, 33, 43, 0.12)`.
- Place secondary UI panels behind or around the main preview at low opacity, reduced contrast, or partial cropping. These should suggest a larger system without competing with the selected state.
- Use soft white-to-transparent fades, low-opacity overlays, or a very light cool tint around the preview to blend it into the page.
- Keep mockup controls believable: form fields, tabs, buttons, labels, avatars, or rows should have consistent heights and alignment. Do not use excessive decoration.
- The preview should respond when the accordion selection changes. Update the content, highlighted region, or visible mockup state with a short 180–300ms fade/slide transition.

## Visual language
- Base background: white or `#FCFCFD`.
- Primary text: near-black such as `#17181B`.
- Secondary text: cool grey such as `#62666D`.
- Rules and input borders: `#E5E7EB`.
- Accent: a saturated violet, indigo, blue, or the product’s own brand accent; keep it reserved for active states and small emphasis.
- Use one sans-serif family with a clear distinction between display text, body text, and optional monospace UI/code labels.
- Headings should be dense and confident; body copy should be relaxed and highly legible.
- Keep radii moderate and consistent. Avoid pill-shaped containers except for small status badges.
- Use a restrained shadow system. The page should feel crisp and product-led, not glossy.

## Interaction and accessibility
- Accordion headers must be real buttons with visible hover, focus, and active states.
- Allow one item to remain open at a time unless the product content benefits from multiple expanded items.
- Include keyboard navigation, `aria-expanded`, and an accessible relationship between each trigger and its panel.
- On hover, gently shift the row colour or accent the chevron; do not rely on motion alone.
- Respect `prefers-reduced-motion` and replace transitions with instant state changes when requested.
- Ensure the layout remains usable at narrow widths and that the mockup does not overflow the viewport.

## Content guidance
Use original content based on my product. Create three to five capability categories with one selected by default. The category names, description, interface labels, CTA, and mockup data must all be specific to my product while remaining concise.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the exact reference layout, mockup, accordion labels, or visual assets.
- Never make the preview a decorative screenshot that has no relationship to the selected feature.
- Never use dense gradients, excessive shadows, or generic dashboard filler.
- Never hide the interaction behind non-semantic clickable elements.
- Never sacrifice responsive behaviour, keyboard access, or readable contrast for visual similarity.
