## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060390-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-feature-grid-2

## Before you start
Ask me what my product does, who it is for, and what its brand language should be. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Design goal
Build a feature section that explains a product’s openness, flexibility, or layered architecture as a stack of four horizontal feature rows. The visual should feel like a technical diagram presented inside an editorial landing page: precise, calm, modular, and slightly futuristic. Use the rows to move from broad compatibility at the top toward the strongest product promise at the bottom.

## Layout and alignment
- Use a very light warm-white page background, approximately `#FCFCFB`, with a subtle engineering-paper grid: faint vertical and horizontal lines every 180–220px plus sparse, tiny dots. Keep the pattern low contrast and purely decorative.
- Constrain the section to a centered max width of approximately 1130–1200px.
- Begin with a small monospace eyebrow such as a category label, followed by a large left-aligned headline. Keep the headline to one or two lines and give it a confident, technical editorial tone.
- Place the feature stack inside a bordered console-like frame. Use a thin top utility bar with a tiny square control on the left, a centered bracketed caption, and a small circular control on the right. These controls are decorative unless the product needs meaningful interaction.
- Create four horizontal rows, vertically stacked with small gaps. Center each row within the frame, but make the widths progressively larger from row one to row four, producing a stepped or expanding silhouette. Suggested widths: 72%, 84%, 92%, and 98% of the inner frame width.
- Each row should be a single responsive flex layout with four logical zones: layer index, feature title, optional pill tags, and a concise explanatory statement. Align the content vertically and keep the left and right edges visually disciplined.
- On narrow screens, switch each row to a two-column layout or stacked layout: layer index and title together on the first line, tags below, and the description last. Preserve the expanding hierarchy without causing horizontal overflow.

## Typography hierarchy
- Use a clean grotesk or geometric sans-serif for the main headline and feature titles. The headline should be approximately 34–42px desktop, with tight line-height around 0.98–1.08.
- Use a crisp monospace for eyebrow labels, layer indices, utility-bar text, pills, and descriptions. This contrast is important: prose feels product-led while metadata feels infrastructural.
- Make layer indices small and uppercase, around 10–11px with generous letter spacing.
- Feature titles should be 15–18px, medium or semibold. Make the final row’s title slightly larger or brighter to signal priority.
- Descriptions should be 11–13px monospace, with enough contrast to remain readable but not compete with the title.

## Colour and emphasis
- Keep the first rows in cool, pale lavender surfaces: approximately `#F0EFFA`, `#DCD9FA`, and `#BDB5F2` from lightest to stronger.
- Give the final row a vivid electric indigo or blue-violet surface, approximately `#3024F4` or `#3B2BFF`, as the visual endpoint.
- Use near-black ink such as `#171722` on pale rows. On the final row, use white or very pale lavender text such as `#F7F6FF`.
- Pills should be translucent, softly contrasting capsules with thin borders. Keep their text small and monospace; they should read as capability markers rather than calls to action.
- Keep the page grid, frame, and row borders subtle: use cool gray-lavender lines around `#C9C8D6` with 1px borders.

## Borders, radius, and spacing
- Use sharp or minimally rounded corners: 0–2px for the main frame and rows. This should feel like a technical instrument, not a soft SaaS card grid.
- Use 1px borders throughout, with a slightly darker frame border than the internal row borders.
- Give the outer section generous vertical breathing room, approximately 88–120px above and below.
- Use 24–32px horizontal padding inside the frame and 20–28px vertical padding per row on desktop. Keep row gaps around 10–12px.
- Maintain a consistent spacing scale based on 4px or 8px increments. Avoid excessive card shadows; the structure should come from borders, alignment, and colour.

## Interaction and responsive behaviour
- If rows are interactive, make the whole row focusable and use a subtle border or brightness change on hover/focus. Do not add large animations.
- A restrained transition of 150–220ms is enough. The final row may shift slightly brighter on hover, while pale rows can gain a faint tinted overlay.
- Ensure keyboard focus is clearly visible with a 2px outline that meets accessibility contrast requirements.
- Keep the utility-bar controls visually secondary and avoid implying functionality unless they actually perform an action.
- On mobile, let pills wrap naturally and allow descriptions to occupy their own line. Do not preserve desktop widths if doing so makes text cramped.

## Content guidance
- Write original, product-specific feature labels and descriptions for the user’s product. Use four layers that progress from compatibility or entry point, through core capability and infrastructure, to ownership, trust, or the strongest differentiator.
- Keep each title concise and each description to one short sentence. Use tags only where they clarify supported options or properties.

## Never
- Never use logos, product names, or branded marks from the reference.
- Never reuse the reference’s exact copy, labels, layer names, descriptions, or pill text.
- Never copy the reference illustration, screenshot, iconography, or imagery; this component should remain typographic and structural.
- Never reproduce the exact brand identity or make the section appear to be an imitation of the source site.
- Never use gradients, heavy shadows, excessive rounded cards, or decorative imagery that weakens the technical layered diagram.
