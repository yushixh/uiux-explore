## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073905-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-form

# Before you start
Ask the user what their product does, who the form is for, and what brand personality, colours, and framework or configuration choices they need. Then apply the principles below to create an original onboarding form for that product rather than reproducing a reference screen.

## Design goal
Build a compact developer onboarding section that makes setup feel nearly effortless. Lead with a confident promise, reduce the first decision to one clear select control, and show the resulting command or configuration directly beneath it so the user understands the next step without navigating away.

## Layout and alignment
- Use a deep, immersive section background and a constrained content column, approximately 720–900px wide on desktop.
- Align the heading and supporting copy to the same left edge; keep the form controls centred or aligned to the content column depending on the product’s brand system.
- Create generous vertical breathing room above the content. The section should feel like a deliberate landing-page moment, not a crowded settings panel.
- Stack the elements in this order: headline, supporting statement, selector or first input, short contextual instruction, then a code/command output panel.
- Keep the primary form control moderately narrow and readable, around 340–420px wide on desktop; make it full-width with comfortable side padding on mobile.
- Let the output panel extend wider than the selector if useful, while remaining inside the section container and avoiding horizontal overflow.
- On small screens, reduce the top whitespace, keep the content left aligned, and allow the code block to scroll horizontally rather than wrap awkwardly.

## Typography hierarchy
- Use a bold contemporary sans-serif with a large display heading, roughly 52–64px on desktop and 38–46px on mobile, with tight line-height around 0.95–1.05.
- Break the headline across two lines only when it improves emphasis. Give the second line or a key phrase a saturated brand accent colour.
- Use a supporting paragraph around 22–26px, semibold, with a maximum width of roughly 680px and a compact 1.2–1.3 line-height.
- Use 14–16px medium-weight text for the selector and instructional label.
- Render commands in a monospace font around 14–16px, with sufficient line height and strong contrast.
- Keep hierarchy clear: the promise dominates, the explanation reassures, and the command is the practical payoff.

## Colour
- Start with an almost-black plum or midnight background, approximately `#1E142F` to `#241735`.
- Use warm white for primary text, approximately `#F7F4F2`.
- Choose one vivid accent for the highlighted headline phrase and interactive emphasis, such as hot pink `#F044A5`, electric violet `#6D32D9`, or a product-appropriate equivalent.
- Use a slightly lighter translucent purple-black surface for the code area, approximately `#171126` with subtle layered glow or gradient treatment.
- Keep muted instructional text near `#BDB6C8`; reserve the brightest colour for the key promise and active controls.
- Ensure all text and focus states meet accessible contrast requirements; do not rely on colour alone to communicate selection.

## Borders, surfaces, and radius
- Give the selector a saturated filled surface or a dark surface with an accent border; use a modest radius of 6–10px rather than a pill shape.
- Use a subtle 1px border around the output panel, approximately `rgba(255,255,255,.10)`, with a radius of 4–8px.
- Separate the code panel’s header or tab row from its content with a fine low-contrast divider.
- Use shadows sparingly. A soft violet glow behind the form can add depth, but the component should remain crisp and technical.
- Provide a clearly visible keyboard focus ring using the accent colour plus an offset, without changing the layout.

## Interaction
- Make the selector a real accessible native select or a fully keyboard-operable custom listbox with an obvious chevron and selected value.
- Changing the selection should update the command or configuration shown below with a brief, non-distracting transition.
- Include a copy affordance in the code panel, such as an icon button with an accessible label. On activation, copy the command and expose a short “Copied” confirmation without shifting surrounding content.
- Support loading, empty, and error states if the command depends on an API or asynchronous data, while keeping the primary setup path simple.
- On touch devices, keep controls at least 44px tall and make the code panel easy to scroll.

## Content guidance
- Write a concise, outcome-focused headline appropriate to the user’s product.
- Explain the setup benefit in one or two sentences; avoid jargon unless the audience is specifically technical.
- Use realistic options relevant to the product, but keep the initial choice set small.
- Show a useful command or configuration that can be copied immediately and clearly indicate what the user should do next.

## Never
- Never copy the reference’s logos, product names, testimonial identity, exact copy, illustrations, character art, or imagery.
- Never reproduce the reference page’s exact layout, wording, code, framework options, or decorative artwork.
- Never make the select look interactive without implementing keyboard, pointer, focus, and screen-reader behaviour.
- Never hide the practical next step behind a separate page or require unnecessary account setup before demonstrating the command.
- Never use low-contrast text, inaccessible custom controls, or decorative effects that compete with the form’s setup message.
