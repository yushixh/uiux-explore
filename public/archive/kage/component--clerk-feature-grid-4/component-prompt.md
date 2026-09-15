## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060783-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-feature-grid-4

# Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Design a split integration-and-testimonial section

Build a responsive website section that transitions from a dark integration ecosystem showcase into a light social-proof area. The section should communicate broad compatibility first, then reinforce trust with customer quotes. Use the user's product, brand, and actual integration categories in the content.

## Design language

### Overall composition
- Treat the section as two visually distinct horizontal bands:
  1. A near-black integration area with a large, restrained grid of partner or platform tiles.
  2. A warm off-white testimonial area that begins with a distinctive angular or chamfered top edge, creating a deliberate visual handoff between the bands.
- Keep the composition editorial and spacious rather than filling every available area.
- Use a centered content container with a maximum width of approximately 1160–1240px and responsive side gutters of 24–40px.
- On desktop, use a broad two-part integration layout: a denser multi-row tile matrix on the left and a wider, more open matrix on the right. The exact number of tiles should follow the user's product ecosystem, not the reference.
- Below it, use a three-column trust layout: a text-led introduction on the left and a masonry-like stack of testimonial cards across the remaining width.
- On mobile, collapse all grids to one column or a simple two-column tile grid, and place the testimonial introduction before the quote cards.

### Integration area
- Background: near-black charcoal around `#111214`; use a subtly lighter or darker tone only if needed to separate bands.
- Use very fine grid dividers around `#2B2D30` or `rgba(255,255,255,0.14)`. Keep borders crisp and low contrast.
- Tiles should be quiet and evenly proportioned, with centered platform marks or neutral icon placeholders above concise labels. Do not make the marks oversized.
- Use tile heights around 138–180px on desktop, with consistent internal alignment and generous empty space.
- Labels should be white or soft gray, approximately `#F4F4F2` / `#B9BABD`, set in a compact 13–15px medium-weight sans serif.
- If the product has different integration tiers, use grouping or tile scale to imply hierarchy, but avoid adding unnecessary badges or decorative UI.
- Allow the grid to feel slightly asymmetrical through different grouped regions, while maintaining a clear baseline and shared outer edges.

### Transition edge
- Introduce the light section with a shallow, full-width top shape using clipped corners, a polygon, pseudo-element, or SVG mask.
- The edge should rise toward the center content and dip back toward the viewport edges, with angled corners rather than a rounded wave.
- Keep the transition subtle and architectural: do not use gradients, dramatic curves, or a large illustration.
- The light surface should be approximately `#F7F7F5` or another brand-appropriate warm neutral.

### Testimonial area
- Use a generous vertical padding range of roughly 96–150px on desktop and 64–88px on mobile.
- The introductory column should be vertically aligned around the upper-middle of the card field, leaving enough breathing room above and below.
- Heading: a strong 30–42px sans-serif with tight line height around 1.05–1.15, dark ink around `#17181A`, and a maximum width that encourages two or three lines where appropriate.
- Supporting copy: 15–18px, line height 1.45–1.65, muted gray around `#6D7075`, with a readable measure of roughly 300–380px.
- Quote cards should be white or near-white, approximately `#FFFFFF`, with thin borders around `#E2E3E1`, a subtle shadow such as `0 8px 24px rgba(20,20,20,0.06)`, and a radius of 12–16px.
- Cards should use generous internal padding of 20–28px. Keep quote text between 14–16px with 1.45–1.6 line height.
- Arrange cards in uneven vertical stacks or a light masonry rhythm, but preserve consistent column widths and comfortable gaps of 14–20px.
- Each testimonial can end with a compact author row containing a small circular or rounded avatar, name, and secondary identifier. Use muted metadata and avoid letting author details compete with the quote.
- If an auxiliary trust badge or CTA is needed, style it as a small pill with a pale neutral background, compact typography, and minimal iconography. It should support the content rather than become a focal point.

### Interaction and accessibility
- Integration tiles may gain a restrained hover state: slightly brighter border, subtly lifted surface, or a small color shift in the icon. Avoid flashy animations.
- Testimonial cards may lift by 2–4px on hover with a faster 160–220ms transition, but remain static on touch devices.
- Make any linked tile, quote, or CTA keyboard accessible with visible focus rings in a brand accent color.
- Preserve strong text contrast in both bands, provide meaningful alt text for real logos or avatars, and ensure the clipped transition does not obscure content at any breakpoint.
- Respect reduced-motion preferences.

## Content guidance
- Use concise, product-specific integration labels and believable testimonial excerpts supplied by the user or generated as clearly marked placeholder content.
- The copy should move from ecosystem breadth to customer confidence: first show what the product connects to, then show why people trust it.
- Avoid overloading the section with explanations; the grid and card rhythm should do most of the communication.

## Never
- Never copy the reference's logos, product names, testimonial copy, usernames, avatars, or brand marks.
- Never use the reference product name or imply an affiliation with it.
- Never reuse the reference's exact grid counts, card ordering, spacing values, wording, or visual assets as a one-to-one reproduction.
- Never include broken-image placeholders; use the user's assets, tasteful neutral placeholders, or simple CSS/inline icons.
- Never add unrelated illustrations, stock imagery, or decorative graphics that compete with the integration grid and testimonials.
- Never sacrifice responsive behavior, semantic structure, keyboard access, or readable contrast for visual similarity.
