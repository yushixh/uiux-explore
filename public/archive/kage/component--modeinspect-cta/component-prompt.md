## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106494-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-cta

## Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual system are. Then apply the principles below to create a bespoke closing CTA for that product rather than reproducing this reference.

## Build this section
Create a full-width, high-impact closing call-to-action section intended to appear near the end of a landing page. Use a nearly black background with a short, action-oriented headline set in two oversized lines, centered both horizontally and visually within the section. The component should feel like a decisive transition from consideration to action: minimal, confident, editorial, and memorable.

### Layout and alignment
- Use a full-bleed section with a dark background and no visible outer container.
- Give the section substantial vertical height—roughly 55–70vh on desktop, with a practical minimum of 520px—so the CTA feels like a destination rather than a small banner.
- Center the content on both axes. Keep the text block narrow enough that the headline resolves into two intentional lines.
- Use responsive side padding of approximately 24px on small screens, 48px on tablets, and 64–96px on large screens.
- Allow the headline to occupy a strong but controlled portion of the viewport: around 55–75vw on desktop, capped with a sensible max width; on mobile, use nearly the full content width.
- Preserve generous empty space around the words. Do not add cards, secondary columns, decorative panels, or unrelated supporting content.

### Typography hierarchy
- Make the CTA headline the only dominant visual element.
- Use a bold, clean grotesk or contemporary sans-serif with simple geometry and confident proportions.
- Set the headline in uppercase or another compact, emphatic treatment appropriate to the user's brand.
- Use a very large responsive size, approximately `clamp(4rem, 12vw, 10rem)` on desktop, with a smaller mobile range such as `clamp(3.25rem, 18vw, 6rem)`.
- Use tight line-height around `0.82–0.95` and slightly negative tracking, approximately `-0.04em` to `-0.07em`, so the lines read as one graphic gesture.
- Break the message into two lines intentionally rather than relying on accidental wrapping. Keep both lines visually balanced where possible.
- Avoid adding eyebrow text, body copy, labels, or multiple competing buttons unless the user's product clearly needs them; the headline itself should carry the CTA.

### Colour
- Start with a near-black background around `#111111` or `#101010`.
- Use a warm off-white headline around `#F3F2EA` rather than stark white.
- If the user's brand calls for colour, introduce it sparingly through a subtle text accent or interaction state, while preserving strong contrast and the monochrome editorial character.

### Borders, radius, and surface treatment
- Keep the main section square-edged or minimally rounded so it reads as a full-width band.
- Do not use card-like containers, shadows, gradients, textures, or imagery.
- If the CTA is interactive, use a subtle focus ring or underline rather than a floating pill treatment. Any visible border should be thin—around `1px`—and low contrast.

### Interaction and motion
- Make the CTA keyboard accessible with a clear `:focus-visible` state.
- If the headline itself is clickable, provide a generous hit area and a restrained hover treatment such as a slight colour shift, tracking change, or short underline reveal.
- Keep motion purposeful and quick: a gentle fade or upward entrance on scroll is acceptable, but avoid exaggerated zooms, bouncing, or continuous animation.
- Respect `prefers-reduced-motion` and preserve the centered static composition when motion is disabled.
- Ensure the oversized type never clips, causes horizontal scrolling, or becomes unreadable at narrow widths.

### Responsive behaviour
- On mobile, reduce the section height while retaining generous vertical breathing room.
- Keep the headline centered and split across two deliberate lines where possible; adjust the wording or line break for the user's product if necessary.
- Use fluid type and padding so the section scales smoothly between breakpoints.
- Maintain accessible contrast and a minimum readable interaction target if an explicit action is added.

## Never
- Never copy the reference's product name, headline, wording, or line break literally.
- Never use logos, brand marks, product names, copy, illustrations, or imagery from the reference.
- Never recreate the reference as a pixel-for-pixel clone; translate its hierarchy, restraint, scale, and closing-CTA energy into the user's brand.
- Never sacrifice readability or accessibility for oversized type.
