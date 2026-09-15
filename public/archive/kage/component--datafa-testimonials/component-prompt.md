## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067840-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067801-full.webp
- Component on Kage: https://kage.design/component/datafa-testimonials

## Before you start
Ask the user what their product is, who it is for, and what their brand personality and visual system are. Then apply the principles below to create an original testimonial section for that product—not a copy of the reference.

## Build a testimonial masonry wall
Create a responsive section that presents customer testimonials as a collection of social-post-inspired cards. The goal is to make the proof feel recent, abundant, and unfiltered: users should feel they are browsing real customer reactions rather than reading manufactured marketing quotes.

### Layout and alignment
- Use a wide, centered section with a horizontal masonry-style grid of testimonial cards.
- On large screens, show approximately four columns, with the outermost column allowed to be partially cropped or overflow the viewport to suggest a larger collection.
- Let cards have different heights based on their content and media; do not force every card into the same height.
- Arrange cards in two or more staggered rows, with consistent column widths and a small, even gutter.
- Keep the section visually dense but breathable. Align the card edges to an underlying grid even when card heights vary.
- On tablet, reduce to two or three columns; on mobile, use one column or a horizontally scrollable rail with clear touch affordance.
- Avoid a conventional carousel treatment with one oversized quote. The collection itself is the component's main visual statement.

### Card anatomy
Each card should resemble a lightweight social post while remaining clearly native to the user's product:
- Header: circular avatar, bold display name, verified or trust indicator when appropriate, handle or role in a quieter style, and a compact social/action glyph at the far right.
- Body: natural-language testimonial with short paragraphs, line breaks, mentions, bullets, or emphasis where useful. Preserve an informal voice.
- Optional media: product screenshot, analytics view, customer result, or other user-provided proof image. Media should sit inside the card with a modest radius and crop naturally without becoming the focal point over the testimonial.
- Footer: subdued timestamp or context on one line, then lightweight engagement metadata such as likes, replies, shares, or a link action. Use icons plus numbers sparingly.
- Include a mix of text-only cards, image-supported cards, and cards with longer narrative copy so the masonry rhythm feels organic.

### Typography
- Use the product's own typeface if available; otherwise use a clean sans-serif system stack.
- Use 14–16px body text with approximately 1.35–1.5 line height for legibility inside compact cards.
- Use 14–15px semibold text for names and 12–13px regular text for handles, timestamps, and metadata.
- Keep testimonial text darker and more prominent than the surrounding metadata.
- Do not overuse large quotation marks, oversized headings, or decorative display typography; authenticity comes from the post structure and content.

### Colour
- Start from the product's brand palette, but keep the testimonial wall mostly neutral so the content feels credible.
- Use a warm off-white or very light neutral page background, approximately `#FAFAF8` or `#F8F9FA`.
- Use white or near-white card surfaces, approximately `#FFFFFF`.
- Use a near-black primary text colour such as `#171717`, with muted metadata around `#6B7280`.
- Use a very light neutral border around `#E5E7EB`.
- Reserve the brand accent for verified indicators, mentions, links, reaction icons, or subtle highlights. Keep accents restrained; the wall should not look like a colourful dashboard.
- If the product has a dark brand, invert the neutrals carefully while preserving clear card separation.

### Borders, radius, and depth
- Give each card a 1px low-contrast border and a moderate radius, roughly 16–20px.
- Use a very soft shadow only if needed, such as `0 2px 8px rgba(15, 23, 42, 0.04)`; avoid floating, glossy cards.
- Use 16–20px internal padding, with slightly tighter spacing in the footer.
- Apply 10–14px radius to embedded media so screenshots feel contained within the card.
- Keep dividers minimal or omit them; whitespace should separate the card regions.

### Spacing and rhythm
- Maintain a compact 8px-based spacing system.
- Leave roughly 32–56px between the section heading or intro and the card wall if a heading is included.
- Use 8–12px between avatar/header elements, 14–20px between header and body, and 16–20px between body, media, and footer depending on content.
- Vary card height through content, not arbitrary decoration.
- Ensure cards never feel cramped: long testimonials should have enough vertical breathing room and media should not force text below an uncomfortable fold.

### Interaction and responsive behaviour
- Cards can lift by 2–4px and gain a slightly stronger shadow or border colour on hover, with a quick 150–200ms transition.
- Links, handles, mentions, and footer actions should have visible hover and focus states using the product accent.
- If the wall is interactive, make each card or its source action open the original testimonial or a detail view; do not make decorative metadata appear clickable.
- Support keyboard focus with a clear 2px outline and preserve visible focus states.
- On mobile, prioritize readable text and touch targets of at least 44px. Do not shrink typography below comfortable reading sizes just to fit more columns.
- Lazy-load media where appropriate, preserve image aspect ratios, and provide meaningful alt text.

### Content direction
- Use realistic but original customer voices relevant to the user's product.
- Mix concise praise, specific outcomes, small anecdotes, and practical observations.
- Include enough context—name, role, handle, company type, or date—to make each post feel trustworthy, but do not fabricate claims that the user's product cannot support.
- If real testimonials are unavailable, use clearly replaceable placeholder content and image slots.

## Never
- Never copy the reference's logos, product names, usernames, names, timestamps, testimonial wording, screenshots, interface details, or brand-specific icons.
- Never reuse the reference's exact card arrangement, media, imagery, or visual identity.
- Never imply that placeholder people or quotes are real customers.
- Never make every card identical in height or turn the wall into a generic three-card quote section.
- Never use decorative illustrations or stock imagery in place of authentic testimonial content.
- Never sacrifice readability, accessibility, or responsive behaviour for visual density.
