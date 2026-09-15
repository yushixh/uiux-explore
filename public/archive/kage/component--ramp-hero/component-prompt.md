## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060913-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060875-full.webp
- Component on Kage: https://kage.design/component/ramp-hero

## Before you start
Ask the user what their product does, who the hero is for, and what brand personality and visual system they want. Then apply the principles below to create an original hero for that product—not a replica of this reference.

## Build this hero section
Create a polished, responsive SaaS homepage hero for an automation or operations product. The section should communicate a practical business outcome quickly, then support it with an email capture and a large visual representation of an intelligent workflow.

### Layout and alignment
- Use a full-width white page with a centered content container, approximately 1150–1200px wide at desktop sizes.
- Place a compact announcement bar at the very top in near-black, with centered text, one underlined link, and a dismiss control aligned to the far right.
- Below it, add a clean navigation row: brand wordmark area on the left, several text links with small downward chevrons, and utility/sign-up actions on the right.
- Keep the hero content left-aligned within the same container. Add generous top padding after navigation.
- Start with a tiny uppercase eyebrow and an optional small rounded statistic badge. Follow it with a large one- or two-line headline, a concise supporting sentence, and an inline email form.
- Make the form compact and horizontal on desktop: a pale input field with placeholder text and a bright primary button attached or visually grouped beside it. Stack these controls vertically on narrow screens.
- Under the form, place a large rounded visualization panel spanning the content width. It should feel like a product canvas: use a faint dotted/grid background and layer several simplified workflow cards, documents, tables, or status panels with subtle overlap and depth.
- Add a slim horizontal activity/metrics rail across the visualization near its lower third or bottom edge. Use small labels, separators, and changing numeric values to imply live system activity.
- Include a small floating support/chat button near the lower-right viewport edge; keep it secondary and accessible.
- On mobile, collapse navigation appropriately, preserve the headline and form hierarchy, and crop or simplify the visualization rather than allowing it to create horizontal overflow.

### Typography hierarchy
- Use a modern neo-grotesk or system sans-serif with crisp, neutral letterforms.
- Set the headline in near-black, approximately 58–68px desktop with a tight line height around 0.98–1.05; reduce to approximately 40–48px on mobile.
- Use a muted gray supporting line around 18–20px with comfortable line height.
- Render eyebrow, navigation, metrics, and interface labels in smaller sizes from 10–14px. Use uppercase and slight tracking only for metadata, not for primary copy.
- Keep button labels and form text at approximately 14–16px with medium weight.

### Spacing and rhythm
- Use a generous vertical rhythm: roughly 36–52px between eyebrow, headline, description, and form, adjusted so the hero remains compact and confident.
- Give the visualization panel approximately 44–64px of separation below the form.
- Use a consistent 8px spacing scale, with generous internal padding in the canvas and navigation.
- Ensure the announcement bar and navigation remain visually distinct but not oversized.

### Colour and surface treatment
- Base page background: white or a very subtle warm white, approximately `#FFFFFF` or `#FCFCFB`.
- Primary text: near-black, approximately `#111111`.
- Secondary text and metadata: cool neutral gray, approximately `#6B6B6B` and `#8A8A8A`.
- Announcement bar: approximately `#191919` with white text.
- Primary CTA: use a vivid brand accent such as electric chartreuse, approximately `#E8F500` to `#F0F500`; verify contrast with dark text.
- Visualization canvas: soft off-white gray, approximately `#F7F7F5`, with an extremely subtle dotted grid in `#E7E7E3`.
- Workflow cards should use white surfaces with light gray borders and restrained gray typography. Use one or two muted status colours sparingly for states such as matched, flagged, or active.

### Borders, radius, and depth
- Use fine, low-contrast borders around forms, navigation actions, cards, and the visualization panel, approximately `#DDDDDA` or `#E3E3E0`.
- Give the form and major canvas a medium rounded radius around 12–16px; use smaller 4–8px radii for internal fields and data panels.
- Keep shadows soft and barely visible: use diffuse gray shadows only to separate layered cards from the canvas.
- The CTA can have a slightly stronger radius and a subtle hover transition, but avoid glossy gradients or heavy decoration.

### Interaction and motion
- Make the email input clearly focusable with an accent or dark focus ring, and validate empty/invalid email states accessibly.
- Add hover and focus states to navigation links, announcement dismissal, CTA buttons, and the chat control.
- The metrics rail may animate numbers or use a gentle marquee, but it must remain readable, pause when appropriate, and respect reduced-motion preferences.
- Allow the visualization cards to have restrained entrance or parallax motion only if it supports comprehension; never let motion compete with the headline or form.
- Ensure all controls have accessible names, keyboard states, sufficient contrast, and touch targets of at least 44px.

### Content and implementation guidance
- Write original, product-specific copy after learning the user's product and brand. Keep the headline outcome-focused and short.
- The visualization can be built with HTML/CSS cards, SVG-free geometric UI elements, or the user's own product screenshot/data; it should communicate a workflow rather than function as generic decoration.
- Make the section production-ready with responsive breakpoints, semantic structure, and no horizontal scrolling.

## Never
- Never use the reference brand's logo, wordmark, product name, tagline, or exact copy.
- Never reuse the reference's distinctive product screenshots, document text, metrics, labels, illustrations, or imagery.
- Never copy the exact card arrangement, grid composition, navigation wording, or visual artwork; reinterpret the system for the user's product.
- Never add unlicensed stock imagery or decorative illustrations when a simple product-specific UI visualization will work better.
- Never sacrifice readability, accessibility, or responsive behavior for visual similarity.
