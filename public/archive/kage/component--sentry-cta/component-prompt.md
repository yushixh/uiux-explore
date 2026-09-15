## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073905-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-cta

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, typography, and primary conversion goal should guide the implementation. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build this section
Create a full-width, dark hero CTA for a developer-focused product. The section should feel confident, technical, spacious, and slightly playful. Use a terminal-style command bar near the top and a large headline positioned low in the composition, with enough vertical breathing room that the headline feels like the payoff of the command above it.

### Layout and alignment
- Use a deep, full-bleed background with a centered content container, approximately 1120–1280px wide.
- Place a terminal panel near the top of the section, aligned to the main container. It should be wide and shallow, with a small header strip and one command row.
- Keep the terminal visually restrained so it acts as an entry point rather than the primary CTA button.
- Place the headline below the terminal with substantial vertical separation—roughly 220–280px on desktop, adjusted responsively so the section does not become excessively tall on smaller screens.
- Align the headline to the same left edge as the terminal content. Use a maximum text width that allows a bold, multi-line statement.
- If adding decorative artwork, let it sit partially outside the left and right edges of the content area, cropped by the viewport. It should frame the composition without obstructing the terminal or headline.
- On mobile, stack the terminal and headline naturally, reduce the empty vertical space, hide or simplify edge decoration, and preserve comfortable horizontal padding of 20–24px.

### Typography hierarchy
- Use a bold contemporary sans-serif with strong geometric or grotesk characteristics.
- The main headline should be very large and heavy: approximately 64–88px desktop, 44–58px tablet, and 36–46px mobile; line-height around 0.95–1.02 and slightly tight letter spacing.
- Break the headline intentionally across lines. Use one neutral light colour for the first line and a vivid accent colour for a following line or phrase.
- Terminal labels should be compact and understated, around 12–14px. The command text should be 15–18px with a monospace font and a soft lavender or muted accent colour.
- Avoid adding unnecessary supporting copy; this composition relies on a short, memorable statement and a tangible developer action.

### Colour and visual treatment
- Start with a near-black purple background, approximately #1D142F or #211631.
- Use an almost-white headline, approximately #F7F5F2.
- Use a saturated pink/magenta accent for the emphasized headline text, approximately #EC168C or #F229A2.
- Use muted lavender for terminal text, approximately #A99BD8, and a deeper translucent purple-black for the terminal surface, approximately #120D20.
- Decorative accents may use a small set of high-energy colours such as orange #FF6A00, violet #6937E8, and hot pink #E40087, but keep them subordinate to the headline.
- Maintain strong contrast and do not use gradients unless they are extremely subtle and support legibility.

### Borders, radius, and terminal details
- Give the terminal panel a thin, low-contrast border, approximately rgba(255,255,255,0.08), with a square or minimally rounded shape: 0–4px radius.
- Use a slightly darker header band separated from the command row by a subtle bottom border.
- Include a small language label on the left of the terminal header and a copy icon/control on the right. The copy control should be icon-only, keyboard accessible, and show a brief “Copied” state or tooltip on activation.
- Use generous internal padding: approximately 14–18px in the header and 28–36px horizontally in the command row.
- Avoid card shadows; depth should come from colour contrast and layering.

### Interaction and responsive behaviour
- Make the copy control visibly interactive with hover, focus, and pressed states. Use a subtle background tint rather than a large animation.
- If the command itself is the conversion action, make the whole terminal row selectable without making it look like a conventional button.
- Add a restrained entrance animation: terminal fades or slides upward slightly, followed by the headline. Respect `prefers-reduced-motion`.
- Ensure decorative elements never capture pointer events and never reduce text contrast.
- Keep the section’s primary action obvious through the command or a nearby small CTA, but do not overload this sparse composition with multiple buttons.

## Never
- Never use the reference product’s logo, product name, brand name, or exact command.
- Never reuse the reference’s exact headline, supporting copy, illustrations, characters, or imagery.
- Never trace or recreate the reference artwork; use abstract shapes, original artwork, or omit decoration entirely.
- Never copy the exact spacing, typography treatment, or colour combination without adapting it to the user’s product and brand.
- Never sacrifice accessibility for the visual composition: provide semantic headings, keyboard focus states, sufficient contrast, responsive layout, and reduced-motion support.
