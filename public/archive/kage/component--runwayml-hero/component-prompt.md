## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074881-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/runwayml-com/e724fd81-b6a6-43a2-b9ac-10cfe806f6fa-1789074862354-full.webp
- Component on Kage: https://kage.design/component/runwayml-hero

## Before you start
Ask what the user's product is, who it is for, and what visual brand system it uses. Then apply the principles below to create an original hero section for that product—not a copy of the reference.

## Build this section
Create a full-width homepage hero composed of three stacked layers:

1. **Announcement bar**
   - Place a compact promotional strip above the navigation.
   - Use a deep blue-to-violet horizontal gradient, approximately `#304B9B` to `#4436A8`.
   - Center a single-line announcement on desktop, with the message visually dominant and a small outlined action button aligned to its right.
   - Use white text at roughly 14–16px, medium weight. The action button should have a transparent or subtly lighter background, a 1px white border with reduced opacity, a 5–6px radius, and a small trailing chevron.
   - On narrow screens, allow the content to wrap cleanly or make the announcement horizontally scrollable; never let it overlap the navigation.

2. **Navigation header**
   - Use a white background and a horizontal layout with generous side padding, approximately 20px on mobile and 32–48px on large screens.
   - Keep the brand mark at the far left, primary navigation links centered or grouped near the middle, and account/product actions at the far right.
   - Navigation labels should be dark charcoal, around `#151515`, in 14px–15px medium-weight text. Use small downward chevrons for expandable items.
   - Provide a quiet secondary action with a very pale gray fill, around `#F1F2F2`, and a high-contrast primary action in near-black, around `#171717`.
   - Keep the header height around 64px. Align every item to the same vertical centerline.

3. **Media hero panel**
   - Place a large media panel below the navigation with approximately 20px side margins on desktop and a 12–16px gap above it.
   - Use a wide aspect ratio around 2:1 to 2.3:1, with a minimum height that preserves an immersive desktop composition. On mobile, reduce the aspect ratio or increase height so the copy remains readable.
   - Apply a 10–12px corner radius and `overflow: hidden`.
   - Use an atmospheric, full-bleed product-relevant video or image as the background. Choose a scene with depth, motion, and a clear region for text; do not rely on a busy focal point behind the copy.
   - Add a dark translucent gradient overlay, strongest in the lower-left and fading toward the upper-right. A useful starting point is `linear-gradient(90deg, rgba(0,0,0,.62) 0%, rgba(0,0,0,.28) 48%, rgba(0,0,0,.06) 100%)`, combined with a subtle bottom-to-top darkening layer if needed.
   - Anchor the content in the lower-left with approximately 40px desktop inset and 36–48px bottom padding. Keep the text column constrained to roughly 540–620px.
   - Use a large, concise headline around 36–40px on desktop, 30–34px on mobile, with approximately 1.05–1.12 line-height, normal or medium weight, and white text.
   - Follow with a supporting paragraph around 18px desktop / 16px mobile, 1.45–1.55 line-height, white or near-white at slightly reduced opacity. Limit it to 3–5 readable lines on desktop.
   - Place one primary CTA beneath the paragraph. Use a white or very light background around `#F7F7F5`, dark text around `#171717`, 14–16px medium weight, 10–12px vertical padding, 16–18px horizontal padding, 7–9px radius, and a small right-facing arrow or chevron.

## Responsive and interaction rules
- Preserve the visual hierarchy: announcement first, navigation second, immersive media third.
- Collapse or hide nonessential navigation links at smaller widths and keep the primary action visible.
- Maintain at least 16px between headline, paragraph, and CTA; avoid placing controls directly over important media details.
- If the background is video, support autoplay-muted looping with a poster image, pause/reduced-motion behavior, and a graceful fallback for slow connections.
- Add subtle hover transitions to buttons: slightly brighten or darken the fill and translate the arrow by 2–3px. Keep transitions around 150–220ms.
- Ensure text and controls meet accessible contrast, keyboard focus visibility, semantic heading order, and touch targets of at least 44px.

## Never
- Never reuse logos, product names, brand marks, copy, illustrations, imagery, video footage, or exact navigation labels from the reference.
- Never reproduce the reference composition as a pixel-for-pixel clone.
- Never use a busy background that makes the content difficult to read.
- Never make the announcement bar or navigation compete visually with the primary hero message.
