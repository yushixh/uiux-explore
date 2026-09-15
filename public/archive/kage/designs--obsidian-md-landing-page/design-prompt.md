## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060135707.webp
- Design on Kage: https://kage.design/designs/obsidian-md-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers. Everything below is applied to their product and brand, not to the reference site.

## Page structure
1. **Top nav** — slim dark bar: logo left, 5 text links (Download, Pricing, Sync, Publish, Enterprise), then language selector, Community and Account on the right. Quiet, hairline-separated, no background change on scroll.
2. **Hero** — left-aligned block on the bare background: a two-line display headline ending in a period, a one-sentence gray subhead, then a solid purple primary button plus a plain text link beside it. No illustration here; the space is earned by the composite below.
3. **Hero product composite** — a full desktop app window (sidebar, editor with headings and a blockquote, second pane with a node-graph canvas) with a phone mock overlapping its right edge showing a mobile note. Built as real DOM UI, not a stock image.
4. **Value-claim split** — two columns: left is a vertical stack of three bold one-line claims, each followed by two lines of gray supporting text, separated by hairline rules; right is a centered lockup of the app icon in a rounded tile, wordmark, "Free without limits." and an accent text link.
5. **"Spark ideas." feature bento** — centered section head plus two-line subhead, then a 2×2 grid of dark cards. Each card: title, 2–3 lines of body with an inline underlined link, and a bottom UI vignette (link-autocomplete popup, node graph, canvas board with cards and images, plugin list with working-looking toggles).
6. **Sync section** — left column: 48px head, gray body with inline link, then three icon+bold-lead feature lines, the middle one wrapped in a slightly lighter card; right column: a panel framed in a purple gradient containing a light UI mock (invite-by-email input, member rows with colored avatars and permission labels).
7. **Publish section** — left-aligned head and body, then a three-column row of small purple line icons with bold titles and short gray copy, then a full-width wide mock of a documentation site (sidebar tree, article content with numbered steps, an "interactive graph" panel on the right). One centered caption line under it.
8. **Closing CTA** — centered 48px headline ending in a period with one solid purple button beneath.
9. **Community cards** — three equal cards in a row (Discord, forum, developer docs), each with bold title and two lines of gray copy.
10. **Footer** — five columns of small gray links (Get started, Learn, Community, product pages, Resources), a left block with logo, social links and language selector, copyright line at the bottom.

## Design language
- **Ground and layers:** near-black page background (#0d0d10–#121216). Depth is expressed by lightness steps, not shadows: cards #1a1a1f, nested UI panels #232329, hairline borders rgba(255,255,255,0.08). Radius 12–16px on cards, 8–10px on buttons and inputs. No drop shadows anywhere.
- **Accent discipline:** exactly one purple (#8b5cf6 for solid buttons, #a486fb for inline links and small icons). Links are underlined in accent inside gray body copy. The purple is allowed to bloom exactly once — a soft gradient frame (#b7a5f7 → #7c5cff) around the most important feature mock. Everything else stays monochrome dark.
- **Type:** a single humanist sans throughout. Scale carries hierarchy: display ~72px/1.1 for the hero, ~48px for section heads, 18px semibold for card titles, 15–16px/1.6 body in #b9bdc7. Headlines end with a period and use no colour; bold white does the shouting, purple only marks actions.
- **Rhythm down the page:** alignment alternates per section — left hero, split claim stack, centered grid, text-left/mock-right, heading-left with columns below, centered finale — so no two adjacent sections share a layout. Give every section 120–160px vertical padding; mockups are dense, the whitespace between sections is generous.
- **UI vignettes as imagery:** represent the product with believable in-page mocks — sidebars with 12px gray rows, active states highlighted, list rows with avatars and metadata, functional-looking toggles (on = purple, off = gray), dot-and-line graph canvases, numbered step lists. Keep mock text plausible and small (12–14px) so the card reads as a screenshot at a glance.
- **Buttons and controls:** one solid accent button style per screen region; secondary actions are plain accent text links, never outlined buttons. Small 16px line icons in accent or gray, always paired with a bold lead-in phrase.
- **Density modulation:** copy is always short (1–3 lines); information density lives inside mockups and the footer, never in marketing copy.
- **Motion:** restrained — link underlines, slight button lightening on hover; no parallax, no entrance choreography visible.

## Never
- No Obsidian logo, gem/crystal mark, wordmark, or any Obsidian product copy ("Sharpen your thinking.", "Spark ideas.", "Sync securely.", "Publish instantly.", "It's your time to shine.").
- No reuse of the reference's note contents, plugin names, people names, docs text, or help-site screenshots.
- Never present the result as Obsidian or imply affiliation; apply the design language to the user's own brand and content.
