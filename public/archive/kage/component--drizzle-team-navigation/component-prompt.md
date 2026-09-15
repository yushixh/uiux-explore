## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073809-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073797-full.webp
- Component on Kage: https://kage.design/component/drizzle-team-navigation

## Before you start
Ask what the user's product is, who it is for, and what brand personality, colours, typography, and social destinations it uses. Then apply the principles below to create a version for that product rather than reproducing a reference design.

## Design goal
Build a slim community-oriented navigation bar for the upper portion of a website. It should feel calm, friendly, and editorial: a small cluster of member avatars establishes human presence, social icons provide secondary destinations, and one dark filled button gives the section a clear action.

## Layout and alignment
- Use a full-width horizontal container with generous left and right padding, approximately 56–64px on desktop.
- Keep the navigation row around 72–84px tall and vertically center every element.
- Group the community identity and social links on the left; keep the primary action anchored to the far right.
- Show three small circular avatars in a slightly overlapping stack. Each avatar should be approximately 40px square, with a 2px light background ring so the overlap remains legible.
- Place a thin vertical divider about 20–28px after the avatar stack. Make it approximately 1px tall and 34–42px high.
- Put the social icons in a compact horizontal group after the divider, with 22–28px between icon hit areas. Use simple monochrome line or solid glyphs appropriate to the chosen destinations.
- Make the action button visually distinct but compact, approximately 106–114px wide and 34–38px high.
- On narrow screens, reduce horizontal padding, preserve the action's prominence, and allow social links to collapse into fewer destinations or an overflow menu rather than causing awkward wrapping.

## Typography hierarchy
- Use a neutral sans-serif with a crisp, modern feel.
- Keep utility navigation text small, around 13–14px, with medium-to-semibold weight.
- Use a slightly heavier label for the primary action; it should be readable at a glance without appearing oversized.
- Avoid decorative display typography in this component—the visual interest should come from spacing, avatars, and the contrast of the action button.

## Colour
- Use a warm or near-white page background, approximately `#FFFEFC` or `#FFFFFF`.
- Render primary text and iconography in a deep charcoal, approximately `#202124` to `#34373B`.
- Use a muted slate or graphite fill for the primary button, approximately `#454B55` or `#4B515B`, with white text near `#FFFFFF`.
- Make the divider a very light neutral, approximately `#D9D9D6`.
- Keep avatar imagery or avatar placeholders varied but restrained; if real images are unavailable, use subtle neutral tones rather than generic branded illustrations.
- Provide visible hover and keyboard-focus states. The button may darken slightly on hover, while icon links can shift to the primary text colour or gain a subtle background.

## Borders, radius, and depth
- Use fully circular avatar masks and a 1px light outline or ring.
- Give the action button a small radius, approximately 2–4px, for a restrained, utilitarian appearance.
- Avoid cards, shadows, gradients, and heavy borders. The section should sit directly on the page and rely on whitespace for separation.
- Make every icon and button an accessible hit target of at least 40px even if the visible glyph is smaller.

## Interaction and accessibility
- Link each social icon to a real destination and provide an accessible label such as “Community on GitHub” or “Follow on social platform.”
- Treat the avatar cluster as either a link to the community or a decorative identity element; do not leave it ambiguously interactive.
- Include a clear focus ring that meets contrast requirements and is not removed in keyboard navigation.
- Use semantic navigation markup, meaningful link text for the action, and responsive behaviour that remains usable at 320px wide.
- Respect reduced-motion preferences; any hover transition should be brief and subtle.

## Never
- Never copy the reference site's logos, product names, social destinations, or exact wording.
- Never reuse the reference avatars, avatar photography, illustrations, or imagery.
- Never reproduce the exact spacing, dimensions, or pixel arrangement as a tracing exercise.
- Never make the social icons the dominant visual element or add a second competing call to action.
- Never hide focus states, rely on colour alone, or use inaccessible icon-only links without labels.
