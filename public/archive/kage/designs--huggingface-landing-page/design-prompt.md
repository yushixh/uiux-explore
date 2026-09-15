## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073694409.webp
- Design on Kage: https://kage.design/designs/huggingface-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo/mascot, brand colours, typeface). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product — never reproduce this reference product's name, mascot, copy or content.

## Page structure
Build a long single-page marketing homepage in this order:

1. **Top navigation bar** — white, slim bar: logo + wordmark left, a rounded search input for the product's main objects, then a row of icon+label links to the product's main sections (one may carry a small "NEW" pill), a text Log In link and a dark filled pill Sign Up button on the right.
2. **Hero** — a full-width, near-black rounded card (radius ~24px). Left column: brand mascot mark at top, very large white headline (~60-72px, bold, tight leading), one short gray sub-paragraph, then two CTAs (outline pill + underlined text link). Right side: a product-UI screenshot (filters sidebar + results list) that bleeds off the card's right edge, angled/overlapping slightly to feel alive.
3. **Trending strip** — white section with a centered heading "Trending on [brand] this week" and a soft pink/orange gradient wash behind it. Three columns of five compact rows each (the product's three core object types). Each row: name, small gray metadata line (updated time, download/like stats with tiny icons). Make the middle column's rows vivid gradient cards so the strip has one loud moment. Under each column, an underlined "Browse all …" link.
4. **Value proposition bento** — centered 3D-ish icon, big heading, one-line subtext. Then a 2-row bento grid: row 1 = one wide card with an embedded UI mock (sidebar + activity feed) and one card with a syntax-highlighted code snippet; row 2 = one card with a labelled icon grid of modalities/categories, one card with a profile/portfolio mock plus a dark Sign Up pill.
5. **Monetization band** — centered heading + subtext. Then a full-width near-black rounded card: left = heading, copy, primary CTA and "starting at $X" note; right = floating pill labels of enterprise features around abstract 3D shapes. Below it, two half-width cards, each with heading, copy, dark CTA + price note, and a different illustrative visual (a network of partner logos; a pricing UI mock).
6. **Social proof** — a one-line centered caption ("More than 50,000 organizations use …"), then a two-row grid of partner tiles: logo, name, small team-tier badge, and one usage stat each.
7. **Open-source / ecosystem section** — centered icon + heading + subtext, then a masonry-style grid of ~12 small cards, each with a coloured dot, project name, a star/fork count, and one-line description. Cards stagger in columns and gently fade out toward the bottom.
8. **Footer** — first a large playful illustration made of the brand mascot repeated in a mound shape, then a 5-column footer: theme toggle left, then Website / Company / Resources / Social link columns.

## Design language
- **Overall feel**: utilitarian and information-dense, punctuated by playful brand moments. Function areas are clean lists and cards; personality lives in the mascot, gradient cards, and the footer illustration.
- **Hierarchy**: dark rounded cards create the two loudest anchors (hero and paid offering); between them, white sections use centered headers — small 3D icon above, bold heading, one quiet gray line — then content blocks do the talking.
- **Rhythm and density**: alternate loud/dark and quiet/white sections. Density moves from airy hero → dense stat-rich lists → medium bento cards → sparse masonry. Let list rows carry real metadata (timestamps, counts, small icons) at 13-14px gray — this density is what makes the page feel like a living platform.
- **Colour**: white `#ffffff` background; near-black cards `#17171c`-ish with white headings and `#9ca3af` secondary text; body text `#1f2937` on white. One saturated brand accent (e.g. warm yellow `#FFD21E` or the user's brand colour) used sparingly: logo, tiny highlights, never large fills. Allow exactly one gradient moment (pink→orange `#f43f5e → #f97316`) on a single column of cards for contrast. Faint warm radial wash (`rgba(244,63,94,0.06)`) behind the trending section.
- **Type**: one humanist sans throughout (e.g. Source Sans 3 or Inter). Headings 700-800 weight: hero ~64px, section headings ~32-36px, card headings ~20px, body 15-16px, metadata 13px. Code snippet in a monospace face with subtle syntax colours. Line-height tight on headings (~1.1), relaxed on body (~1.5).
- **Cards, borders, radius, shadow**: white cards get a 1px `#e5e7eb` border, radius 12-16px, shadow almost none (or `0 1px 2px rgba(0,0,0,0.04)`). Dark bands get radius ~24px and no border. Buttons are fully rounded pills: dark filled for primary, 1px outline for secondary, plain underlined links for tertiary.
- **Interaction**: minimal motion — hover darkens links, list rows get a faint background tint, buttons shift background slightly. Optional slow float on 3D shapes in the dark band. No parallax, no scroll-jacking.
- **Illustration style**: simple 3D-ish geometric shapes (cubes, cylinders) in grayscale inside dark cards; mascot repeated in multiples for the footer mound. Keep illustrations abstract and brand-neutral.

## Never
Never use the Hugging Face name, wordmark, hugging-face emoji mascot, or its yellow-face emoji pile illustration. Never copy its headline copy ("The AI community building the future"), section headings verbatim, model/dataset names, library names, or the partner/company logos shown in the social-proof grid. Never present the result as Hugging Face or imply affiliation with it.
