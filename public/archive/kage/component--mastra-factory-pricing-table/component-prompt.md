## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106664-4.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106606408-full.webp
- Component on Kage: https://kage.design/component/mastra-factory-pricing-table

## Before you start
Ask the user what their product does, who the plans are for, and what their brand personality and visual identity are. Then apply the principles below to create an original pricing-table section for their product—not a literal recreation of any reference.

## Design language

Build a responsive three-tier pricing table for a dark SaaS or developer-product website. The section should feel premium, technical, and calm, with strong scanability and clear plan progression.

### Layout and alignment
- Place the component in a near-black full-width section with a generous top and bottom inset.
- Add an optional compact section header above the cards: a short sentence on the left and a secondary “view full pricing” text link on the right. Keep this row aligned to the card grid and allow it to wrap on narrow screens.
- Use three equal-width cards in a centered grid with approximately 24px gaps. Constrain the overall content to roughly 1200–1280px.
- Each card should use a vertical flex layout so the CTA remains aligned to the bottom, even when descriptions or feature lists differ in length.
- On tablet and mobile, collapse to one column or a horizontally scrollable card row based on the product’s needs; preserve readable minimum widths and avoid cramped text.
- Within each card, use consistent horizontal padding of about 38–40px on desktop and 24px on mobile.

### Card anatomy
- Give every plan a small plan name, a supporting one-line audience descriptor, a prominent price area, a feature list, and a full-width CTA.
- Use a fixed or naturally balanced card height, with flexible empty space before the CTA rather than uneven button positions.
- Separate the price area from the features with a thin horizontal divider. Feature rows may use additional subtle dividers when values need to be compared.
- Keep feature copy short. When a feature has an included allowance and an overage rate, align the allowance to the left and the rate to the right on the same row.
- For enterprise-style plans, replace the numeric price with a concise “custom pricing” label and use a short paragraph for the offer details.

### Typography hierarchy
- Use a clean contemporary sans-serif, with a slightly technical feel if it fits the user’s brand.
- Plan names: 22–25px, semibold or bold.
- Supporting descriptors: 15–16px, regular, muted.
- Price: 30–34px, semibold or bold; make the unit suffix smaller at roughly 14–16px.
- Feature text: 14–15px, medium, with comfortable 1.4–1.5 line-height.
- CTA labels: 13–14px, semibold.
- Keep most text left-aligned; center only if the surrounding product brand strongly calls for it.

### Colour
- Base section: approximately #070707 or #080808.
- Standard card: approximately #111111, with a subtle border around #292929.
- Primary text: #F2F2F2; secondary text: #929292; divider lines: rgba(255,255,255,0.10).
- Give the middle or recommended tier a very subtle dark green gradient, for example #101A12 near the top blending toward #073B12 at the bottom. Use a restrained green accent around #6FEA7B for its plan name or supporting text.
- Give an enterprise tier a restrained deep blue-teal gradient, for example #11191B blending toward #0B202B, with a cool blue accent around #6CC8F4.
- Keep the free tier mostly neutral so the colour accents establish hierarchy without overwhelming the table.
- Use a light neutral CTA fill around #E4E4E4 with near-black text for emphasized actions; use a dark filled or transparent CTA around #1D1D1D for the neutral tier.

### Borders, radius, and depth
- Use rounded cards with approximately 34–40px corner radius.
- Use 1px borders with low-contrast neutral tones; slightly brighten the border of emphasized tiers.
- Use minimal shadowing. Depth should come primarily from the gradients, borders, and contrast rather than glossy effects.
- Use pill-shaped buttons with 999px radius, approximately 44px tall, and a subtle hover transition.

### Interaction and accessibility
- Make the entire CTA area easy to target, with visible hover, focus-visible, and pressed states.
- On hover, slightly raise or brighten the card only if it does not disrupt comparison; never make cards jump unpredictably.
- Use clear focus rings with sufficient contrast against the dark background.
- Ensure keyboard navigation follows the visual order and all buttons have action-specific labels.
- Preserve strong contrast for muted text and do not communicate plan status through colour alone.

## Never
- Never copy logos, product names, plan names, pricing, feature copy, or calls to action from the reference.
- Never reuse the reference’s exact gradients, proportions, wording, or visual branding as a one-to-one recreation.
- Never include illustrations, decorative imagery, or branded graphics from the reference.
- Never make the cards so visually ornate that users cannot compare prices and features quickly.
- Never omit responsive behaviour, semantic headings, accessible button states, or a clear recommended-tier treatment when the product has a preferred plan.
