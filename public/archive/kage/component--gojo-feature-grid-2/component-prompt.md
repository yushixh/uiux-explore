## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106542-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/gojo/109391a8-f454-43af-b6cd-05815ad35e3c-1789106501929-full.webp
- Component on Kage: https://kage.design/component/gojo-feature-grid-2

# Build an editorial feature-grid section

## Before you start
Ask me what my product does, who it is for, and what its brand and visual identity are. Then apply the principles below to my product rather than copying the reference's content, naming, or interface.

## Goal
Create a feature-grid section that introduces a set of core product capabilities through a calm, highly legible editorial layout. The section should feel like a real product being demonstrated—not a marketing collage—with each feature pairing a short explanation on the left and a contextual UI preview on the right. Build this as a reusable component for the user's product, with data-driven feature items so additional rows can be added consistently.

## Layout and alignment
- Use a full-width section with a very light, nearly white background, contained by a centered max-width of approximately 1150–1200px.
- Add a thin horizontal divider above the section and another between major feature rows; use dividers to create a quiet editorial rhythm rather than cards floating on a page.
- Start with a section introduction aligned to the same left edge as the feature content: a large heading followed by a muted one- or two-line description.
- Below the introduction, render feature rows in a two-column grid: approximately 42% for text and 58% for the product preview, with a generous 48–64px gap.
- Keep the text column left-aligned and vertically aligned near the upper portion of the preview. Give each row generous vertical padding, approximately 64–88px.
- Feature previews should occupy the right column and have a consistent visual footprint. Use realistic, product-specific UI rather than generic placeholder rectangles.
- On narrow screens, stack the text above the preview, preserve the reading order, reduce horizontal padding, and keep each preview comfortably readable without forcing page overflow.

## Typography hierarchy
- Use a modern grotesk or system sans-serif with a compact, confident feel.
- Section heading: near-black, bold, approximately 38–42px desktop with tight line-height around 1.05.
- Section description: muted grey, approximately 18–19px with 1.45 line-height and a restrained maximum width.
- Feature eyebrow: small uppercase label with generous letter spacing, around 11–12px, medium weight, and muted grey. Pair it with a small simple line icon only when it adds meaning.
- Feature title: dark, bold, approximately 24–26px with tight line-height.
- Feature body copy: grey, approximately 16px with 1.5–1.6 line-height; limit the measure to roughly 440px.
- Supporting points should be rendered as compact horizontal rows beneath the body copy, with 14–16px text, subtle separators, and clear vertical spacing.

## Colour and surface treatment
- Use an off-white page background around #FCFCFB or #FFFFFF.
- Use near-black text around #202022 and secondary text around #737375.
- Use very light separators around #E8E8E6.
- Keep accents restrained: if the product has an action or selected state, use its brand colour; otherwise use a quiet blue accent around #1677D2 only as a starting point.
- The preview may use a darker interface surface around #292828, with slightly lighter panels around #353334, soft white text around #F1F1F0, and muted text around #AAA8A7. Adapt these values to the user's brand.
- Avoid gradients, heavy shadows, decorative backgrounds, and excessive colour. The contrast between the quiet page and the focused product preview should do most of the visual work.

## Borders, radius, and preview details
- Use 1px borders for section rules and supporting rows.
- Give product previews a restrained radius of approximately 8–10px and clip their contents to the radius.
- Use minimal shadow, if any: a very soft shadow such as 0 2px 8px rgba(0,0,0,0.06).
- Build previews from believable UI primitives: panel headers, lists, selected states, metadata, buttons, and small explanatory footers. Ensure the preview communicates the feature at a glance.
- Keep controls and labels visually dense enough to feel like software, but not so dense that the preview becomes illegible.

## Interaction and responsive behaviour
- If feature rows are clickable, make the entire row or a clearly indicated preview interactive, with a subtle hover treatment such as a slight border-colour shift or a 1–2px lift—never a dramatic animation.
- Add visible focus states for keyboard users using a 2px outline in the product accent colour.
- Respect reduced-motion preferences. Use short, understated transitions around 160–220ms.
- If previews contain tabs, model selectors, toggles, or buttons, make them functional where practical; otherwise present them as clearly styled static states.
- On mobile, allow preview content to scroll internally only when necessary; do not let dense UI shrink below a readable size.

## Content and implementation
- Make the feature data easy to replace: eyebrow, title, description, supporting points, icon, and preview component should be separate fields.
- Write original copy for the user's product. Keep it specific, plainspoken, and outcome-oriented.
- Use semantic HTML, accessible labels, sufficient colour contrast, and responsive CSS.
- Do not make every feature preview identical. Reuse the visual language, but tailor each mock interface to the capability it explains.

## Never
- Never copy the reference's logos, product names, feature names, or marketing copy.
- Never reuse the reference's exact UI labels, model names, data, iconography, or interface arrangement.
- Never include illustrations, screenshots, or imagery from the reference.
- Never reproduce the reference as a pixel-perfect clone; use the layout logic and design principles to create an original section for my product.
- Never add invented brand assets when the user's product or brand direction has not been established; ask first and use neutral placeholders only while clarifying requirements.
