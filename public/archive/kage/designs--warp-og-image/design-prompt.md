## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0b8c09c0-1686-4080-b12d-0e7b28b0f0f4-1789059999605.webp
- Design on Kage: https://kage.design/designs/warp-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name or wordmark, logo glyph, brand colours, typeface). Also ask what the card is for — product launch, blog post, changelog, feature announcement — and wait for the answers. Everything below is applied to *their* brand, not to the reference.

Produce the deliverable as a **1200×630 social card image**. Easiest paths: (a) a single self-contained `og-card.html` styled at exactly 1200×630 and rendered to PNG with Playwright/Chromium, or (b) a hand-authored SVG exported to PNG. No external network assets; system fonts or a bundled font file only.

## Canvas structure
1. **Base field** — full-bleed near-black background (`#0E0E10`). No photo, no gradient wash; the darkness is the canvas.
2. **Blueprint grid layer** — 1px hairlines (`rgba(255,255,255,0.07)`) every ~150px in both axes, small `+` tick marks at some intersections, and two dashed vertical guides (`rgba(255,255,255,0.12)`) running through the horizontal centre at roughly 1/3 and 2/3 width. This gives the card a
