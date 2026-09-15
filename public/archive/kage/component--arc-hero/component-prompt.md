## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060397-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/arc-net/a4b44bb4-fce3-4305-950f-d12af4bc9a59-1789060376-full.webp
- Component on Kage: https://kage.design/component/arc-hero

## Before you start
Ask the user what their product is, who it is for, and what visual brand direction they want. Then apply the principles below to create an original hero for that product rather than reproducing the reference.

## Build a product-launch hero
Create a responsive landing-page hero for a modern software product. The section should communicate a major product announcement with warmth, confidence, and a slightly playful editorial feel.

### Structure and layout
- Use a full-width composition with three layers:
  1. A compact top navigation bar in a saturated brand colour.
  2. A light hero canvas with a centered message and CTA.
  3. A large product-interface preview anchored below the CTA and extending toward the bottom edge.
- Keep the navigation content in a max-width container of roughly 1180–1240px, with the brand mark at the left and a compact row of links beside or after it. Add a primary action on the right only if the product needs one.
- Give the hero copy generous top padding, approximately 58–76px on desktop. Center-align the headline, supporting text, and CTA.
- Limit the headline to roughly 650–760px and the supporting paragraph to 700–800px so the hierarchy remains immediate.
- Place the preview 52–72px below the CTA. Make it wide, around 86–92vw with a max-width near 1100px, and allow it to crop naturally at the bottom of the viewport.
- On small screens, stack navigation links or collapse them, reduce the hero padding, make the preview nearly full width, and preserve the centered reading order.

### Typography
- Use a distinctive, high-contrast display serif or expressive editorial face for the headline; use a clean geometric or humanist sans-serif for navigation, body copy, and controls.
- Make the headline bold and compact, approximately 40–48px on desktop with a line-height around 0.98–1.08. Scale it to 30–36px on mobile.
- Use supporting text around 19–22px desktop, with a 1.35 line-height and a muted charcoal colour.
- Navigation and button labels should be medium-weight, legible, and slightly compact. Avoid excessive uppercase styling.
- Keep the headline to one or two lines where possible and use a clear contrast between announcement text and explanatory copy.

### Colour and atmosphere
- Use a very pale warm neutral hero background, approximately #F7F7F4 or #F8F8F6.
- Add a subtle, diffuse pastel wash behind the upper hero—soft pink, lilac, cream, and pale blue gradients with low opacity. The gradient should feel atmospheric rather than decorative.
- Use a vivid blue or indigo navigation band, approximately #3033D9–#4A39E8, with white or near-white text.
- Use near-black charcoal for the headline, approximately #111111, and #555555–#666666 for supporting copy.
- Ensure CTA contrast is strong: a dark charcoal button around #242424 with white text and a restrained grey arrow or icon.

### Navigation band and transition
- Give the top bar a height around 96–104px on desktop, with vertical centering and generous horizontal padding.
- Create a soft scalloped or irregular wave transition along the bottom edge of the blue band. It can be implemented with an SVG mask, CSS clip-path, or a repeating radial-gradient; keep the edge subtle and consistent across viewport widths.
- The navigation should feel lightweight and integrated, not like a separate app dashboard.

### CTA
- Use one prominent pill-like or softly rounded CTA beneath the supporting copy.
- Target roughly 210–240px wide and 72–82px tall, with a 2–4px dark outer edge or shadow that gives it a tactile, slightly dimensional appearance.
- Include a small rounded-square product glyph or abstract symbol at the left, a short action label in the center, and a simple right-facing arrow at the right.
- Add a restrained hover state: slightly raise the button, deepen the shadow, and move the arrow a few pixels to the right. Keep focus states clearly visible.

### Product preview
- Build an original browser or desktop-app preview rather than using an image from the reference. Use a white or very pale panel with a 1px border around #D8D8D8, a 14–18px radius, and a soft shadow such as 0 8px 24px rgba(0,0,0,.10).
- Include enough abstract interface structure to make the product feel real: a narrow sidebar, small navigation controls, cards or rows, a main content area, and one or two contextual accent elements.
- Keep preview content lower contrast than the hero copy so it supports, rather than competes with, the announcement.
- If the product is not a browser or desktop tool, adapt the preview to its actual interface while preserving the same scale, framing, and visual role.

### Spacing, borders, and motion
- Use an 8px spacing system, with large section gaps of 32, 48, 64, or 80px.
- Keep the layout airy; do not fill every available area with content.
- Prefer 1px low-contrast borders and soft shadows over heavy outlines.
- Add only subtle entrance motion if appropriate: fade and translate the copy upward slightly, then reveal the preview. Respect `prefers-reduced-motion`.
- Make the complete hero accessible: semantic heading order, descriptive labels, keyboard-visible focus, sufficient colour contrast, and a useful preview fallback on narrow screens.

## Never
- Never use the reference's logos, product names, navigation labels, button copy, interface copy, or distinctive symbols.
- Never copy the reference screenshot, exact layout proportions, product mockup, illustrations, or imagery.
- Never assume the user's product is a browser; adapt the preview to the user's actual product and brand.
- Never use generic filler that obscures the product's real value proposition.
- Never sacrifice responsive behaviour, accessibility, or readable contrast for visual similarity.
