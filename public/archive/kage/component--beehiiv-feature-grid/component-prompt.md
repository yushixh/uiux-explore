## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/beehiiv-com/23eb8ac3-d7aa-449f-95ad-92bcd925810d-1789067453-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/beehiiv-com/23eb8ac3-d7aa-449f-95ad-92bcd925810d-1789067406-full.webp
- Component on Kage: https://kage.design/component/beehiiv-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a responsive feature-grid section that introduces a product’s major capabilities through a premium, editorial bento layout. It should communicate breadth quickly, pair each capability with a believable product-interface preview, and feel polished without becoming visually noisy.

## Design language

### Layout and alignment
- Use a very dark full-width section with a centered content container, approximately `max-width: 1200–1280px`.
- Start with a two-column introductory row: a large, left-aligned statement on the left and a concise explanatory paragraph on the right. Keep the columns visually balanced rather than centering the copy.
- Follow with a bento grid of 5–7 feature cards. Use intentional variation in card widths: alternate wide cards with narrower cards, while keeping the overall grid aligned to a consistent column system.
- A useful desktop structure is a 12-column grid with cards spanning 4, 5, 7, or 8 columns. Make card heights vary slightly to create rhythm, but keep each row visually stable.
- Place the feature title and short description at the top-left of every card. Put a small square action affordance at the top-right, such as a plus symbol or arrow, without making it look like a primary button.
- Anchor each interface preview toward the lower edge of its card. Let previews extend beyond or crop against the card boundaries to create depth; do not force every preview into a perfectly contained screenshot frame.
- On tablet, reduce the layout to two columns. On mobile, use one column, preserve the order of importance, and allow previews to remain large enough to understand.

### Typography hierarchy
- Use a bold, compact display typeface for the introductory heading. Set it in uppercase or tightly tracked sentence case, with a weight around `700–800` and a desktop size around `48–64px`.
- Keep the introductory heading width constrained so it wraps into 3–4 deliberate lines.
- Use a clean sans-serif for supporting copy and card content. Card titles should be around `22–26px`, semibold or bold; descriptions should be `16–18px` with generous line height around `1.45`.
- Use off-white text rather than pure white for most content. Keep hierarchy clear through size, weight, and opacity rather than many colours.
- On smaller screens, scale the display heading to approximately `36–44px` and avoid awkward single-word lines.

### Colour and atmosphere
- Use an almost-black navy background, approximately `#07051A` or `#08061C`.
- Use cards with a subtly lighter blue-violet base, approximately `#171536` to `#211B4B`.
- Add soft, blurred radial gradients inside cards: violet-blue around `#403D9A`, indigo around `#25245E`, and a restrained magenta accent around `#B54B9F`. Keep opacity low and transitions diffuse.
- Use warm off-white text around `#F6F4F2`, with secondary text around `#D2D0DB` or at roughly 80% opacity.
- Reserve a vivid pink/magenta accent, approximately `#F05BB8`, for the small action icon, selected states, and occasional interface details.
- Avoid making every card equally colourful. The glow should be atmospheric and support the interface preview, not compete with it.

### Cards, borders, and radius
- Give cards a moderately rounded radius of approximately `10–14px`.
- Use a very subtle 1px border, around `rgba(255,255,255,0.08)`, to separate cards from the dark background.
- Use a faint inset highlight or top-edge sheen rather than a heavy drop shadow.
- Keep card padding around `24–28px` on desktop and `20–22px` on mobile.
- The action affordance should be a compact square, around `42–48px`, with a translucent indigo background, slight radius around `6–8px`, and a thin or bright pink plus/arrow mark.

### Interface previews
- Create original, simplified UI mockups that relate to the user’s product: dashboards, editors, lists, charts, settings panels, or content views.
- Build previews from neutral surfaces such as `#F7F7F5`, `#FFFFFF`, and pale lavender-gray, with small dark text and restrained accent colours.
- Use layered panels, overlapping windows, cropped edges, and slight perspective or offset positioning to make the cards feel active.
- Keep preview detail legible at a glance, but do not fill the mockups with dense unreadable text. Use short invented labels relevant to the user’s product.
- The preview should occupy most of the lower card area, with enough overlap or cropping to suggest a larger product ecosystem.

### Interaction and motion
- Make each card feel interactive with a subtle hover state: slightly brighten the border, increase the gradient glow, and translate the preview upward by `2–5px`.
- Animate the plus/arrow affordance with a small rotation or colour shift on hover, but keep the interaction understated.
- Use a short ease-out transition around `180–260ms`.
- Respect reduced-motion preferences and keep all content accessible in the DOM, even if previews are decorative.
- If cards link elsewhere, make the entire card the hit target and provide a clear focus-visible outline.

### Responsive and accessibility requirements
- Ensure the grid never causes horizontal scrolling, especially where previews are intentionally cropped.
- Maintain readable contrast for all text and interactive elements.
- Use semantic headings and links, descriptive accessible names for card actions, and mark purely decorative mockups as `aria-hidden`.
- Preserve meaningful card ordering on mobile; do not let visual variation obscure the content hierarchy.

## Never
- Never copy the reference’s logos, product names, brand marks, or customer names.
- Never reuse the reference’s exact feature labels, marketing copy, screenshots, UI text, or interface layouts.
- Never include the reference’s illustrations, imagery, or recognizable visual assets.
- Never make a pixel-for-pixel clone; translate the layout principles into the user’s own product and brand.
- Never rely on imagery alone to explain a feature, and never sacrifice readability for decorative gradients.
