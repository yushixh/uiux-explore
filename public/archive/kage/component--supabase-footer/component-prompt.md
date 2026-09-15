## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060354-11.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-footer

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual system are. Then apply the principles below to create an original footer for that product—not a copy of the reference.

## Build a quiet, editorial footer
Create a spacious website footer that closes a page with a restrained, highly minimal composition. The reference uses a nearly empty white canvas, a small vertical group of navigation links positioned around the upper middle area, and a bottom utility bar. Preserve that sense of calm and proportion while adapting all content and styling to the user's product.

### Layout and alignment
- Use a full-width footer with a warm, near-white background such as `#FAFAFA` or a colour appropriate to the user's brand.
- Give the footer a generous minimum height, approximately `420–520px` on desktop, so the navigation feels intentionally placed rather than packed into a conventional multi-column footer.
- Constrain the content to a centered max-width of roughly `1080–1120px`, with responsive horizontal padding of `24px` on mobile and `32–48px` on larger screens.
- Place one compact navigation stack in the upper portion of the footer, slightly left of the visual centre rather than perfectly centred. On a wide layout, this can align to a grid column around 40–45% of the content width.
- Keep the navigation stack narrow. Use one link per row, with occasional longer labels allowed to wrap naturally to two lines.
- Anchor a bottom utility row near the bottom edge. Separate it from the main footer area with a 1px horizontal rule spanning the content width.
- Put a small legal or copyright label on the left of the utility row and a theme, display, or settings control on the right. Stack or wrap these elements cleanly on small screens.
- Avoid adding extra columns, promotional panels, newsletter forms, or social blocks unless they are genuinely required by the user's product.

### Typography hierarchy
- Use the user's brand typeface if available; otherwise use a clean neutral sans-serif system stack.
- Navigation links should be small and understated, around `14–15px`, with a line-height of `1.45–1.6` and regular weight around `400–450`.
- Use the same restrained size for the legal label, or reduce it slightly to `12–13px` if the brand calls for stronger hierarchy.
- Keep text case natural or sentence case. Do not use oversized headings in this treatment.
- Allow long navigation labels to wrap at a controlled width of approximately `100–140px`, while keeping row spacing consistent.

### Spacing and proportion
- Use substantial vertical padding, approximately `32–48px` at the top and `28–40px` at the bottom.
- Position the navigation group with a large open area around it; a desktop top offset of roughly `16–28px` is appropriate, followed by the remaining quiet space.
- Set link rows around `8–12px` apart, with `4–8px` of additional separation when a label wraps.
- Keep the bottom utility row around `64–88px` tall, vertically centering its contents.
- On mobile, reduce the minimum height and allow the navigation to align to the left content edge while retaining generous breathing room.

### Colour, borders, and radius
- Use a very light neutral background, approximately `#FAFAFA`, `#FBFBFB`, or a brand-equivalent surface.
- Use muted dark grey for primary text, approximately `#5F6368` to `#45484C`, rather than solid black.
- Use a subtle divider around `#E5E5E5` or `rgba(0,0,0,0.10)`.
- Keep the visual treatment flat: no gradients, shadows, decorative textures, or large colour blocks.
- Links do not need visible underlines at rest, but should gain an underline, slightly darker colour, or equivalent clear state on hover and keyboard focus.
- Use little or no radius for the footer itself. If the settings/theme control is enclosed in a hit area, use a small radius around `6–8px` and ensure the hit target is at least `40px` square.

### Interaction and accessibility
- Make every navigation item a real link with a clear hover, focus-visible, and active state.
- Implement the theme or settings affordance as an accessible button with an appropriate label, tooltip if the icon is ambiguous, and a visible keyboard focus ring.
- Use an icon from the project's icon system or a simple CSS/icon-library symbol; keep it small and visually quiet, approximately `16–18px`.
- Ensure contrast meets accessibility requirements despite the low-contrast aesthetic.
- At narrow widths, prevent horizontal overflow and let long labels wrap rather than truncate.
- Respect reduced-motion preferences; any hover transition should be brief and subtle, around `120–180ms`.

### Responsive behaviour
- Desktop: preserve the large quiet field, narrow navigation stack, and full-width bottom divider.
- Tablet: reduce the vertical whitespace modestly and keep the navigation aligned to a stable grid position.
- Mobile: use a single-column layout, align the navigation with the main horizontal padding, and let the utility row become a compact wrapped row if necessary.

## Never
- Never reuse logos, product names, navigation labels, copyright copy, icons, or other copy from the reference.
- Never reproduce the reference's exact layout measurements or content; derive an original version from the principles.
- Never include illustrations, photographs, decorative imagery, or branded artwork from the reference.
- Never make the footer visually dense with default multi-column SaaS patterns unless the user's product requires them.
- Never sacrifice readable contrast, focus visibility, semantic links, or mobile usability for visual minimalism.
