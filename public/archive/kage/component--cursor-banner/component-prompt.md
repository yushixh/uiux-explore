## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cursor-com/5392efee-9a9c-40ed-b07e-39a30ea372bb-1789060316-0.webp
- Component on Kage: https://kage.design/component/cursor-banner

## Before you start
Ask what the user's product is, who it is for, and what brand or visual identity it uses. Then apply the principles below to that product rather than reproducing this reference literally.

## Build a minimal verification/error banner
Create a compact, full-width system-state banner or page fragment for a product interface. The component should communicate that a browser, session, request, or security check could not be verified. Keep the tone neutral and infrastructural: the message should be immediately understandable, but the visual treatment should remain quiet and unobtrusive.

### Design language

- **Layout and alignment:** Use a white or near-white canvas spanning the available width. Place a narrow message stack near the top-center of the viewport or banner rather than vertically centering the entire state. Center-align the heading and supporting diagnostic line. Keep the content width around 260–420px so the state feels intentionally constrained. Use generous empty space around the stack, especially below it.
- **Typography hierarchy:** Use a clean sans-serif system font or the product's existing UI typeface. The primary message should be a regular or medium-weight sentence in approximately 16–18px text with comfortable line height. Place a short diagnostic identifier beneath it with a clear gap, using approximately 12px text and a lighter visual weight. Avoid dramatic headings, all-caps labels, or oversized display type.
- **Spacing:** Use roughly 32–48px from the top edge to the primary message, 20–28px between the message and diagnostic detail, and at least 100px of surrounding whitespace where the component appears as a standalone state. On smaller screens, preserve the centered alignment and reduce only the outer whitespace.
- **Colour:** Use a soft white background near `#ffffff` or `#fafafa`. Render the main message in a dark neutral such as `#202124` or the product's equivalent. Render the diagnostic line in a muted gray around `#9a9a9a`–`#b0b0b0`. Do not introduce an accent colour unless the user's brand system requires one.
- **Borders and radius:** Prefer no visible border, card, shadow, or decorative container. If the product needs the state to sit inside a panel, use a subtle border near `#eeeeee`, a flat or very small radius of 2–6px, and no shadow.
- **Interaction:** This is primarily a passive status state. If a recovery action is necessary, add one understated text or button action below the diagnostic detail, but do not let it compete with the error message. Provide accessible semantics, sufficient contrast for the primary message, and a clear live-region or status treatment when the state appears dynamically.
- **Responsive behaviour:** Keep the message stack horizontally centered at all widths. Add small horizontal padding, such as 20–24px, to prevent wrapping against the viewport edge. Allow long error messages to wrap naturally while preserving the restrained hierarchy.

### Content guidance
Use generic, product-specific wording supplied by the user, such as a short verification failure message and a non-sensitive status or error code. Do not expose private implementation details or imply a security issue unless the product genuinely needs to communicate one.

### Never
- Never copy the reference's exact wording, diagnostic code, or text hierarchy verbatim.
- Never use logos, product names, copy, illustrations, or imagery from the reference.
- Never add a large illustration, decorative background, loud alert colour, heavy card treatment, or prominent marketing CTA unless the user's product requires it.
- Never make the failure state feel like a promotional hero section; it should remain a concise, centered system message.
