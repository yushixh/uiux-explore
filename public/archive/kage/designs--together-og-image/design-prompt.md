## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/together-ai/4e578250-00f4-4b9b-8b8a-92ba9614e2e8-1789073688984.webp
- Design on Kage: https://kage.design/designs/together-og-image

## Before you start
Ask the user what product or announcement the card is for, who will see it (Slack/X/LinkedIn shares), and what brand assets they already have — name, logo, brand colours, typeface. Wait for the answers before designing; everything below is applied to *their* brand, not the reference.

## Canvas
Produce a single **1200×630** static social card. The cleanest route is an HTML/CSS artboard (e.g. a 1200×630 `div`) rendered to PNG via a headless browser or `satori`/`resvg`; a hand-built SVG with a blur filter also works. No animation, no external images — everything is CSS gradients and blurs.

## Page structure (top to bottom of the canvas)
1. **Background layer** — full-bleed pastel gradient field: sky blue (#a9cdf2) in the upper-left fading toward white (#f4f8fd) at the bottom, with a lighter blue pool along the right edge. It should read as ambient light, not a picture.
2. **Ambient shape layer** — on the right half, an abstract blurred form: a soft curved plane (a large rotated ellipse or `border-radius` blob in #9cc4ee) heavily blurred (~40–60px), plus one crisp element for contrast: a thin diagonal light streak (a rotated white bar, low opacity, slight blur) sweeping from the top-right toward centre-right.
3. **Logo lockup** — top-left at roughly x=110px, y=170px: a small mark (placeholder: three overlapping ~14px circles in two accent colours) beside the product name in lowercase, medium weight, near-black, ~28px. Keep this lockup noticeably smaller than the headline.
4. **Headline block** — directly below the lockup with tight spacing (~40px gap): two stacked lines, left-aligned, same size (~92px), same typeface. Line 1 in near-black (#141414) at heavy weight; line 2 in a mid-gray (#9aa3ad) at a lighter weight. This weight/colour flip is the card's main hierarchy device — apply it to the user's two-part message (e.g. bold action + light qualifier).
5. **Negative space** — leave the entire bottom third of the canvas empty. No footer, no URL, no badge unless the user asks for one.

## Design language
- **Composition rule:** one text column, left-aligned, optically centred vertically; imagery stays ambient and right-weighted so text never competes with it. Focal order: headline → logo → background shape.
- **Colour:** 90% of the canvas is two cool tones — pastel blue (#a9cdf2) and near-white (#f4f8fd). Text uses near-black (#141414) and one muted gray (#9aa3ad). Reserve 2–3 saturated accent colours for the logo mark only; they must not leak into the background or type.
- **Type:** a single geometric sans throughout. Headline ~90px, tight tracking (−1 to −2%), line-height ~1.15; lockup ~28px medium. Hierarchy is expressed through weight and colour only, never size steps.
- **Depth and edges:** no borders, no card shapes, no drop shadows. All depth comes from blur: heavy blur on the background form, near-sharp on the one light streak and on text.
- **Contrast check:** the text sits on the lightest zone of the gradient; if the user's background is busier, add a subtle white radial glow behind the text block instead of an outline or shadow.

## Never
- Do not reproduce the together.ai dots logo, wordmark, or the copy "Build what's next" / "on the AI Native Cloud". Use the user's brand name and message, or explicit placeholders.
- No photography, icon sets, UI screenshots or illustrations copied from the reference.
- Never present the output as together.ai or imply affiliation with it.
