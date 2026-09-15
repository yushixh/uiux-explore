## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/noodle-seed/892ab390-1bf9-4a7d-a1b3-8cebe5820ba8-1789106717-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/noodle-seed/892ab390-1bf9-4a7d-a1b3-8cebe5820ba8-1789106640138-full.webp
- Component on Kage: https://kage.design/component/noodle-seed-feature-grid

## Before you start
Ask what the user's product is, who it serves, and what visual brand direction it already has. Then apply the principles below to create an original version for that product—not a copy of the reference.

## Build this section
Create a dark, editorial feature showcase for presenting several real-world product use cases. The section should feel like an interactive feature grid or carousel: a headline and short explanation establish the value, a segmented row lets visitors switch between scenarios, and one dominant product preview makes the selected scenario tangible.

### Layout and alignment
- Use a near-black section background, approximately `#050505`, with a generous max-width of about `1120–1200px` and balanced horizontal padding.
- Start with a two-column intro row: a compact uppercase eyebrow and large headline on the left; a concise explanatory paragraph and text CTA on the right. Align the columns to the top and leave visible breathing room beneath them.
- Place a full-width segmented use-case navigation beneath the intro. Make it a long rounded container with three or four equal or near-equal options, plus a separate circular control at the far right if the interaction needs play, next, or expand behavior.
- Below the navigation, show a short selected-use-case statement followed by one large preview panel. The preview should dominate the section and be wide enough to communicate the product experience at a glance.
- Add a small caption or attribution line below the preview, then place one or two action buttons on the lower right. Finish with a thin divider and a compact row that can expand to reveal more examples.
- On smaller screens, stack the intro columns, allow the tabs to scroll horizontally or wrap cleanly, and keep the preview within the viewport with an appropriate aspect ratio.

### Typography hierarchy
- Use a clean contemporary sans-serif with slightly tight tracking for large text.
- Set the eyebrow in uppercase at roughly `11–12px`, with generous letter spacing around `0.16em` and muted gray color.
- Set the main heading around `64–76px` on desktop with tight line-height around `0.95–1.02`; reduce it to roughly `42–52px` on mobile. Keep the headline to two or three short lines.
- Use a supporting paragraph around `17–19px` with `1.45` line-height and a soft gray tone.
- Use tab labels and utility text around `14–15px`; selected labels should have stronger contrast than inactive labels.
- Keep button labels concise and medium-weight. Supporting captions can be `12–13px` and subdued.

### Colour and surfaces
- Use approximately `#050505` or `#070707` for the page background and `#111111` for dark controls.
- Use warm off-white, approximately `#F5F3EF`, for primary text and selected surfaces.
- Use gray text values around `#A5A3A3` for supporting copy and `#727272` for tertiary metadata.
- Give the active tab a pale warm surface such as `#F4F2ED` with near-black text; inactive tabs remain transparent or use `#121212`.
- The product preview may use a light shell around an inner interface, allowing the selected product experience to carry its own colour palette. Keep the surrounding section visually restrained so the preview is the focal point.

### Borders, radius, and depth
- Use subtle 1px borders around segmented controls and secondary panels, approximately `rgba(255,255,255,0.16)`.
- Give the tab rail a pill radius of `999px`; use a smaller pill or rounded-rectangle radius for buttons.
- Give the main preview a radius of roughly `14–20px`; if it contains a light browser-like shell, use a slightly smaller radius for the inner content.
- Keep shadows restrained. A soft dark shadow or faint warm glow may support primary actions, but avoid glossy effects across the whole section.
- Maintain a consistent 1px divider before the expandable examples row.

### Interaction
- Tabs are interactive and switch the selected use-case label, description, preview content, caption, and relevant calls to action.
- Clearly distinguish the active tab through its light filled pill, while inactive tabs remain readable and keyboard accessible.
- Add a subtle transition between states: fade or crossfade the preview and update text without causing layout jumps.
- The separate circular control can advance to the next example, start an auto-advance sequence, or open the selected experience. Include an accessible label and visible focus state.
- Primary and secondary CTAs should have hover, focus, and pressed states. A light CTA can invert or brighten slightly on hover; a dark CTA can gain a thin warm outline or soft glow.
- The “more examples” row should expand or navigate to additional cards. Use a chevron that rotates when expanded.
- Ensure all controls work with keyboard navigation and expose selected/expanded state to assistive technology.

### Content structure
Use data-driven content so each scenario contains:
1. A short label and optional line icon.
2. A concise selected-state description.
3. A large preview, such as a product UI mockup, dashboard, workflow, or embedded experience.
4. A short caption explaining what the preview demonstrates.
5. One primary action and one optional secondary action.

Do not force every product to use the same number of tabs or the same CTA arrangement. Preserve the underlying rhythm: editorial introduction, compact scenario navigation, dominant proof preview, actions, then an expandable continuation.

## Never
- Never use the reference's logos, product names, brand marks, or exact copy.
- Never reproduce the reference preview, travel imagery, interface content, icons, or illustrations.
- Never copy the exact tab labels, CTA wording, proportions, or visual assets.
- Never make the section a static card grid when the product benefits from switchable scenarios.
- Never sacrifice responsive behavior, keyboard access, focus states, or readable contrast for visual similarity.
