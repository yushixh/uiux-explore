## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060954-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-gallery-2

## Before you start
Ask what the user's product is, who it serves, and what its brand personality, colours, and navigation structure are. Then apply the principles below to create an original footer for that product rather than reproducing the reference.

## Build a structured, multi-column website footer
Create a full-width footer that acts as a clear sitemap and utility area for a modern software product. It should feel calm, editorial, and highly scannable, with a strong information hierarchy and plenty of whitespace.

### Layout and alignment
- Use a full-width section with a thin horizontal divider at the top.
- Constrain the inner content to a wide centered container, approximately 1120–1200px on desktop, with responsive side padding of 32–64px.
- Build the primary footer navigation as a CSS grid: one narrower brand/locale column followed by three evenly sized navigation columns.
- Align all column headings and links to the same top baseline. Keep the brand block visually distinct but structurally aligned with the navigation.
- Place a second row of grouped links below the first row, preserving the same column rhythm. The lower groups may occupy fewer columns while retaining consistent left edges.
- On smaller screens, collapse to one column or two columns depending on available width. Preserve generous vertical spacing and avoid an overly dense list.
- Let the footer extend naturally beyond the viewport; do not force all links into a compact horizontal strip.

### Typography hierarchy
- Use a clean sans-serif typeface appropriate to the user's brand.
- Use small muted text for group headings, around 13–14px with medium weight.
- Use 15–16px link text with a regular or medium weight and comfortable line height around 1.7–1.9.
- Make the brand wordmark or product name the strongest element in the footer, but keep it typographic and restrained.
- Keep labels such as language selectors and social links visually secondary to the main navigation.

### Spacing
- Give the footer substantial top and bottom padding, approximately 56–80px on desktop.
- Use 28–40px horizontal gaps between columns and 44–64px vertical gaps between navigation rows.
- Separate each group heading from its links by approximately 12–16px.
- Use 8–12px vertical spacing between individual links, with enough line height for quick scanning.
- Maintain consistent spacing tokens throughout rather than individually positioning every item.

### Colour and surfaces
- Use a near-white background such as `#FFFFFF` or a warm off-white chosen for the user's brand.
- Use near-black text such as `#111111` for primary links and brand text.
- Use a soft gray such as `#6F6F6F` for group headings, metadata, and secondary controls.
- Use a very light gray such as `#E8E8E8` for the top divider and subtle control borders.
- Avoid decorative colour blocks unless the user's brand requires them; the structure and typography should do most of the work.

### Borders, radius, and controls
- Keep the main divider thin, approximately 1px, and low contrast.
- Use minimal or no borders around the footer itself.
- For language and social selectors, use compact inline controls with a small chevron or icon and no heavy container treatment.
- If a control has a visible outline, use a 1px light-gray border and a modest radius of 6–10px.
- Make links keyboard accessible with visible focus states, such as a subtle underline or high-contrast outline.

### Interaction and responsive behaviour
- Make every navigation item a real link with a clear hover state: darken the text, add a subtle underline, or use another brand-appropriate low-motion treatment.
- Ensure the language selector and any social dropdown affordance communicate that they can be opened.
- On mobile, consider collapsible link groups only if the navigation is very long; otherwise stack groups openly for discoverability.
- Preserve touch targets of at least 44px for interactive controls, even when the visual text is smaller.
- Use semantic `<footer>`, navigation landmarks, headings, lists, and accessible labels.

### Content model
- Generate placeholder categories and links that fit the user's product and audience, but do not borrow wording from the reference.
- Include a brand/locale area, product or solution links, developer or resource links, company links, and social or legal utilities as appropriate.
- Keep category lengths balanced so one column does not become dramatically taller than the others.

## Never
- Never copy the reference's logos, product names, link labels, category names, or exact copy.
- Never reuse the reference's brand identity, wordmark treatment, or proprietary iconography.
- Never include illustrations, photography, or imagery from the reference.
- Never recreate the exact footer proportions or link inventory; adapt the system to the user's product and brand.
- Never make the footer visually noisy with unnecessary gradients, oversized graphics, or excessive animation.
