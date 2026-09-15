## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/termsquad-com/ec7257fc-f9b5-468a-92b5-4775182d2a04-1789166918373.webp
- Design on Kage: https://kage.design/designs/termsquad-og-image

## Before you start
Ask the user what product the card is for, who it is for, and what brand assets they already have (name, logo/wordmark, brand colours, tagline). Wait for the answers. Everything below is applied to *their* product — the reference is only a compositional template.

## Goal
Produce a single **1200×630** Open Graph social card image, rendered as HTML/CSS (e.g. a fixed 1200×630 page screenshot to PNG via Playwright/Puppeteer) or as an SVG. Use placeholder branding and copy if the user hasn't supplied real assets.

## Page structure (canvas layout)
- **Background**: near-black (#0a0d0c–#111412) with very subtle diagonal light streaks or a soft gradient in the corners — barely visible texture, not decoration.
- **Left column (~55% width)**, vertically stacked with generous padding (~64px):
  1. Wordmark row: small geometric logo mark (3–4 squares, one accent-coloured) + wordmark in white sans, accent-coloured terminal-cursor period.
  2. Headline: 3 lines, ~64–72px semibold sans, tight leading. Last line in a muted/pale accent colour instead of white for emphasis.
  3. Subhead: 1–2 lines, ~24px, muted grey (#9aa39e), max ~40ch.
  4. Bottom row: small "Works with" label in grey + 5–6 simple monochrome glyph placeholders + "+ more".
- **Right column (~45%)**: a mocked terminal/browser window card (~600×470), rounded ~12px, slightly lighter dark surface (#161a18) with subtle border:
  - Title bar with red/yellow/green traffic lights and a centred URL pill.
  - Second bar with a session name, a small green status dot, a mini logo and window icons.
  - Body: two-column monospace log (~13px) with uppercase grey role labels (e.g. ORCHESTRATOR / IMPLEMENTER / REVIEWER), a left-gutter line number, white text lines, and task/check lines where "✓" items are in green (#4ade80-ish) and action lines prefixed with "↳" in grey.

## Design language
- Hierarchy: wordmark → headline (largest element on canvas) → subhead → icon row; the terminal window is the proof visual, visually secondary to the headline but equal in area.
- One accent colour used sparingly across exactly three spots: logo, emphasized headline line, and success states — everything else is white/grey on near-black.
- Type pairing: humanist sans (e.g. Inter) for wordmark/headline/subhead; monospace (e.g. JetBrains Mono) only inside the terminal mock. Headline leading ~1.05, letter-spacing slightly negative.
- Terminal mock must look authentic: real-feeling content, consistent indentation, gutter numbers, role labels in uppercase small caps with wide tracking.
- No shadows heavier than a soft ambient glow; define edges with 1px borders (#2a302d) and surface-value differences instead.
- Keep all key content inside safe margins (~48px); nothing essential within 24px of an edge.

## Never
- No logos, wordmarks, product names, icon sets or copy from the reference (no TermSquad, no OpenAI/Anthropic/xAI/Gemini logos — use abstract placeholder glyphs).
- Never present the result as the reference product; it is a social card for the user's own brand.
