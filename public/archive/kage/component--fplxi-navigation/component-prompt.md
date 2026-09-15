## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073156-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073135-full.webp
- Component on Kage: https://kage.design/component/fplxi-navigation

# Build a floating pill navigation component

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, typography, and navigation items are. Then apply the principles below to my product rather than reproducing the reference literally.

## Design goal
Create a responsive desktop navigation bar that feels like a floating, self-contained control. It should balance several secondary navigation links with a compact contextual status indicator and one unmistakable primary action.

## Reusable design rules

### Layout and alignment
- Place the navigation in a page-level wrapper with a very light cool-toned background, approximately `#f3f3fb` or a colour derived from the product brand.
- Use a single horizontal flex row inside a dark capsule. Align every item vertically to the centre.
- Keep the brand or product mark at the far left, followed by navigation links with consistent gaps.
- Place utility content toward the right: a compact status or context chip, a secondary account action, and a primary CTA.
- Use `justify-content: space-between` only for the major left and right groups; use explicit gaps within each group so the navigation remains visually ordered.
- Give the capsule a maximum width appropriate to the content and horizontal breathing room from the viewport edges. On small screens, collapse or hide lower-priority links and preserve the brand plus primary action.
- Maintain a minimum touch target of roughly `40–44px` for links and buttons, even when the visual text is smaller.

### Typography hierarchy
- Use a modern sans-serif with clean numerals and good legibility at small sizes.
- Keep navigation labels around `14px`, medium weight, with a relaxed line height.
- Make the brand slightly bolder than the links, but avoid an oversized wordmark.
- Use a smaller, semibold treatment for status text and a compact bold treatment for the CTA.
- Use tabular or semi-tabular numerals for countdowns, metrics, or other live values where available.

### Colour
- Use a near-black charcoal for the main capsule, approximately `#17171c` to `#202026`.
- Use warm off-white for the brand and active/high-priority text, approximately `#f5f3f0`.
- Use muted grey for secondary links, approximately `#aaa9af`, with a brighter value such as `#f0eff2` on hover or focus.
- Give the contextual status chip a slightly lighter charcoal, approximately `#303037`, so it reads as a nested control without becoming visually dominant.
- Use a saturated periwinkle or violet-blue for the main CTA, approximately `#6864df` to `#7773ed`, with a lighter hover state.
- Ensure text and controls meet accessible contrast requirements; do not rely on colour alone to communicate state.

### Borders and radius
- Make the outer navigation fully pill-shaped with a radius of at least `999px`.
- Use a subtle light or dark edge around the capsule, approximately `1px solid rgba(255,255,255,0.12)` or a brand-appropriate equivalent, to separate it from the page background.
- Keep nested status chips and the CTA rounded, but use a slightly smaller radius than the outer shell so the hierarchy is clear.
- Avoid heavy shadows. If elevation is needed, use a soft, broad shadow such as `0 8px 24px rgba(20,20,35,0.10)`.

### Interaction
- Add a calm colour transition on link hover and focus, not a distracting animation.
- Show a clear keyboard focus ring around links, the status control if interactive, account actions, and the CTA.
- If the status chip contains a live countdown or context value, make its update unobtrusive and preserve stable width so nearby items do not jump.
- If a navigation item has a dropdown, include a small chevron with enough spacing and provide an accessible expanded state.
- Make the primary CTA visually dominant through colour and contrast, not excessive size.
- Support reduced-motion preferences and ensure the navigation remains usable at zoomed text sizes.

## Never
- Never copy logos, product names, navigation labels, status text, or CTA copy from the reference.
- Never reuse the reference's exact typography, colours, spacing values, or proportions as a brand identity.
- Never include the reference's illustrations, imagery, icons, or decorative assets.
- Never make the navigation depend on hover alone, hide essential controls on keyboard focus, or use a countdown without an accessible text alternative.
- Never turn the component into a full-width generic header if the product benefits from a compact floating control.
