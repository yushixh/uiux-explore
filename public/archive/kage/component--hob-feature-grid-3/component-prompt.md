## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106503-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106472876-full.webp
- Component on Kage: https://kage.design/component/hob-feature-grid-3

# Build a layered workflow feature section

## Before you start
Ask me what my product does, who it is for, and what its brand identity is (including preferred colours, type style, and tone). Then apply the principles below to create an original section for my product—not a copy of the reference.

## Goal
Create a feature-grid section that communicates that multiple workflow stages or tools live together in one coherent system. The section should feel calm, capable, and product-led: a short editorial explanation sits beside a quiet, abstract interface composition made from cards, lists, statuses, and metrics.

## Structure and layout
- Use a wide, responsive container with a maximum width around 1200–1280px and generous horizontal padding of 24px on mobile, 40px on tablet, and 64px on desktop.
- Build the primary feature as a two-column composition on large screens: explanatory content on the left and a large interface visual on the right. Use roughly a 40/60 split.
- Vertically centre the text against the visual, but allow the visual to extend beyond the normal column rhythm for a more immersive, asymmetric feel.
- On smaller screens, stack the text above the visual. Preserve the visual hierarchy, but reduce overlap and let cards fit inside the viewport without horizontal scrolling.
- Treat the interface visual as a mini feature grid: a large muted background panel contains smaller panels for activity, queued work, review state, metrics, or related workflow information. Add one foreground summary card that overlaps the background panels to create depth.
- Keep the visual subordinate to the message. It should suggest a real product surface without becoming a complete dashboard or competing with the heading.
- Use generous vertical spacing: approximately 120–160px above and below the section on desktop, 80–112px on mobile.

## Typography hierarchy
- Use a modern sans-serif with a neutral, highly legible character. A restrained grotesk or system font is appropriate.
- Make the heading large and compact: approximately 40–48px desktop, 32–38px mobile, with a line-height around 1.05–1.12 and slightly negative tracking.
- Limit the heading to one or two short lines. Write a clear, product-specific promise rather than a generic feature label.
- Use supporting text at 17–20px desktop and 16–18px mobile, with a relaxed 1.5 line-height and a muted tone. Keep the measure around 28–36rem.
- Interface labels should be much smaller, around 11–14px, with medium or regular weight. Use concise labels, subdued metadata, and tabular-looking values where useful.
- Establish hierarchy inside cards through weight and contrast rather than excessive font sizes: title, metadata, status, then supporting rows.

## Colour and surface language
- Start from a warm near-white page background, approximately `#ffffff` or `#fcfcfb`.
- Use a very pale warm-gray visual frame around `#f1f1ee` or `#f3f3f1`.
- Use white or slightly tinted inner cards around `#fbfbf9` with subtle tonal variation between layers.
- Use near-black for primary text, approximately `#171717`; use medium gray around `#6f706f` for supporting copy and `#9a9b98` for metadata.
- Reserve one low-saturation accent colour for statuses or small highlights, such as muted amber `#d8b45c`, soft green `#9eb8a0`, or cool blue `#9eafc1`. Keep accents sparse and functional.
- Avoid gradients, saturated fills, heavy shadows, and decorative colour that does not communicate state.

## Borders, radius, and depth
- Use delicate 1px borders in warm gray, approximately `#e5e5e1` or `rgba(30,30,25,.09)`.
- Give the large visual frame a generous radius around 22–28px. Use 10–16px radii for inner cards and 14–18px for the foreground summary card.
- Create separation with tonal layering and a very soft shadow rather than strong elevation. A suitable shadow is similar to `0 12px 35px rgba(20,20,15,.08)`.
- Let the foreground card overlap the background grid by roughly 12–28px, while maintaining enough breathing room that it remains readable.
- Keep corners, borders, and shadows consistent across every panel; the visual should feel like one system.

## Interface composition
- Build believable but generic workflow data: activity rows, work item identifiers, statuses such as open/closed/approved, and compact metrics. Do not make the visual a literal replica of any existing interface.
- Use short rows with quiet separators and generous internal padding, approximately 16–22px.
- Include small line icons only when they improve scanning; use simple geometric or text-based placeholders rather than elaborate illustrations.
- Make status pills compact, with a lightly tinted background, small radius, and low-contrast text.
- Use a foreground card to connect several workflow concepts—for example, a task, review state, plan, and conversation—so the main idea of continuity is visible at a glance.
- The composition may use CSS grid, absolute positioning, or layered transforms, but it must remain responsive and accessible. On mobile, convert overlaps into a clean vertical stack or use only one controlled overlap.

## Interaction and motion
- If the cards are interactive, provide subtle hover and focus states: a slight border darkening, a small elevation change, or a gentle background shift.
- Use keyboard-visible focus rings and do not rely on colour alone to communicate status.
- Optional motion should be restrained: a 150–250ms ease-out transition for hover and a gentle reveal on scroll. Avoid continuous animation that distracts from the message.
- Ensure text remains readable at all viewport sizes and respects reduced-motion preferences.

## Content guidance
- Use a concise heading that expresses the product’s unifying benefit.
- Use one short paragraph explaining how the product brings related actions, context, and outcomes together.
- Keep UI copy short enough to preserve the visual rhythm. Use realistic domain language from my product, but invent all example records and values.

## Never
- Never copy the reference’s logos, product names, brand marks, or exact interface labels.
- Never reuse the reference’s copy, sentence structure, example identifiers, metrics, or status wording verbatim.
- Never use illustrations, screenshots, or imagery from the reference.
- Never reproduce the exact card arrangement, dimensions, or visual offsets; reinterpret the layered workflow idea for my product.
- Never turn the section into a dense dashboard, a generic three-card feature list, or a decorative mockup with no connection to the product’s value.
- Never sacrifice responsive behaviour, semantic HTML, accessibility, or readable contrast for visual similarity.
