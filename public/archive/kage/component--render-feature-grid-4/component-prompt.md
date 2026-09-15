## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073950-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/render-com/a2f1bfec-cff8-46a3-938e-5c68bed6eccd-1789073879-full.webp
- Component on Kage: https://kage.design/component/render-feature-grid-4

# Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and type choices are. Then apply the principles below to create a feature-grid section for my product—not a copy of the reference.

## Goal
Build a calm, trustworthy feature section that communicates a security, reliability, or infrastructure promise and then makes that promise concrete through a grid of capabilities. The section should feel like part of a polished B2B SaaS marketing page: editorial, spacious, technically credible, and easy to scan.

## Structure
- Use a full-width section with a very light background, preferably white or a near-white such as `#FAFAFA`.
- Add a subtle horizontal divider at the top using a low-contrast neutral such as `#E5E5E5`.
- Constrain the content to a centred max-width of roughly 960–1120px, with generous horizontal padding: about 32px on tablet and 48–64px on desktop.
- Place the section heading in the left half or left two-thirds of the container, leaving intentional open space around it.
- Put a short supporting sentence directly below the heading, with enough separation to establish a clear hierarchy.
- Follow with a responsive feature grid. Use three columns on desktop, two on medium screens, and one on small screens. Keep every card aligned to the same column rhythm.
- If the page benefits from a decorative treatment, add a very faint geometric grid or stepped line pattern in the upper-right background. It must remain secondary, low contrast, and never interfere with text.

## Layout and alignment rules
- Align the heading, supporting copy, and feature cards to the same left content edge.
- Use a generous vertical gap between the section intro and the card grid—roughly 44–64px.
- Give cards consistent minimum heights or let content flow naturally while preserving aligned starts and balanced row spacing.
- Keep the grid airy rather than card-heavy: avoid large filled containers unless the product's brand requires them.
- Use a compact icon or visual marker above each card title, followed by a clear title and one short explanatory paragraph.
- On mobile, reduce the section padding but retain meaningful whitespace; stack cards with 32–44px gaps.

## Typography
- Use the product's brand sans-serif, or a neutral modern sans-serif fallback.
- Make the main heading large and light-to-regular in weight, approximately 52–64px on desktop and 38–46px on mobile, with a tight line-height around 0.98–1.08.
- Keep the heading to two or three lines where possible. Use natural line wrapping rather than forced awkward breaks.
- Set supporting text around 22–26px desktop and 18–20px mobile, with a line-height around 1.25–1.4.
- Feature titles should be approximately 18–21px, medium weight, and near-black.
- Feature descriptions should be approximately 16–18px, regular weight, with a relaxed 1.45–1.6 line-height and a muted neutral colour.
- Maintain strong contrast between heading, title, and body copy without using excessive font weights.

## Colour and visual language
- Use near-black for primary text, approximately `#171717` or `#1A1A1A`.
- Use a softened charcoal such as `#5C5C5C` for descriptions and supporting text.
- Use a restrained neutral border such as `#E2E2E2` or `#E8E8E8`.
- Give each icon or icon tile one vivid brand-aligned accent. A suitable starting palette is electric violet `#8B16E8`, bright green `#5CF06A`, cyan `#38D9F5`, or warm yellow `#F1D44B`; adapt it to the user's brand.
- Keep decorative lines and grid motifs around `#E8E8E8` with low visual prominence.
- Avoid gradients, shadows, and excessive colour unless the product brand clearly calls for them.

## Borders, radius, and icon treatment
- Prefer hairline dividers and open space over bordered cards.
- If cards need separation, use subtle 1px borders or a very faint background shift, never heavy panels.
- Keep corners square to gently rounded, approximately 0–8px; choose the value that fits the brand.
- Use small, simple icons with a consistent stroke or pixel-inspired treatment. Icons should symbolise concepts such as privacy, protection, compliance, networking, resilience, or monitoring.
- If using coloured icon tiles, make them compact—roughly 36–44px square—with a vivid fill and a simple contrasting glyph. Do not let the icon become more prominent than the feature title.

## Interaction and responsive behaviour
- This section is primarily informational and should not require interaction.
- If feature cards are clickable, make the entire card or title a clear link and add a restrained hover state: slightly stronger border contrast, a small upward or forward movement, or a subtle icon colour shift.
- Preserve keyboard focus visibility with a clear outline using the brand accent.
- Respect reduced-motion preferences and avoid hover effects that cause layout shifts.
- Ensure text wraps cleanly, icons remain aligned, and the three-column layout collapses without horizontal scrolling.

## Content guidance
- Write a concise, benefit-led heading about the user's product's security, reliability, or operational confidence.
- Use a short supporting line that reinforces the customer outcome.
- Create 6–9 feature items with distinct, specific titles and one or two sentences of explanatory copy. Keep descriptions roughly similar in length so the grid feels balanced.
- Use language appropriate to the user's audience and avoid unsupported compliance or security claims.

## Accessibility and implementation
- Use semantic HTML: a `section`, one `h2`, and a list of feature items where appropriate.
- Provide accessible names for icons or mark decorative icons as hidden from assistive technologies.
- Maintain WCAG-compliant text contrast and visible keyboard focus.
- Build with CSS Grid and responsive breakpoints rather than positioning cards manually.
- Keep the section performant and avoid decorative assets that add unnecessary loading cost.

## Never
- Never reuse the reference's logos, product names, feature names, copy, or exact wording.
- Never copy the reference's illustrations, icon artwork, decorative grid pattern, or imagery; create a new treatment suited to the user's brand.
- Never make the result look like a pixel-for-pixel clone of the reference.
- Never use fake customer, compliance, uptime, or security claims without the user providing them.
- Never sacrifice readability or responsive behaviour to preserve a particular visual arrangement.
