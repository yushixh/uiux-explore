## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074851-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/convex-dev/1b90134a-1727-4d68-9c37-d8b1750ddf17-1789074817179-full.webp
- Component on Kage: https://kage.design/component/convex-feature-grid-2

## Before you start

Ask the user what their product does, who it is for, and what visual brand they want to use. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal

Build a dark, developer-oriented feature-grid section that introduces a family of capabilities or reusable modules. The section should make a complex product feel composable: lead with a confident editorial statement, explain the value in a short paragraph, then present several focused feature cards with a visible next action. Optionally include a compact row of ecosystem or integration items and a single centered link below it.

## Design language

### Layout and alignment

- Use a full-width dark section with a centered content container, approximately 1180–1240px wide.
- Keep the primary content aligned to the same left edge: eyebrow, heading, paragraph, and card grid.
- Add generous top and bottom padding, around 72–104px on desktop.
- Place a small uppercase eyebrow above the heading.
- Use a two-line maximum heading with a strong left alignment and a readable text measure around 600px.
- Put the feature cards in a three-column grid with equal widths and a 8–12px gap. On smaller screens, collapse to one column or two columns depending on available width.
- Place an optional integration row below the cards. Use five compact equal-height tiles on desktop and allow horizontal scrolling or wrapping on mobile.
- Finish with one centered pill-shaped secondary CTA beneath the integration row.
- Preserve clear separation between the explanatory copy, feature cards, integration row, and CTA; do not let the section become a single undifferentiated block.

### Typography hierarchy

- Use a technical sans-serif or clean grotesk for all UI text. A restrained monospace face may be used for labels and install commands.
- Eyebrow: 10–12px, uppercase, slightly expanded tracking, medium weight.
- Main heading: 40–48px desktop, 32–38px mobile, 0.95–1.05 line-height, bold or extra-bold.
- Introductory paragraph: 16–18px, 1.5–1.65 line-height, muted light gray, maximum width around 620px.
- Card label: 10–12px uppercase monospace or compact sans-serif, with a small bordered badge treatment.
- Card title: 16–18px, semibold, tight line-height.
- Card description: 14px, 1.5 line-height, soft gray with enough contrast for accessibility.
- Command row: 14–15px monospace. Keep the command visually scannable and prevent it from overpowering the feature title.
- Integration names: 15–16px, semibold.
- CTA: 14px, semibold.

### Colour

- Section background: near-black charcoal, approximately #151515 or #171717.
- Card background: slightly lighter charcoal, approximately #292929–#2D2D2D.
- Integration tile background: #373737–#3B3B3B.
- Primary text: warm white, approximately #F5F3EE.
- Secondary text: #B7B5B0 or another low-saturation gray.
- Badge and border colour: muted warm gray or pale cream, approximately #D7D0BC, at reduced opacity.
- Command strip: near-black, approximately #171717, nested inside the card.
- Accent colour: use one restrained warm accent such as muted orange #D8794F for arrows or highlights. Adapt it to the user’s brand rather than copying this value exactly.
- If adding decorative technical detail, keep it low contrast and partially clipped so it supports the composition without competing with the content.

### Borders, radius, and surfaces

- Use thin 1px borders with low-opacity warm gray, especially around badges and integration tiles.
- Feature cards should have a medium-large radius around 14–16px.
- Integration tiles can use a smaller radius around 6–8px.
- The command strip should have a radius around 7–9px.
- Use restrained shadows, if any; rely on tonal contrast rather than glossy elevation.
- Keep card padding around 12–16px, with the command strip anchored toward the bottom so cards maintain a consistent visual rhythm even when descriptions vary.

### Interaction and responsive behaviour

- Make each feature card feel actionable: the command row may include an arrow, copy affordance, or link indicator aligned to the right.
- On hover, slightly lift or brighten the card, increase border contrast, and transition the arrow or accent by a few pixels. Keep transitions around 150–220ms.
- The command row should support copying if it represents an install command; provide a subtle copied state without disrupting layout.
- The centered CTA should brighten on hover and move its arrow slightly to communicate navigation.
- Ensure keyboard focus states are visible with a clear accent outline.
- On mobile, stack the heading and copy naturally, turn cards into a single-column list, preserve comfortable tap targets, and allow integration items to wrap or scroll without squeezing text.

### Content structure

- Use original, product-specific content supplied by the user.
- Each card should include: a concise category label, a capability-focused title, one explanatory sentence, and an optional command or action row.
- Keep the titles parallel in tone and length where possible.
- Use the integration row only when it adds credibility or communicates ecosystem breadth; otherwise replace it with a compact metadata or proof row relevant to the product.

## Never

- Never use logos, product names, copy, illustrations, imagery, commands, or branded assets from the reference.
- Never reproduce the reference’s exact card titles, labels, integration names, or CTA wording.
- Never make the section depend on decorative artwork to communicate its value.
- Never use low-contrast text, tiny inaccessible controls, or hover-only functionality.
- Never turn every surface into a pill; reserve pill shapes for badges and the primary secondary CTA.
- Never copy the reference layout so literally that the result cannot feel native to the user’s product and brand.
