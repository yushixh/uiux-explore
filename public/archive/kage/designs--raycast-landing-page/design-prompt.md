## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789067491-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/raycast-com/85f2a082-cb21-4e6a-8485-365ffb9d735a-1789059981440.webp
- Design on Kage: https://kage.design/designs/raycast-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers before writing any code. Apply everything below to their product, not to any reference site.

## Page structure
Build a single dark landing page, top to bottom:

1. **Fixed top nav** — near-black translucent bar: small logo left, six to nine quiet text links centred-right, `Log in` text link plus a white pill `Download` button on the right.
2. **Hero** — full-viewport, centred: one enormous two-line headline, a two-line grey subhead, one white pill CTA, a line of 12px legal/microcopy with an inline secondary install command, then one quiet text link with an arrow.
3. **Product showcase** — a large rounded screenshot of the product's core interface (window chrome with traffic-light dots), sitting on a radial brand-coloured glow; a 13px grey caption sits directly below it naming the feature shown.
4. **Manifesto interlude** — a short left-aligned bold statement plus one line of subcopy and a CTA; keep it sparse and let faint ghost graphics (e.g. oversized keycaps or glyphs) recede into the background at low opacity.
5. **Integrations/extensions strip** — a short intro, a segmented tab filter (4 categories), then a 3-up row of cards where each card is a different app rendered in its own brand colour as a full-bleed gradient with plausible UI content inside; close with a quiet `Browse more →` link.
6. **AI / flagship feature** — coloured eyebrow label, centred heading and subcopy, a second large product screenshot, a row of suggestion chips or prompt examples, then a 2-up card row of related sub-features, ending in a text-link CTA.
7. **Social proof** — centred heading, a horizontal avatar carousel of customer names and roles, then two labelled rows (`Favourite feature`, `Top extension`) with small icons, and one large pull-quote in the white-on-grey contrast style.
8. **Automation / secondary features** — heading plus a 2-up media card row: one wide card with a photographic/gradient visual, two smaller cards with icon plus keycap illustrations of keyboard shortcuts.
9. **Capability rundown** — a long mixed-weight paragraph where feature names are bold white inside grey body text, with one supporting card or screenshot beside it.
10. **Community** — heading plus subcopy, a 2-up row of community cards (each with logo, member/follower count metric, description, and a small CTA), then a horizontal row of video thumbnails with titles, and a text link to the video channel.
11. **Developer section** — bold left-aligned heading `Build with the platform`, then a bento grid (2–3 columns, varied cell heights) of cards combining wireframe-style isometric illustrations in a single accent blue with short titles, copy and `Read the docs →` / `Get started →` links.
12. **Transition render** — a full-width, purely visual section (e.g. a giant 3D render of the product's signature object) with no copy; let it act as a breather.
13. **Final CTA** — centred short heading, one line of subcopy, the white pill download CTA again, plus microcopy repeat.
14. **Mega footer** — six columns of small grey links grouped by category, a newsletter row with an inline email input and pill subscribe button, then a bottom legal row with copyright, locale, and social links.

## Design language
- **Canvas:** near-black page background `#0b0b0d` (sections may shift to `#101013`); all content lives on a centred ~1200px column with 120–160px vertical padding per section so each idea gets room.
- **Hierarchy:** centred hero and section headlines at 56–72px, weight 600–700, tracking −2%, pure white; grey subcopy at 16–18px `#9ca0a8`; tiny eyebrow labels at 11–12px, letterspaced, in the accent colour. Alternate rhythm: centred sections for spectacle, left-aligned interludes for statements — never two centred text sections in a row.
- **Accent colour:** a single brand gradient (e.g. `#FF6363 → #FF3617`) used only three ways: radial glows behind screenshots, eyebrow labels, and emphasised words inside body text. Everything else is white/grey on black.
- **Colour-coded cards:** for integration or app cards, let each third-party brand own the card — full-bleed gradient in that brand's hue with the product's UI content mocked inside. Cap these at one row so the page stays black-dominant overall.
- **Cards & surfaces:** surface `#17171a`, 1px border `rgba(255,255,255,0.08)`, radius 16–20px, very subtle inner top-light gradient; hover raises the card slightly and brightens the border. No heavy shadows — depth comes from glows behind media, not drop shadows.
- **Product screenshots:** render real-looking interface windows in dark chrome (rounded 12–16px, traffic-light dots, thin borders) floating on a blurred radial glow of the accent colour; captions in 13px grey directly underneath keep each showcase honest.
- **Type pairing:** one grotesk sans throughout (Inter/Geist class); hierarchy comes from size and weight only. Keycaps and shortcuts are drawn as small bordered squares with 12px labels — a signature motif to reuse.
- **Bento developer grid:** thin `rgba(255,255,255,0.08)` dividers, asymmetric cell sizes, illustrations as line-art/isometric wireframes in one blue `#3b82f6` so the grid reads as a system, not a sticker sheet.
- **Buttons & links:** primary action is a white pill with black text; secondary actions are always quiet grey text links ending in `→`; never use a coloured filled button.
- **Motion:** scroll-triggered fade-up on sections (8–12px, 300ms), slow-drifting glow behind hero media, gentle hover lift on cards; media-heavy, copy-light animation — nothing bounces.
- **Footer rhythm:** switch to maximum density: 12–13px grey type, tight line-height, six columns — the contrast with the airy page above makes the ending feel substantial.

## Never
- Never reuse the reference product's name, wordmark, logo, ray/asterisk icon, headline copy, testimonial quotes, customer names, or its red-orange gradient as-is — derive equivalents from the user's brand.
- Never copy its illustrations, 3D keyboard render, video thumbnails or icon set; draw your own in the same wireframe/single-accent style.
- Never present the result as the reference product or claim its features; the structure and design language are what transfer, not the content.
