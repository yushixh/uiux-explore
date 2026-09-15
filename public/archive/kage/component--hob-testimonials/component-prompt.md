## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106504-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/hob/bb3af585-7542-45f5-8db1-3e25168b9aff-1789106472876-full.webp
- Component on Kage: https://kage.design/component/hob-testimonials

# Before you start
Ask the user what their product is, who the testimonials are for, and what visual identity or brand system should guide the work. Then apply the principles below to create a version for their product—not a copy of the reference.

## Goal
Build a testimonials section for a modern software product page. The component should make substantial customer quotes feel trustworthy and easy to scan, with enough space for authentic detail and a clear relationship between each quote and its author.

## Design language

### Layout and alignment
- Use a full-width section inside a centered page container, with approximately 24px horizontal padding on small screens and 48–64px on larger screens.
- Arrange testimonials in a two-column grid on desktop. Let each card stretch to a shared row height so the section feels orderly even when quotes have different lengths.
- Keep the quote text aligned to the top-left of each card.
- Anchor the author metadata to the bottom-left of every card using a flex column or grid structure; this creates a stable visual baseline and gives the quote room to breathe.
- Use a single column below roughly 720px, preserving the same internal hierarchy and generous card height without forcing awkward side-by-side reading.
- Place the next page section clearly below the cards with a substantial transition gap. The testimonial section should feel like a complete band rather than a loose collection of quotes.

### Typography hierarchy
- Use a clean, modern sans-serif with strong readability and a slightly dense product-design feel.
- Render quotes in a large, medium-to-semibold weight, approximately 22–28px on desktop with a 1.25–1.4 line-height. On mobile, reduce to approximately 18–21px while keeping the quote visually prominent.
- Use normal quotation marks or another understated quote treatment; do not rely on oversized decorative quotation marks.
- Set author names in a compact semibold style around 14–16px.
- Set role and company metadata around 13–14px in a muted colour, with a subtle slash or dot separator if useful.
- Avoid uppercase tracking-heavy labels unless the user's brand specifically calls for them.

### Spacing and sizing
- Give each card approximately 32–40px of internal padding, increasing toward 48px on large screens if the quote length benefits from it.
- Use a minimum card height of roughly 320–380px on desktop, but allow content to expand naturally for longer testimonials.
- Keep 20–28px between the quote and the author row when the card uses a flexible layout.
- Use a 20–28px gap between grid columns and rows.
- Separate avatar, name, and metadata with restrained spacing: around 12px between avatar and text, 3–6px between name and role line.

### Colour and surfaces
- Use a warm off-white or very light neutral page background, approximately #FFFFFF to #FAFAF9.
- Give cards a subtly tinted neutral surface, approximately #F5F5F4 or #F3F3F2, so they read as quiet panels without looking like floating dashboard widgets.
- Use near-black text around #111111 or #171717.
- Use muted secondary text around #737373 or #6B6B6B.
- Keep contrast accessible; the muted metadata must remain legible against the card surface.
- If the product has a stronger brand colour, reserve it for small accents or interactive states rather than filling the cards.

### Borders, radius, and imagery
- Prefer no visible border, or use an extremely subtle 1px border around #EEEEEC when the surrounding background needs more separation.
- Use a small-to-medium corner radius, approximately 8–12px. The cards should feel practical and editorial, not overly soft or playful.
- Use small circular author avatars, approximately 40–44px square, with object-fit cover and a neutral fallback when no image exists.
- Keep avatar treatment understated; avoid rings, gradients, badges, or decorative overlays.

### Interaction and responsive behaviour
- Testimonials are primarily a reading component, so do not add unnecessary carousels, autoplay, or pagination.
- If testimonials are interactive, use a deliberate “show more” pattern or accessible carousel controls with visible focus states; never hide essential quote content behind hover.
- Add a subtle card lift or border-colour change only if the cards link somewhere, using a short 150–200ms transition.
- Ensure long names, roles, and companies wrap cleanly without overlapping the avatar or card edge.
- On mobile, stack cards vertically, preserve the author row at the bottom of each card, and reduce padding only enough to maintain comfortable reading.
- Respect reduced-motion preferences.

## Content guidance
- Use authentic-sounding, specific testimonials that describe an outcome, workflow improvement, or meaningful change—not generic praise.
- Keep each quote to roughly 2–5 lines on desktop where possible, while allowing longer quotes when they provide useful proof.
- Include an author name, role, and organisation or relevant context. Use neutral placeholder content if the product has no testimonials yet.

## Implementation notes
- Build the section with semantic HTML: a section element, a list or grid of testimonial articles, blockquote content, and a footer or attribution row for each author.
- Use CSS Grid for the desktop layout and a responsive breakpoint for stacking.
- Keep the component independent from any specific framework, but make it easy to translate into React, Vue, or the user's chosen stack.
- Include accessible alt text for avatars and visible keyboard focus styles for any links or controls.

## Never
- Never copy the reference site's logos, product names, testimonial copy, author names, company names, or brand-specific wording.
- Never reproduce any reference imagery, portraits, illustrations, or decorative assets; use original assets, user-provided assets, or neutral placeholders.
- Never make the cards visually identical to the reference through copied spacing, exact dimensions, or distinctive styling; reinterpret the principles for the user's product and brand.
- Never add fake endorsements, unverifiable claims, or invented customer identities without clearly marking them as placeholders.
- Never sacrifice readable text contrast or responsive behaviour for visual resemblance.
