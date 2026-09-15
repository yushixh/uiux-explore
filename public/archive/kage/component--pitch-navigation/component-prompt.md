## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060645-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-navigation

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for that product—do not reproduce the reference site's branding, wording, or assets.

## Build this section
Create a responsive website header with two layers:

1. **Announcement bar** — a full-bleed strip at the very top of the viewport. Keep it short, centered, and easy to scan. Use a brief bold lead-in followed by supporting text and a clearly visible text link with a small arrow. Add a close icon at the far right. On narrow screens, allow the message to wrap cleanly or reduce it to one concise line while keeping the close control accessible.
2. **Floating navigation** — position the main navigation over the hero area below the announcement bar rather than placing it in a separate opaque block. Use a wide horizontal container with generous side margins. Align the product mark or wordmark on the left, primary navigation links toward the center/right, and authentication actions on the far right. Use a compact text login action with an arrow and a high-contrast filled signup button.

## Design language
- **Layout and alignment:** Use a full-width announcement row around 44–48px tall. Place the navigation in a max-width container around 1200–1280px, with 24–40px horizontal padding. Vertically center every control. Keep the left and right edges aligned to the same container grid. On mobile, collapse nonessential links into a menu button and preserve the announcement close control.
- **Layering:** Let the navigation sit above the hero with a transparent or lightly frosted surface. If the background is busy, add a subtle white translucent wash or backdrop blur rather than a heavy panel. Ensure text remains readable against the hero.
- **Typography:** Use a modern sans-serif with slightly tight tracking. Announcement copy should be approximately 13–14px with a 1.3 line-height; make its lead-in semibold or bold. Navigation links should be 14–16px medium weight. Keep button labels concise and semibold. Use sentence case rather than all caps.
- **Colour:** Adapt the palette to the user's brand. As a neutral starting point, use a soft lavender announcement background near `#C4A5FF`, near-black text near `#111111`, white or translucent white navigation surfaces near `rgba(255,255,255,0.72)`, and a vivid accent action near `#B8F34A`. Do not assume the accent must be green; choose an equivalent colour from the user's brand system. Maintain strong contrast for all text and controls.
- **Borders and radius:** Keep the announcement bar borderless or use a barely visible bottom border near `rgba(17,17,17,0.08)`. Give the signup control a medium rounded rectangle, approximately 8–12px radius. Use a very subtle radius on the navigation container only if it is visibly card-like; otherwise let it feel integrated with the hero.
- **Spacing:** Use 8px-based spacing. Give the announcement content 12–16px horizontal breathing room. Keep 20–32px gaps between nav groups, 12–16px inside buttons, and enough padding around the header that it feels airy rather than compressed.
- **Interaction:** The announcement close icon should dismiss the bar and allow the navigation to move upward smoothly. Links should have a restrained colour or opacity transition on hover. The arrow in login/link actions may shift 2–4px on hover. The primary button should slightly darken or increase contrast on hover and show a visible focus ring for keyboard users. Keep hit areas at least 40px, even when the visual icon is small.
- **Accessibility and responsiveness:** Use semantic `header`, `nav`, and `button` elements, accessible labels for the close and menu controls, visible keyboard focus states, and sufficient contrast. Respect reduced-motion preferences. Account for the announcement bar height when positioning the floating navigation and avoid covering hero content on small screens.

## Never
- Never use logos, product names, taglines, copy, illustrations, screenshots, or imagery from the reference.
- Never recreate the reference brand identity or use its exact announcement wording.
- Never make the navigation dependent on a photographic or illustrated background to remain usable.
- Never hide essential navigation or account actions behind hover-only interactions.
- Never remove focus states, accessible labels, or mobile-friendly controls.
