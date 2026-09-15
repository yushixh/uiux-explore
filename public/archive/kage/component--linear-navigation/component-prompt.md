## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060206-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/linear-app/3b71fb78-773e-45c4-803c-426bf7f1ae53-1789060182-full.webp
- Component on Kage: https://kage.design/component/linear-navigation

## Before you start
Ask me what my product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create a navigation header for my product—not a copy of the reference.

## Build this section
Create a compact, full-width desktop navigation header for a modern software product. The header should feel quiet, premium, and highly legible rather than visually busy.

### Design language

- **Overall layout:** Use a single horizontal row inside a full-width header, with a centered content container and generous left and right gutters. Vertically center all items. Keep the header relatively short, around 72–76px tall, with a thin divider along the bottom.
- **Alignment logic:** Place the brand lockup on the far left. Place the primary navigation links in a horizontal group toward the right half of the container. Follow them with a subtle separator, then a secondary authentication link and a prominent rounded action button. Keep the right-side groups aligned on one baseline and use consistent gaps rather than individually positioned elements.
- **Brand area:** Use a compact, text-based brand lockup with a small abstract mark or product-appropriate symbol and a short wordmark. The mark should be simple and monochrome, with no unnecessary decoration. Treat the brand as the strongest visual anchor in the row.
- **Typography hierarchy:** Use a clean modern sans-serif. The wordmark should be medium weight and approximately 16–18px. Navigation links should be approximately 13–14px, regular weight, with relaxed tracking and restrained contrast. Authentication text can use the same size and weight as navigation. The primary action should be medium weight and slightly more prominent through contrast, not oversized type.
- **Colour:** Use a near-black background around `#0B0B0C` or adapt it to the product’s dark brand surface. Use a barely visible bottom border around `#242426`. Set standard navigation text to a muted gray around `#858589`, with brighter text around `#B8B8BC` on hover. Use a high-contrast action surface such as `#F2F2F2` with dark text around `#171719`; adapt these values to the product’s accessible brand palette.
- **Spacing:** Use approximately 24–32px between the brand and the main right-side group at smaller desktop widths, 28–36px between navigation links, and 24–32px around the separator/authentication area. Give the action button around 12–16px horizontal padding and 8–10px vertical padding. Avoid excessive padding inside text links.
- **Borders and radius:** Keep borders extremely subtle and limited to the header divider and optional group separator. Use a fully rounded action button with a radius around `999px`. Do not add cards, shadows, gradients, or decorative containers.
- **Interaction:** Links should transition smoothly from muted to brighter text on hover and receive a clearly visible keyboard focus state. The action button may slightly brighten or reduce opacity on hover, with a fast transition around 150–200ms. Preserve a strong contrast ratio in all states. On smaller screens, collapse or simplify the primary links into a menu while keeping the brand and main action accessible.
- **Responsive behaviour:** Maintain the same visual hierarchy on tablet and mobile. Reduce horizontal gaps before reducing text size. If links no longer fit, replace them with a compact menu trigger rather than allowing wrapping or cramped alignment.
- **Implementation quality:** Use semantic `<header>`, `<nav>`, links, and buttons as appropriate. Make the navigation keyboard accessible, expose the mobile menu state, and ensure the layout works with longer localized labels.

## Never

- Never use the reference product’s logo, mark, wordmark, product name, navigation labels, or exact copy.
- Never copy the reference site’s visual identity exactly; adapt the structure and principles to my product and brand.
- Never include illustrations, photographs, decorative imagery, or unrelated graphics.
- Never use heavy shadows, loud gradients, oversized type, cluttered dropdowns, or multiple competing primary buttons.
- Never rely on colour alone for hover, focus, active, or open states.
