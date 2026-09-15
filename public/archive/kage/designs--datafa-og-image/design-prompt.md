## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/datafa-st/d659778a-580e-475b-af95-802699bf73ca-1789060070972.webp
- Design on Kage: https://kage.design/designs/datafa-og-image

## Before you start
Ask the user what product the social card is for, who will see it when shared (X, Slack, LinkedIn, iMessage), the single promise or headline they want, and any brand assets they already have (name, colours, typeface). Wait for the answers before building. Everything below is applied to *their* product, not to the reference — use their brand name, placeholder metrics and placeholder copy where the reference shows its own.

## Page structure
Produce a single static 1200×630 canvas — either HTML/CSS sized exactly 1200×630 and rendered to PNG (e.g. a headless-browser screenshot), or one self-contained SVG. No scrolling, no navigation. Top to bottom:

1. **Rating row (top ~12%)** — a centred five-star row, small and quiet, acting as social proof above the headline. Only include if the user has a rating or equivalent proof point; otherwise drop it.
2. **Headline** — one line, sentence case, centred, the largest type on the canvas. A concrete benefit, not a product name.
3. **Hero visual** — one large white card, inset ~60–80px from the left and right canvas edges, with generous corner radius. Inside it: a layered chart as the focal imagery — rounded-top vertical bars on a shared baseline with a smooth area line weaving above/behind them. Populate it with the user's real metrics if they have them, else plausible placeholder data.
4. **Stat footer** — inside the card, bottom-left: one line of 2–3 key metrics separated by middots, e.g. `12.4k users • $8,120 MRR`. Bold dark numbers, lighter gray unit labels.
5. **Bleed** — let the white card run past the bottom edge of the canvas so the crop implies the full product continues below the fold.

## Design language
- **Canvas**: warm off-white/cream (~#F7F3EE), never stark white — the contrast with the pure-white card is what makes the card read as a floating product object. No gradients on the background, no borders, no shadow beyond at most a whisper-soft diffuse one.
- **Composition**: one centred vertical stack, no side columns, no logo lockup required. Everything above the card (stars, headline) is arranged to point at it; the chart is the only focal object.
- **Hierarchy by scale and weight, not decoration**: headline ~64–72px bold; stat numbers ~40–48px bold; stat labels the same size but regular weight in gray (~#6B7280). Sentence case throughout, tight line-height. No all-caps, no letter-spaced eyebrows.
- **Type**: a single geometric-humanist sans (e.g. the user's brand font, or Inter/Manrope as fallback) doing all the work — bold for headline and numbers, regular for labels. Two weights maximum.
- **Colour**: neutrals plus exactly three soft accents — a coral-orange for bars (~#F0714F), a sky-blue for the line (~#7CC0F0) with a vertical gradient fading to white beneath it, and a golden yellow for stars/rating (~#F0B429). Swap these to the user's brand palette but keep the count at three and keep them on rounded shapes only.
- **Data-viz styling**: bars with rounded tops (6–10px radius), deliberately uneven organic heights — spiky and varied, never a uniform ladder; the line is smooth with gentle waves and overlaps the bars for layered depth. No axes, no gridlines, no legends — the stat row is the caption.
- **Spacing**: generous — ~70px canvas padding, clear breathing room between stars, headline and card. Density is low; the card interior is the only busy area.
- **Motion**: none — this is a static image; ensure the export is crisp at 1200×630 and legible when scaled down to a Slack/X thumbnail (headline must survive ~600px width).

## Never
- Do not use the Datafast name, wordmark, tagline, headline copy ('Find your best marketing channels'), its star rating, or its exact chart data anywhere in the result.
- Do not reproduce its logo or icon set; build the card from the user's own branding and placeholder content only.
- Never present the output as Datafast or imply any affiliation with it.
