## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060351-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/supabase-com/b03f69f9-4b47-487d-8f2b-17d7cd19e877-1789060301-full.webp
- Component on Kage: https://kage.design/component/supabase-navigation

## Before you start
Ask the user what their product is, who it serves, and what visual brand system it uses. Then apply the principles below to create an original version for that product—do not reproduce the reference site's identity or wording.

## Build this component
Create a responsive website header made of two stacked horizontal regions:

1. **Announcement strip**
   - Place a slim, full-width banner above the main navigation.
   - Use a warm off-white background around `#f7f5f0` with a very subtle decorative technical pattern made from low-contrast brackets, dots, or monospace-like marks near the outer edges. Keep the pattern quiet and partially cropped so it frames rather than distracts from the message.
   - Center a short announcement in a compact sans-serif style. Use near-black text around `#17201c`, with the key event or message at medium-to-semibold weight.
   - Follow it with a small separator dot or divider in muted gray-green, then an underlined secondary link with a small external-arrow treatment.
   - Keep the strip approximately `54px` tall on desktop and reduce the text and padding gracefully on mobile. Ensure the message can wrap or collapse without causing horizontal overflow.

2. **Primary navigation bar**
   - Use a white or very slightly tinted background, approximately `#ffffff` or `#fdfdfc`.
   - Constrain content to a centered max width of roughly `1180–1240px`, with generous side padding. Align the brand, navigation links, utility controls, and primary CTA to one shared horizontal baseline.
   - On the left, reserve space for the user's product mark and wordmark. The mark should be simple and geometric, but use the user's own logo or a neutral placeholder—not the reference brand.
   - Place the main navigation immediately after the brand. Use a horizontal list of 5–7 items, with dropdown indicators only on categories that contain menus. Use 14–15px text, medium weight, and `#171b19` or a comparable brand-appropriate dark color.
   - Push utility actions to the right with flexible spacing. These may include a community/source icon with a small count, a secondary outlined sign-in button, and one prominent project-creation CTA.
   - Style the secondary button with a white background, `1px solid #d8ddd9`, approximately `8px` radius, and dark text. Style the primary CTA with a mint or brand accent around `#63d9aa`, dark text, a subtle border such as `#39bd8a`, and the same radius. Use compact horizontal padding around `14–16px` and a height near `32px`.
   - Separate the navigation bar from the page below with a very light `1px` border around `#e5e8e6` rather than a heavy shadow.

## Layout and spacing rules
- Use flexbox for the main row and keep all items vertically centered.
- Give the header a consistent content width and avoid independently centered groups that drift out of alignment.
- Use approximately `24–32px` between the brand and navigation, `24–40px` between navigation and utilities, and `8–12px` between adjacent utility controls.
- Preserve clear focus states and adequate hit areas, especially for dropdown links and compact buttons.
- On narrower screens, hide or replace the full navigation with a menu button, keep the primary CTA visible if space allows, and let the announcement strip use a controlled two-line layout.

## Typography
- Prefer a clean modern sans-serif stack such as `Inter`, `ui-sans-serif`, `system-ui`, sans-serif, unless the user's brand specifies otherwise.
- Keep navigation text at `14–15px` with approximately `1.3` line-height.
- Use subtle weight contrast: regular or medium for links, semibold for the announcement emphasis and CTA.
- Avoid oversized type; this is a utility header, not a hero section.

## Interaction
- Dropdown links should reveal a clear menu on click or keyboard activation, and may open on hover only as progressive enhancement.
- Add hover and focus-visible states using a darker text color, a soft tinted background, or a slight border change; do not rely on color alone.
- The announcement link should visibly underline or gain a clear focus ring.
- Buttons should have pressed and disabled states where appropriate.
- Make the header accessible: semantic `header` and `nav`, labeled menu button, keyboard navigation, visible focus rings, and sufficient contrast.

## Never
- Never use the reference site's logo, lightning mark, wordmark, product name, event name, navigation copy, or exact button copy.
- Never copy the reference decorative pattern, icon treatment, spacing measurements, or visual identity literally; reinterpret the structure for the user's product and brand.
- Never include reference imagery, illustrations, screenshots, or logos.
- Never make the announcement or navigation so decorative that it reduces scanability or usability.
