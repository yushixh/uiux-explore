## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106570-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106538010-full.webp
- Component on Kage: https://kage.design/component/desert-ant-labs-footer

## Before you start
Ask the user what their product does, who it is for, and what visual brand direction they want. Then apply the principles below to that product rather than reproducing the reference footer.

## Build a calm, editorial navigation footer
Create a full-width website footer for the user's product. It should feel structured, understated, and information-rich without looking like an enterprise sitemap. Use the footer to expose the most important destinations, group related links, and provide a concise utility row at the bottom.

### Layout and alignment
- Use a warm, nearly white background such as `#F8F8F1` or a colour derived from the user's brand.
- Keep the footer content inside a centered container with generous horizontal padding: approximately 64px on desktop and 24px on mobile.
- Start with a compact brand row at the top: a small abstract symbol or neutral product mark at left, followed by the product name. Align everything to the same left edge as the navigation grid.
- Place the navigation below the brand row with a responsive multi-column grid. On desktop, use 5–6 columns with equal or intentionally weighted widths; on smaller screens, collapse to two columns or a single vertical stack while preserving clear grouping.
- Use groups such as Company, Platforms, Follow, and product capability categories, but rename and tailor them to the user's information architecture.
- Keep all link columns top-aligned. Let columns have natural heights rather than forcing rows to line up.
- Add a thin horizontal divider across the container below the navigation, with generous space above and below it.
- Finish with a utility row containing a small legal/product usage statement on the left and a language selector or comparable utility control on the right. On mobile, stack these items and allow the text to wrap naturally.

### Typography hierarchy
- Use a clean sans-serif for product name and links, with a medium or semibold weight for the brand and approximately 15–16px link text.
- Style group labels as small uppercase mono or technical sans text, around 11–12px, with generous letter spacing of roughly `0.12em`; use a muted charcoal rather than pure black.
- Use compact but comfortable link leading, around 1.8–2.1, so long columns remain scannable.
- Render the bottom utility statement in a small monospaced or highly legible technical style around 12–13px, with slightly increased tracking.
- Keep the visual hierarchy restrained: labels should be quieter than links, and the brand should be the strongest element without becoming a hero headline.

### Spacing
- Use roughly 36–44px between the brand row and the navigation grid.
- Use 24–32px between each group label and its first link.
- Use 10–14px vertical spacing between links, depending on the type scale.
- Give the footer generous outer vertical padding, approximately 56–72px above the brand row and 32–48px below the utility row.
- Avoid dense cards, excessive indentation, or decorative separators between individual links.

### Colour, borders, and shape
- Prefer a soft warm background such as `#F8F8F1`, dark text around `#171817`, secondary text around `#5E605A`, and divider lines around `#DFE0D8`.
- Keep borders extremely subtle: one-pixel rules are sufficient.
- Use a small rounded square or circular container for the brand mark, approximately 20–24px, with a low-contrast neutral fill such as `#E8E9E1`.
- Use little or no rounding elsewhere; this is an editorial footer rather than a card-based interface.
- If the user's brand is colourful, introduce colour sparingly through the mark or link hover state while retaining the quiet background and readable contrast.

### Interaction
- Every link should have a clear hover and keyboard-focus state. A simple colour shift, underline, or slight opacity change is enough; do not use large animations.
- Make the language selector or utility control visibly interactive with a small globe/icon treatment and a chevron, while keeping it visually secondary.
- Ensure focus indicators are accessible and not removed. Preserve logical tab order from brand to navigation columns to bottom utilities.
- Support long product names, translated labels, and links with status badges such as “beta” without breaking alignment.
- Include responsive behaviour that remains usable at narrow widths: columns should reflow, links should not overflow, and the divider should remain full width within the container.

### Content guidance
- Use realistic, product-specific navigation groups supplied by the user.
- If some links are experimental or unavailable, mark them with a small muted status badge rather than adding visual noise.
- Keep the bottom statement short and useful, such as a plan limit, copyright notice, availability note, or service promise.

### Never
- Never copy the reference site's logos, product name, navigation labels, footer copy, or exact content.
- Never reuse its illustrations, imagery, icons, or distinctive brand mark; create neutral placeholders or brand-appropriate alternatives.
- Never reproduce the reference's exact typography, spacing measurements, colours, or column contents as a pixel-for-pixel clone.
- Never turn the footer into a dense sitemap, a collection of cards, or a visually dominant promotional section.
- Never hide important links behind inaccessible hover-only behaviour or remove keyboard focus styles.
