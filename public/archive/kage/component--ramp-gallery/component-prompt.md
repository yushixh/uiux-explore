## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060915-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ramp-com/ad2900d9-6fba-4f32-a572-3ba7a6ce9831-1789060875-full.webp
- Component on Kage: https://kage.design/component/ramp-gallery

## Before you start
Ask the user what their product does, who it is for, and what their brand looks and sounds like. Then apply the principles below to create an original version for that product rather than reproducing the reference.

## Build a connected-systems gallery section
Create a spacious, editorial section that explains how several otherwise disconnected tools, people, or workflow steps work together. The composition should feel like a visual systems map: a concise heading and supporting sentence sit above a large collage of small UI panels, documents, messages, tables, and other product artifacts.

### Layout and alignment
- Use a white or near-white full-width background.
- Give the section generous vertical padding, approximately `clamp(96px, 12vw, 190px)` at the top and bottom.
- Keep the content within a centered max-width of roughly `1100–1250px`.
- Center-align the heading and supporting copy, with the text block occupying about `560–760px`.
- Place the collage below the copy with a comfortable gap of `24–40px`.
- Build the collage as a relatively positioned canvas, approximately `min(100%, 900px)` wide and `420–520px` tall on desktop. Let individual artifacts overlap slightly and sit at different positions and scales instead of aligning them into a strict grid.
- Use thin, light dotted or dashed connector curves between artifacts to imply handoffs and dependencies. Connectors should remain behind the cards and never overpower the content.
- On smaller screens, preserve the narrative order: heading, supporting copy, then a simplified stacked or two-column collage. Reduce overlap, avoid horizontal overflow, and keep every artifact readable.

### Typography hierarchy
- Use a modern grotesk or neutral sans-serif with a clean, slightly human editorial feel.
- Make the heading large and compact: approximately `48–58px` desktop, `36–42px` mobile, with `font-weight: 500–600`, tight line-height around `0.98–1.08`, and subtle negative tracking.
- Use supporting copy at `16–18px`, `line-height: 1.45`, in a muted grey. Keep it to one or two short lines.
- Any text inside simulated artifacts should be much smaller, around `7–12px`, with restrained contrast and realistic hierarchy. Use placeholder content relevant to the user’s product, not generic decorative text.

### Colour and surfaces
- Start with a clean background around `#FFFFFF` or `#FAFAF9`.
- Use near-black for the main heading, approximately `#111111`.
- Use cool or neutral grey for supporting copy and connector lines, approximately `#707070` and `#D7D7D7`.
- Let the artifact panels contain soft, product-specific colour accents, but keep the overall collage mostly white, grey, and low-saturation tones so it feels cohesive.
- For small status dots, badges, highlights, or active controls, use one restrained brand accent and one optional warning/success accent. Avoid a rainbow palette.

### Borders, radius, and depth
- Give interface fragments subtle borders around `#E6E6E6` and very soft shadows such as `0 8px 24px rgba(0,0,0,0.08)`.
- Use small to medium corner radii, approximately `4–10px`, varying slightly according to the artifact type. Avoid excessive pill shapes.
- Documents, sheets, and app windows can use distinct surface treatments, but all should share the same restrained border and shadow language.
- Keep the connectors ultra-light and place them beneath all cards using layering or pseudo-elements.

### Content and visual storytelling
- Choose five to eight artifact types that make the user’s workflow understandable at a glance: for example, an uploaded record, a structured table, a form, a message bubble, a policy/document view, a report, or a handoff state.
- Vary the artifact sizes and orientations, but ensure the largest two or three elements anchor the collage. A few partially cropped elements at the edges can make the system feel expansive.
- Use realistic UI details—rows, labels, thumbnails, fields, timestamps, badges, and small controls—without making any single artifact too dense to recognize.
- The collage should communicate a chain of events or relationships, not just display unrelated screenshots. Use connector paths and repeated visual cues to show movement from one step to another.
- If adding motion, use a very subtle reveal or connector-draw animation on entry and a restrained hover lift on artifacts. Respect `prefers-reduced-motion` and do not make the animation necessary to understand the section.

### Responsive and accessibility requirements
- Keep the heading and supporting text readable at all breakpoints.
- Provide meaningful accessible text for the collage, such as a concise description of the workflow, while treating decorative connector lines as hidden from assistive technology.
- Do not rely on colour alone to communicate status or relationships.
- Ensure the section has sufficient contrast and that any interactive artifact has a visible focus state.

## Never
- Never use logos, product names, brand marks, recognizable third-party interfaces, or copy from the reference.
- Never reproduce the exact headline, supporting sentence, artifact arrangement, connector paths, or screenshot content.
- Never use illustrations or imagery from the reference; create original CSS UI mockups, neutral placeholders, or assets supplied by the user.
- Never turn the section into a conventional dashboard grid or a cluttered wall of screenshots.
- Never sacrifice readability, responsiveness, accessibility, or the user’s own brand identity in order to imitate the reference.
