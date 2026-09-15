## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060644-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mintlify-com/71224961-d985-451b-9e35-e02eddcee178-1789060616-full.webp
- Component on Kage: https://kage.design/component/mintlify-gallery-3

## Before you start
Ask the user what their product is, who it is for, and what their brand voice, colours, and type choices are. Then apply the principles below to their product rather than reproducing a reference design.

## Build a horizontally peekable customer-story gallery
Create a polished, responsive carousel section for a modern software marketing site. The section should present customer or use-case stories as large editorial cards, with one active card fully visible and neighbouring cards partially visible at the right edge to signal that more content exists.

### Layout and alignment
- Place the section inside a centered content frame with a narrow vertical rule or subtle boundary aligned to the page grid if that fits the product’s visual language.
- Begin with a compact section header: a large, left-aligned headline and a control cluster aligned to its right on wide screens.
- Include previous and next icon buttons, followed by an optional dark secondary CTA. Keep the controls on the same horizontal axis as the heading on desktop; stack them below the heading on smaller screens.
- Under the header, use a horizontal track with intentional overflow clipping. The active card should occupy roughly 82–88% of the available content width, while the next card should remain visibly “peeked” at the right. On mobile, use one card per view with a smaller but still noticeable next-card sliver.
- Each story card is a two-column composition: a coloured content panel on the left and a photographic or visual media panel on the right. Use a near 1:1 split on desktop, collapsing to a vertical stack on narrow screens.
- Keep content aligned to a consistent internal inset, approximately 32px on desktop and 24px on mobile. Vertically distribute the panel so the label and headline sit toward the top, metrics in the middle, and the story link toward the bottom.

### Typography hierarchy
- Use a contemporary sans-serif with a calm, highly legible feel.
- Section heading: 40–56px desktop, 32–40px mobile; medium weight; tight line-height around 1.08.
- Story label: 14–16px, uppercase or small caps, semibold, with modest tracking.
- Story headline: 32–40px desktop and 26–32px mobile; regular to medium weight; line-height around 1.1.
- Metrics: large numerals around 40–48px, followed by concise supporting labels at 15–16px with relaxed line-height.
- Story link: 14–16px medium weight, paired with a small right-pointing chevron.

### Colour and visual treatment
- Use an off-white page background such as #FAFAF8 or #FFFFFF, with very light rules around #E8E8E5.
- Give each story a distinctive but restrained accent background, such as muted coral #E9AEA0, soft blue #8EAEF2, sage #AFC8B8, or warm sand #E6D0A8. Ensure text contrast remains accessible.
- Use white or warm-white text on saturated accent panels, and deep charcoal #171817 for primary controls.
- Treat media with a soft, editorial finish: use a full-bleed image or product visual, `object-fit: cover`, and a subtle light veil or gradient only when needed for readability. If the user has no imagery, use a product-specific visual placeholder rather than generic decoration.
- Keep arrow controls light: white or transparent backgrounds, 1px #E5E5E2 borders, dark icons, and a clear hover state.

### Borders, radius, and spacing
- Use a card radius of approximately 6–10px, with overflow hidden so both halves share the same shape.
- Avoid heavy shadows. If depth is needed, use a barely visible shadow such as `0 4px 18px rgba(20, 20, 20, 0.06)`.
- Maintain 24–32px between the section heading and carousel, and 16–24px between adjacent cards.
- Keep the overall section spacious, with approximately 72–112px of vertical padding on desktop and 48–72px on mobile.

### Interaction and accessibility
- Make the previous and next buttons functional, updating the active card and preserving the partial next-card preview where possible.
- Add smooth horizontal motion, around 300–450ms with an ease-out curve; respect `prefers-reduced-motion`.
- Support touch swipe and keyboard navigation. Give controls visible focus rings and accessible labels such as “Previous story” and “Next story.”
- Ensure cards do not become unreadable when text wraps. On mobile, place the media below the story content and keep the CTA comfortably tappable.
- If the carousel is implemented with a native scroll region, provide scroll snapping and avoid hiding content from keyboard users.

### Content guidance
- Use original, product-relevant placeholder stories, metrics, labels, and calls to action supplied by the user. Keep copy concise so the visual hierarchy remains dominant.
- Use brand-relevant customer visuals, interface captures, or abstract product scenes only when they support the story.

## Never
- Never copy the reference’s logos, product names, customer names, metrics, headlines, or button copy.
- Never reuse its exact photographs, illustrations, imagery, or brand marks.
- Never make the result a pixel-for-pixel replica; adapt the structure, proportions, colours, content, and typography to the user’s product and brand.
- Never rely on colour alone to communicate carousel state or interaction.
- Never sacrifice responsive behaviour, readable contrast, keyboard access, or reduced-motion support for visual similarity.
