## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060781-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/clerk-com/b0a171ff-4b4c-415f-ac9b-4885f02b49d0-1789060731-full.webp
- Component on Kage: https://kage.design/component/clerk-navigation

# Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to that product rather than reproducing a reference site.

## Build an announcement bar and global navigation header

Create a responsive website header with two stacked layers:

1. A narrow announcement bar at the top for a timely product, company, or marketing message.
2. A floating, rounded global navigation bar beneath it, containing brand identity, primary navigation, and account actions.

The result should feel polished, minimal, trustworthy, and suitable for a modern software product.

## Design language

### Layout and alignment
- Use a full-width page region with a dark announcement strip at the top.
- Center the announcement content horizontally as a compact inline group: short message, a subtle divider or spacing break, then a text link with a small directional cue.
- Place the main navigation inside a centered container with a maximum width around 1200–1280px and small horizontal gutters of roughly 24–32px.
- Give the navigation container a pill-like or softly rounded rectangular shape rather than letting it visually merge into the page.
- Use a single horizontal flex row on desktop.
- Group the brand and primary navigation on the left; keep account actions aligned to the far right.
- Separate the brand mark/name from the navigation links with a thin vertical divider and consistent internal padding.
- Keep the header compact: approximately 44–48px tall for the main navigation and 32–40px for the announcement bar.
- On smaller screens, collapse or hide lower-priority navigation links behind a menu control while preserving the brand and the most important account action.

### Typography hierarchy
- Use a modern sans-serif with crisp rendering and slightly tight tracking.
- Announcement text should be small, medium-weight, and high contrast; the call-to-action link can be semibold.
- Navigation items should be approximately 13–14px, medium weight, and visually quieter than the account actions.
- Use compact labels and avoid oversized typography in the header.
- Account actions should have enough weight to be scannable, with the primary action slightly stronger than the secondary action if both are present.

### Colour
- Announcement strip: near-black, approximately `#151515` or `#171717`.
- Announcement text: warm white, approximately `#F5F5F2`; secondary cues can use `#A9A9A5`.
- Page background: very light warm gray, approximately `#F7F7F5` or `#FAFAF8`.
- Navigation surface: off-white, approximately `#FCFCFA`.
- Main text: near-black, approximately `#171717`.
- Secondary text: neutral gray, approximately `#6E6E6A`.
- Borders and dividers: soft gray, approximately `#DCDCD8` with low visual contrast.
- Ensure text meets accessible contrast requirements in every state.

### Borders, radius, and depth
- Give the main navigation a 1px subtle border.
- Use a radius around 12–16px for the outer navigation container; use smaller radii for any controls inside it.
- Keep shadows extremely restrained or omit them. If needed, use a diffuse shadow such as `0 2px 8px rgba(0,0,0,0.04)`.
- Use a 1px vertical divider between the brand group and primary links.
- Avoid heavy outlines, gradients, glass effects, or excessive decoration.

### Interaction
- Navigation items that open menus should include a small downward chevron and have a clear hover and keyboard-focus state.
- On hover, use a subtle background tint or slight text-colour change rather than dramatic animation.
- Dropdowns should open predictably, align to their trigger, and use the same light surface, border, radius, and restrained shadow language.
- Announcement links should be visibly interactive and include a small arrow or directional indicator.
- Account links should have distinct hover, focus, and active states.
- Support keyboard navigation, visible focus rings, semantic landmarks, accessible labels, and touch targets of at least 44px where practical.
- Keep transitions short and calm, around 150–200ms, with no distracting motion.

### Responsive behavior
- At tablet widths, reduce horizontal gaps before removing important content.
- At mobile widths, preserve the announcement message only if it remains readable; otherwise allow it to wrap or simplify it.
- Replace the full primary navigation with a menu trigger, and keep account access easy to find.
- Ensure the navigation never causes horizontal scrolling.

## Content guidance
Use realistic but original labels based on the user's product. Keep the announcement concise and useful, and organize navigation into a small number of meaningful groups. Do not invent unnecessary sections just to fill space.

## Never
- Never copy the reference site's logos, product names, navigation labels, announcement copy, or exact wording.
- Never use the reference brand identity, illustrations, imagery, or decorative assets.
- Never reproduce the exact spacing, proportions, or visual styling as a pixel-for-pixel clone.
- Never make the header inaccessible, hover-only, or dependent on colour alone.
- Never use oversized menus, heavy shadows, loud gradients, or unrelated decorative treatments.
