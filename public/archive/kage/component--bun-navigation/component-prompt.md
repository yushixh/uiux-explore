## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073821-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-navigation

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original version for that product rather than reproducing a reference site.

## Build this section
Create a responsive top-of-page navigation system for a developer-oriented product. It should include:

1. A slim announcement bar above the main navigation, spanning the full viewport. Use a near-black background such as `#0b0b0b`, centered light text around `#f4f4f4`, and a compact inline arrow or affordance indicating that the message is clickable. Keep the announcement height visually restrained, roughly 36–40px on desktop.
2. A primary navigation row beneath it on a white or near-white surface, approximately 64px tall on desktop. Keep the content in a centered container with generous horizontal padding and a subtle bottom or surrounding divider in a pale neutral such as `#e5e5e5`.
3. A left-aligned product identity area with a small, simple brand mark placeholder and a bold wordmark treatment. Use the user's own identity; the reference's specific character, logo, and name must not be reused.
4. A horizontal set of documentation-oriented links next to the identity. Links should use a neutral dark gray such as `#4a4a4a`, medium-sized sans-serif text around 14–16px, and modest gaps. On hover, transition toward the brand accent or near-black while preserving clear contrast.
5. A wide documentation/search field in the middle or flexible center region. Give it a thin `#d9d9d9` border, a white background, a small search icon, muted placeholder text around `#777777`, and an optional keyboard-shortcut hint aligned at the far right. Use a radius of approximately 0–3px for a crisp technical feel, unless the user's brand calls for softer geometry.
6. A right-side utility cluster with one or two understated icon buttons and a strong primary action such as “Install” or the product's equivalent. Icon buttons should have generous hit areas, visible hover/focus states, and accessible labels. The primary action should use a near-black fill, white text, compact horizontal padding, and a small radius around 0–3px.

## Design language
- **Layout and alignment:** Use one horizontal grid and align the announcement content, brand, links, search, utilities, and CTA to the same centered container. Let the search field flex while navigation and action groups remain content-sized. Prevent the header from wrapping awkwardly; collapse links into a menu or secondary drawer on narrow screens.
- **Typography:** Use a clean UI sans-serif for navigation and controls. Use a heavier weight for the brand and CTA, regular weight for links, and compact 12–13px text for the announcement. If showing a release/status cue elsewhere in the page, a restrained monospace style with increased letter spacing can reinforce the developer-tool character.
- **Spacing:** Use a consistent 4px or 8px rhythm. Aim for 20–28px horizontal gaps between major groups, 12–16px internal control padding, and enough vertical padding for comfortable pointer and keyboard use. Keep the announcement copy visually compact.
- **Colour:** Base surfaces should be white or `#fafafa`; primary text approximately `#111111`; secondary text `#5f5f5f`; borders `#dedede` to `#eeeeee`; announcement and primary CTA approximately `#0b0b0b`. Introduce a restrained brand accent only for active, hover, or focus states, ensuring WCAG-compliant contrast.
- **Borders and radius:** Prefer 1px neutral borders and sharp or barely rounded corners, approximately 0–4px, for a precise documentation-tool aesthetic. Use a visible 2px focus ring in the user's accent colour or a high-contrast fallback.
- **Interaction:** Announcement and navigation items should expose hover, focus-visible, and pressed states. Search should support keyboard focus and a shortcut hint without competing with the CTA. The mobile version should retain the announcement and primary action while moving secondary links and utilities into an accessible menu. Respect reduced-motion preferences and avoid decorative animation.

## Never
- Never reuse the reference site's logo, mascot, wordmark, product name, announcement copy, navigation labels, or exact iconography.
- Never copy the reference site's exact spacing, proportions, typography pairing, or visual assets; use the rules as a starting system for the user's product.
- Never include the reference's product-specific release message, search placeholder, CTA wording, or brand accent as literal copy.
- Never add logos, product names, copy, illustrations, or imagery from the reference.
