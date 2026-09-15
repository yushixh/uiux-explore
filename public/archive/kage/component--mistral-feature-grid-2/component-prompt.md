## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073963-5.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mistral-ai/b4bd1aa3-e31c-42a6-8066-6d42fc3e7f45-1789073922-full.webp
- Component on Kage: https://kage.design/component/mistral-feature-grid-2

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, typography, and visual assets are. Then apply the principles below to create a tailored capability showcase for my product—not a literal recreation of the reference.

## Build a modular capability showcase
Create a full-width, vertically stacked feature-grid section that explains several distinct product capabilities or business areas. Each capability should feel like a self-contained editorial panel while sharing one consistent system.

### Content structure
- Use 4–7 stacked feature panels, ordered from the most immediately useful customer-facing capability to deeper platform, infrastructure, or expert-service capabilities.
- Every panel contains:
  1. A bordered header row with a large, concise heading aligned left.
  2. A quiet secondary action aligned right, using a soft filled button and a simple arrow icon.
  3. A short explanatory sentence below the header.
  4. A large visual stage or product diagram.
  5. A final row of compact, uppercase capability labels acting as metadata.
- Let the content determine heading wrapping. Longer headings may occupy two lines, but maintain a stable action position on desktop.
- Write original copy based on the user’s product. Do not use placeholder lorem ipsum.

### Layout and alignment
- Use a centred page container with a maximum width around 1440–1600px and a narrow 24px desktop side margin at minimum.
- Stack panels edge-to-edge within the container, with thin horizontal rules separating major rows.
- Panel header rows should be approximately 100–125px tall on desktop, with 24–32px horizontal padding.
- Place the description and visual stage in a padded content area, using 24–32px gaps.
- Make each visual stage wide and prominent: roughly 16:7 to 5:2 aspect ratio on desktop, with a responsive 4:3 or 3:2 ratio on smaller screens.
- Keep the visual’s important diagram or UI mockup centred, with generous negative space around it.
- Capability labels should wrap naturally into multiple lines or rows rather than overflow horizontally.
- On mobile, stack the heading and action vertically or place the action beneath the heading; reduce side padding to 16–20px and preserve generous separation between the description, visual, and labels.

### Typography hierarchy
- Use a clean contemporary sans-serif with a neutral, highly legible appearance.
- Feature headings: approximately 42–56px, line-height 0.98–1.08, medium or regular weight, with tight tracking.
- Descriptions: approximately 19–23px, line-height 1.25–1.4, regular weight; constrain long copy to a readable measure where appropriate.
- Action labels: 14–16px, medium weight.
- Capability metadata: 10–12px, uppercase, slightly increased letter spacing, compact line height. Use a monospace or technical sans only if it fits the user’s brand.
- Keep text colour near-black, approximately #171717, against a warm off-white background.

### Colour and visual stages
- Use a warm, almost-white page background around #F7F7F4 or #FAFAF8, with near-black text around #171717.
- Use very subtle rules around #D9D9D4 or rgba(20,20,20,.14).
- Give each visual stage its own bold thematic colour while maintaining a coherent palette. Suitable starting points include:
  - vivid orange: #FF5A16 or #FF681B
  - deep blue-black: #191A31 or #20213B
  - saturated cyan-blue: #079FE5 or #159FE8
  - warm red-orange: #FF4B16 with deeper red accents around #C91527
  - golden yellow: #FFC52A or #FFD348
  - pale neutral: #F1F1EC with blue, orange, or green accents
- Treat colour as a field behind the content, not as a decorative border. Use tonal blocks, subtle grids, modular tiles, or faint technical lines to give the stage depth.
- Ensure text and UI cards maintain strong contrast over the stage background.

### Visual language for diagrams
- Build the stage with CSS, SVG, or lightweight HTML UI mockups rather than relying on stock imagery.
- Use a faint square grid, modular tiles, branching connector lines, small nodes, and occasional abstract utility icons to suggest systems thinking.
- Centre one clear explanatory object: for example, a command interface, code-generation card, three-column workflow, training dashboard, or connected capability stack. Choose a metaphor appropriate to the user’s product.
- Use floating cards with restrained shadows, soft white or tinted surfaces, and modest radius—around 8–14px.
- Keep diagram detail subordinate to the core message; it should be understandable at a glance and remain decorative rather than pretending to be a fully working application.
- If showing UI, create believable but original microcopy and layout, and avoid dense illegible text.
- Use simple line icons or abstract symbols only when they support the story. Avoid decorative clutter.

### Borders, controls, and radius
- Use 1px rules for panel boundaries and visual-stage edges.
- Keep the overall system crisp and architectural: mostly square or lightly rounded containers.
- Use approximately 8–10px radius for buttons and cards; visual stages may use 0–2px radius or a small 2–4px radius so they feel integrated into the grid.
- Buttons should have a pale grey fill around #EEEEEB, dark text, 12–16px horizontal padding, and a compact arrow icon. Add a subtle hover darkening and a 2–4px upward or rightward motion to the arrow.
- Provide visible keyboard focus states with a clear 2px outline using the product’s accent colour.

### Interaction and responsive behaviour
- Each action should be a real link or button with a meaningful destination supplied by the product owner.
- On hover, gently increase contrast in the action and allow the visual diagram’s grid, nodes, or central card to shift very slightly; avoid distracting animation.
- Use short transitions around 180–250ms with ease-out timing.
- Respect `prefers-reduced-motion` by removing decorative movement.
- Make all visual stages responsive and preserve the central object’s hierarchy at narrow widths; simplify peripheral diagram elements if space is limited.
- Ensure labels, actions, and diagrams remain accessible to screen readers and keyboard users. Decorative connector lines and textures should be hidden from assistive technology.

### Quality bar
The result should feel like an editorial product-system overview: calm, precise, technical, and confident. It should communicate breadth through repetition of a strong pattern, while each panel gains personality from its own colour field and diagram.

## Never
- Never copy the reference’s logos, product names, brand marks, icon artwork, illustrations, imagery, or exact interface screenshots.
- Never reuse the reference’s copy, headings, labels, button text, or specific examples.
- Never make every visual stage identical; vary the visual metaphor while retaining the same layout system.
- Never use random gradients, excessive rounded cards, stock photography, or ornamental effects that weaken the architectural grid.
- Never sacrifice legibility for dense diagram detail or tiny text.
