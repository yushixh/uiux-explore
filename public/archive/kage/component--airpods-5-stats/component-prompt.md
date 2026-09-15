## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106646-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-stats

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original version for that product—not a replica of the reference.

## Build this section
Create a premium product-benefits section made of two connected moments:

1. **A horizontally scrolling feature rail**
   - Place the rail on a clean, warm-white or near-white canvas.
   - Add a centered introductory statement above it: a short, bold headline followed by a slightly lighter supporting sentence. Keep the text block narrow and centered.
   - Use a wide, edge-to-edge carousel that intentionally lets the next card peek into view at the right edge, signalling horizontal continuation.
   - Use three or more cards with consistent widths and generous gaps. On desktop, cards should feel editorial rather than like compact UI tiles; on mobile, show one full card and a partial next card.
   - Each card has a visual panel above its copy. The panels can use contrasting solid colours, soft gradients, product UI mockups, or abstract visual treatments appropriate to the user's product. Keep each visual panel tall, with a substantial corner radius around 18–24px.
   - Align all card copy to the same left edge. Use a concise bold lead-in followed by explanatory body copy. Optional footnotes or availability notes should be smaller and lower contrast.
   - Add small circular previous/next controls below or to the lower-right of the rail. Use muted fills, clear hover states, keyboard focus states, and disabled styling at the ends. Support touch dragging and accessible labels.

2. **A dramatic stats / proof block**
   - Follow the rail with a large full-bleed visual section that feels like a change of scene.
   - Use a vertically oriented background gradient: begin with a pale tint at the top, intensify into a saturated brand colour through the middle, and resolve into a deep, dark version of that colour near the bottom. Example starting palette: #F3FFF9, #7BE9B0, #18C477, #005B43. Adapt these values to the user's brand.
   - Center all content on the main axis. Start with a small category label, then an oversized two- or three-line headline. The headline should be the dominant element, with a tight line-height around 0.9–1.0 and a maximum width that creates a strong poster-like composition.
   - Add a subtle reflected or fading echo of the headline beneath the main headline. Keep it low opacity and blur or mask it into the gradient so it reads as atmosphere, not duplicated content. If this effect harms readability or accessibility, omit it.
   - Position a simplified product object, device silhouette, or brand-relevant focal object so it overlaps the lower boundary of the gradient. It should be centered and partially cropped, creating depth and connecting the claim to a tangible product.
   - Continue below with a white or neutral background and a centered supporting proof statement. Place the focal object above or overlapping this area, leaving enough breathing room around it. Use a short bold lead-in and a two- to three-line explanatory paragraph.

## Design language

### Layout and alignment
- Use a centered max-width container for text, approximately 960–1200px on desktop, while allowing the carousel and gradient block to run wider or full bleed.
- Keep the introductory text and stats text optically centered rather than mechanically centered; adjust max-widths to produce balanced line breaks.
- Use generous vertical rhythm: roughly 80–140px between major moments on desktop and 56–96px on mobile.
- Let the carousel establish horizontal momentum, while the stats block becomes a calm, centered interruption.
- Ensure the overlapping object does not obscure essential text at any breakpoint.

### Typography
- Use the user's brand sans-serif or a neutral modern grotesk/system sans fallback.
- Intro headline: approximately 28–40px, bold, line-height 1.08.
- Intro support and card body: approximately 17–21px, medium weight, line-height 1.2–1.35.
- Stats eyebrow: approximately 20–28px, semibold.
- Stats headline: approximately 64–112px on desktop and 48–72px on mobile, bold, tight tracking, line-height 0.9–1.0.
- Supporting proof lead-in: approximately 22–30px, semibold; body copy approximately 18–24px.
- Preserve strong contrast and avoid overly long lines. Use responsive clamp-based sizing.

### Colour
- Base canvas: near-white such as #FAFAFA or #FFFFFF.
- Primary text: near-black such as #1D1D1F.
- Secondary text: neutral gray such as #6E6E73.
- Card panels should use a restrained mix of dark neutral, pale neutral, muted brand colour, and one richer visual treatment. Avoid using colour merely for decoration; use it to differentiate benefits.
- The stats gradient should transition smoothly through 3–5 stops and maintain readable contrast for white type. Test contrast at every point behind text.
- Use white or near-white for the stats headline and supporting text placed over the darker gradient.

### Borders, surfaces, and radius
- Prefer borderless surfaces and tonal separation over visible outlines.
- Card visual panels: 18–24px radius; cards should not look like dense dashboard widgets.
- Carousel controls: 999px radius, approximately 36–44px square, with a soft neutral background such as #F1F1F3.
- If borders are needed, use a 1px low-contrast neutral such as rgba(0,0,0,0.08).
- Use only subtle shadows, for example 0 8px 30px rgba(0,0,0,0.08), and reserve them for the overlapping product object.

### Interaction and motion
- The carousel should support drag/swipe, previous/next buttons, keyboard navigation, and an accessible live-region update for the active slide.
- Animate card movement with a smooth 350–550ms ease-out transition. Avoid excessive parallax or autoplay that makes reading difficult.
- On scroll or entrance, the stats headline and focal object may fade or rise slightly into place; respect `prefers-reduced-motion`.
- Add visible hover, focus-visible, and pressed states to controls. Never rely on colour alone to communicate disabled state.
- Keep the focal object stable and legible; any reflection should be a low-motion visual effect, not a distracting animation.

## Responsive behaviour
- On desktop, show approximately 3 cards and part of the next card depending on viewport width.
- On tablet, show 2 cards and a partial next card.
- On mobile, show one card at a time with a partial preview of the next; reduce panel height and typography while preserving generous whitespace.
- Let the gradient section remain visually tall, but reduce its height enough that the supporting proof appears without an excessively long scroll.
- Reposition or scale the overlapping object on narrow screens so it remains centered and does not cover the proof copy.

## Never
- Never copy the reference's logos, product names, brand names, marketing copy, footnotes, or exact claims.
- Never reuse the reference's product photography, UI screenshots, illustrations, icons, or imagery.
- Never reproduce the exact card artwork, gradient values, text line breaks, object silhouette, or layout proportions.
- Never assume the user's product is a consumer electronics product; translate the structure and storytelling principles to the user's product and brand.
- Never sacrifice readability, keyboard access, motion preferences, or responsive behaviour for visual similarity.
