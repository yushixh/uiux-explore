## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106594-10.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/speechmark/77b904ee-7a59-4d24-b7d4-3e274188b21e-1789106544280-full.webp
- Component on Kage: https://kage.design/component/speechmark-footer

## Before you start
Ask the user what their product is, who it is for, and what brand personality, colours, typography, and content they want to use. Then apply the principles below to create an original footer for their product—not a copy of the reference.

## Build this section
Create a minimal, airy footer with two stacked zones:

1. **Featured endorsement zone**
   - Place a small uppercase eyebrow such as “FEATURED ON” near the left edge of the content container.
   - Position a compact rounded rectangular endorsement badge directly beneath it, aligned to the same left edge.
   - Treat the badge as a generic third-party recognition module: use the user’s own platform name, icon, score, or status only if they provide them. Otherwise create a neutral placeholder without borrowing any recognizable branding.
   - Keep this area visually modest; it should feel like supporting proof rather than a promotional hero.

2. **Legal footer zone**
   - Separate it from the endorsement zone with a full-width, 1px horizontal rule inside the same page gutter.
   - Add a small copyright or legal line below the divider, aligned left with the content above.
   - Leave substantial vertical breathing room between the badge and divider, and a smaller but comfortable gap between the divider and legal text.

## Design language
- **Layout:** Use a centered max-width container, approximately 1150–1200px on desktop, with 64px horizontal gutters on large screens and 24px gutters on mobile. Align the eyebrow, badge, divider, and legal text to one shared vertical axis. The endorsement block should occupy the natural width of its contents rather than stretching across the page.
- **Responsive behaviour:** On narrow screens, preserve the left alignment and horizontal padding, allow the badge to scale down or wrap internally, and keep the divider full width of the padded container. Do not introduce unnecessary columns.
- **Typography:** Use a clean sans-serif. Set the eyebrow in 10–11px uppercase text with roughly 0.12em letter spacing and medium weight. Set legal text around 11–12px with normal weight. Use a slightly stronger weight only for important badge details.
- **Colour:** Use a very pale cool background around `#F5FAFC` or adapt it to the user’s brand surface. Use muted grey text around `#8A969B`, a slightly darker divider around `#C7D1D4`, and a restrained accent for the endorsement badge around `#E96660` or the user’s brand accent. Ensure all legal text remains readable against the background.
- **Badge styling:** Use a thin accent border, approximately 1px, with a 10–14px radius. Keep the badge compact, with roughly 10–12px vertical and 14–16px horizontal padding. Organize its contents into a small icon or mark, a tiny label, a larger recognition name, and an optional compact metric; maintain clear internal alignment and avoid visual clutter.
- **Spacing:** Give the endorsement eyebrow-to-badge pairing a 10–14px gap. Use approximately 50–60px of space below the badge before the divider, then 22–28px between the divider and legal text. Give the overall footer enough top and bottom padding to feel intentionally sparse.
- **Interaction:** If the badge links to an external recognition page, make the whole badge clickable with a subtle hover state: slightly stronger border colour, a very light surface tint, and a pointer cursor. Preserve visible keyboard focus with a clear 2px outline or equivalent. Do not add motion unless it supports the user’s brand.
- **Accessibility:** Use semantic `<footer>`, a meaningful link label for the badge, sufficient colour contrast for legal text, and responsive text sizing. Decorative marks should be hidden from screen readers.

## Never
- Never copy the reference’s logos, platform names, product names, copyright text, exact badge artwork, or numerical claims.
- Never use the original brand’s illustrations, imagery, or proprietary visual identity.
- Never turn this quiet footer into a dense navigation sitemap or a large promotional section.
- Never use arbitrary alignment: the eyebrow, badge, divider, and legal text should share one consistent container axis.
- Never rely on colour alone to communicate badge status or link affordance.
