## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mock-magic-video-presets/201a35ef-5103-4614-9439-92b73face5de-1789106561-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mock-magic-video-presets/201a35ef-5103-4614-9439-92b73face5de-1789106517952-full.webp
- Component on Kage: https://kage.design/component/mock-magic-video-presets-gallery

## Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a version for that product rather than reproducing the reference.

## Build this section
Create a dark, editorial product-gallery section that showcases an interactive editor or workflow preview as the primary visual. The section should feel like a polished landing-page moment: quiet, spacious, and product-led, with the interface preview carrying most of the communication.

### Layout and alignment
- Use a near-black page background, approximately `#050505`, with generous vertical breathing room.
- Center the component within a responsive container capped around `1100–1200px` on desktop.
- Place the product preview above the section heading. Keep the preview horizontally centered and slightly wider than the text below it.
- Render the preview as a rounded application window, approximately `880–1000px` wide on desktop and `480–560px` tall depending on aspect ratio. Preserve a clear, proportional relationship between the preview and the heading.
- On smaller screens, reduce the preview width to the viewport minus `32px`, allow internal controls to stack or collapse, and avoid forcing tiny desktop UI into an unreadable layout.
- Center-align the caption beneath the preview, with a restrained gap of about `30–40px`.

### Product preview treatment
- Use a soft off-white application shell around `#f7f8f8`, with a subtle radius of `16–18px` and a light shadow or faint edge contrast against the black page.
- Add a slim top utility bar with small muted labels, compact controls, one dark primary action, and a small circular or outlined utility control. Keep its height around `40px`.
- Divide the editor into two clear areas: a large visual canvas on the left and a narrow settings panel on the right. Use a ratio close to `2.8:1` or `3:1` so the canvas remains dominant.
- Make the canvas a vivid but product-appropriate preview area. A warm coral-to-orange gradient such as `#ff806e` to `#ffb36b` can be used as a neutral example, but adapt the palette to the user's brand.
- Place a single media or device object prominently inside the canvas, with enough negative space around it. If the product is not a mockup editor, substitute the central object with the product's most important output or workflow result.
- Use a right settings panel in white, approximately `#ffffff`, with a `12–16px` radius, subtle shadow, and generous internal padding around `14–18px`.
- Structure settings into small labelled groups with visible hierarchy: label, select/input, helper text, then the next group. Use pale gray field backgrounds around `#f1f3f4` and borders around `#e3e6e8`.
- Include one obvious interactive affordance over the canvas when relevant, such as a play, preview, expand, or inspect control. Make it circular, high contrast, and visually secondary to the content.

### Typography
- Use a clean modern sans-serif, with a neutral system fallback such as `Inter, ui-sans-serif, system-ui, sans-serif`.
- Keep application labels compact at `10–12px`, with medium weight and dark gray text around `#2d3033`.
- Use helper text at `9–11px` in muted gray around `#8b9095`.
- Set the section heading below the preview around `34–38px` on desktop and `26–30px` on mobile, with regular to medium weight, tight line-height near `1.1`, and white or near-white text around `#f5f5f5`.
- Avoid excessive supporting copy; this composition works because the product visual is immediately understandable.

### Spacing, borders, and shape
- Use large section padding, approximately `72–120px` vertically depending on the surrounding page.
- Maintain a compact `8px` rhythm inside the application controls and a larger `16–24px` rhythm between editor regions.
- Prefer soft corners throughout: `6–8px` for fields and buttons, `12–16px` for panels, and `16–18px` for the main application shell.
- Keep borders subtle and functional rather than decorative. Use `1px` borders in `#e4e7e9` on light UI and very low-contrast separators on the dark page.

### Interaction and responsiveness
- Make the preview feel interactive even if it is a static demo: play/preview buttons should have hover feedback, buttons should slightly brighten, and controls should show clear focus states.
- Add a restrained hover lift or shadow change to the application shell only if it supports discoverability; do not turn the gallery into a card grid.
- Ensure keyboard focus is visible with a 2px brand-colour ring and maintain sufficient contrast for all muted controls.
- On mobile, prioritize the canvas and central output. Move the settings panel below the canvas or turn it into a compact drawer; never let it become an unreadable narrow column.
- Keep motion subtle: use short `150–220ms` transitions and avoid autoplay or distracting animation unless the product demonstration specifically requires it.

## Never
- Never copy the reference's logos, product names, labels, exact copy, or branded interface details.
- Never reuse the reference's specific device mockup, artwork, gradients, screenshots, or imagery.
- Never reproduce the exact dimensions or placement when the user's product needs a different composition.
- Never make the gallery feel like a generic dashboard; the preview must remain the visual hero.
- Never sacrifice legibility or responsive behaviour to preserve the desktop arrangement.
