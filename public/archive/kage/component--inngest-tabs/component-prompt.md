## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074882-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Component on Kage: https://kage.design/component/inngest-tabs

## Before you start
Ask the user what their product does, who it is for, and what visual brand they want to use. Then apply the principles below to create an original feature-tabs section for that product—not a replica of the reference.

## Design the section
Build a horizontal, three-item feature tab component for a modern developer-focused product. The component should feel like a premium dark-mode product surface: restrained, technical, editorial, and high contrast.

### Layout and alignment
- Place the tabs in a single equal-width row inside a wide container, with a subtle outer border and a small corner radius of about 4–6px.
- Divide adjacent panels with 1px vertical rules.
- Give each panel generous internal padding, approximately 28–36px horizontally and 30–40px vertically.
- Align every panel's content to the left and use a consistent vertical rhythm: abstract icon, heading, then supporting description.
- Keep the row responsive: at narrower widths, stack the panels vertically or use a horizontally scrollable tab rail while preserving the active-state treatment.
- The first/active panel should be visually dominant without changing its dimensions, so the overall layout does not jump when selection changes.

### Typography hierarchy
- Use a clean modern sans-serif with slightly tight tracking.
- Feature headings should be large and confident, around 28–32px on desktop with a medium or semibold weight.
- Supporting copy should be 16–18px, with a relaxed line height around 1.5–1.65 and a constrained measure so it remains readable.
- Use sentence-case labels and avoid overly dense UI text.
- Make inactive headings and descriptions slightly quieter than the active panel while maintaining accessible contrast.

### Colour and surface
- Use a near-black charcoal page/surface, approximately `#1B1B1B` to `#202020`.
- Use a vivid warm coral-red active background, approximately `#F0442E` or `#F4513D`; a subtle grain or tonal variation is optional, but do not depend on imagery.
- Active text should be warm white, approximately `#FFF7F2`.
- Inactive headings should be off-white, approximately `#F0F0F0`.
- Inactive body copy should be muted gray, approximately `#A7A7A7`.
- Dividers and the outer border should be low-contrast gray, approximately `#3A3A3A`.

### Icon treatment
- Add a small abstract line icon or geometric mark above each heading to help distinguish the capabilities.
- Use thin, hand-drawn or technical strokes in the inactive state, around `#737373`; use a pale warm line colour in the active state, around `#FFE3D9`.
- Icons should be original and generic to the user's product category. Keep them decorative and compact rather than turning them into logos.

### Interaction
- Treat each panel as a selectable tab with an obvious active state.
- On hover, gently brighten the inactive panel or its heading and icon; do not introduce a large scale or layout shift.
- On focus, show a clear 2px keyboard-visible outline with sufficient contrast.
- Use a short 160–220ms colour and background transition.
- If the tabs control other content below, update that content accessibly with the selected tab, expose the correct `aria-selected` state, and support arrow-key navigation.
- On touch devices, make the whole panel tappable and preserve generous hit areas.

### Content behaviour
- Keep all panels structurally consistent, even when descriptions have different lengths.
- Use concise capability-oriented copy supplied by the user's product; do not hard-code reference wording.
- Consider a subtle active indicator or bottom rule only if the product needs additional state clarity, since the colour change should do most of the work.

## Never
- Never copy the reference's logos, product names, feature names, or exact copy.
- Never reuse the reference's specific illustrations, icons, textures, or imagery.
- Never reproduce the reference's exact colour treatment if it conflicts with the user's brand; adapt the palette while preserving the active-versus-inactive hierarchy.
- Never make inactive panels too low-contrast to read.
- Never rely on colour alone for keyboard or screen-reader state communication.
- Never create a layout that shifts size when a tab becomes active.
