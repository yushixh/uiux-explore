## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073866-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/tailwindcss-com/8ea80760-a5bd-4198-8781-a7bb4737c216-1789073837-full.webp
- Component on Kage: https://kage.design/component/tailwindcss-navigation

# Before you start
Ask what the user's product is, who the primary audience is, and what brand personality, logo treatment, and navigation structure they already use. Then apply the principles below to create an original navigation header for that product rather than reproducing the reference.

## Build this component
Create a slim desktop-first documentation or developer-product navbar with a strong left-to-right hierarchy:

1. **Brand cluster on the left**
   - Reserve the most visual weight for the product brand: a wordmark or brand name paired with a simple brand mark supplied by the user.
   - Place an optional version selector directly after the brand, styled as a quiet pill or compact dropdown.
   - Keep the brand cluster vertically centered and prevent it from wrapping.

2. **Utility and navigation cluster on the right**
   - Include a compact search trigger with a magnifying-glass icon, a short search label, and an optional keyboard shortcut hint such as `Ctrl K` or `⌘ K`.
   - Follow it with short, text-based primary links. Use consistent horizontal gaps and avoid oversized buttons.
   - End with one optional highlighted utility link and a small account, repository, or external-resource icon when relevant to the user's product.
   - On narrow screens, collapse links into a menu and keep brand plus search/menu controls visible.

## Design language

### Layout and alignment
- Use a full-width header with a centered content rail, typically `max-width: 1280px` to `1440px`, and approximately `24px` horizontal padding on desktop, reducing to `16px` on mobile.
- Set the navbar height around `56px` to `64px`.
- Align every control to the same vertical centerline.
- Use flexbox with `justify-content: space-between`; keep the left brand cluster and right navigation cluster as separate groups.
- Let the main navigation remain visually secondary to the brand, with enough whitespace that individual links are easy to scan.
- Add a subtle bottom divider and, if the page uses a technical grid or patterned canvas, let that background continue below the header without competing with the controls.

### Typography hierarchy
- Use a clean sans-serif system stack or the user's product font.
- Brand name: `18px–20px`, medium or semibold weight, tight letter spacing.
- Navigation links: `14px–15px`, regular weight, high legibility.
- Version and search metadata: `12px–14px`, muted weight and colour.
- Use sentence case; do not make every navigation item uppercase.

### Colour
- Header background: near-white, approximately `#FFFFFF` or `#FCFCFD`.
- Primary text: charcoal, approximately `#111827` or `#18181B`.
- Secondary text: slate grey, approximately `#6B7280`.
- Borders: very light grey, approximately `#E5E7EB` or `#F1F5F9`.
- Search and version controls: `#F3F4F6` background with `#6B7280` text.
- Reserve the product's accent colour for the logo mark and one restrained highlighted link; an example cyan accent would be approximately `#06B6D4`, but derive the actual colour from the user's brand.
- Ensure all text and interactive states meet accessible contrast requirements.

### Borders and shape
- Use a `1px` bottom border on the header.
- Give search and version controls a compact pill shape with `9999px` radius, or use the product's established control shape consistently.
- Keep ordinary text links borderless.
- If highlighting one utility link, use a subtle tinted background, thin accent border, or accent underline rather than a large filled CTA.
- Use small icon dimensions around `16px–18px`; align icon strokes with the surrounding text.

### Interaction
- Make the search trigger open a command palette or search dialog; support the displayed keyboard shortcut.
- Make the version control open a menu with clear active-state indication.
- Add hover, focus-visible, and active states without shifting layout: slightly darken text, tint the background, or add a subtle underline.
- Use a visible `2px` focus ring in the product accent or an accessible contrasting colour.
- Provide descriptive accessible labels for icon-only controls and mark external links where appropriate.
- On mobile, replace the desktop links with a clearly labelled menu button and preserve access to search.

## Implementation guidance
- Build it as a reusable header component with configurable brand, version, links, search action, highlighted utility link, and icon actions.
- Use semantic `<header>`, `<nav>`, buttons for menus/dialog triggers, and links for navigation.
- Keep the layout stable while fonts load and ensure long product names or translated labels degrade gracefully.

## Never
- Never copy the reference site's logo, product name, exact navigation labels, version text, or copy.
- Never use the reference's logo mark, GitHub mark, icons, or any other proprietary brand assets.
- Never reproduce the exact spacing, dimensions, colour treatment, or pixel arrangement as a visual copy.
- Never include illustrations, photography, or imagery from the reference.
- Never assume the user's product has the same information architecture; ask first and adapt the component to its brand and audience.
