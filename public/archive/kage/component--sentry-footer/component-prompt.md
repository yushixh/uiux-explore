## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073906-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-footer

## Before you start

Ask the user what their product does, who it is for, and what their brand personality, colour palette, and preferred content hierarchy are. Then apply the principles below to create an original footer for that product—not a copy of the reference.

## Build this section

Create a full-width, long-form website footer for a modern software product. Treat it as the final narrative section of the page, moving from reassurance and trust, to newsletter capture, to a decisive product CTA, and finally to utility navigation and legal/social links.

### 1. Overall layout and alignment

- Use a deep, nearly-black plum or navy background, approximately `#21172F` to `#251936`, across the entire footer.
- Keep all primary content inside a centered max-width container of roughly `1180–1280px`, with generous horizontal padding: `clamp(24px, 7vw, 96px)`.
- Build the footer as four vertically stacked zones:
  1. A trust and compliance block aligned to the left.
  2. A newsletter signup area with a form and optional decorative visual region.
  3. A centered final conversion CTA.
  4. A multi-column navigation and legal utility area.
- Use generous vertical spacing between zones—approximately `120–180px` on desktop—so the footer feels editorial and substantial rather than compressed.
- On mobile, collapse all columns into a single readable flow. Preserve the hierarchy and whitespace, but reduce section gaps to around `72–104px`.

### 2. Trust and compliance block

- Start with a large two-line headline. Use an off-white first line and a vivid accent colour for the most important second line.
- Keep the text block narrow enough to create intentional line breaks, around `680–820px` maximum.
- Add a short supporting paragraph below, with a comfortable reading width of roughly `600–700px` and a line height around `1.6`.
- Include a horizontal row of trust, security, privacy, or compliance indicators beneath the copy. These must be represented with generic text badges, abstract geometric marks, or accessible placeholders that fit the user's product; do not use real certification artwork unless the user supplies it and it is accurate.
- Place two compact actions below the trust indicators: one filled light button and one outlined accent button.

### 3. Newsletter capture

- Introduce the signup area with another large heading, using the same two-tone treatment: neutral text for the setup and an accent colour for the emphasized phrase.
- Place the form in a saturated purple or brand-colour panel, approximately `#4A238F` or an equivalent colour derived from the user's palette.
- The panel should be left aligned and constrained to roughly `620–700px` on desktop. If decorative artwork is appropriate, reserve an adjacent region rather than allowing it to interfere with form readability.
- Include:
  - An uppercase or small-label email field label.
  - A full-width input with a light background and dark text.
  - A checkbox with concise consent language.
  - Small muted legal or privacy text with underlined links.
  - A compact filled submit button.
- Make all fields keyboard accessible, provide visible focus states, and use clear validation and success/error messaging.
- On mobile, stack the form and any decorative region; never let artwork overlap the input or submit control.

### 4. Final conversion CTA

- Center this section horizontally and give it enough breathing room to feel like a confident conclusion.
- Use a bold heading, a short paragraph with a maximum width around `650px`, and two actions: a high-contrast filled button and a secondary outlined button.
- Make the CTA visually distinct through scale and spacing, not through a new background colour.

### 5. Navigation and utility footer

- Use a four-column desktop grid for link groups such as Company, Product, Solutions, and Support. Adapt the number and names of groups to the user's product.
- Give each group a small bold heading in the accent colour, approximately `#D94AAE`, `#E04CB3`, or an appropriate brand equivalent.
- Use compact uppercase or small-cap link labels in off-white, with clear row spacing of around `24–32px`.
- Make links visibly interactive with a colour shift, underline, or subtle opacity transition on hover and focus.
- Separate the navigation area from the legal/social row with a thin, decorative, or brand-specific divider. A simple 1px line around `rgba(255,255,255,.75)` is acceptable; a subtle repeating pattern can be used if it suits the brand.
- Finish with a utility row containing legal links on the left, optional trust/open-source or partner marks in the centre, and social links on the right. On smaller screens, stack or wrap these groups cleanly.
- Add a small, low-contrast copyright or ownership line at the very bottom.

### 6. Type, colour, and component styling

- Use a bold contemporary sans-serif or display sans for headings and a highly legible sans-serif for body copy. If the brand has a type system, use it consistently.
- Suggested hierarchy:
  - Major headings: `clamp(2.5rem, 5vw, 4.5rem)`, weight `700–800`, line height `0.98–1.08`.
  - CTA heading: `clamp(2.25rem, 4vw, 3.75rem)`.
  - Body: `1rem–1.125rem`, line height `1.55–1.7`.
  - Navigation and buttons: `0.75rem–0.9rem`, weight `700`, optionally uppercase.
- Suggested colours: background `#21172F`; primary text `#FAF8F5`; muted text `#D6CFDB`; accent pink `#E34AAE`; form panel `#4A238F`; input surface `#F8F7FA`; dark text `#21172F`.
- Use strong contrast for all essential text and controls. Confirm colour contrast rather than relying on the suggested values.
- Use restrained radii: approximately `6–10px` for inputs, panels, and buttons. Avoid excessive pills unless they are part of the user's existing brand.
- Buttons should have clear padding, around `14px 20px`, medium-to-bold labels, and a fast `150–220ms` hover/focus transition.
- Avoid card-heavy styling. Let the dark canvas, typography, spacing, and occasional colour panels create the structure.

### 7. Responsive and accessibility behaviour

- At tablet widths, reduce the navigation to two columns and keep the trust badges horizontally scrollable only if necessary; otherwise wrap them.
- At mobile widths, use one-column layouts, full-width form controls, and left-align most content except the final CTA if centering remains readable.
- Maintain a visible `:focus-visible` outline in an accessible accent or light colour.
- Use semantic `footer`, `nav`, headings in logical order, labelled form controls, a real checkbox, and descriptive accessible names for social links.
- Do not make the entire footer excessively tall through arbitrary empty space; spacing should support the transition between narrative zones.

## Never

- Never copy the reference's logos, product names, brand names, exact copy, certification marks, social icons, or legal text.
- Never reproduce the reference illustration, characters, artwork, or imagery; use no imagery at all unless the user's product specifically needs an original visual treatment.
- Never assume the user has the same compliance claims, navigation taxonomy, newsletter consent language, or CTA wording.
- Never create inaccessible low-contrast text, unlabeled inputs, invisible focus states, or decorative elements that obscure content.
- Never make a pixel-for-pixel replica; preserve the compositional principles while creating a distinct footer for the user's product.
