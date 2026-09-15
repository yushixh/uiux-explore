## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workos-com/947834e0-bd2f-4379-bf5b-565962ed66c7-1789073676081.webp
- Design on Kage: https://kage.design/designs/workos-og-image

## Before you start
Ask the user what product or project this card is for, who will see it when the link is shared, and what brand assets they already have (name, logo file or mark shape, brand colours, preferred typeface). Wait for the answers before building. Everything below is applied to their brand, not to any reference company.

Produce a **1200×630 social share card** (Open Graph image) as a single self-contained HTML file with a 1200×630 fixed-size stage (or an equivalent SVG), ready to be rendered to PNG via a headless browser or screenshot. No scrollable page — one exact canvas.

## Page structure
1. **Full-bleed canvas** — a flat near-white field with a faint diagonal lattice pattern covering the whole 1200×630 area; the texture is stronger on the right and fades toward the left so the text zone stays clean.
2. **Headline block** — the dominant element, left-aligned starting ~100px from the left edge and vertically centred slightly above middle. Two stacked lines: a short setup phrase in solid dark ink, then the payoff phrase in a horizontal gradient. No other text elements.
3. **Wordmark lockup** — bottom-left, ~80–100px above the bottom edge: a small geometric logo mark beside the product name in the same dark ink, sized far smaller than the headline, acting as a signature.
4. **Empty right and lower-right zones** — intentional negative space; nothing is placed there, the lattice texture is the only content.

## Design language
- **Focal hierarchy**: exactly one focal element — the headline. It occupies roughly the middle 50% of the canvas's height. The wordmark is the only other element, at roughly 30% of the headline's size. No supporting imagery, screenshots, buttons, or URLs.
- **Emphasis by colour, not weight**: build the headline as two lines of identical weight and size; the emphasis comes from a fill change — line one solid charcoal (#1F2430), line two a left-to-right gradient (e.g. #7C5CF6 → #4B7BEC → #3ECF8E). Use the user's two brand accent colours for the gradient endpoints.
- **Type scale**: one very heavy neo-grotesque sans (Inter, Manrope, or the user's brand font). Headline at ~130–150px with tight leading (~1.02) and slightly tightened tracking (-1 to -2%). Wordmark text ~40px semibold. Sentence case with terminal punctuation (comma on line one, period on line two) gives the copy an editorial, confident rhythm.
- **Background treatment**: base #F8F9FB. Overlay a 45°-ish diamond/argyle lattice of thin 1px lines at very low contrast (#E9ECF1), rendered as a repeating SVG or CSS gradient pattern, masked with a linear fade so it's invisible behind the text and visible toward the right edge.
- **Layout grid**: hard left alignment for both headline and wordmark on the same ~100px left margin; vertical rhythm comes from the gap between headline block and lockup (~120–160px). Right half of the canvas stays empty.
- **Borders, radius, shadow**: none. The card is flat; depth is carried entirely by the gradient and texture.
- **Motion**: none — this is a static image. Ensure all text and gradients render identically in a screenshot.

## Never
Do not use the WorkOS name, logo, shield mark, or the copy "Your app, Enterprise Ready." Do not reproduce their exact gradient values if the user has their own palette. Never present the output as WorkOS's card — it must carry the user's placeholder or real branding and their own headline copy.
