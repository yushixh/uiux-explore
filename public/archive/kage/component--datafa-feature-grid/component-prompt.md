## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067841-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/datafa-st/3396b937-0925-4898-ae76-13fd2ccd1a9f-1789067801-full.webp
- Component on Kage: https://kage.design/component/datafa-feature-grid

# Build a three-step feature pathway section

## Before you start
Ask me what my product does, who it is for, and what its visual brand should feel like. Then apply the principles below to create an original version for my product—not a reproduction of the reference.

## Goal
Create a spacious, conversion-oriented “how it works” section that explains a product in three sequential steps. The experience should feel simple, trustworthy, and easy to scan, with a strong visual rhythm from left to right.

## Structure
- Use a warm off-white page background, approximately `#faf9f7` or `#fbfaf8`.
- Center the entire section within a wide max-width container of roughly `1180–1280px`.
- Add generous vertical breathing room: approximately `96–140px` above the section heading and `72–104px` below the card row.
- At the top, place a small uppercase eyebrow with modest letter spacing and a muted warm accent colour.
- Below it, place one large, bold, centered headline expressing the product outcome and the number of steps. Keep the line length controlled so it remains a strong visual block.
- Under the heading, create three equal-width cards in a horizontal row with consistent gaps. Use directional arrows or subtle connectors between cards to communicate sequence, but keep them visually secondary.
- Each card should have two zones:
  1. A fixed-height visual area at the top, approximately `190–205px`, for a product-specific UI mockup, diagram, code fragment, or abstract interface preview.
  2. A white text area with a step number, concise title, and two-to-three-line explanation.
- Place a compact primary CTA centered below the cards. It can combine a short input field and button when the product benefits from a URL, workspace, or account-start flow; otherwise use a single prominent button.
- Add a small reassurance line below the CTA, such as a trial, setup, or risk-reversal message.

## Layout and alignment rules
- Keep the eyebrow, headline, cards, CTA, and reassurance line aligned to one central vertical axis, while allowing the card row to span the container.
- Cards should be equal height and their lower text sections should align perfectly.
- Use a 12-column or flex/grid layout with three equal columns on desktop.
- On tablet, reduce gaps before reducing card width. On mobile, stack cards vertically and place connectors between them as vertical arrows or omit them if they create clutter.
- Maintain comfortable horizontal padding of `20–32px` inside cards and at least `20px` page padding on small screens.

## Typography
- Use a clean contemporary sans-serif with a slightly heavy display weight; use the product’s existing font if available.
- Eyebrow: `12–14px`, uppercase, medium weight, letter spacing around `0.06em`.
- Main heading: approximately `44–52px` desktop, `34–40px` tablet, and `30–36px` mobile; use a `700–800` weight and tight line-height around `1.05–1.12`.
- Card titles: `18–20px`, semibold or bold, with clear step numbering.
- Card descriptions: `15–16px`, regular weight, line-height around `1.55–1.7`, in a softened grey.
- CTA text: `14–16px`, semibold.

## Colour and surfaces
- Page background: warm near-white, approximately `#faf9f7`.
- Card surface: white, approximately `#ffffff`.
- Primary text: near-black, approximately `#202022`.
- Secondary text: neutral grey, approximately `#686868`.
- Eyebrow and occasional accents: muted terracotta or coral, approximately `#b87863`.
- Primary CTA: vivid coral-orange, approximately `#ed6845`, with white text; adjust to the product brand when supplied.
- Visual areas may use darker panels, soft grey backgrounds, coloured interface tiles, or product-relevant data displays, but they should remain coherent across all three cards.

## Borders, shadows, and radius
- Use a subtle light grey border around each card, approximately `#e6e5e2`.
- Apply a restrained layered shadow or outer highlight to make the cards feel tactile without looking glossy, for example `0 2px 0 rgba(0,0,0,.04)` plus `0 4px 14px rgba(0,0,0,.05)`.
- Use rounded corners around `16–20px` for cards, with the visual area clipped to the top corners.
- Keep the CTA input and button at approximately `10–12px` radius. Avoid excessive pill shapes unless they are part of the brand.
- Directional arrows should be thin, simple, and low contrast, around `#77736f`.

## Visual content
- Make each visual preview directly support its step: installation/setup can use a code or configuration panel; connection can use several integration tiles or a linking diagram; outcome can use a compact dashboard, chart, or result state.
- Build these previews with HTML/CSS or lightweight inline SVG where possible so they are responsive and accessible.
- Avoid decorative imagery that does not explain the workflow. The visual should be legible at card size and should not overpower the text.

## Interaction and responsive behaviour
- Cards may lift by `2–4px` on hover with a slightly stronger shadow and a smooth `160–220ms` transition.
- Keep hover effects subtle and do not shift surrounding layout.
- Buttons and inputs need visible focus states using a contrasting ring.
- Ensure keyboard navigation, semantic headings, accessible labels, and sufficient colour contrast.
- Preserve the sequence on mobile: step one, connector, step two, connector, step three, then CTA.

## Never
- Never use logos, product names, copy, illustrations, screenshots, icons, or imagery from the reference.
- Never copy the reference’s exact text, visual assets, brand marks, or interface details.
- Never make the cards visually dependent on inaccessible images.
- Never overcrowd the section with extra features, badges, or competing calls to action.
