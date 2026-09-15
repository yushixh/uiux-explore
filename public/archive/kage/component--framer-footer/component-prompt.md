## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060393-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Component on Kage: https://kage.design/component/framer-footer

# Build a dark, structured product footer

## Before you start
Ask me what my product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create a footer for my product—not a copy of the reference. Use my product’s content, naming, tone, and brand colours while preserving the underlying information architecture and interaction logic.

## Goal
Design a full-width footer for a modern software or digital product website. It should feel like a calm, premium ending to the page: first a focused final call to action, then a comprehensive sitemap, then a compact utility/status bar.

## Structure and layout
- Use a near-black page background, approximately `#000000` or a brand-appropriate equivalent.
- Keep the footer content within a centered max-width of roughly 1160–1240px, with generous horizontal padding: about 40px on desktop and 20–24px on mobile.
- Divide the footer into three clear vertical zones:
  1. **Conversion zone:** a centered headline, optional prompt/input surface, suggested actions, and a low-emphasis alternative link.
  2. **Navigation zone:** a wide multi-column sitemap with a brand/identity block at the far left and grouped link lists across the remaining width.
  3. **Utility zone:** a thin top border followed by social links, trust/compliance indicators, service availability, usage/account information, and copyright.
- Give the conversion zone substantial breathing room. It should feel visually separate from the sitemap, with roughly 150–220px of vertical space above and below depending on viewport height.
- On desktop, use a 6–7 column grid. Keep the first column reserved for the product identity and let the other columns contain grouped navigation. Allow one or two columns to contain multiple titled groups stacked vertically.
- Align all link groups to a consistent column baseline. Avoid centering the sitemap; use left alignment for scanability.
- On mobile, collapse the sitemap into either an accordion or a single-column stack. Preserve group titles and make the tap targets at least 44px high.

## Conversion zone
- Use a large, concise heading around 48–56px on desktop, with tight line-height around 1.05–1.1. On smaller screens, scale to 32–40px and allow a natural two-line wrap.
- Place a wide, dark-gray interaction surface beneath the heading, such as a prompt composer, email field, signup field, or short CTA panel. It should be approximately 580–620px wide on desktop and fluid on mobile.
- Style the surface with a fill around `#191919`–`#202020`, a subtle 1px border around `#2b2b2b`, and a 12–16px radius. Give it generous internal padding and a clear action control, but do not make it visually louder than the heading.
- If using a composer or form, include a muted placeholder, a compact secondary control row, and a small icon button with a contrasting fill. Make keyboard focus states visible.
- Add a row of optional suggested actions below the surface using compact pill buttons. Use `#181818` fills, `#2b2b2b` borders, 8–10px radius, and muted text. On narrow screens, allow horizontal scrolling or wrapping.
- Include a centered low-emphasis text link below the suggestions for visitors who want an alternative path. Use an understated arrow or directional cue and a clear hover state.

## Typography
- Prefer a clean modern sans-serif with excellent UI legibility. Use the product’s typeface if available; otherwise use a system or contemporary grotesk stack.
- Use near-white for primary text, approximately `#f5f5f5` or `#ffffff`.
- Use muted gray for links and supporting text, approximately `#999999`–`#ababab`.
- Use brighter text on hover, approximately `#ffffff`.
- Navigation group headings should be 14–16px, medium weight, with a little more contrast than their links.
- Navigation links should be 14–15px with approximately 1.7–1.9 line-height and 8–12px vertical separation.
- Keep small metadata, legal text, status labels, and trust marks around 11–13px.
- Use small uppercase or compact badge treatments sparingly for labels such as “new”; make them legible and accessible.

## Navigation content behaviour
- Create meaningful groups relevant to my product, such as Product, Resources, Company, Solutions, Compare, Community, or Tools, but rename and reorganize them based on my actual information architecture.
- Keep labels short and scannable. Avoid long descriptions inside the sitemap.
- Visually distinguish subsection headings when a column contains multiple groups using extra top margin and consistent heading styling.
- Add subtle hover transitions: link colour should brighten and may shift 1–2px horizontally, but avoid distracting motion.
- Use semantic `<nav>`, lists, headings, and real links. Ensure focus rings are clearly visible against the dark background.

## Utility bar
- Separate this row with a 1px rule around `#242424`.
- Use a responsive flex layout with four logical clusters: social links, trust/security badges, service status, and product/account metadata.
- Add a small green status dot around `#45d778` only if the product genuinely exposes live service status; otherwise use a neutral status treatment.
- Use monochrome or low-contrast social icons and trust marks. Provide accessible labels and tooltips where icons are used.
- On mobile, allow the utility clusters to wrap into multiple rows while retaining comfortable spacing and readable alignment.
- Keep the footer’s bottom padding generous, around 28–40px desktop and 24px mobile.

## Responsive and accessibility requirements
- Make the footer fully responsive from large desktop to narrow mobile without horizontal page overflow.
- Ensure all interactive elements have visible hover, focus-visible, active, and disabled states where relevant.
- Maintain WCAG-conscious contrast for primary links and controls; muted text must still be readable.
- Respect reduced-motion preferences and keep transitions short and subtle.
- Use real form labels or accessible placeholders, descriptive link text, and appropriate landmark semantics.

## Never
- Never copy the reference’s logos, product names, brand marks, icons, exact navigation labels, CTA copy, or legal text.
- Never reuse the reference’s illustrations, screenshots, imagery, social avatars, or decorative assets.
- Never reproduce the exact sitemap or claim the same certifications, service status, usage metrics, or copyright information.
- Never make the footer a pixel-for-pixel imitation; adapt the hierarchy and design principles to my product and brand.
- Never use inaccessible low-contrast text, tiny tap targets, unexplained icon-only controls, or non-semantic navigation markup.
