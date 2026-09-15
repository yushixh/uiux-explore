## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073867-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-stats

## Before you start
Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a three-part stats and proof section
Create a dark, technical section that communicates three related product strengths, safeguards, metrics, or workflow layers. The section should feel like a carefully typeset product interface: information-dense but calm, precise, and easy to scan.

### Layout and alignment
- Use a near-black full-width background, approximately `#0b0c0f`.
- Constrain the content to a centered max-width of roughly 1120–1180px with responsive side padding of 24–56px.
- Start with a centered section heading and supporting paragraph. Keep the heading to one or two lines and the paragraph to a comfortable reading width of approximately 560–680px.
- Place three equal-width cards in a single row on desktop, with a 22–28px gap. Stack them vertically on narrow screens, preserving consistent spacing.
- Give every card the same minimum height so the row feels like a unified system, even when card content varies slightly.
- Inside each card, align content to a shared left edge. Use a flexible card body so the compact detail rows sit toward the lower portion when appropriate.
- Add a small centered legend or status key beneath the cards only if it helps explain the visual treatment. Follow it with one centered call-to-action button when the section needs a next step.
- Leave generous vertical breathing room above and below the section; this is a feature moment, not a tightly packed dashboard.

### Typography hierarchy
- Use a clean modern sans-serif for headings and body copy. If the product has a brand font, use it; otherwise use a neutral system or geometric sans-serif.
- Section heading: bold, approximately 36–44px on desktop and 30–36px on mobile, with tight line-height around 1.05–1.15.
- Supporting paragraph: 17–19px, relaxed line-height around 1.45–1.6, in a muted gray.
- Card title: 18–20px, semibold or bold, with a compact line-height.
- Card description: 14–16px, muted gray, with enough line-height to remain readable.
- Small labels and row names: 12–14px. Use modest letter spacing and uppercase styling only for short category labels.
- Use a monospace font for command names, tokens, technical values, or compact status badges so they read as system output rather than ordinary copy.

### Card structure
- Each card should include:
  1. A small circular numbered marker or equivalent categorical marker.
  2. A short uppercase eyebrow describing the category.
  3. A clear title expressing the main benefit.
  4. One or two sentences of explanatory copy.
  5. A list of concise detail rows near the bottom.
- Make the numbered marker the main accent: a 32px circle with a bright mint/green fill near `#69f7b0` and dark text near `#07120d`.
- Detail rows should use a two-column layout: descriptive label on the left and a value, status, or code token on the right. Allow the right side to wrap on small screens.
- Separate rows with very subtle horizontal rules, approximately `#25272b`, rather than heavy dividers.
- Keep descriptions and row labels neutral; reserve the bright accent for meaningful positive states or primary actions.

### Colour and state language
- Background: `#0b0c0f` or a similarly deep charcoal.
- Card surface: slightly lighter charcoal, approximately `#191b1f`.
- Card border: low-contrast gray, approximately `#2a2d32`.
- Main text: warm or neutral off-white, approximately `#f2f3f4`.
- Secondary text: muted gray, approximately `#96999f`.
- Accent: vivid mint green, approximately `#69f7b0`.
- Positive code/status treatment: very dark green background around `#062c18`, green border around `#0b6b38`, and mint text around `#69f7b0`.
- Neutral or disabled treatment: transparent gray background, gray border around `#555960`, and text around `#c2c4c7`.
- If a legend is used, distinguish positive, inactive, and optional states with border and text changes—not only colour, so the design remains accessible.

### Borders, radius, and surfaces
- Use a restrained 7–10px border radius on cards; avoid highly rounded “consumer app” styling.
- Use 4–6px radius for compact code badges and status chips.
- Keep borders 1px and subtle. Do not use gradients, glass blur, drop shadows, or decorative textures unless they are clearly part of the user’s existing brand.
- Give cards generous internal padding, approximately 28–32px desktop and 22–24px mobile.

### Interaction and responsive behaviour
- If the cards or CTA are interactive, provide a quiet hover state: slightly brighter border, a small surface lift or colour shift, and a clear focus ring.
- Buttons should use the accent fill with dark text, a pill or softly rounded shape, and a small directional icon only when it adds meaning.
- Ensure keyboard focus is visible with a high-contrast outline. Do not make information dependent on hover.
- On mobile, stack cards, preserve the numbered hierarchy, let code badges wrap naturally, and keep the CTA full-width or comfortably sized.
- Respect reduced-motion preferences; use only subtle transitions around 150–220ms.

### Content guidance
- Replace all example content with the user’s actual product concepts, proof points, metrics, safeguards, or workflow stages.
- Keep each card’s title and description concise. Prefer concrete outcomes and recognizable technical details over generic marketing claims.
- Treat the section as a scannable proof system, not as a pricing table or dense documentation table.

## Never
- Never use the reference’s logos, product names, brand names, or exact copy.
- Never reproduce the reference’s specific card content, commands, labels, statistics, or wording.
- Never copy its illustrations, imagery, screenshots, decorative graphics, or visual assets.
- Never make the implementation depend on the reference page or external assets from it.
- Never sacrifice contrast, responsive behaviour, keyboard access, or semantic structure for visual similarity.
