## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/venmo-com/e421e2ca-b11c-49c9-b106-d3994196da77-1789146468321-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/venmo-com/e421e2ca-b11c-49c9-b106-d3994196da77-1789146464021.webp
- Design on Kage: https://kage.design/designs/venmo-landing-page

## Before you start

Ask the user what product they are building, who it is for (consumers, businesses, or both), and what brand assets they already have (name, logo, brand colours, typeface). Wait for their answers before writing any code. Every rule below is applied to *their* product and brand — the reference page is only the design language.

## Page structure

Build a single long scrolling landing page with these sections, top to bottom:

1. **Top navigation (white bar):** product wordmark left; three dropdown nav items centre-left; right side has a help link, a "Log in" link, a solid black pill "Sign up" button, and a hamburger icon for the full menu. Thin, ~64–72px tall, no border.
2. **Hero (rounded colour panel inset from the page edges):** a large sky-blue container with big corner radius holding a centred display headline, a one-line sub-headline, and a tiny asterisked legal note underneath. Below the copy, a wide rounded lifestyle photo or autoplaying muted video (16:9-ish) with a floating QR-code chip on its right edge and a pause control bottom-right.
3. **Scroll interstitial #1:** a tall, near-empty white section with one oversized statement headline rendered as ghost/low-opacity text that fills in on scroll. Pure pacing device — no CTA.
4. **Section intro:** centred heading announcing the product-feature group (e.g. "More ways to pay" style).
5. **Feature row A:** two-column band — left column has a huge single-word bold headline, 2–3 lines of benefit copy with superscript footnote markers, and a solid black pill CTA; right column is a tall rounded media panel (screenshot, card visual, or illustration). Roughly 120–160px vertical padding between rows.
6. **Feature row B:** identical skeleton to row A with new copy and CTA — repetition is the point.
7. **Feature row C:** same skeleton a third time.
8. **Rewards band (full-bleed saturated colour):** centred white headline, white sub-copy, a small-print eligibility paragraph, and a white pill CTA. Below, a wide rounded collage mixing an app-UI card (gauge/meter with a big dollar figure) and photography of the physical product.
9. **Scroll interstitial #2:** second ghosted oversized statement headline on white.
10. **Business/seller section:** centred heading, one-sentence sub-copy, white pill CTA, then a full-width rounded card filled with a warm gradient containing a playful UI mock-up of the product in use (names, avatars, social reactions).
11. **App-download band (full-bleed second colour):** massive display headline, a centred QR code, and a tall phone mock-up showing the product's feed; play control if animated.
12. **Footer (white, dense):** wordmark; two stacked rows of text links; a right-aligned row of legal links; then a long block of fine-print disclosures — numbered footnotes matching the superscripts used in the body copy, regulatory paragraphs, and copyright. Visually dense is correct here.

## Design language

- **One idea per band:** alternate generous white sections with full-bleed saturated colour bands; never put two messages in one band. Colour bands are the page's chapter markers.
- **Colour treatment:** white canvas `#FFFFFF`; brand blue ~`#008CFF`; hero and app bands use a lighter sky blue ~`#4FA8F5`; rewards band a vivid indigo ~`#3B3FF2`; feature card a warm gradient `#F26522 → #FFC845`; text and primary CTAs near-black `#111111`. On coloured bands, text and buttons flip to white. Black-on-white and white-on-colour are the only two CTA treatments — no outlined or tinted buttons.
- **Type scale:** one bold grotesque throughout (pair with the brand's own typeface if they have one). Display headlines 64–96px with tight tracking (~-2%); section intros 40–48px; feature-row word-headlines ~40–44px; body 16–18px with comfortable line height; legal/footnote text 11–12px.
- **Buttons:** fully rounded pills, ~44–48px tall with 20–24px horizontal padding. Never squared corners on CTAs.
- **Radius and edges:** media panels and collages 16–24px radius; the hero is a large rounded container inset ~16–24px from the viewport edges; full-bleed bands have no radius. No drop shadows — flat colour, separation via colour contrast and spacing only.
- **Rhythm down the page:** the top is sparse and centred; the middle repeats a strict two-column feature skeleton three times so each product gets equal weight; ghosted scroll interstitials act as breathing pauses between colour bands; density only rises in the footer.
- **Media:** everything visual sits inside a large rounded container — lifestyle photography, device mock-ups, and UI collages all framed the same way. QR codes float as small white chips overlapping media edges.
- **Compliance pattern:** use superscript numbers inline in marketing copy and map them to numbered footnotes in the footer; put a short asterisked disclaimer line directly under hero sub-copy. This makes marketing claims feel trustworthy without cluttering the headline.
- **Motion:** scroll-triggered reveals for the oversized interstitial headlines; muted autoplaying hero video with a visible pause control; everything else calm, no parallax.

## Never

- No Venmo logo, wordmark, blue-on-white italic wordmark styling, or the name "Venmo" anywhere.
- No Venmo copy, taglines, reward percentages, or the exact payment-feed card designs.
- No Venmo photography, illustration style, icon sets, or their QR-code placement verbatim.
- Never present the result as Venmo or imply affiliation — rebuild the language around the user's own brand.
