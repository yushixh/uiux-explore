## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060953-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/elevenlabs-io/25703c4f-1ec9-434f-a8f0-8548c2191604-1789060912-full.webp
- Component on Kage: https://kage.design/component/elevenlabs-gallery

## Before you start
Ask the user what their product does, who it is for, and what visual brand system they already use. Then apply the principles below to their product and brand—do not reproduce the reference literally.

## Build this section
Create a responsive editorial section that showcases a product’s impact stories, case studies, announcements, or research milestones. It should feel premium, calm, and highly curated: a headline and category switcher lead into an asymmetric media gallery, followed by a two-column mission or research introduction and a large interactive timeline panel.

### Layout and alignment
- Use a full-width, near-white section with a centered content container, approximately 1120–1200px wide on desktop.
- Start with a centered headline, limited to roughly 2 lines and 600–700px wide. Place a compact segmented control directly beneath it.
- Create the gallery as a deliberate asymmetric grid rather than equal cards:
  - a left portrait card,
  - a larger central feature card,
  - a narrower right column containing a soft placeholder or spacer above a second portrait card.
- Keep consistent gutters of about 14–16px and align the card bottoms where possible. Use a fixed visual rhythm, but allow the central feature to dominate.
- Below the gallery, introduce a generous horizontal split: a large statement heading on the left and a readable supporting paragraph on the right.
- Finish with a large rounded timeline or carousel surface. Put previous/next controls toward the outer edges, a thin progress track through the middle, and the active milestone’s label, description, and date aligned to the right side.
- On small screens, stack the cards into a single column, move the supporting copy below the heading, and turn the timeline into a horizontally scrollable or swipeable panel. Preserve generous whitespace.

### Typography hierarchy
- Use a modern neutral sans-serif with humanist proportions; avoid decorative display fonts.
- Main gallery heading: approximately 34–40px desktop, 1.08 line-height, medium weight, with restrained tracking.
- Mission/research heading: approximately 34–40px, with natural wrapping across two lines.
- Body copy and card labels: 15–17px, around 1.4 line-height.
- Timeline metadata can be smaller and quieter, around 14–16px.
- Keep text concise. Use strong contrast for headings and a softer near-black for supporting copy.

### Colour and surfaces
- Base canvas: warm white, approximately #FCFCFB or #FFFFFF.
- Secondary panel and empty media placeholders: very light warm gray, approximately #F3F2F0.
- Primary text: near-black, approximately #111111.
- Secondary text: muted charcoal, approximately #626262.
- For image cards, use real product-relevant media supplied by the user, with a subtle black gradient from the bottom to improve text legibility. Do not invent brand imagery.
- Active segmented-control state should be white with a faint shadow; inactive text should be gray.

### Borders, radius, and spacing
- Use 1px borders in approximately #E7E5E2 for controls, panels, and the timeline surface.
- Give media cards and the timeline panel a 16–20px radius; use pill radius for the segmented control and circular arrow buttons.
- Use approximately 56–72px between the headline and gallery, 72–96px between major subsections, and at least 80px internal padding in the timeline panel on desktop.
- Keep the gallery cards tall enough to feel cinematic, with the central card visibly larger than the surrounding cards.

### Interaction
- The segmented control switches the gallery dataset without changing the overall layout. Animate the content with a short fade/slide transition.
- Entire media cards should be clickable, with a subtle lift, image scale, or gradient change on hover; preserve readable text at all times.
- Timeline arrow buttons advance one milestone and update the active marker, title, description, and date. Add keyboard support, visible focus states, and proper aria labels.
- The progress track should communicate position without becoming visually dominant. On touch devices, support swipe or drag interaction.
- Respect reduced-motion preferences and ensure controls remain usable at high zoom.

### Content structure
Use generic, product-specific data supplied by the user: a category heading, 3–4 impact stories, a concise mission statement, and 4–8 milestones. Keep labels descriptive and editorial rather than promotional. If media is unavailable, use quiet neutral placeholders with a clear aspect ratio instead of decorative illustrations.

## Never
- Never copy the reference site’s logos, product names, category names, headlines, dates, or body copy.
- Never reuse the reference images, celebrity likenesses, branded imagery, or illustrations.
- Never make the gallery a literal visual clone; adapt the card count, proportions, colours, and content to the user’s product.
- Never use inaccessible low-contrast text over images, unlabeled controls, or interaction that only works on hover.
- Never add decorative imagery merely to fill empty space; every visual should support the product’s story.
