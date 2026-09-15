## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106647-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-table

## Before you start
Ask the user what their product is, which variants they want to compare, and what their brand voice and visual identity are. Then apply the principles below to create an original comparison section for that product—not a replica of the reference.

## Build a premium product comparison section
Create a responsive comparison matrix for a high-consideration product with two or more variants. The section should feel calm, editorial, and exceptionally easy to scan.

### Structure and layout
- Place the section on a very light cool-gray page background, approximately `#f5f5f7`.
- Add a concise section heading above the matrix, aligned to the main content container. Use a large, confident headline and optionally a small text link on the opposite side for exploring the wider product range.
- Put the comparison content inside a centered white panel with a generous maximum width, approximately `1100–1250px`, and a large radius around `24–32px`.
- Use a CSS grid for product columns. Keep every product column equal width and align corresponding content to the same vertical rhythm.
- On desktop, use one shared left-side feature-label column only if the product requires explicit row labels; otherwise center each feature inside its product column, as in a visual comparison card.
- Start each column with a large product image area, followed by a small availability or category label, product name, short benefit statement, price, status text, and a clear purchase link.
- Separate the commercial header from the specification rows with a thin horizontal divider, approximately `#d2d2d7`.
- Render feature rows as evenly spaced vertical modules rather than dense spreadsheet cells. Each module may contain a simple monochrome line icon, a short feature label, and optional supporting detail.
- Give prominent numeric specifications their own visual emphasis, using a larger bold value above a compact explanatory caption.
- Preserve generous blank space between rows; the comparison should feel airy rather than compressed.
- Keep the panel padding approximately `48–72px` on desktop and `24px` on mobile.

### Responsive behaviour
- On small screens, do not squeeze all variants into unreadable columns. Allow horizontal scrolling with a clear scroll affordance, or convert the matrix into stacked variant cards while retaining the same feature order.
- Keep the first product or the currently selected product visible when possible.
- Ensure product images, names, prices, and primary links remain easy to compare at narrow widths.
- Make the comparison panel radius and padding smaller on mobile, while preserving the white-on-gray separation.

### Typography
- Use the user’s brand typeface; if none is available, choose a clean modern sans serif with strong legibility.
- Section heading: approximately `48–64px`, weight `600–700`, tight line height around `0.95–1.05`.
- Product names: approximately `24–32px`, weight `600–700`.
- Highlighted specification values: approximately `26–36px`, weight `600–700`.
- Body and feature descriptions: approximately `14–17px`, regular weight, line height `1.3–1.45`.
- Small labels and metadata: approximately `12–14px`, with slightly increased tracking where appropriate.
- Use a consistent center axis for product columns; avoid mixing left- and center-aligned content without a clear hierarchy.

### Colour and controls
- Use near-black text such as `#1d1d1f` for headings and primary information.
- Use muted gray such as `#6e6e73` for descriptions, metadata, and supporting specifications.
- Use a single brand accent for links and primary actions, approximately `#06c` or an appropriate colour from the user’s brand.
- Use white `#fff` for the comparison panel and subtle cool-gray fills for secondary controls.
- Purchase links should look lightweight and editorial, with a small directional arrow or equivalent affordance.
- If the section includes carousel controls, use compact circular or pill-shaped buttons with a soft gray background and visible hover/focus states.
- Use simple, consistent outline icons at approximately `24–40px`; icons should reinforce the meaning of a row, not decorate every line unnecessarily.

### Borders, radius, and elevation
- Prefer whitespace and dividers over heavy borders.
- Use only subtle 1px separators, approximately `#d2d2d7`.
- Use large rounded corners on the main panel, approximately `28px`; use smaller radii, around `18–24px`, for controls or nested cards.
- Avoid strong shadows. If needed, use a barely visible shadow such as `0 8px 30px rgba(0,0,0,.04)`.

### Interaction and accessibility
- Product links, comparison controls, and any carousel arrows must be keyboard accessible with clear focus rings.
- Add hover and pressed states without changing layout or causing content to jump.
- If comparison columns scroll horizontally, support touch scrolling, provide an accessible label, and ensure the scrollbar or navigation controls do not obscure content.
- Use meaningful alt text for product images and accessible labels for icon-only buttons.
- Keep footnote markers and legal details compact, readable, and associated with the relevant feature text.
- Respect reduced-motion preferences; use only short, subtle transitions such as opacity or a small transform.

## Never
- Never copy the reference’s logos, product names, brand marks, or exact product copy.
- Never reuse the reference’s product photography, illustrations, icons, or imagery; use original assets, neutral placeholders, or the user’s own assets.
- Never reproduce the exact number of columns, specifications, prices, labels, or wording from the reference unless the user independently provides equivalent content.
- Never make the table a pixel-for-pixel imitation; preserve the information architecture and design principles while adapting the layout to the user’s product and brand.
- Never sacrifice accessibility or mobile usability for visual similarity.
