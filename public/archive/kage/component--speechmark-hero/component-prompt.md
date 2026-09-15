## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106591-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106544280-full.webp
- Component on Kage: https://kage.design/component/speechmark-hero

# Build an editorial product hero for a privacy-focused software product

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, type preferences, and primary conversion goal are. Then apply the principles below to create a version that fits my product and brand—not a copy of any reference.

## Goal
Create a polished above-the-fold hero for a desktop-first software product. The section should make the product's main promise instantly understandable, balance an expressive editorial headline with a believable product preview, and give visitors one obvious primary action plus one lower-friction secondary action.

## Design language

### Layout and alignment
- Use a pale, almost-white blue background across the hero, approximately `#F4FAFC`.
- Build a wide, centered page container around 1150–1240px with 64px horizontal padding on desktop and 24px on mobile.
- Place a compact navigation bar at the top: brand mark and wordmark on the left, simple text links in the middle/right, and a filled pill CTA at the far right.
- Below the navigation, use a two-column hero composition. The left column should be approximately 48–52% wide and contain the eyebrow, headline, supporting paragraph, actions, and product facts. The right column should contain a large product UI preview, aligned around the middle of the text block rather than directly at the top.
- Let the product preview slightly extend toward the right edge on large screens, while keeping it fully contained on tablet and mobile.
- Add soft, abstract pale-blue organic shapes near the upper-right corner. They should be decorative and low contrast, never compete with the content.
- Add a subtle audio waveform or vertical-bar texture anchored to the bottom edge of the hero. Keep it sparse, low opacity, and cropped by the section boundary.
- Use a minimum desktop hero height of roughly 760–850px, but allow content to determine height on smaller screens.
- On mobile, stack the content and preview, place the preview below the CTA, hide or simplify secondary navigation, and keep the decorative elements understated.

### Typography hierarchy
- Use a distinctive editorial serif for the main headline, with a calm, intelligent tone. If the brand has no typeface, use a high-quality serif such as Fraunces, Instrument Serif, or a comparable expressive face.
- Set the headline large—approximately 68–80px on desktop, 48–58px on tablet, and 42–48px on mobile—with tight line-height around 0.95–1.02 and slightly negative tracking.
- Break the headline into intentional lines. Use a dark navy for the practical/product phrase and a vivid blue, optionally italic serif, for the emotional or benefit phrase. Do not force awkward line breaks on narrow screens.
- Use a restrained sans-serif for navigation, eyebrow, buttons, metadata, and supporting UI. A family such as Inter, Geist, or a similar neutral grotesk works well.
- Set the supporting paragraph around 22–25px with 1.4–1.5 line-height and a muted slate colour such as `#526274`. Keep its measure near 500–560px.
- Make the eyebrow compact, uppercase, letter-spaced, and informational. Use a small horizontal rule or dash before it.

### Colour
- Background: pale cool white `#F4FAFC`.
- Primary ink: deep navy `#142F59` or `#17345F`.
- Accent blue: saturated medium blue `#2478C9` / `#2D7FC8`.
- Supporting text: slate blue-grey `#536477`.
- Primary button: accent blue with white text; use a slightly darker hover state around `#1767B2`.
- Product preview: mostly warm white and neutral grey so it reads as a real interface against the cool background.
- Decorative shapes and waveform: very pale blue values around `#DCECF8` and `#E8F4FA`, with low opacity.

### Product preview
- Show a large, realistic software window or dashboard preview with a light surface, thin border, modest shadow, and rounded corners around 10–14px.
- The preview should visibly communicate the product category through structure—sidebar/navigation, title area, content summary, timeline or transcript-like detail, and utility controls—without relying on copied content.
- Use enough detail to make the interface feel credible at a glance, but keep it slightly quieter than the headline. Avoid making tiny text the focal point.
- Add a soft shadow such as `0 12px 28px rgba(26, 54, 79, 0.16)` and a subtle border around `#DDE5E8`.

### Spacing, borders, and shape
- Use a generous vertical rhythm: 28–36px between eyebrow and headline, 28–32px between headline and paragraph, and 32–40px between paragraph and actions.
- Keep navigation controls compact but airy, with 20–28px gaps between links.
- Use pill-shaped buttons with 999px radius, approximately 48–54px tall, and 20–26px horizontal padding.
- The secondary action should combine a small circular play/control icon with a short text label. Keep it visually subordinate to the filled CTA.
- Separate product facts below the actions with small vertical dividers or light rules. These can include compatibility, pricing, privacy, or platform information relevant to the product.
- Avoid heavy cards, excessive borders, or dense grids. The section should feel like a considered editorial composition rather than a dashboard.

### Interaction
- Add clear hover and focus states to all links and buttons. Buttons may lift by 1–2px and deepen in colour; links can shift to the accent blue.
- Make the secondary media action open a modal, lightbox, or inline video player if video exists. Otherwise provide a tasteful placeholder interaction.
- Give the product preview a very subtle hover lift or scale, but avoid distracting animation.
- Keep motion restrained: decorative waveform bars can gently vary in opacity or height, and abstract shapes can drift almost imperceptibly. Respect `prefers-reduced-motion`.
- Ensure keyboard focus is visible and colour contrast meets accessibility expectations.

## Responsive behaviour
- At widths below roughly 850px, switch to a single-column layout.
- Keep the headline and paragraph left-aligned unless the product brand strongly calls for centered mobile content.
- Reduce headline size, navigation density, and decorative texture before reducing legibility.
- Make CTA buttons either fit-content in a row when space allows or stack cleanly on very narrow screens.
- Keep the preview wide enough to inspect, with horizontal overflow avoided and any fine UI details simplified responsively.

## Never
- Never use logos, product names, brand marks, or proprietary copy from the reference.
- Never reproduce the reference's exact headline, navigation labels, button labels, interface text, or marketing claims.
- Never copy the reference product screenshot, UI arrangement, illustrations, decorative shapes, or imagery.
- Never assume the user's product is a Mac app, an AI assistant, or an audio product unless the user confirms it.
- Never let decorative visuals overpower the product promise or primary CTA.
- Never use inaccessible low-contrast text, tiny controls, or motion that cannot be disabled.
