## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/resend-com/a5fe426a-0829-45e6-9969-dd938a799528-1789137406155-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/resend-com/a5fe426a-0829-45e6-9969-dd938a799528-1789059992654.webp
- Design on Kage: https://kage.design/designs/resend-empty-state

## Before you start

Ask the user what product or page they are building, who the primary audience is, and what brand assets they already have (name, logo, colours, typefaces). Wait for their answers before writing any code. Everything below is a design language to apply to *their* product — not a template of the reference site.

## Page structure

Build a long dark landing page with the following sections, top to bottom:

1. **Top navigation** — slim sticky dark bar: wordmark left, ~6 plain text links centre, "Log in" text link plus a white pill CTA right.
2. **Hero** — small rounded announcement pill, then a two-line serif display headline (~80–96px) over a faint metallic light sweep on near-black; two short sentences of muted subcopy; one white pill primary button and one quiet bordered secondary button. Very generous empty space.
3. **Logo wall** — centred two-line trust sentence, then two rows of ~6 monochrome logos at reduced opacity, followed by a small "Explore →" text link.
4. **Integration chapter** — glossy 3D product icon centred above a heading where one phrase is italic in the accent colour; one-sentence subcopy; a horizontal row of 12–13 small technology icons with tiny labels; then a large tabbed code window (7–9 tabs, syntax-highlighted sample of ~15–20 lines, footer row with two small links).
5. **Developer experience** — left-aligned serif heading and a short paragraph, then two wide bordered cards side by side. Each card contains a realistic product mock (e.g. status pills, timestamps, response lines), and below it a small icon, a title, a two-sentence description, and a "Learn more" link.
6. **Editor chapter** — 3D icon, centred heading, subcopy, then a full-width screenshot of the editor (dark chrome, bright canvas inside).
7. **Extended features** — left-aligned heading + paragraph, two bordered cards with supporting visuals, same icon/title/description/Learn-more anatomy as section 5.
8. **Framework chapter** — 3D icon, centred heading, subcopy, two CTAs, then a split window: code on the left, live rendered result on the right.
9. **Capability grid** — left-aligned serif heading over a 3×3 grid of nine features, each with a small line icon, bold short title, and 2–3 line muted description with inline underlined keywords.
10. **Anchor testimonial** — centred single quote from one notable customer with avatar, name, and role.
11. **Control chapter** — 3D icon, centred heading and subcopy, three selectable tab pills, and a very large dashboard screenshot below.
12. **Testimonial wall** — centred heading, three bordered quote cards in one row, each with avatar, name, and role.
13. **Closing CTA** — huge serif two-line statement with the second line italic, one pill button.
14. **Footer** — left column with postal address, social icons, and a green "All systems operational" status dot; right side five link columns with muted text.

## Design language

- **Canvas and surfaces**: near-black background `#0a0a0a`; card fills `#101012`; 1px borders at `rgba(255,255,255,0.08)`; border-radius 12–16px everywhere. No drop shadows — depth comes from glossy 3D section icons and faint radial light sweeps behind heroes.
- **Type system**: a high-contrast serif for all display headlines (56–96px), mixing roman and italic within one heading for emphasis; a neutral grotesque sans for everything else — titles in white `#fafafa`, body at 14–16px in `#a1a1aa`, tiny 11–12px labels and mock-UI text. Line length on intros stays under ~50 characters, centred.
- **Colour rules**: white for headlines and primary buttons, `#a1a1aa` for body, one warm accent (burnt orange, ~`#ff5a1f`) used *only* for italic phrases inside headings and rare highlights. Semantic green (`#34d399`) for success/delivered states, red for failures — both confined to product mockups, never page chrome.
- **Chapter rhythm**: alternate centred "chapter" intros (3D icon → heading → 1–2 sentence subcopy → artifact) with left-aligned editorial blocks. Every claim must be followed by a concrete artifact: code window, split preview, screenshot, or mock-UI card. Density contrast is intentional — 100px+ vertical padding on intros, dense utilitarian spacing inside artifacts.
- **Buttons and links**: primary = white pill with black text, no border; secondary = transparent with 1px border; tertiary = plain muted text link with a small arrow. Rounded-full on pills, 8px on embedded controls.
- **Product mockups**: render believable states — status pills, ISO-style timestamps, email addresses, HTTP codes — in small mono/sans type inside cards. Mocks are the proof, so they must look real, not schematic.
- **Logo wall**: monochrome white at 50–60% opacity on dark, evenly spaced rows, no colour logos.
- **Motion**: restrained — 150ms opacity/border-color transitions on links, cards, and tabs; no large parallax or scroll-jacking effects.
- **Footer**: light and quiet — muted gray links, five titled columns, generous line-height, small status indicator.

## Never

- Do not reproduce the reference product's name, wordmark, logo, tagline, or any of its copy (e.g. "Email for developers").
- Do not use the customer logos, testimonial quotes, people, or avatars visible in the reference.
- Do not copy the 3D icon illustrations, code samples, or screenshots from the reference — build equivalents from the user's own product and content.
- Never present the result as the reference product or imply affiliation with it.
