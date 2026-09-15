## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106743-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-feature-grid

# Build a contrast-led feature comparison section

## Before you start
Ask the user what their product does, who it is for, and what visual brand or design system it uses. Then apply the principles below to create an original version for that product—not a copy of this reference.

## Goal
Create a wide feature-comparison section that explains a product advantage through a clear before/after contrast: one side shows a limited or outdated workflow, while the other shows the product enabling a more useful, contextual workflow. The section should feel like a persuasive product story, not a generic card grid.

## Structure
- Use a centered page container, approximately 1040–1120px wide, with generous white space above the comparison.
- Add an introductory block above the panels:
  - Large, bold, two-line headline centered on the page.
  - Short muted supporting paragraph beneath it, constrained to roughly 560–680px.
  - Optional compact text link or anchor-style CTA below the paragraph.
- Place two equal-width panels directly below the introduction in a single row on desktop.
- Make the panels feel like one continuous comparison surface with no large gap between them; use a shared top and bottom edge.
- On smaller screens, stack the panels vertically while preserving the contrast and narrative order.

## Panel design
- Left panel: represent the weaker or conventional experience with a near-black charcoal background around `#17171D` or `#18181F`.
- Right panel: represent the improved product experience with a vivid brand accent, such as electric blue around `#1268F3` or `#086BFF`. Adapt this to the user's brand if needed while keeping strong contrast.
- Give each panel generous internal padding, approximately 36–40px on desktop and 24px on mobile.
- At the top of each panel, use a small uppercase eyebrow with increased letter spacing, around 11–12px, medium weight, and a small circular status marker. Use a warm pink/red marker on the negative panel and a pale or white marker on the positive panel.
- Follow the eyebrow with a short, large panel heading around 30–34px, tightly set and bold. Keep the heading to two or three lines where possible.
- Align all panel content to the same left edge, but allow the UI mockup in each panel to have a different horizontal offset to make the comparison feel editorial rather than mechanically symmetrical.

## UI mockups
- Use CSS-built interface mockups or abstract product UI, not screenshots or external images.
- The left mockup should resemble an aged help article or documentation page: dark browser chrome, subdued text, a stale/error state, and low-contrast supporting details.
- The right mockup should resemble a live product screen: light browser chrome, a focused input or active control, and a dark contextual helper or walkthrough overlay near the lower portion.
- Keep mockups partially cropped by the panel or section bottom so they feel like glimpses into a larger workflow.
- Use subtle browser framing: rounded top corners around 12–14px, thin borders, small circular window controls, and restrained shadows.
- Make the positive mockup visually dominant through a clear focus ring, active field, tooltip, coach mark, or step indicator. The interaction should communicate guidance without requiring a complex functional demo.
- If adding motion, use only restrained entrance or focus transitions; respect reduced-motion preferences.

## Typography
- Use a modern sans-serif with strong weight contrast. Prefer a display/body family already used by the user's product.
- Main heading: approximately 42–48px desktop, 34–40px mobile, 0.94–1.02 line-height, bold or extra-bold.
- Intro paragraph: approximately 16px, 1.5 line-height, medium gray such as `#73757D`.
- Panel heading: approximately 30–34px, 0.98 line-height, bold.
- Use near-black navy text such as `#151A32` on white surfaces and white or off-white such as `#F7F8FA` on dark/accent panels.
- Avoid excessive text; the visual contrast and embedded interfaces should carry most of the explanation.

## Spacing and geometry
- Use approximately 88–112px of space above the intro block and 72–96px below it before the panels.
- Keep 16–24px between the headline, paragraph, and link.
- Give the comparison panels a tall aspect ratio, roughly 1:1.05 to 1:1.2, allowing the mockups to extend below the visible content.
- Use a restrained outer border or vertical guide lines only if they fit the product's broader system. Do not add card clutter around the panels.
- Keep the section visually calm outside the comparison: white or very light background, minimal decoration, and strong alignment.

## Interaction and accessibility
- If the optional link is interactive, provide a visible hover/focus state and a keyboard-accessible target.
- Ensure text meets WCAG contrast requirements on both panel backgrounds.
- Treat the two panels as explanatory content, not as separate clickable cards unless the user's product requires that behavior.
- Use semantic headings, meaningful labels for mockup controls, and responsive layouts that do not rely on hover.

## Never
- Never copy the reference's logos, product names, brand words, or exact marketing copy.
- Never reuse the reference's UI text, URLs, screenshots, illustrations, or imagery.
- Never reproduce the exact panel colors if they conflict with the user's brand; use the contrast principle with original brand-appropriate colors.
- Never make the section a literal two-card clone or a generic icon grid.
- Never use external image assets when a CSS-built, product-relevant interface mockup can communicate the idea.
