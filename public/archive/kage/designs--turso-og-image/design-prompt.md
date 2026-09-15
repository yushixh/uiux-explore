## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/acb1b1db-bae8-4cb9-8205-3a0be91cc9f3-1789073643947.webp
- Design on Kage: https://kage.design/designs/turso-og-image

## Before you start
Ask the user what product or page this social card is for, who the audience is, and what brand assets they already have (brand name, logo, hex colours, typeface). Wait for the answers. Everything below is a composition template applied to *their* brand — do not reproduce the reference product's name, mascot, copy or palette.

## Page structure
Produce a single **1200×630 social card image** (render HTML/CSS to PNG, or write a standalone SVG). One centred column, four vertical zones:

1. **Canvas** — full-bleed flat dark background, no gradient, no texture, no border.
2. **Wordmark lockup (top ~15–22% of canvas height)** — a small brand glyph (approx 48–56px) beside an uppercase, bold, letter-spaced wordmark in the accent colour, both centred as one horizontal unit. This is the only branding on the card.
3. **Headline block (middle ~55% of canvas height)** — a three-line stacked headline, centred, set in the heaviest weight available (800), roughly 100–120px, line-height ~1.0–1.05, slight negative letter-spacing. Break the copy into three short lines; colour the one or two most important words in the accent colour and keep the rest white.
4. **Bottom margin** — intentionally empty. No URL, no handle, no CTA, no screenshot, no illustration.

## Design language
- **One axis, one message:** everything is centre-aligned on a single vertical axis; the card is a lockup plus a headline, nothing else. Reserve at least ~80px safe margin on all sides (social platforms crop edges).
- **Hierarchy by scale and colour alone:** top element small (wordmark), bottom element huge (headline). No weight or size steps in between.
- **Two-colour emphasis:** pick exactly one accent (example mint green ≈ `#4CEFAF`) and use it for the wordmark and 1–2 headline words only; body of headline in white `#FFFFFF`; background near-black navy ≈ `#0B1520`. Three colours total, no gradients.
- **Type pairing:** a single heavy geometric sans throughout; uppercase + letter-spacing for the wordmark, sentence case and tight leading for the headline. Size contrast between lockup and headline should be roughly 1:2 or greater.
- **Negative space as the layout device:** with only ~5 content elements on the canvas, spacing does all the work — keep vertical gaps generous and resist adding any secondary row of content.
- **Legibility at thumbnail size:** test by scaling the card to ~30% — the headline must still read. Flat colours and ultra-bold strokes are what make it survive compression.
- **Static asset:** no motion, no interaction states; this is a single exported image.

## Never
- Never use the reference product's name, wordmark, bull/mascot icon, the "SQLite" headline copy, or its exact typeface.
- Never present the output as the reference brand; use the user's placeholder name and copy until they supply real assets.
- Never add stock photography, icon sets, badges or screenshots to the card — the composition depends on restraint.
