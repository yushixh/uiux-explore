## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060833-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-feature-grid

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual identity are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a split value-proposition section
Create a responsive, dark editorial feature section that communicates three or more product values alongside a compact product identity and primary call to action. Treat it as a reusable landing-page component for a software product.

### Layout and alignment
- Use a near-black full-width background, with a centered content wrapper roughly 1050–1200px wide.
- On desktop, use a two-column composition: a wider left column for stacked value statements and a narrower right column for the product identity block.
- Keep the left column aligned to a consistent vertical edge. Make the right column feel anchored rather than vertically centered arbitrarily; align it around the visual midpoint of the value list.
- Use generous horizontal separation between columns, while preserving enough width for the left-side copy to remain readable.
- Stack the columns vertically on smaller screens. Put the value statements first, followed by the identity and CTA, or use the product’s content hierarchy to decide the order.
- Give the section comfortable top and bottom padding. Avoid cards or excessive container chrome; the composition should feel like a single editorial surface.

### Value-list structure
- Each value item has a short, high-contrast lead statement followed by one or two lines of supporting explanation.
- Separate items with thin horizontal rules that span the left content column, not the full viewport.
- Use consistent vertical rhythm: compact spacing within an item and noticeably larger spacing between items.
- Allow selected words in supporting copy to behave like understated inline links, using an accent colour or underline only when there is a meaningful destination.
- Keep copy concise and benefit-led. The lead statements should be independently scannable without sounding like generic feature labels.

### Right identity block
- Build a compact vertical lockup containing a rounded square product mark or abstract brand symbol placeholder, a product name placeholder, a short positioning line, and one primary CTA.
- Size the mark prominently but keep it visually subordinate to the overall message. Use a dark elevated surface or soft tonal contrast behind it.
- Centre-align the contents of this block if that matches the product’s brand; otherwise use the same alignment system as the rest of the page.
- Make the CTA text-led rather than button-heavy when the brand is minimal: a muted or bright accent link can sit below the positioning line. If the product needs stronger conversion emphasis, convert it into a compact outlined or filled button without changing the overall restraint.

### Typography
- Use a clean sans-serif with excellent screen legibility.
- Lead statements: approximately 24–28px on desktop, regular weight, tight line-height around 1.2.
- Supporting copy: approximately 23–27px on desktop, regular weight, slightly relaxed line-height around 1.2–1.3, with lower contrast than the lead statements.
- Product name: approximately 36–42px, bold or semibold, with tight tracking.
- Positioning line and CTA: approximately 22–26px; make the CTA clearly distinguishable through colour or weight.
- Scale down type on mobile while preserving the hierarchy. Do not make every line bold or oversized.

### Colour and contrast
- Start with a background near `#101010` or `#111111`.
- Use a primary text colour near `#F2F2F2` and supporting text near `#B9B9B9`.
- Use dividers in a low-contrast grey near `#292929`.
- Choose one brand accent for links and the CTA, such as a muted violet near `#A78BFA`, but derive the final value from the user’s brand.
- If the identity mark needs a surface, use a slightly lighter black near `#1D1D1D`; keep shadows soft and nearly invisible.
- Maintain accessible contrast for all essential text and interactive elements.

### Borders, surfaces, and radius
- Use 1px solid dividers with low contrast.
- Avoid visible borders around the whole section.
- If using a mark container or CTA button, use a generous rounded radius—approximately 24–32px for the mark container and 8–999px for a pill only when appropriate to the brand.
- Keep surfaces flat and refined; do not add gradients, glass effects, or heavy drop shadows unless the user’s brand calls for them.

### Interaction and responsive behaviour
- Give inline links and the CTA a clear hover and focus state: increase contrast, add a subtle underline or colour shift, and preserve a visible keyboard focus ring.
- Use short, restrained transitions around 150–220ms.
- Ensure dividers, text wrapping, and column widths adapt cleanly as content changes.
- On mobile, preserve generous side padding and avoid forcing the identity mark or CTA into a cramped row.
- Support reduced-motion preferences and make the entire component usable without hover.

### Content and implementation guidance
- Use the user’s real product benefits, vocabulary, and brand colours after asking the preliminary questions.
- Keep the structure semantic: a section, a list of value items, and a clearly labelled CTA link or button.
- Make the component data-driven so the number of values and CTA destination can change without rewriting the layout.

## Never
- Never use the reference product’s logo, product name, wording, or exact claims.
- Never copy the reference layout pixel-for-pixel or reuse its distinctive brand mark.
- Never include the reference product’s illustrations, imagery, icons, or visual assets.
- Never invent a brand identity that overrides the user’s product and design system.
- Never use dense card grids, decorative effects, or generic marketing copy that weakens the editorial hierarchy.
