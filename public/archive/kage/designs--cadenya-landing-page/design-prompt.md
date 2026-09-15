## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cadenya/d064e83b-00ab-4d52-aab7-77367964ea32-1789192832645-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cadenya/d064e83b-00ab-4d52-aab7-77367964ea32-1789192830062.webp
- Design on Kage: https://kage.design/designs/cadenya-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, existing imagery). Wait for their answers before writing code. Everything below is a design language to apply to *their* product — do not reproduce the reference site's content, name, or imagery.

## Page structure
1. **Top nav** — slim white bar: wordmark left; three uppercase mono links (Pricing / About / Blog) with thin vertical hairline dividers between them; Sign-up and Login (with a small person icon) on the right; 1px bottom rule.
2. **Hero** — inside a full-width frame drawn with crop-mark corner brackets: a short two-line intro paragraph with a filled pill CTA and an outlined "docs" pill top-right; a large surreal hero image centred; an oversized uppercase serif headline bottom-left over 2 lines; a small down-arrow control bottom-right.
3. **Photo feature band** — full-bleed nature photo background; two frosted-glass cards side by side (icon, uppercase serif title, small mono body), each wrapped in its own crop-mark frame. Two value props, no more.
4. **Dark statement + numbered steps** — deep green section with a subtle grid texture: centred serif heading with two lines of mono support copy, then three equal columns labelled "01. / 02. / 03." in mono, each with a short serif title and an abstract node diagram beneath.
5. **Oversized typographic statement** — one giant serif line broken across two rows, with one phrase in lime italic inside a bracket-highlight; pure type, no imagery.
6. **Accordion + product UI** — dark green panel, 2 columns: left, four accordion items (first expanded showing body copy, others collapsed with chevrons); right, a frosted-glass app screenshot comparing a baseline agent vs a canary variant (model, created date, assignments with weights, system prompt excerpt, and a "new variation" action button).
7. **Light split section** — background flips to pale lime: serif heading + short mono copy + filled CTA left; a large photographic image with reflection right; below, a low decorative strip of small square tiles (like a seed tray) as a section divider.
8. **FAQ** — same lime background: bracketed serif heading left; six numbered accordion rows right ("QUESTION 01" mono label, serif question, hairline divider between rows); a full-width pill "load more" control with a down-arrow chip at the bottom.
9. **Closing CTA** — back on white: dark-toned brand image left; serif headline ("Spin up something wild." energy), two lines of mono copy, and a filled pill + outlined pill right; crop-mark frame around the group.
10. **Footer** — left block: editorial serif heading, one sentence of copy, outlined "get started" pill; right: three mono uppercase link columns (Product / Company / Resources) plus the geometric brand mark; a row of social icons; a soft green-to-lime gradient strip across the very bottom.

## Design language
- **Palette**: off-white `#F7F5F0`, ink `#1B1B1B`, deep forest green `#16432E` (raised panels `#1D5A3E`), lime accent `#D9E965`, pale lime surface `#E4F0A2`. Lime is the only accent — reserve it for focal diagram nodes, one highlighted phrase, and hover/focus states.
- **Background rhythm**: alternate full-bleed section backgrounds in this order — white → photo → dark green → dark green → pale lime → white — so the page breathes in large colour blocks rather than card grids.
- **Type**: exactly two families. A light display serif for every heading, uppercase, tight leading (~1.05), slight tracking, scaled from ~15px section labels up to 90px+ statements. A monospace for labels, buttons, body copy in technical sections, and FAQ questions — 11–13px, uppercase, +5% letter-spacing.
- **Crop-mark frames**: replace full borders with 1px corner brackets (~24px legs) on the hero, cards, photos and framed groups — a technical-drawing motif used consistently, plus dashed 1px connectors inside diagrams.
- **Diagrams**: abstract node graphs built from small squares and diamonds on 1px lines, one solid lime dot as the focal node per diagram; prefix titles with mono numerals ("01."). Never use real screenshots for these.
- **Buttons**: pill radius. Primary = dark green fill, white mono uppercase label, circular arrow chip to the right of the label. Secondary = 1px outline pill. Hover: the arrow chip nudges 2–4px right; nothing else moves.
- **Glass panels**: `backdrop-filter: blur` with white at ~10–14% opacity and a 1px white/40 border over photos; on dark green, use a green-tinted glass instead of white.
- **Density**: hero and typographic statements are very airy; the numbered columns are medium; FAQ rows are compact (~64px tall) separated by hairlines; the footer is the densest zone with tight multi-column links.
- **Icons**: 1px line icons constructed from squares and plus-shapes, white on dark surfaces and ink on light — never filled, never rounded.
- **Motion**: minimal and mechanical — accordion expand with chevron rotation, button arrow nudge, gentle fade-up on section entry. No parallax, no floating blobs.

## Never
- Do not use bonsai trees, floating islands, root or moss photography, or any surreal plant imagery from the reference.
- Do not copy the reference's name, wordmark, knot logo, headlines, body copy, FAQ text, or icon set.
- Never present the result as the reference product; it is the user's own product wearing this design language.
