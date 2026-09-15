## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073739-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/turso-tech/a01fe972-4603-42df-a7fd-1b66e57f2913-1789073707-full.webp
- Component on Kage: https://kage.design/component/turso-code-block

## Before you start
Ask the user what their product does, who it is for, and what brand personality, colours, typography, and call to action they want. Then apply the principles below to create an original version for that product rather than reproducing the reference.

## Build this section
Create a responsive developer-focused hero component with two coordinated columns:

- **Left column:** a compact marketing message with a strong headline, supporting paragraph, and one primary CTA.
- **Right column:** a large framed code example with a simple tab bar and syntax-highlighted code. The code panel should communicate the product’s technical value through a believable, product-specific example.

## Design language

### Layout and alignment
- Use a dark full-width section with a centered max-width container around 1160–1240px.
- On desktop, use a two-column grid around 40% / 60%, with the text vertically aligned near the middle of the code panel.
- Keep the left content aligned to the container’s left edge and the code panel flush to the right column.
- Give the columns a generous gap, approximately 56–80px.
- On smaller screens, stack the text above the code panel, preserving clear separation and allowing the code area to scroll horizontally rather than wrapping awkwardly.
- Keep the code panel substantial and visually dominant, with a minimum height around 380px on desktop.

### Typography hierarchy
- Use a modern sans-serif for the marketing copy and a readable monospace font for code and tab labels.
- Set the headline in a bold, compact display size around 38–44px on desktop, with tight line-height around 1.05–1.12. Use a responsive size around 32–36px on mobile.
- Make the supporting text 16–18px with a relaxed line-height around 1.45–1.6 and a subdued colour.
- Use a semibold 15–16px CTA label.
- Keep code around 13–14px with a 1.9–2.05 line-height so the example feels readable rather than dense.

### Colour
- Use a near-black charcoal background, approximately `#0d1114` or `#0b0f12`.
- Use warm white for the headline, approximately `#f3f5f4`.
- Use muted cool gray for supporting copy and inactive tabs, approximately `#7d8588` and `#555e62`.
- Use a vivid mint or aqua accent for the CTA and active tab underline, approximately `#45e8c2` or `#39dfbb`.
- Use restrained syntax colours: lavender/purple for imports or keywords (`#c586c0`), teal/green for strings (`#54c7a0`), blue for properties (`#82b9df`), and soft gray for comments (`#5f686b`). Ensure contrast remains accessible.

### Borders, radius, and surfaces
- Frame the code block with a thin low-contrast border around `#273238`.
- Use a subtle 10–12px corner radius on the outer code panel; avoid excessive softness.
- Separate the tab bar from the code body with a 1px horizontal divider.
- Keep the code body only slightly distinct from the page background, around `#0c1215`, so the border and syntax colour provide most of the definition.
- Make the CTA a high-contrast pill with approximately 22–24px radius, horizontal padding around 24px, and vertical padding around 12–14px.

### Tabs and interaction
- Display three or more short file/context tabs in a single horizontal row.
- The first tab is active by default, using brighter text and a 1–2px mint underline that meets the bottom divider.
- Inactive tabs use muted gray and transition to brighter text on hover.
- Make each tab a real button with keyboard focus styling and an accessible selected state. Switching tabs should replace the code example without changing the panel dimensions.
- Keep a tiny, low-emphasis contextual label in the code header only if it helps establish the example’s category; omit it if it adds noise.
- The CTA should have a clear hover state, such as a slight brightness increase or lift, without distracting animation.

### Spacing and rhythm
- Use approximately 24–32px internal padding in the code panel body and 16px horizontal padding in the tab bar.
- Give the headline 20–24px space before the supporting copy, and 28–32px before the CTA.
- Preserve generous vertical padding for the overall section, around 72–104px desktop and 56–72px mobile.
- Let the code breathe with indentation and blank lines; do not fill every available line with syntax.

### Content behavior
- Write a short, outcome-oriented headline specific to the user’s product.
- Explain the implementation benefit in one or two sentences, using plain language.
- Use a single action-oriented CTA that matches the product’s conversion goal.
- Make the code example short enough to scan in under a minute and meaningful enough to demonstrate the product’s core workflow.

## Never
- Never copy the reference’s logos, product names, brand labels, or proprietary terminology.
- Never reuse the reference headline, supporting copy, CTA text, code, filenames, or exact tab labels.
- Never use illustrations, decorative imagery, or screenshots from the reference.
- Never make the code panel a static fake if tabs are shown; implement functional tab switching.
- Never sacrifice readability with tiny type, excessive syntax colours, cramped spacing, or low-contrast text.
- Never reproduce the exact layout proportions or visual styling if they conflict with the user’s product brand.
