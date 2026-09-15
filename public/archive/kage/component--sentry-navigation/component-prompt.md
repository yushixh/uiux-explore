## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073902-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-navigation

# Build a dark SaaS header navigation

## Before you start
Ask me what my product does, who it is for, and what brand personality, typeface, colour palette, and navigation structure I want. Then apply the principles below to create a version for my product rather than reproducing any reference design.

## Goal
Create a polished desktop website header for a software product. It should feel confident, technical, and premium, with navigation links on one line and two clearly differentiated calls to action on the right. Make the component responsive and accessible.

## Design language

### Layout and alignment
- Use a full-width header with a deep near-black purple background, approximately `#1D152F`.
- Keep the header content in a centered max-width container, roughly 1180–1280px wide, with 24–32px horizontal padding.
- Use a single horizontal flex row on desktop: brand area on the left, navigation in the middle, and actions on the right.
- Give the brand enough width to establish an anchor, then use generous but controlled gaps between navigation groups.
- Vertically center every item in a compact header around 72–80px tall.
- On smaller screens, collapse the navigation into a menu button and preserve the primary CTA if space allows. Avoid horizontal overflow.

### Brand treatment
- Reserve space for a simple product mark and wordmark, but use the user's own brand assets or a neutral placeholder during implementation.
- Keep the brand visually brighter than the navigation text without making it oversized.
- The mark should be geometric and compact; do not introduce decorative artwork.

### Typography hierarchy
- Use a clean contemporary sans-serif with strong legibility; prefer the product's brand font, otherwise use a system or modern grotesk stack.
- Navigation labels should be uppercase or small-cap styled, medium to semibold, approximately 13–15px, with slightly increased tracking.
- Keep utility links such as sign-in visually quieter than the action buttons while maintaining readable contrast.
- Use concise labels and consistent capitalization across all items.

### Colour
- Header background: deep plum-black, approximately `#1D152F`.
- Primary text and wordmark: soft white, approximately `#F7F5FA`.
- Secondary navigation text: muted lavender-white, approximately `#DDD7E7`.
- Hover text: pure or near-white, approximately `#FFFFFF`.
- Secondary CTA border: a warm pink/coral accent, approximately `#E99AAE`.
- Primary CTA background: soft white, approximately `#F4F1F5`; primary CTA text should use the dark brand colour, approximately `#241A36`.
- Ensure all text and controls meet WCAG contrast requirements.

### Borders, radius, and controls
- Use a subtle 1–2px border around the outlined CTA, with a medium rounded radius around 8–10px.
- Use a similar radius for the filled CTA, around 8–10px, so the actions feel like a matched pair.
- Buttons should be approximately 40–48px tall with 16–20px horizontal padding.
- Navigation items should have comfortable hit areas even when their visible text is compact.
- For links with submenus, include a small chevron with consistent stroke weight and spacing; the chevron should align optically with the label.

### Interaction
- Make the entire header sticky only if it supports the product's page context; if sticky, add a subtle background shift or shadow after scrolling rather than a heavy border.
- Navigation links should transition smoothly between muted and bright text on hover and focus.
- Outlined CTA hover state: slightly brighten or fill the accent at low opacity while retaining readable text.
- Filled CTA hover state: shift to a slightly darker or more saturated neutral and add a restrained elevation change.
- Provide visible keyboard focus rings using a high-contrast accent colour.
- Dropdown menus, if present, should open on click or keyboard activation, align to the relevant nav item, and use the same dark surface with a subtle border and shadow.
- Respect reduced-motion preferences.

### Content structure
- Include a brand link, a small set of primary navigation links, an optional subset with dropdown indicators, a sign-in link, and two CTAs: a lower-emphasis outlined action followed by a high-emphasis filled action.
- Keep the primary CTA at the far right and make its label action-oriented.
- Adapt labels and item count to the user's product; do not assume the reference site's information architecture.

## Implementation guidance
- Build the header as a reusable component with configurable brand, links, dropdown items, and CTA labels.
- Use semantic `<header>`, `<nav>`, links, buttons, and appropriate ARIA attributes.
- Ensure the mobile menu can be operated entirely by keyboard and screen readers.
- Do not use gradients, excessive shadows, oversized typography, or decorative imagery.

## Never
- Never copy the reference site's logo, product name, navigation labels, CTA copy, or brand assets.
- Never reproduce the exact spacing, proportions, or visual details as a pixel-for-pixel clone.
- Never use illustrations, photography, or imagery from the reference.
- Never assume the user's product, audience, or brand should look like the reference; translate the underlying principles into the user's own design system.
