## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060911-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-stats

## Before you start
Ask the user what their product is, who it is for, and what visual brand it uses. Then apply the principles below to their product rather than reproducing the reference literally.

## Build this section
Create a responsive, editorial-style statistics section that communicates product adoption and momentum. Use original copy and data relevant to the user's product.

### Layout and alignment
- Place the section inside a wide, centered container with generous horizontal padding; use roughly 88–96px side padding on desktop and 24px on mobile.
- Give the section substantial vertical breathing room, approximately 140–190px on desktop.
- Align the content to a consistent left column. Start with a short headline, followed by a supporting paragraph constrained to about 560–640px so it remains easy to scan.
- Stack three metric blocks beneath the paragraph with even vertical spacing. Each block contains a small descriptive label and a prominent value directly below it.
- Set a large, low-contrast area chart behind or beside the metrics, spanning toward the right edge. It should rise gradually from lower left to upper right and remain subordinate to the text.
- Include compact previous/next arrow controls near the upper center or upper-right of the section if the content is part of a carousel. Use real buttons with accessible labels, keyboard focus states, and disabled states where appropriate.
- On smaller screens, move the chart below the metrics or let it occupy the full section width behind them; prevent text from colliding with the chart.

### Typography hierarchy
- Use a clean modern sans-serif with a slightly dense, confident appearance.
- Headline: bold, near-black, approximately 32–36px on desktop, 28–32px on mobile, with tight line-height around 1.05–1.15.
- Supporting copy: muted gray, approximately 17–19px with 1.45–1.6 line-height.
- Metric labels: 13–14px, medium weight, muted gray, with a little extra tracking if needed.
- Metric values: bold and highly legible, approximately 44–52px on desktop and 36–42px on mobile, with tight line-height.
- Keep the hierarchy driven by scale and weight rather than decorative treatments.

### Colour and chart treatment
- Use a warm off-white or white background around #FCFBF9 to #FFFFFF.
- Use near-black text around #171717 and secondary text around #626262.
- Draw the chart line with a restrained multi-colour gradient, for example transitioning through soft blue #9CCBFF, lilac #B79BFF, pink #F08BAE, and warm yellow #F2B94B.
- Fill the area beneath the line with a very low-opacity version of the same gradient, fading almost completely into the background near the bottom.
- Keep the chart translucent and low contrast so the metrics remain the primary content. Avoid axes, labels, gridlines, legends, and other dashboard-like clutter unless the user's product genuinely requires them.

### Borders, controls, and shape
- Use subtle 1px borders around arrow controls, approximately #E5E3DF, with a very light shadow such as 0 2px 8px rgba(0,0,0,.04).
- Give controls a small-to-medium radius around 8px, a white or near-white fill, and a 44–48px hit area.
- Keep the rest of the section largely borderless and calm.
- Use an SVG or CSS-generated chart so the line and gradient scale cleanly across screen sizes. Make the chart decorative when it does not convey essential information, using an appropriate accessibility label or hiding it from assistive technology.

### Interaction and motion
- Arrow controls should change the visible stat set or chart state with a short, subtle transition.
- If animating the chart on entry, use a slow 700–1100ms line-draw or opacity reveal; avoid distracting loops.
- Respect `prefers-reduced-motion` and preserve all information without animation.
- Add a clear `:focus-visible` outline to interactive controls and ensure sufficient colour contrast.

## Never
- Never copy logos, product names, branded language, exact copy, or exact numerical claims from the reference.
- Never reuse the reference illustration, chart path, imagery, or any other distinctive visual asset; create an original chart shape and content.
- Never make the section depend on a fixed desktop width or allow the chart to obscure important text.
- Never turn the component into a dense analytics dashboard with unnecessary axes, legends, gridlines, or decorative controls.
