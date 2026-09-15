## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/wealthfront-com/f6aa53aa-f7fe-43a8-962e-3012dce442a0-1789146503250.webp
- Design on Kage: https://kage.design/designs/wealthfront-og-image

## Before you start
Ask the user what product or brand this social card is for, who the audience is, what single message it should carry, and what brand assets already exist (name, logo, brand colours, typefaces). Wait for the answers — everything below is applied to *that* product, not the reference. If no assets exist, use a placeholder brand name and neutral placeholder copy.

Deliverable: one self-contained HTML file with a fixed 1200×630 canvas (render to PNG via a headless browser), or a standalone SVG of the same dimensions. All text must be real selectable text; the phone UI is built in HTML/CSS, not a screenshot.

## Page structure
1. **Canvas & background** — 1200×630, flat edge-to-edge brand colour base (`#4E42C6`) with a radial gradient bloom (lighter `#5B4FD4`) centred behind the headline zone and darkening toward the corners (`#3D33A6`). One large curved sweep — a subtle ellipse arc in a slightly lighter violet — crosses the lower third from bottom-left toward the right edge. That curve is the only decorative element.
2. **Wordmark zone** — top-left, ~64px from the top and left edges: a small logo mark plus wordmark in white, roughly 28px tall. It is the smallest element and anchors the brand first.
3. **Headline block** — left column at the same left margin, vertically centred around 45–60% of canvas height. Two lines: the primary statement in ultra-bold sans, the second line in an italic serif at the same optical size, white, tight leading, first line allowed to hang slightly left of the second's start. This carries the message and nothing else — no subhead, no CTA button, no URL.
4. **Product mockup zone** — right ~40% of the canvas: a phone frame (~330px wide) rotated 6–10° clockwise, near-black bezel, white screen showing a real scaled-down version of the product: one hero balance figure with a small context line, a compact area chart with a single event pin, then 3–4 account/list rows (icon, label, sub-label, right-aligned tabular amount) separated by hairlines. Let the device either float with a soft shadow or crop off the right edge — pick one and stay consistent.
5. **Nothing else** — no badges, no legal text, no secondary imagery.

## Design language
- **Hierarchy is three levels only**: brand mark (small) → headline (dominant) → product proof (secondary focal, right). The reading path is wordmark → headline → device; nothing competes.
- **Colour discipline**: one saturated brand colour owns the canvas (`#4E42C6` family); white `#FFFFFF` for all foreground type; all other colour lives *inside* the product UI — dark ink `#1A1A22`, muted gray `#8B8B94`, lavender chart fill `#E9E7FB`, chart line `#6C5CE7`. The contrast mechanism is the white-on-dark-brand screen popping off the saturated background.
- **Type pairing**: heavy geometric grotesque at ~800 weight with −2% tracking for the primary line; a high-contrast italic serif at ~500 weight for the supporting line. Same optical size for both (~110–120px on the 1200px canvas). The mix reads as "solid statement + human voice".
- **Composition & rhythm**: generous negative space; left half is type, right half is object. The small rotation of the device breaks the grid just enough to feel dynamic while the layout stays calm.
- **Mockup realism**: large corner radius (~40px), near-black bezel (`#17171C`), and a UI that uses real product content — a hero number, a chart, a few rows with right-aligned tabular figures and hairline dividers — never lorem or empty boxes.
- **Depth & shadow**: a single soft ambient shadow under the device (e.g. `0 40px 80px rgba(20,15,60,0.45)`); background depth comes only from gradient + curve, no patterns or textures.
- **Motion**: none — it is a static card. If an animated variant is requested, restrict it to a slow background gradient shift.

## Never
- Never reuse the reference product's name, wordmark, logo mark, or its headline copy — invent branding and copy from the user's answers or neutral placeholders.
- Never reproduce the specific account names, labels or dollar amounts visible in the reference UI; substitute the user's own product data or plausible placeholder content.
- Never present the result as the reference brand's card or imply any affiliation.
