## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073641906.webp
- Design on Kage: https://kage.design/designs/turso-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, colours, type). Wait for the answers; everything below is a design language to apply to *their* product, not a copy of the reference.

## Page structure
Build a dark landing page, top to bottom:

1. **Sticky nav** — logo left, dropdown/product links centre, Login + a single solid accent-colour CTA pill right. Thin bottom border on a near-black bar.
2. **Hero** — two columns: left, a very large three-line statement headline where one line is the accent colour, a two-line sub-paragraph, and one solid accent CTA; right, a realistic code/terminal window (filename tab bar, syntax-highlighted snippet with a comment punchline) as the hero visual.
3. **Logo strip** — one bordered row: short trust copy left, 6–8 grayscale wordmarks scrolling or spaced right.
4. **Manifesto / problem section** — full-width slightly lighter panel: centred bold claim, narrow-column body copy, one accent-coloured thesis sentence, then a side-by-side diagram card contrasting "old model" (grid of identical tiles) vs "new model" (stacked labelled tiles under a control-plane bar). Build the diagram in HTML/CSS, not images.
5. **Numbered principles** — bold section headline left-aligned, then a 5-column grid of thin-bordered cards, each with an `01…05` index, short bold claim, body copy, and a small "Learn more →" accent link.
6. **Code demo section** — two columns: left copy + CTA, right a tabbed code window (filename tabs) mirroring the hero.
7. **Feature + quote** — bordered card split: left a big feature claim with body copy and CTA, right a customer quote with name, role and avatar.
8. **Customer stories** — centred headline, 3-column grid of bordered cards (company name with accent underline, one bold stat/claim, body, "Read the X story →"), and a centred accent CTA button below.
9. **Enterprise section** — two columns: left copy + "Talk to sales" CTA, right a vertical stack of 3 icon rows (compliance/encryption/deployment points) each in its own bordered row.
10. **Two-path section** — centred headline, then two equal bordered cards (open-source vs cloud) each with title, copy and one link; below, a full-width illustration of many glowing accent-coloured database shapes (CSS/SVG glow, no photography).
11. **Community section** — centred headline + copy, then two large cards: left "Open source" with a small accent pill label, big title, copy, CTA and a 2×2 grid of icon+text sub-items; right the same treatment for community. Allow one secondary pill colour for variety.
12. **Final CTA** — centred large statement, one-line subcopy, primary + secondary buttons, one line of fine-print trust copy, sitting above a subtle illustrated footer band.
13. **Footer** — multi-column link lists under muted column headings, thin top border, copyright and social icons on a final row.

## Design language
- Background: near-black `#0a0f0e`–`#111514`; alternate some sections with a slightly lighter panel `#141a19` for rhythm rather than borders alone.
- Single accent: mint/teal `#3ddc97`–`#4ade9e` for links, arrows, one hero headline line, CTAs, and the illustration glow. Maybe one secondary accent (soft pink/purple) for a pill label in the community section only.
- Type: one geometric sans family throughout; hero ~64–72px bold, section headlines ~40px, card titles ~18–20px semibold, body 14–16px in muted grey `#9aa5a2`. Line length for body copy kept narrow (~60ch) even when the section is full-width.
- Hierarchy comes from size + spacing, never decoration. Section headlines are either left-aligned with copy beside them, or centred when a section is grid-based — alternate these to change rhythm.
- Cards: 1px borders in `rgba(255,255,255,0.1)`, radius ~8–12px, no shadows, no gradient fills. Icon rows and sub-items get their own hairline dividers instead of nested cards.
- Code windows are a first-class visual: dark slightly-lighter-than-page fill, tab bar with filename + window controls, syntax-highlighted colours (teal keywords, muted strings), and a human comment as the last line for personality.
- Buttons: solid accent pill with dark text for primary; plain text links with `→` for secondary. Never more than one solid button per viewport.
- Diagrams and illustrations are flat, glowing line-art in the accent colour on dark — CSS grids of tiles or simple SVG shapes, not screenshots or stock imagery.
- Motion: keep it minimal — subtle hover brightening on cards and links, no parallax.

## Never
No logos, wordmarks, copy, customer names, testimonials, code snippets or illustration sets from the reference. Never present the result as that product.
