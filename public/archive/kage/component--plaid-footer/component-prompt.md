## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/plaid-com/7f22fbce-e808-4b19-99a1-7dcb31fbfb56-1789060801-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/plaid-com/7f22fbce-e808-4b19-99a1-7dcb31fbfb56-1789060772-full.webp
- Component on Kage: https://kage.design/component/plaid-footer

## Before you start
Ask what the user's product is, who it serves, and what its brand personality, colour palette, and legal requirements are. Then apply the principles below to create an original footer for that product rather than reproducing the reference.

## Design goal
Build a compact, premium footer utility section for the bottom of a modern technology or financial-services website. The footer should feel calm and trustworthy, with a large field of deep navy space and a small set of highly legible social and legal controls anchored to a consistent content column.

## Layout and alignment
- Use a full-width footer with a deep navy background, approximately `#001B33` to `#00223D`.
- Give the footer generous vertical padding; target roughly 128–160px above the utility content and 72–96px below it on desktop. On smaller screens, reduce this to approximately 64–88px top and 40–56px bottom.
- Constrain the inner content to the product's standard max-width, around 900–960px in this example, while allowing the background to span the viewport.
- Place a horizontal row of social controls above the legal row, aligned to the same left edge. Keep the two rows clearly separated, with approximately 24–32px between them.
- On desktop, keep the legal items in one flexible row: copyright, locale selector, and privacy control. Use a 28–40px gap between groups. On narrow screens, allow the row to wrap or stack while preserving the same left alignment and comfortable touch targets.
- Do not add a large navigation sitemap or marketing call to action; this component is intentionally a quiet closing utility area.

## Typography hierarchy
- Use a clean, modern sans-serif consistent with the rest of the product. Use a medium or semibold weight for interactive labels and regular weight for copyright text.
- Social controls are icon-led and should not require visible text, but provide accessible aria-labels and tooltips where appropriate.
- Legal and locale text should be small but readable: approximately 15–16px on desktop, with a line height around 1.4–1.5.
- Use sentence case for utility labels. Keep the hierarchy subtle rather than introducing a large footer heading.

## Colour and contrast
- Use off-white text and icons, approximately `#F4F7F9` or `#EAF1F5`, rather than pure white.
- Use a slightly dimmer colour, approximately `#C8D4DD`, for copyright and secondary legal text.
- Ensure all text, icons, focus states, and controls meet WCAG contrast requirements against the navy background.
- If the product has a privacy preference indicator, represent it with a small high-contrast status/control badge using the product's own accessible accent colour; do not rely on colour alone to communicate its meaning.

## Icons and controls
- Use simple monochrome social icons inside or as standalone controls with a visual size around 30–34px. Preserve the recognizable geometry of each platform icon, but source them from an icon library or the product's own system rather than tracing the reference.
- Separate social controls by approximately 16–20px and give each an invisible or subtle hover background with a 6–8px radius.
- Represent the locale selector as a small location or globe icon followed by the current region and a downward chevron. Make the entire group an accessible button or link.
- Represent privacy choices as a text link or button followed by a compact preference/status control. Make its purpose clear to screen readers.
- Use at least 44px by 44px hit areas for all interactive controls, even if the visible icon is smaller.
- Add a restrained transition of 150–200ms for colour, opacity, and background changes. On hover, brighten or slightly tint controls; on keyboard focus, show a clearly visible 2px outline in an accessible accent colour.

## Borders, radius, and spacing
- Avoid heavy dividers. If a divider is needed, use a 1px line in a low-opacity blue-white tone such as `rgba(234,241,245,0.16)`.
- Use modest corner radii, approximately 6–8px, for hover surfaces, locale menus, and privacy controls. The footer itself should remain a flat rectangular field.
- Maintain an 8px spacing base unit and keep icon-to-label gaps around 8–10px.
- Align every row to the same content edge; the precision of this alignment is more important than decorative detail.

## Responsive and accessibility behaviour
- At widths below roughly 640px, wrap the legal row into two or three rows with consistent 16–24px vertical gaps. Keep controls left-aligned unless the product's mobile system specifies otherwise.
- Prevent locale and privacy labels from becoming clipped; allow natural wrapping or use shorter product-specific labels.
- Use semantic `footer`, `nav` where appropriate, buttons for menus, and links for destinations. Include visible focus styles, descriptive labels, and a logical tab order.
- Respect reduced-motion preferences by removing nonessential transitions.

## Never
- Never copy the reference's logos, social marks as branded artwork, product name, copyright text, locale text, privacy wording, or exact copy.
- Never use the reference page's imagery, illustrations, decorative assets, or brand-specific symbols.
- Never reproduce the exact dimensions, spacing values, icon arrangement, or visual treatment as a pixel-for-pixel clone.
- Never hide legal or privacy controls behind ambiguous icons, low-contrast text, or inaccessible hover-only interactions.
- Never add unrelated promotional content that changes this from a compact footer utility section into a full sitemap footer.
