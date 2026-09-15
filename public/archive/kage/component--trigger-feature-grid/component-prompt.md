## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073775-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Component on Kage: https://kage.design/component/trigger-feature-grid

## Before you start
Ask the user what their product does, who it is for, and what their brand guidelines or visual references are. Then apply the principles below to their product rather than reproducing this reference literally.

## Build a developer-focused feature showcase section
Create a dark, editorial feature section for a software product. The section should communicate one important capability through a convincing technical demonstration, while remaining scannable for visitors who do not read the code.

### Structure and layout
- Use a near-black full-width section, approximately `#101114`, with a centered content container capped around `1240px`.
- Organize the main feature as a two-column grid: a wide code/demo panel on the left, roughly 58–62% of the available width, and a text panel on the right, roughly 38–42%.
- Keep the columns aligned to a shared top and bottom edge. Use a thin vertical divider between them and thin horizontal rules around the feature area.
- Add a compact horizontal capability/navigation rail above the main feature. It should contain several short capability labels with small, simple line icons or coloured glyphs. Allow horizontal scrolling on narrow screens rather than wrapping into a tall stack.
- Place a small action button near the lower-right of the text panel. It should feel secondary to the feature message.
- Add a muted customer, use-case, or credibility strip below the feature, separated by a border and divided into evenly sized cells. Use neutral text placeholders or generic category labels that the product owner can replace.
- On mobile, stack the text and demo panels, preserve the code panel’s horizontal scrolling, and turn the credibility strip into a horizontally scrollable row.

### Demo/code panel
- Make the code area feel like a real product surface, not a decorative screenshot: use a dark inset background around `#121419`, generous padding, and a readable monospace typeface.
- Show a short, product-relevant code example with comments, function names, object structure, and syntax highlighting. Generate original code based on the user’s product; do not borrow code from any reference.
- Use subdued comments around `#686b76`, lavender or violet keywords around `#b99cff`, warm yellow-green values around `#c7df86`, and blue/cyan accents around `#7fc8e8`. Keep most code low contrast so highlighted concepts guide the eye.
- Prevent the code from visually overpowering the headline. On small screens, preserve its structure with horizontal overflow or a clipped preview.

### Typography hierarchy
- Use a modern sans-serif for interface labels and marketing copy, with a monospace font only for code and technical metadata.
- Set the feature headline large and dense, approximately `30–36px` on desktop, `26–30px` on mobile, with a `1.25` line-height and medium-to-semibold weight.
- Use a cool muted gray for the headline, approximately `#a7a9b3`, rather than pure white. This creates a quiet, technical tone.
- Keep capability labels and credibility text between `13–15px`; use slightly increased letter spacing for compact all-caps or utility labels.
- Limit the headline to a narrow measure so it forms a strong vertical block rather than a wide paragraph.

### Colour, borders, and shape
- Use a restrained palette: near-black background `#101114`, panel black `#121419`, border `#24262d`, primary text `#a7a9b3`, secondary text `#686b76`, and one accent colour selected from the user’s brand.
- Give each capability a small distinct accent only where it helps categorisation; avoid a rainbow treatment across the whole design.
- Use 1px borders with low contrast and squared or lightly rounded corners, around `4–6px`. Avoid large cards, heavy shadows, glassmorphism, and gradients.
- The credibility row should look like part of the same system: dark cells, thin dividers, subdued labels, and generous horizontal padding.

### Interaction and states
- Capability items should be selectable. The active item gets brighter text, a subtle accent indicator, or a thin underline; selecting it can swap the code sample, headline, and supporting action.
- The action button should have a quiet bordered default state, a slightly brighter border and text on hover, and a visible keyboard focus ring.
- Add smooth but restrained transitions around `150–200ms`; do not animate the code excessively.
- Make every interactive element keyboard accessible, with clear focus styling and descriptive labels.

### Content guidance
- Write an original, concise headline explaining the user’s product capability and its practical outcome.
- Use a code example that demonstrates the mechanism behind that outcome.
- Keep supporting copy minimal: this composition relies on the contrast between technical proof and a strong promise.

## Never
- Never copy the reference’s logos, product names, capability labels, headline, body copy, code, or customer names.
- Never use the reference’s exact iconography, illustrations, imagery, or brand marks.
- Never present invented customer logos or claims as real; use clearly replaceable placeholders or user-provided proof.
- Never turn the section into a generic dashboard, hero banner, or collection of floating cards.
- Never sacrifice readability for visual similarity: adapt the layout, palette, copy, and code to the user’s product and brand.
