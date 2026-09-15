## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cash-app/8a23447e-fbda-4721-92a9-f26e6b924e63-1789146440688.webp
- Design on Kage: https://kage.design/designs/cash-og-image

## Before you start
Ask the user what product or feature this social card is for, who the audience is, and what brand assets they already have (name, logo glyph or wordmark, accent colour, typeface, and one key figure they want as the hero — a price, amount, stat or number). Wait for the answers. Everything below is applied to *their* brand with placeholder copy; nothing is copied from the reference.

## Deliverable
Produce a **1200×630 static social share card** (OG image), either as:
- a single self-contained HTML file with a fixed stage (`width:1200px;height:630px;overflow:hidden`) rendered to PNG via Playwright/Puppeteer, or
- a standalone SVG with `width="1200" height="630"`.

All product UI inside the card is hand-built HTML/CSS or SVG — never real screenshots. Build one variant using the user's brand and hero figure.

## Canvas structure
Work top-to-bottom through the composition:
1. **Ground** — full-bleed solid black canvas, no gradient or vignette. The left ~40% stays almost entirely empty; that emptiness is what makes the right side read.
2. **Brand anchor** — bottom-left, a rounded-square app icon (~110×110px, ~26px radius) filled with the user's accent colour, containing their boldest single glyph or initial in the contrast colour, optically centred. Keep it clear of the edge (~55px margin).
3. **UI stack** — centre-right, two overlapping phone-style panels (~330–360px wide, ~26px outer radius, slight diagonal offset, front panel overlapping the back one by 30–40%):
   - Back panel: a light UI screen showing a simple finance-style list — a section label, one primary balance with two small muted metadata values, two pill buttons, then 2–3 rows of smaller balances with captions. Only the left ~60% of this panel is visible; the front panel covers the rest.
   - Front panel: a solid accent-colour screen with a small utility icon top-left and a small round avatar top-right, a giant hero figure in the middle, and a sparse column of keypad-style digits running down its left edge.
4. **Hero figure** — the user's key amount/stat (e.g. `$20`), set in white at ~150–170px, heaviest weight, tight tracking, positioned at the optical centre of the front panel. This is the single largest element on the canvas.
5. **Texture prop** — bottom-right corner, a card-like rectangle (~460×260px, ~20px radius) with a rich dark material treatment (subtle pattern, noise or marbled texture in a warm metallic hue) and a small brand wordmark in the top-right of the card. Let it bleed off both the right and bottom edges so it's clearly cropped.
6. **Safe zone** — keep all meaningful text and the brand icon inside ~60px margins; platforms crop edges.

## Design language
- **Hierarchy by scale, not decoration**: one dominant numeral does all the work; UI panels are supporting props. Hero type is ~8–10× the UI label size. No badges, ribbons or headline blocks competing with it.
- **Negative space as a layout tool**: reserve the left third of the canvas as pure black ground; cluster the composition into the right two-thirds with one small anchor bottom-left.
- **Colour**: black ground `#000000`; one saturated accent for brand work (reference green ≈ `#00D632` — replace with the user's accent); white `#FFFFFF` for surfaces and hero type; muted grey ≈ `#8A8F98` for UI labels and metadata; a warm metallic ≈ `#C98A3B`–`#E0A44E` only on the texture prop. Never add a second accent or a gradient background.
- **Type**: a single geometric sans throughout. Hero figure in the heaviest weight, slightly negative tracking; panel titles ~18–20px bold; balances ~24–28px bold; captions and metadata 12–13px medium in grey. No serif, no display face mixing.
- **Shape and depth**: consistent 20–28px radius on panels, icon and card; full-radius pills for buttons; separation comes from colour contrast against black, not shadows — use at most a faint, wide shadow on overlapping panels.
- **Cropping and overlap**: every product prop is partially cropped or overlapped so it reads as a fragment of something larger; nothing floats complete except the brand icon.
- **UI realism in miniature**: the mock screens must look like a real product (aligned rows, real-looking numbers, small sparkline or list detail if useful) but stay abstract enough that they're clearly illustrative.
- **Static asset**: no motion, no interaction; ensure legibility at thumbnail size (test at ~40% scale).

## Never
- Never use the Cash App name, wordmark, rounded-square dollar-glyph logo, cashtags, or its exact green as a brand lockup — the accent colour must come from the user's own brand.
- Never reuse the reference copy ('Money', 'Add money', 'Withdraw', 'Paychecks', 'Save & invest', the specific balances) — write neutral placeholder content for the user's product.
- Never reproduce the gold molten-flake card artwork; create a different material texture for the card prop.
- Never present the output as Cash App's card or imply affiliation with it.
