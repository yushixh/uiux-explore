## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073903-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/sentry-io/7f1d8e63-d1c6-4f27-8b0e-be764e2f10af-1789073848-full.webp
- Component on Kage: https://kage.design/component/sentry-logo-cloud

## Before you start
Ask the user what their product does, who it is for, and what their brand personality, colours, and typography are. Then apply the principles below to their product and brand rather than reproducing this reference.

## Build a dark customer logo-cloud section
Create a responsive website section that presents a curated row of customer, partner, or integration logos as understated social proof. The component should feel atmospheric and premium, with the logos acting as a visual trust signal rather than the primary content.

### Design language

- **Layout and alignment:** Use a full-width section with a deep, near-black purple background. Keep the content inside a centered max-width container of roughly 1080–1200px. Place the logos in one horizontal row on wide screens, aligned to a shared optical center rather than forcing identical box widths. Distribute them evenly with generous gaps, and center the entire row vertically within a compact section. On smaller screens, allow the row to wrap into two or more balanced rows or become a horizontally scrollable strip; never let logos collide or shrink below legibility.
- **Atmosphere:** Add very subtle visual depth behind the logos: for example, a soft purple radial glow, faint grain/noise, or barely visible abstract texture. Keep this effect low contrast so it supports the logos without becoming an illustration or distracting background.
- **Typography and marks:** Use the product’s own type system for any optional eyebrow or supporting label, with a small uppercase or semibold treatment and modest letter spacing. Render supplied logo assets in their correct proportions. If text-based placeholders are needed during implementation, use varied weights and simple geometric or wordmark-like treatments, but replace them with approved assets in production.
- **Colour:** Start with a background near `#171126` or `#1B1230`, with subtle glow tones around `#28164A` and `#3A1760`. Use off-white logo treatments around `#F4F1F7`, allowing a few marks to sit at slightly reduced opacity such as 0.8–0.9 for hierarchy. Adapt these values to the user’s brand contrast and accessibility requirements.
- **Spacing:** Use approximately 64–104px of vertical padding on desktop and 40–64px on mobile. Keep the logo row’s horizontal gap around 44–76px depending on mark width. Give each mark enough clear space that it reads as an independent identity; do not create a dense badge wall.
- **Borders and radius:** Avoid visible cards, heavy dividers, and individual logo containers. If the section needs separation, use a very subtle top or bottom border such as `rgba(255,255,255,0.08)`. Keep the section itself square or softly rounded only when it sits inside a larger card layout; do not add pills around the logos.
- **Interaction:** Logos may have a quiet hover treatment: increase opacity to 1, slightly brighten, or apply a minimal scale such as `1.02`, with a 160–220ms ease transition. If logos link to customer stories or external sites, provide clear focus-visible states and accessible labels. Avoid flashy animation, autoplay motion, or persistent marquee movement unless the user explicitly needs it.
- **Responsive behaviour:** Preserve logo proportions at every breakpoint. On narrow screens, use a two-column grid or a controlled horizontal overflow pattern with comfortable touch targets. Ensure keyboard users can reach every linked logo, and provide meaningful `alt` text or accessible names.

### Content guidance

Use the user’s real customer, partner, or ecosystem names and approved logo files. A short supporting line is optional, but keep the section concise and secondary to the page’s primary conversion message. Do not make every mark identical in visual weight if the source assets naturally vary; normalize height and preserve optical balance instead.

### Never

- Never copy the reference’s logos, product names, customer names, or exact wording.
- Never use logos, copy, illustrations, decorative objects, or imagery from the reference.
- Never invent customer relationships or imply endorsements the user has not approved.
- Never distort, crop, recolour, or redraw an official logo against its brand guidelines.
- Never make the logo cloud the dominant hero element or reduce marks until they are unreadable.
- Never rely on colour alone for linked-state feedback, and never sacrifice contrast for atmosphere.
