## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workid-ai/4084db05-8968-43af-a66a-a32376728829-1789106613407.webp
- Design on Kage: https://kage.design/designs/workid-og-image

## Before you start

Ask the user what product the card is for, who it is aimed at, and what brand assets they already have (name, logo mark or glyph, brand colours, typeface). Wait for the answers before writing any code. Everything below is applied to *their* product with placeholder branding — it is not a recreation of the reference.

## Goal

Produce one static social share card at exactly **1200×630 px** (safe for X, LinkedIn, Slack, iMessage), as a single HTML file with inline CSS fixed to that canvas (or an equivalent SVG), ready to render to PNG. All branding, glyph, copy and listing content are placeholders the user supplies or you invent neutrally.

## Page structure

Top to bottom on the canvas:

1. **Background** — full-canvas very light ice-blue gradient (lighter at the bottom). No texture, no illustration.
2. **Brand lockup (~top 12%)** — a rounded-square app icon containing one simple white glyph, with a bold wordmark to its right. The pair is centred horizontally as a unit.
3. **Floating proof cards (edges)** — two white listing cards that overlap the canvas edges: one upper-left rotated roughly −6°, one mid-right rotated roughly +4°. Each shows a small logo/avatar, a job-style title, a grey meta row (source, location, work mode), 3–4 small tag chips, a timestamp and a bookmark glyph. These are partially cropped by the frame.
4. **Hero copy (centre, focal)** — a small white pill badge with a tiny green status dot and short label, then a two-line headline in heavy near-black, then one line of grey supporting copy beneath it.
5. **Search bar** — one wide white pill holding two placeholder inputs ("what" and "where") separated by a hairline divider, ending in a dark pill button with white label.
6. **Category row** — four equal-width pale-blue tiles, each with a semibold label, a smaller grey sublabel, and a chevron at the right edge.
7. **Content strip (bottom)** — a short bold section title, then one or two full-width listing rows (logo, title, meta, salary, tags) cropped by the bottom edge to suggest scrollable content beyond the card.

## Design language

- **Focal hierarchy:** exactly one dark two-line headline carries the message; badge, subcopy and everything below are progressively lighter and smaller. The brand lockup is prominent but never competes with the headline.
- **Density rhythm:** the centre column is airy and sparse; the edges carry the busy UI cards. Cropped elements at three edges (left, right, bottom) make a static image feel like a window onto a larger product.
- **Colour:** ice-blue gradient background `#EAF4FB → #FBFDFF`; near-navy text `#0F172A`; secondary grey `#64748B`; primary blue `#2F6BFF` reserved for the app icon, tile fills (`#E4F0FB`) and small accents; mint tag background `#E7F6EE` with `#1F7A43` text; dark button `#111827` with white label. Colour accents stay small — the card reads light-on-light.
- **Type:** one geometric sans throughout (e.g. Manrope or Inter). Headline 700–800 weight at ~64–72px with ~1.05 line-height; badge and tile labels 13–14px semibold; card titles 15–16px semibold; meta and timestamps 12–13px grey. Never more than two weights per zone.
- **Shape & depth:** border-radius 12px on cards/tiles, full pills on badge, search bar and buttons. Soft diffuse shadows (`0 10px 30px rgba(15,23,42,.08)`) only on the floating cards and search bar — flat fills everywhere else. Rotation is used only on the two edge cards, ±4–7°.
- **Motion:** none — this is a static image; do not add hover states or animation.

## Never

- Do not reuse the reference product's name, wordmark, fingerprint glyph, headline copy, tag text or any third-party logos (company icons, job-board marks). Invent a placeholder brand, glyph, titles and companies.
- Do not present the output as that product or mention it in code comments or copy.
