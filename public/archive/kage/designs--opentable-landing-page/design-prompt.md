## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/opentable-com/dad68d84-d5d0-4fa5-a1c8-84465fc5fc04-1789146276379-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/opentable-com/dad68d84-d5d0-4fa5-a1c8-84465fc5fc04-1789146249598.webp
- Design on Kage: https://kage.design/designs/opentable-landing-page

## Before you start
Ask the user: what product or service are we building this page for, who is the primary audience (consumers, businesses, or both), and what brand assets do they already have (name, logo, brand colours, typeface)? Wait for the answers before writing any code. Everything below is a design language to apply to the user's product, not a clone of the reference.

## Page structure
1. **Utility top bar** — thin light-gray strip above the header with small text links (mobile app, for businesses, FAQs) and a language selector, all right-aligned; quiet and ignorable.
2. **Main header** — white bar: logo mark left with a location-picker dropdown beside it; right side has a secondary text link, a solid red sign-in button, and a search icon. One row, generous height, lots of white space.
3. **Search bar hero** — the real hero is a single pill-shaped white container (light border, soft shadow) holding in one row: date dropdown, time dropdown, party-size dropdown, free-text input for place/cuisine, and a solid red CTA button. Directly beneath it, a one-line confirmation message ('It looks like you're in [area]...') with a red corrective link and paper-plane icon — location trust handled inline.
4. **Available-now carousel** — section heading left with a 'View all' link right; horizontal row of ~5 photo cards. Every card repeats the same anatomy: photo (4:3), bookmark icon top-right, name, star rating + review count, a meta line 'cuisine • price tier • neighborhood', a 'booked N times today' social-proof line with icon, and an outlined red 'find next available' button. Round arrow button on the right edge.
5. **AI prompt banner** — full-width soft gradient panel (pale mint to pale peach) with a heading, one sub-line, 'powered by' microcopy, and 2×2 sample-question chips; one chip highlighted with a teal border. Text-only, no imagery.
6. **Awards / best-of section** — subheading, 'updated on' date, one explainer paragraph, and a tab bar (Overall / Food / Service) with red active underline. Asymmetric grid: one large featured card (photo, name, rating, long description, outlined button) on the left ~55%, and two compact thumbnail cards stacked on the right with short descriptions.
7. **Category carousel** (e.g. outdoor dining) — same card anatomy as section 4, horizontally scrollable.
8. **Review carousel** — heading + 'from verified diners' sub-line; three review cards: coloured circular avatar with initial, name, 'city • N reviews', red stars + dine date, short quote, 'More info' link, then a footer strip with the restaurant name, meta line, rating, and bookmark icon.
9. **Experiences carousel** — priced-experience cards: photo, title, venue + location line, price-per-person, and a text-link 'Reserve'.
10. **FAQ intro** — two-column editorial block: bold heading left, explanatory paragraph right.
11. **How it works** — four line-drawn illustrated icons in a row with short captions, then a tab bar (Discovery / Reservations / Availability / Rewards), then FAQ accordion rows with chevrons laid out in two columns.
12. **City directory** — heading + tab bar (most popular cities US / global), then a three-column grid of city rows, each a text label with a right-aligned chevron, separated by whitespace rather than card borders.
13. **B2B gradient banner** — full-width saturated gradient (orange → red → purple), white bold headline, one filled red button and one translucent white button, plus device mockups on the right.
14. **Suggest-a-venue line** — small centered text with an inline red link.
15. **Footer** — dark navy block: five columns of small links grouped under uppercase labels, a social-icon row, legal links row, copyright line, and a partner/brand logo row at the bottom.

## Design language
- **One accent only:** reserve a single saturated red (~#DA3743) for CTAs, active tab underlines, inline links, and star icons on an otherwise white page. If the user's brand colour differs, substitute it in every one of these slots.
- **Card system:** white cards, 1px light-gray borders (~#E5E7EB), 8–12px radius, no drop shadows. Consistent card anatomy (photo → title → rating → meta → action) so carousels of different content types read as one system.
- **Meta lines as rhythm:** use dot-separated 'category • price • location' microcopy lines (~13px, gray ~#65717D) under every card title — this carries more information than buttons or badges.
- **Type:** one humanist sans throughout. Section headings ~22–26px semibold in near-black (#2D333F); card titles ~16px semibold; body/meta 13–14px regular gray; footer links 13px. Never use more than two weights per line.
- **Rhythm down the page:** dense image card carousels at the top → soft pastel text-only gradient banner as a breather → editorial award grid → whitespace-heavy utility sections (FAQ, city links) → saturated gradient banner as a final chapter break → dark footer. Alternate density and colour temperature so the scroll has acts.
- **Gradient treatment:** gradients appear only in full-width feature panels, never in cards or buttons — pale pastels for AI/assist features, saturated multi-stop (orange→red→purple) for the business-facing banner.
- **Buttons:** solid filled accent for primary actions ('sign in', 'let's go'); thin outlined accent with white fill for per-card actions; translucent white for secondary actions on gradient. All pill or 6px radius.
- **Tabs & accordions:** horizontal tab bars with red active underline for switching data views; full-width accordion rows with right chevrons, arranged two per row.
- **Social proof:** always pair star ratings with counts ('4.9 (306)') and add recency proof ('booked 61 times today').
- **Motion:** horizontal carousels driven by a single circular arrow control at the row's edge; hover states are underline-on-link and subtle border darkening on cards; nothing animated beyond that.

## Never
- Never reproduce the OpenTable logo, wordmark, red-circle mark, or its 'Let's go' button copy.
- Never copy the reference's restaurant names, review text, FAQ copy, or city listings.
- Never use the reference's photography or its line-drawn icon illustrations — create placeholder imagery or ask the user for assets.
- Never show Booking Holdings partner logos or any footer brand marks from the reference.
- Never present the result as OpenTable or imply any affiliation.
