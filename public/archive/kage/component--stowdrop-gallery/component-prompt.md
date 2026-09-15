## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067822-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-gallery

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, and interaction model they want. Then apply the principles below to create an original version for their product—not a copy of the reference.

## Build a two-path workflow feature section
Create a responsive product-marketing section that explains two ways users can complete the same core task. The section should feel dark, precise, calm, and keyboard-first, with a restrained editorial layout and realistic miniature interface previews inside two feature cards.

### Structure and layout
- Use a nearly black page background, approximately `#080909` or `#090A0A`.
- Constrain the content to a centered max-width of roughly 1120–1200px with generous horizontal padding: about 48px on desktop, 24px on mobile.
- Begin with a thin divider line spanning the content width. Place a small uppercase section label on the left, separated from the line by a modest gap.
- Below the label, create a two-column introduction: a large headline on the left and a concise explanatory paragraph on the right. Align both columns to their top edges, while allowing the headline to occupy more visual weight.
- Follow with two equal-width cards in a two-column grid. Stack them vertically below approximately 760px viewport width.
- Finish with a full-width, compact callout bar below the cards. It should read as a subtle invitation or contextual hint rather than a primary CTA.

### Typography hierarchy
- Use a clean modern sans-serif with a slightly technical feel. Prefer a variable sans such as Inter, Geist, or a comparable system fallback.
- Section label: 10–12px, uppercase, letter spacing around `0.16em`, medium weight, muted warm orange accent.
- Main headline: 48–58px on desktop, around 40px on smaller screens; tight line-height around `0.96–1.02`, semibold or bold, off-white rather than pure white. Let it wrap across several short lines for an intentional editorial rhythm.
- Supporting paragraph: 16–18px, line-height around `1.55`, neutral gray, with a comfortable maximum width of approximately 480px.
- Card title: 18–20px, semibold, off-white.
- Card description: 14–16px, line-height around `1.55–1.65`, medium gray.
- Tiny metadata and keyboard hints may use a monospaced or highly legible compact font at 11–12px with increased tracking.

### Colour and surface treatment
- Page background: near-black `#080909`.
- Primary text: soft white `#F1F1EF`.
- Secondary text: gray `#929392` to `#A3A4A2`.
- Card surface: charcoal `#151718` or `#161818`.
- Preview surface: darker charcoal `#0D0F0F`.
- Borders: subtle cool-gray/olive border around `#2B2E2D`; keep contrast low and avoid bright outlines.
- Accent: use a restrained orange around `#F47732` for the section label, active insertion marker, selection indicators, or small status details. It should guide attention, not dominate the page.
- If the product has its own brand colour, replace the orange consistently while preserving the same low-saturation, single-accent approach.

### Cards and borders
- Give each feature card a large radius around 14–16px and a 1px border.
- Use generous internal padding, approximately 24px on desktop and 18–20px on mobile.
- Keep the card header on one row: title on the left and small keyboard/control chips on the right.
- Render shortcut chips as compact dark rounded rectangles with subtle borders, small symbols, and enough padding to feel tactile. They should look like controls, not decorative badges.
- Place the miniature UI preview below the header with a dark inset panel, around 10–12px radius, and a thin inner border.
- Keep the preview tall enough to communicate the workflow, but avoid making it visually compete with the section headline.
- Use a restrained shadow or inset contrast rather than a dramatic drop shadow.

### Miniature interface previews
- The first preview should imply capturing several selected items: stacked rows, small circular confirmation markers, short text lines, and faint source/status metadata.
- The second preview should imply quick capture through a focused input: one prominent sentence or command, a slim accent caret/marker, and a footer row containing shortcut guidance.
- Keep all preview content generic and invented for the user’s product. Use realistic hierarchy and truncation, but do not reproduce reference copy.
- The previews should feel like functional interface snapshots, not illustrations. Use CSS shapes, text, borders, and simple icons where possible.

### Interaction and responsive behaviour
- Add subtle hover treatment to cards: slightly brighter border, a very small surface lift or background shift, and no excessive animation.
- Shortcut chips can brighten on hover/focus and should have visible keyboard focus states.
- If the product supports it, make each card clickable or keyboard-focusable, with the entire card acting as a clear interaction target.
- Use short transitions around 150–220ms with an ease-out curve.
- Respect `prefers-reduced-motion` and remove transforms or nonessential animation when requested.
- On mobile, stack the intro columns and cards, reduce headline size, preserve readable card previews, and keep the bottom callout comfortably tappable.
- Ensure sufficient contrast and semantic structure: use a section heading, descriptive paragraphs, real buttons or links for actions, and accessible labels for icon-only controls.

### Visual rhythm
- Use generous vertical spacing around the section: roughly 96–128px above and below on desktop, reduced to 64–80px on mobile.
- Use a consistent spacing scale based on 4px or 8px increments.
- Leave visible breathing room between the introduction and cards, and between cards and the callout.
- Maintain strict left alignment across the label, headline, cards, and callout content.

## Never
- Never copy the reference product’s logos, product names, brand marks, or proprietary symbols.
- Never reuse the reference’s exact headline, body copy, card titles, keyboard shortcuts, testimonials, or interface text.
- Never reproduce the reference’s exact icons, pixel art, illustrations, imagery, or decorative graphics.
- Never make the layout dependent on the reference’s specific dimensions or wording.
- Never use a generic hero-style CTA in place of explaining the two workflows.
- Never add excessive gradients, glassmorphism, bright neon colours, or heavy shadows that undermine the quiet, tool-like interface language.
