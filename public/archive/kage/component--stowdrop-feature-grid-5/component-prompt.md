## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789067825-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/stowdrop-app/2ca5946d-e8e0-4e0c-8652-e4352b3d8fe1-1789060554-full.webp
- Component on Kage: https://kage.design/component/stowdrop-feature-grid-5

## Before you start
Ask the user what their product is, who it is for, and what brand direction, typography, and colour palette they want. Then apply the principles below to create an original keyboard-shortcut or capability feature section for that product—not a copy of the reference.

## Build this section
Create a dark, editorial feature-grid section that explains a product's breadth through organized capability groups, with keyboard shortcuts as the structural metaphor when relevant. The section should feel like a refined product manual: calm, spacious, highly legible, and dense with useful information without looking like an admin table.

### Layout and alignment
- Use a near-black page background, approximately `#080909` or `#0A0A0B`.
- Constrain the content to a wide max-width around `1180–1280px`, with generous horizontal padding of `48px` on desktop and `20–24px` on mobile.
- Begin with a small uppercase eyebrow aligned to the left. Place a thin horizontal rule beside or after it so the label acts as a section marker.
- Follow with a two-column introductory row: a large headline on the left and concise explanatory copy on the right. Keep both columns aligned to the same top baseline; use roughly a `1:1` or `1.05:0.95` width split with a `72–96px` gap.
- Below the introduction, create a responsive feature grid with two equal columns. Each column contains multiple capability groups stacked vertically. Collapse to one column below roughly `760px`.
- Each capability group has a small tracked uppercase label, a subtle divider beneath it, and a list of rows. Align all rows within a group to a consistent vertical rhythm.
- Use CSS Grid for the major layout and flex/grid inside each row. Keep the left shortcut/key area narrow and the description area flexible.
- Preserve generous empty space above the section and between the intro and grid; the section should feel like a deliberate chapter break rather than a crowded feature block.

### Typography hierarchy
- Use a clean contemporary sans-serif with slightly technical character. If the product has a brand font, use it; otherwise use a system or geometric sans stack.
- Eyebrow and group labels: `10–11px`, uppercase, `0.18–0.24em` letter spacing, medium weight, muted orange or cool gray.
- Main heading: approximately `52–64px` on desktop, `38–46px` on mobile, weight `600–700`, line-height around `0.98–1.05`. Let it wrap into two intentional lines when useful.
- Supporting paragraph: `16–18px`, line-height `1.6`, colour around `#929496` or `#A0A1A3`; limit its measure to roughly `42ch`.
- Shortcut descriptions: `14–15px`, line-height `1.4–1.5`, colour around `#9A9B9D`.
- Avoid excessive font-weight variation. Contrast should come primarily from scale, spacing, and colour.

### Colour and emphasis
- Background: approximately `#080909`.
- Primary heading and key text: warm off-white around `#E9E9E7`.
- Secondary text: `#929496` to `#A2A3A5`.
- Dividers: extremely subtle gray around `#242627` or `rgba(255,255,255,0.12)`.
- Accent: restrained warm orange around `#D96F3D` or `#E47740`, used for the eyebrow and tiny highlights—not large decorative fills.
- Keep the overall contrast soft and premium. Do not turn every interactive element orange.

### Spacing, borders, and keycaps
- Use a spacing system based on `8px`: approximately `16px` between label and divider, `12–16px` row padding, `28–40px` between groups, and `64–96px` around the introductory block.
- Use 1px horizontal rules with no heavy vertical borders around the overall grid.
- Render keyboard shortcuts as compact keycaps: dark gray fill around `#151718`, a 1px border around `#2B2D2E`, subtle inner highlight or shadow, `3–5px` radius, and `8–12px` horizontal padding. Keep keycaps visually tactile but understated.
- Keycaps should use a compact monospace or system font at `12–13px`, with symbols and letters centered. Handle multi-key shortcuts as a small horizontal group with `4–6px` gaps.
- Keep row separators subtle and consistent. Make the key area wide enough for the longest shortcut so descriptions line up cleanly.

### Interaction and responsive behaviour
- If shortcuts or capabilities are interactive, provide a clear hover/focus state: slightly lighter keycap background, brighter border, and a restrained orange accent. Do not rely on colour alone; preserve visible focus rings for keyboard users.
- On mobile, stack the intro columns, reduce the heading size, and let each feature column become a single continuous list while retaining group labels and dividers.
- Ensure long descriptions wrap naturally without causing keycaps to shift unpredictably.
- Respect reduced-motion preferences; use only subtle transitions such as `120–180ms` colour and border changes.
- The component should remain useful if keyboard shortcuts are replaced with commands, workflow steps, or product capabilities.

### Content model
- Write original content for the user's product. Use 4–6 capability groups, each with 3–5 concise rows.
- Keep labels short and functional. Each row should pair one action or command with one plain-language explanation.
- Avoid marketing filler; this section works because it communicates practical depth and gives the product a sense of mastery.

## Never
- Never reuse logos, product names, branded marks, or proprietary copy from the reference.
- Never copy the reference's exact heading, labels, shortcut combinations, row descriptions, or content structure verbatim.
- Never include illustrations, screenshots, decorative imagery, or image assets from the reference.
- Never reproduce the reference as a pixel-perfect clone; adapt the layout principles to the user's product and brand.
- Never use illegible low-contrast text, heavy borders, oversized decorative gradients, or dense unstructured tables.
