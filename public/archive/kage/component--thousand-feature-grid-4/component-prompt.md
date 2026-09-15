## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106639-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106570706-full.webp
- Component on Kage: https://kage.design/component/thousand-feature-grid-4

# Build an editorial feature-grid section for a software product

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, typography, and visual assets are. Then apply the principles below to my product rather than reproducing the reference literally. If I do not have an established brand, propose a restrained visual direction that fits the product and confirm it before implementation.

## Goal
Create a responsive feature-grid section that explains three or more product capabilities through short editorial copy paired with lightweight interface previews. The section should feel like a considered product story, not a generic dashboard or dense marketing card wall.

## Structure and layout
- Place the component on a warm, low-contrast page background with a thin horizontal rule or quiet boundary above the grid.
- Use a responsive bento layout with deliberately varied card proportions:
  - On desktop, begin with two cards in the first row, with the primary card wider than the secondary card.
  - Follow with a full-width horizontal card whose text and preview sit in two balanced columns.
  - Add another full-width card below, reversing the text/preview order to create visual cadence.
- Keep all cards aligned to a shared outer container, with consistent gutters of roughly 20–24px and generous vertical gaps of roughly 22–28px.
- Use a maximum content width around 1180–1280px, with page-side padding around 48px on large screens and 20–24px on small screens.
- Cards should have substantial internal padding: approximately 38–40px on desktop and 24px on mobile.
- On mobile, collapse every card into a single column. Keep the text before its preview unless the preview is essential to understanding the feature; preserve comfortable spacing and avoid overly tall empty panels.

## Card styling
- Use a softly tinted off-white card surface, approximately `#fffdf8`, against a pale warm background around `#f4f1e8`.
- Add a fine neutral border around `#dedbd1`, approximately 1px, with a generous radius around 22–26px.
- Avoid heavy shadows. If separation is needed, use a barely visible shadow such as `0 4px 18px rgba(45, 42, 32, 0.04)`.
- Let each preview have its own quiet accent surface—examples include pale butter yellow `#f7e49b`, powder blue `#dceaf2`, muted sage `#e7efdf`, or a soft blush—without making the entire section colourful.
- Preview panels may use slightly smaller corner radii around 14–18px and should feel inset into the card rather than floating independently.

## Typography
- Use a friendly, slightly characterful sans-serif for headings if the product brand supports it; otherwise use a clean geometric or humanist sans-serif.
- Feature headings should be bold, compact, and editorial: approximately 25–30px on desktop, 21–24px on mobile, with a line-height around 1.05–1.15 and modest negative letter spacing.
- Body copy should be quiet and highly readable: approximately 15–17px, line-height 1.45–1.6, in a softened dark gray such as `#77756d`. Emphasize a few meaningful phrases in near-black `#24231e` rather than bolding entire paragraphs.
- Keep headings to one or two short lines where possible. Give each feature a clear idea, not a list of benefits.
- Interface preview text should be smaller and more technical, around 11–14px, with a restrained monospace or compact UI font where appropriate.

## Feature content pattern
- Each card should pair a plain-language statement of a product principle with a believable, simplified UI moment that demonstrates it.
- Use three distinct preview modes to create rhythm:
  1. A compact member/account or permissions panel with rows, statuses, and a small action control.
  2. A tidy file, task, or content list showing clean-up states such as duplicate, archived, stale, or complete.
  3. A terminal, integration, or system panel using dark contrast and concise technical output.
- For a wide card, align the copy vertically near the centre of its column and let the preview occupy the opposite half. For a split card, keep copy at the top and let the preview fill the lower area.
- Build previews from HTML/CSS components rather than screenshots. Use realistic hierarchy, dividers, status pills, subtle icons, and small labels, but keep the content generic to the user's product.
- Make decorative interface details support the feature message; do not add random dashboard widgets.

## Interaction and accessibility
- If preview rows, tabs, or status controls are interactive, provide subtle hover/focus states and a clear keyboard focus ring in the product's accent colour.
- Do not require interaction to understand the feature. Static previews should still communicate their point.
- Use semantic headings, descriptive text, sufficient colour contrast, and responsive layouts that do not rely on hover.
- Respect reduced-motion preferences; any entrance or hover animation should be short, subtle, and optional.

## Responsive behaviour
- At approximately 800px and below, switch split cards to stacked layouts and reduce card padding.
- Preserve the alternating composition by changing the order of the preview only where it improves reading flow; never force awkward side-by-side content on narrow screens.
- Ensure code or terminal previews scroll or wrap safely instead of overflowing the viewport.

## Never
- Never copy the reference's logos, product names, brand marks, or proprietary interface text.
- Never reuse the reference's exact feature claims, copywriting, data, file names, URLs, icons, or status labels.
- Never use illustrations, screenshots, or imagery from the reference; create original HTML/CSS previews or use the user's approved assets.
- Never make every card identical in size or turn the section into a generic equal-column card grid.
- Never add dense analytics, unnecessary decoration, loud gradients, or heavy shadows that weaken the calm editorial hierarchy.
