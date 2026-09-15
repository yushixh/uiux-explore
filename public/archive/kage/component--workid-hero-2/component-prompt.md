## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106673-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106613949-full.webp
- Component on Kage: https://kage.design/component/workid-hero-2

# Build a centered verified-network hero section

## Before you start
Ask the user what their product does, who it is for, and what their brand identity is (including preferred colours, typography, tone, and CTA wording). Then apply the principles below to their product rather than reproducing the reference literally.

## Goal
Create a spacious landing-page hero that communicates trust, membership, and global reach. The section should feel calm and credible: a short headline establishes the proposition, supporting text clarifies the benefit, one primary action drives conversion, and a large visual proof point makes the network tangible.

## Structure and layout
- Use a white or near-white background with a single centered content column.
- Constrain the text block to approximately 620–700px so the headline remains readable and impactful.
- Add generous top padding, around 80–120px on desktop; reduce it to 56–72px on mobile.
- Stack the elements vertically: headline, supporting paragraph, primary CTA, then the visual panel.
- Use consistent center alignment for all text and the CTA.
- Place the visual panel 44–56px below the button. Keep it wide, approximately 900–1,050px on desktop, while allowing it to shrink to the viewport width on smaller screens.
- Make the visual panel overflow-hidden with a softly rounded rectangular shape. It may extend beyond the text column, but should remain aligned to the same overall page container.
- On mobile, preserve the hierarchy and spacing while reducing the visual height and simplifying the number of markers so the section does not become visually crowded.

## Typography hierarchy
- Use a modern sans-serif with a clean, neutral appearance.
- Headline: bold or semibold, approximately 30–34px on desktop, 26–30px on mobile, with 1.05–1.15 line-height and a restrained maximum width. Allow a deliberate two-line break when useful, but do not force awkward wrapping.
- Supporting copy: 16–17px, medium-grey, with approximately 1.45 line-height and a maximum width around 620px.
- CTA label: 14–16px, medium or semibold, with strong contrast and clear action language.
- Keep the visual hierarchy focused on one headline and one primary action; avoid adding secondary links inside this hero.

## Colour and visual language
- Base background: white or approximately #FFFFFF.
- Primary text: near-black, approximately #111111 or #151515.
- Supporting text: neutral grey, approximately #666666.
- Primary CTA: saturated trustworthy blue, approximately #347FE5 or #3B82E8, with white text.
- Map or network field: very pale blue-grey, approximately #F8FAFD, with mid-light blue marks around #A8C8F3.
- Verification/status accents: fresh green, approximately #35C759, used sparingly for small status indicators.
- Keep contrast accessible and do not use colour alone to communicate an essential status.

## Borders, radius, and depth
- Use a 14–22px radius for the large visual panel; use around 9–12px for the CTA.
- Give profile or proof markers a subtle white border and a restrained blue-grey outline or glow so they lift from the background.
- Avoid heavy shadows. If needed, use a soft shadow such as `0 4px 16px rgba(34, 87, 150, 0.16)` on profile cards and a very subtle panel shadow.
- Use thin, low-contrast borders around cards or markers, approximately #D7E4F5.

## Visual proof point
- Build an abstract geographic or distributed-network field below the CTA using CSS, SVG, canvas, or generated placeholder shapes. It should suggest worldwide reach without depending on a copied map asset.
- Use a subtle dotted, gridded, or connected-field treatment rather than a literal detailed map if the product does not need geographic specificity.
- Scatter a limited set of small profile/avatar cards or abstract identity nodes across the field. Vary position, scale, and visual treatment slightly while keeping the composition balanced.
- Give each node a small green verification/status badge where relevant. Use accessible labels or hidden text for meaningful status information.
- Keep the field decorative but purposeful: it should support the claim made by the headline, not compete with it.
- Use a gentle mask, fade, or crop at the panel edges so the visual feels like a designed continuation rather than a collection of isolated cards.

## Interaction and responsive behaviour
- The primary CTA should have a visible hover state: slightly darker blue, subtle elevation, and a quick 150–200ms transition.
- Add a keyboard focus ring with strong contrast; never remove the native focus indication without replacing it.
- If the profile nodes are interactive, make the hit areas generous and expose names/statuses via accessible labels. Otherwise, treat them as decorative and mark them accordingly.
- Keep animations restrained: a slow, subtle node pulse or fade-in is acceptable, but respect `prefers-reduced-motion`.
- Ensure the hero remains performant by avoiding excessive DOM nodes or large uncompressed imagery.

## Never
- Never copy the reference’s logo, product name, headline, supporting copy, CTA wording, or brand identity.
- Never reuse the reference’s exact map, avatars, profile photos, illustrations, or imagery.
- Never make the result look like a pixel-for-pixel recreation; reinterpret the composition for the user’s product and brand.
- Never overcrowd the hero with multiple competing CTAs, badges, navigation elements, or explanatory paragraphs.
- Never rely on unverifiable claims, fake testimonials, or decorative verification marks that could mislead users.
