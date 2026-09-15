## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106490-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-navigation

## Before you start
Ask the user what their product is, who it is for, and what brand personality, colours, and typography they want. Then apply the principles below to create a navigation header for their product rather than reproducing the reference.

## Design language

Build a responsive SaaS navigation bar with a calm, lightweight visual presence:

- **Layout and alignment:** Use a full-width header with a softly coloured background. Keep the main content inside a centered container, approximately 1200–1280px wide, with 16–24px horizontal padding on small screens and 32–64px on larger screens. Arrange three zones on desktop: a brand control aligned left, a compact group of primary links centered, and authentication/actions aligned right. Use flexbox with balanced spacing; avoid relying on absolute positioning for the overall layout. On mobile, collapse the link group into a menu button or disclosure and keep the brand and primary action visible.
- **Header sizing:** Aim for roughly 68–76px of vertical height. Vertically center every control and preserve generous empty space around the navigation so it feels premium rather than dense.
- **Typography hierarchy:** Use a modern sans-serif. Set navigation labels around 14–16px with medium weight and comfortable line height. Keep the brand slightly stronger at 14–16px, and use semibold text for the main CTA. Avoid oversized display typography in the header.
- **Colour:** Use a very light green-to-lime horizontal or subtly diagonal gradient, approximately from `#d9ef9f` to `#b8ed63`; tune it to the user's brand. Use near-black text such as `#171717`. Keep secondary actions on a translucent white or pale neutral surface, and make the primary CTA a slightly stronger light-green or brand-tinted fill. Maintain accessible text contrast.
- **Controls:** Present the brand as a compact rounded pill with a faint translucent or white fill. Place primary navigation links in a single soft rounded container, using even horizontal padding and 14–18px gaps. Render secondary authentication as an outlined or pale-filled pill, and the main conversion action as a filled pill with clear visual priority.
- **Borders and radius:** Use subtle 1px borders around controls, approximately `rgba(20, 30, 10, 0.10)`, with faint inner highlights if appropriate. Use generous pill radii of 12–16px for the brand and action buttons, and 12–14px for the link container. Avoid heavy shadows; if used, keep them diffuse and low opacity, such as `0 2px 8px rgba(35, 50, 10, 0.06)`.
- **Interaction:** Add a gentle background or border transition on hover and focus. Links can use a slightly darker translucent surface or underline on hover. Buttons should lift or brighten subtly, never bounce aggressively. Provide a visible keyboard focus ring using the product's accent colour. Ensure the entire navigation remains usable at reduced widths and that the mobile menu has an accessible label and logical focus order.

## Never

- Never copy the reference's logo, product name, navigation labels, or button copy.
- Never reuse the reference's exact brand colours, typography, spacing measurements, or visual assets; adapt the rules to the user's product and brand.
- Never include illustrations, photographs, decorative imagery, or external logos in this navigation component.
- Never use inaccessible low-contrast text or hide essential navigation behind hover-only behaviour.
- Never make the desktop layout depend on brittle absolute positioning or fixed widths that break on mobile.
