## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106644125.webp
- Design on Kage: https://kage.design/designs/frigade-assist-api-landing-page

## Before you start
Ask the user: what product are we building this page for, who is the primary audience (engineers, PMs, end users?), and what brand assets exist (name, logo, exact brand colours, typeface files)? Wait for the answers. Everything below is a design language to apply to *their* product — not a template of the reference page.

## Page structure
Build a single long marketing page in this order:
1. **Announcement bar** — full-width, pale tinted strip with one short sentence about the featured capability and a small arrow link. Sits above the nav.
2. **Navigation** — white, slim: wordmark left; 4–5 dropdown items centre; text 'Login' plus a solid primary button right. No border until scrolled.
3. **Hero** — centred on a very light background with a faint radial arc/beam pattern behind. Order: small pill badge (icon + product name + 'New' tag) → two-line headline with one line indented → one-sentence subhead → solid primary button + quiet secondary button with a play glyph. Below, a segmented toggle card offering two audiences ('I don't have X' / 'I already have X') with the current page's option selected.
4. **Hero evidence mockup** — a wide, soft-shadowed composite: left half a code editor window (traffic lights, filename tab, line numbers, syntax-highlighted ~20-line snippet showing how to integrate); right half a browser-chrome mockup of a product settings page with one row outlined in blue and a floating tooltip card ('Open … to …', 'STEP 1/3', progress dots). This is the proof of the promise above it.
5. **Trust strip** — three equal columns separated by hairlines: small rounded-square icon chip, bold two-word title, one grey line of detail (e.g. effort, compatibility, compliance).
6. **Logo cloud** — single row of 8–9 customer wordmarks, all grayscale, edge-to-edge.
7. **Problem statement** — centred section: large two-line declarative headline, short subhead, one arrow link. Generous vertical padding; no imagery.
8. **Split comparison panel** — full-bleed 50/50 block. Left: near-black panel with mono eyebrow ('YOUR AGENT ALONE'), white heading, and an outdated help-doc mockup with a 'last updated months ago' pill. Right: saturated brand-blue panel with mono eyebrow, heading, and a browser mockup where the agent highlights a field, plus a dark step-tooltip card ('STEP 5/6', Back/Next). Same subject, two treatments.
9. **Feature detail (split)** — left column: section heading, paragraph, then three icon rows (icon, bold title, two-line body). Right: a light card showing a chat conversation about the product, with a small blue 'grounded' tag and a no-code rule editor strip beneath it.
10. **How it works** — centred heading + subhead + arrow link; below, a diagram card: three labelled nodes (users / agent / product) joined by dashed connectors, with a side panel listing concrete product features and a release label. Under the diagram, three numbered steps in columns, each with a small circular numbered chip, bold title, two-line body.
11. **Temporal argument section** — centred headline ('Your docs go stale…') + subhead, then a horizontal version timeline (V2.1 → V2.5) with two lines: the product line in blue, the docs line fading out, plus a pill slider control beneath it. This visualises the claim instead of illustrating it.
12. **Platform depth section** — heading + subhead, then two cards: left a 'What you write' card with a one-line code chip and a stacked accordion of numbered layers (01–04); right a conversation-log card with per-row status tags (resolved / guided / handoff) and an arrow link. Below, three text columns (title + body + arrow link each) covering team workflow, insights, and handoff.
13. **Customer story** — left-aligned: mono eyebrow, oversized serif-feel quotation, short paragraph, avatar + name + role, customer wordmark right.
14. **Social proof block** — centred heading + subhead; then a full-width dark banner with one marquee quote (logo, quote, avatar, name, role); then a three-column row of shorter quotes with mono 'customer' eyebrows and avatar + name + role each.
15. **FAQ** — centred heading + one-line subhead; a light-grey rounded container holding 8–10 accordion rows (question left, plus icon right), hairline-separated.
16. **Closing CTA** — full-width rounded brand-blue panel with a few small floating icon chips at the corners, centred white headline, short subhead, white primary button + light arrow link.
17. **Cross-sell strip** — one hairline row: small icon chip, one sentence about the sibling product, arrow link right.
18. **Footer** — four columns (logo + address + compliance badge + socials; Product; Company; Resources; Case Studies), then a second lower row of dense link columns (Features, Use Cases, Comparisons, Guides), then a bottom legal bar ('Built in …', copyright, policy links) over a subtle dark wave graphic.

## Design language
- **One accent, total discipline.** Base surface is white `#FFFFFF` with off-white cards `#F6F7F9`; text is ink-navy `#0B1830`; the only saturated colour is one vivid blue (≈`#1E5EFF`, panels ≈`#1D4ED8`, dark panels ≈`#0C0F16`). Blue appears only on: primary buttons, links with arrows, icon chips, status tags, highlighted UI elements in mockups, and the closing CTA panel. Never tint body text or backgrounds blue.
- **Proof over adjectives.** Every claim is followed by an artefact: code for integration claims, a browser mockup for guidance claims, a timeline for freshness claims. Build mockups as real UI (traffic lights, tabs, form fields, toasts) with a blue-outlined target element and a floating 'STEP n/m' tooltip card with progress dots.
- **Alternating rhythm.** Wide centred 'statement' sections (headline + subhead + arrow link, no imagery) alternate with dense 'proof' sections (splits, diagrams, cards). Statement sections get ~140–160px vertical padding; proof sections are packed edge to edge. This breathing/contraction cycle drives the page down.
- **Typography.** One geometric grotesque sans for everything UI (weights 400/500/700, headline tracking −2%, sizes ≈ 56–64px hero / 40–44px sections / 18px body / 14px meta). Pair with a monospace used for: uppercase eyebrows (11–12px, letterspaced, muted), code snippets, status tags, and step labels. Headlines are sentence-case, two lines, often with a hanging second line for tension.
- **Eyebrow + arrow-link system.** Every major section opens with a mono uppercase label; every section closes with a small bold arrow link ('How … works →'). These are the page's connective tissue — reuse them consistently.
- **Lines, radius, shadow.** 1px hairlines `#E7E9EE` separate columns and rows; corner radius 8–12px on cards, 999px on pills/toggles; shadows only on floating mockups and the hero composite — large blur (40–60px), very low opacity, so panels feel lifted off the page. No drop shadows on text containers.
- **Diagrams feel engineered.** Dashed connector lines, small circular numbered chips (blue fill, white numeral), versioned labels in mono. Keep diagrams two-tone (ink lines + blue accents) on white or `#F6F7F9`.
- **Micro-interaction restraint.** Accordion rows with plus icons, hover states that reveal arrows, one slider control. Nothing decorative; motion supports comprehension of the product, not ambience.
- **Contrast beats used sparingly.** Two dark moments only: the 'without us' half of the comparison and the marquee testimonial banner; two saturated-blue moments: the 'with us' comparison half and the closing CTA. This makes both land hard.

## Never
- Do not reuse Frigade's name, wordmark, logo, any customer logos (Vercel, Retell, Merge, sanity, productboard, etc.), quotes, people, or any copy from the reference page.
- Do not copy the reference's illustrations, icon set, or its specific screenshots; build placeholder UI mockups for the user's own product.
- Never present the result as Frigade or imply affiliation; keep the applied brand entirely the user's own.
