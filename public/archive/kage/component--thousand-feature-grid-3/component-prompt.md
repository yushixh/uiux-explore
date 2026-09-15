## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106638-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106570706-full.webp
- Component on Kage: https://kage.design/component/thousand-feature-grid-3

# Build a warm editorial feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Goal
Create a responsive feature-grid section that explains several product capabilities through short editorial descriptions and compact interface previews. The section should feel calm, tactile, human, and slightly playful, with enough whitespace for each capability to be understood at a glance.

## Design language

### Overall composition
- Use a warm off-white page background, approximately `#F5F1E7`.
- Center the content in a max-width container of roughly `1180–1280px`, with 48px desktop side gutters and 20–24px mobile gutters.
- Build the section as a vertical narrative:
  1. one or more large feature cards with a strong visual/text relationship;
  2. a section statement or editorial heading that introduces the broader product idea;
  3. a divider and a supporting two-column grid of smaller feature cards.
- Let the layout alternate image/interface placement and text placement where useful. Avoid making every card mechanically identical.
- Keep generous vertical rhythm: approximately 20–24px between cards, 72–120px between major section beats, and 48–64px internal card padding on desktop.

### Feature cards
- Use large rounded cards with a subtle warm-white fill around `#FFFDF8`, thin beige borders around `#DEDACD`, and a soft, restrained shadow such as `0 8px 24px rgba(52,45,30,0.04)`.
- Use a larger highlighted card with a pale accent background, such as butter yellow `#F8E39A`, for one important capability. Keep the accent understated rather than saturated.
- Use a radius of approximately `22–26px` for large cards and `16–20px` for smaller cards.
- Pair every feature with a concise headline, a short explanatory paragraph, and a product-specific UI preview, diagram, table, or document surface. The preview should communicate the capability rather than act as decoration.
- Make the interface previews look like believable product surfaces: use small controls, file rows, labels, tables, highlighted search terms, or diagram nodes as appropriate to the product. Keep details simplified and legible.

### Layout and alignment
- For wide cards, use a two-column grid: roughly 45% text and 55% visual, or reverse it depending on the feature. Align text vertically toward the center of its visual counterpart.
- For the smaller supporting cards, use a two-column desktop grid with equal or near-equal widths. Stack to one column below approximately 760px.
- Align card headings and paragraphs to the same left edge within each card. Keep UI previews optically centered and allow them to slightly overlap or extend within their visual area if that improves depth.
- On mobile, stack each card’s text and preview with a clear reading order. Reduce decorative interface detail rather than allowing it to become tiny.

### Typography
- Use a friendly, rounded grotesk or humanist sans-serif for headings, with a heavy weight around 700–800 and slightly tight tracking around `-0.035em`.
- Use a neutral, highly readable sans-serif for body copy, around 16–18px with 1.45–1.6 line height.
- Use large editorial section headings around 48–64px on desktop, 38–46px on tablet, and 32–38px on mobile; keep line height near `0.98–1.08`.
- Use feature-card headings around 28–36px desktop and 24–30px mobile, with compact line height.
- Emphasize selected phrases in body copy with a darker or heavier weight, but keep the emphasis sparse.
- Use small metadata and interface labels around 11–13px, with generous letter spacing only when they function as UI chrome.
- Keep body and heading colour near ink black `#171714`; use muted text around `#726F67`.

### Colour and visual texture
- Keep the palette restrained: warm ivory background, near-black text, muted beige borders, pale yellow as the primary highlight, and gentle pastel accents inside interface mockups such as powder blue `#B9D8F1`, mint `#C8E8C9`, lilac `#DDBCEB`, and peach `#F2BCA4`.
- Use colour to categorize interface objects or draw attention to a meaningful state; do not use it as random decoration.
- Add very subtle paper-like or dotted texture only inside a diagram/canvas preview if it helps the concept. Keep the page itself clean and accessible.

### Interface previews and interaction
- Build previews from HTML/CSS or the project’s native components rather than relying on screenshots.
- Include convincing micro-details: compact toolbars, search fields, file-type indicators, status pills, highlighted matches, diagram connectors, or small table cells.
- If previews are interactive, support hover/focus states with slight elevation, border-colour changes, or a soft background shift. Do not make the feature cards feel like noisy dashboards.
- Ensure all interactive elements have visible keyboard focus states and sufficient colour contrast.
- Use subtle motion only where helpful: a 150–220ms ease-out transition, gentle preview reveal, or small highlight movement. Respect `prefers-reduced-motion`.

### Responsive behaviour
- At widths below 900px, reduce card padding and headline sizes while preserving the editorial hierarchy.
- At widths below 760px, stack wide cards and supporting cards into a single column.
- Keep touch targets at least 44px high. Prevent interface mockups from overflowing the viewport; crop or simplify them intentionally.
- Preserve the distinctive whitespace and warm card system on mobile rather than compressing everything into dense rows.

## Content guidance
- Write original feature names and descriptions based on my product’s actual capabilities.
- Use a strong, declarative headline for each capability, followed by one or two sentences explaining the practical benefit.
- Keep language specific and concrete. Describe what the user can find, edit, connect, automate, or understand.

## Never
- Never reuse the reference’s logos, product names, feature names, headlines, body copy, or interface text.
- Never copy the reference’s exact card arrangement, UI mockups, diagrams, icons, illustrations, or imagery.
- Never use brand assets or screenshots from the reference.
- Never create decorative visuals that imply functionality the product does not have.
- Never sacrifice readability, accessibility, or responsive behaviour to imitate the reference’s appearance.
