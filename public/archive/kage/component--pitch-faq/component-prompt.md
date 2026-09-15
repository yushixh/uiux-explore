## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060650-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-faq

## Before you start
Ask the user what their product does, who it is for, and what visual brand system they want to use. Then apply the principles below to create an original FAQ section for that product—not a copy of the reference.

## Build this section
Create a prominent FAQ block that feels like a self-contained editorial panel near the end of a marketing page. The component should be responsive, accessible, and implemented with native accordion semantics where possible (`details`/`summary` or equivalent keyboard-accessible controls).

### Layout and alignment
- Use a wide, nearly full-container panel with a strong dark background and generous internal padding.
- Keep the panel aligned to the same max-width grid as the surrounding page; on desktop, use a two-column composition with a large introductory heading on the left and the FAQ list on the right.
- Let the heading occupy a narrow column and wrap into a few deliberate lines. Align the question list to a consistent vertical rail.
- On smaller screens, collapse to one column: place the heading above the accordion and reduce the panel padding without making the section feel cramped.
- Give each question row generous vertical padding and use a subtle divider rather than boxed cards. Keep the overall silhouette calm and spacious.

### Typography hierarchy
- Use a bold, contemporary sans-serif with slightly playful proportions or rounded terminals if the product brand supports it.
- Set the section heading in a large display size with tight line-height, approximately 56–80px on desktop and 40–52px on mobile.
- Make questions clearly prominent but below the heading, approximately 20–26px with medium-to-bold weight.
- Use answer text at 16–18px with a relaxed 1.5–1.65 line-height and a readable maximum width.
- Keep labels and supporting text concise; the visual hierarchy should be driven by scale, weight, and whitespace rather than many decorative styles.

### Colour
- Use a deep, saturated violet or another brand-appropriate dark canvas, approximately `#28105F` to `#32156F`.
- Use a very light lavender or warm white for primary text, approximately `#F1E9FF` or `#FFFDFC`.
- Use a softer lavender, approximately `#BDA9E8`, for secondary copy and dividers.
- If the product has a signature accent, reserve it for the open-state indicator, links, or a small call to action; keep contrast accessible and verify text against WCAG targets.
- Do not rely on colour alone to communicate whether an item is open.

### Borders, shape, and spacing
- Prefer minimal geometry: thin 1px dividers with low-opacity lavender, rather than individual outlined cards.
- Use a restrained panel radius, approximately 0–20px depending on the surrounding page; avoid excessive pill shapes for the FAQ itself.
- Use a spacing system based on 8px increments. Aim for 80–120px panel padding on large screens, 32–48px on mobile, 24–36px between the heading and list, and 22–32px of row padding.
- Give the open answer enough breathing room below its question and preserve the divider rhythm between items.

### Interaction
- Each row should be fully clickable, with a clear plus/minus or chevron indicator positioned consistently at the far edge.
- Animate expansion and collapse with a short, subtle ease-out transition; do not make content difficult to access or delay keyboard focus.
- Rotate or swap the indicator in the open state and provide visible hover, focus-visible, and pressed states.
- Decide whether one or multiple rows may remain open based on the product’s content model, but make the behavior predictable.
- Ensure the controls have accessible names, logical tab order, sufficient hit areas, and strong focus rings.

### Content guidance
- Include 5–8 realistic questions tailored to the user’s product, such as setup, collaboration, pricing, security, integrations, support, or cancellation.
- Keep answers short enough to scan, with links only where they genuinely help.
- Do not use the wording, claims, or information from the reference; write content that matches the user’s product.

## Never
- Never use logos, product names, or brand assets from the reference.
- Never copy the reference’s exact questions, copy, layout proportions, icon treatment, or visual artwork.
- Never include illustrations or imagery from the reference.
- Never reproduce distinctive proprietary typography or UI details; choose an appropriate alternative for the user’s brand.
- Never make the accordion inaccessible, keyboard-unfriendly, or dependent on hover alone.
