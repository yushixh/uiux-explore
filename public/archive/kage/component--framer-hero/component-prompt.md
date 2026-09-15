## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060389-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-hero

# Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero section for my product—not a copy of the reference.

## Build this section
Create a full-width landing-page hero for a modern software product, with a dark editorial presentation and a large product-demo visual beneath the introductory content. The section should feel polished, confident, and product-led, with enough visual specificity to communicate the experience before the user starts exploring.

## Design language

### Layout and alignment
- Use a near-black page background, approximately `#050505`, with a centered maximum-width container around `1200–1280px`.
- Place the hero content in a left-aligned column rather than centering everything. Keep the navigation above it if this component is used with a site header, but make the hero itself work independently.
- Give the headline generous top spacing: approximately `110–150px` below the header on desktop and `72–96px` on mobile.
- Constrain the headline to roughly `720–820px` so it wraps into two or three purposeful lines instead of spanning the entire viewport.
- Put the actions directly below the headline in a horizontal row with `10–14px` between buttons. Stack them on narrow screens if needed.
- Place a large media stage below the actions with approximately `38–48px` of separation. The media should nearly fill the container width and maintain a wide aspect ratio, around `16:8` or `16:9`.
- On mobile, reduce outer padding to `20–24px`, preserve the left alignment, and allow the media preview to crop or reflow rather than becoming too small to read.

### Typography hierarchy
- Use a modern grotesk or geometric sans-serif with clean, compact forms.
- Set the main heading in a large, tight display size: approximately `52–64px` on desktop, `38–46px` on tablet, and `32–38px` on mobile.
- Use a weight around `600–700`, line-height around `0.98–1.06`, and slightly negative letter spacing around `-0.03em` to `-0.05em`.
- Keep supporting text minimal or omit it if the product proposition is already clear. If included, use muted gray text around `16–18px` with a comfortable `1.4` line-height.
- Button labels should be compact and legible at `14–16px`, with medium-to-semibold weight.

### Colour and contrast
- Use an almost-black background around `#050505` or `#000000`.
- Use warm white for primary text, approximately `#F5F5F3`, rather than harsh pure white everywhere.
- Use muted navigation and secondary text around `#8A8A8A` to `#A0A0A0`.
- Make the primary CTA a light surface, approximately `#F4F4F2`, with near-black text.
- Make the secondary CTA a subtle charcoal surface around `#1A1A1C`, with light text and a faint border.
- For the media stage, use a dark interface with restrained electric blue, violet, or cyan accents. Treat these as product UI accents rather than decorative page gradients.

### Buttons and surfaces
- Give buttons a compact height around `36–42px`, horizontal padding around `14–18px`, and a radius around `8–10px`.
- The primary button should have a clear hover state: slightly brighter background, a small upward or forward movement, and a transition around `160–220ms`.
- The secondary button may include a small download, arrow, or utility icon, but use an icon appropriate to the user's product.
- Build the media stage with a `1px` border around `#1D1D22`, a radius around `16–18px`, and `overflow: hidden`.
- Add a very subtle outer shadow or blue-black glow to separate the stage from the page without making the whole hero look neon.

### Product-demo visual
- Use an original, believable interface mockup that reflects the user's product category: dashboards, canvases, documents, cards, panels, charts, or workflow controls as appropriate.
- Organize the mockup into a primary workspace and one or two supporting panels. The interface should have visible hierarchy, realistic controls, and varied content blocks rather than generic empty rectangles.
- Use dark surfaces such as `#080B16`, `#0D1422`, and `#111B2C`, with thin blue-toned separators around `#1D5FA8` or `#235B91`.
- Add a restrained luminous accent or blurred gradient behind part of the interface, using deep blue, indigo, and soft violet. Keep it contained within the media stage.
- Include one central play button if the visual represents a video or interactive demo. Make it a white or off-white circular/rounded control, approximately `56–64px`, with a dark triangular play icon. Center it over the demo and provide hover feedback through a slight scale and shadow increase.
- If the product is better explained through interaction than video, replace the play control with a clearly recognizable primary interaction while preserving the same visual emphasis.

### Interaction and responsive behaviour
- Make the media stage clickable if it launches a video or demo. Show a pointer cursor and a visible focus ring for keyboard users.
- Animate only with restraint: fade or translate the hero content in on load, and use subtle hover transitions for buttons and the media control.
- Respect `prefers-reduced-motion` by removing entrance and hover transforms.
- Ensure all controls have accessible labels, sufficient contrast, visible focus states, and a logical keyboard order.
- On smaller screens, keep the headline and CTAs prominent while simplifying dense mockup details that would otherwise become illegible.

## Never
- Never use the reference product's logo, product name, navigation labels, headline, CTA copy, or interface copy.
- Never reproduce the exact screenshot, mockup, layout proportions, card content, or visual assets from the reference.
- Never use copied illustrations, imagery, icons, screenshots, or branded UI elements from the reference.
- Never invent a logo or brand mark that resembles the reference; use the user's existing brand assets or neutral text treatment.
- Never make the hero a generic gradient blob with no meaningful product interface.
- Never sacrifice readability or accessibility for cinematic effects.
