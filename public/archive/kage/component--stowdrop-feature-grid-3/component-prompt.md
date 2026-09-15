## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067823-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-feature-grid-3

# Before you start

Ask the user what their product does, who it is for, and what visual brand they want to use. Apply the principles below to their product rather than reproducing the reference literally.

## Build an editorial feature-grid section

Create a responsive feature-grid section for a modern software product. The section should communicate several capabilities through a calm, premium, dark interface with a deliberately varied card layout: one prominent feature card, a pair of supporting cards, and a wide visual card below. The result should feel like a product story, not a generic collection of marketing cards.

### Layout and alignment

- Use a near-black page background, approximately `#090A0A`.
- Center the section in a container around `1180–1240px` wide, with generous horizontal gutters: `48px` on desktop, `20–24px` on mobile.
- Build the grid with consistent `20–24px` gaps.
- On desktop, make the primary feature span the full grid width and use a two-column composition: explanatory copy on the left and a realistic product UI preview on the right. Let the primary card be visually dominant.
- Follow it with an asymmetric two-card row: a narrower text-led card and a wider card containing an interface or editor preview. Use roughly a `1fr 2fr` ratio, but allow the exact ratio to adapt to content.
- Finish with a wide gallery or visual card spanning the full width. The preview should demonstrate the feature rather than merely decorate the card.
- Keep all card content aligned to a clear inner padding system, generally `24–36px`; align eyebrow labels, headings, body copy, and previews to shared vertical edges.
- On smaller screens, collapse to one column. Preserve the feature priority: primary feature first, then supporting cards, then the wide visual card. Avoid squeezing desktop columns into unreadable widths.

### Typography hierarchy

- Use a clean contemporary sans-serif with slightly tight tracking and strong legibility.
- Use small uppercase eyebrow labels in a warm accent colour, around `11–12px`, with `0.14–0.2em` letter spacing.
- Use card headings around `24–32px`, with a tight line height of `1.05–1.15` and medium-to-semibold weight.
- The most important heading may reach `36–48px` on desktop, but should remain compact and editorial rather than oversized.
- Use body text around `15–17px`, `1.55–1.7` line height, and a muted grey such as `#969796`.
- Keep paragraphs relatively narrow, approximately `38– fifty characters` per line, so the text remains easy to scan beside the UI previews.
- Use short, specific feature descriptions. Each card should explain a user benefit and, where useful, mention the interaction or workflow it enables.

### Colour and surfaces

- Use a near-black outer background: `#090A0A`.
- Use dark charcoal card surfaces around `#151617` or `#171819`.
- Use a slightly lighter inset preview surface around `#1D1F20` or `#202223`.
- Set primary text to warm white, approximately `#F0F0EC`; secondary text to `#969796`.
- Use a restrained orange/amber accent for eyebrow labels, active states, tiny controls, and selected elements, approximately `#E87532` or `#F06D22`.
- For the primary feature, introduce a very subtle warm brown tint or gradient behind the card, for example `#24150F` fading into `#17110E`, while keeping contrast high.
- Do not use many competing accent colours. If the product genuinely needs categories, use desaturated alternatives and reserve the brightest accent for the active state.

### Borders, radius, and depth

- Give cards a thin, low-contrast border such as `1px solid rgba(255,255,255,0.12)`.
- Use rounded corners around `16–20px` for outer cards and `10–14px` for inset UI previews.
- Avoid heavy shadows. Use subtle separation, a faint inner highlight, or a soft shadow such as `0 12px 40px rgba(0,0,0,0.18)` only where needed.
- Let the card surface and border do most of the visual work; the section should feel tactile but not glossy.

### Product-preview composition

- Build previews as believable, simplified fragments of the user's product: lists, tabs, editor panels, tags, gallery tiles, checkboxes, or status rows.
- Keep preview controls compact and quiet. Use thin dividers, muted labels, and small active pills rather than oversized decorative UI.
- Make one or two states visibly active using the warm accent: a selected tab, highlighted row, checked item, caret, or focused field.
- For an editing-oriented preview, show hierarchy through heading sizes, muted metadata, a text cursor, inline code, or a small note panel.
- For a gallery-oriented preview, use varied tile aspect ratios and preserve the apparent shape of content rather than forcing every tile into a square.
- Use CSS-generated placeholders, gradients, abstract blocks, or product-relevant sample content instead of borrowed screenshots or recognizable third-party imagery.

### Interaction and responsive behaviour

- If cards are interactive, provide subtle hover feedback: slightly brighten the border, lift the card by `1–2px`, or increase preview contrast.
- Keep transitions quick and understated, around `160–220ms` with an ease-out curve.
- Ensure hover effects are also available through focus-visible states for keyboard users.
- Preserve readable contrast and touch targets of at least `44px` for clickable controls.
- On mobile, stack previews below their explanatory copy and reduce card padding to `20–24px`.
- Do not make the entire section feel like a carousel; the grid should be scannable at a glance.

### Content structure

Use content appropriate to the user's product, following this pattern:

1. **Primary feature:** a concise eyebrow, a benefit-led heading, one explanatory paragraph, and a large UI preview.
2. **Supporting feature:** a short workflow or shortcut story with a small, tactile UI demonstration.
3. **Deep-dive feature:** a larger preview showing the product's distinctive interaction or organization model.
4. **Wide visual feature:** a full-width gallery, dashboard, timeline, or workspace preview that demonstrates breadth and visual rhythm.

The copy should be original to the user's product. Keep it concrete, confident, and operational; avoid vague claims such as “the future of productivity.”

## Never

- Never copy the reference site's logos, product names, brand identity, or exact wording.
- Never reuse the reference's copy, labels, shortcuts, screenshots, illustrations, imagery, or recognizable sample content.
- Never make the layout dependent on the reference's exact dimensions or card text; adapt the grid to the user's content and brand.
- Never use stock imagery or decorative illustrations unless the user's product specifically requires them.
- Never sacrifice readability, accessibility, or responsive behaviour to imitate the reference appearance.
