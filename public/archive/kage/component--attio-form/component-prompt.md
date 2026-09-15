## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060461-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/attio-com/853806da-b35e-493c-a2ae-f3b42d8e3fbb-1789060424-full.webp
- Component on Kage: https://kage.design/component/attio-form

## Before you start
Ask what the user's product is, who it serves, and what its brand personality and visual system are. Then apply the principles below to create an original form section for that product rather than reproducing a reference design.

## Design brief
Build a compact, premium form section on a very dark canvas. The reference is intentionally understated: the main visual character comes from a black-to-charcoal background with extremely subtle vertical pinstripes and thin structural borders. Keep the composition calm, spacious, and highly legible so the form—not decoration—is the focal point.

## Reusable design rules

### Layout and alignment
- Use a full-width section with a centered content container and generous horizontal gutters.
- Keep the form content aligned to a consistent vertical grid; do not center every element independently.
- Use a clear heading, supporting text, fields, and primary action in a simple vertical flow.
- On desktop, constrain the form to a comfortable reading width of roughly 420–560px; on mobile, use the available width with 20–24px side padding.
- Preserve generous empty space around the form. The background texture should extend beyond the content to establish the section boundary.
- If the form sits inside a larger page, use thin vertical rules or container edges to make the section feel architecturally framed.

### Background and colour
- Base background: near-black, approximately `#101010` or `#111111`.
- Add very subtle vertical lines using a repeating linear gradient, approximately `rgba(255,255,255,0.035)` at 1px followed by 7–15px of transparent space. Keep the contrast low enough that the lines are discovered rather than noticed first.
- Optionally add a slightly lighter inner edge or side rule in `rgba(255,255,255,0.12)` to define the section without creating a card effect.
- Use warm or neutral white for primary text, approximately `#F5F4F1`; use muted gray for supporting text, approximately `#A5A5A0`.
- Choose the accent colour from the user's brand for the submit action and focus states, but keep it controlled and high contrast.

### Typography hierarchy
- Use a modern sans-serif with clean geometry and strong rendering at small sizes.
- Give the form title a confident, compact scale—roughly 28–48px depending on viewport—with tight line-height around 1.05–1.15.
- Supporting copy should be 14–17px with a line-height around 1.45–1.6 and a restrained gray colour.
- Field labels should be explicit, short, and visually stronger than placeholder text; use 12–14px medium weight.
- Avoid excessive uppercase text, ornamental type, or large display headlines that compete with the interaction.

### Spacing and surfaces
- Use an 8px spacing system with larger section gaps: approximately 24–32px between heading and description, 20–24px between fields, and 28–40px before the primary action.
- Inputs should be tall enough for comfortable use, approximately 48–56px, with consistent internal padding of 14–16px.
- Prefer flat inputs that sit directly on the dark surface or use a subtly lighter fill around `#171717`–`#1C1C1C`.
- Use 1px borders in low-contrast gray such as `rgba(255,255,255,0.16)`; increase contrast on hover and focus.
- Use restrained corner radii, approximately 6–10px. Avoid overly rounded pill controls unless they are native to the user's brand.

### Interaction
- Give every field a visible label and useful error state; do not rely on placeholder text alone.
- On hover, slightly raise border contrast or surface brightness rather than adding a dramatic shadow.
- On focus, show a clear 2px brand-colour ring or high-contrast outline with sufficient contrast against the dark background.
- The submit button should have a clear enabled, hover, pressed, loading, and disabled state. Preserve its dimensions while the state changes.
- Validate inline with concise messages and maintain layout stability so nearby fields do not jump unexpectedly.
- Ensure keyboard navigation, visible focus, adequate contrast, and touch targets of at least 44px.

## Never
- Never copy any logo, product name, brand mark, or proprietary wording from the reference.
- Never reuse the reference's exact form copy, field labels, button text, or content hierarchy.
- Never include illustrations, photography, decorative artwork, or imagery from the reference.
- Never reproduce the reference page as a pixel-for-pixel clone; adapt the structural principles to the user's product and brand.
- Never let the grid texture overpower the form or reduce text and control legibility.
