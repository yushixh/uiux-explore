## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060423-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060392-full.webp
- Component on Kage: https://kage.design/component/cal-feature-grid

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the design principles below to create an original feature-grid section for that product—not a replica of any reference.

## Build this section
Create a polished, responsive feature-grid section that explains a simple three-step workflow or product journey. The section should feel calm, lightweight, and editorial, with a centered intro above three equal cards.

### Layout and alignment
- Use a very light neutral page background, approximately `#f7f7f7` or a brand-appropriate equivalent.
- Constrain the section to a max width of roughly `1160–1200px` and center it horizontally.
- Add generous vertical padding: approximately `88–120px` above the heading and `72–96px` below the cards.
- Center-align the introductory content. Place a compact pill label above the heading, followed by a large headline, a muted supporting paragraph, and two adjacent calls to action.
- Keep the headline to one or two lines on desktop and constrain the supporting paragraph to approximately `520–620px`.
- Below the intro, create a three-column grid with equal-width cards and a gap of approximately `14–20px`.
- On tablet, use two columns if space permits; on mobile, stack the cards vertically with consistent spacing.
- Each card should be a vertically arranged panel: step marker, title, description, then a visual preview anchored toward the bottom. Let the preview occupy the lower portion of the card without competing with the text.
- Use a consistent card height on desktop, approximately `420–460px`, while allowing content to reflow naturally on smaller screens.

### Typography hierarchy
- Use a modern sans-serif with a friendly geometric or humanist feel; use the product's brand font if available.
- Make the main heading bold and prominent, around `44–52px` on desktop with tight line-height around `0.98–1.08`; scale to `32–38px` on mobile.
- Use a small pill label at roughly `13–14px`, medium weight.
- Card titles should be approximately `17–19px`, semibold, with compact line-height.
- Card descriptions should be around `16–17px`, regular weight, with relaxed line-height around `1.4–1.55`.
- Use muted text for supporting copy and stronger near-black text for headings.
- Keep button labels around `14–15px` and medium weight.

### Colour, borders, and shape
- Use near-black for primary text, approximately `#202020` to `#262626`.
- Use a soft gray for secondary text, approximately `#8b8b8b` to `#9a9a9a`.
- Make cards warm white or white, approximately `#ffffff`, against the slightly gray page background.
- Add a subtle 1px border around cards, approximately `#e1e1e1`, with a restrained shadow such as `0 4px 10px rgba(0,0,0,0.05)`.
- Use rounded card corners around `16–18px`; use a smaller radius around `8–12px` for the step marker and controls.
- Style the step marker as a compact light-gray rounded square or capsule containing a two-digit number in muted gray.
- Make the primary CTA dark with white text and the secondary CTA white or transparent with a light border. Include a small directional arrow or equivalent affordance, but adapt it to the product's interaction language.
- Avoid excessive gradients, saturated accents, or decorative noise unless the user's brand requires them.

### Preview artwork and interaction
- Build abstract, product-relevant UI previews with HTML/CSS or lightweight inline SVG rather than relying on external imagery.
- Each preview should visually reinforce the card's concept: for example, layered settings rows, a connected-system diagram, a calendar-like panel, or a communication surface. Keep previews intentionally simplified and slightly cropped by the card's bottom edge.
- Use very pale grays for inactive interface elements and one restrained brand accent for meaningful states.
- Preserve generous whitespace in the preview so it reads as a supporting visual, not a full product mockup.
- Add subtle hover behavior: the card may lift by 2–4px, increase shadow slightly, or reveal a small accent shift. Keep motion quick and understated, around `160–220ms`, with a reduce-motion fallback.
- Buttons should have clear hover, focus-visible, and pressed states. Ensure keyboard focus is visible and all interactive elements have accessible labels.
- Include responsive behavior that maintains the visual hierarchy and avoids horizontal overflow.

### Content direction
- Write original, concise copy for the user's product. Use a clear overarching statement, a short explanatory subtitle, and three sequential benefits or steps.
- Make each card title action-oriented and each description explain the practical outcome, not just the feature name.
- Keep the three cards parallel in tone and structure, with similar copy lengths where possible.

## Never
- Never use the reference site's logos, product names, brand marks, or exact copy.
- Never reproduce the reference's interface previews, illustrations, calendar artwork, icons, or imagery literally.
- Never copy the exact layout proportions, wording, visual assets, or decorative details; reinterpret the principles for the user's product and brand.
- Never use external stock imagery or inaccessible icon-only controls when a simple CSS or inline-SVG treatment will work.
