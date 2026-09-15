## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060663-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/railway-com/2043945d-689d-427f-b51d-92aa383b8c92-1789060635-full.webp
- Component on Kage: https://kage.design/component/railway-feature-grid-2

# Build a guided feature journey section

## Before you start
Ask me what my product is, who it is for, and what my brand looks and sounds like. Then apply the principles below to create an original feature section for that product—not a copy of the reference.

## Goal
Create a premium, dark-mode feature showcase for a software product. The section should present several product capabilities as a vertical journey, with each capability combining:
- a small category eyebrow
- a large editorial headline
- a concise supporting paragraph
- a simple text link or call to action
- two or three compact proof-point rows
- a visual product illustration or UI simulation on the opposite side

Use realistic content supplied by the product context, but do not reuse any reference wording, names, logos, icons, or imagery.

## Layout and alignment
- Use a full-width near-black section, approximately `#100e18` or an equivalent brand-appropriate dark tone.
- Constrain the main content to roughly 1120–1240px, with generous horizontal padding: about 64–96px on desktop and 24px on mobile.
- Stack 3–5 feature bands vertically. Each band should be at least 620–760px tall on desktop, with generous top and bottom whitespace.
- Create a slim vertical journey rail near the left content edge. It should continue through the feature bands and include a small outlined marker or capsule at each section transition.
- On desktop, use a two-column layout: text around 45% wide on the left and a visual around 45% wide on the right, with a 72–112px gap. Keep the text column left-aligned and vertically centered against the visual.
- Alternate or subtly vary the visual treatment between rows, but keep the overall reading order consistent.
- On mobile, move the rail to the outer left edge or omit it if it harms readability. Stack text above the visual, reduce section height, and preserve generous spacing.
- The final or selected feature may use a tinted full-width inset panel to create a change of pace while retaining the same grid alignment.

## Typography hierarchy
- Use a refined serif or humanist display face for feature headlines, paired with a clean sans-serif for all interface and supporting text. If the product brand uses another type system, preserve the contrast between expressive headlines and highly legible utility text.
- Category eyebrow: 12–14px, medium weight, compact pill or soft rectangular label, with restrained tracking.
- Feature headline: 42–58px desktop, 34–42px mobile; line-height around 1.05–1.15; use 2–4 short lines rather than a paragraph-like block.
- Supporting paragraph: 17–20px, line-height 1.45–1.6, muted but readable.
- CTA: 16px, medium or semibold, with a simple arrow or equivalent directional affordance.
- Proof-point title: 15–17px, medium weight; description: 14–16px with lower contrast.
- Keep text measure near 480–540px so headlines and descriptions remain editorial and easy to scan.

## Spacing and structure
- Use a consistent 8px spacing system.
- Place the eyebrow 32–44px above the headline, the paragraph 18–24px below the headline, and the CTA 12–20px below the paragraph.
- Separate proof points from the CTA with 44–64px of space.
- Divide proof points with 1px rules. Give each row 20–28px vertical padding.
- Keep the rail visually behind the content, with enough inset that it feels like a structural guide rather than a border.
- Avoid dense card grids: the visual rhythm should feel like a sequence of spacious editorial panels.

## Colour and atmosphere
- Base background: approximately `#100e18`; primary text: `#f2f0ec`; secondary text: `#a8a5b0`; rules: `rgba(255,255,255,0.10)`.
- Give each feature a restrained accent family, such as mint/teal `#55d6b1`, amber `#d99a58`, or cool blue-gray `#8aa6b8`. Derive eyebrow fills, rail highlights, icon strokes, and subtle glows from that accent.
- Use low-opacity radial gradients or broad tinted washes behind the product visuals. Keep them atmospheric and soft, never neon or decorative for its own sake.
- Ensure all text and controls meet accessible contrast. Accent colors should support hierarchy, not replace text labels.

## Borders, surfaces, and radius
- Use thin, low-contrast borders around visual frames and simulated UI surfaces: approximately `rgba(255,255,255,0.12)`.
- Use 10–16px corner radii for product mockups and inset panels. Use smaller 4–8px radii for labels and compact controls.
- Product visuals should look like simplified interface states: status cards, connection diagrams, dashboards, deployment panels, charts, or system objects built from CSS and HTML.
- Prefer layered surfaces in nearby dark tones, such as `#1a1823`, `#24222d`, and `#302e3a`, with subtle shadows and gradients.
- Do not make every element a floating card. Let some information sit directly on the dark canvas.

## Product visual treatment
- Build each visual as an original, abstracted representation of the feature. It should communicate relationships, status, scale, or workflow at a glance.
- Use a small number of meaningful objects, clear labels, connection lines, status indicators, and one focal interaction state.
- Avoid overly literal screenshots. The visual should remain legible at a glance and support the adjacent copy.
- If using icons, use a consistent simple line-icon style or neutral geometric symbols; do not use recognizable third-party brand marks.
- Add subtle motion only where useful: slow ambient glow, status pulse, chart shimmer, or a connection line drawing in. Respect `prefers-reduced-motion`.

## Interaction
- Make the CTA and any interactive visual controls keyboard accessible with visible focus states.
- If feature panels are clickable, provide hover/focus feedback through a slight border-brightness change, accent glow, or 2–4px translation—not a dramatic scale effect.
- Keep the journey rail decorative or semantically linked to section navigation, but do not let it interfere with scrolling or content access.
- On smaller screens, preserve all proof points and visual meaning; do not hide essential information behind hover-only behavior.

## Responsive behavior
- At widths below roughly 800px, switch to one column, reduce headline size, tighten horizontal padding, and move visuals below their text.
- Allow tinted panels and visual frames to extend to the available width without causing horizontal overflow.
- Make proof-point rows wrap gracefully and keep touch targets at least 44px high where interactive.

## Never
- Never copy the reference’s logos, product names, brand names, exact copy, feature labels, iconography, illustrations, screenshots, or imagery.
- Never use the reference company’s colors as fixed requirements; adapt the palette to the user’s brand while preserving the dark, atmospheric contrast system.
- Never create a generic collection of equal cards with no progression or relationship between sections.
- Never rely on low-contrast text, tiny labels, hover-only information, or decorative motion that distracts from the feature content.
- Never reproduce the exact composition pixel-for-pixel; use the underlying principles to make a distinct section for the user’s product.
