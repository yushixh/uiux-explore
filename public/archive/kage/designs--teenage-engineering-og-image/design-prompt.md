## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/49dbe3f0-eeae-4ad5-8928-b93375116318-1789060163053.webp
- Design on Kage: https://kage.design/designs/teenage-engineering-og-image

## Before you start
Ask the user what product or brand this social card is for, who it is for, and what message it must communicate when shared on X, Slack, LinkedIn or iMessage. Ask which brand assets they already have (name/wordmark, colours, type, and — critically — whether they have a product photo, render, or logo object to feature). Wait for the answers before designing. Everything below is applied to *their* product, not to the reference.

## Deliverable
Produce a single **1200×630** social card image. Recommended: one self-contained HTML file with a fixed 1200×630 container, exported to PNG via a headless-browser screenshot (Playwright/Puppeteer), or hand-authored SVG. If the user supplied a product photo or render, composite it in; otherwise build an abstract stand-in object (a dark slab or simple geometric form with small details suggested by gradients) — do not imitate the reference hardware.

## Canvas structure
1. **Background**: near-black radial gradient — roughly `#0a0a0a` at centre falling to `#030303` at the edges, so the frame vignettes into pure darkness.
2. **Lighting layer**: one soft overhead/front spotlight, a subtle lighter radial patch centred just above the composition. Nothing else is lit.
3. **Hero cluster**: centred horizontally, sitting slightly below vertical centre, occupying ~60–70% of the width and ~50% of the height. A wide, bright primary object in front; two or three smaller supporting objects staggered behind it in a loose row. Overlap them slightly so depth reads.
4. **Micro-caption layer**: the only text on the card. Tiny technical labels (10–12px, monospace or a technical sans, uppercase, letter-spaced, ~60% white) placed on or beside each object, plus an optional very small wordmark in one corner at low contrast.
5. **Negative space**: keep the outer ~15% margin on all four sides almost pure black; never let an object touch the edge.

## Design language
- **Hierarchy by light and scale, not by headline.** The front, brightest, widest object is the focal point. If a message is needed at all, cap it at ~28px, light weight, white, centred below the cluster — but the strongest version uses no headline.
- **Low-key studio mood.** One light source, heavy vignette, objects emerging from darkness. Depth comes only from light falloff and layering, never from decorative shadows or borders.
- **Strict monochrome palette.** Background `#030303`–`#0a0a0a`; object bodies `#111`–`#1a1a1a` with `#e8e8e8` highlights on edges, knobs or screens; one optional micro-accent (a 2–3px red `#ff2a2a` detail, e.g. an indicator light) only if the brand actually has one.
- **Type as engraving, not marketing.** Labels should feel like they're printed on the hardware: tiny, precise, technical. No taglines, no paragraphs, no large type anywhere.
- **No chrome.** No card frame, border, rounded container, badge or gradient banner. The image is a photograph-like scene, not a designed layout.
- **Static.** It is an image — no motion, no interaction.

## Never
Do not use teenage.engineering's name, wordmark, product names (TP-7, CM-15, TX-6, OP-XY, 'TODAY' engravings), device photography, illustrations or iconography. Do not recreate their instruments or present the result as their product. Use the user's own branding and placeholder copy throughout.
