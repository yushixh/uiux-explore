## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106673-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106613949-full.webp
- Component on Kage: https://kage.design/component/workid-form

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and interaction preferences they want. Then apply the design principles below to their product rather than reproducing the reference literally.

## Build this component
Create a responsive landing-page section that helps users begin a search or discovery task, followed by a small set of preview cards showing relevant results. Make the section feel calm, direct, and action-oriented.

### Layout and alignment
- Use a centered content column with a comfortable maximum width, approximately 960–1,050px on desktop.
- Place a two-line headline above the form, centered and visually dominant.
- Keep the form on one horizontal row at desktop sizes: a wide text input followed by a compact primary button. The input should take most of the available width; the button should remain content-sized.
- Add clear vertical separation between the form and a short centered section label introducing the result previews.
- Display three result cards in an evenly spaced three-column row on desktop. Stack them or use a horizontally scrollable row on narrow screens, depending on the product’s content density.
- Align card internals consistently: identity or metadata at the top, title beneath it, and small filter/status pills along the bottom.
- Preserve generous empty space around the section so it reads as a distinct landing-page module rather than a dense dashboard.

### Typography hierarchy
- Use a clean modern sans-serif with strong legibility.
- Set the headline in bold or semibold, around 30–34px on desktop with tight line-height around 1.1; reduce it fluidly on mobile.
- Use a medium-weight 20–22px supporting heading for the preview-results label.
- Use 14–16px text for inputs, buttons, metadata, and pills.
- Use a bold 16px card title with a tight line-height and clamp long titles to two lines.
- Keep secondary metadata visibly quieter than titles through colour and weight, not through tiny inaccessible text.

### Colour
- Use a mostly white or very pale neutral background, approximately #FFFFFF or #FAFAFA.
- Use near-black for the headline and primary text, approximately #111111–#171717.
- Use a dark near-black primary button, approximately #151515, with white text.
- Use muted grey for placeholder and secondary metadata, approximately #737373–#8A8A8A.
- Use a very light neutral fill for pills, approximately #F5F5F5–#F7F7F7.
- Ensure all text and controls meet accessible contrast requirements and derive the exact palette from the user’s brand.

### Borders, radius, and spacing
- Give the search input a subtle 1px light-grey border, approximately #DCDCDC, with a medium radius around 9–11px.
- Use a similarly restrained 1px border for cards, approximately #E4E4E4, with a larger radius around 20–24px.
- Keep cards mostly flat; use no shadow or only an extremely soft shadow such as 0 1px 2px rgba(0,0,0,.03).
- Make the primary button visually compact, with approximately 14–16px horizontal padding, 10–12px vertical padding, and a radius around 9–11px.
- Use approximately 24–32px between headline and form, 48–56px between form and preview heading, and 24–28px between the heading and cards.
- Keep card padding around 16–20px and use small internal gaps, while leaving enough breathing room for scanning.

### Form and interaction
- Include a search or task input with a subtle leading icon only if it improves recognition; pair it with a clear placeholder relevant to the user’s product.
- Make the primary button explicit and action-oriented. It should have a visible hover state, such as a slightly lighter or darker background, and a pressed state with subtle scale or colour change.
- Provide a clear focus ring around the input and button, using the product’s accent colour or a high-contrast outline.
- On mobile, stack the input and button with a small gap and make both full width.
- Make the result cards clickable if they lead to detail views; add a restrained hover treatment such as a border-colour change or slight lift, without making the interface feel ornamental.
- Use realistic loading, empty, and validation states if the search action is functional.
- Ensure keyboard navigation, screen-reader labels, sufficient touch targets, and visible focus states.

### Content structure
- Use a concise two-line promise or task-oriented headline.
- Include one primary input and one primary action.
- Show a brief contextual heading above the preview cards.
- Each card may contain a small circular avatar, organisation or source name, relative date, two-line result title, and one or two compact attribute pills. Use neutral placeholders or product-specific content supplied by the user.

## Never
- Never copy the reference’s logo, product name, brand identity, or exact wording.
- Never reuse the reference’s job titles, organisation names, locations, dates, or other product-specific copy.
- Never reproduce the reference as a pixel-for-pixel clone; adapt the structure to the user’s product and brand.
- Never use illustrations, photography, avatars, icons, or imagery from the reference.
- Never hide the primary action behind ambiguous icon-only controls.
- Never remove responsive behaviour, accessible labels, keyboard focus, or validation feedback.
