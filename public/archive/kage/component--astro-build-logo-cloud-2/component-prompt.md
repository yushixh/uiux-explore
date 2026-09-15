## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073853-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/astro-build/2448cc02-1e48-497c-9333-8941f9d81557-1789073818-full.webp
- Component on Kage: https://kage.design/component/astro-build-logo-cloud-2

# Before you start
Ask me what my product does, who it is for, and what its visual brand is. Then apply the principles below to create a partner, customer, integration, or community logo section that fits my product—not a copy of the reference.

## Design goal
Build a dark, premium logo-cloud section that introduces a trusted network or group of organizations and makes browsing or exploring them feel worthwhile. The section should feel editorial and atmospheric rather than like a generic logo strip: a clear text introduction sits above a small set of polished logo cards with varied visual treatments.

## Layout and alignment
- Use a full-width section with a very dark navy-black background, approximately `#080914` to `#0B0C19`.
- Constrain the content to a centered max-width of roughly 1180–1240px, with generous horizontal padding of 32px on desktop and 20–24px on mobile.
- Align the text block and logo grid to the same left and right edges.
- Place a small coloured eyebrow above the heading, followed by a large heading, supporting paragraph, and one compact CTA.
- Keep the text block relatively narrow—around 560–650px—so the heading and paragraph remain easy to scan.
- Leave substantial vertical breathing room between this section and adjacent sections: approximately 96–140px on desktop and 64–88px on mobile.
- Position the logo cards in a single horizontal row on wide screens, using four cards of equal width with 8–10px gaps. On smaller screens, allow horizontal scrolling or switch to a two-column grid; never compress the cards until the marks become illegible.
- Use card heights around 120–125px on desktop, with a balanced internal alignment that lets each supplied logo or wordmark sit naturally in the card.

## Typography hierarchy
- Use a clean, modern sans-serif with a slightly geometric feel. Use a system fallback if the product has no brand font.
- Eyebrow: 15–16px, medium or semibold, coloured accent text, with tight line-height.
- Heading: approximately 32–38px desktop, 28–32px mobile, weight 650–750, line-height around 1.08–1.15. Make it the dominant element in the section.
- Body copy: 16–17px, regular weight, line-height 1.45–1.6, in a muted cool grey such as `#A8A9B8`.
- CTA label: 15–16px, medium weight, with comfortable horizontal padding.
- Keep text lengths short and let the user's product provide the actual wording.

## Colour and atmosphere
- Use a near-black blue base such as `#080914`.
- Add a very subtle blurred atmospheric glow behind or beneath the card row, blending deep magenta-purple `#3B123D` with muted indigo `#171A55`; keep opacity low so it supports the cards without reducing contrast.
- Use a warm pink, coral, or brand accent for the eyebrow; an approximate reference value is `#C84C6B`, but derive the final accent from the user's brand.
- Keep primary text near-white, approximately `#F5F5F7`, and secondary text cool grey, approximately `#A7A8B7`.
- Ensure every card has enough contrast against the background, even when using colourful artwork.

## Cards and borders
- Build a row of four rounded rectangular cards with a radius around 8–10px.
- Keep the card dimensions consistent even when the contents vary.
- Use thin, low-contrast borders around cards, approximately `1px solid rgba(255,255,255,0.18)`; increase contrast slightly on hover.
- Let each card have its own restrained background treatment: off-white, saturated colour, subtle gradient, dark charcoal, or a soft abstract pattern. These variations should feel like a curated set, not random decoration.
- Centre the logo or wordmark both vertically and horizontally, while allowing its natural aspect ratio to determine its width. Avoid forcing every mark into identical proportions.
- Use internal padding of approximately 24–32px and preserve clear space around all marks.
- Do not recreate real brand marks unless the user provides assets or permission; use neutral placeholders or supplied partner assets.

## Interaction
- If cards represent links, make each whole card clickable with a clear accessible label.
- Add a restrained hover state: a 2–4px upward translate, a slightly brighter border, and a soft shadow or glow. Keep transitions around 180–240ms with an ease-out curve.
- Add visible keyboard focus using a 2px accent outline with a small offset.
- Ensure the CTA has a subtle filled or outlined pill treatment, with a brighter border/background on hover.
- On touch devices, avoid hover-only information and preserve comfortable hit areas of at least 44px.
- Respect `prefers-reduced-motion` by disabling transforms and ambient animation.

## Responsive behaviour and accessibility
- Stack the introduction naturally above the cards on mobile.
- Reduce heading size and section spacing at narrow widths while keeping generous padding.
- If using horizontal scrolling, hide decorative scrollbar styling only if keyboard and touch scrolling remain obvious and accessible; provide semantic links and labels.
- Use semantic section, heading, paragraph, list, and link elements. Maintain logical heading order and WCAG AA contrast for all readable text.

## Never
- Never use Astro, astro.build, or any other product name from the reference.
- Never copy the reference's wording, logo marks, partner names, brand assets, or exact card artwork.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never make the section a pixel-for-pixel recreation; adapt the structure and principles to the user's product and brand.
- Never use decorative glow, gradients, or card variation at the expense of readability or accessibility.
