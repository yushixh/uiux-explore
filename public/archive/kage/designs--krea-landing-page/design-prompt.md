## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/krea-ai/7686b463-3bc3-4358-9bf2-528bb473cb81-1789146856874-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/krea-ai/7686b463-3bc3-4358-9bf2-528bb473cb81-1789146838280.webp
- Design on Kage: https://kage.design/designs/krea-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo, colour palette, typeface). Wait for their answers before writing any code. Every rule below is applied to *their* product — the reference page is only a source of layout and visual language.

## Page structure
Build a dark, single-page product home with this section order:

1. **Fixed left sidebar (~220px, full height, does not scroll with the page):** top row with a small logo mark + product name + chevron (workspace/account switcher); primary nav items (one active item rendered as a white pill with dark text, the rest as quiet rows); a small gray section label (e.g. "Tools") followed by 5–7 tool rows, each with a small colourful gradient app-icon and a 13px label; another labelled group with 1–2 promo rows; a full-width white "Sign in" pill button pinned to the sidebar bottom.
2. **Hero (main column):** near-black backdrop with a subtle starfield/particle texture; centred oversized light-weight headline (3–4 words); one short gray subline; then a wide rounded prompt-style input bar as the primary CTA — placeholder text on top, a bottom row inside the bar with an attach icon on the left and a settings chip + circular submit button on the right.
3. **Announcement banner:** a full-width rounded image card (~16:6) with a centred white overlay title; below it a small caption line on the left and two circular prev/next arrow buttons on the right (carousel affordance).
4. **Bento feature row:** one large promo card on the left (~40% width) with a "NEW" pill, an embedded mini product mock, product title, one-line subtitle and a blue pill CTA; to its right a 2×3 grid of compact tiles, each just an icon and a two-line label (action + "with <model>").
5. **Template workflows row:** left-aligned section header (icon + title + one gray subline) with a pill button + arrow on the right; a horizontally scrollable row of workflow cards, each an image on top and a title plus one-line truncated description below.
6. **Model showcase row:** header with a search icon on the left and carousel arrows on the right; two large side-by-side (edge-cut, carousel) media cards — full-bleed imagery, "Featured" and "New" pills top-left, and a bottom overlay with model name, a two-line description, a row of tiny spec icons with a credit cost, and an outlined "Generate"-style button.
7. **Model gallery section:** centred model name (medium-large) + gray one-line tagline; a centred ~600px search bar with a prefix icon and a search icon at the right; a two-tab switcher (active tab white, inactive gray); a masonry grid of generated media below; a centred blue "See more" pill at the end. (In the reference much of this grid renders as dark space because media lazy-loads — still build the full masonry grid.)
8. **Footer:** a 5–6 column sitemap with small gray group headings (product, solutions, models, tools, resources, company) and 12px link lists; a row of small monochrome icons under a short line like "Ask AI about …"; a bottom bar with copyright on the left and social icons on the right.

## Design language
- **Canvas:** page background #050505–#0a0a0a; sidebar a slightly distinct #0d0d0d; cards and tiles #131313–#181818; separate sections by spacing and background shifts, not by visible dividers.
- **Borders & radius:** 1px hairline borders at rgba(255,255,255,0.08) on inputs and tiles; radius scales with size — 10px on small controls, 16–20px on cards, fully-rounded pills for buttons, badges and icon buttons.
- **Shadows:** none or near-none; depth comes from background-value steps and gradient scrims (transparent → rgba(0,0,0,0.7) bottom-up) laid over imagery so overlaid text stays legible.
- **Colour:** near-monochrome base — white #ffffff primary text, rgba(255,255,255,0.55) secondary, pure black canvas — with exactly one saturated accent (use the user's brand colour; reference uses ~#2f6bff blue) reserved for primary CTAs ("Try now", "See more") and the active/selected nav pill. All other colour arrives via media thumbnails and small multicolour tool icons.
- **Type:** one neutral grotesque sans throughout. Display headlines 56–72px at light/regular weight with tight tracking, used only 2–3 times per page; section titles 18–22px medium; card titles 14–16px; everything else (nav, labels, descriptions, footer) 11–13px in gray. Card descriptions truncate to one line with ellipsis.
- **Badges & pills:** tiny uppercase-ish status pills ("NEW", "Featured") with translucent white backgrounds and 10–11px text, placed on top of media cards.
- **Layout rhythm:** alternate density down the page — spacious centred hero → dense bento grid → horizontal media carousels → a quiet, centred, low-chrome gallery section → a dense sitemap footer. Main column content max-width ~1200px with generous ~80–120px vertical padding between sections.
- **Iconography:** small (14–16px) monochrome line glyphs; reserve colourful gradient mini-icons for the sidebar tool list only.
- **Motion & interaction:** subtle on-hover states — cards brighten or lift 1–2px, pill buttons brighten, carousel arrows are circular and ghost-style until hovered; the hero prompt bar is the interactive focal point (focus ring via slightly lighter border). Keep all motion under ~200ms ease-out.

## Never
- Do not reuse Krea's name, logo, wordmark, product/model names (e.g. Krea Agent, Krea 2, Seedance, Nano Banana, GPT-6 Astra, MiniMax), copy, prompt examples, illustrations, photography or icon set.
- Do not copy their model names, credit pricing or announcement text — substitute the user's own product, models and metrics.
- Never present the result as Krea or imply any affiliation; the output is the user's product wearing this design language.
