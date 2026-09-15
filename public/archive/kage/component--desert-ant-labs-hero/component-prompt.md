## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106569-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106538010-full.webp
- Component on Kage: https://kage.design/component/desert-ant-labs-hero

# Build a distinctive editorial product hero

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colour palette, and typography are. Apply the principles below to my answers and create an original hero for my product—do not reproduce the reference site's wording, identity, or artwork.

## Goal
Build a responsive landing-page hero for a technology product. It should feel intelligent, tactile, and editorial rather than like a generic SaaS template. The composition is driven by a strong typographic statement, generous empty space, and a glimpse of product-related content entering from the bottom edge.

## Structure and layout
- Use a warm, nearly white background across the entire hero, approximately `#F7F7EF` or a tone adapted to the user's brand.
- Add a compact header at the top with generous horizontal padding: brand mark/name aligned left and a simple navigation cluster aligned right. Keep the header visually quiet so the headline remains dominant.
- On desktop, use a wide content container with approximately 64–72px side gutters. Place the hero copy left-aligned rather than centred, beginning around the lower third of the viewport.
- Make the hero occupy roughly 650–760px on desktop, with the headline and supporting line above a bottom-edge product preview.
- Let the product preview be partially cropped by the viewport: show several overlapping or adjacent rounded cards rising from below the fold. Vary their widths, heights, colours, and slight rotations to create a playful, tactile deck. The cards should suggest real product capabilities without becoming a dense dashboard.
- On mobile, collapse the navigation into a compact menu treatment, reduce side padding to about 20–24px, stack the headline naturally, and allow the cards to become a horizontally clipped strip. Preserve the intentional crop and whitespace.

## Typography
- Use a bold contemporary sans-serif for the main headline, with a large desktop size around `88–112px`, tight line-height around `0.88–0.95`, and slightly negative tracking. Scale down fluidly with `clamp()` on smaller screens.
- Break the headline into two visual lines when the phrase and container allow it. Keep the second line especially strong and readable.
- Give one short phrase or line of the headline a tactile grain, stipple, or distressed texture. Implement it accessibly with a CSS mask, subtle noise layer, SVG filter, or carefully controlled pseudo-element—not an image copied from elsewhere. Keep the underlying text selectable and readable.
- Use a restrained monospaced or technical typeface for the supporting sentence, around `16–18px`, with comfortable line-height and modest letter spacing. Adapt the choice if the user's brand has a different typographic system.
- Header navigation should be semibold, approximately `14–16px`, with enough contrast and hit area for comfortable interaction.

## Colour and surface
- Start with a calm warm background around `#F7F7EF` and near-black text around `#0D1110`.
- Use 3–5 muted but optimistic accent colours for the bottom cards—for example deep teal `#17606A`, dusty rose `#B9959F`, sage `#B4B9A5`, burnt orange `#E56E43`, and charcoal `#222625`. Tune them to the product's palette.
- Keep text high contrast. Grain should be subtle and must not reduce legibility.
- Avoid gradients unless they are necessary to express the user's brand; the reference feeling comes primarily from flat fields, texture, and spacing.

## Borders, radius, and details
- Use little or no visible border on the main page.
- Give product cards a generous radius, approximately `24–34px`, with occasional small rotations between `-3deg` and `3deg`.
- Use small pill labels inside cards with low-contrast translucent or darker surfaces, compact uppercase text, and generous horizontal padding.
- Keep shadows extremely soft or omit them. The cards should feel like layered paper or interface panels, not floating marketing tiles.
- Add a small, legible brand mark in the header using a simple abstract geometric treatment that is original to the user's product.

## Interaction and motion
- Make the header links and menu controls keyboard accessible, with visible focus states and a hit area of at least 44px.
- If the cards animate, use a restrained entrance or slow hover lift/rotation; respect `prefers-reduced-motion`.
- On hover, cards may shift by a few pixels or reveal a small detail, but do not make the hero dependent on animation to communicate its message.
- Ensure the textured headline has a clean fallback for browsers that do not support the chosen effect.

## Content and accessibility
- Write fresh headline and supporting copy based on the user's product and audience. Do not use placeholder marketing clichés if a clearer product promise is available.
- Use semantic `header`, `nav`, `main`, and heading elements. Maintain a logical heading hierarchy.
- Provide descriptive labels for icon-only controls, strong focus styles, and sufficient colour contrast.
- Make the cropped card content supplementary rather than essential, so the hero still works if it is hidden on a small screen or reduced-motion setting.

## Never
- Never copy the reference's logos, product names, brand identity, headline, supporting copy, navigation labels, or card labels.
- Never reuse its illustrations, imagery, grain asset, exact card artwork, or distinctive graphic files.
- Never make a pixel-for-pixel clone or preserve the reference's exact text, dimensions, colour values, or layout proportions.
- Never sacrifice readability, responsiveness, keyboard access, or reduced-motion support for visual texture.
