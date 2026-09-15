## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073775-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-gallery

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Design the section
Build a dark, editorial product-explainer section that introduces how the product works through a large, quiet demonstration stage.

### Layout and alignment
- Use a centered, full-width container with a maximum width around 1220–1280px and a thin vertical border at each outer edge.
- Begin with a credibility rail: a single horizontal row of 5–6 customer, partner, or category labels. Divide each cell with subtle vertical rules and keep all items vertically centered. On narrow screens, make this row horizontally scrollable or collapse it into a compact grid.
- Place the explainer directly below the rail. Use a header row with the section title aligned left and lightweight playback controls aligned right.
- Give the demonstration stage substantial height—roughly 650–700px on desktop—with the primary visual centered both horizontally and vertically. Keep the stage intentionally sparse so the workflow object remains the focus.
- Add a small contextual status or instruction pill near the lower center of the stage. It should feel anchored to the demo without competing with the main visual.
- Follow the stage with the next content block using a clear horizontal divider and a subtle textured or patterned transition band. The next heading should align to the same container grid.
- On mobile, stack the title and controls, reduce the stage height to roughly 420–520px, and preserve generous empty space around the central visual.

### Typography hierarchy
- Use a clean modern sans-serif with a technical/product feel.
- Section heading: approximately 28–32px, medium weight, tight line-height around 1.1.
- Supporting copy below the demo: approximately 15–17px, regular weight, muted colour, with a restrained measure around 560px.
- Rail labels and controls: approximately 13–15px, medium or semibold weight, with slightly reduced contrast.
- Use sentence case and avoid oversized marketing typography inside the explainer itself.

### Colour
- Page and stage background: near-black charcoal, approximately `#101114` or `#111215`.
- Slightly lighter rail/control surfaces: `#131519`.
- Primary text: soft off-white, approximately `#E4E4E7`.
- Secondary text: cool grey, approximately `#92949D`.
- Dividers: very low-contrast grey, approximately `#24262B`; outer borders can be `#202227`.
- If the product demo has a focal object, use one restrained brand accent—such as violet, blue, green, or amber—with a soft glow, while keeping the surrounding interface monochrome.
- Any patterned transition should be extremely subtle, using near-black tones rather than a visible decorative graphic.

### Borders, radius, and depth
- Prefer 1px solid borders with low contrast over heavy cards or shadows.
- Keep the main section visually flush and architectural rather than floating.
- Use small radii around 6–10px for the contextual status pill and playback controls.
- If the central demo object is a card, folder, node, or device, give it a modest radius around 10–14px, a thin highlight border, and a restrained coloured glow.
- Avoid excessive glassmorphism, blur, gradients, or drop shadows; depth should come primarily from spacing and contrast.

### Interaction and motion
- Make the playback controls visibly interactive: include play, replay, and fullscreen affordances with icons and text labels where space allows.
- Use hover states that brighten the label and icon slightly and introduce a subtle background tint; provide keyboard focus rings.
- The demo stage may animate through a simple workflow sequence, but motion should be slow, purposeful, and easy to pause.
- The status pill can update as the demonstration progresses, but must remain readable and stable.
- Respect reduced-motion preferences and provide a static fallback.
- Ensure the rail remains legible and usable on touch screens; do not require hover to understand any item.

## Never
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the exact customer-label row, central icon, folder visual, wording, or branded animation.
- Never make the section depend on a video asset that has no poster or accessible fallback.
- Never sacrifice responsive behaviour for the desktop composition.
