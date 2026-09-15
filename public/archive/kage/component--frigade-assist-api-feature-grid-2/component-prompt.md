## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106743-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/frigade-assist-api/d96f9c4b-8236-4442-b795-92795f229d4a-1789106649540-full.webp
- Component on Kage: https://kage.design/component/frigade-assist-api-feature-grid-2

# Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, typography, and visual assets they already use. Then apply the principles below to create an original feature-grid section for that product—not a replica of any reference.

## Goal
Build a polished SaaS feature section that communicates trust and product control. Use a two-column composition: a persuasive text column on the left and a calm, abstract product-interface preview on the right. Follow it with a separate centered statement block that acts as a transition into the next section.

## Design language

### Layout and alignment
- Place the section inside a centered content frame approximately 1040–1120px wide, with a very light vertical rule or subtle boundary at the frame edges if it suits the surrounding page.
- Use a two-column grid on desktop: left column around 40%, right column around 60%, with a 48–64px gap. Vertically align the columns near the upper third rather than forcing exact center alignment.
- In the left column, use a compact heading, a short supporting paragraph, and three stacked feature rows. Each row has a small icon area on the left and text on the right.
- Keep the visual preview contained in a pale rectangular panel with generous internal whitespace. It should feel like a simplified product window or dashboard snapshot, not a full app screen.
- Add a horizontal divider or substantial whitespace before the follow-up statement block. Center that block with a maximum text width of roughly 620px.
- On mobile, collapse to one column: text first, preview second, then the centered statement. Preserve comfortable vertical spacing and avoid shrinking the UI preview below a readable scale.

### Typography hierarchy
- Use a modern sans-serif with a crisp, slightly editorial SaaS feel. If the product has an established typeface, use it.
- Main heading: dark navy/ink, approximately 34–42px desktop, 700–750 weight, tight line-height around 1.05–1.12. Keep it to two or three lines.
- Supporting paragraph: 15–17px, 400–450 weight, line-height around 1.55–1.7, in a muted gray. Limit its width so the lines remain easy to scan.
- Feature titles: 14–16px, 650–700 weight, dark ink. Feature descriptions: 14–15px, 400–450 weight, muted gray, with line-height around 1.45–1.6.
- Follow-up statement heading: 42–50px desktop, bold, tight line-height, with a deliberate two-line break where useful. Use 30–36px on mobile.
- Any inline link or CTA should be small, semibold, and use the product accent colour rather than looking like a large button.

### Spacing
- Give the main section 96–128px of vertical padding on desktop and 64–80px on mobile.
- Use 20–28px between the heading and supporting paragraph, 26–34px between the paragraph and feature list, and 22–28px between feature rows.
- Feature icons should sit in a 24–28px square area with the text beginning around 12–16px to the right.
- Give the preview panel 32–48px of internal padding and enough height to feel like a considered visual anchor.
- Separate the lower statement with at least 96px of top padding after the divider or preceding content, and 24–32px between its heading, paragraph, and link.

### Colour
- Page background: near-white, approximately `#FFFFFF` or `#FCFCFD`.
- Primary text: deep blue-black, approximately `#172033` or `#182238`.
- Secondary text: neutral cool gray, approximately `#6F737B`.
- Preview panel: very light cool gray, approximately `#F5F6F8`.
- Preview window: white, approximately `#FFFFFF`, with a faint border around `#E7E9ED`.
- Use a restrained accent such as muted teal/green around `#2F8B78` for positive feedback, saved states, or confirmation details. Adapt this to the user's brand.
- Avoid strong gradients and saturated decorative colours; the visual should feel trustworthy and product-led.

### Borders, radius, and visual texture
- Use 1px hairline borders in `#ECEEF1` for section boundaries and interface surfaces.
- Keep the outer preview panel square or only subtly rounded, around 0–4px radius. The inner product window may use an 8–12px radius.
- Use small rounded pills or tags only inside the interface preview, around 4–8px radius.
- Add an extremely subtle grid, ruled pattern, or geometric background inside the preview panel if needed: thin lines around `#E8EBEF`, low contrast, wide spacing. It must support the interface rather than become decoration.
- Use soft shadows sparingly, for example `0 8px 24px rgba(20, 30, 50, 0.04)` on the inner window only.

### Feature icons and interface preview
- Use simple monochrome line icons that communicate verification, controls, visibility, activity, or a comparable product benefit. Keep strokes around 1.5px and colour them in the primary or muted text colour.
- Do not rely on icon detail to carry meaning: titles and descriptions must remain understandable without them.
- Create an original miniature interface showing a conversation, workflow, report, or other product-specific proof. Include a faint top bar, one or two neutral content blocks, and one lightly tinted confirmation or feedback row.
- Make the preview look static and illustrative unless the user's product requires interaction. If interaction is included, use only subtle hover/focus states and ensure keyboard accessibility.

### Content strategy
- Write a short, outcome-led heading that expresses confidence, reliability, control, or visibility.
- Follow with a paragraph explaining the mechanism in plain language.
- Give each of the three feature rows a distinct job: explain the source of truth, show user control, and demonstrate visibility or accountability. Rename these concepts for the user's product.
- The lower centered statement should broaden the promise into a memorable product principle, followed by one concise explanatory sentence and a low-emphasis text link with an arrow or equivalent affordance.

### Responsive and accessibility requirements
- Maintain a minimum 16px body text size where possible and sufficient contrast: primary text should meet WCAG AA against the background.
- Use semantic headings in order, descriptive text for meaningful icons, and `aria-hidden="true"` for decorative icons.
- Ensure the two-column layout becomes a natural reading order on smaller screens.
- Do not communicate essential information only through colour, and provide visible focus states for any link or interactive preview element.

## Never
- Never copy logos, product names, branded interface labels, or exact marketing copy from the reference.
- Never reuse the reference's specific conversation text, feature wording, CTA wording, or product terminology.
- Never include illustrations, screenshots, imagery, or decorative assets from the reference; construct an original abstract interface preview using HTML/CSS or the user's own assets.
- Never reproduce the reference pixel-for-pixel. Preserve the underlying hierarchy and communication principles while adapting the layout, content, and visual language to the user's product.
- Never add unnecessary gradients, oversized buttons, dense dashboard detail, or decorative elements that compete with the feature message.
