## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/eventbrite-com/7528d4f6-3311-4de9-a3b5-4d616b4b671a-1789146238794-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/eventbrite-com/7528d4f6-3311-4de9-a3b5-4d616b4b671a-1789146236909.webp
- Design on Kage: https://kage.design/designs/eventbrite-landing-page

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (product name, logo, brand colours, typeface). Wait for the answers before writing any code. Everything below is a design language to apply to *their* product, not a copy of the reference site.

## Page structure
1. **Utility top bar** — slim white header: wordmark/logo left, a combined search bar (query input + location input + solid accent-coloured search button, all in one rounded pill) centre-left, and utility links (browse, create, help, sign in) right. Low height, no borders, lots of whitespace.
2. **Full-bleed hero** — ~60vh photo background (dark, cinematic), content left-aligned: a small uppercase eyebrow badge in a pink block, a 2-line display headline where each line sits on a pink-to-purple highlight block behind the text, and one white pill CTA button below. Nothing else in the hero.
3. **Category rail** — a single horizontal row of 8 equidistant outlined circle icons with tiny labels underneath, on plain white. Airy and icon-driven, acts as the top-level browse entry points.
4. **Location + filter tabs** — a small line 'Browsing events in [City]' with the city as a blue dropdown link, followed by a tab row (All / For you / Today / This weekend) where the active tab is bold with a short accent underline.
5. **Event card grid** — section heading plus a 4-column grid of uniform cards (4 rows deep). Each card: 16:9 image with slight rounding, heart and share icon buttons overlaid top-right of the image, a small text status badge above the title ('Almost full', 'Going fast'), bold title, then meta rows (date/time, venue, price) in progressively smaller/quieter type with links in accent blue.
6. **Destinations carousel** — section heading with circular prev/next arrow buttons at the far right; a horizontally scrollable row of large rounded photo cards with the city name overlaid in white at bottom-left; the last card is cropped by the viewport edge to signal scrollability.
7. **Popular cities** — text-only section: a heading plus many wrapped pill links, each reading 'Things to do in X' with a small diagonal-arrow glyph.
8. **Explore by region** — same pill-link pattern at higher density, laid out in a tighter multi-column wrap.
9. **Nearby things to do** — one more pill-link cluster for local/nearby locations, same visual treatment.
10. **Footer** — full-width deep-purple block with four link columns (product, organisers, discovery, company/social), then a bottom legal bar of small muted links plus a region selector.

## Design language
- **Hierarchy via restraint**: display typography appears only in the hero; every section heading is a modest bold sans (~24–28px). Visual weight below the hero is carried by photos and cards, not by big headings.
- **Rhythm down the page**: immersive dark hero → airy icon rail → dense functional grid → large-photo carousel → text-only link clusters that get denser as imagery disappears → dark structured footer. Plan content so render cost and visual loudness both decrease with scroll depth.
- **Colour discipline**: white canvas (#FFFFFF); one saturated accent (vivid orange ~#F05537) reserved strictly for the logo mark and the primary search/action button; a secondary interactive blue (~#3659E3) only for links, active tabs and prices; deep purple (~#1E0A3C) as the footer ground; pink-to-purple highlight blocks (~#F8B1C9 → #A965CC) used sparingly behind hero text. Urgency is conveyed with small text badges, never with colour bars.
- **Type**: a single grotesque sans family. Bold for titles and tabs, regular for meta; date/venue/price set one step smaller in gray; eyebrow badges small, uppercase, letter-spaced.
- **Shape and borders**: fully-rounded pill buttons for CTAs and search; card images with ~8–12px radius; almost no visible borders — separate sections by whitespace and the occasional background shift (white → purple footer) rather than rules.
- **Cards**: strict uniform grid with a consistent image ratio; overlay action icons live on the image, status badges sit between image and title; title is the only bold element in the card so scanning works on titles alone.
- **Interaction**: active tab gets a short accent underline; carousel crops at the viewport edge with circular arrow controls; hover states are subtle (underline, slight shadow) — motion never competes with the photos.
- **Density handling**: the link-farm sections use small pills with generous line wrapping so hundreds of links stay scannable and unobtrusive.

## Never
- Do not use the Eventbrite logo, wordmark, brand name, event photos, city photography, or any copy or icon set from the reference.
- Do not present the result as Eventbrite or imply any affiliation with it.
- Do not reuse the specific headline copy, badge wording or category labels; derive your own from the user's product domain.
