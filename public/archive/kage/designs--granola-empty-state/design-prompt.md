## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/granola-ai/8b8980af-a0f4-4fc3-9371-ab7645007c40-1789138376488-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/granola-ai/8b8980af-a0f4-4fc3-9371-ab7645007c40-1789060736322.webp
- Design on Kage: https://kage.design/designs/granola-empty-state

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, logo, existing imagery). Wait for the answers before writing code. Everything below is a design language to apply to *their* product, not a template of the reference site.

## Page structure
Build a single long marketing landing page with these sections, top to bottom:

1. **Nav** — slim fixed-height bar on cream: small logo mark + lowercase wordmark left, 4–5 centred text links, black pill CTA button right. No border, blends with the background.
2. **Hero** — two columns. Left: a small 'new' announcement pill with a green status dot, then a very large serif headline (4–5 lines, tight leading), two short sans lines of subtext, a lime pill CTA, and a small caption listing platforms. Right: a floating product mockup — a macOS-style window with traffic-light dots, a notepad document with tabs, checkbox list and avatar tiles, layered over a lime colour panel. Generous whitespace above and below.
3. **Three-point proof strip** — a serif section heading, then three hairline-separated rows, each: small line-icon left, single sentence right. Very low density, no cards.
4. **Giant type statement** — a full-width serif sentence at viewport-scale type (12–16vw), centred or flush, plain black on cream. Pure typographic pause between sections.
5. **Dark logo band** — full-bleed near-black section, small centred label ('Trusted by…'), then a 6×2 grid of customer wordmarks in off-white, with generous padding top and bottom.
6. **Before/during/after walkthrough** — right-aligned serif heading introducing a three-step story. Each step: a small left rail listing the three phases (current one highlighted), a step title, one paragraph, and a large product mockup (notepad with AI brief, video-call tiles, action-item menu). Steps stack vertically with lots of air.
7. **Chat band** — full-bleed chartreuse section: eyebrow label, huge dark serif headline on the left, a white chat-input card mockup on the right. One bold colour moment.
8. **Dark testimonials** — near-black section, centred serif white heading, then two wide dark cards side by side, each with a company logo, large serif pull-quote, name/title and small square portrait.
9. **Features mega-section** — eyebrow, huge serif heading, black pill CTA. Then 5 alternating feature rows, each with a hairline top border and a two-column header (bold title left, explanation right), followed by a full-width visual: product mockup composited over photography, icon tiles on textured colour, phone mockups, or a menu-bar screenshot.
10. **Integration section** — eyebrow, huge serif headline ('use it anywhere' message), download CTA, a two-column claim row, then a row of app-icon tiles.
11. **Pricing CTA card** — a single large rounded cream card, centred: serif headline 'free' offer, one supporting line, black pill + ghost pill buttons side by side.
12. **Footer** — four or five link columns (Features, Product, Company, Resources) with a small column of product links and social icons left, copyright right. Below the columns, the wordmark repeats at enormous scale, bleeding to the page edges, cropped slightly by the fold.

## Design language
- **Palette**: cream page background `#FAF8F1`; ink text `#161613`; muted grey-brown secondary text `#6E6E64`; hairline borders `#E4E1D5`; one chartreuse accent `#B7D636` used sparingly (CTA pill, one full-bleed band, status dots); near-black sections `#1B1B18` with off-white `#F5F3EC` text. No blues or gradients anywhere.
- **Type pairing**: one editorial serif (e.g. Tiempos-like — use Source Serif 4 or Newsreader) for all headlines, pull-quotes and section titles, in regular weight with tight tracking (-0.02em) and leading ~1.05; one neutral sans (Inter) for nav, body, labels, buttons. Scale is extreme: display statements up to 14–16vw, section headings 56–72px, feature titles 28–32px, body 16–17px, eyebrows 13px uppercase or small-caps with wide tracking.
- **Buttons**: fully-rounded pills only. Primary on light = chartreuse fill with black text; secondary = black fill with cream text; tertiary = thin-bordered ghost. No shadows on buttons.
- **Hairline structure**: sections are separated by 1px rules, not cards or shadows. Feature rows use a label-left / description-right two-column header sitting on a hairline. Density is low: 120–160px vertical padding between major sections.
- **Product mockups as content**: build UI mockups in HTML/CSS — rounded 12–16px windows with traffic-light dots, cream document surfaces, 13–14px sans text inside, soft large-radius shadows (`0 30px 60px rgba(0,0,0,0.12)`). Composite them over muted landscape photography or solid accent colour blocks.
- **Rhythm and mood**: alternate light → dark → accent colour sections to reset attention; insert one pure-typography section mid-page. Dark sections use cards with `#262622` surfaces and 1px `#3A3A34` borders.
- **Motion**: keep it subtle — gentle fade/translate on scroll into view, hover states that darken pills slightly, no parallax theatrics.
- **Photography**: desaturated nature/landscape imagery (mountains, wood, water) only as backdrops behind mockups, never as standalone hero art.
- **Footer**: text-size links in 14px sans, muted; finish with the brand wordmark set at 20–30vw, black on cream, cropped by the viewport bottom.

## Never
- Never reuse Granola's name, wordmark, 'G' logo, tagline, or any of its copy (e.g. 'AI notepad for back-to-back meetings', 'For the doers', 'Perfect meeting memory').
- Never copy its customer logo list, testimonial quotes, or portraits.
- Never reproduce its exact headline wording, section order phrasing, or illustration/photography assets — write original copy for the user's product and use only their assets.
- Never present the result as Granola or imply affiliation.
