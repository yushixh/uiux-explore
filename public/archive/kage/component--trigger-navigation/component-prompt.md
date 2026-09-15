## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073774-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-navigation

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and primary conversion goal are. Apply the principles below to that product rather than reproducing the reference literally.

## Build a compact dark SaaS navigation header
Create a full-width website header for a developer-focused or technical product. Keep it visually quiet and highly scannable: the navigation should support the page content, while one bright action provides a clear path forward.

### Design language

- **Layout and alignment:** Use a single horizontal row, approximately 64px tall, with a maximum content width around 1280px and centered horizontal margins. Align all elements to the vertical center. Put the brand at the far left, followed by the primary navigation with generous gaps. Push secondary utility items—community links, a lightweight social-proof metric, sign-in, and the main CTA—to the right. On narrow screens, hide or collapse the navigation and utility links behind a menu while keeping the brand and CTA or menu control visible.
- **Typography hierarchy:** Use a clean modern sans-serif. The brand should be compact and slightly heavier than surrounding text. Navigation and utility labels should be 14px with medium weight and relaxed readability. The CTA can use 14px semibold text. Avoid oversized type; this is an application-like navigation system, not a hero heading.
- **Colour:** Use a very dark charcoal background around `#111216`, with a subtly darker or lighter lower border around `#202228`. Primary navigation text should be a soft grey around `#C5C7CC`; inactive utility icons can use `#D8D9DD`. Hover states should move toward white, approximately `#F5F6F7`. Use the product's own accent for the brand and CTA; as a starting point, use a vivid lime green near `#9CFF3B`, with dark text around `#162016` for contrast. If the product has a secondary brand colour, it may be used sparingly in the brand mark or wordmark treatment.
- **Borders and radius:** Add a 1px bottom border with low contrast. Keep the header surface flat rather than card-like. Use a small 5–7px radius on the primary CTA; avoid excessive pill styling. Use subtle focus rings in the brand accent for keyboard users.
- **CTA treatment:** Make the rightmost primary action a compact filled button, approximately 116px by 32px, with clear horizontal padding. Include a small directional cue such as an arrow only if it fits the product's interaction language. On hover, slightly raise brightness or translate the cue a few pixels; do not add a dramatic shadow.
- **Icons and utility items:** Use simple monochrome icons for external community destinations, sized around 16–18px. Keep icon buttons accessible with visible focus states and descriptive labels or `aria-label` values. A small usage, popularity, or social-proof figure can sit beside an icon, but it must remain secondary to the CTA.
- **Interaction:** Make each navigation item a real link. Use a restrained colour transition on hover and an accessible focus outline. If there is an active page, indicate it with a slightly brighter label or a subtle accent underline rather than a heavy tab treatment. Ensure sufficient contrast and provide a mobile menu with keyboard support, escape-to-close behaviour, and an appropriate `aria-expanded` state.
- **Spacing:** Use approximately 24–32px between the brand and the first link, 28–36px between primary links, and 18–24px between utility items. Give the header 16–24px horizontal padding on small screens and 32px or more on large screens.

### Content guidance
Use realistic navigation categories for the user's product, such as product capabilities, resources, documentation, pricing, or company information. Keep labels short—typically one or two words—and reserve the strongest wording for the primary CTA. Do not overload the bar with dropdowns or too many links.

### Never
- Never copy the reference's logo, wordmark, product name, or exact navigation labels.
- Never reuse the reference's marketing copy, metric, icon arrangement, or CTA wording.
- Never include the reference's illustrations, imagery, screenshots, or decorative assets.
- Never treat the design as a pixel-perfect clone; adapt the accent colour, links, spacing, and hierarchy to the user's product and brand.
- Never sacrifice keyboard navigation, responsive behaviour, or text contrast for visual similarity.
