## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067821-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-navigation

# Build a dark SaaS navigation header

## Before you start
Ask me what my product does, who it is for, and what its brand personality and primary actions are. Then apply the principles below to create an original navigation component for my product—not a copy of the reference.

## Goal
Build a polished responsive website header for a modern software product. It should feel calm, premium, lightweight, and focused on getting users to the primary call to action.

## Design language

### Layout and alignment
- Use a full-width header with a very dark near-black background, approximately `#090909`.
- Keep the header content inside a centered max-width container of roughly 1120–1200px, with comfortable horizontal padding of 24px on desktop and 16px on mobile.
- Use a single horizontal flex row, vertically centered, with a height around 68–72px.
- Place the brand lockup on the left, navigation links in the middle/right, and the primary CTA at the far right.
- Keep the brand visually stable while navigation remains easy to scan. Use consistent gaps of approximately 26–32px between desktop links.
- On narrower screens, collapse or hide secondary links behind a compact menu control while preserving the brand and primary CTA when space permits.

### Background treatment
- Add a subtle decorative field of tiny, low-contrast dots or a minimal grid behind the header. Use sparse repetition, not a prominent texture.
- Keep the decoration around `#242424` to `#303030` at low opacity against the near-black base, and ensure it never interferes with text contrast.
- Clip the pattern to the header area and avoid large decorative illustrations.

### Typography hierarchy
- Use a clean modern sans-serif system or geometric sans font.
- Brand text: 15–16px, medium or semibold weight, approximately `#f3f3f3`.
- Navigation: 14px, regular weight, muted gray around `#929292`; use a slightly brighter gray around `#d0d0d0` on hover or for the active item.
- CTA label: 13–14px, medium weight, near-white.
- Keep line heights tight and vertically center all text in the header.

### Brand lockup
- Create an original small brand mark appropriate to the user's product, paired with a short product name supplied by the user.
- The mark should be simple and compact, roughly 20–24px square, with enough contrast to remain recognizable at small sizes.
- Do not assume the reference's icon, silhouette, or colors; derive the mark from the user's own brand direction.

### CTA
- Use one primary pill-shaped button at the right side of the header.
- Give it a dark charcoal fill around `#171819`, a subtle 1px border around `#2c2d2f`, and a radius of 999px.
- Add a small warm accent indicator or other product-appropriate micro-detail only if it supports the user's brand; an orange starting point is approximately `#f47b20`.
- Add horizontal padding around 16–18px and a height around 38px.
- On hover, gently brighten the background and border; use a short 150–200ms ease transition. Avoid exaggerated scaling or glow.

### Borders, radius, and spacing
- Prefer quiet, low-contrast borders rather than visible separators.
- Use the pill radius only for the CTA and controls; keep the overall header edge square or subtly rounded only if it suits the product shell.
- Maintain at least 8px between a CTA indicator and its label, and at least 20px between the navigation group and CTA.
- Ensure the clickable area of every navigation item is at least 36–44px tall, even if the visible text is smaller.

### Interaction and accessibility
- Navigation links should have clear hover and keyboard-focus states using a brighter text color and a visible, accessible focus ring.
- Mark the current page or section with a subtle color shift or underline rather than heavy decoration.
- Make the CTA visually primary without making the navigation feel noisy.
- Use semantic `<header>`, `<nav>`, links, and a real button for the mobile menu if one is included.
- Provide an accessible name for the brand link and mobile menu control, and preserve strong contrast in all states.

## Responsive behavior
- Desktop: show the complete navigation in one line.
- Tablet: reduce link gaps modestly before hiding lower-priority links.
- Mobile: use a compact menu pattern and retain a clear primary action; prevent wrapping or horizontal overflow.
- Keep the header visually balanced at every breakpoint.

## Never
- Never copy the reference's logo, icon, product name, navigation labels, or CTA copy.
- Never reuse the reference's exact decorative pattern, proportions, spacing, or visual marks.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never make the background texture brighter than the navigation or turn it into a dominant visual.
- Never use inaccessible low-contrast text, tiny click targets, or a CTA that looks like an unrelated badge.
