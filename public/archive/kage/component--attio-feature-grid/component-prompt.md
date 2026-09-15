## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060458-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-feature-grid

## Before you start

Ask what the user's product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original feature-grid section for that product—not a copy of the reference.

## Build this section

Create a premium SaaS feature-grid section that explains several product capabilities through a calm, editorial sequence of text and interface demonstrations. The section should feel like a guided product story: introduce a capability, show it in a realistic UI panel, then reinforce it with smaller supporting examples.

### Layout and alignment

- Use a centered content shell with a maximum width of approximately `1200–1280px` and generous horizontal margins.
- Establish a visible but extremely subtle grid system with 1px rules between major cells. Keep the grid lines low contrast rather than decorative.
- Begin with a large introductory block: a small category eyebrow above a two- or three-line headline. Align the text to the main content column rather than centering it across the viewport.
- Use a persistent narrow left rail for the main feature group. It should contain one active item and several inactive labels, aligned vertically. The active item can have a slim accent rule on its left edge; inactive items should be visibly quieter.
- Pair the rail with a broad content area. The primary feature should have a short explanatory statement above a large product mockup.
- Follow the primary showcase with a two-column supporting grid. Each card gets a concise heading, muted supporting copy, and a compact product vignette below it.
- Repeat the rhythm for later feature groups: intro text, one large UI demonstration, then two supporting cards. Vary the UI pattern—table, workflow canvas, kanban board, analytics panel, assistant response, or notification stack—while keeping the surrounding layout consistent.
- On smaller screens, remove or collapse the persistent rail into a horizontal selector or simple stacked list. Stack supporting cards vertically and allow product mockups to scroll horizontally when their density requires it.
- Keep text and UI mockups aligned to consistent column edges. Avoid floating elements that break the underlying grid without a clear purpose.

### Typography hierarchy

- Use a clean contemporary sans-serif with a neutral, highly legible shape. Use a system sans or the user's brand font if available.
- Eyebrows: `13–14px`, medium weight, compact line height, often set in a pale blue rounded label.
- Main feature headings: approximately `36–48px` on desktop, `1.05–1.1` line height, normal-to-medium weight. Use a dark colour for the first phrase and a cool muted grey for the supporting phrase when contrast is part of the brand language.
- Feature statements above major mockups: `24–30px`, tight line height, medium weight. Bold only the essential benefit phrase; keep the explanation in a softer grey.
- Supporting card headings: `18–20px`, medium weight. Supporting text: `15–17px`, `1.35–1.5` line height, muted grey.
- UI mockup typography should be smaller and more utilitarian: `11–14px` labels, `13–16px` primary values, and compact metadata. Use weight and colour to establish hierarchy rather than excessive font sizes.
- Maintain generous vertical spacing: roughly `96–160px` between feature groups, `48–72px` around headings, and `24–40px` inside supporting cards.

### Colour and surface treatment

- Use an almost-white page background such as `#FCFCFB` or `#FFFFFF`.
- Use near-black text such as `#202124` or `#202124` for primary copy.
- Use cool neutral secondary text such as `#7B808A` or `#858992`.
- Use very pale structural rules such as `#E6E8EA` and slightly tinted mockup surfaces such as `#F4F6F8`.
- Reserve a soft blue accent for active states and labels, for example `#2F6FDB`, `#DCEBFF`, or `#EAF2FF`.
- Product mockups may use restrained semantic accents—mint, lavender, yellow, coral, and blue—but keep them desaturated and purposeful. Never let accent colours overpower the page typography.
- Give interface panels a subtly different background from the page so they read as demonstrations without looking like detached cards.

### Borders, radius, and depth

- Use 1px borders in `#E4E7EA` or `rgba(25, 35, 45, 0.10)` for the page grid and mockup containers.
- Keep page-level cells mostly square or very lightly rounded; this preserves the editorial, architectural feeling.
- Use `10–16px` radius for simulated product cards, menus, prompts, and floating panels.
- Use soft shadows only on nested UI surfaces: approximately `0 8px 24px rgba(30, 40, 55, 0.08)`. The overall section should remain flat and precise.
- Layered cards can use offset outlines or faint duplicate borders to imply depth, but keep the effect subtle.

### Product mockup and interaction cues

- Build believable UI demonstrations rather than generic coloured rectangles. Include realistic tables, rows, chips, avatars, status labels, toolbars, filters, and assistant or workflow panels where appropriate to the user's product.
- For a data table, show clear column alignment, compact rows, selected states, and one useful side panel or contextual action.
- For a workflow, show connected nodes with directional lines, small status badges, and an obvious completed or active state.
- For an assistant or analytics panel, show a question or task, a short processing/tool-use cue, and a concise result. Keep the content illustrative and product-appropriate.
- Add restrained hover and focus behaviour: active rail items change colour and reveal their accent rule; mockup cards can lift by 1–2px or brighten their border; interactive controls should have visible keyboard focus states.
- If the section is scroll-driven, use a lightweight sticky rail or progressive active-state update, but ensure the content remains usable without JavaScript and on touch devices.
- Respect `prefers-reduced-motion`; do not rely on dramatic animation to communicate the feature story.

### Responsive and accessibility requirements

- Preserve readable line lengths and sufficient contrast at every breakpoint.
- Use semantic headings, lists for feature navigation, and accessible labels for mockup controls.
- Ensure inactive text is not so light that it becomes inaccessible; muted styling should still meet practical readability needs.
- Do not make the entire demonstration an image. Build the visible UI with HTML and CSS so it can adapt to the user's content and brand.

## Never

- Never reuse logos, product names, brand marks, or company references from the reference.
- Never copy the reference's marketing copy, labels, UI data, names, or exact wording.
- Never copy its illustrations, screenshots, diagrams, imagery, or distinctive interface compositions one-for-one.
- Never assume the user's product has the same audience, feature set, colours, or information architecture.
- Never sacrifice responsive behaviour, accessibility, or semantic structure for visual similarity.
