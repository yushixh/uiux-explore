## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073864-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/deno-com/32c2f827-c733-4746-82ec-fc83a363518f-1789073825-full.webp
- Component on Kage: https://kage.design/component/deno-navigation

# Build a two-tier announcement bar and primary navigation

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a version for my product rather than reproducing the reference literally.

## Goal
Create a responsive website header made of two stacked parts:
1. A full-width announcement bar for a timely message and one primary action.
2. A white primary navigation row with a brand mark area, navigation links, dropdown indicators, and a compact search control.

The component should feel polished, editorial, and product-led. It must work as a reusable header for a software or developer-focused product, with semantic HTML, keyboard accessibility, and responsive behavior.

## Design language

### Layout and alignment
- Use a full-bleed announcement bar above the navigation; its contents should sit inside the same centered max-width container as the main header.
- Keep the announcement content on one horizontal line at desktop widths: message centered or slightly left of center, an outlined action button immediately after it, and a close button aligned to the far right.
- Use a second full-width row for the main navigation. Align the brand area, links, and search control vertically on a single baseline/center line.
- On desktop, use a generous horizontal container with approximately 56–64px side padding and a max width around 1180–1280px. Let the navigation links occupy the middle and keep search at the right edge.
- On narrow screens, preserve the announcement hierarchy but allow the message to wrap or collapse into a shorter line. Replace the desktop links with a menu trigger and keep search available either as an icon or within the opened menu.
- The header may remain in normal document flow; if made sticky, add a subtle shadow only while stuck so it does not feel heavy.

### Typography hierarchy
- Use a clean sans-serif system or brand font with crisp rendering.
- Announcement text: approximately 15–16px, semibold, with compact line height.
- Announcement action: approximately 15–16px, semibold, slightly tighter tracking than body text.
- Navigation links: approximately 16–18px, medium weight; active or expandable items can use semibold weight.
- Search placeholder: approximately 14–15px with a muted tone.
- Keep capitalization natural rather than using all caps. Prioritize readable labels over decorative typography.

### Colour
- Announcement background: a vivid mint or acid green, approximately #65F2AE to #72F5B0, adjusted to meet text contrast requirements.
- Announcement foreground: near-black, approximately #101515.
- Main navigation background: white or a very slightly warm white, approximately #FFFFFF or #FCFCFB.
- Main text: near-black, approximately #111313.
- Secondary text and search placeholder: neutral gray, approximately #747878.
- Header borders and control outlines: soft gray, approximately #9A9D9C at low visual weight.
- Hover states should darken text or introduce a very subtle tinted background; avoid bright gradients and unnecessary colour changes.

### Borders, controls, and radius
- Give the announcement action a 1.5–2px dark outline, transparent or matching the announcement background, with a modest radius around 5–7px.
- Make the search control a bordered capsule or softly rounded rectangle, roughly 32–36px tall and 250–270px wide on desktop. Use a radius around 7–9px rather than a fully circular pill.
- Place a magnifying-glass icon at the left of the search field and a small keyboard-shortcut hint at the right inside a faint inset capsule.
- Use a simple close icon for the announcement, with a minimum 40px hit area despite its small visual size.
- Dropdown chevrons should be small, aligned to the text baseline, and animate with a subtle rotation when the menu opens.
- Avoid excessive shadows. A fine lower border or restrained shadow may separate the white navigation row from the content below.

### Interaction and accessibility
- Announcement close control dismisses the bar for the current session and has an accessible label.
- Announcement action and all navigation items need visible hover, focus-visible, and pressed states.
- Dropdown navigation should open on click or keyboard activation, support Escape to close, and keep focus behavior predictable.
- Search should be a real input or button that opens a search interface, not a decorative rectangle. Support the displayed shortcut only if it works.
- Ensure contrast, touch targets of at least 40–44px, semantic `nav` landmarks, accessible names, and a logical tab order.
- On mobile, make the menu drawer or popover easy to dismiss and prevent the underlying page from becoming confusingly interactive.

## Content behavior
Use neutral placeholder labels appropriate to the user's product. Keep the announcement short enough to scan in one glance, and make the action verb-led. Do not hard-code the reference site's wording.

## Responsive states
- Desktop: two visible rows, inline navigation links, full search field.
- Tablet: reduce horizontal gaps and search width; preserve the brand and essential links.
- Mobile: compact announcement, brand plus menu/search controls, and navigation links inside an accessible panel.
- If the announcement cannot fit, allow it to wrap gracefully instead of clipping or forcing horizontal scrolling.

## Never
- Never use the reference site's logos, product names, brand marks, or exact copy.
- Never copy the reference site's visual identity so literally that the result appears to be a clone.
- Never include its specific announcement wording, navigation labels, icons, or keyboard shortcut as fixed content.
- Never use illustrations or imagery from the reference; this component should remain typographic and UI-led.
- Never sacrifice keyboard access, contrast, responsive layout, or clear focus states for visual similarity.
