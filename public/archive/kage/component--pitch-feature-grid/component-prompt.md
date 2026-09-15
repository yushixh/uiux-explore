## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060648-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/pitch-com/6703b162-6073-44e6-a626-e3df0dc35c4b-1789060611-full.webp
- Component on Kage: https://kage.design/component/pitch-feature-grid

# Build a layered feature-card grid for a modern software product

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and visual references are. Then apply the principles below to my product rather than reproducing the reference literally. Use original feature names, copy, interface details, and visual metaphors that fit my product.

## Goal
Create a responsive feature-grid section that explains three complementary product capabilities through short editorial copy and custom miniature UI illustrations. The section should feel polished, optimistic, and tactile—not like a generic dashboard gallery.

## Structure and layout
- Place three feature cards in a horizontal row within a centered max-width container, with consistent gutters of roughly 20–28px.
- Let the cards feel intentionally varied: use two light cards and one dark feature card, or otherwise create a strong contrast pattern without making the layout visually noisy.
- Each card should have a generous fixed or aspect-aware height, approximately 360–440px on desktop, with the text anchored at the top and a custom product illustration occupying the lower half.
- Use large rounded corners, around 24–30px. Avoid thin conventional card borders unless needed for contrast.
- Keep the card grid aligned to a clean baseline, but allow the internal illustrations to overlap, float, or extend toward the edges for a crafted, collage-like feel.
- On tablet, use a two-column arrangement with the final card spanning the available width when appropriate. On mobile, stack cards vertically with 16–20px gaps and preserve comfortable text padding.
- Use card padding of approximately 28–32px desktop and 22–24px mobile.

## Typography hierarchy
- Use a friendly contemporary sans-serif with rounded or softened forms. If the brand has a typeface, use it; otherwise choose a clean geometric sans-serif with strong readability.
- Feature title: bold, approximately 26–30px desktop, 22–26px mobile, line-height around 1.05–1.15, with slight negative tracking.
- Feature description: regular weight, approximately 16–18px, line-height around 1.4–1.55, limited to two or three short lines where possible.
- Keep titles and descriptions left-aligned. Do not overfill the cards with supporting labels or metadata.
- Use near-black text such as #171328 on light cards and white or #FAF8FF on dark cards.

## Colour and surfaces
- Start with a mostly white or warm-white page background, approximately #FFFFFF or #FCFBFF.
- Use a soft lavender feature surface around #E9E2FF or #E6DEFF for one card.
- Use a deep saturated purple for the high-contrast card, around #281064–#321275.
- Use vivid violet and lilac accents in the miniature UI, approximately #6D2CFF, #8C4DFF, and #C9B5FF.
- Add one fresh secondary accent—such as lime green #B8EF72, mint #C9F58A, or coral #FF8B6A—to create moments of energy inside the illustrations.
- Keep colour blocks intentional: large surfaces should remain calm while small controls, badges, connectors, and data points provide visual activity.

## Illustration and component details
- Build original miniature interface scenes with HTML/CSS/SVG or the project’s existing illustration system; do not rely on stock imagery.
- Each illustration should communicate the feature at a glance, for example:
  - a brand or content system represented by typography controls, swatches, and reusable assets;
  - a collaboration or organization system represented by connected people, cards, or workflow nodes;
  - a media or creation feature represented by a canvas, playback controls, timeline, or embedded content.
- Treat these scenes as simplified product moments, not full dashboards. Use a few recognisable controls and shapes with ample breathing room.
- Add dimensionality with overlapping panels, soft shadows, floating pills, circular action buttons, dotted outlines, connectors, and cropped elements that approach the card edges.
- Keep interface labels generic and short. Use placeholder content relevant to the user’s product, not the reference’s wording.
- If using an image area, use an abstract gradient, generated placeholder texture, or the user’s own asset—not a recognizable image copied from the reference.

## Borders, radius, and depth
- Prefer flat colour surfaces with subtle depth rather than heavy shadows.
- Use soft shadows such as `0 12px 30px rgba(39, 16, 100, 0.10)` for floating interface panels.
- Use 1px translucent borders around white or pale panels, for example `rgba(40, 16, 100, 0.12)`.
- Make small pills and controls fully rounded, generally 999px radius; use 10–16px radius for miniature panels.
- Ensure dark-card illustrations have enough tonal separation: use lighter purple panels and bright accent controls against the deep background.

## Interaction and motion
- If the cards are interactive, make the entire card or a clearly labelled action keyboard-accessible.
- On hover, use a restrained lift of 2–4px, a slightly stronger shadow, and subtle illustration movement such as a floating badge shifting or a connector animating.
- Keep transitions between 180–280ms with an ease-out curve. Do not make every decorative element move continuously.
- Respect `prefers-reduced-motion` by removing nonessential movement.
- Ensure focus states are visible and high-contrast, especially on the dark card.

## Accessibility and implementation
- Use semantic section, heading, and paragraph elements.
- Maintain a logical heading hierarchy and sufficient contrast: target WCAG AA for all readable text.
- Do not communicate meaning through colour alone; use labels, shapes, or layout as reinforcement.
- Make responsive behaviour deliberate at approximately 1024px, 768px, and 480px breakpoints.
- Keep the card content data-driven where practical so the user can replace titles, descriptions, colours, and illustration components easily.

## Never
- Never copy the reference’s logos, product names, brand marks, exact feature names, or marketing copy.
- Never reproduce the reference illustrations, screenshots, layouts in pixel-perfect form, or recognizable imagery.
- Never use the reference’s exact visual assets or embed third-party brand logos without permission.
- Never make the cards so decorative that the feature message becomes difficult to scan.
- Never use low-contrast text, inaccessible hover-only content, or motion that cannot be reduced.
