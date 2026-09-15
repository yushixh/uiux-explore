## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073820-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/prisma-io/a9579200-8b41-4bc5-a193-79d074877e51-1789073789-full.webp
- Component on Kage: https://kage.design/component/prisma-feature-grid-4

## Before you start
Ask what the user's product is, who it serves, and what its brand personality, colours, typography, and primary action are. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Goal
Build a polished, responsive feature section that explains how several capabilities work better together. The section should feel cohesive, premium, and easy to scan: a large message on one side, a short stack of benefits beneath it, and one distinctive visual narrative on the other.

## Design language

### Layout and alignment
- Use a centered, wide container with a maximum width around 1180–1240px and horizontal padding of 32px on desktop, reducing to 20–24px on mobile.
- Create a two-column desktop layout: the text column should occupy roughly 46–50% of the width and the visual column the remaining 50–54%, with a 64–96px gap.
- Vertically align the visual near the headline and let the text column breathe; do not force every row to line up with visual elements.
- Place a large headline at the top of the text column, followed by three vertically stacked benefit rows. Each row contains a compact icon tile, a concise title, and one supporting sentence.
- On smaller screens, collapse to one column: headline and benefit rows first, visual second. Maintain generous section padding, but reduce it proportionally.
- Keep the content width readable. The headline should wrap naturally into about three lines on desktop rather than stretching across the full container.

### Typography hierarchy
- Use the product's brand sans-serif if available; otherwise choose a modern, highly legible sans-serif with a neutral shape.
- Set the headline large and confident, approximately 44–52px on desktop, 34–40px on mobile, with a tight line-height around 0.98–1.08 and medium-to-semibold weight.
- Benefit titles should be noticeably smaller but still assertive: around 19–21px, with 600–650 weight.
- Supporting text should be 15–16px, regular weight, with a 1.45–1.6 line-height and muted contrast.
- Use near-black for primary text, approximately #171717, and a softened charcoal or gray around #6D6D6D for supporting copy.

### Colour and visual treatment
- Keep the page background warm white or pure white, approximately #FFFFFF or #FCFCFB.
- Use colour sparingly: let the visual carry the energy through a subtle blend of cool cyan, pale blue, warm yellow, and coral accents. Adapt those hues to the user's brand palette rather than copying them.
- Icon tiles may use very soft tinted shadows or small blurred colour accents beneath them, but icons themselves should remain simple and low-noise.
- The right-side visual should communicate an integrated system: for example, a central product object connected to several labelled stages or capabilities around it. Use abstract UI, CSS shapes, SVG, or generated gradients—never rely on a literal stock image.
- Keep the visual background pale and atmospheric, approximately #F3F4F2 or a brand-adjusted equivalent, so the system diagram remains legible.

### Borders, radius, and depth
- Give the main visual a large radius around 16–22px, with a very subtle 1px border such as rgba(20,20,20,.10).
- Use soft, diffuse shadows rather than hard elevation: approximately 0 12px 36px rgba(20,20,20,.08).
- Icon tiles should be approximately 46–52px square with a 13–16px radius, a faint border, and a restrained shadow or coloured glow.
- Labels within the visual can be pill-shaped, around 999px radius, with white or translucent backgrounds, thin neutral borders, and compact 12–13px text.
- Avoid excessive cards around every item; the hierarchy should come from spacing and typography more than boxes.

### Feature rows
- Separate the three benefits primarily through vertical spacing, not divider lines. Use approximately 28–38px between rows.
- Align each icon tile to the top of its text block, not to the vertical center of the entire row.
- Give each row a clear, meaningful icon that represents a capability or relationship. Prefer a consistent stroke-based icon set or minimal custom SVGs.
- Keep supporting descriptions to one or two lines on desktop when possible.

### Visual interaction and responsiveness
- If the visual is interactive, make the surrounding stages or labels subtly respond on hover or focus: increase contrast, add a small glow, or animate a connecting line. Keep motion slow and purposeful, around 180–300ms.
- Provide visible keyboard focus states and meaningful accessible labels for interactive diagram elements.
- Respect `prefers-reduced-motion`; replace animated paths and floating effects with static states.
- On mobile, preserve the visual's aspect ratio, simplify or hide nonessential diagram labels, and ensure it never causes horizontal overflow.
- Use semantic headings, lists for the benefits, responsive images or SVGs, and sufficient colour contrast.

### Implementation guidance
- Build the section as a reusable component with content-driven data for the headline, benefit rows, icons, and visual labels.
- Prefer CSS gradients, inline SVG, and lightweight DOM elements for the atmospheric visual so the result is adaptable to any product. If using an image, provide an appropriate alt description and a neutral placeholder asset.
- Ensure the section works at desktop, tablet, and mobile widths and remains visually balanced when copy lengths change.

## Never
- Never reuse the reference's logos, product names, brand identifiers, or exact copy.
- Never copy the reference illustration, mascot, imagery, diagram labels, or distinctive artwork.
- Never assume the user's product is a developer tool or use platform-specific language unless the user confirms it.
- Never turn every feature row into a heavy bordered card.
- Never sacrifice readability, accessibility, responsive behaviour, or performance for decorative motion.
