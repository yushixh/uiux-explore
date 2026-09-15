## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060506-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/anthropic-com/9400eeef-f6ac-4bf6-a324-e094b3c8d068-1789060491-full.webp
- Component on Kage: https://kage.design/component/anthropic-footer

## Before you start
Ask the user what their product is, who it serves, and what brand direction they want. Then apply the principles below to create an original footer for that product rather than reproducing the reference.

## Build this section
Create a large, full-width website footer for a software or technology product with many destinations. Treat it as a structured sitemap: useful, calm, and highly scannable rather than promotional.

### Layout and alignment
- Use a near-black background, approximately `#141414`, with a centered responsive container capped around 1140–1240px.
- On wide screens, use a four-column grid. Reserve a narrow left area for the brand mark and place the navigation columns to its right; alternatively let the brand occupy the first grid track and keep all columns aligned to one consistent top edge.
- Each navigation column may contain several link groups. Keep group headings aligned to the same left edge as their links, and use clear vertical gaps between groups.
- Use generous outer padding: roughly 68–80px top, 64–72px bottom, and 5–6vw horizontal padding, while allowing the container to compress on smaller screens.
- Place the copyright and social controls in a quiet bottom row. Align them with the main container rather than centering them independently.
- On tablet, reduce to two columns. On mobile, stack the groups into one column or use accessible collapsible sections so the footer remains usable without excessive scrolling.

### Typography hierarchy
- Use a neutral sans-serif system or brand font with excellent small-size legibility.
- Navigation group headings should be semibold, around 13–14px, with a line height near 1.3.
- Links should be regular weight, around 13–14px, with approximately 28–29px line height to support scanning and touch interaction.
- Legal and metadata text can be 12–13px, with comfortable contrast and a slightly tighter line height.
- Keep headings and links sentence case. Avoid oversized marketing copy: this component is information architecture, not a hero.

### Colour
- Use a near-black base such as `#141414` or `#151515`.
- Use warm white for headings and high-priority text, around `#F3F1EA`.
- Use muted warm gray for links, around `#A9A7A0`, with a brighter hover/focus state around `#F3F1EA`.
- Use the product's own accent only sparingly, if at all; the footer should feel quieter than the rest of the page.
- Ensure all text and controls meet accessible contrast requirements, especially on mobile.

### Borders, radius, and controls
- Avoid card-like containers and excessive decoration. Let the dark field and alignment create the structure.
- If a divider is needed above the footer or between the main links and metadata, use a subtle 1px line around `rgba(243,241,234,0.16)`.
- Keep controls minimally rounded, around 2–6px, or use the product's established radius system.
- Social icons should be small, monochrome, and placed in a compact horizontal row. Use real accessible links with visible keyboard focus states.

### Interaction and responsive behavior
- Every link needs a clear hover and keyboard-focus state: brighten the text and optionally add a subtle underline or 1–2px translate effect.
- Preserve generous hit areas even when the visible type is small.
- On narrow screens, allow long legal labels to wrap naturally; never clip or truncate them.
- If groups collapse on mobile, make the headings real buttons with `aria-expanded`, visible focus treatment, and animated height/opacity transitions that respect `prefers-reduced-motion`.
- Include enough realistic placeholder link groups to demonstrate the density, but generate copy appropriate to the user's product and do not reuse reference wording.
- Keep the footer usable with keyboard navigation and screen readers; provide a meaningful navigation label such as “Footer navigation.”

## Never
- Never copy the reference's logo, product name, company name, link labels, legal copy, or exact sitemap.
- Never use the reference's logos, social marks, illustrations, icons, or imagery; use generic text/icon placeholders or the user's own assets.
- Never reproduce the exact column content, spacing measurements, or visual branding as a pixel-for-pixel clone.
- Never add decorative imagery that competes with the navigation.
- Never hide essential links behind inaccessible hover-only interactions.
