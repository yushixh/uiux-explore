## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/posthog-com/e03826ba-decc-4369-9fe3-adaf740a85d6-1789060043263.webp
- Design on Kage: https://kage.design/designs/posthog-og-image

## Before you start
Ask the user what they are building, who the product is for, and which brand assets already exist (name, wordmark, logo mark, colour palette, typefaces). Also ask what the card's single message should be — a short headline and, optionally, an install command or URL to feature in a chip. Wait for the answers. Everything below is applied to their product and their palette, not to the reference site.

## The deliverable
Produce ONE static social share card at exactly 1200×630:
- Preferred: a single `og-card.html` with fixed pixel dimensions (no responsive rules), rendered to PNG at 1200×630 (2× for crispness) via a headless browser or screenshot step.
- Alternative: a standalone `og-card.svg` with the same composition.
- No animation, no external requests; embed fonts or use system-safe fallbacks.

## Canvas structure
1. **Background scene (full bleed, 1200×630)** — an environment, not a flat colour: a muted natural landscape built from flat low-poly facets (a field, a few trees, one small prop) in 3–4 tints of one hue. Keep detail low and pushed to the corners so the centre stays calm.
2. **OS chrome strip (top ~48px, full width)** — a light translucent bar selling the desktop conceit: small logo mark + 4–5 short menu words on the left; a rounded accent-coloured CTA pill, a search glyph and a circular avatar dot on the right. Type at ~13px.
3. **Central window (~820×500, centred, slightly above middle)** — the focal object: a cream card, radius ~20px, one soft drop shadow, two tiny window-control glyphs top-right. Inside, top to bottom:
   - logo lockup: small geometric mark + bold wordmark (~28px);
   - headline in very heavy type (~64–72px, two lines max) with ONE phrase wrapped in a highlight — accent-coloured text on a pale tint block behind it, like a text selection;
   - two short supporting paragraphs (~20px), with one phrase underlined by a hand-drawn stroke in the accent colour;
   - a nested panel (~55% width, lighter tint, radius ~10px): bold label + help glyph on the left, muted secondary link on the right, and beneath them a white command chip with monospace text in two tones (plain token + coloured package token) plus a copy glyph;
   - a closing row of three small text links separated by dot separators.
4. **Flanking shortcut icons (left and right edges, outside the window)** — three small rounded tiles (~44px) per side with tiny labels underneath, evenly spaced down the edge. Purely ambient.

## Design language
- **One window, one message.** All essential content lives in the central card; background and chrome only set the scene. If a viewer reads nothing but the highlighted phrase, the card still works.
- **Focal hierarchy:** wordmark (small) → headline (huge) → highlighted phrase (the loudest colour moment) → command chip (secondary) → edge icons (tertiary). Build it with a ~4× scale step between headline and body.
- **Colour:** one muted natural base hue for the scene (e.g. sage greens #9aa88f / #7d8a6c / #b7c2a4), one warm neutral for the window (#efece2 → #e6e2d2), near-black ink for type (#1c1c1c), a single warm accent (e.g. #f2a03d) for the CTA pill and underline, and one cool accent (e.g. #3b7ff0 on #d3e5fc) for the highlighted phrase. Substitute the user's palette; never exceed two accents.
- **Type:** a geometric/grotesque sans throughout — headline at 800 weight, body at 400–500; ONE monospace face reserved exclusively for the command chip. Tight leading (~1.05) on the headline, generous (~1.5) on body text.
- **Shape and depth:** large radius (16–20px) on the window, small (8–10px) on nested panels and chips; exactly one soft shadow (large blur, low opacity, slightly downward) under the window; flat colour everywhere else — no gradients on text, no bevels.
- **Density:** low. Generous inner padding (~56px); the card's breathing room lives in the illustrated field, not inside the window. Keep a 48–64px safe margin so previews that crop edges never clip the headline or highlight.
- **Mood:** playful but disciplined — the retro desktop conceit and one hand-drawn underline carry the personality; everything else stays flat, clean and readable at thumbnail size.

## Never
- Do not use the PostHog name, wordmark, hedgehog logo, its headline copy ("Shift your product into self-driving mode"), the `npx @posthog/wizard self-driving` command, or any of its icon set or desktop-icon labels.
- Do not recreate the reference verbatim; rebuild the composition with the user's brand, palette, headline and chip content.
- Never present the result as PostHog or imply any affiliation.
