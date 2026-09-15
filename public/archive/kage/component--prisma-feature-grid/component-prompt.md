## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073818-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-feature-grid

# Build a before-and-after feature comparison section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for my product—not a copy of the reference. Use my product’s real value proposition, terminology, and brand tokens once I provide them.

## Goal
Create a responsive marketing section that contrasts a fragmented, high-effort workflow with a cohesive, product-led outcome. The section should help visitors understand the transformation at a glance, then validate it with concise supporting points.

## Structure and layout
- Use a spacious, near-white page background and a centered content container with a maximum width of approximately 960–1120px.
- Place a large, two-line headline above the comparison, centered or slightly left-aligned depending on the product’s brand. Keep the heading narrow enough to create a deliberate line break.
- Build an asymmetric comparison: a smaller, subdued “before” column on the left and a larger, emphasized “after” panel on the right.
- Align the tops of the two comparison areas, but let the “after” panel extend lower to communicate greater substance and value.
- Give the left side a simple label, a low-fidelity workflow mockup, and a list of pain points. Keep it visually quiet.
- Give the right side a prominent bordered panel containing a small label, a polished product/workflow mockup, and a list of benefits. This panel is the visual destination of the section.
- On mobile, stack the columns vertically in narrative order: headline, before, after. Make the after panel full width and preserve generous vertical separation.
- Use CSS grid for the desktop layout, with an approximate 40/60 split and a 64–96px gap. Avoid forcing equal-height columns.

## Typography
- Use a modern sans-serif with a clean, technical feel; prefer the user’s brand font, otherwise use a system sans-serif stack.
- Headline: approximately 44–52px desktop, 1.0–1.08 line-height, medium or semibold weight, with restrained letter spacing. Use 32–38px on mobile.
- Section labels: approximately 28–32px, medium weight, with the before label lower contrast than the after content.
- Body and list text: 15–17px, 1.45–1.6 line-height. Use semibold emphasis for the key phrase in each benefit where helpful.
- Keep copy concise: pain points should be short and scannable; benefits can wrap to two lines but should not become dense paragraphs.

## Spacing
- Use approximately 120–160px of top padding and 96–140px of bottom padding on desktop; reduce to 72–96px on mobile.
- Leave 56–80px between the headline and comparison.
- Use 28–40px between a panel label and its mockup, and 28–36px between a mockup and its list.
- Separate list rows by 16–22px. Use consistent icon-to-text spacing of 14–18px.
- Keep the internal padding of the emphasized panel around 32px desktop and 24px mobile.

## Colour and visual hierarchy
- Start with a warm or neutral white background, approximately #FCFCFA or #FFFFFF.
- Use near-black for the main heading, approximately #171717, and a softer gray such as #676767 for the before label and pain points.
- The before mockup should be intentionally washed out: pale gray surfaces, low-contrast borders around #E5E5E5, and muted text around #9A9A9A.
- The after panel should use a very subtle, restrained multicolour border or glow based on the product’s palette. If no palette exists, use a low-saturation gradient such as mint #8EDFD2 through warm yellow #E9D77C to peach #DDA77E.
- Use a dark primary action or focal control inside the after mockup, approximately #171717, with white text.
- Use a positive accent for confirmation marks, approximately teal #26B7B0 or the brand’s equivalent. Ensure contrast remains accessible.
- Keep gradients atmospheric and sparse; they should support emphasis, not become the main decoration.

## Borders, surfaces, and radius
- Use thin 1px borders with low contrast on the before mockup and a slightly more visible, softly coloured border around the after panel.
- Use rounded corners consistently: approximately 14–18px for the outer after panel, 12–16px for mockup cards, and 8–10px for controls.
- Use subtle shadows only on the contained mockup cards, such as 0 8px 24px rgba(20, 20, 20, 0.08). Avoid heavy elevation on the outer panel.
- Make the after mockup feel like a compact application state with a title row, contextual tags, a command/input row, and one prominent action.
- Keep the before mockup intentionally unfinished or obstructed using abstract neutral lines, disabled-looking controls, or incomplete fields. Do not use imagery.

## Content and interaction
- The before list should use small x or minus markers in a pale gray to represent friction.
- The after list should use check marks in the positive accent colour to represent resolved benefits.
- If the mockup includes buttons, inputs, tags, or tabs, make them visually believable and add hover/focus states, but keep the section primarily explanatory rather than interactive.
- Use subtle hover elevation or border brightening on interactive mockup controls. Include visible keyboard focus styles.
- Respect reduced-motion preferences; any entrance animation should be a restrained fade or short upward movement, never a distracting cascade.
- Ensure the comparison remains understandable without colour alone: labels, icons, and text must carry the meaning.
- Provide semantic headings, lists, and accessible labels for controls. Maintain WCAG-conscious contrast.

## Responsive behaviour
- At widths below approximately 760px, switch to one column.
- Let the headline and labels wrap naturally; do not shrink text below a comfortable reading size.
- Keep the after panel’s border and padding intact on small screens, while allowing its inner mockup to become fluid.
- Avoid horizontal scrolling. If the mockup contains a dense row, simplify or stack its contents on mobile.

## Never
- Never use logos, product names, branded UI, proprietary copy, or distinctive terminology from the reference.
- Never copy the reference’s exact text, layout measurements, mockup contents, gradient treatment, or decorative line patterns.
- Never use illustrations, stock photography, screenshots, or imagery from the reference.
- Never make the before state so faint that it becomes unreadable or inaccessible.
- Never present unsupported claims; adapt the comparison to the user’s actual product capabilities.
- Never sacrifice responsive usability for visual similarity.
