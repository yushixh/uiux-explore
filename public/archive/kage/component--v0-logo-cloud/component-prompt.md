## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073272-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-logo-cloud

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create a logo-cloud section tailored to my product—not a copy of the reference.

## Build this component
Create a compact customer or partner logo-cloud section for a modern software product. It should feel quiet, credible, and editorial: the logos support the surrounding content rather than becoming the focal point.

### Layout and alignment
- Use a wide, centered inner container with generous horizontal padding; target roughly 1120–1230px max width depending on the page grid.
- Place the marks in one horizontal row on desktop, distributed with equal visual spacing rather than rigidly equal logo-box widths.
- Vertically center every logo in a shallow strip. Account for different logo aspect ratios and optical weights so no mark appears noticeably higher, lower, larger, or darker than the others.
- Keep the section visually self-contained with ample empty space above and below. Do not add a heading unless the surrounding product layout requires one.
- On smaller screens, either wrap the logos into two balanced rows or allow a deliberate horizontal scroll rail with clipped edges and no visible scrollbar. Preserve comfortable side padding.
- Use accessible, semantic markup: a section with an optional descriptive label, a list of logos, and meaningful alternative text when logos communicate customer identity.

### Typography and logo treatment
- Do not recreate or reuse recognizable marks from any reference. Use neutral placeholder wordmarks or the user’s own approved customer assets.
- Render supplied logos in a single muted treatment where appropriate: grayscale or a desaturated brand-neutral tone.
- A useful starting point is medium gray around `#A6A6A6` on an off-white surface around `#FCFCFC`; tune contrast to the user’s accessibility requirements.
- Keep wordmarks visually modest, approximately 22–32px tall depending on their proportions. Avoid making logos look like headlines.
- If text-based placeholders are needed during development, use generic names such as “Company One” and “Studio North,” set in a neutral sans-serif with medium weight and restrained tracking.

### Spacing, borders, and surfaces
- Use generous internal whitespace: approximately 48–72px vertical padding on desktop and 28–44px on mobile.
- Keep horizontal gaps roughly 56–96px on desktop, adapting to the number and optical width of marks; use 28–48px on mobile.
- Prefer a nearly white or transparent background that fits the parent section. If a distinct panel is needed, use `#FFFFFF` against a page background near `#F8F8F8`.
- Avoid heavy cards, shadows, gradients, or decorative dividers. If separation is necessary, use a 1px border in a very light neutral such as `#F0F0F0`.
- Use a small radius, around 8–12px, only when the logo rail is presented as a panel; otherwise let it remain borderless.

### Interaction and responsive behavior
- Logos are static by default. If they link to customer stories or partner pages, make each one keyboard-focusable and add a subtle opacity or contrast change on hover and focus.
- Use a gentle transition around 150–200ms; do not add bouncing, auto-scrolling, or distracting animation.
- Maintain clear focus indicators that meet accessibility requirements.
- Ensure the row does not cause horizontal page overflow. On narrow screens, use a controlled scroll container or wrapping grid and provide an accessible label explaining the content if needed.

## Never
- Never copy the reference’s logos, logo order, product names, or customer names.
- Never use logos, copy, illustrations, imagery, or brand assets from the reference as placeholders.
- Never invent claims such as “trusted by” unless the product owner provides approved wording.
- Never use low-contrast logos that fail accessibility when they convey essential information.
- Never turn the logo cloud into a visually dominant hero element or add unnecessary animation.
