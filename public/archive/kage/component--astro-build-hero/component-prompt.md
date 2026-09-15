## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073850-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-hero

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to create an original hero for that product rather than reproducing this reference.

## Design the section
Build a full-width product hero for a developer-focused website. The section should feel confident, modern, and technically credible while keeping the message immediately understandable.

### Layout and alignment
- Use a dark, atmospheric hero with a centered content column and generous vertical breathing room.
- Keep the header/navigation visually separate from the hero content, with a compact top bar and consistent horizontal padding.
- Center-align the hero stack: release/status pill, headline, supporting paragraph, primary CTA, and command-style secondary action.
- Constrain the headline to roughly 680–760px so it wraps into two intentional lines on desktop instead of becoming a long single line.
- Place a short trust or social-proof statement near the lower edge of the hero, leaving enough space for the next section to begin naturally.
- On smaller screens, reduce horizontal padding, allow the headline to wrap naturally, stack actions vertically, and keep tap targets at least 44px high.

### Typography hierarchy
- Use a clean contemporary sans-serif with strong weight contrast; use a restrained monospace face only for the terminal command.
- Make the headline the dominant element: approximately 52–64px on desktop, 38–46px on mobile, with a tight line-height around 0.98–1.05 and slightly negative tracking.
- Set supporting copy around 17–19px with a relaxed 1.45 line-height and a muted lavender-white colour.
- Use compact 14–15px text for the status pill, navigation, and command control.
- Keep the headline plain and direct; avoid excessive marketing decoration or multiple competing text treatments.

### Colour and atmosphere
- Use a deep navy-violet base near `#17134f` or `#19145c`.
- Add a broad, soft radial or linear glow moving from saturated indigo near `#3022a0` into electric violet near `#7a16c7`, with no hard gradient banding.
- Use near-white for the headline and primary labels, around `#f7f5ff`.
- Use a subdued lavender for secondary text, around `#b8b1d3`.
- Make the primary button a light surface, around `#fffaff`, with dark-violet text around `#49358f`.
- Keep the overall contrast high enough for readable body copy and controls; do not rely on colour alone to convey meaning.

### Borders, surfaces, and radius
- Use soft, pill-shaped geometry for the release badge, primary CTA, and command control; radius should be approximately 999px for pills.
- Give the status badge a subtly translucent dark surface with a brighter accent segment to distinguish the version or announcement.
- Use a dark translucent surface for the command control, approximately `rgba(11, 7, 47, 0.65)`, with a faint light border around `rgba(255,255,255,0.08)`.
- Keep borders understated and use layered shadows or glow sparingly so the hero remains atmospheric rather than glossy.
- Use a generous button height, approximately 42–48px, and make the primary CTA visually wider than the command control.

### Interaction
- The release/status pill should behave as a link or announcement control and show a subtle lift or brightness change on hover.
- The primary CTA should have a clear hover state: slight brightness increase, small upward movement, or soft violet shadow; preserve strong focus-visible styling.
- The command row should include a copy affordance with a recognizable copy icon and provide feedback such as “Copied” after activation. Make the entire control keyboard accessible.
- Navigation items with dropdown indicators should reveal menus on click or keyboard interaction, not hover alone. Keep the header usable on mobile with a menu trigger.
- Respect reduced-motion preferences by disabling animated glow movement and transform effects when requested.

### Responsive and accessibility details
- Preserve the visual order and reading order in the DOM.
- Ensure the hero headline is a single clear H1, followed by supporting text and actions.
- Keep text readable over the gradient with sufficient contrast and provide visible keyboard focus rings.
- Avoid excessive hero height on mobile; the main value proposition and CTA should appear without requiring a long scroll.

## Never
- Never copy the reference’s logos, product names, release labels, exact copy, command, or navigation labels.
- Never reuse its illustrations, imagery, icons, or brand marks; use neutral UI icons or the user’s own brand assets.
- Never reproduce the exact gradient placement, measurements, typography, or text arrangement pixel-for-pixel.
- Never invent claims, metrics, or social proof for the user’s product; ask for accurate content or use clearly marked placeholders.
