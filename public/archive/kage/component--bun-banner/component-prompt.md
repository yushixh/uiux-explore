## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073823-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/bun-sh/5fab2b15-2f70-4d99-a79d-411d5e236c09-1789073774-full.webp
- Component on Kage: https://kage.design/component/bun-banner

# Before you start
Ask me what my product is, who it is for, and what its brand voice, colours, and typography are. Then apply the principles below to create an original version for my product—not a copy of the reference.

## Build this component
Create a responsive editorial feature banner for a developer-focused or technical product. The section should combine a visual media block on the left with an information-and-code block on the right. It should feel like a confident product proof point: concise, structured, and practical rather than promotional.

## Design language

### Layout and alignment
- Use a bordered, two-column feature card inside a centered page container.
- Make the media column narrower than or approximately equal to the content column; on desktop, use roughly 35–40% for media and 60–65% for content.
- Align all content to a shared left edge within the right panel.
- Let the media fill its column edge-to-edge, with a fixed or carefully controlled aspect ratio and `object-fit: cover`.
- Place a translucent caption bar at the bottom of the media, containing a person’s name and role only when the product has a relevant testimonial or speaker.
- Add a circular play control centered over the media. It should be visually obvious but restrained, with a light surface and dark play icon.
- Stack the columns vertically on smaller screens. Keep the media above the copy, preserve the play button, and reduce internal padding without making the code preview cramped.
- Below the code preview, use a horizontal link row on desktop. Allow it to wrap or stack naturally on narrow screens.

### Typography hierarchy
- Use a compact uppercase eyebrow with generous letter spacing and a small square accent marker.
- Set the main heading in a heavy, condensed or tightly tracked display style. It should be the dominant element and may wrap across two or three lines.
- Use a neutral sans-serif for supporting copy, with a comfortable line height and a restrained measure of approximately 45–55 characters.
- Make inline code visually distinct with a subtly tinted background, small radius, and monospace type.
- Use medium-weight labels for buttons and navigation links; avoid excessive capitalization outside the eyebrow.

### Spacing
- Give the overall panel generous but efficient padding, approximately 32–42px on desktop.
- Keep 14–20px between eyebrow, heading, and body copy.
- Separate the body copy from the code preview by roughly 22–28px.
- Place the link row 22–28px below the code preview.
- Use consistent 8px-based spacing increments throughout.

### Colour
- Start with a near-white page background: approximately `#fafafa` or `#ffffff`.
- Use near-black for headings and primary controls: approximately `#111111`.
- Use a softer charcoal for body text: approximately `#5f5f5f`.
- Use a very light neutral for code surfaces and dividers: approximately `#f3f3f3` and `#dedede`.
- Choose one vivid brand accent for the eyebrow marker and any secondary action; a hot pink around `#f02a91` is one possible direction, but adapt it to the user’s brand.
- Maintain strong text contrast and do not rely on the accent colour alone to communicate meaning.

### Borders, shapes, and controls
- Use a thin, low-contrast 1px border around the complete feature panel and code preview.
- Keep the outer card radius minimal, around 0–4px, for a technical editorial feel.
- Use a small radius, around 2–4px, on code and action elements.
- Give the primary link a dark filled background with white text and a simple right-arrow icon.
- Give secondary links a white or transparent background with a dark border; use a slightly chamfered or angled corner only if it fits the product’s visual system.
- Use subtle hover transitions: darken or invert button surfaces, slightly shift the arrow, and underline or change colour on text links.
- Make the play control keyboard accessible and provide an accessible label such as “Play testimonial video.”
- Ensure focus states are clearly visible with a contrasting outline.

### Code preview
- Build a realistic but short code sample relevant to the user’s product, not generic filler.
- Add a slim file-path/header strip above the code with muted text and a bottom divider.
- Use a monospace font around 13–15px, comfortable line height, and syntax colouring sparingly: one or two accent hues for keywords, strings, and identifiers.
- On mobile, allow horizontal scrolling rather than wrapping code into unreadable lines.

### Interaction and accessibility
- Treat the video image as a button or link with a clear accessible name.
- If the play control opens a modal, include focus management, an obvious close control, and a reduced-motion-friendly transition.
- Preserve semantic heading order and use real buttons and links rather than clickable generic containers.
- Support `prefers-reduced-motion`; do not autoplay video or animate essential content.
- Ensure the banner remains useful if the video thumbnail or code preview fails to load by providing meaningful alt text and fallback styling.

## Never
- Never copy the reference’s logos, product names, framework names, testimonial identity, exact wording, code, or button labels.
- Never reuse the reference image, person, video thumbnail, illustration, or other imagery.
- Never make the result look like a pixel-perfect clone; reinterpret the structure for the user’s product and brand.
- Never use dense decorative effects that compete with the headline, code, or primary action.
- Never use inaccessible low-contrast text, tiny controls, or colour-only interaction states.
