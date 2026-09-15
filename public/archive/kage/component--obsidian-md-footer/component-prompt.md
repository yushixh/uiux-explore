## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060834-8.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/obsidian-md/18ba00bf-73a3-4c61-9eb0-f66f69cff1b6-1789060782-full.webp
- Component on Kage: https://kage.design/component/obsidian-md-footer

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colour palette, and navigation structure are. Then apply the principles below to create a footer for my product—use my content and identity rather than reproducing the reference.

## Build this component
Create a full-width, dark website footer for a software product. It should feel calm, editorial, and highly usable, with a compact identity/social area on the left and organized navigation groups on the right. The footer should work as the closing section of a marketing page and scale cleanly from desktop to mobile.

### Design language

- **Overall composition:** Use a nearly black background around `#101010` or adapt the darkest colour from my brand. Place the contents inside a centered max-width container of roughly `1120–1200px`, with generous horizontal padding of `32–80px`. Give the footer substantial vertical breathing room, approximately `96–140px` top and `56–80px` bottom.
- **Desktop layout:** Use a two-part grid. The left block should occupy roughly 40–45% of the width and contain the product identity, social links, a locale/language selector, and copyright. The right block should contain 3–4 navigation columns aligned to a common top edge. Keep the left and right areas visually separate through whitespace, not a prominent divider.
- **Brand area:** Place a small brand mark or product wordmark supplied by the user at the top of the left block. If no asset exists, use a simple text treatment or neutral placeholder rather than inventing a logo. Follow it with a muted “Follow us” or equivalent label and a compact two-column social-link list. Put the language selector beneath the social links and the legal/copyright line below it.
- **Navigation columns:** Group links under short section labels such as “Product,” “Learn,” “Community,” or equivalents appropriate to the product. Section labels should be muted and slightly smaller than link text. Links should be listed vertically with consistent spacing and no bullets. Keep groups distinct with generous gaps; where a column has many links, use a second subgroup with its own muted heading.
- **Alignment logic:** Align every navigation heading and link to the same left edge within its column. Align the brand block to the same container grid as the columns. Do not center the footer content on desktop. Preserve a strong baseline rhythm so the footer feels like a designed system rather than a collection of links.
- **Typography:** Use a clean sans-serif system or the product’s brand font. Body links should be approximately `16px`, line-height `1.55`, and medium/regular weight. Section labels should be `15–16px`, line-height `1.4`, with a muted colour. The brand wordmark can be slightly heavier, around `18–21px`. Copyright text should be around `14px`.
- **Colour:** Use primary text around `#e8e8e8`, secondary text around `#a7a7a7`, and a lower-emphasis legal colour around `#777777`. Links should become the primary text colour on hover. If the brand has an accent colour, use it sparingly for the supplied brand mark or a focused state—not for every link.
- **Spacing:** Use an 8px spacing scale. Keep `10–14px` between a navigation heading and its first link, `8–12px` between links, and `28–44px` between stacked navigation groups. Leave at least `48–72px` between the brand/social block and the navigation area on narrower desktop widths.
- **Borders and radius:** Keep the footer mostly borderless. The language selector may use a subtle `1px` border around `#303030`, a transparent or slightly lighter dark fill such as `#151515`, and a radius of `7–9px`. Use a similarly restrained radius for any other compact control. Avoid cards, shadows, and decorative separators unless they support the product’s existing design system.
- **Language selector:** Build it as an accessible button with a globe or locale icon, current language, and a chevron. Make the whole control clickable. On hover or focus, slightly brighten the border and background; if implemented as a menu, expose the options with keyboard navigation and an appropriate expanded state.
- **Interaction:** Make all links visibly interactive through colour and/or opacity changes on hover, focus-visible, and active states. Use a short `150–200ms` transition. Provide a clear, high-contrast focus ring that works on the dark background. External/social links should indicate their destination accessibly without cluttering the visual design.
- **Responsive behaviour:** Below roughly `800px`, collapse the desktop grid into a single column. Keep the brand block first, then lay navigation groups into a two-column grid where space permits. Below roughly `520px`, stack navigation groups vertically and reduce horizontal padding while retaining generous vertical spacing. Ensure long link labels wrap naturally without causing horizontal overflow.
- **Accessibility:** Use semantic `<footer>`, navigation landmarks with accessible labels, real links, sufficient contrast, keyboard support, meaningful focus states, and a logical DOM order. Do not rely on colour alone to communicate state.

### Content model
Use realistic but product-specific placeholders based on my answers: a brand identity, social destinations, a language control, copyright, and several grouped navigation lists. Keep link labels concise and make the groups reflect the actual information architecture of my product.

## Never
- Never copy the reference’s logo, product name, copyright year, navigation labels, social links, or exact copy.
- Never use the reference’s logos, icons, illustrations, imagery, or brand assets.
- Never reproduce the reference pixel-for-pixel; derive a footer from the layout and interaction principles instead.
- Never make the footer a dense wall of links, use low-contrast inaccessible text, or hide keyboard focus.
- Never add decorative imagery when a clear typographic structure is sufficient.
