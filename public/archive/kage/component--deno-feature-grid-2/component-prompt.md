## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073865-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-feature-grid-2

# Before you start
Ask me what my product is, who it is for, and what its brand, visual identity, and primary feature set are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a long-form feature showcase for a developer-oriented or technical product. The section should communicate that the product has useful capabilities built in, using a sequence of alternating editorial copy blocks and realistic interface demonstrations. Prioritise clarity, credibility, and visual rhythm over dense card grids.

## Structure and layout
- Use a very light neutral page background, such as `#fafafa` or `#f8fafb`, with generous vertical breathing room.
- Start with a centred section introduction: a large, assertive headline, a short supporting paragraph, and enough whitespace to make the transition feel intentional.
- Follow with a vertical sequence of feature rows rather than a uniform collection of cards.
- Each row should use a two-column layout inside a centred max-width container of roughly 1120–1240px:
  - one column contains the feature title, explanatory copy, and an optional rounded call-to-action;
  - the other contains a product-specific visual demo, such as a terminal, code editor, metrics panel, configuration window, workflow preview, or comparison chart.
- Alternate the visual placement between rows so the page does not feel mechanically repetitive. Keep text and visuals vertically aligned around the centre of each row.
- Let the demonstrations occupy more visual weight than the copy, typically around 55–65% of the row on desktop. On mobile, stack copy before the demo and preserve generous separation between rows.
- Use occasional overlapping or layered panels only when they explain a relationship, such as a code window paired with a performance comparison. Keep overlaps controlled and readable.
- Avoid forcing every feature into a bordered card. The overall section should feel like an editorial narrative with embedded product evidence.

## Typography
- Use a clean modern sans-serif with strong rendering at large sizes; use a monospace face only inside technical UI.
- Section headline: approximately 64–76px, weight 650–750, tight line-height around 0.95–1.05, and slight negative letter spacing.
- Feature headlines: approximately 36–48px, weight 650–750, tight line-height around 1.0–1.1. Allow natural two-line wrapping.
- Body copy: approximately 17–19px, weight 400, line-height 1.5–1.65, in a soft charcoal rather than pure black.
- UI labels and code: 13–15px monospace, with clear hierarchy between commands, output, metadata, and annotations.
- Use bold emphasis sparingly in body text to highlight a meaningful product outcome, not decorative keywords.

## Colour
- Base background: `#fafafa`, `#f8fafb`, or a similarly near-white neutral.
- Primary text: `#080808` or `#111111`.
- Secondary text: `#5f6368` to `#73777c`.
- Borders and dividers: `#e2e5e5` or `#dfe3e3`.
- Product accent: choose one fresh, high-contrast brand accent—an approximate mint or green such as `#6bf0ac`—only if it fits the user's brand. Use it for buttons, status indicators, checks, selected tabs, and small highlights rather than large fills everywhere.
- Technical demos may use a near-black surface such as `#191a1d`, with muted gray text and the brand accent for prompts, active states, or success output.
- Maintain accessible contrast for all text and interactive controls.

## Panels, borders, and depth
- Use subtle 1px borders and restrained shadows. A useful shadow range is `0 8px 24px rgba(0,0,0,0.08)` for floating UI and `0 2px 8px rgba(0,0,0,0.05)` for flatter panels.
- Use medium corner radii around 8–12px for interface windows, charts, and code panels. Use a larger 24–32px radius for prominent pill-shaped calls to action when appropriate.
- Keep panel chrome minimal: a compact title bar, small status dots or labels, and clear content hierarchy. Do not add decoration that does not help explain the feature.
- For comparison or benchmark visuals, use simple horizontal bars, labels, and values with a short explanatory caption. Make the comparison legible without relying on animation.

## Spacing and rhythm
- Give the introductory block roughly 120–180px of vertical space above and below, depending on the surrounding page.
- Use approximately 120–200px between feature rows on desktop and 72–112px on mobile.
- Keep copy blocks around 360–480px wide so they remain readable beside large demos.
- Use an 8px spacing system, with common internal gaps of 8, 12, 16, 24, and 32px.
- Let large empty areas remain empty; the premium feel comes from restraint and alignment, not from filling every region.

## Interaction and responsive behaviour
- Buttons should have a clear hover state: slightly deepen or brighten the accent, and move an arrow or icon subtly if one is present.
- Tabs, menus, or selectable demo controls should visibly indicate the active state with accent colour, weight, or a thin underline.
- If the demo is interactive, keep the interaction lightweight and understandable: switching tabs can update the code/output panel, but the section must still make sense in its default state.
- Add a restrained transition around 150–220ms for hover, tab, and focus changes.
- Provide visible keyboard focus styles and accessible labels for controls.
- At widths below roughly 800px, collapse rows into one column, reduce the section headline to around 44–56px, and make technical panels horizontally scrollable only when necessary.
- Ensure charts, code, and terminal content remain readable on narrow screens; prefer shorter sample content over tiny type.

## Content guidance
- Write concise feature-led copy: a clear outcome-focused heading, one or two short paragraphs, and an optional action.
- Use realistic but original sample data, commands, code, filenames, metrics, and labels relevant to the user's product.
- Make each visual demonstrate the claim made by its adjacent copy. For example, a package-management claim should show a dependency or install workflow, while a testing claim should show test output.
- Include captions or footnotes for benchmark-style evidence so the context and limitations are clear.

## Never
- Never reuse the reference's logo, product name, brand identity, or exact copy.
- Never reproduce the reference's exact layout, wording, code samples, command names, labels, metrics, or benchmark claims.
- Never import illustrations, imagery, screenshots, or decorative assets from the reference.
- Never make the section a superficial visual imitation; adapt the principles to the user's product, audience, and brand.
- Never use meaningless placeholder UI that does not support the adjacent feature explanation.
- Never sacrifice accessibility, responsive behaviour, or legibility for visual similarity.
