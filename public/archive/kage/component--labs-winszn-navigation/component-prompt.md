## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097619-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/labs-winszn-xyz/4df5b54d-904b-4cf9-bf65-93181d626a5e-1789097588315-full.webp
- Component on Kage: https://kage.design/component/labs-winszn-navigation

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original navigation component for that product—not a copy of the reference.

## Build a minimal studio-style navigation header
Create a full-width desktop navigation bar with a calm, premium, editorial feel. The component should be useful for a creative studio, consultancy, software product, or similarly focused website, while remaining adaptable to the user's brand.

### Layout and alignment
- Use a shallow horizontal header, approximately 88–112px tall on desktop, with a centered inner container capped around 1180–1320px.
- Align the brand lockup on the far left, primary navigation links in a compact group around the horizontal center, and the main CTA on the far right.
- Use flexbox with `align-items: center`; keep the three zones visually balanced rather than allowing the navigation to drift based on text width.
- Preserve generous horizontal padding, approximately 32–64px depending on viewport width.
- On smaller screens, retain the brand on the left and replace the link group with a compact menu control; keep the CTA visible only if it remains comfortable, otherwise place it inside the menu.
- Add a very subtle lower-edge or corner geometry detail only if it supports the user's visual language. It must remain secondary to the navigation.

### Typography hierarchy
- Use a clean grotesk or contemporary sans-serif with strong legibility.
- Brand text should be compact, semibold, and approximately 14–16px.
- Navigation labels should be uppercase or otherwise tightly controlled, around 10–12px, with modest letter spacing of roughly `0.14em–0.2em` and a medium weight.
- The CTA label should be concise, uppercase or title case according to the user's brand, around 10–12px, semibold, with slightly increased tracking.
- Keep line heights tight and avoid oversized display type inside the header.

### Colour
- Start with a warm off-white page/header background near `#F3F1EB` or `#F6F4EF`.
- Use near-black charcoal for text, around `#171717` or `#202020`.
- Use a saturated warm accent for the CTA, such as orange-red near `#E94708` or `#EF4B08`, with light text near `#171717` or `#FFF8EE` depending on contrast.
- Confirm accessible contrast for all text and interactive states, then adapt these colours to the user's brand palette.

### Borders, shape, and spacing
- Keep the header mostly borderless; if separation is needed, use a 1px line with a low-contrast neutral such as `#DDD9D0`.
- Use a pill-shaped CTA with a radius around `999px`, generous horizontal padding of 20–28px, and vertical padding of 13–16px.
- Keep the brand mark small and geometric if one is needed, approximately 18–22px square, but create an original mark or use the user's actual brand asset.
- Use 24–40px gaps between navigation links and at least 28–40px between the link group and CTA.
- Avoid excessive shadows; the visual character should come from spacing, contrast, and precise alignment.

### Interaction
- Make every navigation label a real link with a clear hover and focus state.
- On hover, use a restrained colour shift, underline, or 1–2px upward motion; do not use distracting animations.
- The CTA may darken or shift slightly on hover, with a transition around 160–220ms and a clear keyboard focus ring.
- Ensure the header remains usable at zoom and on touch devices, with tap targets of at least 44px.
- If the page uses anchor navigation, support smooth scrolling only when it does not interfere with reduced-motion preferences.

### Responsive behaviour
- At tablet widths, reduce gaps before reducing type size.
- At mobile widths, use a menu button with an accessible label, visible focus state, and an open/closed state that is easy to understand.
- Do not let long product names or translated navigation labels break the alignment; define sensible truncation or wrapping rules.

## Never
- Never copy the reference site's logos, brand mark, product name, navigation labels, or CTA wording.
- Never reuse the reference's exact copy, colour values, spacing measurements, or decorative geometry as a fixed template.
- Never include illustrations, photography, or imagery from the reference.
- Never make the header visually loud enough to compete with the page's primary content.
- Never omit keyboard navigation, visible focus states, responsive behaviour, or accessible contrast.
