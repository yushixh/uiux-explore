## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073809-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/drizzle-team/742c665e-9ce1-4c98-831f-72085091350d-1789073797-full.webp
- Component on Kage: https://kage.design/component/drizzle-team-logo-cloud

# Build a tiered sponsor logo cloud

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colours, typography, and sponsor or partner data are. Apply the principles below to my product rather than reproducing the reference component.

## Goal
Create a sponsor, customer, partner, or integration logo-cloud section that makes hierarchy immediately understandable. Give the most important tier a prominent, spacious presentation, while showing additional tiers as compact supporting groups. The component should feel like a practical directory rather than a decorative wall of logos.

## Structure and layout
- Add a small section header row above the cloud.
- Place an uppercase or compact eyebrow label on the left, such as a category name appropriate to the product.
- Add an understated text link on the right for a relevant action, such as applying, viewing all partners, or becoming a partner. Include a small arrow or chevron only if it fits the product's interaction language.
- Use a pale, full-width cloud container with generous horizontal padding and a shallow minimum height.
- Organise content into explicit tiers. The primary tier should occupy the largest visual area; secondary tiers can be narrower and denser.
- Use a flexible horizontal arrangement on desktop: a single prominent logo card for the top tier, a multi-column grid for the main tier, and a compact multi-column cluster for the smallest tier.
- Keep group headings aligned to the top of each tier and include a small visual marker or emoji-like category indicator only when the brand supports it. Prefer a simple icon, dot, or badge for a more professional product.
- On smaller screens, stack the tiers vertically or let each tier become a horizontally scrollable row. Never allow cards to become too narrow to read.
- If the secondary cluster is intentionally clipped, make the clipping feel deliberate: use a fade edge, horizontal scrolling, or a “view all” action rather than abruptly hiding content.

## Logo cards
- Use white cards against a very light neutral cloud background.
- Give the featured tier larger cards, approximately 108–140px wide and 112–132px tall depending on the logo aspect ratio.
- Use compact cards for supporting tiers, approximately 72–96px wide and 72–96px tall.
- Centre each logo within a generous visual area, with the partner name beneath it in a small, readable label.
- Preserve each logo's natural aspect ratio and provide a consistent maximum logo box, for example 48×48px for featured cards and 32×32px for compact cards.
- Keep logo treatment neutral: do not recolour logos unless the product's brand system explicitly requires it. Use `object-fit: contain` and ensure sufficient contrast.
- Use a 1px border around cards, approximately `#E2E2E2`, with a subtle radius of 3–6px. Avoid heavy shadows; if needed, use only a very soft shadow such as `0 1px 2px rgba(0,0,0,.04)`.
- Maintain consistent gaps, around 10–12px between cards and 8–12px between grid rows.

## Alignment and spacing
- Use a centred content container with a maximum width around 1160–1240px.
- Keep the section header aligned with the cloud container's left and right edges.
- Use roughly 20–28px of cloud-container padding on desktop and 16–20px on mobile.
- Leave 16–24px between the section heading and the logo area.
- Give the featured tier enough whitespace to feel important; supporting groups may use tighter spacing.
- Align card bottoms and text baselines wherever possible so the cloud feels orderly even when logos vary in shape.

## Typography
- Use a clean sans-serif font with a practical, developer-tool feel.
- Section eyebrow: 12–13px, medium or semibold, uppercase, with restrained letter spacing.
- Tier headings: 13–14px, semibold, in a dark neutral; use sentence case unless the product's voice calls for another treatment.
- Partner names: 12–14px, regular weight, centred, with a colour around `#4B4B4B`.
- Action link: 12–13px, semibold, using the product's accent colour.
- Keep line height around 1.3–1.45 and prevent long names from disrupting the grid by wrapping to two lines or using a tooltip/details view.

## Colour
Use the product's palette first. If no palette exists, start from this restrained base:
- Page background: `#FFFFFF`
- Logo-cloud background: `#F7F7F7` or `#F5F5F5`
- Card background: `#FFFFFF`
- Primary text: `#3F3F3F`
- Secondary text: `#666666`
- Borders: `#E2E2E2`
- Action/accent: a saturated brand colour, approximately `#2459A6` as a fallback
- Avoid adding colourful decoration around the logos; let the partner marks provide the visual variety.

## Interaction and accessibility
- Make cards links only when each logo leads to a meaningful destination; otherwise use non-interactive cards.
- Add visible hover and focus states: a slightly darker border, a subtle lift or background change, and a clear keyboard focus ring.
- Ensure action links and logo links have descriptive accessible names.
- Provide alt text for every logo, using the partner name, and do not rely on the logo alone to communicate the name.
- Respect reduced-motion preferences and keep any hover transition around 150–200ms.
- If a carousel or horizontal scroll is used, support keyboard navigation and expose an accessible label.

## Responsive behaviour
- Desktop: preserve the tiered composition with the featured tier, dominant grid, and compact supporting cluster visible together.
- Tablet: reduce card sizes and allow the smallest tier to move below the main grid if space is limited.
- Mobile: stack tier groups; use a two- or three-column grid for the main tier and a horizontal scroll row for a long supporting tier. Keep the header action reachable without causing overflow.

## Content guidance
Use the user's own sponsor, customer, partner, or integration names and approved logo assets. If assets are unavailable, use neutral placeholders with accessible labels and consistent geometry. The component should support an arbitrary number of items per tier without breaking alignment.

## Never
- Never copy the reference site's logos, product names, sponsor names, labels, or exact copy.
- Never use the reference site's brand identity, including its logo, typography, colour treatment, or distinctive iconography as a direct imitation.
- Never use illustrations, decorative imagery, or stock photography from the reference.
- Never squeeze logos into inconsistent or distorted boxes.
- Never create a dense, borderless logo wall that removes the tier hierarchy.
- Never hide clipped logos without a clear scroll, fade, or “view all” affordance.
- Never make the component dependent on a fixed number of logos or fixed-length names.
