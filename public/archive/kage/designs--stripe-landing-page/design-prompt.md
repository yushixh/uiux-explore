## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789060217-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stripe-com/f883ce83-9776-477f-9170-0bb4400c0ec7-1789059982020.webp
- Design on Kage: https://kage.design/designs/stripe-landing-page

## Before you start
Ask the user what product they are building, who it is for, and which brand assets they already have (name, logo, colours, typeface). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product — not a clone of the reference page.

## Page structure
Top to bottom:
1. **Sticky top nav** — wordmark left, 4–5 dropdown nav items beside it, text link + two right-aligned buttons (secondary sign-in, filled primary CTA). Slim height, white, hairline border only on scroll.
2. **Hero** — left-aligned block: a small live-metric line (e.g. a ticking percentage), then a 3–4 line display headline where the trailing words are tinted with a gradient, a one-sentence subhead in a lighter weight, and two CTAs (filled pill + outlined pill with provider icon). Anchor an oversized 3D gradient artwork to the top-right corner, bleeding off the canvas behind the nav.
3. **Customer logo strip** — single row of 6–7 monochrome logos, evenly spaced, small.
4. **Product solutions bento grid** — bold intro sentence with the lead phrase in black and the rest in gray. Grid of cards: one 2-column flagship card containing a phone mockup + checkout UI, one tall analytics card with a usage-meter chart, three medium cards (conversational commerce chat, card issuing, global money-movement dot-map), and one full-width platform card with a dashboard screenshot. Every card = soft gradient wash or light backdrop + floating white product-UI screenshot + short title + diagonal-arrow link.
5. **Full-bleed dark event banner** — wide photo with a dark overlay, white display headline, one outlined button, event wordmark pinned bottom-right.
6. **Stats band** — centred 2-line display heading, then a 4-column stat row (huge numeral + small gray caption), with a decorative radial particle/line graphic filling the space below.
7. **Enterprise section** — split header (heading left, supporting paragraph right), purple pill CTA, featured case study: logo + one-line outcome, full-width photograph, then a caption row of facts (countries, locations, products used). Below, a 3-row accordion of further customer stories with plus-icon toggles.
8. **Experts row** — three equal columns, each with small icon, bold lead-in phrase, body copy, text link.
9. **Startups section** — split header + purple CTA, horizontally scrollable row of 4 case-study cards (illustrated/gradient covers, logo bottom-left, one-line result, read-story link), then two side-by-side gradient promo cards (purple and orange) for programmes.
10. **Platforms section** — split header + CTA, one large dashboard-UI mockup panel on a gradient field, then a 3-column row of guide links (title, copy, 'Read the guide').
11. **Pull quote** — centred customer quote, bold attribution line, read-story link, followed by a 4-logo gray strip.
12. **Dark developer section** (navy background) — split header with two buttons (docs, GitHub). Then three sub-blocks: (a) 'Connect to existing systems' — a node diagram of labeled chips (ERP, CRM, SDK, PSPs…) linked to a central node plus integration logos; (b) 'Scale with confidence' — animated gradient wave bands with three large stats (requests/day, req/s, transactions/min); (c) 'Choose an integration path' — three columns: no-code mini-UI card, a grid of platform logos, and a syntax-highlighted code snippet, each with copy + cyan text link.
13. **News carousel** — 'What's happening' heading, arrow controls, cards with gradient covers (featured annual-letter card larger, magazine covers to its right).
14. **Editorial split** — 'Book of the week': solid-colour card with book cover left; right column has title, author, paragraph, and two publisher links.
15. **Final CTA** — 'Ready to get started?' heading left with copy and two buttons (Start now, Contact sales); right side two icon columns linking to pricing and integration info.
16. **Mega footer** — 4–5 column link lists grouped under bold small headings (Products, Solutions, Integrations, Developers, Company, Resources, Support), locale selector, copyright line.

## Design language
- **Palette:** white canvas `#FFFFFF`; text and dark sections in deep navy `#0A2540` (use it as the text colour, not pure black); primary accent blurple `#635BFF` for buttons, links and small graphics; secondary link cyan `#00D4FF` on dark sections; captions in slate gray `#425466`; hairlines `#E6E6E6`. Expressive gradients run orange `#FF9A4D` → pink `#FF5F9E` → purple `#7A73FF` → cyan `#11EFE3`, but only in artwork, card washes and headline tints — never as button or body fills.
- **Type:** one geometric sans throughout. Build hierarchy with scale and weight only: display 56–72px at 600 with -0.02em tracking and ~1.1 line-height; section intros 24–28px medium; body 16–18px/1.5; captions and labels 13–14px in gray. Highlight key words inside headlines with the gradient tint rather than a second typeface.
- **Buttons:** fully-rounded pills. Primary = blurple fill, white text, ~40px height. Secondary = white fill, blurple text, 1px border. On dark backgrounds use navy-tinted fills with white text or cyan-outline variants. Tertiary CTAs are plain coloured text links ending in a '›' arrow.
- **Cards:** 8–12px radius, no drop shadows. Distinguish cards by surface: soft low-opacity gradient washes, thin 1px borders, or solid accent fields. Product screenshots float on cards as white rounded rectangles with subtle borders — UI mockups are the imagery, not stock photos.
- **Grid & density:** max content width ~1080px, 12-column grid, 120–160px vertical padding between sections, denser inside card grids. Alternate dense UI-heavy blocks with airy stats/quotes/photography so each section resets attention; alternate light and dark full-width bands to mark chapter changes.
- **Data as design:** big numerals (40–56px) with small lowercase gray captions beneath; prefer concrete numbers (percentages, requests/sec, currencies) over adjectives.
- **Motion:** restrained — 150–250ms ease-out hovers that deepen fills, translate arrows diagonally, slowly animating gradient artwork; no bounce or parallax gimmicks.

## Never
- Do not use the Stripe name, wordmark, logo, or its exact headline copy; do not recreate its specific 3D gradient hero artwork or its actual product screenshots.
- Do not reuse the reference's customer logos, case-study companies, quotes, photography, book covers or event branding.
- Never present the result as the reference product — apply this visual system to the user's own brand, name and content.
