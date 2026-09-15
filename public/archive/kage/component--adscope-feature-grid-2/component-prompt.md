## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106703-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/adscope/d628eaa8-0259-4816-ad11-db69e3ce98d4-1789106621890-full.webp
- Component on Kage: https://kage.design/component/adscope-feature-grid-2

## Before you start
Ask what the user's product does, who it is for, and what its brand personality, colours, and typography are. Then apply the principles below to create a version for that product rather than reproducing the reference literally.

## Build this section
Create a responsive feature-showcase section for a modern software product. Use the component as a split feature grid: a centred section heading above a large rounded container, with an interactive feature list on the left and a visual proof panel on the right.

### Layout and alignment
- Place the section on a warm near-white page background, with generous vertical whitespace above and below.
- Use a restrained max-width of approximately 1180–1240px and centre the content.
- Centre a single large heading above the component. Keep the heading short, outcome-oriented, and visually dominant without adding a supporting paragraph unless the user's product needs one.
- Below the heading, create a two-column container roughly split 50/50. The left column is a vertically stacked accordion; the right column is a coloured visual stage.
- Make the outer container a single rounded rectangle with a subtle border and hidden overflow. On desktop, keep both columns equal in height. On mobile, stack the list above the visual stage and preserve comfortable touch targets.
- The left list should contain 5–7 feature rows. Each row has a small circular icon area, a title, and a circular affordance on the far right. The first row is expanded and includes a concise explanatory paragraph; the remaining rows are compact.
- Give the right stage a soft brand-tinted background and show 2–3 overlapping product UI cards at different scales. Use the cards as abstract proof of the product's value: include believable labels, statuses, metrics, thumbnails, or controls relevant to the user's product, but do not overfill the scene.
- Use intentional overlap and depth: one primary card should sit in front, with secondary cards partially behind it. Keep all important information inside the stage bounds.

### Typography hierarchy
- Use a clean contemporary sans-serif, or the user's existing brand font.
- Set the section heading in a large regular or medium weight, approximately 52–60px desktop and 34–42px mobile, with tight but natural line height.
- Feature titles should be around 23–26px desktop, medium weight, and able to wrap to two lines.
- Supporting copy should be around 16px with a 1.5–1.65 line height and a muted charcoal colour.
- UI-card text should be smaller and denser: 12–18px depending on hierarchy. Use tabular or semibold numerals for metrics.
- Avoid excessive bolding; use weight and spacing to establish hierarchy.

### Spacing
- Use approximately 80–110px between the top of the section and the heading, and 70–90px below the component.
- Leave 64–80px between the heading and the feature container.
- Use 32–48px internal padding in the desktop container and 20–24px on mobile.
- Make list rows 88–100px tall when collapsed, with 20–28px horizontal padding. The expanded row may be 190–230px depending on copy length.
- Keep icon-to-title spacing around 24–30px and title-to-description spacing around 16–20px.
- Use a consistent 8px spacing scale for smaller UI details.

### Colour and surfaces
- Start with a warm white page background around #FAFAF8 or #FFFFFF.
- Use near-black text around #111111 and secondary text around #555555–#666666.
- Use a very light neutral border around #E5E5E2 and subtle row dividers around #EAEAE7.
- Give the visual stage a soft, optimistic tint chosen from the user's brand; as a neutral starting point use pale blue #C9F0FF or #D9F5FF.
- Use white or #FCFCFA for product cards, with very soft neutral fills around #F3F3EF for metric cells.
- Use one restrained accent for active states, such as a pale lime #D7F56A, but adapt it to the product brand. Ensure accent text remains readable.
- Keep shadows minimal: use a soft shadow such as 0 12px 30px rgba(0,0,0,0.08) on the foremost UI card, with lighter shadows behind it.

### Borders and radius
- Use a 1px neutral border around the outer container and subtle dividers between list rows.
- Round the outer container generously, approximately 24–30px.
- Use 14–20px radius for dashboard cards and 8–12px radius for inner metric cells.
- Circular icon and arrow controls should be fully rounded. The active control can use a dark fill with a light icon; inactive controls should be white or transparent with a neutral outline.
- Avoid heavy outlines, gradients, or decorative borders.

### Interaction
- The feature list is an accordion. Clicking or tapping a row changes the active feature, expands its description, updates the icon/affordance state, and swaps or subtly transforms the visual proof on the right.
- Animate height, opacity, and card position smoothly over approximately 200–300ms using ease-out motion. Do not make the animation distracting.
- The active row should be clear through its expanded content and dark circular control, not through a loud background colour.
- Make the entire row keyboard accessible with visible focus styles, semantic buttons, and appropriate ARIA expanded/state attributes.
- On mobile, keep the visual stage wide enough to show the primary card; scale or crop secondary cards without causing horizontal page overflow.
- If implementation time is limited, build the first state completely and make the remaining rows functional with a simple visual-state swap.

### Content guidance
- Write feature titles as concrete user outcomes, not generic labels.
- Keep the active description to 2–3 short sentences.
- Create realistic but generic interface content that demonstrates the user's product category. Do not use placeholder lorem ipsum.
- Keep the visual panel supportive: it should explain the feature at a glance rather than compete with the accordion.

## Never
- Never copy the reference's product name, feature copy, labels, metrics, or exact wording.
- Never use logos, brand marks, product names, or proprietary iconography from the reference.
- Never reuse the reference's screenshots, photos, illustrations, imagery, or exact dashboard cards.
- Never reproduce the exact colour palette if it conflicts with the user's brand.
- Never make the section a static decorative mockup when the accordion interaction is visible; preserve the relationship between the selected feature and the visual proof.
- Never sacrifice accessibility, responsive behaviour, or readable contrast for visual similarity.
