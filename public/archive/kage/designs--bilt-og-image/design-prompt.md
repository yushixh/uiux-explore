## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bilt-com/1abd99e0-e625-4970-9b32-1b5600ae7dc2-1789146765656.webp
- Design on Kage: https://kage.design/designs/bilt-og-image

# 1200×630 social card — dark map with floating reward annotations

## Before you start
Ask the user what product or company the card is for, who will see it when shared (X, Slack, LinkedIn, iMessage), the single message it must land, and what brand assets already exist (name, logo, colours, typeface). Wait for the answers. Everything below is applied to their brand and copy — not to any reference product.

## Page structure
Produce one image at exactly 1200×630 — either HTML/CSS sized to 1200×630 and rendered to PNG (e.g. headless screenshot), or a self-contained SVG with fonts embedded. The reference composition was portrait (3:4); translate it to the standard landscape card as follows, top to bottom of the canvas:

1. **Background layer** — a full-bleed dark city map covering the entire canvas: near-black navy base, thin low-contrast street lines, occasional darker teal blocks for parks. It is texture, not content; everything on top must out-contrast it.
2. **Annotation layer (upper two-thirds)** — three or four floating pill cards scattered diagonally across the canvas like map pins, each with a small 6px white dot just below it as an anchor. One card is the hero: visually inverted (pale background, dark text) and slightly larger, placed left-of-center. The remaining cards are dark glass toasts, each with a small square icon tile, a bold one-line action title, and a secondary reward line in a muted gold tone.
3. **Headline block (lower-left)** — a two-tone statement in large type, max two or three lines, left-aligned with a generous margin (~64px). First sentence in near-white; the rest of the sentence in a muted slate tone.
4. **Optional wordmark** — a small, quiet brand mark top-left or above the headline. If the user has no logo, use a plain text wordmark in the headline typeface.

## Design language
- **Canvas and colour:** base `#0A0F1A`–`#0D1420`; street lines `#222A3A` at ~40% opacity; park blocks `#132622`. Dark cards: `rgba(28,33,44,0.92)` with a 1px border `rgba(255,255,255,0.06)` and backdrop blur. Hero card: `#DEE7F4` background, text `#0E1B33`, icon tile `#14294A` with a white glyph. Secondary reward text in muted gold `#C6A15B`. Headline white `#F4F6FA`, muted tail `#7E8AA0`. Limit the palette to these five roles; the gold appears only on reward lines.
- **Hierarchy:** one inverted hero card outshines everything; dark cards are second; the headline is third in brightness but largest in size. Never make two elements equally loud.
- **Type:** a single modern grotesque sans (e.g. Inter or similar). Headline 64–72px, weight 400–500, line-height 1.08, letter-spacing −0.02em. Card titles 20–22px at weight 600. Secondary lines 16–18px at weight 500. No serif, no display face.
- **Shape and depth:** cards fully rounded pills (radius ~12px), icon tiles small rounded squares (~8px). Soft, wide shadows (`0 8px 24px rgba(0,0,0,0.45)`) so cards float off the map; no hard borders except the faint 1px hairline on dark cards.
- **Composition rules:** keep the lower-right quadrant calm so the headline owns the bottom; distribute cards on a loose diagonal with uneven spacing — never a grid; every card gets its anchor dot. Content is static — no motion, gradients kept near-invisible, contrast carried by value not hue.

## Never
- Do not use the reference product's name, wordmark, copy, headline, card texts, city map imagery, or its specific emoji/icon set (fork-and-knife, pill bottle, house, dumbbell). Use generic category icons drawn as simple inline SVG for the user's own actions.
- Do not present the result as the reference brand, and do not reuse its reward phrasing; invent placeholder copy for the user's product unless they supply real copy.
- Do not exceed the 1200×630 safe area or let the map layer rise above ~15% contrast.
