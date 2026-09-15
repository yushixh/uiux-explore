## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106492-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to their product rather than reproducing this reference literally.

## Build a focused feature-grid section
Create a responsive feature section for a software product landing page. The component should combine an editorial introduction, a selectable list of feature statements, and a contextual preview panel that changes when a feature is selected.

### Structure and layout
- Use a wide, dark section with a generous vertical rhythm and a centered max-width container of approximately 1160–1280px.
- On desktop, place the introduction above a two-column feature area: a wider left column for the numbered feature list and a slightly narrower right column for the preview card.
- Keep the left and right columns vertically aligned around the list/card region, with a substantial gap between them.
- The introduction should occupy roughly half the content width, leaving intentional empty space on the right for a calm, editorial composition.
- Use four feature rows by default. Each row should have a small index at the far left and a large, concise feature label beside it.
- The first row is active on initial load. Selecting another row updates the preview card content without navigating away or causing a full page reload.
- Collapse to one column on smaller screens. Keep the introduction readable, stack the list above the preview, and make each feature row comfortably tappable.

### Typography hierarchy
- Use a clean contemporary sans-serif with high-quality rendering and slightly tight tracking for large headings.
- Set the main heading in a large, lightweight style, around 56–72px on desktop, with a compact line height of roughly 0.95–1.05. Allow it to wrap into two or three short lines.
- Add a secondary/emphasis line or phrase with a distinct treatment if useful for the user's brand, but keep it restrained and accessible.
- Use a muted body paragraph below the heading at approximately 17–20px with a 1.45–1.6 line height and a readable measure around 420–520px.
- Feature labels should be prominent, around 28–36px on desktop, with inactive labels visibly softened rather than hidden.
- Use tiny uppercase or monospace metadata for indexes, file paths, and technical labels at approximately 10–12px with increased letter spacing.
- Preserve clear contrast between heading, active feature, inactive features, supporting copy, and metadata.

### Colour and surface system
- Use a near-black background, approximately #101010 or #111111.
- Use warm off-white primary text, approximately #F2F1EC, rather than stark pure white.
- Use muted grey for body copy and inactive rows, approximately #9A9995 and #5E5E5B.
- Use a restrained acid-lime or yellow-green accent for active indexes and small emphasis details, approximately #D6E95A or a brand-appropriate equivalent.
- The preview card should be only slightly lighter than the page background, approximately #171717–#1B1B1B.
- Add subtle row dividers in approximately #2B2B2B. Keep all contrast intentional and verify text remains accessible.

### Borders, radius, and spacing
- Give the preview panel a thin, low-contrast border around #30302F and a medium-large radius of approximately 16–20px.
- Use a generous internal card padding of roughly 32–36px on desktop, reducing it to 22–24px on mobile.
- Keep feature rows separated by 1px rules, with approximately 24–30px of vertical padding.
- Use generous section padding, approximately 120–160px vertically on desktop and 72–96px on mobile.
- Avoid excessive shadows. If depth is needed, use a very soft near-black shadow with low opacity.

### Preview card behaviour
- The preview card should include a small accent index, a preview title, a concise explanatory sentence, and a compact technical-looking panel such as a code diff, structured data block, or workflow status.
- Make the preview feel like a believable product artifact, but generate original content relevant to the user's product.
- For code or data, use a dark inset surface around #0D0D0D, a subtle border, small monospace text, and restrained syntax colours. Do not overload it with decorative syntax highlighting.
- Animate changes between feature states with a short fade or crossfade of roughly 150–250ms. Respect `prefers-reduced-motion` by disabling or simplifying the transition.
- Make the entire row interactive, not just the index. Provide hover, focus-visible, and active states. Use a clear keyboard focus ring in the accent colour.
- On mobile, ensure the selected preview remains directly below the active row and does not cause unexpected scroll jumps.

### Content and accessibility
- Write short, specific feature labels that communicate an outcome. Avoid generic labels such as “Powerful features.”
- Use semantic headings, a labelled feature selector, and buttons or tabs with correct ARIA state if the rows behave as tabs.
- Ensure keyboard users can move through every feature, and announce the selected state appropriately.
- Keep the layout stable when preview content changes by reserving enough space or animating height carefully.

## Never
- Never copy the reference's logos, product names, brand identity, or exact wording.
- Never reuse the reference's feature labels, code snippets, file paths, or technical copy.
- Never include illustrations, screenshots, or imagery from the reference.
- Never make the inactive rows unreadably dim or rely on colour alone to communicate selection.
- Never turn the section into a generic card grid; preserve the editorial hierarchy, selectable list, and contextual preview relationship.
