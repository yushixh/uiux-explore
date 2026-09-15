## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073666539.webp
- Design on Kage: https://kage.design/designs/tailwindcss-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, typefaces, code/technical assets). Wait for the answers before writing anything. Everything below is the design language of a developer-tool landing page to be applied to *their* product, not a clone of the reference.

## Page structure
1. **Sticky top nav**: left logo + small version pill; right: search trigger with keyboard shortcut hint, text links (docs, playground, blog, showcase), and a small highlighted CTA. Slim, single-row, subtle bottom border.
2. **Hero**: enormous left-aligned headline (3 lines, tight leading) on a white background; short sub-paragraph with inline monospace code-token highlights; a row with a solid black pill CTA and a "Quick search ⌘K" button. Faint monospace utility-like text at the very top edge as a decorative eyebrow.
3. **Hero visual**: a large dark browser/editor window showing syntax-highlighted code, sitting beside a smaller floating card (a product artifact) — two-panel composition that makes the product tangible immediately.
4. **Sponsors section**: small monospace eyebrow ("sponsors"), medium headline, one short paragraph, CTA button, then a dense 4-column logo wall with thin grid borders, many rows, monochrome logos.
5. **Feature bento section**: eyebrow + headline + paragraph, then an asymmetric bento grid of feature cards. Each card: small line illustration icon, bold title, witty one-liner, and a real UI demo filling the lower area (responsive card, filter blur demo, dark-mode widget, colour swatch matrix, easing-curve list, CSS grid photo gallery, split LTR/RTL list, code snippets, stat-chart, portrait card). Card spans vary (full-width, half, third) so the grid has rhythm.
6. **"Ship faster" section**: eyebrow, headline, paragraph, then a wide dark editor mock with file tabs and an empty output pane.
7. **Showcase section**: eyebrow, big two-line headline, paragraph, then a masonry collage of many colourful site screenshots at varying sizes — a burst of colour after the restrained sections above.
8. **Footer**: multi-column link lists (product, resources, community), theme-switcher, copyright line on a plain white background.

## Design language
- Hierarchy: giant display headline (~72–96px, tight tracking) → medium section headlines (~36–48px) → small body (~16px). Small uppercase monospace eyebrows with a coloured first word introduce every section; this label → headline → paragraph → visual pattern repeats down the page.
- Type: a single geometric grotesque for everything, with a monospace face used as an accent for eyebrows, code tokens, keyboard shortcuts and technical asides. Inline code tokens in body copy are tinted (pink/rose) to feel alive.
- Colour: near-white background (#ffffff / #f8fafc), near-black text (#0f172a), dark slate editor panels (#0f172a–#1e293b) with syntax colours (rose, amber, teal, sky). One or two brand accents (pink #ec4899, teal #14b8a6, sky #0ea5e9) appear sparingly in demos and highlights — the chrome stays monochrome, colour lives inside the demo content.
- Borders & radius: hairline slate borders (#e2e8f0) and rounded-xl to 2xl cards; large radius on editor mockups with subtle mac-style dots; soft, minimal shadows — depth comes from the dark-on-light contrast, not drop shadows.
- Bento rhythm: alternate full-width and split cards; each card pairs a playful illustrated line icon with a genuinely working-looking demo. Keep demo content plausible (listings, banking widget, swatch grid, easing curves) so the features read as real.
- Motion: hover states are subtle (slight darkening, gentle scale on cards); anything animated inside demos stays small and local.
- Density: airy headline zones, dense sponsor wall, medium-density bento — vary this rhythm rather than keeping one spacing scale.

## Never
Never use the Tailwind CSS name, logo, tagline copy, sponsor names, their illustrations/icons, or the exact demo screenshots. Do not present the result as Tailwind. Invent equivalent demo content for the user's product.
