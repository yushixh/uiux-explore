## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060950-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-navigation

## Before you start
Ask the user what their product is, who it is for, and what visual brand they want to express. Then apply the principles below to create a tailored version for that product rather than reproducing the reference.

## Build a minimal SaaS website header
Create a single horizontal navigation bar for a polished software product. The header should feel calm, premium, and highly scannable, with the brand anchored on the left, primary navigation in the middle, and account actions on the right.

### Layout and alignment
- Use a full-width white or near-white header with a centered content container.
- Set the container to roughly 1120–1240px wide, with 32–64px horizontal padding depending on viewport size.
- Use a compact header height of approximately 64–72px.
- Align all items vertically to the center on one baseline.
- Place the brand wordmark or text treatment at the far left; reserve enough width so it feels distinct from the navigation.
- Place primary links in a horizontal row with approximately 24–30px gaps.
- Push authentication actions to the far right using flexible spacing rather than excessive fixed positioning.
- Use two right-side actions: a low-emphasis outlined or plain “log in” style action and a high-emphasis filled rounded action for the main account conversion.
- Add a very subtle bottom border or divider to separate the header from page content.
- On smaller screens, collapse primary links into a menu button or compact drawer while preserving the brand and primary account action.

### Typography hierarchy
- Use a modern sans-serif with strong legibility, such as Inter, Geist, or a comparable system font.
- Render the brand in a heavier weight, around 700–800, with slightly tight letter spacing.
- Render navigation links at approximately 14–15px, regular weight, with a dark neutral colour.
- Keep button labels at approximately 14px with medium weight.
- Avoid oversized type: this component should communicate through spacing and alignment, not visual noise.

### Colour
- Background: white or near-white, approximately `#FFFFFF` or `#FCFCFC`.
- Main text and brand: near-black, approximately `#111111` to `#171717`.
- Secondary text: muted charcoal, approximately `#4A4A4A` to `#666666`.
- Filled primary action: near-black, approximately `#111111`, with white text.
- Outlined secondary action: white background with a light grey border around `#E5E5E5`.
- Divider: very light grey, approximately `#F0F0F0`.
- Add clear hover, focus, and active states while keeping the palette restrained; a subtle background tint or text darkening is sufficient.

### Borders, radius, and surfaces
- Use a 1px border for the secondary action and bottom divider.
- Give buttons a medium-to-pill radius, approximately 18–22px, with comfortable horizontal padding around 16–18px.
- Keep the header itself flat: no card shadow, glass effect, or decorative container unless the product brand specifically calls for it.
- Maintain consistent button height around 36–40px.

### Interaction and accessibility
- Make every navigation item a real link and every account action a clearly labelled button or link.
- Provide visible keyboard focus rings with sufficient contrast.
- Ensure the entire hit area of each action is comfortably clickable, not just the text.
- On hover, use subtle colour or background changes rather than dramatic motion.
- Support active-page indication through a small weight or colour change, without adding visual clutter.
- On mobile, make the menu keyboard accessible, trap focus while open if using a modal drawer, and provide an obvious close control.
- Preserve logical DOM order: brand, primary navigation, then account actions.

### Never
- Never use the reference’s logos, product names, exact copy, or brand-specific wording.
- Never copy the reference’s precise spacing, proportions, or pixel arrangement; use the rules as a design pattern.
- Never include illustrations, decorative imagery, or unrelated visual assets in this navigation.
- Never make the header visually dominant over the page content.
- Never rely on colour alone to communicate the active or focused state.
- Never omit responsive behaviour, keyboard access, or adequate contrast.
