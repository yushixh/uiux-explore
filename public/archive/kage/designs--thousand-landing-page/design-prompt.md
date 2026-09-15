## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106570706-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/thousand/cb10af68-535d-4246-97d9-03dbd24306a9-1789106567354.webp
- Design on Kage: https://kage.design/designs/thousand-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, logo). Wait for answers before writing code. Everything below is a design language to apply to *their* product, not a clone of the reference.

## Page structure
1. **Top nav**: small logo mark + wordmark left; text links (What it does, Pricing, For agents, Log in) and one black pill CTA right. Thin, no border.
2. **Hero**: two columns. Left: tiny monospace eyebrow label, large 3-line headline with a yellow highlighter swipe behind the second line, short paragraph, two CTAs (solid black pill + text link). Right: a floating app mockup — file tree with permission badges (WRITE/READ) beside a document panel showing a table and highlighted decisions — plus an account-switcher chip row above it and a commit-history card overlapping below. Bottom-left: a small pixel-grid "year of commits" heatmap with a less/more legend.
3. **Integration strip**: centred two-line heading (bold first line, lighter second), row of tool icons with an arrow pointing to the product's mark.
4. **Feature section A**: oversized two-line headline (first line black, second grey) then a wide full-width card (split mockup: light reader view vs dark agent view, small caption under) followed by a two-column bento row of cards, each with a bold title, one paragraph, and an illustrative mockup (access-rules table, sync diagram).
5. **Feature section B**: another big headline ("Half your team will never open a terminal.") with a small right-aligned aside; then a 2×2 bento of cards: editor mockup, share-link card with green panel, comments-beside-document card, and a full-width **yellow accent band** card with search-results mockup.
6. **Drawings card**: full-width card pairing a hand-drawn Excalidraw-style canvas mockup with text on the right.
7. **Feature section C**: headline ("An agent is a member of the workspace.") plus right-aligned aside; bento row of two cards (bot profile card with token expiry, self-tidying workspace file list with DUPLICATE/STALE badges), then a two-column row (remotes terminal mockup / text) and a dark terminal mockup card with curl output.
8. **Dark exit-policy section**: near-black full-width block, small eyebrow, two-line headline, side-by-side folder-tree mockups with an "=" between them, caption underneath.
9. **FAQ**: centred monospace eyebrow ("Questions, answered plainly") then a two-column grid of simple question/answer text blocks.
10. **Closing CTA**: huge yellow rounded block with a giant black headline, monospace subtitle, and black pill button; minimal footer with copyright left, links right.

## Design language
- Palette: cream/off-white page background (#F5F0E6-ish), near-black text (#111), warm yellow as the single accent (#F0C64A / #E8B93B) used for highlighter swipes, full-width bands, and the closing CTA. Small secondary tints (pale green #E4EFE0, pale blue #DCE8F5, pale yellow cards) distinguish mockup panels. Section rhythm: cream → yellow band → cream → dark block → cream → yellow.
- Type: a friendly geometric sans for headings (bold, tight tracking, ~56–72px on section headlines) paired with a **monospace face for eyebrows, captions, badges, table headers and metadata** — this mono/everyday pairing is the page's signature. Body is 15–16px grey (#555).
- Two-tone headlines: first line in full black, second line in grey (60% opacity), often wrapping a contrast ("docs, and here is what it couldn't do alone").
- Highlight treatment: yellow marker swipe behind key headline words; dotted underlines and inline yellow highlights inside mockup documents to suggest annotation.
- Cards: white/cream surfaces, 16–24px radius, 1px warm-grey border, very soft shadow, generous internal padding. Layout grid: wide cards span full container; secondary points sit in 2-col bento rows with uneven, content-driven heights.
- Mockups are the content: every feature is shown as a plausible UI fragment (file trees, comment threads, terminal output, spreadsheets, folder lists) with realistic names, sizes, timestamps and status badges in tiny mono type. Build mockups in HTML/CSS, not images, and keep them dense with believable micro-copy.
- Interaction/motion: static page; only obvious affordances are hover states on nav links and pill buttons (darken/offset). Keep motion minimal and snappy.
- Buttons: solid near-black pills with white mono text, small; secondary actions are plain underlined/bordered text links.

## Never
Never reuse the reference's product name "Thousand", its logo mark, its exact copy, its sample content (Q3 budget, board/ files, specific personas), its icon set, or its commit heatmap data. Do not present the output as that product; apply the style to the user's own product and content.
