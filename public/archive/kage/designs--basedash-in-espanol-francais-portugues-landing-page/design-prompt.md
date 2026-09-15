## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106655341-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106651271.webp
- Design on Kage: https://kage.design/designs/basedash-in-espanol-francais-portugues-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, colours, type, logo). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product, not a template of the reference page.

## Page structure
Build a single long marketing page in this order:

1. **Top nav** — cream bar with hairline bottom border: logo/wordmark left, 4 text links with dropdown carets center-right, then a text link and a solid black pill CTA on the far right.
2. **Hero** — centered, ~64px display headline, one short gray sub-paragraph (max ~520px), then a row of three small uppercase monospace trust badges in orange with tiny icons, then two CTAs (solid black pill + white bordered pill) and a one-line reassurance under them.
3. **Hero product artifact** — a full-width white card containing the product: left side shows metric cards, a line chart, a stacked bar chart and a 6-row data table with green/red delta columns; right side is an AI chat panel (blue user bubble, working-status line, answer paragraphs, small "governed metric" chips, input bar with orange send button). Crop/fade the card's bottom edge so the UI feels like it continues.
4. **Logo strip** — a tiny monospace uppercase label ("powering analytics for N teams") above a single row of 6 partner wordmarks, widely spaced, low contrast.
5. **Testimonials** — two equal columns; each has a black-and-white halftone-style portrait, a serif italic quote, the company wordmark, name + role, and a "Read case study →" text link.
6. **Feature: build with a prompt** — centered H2 + one sub-line, then a large mockup: two chart panels (line chart, bar chart) with a highlighted prompt pill overlaid between them; below, a row of two big-number stat tiles plus a cohort-retention table with week columns.
7. **Feature: ask anything** — centered H2 + sub, then a loosely scattered grid of bordered question cards, each with a tiny category label; one card is highlighted and overlaps the center, and edge cards are cropped by the viewport to imply a horizontal marquee.
8. **Feature: semantic models** — a three-panel flow: left card = model name, "Verified" badge, description, small SQL code block, tag chips; center = an orange gradient arrow with a prompt pill on it; right card = resulting metric chart with "Verified" badge.
9. **Integrations** — centered H2 + sub + outlined button, then a dense grid (~6 rows × 15) of small white tiles with colorful tool icons, fading out at the left/right edges.
10. **Security** — centered H2 + sub + two CTAs (black pill + white pill); below, two side-by-side white panels: a monospace-headed "security posture" checklist (icon, bold item, gray detail, checkmark) and an "audit log" list of timestamped event rows with colored action verbs.
11. **FAQ** — a small left-aligned "FAQ" label, then full-width accordion rows separated by hairlines, each with a chevron; 7–8 real questions.
12. **Closing CTA** — centered H2 ("get started in under 30 minutes" style) + sub + the same CTA pair, then a wide, framed retro CRT/terminal visual (neon bars and glowing digits on black) sitting on the cream page inside a thin frame.
13. **Footer** — solid black: left brand column (logo, two-line blurb, social icons, legal links, language selector) and three link columns (Platform incl. a "comparisons" sub-group, Features, Resources) in small gray type.

## Design language
- **Canvas**: warm paper background #f5f1ea everywhere; sections are separated by whitespace (~120–160px), not dividers — only the nav, FAQ rows and footer use lines.
- **Hierarchy**: every section = one centered display headline (48–72px, weight 500–600, line-height ~1.1, color #1c1917) + one short gray sub-line (#57534e, 16px, max-width ~520px) + exactly one visual artifact. Never stack more.
- **Monospace micro-labels**: 11px uppercase monospace with 0.08em letter-spacing in orange #c2410c for trust badges and panel headers (SECURITY POSTURE, AUDIT LOG, logo-strip label). This is the page's signature voice — use it for any data/credibility marker.
- **Colour discipline**: black #1c1917 text on cream; white #ffffff cards; orange #ea580c reserved for accents (badges, send button, gradient arrow, deltas); blue #2563eb only for the user's chat bubble; charts are mostly grayscale so the few coloured elements read instantly.
- **Type system**: geometric sans for UI/headings, serif italic for testimonial quotes, monospace for labels/code/timestamps. Scale roughly 64 / 28 / 16 / 13 / 11px.
- **Cards & mockups**: white cards with 1px #e7e0d4 borders, 10–14px radius, shadow 0 1px 2px rgba(0,0,0,.04). Product UI inside them uses tiny type (11–13px), soft gray charts, green "+%" deltas, and pill chips with dot icons.
- **Buttons**: full pill radius; primary = solid black, white text; secondary = white with 1px black/gray border. No gradients on buttons.
- **Rhythm**: alternate airy editorial moments (headline + sub) with dense data artifacts (tables, audit rows, icon grids); the contrast between sparse and dense is the page's visual engine.
- **Motion**: keep it quiet — accordion chevrons rotate, links get an "→" glyph and darken on hover; imply horizontal auto-scroll for the question-card and integration rows.

## Never
- Do not use the reference's name, wordmark, logo, tagline, testimonials, customer names or any of its copy.
- Do not reuse the partner/integration logos or icon set shown in the screenshot; use the user's own or generic placeholders.
- Do not reproduce the halftone portraits, the exact SQL snippet, or the CRT/terminal artwork verbatim.
- Never present the result as the reference product; it is the user's product wearing this design language.
