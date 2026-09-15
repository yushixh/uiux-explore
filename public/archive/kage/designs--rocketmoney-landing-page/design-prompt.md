## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/rocketmoney-com/33d2822e-a753-4b7c-bf3f-3f514d417ce5-1789146528240-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/rocketmoney-com/33d2822e-a753-4b7c-bf3f-3f514d417ce5-1789146522630.webp
- Design on Kage: https://kage.design/designs/rocketmoney-landing-page

## Before you start
Ask the user: what product are you building, who is it for (consumers or businesses), what action is the page optimizing for (signup, download, trial), and what brand assets do they already have (name, logo, colours, typeface)? Wait for the answers before writing code. Everything below is a design language to apply to *their* product — never reproduce the reference site's branding, copy or imagery.

## Page structure
1. **Top nav** — logo mark left, 3–4 text links centre-left, a text link (Log in) and one black pill CTA (Sign up) right. No border; the page background continues underneath.
2. **Hero panel** — a full-width light-gray rounded panel (~28px radius, inset from viewport edges) split roughly 40/60: left column has a 3-line display headline, a 3-sentence body paragraph in muted gray, and one black pill CTA; right column holds a realistic phone mockup showing the product's dashboard UI, with a small floating QR-code card pinned to its lower-right corner.
3. **Social proof arc** — a centred headline ("Join 10 million+ members" pattern) ringed by 7–8 tilted, polaroid-style lifestyle photos scattered in an arc; below it an all-caps "FEATURED IN" eyebrow and a single row of 5 monochrome press/publication logos.
4. **Feature story A (image left / text right)** — lifestyle photo with a floating white card listing recurring subscriptions with prices; right column: heading, 2-sentence copy, outlined pill CTA.
5. **Feature story B (text left / image right)** — mirrored layout: copy about daily spending on the left; photo with two stacked floating notification cards (budget status, balance alert) on the right.
6. **Feature story C (image left / text right)** — photo with a floating savings-goals card showing two goal rows with red progress bars and a "+ New Goal" pill; copy about automated saving on the right with an outlined pill CTA.
7. **Premium comparison panel** — light-gray rounded container: centred two-line heading plus a 3-line paragraph, then two side-by-side white cards under the labels "without Premium" / "with Premium". The left card is a plain stacked feature list (bold title + short paragraph ×4); the right card uses small red line icons beside each item separated by thin divider rules.
8. **Explore features grid** — centred two-line heading, then a 2×2 grid: each cell has a small red line icon in a light circle, a bold heading, 2 sentences of copy, and an underlined text link. No cards, no borders — pure whitespace separation.
9. **Testimonials panel** — light-gray rounded container: left third has a big heading, a one-line promise, a row of 5 large red stars and a tiny legal footnote; right two-thirds is a masonry grid of 5–6 white review cards, each with a quote, first name + initial, and a 5-star row.
10. **Footer (black)** — brand column left with 5–6 sister-product names each with a one-line description; four link columns (Features, Compare, About, Support) right; below, social icons, App Store / Google Play badges and a QR code; then a long block of small legal fine print, disclaimers and copyright.

## Design language
- **Palette**: white page background `#FFFFFF`; light-gray section panels `#F2F2F3` with large radius (~24–32px) inset from the viewport; near-black text `#111111`; muted body gray `#4A4A4A`; one saturated crimson accent `#E01B32` used sparingly — icons, stars, progress bars, the app header in the mockup, and footer highlights. No gradients.
- **Type**: one geometric rounded sans throughout. Scale: hero ≈64–72px/1.05 bold with tight tracking → section headings ≈40–48px → card titles 18–20px semibold → body 16–17px/1.6 → eyebrows 11px uppercase with +0.08em letter-spacing. Headlines always near-black; body always the muted gray.
- **Hierarchy per section**: heading → ≤3 sentences of copy → exactly one CTA. Never stack two competing CTAs in a section.
- **CTA weight decays down the page**: solid black pill (hero) → outlined 1px black pill (feature blocks) → underlined text link (feature grid). Pills are fully rounded (~999px) with 12px×24px padding.
- **Rhythm**: alternate white sections with gray rounded panels (hero, comparison, testimonials) so the page breathes in ~3-panel acts. Alternating image/text sides on consecutive feature blocks. Section padding ~96–120px vertical; content max-width ~1200px, centred.
- **Imagery**: warm, candid lifestyle photography (people, not product shots) with 16–24px corner radius; UI proof shown as floating white cards — 12–16px radius, soft large shadow (`0 20px 50px rgba(0,0,0,0.12)`), slightly overlapping the photo edge. Polaroid treatment (white border, slight rotation, subtle shadow) for the social-proof photo arc.
- **Device mockups**: one hero phone frame with dark bezel and a real-looking app screen (stat headline, chart, list rows); QR/download card floats over its corner.
- **Comparison pattern**: two labelled columns — the lesser option as plain text, the premium option elevated with icons and divider rules; no pricing numbers, benefit-led copy only.
- **Motion**: restrained — gentle float/parallax on floating cards, button hover darkens the fill, links get underline offset on hover. No bouncy or decorative animation.
- **Footer**: invert to black `#111`, white/gray small type, dense multi-column grid, and a genuinely long fine-print block — it reads as compliance, not design.

## Never
- Do not use the Rocket Money name, logo, rocket mark, wordmark, or their exact red/crimson brand combination as-is.
- Do not copy their headlines, body copy, review quotes, reviewer names, or press/publication logos.
- Do not reuse their photography, illustrations, app screenshots or QR codes.
- Do not present the result as Rocket Money or imply any affiliation with Rocket Companies; apply the design language to the user's own brand.
