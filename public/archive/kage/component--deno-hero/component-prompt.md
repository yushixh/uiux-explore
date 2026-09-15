## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073864-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-hero

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typefaces, and visual assets they already use. Then apply the principles below to create an original hero section for that product—not a copy of the reference.

## Build this section
Create a responsive landing-page hero for a developer-focused or technical product. The section should feel confident, fast, and polished, with a compact announcement strip and a simple navigation area above a dark, atmospheric hero canvas.

### Layout and alignment
- Use a full-width page shell with three layers: an optional announcement bar, a white or very light navigation header, and the main hero.
- Keep the announcement bar short, approximately 68px tall on desktop, with centered announcement text, a bordered call-to-action, and a dismiss control aligned to the far right.
- Make the navigation approximately 96px tall. Place the brand mark and wordmark at the left, navigation links in the middle, and a compact search control at the right. On smaller screens, collapse links into a menu and retain only the most important action.
- Set the hero within a centered max-width container of roughly 1160–1240px, with generous horizontal padding of 56px on desktop and 24px on mobile.
- Use a two-column composition: the left column contains the message and actions, while the right column contains a visualized list, system readout, code-like panel, or another product-relevant capability graphic.
- Vertically center the hero content in a minimum 620px desktop hero. On mobile, stack the visual below the copy and reduce the hero height to fit content naturally.
- Keep the left edge of the announcement content, navigation content, and hero content aligned to the same container grid.

### Typography hierarchy
- Use a clean contemporary sans-serif with strong readability; use a monospace face only for technical labels or data-like visualizations.
- Make the eyebrow a compact pill or outlined label, around 13–14px, with a small accent badge or status marker.
- Set the main headline in a heavy weight, approximately 68–76px desktop with tight line-height around 0.98–1.05. Limit it to two or three lines and make the wording specific to the product's main benefit.
- Use a supporting paragraph at 18px with 1.45 line-height and a comfortable maximum width of 560px.
- Add an optional one-line proof point below the paragraph in a semibold 16–17px style.
- Use 16px navigation and button labels. Keep UI copy short and action-oriented.

### Colour and atmosphere
- Use an almost-black blue-green hero background, approximately #0B1215 or #0D1518, with near-white primary text around #F4F7F5 and muted text around #AAB4B3.
- Create depth with extremely subtle blurred horizontal or radial gradients in deep teal, indigo, and green, for example #123B3A, #20203C, and #087A6B at very low opacity. The background should feel atmospheric rather than decorative.
- Choose one bright brand accent appropriate to the user's identity. A useful starting point is mint green around #63F2AE, but derive the final colour from the user's brand.
- Use the accent for status highlights, small badges, selected rows, focus states, or one high-value control—not for every element.
- Keep the navigation light and calm, using #FFFFFF or #F7F8F6 with dark text around #111417. The announcement bar may use a pale tint of the accent.

### Borders, radius, and controls
- Use thin, low-contrast borders around announcement actions, search, pills, and secondary controls, generally rgba(255,255,255,.22) on dark surfaces and #8B918F on light surfaces.
- Use rounded corners sparingly: 999px for pills, 10–12px for search and compact controls, and 28–32px for large pill-shaped hero buttons.
- Primary and secondary hero actions should be visually substantial, about 56–62px high, with an icon or directional arrow and clear hover feedback.
- Avoid excessive cards. Let the hero background remain open, using only the right-side visualization to provide structure.
- For a capability list or system readout, use monospace text in vertically stacked rows. Keep inactive rows subdued and highlight exactly one relevant row with a bright rounded rectangle, dark text, and a small confirmation or status icon.

### Interaction and motion
- Make the announcement dismiss control actually hide the strip and allow the navigation to move up naturally.
- Add hover, focus-visible, and pressed states to every link and button. Use an understated 150–220ms transition and a visible keyboard focus ring.
- The right-side visualization may gently cycle its highlighted row, scroll through capabilities, or animate a soft background glow. Keep motion slow, low-contrast, and optional via `prefers-reduced-motion`.
- Ensure the visual remains understandable without animation: one row should be selected by default and all important product value should be communicated in text.
- Make the search field usable on desktop and replace it with a search icon or menu entry on narrow screens.

### Responsive and accessibility requirements
- Maintain strong contrast between text and the dark hero background.
- Use semantic header, nav, main, section, buttons, and links. Give decorative glow layers `aria-hidden="true"`.
- Do not rely on colour alone for selected states; include text, weight, iconography, or a marker.
- On mobile, preserve the headline's impact by using approximately 44–52px type, stacking actions when necessary, and keeping tap targets at least 44px high.
- Prevent the atmospheric background and visualization from competing with the headline or causing horizontal overflow.

## Never
- Never reuse the reference site's logo, wordmark, product name, navigation labels, announcement copy, headline, paragraph, button labels, or other exact text.
- Never copy the reference's mascot, brand mark, illustration, screenshot, imagery, decorative asset, or distinctive visual artwork.
- Never assume the new product is the same type of developer runtime; adapt the visualization and copy structure to the user's actual product.
- Never create a pixel-for-pixel replica. Use the layout logic, hierarchy, contrast, restraint, and interaction principles as inspiration for an original implementation.
