## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/goodreads-com/0ed04b7a-0db2-4e11-9788-e963511428af-1789146302680-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/goodreads-com/0ed04b7a-0db2-4e11-9788-e963511428af-1789146295884.webp
- Design on Kage: https://kage.design/designs/goodreads-landing-page

## Before you start

Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, any illustration style). Wait for their answers before writing any code. Everything below is a design language to apply to *their* product, not a clone of the reference site.

## Page structure

Build a logged-out marketing/home page for a content-discovery community, top to bottom:

1. **Slim header** — cream bar with a serif wordmark on the left and generous horizontal padding; nothing else. Optionally a right-aligned sign-in link.
2. **Hero band** — full-width saturated gradient block (orange → warm yellow). Center a large serif headline (2 lines, one word italic for emphasis) with a single dark pill-shaped CTA button beneath. Place flat, limited-palette vector illustrations of people enjoying the product at the far left and right edges of the band.
3. **Signup card** — a white rounded card that overlaps the hero's right side and hangs below it (position it absolutely/floating, not inline). Inside: a bold heading, three stacked auth buttons (filled brand-yellow primary, white outlined secondary with brand-app icon, solid dark tertiary), tiny legal text with inline links, a divider, and an 'Already a member? Sign in' line with a teal link.
4. **Two-column intro** — two short editorial blocks side by side, each a bold sans-serif question as a heading and 2–3 sentences of plain body text explaining the product's value.
5. **Discovery showcase panel** — a cream panel on the left two-thirds with repeating rows: 'Because [member] liked…' a strip of 4 item thumbnails, an arrow, then 'She discovered:' a single highlighted thumbnail plus a labelled genre/category chip. This demonstrates the recommendation mechanic visually.
6. **Right rail** — beside the showcase, a stacked rail: a news/editorial card (teal headline link + image collage + like count), a 'lists' module with three rows (list title, item and vote counts in small grey text, a mini strip of thumbnails), and a partner/creator CTA block with two small secondary buttons.
7. **Search & browse directory** — a labelled search input with a magnifier icon on the right, followed by a 4-column grid of teal text links covering every category (aim for 25–30 links).
8. **Quotes/editorial highlight** — a circular avatar image, a serif pull-quote with an em-dash attribution line, and an adjacent column of 8–10 teal category links for more of the same content type.
9. **Awards/recognition section** — heading in bold sans, a badge-style graphic or illustrated emblem on the left, and two columns of teal links naming award categories.
10. **Footer** — light band with three uppercase-column link groups (company, work with us, connect with social icons), mobile app store badges on the right, and a copyright + corporate-affiliation line at the bottom right.

## Design language

- **Warm paper palette**: page background is cream `#FAF7F0`, body text dark brown `#382110`, every navigational link dark teal `#00635D`. Reserve saturated colour for the hero gradient (`#E9822B → #F8B62D`) and the primary auth button (`#F6D87C` yellow with brown text). Secondary surfaces (showcase panel, footer) sit one step warmer/neutral so content blocks read as layers on paper.
- **Type pairing and scale**: a serif display face (Merriweather/Georgia-like) for the wordmark, hero headline and pull-quotes; a humanist sans-serif for everything else. Scale: hero ~56px serif with a single italic emphasis word, section headings ~20px bold sans, body 14–15px, link directories and metadata 12–13px. Line-height generous (1.5+) in body, tight (1.15) in the hero.
- **Hierarchy through density control**: the hero is loud and saturated; everything below returns to flat cream and gets progressively denser — airy two-column prose, then media panels, then tight link grids. The right rail stays scannable with small grey counts under bold titles, letting users skim long lists.
- **Buttons**: fully pill-shaped (border-radius 9999px). Primary = filled yellow, secondary = white with 1px border, tertiary = solid near-black `#1A1A1A` with white text. Small utility buttons are light grey `#F4F1EA` with subtle borders.
- **Cards and borders**: 8–10px radius on cards, 4px on inputs and small buttons. Borders are hairline `#DDD6C8`; shadows are soft and rare (only on the floating signup card, e.g. `0 2px 12px rgba(0,0,0,0.12)`).
- **Links as the interface**: navigation, categories, awards and footer items are all plain text links in teal with no underline; hover darkens the colour. This keeps dense directories quiet — colour signals 'clickable', weight signals 'heading'.
- **Imagery rules**: flat vector illustration with a restricted warm palette for the hero only; real user-generated imagery (in this language: thumbnails of the content itself) is used in strips and collages inside cards, cropped small and never full-bleed.
- **Motion**: minimal. Hover states darken buttons and links, no large animations; the page's energy comes from colour and imagery, not movement.

## Never

- Do not use the Goodreads name, wordmark, logo, choice-awards badge or any of its illustrations, photography or book covers.
- Do not copy its copy, headlines, quotes (including any celebrity quote), category names or lists verbatim.
- Do not present the result as Goodreads or imply affiliation with Amazon or Apple; use the user's own brand throughout.
