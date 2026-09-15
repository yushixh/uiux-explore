## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060817-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-navigation

# Build a contextual announcement bar and primary navigation

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, typography, and key navigation destinations are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Goal
Create a polished responsive website header with two stacked layers:
1. A slim contextual announcement bar for region, language, or account context.
2. A main navigation row with a brand mark, audience/product switcher, and a prominent primary CTA.

The component should feel calm, trustworthy, approachable, and easy to scan. Preserve the hierarchy even if the user's brand uses different visual styling.

## Structure and layout
- Use a full-width header with a centered content container, approximately 1180–1240px wide on desktop.
- Keep the announcement bar visually lighter and shorter than the primary navigation.
- Announcement layout: dismiss control on the left, concise contextual message in the centre-left, a bordered selector beside it, and a compact circular continuation/action button at the far right.
- Primary navigation layout: brand area aligned left, audience or product switcher next to it, flexible empty space in the middle, and one high-priority CTA aligned right.
- Vertically centre all controls within their row; use consistent horizontal padding of roughly 32px on desktop and 20px on mobile.
- On smaller screens, collapse or simplify the announcement content rather than allowing awkward wrapping. Keep the primary CTA visible, and move secondary navigation into a menu or compact selector.
- Use a generous but controlled header height: roughly 64–76px for the main row and 64–72px for the announcement on desktop, with smaller heights on mobile.

## Typography hierarchy
- Use the product's brand typeface if available; otherwise use a clean, highly legible sans-serif system stack.
- Announcement text: 14–16px, regular weight, with the important location or status phrase given medium or semibold emphasis.
- Navigation labels: 15–17px, medium weight, with comfortable line height.
- CTA label: 15–16px, semibold, short and action-oriented.
- Avoid oversized display typography in the header; the navigation should support the page rather than dominate it.

## Colour and contrast
- Derive colours from the user's brand. As a neutral starting point, use:
  - page/header background: #FFFFFF or a very pale warm neutral such as #FAFAF8;
  - primary text: #17212B;
  - secondary text: #5B6570;
  - subtle divider or control border: #D6D9DC;
  - dark primary CTA: #102331;
  - brand accent for the brand mark or active state: an energetic colour such as #E5483E, but replace it with the user's accent.
- Maintain WCAG AA contrast for all text and controls.
- Keep the announcement bar and main navigation visually related; use a subtle background shift or hairline divider rather than heavy decoration.

## Borders, radius, and surfaces
- Use thin 1px borders in a low-contrast neutral for the announcement selector and any outlined controls.
- Give selectors and the CTA a rounded, friendly shape with approximately 10–14px radius; use a pill shape only when it suits the user's brand.
- The circular action button should be approximately 40–46px square with a simple arrow or equivalent directional icon.
- The main CTA should have a compact, confident shape with approximately 24–28px horizontal padding and a 10–14px radius.
- Avoid drop shadows unless the user's product language clearly requires them. Prefer whitespace and subtle separation.

## Interaction and states
- Make the dismiss control keyboard accessible and announce its purpose with an accessible label.
- The region/language selector should have a clear hover, focus, and open state; use a visible 2px focus ring that meets contrast requirements.
- The audience/product switcher should indicate that it opens a menu with a chevron or equivalent affordance. If it is a toggle, clearly style the selected option.
- Add restrained hover transitions: approximately 150–200ms for background, border, and colour changes.
- The primary CTA should become slightly lighter or more saturated on hover and retain a strong focus state.
- Respect reduced-motion preferences.
- Ensure all controls have minimum touch targets of approximately 44px.

## Responsive behaviour
- Desktop: two clean horizontal rows with the full contextual message and all controls visible.
- Tablet: reduce gaps and text length while preserving the same left-to-right hierarchy.
- Mobile: consider making the announcement dismissible and stacking only when necessary; keep the brand and CTA in the main row, with navigation controls behind a menu or compact dropdown.
- Prevent the header from becoming taller than the content requires, and avoid horizontal scrolling.

## Accessibility and implementation
- Use semantic `header`, `nav`, `button`, and disclosure/menu patterns where appropriate.
- Provide meaningful accessible names for icons and controls; do not rely on icons alone for essential actions.
- Support keyboard navigation in logical visual order.
- Use CSS variables or design tokens for colours, spacing, radii, and transitions so the header can be adapted to the user's brand.
- Build the component as reusable, data-driven UI rather than hard-coding one company's content.

## Never
- Never copy the reference's logos, product names, wording, regional message, or exact labels.
- Never use the reference brand's identity as the user's brand.
- Never reuse any illustrations, photography, imagery, or proprietary icon artwork from the reference.
- Never reproduce the exact pixel measurements or arrangement if they conflict with the user's product needs; preserve the underlying hierarchy and interaction principles instead.
- Never hide essential navigation or the primary action behind an inaccessible interaction.
- Never use low-contrast text, unexplained icon-only controls, or decorative elements that reduce clarity.
