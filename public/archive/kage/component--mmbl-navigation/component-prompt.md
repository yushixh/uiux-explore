## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060566-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060540-full.webp
- Component on Kage: https://kage.design/component/mmbl-navigation

## Before you start
Ask the user what their product is, who it is for, and what their brand identity should feel like. Then apply the principles below to create a navigation header tailored to that product—not a literal copy of this reference.

## Build this component
Create a responsive website header/navigation bar with three clearly separated zones: a brand area on the left, a small primary navigation group near the horizontal center, and one prominent app/download/action button on the right. The component should feel minimal, premium, and spacious, with the navigation acting as a quiet frame around the primary CTA.

## Design language

### Layout and alignment
- Use a full-width header with a deep near-black navy background, approximately `#10101C`.
- Set a centered content container with a maximum width around `1170–1220px`; on wide screens, keep the left and right edges visually balanced.
- Use a horizontal flex layout with three zones: brand aligned left, navigation centered or positioned around the middle, and CTA aligned right.
- Give the header approximately `32–36px` of vertical padding on desktop, producing a total height near `110–125px` depending on the product’s typography.
- Keep the brand and CTA anchored to the container edges while allowing the link group to remain visually centered; use a grid or absolute-center strategy if needed so unequal side content does not shift the links.
- On smaller screens, reduce horizontal padding, collapse or hide secondary links behind a menu control, and preserve a clearly visible primary action where space permits.

### Typography hierarchy
- Use a clean modern sans-serif with slightly generous letter spacing and strong legibility at small sizes.
- Navigation links should be compact, approximately `14px`, medium weight, with muted light-gray text around `#B8B7C3`.
- The CTA label should be approximately `14–15px`, semibold, in a darker near-black color around `#20202B`.
- The brand wordmark, if the user has one, should be visually stronger than the links, approximately `28–32px` and bold; treat it as a text-and-mark system rather than oversized header copy.

### Colour and contrast
- Use a very dark indigo-black surface around `#10101C` or adapt the value to the user’s brand.
- Keep inactive links subdued but readable; increase them toward `#F2F1F7` on hover or focus.
- Make the primary CTA a pale lavender-white surface around `#F0EFF8`, with a high-contrast dark label.
- If the product has a multicolour brand mark, use a small, controlled accent palette; keep the rest of the header monochrome so the CTA remains the main visual anchor.

### Borders, radius, and depth
- The header can be borderless; avoid heavy separators and visible shadows.
- Give the CTA a soft rounded rectangle, approximately `10–12px` radius, with comfortable horizontal padding around `18–22px` and vertical padding around `11–13px`.
- Use a subtle hover transition: slightly brighten the CTA, lift it by `1px`, or add a restrained shadow such as `0 4px 14px rgba(0,0,0,.14)`.
- Preserve a compact logo-to-wordmark gap and avoid enclosing the brand in a pill or card.

### Interaction and accessibility
- Make every navigation item a real link with a generous hit area, ideally at least `40px` high.
- Add clear hover, keyboard-focus, and active-page states without changing the overall minimal aesthetic. A thin underline, brighter text, or small accent indicator is sufficient.
- The CTA should include an appropriate platform/download icon only if relevant to the user’s product; keep the icon optically aligned with the label and never let it overpower the text.
- Ensure the header works with keyboard navigation, visible `:focus-visible` styling, sufficient colour contrast, semantic landmarks, and a mobile menu with an accessible name if links are collapsed.
- On mobile, use a smooth but restrained menu transition and prevent the navigation from overflowing horizontally.

## Never
- Never reuse the reference’s logo, wordmark, product name, navigation copy, or app-store artwork.
- Never copy the exact spacing, proportions, colours, or brand mark; adapt the system to the user’s product and identity.
- Never add unrelated illustrations, photography, gradients, or decorative imagery.
- Never use placeholder links that look interactive but do nothing.
- Never sacrifice readable contrast, focus states, or responsive behaviour for visual similarity.
