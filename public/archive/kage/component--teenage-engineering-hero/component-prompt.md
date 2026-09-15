## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060820-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-hero

# Build an editorial illustration hero section

## Before you start
Ask me what my product is, who it is for, and what visual brand system I want to use. Then apply the principles below to my product rather than reproducing the reference design.

## Goal
Create a distinctive, poster-like website hero for a creative, culture, hardware, editorial, or product-led brand. The section should feel designed like a printed graphic rather than a conventional SaaS landing page: bold, irreverent, highly typographic, and supported by a large hand-drawn or graphic illustration.

## Structure and layout
- Use a full-width white canvas with a compact utility navigation row at the top.
- Keep the top navigation visually sparse: a wordmark area on the left, followed by several evenly spaced navigation clusters with simple abstract icon marks and two-line labels.
- Below the navigation, create a large hero composition with a wide max-width around 1120–1240px and generous horizontal margins.
- Make the headline the dominant element. Set it in two or three oversized lines, using a very heavy condensed or display sans-serif with tight tracking and tight line-height. Let the headline occupy most of the upper half of the hero.
- Add a small secondary badge, metadata block, or edition marker aligned to the headline’s right edge. It should resemble a compact printed label, not a standard UI card.
- Place a large monochrome editorial illustration below and partially behind the headline. Prefer a custom illustration, collage, diagram, or product scene with expressive linework and a clear horizontal baseline.
- Allow the illustration to extend beyond the normal content grid while keeping its main subject centered and legible.
- Use intentional overlap: the headline, illustration, small labels, and any floating object should share a visual plane, but preserve enough whitespace that the composition does not become chaotic.
- On small screens, stack the headline and metadata, scale the artwork proportionally, and preserve the poster-like impact without causing horizontal overflow.

## Design language
- Canvas: warm white or pure white, approximately `#FFFFFF` or `#FAFAF7`.
- Primary ink: near-black, approximately `#0B0B0D`.
- Accent: choose one vivid editorial accent suited to the brand, such as warm yellow `#FFB72B`, orange-red `#F26A3D`, electric blue `#276EF1`, or green `#087A4B`. Use it sparingly for one label, object, control, or highlight.
- Typography: use a bold condensed display face for the hero title and a restrained grotesk or humanist sans-serif for navigation and metadata. If the exact font is unavailable, use a condensed fallback such as `Arial Narrow`, `Roboto Condensed`, or a variable sans with reduced width.
- Hero title: very large, approximately `clamp(4rem, 10vw, 9rem)`, weight 800–950, line-height about `0.82–0.92`, and slightly negative tracking.
- Utility text: small, approximately 11–15px, with relaxed line-height and clear two-line grouping. Use sentence case or lowercase consistently.
- Use strong typographic scale contrast: the title should be dramatically larger than every supporting label.
- Keep most borders black and thin, around `1–2px`. Use outlined labels and small framed badges where useful.
- Use mostly square or lightly rounded geometry. Keep radii between `0` and `8px`; avoid the soft, pill-heavy language of typical SaaS interfaces.
- Use generous macro spacing around the hero, but tight spacing inside the typographic lockup. A useful rhythm is 24–40px between navigation groups, 48–80px before the headline, and 16–28px between title lines and metadata.
- Illustration details should use black linework on white with one or two accent colours. Do not overdecorate the background.

## Interaction
- Navigation items should have clear hover and focus states: slightly change ink colour, reveal an underline, or shift a small icon by 2–4px.
- If the hero artwork is interactive, use subtle movement only: a slight parallax shift, animated line detail, or hover reveal. Keep motion quick and tactile, around 150–300ms.
- Any floating notice, consent prompt, or promotional panel should sit above the illustration with a clear stacking order and remain keyboard accessible.
- For a consent-style panel, use a compact accent-coloured geometric shape or card with concise explanatory text and two clearly differentiated actions. The secondary action should be outlined; the primary action should use a dark fill.
- Ensure all controls have visible focus rings, readable contrast, and touch targets of at least 44px.

## Responsive behaviour
- Preserve the asymmetrical editorial composition on desktop.
- At tablet widths, reduce navigation density and let utility groups wrap or collapse into a menu.
- At mobile widths, use a simpler top bar, reduce the title to approximately `clamp(3.2rem, 16vw, 5.5rem)`, and place the metadata below the title.
- Keep the illustration full bleed or slightly oversized, but constrain it so important details remain visible and the page never scrolls horizontally.
- Move any floating notice away from critical illustration details on mobile and make it a normal-flow card if necessary.

## Accessibility and implementation
- Use semantic `header`, `nav`, `main`, and `section` landmarks.
- Give the hero illustration meaningful alt text, or mark it decorative if the surrounding text already communicates its purpose.
- Maintain at least WCAG AA contrast for navigation, metadata, and controls.
- Do not rely on colour alone to communicate active or selected states.
- Build the layout with responsive CSS Grid or Flexbox, and use CSS variables for colours, spacing, type scale, and radii so the visual system can be adapted easily.

## Never
- Never copy the reference’s logos, product names, brand names, headline copy, labels, or navigation wording.
- Never reuse its exact illustration, characters, icons, imagery, or distinctive graphic assets.
- Never recreate the reference pixel-for-pixel; derive a new composition using the same principles of scale, asymmetry, editorial typography, and illustration-led storytelling.
- Never use placeholder lorem ipsum if meaningful product-specific copy is available.
- Never sacrifice readability or keyboard access for visual novelty.
