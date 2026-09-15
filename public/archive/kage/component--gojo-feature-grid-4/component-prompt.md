## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106543-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-feature-grid-4

## Before you start
Ask what the user's product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original feature section for that product rather than reproducing the reference.

## Build this section
Create a responsive feature-grid section that explains one focused product capability through a two-column composition:

- Put a product preview or interface mockup in the left column and the explanatory content in the right column on wide screens.
- Vertically center the two columns within a generous, restrained section. On small screens, stack the preview above the text.
- Keep the composition editorial and spacious: the preview should occupy roughly 42% of the content width, while the text column occupies roughly 58%.
- Align the text block to the left and constrain its reading width so the paragraph does not become overly long.
- Use a small eyebrow row above the heading. It may include a simple neutral UI icon and uppercase or widely tracked category text, but it must be appropriate to the user's product.
- Follow the eyebrow with a concise, bold benefit-led heading, then a muted explanatory paragraph.
- Finish with two or three short supporting benefit rows. Separate rows with thin horizontal rules, give each row comfortable vertical padding, and use plain text rather than large cards or excessive icons.

## Design language

### Layout and spacing
- Use a centered content container with a maximum width of approximately 1150–1200px and horizontal padding of 32px on desktop, reducing to 20–24px on mobile.
- Give the section generous vertical padding, approximately 88–120px on desktop and 56–72px on mobile.
- Use a desktop grid around `minmax(0, 0.9fr) minmax(0, 1.1fr)` with a 52–64px gap.
- Keep the preview compact and intentional rather than full-bleed. It should feel like an example of the product, not a decorative hero image.
- Use approximately 20–28px between the eyebrow and heading, 14–18px between heading and paragraph, and 20–28px before the benefit list.
- On narrow screens, switch to one column with 36–48px between the preview and copy.

### Typography
- Use the product's brand typeface if available; otherwise use a clean modern sans-serif system stack.
- Eyebrow: 11–12px, medium weight, uppercase or small caps, with approximately `0.16em` letter spacing.
- Heading: 28–34px on desktop, 25–30px on mobile, 650–750 weight, with tight line-height around 1.1–1.2.
- Body copy: 16–18px, regular weight, line-height around 1.5–1.65.
- Benefit rows: 15–16px with a slightly darker colour than the paragraph for clear scanning.
- Keep the hierarchy understated: one strong heading, one supporting paragraph, and simple list rows.

### Colour
- Use the user's brand colours where available, but preserve a quiet neutral foundation.
- Suggested background: warm white or near-white, approximately `#FCFCFB` or `#FFFFFF`.
- Primary text: near-black, approximately `#171717`.
- Secondary paragraph text: soft grey, approximately `#777777`.
- Eyebrow and icon: muted grey, approximately `#8A8A8A`.
- Rules and preview borders: very light grey, approximately `#E7E7E5`.
- If the preview contains a dark interface, use a near-black surface around `#050505`, with restrained grey controls and one small brand accent. Keep contrast purposeful rather than decorative.

### Preview treatment
- Render the preview as a believable, simplified product UI or device-like panel that communicates the feature at a glance.
- Give it a modest corner radius of approximately 10–14px, a subtle 1px border, and optionally a very soft shadow.
- Preserve generous surrounding whitespace; do not let the mockup dominate the entire section.
- Ensure any text inside the preview is generic interface text generated for the user's product, not copied from the reference.

### Borders, radius, and interaction
- Use 1px horizontal dividers in the benefit list; avoid heavy card outlines.
- Keep outer surfaces mostly flat and use small-to-medium radii, around 10–14px.
- If benefit rows are interactive, add a gentle background tint or text-colour transition on hover and keyboard focus, while preserving the divider structure.
- Make focus states visible and accessible, with a 2px brand-colour outline or equivalent.
- Keep motion subtle: a short 150–220ms ease transition for hover states and no distracting animation by default.
- Provide meaningful accessible labels for any preview controls and ensure the stacked mobile layout remains easy to scan.

## Never
- Never use the reference company's logo, product name, brand marks, or proprietary copy.
- Never copy the exact headline, eyebrow, benefit labels, interface text, or wording from the reference.
- Never reuse the reference illustration, screenshot, imagery, or device mockup; create a new product-specific preview.
- Never make the section a pixel-for-pixel recreation.
- Never add decorative imagery, gradients, excessive cards, or complex interactions that compete with the feature explanation.
