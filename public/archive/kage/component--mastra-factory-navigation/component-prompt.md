## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106663-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mastra-factory/e98dc23c-cafd-4086-ae60-932f10b41f0f-1789106606408-full.webp
- Component on Kage: https://kage.design/component/mastra-factory-navigation

# Before you start
Ask what the user's product is, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original navigation header for that product rather than reproducing this reference.

## Design the section
Build a dark, desktop-first website header for a modern developer or software product. Treat it as a compact global navigation bar with three clear zones:

1. **Brand zone** on the left: reserve space for a small abstract brand mark or wordmark supplied by the product, aligned vertically with the navigation. Keep it visually distinct without making it oversized.
2. **Primary navigation** in the middle: place a short set of top-level links in one horizontal row. Use consistent gaps, a stable baseline, and enough separation from the brand so the links read as a separate navigation group.
3. **Utility zone** on the right: include a small repository/community metric with an icon, followed by two account actions. Make the secondary action a subdued dark pill and the primary account action a slightly brighter or outlined pill, depending on the product's hierarchy.

The header should be a shallow horizontal strip, approximately 64px tall on desktop, with content constrained to a centered max-width of roughly 1180–1280px. Use `display: flex; align-items: center`, and prevent the primary links from stretching or becoming oversized. Keep the brand and utility groups fixed to their natural widths while allowing the navigation group to occupy the flexible middle space. On narrower screens, collapse or horizontally scroll the navigation rather than letting controls collide; preserve the most important account action.

## Design language

- **Layout and alignment:** Use a near-black background around `#101010` or `#111111`. Align all content to one shared horizontal centerline. Use approximately 28–40px between the brand and first navigation item, 24–32px between navigation items, and 14–16px between utility controls. Add a thin lower boundary or adjacent surface transition in `#1B1B1B` if the page needs separation.
- **Typography hierarchy:** Use a clean sans-serif UI font. Brand text should be semibold or bold at approximately 21–24px. Navigation links should be 14–15px with medium weight. Utility metadata can be 13–14px. Buttons should use 14px medium text with compact line height. Keep all labels short and single-line.
- **Colour:** Use warm white for the brand, approximately `#F5F3EF`. Use muted grey for inactive navigation, approximately `#888783`, with a brighter hover/active state around `#E8E6E1`. Use `#D6D3CC` or a similarly soft neutral for utility text. Avoid pure white everywhere so the header remains refined rather than stark.
- **Borders and radius:** Use subtle borders around controls, approximately `1px solid #292929` or `#303030`. Make account actions fully pill-shaped with a radius of `999px`; use roughly 10–12px horizontal padding and 8–10px vertical padding. Keep the header itself square or only minimally rounded so it feels like site chrome.
- **Icons:** Use small, simple monochrome icons at approximately 16–18px. Pair an icon with the community metric using a 7–9px gap. Icons should support recognition without competing with the labels.
- **Interaction:** Navigation links should brighten on hover and show a restrained active treatment such as brighter text, a tiny underline, or a low-contrast background. Pills should gain a slightly lighter border or background on hover. Include visible keyboard focus rings using a high-contrast neutral or brand-accent colour. If a navigation item has children, indicate this with a minimal chevron and use a compact dropdown anchored to the item.
- **Responsive behavior:** At tablet widths, reduce horizontal gaps and hide nonessential metadata before hiding primary links. At mobile widths, use a menu trigger or compact drawer; do not squeeze every desktop item into the viewport. Ensure the touch target for links and buttons is at least approximately 40–44px high.

## Component intent
The header should feel confident, technical, and quiet. Its job is to make the product recognizable, expose a small number of destinations, and provide immediate access to community and authentication without turning the top of the page into a control panel.

## Never
- Never copy the reference's logo, wordmark, product name, or exact brand mark.
- Never reuse the reference's navigation labels, account copy, repository metric, or other literal text.
- Never copy the exact spacing, proportions, or pixel arrangement; adapt them to the user's product and content length.
- Never use illustrations, decorative imagery, or visual assets from the reference.
- Never make every navigation item equally prominent if the user's information architecture has a clear primary destination.
- Never omit responsive behavior, keyboard focus states, or accessible labels for icon-only controls.
