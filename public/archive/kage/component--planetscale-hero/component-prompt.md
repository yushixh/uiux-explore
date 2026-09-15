## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060672-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/planetscale-com/b4abfdd8-cd39-4289-8914-c1bd40d118b4-1789060620-full.webp
- Component on Kage: https://kage.design/component/planetscale-hero

# Build a technical SaaS hero section

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero for my product—not a copy of the reference.

## Goal
Create a desktop-first hero section for a developer-focused B2B SaaS product. The section should feel precise, trustworthy, infrastructure-oriented, and information-dense without becoming visually noisy. Use the structure as inspiration, but write original content and adapt the hierarchy to the product being built.

## Structure
- Add a narrow announcement strip at the very top, using a high-contrast accent colour and one concise message followed by a compact text CTA.
- Place a primary navigation row beneath it. Keep the brand mark at the far left, followed by several text links separated with subtle vertical dividers. Put account access and two right-aligned actions at the far right.
- Build the hero content in a centered, wide container with generous horizontal gutters.
- Use a small vertical accent rule beside the main value proposition. The rule should visually anchor a short, bold positioning statement rather than act as decoration.
- Follow it with two or three paragraphs of explanatory copy. Keep the copy left-aligned, readable, and relatively narrow. Use a restrained inline accent colour for important product capabilities or linked phrases.
- End the visible hero with a short customer-proof introduction and a bordered logo/customer grid. The grid should use equal-width cells, clear horizontal and vertical rules, and enough internal padding for each mark to breathe.
- On smaller screens, collapse the navigation into a menu button, stack actions sensibly, reduce paragraph measure, and turn the proof grid into two columns or a horizontally scrollable row while preserving the borders.

## Design language

### Layout and alignment
- Use a full-width, pale neutral page background, approximately `#f7f7f6` or `#fafafa`.
- Constrain the main content to roughly `1120px–1200px` and align every major element to the same left and right edges.
- Use a 12-column mental grid, but keep the hero copy spanning most of the width on desktop rather than placing it beside an illustration.
- Use flexbox for the navigation and CSS grid for the proof table.
- Keep the announcement content centered; keep the navigation and hero content left/right aligned to the shared container.
- Use responsive breakpoints around `768px` and `1024px`.

### Typography
- Choose a highly legible monospace or monospaced-feeling sans-serif for the interface to convey an engineering-tool character. If the product brand calls for it, pair a neutral grotesk for body text with a restrained monospace for labels.
- Announcement text: approximately `15px–16px`, medium weight.
- Navigation links: `15px–16px`, semibold, with slightly increased tracking.
- Positioning statement: `16px–18px`, bold, with tight line height around `1.3`.
- Body copy: `16px–17px`, line height around `1.5–1.6`, with paragraphs separated by `24px–28px`.
- Use bold text sparingly for claims and an accent colour for links or product capabilities.
- Maintain strong contrast, approximately `#171717` for primary text and `#4b4b4b` for supporting copy.

### Colour
- Page background: `#f8f8f7`.
- Primary text: near-black `#171717`.
- Secondary text: charcoal `#4b4b4b`.
- Announcement background: vivid warm yellow, approximately `#ffd21c`.
- Primary action: saturated orange, approximately `#f26522`, with white text.
- Secondary action border: burnt orange, approximately `#c95b2d`, with dark text.
- Link/accent text: muted technical blue, approximately `#26739b`.
- Rules and dividers: neutral gray, approximately `#4a4a4a`, softened with opacity where appropriate.
- Ensure all text and controls meet accessible contrast requirements.

### Borders, controls, and spacing
- Use mostly square corners or a very small radius, around `0px–2px`; avoid soft, rounded SaaS-card styling.
- Use `1px` borders for buttons, navigation dividers, and the customer grid.
- Navigation height should be approximately `88px–112px`, with the announcement strip around `40px` high.
- Use a spacing scale based on `8px`, with larger section gaps of `32px`, `48px`, and `64px`.
- Buttons should be compact and text-led, with approximately `10px 14px` padding. Make the primary action visually heavier through its filled background rather than rounded treatment.
- Make grid cells feel like a structured table: consistent heights, centered vertically, and padded by roughly `28px–40px`.

### Interaction
- Give navigation links, inline links, and buttons clear hover and focus states. Use an underline, colour shift, or subtle background change rather than dramatic animation.
- Preserve a visible keyboard focus ring with an accent colour.
- Let the announcement CTA underline or invert slightly on hover.
- If the customer grid contains links, make the entire cell or logo area interactive with a restrained hover background; otherwise treat it as static proof.
- Keep motion minimal: use quick transitions around `150ms–200ms` and avoid parallax or decorative animation.

## Content guidance
- Write an original, concise announcement relevant to the product.
- Create a strong one-sentence positioning statement focused on speed, reliability, scale, or another credible primary benefit.
- Support it with specific, factual-sounding capabilities appropriate to the product, but do not make unsupported claims.
- Use a proof section with customer categories, metrics, or customer names only if the user supplies them. Otherwise use neutral placeholders or anonymized descriptors.
- Ensure the section works even without logos or imagery by using text-based proof items.

## Never
- Never reuse the reference’s logos, product names, customer names, announcement copy, navigation labels, claims, or exact wording.
- Never copy the original brand mark, logo shapes, or customer-logo artwork.
- Never include illustrations, photographs, or imagery from the reference.
- Never reproduce the exact arrangement as a pixel-perfect clone; adapt the hierarchy, proportions, content, and brand expression to the user’s product.
- Never use excessive rounded cards, gradients, glassmorphism, or decorative effects that undermine the technical editorial character.
