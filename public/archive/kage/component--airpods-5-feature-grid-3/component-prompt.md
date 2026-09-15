## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106645-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-feature-grid-3

## Before you start
Ask the user what their product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build an immersive feature-grid section
Create a premium product storytelling section that introduces one major capability, explains its value, and leads into a row of supporting feature cards. The section should feel cinematic and editorial rather than like a dense list of specifications.

### Structure and layout
- Use a dark, full-width section with a centered content column and generous vertical pacing.
- Begin with a tall hero panel or media stage. Let the visual occupy most of the viewport height on desktop, using `min-height: 80vh` or an equivalent responsive value.
- Place a small eyebrow above a large headline near the upper-middle of the hero. Keep the text centered and make the headline two or three short lines at most.
- Use one dominant visual treatment behind the text: product media, abstract motion, a textured gradient, or an art-directed image supplied for the user's product. Use `background-size: cover`, careful focal-point positioning, and a subtle overlay so the type remains readable.
- Continue the same dark canvas below the hero with a centered explanatory statement: a short bold benefit line followed by a muted paragraph of one to three lines.
- Follow with a horizontally arranged feature-card rail. On wide screens, show three or four cards with a small amount of the next card peeking in from the edge to suggest additional content. On smaller screens, allow horizontal scrolling rather than compressing the cards into tiny columns.
- Keep the rail slightly wider than the text column, with consistent outer padding and a visible gutter between cards.
- Each card should have a distinct visual or colour treatment and a clear single feature message. Mix media-led cards with typography-led cards, but keep their proportions consistent.

### Alignment and responsive behaviour
- Align the hero copy to the section's central axis; align supporting copy to the same axis.
- Use a max-width around `1200px–1400px` for the card rail and `620px–760px` for the explanatory text.
- On mobile, reduce the hero height while preserving the layered visual composition. Keep the headline centered and readable, and make cards roughly `78vw–88vw` wide so one card is dominant while the next is discoverable.
- Hide scrollbars visually but retain keyboard, touch, and trackpad scrolling. Add accessible previous/next controls if the rail has carousel behaviour.

### Typography
- Use a modern sans-serif with a clean, neutral character and strong weight contrast.
- Eyebrow: semibold, approximately `18px–24px`, with tight tracking and high contrast.
- Hero headline: bold or heavy, approximately `64px–112px` on desktop and `42px–64px` on mobile; use a line-height around `0.95–1.05` and slightly negative letter spacing.
- Supporting benefit line: `22px–30px`, semibold or bold.
- Supporting paragraph: `18px–24px`, medium weight, with a line-height around `1.25–1.4` and reduced opacity.
- Card headlines: `24px–40px`, bold, with short lines and generous internal padding.
- Do not overload the section with labels, metadata, or long descriptions; the visual hierarchy should be understood in seconds.

### Spacing
- Use generous section padding: approximately `96px–160px` above and below the hero, adjusted by viewport size.
- Give the hero eyebrow and headline `16px–28px` of separation.
- Separate the hero from the supporting copy by approximately `72px–128px`.
- Give the supporting copy at least `72px–120px` of space before the card rail.
- Use card gaps of `16px–24px` and card padding of `28px–48px`.
- Preserve whitespace around the visual so the section feels intentional, not crowded.

### Colour, surfaces, and effects
- Use a near-black plum or ink canvas around `#10051F` to `#17082B` rather than pure black.
- Use bright white or soft white text around `#F5F3F7`; use muted lavender-gray around `#AAA2B5` for secondary copy.
- Build the hero treatment from a saturated violet/magenta range such as `#B83FE2`, `#D05BE8`, and `#5E18B8`, optionally with a soft atmospheric gradient.
- Let each feature card use its own restrained accent palette—warm cream, amber, violet, blue, or another brand colour—while maintaining enough contrast for its content.
- Prefer imagery and gradients over decorative UI chrome. If a card is typography-led, use subtle radial shapes, bands, or texture with low-opacity overlays.
- Use borders sparingly: translucent light borders around `rgba(255,255,255,.12)` on dark surfaces and soft dark borders around `rgba(0,0,0,.08)` on light cards.
- Use a generous radius, approximately `20px–32px`, on cards and media panels. The hero can remain edge-to-edge or use a very large radius if it is inset.
- Apply soft gradients, mild bloom, and restrained grain only when they support the product story. Avoid excessive shadows; use a subtle shadow such as `0 20px 60px rgba(0,0,0,.2)` when cards need separation.

### Interaction and accessibility
- Make the card rail naturally scrollable and expose focus-visible states with a 2px high-contrast outline.
- If cards link to deeper content, make the entire card the target while preserving a clear accessible name.
- Add hover behaviour only as a quiet enhancement: slight lift, image scale of about `1.02`, or a gentle colour shift. Never let motion obscure content.
- Respect `prefers-reduced-motion`; disable parallax, autoplay, and large transitions when requested.
- Provide meaningful alt text for product imagery and ensure all text passes contrast requirements.

### Content guidance
- Write an outcome-focused eyebrow and headline that express the product's defining benefit.
- Use the supporting paragraph to explain why the capability matters, not to repeat the headline.
- Give each card one memorable feature or use case, with short copy and a visually distinct supporting treatment.
- Keep the tone confident, concise, and sensory where appropriate, but use the user's own product vocabulary.

## Never
- Never reuse logos, product names, trademarked phrases, exact copy, or branded visual assets from the reference.
- Never reproduce the reference's person, product photography, illustrations, gradients, card artwork, or composition literally.
- Never build a pixel-for-pixel clone; adapt the layout principles to the user's product, audience, and brand.
- Never make the section depend on inaccessible autoplay, hover-only information, or tiny horizontal-scroll affordances.
- Never use placeholder copy that refers to the reference product or its marketing claims.
