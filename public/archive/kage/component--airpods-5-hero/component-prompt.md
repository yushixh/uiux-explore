## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106642-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/airpods-5/0db86e09-94cf-4830-8c9a-1751c9bb478c-1789106585230-full.webp
- Component on Kage: https://kage.design/component/airpods-5-hero

## Before you start
Ask what the user's product is, who it is for, and what their brand identity and visual direction are. Then apply the principles below to create an original hero for that product—not a copy of the reference.

## Build this section
Create a premium, cinematic product hero for a modern consumer product landing page. The section should feel immersive and editorial while still making the product name, primary benefit, availability, and purchase action immediately discoverable.

### Layout and alignment
- Use a full-bleed hero section beneath the site navigation, with a minimum height of `calc(100svh - navigation height)` and a sensible minimum height around 680px on desktop.
- Use a high-quality lifestyle background image or video selected for the user's product. Let it fill the section with `object-fit: cover`; use a dark-to-transparent gradient overlay where needed to preserve text contrast.
- Keep the main content inside a centered responsive container with roughly 64–80px horizontal padding on large screens and 24px on mobile.
- Anchor the editorial copy to the lower-left portion of the hero, leaving enough negative space around it and avoiding the image's focal subject.
- Place a compact purchase control near the lower-right on desktop. On smaller screens, stack it beneath the copy or make it full-width while retaining comfortable margins.
- Keep the top navigation visually light and unobtrusive over the image. If the background makes it hard to read, add a subtle translucent dark or light scrim rather than a heavy opaque bar.

### Typography hierarchy
- Use a clean contemporary sans-serif with slightly tight tracking and strong rendering at large sizes.
- Product label: medium or semibold, approximately 28–34px on desktop and 22–26px on mobile.
- Main headline: bold, approximately 56–72px desktop with a line-height around 0.98–1.05; constrain the measure to about 700px so it forms intentional 2–3 line breaks. Scale to 38–48px on mobile.
- Supporting availability or qualification text: semibold, approximately 16–18px, with enough contrast to remain legible over the image.
- Use sentence case and concise, benefit-led copy. Avoid dense paragraphs in the hero.

### Colour and contrast
- Use a photographic palette that reflects the user's brand and product context rather than reproducing the reference image.
- For a dark image treatment, use warm white text around `#F5F5F7` and a subtle black overlay around `rgba(0,0,0,0.18–0.42)` that increases toward the copy area.
- Use a neutral purchase pill around `#F2F2F0` or an equivalent brand-appropriate light surface.
- Use a saturated accent colour for the primary action, approximately `#0A84FF`, but tune it to the user's brand. Ensure at least WCAG AA contrast for button text.
- Keep secondary navigation low-contrast but readable, using approximately `rgba(255,255,255,0.72)` over dark imagery.

### Borders, radius, and surfaces
- Avoid visible borders around the hero itself.
- Build the purchase control as a single rounded capsule with a radius of `999px`, approximately 56–64px tall, and generous horizontal padding.
- Put the primary action inside its own filled pill, with a radius of `999px`, subtle horizontal padding, and a clear separation from the price or supporting label.
- Use no more than a very soft shadow on floating controls, such as `0 4px 18px rgba(0,0,0,0.12)`.

### Interaction and responsive behaviour
- Add a gentle hover transition to the primary action: slightly deepen the accent colour and translate or scale by no more than 1–2%; keep it fast and understated.
- Make the full purchase capsule or its actionable region keyboard accessible, with a clearly visible focus ring.
- Ensure the hero image does not crop away the product or key subject at common breakpoints. Use responsive focal-point positioning rather than a single fixed crop.
- On mobile, reduce headline size and spacing, move the purchase control below the copy, and ensure all text remains readable against the image.
- If using video, respect `prefers-reduced-motion`, provide a poster image, and avoid autoplay audio.

## Never
- Never reuse logos, product names, exact marketing copy, pricing, dates, navigation labels, or calls to action from the reference.
- Never copy the reference image, person, composition, colour grading, or product photography.
- Never include illustrations or imagery from the reference; choose original assets or neutral placeholders appropriate to the user's product.
- Never make the hero inaccessible, text unreadable, or the purchase action visually ambiguous.
- Never allow decorative imagery to overpower the product message or primary conversion action.
