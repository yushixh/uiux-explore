## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067841-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067801-full.webp
- Component on Kage: https://kage.design/component/datafa-feature-grid-2

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colour palette, and visual assets should be used. Then apply the design principles below to that product rather than reproducing the reference literally.

## Build a video-led feature grid
Create a responsive feature section for a modern software marketing page. The section should explain four related capabilities through a balanced 2×2 grid of cards. Each card combines concise explanatory copy with a large product preview area, ideally using the user's own screenshots or short demo videos. The component should feel calm, credible, and highly scannable.

### Layout and alignment
- Place the section inside a centered container with a maximum width of approximately 1020–1080px.
- Add a centered section heading above the grid; use a single strong statement with a comfortable gap before the cards.
- Use a two-column grid on desktop with equal-width cards and a gap of approximately 20–24px.
- Stack cards into one column below roughly 720px; preserve consistent horizontal page padding of 20–24px.
- Give each card a copy area at the top and a media area beneath it. Keep all card media areas the same height or aspect ratio so the grid feels orderly.
- Align card titles and descriptions to the same left edge. Keep the grid visually symmetrical even when descriptions wrap to different lengths.
- Let the section breathe vertically with generous space above and below it; do not crowd it against adjacent sections.

### Typography hierarchy
- Use a clean, modern sans-serif with a bold, compact display style for the section heading.
- Section heading: approximately 42–52px, weight 700–800, tight line-height around 1.05–1.15; reduce to 32–38px on mobile.
- Card titles: approximately 19–21px, weight 650–700, line-height around 1.25.
- Card descriptions: approximately 15–17px, regular weight, line-height around 1.55–1.65, with a muted but readable colour.
- Inline demo or detail links should be visually distinct through an accent colour and underline; keep them integrated into the paragraph rather than adding oversized buttons.

### Spacing
- Use approximately 26–32px of internal card padding above and horizontally before the media begins.
- Give the heading a 44–64px gap before the grid, depending on viewport size.
- Maintain 8px-based spacing increments throughout: small gaps around 8–12px, title-to-description gaps around 10–14px, and grid gaps around 20–24px.
- On mobile, reduce card padding slightly to 20–24px while retaining generous breathing room.

### Colour and surface
- Use a warm off-white page background, approximately `#faf9f7` or `#fbfaf8`, rather than stark white.
- Use near-black text, approximately `#202020` or `#242424`.
- Use a softened neutral for body copy, approximately `#5f5f5f`.
- Use a restrained warm accent for inline links, approximately `#9d6b55` or a brand-appropriate equivalent.
- Cards should use white or near-white surfaces, approximately `#ffffff`.
- Keep the colour system quiet so the product previews provide most of the visual interest.

### Borders, radius, and depth
- Give cards a subtle light-gray border, approximately `#dededb`, with a thin 1px stroke.
- Use a large rounded corner radius around 18–22px for the outer card.
- Add a very soft outer shadow or secondary inset border to create a lifted, premium panel without looking glossy; avoid heavy shadows.
- Clip the media area to the card's lower corners so screenshots and videos sit naturally inside the frame.
- Maintain a clear separation between the copy region and media region, using either whitespace or a faint divider rather than a strong rule.

### Media and interaction
- Use authentic product screenshots, dashboard recordings, maps, charts, or other interface previews supplied by the user. Do not invent misleading product claims.
- Display media at a consistent aspect ratio, such as 16:9 or approximately 1.7:1, with `object-fit: cover` where appropriate.
- If media is a video, show a simple centered play control: a white or translucent circular button with a subtle shadow and a minimal triangular play icon.
- Make the whole media region optionally clickable, with hover feedback such as a slight play-button scale, subtle brightness change, or gentle card elevation.
- Respect reduced-motion preferences and provide accessible labels, keyboard focus states, and captions or alternative descriptions where needed.
- Keep links visibly interactive with hover and focus states; never rely on colour alone.

### Responsive behaviour
- At tablet widths, preserve two columns only if descriptions and media remain comfortable; otherwise transition to one column early.
- On mobile, use full-width cards, reduce heading size, maintain readable line lengths, and avoid cropping important interface details.
- Ensure the section remains visually coherent when titles or descriptions vary in length.

## Never
- Never copy the reference's logos, product names, feature names, or marketing copy.
- Never reuse the reference's screenshots, videos, dashboard imagery, maps, illustrations, or other imagery.
- Never assume the user's brand uses the same typography, colours, wording, or content hierarchy; adapt those elements to the user's product.
- Never fill the cards with decorative visuals that compete with the product evidence.
- Never use inaccessible autoplay video, tiny text, low-contrast links, or interaction that only works on hover.
