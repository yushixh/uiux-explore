## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106471-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfolio/bf50ab71-633d-4b86-816e-5951eb096cd4-1789106444729-full.webp
- Component on Kage: https://kage.design/component/wealthfolio-hero

# Build an editorial finance-product hero section

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, typography, and primary conversion goal are. Then apply the principles below to my product rather than reproducing the reference literally. If I do not provide a product preview, create a neutral, believable interface mockup using my product’s domain.

## Goal
Create a responsive landing-page hero for a trustworthy software product. The section should feel calm, premium, private, and considered, with the product interface acting as the main visual proof beneath the message.

## Structure and layout
- Use a warm, near-white canvas with a centered content column and generous vertical breathing room.
- Place a compact top navigation above the hero when the component includes navigation: brand at left, text links in the middle/right, utility icons, and one dark rounded CTA at the far right. Keep the header on a single row at desktop and collapse it cleanly on mobile.
- Center the hero copy in a constrained width of roughly 700–800px.
- Use a two-part headline: a strong upright phrase followed by a contrasting italic phrase. The headline should be short, memorable, and specific to the user’s product outcome.
- Add a supporting paragraph below the headline, ideally with one or two important product qualities highlighted using marker-like accent backgrounds rather than bold UI badges.
- Put the main CTA and a secondary proof/action control side by side on desktop. On small screens, stack them or allow them to wrap without cramped spacing.
- Add a quiet reassurance line below the actions, such as an account, pricing, privacy, or setup reassurance relevant to the product.
- Add a low-profile segmented product-area switcher or feature rail above the preview if the product has multiple core areas. Make one segment active with a white surface and subtle shadow.
- Anchor a large product preview below the switcher. The preview may be a browser/dashboard frame with a smaller mobile device overlapping its lower-right edge. Keep the preview wider than the copy and let it approach the section edges on smaller screens without causing horizontal page overflow.
- Finish with a small centered caption or text link beneath the preview that explains what the preview demonstrates.

## Design language

### Typography
- Use a high-contrast editorial serif for the main headline, approximately 56–68px on desktop, 42–50px on tablet, and 34–40px on mobile; use tight line-height around 0.95–1.05.
- Use the italic style only for the outcome phrase or a purposeful emphasis, not for every heading.
- Use a restrained monospace or humanist sans-serif for supporting copy, navigation, metadata, tabs, and interface labels. Supporting text should feel precise and technical, around 16–20px with a 1.4 line-height.
- Use compact uppercase or small monospace labels for secondary actions and interface controls.
- Keep the headline weight dark and confident while maintaining readable contrast.

### Colour
- Base background: warm ivory, approximately `#FAF8F3` or `#F8F5EF`.
- Primary text: soft near-black, approximately `#292927`.
- Secondary text: muted warm grey, approximately `#77746C`.
- Primary button: near-black `#1F201E` with ivory text.
- Accent highlight: muted warm yellow, approximately `#E8D84A` or `#F0DD58`; use it sparingly behind selected words.
- Product-preview surfaces: pale cream `#F4F1DF`, with muted sage/olive chart fills around `#DDE2BE` and borders around `#C7CDA8`.
- Keep the overall palette desaturated and low contrast apart from the headline, CTA, and key data points.

### Borders, surfaces, and radius
- Use fine warm-grey borders, approximately `#E7E2D8`, at 1px.
- Give buttons and pills a generous radius, generally 999px.
- Use modest 10–18px radii for cards, browser frames, tabs, and preview surfaces.
- Product mockups can use a subtle shadow such as `0 18px 45px rgba(55, 52, 40, 0.10)` and a faint outer border.
- Avoid glossy gradients; prefer flat, paper-like surfaces with very subtle tonal separation.

### Product preview
- Build a convincing but generic dashboard preview: a slim top or side navigation, a prominent metric, a calm line/area chart, time-range controls, and stacked account or category rows.
- Use realistic hierarchy and alignment, but do not use actual customer data or copy from the reference.
- If adding a phone mockup, use a dark bezel, compact radius, restrained shadow, and a simplified responsive version of the dashboard. It should overlap the desktop frame enough to feel layered, but never obscure the primary chart entirely.
- On mobile, reduce or hide the phone overlay if it would make the interface unreadable; preserve the product preview as the visual anchor.

### Spacing and alignment
- Use a max-width around 1180–1240px for the full section.
- Give the hero copy approximately 100–140px of top space after the header on desktop, less on mobile.
- Use 20–28px between headline and supporting copy, 28–36px between copy and actions, and 24–32px between actions and reassurance text.
- Keep the switcher close to the preview, with about 24px of separation.
- Use generous section padding, roughly 48–80px horizontally and 56–100px vertically depending on viewport.
- Align all copy and controls to a shared center axis; align the product frame to the same overall container rather than letting it drift independently.

### Interaction
- Primary CTA should have a subtle colour or elevation change on hover and a visible keyboard focus ring.
- Secondary proof/action controls should feel lighter than the primary CTA, with a bordered or transparent treatment.
- Tabs or feature segments should transition smoothly between active and inactive states; if interactive, update the preview content without shifting the entire layout.
- Add restrained hover states to navigation links and icon buttons. Avoid excessive motion.
- If the preview animates, use a slow, low-amplitude chart or panel transition and respect `prefers-reduced-motion`.
- Ensure all buttons, links, tabs, icons, and mockup controls have accessible labels and sufficient contrast.

## Responsive behaviour
- At widths below roughly 760px, stack navigation controls, center the copy, let CTAs fill or nearly fill the available width, and reduce headline size.
- Make the feature rail horizontally scrollable or wrap it into a compact grid rather than allowing clipping.
- Scale the desktop preview to the viewport and remove decorative overlap when needed. Never create horizontal scrolling on the page.
- Keep the product frame legible and preserve the strongest metric/chart hierarchy at every breakpoint.

## Never
- Never copy logos, product names, slogans, exact copy, numbers, navigation labels, icons, or UI text from the reference.
- Never reuse the reference brand identity, including its specific wordmark, symbol, or exact typography pairing.
- Never include illustrations, photographs, or decorative imagery from the reference.
- Never make the hero a pixel-for-pixel recreation; translate the composition and principles into the user’s own product and brand.
- Never sacrifice accessibility, responsive behaviour, semantic HTML, or keyboard interaction for visual similarity.
