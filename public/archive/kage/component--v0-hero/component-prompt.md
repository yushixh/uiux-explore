## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073271-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/v0-dev/99e42d3b-29f6-491c-8f06-cd6295e0d986-1789073248-full.webp
- Component on Kage: https://kage.design/component/v0-hero

## Before you start
Ask what the user's product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original version for that product, adapting the wording, controls, colors, and content to its needs rather than reproducing this reference.

## Design goal
Build a polished landing-page hero for an AI-powered creation product. The section should make the primary action immediately obvious: users describe what they want to create in a large prompt composer, then discover ready-made starting points below. Keep the experience calm, direct, and highly usable.

## Layout and alignment
- Use a full-width page with a thin top navigation bar and a subtle bottom divider.
- Keep the header compact: place the brand mark at the far left, navigation links in a centered or slightly right-shifted group, and secondary account actions at the far right.
- Give the hero generous whitespace. Vertically center the main creation area in the upper half of the viewport rather than placing it directly below the navigation.
- Constrain the prompt area to approximately 690–720px on desktop and center it horizontally.
- Stack a bold headline, the prompt composer, and suggestion chips with consistent vertical spacing.
- Place the template discovery row in a wider content container near the lower portion of the viewport. Its heading should sit left, while category filters and a browse action align right on the same baseline.
- Below the discovery controls, use a three-column preview grid with equal-width cards and consistent gaps. Let the cards continue below the fold to imply more content.
- On smaller screens, collapse navigation into a compact menu, make the composer full width with side padding, wrap filters onto multiple lines, and change the preview grid to one column or a horizontally scrollable row.

## Typography hierarchy
- Use a clean modern sans-serif with tight, confident letterforms.
- Set the hero heading in a dark near-black, approximately 32–36px desktop, 700–750 weight, with tight line height around 1.1.
- Use 14–16px text for prompt placeholders, navigation, chips, and filters; use muted gray for supporting labels.
- Keep the discovery heading visibly smaller than the hero heading, around 22–24px and semibold.
- Use concise labels and avoid excessive explanatory copy.

## Colour and surface treatment
- Use a near-white page background, approximately #FAFAFA or #F9F9F9.
- Use near-black for primary text and actions, approximately #171717 or #181818.
- Use muted gray text around #6B6B6B and lighter utility text around #8A8A8A.
- Use white or near-white surfaces for the prompt composer, chips, and navigation action buttons.
- Keep borders subtle: approximately #D8D8D8 for the composer and #E9E9E9 for dividers and low-emphasis controls.
- Reserve solid near-black for the primary account action and the compact microphone/action control inside the composer.

## Borders, radius, and spacing
- Give the prompt composer a 12–14px corner radius, a 1px neutral border, and a large interior height of roughly 108–112px.
- Use generous horizontal padding inside the composer, with the text entry aligned to the upper-left and model/tool selection aligned along the bottom-left.
- Position the voice or submit control in a compact dark square or rounded-square button at the lower-right.
- Make suggestion and category controls rounded pills with 999px radius, 1px light borders, and approximately 10–14px horizontal padding.
- Use 8–12px gaps between chips and 24–32px gaps between major content groups.
- Use a page gutter around 48px on desktop, reducing to 20–24px on mobile.
- Give template cards a 10–12px radius, a thin border, and an overflow-hidden preview surface. Maintain equal card heights and consistent aspect ratios.

## Interaction and state
- The prompt field should look focusable and support a real text cursor, keyboard entry, and a clear focus ring using a subtle dark or brand-colored outline.
- The model/tool selector should open a small popover or menu when clicked.
- Suggestion chips should populate or append useful starter prompts when selected, with hover and pressed states.
- The voice/action button should show hover, focus, disabled, and recording or loading states where relevant.
- Template category pills should filter the preview grid without shifting the overall layout; the active category can use a slightly darker border or filled surface.
- Add understated hover elevation or border contrast to template cards and make the browse action keyboard accessible.
- Preserve a clear tab order and visible focus states for all interactive elements.

## Content guidance
- Use generic, product-specific copy supplied by the user's brand. The headline should be a direct question or invitation to create.
- Include a short placeholder in the composer, a contextual model/tool control, one primary action, several example prompt chips, and a template section with category filters.
- Use realistic abstract preview placeholders or generated UI mockups that fit the user's product; they should support the structure without becoming the visual focus.

## Never
- Never copy the reference product's logo, product name, navigation labels, headline, placeholder text, chip labels, category names, or other exact copy.
- Never reuse the reference site's logos, branded symbols, icons, illustrations, screenshots, or imagery.
- Never make the implementation dependent on the reference brand's exact colors, typography, dimensions, or layout measurements; adapt the system to the user's product and brand.
- Never hide the primary creation action behind decorative content or make the prompt composer look like a static image.
- Never use inaccessible low-contrast text, ambiguous icon-only controls, or remove keyboard and focus support.
