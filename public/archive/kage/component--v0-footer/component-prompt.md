## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073272-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-footer

# Build a minimal multi-column product footer

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, typography, and navigation structure are. Then apply the principles below to create a footer for my product—not a copy of the reference.

## Design language

- Treat the footer as a quiet closing section with a large amount of intentional whitespace above the navigation. Let the previous page content breathe before the footer links begin.
- Use a very light neutral background, approximately `#fafafa` or `#f9f9f9`, with near-black text around `#171717` and muted link text around `#737373`. Adapt these values to the product brand while preserving the low-contrast, editorial feel.
- Place a compact, high-contrast primary CTA near the horizontal centre of the upper footer area. Use a black or brand-dark pill button with white text, approximately `14–16px` horizontal padding, `10–14px` vertical padding, and a fully rounded radius of `999px`.
- Keep the footer content inside a centered max-width container, approximately `1150–1200px`, with responsive horizontal padding of `24–64px`.
- Below the CTA, create a four- or five-column grid. Reserve the first column for the product mark or a small brand signature, and use the remaining columns for grouped navigation links. Keep the columns aligned to a shared baseline and distribute them evenly across the container.
- Use column headings in a dark, medium-weight sans-serif at approximately `14px` with `1.4` line-height. Use links at approximately `14px`, `1.6` line-height, and a muted grey colour.
- Stack links vertically with roughly `14–18px` between rows. Leave approximately `32–48px` between each column heading and its first link.
- Maintain generous vertical spacing: approximately `320–380px` between the top CTA and the navigation grid on a large desktop viewport, then `90–120px` of bottom padding. This gap may shrink substantially on smaller screens while retaining the same hierarchy.
- Use a clean geometric or neutral sans-serif. Avoid decorative display typography. Keep the visual weight light and let spacing do most of the work.
- Do not add heavy dividers, shadows, cards, gradients, or decorative imagery. The footer should feel almost flat and architectural.
- For external destinations, optionally add a small external-link indicator after the label. Keep it subtle, around `12px`, and align it optically with the text baseline.
- Add accessible hover and focus states: links can darken toward `#171717` and optionally receive a subtle underline; the CTA can shift slightly in brightness. Include visible keyboard focus styling with sufficient contrast.

## Responsive behaviour

- On desktop, preserve the horizontal column layout and the large open space above it.
- At tablet widths, reduce the top gap and container padding while keeping columns readable.
- On mobile, stack the navigation groups into one or two columns, keep the brand signature at the top, and reduce the CTA-to-links gap to approximately `120–180px` or an amount appropriate to the page rhythm.
- Prevent link labels from awkwardly wrapping where possible; allow natural wrapping rather than forcing horizontal overflow.

## Content and implementation

- Use realistic navigation groups relevant to my product, but do not reuse labels from the reference.
- Use semantic `<footer>`, navigation lists, buttons or links, and accessible labels for any icon-only controls.
- Make the component reusable: navigation groups, CTA label, brand signature, and destinations should be easy to replace through props or a configuration object.
- Ensure the footer works with the existing framework, design tokens, and typography of my product.

## Never

- Never copy the reference product's logo, product name, navigation labels, CTA copy, or exact link structure.
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never reproduce the exact brand mark; create a neutral placeholder or use my product's own mark if I provide one.
- Never make the footer visually dense, overly decorative, or dependent on imagery to communicate hierarchy.
