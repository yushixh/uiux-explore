## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073735-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/trigger-dev/b9ca49c4-30e6-4b69-8f7d-3e7049f90280-1789073643894.webp
- Design on Kage: https://kage.design/designs/trigger-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo, colours, fonts). Wait for the answers. Everything below is a design language to apply to *their* product — not the reference site.

## Page structure
Build a single long dark landing page with these sections, top to bottom:

1. **Sticky top nav** — logo left; 5–6 text links centred; right side: community icon, a source/star counter chip, a quiet Login link and one high-contrast CTA button.
2. **Hero** — full-width dark field with a tilted, blurred 3D product visualisation (timeline bars with durations) behind a centred layout: oversized white headline (two lines), one muted paragraph, a filled accent CTA and a small secondary chip with a live count. No illustration clutter above the fold.
3. **Category tab strip** — a horizontally scrollable row of pill tabs, each with its own small coloured icon; the active tab is visually distinct and drives the section below.
4. **Tabbed demo panel** — two-column: a syntax-highlighted code editor card on the left, and a large benefit headline plus a small outbound link on the right. Switching tabs swaps the code and copy together.
5. **Customer logo row** — one row of 5–6 grayscale wordmarks, evenly spaced, low contrast.
6. **How it works** — a full-width video-style player with custom Play/Replay/Fullscreen controls showing an animated product walkthrough with a step caption inside the frame.
7. **Capabilities section** — short intro paragraph plus an 'overview' link, then a horizontally scrollable row of cards. Each card: a small node/flow diagram on top, a title, one sentence, and a 'View example' arrow link.
8. **Deploy/scale narrative** — three alternating rows pairing a realistic mini product-UI mockup (status list with environment pills, usage meter with price, an area chart) with a tiny coloured eyebrow label and a two-line headline. Mockup left/text right, then swapped.
9. **Debugging trio** — three equal cards in a row: alerts (notification mockup), advanced filtering (dropdown mockup), versioning (version chip). Each has title, sentence, and a small embedded UI fragment.
10. **Foreground features** — two stacked rows, each text column + app-card mockup (progress card, chat stream) with an accent hue per row and a caption under the card.
11. **Runtime freedom grid** — 3×3 grid of small tool cards: coloured icon, name, one line, 'Learn more' link.
12. **Mega feature list** — three dense columns ('Development', 'Production', 'Observability') of one-line links, ~10+ rows each, with a 'View all features' link in the section header. Peak density of the page.
13. **Reliability split** — left: a vertical list of API/config names acting as selectable items; right: a large code panel showing a highlighted snippet. Docs link top-right of the section.
14. **Tech stack strip** — one line of framework/hosting logos at low contrast with a short label.
15. **Open-source statement** — centred: a single strong icon, a large two-tone statement sentence, then a row of three big stats (count, label) separated by whitespace.
16. **Testimonial wall** — masonry grid of dark cards: quote, avatar, name/role, company mark. A 'Read more…' button closes the wall.
17. **Final CTA** — headline, one paragraph, filled accent button, and two compact side cards (e.g. pricing note, self-host note) each with an icon and a link.
18. **Footer** — logo, four link columns with icons per row, a social icon row, and a legal line.

## Design language
- **Canvas**: near-black page background (#0a0a0a–#111113). Cards sit one step up (#161619–#1a1a1e). Section separation uses generous whitespace, not dividers.
- **Accent discipline**: one hero accent (lime/chartreuse, ~#A8F250) is reserved for primary buttons and the rare highlight; every feature gets its own secondary hue (green ~#4ade80, pink ~#ec4899, blue ~#60a5fa, purple ~#a78bfa, yellow ~#eab308) applied only to eyebrow labels, 16–20px icons and status pills. Never more than one hue per component.
- **Hierarchy**: hero headline ~60–72px tight sans with −2% tracking; section titles 34–40px; feature titles 18–22px; body 14–16px in muted gray (#a1a1aa); captions 12px. Eyebrow labels are small coloured text above headlines — they carry the section's hue.
- **Type pairing**: one grotesque sans (Inter/Geist-like) for everything, plus a monospace (JetBrains Mono-like) for code, durations, version chips and API names. Mono is also used for tiny technical labels to signal 'for engineers'.
- **Proof through artefacts**: replace illustration with realistic UI fragments — status lists with environment pills (e.g. DEV pink / PROD green), filter dropdowns, area/bar charts, notification cards, chat bubbles, window chrome with traffic-light dots. Keep them small, border-contained and legible.
- **Code blocks**: dark editor chrome, 12–13px mono, syntax highlighting with green strings, purple keywords, pink function calls, gray punctuation, muted line numbers.
- **Diagrams**: node-flow illustrations (dots, lines, small labelled boxes) with glow accents, used as card tops instead of photos.
- **Borders/radius/shadow**: 1px hairline borders rgba(255,255,255,0.08–0.12); cards 8–12px radius; pills fully rounded; shadows almost absent — depth comes from border, background step and occasional soft glow behind the hero visual.
- **Buttons**: primary = accent fill with dark text, 6–8px radius, small size; secondary = ghost link with '↗' arrow; chips/counters fully rounded with border.
- **Density rhythm**: airy centred hero → dense two-column demo → alternating roomy feature rows → compact card grids → maximum density mega-list → medium-density testimonial masonry → compact CTA → dense footer. Alternate this rhythm; don't let density plateau.
- **Motion**: functional only — tab-driven content swaps, a player-style walkthrough, subtle hover lift/border-brighten on cards, soft glow animation in the hero. No decorative parallax.

## Never
- No copying of the reference product's name, logo, wordmark, tagline, code samples, testimonials, customer logos, illustrations, video frames or icon artwork.
- Do not reproduce its exact copy or feature claims; write copy for the user's own product.
- Never present the output as that product or imply affiliation.
- Don't apply the lime accent to everything — its scarcity is what makes it work.
