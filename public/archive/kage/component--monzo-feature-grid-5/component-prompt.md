## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060821-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-feature-grid-5

# Build a trust-led feature grid for a modern consumer product

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to my product rather than reproducing the reference. Ask for any missing content, preferred framework, and responsive requirements before implementing.

## Goal
Create a website section that communicates several practical product benefits, reinforces credibility with a recognisable proof point, and ends with a low-friction call to action. It should feel optimistic, approachable, polished, and easy to scan.

## Structure
- Place the section on a warm white or very pale neutral page background.
- Start with a responsive feature grid of 2–3 cards. Each card should have a bold colour field, a compact visual or abstract product cue near the top, a rounded label, a short benefit heading, and a concise explanatory paragraph.
- Use varied card colours to make the grid feel lively, but keep text contrast accessible. Suitable starting colours: deep navy `#102331`, vivid coral `#ff4b43`, soft mint `#dff4ee`, warm yellow `#f6df67`, and pale lavender `#e9e4ff`.
- Follow the grid with one large horizontal credibility panel. Use deep navy `#102331`, a very large radius of roughly `48–64px`, and generous internal padding. Arrange the proof visual on the left and the text/action group on the right on desktop; stack them on small screens.
- Finish with a lighter conversion panel using a pale mint or cool off-white background, the same large radius, centred heading and supporting text, and one prominent dark CTA.
- Keep all sections within a centred max-width of about `1120–1200px`; use consistent outer gutters of `24px` on mobile and `64px` or more on desktop.

## Layout and alignment rules
- Use CSS Grid for the feature cards, with equal-height cards where practical and a gap of `24–32px`.
- Align card content to the bottom when the visual area varies, so the labels and copy form a consistent rhythm.
- Give the credibility panel a two-column ratio near `1fr 1fr`, with generous whitespace rather than tightly packing the proof visual and copy.
- Centre the final CTA panel's content, but constrain text to a readable measure of roughly `620–720px`.
- Collapse to one column below approximately `760px`; reduce panel radii to `28–36px` and internal padding to `28–32px`.

## Typography
- Use a friendly, contemporary sans-serif with rounded details if the product brand permits; otherwise use the brand font.
- Use a heavy display heading for major statements: approximately `48–56px` desktop, `34–40px` mobile, with `0.95–1.05` line-height and slightly tightened tracking.
- Use card headings around `18–22px`, bold, with a `1.15` line-height.
- Use body copy around `17–20px`, medium weight, with approximately `1.4` line-height.
- Keep labels compact and emphatic: `14–16px`, semibold, with a slightly translucent light or dark fill depending on the card.
- Avoid long paragraphs; make each card understandable in a quick scan.

## Colour, borders, and shape
- Prefer solid colour blocks over gradients and heavy decoration.
- Use near-black navy `#102331` for primary dark surfaces and text where appropriate, not pure black.
- Use white `#ffffff` or warm white `#fbfcfa` for primary buttons and high-contrast surfaces.
- Use dark text on pale surfaces and white text on dark or saturated surfaces; check WCAG contrast.
- Cards should have rounded corners around `28–40px`; the larger proof and CTA panels can use `48–64px`.
- Avoid visible borders on filled cards. On pale surfaces, use a subtle `1px` border such as `rgba(16,35,49,.08)` and a very soft shadow only if needed.
- Buttons should be pill-shaped with roughly `999px` radius, `16–20px` horizontal padding, and a minimum height of `48px`.

## Visuals and interaction
- Use original, product-relevant visuals or simple abstract shapes supplied by my product; do not rely on stock imagery.
- The credibility panel may contain badges, metrics, ratings, or a product screenshot, but keep the proof visual visually secondary to the message.
- Make links and buttons clearly interactive. On hover, slightly lift the card or button, increase contrast, or shift the colour subtly; keep transitions around `160–220ms` and respect reduced-motion preferences.
- Add visible keyboard focus states with a high-contrast outline.
- Ensure decorative visuals have appropriate alt handling and that meaning is also available in text.

## Content guidance
- Write benefit-led headings that describe an outcome, not a feature name.
- Use one primary CTA per major conversion panel. Keep the CTA label short and action-oriented.
- Use credible proof only when it is true for my product; do not invent awards, customer counts, regulatory claims, or guarantees.

## Responsive and accessibility requirements
- Preserve a clear reading order: card content, proof message, then CTA.
- Make tap targets at least `44px` high.
- Do not communicate meaning through colour alone.
- Test long headings, translated copy, zoom to 200%, and narrow screens without overflow.

## Never
- Never copy the reference's logos, product names, brand marks, badges, exact wording, customer numbers, award claims, or regulatory claims.
- Never reuse the reference's illustrations, screenshots, imagery, or distinctive decorative assets.
- Never reproduce the exact card order, proportions, copy, or visual arrangement; adapt the principles to my product and brand.
- Never use placeholder content that implies facts about my product without asking me first.
