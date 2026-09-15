## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060365-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/framer-com/fbc97830-061d-4fdf-8e20-ea2d86299263-1789060009597.webp
- Design on Kage: https://kage.design/designs/framer-landing-page

## Before you start
Ask the user what product they are building, who the audience is, and what brand assets they have (name, logo, colours, typeface). Wait for answers before writing code. Everything below is a design language to apply to their product, not a replica of the reference.

## Page structure
1. **Top nav**: slim, transparent-on-black bar — small wordmark left, a few dropdown nav items (product/solutions/resources), then Enterprise and Pricing links, Log in and a small white pill CTA right.
2. **Hero**: one or two lines of large statement copy left-aligned, two buttons (filled white pill + subtle dark button with download icon), followed immediately by a large full-width product demo video/frame with rounded corners and a colourful interface visible inside.
3. **Logo wall**: two centred rows of customer wordmarks in muted grey on black, no borders or cards.
4. **Agent feature sections (3–4 repeats)**: each section has a large two-line heading, one product screenshot (browser mockup, CMS table, gallery, or terminal), a short paragraph of supporting copy, and a small arrow CTA. One variant shows a floating chat/agent panel overlapping the screenshot to demonstrate the AI workflow.
5. **Platform bento grid**: heading "Not just vibes, a full platform", then a dense grid of cards on slightly lighter dark tiles — each card contains a real product UI fragment (Core Web Vitals scores, CMS collections table, site settings, branches, localization, uptime stat, URL bar, analytics chart, A/B test results) with a small labelled link at the bottom (Performance →, CMS →, etc.). Cards vary in span; some are 2x2, some tall, some wide.
6. **Showcase gallery**: heading plus "See Framer sites" link, then a masonry-style grid of full-colour screenshots of real sites — the only colourful photography on the page.
7. **Case studies row**: heading "Trusted by teams shipping big sites", large dark cards each with a single customer wordmark and a "Read story →" link, horizontally scrollable.
8. **Community section**: heading, stats ("20,425 resources"), and a screenshot of a community feed with sidebar trending templates and suggested follows.
9. **Final CTA**: centred heading "Your next idea starts here" above a functional AI chat input (prompt textarea with model picker and send button) with suggested-prompt chips below and a "Start without AI" link.
10. **Footer**: compact multi-column link grid (Product, Resources, Business, Solutions, Compare, Community) with tiny type, social icons, status indicator and copyright at the very bottom.

## Design language
- Build on a near-black base: page background ~#0a0a0a, cards ~#141416, borders ~#26262a (1px, subtle), text white #ffffff for headings and ~#9b9ba1 for body.
- Hierarchy comes from scale contrast: headings at 48–64px with tight line-height (-2% to -4%), body copy small (13–15px) and low-contrast. One typeface family throughout; use weight (500 vs 400) rather than a second family.
- Colour is rationed: keep 95% of the page black/white/gray; reserve a blue→purple gradient (~#4b6bfb → #a06bfa) for product UI, one hero stat, and focus states. Never decorate chrome with colour.
- Use rounded geometry consistently: 12–16px radius on cards, screenshots and inputs; full pill radius on buttons and chips; buttons small (36–40px tall).
- Shadows are minimal — depth comes from 1px borders and slight background elevation steps (#0a0a0a → #141416 → #1c1c1f), not glows.
- Rhythm down the page: open and cinematic at the top (big hero, generous whitespace, huge demo), tighten in the middle (feature sections alternate screenshot left/right with shorter text), then go dense in the bento grid, then open up again for the closing CTA. Vary section backgrounds only by elevation, never by colour blocks.
- Every feature claim is proven with a real UI fragment screenshot or working widget, not an illustration — always pair a claim with evidence.
- Interactions are quiet: hover states brighten borders and text from grey to white, buttons invert subtly, no heavy animations.
- The closing CTA should be functional, not a banner: a real input with suggested prompt chips.

## Never
Do not use the Framer name, logo, wordmark, customer logos (Dribbble, Zapier, Perplexity, Miro, Cal.com, DoorDash, etc.), headline copy, or their screenshots/illustrations. Never present the result as Framer's site.
