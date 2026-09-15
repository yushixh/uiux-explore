## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060819-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/monzo-com/b864c421-0184-411c-901f-a4ffc676dbcc-1789060760-full.webp
- Component on Kage: https://kage.design/component/monzo-feature-grid-3

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and content they want to use. Then apply the principles below to create an original feature-grid section for that product—not a replica of the reference.

## Build this section
Create a responsive feature showcase with a left-aligned introductory block above a horizontally scrollable row of feature cards. The section should help users quickly understand several related benefits while making the next action obvious.

### Layout and alignment
- Use a generous white or near-white section background.
- Constrain the main content to a centered max width of roughly 1150–1250px, with responsive side padding of about 24–64px.
- Place an optional compact outlined “view all” control centered above the main content, with generous vertical separation.
- Align the headline, supporting paragraph, and primary/secondary actions to the same left content edge.
- Put the carousel controls toward the right side of the intro row on desktop; hide or simplify them on small screens if native touch scrolling is sufficient.
- Below the intro, use a horizontal card rail rather than a conventional wrapped grid. Show approximately 3 cards on desktop plus a partial next card at the right edge to signal additional content.
- Give cards a consistent width, around 300–330px on desktop, with a smaller responsive width on mobile. Keep the rail clipped to the viewport while allowing horizontal scrolling.
- On mobile, stack the heading and actions, then let the card rail bleed toward the screen edge while preserving comfortable outer padding.
- Add a separate, softly contrasting rounded panel or next section beneath the rail to establish visual rhythm, without letting it compete with the feature cards.

### Typography hierarchy
- Use a bold, friendly sans-serif display style for the main heading, around 36–44px on desktop and 30–36px on mobile, with tight line height around 1.05–1.15.
- Use a muted, highly readable sans-serif paragraph at approximately 18–21px with 1.35–1.5 line height and a readable max width of about 560px.
- Set card titles in a bold 22–26px style with tight line height.
- Use card descriptions around 16–18px, with relaxed line height and a softer text colour.
- Keep button labels compact, semibold, and sentence case. Use underlined inline links only where they clarify a related action.

### Colour
- Treat the palette as a system to adapt to the user’s brand rather than hard-code it.
- As a neutral starting point, use near-white `#FFFFFF` for the section, deep blue-black `#0B1B24` for headings and filled actions, medium grey `#73777A` for supporting copy, and very pale mint `#F1F8F5` for the following panel.
- Use a restrained accent colour for media backgrounds or active states, approximately `#FF5A52`, but replace it with the user’s brand accent where appropriate.
- Maintain strong contrast for all text and controls; do not rely on colour alone to communicate carousel state.

### Cards and media
- Start each card with a large media tile using a consistent aspect ratio close to 1:1, around 320×320px.
- Apply a generous corner radius of roughly 24–30px to media tiles. Allow the imagery or branded visual to crop naturally with `object-fit: cover`.
- Feature cards may use photography, product UI, abstract colour fields, or another product-relevant visual language, but all media should feel like part of one coherent set.
- Keep the title and description below the media with a deliberate vertical gap; do not put dense text over the image unless the product’s brand specifically calls for it.
- Do not add card borders unless needed for contrast. Use whitespace as the primary separation mechanism.

### Controls and interaction
- Use pill-shaped buttons with an outlined secondary style and a dark filled primary style. Give them approximately 48px height, 24–32px horizontal padding, and a 999px radius.
- Use circular previous/next controls with thin dark outlines, around 48px square. Make the unavailable direction visibly disabled with reduced contrast.
- Support drag, touch swipe, mouse-wheel horizontal scrolling, and keyboard focus for the carousel.
- Add scroll-snap alignment so cards settle cleanly, and provide visible focus rings for buttons, links, and cards.
- If pagination indicators are used, keep them subtle and pair them with accessible labels such as “Next features” rather than relying on dots alone.
- Ensure the partial next card remains intentional at common viewport widths but never obscures readable content or controls.
- Respect reduced-motion preferences and avoid autoplay.

### Content guidance
- Choose a single product theme for the cards and make each card communicate one distinct benefit.
- Keep each title short enough to scan quickly and each description to roughly 1–3 sentences.
- Use action labels that describe the outcome, such as exploring the feature or starting the product, while matching the user’s actual conversion flow.

## Never
- Never copy the reference site’s logos, product names, feature names, exact copy, imagery, illustrations, icons, or brand assets.
- Never use the reference company’s identity as placeholder content.
- Never reproduce the exact card order, dimensions, wording, or visual artwork; use the underlying layout and interaction principles to create a distinct section for the user’s product.
- Never hide essential feature content behind an inaccessible carousel or remove keyboard and screen-reader support.
- Never use low-contrast text, unexplained controls, or decorative imagery that does not support the product story.
