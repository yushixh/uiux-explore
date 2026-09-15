## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106638-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106570706-full.webp
- Component on Kage: https://kage.design/component/thousand-feature-grid

# Build an editorial feature-grid section for the user's product

## Before you start
Ask the user what their product does, who it is for, and what their brand identity, colours, typography, and tone should be. Then apply the design principles below to their product rather than reproducing the reference content or branding.

## Goal
Create a responsive feature-grid section that explains three related product capabilities through a calm editorial layout. The section should feel like a carefully composed product story: one primary feature receives a wide horizontal card, while two secondary features sit beneath it in an asymmetric two-column grid.

## Structure and layout
- Use a warm, lightly tinted page background, approximately `#F3F0E7`.
- Constrain the section to a centered content column with a maximum width around 1180–1240px and horizontal gutters of 32–48px on desktop.
- Begin with a large two-line editorial heading aligned to the left. Make the first line darker and more emphatic; make the second line lighter and visually quieter. Keep the heading width narrow enough to create a deliberate line break.
- Add a thin horizontal divider below the heading with a muted neutral colour such as `#D8D4C9`.
- Place a large primary feature card below the divider. It should be full width, horizontally arranged on desktop: explanatory copy on the left and a product-oriented visual or interface diagram on the right.
- Place two supporting cards below the primary card. Use an asymmetric grid: a narrower card on the left and a wider card on the right, approximately 1fr 2fr. Stack these cards vertically on smaller screens.
- Preserve generous empty space inside every card. The layout should feel spacious rather than dense.
- Use CSS Grid for the macro layout and Flexbox for card internals. Keep card content vertically centred where appropriate.

## Card styling
- Cards should use a warm off-white surface around `#FCFBF6`, distinct from the page background.
- Use a very subtle 1px border around `#DDD9CE` and a large, friendly radius around 22–26px.
- Avoid heavy shadows. If depth is needed, use a barely visible shadow such as `0 10px 28px rgba(45, 40, 28, 0.05)`.
- The primary card should have generous padding, roughly 54–64px on desktop. Supporting cards can use 36–40px.
- Keep all card edges aligned to a clear outer grid, while allowing the internal diagrams to have their own inset surfaces.

## Typography hierarchy
- Use a rounded, humanist sans-serif or another soft modern sans-serif for headings. If the user's brand font differs, use the brand font while preserving the same hierarchy.
- The section heading should be large, approximately 44–52px desktop, with tight line-height around 0.98–1.05 and slightly negative tracking.
- Card headings should be bold and compact, around 25–30px, with line-height around 1.05–1.15. Allow intentional wrapping into two lines.
- Body copy should be 15–17px, line-height 1.5–1.65, and use a muted ink colour around `#696861`. Emphasise important phrases with the main text colour `#24231F` rather than relying on colour alone.
- Interface diagrams may use a small uppercase mono or narrow sans label at 10–12px with generous letter spacing, around `0.16em`.
- Use near-black `#22211D` for primary text and a softer grey `#716F67` for secondary text.

## Feature visual language
- Build abstract, product-specific interface diagrams instead of decorative illustrations. Suitable treatments include a split document reader, an access-rule table, a synced workspace panel, a timeline, a data flow, or another visual that directly reinforces each feature.
- Keep diagrams simple and legible: a few rows, labels, badges, folders, code fragments, or status indicators are enough.
- Use inset diagram panels with subtle borders, compact radii around 12–16px, and restrained contrast.
- A dark panel may use `#24231E` with warm light text for contrast; light panels may use `#F8F7F0` and `#FFFFFF`.
- Introduce one or two soft accent surfaces, such as pale blue `#DCEBF2`, muted green `#DCEBD8`, or pale yellow `#F1E8B8`, but adapt these to the user's brand palette.
- Use small pills or status tags with low-saturation fills. Keep labels short and ensure colour is not the only signal of state.
- Diagram annotations should be sparse, aligned, and functional. Do not make them look like a generic dashboard.

## Spacing and rhythm
- Use a vertical rhythm of approximately 20–28px between heading lines, 30–40px between the heading block and divider, and 22–24px between the divider and primary card.
- Leave approximately 20px between the primary card and the lower card row.
- Within cards, separate heading and body copy by 14–18px and copy from diagrams by 28–40px.
- Align text baselines and diagram edges wherever possible to make the composition feel intentional.

## Responsive behaviour
- At tablet widths, reduce card padding and allow the primary card to become a stacked layout if the visual would otherwise become cramped.
- At mobile widths, use 20–24px page gutters, a 32–36px section heading, and stack every card vertically.
- Keep diagrams horizontally scroll-free. Scale, reflow, or simplify them so all essential content remains visible.
- Preserve the asymmetric storytelling hierarchy on mobile by placing the primary feature first, followed by the supporting features.

## Interaction and accessibility
- If cards are clickable, make the entire card the hit area and provide a clear hover/focus state through a slight border-colour shift, surface change, or 1–2px lift. Do not rely on motion alone.
- Use `:focus-visible` outlines with strong contrast.
- Respect `prefers-reduced-motion` and keep any transitions short and subtle.
- Use semantic section, heading, article, and figure elements. Ensure sufficient contrast and meaningful accessible labels for diagrams.

## Never
- Never use the reference product's logo, product name, brand marks, or proprietary terminology.
- Never copy the reference headline, supporting copy, labels, filenames, usernames, code, or interface text.
- Never reuse the reference illustrations, screenshots, diagrams, or imagery; invent new visuals that communicate the user's product.
- Never reproduce the exact content, feature claims, or branded colour system from the reference.
- Never make the result feel like a generic SaaS dashboard, a dense table, or a decorative image gallery.
