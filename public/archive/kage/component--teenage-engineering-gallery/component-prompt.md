## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060821-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/teenage-engineering/02d63820-361c-4c31-b791-8f2d75691669-1789060797-full.webp
- Component on Kage: https://kage.design/component/teenage-engineering-gallery

## Before you start
Ask what the user's product is, who it is for, and what their brand identity, colours, imagery, and tone are. Then apply the principles below to create an original gallery for that product—do not reproduce the reference literally.

## Build an immersive editorial gallery
Create a vertically scrolling gallery made of large, self-contained visual panels for showcasing products, objects, case studies, releases, or other high-impact content. The gallery should feel like a sequence of carefully staged exhibitions: one dominant image per panel, generous negative space, minimal supporting UI, and a strong sense of visual pacing.

### Layout and alignment
- Use a full-width or nearly full-width gallery against a very dark page background.
- Stack panels vertically with no conventional card grid. Each panel should be approximately 80–100vh tall on desktop, with enough height for the image to breathe.
- Let the main visual occupy most of each panel while preserving intentional empty space around it. Use `object-fit: cover` for atmospheric photography or `contain` when the product silhouette must remain fully visible.
- Align captions consistently to a low, outer corner—typically bottom-left—with generous inset padding of about 24–40px on desktop and 16–20px on mobile.
- Alternate composition subtly between panels if the content benefits from it, but maintain a coherent rhythm rather than arbitrary asymmetry.
- On smaller screens, keep the image dominant and reduce panel height to roughly 65–85vh; ensure captions never overlap important product details.
- Use responsive image loading, explicit aspect ratios, and lazy loading for panels below the fold.

### Typography hierarchy
- Keep type small and quiet compared with the imagery. Captions should identify the item or moment without competing with it.
- Use a neutral grotesk or similarly clean sans-serif with regular weight, tight line-height, and modest tracking.
- Caption size: approximately 11–13px on desktop, 10–12px on mobile.
- Use sentence case or restrained lowercase consistently, depending on the user's brand voice.
- Avoid large headlines, decorative type, badges, or dense metadata inside the gallery.

### Colour and lighting
- Default page and panel background: near-black, approximately `#050505` to `#0B0B0B`.
- Caption text: soft white or cool grey, approximately `#D8D8D8` or `#B8B8B8`, never harsh pure white unless the brand requires it.
- Let each image retain its own colour palette, but favour controlled studio lighting, deep shadows, subtle gradients, and high tonal contrast.
- Use a very light warm or cool cast only when it supports the product; avoid decorative gradients over the artwork.
- Add a restrained bottom vignette or gradient only when needed to preserve caption legibility.

### Borders, radius, and surfaces
- Prefer edge-to-edge imagery with no visible card chrome.
- Use square corners or an almost imperceptible radius of 0–4px; this is an editorial stage, not a rounded card interface.
- Avoid heavy borders, shadows, floating controls, and ornamental containers.
- If panels are separated, use changes in background tone or a thin, low-contrast divider around `#161616` rather than visible gutters.

### Interaction and motion
- Make each panel optionally clickable, with the entire visual acting as the hit area when it leads to a detail page.
- Provide a subtle hover treatment: a slight brightness change, gentle scale of roughly 1–2%, or caption colour shift. Keep it slow and understated.
- Support keyboard focus with a visible but restrained outline or inset highlight.
- If adding scroll reveal, use a short fade or gentle translate of 8–16px; never delay access to the image or create a distracting parallax effect.
- Respect `prefers-reduced-motion` and preserve a static, fully usable gallery.
- Ensure captions and interactive images have meaningful accessible labels, and provide a lightbox or detail view only if it genuinely improves inspection of the work.

### Content strategy
- Use one strong image or visual story per panel rather than mixing many small thumbnails.
- Keep captions concise and functional: a title, collection name, date, or short contextual label.
- Choose imagery with a consistent photographic or art-directed language so the gallery feels curated.

## Never
- Never copy the reference's logos, product names, captions, or exact marketing copy.
- Never use the reference products, record artwork, illustrations, or imagery.
- Never recreate the original composition pixel-for-pixel or reproduce its exact sequence of panels.
- Never fill the gallery with generic stock images that conflict with the user's product and brand.
- Never add a conventional card grid, excessive UI controls, loud overlays, or decorative effects that compete with the visual work.
- Never make text too low-contrast to read, hide focus states, or sacrifice responsive and accessible behaviour for the aesthetic.
