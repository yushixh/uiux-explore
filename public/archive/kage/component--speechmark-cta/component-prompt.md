## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106594-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106544280-full.webp
- Component on Kage: https://kage.design/component/speechmark-cta

# Build a download-and-release-signup CTA section

## Before you start
Ask the user what their product is, who it is for, what action they want visitors to take, and what their brand personality and visual identity are. Then apply the principles below to create an original version for that product—not a copy of any reference.

## Goal
Create a calm, high-trust CTA near the end of a product landing page. It should make the primary download or signup action immediately understandable, remove common objections with concise metadata, and offer an optional way to hear about future releases. Include a low-pressure feedback route beneath the form.

## Design language

### Layout and alignment
- Use a full-width dark section with a centered content column, approximately 460–560px wide on desktop.
- Center-align the primary CTA content and keep the information hierarchy narrow and easy to scan.
- Place the main reassurance sentence at the top, followed by one prominent pill-shaped button.
- Put compact technical or availability metadata below the button, using separators such as centered dots.
- Add a subtle horizontal divider around 72–80% of the content width before the release-notification area.
- Structure the signup as a short explanatory label above a horizontal email field and submit button on desktop; stack these controls vertically on narrow screens.
- Add a brief privacy/reassurance note below the form, then a centered feedback sentence with one clearly underlined text link.
- Give the section generous vertical padding, approximately 64–96px on desktop and 48–64px on mobile.
- Make the whole component responsive: preserve the centered hierarchy, allow long copy to wrap naturally, and keep controls at least 44px tall for touch use.

### Typography hierarchy
- Use a refined serif or humanist display style for the opening reassurance if it suits the user's brand; otherwise use the product's strongest heading face. Keep it medium-sized and relaxed rather than oversized.
- Use a clean sans-serif for buttons, metadata, labels, helper text, and links.
- Primary reassurance: roughly 22–28px desktop, 1.25–1.4 line-height, regular or medium weight.
- Supporting labels and feedback text: roughly 14–15px, with comfortable line height.
- Metadata and privacy note: roughly 12–13px, slightly increased letter spacing where useful.
- Use sentence case and concise copy. Avoid turning the section into a dense footer or a multi-step sales pitch.

### Colour
- Use a deep navy or brand-dark background, approximately #193665 to #203F78.
- Use a soft cool-white for the primary reassurance and button label, approximately #F4F7FA.
- Use muted blue-grey for metadata and helper text, approximately #A9BDD9.
- Use a slightly lighter translucent navy for the input background, approximately #294879, with a low-opacity light border such as rgba(220,235,250,0.22).
- Use a pale near-white button surface, approximately #F5F7F6, with dark navy text.
- Keep links visibly lighter than surrounding copy and underline them so they remain discoverable.
- If adding a decorative quotation or abstract mark, keep it extremely low contrast—around 5–8% white opacity—and place it at the edge so it never competes with the controls.

### Borders, radius, and controls
- Use a 1px translucent light border for the divider, input, and secondary outlined button.
- Give the primary button a generous pill radius, around 999px, with horizontal padding of 28–32px and a minimum height of 52–56px.
- Give the email input and secondary submit button a moderate radius of 9–12px rather than making every control pill-shaped.
- The submit control may be an outlined button with transparent dark background and light text, visually subordinate to the primary download action.
- Provide clear hover, focus-visible, and pressed states: brighten the primary button slightly, strengthen borders, and never remove the keyboard focus ring.
- Validate the email field inline and show a concise success state after submission without shifting the layout dramatically.

### Content hierarchy
- The main action should be a specific verb such as “Download,” “Start,” or “Get the app,” adapted to the user's product.
- Metadata should answer practical questions in one line: version, file size, supported platform, availability, or equivalent product-specific details.
- Frame the signup as optional and useful, such as release notes or product updates—not as a generic marketing subscription.
- Keep the privacy note brief and explicit about frequency, sharing, or unsubscribe expectations where relevant.
- Make the feedback link concrete, for example inviting bug reports, requests, or product feedback.

### Accessibility and implementation
- Use semantic `section`, heading, form, label, input, and button elements.
- Give the form a visible label; do not rely on placeholder text alone.
- Ensure colour contrast meets WCAG AA, especially for muted text on the dark background.
- Keep the reading order logical: reassurance, primary action, metadata, divider, signup, privacy note, feedback.
- Support reduced motion and do not rely on animation to communicate success or errors.

## Never
- Never reuse the reference product's logos, product names, trademarked wording, exact copy, links, or platform-specific claims.
- Never copy the reference's exact layout measurements, decorative quotation mark, typography, or colour values without adapting them to the user's brand.
- Never include illustrations, photography, or imagery from the reference.
- Never invent technical metadata, pricing, compatibility, privacy promises, or release claims; use placeholders or ask the user for accurate values.
- Never make the optional email signup more visually dominant than the primary CTA.
- Never hide focus states, use inaccessible placeholder-only inputs, or make the component depend on hover.
