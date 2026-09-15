## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfront-com/3e3be85e-7bdd-4e6a-8630-f389b2c5e8da-1789146504390-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfront-com/3e3be85e-7bdd-4e6a-8630-f389b2c5e8da-1789146498501.webp
- Design on Kage: https://kage.design/designs/wealthfront-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, logo, colours, type). Wait for the answers before writing any code — everything below is applied to *their* product, not to the reference site.

## Page structure
Build a single marketing homepage with these sections, top to bottom:

1. **Announcement bar** — slim full-width strip above the nav on the dark brand colour, centred bold message with a confetti/particle flourish, plus one inline text link. Dismissible.
2. **Navigation** — dark, same background as hero so they read as one block. Wordmark left; four dropdown items centre-right (Cash, Invest, Borrow, Learn pattern: name them from the user's product); outlined 'Log in' button and a white filled pill 'Get started' on the far right.
3. **Hero** — two columns on a deep indigo→violet gradient. Left: small eyebrow label with a sparkle icon ('Earn up to'), one enormous display numeral (the key offer, e.g. a rate or metric) at ~110–130px, then an italic serif counterphrase on its own line. Below, three feature rows (small line icon + one-line claim), then two CTAs — filled violet pill and outlined pill — and a 12px disclaimer paragraph. Right: a tilted phone mockup showing the product's UI with real-looking balances, with a second object (card/panel) layered behind it for depth.
4. **Proof band** — still on the dark hero background: a small award/badge card on the left, then four stat columns (clients, assets, app-store ratings) each with a big numeral and small caption, footnote superscripts linking to fine print.
5. **Explainer accordion** — full-width white rounded pill bar with a chevron circle: one bold claim followed by lighter supporting text. Expands to reveal how the headline number is achieved.
6. **Education section (light)** — white/lavender background, centred: a two-line headline where the first line is heavy sans and the second is large italic serif, one supporting paragraph, then two award/rating cards side by side (one brand-coloured, one dark).
7. **Product comparison** — two mirrored columns, each: centred heading + one-line description, a rounded card containing a phone mockup (left card adds a metric badge and a performance chart), the account name in brand purple, a three-item checklist with check icons, filled + outlined CTAs, a 12px disclosure footnote, then an 'Explore…' block of underlined text links.
8. **Client stories** — heading centred ('Make the most of your…' pattern), then three equal photo cards: candid warm photography, a small name/date chip top-left, and a dark gradient overlay at the bottom carrying a short title, one line of copy, and a circular arrow button.
9. **Testimonial band (dark)** — near-black indigo. Left: large pull quote in serif, source logo, 'Read the article' link, tiny disclaimer. Right: a video-thumbnail card with a short client quote overlaid on a translucent panel.
10. **Stats row (dark)** — four big numerals with captions (1.5M+, $100B+, years, ticker symbol), plus two lines of 12px disclaimers beneath.
11. **Closing CTA (dark)** — full-bleed gradient band, one centred display line mixing heavy sans with an italic serif word, and a single filled 'Open account' button.
12. **FAQ (light)** — two columns: left a bold multi-line heading ('Questions? 5 things to know in 5 minutes or less.' pattern) with helper links beneath; right a five-item accordion with hairline dividers and rotating chevrons.
13. **Footer (dark)** — logo left, four link columns with small bold group subheads, 'Back to top' link, then a long block of 12px–14px regulatory disclosures and numbered footnotes ending with copyright.

## Design language
- **Background inversion sets the rhythm:** dark brand block (hero → proof → accordion) → light education/comparison → light photo band → dark quote/stats/CTA block → light FAQ → dark footer. Don't subdivide with sidebars; let full-bleed band colour changes do the work.
- **Colour:** deep indigo `#2B1464` and violet `#4B2E9E` gradient for dark bands; near-black indigo `#1E1656` for the quote/footer block; light sections on `#FFFFFF` with lavender card fills `#EEEBF7`; accent buttons violet `#5A4FC7`; body text on white `#1E1A2E` with secondary `#55506A`; on dark, secondary text is white at ~70% opacity.
- **Type pairing:** one geometric sans for all UI, headlines and numerals; one high-contrast serif used *only* in italic for a short phrase that trails the main statement. Scale: display numeral 110–130px, section headlines 44–56px, card titles 26–30px, body 16–18px, captions/disclaimers 12px. Keep the serif out of buttons and navigation.
- **Hierarchy by subtraction:** each band makes exactly one point. One giant numeral or one headline per band; support with small icon rows, checklists or stat columns rather than competing headlines.
- **Radius and borders:** pill buttons (999px), 16–24px card radius, hairline 1px dividers `#E3E0EE` on light and `rgba(255,255,255,0.15)` on dark. Shadows are nearly absent — depth comes from gradient washes and layered mockups.
- **Data presentation:** big numerals with a small caption line underneath; superscript footnote markers that resolve in the footer; performance claims always paired with adjacent 12px disclaimers.
- **Photography:** candid, warm, lifestyle-oriented photos only in the client-story band, always under a dark bottom gradient with white text; product sections use mockups and type, never photos.
- **Motion:** accordions expand with a ~200ms ease and chevrons rotate; circular arrow buttons nudge right on hover; dropdowns reveal on hover/click. Nothing parallaxed or bouncy.
- **Footer density is a feature:** let the legal block run long at 12–14px, low-contrast but readable — it signals a regulated product. Keep marketing sections airy by contrast.

## Never
- Never use Wealthfront's name, wordmark, logo, mascot, or any copy from the reference (rates, '4.20% APY', 'Better than a bank', question wording, client quotes).
- Never reproduce the Bankrate, Nerdwallet or Forbes badges/quotes or any third-party awards — only include award slots if the user has real ones.
- Never copy the reference's phone-app UI screens, charts, or client photography; rebuild mockups with the user's own product name and plausible data.
- Never present the result as Wealthfront or claim its numbers, ratings or testimonials.
