## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073961-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/huggingface-co/7a35650e-acfa-4ee6-9c74-f477a83c58e6-1789073933-full.webp
- Component on Kage: https://kage.design/component/huggingface-hero

# Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero for that product—not a copy of the reference.

## Goal
Build a homepage hero for a software platform with a strong community, catalog, or ecosystem. The section should communicate the product's purpose quickly while making the breadth and activity of the platform tangible through a secondary interface preview.

## Design language

### Layout and alignment
- Use a wide, centered hero container with generous horizontal margins; on desktop, target roughly 1200–1280px maximum width.
- Place the main message in a left column occupying about 40–45% of the hero and a discovery/product preview in the right column occupying the remaining width.
- Keep the primary text column vertically centered within a large, dark rounded surface. Let the preview feel partially integrated into or extending from the same surface rather than looking like a separate card.
- Use a strong asymmetrical composition: quiet negative space behind the message, denser information on the right.
- On smaller screens, stack the content with the message first and convert the preview into a cropped, simplified, or horizontally scrollable panel. Preserve the primary call to action above the preview.
- Align the eyebrow/brand accent, headline, supporting copy, and actions to one consistent left edge.

### Typography hierarchy
- Use a modern sans-serif with a friendly, highly legible tone. Use a heavy or bold display weight for the headline.
- Make the headline large and compact: approximately 44–64px on desktop, 1.0–1.08 line-height, with a maximum width of about 520px. Use 30–40px on mobile.
- Use supporting copy at approximately 17–20px with a 1.45–1.6 line-height and a muted light colour. Keep it to two or three lines where possible.
- Make navigation or preview metadata visibly smaller, around 11–14px, and avoid allowing it to compete with the headline.
- Use sentence case for the headline and concise labels for actions. Establish emphasis with weight and colour before using italics or decoration.

### Colour
- Treat the hero surface as near-black navy, approximately #0B0E18 or #0D101B.
- Use a warm off-white for the main headline, approximately #F7F8FA, and a cool muted grey for supporting copy, approximately #A9B0C0.
- Keep the surrounding page background light and neutral, approximately #FFFFFF or #F8F9FB, if that suits the user's brand.
- Use a restrained electric blue, violet, or brand accent for selected states and tiny interface highlights; keep it subtle rather than turning the whole hero into a gradient.
- Use low-contrast dividers and surfaces inside the preview, approximately #1B2130 and #252C3A.
- If the user's brand uses different colours, preserve the same contrast relationships: bright focal text, subdued explanation, and controlled accent colour.

### Borders, radius, and depth
- Give the main dark hero surface a large corner radius, approximately 24–32px on desktop and 18–24px on mobile.
- Use thin, low-contrast borders around the hero and preview elements, approximately rgba(255,255,255,0.08–0.14).
- Use pill shapes for compact filters, tags, and secondary controls; use approximately 999px radius.
- Make the primary button an outlined or softly filled control with a clear hover state, rather than a visually heavy block.
- Avoid dramatic shadows. If needed, use a broad, subtle shadow such as 0 20px 60px rgba(5,8,20,0.18).

### Hero content and actions
- Include a small brand-relevant visual accent above or near the headline, but create a new abstract mark, icon, or typographic treatment for the user's product.
- Write a short headline that states the product's role or community outcome, not a generic slogan.
- Follow with one concise sentence explaining what users can find, build, or accomplish.
- Provide one primary action and one lower-emphasis text action. The secondary action can include a lightweight metric or scope cue, but it should never compete with the primary action.
- Keep actions on one row on desktop and allow them to wrap or stack naturally on mobile.

### Discovery preview
- Build a believable but generic product preview on the right: for example, a catalog, workspace, activity feed, search results, analytics surface, or creation dashboard.
- Organize it into a compact top navigation/filter strip, grouped chips or facets, and a vertical list of result rows.
- Use small badges, metadata, separators, and subtle status colours to imply richness without making the preview difficult to scan.
- Keep preview text short and invented for the user's product. It should support the concept, not become readable marketing copy.
- Slightly crop or fade the far edge of the preview to suggest a larger ecosystem beyond the viewport.
- Include hover, focus, and selected states for interactive-looking controls; on a real implementation, ensure keyboard focus is visible and controls have accessible labels.

### Spacing and responsiveness
- Use an 8px spacing base. Typical desktop values: 48–72px inner padding, 24–40px column gap, 16–24px between text blocks, and 24–32px above the action row.
- Give the hero enough vertical space to feel like a destination, but keep the message and first action visible without scrolling on common laptop heights where practical.
- Reduce padding and preview density at tablet widths. At mobile widths, use 24px outer padding, 32–40px inner padding, and preserve generous breathing room around the headline.
- Respect reduced-motion preferences; any preview movement should be minimal, optional, and never necessary to understand the hero.

## Implementation guidance
Use semantic HTML, responsive CSS, and the user's existing design tokens where available. Make the hero accessible: maintain WCAG-friendly contrast, use real buttons and links, provide a logical heading structure, and avoid relying on tiny preview text to convey essential meaning. The preview can be static mock data, but it should look intentional and product-specific.

## Never
- Never copy the reference layout so literally that it becomes a clone; adapt the structural principles to the user's product.
- Never use logos, product names, copy, illustrations, imagery, mascots, or brand marks from the reference.
- Never reuse the reference headline, supporting sentence, navigation labels, catalog entries, model names, or metrics.
- Never make the preview more visually dominant than the product's value proposition.
- Never use illegible microtext, inaccessible colour contrast, or decorative UI that implies functionality without a clear purpose.
