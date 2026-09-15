## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/viso-now/0aea1f2c-e643-44c4-ac70-db26df0b3931-1789106577-7.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/viso-now/0aea1f2c-e643-44c4-ac70-db26df0b3931-1789106536289-full.webp
- Component on Kage: https://kage.design/component/viso-now-gallery-3

## Before you start
Ask the user what their product does, who it is for, and what their brand personality and visual identity are. Apply the principles below to their product and brand rather than reproducing this reference literally.

## Build this section
Create a responsive customer-story or content-gallery section for the user's website. It should feel editorial, spacious, premium, and easy to scan. The section combines a small eyebrow, a large two-tone headline, a short explanatory paragraph with a primary link-style button, and a horizontally scrolling row of content cards.

### Layout and alignment
- Use a full-width section with a centered max-width content container of roughly 1160–1240px on desktop.
- Add generous vertical whitespace above the section and between the intro and gallery; the reference uses a calm, open composition rather than a dense dashboard layout.
- Place the intro in a two-column layout: a wide left column for the eyebrow and headline, and a narrower right column for supporting copy and the call to action. Align the supporting column around the lower half of the headline block rather than forcing both columns to share a top baseline.
- Keep the headline left aligned and give it a maximum width that produces deliberate line breaks. On smaller screens, stack the columns with the supporting copy below the headline.
- Make the card gallery wider than the inner text container or allow it to bleed toward the viewport edges. Show several complete cards plus a clipped neighbouring card to communicate that more content is available.
- Use a horizontal track with consistent gaps. On mobile, make cards swipeable and avoid shrinking them until their text becomes difficult to read.

### Typography hierarchy
- Use a clean contemporary sans-serif, preferably the user's brand font or a close system fallback.
- Eyebrow: uppercase, small size around 11–12px, medium letter spacing, muted gray, with a tiny coloured dot or similarly restrained marker.
- Headline: bold or extra-bold, approximately 52–64px on desktop with tight line-height around 0.98–1.05. Use a short dark opening phrase followed by a longer muted-gray continuation to establish hierarchy. Scale to roughly 36–44px on mobile.
- Supporting paragraph: 15–17px, line-height around 1.45–1.6, dark gray rather than black, and limited to a comfortable reading width.
- Card title: bold, approximately 20–23px, with a compact line-height and enough height for two or three lines.
- Card description: 14–16px, muted gray, line-height around 1.45–1.55.
- Card action: 14–15px, semibold, dark text with a small directional arrow.

### Colour
- Use a warm or neutral near-white page background, approximately #FFFFFF or #FCFCFB.
- Use near-black for primary headings and actions, approximately #08090B.
- Use a cool medium gray for secondary headline text, approximately #74787B, and a softer gray such as #6E7073 for supporting copy.
- Use a small accent marker that fits the user's brand; a vivid pink-magenta around #D947A6 is an example, not a requirement.
- Keep imagery vivid but contained within the card system. Do not add decorative gradients unless they are part of the user's own brand.

### Cards and surfaces
- Use cards around 270–300px wide and approximately 455–480px tall on desktop, adjusting to the content while keeping every card in the row visually consistent.
- Give each card a white surface, a subtle 1px border around #E6E6E4, a soft shadow such as 0 10px 24px rgba(20, 20, 20, 0.06), and a radius around 16–18px.
- Place a fixed-ratio image at the top of each card, roughly 16:10 or 4:3, with the top corners matching the card radius. Use object-fit: cover and prevent image distortion.
- Keep the lower content area padded around 20px. Use flex layout so the read-more action sits at the bottom of cards even when descriptions have different lengths.
- Preserve a clear separation between image, title, description, and action without adding heavy dividers.

### Interaction and responsive behaviour
- Make the entire card or its read-more control keyboard accessible, with visible focus states.
- Support horizontal drag or touch scrolling, and optionally use previous/next controls if they suit the user's product. Do not let controls compete with the editorial headline.
- On hover, use a restrained lift or shadow increase and a subtle image scale such as transform: scale(1.02); keep transitions around 180–250ms.
- Ensure clipped cards do not create unwanted horizontal page overflow; constrain overflow to the gallery viewport.
- On mobile, stack the intro, reduce the headline size, use one card per view with a small portion of the next card visible, and maintain at least 16–24px side padding.
- Respect reduced-motion preferences by disabling transforms and animated scrolling when requested.

### Content model
- Use original, product-relevant placeholder content for the user's brand. Each card should include an image, a concise outcome-focused title, a two- or three-sentence description, and a short action such as “Read story” or an equivalent in the user's voice.
- Vary the card imagery and industries or use cases while keeping the metadata and card anatomy consistent.

## Never
- Never copy the reference's logos, product names, customer names, exact copy, statistics, or branded language.
- Never reuse the reference's illustrations, photography, screenshots, or other imagery; use original assets or clearly marked neutral placeholders.
- Never reproduce the exact layout proportions, card content, headline wording, or visual identity as a clone.
- Never make the carousel inaccessible, trap keyboard focus, or rely on hover as the only way to discover actions.
- Never add unnecessary UI chrome, dense controls, or decorative elements that weaken the whitespace and editorial hierarchy.
