## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/vercel-com/e389b343-d49a-4acf-bb7d-6cfa471f4d3d-1789059982633.webp
- Design on Kage: https://kage.design/designs/vercel-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have, including a name, colours, type choices, logo or symbol, and any required copy. Wait for their answers before designing. Apply the reference's composition to their product, using placeholder branding and copy until those details are provided.

## Page structure
- **1200×630 social-card canvas:** Create a fixed 1200 by 630 pixel image suitable for sharing on X, Slack, LinkedIn, or iMessage, with a full-bleed near-black background.
- **Central focal mark:** Place one large, simple geometric symbol in the exact horizontal and near-central vertical area; use the user's placeholder brand symbol or a neutral abstract shape rather than a detailed illustration.
- **Atmospheric separation:** Add a very soft, diffused gray-white glow behind and around the symbol so it emerges subtly from the dark field.
- **Optional restrained identification:** If the user's product needs text, place a short placeholder brand name or headline with generous spacing and low visual weight, without competing with the central mark. Preserve the reference's sparse composition rather than filling the canvas.

## Design language
- Build hierarchy through scale, centering, silhouette, and contrast rather than multiple content blocks; the focal symbol should dominate the card.
- Use extreme negative space and a quiet, cinematic rhythm: one uninterrupted background, one central object, and almost no secondary information.
- Treat colour as monochrome. Use a near-black background around `#050505` to `#0b0b0b`, a solid black symbol around `#000000`, and a subtle halo ranging from charcoal `#222222` to soft gray-white `#d8d8d8` at very low opacity.
- Keep geometry crisp and uncomplicated. Use a sharp-edged symbol with no decorative texture; if text is needed, pair a neutral modern sans-serif with tight, clean proportions and generous tracking.
- Avoid visible borders, cards, rounded containers, or hard shadows. The only depth cue should be a large blurred radial glow behind the focal shape.
- Keep the mark optically centered and generously scaled, roughly occupying the middle third of the canvas while retaining broad margins on every side.
- Make the implementation export an actual 1200×630 PNG, for example by rendering HTML/CSS in a browser or generating an SVG and rasterizing it. Ensure the result remains legible at small social-preview sizes.
- Keep motion out of the final asset; this is a static image. If building a preview tool, allow editable placeholder symbol, copy, colours, and glow intensity without changing the sparse composition.

## Never
- Never use the reference product's logo, triangle, wordmark, product name, tagline, copy, or exact brand identity.
- Never copy proprietary imagery, icon sets, or distinctive assets from the reference.
- Never present the result as the reference product; create an original social card for the user's product with placeholder branding and copy.
