## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060783-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-feature-grid-3

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual system are. Then apply the principles below to create an original feature-grid section for my product—not a reproduction of the reference.

## Build this section
Create a premium SaaS feature section that introduces a product capability area and presents several related features in an asymmetric bento-style grid. The section should feel spacious, restrained, and product-led, with interface details used as visual evidence rather than decoration.

### Structure and layout
- Use a very light neutral page background, approximately `#f7f7f8` or a brand-appropriate equivalent.
- Add a broad section container with a maximum width around `1180–1280px`, centered horizontally, and generous vertical padding of roughly `96–140px`.
- Begin with a compact editorial introduction aligned to the left: a small coloured eyebrow, a large heading, a short supporting paragraph, and an understated text link with a directional arrow.
- Keep the introduction width around `480–560px`; leave substantial empty space to its right so the section feels deliberate rather than fully packed.
- Below the introduction, use a responsive bento grid with three visual columns on desktop. Use an asymmetric arrangement rather than identical cards:
  - a tall feature card spanning two stacked-row heights on the left,
  - two shorter cards stacked vertically in the centre,
  - a tall feature card spanning the same height on the right.
- Let the grid collapse gracefully: two columns on medium screens, then one column on small screens. Preserve the feature order and ensure every card remains understandable without its visual demo.
- If the section needs a transition from a darker preceding area, use a subtle geometric notch or angled inset at the top edge, but keep it structural and brand-neutral.

### Card design
- Use warm white cards around `#ffffff` against the slightly grey page background.
- Give cards a thin, low-contrast border such as `#e8e8eb`, a soft shadow around `0 8px 24px rgba(20,20,30,0.05)`, and a radius of approximately `16–20px`.
- Use generous internal padding, around `24–32px` on desktop. Align text consistently to the left.
- Each card should contain a short feature title, a concise two-line description, and a visual product demonstration occupying the remaining space.
- On tall cards, position the copy near the top and let the interface visual grow into the lower area. On stacked cards, balance the visual and copy so neither feels cramped.
- Create original UI visuals using CSS, HTML, and neutral placeholder data: profile tiles, role chips, connection lines, buttons, menus, empty states, pricing panels, or other patterns relevant to the user’s product. Keep these demonstrations abstract enough to avoid implying a real product screen.

### Typography
- Use the user’s brand font if available; otherwise use a clean contemporary sans serif such as Inter, Geist, or system UI.
- The main heading should be bold and compact, approximately `32–40px` with `1.05–1.15` line-height and slight negative tracking.
- The eyebrow should be `12–14px`, semibold, and use a distinctive brand accent colour.
- Feature titles should be `14–16px`, semibold, with strong contrast around `#171719`.
- Body copy should be `14–16px`, regular, with `1.45–1.6` line-height and muted colour around `#68686f`.
- Links should be small and semibold, with a simple arrow or chevron and no oversized button treatment.

### Colour and visual language
- Keep the overall palette monochrome and calm: near-black text `#171719`, muted grey text `#68686f`, white surfaces `#ffffff`, and pale grey backgrounds `#f7f7f8`.
- Use one restrained accent for the eyebrow and small interface highlights, approximately `#6956c9` or a colour derived from the user’s brand.
- Avoid large saturated fills. Interface demos may use very pale accent washes, subtle blue/lilac gradients, or translucent grey layers, but they should remain subordinate to the content.
- Use soft gradients and blur sparingly to suggest depth behind interface elements; never let them reduce text contrast.

### Borders, spacing, and detail
- Use a consistent spacing scale based on 4 or 8px increments.
- Maintain visible separation between cards with approximately `8–12px` grid gaps, while allowing the surrounding whitespace to remain generous.
- Use hairline borders, small inset dividers, dotted outlines, and faint connector lines to make product concepts legible.
- Round small controls between `6–10px`; use pills only for statuses, roles, filters, or compact actions.
- Keep interface mockups visually quieter than the surrounding card: reduce contrast, use small type, and avoid unnecessary labels.

### Interaction and responsiveness
- Make the text link and any demonstrative controls keyboard accessible, with visible focus states.
- Add a subtle hover treatment to cards only if cards are clickable: slightly increase shadow, raise by `1–2px`, and transition over `180–240ms`.
- Do not make decorative mockup controls misleadingly interactive unless they perform a useful action.
- On mobile, reduce section padding to roughly `64–80px`, use `24px` card padding, stack all cards, and preserve clear visual hierarchy.
- Respect reduced-motion preferences and avoid parallax or continuous animation. If using animated connector lines or UI transitions, keep them brief, subtle, and optional.
- Ensure colour contrast, focus visibility, semantic headings, and readable text at all viewport sizes.

## Never
- Never copy the reference’s logos, product names, company names, or trademarked interface labels.
- Never reuse the reference’s exact feature copy, headings, card text, or wording.
- Never copy its illustrations, screenshots, avatars, photos, or imagery; create original CSS-based visuals or use neutral placeholders only.
- Never reproduce the reference as a pixel-for-pixel clone. Preserve the layout principles and information hierarchy while adapting the content, accent colour, visual demos, and proportions to my product and brand.
- Never use decorative UI that implies functionality the product does not provide.
- Never sacrifice responsive behaviour, accessibility, or readable contrast for visual similarity.
