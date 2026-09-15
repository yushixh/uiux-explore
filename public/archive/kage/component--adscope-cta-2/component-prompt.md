## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106704-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106621890-full.webp
- Component on Kage: https://kage.design/component/adscope-cta-2

## Before you start
Ask the user what their product does, who it is for, and what their brand identity should feel like. Then apply the principles below to create an original version for their product—not a visual copy of this reference.

## Build an FAQ-to-CTA transition section
Create a responsive section that moves from a single FAQ accordion item into a bold, high-energy call-to-action panel. The component should feel like the end of a persuasive landing-page sequence: first address a lingering objection, then give the visitor a memorable next step.

### Layout and alignment
- Use a full-width page section with a centered content column and generous horizontal padding, approximately 24px on mobile and 5–7vw on larger screens.
- Place the FAQ row first on a white or near-white background. Make it a wide, single-row accordion trigger with a minimum height of about 92px on desktop and 72px on mobile.
- Align the question text to the left and the disclosure control to the far right. Keep the row content vertically centered.
- Add generous vertical breathing room between the FAQ and the CTA panel—roughly 96px on desktop, reduced to 56px on mobile.
- Make the CTA panel full bleed within the page section, or extend it to the viewport edges if the surrounding page supports that treatment. Give the panel a generous top and bottom padding, approximately 96–140px desktop and 72–96px mobile.
- Center the CTA content horizontally. Keep the main message to one or two lines at desktop widths and allow natural wrapping on smaller screens.
- If adding a CTA button, place it below the headline with 24–32px of spacing and keep the button visually subordinate to the headline’s impact.

### Typography hierarchy
- Use a clean contemporary sans-serif with a neutral, highly legible appearance.
- FAQ question: medium weight, approximately 24–26px desktop and 18–20px mobile, with tight but comfortable line height around 1.2.
- CTA headline: large, confident, and lightweight-to-regular rather than heavy; approximately 64–88px desktop, 42–56px tablet, and 34–42px mobile. Use a line height around 0.95–1.05.
- Use sentence case and concise, product-specific language. The CTA should express a clear benefit or decisive action rather than a generic “Learn more.”
- Keep supporting copy short and optional; if present, use 16–18px with relaxed line height.

### Colour
- Use a warm near-white background for the FAQ area, approximately `#FFFFFF` or `#FCFCFC`.
- Use a vivid chartreuse/lime CTA surface, approximately `#E6FF24` to `#F0FF32`, adjusted to suit the product’s brand palette.
- Use near-black text, approximately `#080808` or `#111111`, for strong contrast.
- Use a restrained accent colour for the accordion chevron, such as a soft violet around `#B56BC7`, or derive it from the user’s brand system.
- Check text contrast carefully, especially if the brand colour changes.

### Borders, radius, and geometric details
- Give the FAQ trigger a thin neutral border, approximately 1px in `#CFCFCF` or a brand-appropriate equivalent.
- Use a moderate rounded radius around 18–20px for the FAQ container; avoid excessive pill styling.
- Keep the CTA panel’s corners square or minimally rounded so it reads as a confident colour field connected to the page.
- Optional: add very low-opacity abstract geometric marks—such as an oversized corner arrow, bars, or a cropped symbol—using a slightly darker/lighter version of the lime. They should sit behind the content, remain partially cropped, and never compete with the headline. Do not use illustrative imagery.

### Interaction
- Make the FAQ row keyboard accessible with a real button or disclosure trigger, including `aria-expanded` and `aria-controls`.
- On hover, slightly change the FAQ border or background and shift the chevron by 1–2px; keep the interaction subtle.
- Rotate the chevron about 180 degrees when the answer opens. Reveal the answer with a short height-and-opacity transition, around 180–240ms, using an ease-out curve.
- Keep the CTA button, if used, with a clear hover and focus state: a small upward translation or colour inversion is sufficient.
- Respect `prefers-reduced-motion` and preserve visible keyboard focus rings.

### Responsive behaviour
- On mobile, reduce the FAQ and CTA type without making the headline feel timid.
- Let long FAQ questions wrap naturally while keeping the chevron aligned to the right edge.
- Prevent decorative marks from obscuring text; hide or simplify them at narrow widths.
- Ensure the CTA remains visually substantial without creating horizontal overflow.

### Never
- Never reuse logos, product names, exact copy, or brand-specific phrases from the reference.
- Never copy the reference composition so literally that it appears to be the same design; adapt the hierarchy and principles to the user’s product and brand.
- Never use the reference’s illustrations, geometric artwork, or imagery as assets.
- Never sacrifice accessibility, responsive behaviour, readable contrast, or keyboard interaction for visual similarity.
