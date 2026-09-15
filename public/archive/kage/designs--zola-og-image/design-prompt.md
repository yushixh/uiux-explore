## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/zola-com/566b45d6-d4e0-47ad-8bcb-f7c2dd5bcfca-1789146279133.webp
- Design on Kage: https://kage.design/designs/zola-og-image

# Design a 1200×630 social card (Open Graph image)

## Before you start
Ask the user: what product or brand is this card for, who is the audience, what single emotion or message should the share preview convey, and what brand assets exist (wordmark, colours, type, and especially — do they have a strong photograph or video still to use?). Wait for the answers before building. Everything below is applied to their product, not the reference.

## Output format
Produce a single 1200×630 image, ideally as HTML/CSS sized to 1200×630 and rendered to PNG (e.g. with Playwright/puppeteer), or as an SVG. Use placeholder photography (e.g. picsum or a user-supplied image) and placeholder branding.

## Page structure (canvas composition)
- **Full-bleed photograph**: one image covers the entire 1200×630 canvas edge to edge, no padding, no gradient overlay bars, no logo lockup, no headline. The photo itself is the message.
- **Focal placement**: position the subject just right of centre (roughly 55–65% across), with the key gesture or interaction readable at thumbnail size. Leave breathing room around the focal point; crop so the story (two people, an object, a reaction) is obvious in under a second.
- **Natural framing**: use darker elements (foliage, walls, shadows) on one side of the frame and lighter, blurred elements (blossoms, bokeh highlights) on the opposite edge to create depth without any graphic device. Keep at least a third of the canvas relatively quiet so it reads well in small previews.

## Design language
- Photography-first: warm, slightly filmic grade; realistic skin tones; greens/naturals around #3d5233–#6f8f4e with one warm accent worn or held by the subject (e.g. coral ~#e2795f).
- Depth via optics, not graphics: shallow depth of field, blurred foreground edges, soft natural light. Do not simulate this with CSS blur on flat colours.
- Zero type on the canvas: if branding is required, keep it to a small, low-contrast wordmark in one corner (max ~5% of canvas height), never centred over the subject.
- Mood over information: the card should communicate a feeling, not a feature list.

## Never
- Never reuse the reference photo, the proposal subject matter, or any Zola branding, wordmark or copy.
- Never add gradient overlays, banners, big headlines or CTA buttons to the card unless the user explicitly asks.
