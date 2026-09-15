## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073157-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/fplxi-com/54b8421e-1a9f-4884-bebf-8d70ddcd8ef8-1789073135-full.webp
- Component on Kage: https://kage.design/component/fplxi-footer

## Before you start
Ask me what my product is, who it is for, and what brand personality, colour palette, and tone it uses. Then apply the principles below to create an original footer for my product—not a copy of the reference.

## Goal
Build a quiet, information-rich website footer for a software product. The footer should help users orient themselves, discover key areas, and find account and legal information without competing with the page content above it.

## Design language

### Layout and alignment
- Use a full-width footer with a centred content container, approximately 1040–1120px wide, with generous horizontal padding of 24–40px.
- Divide the primary footer into a broad introductory column and several compact navigation columns. On desktop, use a grid rather than manually positioned elements: approximately 1.5–2fr for the intro and 1fr for each link group.
- Align every column to the same top edge. Keep headings and links left-aligned.
- In the introductory area, place the product wordmark or text label at the top, a short one- or two-line value statement beneath it, then a small rounded CTA with comfortable separation.
- Group links under short, high-contrast headings. Keep each group focused and avoid long paragraphs.
- Add a thin horizontal divider beneath the primary navigation area with substantial vertical breathing room.
- Below the divider, use a two-sided legal row: copyright and a compact product/legal descriptor on the left, with a short disclaimer or affiliation statement on the right.
- On smaller screens, collapse to a single column or a two-column arrangement: keep the intro first, then stack or wrap link groups, and let the legal row become a vertical stack. Preserve clear separation between groups.

### Typography hierarchy
- Use the product’s existing sans-serif typeface where available; otherwise choose a clean, neutral sans-serif.
- Product label: semibold, around 16px, with subtle emphasis on any accent characters only if that fits the brand.
- Navigation headings: semibold, approximately 14–15px, near-black.
- Navigation links: regular weight, approximately 14–15px, with relaxed line-height around 1.7–1.9 for scanability.
- Introductory description and legal text: 13–14px, muted, with line-height around 1.45–1.6.
- Keep the hierarchy understated: use weight and colour rather than large type or decorative styling.

### Spacing
- Give the main footer generous top and bottom padding, approximately 56–76px on desktop.
- Use 16–24px between the brand label, description, and CTA.
- Use 12–16px between navigation links and 20–28px between a group heading and its first link.
- Leave approximately 44–64px between the primary grid and the divider.
- Give the legal row 22–28px of top padding and enough bottom padding to avoid crowding the page edge.
- On mobile, reduce the outer padding modestly but keep vertical rhythm generous.

### Colour
- Use a very light neutral footer background, around #FAFAF9 or #F8F8F7, against a white or slightly contrasting page background.
- Use near-black for headings and primary labels, around #171717.
- Use a soft grey for links and supporting copy, around #6B6B6B; legal text can be slightly lighter, around #737373.
- Use a subtle divider around #E7E7E5.
- Derive the CTA background and any brand accent from the user’s product palette. If no palette exists, use a restrained pale neutral such as #F2F2F0 with dark text rather than a loud button colour.

### Borders, radius, and controls
- Keep the footer largely borderless except for the single horizontal divider.
- Use a small-to-medium CTA radius, approximately 999px for a pill or 8–10px for a compact rounded button, depending on the product’s existing control language.
- Keep the CTA compact, around 12–14px vertical padding and 16–20px horizontal padding, with semibold text.
- Links should appear unadorned by default. On hover, change to the brand accent or near-black and optionally add a subtle underline; use a smooth 150–200ms transition.
- Make every link and button keyboard accessible with a visible focus ring using the product accent colour.

### Content behaviour
- Use descriptive, short navigation labels relevant to the user’s product: primary product areas, tools or resources, comparisons or alternatives, and account/help/legal destinations.
- Do not force every possible link into the footer. Prioritise the destinations users are most likely to need after reaching the end of a page.
- Ensure long labels wrap naturally without breaking the grid or causing horizontal overflow.
- Add appropriate `aria-label` text for the footer navigation regions and maintain logical keyboard tab order.

## Never
- Never copy the reference’s logo, product name, navigation labels, disclaimer wording, copyright text, or any other product-specific copy.
- Never reuse the reference brand identity, exact colour treatment, or distinctive typographic styling; adapt the system to my product.
- Never include illustrations, decorative imagery, sports imagery, or logos from the reference.
- Never use excessive columns, tiny unreadable legal text, low-contrast links, or a crowded footer.
- Never omit responsive behaviour, keyboard focus states, semantic navigation landmarks, or accessible link labels.
