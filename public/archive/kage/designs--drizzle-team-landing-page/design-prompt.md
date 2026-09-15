## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073797-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073651988.webp
- Design on Kage: https://kage.design/designs/drizzle-team-landing-page

## Before you start
Ask the user:
- What product or team is this page for — an open-source org, a studio, or a company?
- Who is the audience (developers, sponsors, contributors, hiring)?
- What brand assets exist: name, logo, colours, typeface?
- Which projects or repos should be featured, and are there real stats (stars, forks, downloads) or time-series data to chart?
- Are there sponsors/backers with tiers, and which links belong in the footer?

Wait for the answers before writing any code. Everything below is applied to their product, not to the reference site.

## Page structure
1. **Top bar** — a cluster of small circular team avatars, a thin vertical divider, then three outline social icons; a single dark filled "Follow us" pill button pinned to the far right. One short, vertically centred row.
2. **Greeting** — a two-line, left-aligned heading with no hero image: first line in near-black ending in a friendly emoji, second line in mid-grey, large but plain.
3. **Projects grid** — an uppercase letter-spaced micro-label ("Open-source libraries"), then a 3-column grid of eleven bordered cards. Each card stacks: project name with a trailing "→", a one-line grey description, a metrics row of outline star/fork icons with abbreviated counts, and a black sparkline with soft grey fill anchored to the bottom-right of the card. The last row holds two cards, leaving the third cell empty.
4. **Sponsors panel** — an uppercase label row with a blue "Become a sponsor →" link pushed to the right edge, then a full-width light-grey panel split into three tiers: one large hero-sponsor tile (big logo + name), a gold tier of medium white logo tiles in a 4-column grid, and a narrower silver strip of smaller tiles (2–3 columns, may scroll). Same tile anatomy at three scales.
5. **Footer** — a top hairline, then three loose columns: product/docs links, community links, and a heart-emoji "Become a sponsor" link. Small grey text, generous whitespace.

## Design language
- **Hierarchy through labels, not decoration.** Sections open with tiny uppercase micro-labels (~11px, ~0.08em letter-spacing) in grey; the only large type is the two-line greeting. The label→content pairing carries the whole structure.
- **Data as visual texture.** Every project card earns its space with a sparkline: a thin black polyline over a soft grey area fill, cropped into the card's lower half. Use it whenever the user has time-series data (stars, downloads, usage); without data, fall back to name + description + one metric row.
- **Metrics stay compact.** Icon + abbreviated number ("35.7k", "10.34m") at ~12–13px, black on grey. Numbers never outrank titles in the type scale.
- **The card is the unit.** 1px light-grey border (#e5e7eb), ~6px radius, white fill, no shadow, 16–20px padding. Hover darkens the border and nudges the arrow; nothing more.
- **Rhythm shifts down the page.** Dense white card grid (tight ~24px gutters) → a heavy full-width light-grey sponsor block (#f5f5f5) that inverts the background and slows the pace → a sparse footer. Repeat this dense→inverted→sparse arc instead of stacking identical sections.
- **Near-monochrome palette.** Page white #ffffff; text near-black #171717; secondary grey #6b7280; borders #e5e7eb; panel #f5f5f5; one dark filled button #111827 with white text. A single accent blue (#2563eb) is reserved for action links like "Become a sponsor" — swap in the user's accent colour only in that slot.
- **One neutral typeface, tight scale.** Greeting ~34–40px, card titles ~18px, descriptions ~14px, metrics/labels ~12–13px, micro-labels ~11px uppercase. Secondary grey does the softening instead of lighter weights.
- **Sponsor tiers communicate by size, not ornament.** Hero = one large tile; gold = medium tiles, 4 across; silver = small tiles in a narrow strip. White tiles, 1px border, logo + small grey name, consistent across all tiers.
- **Restrained motion.** No entrance animations; hover affordances (border, underline, button darken) and the sparklines provide all the life the page needs.
- **Footer as a quiet directory.** Hairline rule, plain text links grouped by audience (product, community, support), no newsletter form or legal wall unless requested.

## Never
- Do not reuse the Drizzle name, its project names (Drizzle ORM, Drizzle Kit, Drizzle Seed, Tento, Hanji, Brocli, Waddler, etc.), avatars, or any copy from the reference.
- Do not reproduce sponsor logos (Railway, Clerk, Sentry, Neon, Replit, etc.) or the exact tier layout; use the user's actual sponsors or clearly labelled placeholders.
- Do not copy the sparkline shapes or fabricate exact GitHub statistics; use clearly placeholder data when none exists.
- Do not present the result as the Drizzle Team's site or imply any affiliation with it.
