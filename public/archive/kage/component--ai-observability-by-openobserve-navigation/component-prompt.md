## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106505-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ai-observability-by-openobserve/e945d001-9c66-4981-a493-d9cb08ea77ee-1789106452566-full.webp
- Component on Kage: https://kage.design/component/ai-observability-by-openobserve-navigation

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original announcement bar and primary navigation for that product—not a copy of the reference.

## Build this component
Create a responsive website header with two stacked rows:

1. **Announcement bar**
   - Use a full-width, dark indigo or near-black-purple background, approximately `#211044` to `#2B105D`.
   - Keep the bar compact, around 40–44px tall on desktop.
   - Center the content in a single horizontal line: a small announcement/status icon, a short bold label, supporting announcement text, date/time or metadata when relevant, and a compact light-background action button.
   - Place a dismiss control at the far right with generous hit area and a simple close icon.
   - Use white and soft-lavender text; make the primary announcement slightly brighter or bolder than secondary metadata.
   - On smaller screens, allow the content to wrap or simplify gracefully rather than forcing horizontal overflow. Keep the dismiss button accessible.

2. **Primary navigation row**
   - Use a white or very lightly tinted surface, approximately `#FFFFFF` or `#FCFCFE`.
   - Set the desktop row height around 68–76px and align all contents to one centered max-width container, approximately 1200–1280px.
   - Arrange the brand area on the left, a horizontal set of primary navigation links beside it, utility controls and secondary actions on the right.
   - Use a restrained sans-serif type system: navigation labels around 14–15px, medium weight, with near-black text around `#202124`; lower-priority utility text may use `#575A66`.
   - Give the brand area enough width to establish identity, but do not let it dominate the navigation. Use a neutral brand placeholder or text treatment appropriate to the user's product.
   - Visually group utility controls such as search, keyboard shortcut hints, community/status links, or account access in compact outlined controls. Keep their borders subtle, around `#E3E3EA`.
   - Include one lightly tinted secondary action and one visually stronger primary action. Use the user's brand accent; for a purple-oriented treatment, use approximately `#5B24C7` or `#6330C9`, with white text for the strongest action.
   - If a login/account control is present, use an outlined style with a small downward chevron to indicate a menu.

## Design language

### Layout and alignment
- Use a centered max-width container with consistent horizontal padding, approximately 24px on desktop and 16px on mobile.
- Preserve a clear left-to-right hierarchy: identity, information architecture, utility actions, then conversion/account actions.
- Align icons and labels optically, not merely by box dimensions.
- Keep the header border between the navigation row and page content extremely subtle, around `#E7E7EC`, with a 1px rule or soft shadow.
- On mobile, collapse the main links and utility controls into a menu drawer or compact menu button while keeping the primary action visible when space permits.

### Typography
- Prefer a modern neutral sans-serif such as Inter, Geist, or the product's existing UI font.
- Use medium or semibold weights for navigation and buttons; avoid excessive bolding.
- Keep labels concise and use sentence case rather than all caps.
- Use line-height around 1.2–1.4 for controls and announcement content.

### Spacing, borders, and radius
- Use an 8px spacing base: approximately 8px between icon and label, 16–24px between control groups, and 24–32px around the main container.
- Use 8–10px corner radii for buttons and utility controls; use slightly smaller radii for compact icon controls if needed.
- Keep borders 1px and low contrast. Avoid heavy cards or excessive separators in the header.
- Buttons should have at least 36–40px height and comfortable horizontal padding.

### Interaction
- Add clear hover, focus, and active states to every link and control.
- Use subtle background tint or text-colour changes for navigation hover states, not dramatic animation.
- Make the announcement dismiss control functional and preserve the header layout when it is removed.
- Menus should expose their expanded state, support keyboard navigation, and close predictably when focus leaves or the user presses Escape.
- Ensure colour contrast and visible keyboard focus rings meet accessibility expectations.

## Never
- Never reuse logos, product names, navigation labels, announcement copy, dates, or button copy from the reference.
- Never reproduce the reference site's exact layout, proportions, iconography, colours, or visual styling as a pixel-for-pixel clone.
- Never include the reference's illustrations, imagery, screenshots, or decorative assets.
- Never assume the user's product has the same information architecture or calls to action; derive labels and grouping from the user's product.
- Never sacrifice mobile usability, keyboard access, or readable contrast for visual similarity.
