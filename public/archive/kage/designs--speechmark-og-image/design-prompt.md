## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/159d00b0-37dc-4173-8691-11980d66c0df-1789106543254.webp
- Design on Kage: https://kage.design/designs/speechmark-og-image

## Before you start
Ask the user what product this card is for, who it is for, what brand assets exist (name, colours, typeface, logo or glyph), and where the card will be shared (X, Slack, LinkedIn, iMessage). Wait for the answers before designing. Everything below is applied to *their* product with placeholder branding and copy — never to the reference product.

## Page structure
Produce a single **1200×630 social card image** — for example a fixed-size HTML/CSS block (`1200px × 630px`) rendered to PNG, or a standalone SVG.

- **Canvas**: full-bleed near-black background, no border, no pattern, no texture.
- **Focal tile**: one large app-icon tile — a squircle with corner radius ≈ 22–25% of the tile width — centred on the canvas, its height ≈ 80–88% of the canvas height, so generous black margins remain on all sides (wider left/right on the 630px-tall landscape crop).
- **Glyph**: a single oversized typographic glyph or abstract mark in near-black, scaled to roughly 40–50% of the tile width, optically centred (nudged ~2–3% above geometric centre). This glyph stands in for the product name — pick a character or abstract shape meaningful to the user's brand, not necessarily a quotation mark.
- **Text (optional)**: the reference carries no headline, wordmark or URL. Default to none. If the user wants copy, allow one small line only — wordmark or tagline — set small in a corner of the tile or below it, never competing with the glyph.

## Design language
- **One idea per card**: a single glyph at icon scale; everything else is negative space. If a second element doesn't improve recognition at 60px wide, remove it.
- **Two-value palette**: warm off-white tile (`#EDEBE4`-ish) on near-black field (`#111111`-ish), glyph in the near-black. If the brand has colours, map the tile to a brand-tinted off-white or invert (dark tile on light field) — never more than two values plus the glyph.
- **Icon treatment, not flat shape**: give the tile a subtle top-to-bottom luminance gradient (a few percent) so it reads as a physical macOS-style icon; large corner radius; no visible border and at most a whisper of ambient shadow.
- **Hierarchy by scale alone**: no headline hierarchy to build — contrast does all the work. Keep the glyph's optical weight centred; check that the mark doesn't touch the tile edges (keep ≥ 25% tile-width padding around it).
- **Type**: one glyph, one size. Any added text uses a single size, generous letter-spacing, system serif or neutral sans; no second typeface.
- **Legibility test**: the card must survive being shrunk to a small chat thumbnail — it should still read as a light tile on dark with a recognisable mark. Verify at 60px wide before finishing.

## Never
- No quotation-mark logo, wordmark, icon, copy or illustration from the reference — use the user's own mark or an abstract placeholder.
- No product screenshots, UI mockups, gradient splashes or photography.
- Never present the result as the reference product; all branding is the user's own or clearly placeholder.
