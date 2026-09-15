## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/cd071ce0-9fac-4bcc-965e-df8f7976ea6e-1789073647260.webp
- Design on Kage: https://kage.design/designs/upstash-og-image

# Product OG social card

## Before you start
Ask the user what product they're building, who it's for, what name/tagline to show, which product or feature names belong in the badge row, and what brand colours/type they have. Wait for answers before generating.

## Task
Produce a **1200×630 social card** (Open Graph / Twitter summary_large_image). Deliver it as HTML/CSS sized exactly 1200×630 rendered to PNG, or as an SVG. Use placeholder branding and copy — never the reference site's name, logos or copy.

## Page structure (canvas composition)
1. **Canvas**: 1200×630, near-black background (#0d1210) with a faint dark-green radial vignette glow behind the center content.
2. **Headline zone (top ~55%)**: one two-line headline, extremely large bold sans-serif (~110–130px), white, centered, tight line height (~1.05). This is the only thing that must read at thumbnail size.
3. **Product badge row (middle)**: 3–5 rounded pill badges (~28px radius) in a slightly lighter dark surface (#1c2420), horizontally centered, optionally wrapping to a second centered row. Each pill = a small rounded colour tile (24px) with a simple generic icon glyph + product label in white semibold (~32px). Give each badge its own accent colour.
4. **Footer link (bottom ~12%)**: domain/CTA text (~36px) in a brand accent green (#4ade80), underlined, centered, with a small playful cursor/arrow graphic beside it.

## Design language
- Strict vertical, centered single-column hierarchy: headline → badges → URL; nothing else competes.
- Huge type scale contrast: headline ~4× the badge label size; no other text layers.
- Colour is restrained: dark neutral canvas, white type, one accent colour for the footer link, small saturated accent tiles only inside badges.
- Rounded corners everywhere (pills ~28px, icon tiles ~8px), no shadows, no borders beyond the pill surfaces.
- Generous negative space; content occupies the middle ~70% of the canvas with clear breathing room above and below.
- Optimize for thumbnail legibility: high contrast, few elements, no fine detail.

## Never
No real logos, wordmarks, product names, copy, illustrations or icon sets from the reference. Never present the card as that product's; use the user's placeholder brand throughout.
