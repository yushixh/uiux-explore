## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106509-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106452566-full.webp
- Component on Kage: https://kage.design/component/ai-observability-by-openobserve-footer

## Before you start
Ask what the user's product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original footer for that product rather than copying the reference.

## Build this section
Create a responsive website footer with two distinct layers:

1. **Announcement strip**
   - Place a bordered, rounded announcement panel at the top of the footer, inset slightly from the viewport edges on desktop.
   - Use a single horizontal row on wide screens: a small event/status icon, an announcement label, the event title, a calendar/date item, a clock/time item, and a high-contrast registration button aligned to the far right.
   - Keep the content vertically centered and compact. Let the event title take the flexible space while metadata remains easy to scan.
   - On smaller screens, wrap the metadata naturally or stack the announcement content and place the action button on its own row; never allow text or controls to overflow.

2. **Company and social row**
   - Below the announcement, use a spacious horizontal layout with company/legal information on the left and social navigation on the right.
   - Include a copyright line and a full address or equivalent secondary business detail in a smaller text size.
   - Render social destinations as evenly spaced circular or softly rounded icon buttons. Give each button a subtle translucent surface or radial highlight so the icons remain visible against the dark background.
   - On mobile, stack the social links beneath the company information and align them to the start or use a deliberate centered layout.

## Design language

### Layout and alignment
- Use a full-width footer with a centered content container, approximately `1200–1280px` max width and `16–24px` horizontal padding.
- The announcement strip should have around `12–16px` internal padding and a `4–8px` gap between adjacent inline items.
- Use flexbox with `align-items: center`; allow the middle announcement copy to grow while the registration control stays fixed-size.
- Keep the lower row separated from the announcement with approximately `24–32px` of vertical space and give the footer bottom padding of roughly `24–36px`.
- Maintain generous empty space around the lower social row so the footer feels like a deliberate closing frame, not a dense utility panel.

### Typography hierarchy
- Use a clean modern sans-serif system or the user's brand typeface.
- Announcement label and event title: approximately `13–15px`, medium weight, with the title slightly more prominent than the label.
- Date and time metadata: approximately `13–14px`, regular weight.
- Registration button: approximately `14px`, medium or semibold weight.
- Company and address details: approximately `12–13px`, with the first line marginally stronger than the second.
- Use a line height around `1.4–1.5` and avoid all-caps except for a very short label if it fits the product's brand.

### Colour
- Use a deep charcoal or near-black base, approximately `#211B1C` to `#2A2020`.
- Add a restrained warm brown/amber atmospheric gradient toward one side, approximately `#6A301C` to `#9B4A22`, at low opacity; adapt the hue to the user's brand rather than treating it as mandatory.
- Announcement panel: translucent dark surface such as `rgba(255,255,255,0.04)` with a subtle border around `rgba(255,255,255,0.18)`.
- Primary text: warm white around `#F5F1EF`; secondary text: muted beige-gray around `#D0C5C0` or `#B9AEAA`.
- Registration button: off-white surface around `#F7F5F4`, dark text around `#292526`, and a slightly darker hover surface around `#E7E2DF`.
- Social buttons may use a translucent dark fill, approximately `rgba(0,0,0,0.16)`, with pale or brand-colored icons.

### Borders, radius, and depth
- Use a `1px` low-contrast border on the announcement panel and avoid heavy dividers in the lower footer.
- Give the announcement panel a modest `6–8px` radius; use `6–8px` for the registration button.
- Social controls can be circular or use a `50%` radius, approximately `40–48px` square on desktop and at least `40px` for touch access.
- Keep shadows minimal; rely on the gradient, translucency, and contrast for depth.

### Interaction and accessibility
- Make the full announcement action clear and keyboard accessible; include an arrow or equivalent directional affordance if appropriate.
- Give every social button an accessible label, visible focus ring, and hover state with increased contrast or a slight lift.
- Preserve a minimum touch target of `40–44px` for buttons and icons.
- Ensure sufficient contrast for all small text and icons, and support reduced-motion preferences by disabling transforms or animated glow effects.
- Use real text and accessible SVG/icon components rather than embedding text inside images.

## Never
- Never copy any logo, product name, event name, address, date, time, social icon arrangement, or exact marketing copy from the reference.
- Never reuse the reference brand's specific gradient, iconography, or visual identity as a literal asset; reinterpret the colour atmosphere for the user's product.
- Never include placeholder imagery or decorative illustrations when simple type, icons, and surfaces communicate the structure.
- Never make the footer dependent on a fixed desktop width, hidden overflow, or inaccessible icon-only controls.
