## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073157-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073135-full.webp
- Component on Kage: https://kage.design/component/fplxi-table

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to the user's product and brand rather than reproducing the reference literally.

## Build a compact ranking table section
Create a responsive data-table section for a product dashboard or information-heavy page. The section should communicate a changing ranked list at a glance, with a short explanatory heading, a secondary description, an optional comparison action, and a small set of highly scannable rows.

### Structure and layout
- Place the component inside a wide content container with a subtle, light surface against the page background.
- Use a compact rounded outer panel with a thin border. Keep the panel horizontally spacious and avoid unnecessary side padding on desktop.
- Create a header row with the section title aligned left, a muted explanatory line below it, and a small text button aligned right. The action should include a simple directional icon and remain visually secondary.
- Below the header, render each record as a full-width horizontal row separated by very light 1px dividers.
- Use a flexible two-part row layout: a primary identity cluster on the left and contextual metadata plus the key numeric value on the right.
- In the left cluster, include a small trend indicator, a compact categorical badge, a prominent name, and a low-contrast type or category label.
- In the right cluster, show several small contextual pills followed by one right-aligned numeric metric. Keep the numeric column fixed-width so values line up vertically.
- Preserve the same row height throughout. On narrow screens, allow the contextual pills to wrap or clip gracefully, while keeping the name and metric readable; consider horizontal overflow only as a last resort.
- Use alignment and whitespace to make rows easy to scan rather than adding heavy table chrome.

### Typography hierarchy
- Use a modern neutral sans-serif with clear numerals and compact proportions.
- Make the section title small but semibold, approximately 14–15px.
- Make the supporting description approximately 12–13px with a softer tone.
- Use 13–14px for the main record name, with medium weight.
- Use 10–11px uppercase or small-cap styling for category labels and compact badges, with slight letter spacing.
- Use 12–13px for the right-side metric; align it to the far right and give it enough contrast to remain legible.
- Keep the hierarchy understated: the metric and name should be the strongest elements, while labels and helper text recede.

### Spacing and sizing
- Use an 8px-based spacing system.
- Give the panel approximately 16px horizontal padding in the header and 0–16px padding in the rows, depending on whether row separators extend edge to edge.
- Use approximately 8px between the trend icon, category badge, name, and type label.
- Keep row heights around 40–44px on desktop.
- Use 6–8px gaps between contextual pills and 12–20px between the pill group and numeric metric.
- Keep badges compact, with roughly 4px vertical and 8px horizontal internal padding.

### Colour and visual language
- Use a near-white or very pale neutral page background, approximately `#f7f7f5`.
- Use a white or slightly warm-white panel surface, approximately `#ffffff` or `#fdfdfb`.
- Use a soft neutral border and divider, approximately `#e6e7e5` and `#ececea`.
- Use dark charcoal text, approximately `#202321`, for names and values.
- Use muted gray text, approximately `#8b8f8c`, for descriptions and secondary metadata.
- Use a restrained green accent, approximately `#4f8d7b`, for upward-trend indicators and positive states.
- Give category and contextual pills low-saturation tinted backgrounds rather than strong fills. Suitable families include pale blue-green `#dff1f0`, pale rose `#f5e4e3`, pale yellow `#f5efcf`, pale green `#def1df`, and pale lavender `#e9e9f5`. Adjust these hues to the user's brand and ensure text contrast.
- Avoid gradients, shadows, glossy effects, and high-saturation colours.

### Borders, radius, and icons
- Use a 1px border around the panel and 1px horizontal dividers between rows.
- Use an outer radius around 12px; clip row and header backgrounds to the radius.
- Use small pill radii around 6px for badges, not fully rounded capsules unless the product's brand calls for them.
- Use a minimal line icon for the trend direction and comparison action. Icons should be small, lightweight, and never compete with the data.
- Avoid decorative icons that do not convey information.

### Interaction and states
- Make the comparison action visibly interactive with a subtle hover colour change and a clear focus ring.
- Give rows a restrained hover state, such as a barely darker neutral background, if rows are clickable.
- Make badges and contextual pills informational by default; do not imply they are controls unless the product needs filtering.
- Support keyboard focus for links, buttons, and interactive rows.
- On mobile, preserve the primary identity and metric first. Reduce secondary metadata, allow it to wrap, or move it below the identity without breaking the row rhythm.
- Use accessible text alternatives for trend and directional icons, and maintain sufficient contrast for all labels.

### Content behaviour
- Design the component to work with arbitrary entities, categories, statuses, tags, and numeric metrics.
- Support variable name lengths without causing the metric column to jump; truncate or wrap names deliberately.
- Keep the number of visible rows short enough to feel like a preview, and provide a clearly discoverable way to compare or view more when needed.

## Never
- Never copy logos, product names, branded marks, or proprietary identifiers from the reference.
- Never reuse the reference's exact names, labels, values, headings, button copy, or wording.
- Never copy illustrations, imagery, icons as distinctive artwork, or decorative assets from the reference.
- Never reproduce the exact colour combinations, dimensions, spacing measurements, or visual styling if they conflict with the user's brand.
- Never make the table visually dense, overly colourful, or dependent on hover alone to communicate important information.
