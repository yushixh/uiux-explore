## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789067360095.webp
- Design on Kage: https://kage.design/designs/v0-empty-state

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for the answers before writing code. Everything below is a design language to apply to *their* product — not a clone of the reference page.

## Page structure
1. **Top nav** — slim single-row bar on the page background: wordmark left; six centered text links (one with a dropdown chevron); right-aligned ghost "Log In" button and solid black pill "Sign Up" button. No border under the bar.
2. **Hero** — large whitespace, then a centered H1 phrased as a question, followed by the product's core input: a wide rounded rectangle (the prompt/entry field) with placeholder text top-left, a small model/mode selector chip bottom-left, and a circular icon button bottom-right. Below the input, a centered row of small bordered suggestion chips (icon + short label) plus one shuffle/sparkle chip.
3. **Template gallery** — section header row: bold H2 left, a group of category filter pills right ending with a "Browse all →" text link. Below, a 3-column grid of community template cards: large screenshot thumbnail with rounded top corners, then avatar + title + fork count + heart count. The third row is intentionally clipped mid-card with a centered "Browse all" pill overlapping the cut, signalling more content.
4. **Feature bento** — 3×3 grid of bordered white cards on a slightly inset container. First card is a text-led headline card (display-size title + one paragraph). Every other card: bold 16px title, one-line gray description, and a unique illustrative vignette filling the lower half (icon circle pair, icon cloud, abstract shape, UI fragment, node diagram, device mockup). Row spacing tight; internal card padding generous (~32px).
5. **Logo marquee** — full-width band of grayscale customer logos, evenly spaced, reading as a slow horizontal scroll; fades at the edges.
6. **Mobile showcase** — H2 left, "Browse all →" right; a horizontally overflowing rail of tall (phone-aspect) screenshot cards with the same avatar + title + stats footer as the desktop gallery, implying a swipeable carousel.
7. **CTA** — maximum whitespace: centered display heading, one gray subline, one solid black pill button. Nothing else.
8. **Footer** — logo left; four columns of small gray links with 12px uppercase-ish column headers (Product, Company, Resources, Social); generous vertical padding, no border above.

## Design language
- **Monochrome chrome, colorful content**: the frame is near-white `#FAFAFA`, black `#111` primary text, `#666`–`#737373` secondary, hairline `#E5E5E5` borders. Saturated color appears *only* inside thumbnails, illustrations, and icon vignettes — never in buttons, headings, or backgrounds. This contrast is the page's main trick; protect it.
- **Type**: one geometric sans throughout. H1 ~52–64px, medium weight, tight tracking (-0.02em); H2 ~28–32px semibold; card titles 16px semibold; body/meta 13–14px regular in gray. No serif, no all-caps display type.
- **Hierarchy by size and weight only** — no accent colors, no underlines. Section headers pair a heavy left-aligned H2 with a light action link on the same baseline.
- **Cards**: flat white surfaces, 1px light border, 12–16px radius, no drop shadow at rest (hover may deepen the border slightly). Gallery thumbnails share one radius so mixed content still aligns.
- **Chips and pills**: fully rounded, 1px border, 13px label + 14px icon, ~8px vertical padding; the primary CTA is the only solid-black pill on the page.
- **Community metadata pattern**: 20px round avatar, 14px semibold title, then fork-count and heart-count with small icons in 12px gray — reuse this for any user-generated content cards.
- **Rhythm down the page**: airy hero → tight, dense galleries/bento → airy marquee and CTA. Alternate full-bleed grids with inset containers (~1200px max width) so sections breathe differently; the clipped gallery row is a deliberate density spike that invites scrolling.
- **Illustrated feature cards**: each bento cell earns its own miniature — abstract shapes, icon clusters, node diagrams, device mockups — rendered in flat, slightly playful style at consistent scale, cropped by the card edges.
- **Motion**: minimal and functional — slow logo marquee, subtle card hover, horizontal scroll on the mobile rail. No parallax, no big entrance animations.

## Never
- Never reuse the v0 or Vercel logo, wordmark, or the black triangle mark; never copy their headline copy ("What do you want to create?", "Prompt. Build. Publish.", "Start building with v0") or footer link lists.
- Never reproduce the specific template thumbnails, their names, or their author avatars/counts — generate placeholder community content in the same metadata format instead.
- Never present the finished page as v0 or imply affiliation; the user's own brand assets replace all reference identity.
