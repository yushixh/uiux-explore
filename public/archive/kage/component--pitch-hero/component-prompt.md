## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060646-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-hero

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original hero for that product rather than reproducing the reference.

## Build this section
Create a full-viewport landing-page hero for an AI-powered software product. The composition should feel editorial, optimistic, and calm, with a high-contrast interactive prompt composer floating over a soft field of contextual product previews.

### Layout and alignment
- Use a hero viewport of roughly `min-height: 720px` or `100svh`, with the top announcement bar included in the flow.
- Add a slim announcement strip at the top, centered horizontally, with a short product update, a bolded phrase, a text link, and a dismiss icon aligned to the far right.
- Place the main navigation directly below it as an overlay or transparent layer: brand mark area on the left, a small set of navigation links near the right, then a text login action and a bright primary sign-up button.
- Keep the hero’s main content visually centered rather than using a conventional left-aligned marketing layout.
- Position a large prompt composer in the lower-middle portion of the viewport. Make it wide, approximately `min(685px, calc(100vw - 40px))`, with a generous text area and a compact action row.
- Behind it, arrange abstract, partially visible product-preview cards around the edges of the viewport. Vary their sizes and positions, but keep the central area quiet so the composer remains the focal point.
- Add a short supporting sentence below the composer, centered and low-contrast.
- On small screens, collapse navigation links, keep the announcement copy concise, stack or simplify the composer controls, and ensure the prompt remains comfortably tappable.

### Visual treatment
- Use a near-white base such as `#FCFBFA` with a large, diffuse lavender-to-violet atmospheric gradient. Suggested stops: `#C9A8FF`, `#A77BEB`, and transparent white. Keep the gradient soft and slightly brighter behind the composer.
- Product-preview cards in the background should be abstract blocks or neutral UI/textures generated for the user's product. Reduce opacity to approximately `0.15–0.45`, apply a light blur of `3–10px`, and avoid legible competing content.
- The announcement bar can use a saturated but soft purple such as `#C39AF4` with near-black text `#17131C`.
- Use dark charcoal text such as `#17151A` for primary content and `#6F6A73` for supporting text.
- The primary navigation CTA should use a lively accent such as lime `#C6F36A` or an equivalent brand colour, with dark text.

### Composer
- Give the prompt composer a white or slightly translucent surface, a `1px` lavender border around `#B993F4`, a subtle outer glow, and a soft shadow. Use a radius around `18–22px`.
- The input prompt should sit at the top with generous internal padding, a readable `16px` font size, and muted placeholder text.
- Put a circular add button on the left of the lower control row. Next to it, include a small mode or prompt selector with an icon and semibold label.
- Align the main action button to the right. Use a lavender fill such as `#B58AEF`, white text, and an upward arrow or equivalent directional affordance.
- Buttons should have clear hover, focus-visible, and pressed states: slightly increase contrast, preserve the glow, and show a visible keyboard focus ring. The composer should feel like a real input, not a static card.

### Typography and spacing
- Use the user's brand typeface if available; otherwise choose a clean contemporary sans-serif with a slightly expressive display weight.
- Keep the announcement text around `14px`, navigation around `14–16px`, composer text around `16px`, and supporting copy around `15–17px`.
- Use a restrained hierarchy: navigation and announcement are compact, the prompt is the hero action, and the supporting line is deliberately secondary.
- Use an 8px spacing rhythm. Give the hero generous vertical breathing room, approximately `64–96px` between navigation and the visual center, and `24–32px` between the composer and supporting copy.
- Keep the overall visual density low; the empty center and softly receding cards are essential to the composition.

### Accessibility and behavior
- Ensure text remains readable over the gradient and background previews.
- Provide accessible labels for dismiss, add, mode selection, login, and the primary action.
- Respect reduced-motion preferences. If background cards drift or fade, keep motion extremely subtle and disable it when requested.
- Make the prompt field keyboard accessible and submit with an explicit button; do not rely on placeholder text as the only label.

## Never
- Never copy the reference’s logos, product names, or exact marketing copy.
- Never reuse its presentation thumbnails, screenshots, illustrations, or imagery.
- Never reproduce the exact card arrangement, navigation labels, text, or brand-specific iconography.
- Never make the background collage more visually prominent than the prompt composer.
- Never treat the prompt field as decorative: it must be an operable, clearly labeled control for the user's product.
