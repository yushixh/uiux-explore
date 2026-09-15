## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-2-0/c4792896-d667-4f93-9d7a-45b63e4c8942-1789192848174.webp
- Design on Kage: https://kage.design/designs/raycast-2-0-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, tagline, logo/glyph, colours, typeface). Wait for the answers. Everything below is applied to *their* product, not to the reference.

## Goal
Produce a 1200×630 social share card (Open Graph image) announcing a major product release. Build it as HTML/CSS sized 1200×630 and render to PNG (e.g. with Playwright/Puppeteer screenshot), or as an SVG.

## Page structure (canvas composition)
1. **Background**: a single near-black stage (#0a0a0a–#0d0d0d) with a very subtle radial vignette — slightly lighter behind the headline, falling to pure black at the corners. No patterns or gradients beyond this.
2. **Top-centre glyph**: a small (~64px) monochrome brand glyph at roughly y=70, centered, low-contrast gray so it never competes with the headline.
3. **Headline**: a two-line, centred announcement headline in white (#f2f2f2), very large (~90–100px), tight line-height (~1.1), medium-to-semibold weight, positioned in the upper-middle third (centred around y≈250). Keep it to 8–12 words total.
4. **Product mockup, bottom-anchored**: render a mockup of the product's main UI (e.g. a command palette, dashboard panel) in a 3D perspective, lying nearly flat like a slab rising from the bottom edge, centred, spanning ~90% of the width. Fade it into the background with a black gradient overlay so only the two or three nearest rows are legible: row icon, primary label in white, secondary/keyword label in dim gray, and one highlighted action chip on the right ("Open Application" style pill with a keyboard shortcut hint).
5. **Single accent glow**: one warm red/orange (#e5533d-ish) glow behind the leftmost element of the mockup — the only colour on the canvas.

## Design language
- Hierarchy: headline first, mockup second, glyph third — enforced by contrast (white → dim gray → near-black), not by size alone.
- Depth via darkness: elements further away are dimmer and lower-contrast; use large soft black gradient overlays on the mockup rather than drop shadows.
- Type: one geometric sans (e.g. Inter) throughout; two weight tiers only (semibold headline, regular labels). Centred axis, generous tracking on small labels.
- Colour: monochrome black/white/gray (#0a0a0a, #f2f2f2, #7a7a7a) with exactly one warm accent used once.
- Density: low — three elements on the whole canvas, lots of black space. Nothing within ~60px of the canvas edge except the mockup bleeding off the bottom.
- Mockup detail: include realistic UI rows (icon, label, category text) but keep them small and partially obscured; a row of small keyboard-key chips in the bottom-right corner adds authenticity.
- No motion (static image).

## Never
Do not copy Raycast's name, wordmark, logo glyph, headline copy, or the specific command rows ("Clipboard History", "AI Chat", "Clear Derived Data", etc.). Use the user's own branding and placeholder command names. Never present the result as the reference product.
