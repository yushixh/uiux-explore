## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073747-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/upstash-com/210669b2-56ab-47a0-9be6-e94255ecbd31-1789073722-full.webp
- Component on Kage: https://kage.design/component/upstash-feature-grid

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual identity are. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build a developer-product feature section
Create a responsive feature section for a modern software or developer product. The component should communicate one selected product capability, explain its three strongest benefits, and give visitors a practical implementation preview.

### Structure and layout
- Place the section inside a large, centered white surface with a very subtle gray outline or shadow. Use a generous outer radius of approximately `28px` and horizontal padding of `32–40px` on desktop.
- Above the main surface, include a compact horizontal product/category switcher. Represent each option as a pill-like tab with a light border, subtle shadow, and restrained status/icon treatment. The selected tab should appear raised or white; inactive tabs should blend more into the background.
- Inside the main surface, center-align a concise capability headline near the top. Keep it to one or two lines and make it the primary orientation point for the section.
- Place a centered row of two or three calls to action beneath the headline. Use one filled accent button for the primary action and softer tinted buttons for secondary actions. Buttons may include simple directional, document, or add icons, but icons must support the action rather than become decoration.
- Below the actions, create a three-column feature-card grid. Each card should have equal width, matching height, generous internal padding, and a pale tinted background. On smaller screens, collapse to one column or a carefully spaced two-column layout.
- Each feature card contains:
  - A concise two-line maximum heading.
  - Three short benefit statements.
  - A small numbered marker for each statement, using outlined circles and the accent colour.
- Under the feature cards, include a dark code-example panel with rounded corners. Divide it into a narrow example-navigation column and a wider code area.
  - The left column lists example names, with one selected item shown as a white or high-contrast rounded row.
  - The code area has a compact language-tab strip at the top and a monospace code block below.
  - Make the example and language tabs interactive: selecting them should update the visible example or code content, with a clear active state.
- Keep the entire section visually self-contained. Avoid adding unrelated supporting sections or decorative illustrations.

### Alignment and responsive behaviour
- Use a consistent centered max-width, approximately `1120–1240px`, with the main content aligned to the same grid as the cards and code panel.
- Preserve a clear vertical rhythm: switcher, headline, actions, feature cards, then code example.
- Keep card columns aligned at their top edges and use consistent gaps of approximately `24–32px`.
- On mobile, allow the product switcher to scroll horizontally rather than wrapping awkwardly. Stack the actions, feature cards, and code navigation when needed.
- Ensure the code panel remains usable on narrow screens with horizontal code scrolling and a compact or collapsible example list.

### Design language
- Use a calm, technical palette: warm off-white page background around `#F5F7F6`, white surfaces around `#FFFFFF`, pale green feature cards around `#EAF5F1`, and a deep green-teal accent around `#08705C` or `#0AAE7A`.
- Use near-black green text around `#102D28` for headings and `#23443D` for body copy. Use muted gray-green text around `#6D7775` for secondary labels.
- Use a dark charcoal code surface around `#171817` or `#1D1E1D`, with light gray code text and a restrained green syntax accent.
- Use borders around `#DDE8E4`, with occasional accent or warm highlight borders only for important active states.
- Use rounded corners consistently: approximately `12–16px` for cards and buttons, `24–30px` for the outer feature surface, and `8–10px` for code controls.
- Use a clean sans-serif typeface. Feature headings should be bold and compact, approximately `22–26px`; the main section headline approximately `24–30px`; body text approximately `16px`; navigation and button labels approximately `14–16px`. Code should use a readable monospace font around `13–15px`.
- Use generous whitespace rather than heavy separators. Keep shadows soft and low contrast, for example `0 8px 24px rgba(20, 50, 43, 0.08)`.
- Number markers should be small, circular, outlined, and visually quieter than the card heading. Maintain enough line height for multi-line benefit statements.

### Interaction and accessibility
- Product tabs, example items, language tabs, buttons, and any support controls must be keyboard accessible with visible focus states.
- Clearly distinguish active, hover, and focus states using colour, border, background, or underline—not colour alone.
- Use semantic tab patterns where appropriate, including selected state and associated panels.
- Provide accessible names for icon-only controls and ensure contrast is sufficient on the pale cards and dark code surface.
- If the product switcher changes the feature content, animate the change subtly with a short fade or crossfade; do not use distracting motion.

## Never
- Never reuse logos, product names, exact copy, code, labels, or brand-specific terminology from the reference.
- Never reproduce the reference's exact layout details, proportions, icons, colours, or content one-for-one.
- Never include the reference's illustrations, imagery, chat widget, or decorative assets.
- Never hard-code a fake brand identity; ask for and apply the user's product and brand instead.
- Never sacrifice responsive behaviour, semantic structure, keyboard access, or readable contrast for visual similarity.
