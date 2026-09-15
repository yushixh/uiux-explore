## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073921-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bolt-new/4e91875d-336e-4c47-bec8-8771acd62040-1789073695339.webp
- Design on Kage: https://kage.design/designs/bolt-new-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo, brand colours, typeface). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product — not a clone of the reference site.

## Page structure
Build a single dark landing page, top to bottom:

1. **Top nav** — slim dark bar: wordmark left, centre links (product, resources, careers, pricing), right-aligned ghost "Sign in" and one solid accent-colour "Get Started" pill button.
2. **Hero** — full-bleed section dominated by a large blurred radial glow behind the content. Centred two-line headline, one-line grey subline, then the key element: a wide dark prompt/input card (textarea placeholder, a plus/attach affordance at bottom-left, a small mode selector and a solid accent "run" button at bottom-right). This input IS the call to action. Below it, a row of four small icon tiles (with one "New" badge) representing output types, then an "or start from" row of small bordered pills linking to integrations.
3. **Logo strip** — single row of greyed-out (monochrome, ~40% opacity) customer logos on the dark background. No borders, no cards.
4. **Statement section** — a small glowing animated object (e.g. a pendulum dot with a light streak) above a large two-line centred headline and a two-line grey subline. Sets up the value proposition.
5. **Model/capability card** — one wide card: left third is title + paragraph copy, right two-thirds is a real-looking product UI (a selector list with two tiers and a detail panel showing spec rows: speed, intelligence, cost — values right-aligned).
6. **Stat pair** — two cards side by side (~40/60 split): left card is an enormous numeral with a short label under it and supporting copy; right card is title + copy where one phrase is accent-highlighted inline, above a dark rendered graphic with a giant numeral (e.g. "1000x") cropped at the card edge.
7. **Design-system section (colour shift)** — one full-width card on a pink-to-purple gradient background. Dotted-outline component mockups (toggles, buttons, colour swatches), a serif type-ramp demo (H1/H2/H3 of the same phrase), and a row of large colour swatch tiles. This is the page's one deliberate departure from the blue palette.
8. **Platform bento** — large centred two-line headline where the second line is much larger/brighter, grey subline, then an asymmetric bento grid (3 columns, mixed spans) of cards each pairing a rendered 3D-style object (infinity loop, padlock, keyboard key, gauge dial, orbit curve) with a short title and one-line description. Below the grid, a centred two-line closing statement separated by a thin vertical divider line.
9. **Persona grid** — headline where the second line is in a glowing/soft-focus style, subline, then five cards: three equal cards in a row (each: persona title, one-paragraph copy, and a realistic mini product-UI mock — version-history list, publish dialog with URL and share icons, area chart), then two wider cards below (a screenshot collage and a checklist panel) each with title + copy underneath.
10. **Closing CTA** — two-column: left is a two-line headline + one grey line; right repeats the exact hero prompt-input card. This echo is intentional.
11. **Footer** — four link columns under small uppercase column labels (solutions, resources, more, connect), connect column as circular icon buttons. At the very bottom, a giant lowercase wordmark in a striped/engraved treatment that fades into the background.

## Design language
- **Surfaces**: page background near-black `#0a0a0d`; cards one step lighter `#141418`–`#18181d` with 1px borders `#26262c` and radius 12–16px. Cards rarely have shadows — depth comes from surface steps and borders.
- **Glow as the accent**: one accent hue (electric blue, `#3b82f6`–`#60a5fa`) used for buttons, glows, highlights and illustrations. Large blurred radial gradients (`filter: blur(80px+)`, low opacity) sit behind the hero and select headings; a dark vignette keeps text legible over them.
- **One colour break**: allow exactly one mid-page section to switch palette (e.g. pink→purple gradient, `#f472b6`/`#7c3aed`) to mark a feature as special; everything before and after returns to the base dark/blue system.
- **Type**: a single grotesque sans (Inter-like) across the whole page. Hierarchy is built by scale and weight only: display headlines 56–72px at weight 500–600 with tight tracking (-0.02em), often split across two lines where line 2 is emphasised; body 15–17px in grey `#9ca3af`; column labels 11–12px uppercase with letter-spacing. Stat numerals go to 96–140px. No serif in the base system (serif may appear only as a specimen inside an illustration).
- **Hierarchy rules**: white for headlines and key data, grey `#9ca3af` for body, accent blue only for actions, inline highlights, and product-UI details. Emphasis inside paragraphs is done with white or accent-coloured inline spans, not bold sizes.
- **Density rhythm**: the page alternates between airy full-bleed statement sections (huge headline, lots of vertical padding) and dense card clusters (12–16px gaps, compact copy). Never two dense clusters back-to-back without an airy section between.
- **Realistic product mockups**: every feature/persona card contains a plausible mini-UI (lists, toggles, charts, dialogs, checklists) built in the same dark system — slightly inset, ~90% scale, with realistic labels. This sells capability better than illustrations alone.
- **3D-style objects**: feature cards lead with a single rendered object (padlock, key, gauge, infinity loop) lit by the accent colour against a dark backdrop; keep them as CSS/SVG approximations with soft gradients and one specular highlight.
- **Motion**: restrained — a slow pulsing/bobbing glow on the hero and small statement objects, subtle hover lift/border-brighten on cards and buttons (150–200ms ease-out). No scroll-jacking or parallax.
- **CTA echo**: the closing CTA reuses the hero's primary component (the prompt card) verbatim — repeat your product's core interactive element at the bottom of the page.
- **Footer**: quiet grey links, uppercase micro-labels, generous spacing, and one oversized brand flourish that fades out at the page edge.

## Never
Do not reuse the reference's name "bolt", its wordmark, its exact headline copy ("What will you build today?", "Empowering product builders…"), its example UI labels, its 3D object artwork, or its partner logos (Google, AWS, Cloudflare, Microsoft, Stripe, Salesforce). Build the same design system for the user's own product with their own name, copy, colours and type; never present the result as the reference product.
