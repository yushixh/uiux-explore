## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073747-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073722-full.webp
- Component on Kage: https://kage.design/component/upstash-stats

## Before you start
Ask the user what their product is, who it is for, and what visual brand direction they want. Then apply the principles below to create an original stats section for that product rather than reproducing the reference.

## Build a floating metrics spotlight section
Create a wide, editorial statistics section that can sit inside a product homepage hero or immediately below it. The component should communicate scale, reliability, or usage through a small set of highly legible metrics while feeling atmospheric and premium.

### Layout and alignment
- Use a full-width section with a very pale cool background and generous vertical padding, approximately 96–160px on desktop and 56–88px on mobile.
- Keep the content in a centered container, but allow the visual treatment to extend to the viewport edges.
- Place one oversized, bold headline or short phrase near the top of the section. It may sit partially behind the main visual/card and should span most of the width, creating depth rather than behaving like ordinary body copy.
- Add a large abstract background form behind the stats card: use CSS gradients, a radial dot pattern, blurred geometry, or another brand-appropriate texture. It should be subtle, cropped by the section, and provide scale without becoming an illustration.
- Position a rounded floating stats card across the visual focal point. On desktop it should be a horizontal four-column row; on smaller screens it should become a two-column grid or a vertically stacked list.
- Align each metric centrally within an equal-width column. Keep the card narrower than the full viewport so it reads as a deliberate overlay.
- Put a short explanatory footnote directly below the card, centered and visually secondary.

### Typography hierarchy
- Make the background phrase very large and heavy, roughly 96–190px on desktop depending on viewport width, with tight line-height and modest negative tracking. Use a responsive clamp so it never causes horizontal overflow.
- Make metric values prominent but compact: approximately 28–36px, bold or semibold, with tight line-height.
- Make metric labels 14–16px, regular weight, with relaxed line-height and enough contrast to remain readable.
- Style the footnote around 14px, optionally italic, with a small leading marker such as an asterisk only when it adds useful context.
- Use the product’s own typeface if available; otherwise use a modern sans-serif with clear numerals and strong weight contrast.

### Colour and atmosphere
- Start with an almost-white cool background, around `#F4F8F7` or `#F6FAF9`.
- Use a saturated brand accent for the large phrase and metric values; a suitable default is emerald/teal around `#079A72`, with a restrained shift toward lime or mint around `#8BD66A`.
- Keep the background form low contrast using white, pale mint, and cool gray-green tones such as `#DCEDE8`, `#EAF5F1`, and `#FFFFFF`.
- Use dark muted text around `#52615E` for labels and footnotes, and a deeper green such as `#087957` for values.
- If the user’s brand has different colours, preserve the same relationship: vivid accent for emphasis, almost-white atmospheric field, and subdued supporting text.

### Card, borders, and depth
- Use a white or near-white card with slight translucency, for example `rgba(255,255,255,0.88)`, optionally with a subtle backdrop blur.
- Give the card a generous radius, approximately 24–32px, with a soft low-contrast border such as `rgba(20,80,65,0.08)`.
- Add a diffuse shadow like `0 12px 30px rgba(30,70,60,0.10)`; the card should float, not look like a hard dashboard panel.
- Use thin vertical separators between desktop metrics only if needed. Keep them extremely subtle and remove or reposition them on mobile.
- Ensure the card remains opaque enough for values and labels to pass accessibility contrast checks.

### Interaction and responsiveness
- The section can remain static, but add restrained motion if appropriate: a very slow background drift or a gentle fade/slide-in for the card on entering the viewport.
- Respect `prefers-reduced-motion` and disable decorative movement when requested.
- Do not make the statistics depend on hover to be understood. If metrics are interactive, use a clear hover/focus treatment such as a slight accent tint or elevation change.
- Preserve the visual overlap at tablet and desktop widths, but avoid clipping important text. On mobile, reduce the headline size, move the abstract form behind the card, and make every metric easy to scan.
- Use semantic markup, responsive CSS, and accessible contrast. Keep the component lightweight and avoid relying on external image assets.

### Content guidance
- Use realistic placeholder metrics relevant to the user’s product, such as request volume, active projects, processing time, or availability.
- Keep values short and labels to one or two lines. Ensure units and qualifiers are unambiguous.
- Use a footnote only for necessary context such as a time range, sampling method, or rolling average.

## Never
- Never copy logos, product names, or brand-specific copy from the reference.
- Never reuse the reference’s exact metrics, headline, labels, or wording.
- Never reproduce the reference’s exact background object, dot globe, illustration, or imagery.
- Never treat the output as a pixel-perfect clone; adapt the hierarchy, atmosphere, and floating-card principle to the user’s product and brand.
- Never sacrifice readability or accessibility for the oversized typography or decorative background.
