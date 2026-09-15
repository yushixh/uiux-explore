## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lu-ma/96018a8e-ecd4-43e5-9fc4-0edc592cafb2-1789146157463.webp
- Design on Kage: https://kage.design/designs/lu-ma-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (brand name, wordmark or logo file, brand colours, typeface). Wait for the answers. Every choice below is applied to *their* brand, not to the reference product.

## Page structure
Produce a single **1200×630 social card image** (Open Graph / link-preview size), delivered as HTML/CSS rendered to PNG (e.g. a 1200×630 `<div>` screenshot with Playwright or an equivalent pipeline) or as a standalone SVG. Build it in layers, bottom to top:

1. **Base layer**: a full-bleed background filled with the brand's dominant colour (a saturated mid-tone, not white or black).
2. **Gradient mesh layer**: 4–6 large radial gradients of neighbouring hues (one accent hue entering a corner, one warm or cool counterpoint on the opposite side, one bright luminous break), all heavily blurred (60–120px blur or large soft radial-gradient stops) so no shape or edge is visible — only colour fields flowing into each other.
3. **Focal layer**: one single brand element — the wordmark or logo — centred slightly above vertical centre. Optionally optically centred rather than mathematically centred. Nothing else on the canvas: no headline, no URL, no tagline, no CTA.
4. **Detail layer (optional)**: one small geometric glyph (sparkle, asterisk, dot, arrow) attached to the wordmark as a signature mark, sized roughly 10–15% of the wordmark height.

## Design language
- **One focal point only**: the composition works because a single white mark sits on a saturated field. Resist adding supporting copy; if the user insists on a tagline, keep it under four words in small type below the mark.
- **Colour**: pick 3–4 hues from the brand palette that are analogous or softly contrasting, plus white. Example mix for a warm palette: hot pink `#F06AA7`, coral orange `#F5A15F`, pale peach `#FFD9A8`, sky blue `#9FC3F2`, white `#FFFFFF`. Saturate the centre, let edges fade paler so the card doesn't vignette to mud at small sizes.
- **Blur is the whole trick**: gradients must be blurred past recognition — the test is that no individual blob can be named as a shape. Keep the brightest glow behind or beside the wordmark so the mark pops.
- **Type**: one geometric humanist sans, lowercase wordmark, medium-to-bold weight, tight tracking, pure white, no shadow or outline. Wordmark height should be ~15–20% of canvas height so it reads at 300px-wide preview thumbnails.
- **Canvas treatment**: edge-to-edge, no border, no radius (the platform crops it), no texture or grain unless the brand uses one.
- **Contrast check**: verify the mark survives at thumbnail size and in both light and dark chat clients; if the background's brightest area sits directly behind the mark, nudge the mark or dim that glow.

## Never
- Never reuse Luma's wordmark, sparkle glyph, exact gradient stops or any copy from the reference — substitute the user's own brand name, colours and signature glyph.
- Never present the output as Luma's card or include Luma's name, URL or imagery in the deliverable.
- Never clutter the card with screenshots, photography, badges or multiple lines of text; the reference's power is its restraint.
