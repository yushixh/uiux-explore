## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060952-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-code-block

## Before you start
Ask the user what their product does, who uses it, and what brand personality, colours, and frontend stack they want. Then apply the principles below to create an original API or developer-feature showcase for that product—not a copy of the reference.

## Build this section
Create a spacious, editorial developer-products section that introduces a family of APIs, SDKs, models, or technical capabilities. Use a large two-column grid: the left column explains each capability, while the right column contains an interactive code example for selected rows. The section should feel calm, premium, and highly legible rather than like a dense documentation page.

### Layout and alignment
- Use a centered content container around 1120–1280px wide with generous horizontal margins.
- Begin with a compact eyebrow label, followed by a large two-line headline and a right-aligned outline CTA. Keep the heading and CTA aligned on the same horizontal band at desktop widths.
- Below the introduction, create stacked feature rows divided by 1px horizontal rules and a subtle vertical rule between columns.
- Give the descriptive column roughly 48–52% of the row width and the code/example column the remainder.
- Align all row content to a consistent left edge and use generous vertical padding, approximately 44–72px per row.
- On smaller screens, collapse each row into one column: place the description first and the code panel below it, remove or soften the vertical divider, and keep comfortable side padding.
- Allow one row to contain a non-code visual or product diagram if it serves the product, but preserve the same grid rhythm.

### Typography hierarchy
- Use a modern neutral sans-serif with a slightly human, editorial feel.
- Eyebrow: 14–16px, medium weight, muted gray.
- Section headline: approximately 36–48px desktop, 30–36px mobile, regular or medium weight, tight line-height around 1.05–1.15.
- Capability title: 17–20px, medium weight, near-black.
- Description: 16–18px, regular weight, muted gray, line-height around 1.45–1.6; constrain its measure for easy scanning.
- Supporting model or feature labels: 15–16px with short muted descriptions beneath; use a two-column subgrid where useful.
- Code: 12–14px monospace with generous line-height and clear syntax colour contrast.

### Colour and surfaces
- Use a warm or neutral near-white page background, approximately #FCFCFB or adapt it to the user's brand.
- Primary text should be near-black, approximately #151515.
- Secondary text should be a soft gray, approximately #747474.
- Rules should be extremely subtle, approximately #E8E8E5.
- Code surfaces should be white or a barely tinted neutral such as #FEFEFD, with syntax colours kept restrained: muted red for keywords, blue-gray for strings or values, and dark gray for identifiers.
- Use brand colour sparingly for links, active states, or small accents rather than filling the entire section.

### Borders, radius, and depth
- Keep the overall grid mostly flat and editorial, using thin dividers instead of cards wherever possible.
- Place code examples inside rounded panels with a subtle 1px border around #E5E5E2, approximately 16–22px radius, and a very soft shadow such as 0 1px 3px rgba(0,0,0,.04).
- Keep CTA buttons as compact pill or softly rounded outline buttons, approximately 999px radius, with a 1px neutral border.
- Avoid excessive nested cards, gradients, or strong shadows.

### Code panel interaction
- Add a copy icon button in the upper-right corner of every code panel. Give it an accessible label such as “Copy code.”
- On hover and focus, gently increase contrast or show a small “Copied” confirmation without shifting layout.
- Use real syntax highlighting and horizontal scrolling for long lines; never make code unreadably small.
- If multiple APIs or languages are relevant, provide compact tabs or segmented controls above the code, with a clear active state and keyboard accessibility.
- Make the CTA and code controls visibly keyboard-focusable and screen-reader friendly.

### Content behavior
- Replace all example text with the user's own product terminology, capabilities, and safe placeholder code.
- Show only enough code to communicate the integration pattern: imports, client initialization, one representative call, and a useful result or option.
- Keep descriptions benefit-led and concise, with optional secondary items for model variants, limits, or supported modes.

## Never
- Never use logos, product names, copy, code, illustrations, imagery, or brand-specific wording from the reference.
- Never reproduce the reference's exact layout, text, API names, endpoint names, or syntax examples.
- Never use a proprietary logo as a decorative substitute for clear product information.
- Never sacrifice responsive behavior, semantic HTML, accessible contrast, or keyboard interaction for visual similarity.
