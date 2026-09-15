## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060422-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060392-full.webp
- Component on Kage: https://kage.design/component/cal-navigation

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a navigation header for my product—not a copy of the reference.

## Design the component
Build a clean, minimal SaaS top navigation for the user's product. Treat it as a single horizontal header with a calm, premium feel and enough flexibility to work across desktop and mobile.

### Layout and alignment
- Use a full-width page background in a very light neutral, with the navigation inside a centered content container.
- Give the header a generous horizontal inset, approximately 40–56px on desktop and 20–24px on mobile.
- Align the brand mark or text wordmark to the far left on the primary baseline.
- Group utility and conversion actions on the far right: a low-emphasis sign-in or secondary action, a prominent primary CTA, and a compact menu button.
- Keep all controls vertically centered in one row, with approximately 12–16px gaps between adjacent actions.
- Use a max-width around 1180–1280px, adapting it to the user's product and content density.
- On narrow screens, preserve the brand and menu control; move secondary links into a menu or hide them according to the user's information architecture.
- Make the header sticky only if it benefits the product experience; if sticky, use a subtle background and border rather than a heavy shadow.

### Typography hierarchy
- Use a modern sans-serif selected to match the user's brand.
- Set the wordmark at roughly 25–28px, with a strong 650–750 weight and tight letter spacing.
- Use navigation and secondary actions at approximately 14px with a medium weight.
- Set the primary CTA at approximately 14px, semibold, with comfortable horizontal padding.
- Keep labels short and scannable; do not let the navigation become a paragraph of links.

### Colour
- Use an almost-white page and header background, approximately `#FAFAFA` to `#FFFFFF`.
- Use near-black primary text, approximately `#171717` to `#242424`.
- Use a slightly muted text colour, approximately `#555555` to `#737373`, for secondary actions.
- Make the primary CTA a deep charcoal or another brand-appropriate high-contrast colour, approximately `#252525` to `#303030`, with white text around `#FFFFFF`.
- Ensure text and controls meet accessible contrast requirements, and derive the final palette from the user's brand rather than treating these values as fixed.

### Borders, radius, and elevation
- Separate the header from the content below with a subtle 1px border in approximately `#E5E5E5` or `#EBEBEB`.
- Use a restrained radius on the CTA, around 10–12px; use a small radius or no visible container around the menu icon.
- Avoid large shadows. If the header is elevated or sticky, use only a very soft shadow such as `0 2px 8px rgba(0,0,0,0.04)`.
- Keep the visual treatment crisp and mostly flat.

### Interaction and accessibility
- Make the entire CTA and sign-in label easy to tap, with a minimum target size of about 44px in both dimensions where practical.
- Add clear hover, focus-visible, and pressed states without changing the layout.
- A dark CTA can become slightly lighter on hover, such as shifting from `#292929` to `#404040`; use a subtle opacity or colour change for secondary actions.
- Give the menu button an accessible label and use a simple three-line or equivalent menu icon with consistent stroke weight.
- If the menu opens, use a right-aligned or full-width panel with the same spacing, typography, and border language as the header. Support keyboard navigation, Escape to close, and visible focus states.
- Respect reduced-motion preferences; use only a brief, subtle transition around 150–200ms.

## Never
- Never use the reference product's logo, wordmark, product name, or exact copy.
- Never reproduce the reference's brand identity as a pixel-perfect clone.
- Never reuse logos, illustrations, imagery, or decorative assets from the reference.
- Never assume the user's product has the same actions, link labels, colours, or navigation structure; ask first and adapt the component to their needs.
- Never sacrifice keyboard access, readable contrast, responsive behaviour, or touch target size for visual similarity.
