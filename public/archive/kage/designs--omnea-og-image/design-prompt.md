## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/omnea-co/c83dfae3-3b05-42e8-9d0c-0f9fdee76fd1-1789141733736.webp
- Design on Kage: https://kage.design/designs/omnea-og-image

## Before you start
Ask the user what product or announcement the card is for, who will see it (where it will be shared — X, LinkedIn, Slack), and what brand assets they already have (name, tagline, colours, fonts). Wait for the answers before building. Everything below is applied to *their* brand, not to the reference.

## Deliverable
Produce a **1200×630 social card** as a single self-contained HTML file with a fixed 1200×630 root canvas (e.g. `body { width:1200px; height:630px; overflow:hidden }`), ready to be rendered to PNG with a headless browser screenshot. A pure SVG is an acceptable alternative. Use placeholder branding and copy throughout. Do not build a web page — this is one static image.

## Page structure
1. **Canvas** — the full 1200×630 field is one flat warm off-white surface with no gradients, borders or decoration. All content sits inside roughly 80–100px safe margins.
2. **Headline block** — the single focal element: the product claim (placeholder copy, e.g. "The Agentic OS for Procurement" replaced with the user's own line) set as two stacked lines, centred horizontally and slightly above vertical centre. This is the only large type on the card.
3. **Floating chips** — four small pill labels scattered around the headline at staggered, deliberately uneven positions: one top-right of the headline, one mid-left partially overlapping the headline's left edge, one lower-right overlapping the baseline of line two, one bottom-centre below the headline. Each pill carries a short functional label (placeholder agent/feature names).

## Design language
- **Focal hierarchy is type-first**: one oversized two-line headline does all the talking; there is no logo, wordmark, CTA or secondary paragraph. Everything else on the card is a supporting satellite.
- **Colour**: near-monochrome. Canvas approximately `#F3EFE8` (warm cream, never pure white). Headline and label text near-black `#111111`. Pills pure white `#FFFFFF`. Introduce exactly one small dose of colour per chip via a tiny accent orb — muted red `#E88A80`, soft blue `#9DB8D9`, soft green `#8FCB9B` — kept to ~28px discs so saturation stays a garnish.
- **Type pairing**: a high-contrast display serif (Tiempos/Freight feel; Playfair Display or Instrument Serif as free fallbacks) for the headline at ~140–160px, tight line-height (~0.95), minimal letter-spacing, normal weight — the contrast of the serif does the work, not boldness. Chip labels are the opposite voice: uppercase monospace or grotesque at 13–14px with ~0.08em letter-spacing. Two voices, nothing in between.
- **Chips**: white pills with fully rounded radius (999px), a 1px hairline border in ~`#E4DFD6`, and a very soft shadow (`0 4px 12px rgba(0,0,0,0.06)`). Inside: a 28–30px circular disc containing a radial halftone dot pattern (small dots, denser at centre) plus the uppercase label. Padding ~10px vertical, ~18px horizontal.
- **Composition rhythm**: the scatter must look intentional, not random — no two pills on the same horizontal band, each overlapping the headline region by a few pixels at most, with the bottom-centre pill anchoring the composition. Keep at least 100px of clear cream space between any pill and the canvas edge.
- **Motion**: none. The card is static; depth comes only from the slight overlaps and soft shadows.

## Never
- Do not use the name "Omnea", the copy "The Agentic OS For Procurement", the agent names (Mitigation, 4th Party, Approval, Doc Review), or Omnea's logo or wordmark anywhere in the output.
- Do not reproduce the halftone orb illustrations exactly — generate placeholder icon discs in the same spirit with the user's own colours.
- Never present or describe the result as Omnea's card; it is an original composition inspired by that layout language.
