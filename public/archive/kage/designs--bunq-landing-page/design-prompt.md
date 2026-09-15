## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bunq-com/4420c8b4-fa9d-40bf-a5d3-de95f2febdf1-1789146743583-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bunq-com/4420c8b4-fa9d-40bf-a5d3-de95f2febdf1-1789146739613.webp
- Design on Kage: https://kage.design/designs/bunq-landing-page

## Before you start
Ask the user what product they are building, who it is for, and which brand assets they already have (name, colours, type, photography, app screenshots). Wait for the answers before writing any code — every rule below is applied to *their* product, not to the reference site.

## Page structure
Build a single long-scroll, mobile-first landing page, top to bottom:

1. **Top bar** — sticky, near-black; small wordmark top-left, hamburger icon top-right. No nav links or clutter.
2. **Hero** — left-aligned oversized headline (one confident sentence-case line), a single short subline, then a full-width white pill CTA. Below, a full-bleed lifestyle/product photo (hand holding a phone showing the app) sitting on an ambient multicolour glow bleeding in from the edges.
3. **Feature accordion** — left-aligned section heading + subline, then 3 rows separated by hairline dividers; the first row is expanded with one sentence of detail, the rest collapsed titles. Below it, a small ghost pill CTA to a deeper product page.
4. **In-context app photo** — one full-width, large-radius photo of the real interface in a real setting (warm light, hands, desk). No chrome or mockup frame beyond the phone itself.
5. **Daily-life carousel** — centred heading + subline, then a horizontally scrolling row of large rounded cards; each card = big photo on top, bold title, 2-line body, pill CTA. The next card peeks ~40px at the right edge to signal scrollability.
6. **Audience promo** — centred heading + one-line sub + full-width white pill CTA (e.g. a free/student segment offer).
7. **Audience chips** — a centred row of small pill tabs for segments (e.g. students, couples, parents, expats) acting as a filter/segmented control.
8. **Business section** — returns to left alignment: heading, one-line sub, dark pill CTA, then another large rounded lifestyle photo.
9. **Trust banners** — centred heading + subline, then three stacked full-width gradient banner cards, each with a small centred icon, one big stat (guarantee amount, user count, support availability) and a one-line caption. Give each banner its own hue so the trio reads as a colour rhythm.
10. **Press strip** — small centred heading, single row of monochrome white/gray publication logos at reduced opacity.
11. **Reviews** — centred heading + subline, then a carousel of dark review cards: row of 5 amber stars, the full quote in body type, reviewer name and source at the bottom, with the next card peeking.
12. **Plan finder** — closing section: centred heading + subline and a full-width two-way segmented control (Personal / Business) that switches the plans shown beneath.

## Design language
- **Canvas**: near-black throughout — page `#0A0A0A`, cards and surfaces `#141414`–`#1A1A1A`, hairlines `rgba(255,255,255,0.12)`. No light sections; contrast comes from white on black, not from background flips.
- **Colour discipline**: the brand gradient (approx. green `#24A851`, blue `#2F7FD1`, yellow `#F5C518`, orange `#F07A22`, red `#E03A3E`) appears only inside product imagery, the hero glow, and the trust banners. UI itself stays strictly black/white/gray; the gradient is a signature, not a palette. Secondary text `#A3A3A3`; stars and accents may use one warm accent (`#F5B301`).
- **Type**: one grotesque sans family. Headings sentence-case, large (clamp ~32–56px), tight tracking (−0.02em), white; body 14–16px, line-height ~1.6, gray. Hierarchy is built almost entirely from size and weight — almost no decorative type.
- **Buttons**: full pills (radius 999px). Primary = white fill, black text, full-width on mobile; secondary = `#1E1E1E` fill, white text; tertiary = hairline-border ghost pill. One CTA per section, never competing buttons.
- **Radius & shadow**: photos, cards and banners share a large radius (24–32px). No drop shadows — cards separate from the background by being a slightly lighter surface, not by elevation.
- **Rhythm & density**: generous vertical padding (~88–120px) between sections; alternate alignment (left editorial → full-bleed imagery → centred headers → stacked banners) so density changes down the page. Text blocks are short: one heading, one subline, one CTA.
- **Imagery**: photography-led. Warm, natural-light lifestyle shots with real hands and real settings; keep the interface visible and legible inside device screens. Round all images to match cards.
- **Interaction & motion**: accordion with one row expanded, hairline dividers, ~250ms ease height transitions; carousels use native horizontal scroll with a peeking neighbour card; segmented controls highlight the active pill; hover states are subtle brightness changes only (150–250ms). Nothing bounces or parallax-distracts.
- **Trust patterning**: big-number stat banners, monochrome press logos, starred reviews with named attribution, and a guarantee figure — put proof after desire, just before pricing.

## Never
- Never reproduce the bunq wordmark, logo, "Bank of the Free" tagline, rainbow-striped card artwork, their app screenshots, their photography, or their press logos (WSJ, TechCrunch, Bloomberg, Reuters, CNBC).
- Never copy their headlines, feature copy, or review text.
- Never present the result as bunq or imply it is bunq; apply this design language to the user's own product and brand assets.
