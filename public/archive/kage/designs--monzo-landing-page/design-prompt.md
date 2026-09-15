## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060125607.webp
- Design on Kage: https://kage.design/designs/monzo-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers before writing any code — everything below is a design language to apply to *their* product, not a template of the reference site.

## Page structure
1. **Locale notice bar** — slim grey pill bar pinned at the very top: a one-line notice, a small dropdown to switch region/language, and a dismiss button.
2. **Header** — white background; wordmark left; a segmented Personal/Business toggle with small icons; a dark pill "Sign up" CTA right. Sticky-feeling, low height.
3. **Hero** — full-width photo panel with rounded corners inset from the page edges: warm, candid lifestyle photo (person holding a phone), short two-line headline in white, one line of subcopy, a dark pill CTA, an award badge overlapping the top-right corner, and trust chip + one-line small print at the bottom edge.
4. **Product category carousel** — left-aligned heading and subcopy with a pill CTA, prev/next arrows far right; four equal columns of cards, each a rounded photo on top, a bold title, 1–2 lines of copy and an outlined "Learn more" pill; a block of grey legal small print sits under the row.
5. **Value-prop pitch** — centred heading, one-line subcopy, centred dark pill CTA; below, a horizontal carousel of wide rounded feature cards alternating light grey and navy fills, each with a heading, short copy and an outlined button; dot pagination plus arrows underneath.
6. **Plan grid** — centred heading + CTA; a 3×2 grid of plan cards: top row free accounts, bottom row paid tiers with prices right-aligned in the header. Every card has a small coral card graphic, an arrow chip top-right, a title, short copy and tiny eligibility print. A centred outlined "View all" pill closes it.
7. **Travel feature row** — left-aligned heading, subcopy and two CTAs (outlined + filled); four-up carousel of cards mixing photography, a live currency-converter UI widget and a flat coral tile; titles and copy below each.
8. **Savings panel** — one large coral rounded panel containing a centred heading, subcopy, two CTAs (white outlined + dark filled) and a three-column media row (photo / phone mockup / photo) with titles and copy beneath.
9. **Feature split** — two columns: left a heading, explanatory copy, an outlined CTA and small print; right a coral rounded panel holding a phone mockup of the app.
10. **Support bento** — centred heading, subcopy and CTA, framed by a 2×2 arrangement of rounded tiles in alternating coral and navy, each with a small illustration or badge, a label chip and two lines of copy.
11. **Award banner** — full-width navy rounded panel: two white circular award badges left; heading, copy and a white pill CTA right.
12. **Sign-up steps** — light grey rounded panel: centred heading, subcopy, dark pill CTA; below, a numbered 1-2-3 step list on the left (step 1 expanded in a white card, steps 2–3 collapsed) and a coral visual panel on the right with a customer-count chip.
13. **Security section** — centred heading, subcopy, CTA; a phone mockup in the middle flanked by three short feature blurbs on each side, each with a small icon or coral chip and two lines of copy.
14. **Survey rankings** — heading and published-date note on the left; stacked panels on the right, each a ranked table of competitors as plain text rows with coral horizontal bars and percentage figures, plus an outlined "View full results" pill.
15. **Regulatory disclosure** — bold heading and one short paragraph of legal copy with underlined links.
16. **Footer** — deep navy: four link columns, a legal-links group, a rounded locale-selector pill, then an oversized coral wordmark spanning the width, several lines of small legal print, social icons and app-store badges.

## Design language
- **Colour system:** pick one saturated brand accent (reference uses hot coral ≈ `#FF4A45`) and use it three ways: solid section panels, small graphics inside cards, and data bars/highlights. Pair it with a deep navy ≈ `#0F2437` for dark panels, footer and body text emphasis, white `#FFFFFF` for the base page, and warm off-white ≈ `#F6F4F1` plus card grey ≈ `#F1EFEB` for alternating section fills. Allow exactly one off-palette colour for a single trust badge.
- **Rhythm:** build the page as rounded slabs (radius 16–24px) inset from the viewport edges, cycling white → grey → brand colour → navy as you scroll so each section reads as a distinct block. Never let two adjacent sections share the same fill.
- **Hierarchy:** one friendly geometric sans throughout. Hero headline ~56–72px bold, sentence case; section headings ~36–44px bold; card titles ~18–20px semibold; body 16px in muted navy-grey. Keep line lengths short (headline max ~6 words per line).
- **Buttons:** always fully rounded pills. Three variants — navy filled with white text, outlined with 1.5px navy border, and white-filled on coloured panels. Place a CTA in every section header so each block can convert on its own.
- **Cards:** generous padding, photo or mockup on top with matching radius, title + 1–2 lines of copy below, small arrow chip in the top-right corner for navigable cards, outlined pill for secondary actions.
- **Density:** airy, centred headline blocks with lots of whitespace between sections; denser only inside grids (plans, rankings) and the footer. Legal/regulatory small print at 11–12px in grey directly beneath any financial claim — this small-print habit is what makes the page feel trustworthy.
- **Imagery:** warm, candid lifestyle photography (never stocky corporate), rounded corners everywhere; use phone mockups showing real product UI in feature splits and the security section.
- **Interaction:** horizontal carousels with circular arrow buttons and dot pagination for card rows; simple hover states (slight fill shift on pills); no heavy animation.
- **Trust layer:** end the page with proof — award badges, ranked comparison tables drawn as coral bar charts with plain-text competitor names and percentages, and published-date labels.

## Never
Do not use the Monzo name, wordmark, coral card artwork, app screenshots, the Which? or FSCS badges, or any copy from the reference. Do not clone the photography. Do not present the result as Monzo — apply the layout system, colour rhythm and typographic voice to the user's own brand.
