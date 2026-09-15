## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/cron-com/13c2d880-1e0a-4e61-bc53-4a819d6c2d36-1789060776-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cron-com/13c2d880-1e0a-4e61-bc53-4a819d6c2d36-1789060767-full.webp
- Component on Kage: https://kage.design/component/cron-hero

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, and visual assets are. Then apply the principles below to my product rather than reproducing the reference.

## Build a premium product-led hero section
Create a responsive landing-page hero for my software product. The composition should feel confident, editorial, and spacious, with the product interface acting as the visual proof point beneath the message.

### Layout and alignment
- Use a near-black full-width canvas with a centered max-width container of approximately 1000–1160px.
- Place a simple header at the top: a compact brand mark or wordmark on the left, and a horizontal navigation with one high-contrast CTA on the right. Keep the header visually quiet and leave generous vertical padding.
- Below the header, center a small announcement/status link inside a thin bordered rectangle. It should be compact, optionally include a subtle arrow, and sit clearly above the main headline.
- Use a centered hero stack: announcement, oversized headline, supporting sentence, then product visual. Keep the vertical rhythm deliberate, with substantial breathing room between each layer.
- Make the headline the dominant element. On desktop it should span most of the container width while remaining on one or two lines; on smaller screens it should scale down and wrap naturally without awkward clipping.
- Place a wide desktop application preview below the copy. It may be a realistic UI mockup, an existing product screenshot, or a CSS-built interface supplied by the user. Give it a dark elevated frame and a subtle shadow.
- Add a secondary device or complementary preview overlapping the lower-right portion of the main preview only when it reinforces the product story. It should feel physically layered, not randomly positioned.
- Let the preview extend toward the lower edge of the hero while preserving enough space for a quiet footer or legal-link row if the page requires one.
- On mobile, stack and simplify the composition: collapse navigation into a menu, reduce headline size, make the preview full-width, and move any secondary device below or partly over the main visual without causing horizontal overflow.

### Typography hierarchy
- Use a modern sans-serif with strong geometric or grotesk characteristics, or the user’s brand font.
- Set the main headline in an extra-bold weight with tight line-height, approximately 0.9–1.0, and slight negative tracking. Target roughly 72–112px on desktop depending on viewport width, scaling fluidly with `clamp()`.
- Use supporting copy at approximately 18–21px with a relaxed line-height around 1.4–1.55. Keep it short and constrain it to roughly 600–700px.
- Use navigation, announcement text, and utility links at 14–16px. The announcement can use a slightly brighter weight than the navigation.
- Avoid excessive text: the hero should communicate one promise and let the interface carry the detail.

### Colour and atmosphere
- Base background: near-black charcoal around `#121212` or `#141413`.
- Primary text: warm white around `#F5F4F1`.
- Secondary text: muted warm grey around `#B9B7B2`.
- Accent: use one vivid brand colour for the CTA and small highlights; a warm orange such as `#FF5A16` is a useful starting point, but adapt it to my brand.
- Keep most of the interface preview within layered charcoal tones such as `#1B1B1A`, `#242424`, and `#30302E`, with low-saturation status colours used sparingly.
- Add a very subtle warm atmospheric glow behind the announcement or product preview, using a blurred accent colour at low opacity. It should be felt rather than seen.

### Borders, surfaces, and radius
- Use 1px borders in low-contrast grey, approximately `rgba(255,255,255,0.16)`.
- The announcement link and primary CTA should have modest rounded corners, around 6–999px respectively depending on whether the CTA is pill-shaped.
- Give the main product preview a restrained radius of approximately 7–10px, a fine border, and a soft multi-layer shadow.
- If a device mockup is used, use a larger rounded shell around 28–40px with a dark bezel and a subtle highlight along its edge.
- Avoid cards everywhere: the open dark canvas should remain the dominant surface.

### Interaction and motion
- Make navigation and announcement links visibly interactive with colour or opacity changes on hover and a short 150–220ms transition.
- Give the CTA a small lift or brightness change on hover, while preserving strong contrast and a clear focus ring for keyboard users.
- If the product preview is animated, keep the motion slow and purposeful: a subtle screen transition, cursor movement, or parallax shift is enough. Respect `prefers-reduced-motion`.
- Ensure all controls have accessible labels, visible focus states, and sufficient contrast.

### Implementation guidance
- Build this as a self-contained, responsive component using the project’s existing framework and styling conventions.
- Use real product imagery or UI supplied by me when available; otherwise create a restrained placeholder interface that communicates the product category without distracting from the hero message.
- Keep the composition performant: optimise images, avoid unnecessary video, and do not rely on fragile absolute positioning for core content.

## Never
- Never copy the reference’s logo, product name, headline, announcement copy, navigation labels, or CTA wording.
- Never use the reference’s screenshots, calendar UI, device imagery, illustrations, or other product-specific imagery.
- Never reproduce the exact brand colour treatment or distinctive visual assets; adapt the system to my product and brand.
- Never invent a competing product identity or imply that the reference product is being rebuilt.
- Never sacrifice responsive layout, accessibility, readable contrast, or reduced-motion support for visual similarity.
