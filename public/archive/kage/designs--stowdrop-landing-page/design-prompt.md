## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060064840.webp
- Design on Kage: https://kage.design/designs/stowdrop-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, colors, type). Wait for the answers before writing any code. Everything below is applied to their product, not to the reference site.

## Page structure
1. Sticky top nav: small logo mark left, centered text links (features, library, keyboard, compare, blog, changelog, pricing), orange pill CTA right, all on a near-black bar with a hairline bottom border.
2. Product Hunt ribbon strip directly under nav: small badges and short quotes in a single scrolling row, muted text on black.
3. Hero: eyebrow line in orange, then a very large centered headline across three lines where the last word is the accent color, one short muted paragraph, an orange CTA button, and a line of small muted microcopy under it. A soft radial glow sits behind the text.
4. Full-width app screenshot band: a realistic macOS window of the product's library view with tabs, filter pills, a sidebar and stacked rows, floating above the page background with a subtle shadow; small copy rows sit below it.
5. Testimonial strip: two rows of small dark cards each with a short quote, name and avatar, arranged in a loose grid with varied widths.
6. Feature intro section: small orange eyebrow, big left-aligned headline with the final word in accent color, supporting paragraph right, then a two-card bento row explaining the two capture methods with small UI mockups inside each card.
7. Workflow section: headline left, paragraph right, then a full-width diagram panel showing the capture pipeline (Drop, Read, Extract) flowing into a library, drawn as connected dark nodes with orange connector lines.
8. Library showcase: a two-column bento of feature cards — full-text search mockup, grouped-by-day list, day-tally card with a photo, one-key capture card, markdown capture card — each with its own small orange eyebrow label, headline, paragraph and embedded UI mockup or media tile.
9. Full-bleed media moment: large illustrated artwork in a rounded frame with a caption underneath, breaking the UI screenshots with pure imagery.
10. Privacy section: headline plus numbered/bulleted statements (local library, no account, no server) on the left, big stat numbers on the right (like 11.3 ms, 0.3 ms, <50 ms) with muted labels, hairline rules between items.
11. Text-handling section: headline and paragraph left, right column holds a small mock UI plus a 2x2 grid of small feature tiles each with icon, title and body.
12. Cross-device section: headline left, then a row of small cards (clip to nest, local first, import bookmarks, export everything) each with icon and short copy.
13. Pricing: orange eyebrow, big headline 'Pay once. Then never again.', then two pricing cards side by side (Desk and Bench) with prices in huge type, feature checklists, and one card highlighted with an orange CTA while the other is a plain outline card; microcopy sits under the row.
14. Keyboard section: headline, then a dense two-column table of shortcuts, each row pairing a description with keyboard keycaps rendered as small dark chips.
15. FAQ: centered headline, then a narrow single-column accordion list of about ten questions with chevrons and hairline dividers.
16. Final CTA: centered logo mark, big two-line headline, short muted paragraph, orange CTA plus secondary text link, all inside a subtle glow.
17. Footer: multi-column link groups with a small logo, short description and copyright line at the bottom.

## Design language
- Work on a near-black base (approx #0a0a0a to #111) with card surfaces slightly lighter (approx #161616 to #1c1c1c) and hairline borders (approx #2a2a2a) instead of heavy outlines; almost no shadows except under floating app windows.
- Use exactly one accent color (a warm orange, approx #f97316 / #ff7a1a) for eyebrows, one keyword per headline, pill buttons, toggle states, connector lines and small icons; everything else stays white, light gray (#9ca3af) or muted gray (#6b7280).
- Headlines: large sans-serif (Inter or similar), weight 600-700, tight tracking (-0.02em to -0.04em), line-height around 1.05-1.15, sized from clamp(2.5rem) up to 4-5rem on the hero; use one orange word per headline as the emotional peak, never more.
- Body copy: 0.9-1rem, muted gray, max-width around 40-55ch, line-height 1.6-1.7; keep paragraphs short, two or three sentences.
- Eyebrow labels: small (0.7rem), uppercase or capitalized, orange, with generous letter spacing; always pair an eyebrow with a headline.
- Rhythm: alternate section layouts — centered hero, full-width media, left-text/right-cards, bento grids, stats row, table, accordion — so no two adjacent sections share the same grid; use generous vertical padding (100-140px) between sections and tighter padding inside cards (20-32px).
- Cards: rounded corners (12-16px), 1px hairline border, same-color or very slightly lighter fill, no drop shadows; inner mockups are smaller versions of real product UI with realistic chrome (tabs, pills, rows).
- Bento grids: mix card widths and heights deliberately, put a UI mockup or media tile inside most cards, and let one card in each grid carry a photographic or illustrative tile for contrast.
- Buttons: solid orange pill with dark text, radius 999px or 8px, no gradient; secondary actions are plain text links with an arrow or a ghost outline button.
- Keycaps/shortcuts: render as small dark chips with 1px border, 4-6px radius, monospace or tabular text.
- Motion: keep it subtle — soft radial glows behind heroes, gentle hover lift or border-brighten on cards, no large parallax; app screenshots float on shadow, never embedded in fake device frames.
- Stats and numbers: set in very large light-weight type with tiny muted uppercase labels beneath, separated by hairline rules, forming a quiet horizontal band.
- Footer and small text: 0.8rem, gray, high density, multi-column link layout on the same dark base with no separate footer background.

## Never
- Do not use the reference product's name, logo, wordmark, mascot, Product Hunt badges, testimonial quotes or screenshots in your output.
- Do not copy the reference copy text, FAQ questions, pricing numbers or feature names verbatim; write copy specific to the user's product.
- Do not reuse the exact illustration or photography from the reference; if media tiles are needed, use the user's own assets or neutral placeholders.
- Do not present the result as the reference product or imply any affiliation with it.
