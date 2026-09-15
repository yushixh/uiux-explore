## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073748-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073722-full.webp
- Component on Kage: https://kage.design/component/upstash-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and developer tools it uses. Then apply the principles below to create an original feature-grid section for that product—not a replica of the reference.

## Build this section
Create a responsive feature-grid section for a developer-focused SaaS product. The section should communicate how the product helps technical users work faster, with a calm, trustworthy, documentation-inspired visual language.

### Structure and layout
- Place the section inside a very light, cool-tinted background area with generous vertical padding, approximately `80–120px` on desktop and `56–80px` on mobile.
- Begin with a centered section heading and a short supporting sentence. Keep the heading to one or two lines and the description to roughly two lines on desktop.
- Below the introduction, use a 12-column responsive grid with a maximum content width around `1160–1240px`.
- Make the first feature card span the full grid width. Beneath it, place two equal-width cards side by side with a `24px` gap.
- On small screens, collapse all cards into one column while preserving a clear reading order: lead feature first, then the two supporting features.
- Cards should have consistent internal padding of approximately `32px` desktop and `24px` mobile. Use flex or grid layout so links remain aligned near the bottom when card content heights differ.

### Card composition
- Use a large lead card for the most important capability. Divide its content into two responsive columns: explanatory copy on the left and a practical developer preview on the right.
- Use two secondary cards with a title, concise paragraph, optional command-line preview, and a text link with a directional arrow.
- The command preview should look like a compact terminal or code-input strip: near-black surface, monospace text, subtle green or mint prompt colour, and a small copy affordance at the far right.
- Add small pill-shaped compatibility badges beneath a lead command preview when relevant. Use muted tinted fills rather than loud brand colours.
- Links should be text-first rather than button-heavy, using a medium-weight accent colour and a simple arrow. Add a restrained hover treatment such as darker colour, underline, or a small arrow translation.

### Typography
- Use the product’s own typeface where available; otherwise use a clean modern sans-serif for UI copy and a system monospace font for commands.
- Section heading: bold, approximately `44–52px` desktop / `32–38px` mobile, with tight `1.05–1.15` line height and slight negative tracking.
- Card headings: semibold or bold, approximately `22–25px`, with a compact line height.
- Body copy: `16–18px`, approximately `1.45–1.6` line height, in a softened grey so headings lead the hierarchy.
- Links and badges should be slightly smaller than body copy, around `14–16px`.
- Keep text measure controlled: introductory copy around `560–680px`; card descriptions around `480–560px`.

### Colour and surface treatment
- Use an off-white or very pale blue-green page background, approximately `#F4F8F7` or a brand-adjusted equivalent.
- Use white cards, approximately `#FFFFFF`, against the tinted background.
- Use a deep blue-green or near-black for headings, approximately `#073B32` to `#0B2925`.
- Use a neutral grey for descriptions, approximately `#71807D`.
- Use a saturated but restrained teal/green accent for links, approximately `#147A68` or an appropriate brand equivalent.
- Use near-black for terminal previews, approximately `#101112`, with muted mint-green command text around `#65C8A9`.
- Keep contrast accessible, especially for body copy, links, and code text.

### Borders, radius, and depth
- Give cards a large, friendly radius of approximately `28–32px` desktop and `22–26px` mobile.
- Use a very subtle border such as `1px solid rgba(7, 59, 50, 0.08)` and a soft shadow only if needed: `0 2px 8px rgba(7, 59, 50, 0.04)`.
- Terminal strips can use a smaller radius around `16px` and should feel inset within the white card.
- Avoid heavy outlines, dramatic shadows, gradients, or visual noise.

### Interaction and accessibility
- Make the entire relevant card or its link target keyboard accessible without creating ambiguous nested links.
- Add visible `:focus-visible` states using the product accent colour.
- Make copy controls functional if included: copy the command, change its label or show a brief confirmation, and provide an accessible label.
- Keep badges informational unless they are genuinely interactive.
- Ensure the grid works at narrow widths, long product names, zoomed text, and reduced-motion preferences.

## Never
- Never copy the reference’s logos, product names, feature names, commands, URLs, or exact marketing copy.
- Never reuse its illustrations, imagery, icons, or branded assets; use simple neutral UI symbols only when necessary.
- Never reproduce the exact card text, dimensions, spacing values, or visual treatment as a pixel-perfect clone.
- Never invent claims about the user’s product; use placeholders or ask for the correct capabilities and copy.
- Never make the design dependent on colour alone, and never sacrifice readability for decorative code styling.
