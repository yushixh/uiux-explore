## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/goodreads-com/09a603bf-fc2e-42c1-92da-62f9c723f214-1789146302269.webp
- Design on Kage: https://kage.design/designs/goodreads-og-image

## Before you start
Ask the user what they are building, who it is for, and what brand assets they already have (name, wordmark style, colours, typeface). Wait for the answers before generating anything. Then produce a **1200×630 social card image** (Open Graph / share-card asset) inspired by the composition described below — for example as a fixed 1200×630 HTML/CSS page rendered to PNG (Puppeteer, Playwright, or a headless-browser screenshot), or as a standalone SVG. All branding, copy and colours come from the user's product; nothing comes from the reference.

## Page structure
The card is a single flat composition with four layers, top to bottom:

1. **Background band** — the full canvas is filled with a light cream. Only the top ~12–18% of this cream stays visible; it acts as breathing room above the focal shape.
2. **Focal colour field** — a large dark plum shape covers the remaining ~85% of the canvas. Its top edge is a single organic curve: it starts lower on the left, rises, dips to a soft point at the horizontal centre of the card (suggesting the valley between two open pages), then rises and settles again toward the right edge. Implement this with an SVG `<path>` or a CSS `border-radius`/`clip-path` shape — one smooth, asymmetric wave, not a sine curve.
3. **Headline** — one short value-proposition line, centred on the vertical axis, sitting slightly above the optical middle of the plum field. Roughly 90–100px in a warm, high-contrast old-style serif (e.g. Playfair Display, Freight, or Georgia as a fallback), cream-coloured, sentence case, ending with a period. Exactly one word set in italic for emphasis.
4. **Wordmark** — the brand name in lowercase, centred beneath the headline with comfortable spacing (~40–60px gap), set in the same serif at roughly half the headline size (~60–70px), in an amber/gold accent colour.

## Design language
- **Palette (three flat colours, no gradients):** cream background `#E9E4D6`, plum field `#6D4E62`, cream headline text `#F2E9DC`, amber accent for the wordmark `#F3B243`. Two fields plus one text colour and one accent — swap these for the user's own brand palette, keeping one dark field, one light frame and one warm accent.
- **Composition:** everything centred on a single vertical axis; the headline sits at the optical centre with generous side margins (≥120px). The wave shape is the only graphic element on the card.
- **Type:** one serif family carries the whole card. Hierarchy is built purely from scale (headline ≈ 15% of canvas height, wordmark ≈ half that) and from a single italic emphasis word. Copy stays short: 4–6 words.
- **Shape and surface:** flat fills only — no shadows, no borders, no texture, no photography. The single curved edge should feel hand-drawn and asymmetric so the card doesn't read as a static banner.
- **Contrast and hierarchy:** the eye travels light band → dark field → headline → wordmark. Reserve the light colour for the headline so it dominates; the accent colour is used exactly once, on the wordmark.
- **Motion:** none — this is a static asset. Export at exactly 1200×630.

## Never
Never reproduce the Goodreads name, wordmark, logo, tagline ("Meet your next favorite book.") or any book-related imagery from the reference, and never present the result as Goodreads. Use the user's placeholder brand name and their own copy throughout.
