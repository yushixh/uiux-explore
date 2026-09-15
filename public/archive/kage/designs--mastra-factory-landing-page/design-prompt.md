## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106606408-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106602769.webp
- Design on Kage: https://kage.design/designs/mastra-factory-landing-page

## Before you start
Ask the user what product they are launching, who it is for (individual engineers, platform teams, enterprises?), and which brand assets they already have — name, logo, accent colours, typefaces, and whether they have an install command or CLI snippet. Wait for the answers. Everything below is applied to *their* product, not to the reference site.

## Page structure
Build one dark marketing page, top to bottom:

1. **Top nav (sticky)** — single-line bar on the page background: logo left; three dropdown triggers (Product, Solutions, Resources) with caret icons; three flat links (Pricing, Customers, Docs); right cluster with a star-count chip, a quiet "Log in" button and a filled pill "Sign Up".
2. **Announcement ribbon** — full-width banner in the accent colour directly under the nav: a short date label, a bold one-line message and a trailing arrow. Notch the ends with `clip-path` so it reads as a physical ribbon.
3. **Hero (centred, airy)** — thin concentric rings radiating behind a circular product emblem; small tracked eyebrow; one enormous two-line headline; a two-sentence grey paragraph naming what the system combines; CTA row with a dark pill button plus a monospace install-command pill with a copy icon; a quiet text link to documentation below.
4. **Product board panel** — full-width rounded dark card: left-aligned heading + two-line subcopy, then an in-page HTML mockup of the product: four kanban columns (e.g. Intake, Triage, In Progress, Review) of believable cards — issue number, one-line title, type tags, impact/effort pills, and a per-column action select — with the last row fading out under a gradient mask.
5. **Pipeline stepper panel** — second rounded card: a small row of integration marks, then a horizontal six-stage stepper with uppercase monospace labels joined by dotted connectors, the first stage shown as an active pill, and one uppercase monospace caption beneath explaining that stage.
6. **Pricing** — one row: left-aligned heading with a right-aligned "Full pricing" link; three equal cards — a flat dark starter card with usage line-items and overage prices; a recommended mid card with a green radial glow rising from its bottom edge and a light filled CTA; an enterprise card tinted blue with a paragraph instead of prices and a light CTA.
7. **Case studies** — heading plus right-aligned link; one wide rounded card split into four columns, each a one-sentence story with the customer name bolded white, a wordmark below, and a "Read case study" link.
8. **FAQ** — plain heading, then a single bordered card of accordion rows separated by hairlines, each row a white question with a right chevron.
9. **Final CTA (centred, airy)** — huge two-line headline, one grey sentence, then the exact same CTA pair and documentation link as the hero.
10. **Footer (rounded dark card)** — logo, an uppercase "get weekly updates" email input with Subscribe button, six link columns (product, developers, resources, company, connect), and a bottom row with a SECURITY chip, a green-dot "FULLY OPERATIONAL" status badge, and legal links including `llms.txt`.

## Design language
- **Canvas**: near-black page `#0a0a0a`; panels `#141414`–`#181818` with 1px `#262626` borders; large radii — 24–32px on cards, full pills on buttons; no drop shadows, depth comes from hairline borders and occasional glows.
- **Type**: one geometric sans for everything editorial — hero ~64–72px, section headings ~28–36px, body 14–16px, secondary text in grey `#a3a3a3`; pair it with a monospace face used as a texture: install commands, uppercase stage labels, statuses and micro-captions at 11–13px with letter-spacing when uppercase.
- **Hierarchy by scale and weight, not colour**: white headlines, grey support text; colour is rationed to meaning — one accent ribbon for announcements, a green glow (`#1f3d2b`→transparent radial) for the recommended plan, a blue tint (`#12202e`-ish) for the enterprise tier, a blue/violet pill for the active pipeline stage.
- **Rhythm down the page**: alternate airy centred blocks (hero, final CTA) with dense artefact panels; every claim is followed by rendered proof — the page persuades with mockups, not adjectives. Keep generous ~120px vertical padding between sections so dense panels breathe.
- **Mockups are real DOM**: build the kanban and stepper in HTML/CSS with believable issue numbers (`#1234` format), titles, tag chips, impact/effort labels and select boxes; mask the bottom row with a fade so the panel feels like a viewport into a larger system.
- **Details**: dotted connectors between stages, chevrons on dropdowns and FAQ rows, small status dots, thin ring/circle motifs behind the hero emblem, a copy icon on the command button.
- **Motion**: restrained — hover brightening on buttons and rows, accordion expansion, subtle glow on the recommended card; nothing bounces or slides dramatically.

## Never
- Do not copy Mastra's name, wordmark, factory emblem, ring artwork, headline copy, FAQ questions, pricing numbers or customer names and logos (Replit, SoftBank, Sanity, Marsh).
- Do not reuse their install command or star count; invent neutral equivalents for the user's product.
- Never present the result as Mastra or imply any affiliation with it.
