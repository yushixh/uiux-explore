## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/outbid-lol/7d6cde02-1b78-43c8-adde-d87a2555099d-1789139288987-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/outbid-lol/7d6cde02-1b78-43c8-adde-d87a2555099d-1789139287563.webp
- Design on Kage: https://kage.design/designs/outbid-lol-landing-page

## Before you start
Before writing any code, ask the user: what product or site are you building, who is the audience, and what brand assets already exist (name, logo, colours, typeface)? Wait for the answers. Everything below describes a design language to apply to *their* product — do not recreate the reference site itself.

## Page structure
1. **Sticky top bar** — wordmark left; a live-status pill next to it (green pulse dot + two counters + small 'stats' link); right-aligned text nav (four items), a search icon and a theme toggle. Slim, single row, hairline bottom border.
2. **Category pill bar** — one row of fully-rounded filter pills (All, then 7–8 categories, then an 'Explore' link). Active pill = soft orange tint, rest = light gray, each with a small icon.
3. **Hero / claim bar** — a centred pair of scope pills (All-time active in orange, Today in dark charcoal), then an oversized headline 'Claim #1 for' followed by a live dollar figure in gradient orange flanked by tiny up/down steppers, then one action row: URL-or-handle text input, a category select, and an orange claim button. The whole pitch, price and form fit in one viewport-height band.
4. **Main two-column zone** — wide ranked feed on the left (~70%), sticky sidebar on the right (~30%).
5. **Ranked feed, rows #1–#10** — each row: big tabular rank numeral, rounded-square app logo, bold one-line title, one-line truncated description, then a 12px meta row (category chip with icon · age · domain · click count · 'see details' link), and a right-aligned orange bid price. The top three rows sit on a pale peach tint with darker numerals; #4 onward are white with hairline dividers.
6. **Live-activity strip (after row #10)** — five small inline cards showing recent events, breaking the feed's rhythm and proving the page is alive.
7. **Feed continues, rows #11–#20**, then a centred **'TOP 20' pill divider** on a hairline — a visual reset between the elite table and the long tail.
8. **Rows #21–#50** — identical anatomy but visually quieter (prices dimmer, same density), ending in centred numbered pagination (active page in an orange circle, ellipsis, arrows) and a '1 – 50 of N' result count.
9. **Sidebar — 'Today's ranking'** — header row with a green live dot and a 'See all' link, then ten compact rows: small logo, single-line name, right-aligned orange price.
10. **Stats band** — centred intro sentence, then three side-by-side stat cards (visitors with green dot, revenue in orange, products added), each a white rounded card with soft shadow on a faint warm-tinted band.
11. **Footer** — centred credit lines with linked handles, a row of small legal/utility links, and a small 'featured on' badge.

## Design language
- **One accent does all the work.** Pick a single saturated accent (here ~#ff5a1f hot orange) and reserve it exclusively for money, rank and action: bid prices, active pills, active pagination, the primary CTA, live dots may use green. Everything else is near-monochrome, so scanning the feed means finding the accent instantly.
- **Neutrals:** white page #ffffff; near-black text #16181d; secondary gray #6b7280 for meta; hairline dividers #ececec; soft page-tint band #faf6f4 behind the stats section.
- **Status tints, not borders:** highlight the top three results with a pale peach wash (~#fdeee6) instead of heavier borders or shadows — position is communicated by background, nothing else.
- **Dark counterpoint:** one dark charcoal pill (~#1f2430) for the secondary time-scope toggle so the two scopes are instantly distinguishable from the orange active state.
- **Type:** one geometric sans throughout (Inter / Plus Jakarta Sans family feel). Hero headline 48–64px semibold; row titles 15–16px semibold; prices semibold and slightly larger than titles; all meta text 12px; rank numerals tabular so columns of digits align.
- **Shape system:** fully-rounded pills for every control and filter; 12–16px radius on cards and logos (rounded squares for avatars); no sharp corners anywhere.
- **Borders & shadows:** hairline 1px borders and very soft, low-offset shadows on cards only; the list itself is separated by hairlines, not boxes.
- **Density rhythm:** hero is airy and centred; the feed is dense (~80px rows, one-line descriptions, comma-separated meta); sidebar is tighter still. Emphasis decays down the page — tinted top 3 → white rows → activity strip interruption → divider pill → dimmer tail → pagination. Use structural interruptions (activity strip, divider pill) to break monotony instead of changing the row design.
- **Data as decoration:** live visitor counts, click counts and bid amounts are the visual richness — surface real numbers everywhere rather than illustrations.
- **Motion:** pulsing green live dots, a subtle gradient/shimmer on the hero price, gentle hover lift or tint on rows, 120–150ms transitions only. No large scroll animations.
- **Interaction affordances:** every row is scannable but ends in a quiet 'see details' link; filters and pagination are the only chrome-heavy controls.

## Never
- Do not use the name 'outbid.lol', its wordmark, logo, mascot or the 'featured on' badge in the output.
- Do not copy any of the listed product entries, their names, logos, descriptions or exact dollar amounts.
- Do not copy headline copy, footer credits or legal link labels verbatim — write copy for the user's own product.
- Never present the result as the reference product; it is the user's product wearing this design language.
