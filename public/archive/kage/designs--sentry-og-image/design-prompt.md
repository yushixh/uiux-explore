## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/c3b1c2c6-51b0-4c27-82f2-e9204e1a73a4-1789073673623.webp
- Design on Kage: https://kage.design/designs/sentry-og-image

## Before you start
Ask the user what product they are building, who it is for, and which brand assets they already have (name, logo, brand colours, typeface, and whether they have a mascot or illustration style). Wait for the answers before designing. Everything below is applied to *their* product — the reference card is only a composition and style lesson, not the content.

## Page structure
Produce a single **1200×630 image** — e.g. an HTML/CSS canvas rendered to PNG, or an SVG exported to PNG — that works as an Open Graph card for a link share. Compose it as three vertical zones:

1. **Left rail (bleeds off-canvas):** two stacked rounded panels, each a skeleton mock of a real product screen — one showing a replay/timeline strip, one showing a span/waterfall chart. Panels are cut by the left edge so they read as "peeking" product proof rather than full screenshots.
2. **Centre focal character:** an oversized illustrated mascot (flat vector, thick shapes, one strong outline treatment) posed mid-action, holding or operating two tools — one aimed left, one aimed right.
3. **Right panel (bleeds off-canvas):** a diagnosis or result card: a product feature name as a lime heading, a short status line, a labelled section with a check icon, 3–4 event rows each with a small icon chip and one truncated line of copy, then a skeleton footer of lime bars suggesting more output.
4. **Light beams:** translucent cones of colour connecting the mascot's tools to the left and right panels, visually implying the character is inspecting or fixing both sides.

No large wordmark is required; if the user wants one, place it small in a corner with generous margin.

## Design language
- **Canvas & background:** exact 1200×630; deep purple-black background (~`#150B2E`) with a subtle darker vignette at the edges so panels and character float forward.
- **Focal hierarchy:** one dominant element — the mascot at ~70% of canvas height, centred. Side panels sit at lower contrast and partial crop; the eye travels mascot → beam → panel, then repeats on the other side.
- **Panels:** dark purple surfaces (~`#2A1657`), 16–20px radius, no heavy borders or shadows; separation comes from value contrast against the background.
- **Skeleton UI language:** represent product screens with simplified shapes — pills, bars, timeline segments in orange (~`#FF7A1A`) and yellow (~`#FFC21A`) accents, secondary bars in white at 40–60% opacity, never real interface chrome.
- **Beams:** two translucent cones (magenta ~`#E23FA9` at ~35% opacity on one side, lime ~`#A6F23C` on the other), emanating from the mascot's tools; they double as the card's brightest connective tissue.
- **Colour discipline:** purple/magenta family owns the character and background; neon lime is rationed to at most 3–4 moments (two headings, check icon, skeleton bars); warm orange/yellow exists only inside the left UI skeletons.
- **Type:** a chunky geometric sans, bold weight, for panel headings; lime green for the feature headings, white for body; event rows at ~14–16px with tiny square icon chips and intentionally truncated single lines to fake density. Use the user's brand typeface if they have one.
- **Mood:** playful but technical — character art supplies the personality, skeleton UI supplies the credibility; neither is allowed to clutter the other.

## Never
Do not reproduce Sentry's robot mascot, its poses or colourway; do not use the Sentry wordmark, "Seer", or any copy from the reference (ReferenceError, Laravel, checkout-form strings). Build a placeholder mascot in the user's own illustration style, use their product name, and invent generic event lines. Never present the output as Sentry's card.
