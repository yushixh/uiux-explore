## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/anthropic-com/052e5d1a-68ae-46b6-98dd-8c7141684a36-1789060048208.webp
- Design on Kage: https://kage.design/designs/anthropic-og-image

## Before you start

Ask the user what product or brand the social card is for, who will see it (X, Slack, LinkedIn, iMessage shares), what tagline or single word/phrase must appear, and what brand assets they already have (name, colours, typeface, logo file). Wait for the answers before building. Everything below is applied to their brand, not to the reference.

## Deliverable

Produce a 1200×630 social card image. Recommended approach: a single self-contained HTML file sized exactly 1200×630 (inline CSS, web-safe or bundled font, `@page`/screenshot-friendly) that can be rendered to PNG via a headless browser, or an equivalent standalone SVG. No external requests; embed the font or fall back to a system grotesque.

## Page structure

- **Canvas (1200×630):** one flat background colour filling the entire frame — no border, no frame, no gradient, no texture.
- **Focal layer:** a single centred wordmark line, set uppercase with wide letter-spacing, occupying roughly 55–60% of the canvas width and optically centred (slightly above true vertical centre reads best).
- **Optional signature detail:** one small typographic flourish inside the wordmark (a glyph swap, slash, or stylised character) — the only “design” element on the card.
- **Nothing else:** no tagline, no URL, no icon, no secondary line. If the user insists on a secondary element, cap it at one small, low-contrast line below the wordmark.

## Design language

- **Hierarchy by subtraction:** one element, one focal point. If everything is centred and nothing competes, the card works at thumbnail size.
- **Negative space is the layout:** keep at least ~35% clear margin on all sides of the wordmark; the emptiness is what makes the word feel confident.
- **Colour:** two colours only — a warm off-white/ivory background (≈ #F0EEE6) and a near-black foreground (≈ #191919). Never pure #FFF/#000; the warm/soft pair is the mood.
- **Type:** a bold geometric or neo-grotesque sans in all caps, weight ~700, letter-spacing around 0.08–0.12em, sized so the wordmark fills ~55–60% of the canvas width. No serifs, no mixed case, no drop shadows.
- **Optical centring:** centre horizontally by measurement; vertically, nudge the wordmark a few pixels above geometric centre so it doesn't sink.
- **Flatness:** zero gradients, zero shadows, zero borders. The card is pure typography on a field.

## Never

- Never use the Anthropic name, wordmark, backslash-in-wordmark treatment, or their exact typeface; substitute the user's own brand name and a comparable grotesque.
- Never present the output as Anthropic's card or include any of their copy.
- Never add stock illustrations, photography, logos, or decorative elements absent from this composition style unless the user explicitly asks.
