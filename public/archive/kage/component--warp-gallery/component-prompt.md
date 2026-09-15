## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060389-6.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/warp-dev/0d3838c7-307f-484a-8c23-3188eaa6f6f5-1789060312-full.webp
- Component on Kage: https://kage.design/component/warp-gallery

## Before you start
Ask the user what their product is, who it is for, and what visual brand it uses. Then apply the principles below to their product and brand rather than reproducing this reference literally.

## Build an enterprise customer-story gallery
Create a responsive website section that introduces enterprise credibility and presents a small set of customer case studies in an editorial gallery.

### Structure and layout
- Use a full-width section with a very light warm-white or cool-white background and a subtle technical grid or dotted canvas behind the content.
- Keep the content inside a centered max-width container of approximately 1120–1200px, with generous horizontal padding on smaller screens.
- Add a compact top accent band across the viewport in the brand’s strongest accent colour. Keep it visually simple; a subtle dot or grid texture is acceptable.
- Start the section with a heading and supporting paragraph aligned to the same left edge as the gallery below. Leave generous space above this introduction.
- Use a two-column case-study grid on desktop with a narrow, consistent gutter. Collapse to one column on tablet and mobile.
- Each case study should contain, in order: a large media frame, a bold story headline, a short explanatory paragraph, and a small text link or action.
- Let the media frames have a consistent aspect ratio, around 16:9 or 1.8:1, and crop content with `object-fit: cover`.
- Finish the section with clear vertical separation before the next content block. If the page continues with another theme or section label, keep that transition understated.

### Alignment and spacing
- Use an 8px spacing system with larger section intervals: approximately 72–112px around the section, 28–36px between intro elements, 18–24px between image and headline, and 8–12px between paragraph and link.
- Align every text element to the gallery’s left edge; avoid centered card copy.
- Keep both gallery columns equal in width and ensure their images share the same height.
- On mobile, reduce section padding while preserving clear separation between stories.

### Typography
- Use a modern grotesk or technical monospace-inspired type system that suits the user’s brand. A distinctive monospace or semi-monospace face can be used for headings and labels, but maintain readability.
- Make the main heading large and assertive, approximately 32–40px desktop with tight line-height around 1.05–1.15. Use sentence case or a short declarative phrase.
- Make the supporting paragraph 14–16px with a relaxed 1.45–1.6 line-height and a maximum width of roughly 600px.
- Use case-study headlines at approximately 16–19px, medium to bold weight, with a compact line-height around 1.2–1.35.
- Use body copy at 13–15px with comfortable line-height. Keep it slightly quieter than the headline.
- Style the small link as a compact text action, optionally prefixed by a simple terminal-like marker such as `>` or another brand-appropriate symbol. Do not use a large button for this interaction.

### Colour and surface treatment
- Use an off-white base around `#FBFBF8` or adapt it to the user’s brand neutrals.
- Use near-black text around `#16161A` for primary headings and a softened charcoal such as `#5F6068` for supporting copy.
- Use a saturated accent around `#3024E8` for the top band, labels, links, or selected emphasis; derive the exact accent from the user’s brand.
- Build the background texture with extremely low-contrast dots or 1px grid lines, for example `rgba(40, 40, 70, 0.08)`, so it is felt rather than read.
- Keep customer media visually dominant. If text overlays are needed, add a subtle dark or light gradient for legibility without obscuring the image.

### Borders, radius, and media
- Prefer sharp or minimally rounded geometry: use 0–4px radius for media and cards unless the user’s brand clearly calls for softer surfaces.
- Avoid heavy card containers. Let the gallery breathe directly on the patterned background, using spacing and alignment instead of shadows.
- Use a thin divider, approximately `1px solid rgba(20, 20, 30, 0.14)`, only where it helps separate major regions.
- Do not add prominent drop shadows, floating badges, or excessive decorative chrome.

### Interaction and responsive behaviour
- Make each story link and, if appropriate, the entire story card keyboard accessible, with a clear visible focus state.
- On hover, use a restrained interaction: slightly increase image contrast, apply a subtle scale such as `scale(1.015)`, or shift the link colour. Keep transitions around 180–240ms and respect `prefers-reduced-motion`.
- Preserve readable link affordances without requiring hover.
- Ensure the two-column layout becomes a single-column flow before content becomes cramped, with media remaining prominent on mobile.
- Provide meaningful alt text for customer imagery and maintain sufficient colour contrast.

### Content guidance
- Write original, product-specific enterprise positioning and case-study copy based on the user’s product.
- Include a short, credible outcome or use case for each customer story, but avoid unsupported claims.
- Keep the number of stories modest—two to four—so the section reads as curated proof rather than a dense directory.

## Never
- Never copy the reference’s logos, customer names, product names, headlines, body copy, or links.
- Never reuse the reference’s imagery, photography, illustrations, or branded visual assets.
- Never reproduce the exact text, layout proportions, colour values, or decorative treatment as a pixel-for-pixel copy.
- Never invent customer endorsements, performance metrics, or enterprise claims without user-provided evidence.
- Never hide essential story information behind hover-only interactions.
