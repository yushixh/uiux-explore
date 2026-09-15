## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/live-captions-by-subanana/8ebceaf8-6b56-49c6-8bb9-55b8185780eb-1789106571095.webp
- Design on Kage: https://kage.design/designs/live-captions-by-subanana-og-image

## Before you start
Ask the user what product or feature the card announces, who it is for, and which brand assets they already have (name, logo mark, brand colours, typeface). Also ask for the one-line value proposition and the CTA label to feature. Wait for the answers; everything below is applied to their product, with invented placeholders where assets are missing.

## Goal
Produce a single **1200×630 social share card** (Open Graph image). Implement it as one self-contained HTML file sized exactly 1200×630 that can be screenshotted to PNG (or an equivalent standalone SVG). No scrolling, no animation — all content must fit the fixed canvas and stay legible when scaled down to a chat thumbnail.

## Canvas composition
1. **Background (full bleed):** warm amber-to-orange gradient base with 3–5 large organic blob shapes in lighter yellows placed in corners and midground; blobs are decorative and must not reduce contrast under the headline.
2. **Left column (~40% width, vertically centred, left-aligned):**
   - Logo badge at top: a small illustrated mark inside a white die-cut sticker frame, slightly rotated.
   - Headline: the value proposition broken over exactly three lines, very heavy weight, near-black, with a thick white outline so it reads as sticker type. Largest element on the canvas.
   - CTA pill below with generous padding.
3. **Right two-thirds:** a collage of four floating product cards at varied sizes, each rotated between −4° and +5°, overlapping slightly, arranged on a diagonal from top-centre to bottom-right so the cluster feels hand-placed.
4. **Card anatomy (same for all four):** header row (title + one-line audience descriptor + small status badge), a body containing one realistic content detail, and a footer row of small pill chips (formats, languages, integrations). Suggested card set: live captions, translated video/subtitles, meeting notes, transcript search — replace with the user's own use cases.

## Design language
- **Sticker system:** every floating element gets a 4–6px white border, a soft drop shadow (~`0 10px 24px rgba(0,0,0,0.18)`) and a slight rotation; the headline fakes a die-cut outline with layered `text-shadow` or `-webkit-text-stroke`. Vary rotation angles per element — identical angles kill the hand-placed feel.
- **Colour:** background gradient #E8890C → #C96A08; blob accents #F6B93B and #FCD980; cards in four pastels — lavender #EDE4FA, cream #FBF3DC, pink #FBE3EC, mint #DDF3EC; text near-black #1A1A1A; chips and badges white with dark text; a single red micro-accent (e.g. a live badge) is enough.
- **Type:** one geometric sans throughout. Headline ~76–84px at weight 800–900 over three lines; card titles 18–20px semibold; card body 13–14px; chips and meta 10–11px. Nothing below ~10px or it vanishes in thumbnails.
- **Shape language:** cards 16–24px radius; chips, badges and CTA fully rounded pills; blobs from uneven border-radius values or SVG paths — never perfect circles.
- **Density:** each card carries exactly one convincing micro-detail — a caption line with a trailing cursor, a captioned video frame with a language pill, a meeting note with date and initials avatar, a transcript search hit with timestamps. Real-looking content makes the collage credible; generic icon cards are the failure mode.
- **Hierarchy:** the headline is the only oversized element; the four cards hold equal weight; badges are the smallest accent layer. Nothing else competes with the headline at first glance.

## Never
- No mascot, wordmark, product name, tagline, copy, photography or illustration taken from the reference design.
- No real third-party logos — use invented placeholder chips with generic icons or initials.
- No photos of real people — use a placeholder image or abstract avatar.
- Never present the result as the reference product; it carries the user's own branding and copy only.
