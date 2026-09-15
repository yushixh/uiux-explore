## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106491-2.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/modeinspect/f4214789-eaef-4abd-8d9d-34964c707234-1789106455022-full.webp
- Component on Kage: https://kage.design/component/modeinspect-logo-cloud

## Before you start
Ask me what my product is, who it is for, and what its brand personality, colour palette, and typography are. Then apply the principles below to create an original logo-cloud section for my product—not a copy of the reference.

## Goal
Build a restrained customer-logo cloud that communicates credibility while remaining visually quiet. It should feel editorial, premium, and spacious, with the logos treated as a supporting signal rather than the main hero of the page.

## Design language

### Layout and alignment
- Use a full-width section with a shallow vertical footprint and generous horizontal breathing room.
- Place a small, centered eyebrow label near the top of the section.
- Add a short, thin horizontal rule on both sides of the label so the heading feels framed without becoming a prominent divider.
- Arrange customer marks in a centered logo cloud beneath the label.
- Use a balanced multi-row layout: a wider first row and a shorter second row, while keeping the entire group optically centered.
- Distribute logos evenly across the available width, but allow each logo to preserve its natural aspect ratio.
- Keep the logo group narrow enough that it feels curated rather than like an endless directory. Use CSS grid or flexbox with consistent column gaps and row gaps.
- On smaller screens, allow the marks to wrap into two or three balanced rows, maintaining generous side padding and avoiding cramped columns.
- Align the section to the same content container as the rest of the page, with a subtle full-width boundary if that suits the product’s visual system.

### Typography hierarchy
- Treat the eyebrow as the only text in the component.
- Use a small uppercase or small-cap label with increased letter spacing, approximately `0.18em–0.28em`.
- Use a light or regular font weight and a restrained size, approximately `11–13px` on desktop.
- Choose the typeface from the product’s brand system; a neutral grotesk, humanist sans, or understated mono face can work depending on the brand.
- Do not add a large heading, paragraph, button, or testimonial copy to this component.

### Colour
- Use the product’s background colour as the section background. For a warm, understated interpretation, start around `#E8E5DF` or `#E5E2DC`.
- Render logos in one muted neutral rather than their original brand colours. Start around `#66645F` with approximately `65–80%` opacity.
- Make the eyebrow and rules lower contrast than the logos, around `#8C8982` or `#AAA69E`.
- If the surrounding page is dark or colourful, adapt the neutrals to maintain a soft, low-contrast relationship rather than forcing a beige palette.
- Ensure readable contrast for the label while keeping the logos intentionally subdued.

### Borders, rules, and radius
- Use a single-pixel top or bottom rule only when the component needs a clear boundary from neighbouring sections. Start with `rgba(80, 78, 72, 0.16)`.
- The eyebrow’s side rules should be short, thin, and understated—approximately `24–32px` wide.
- Avoid cards, pills, badges, shadows, and decorative containers around individual logos.
- If logos are placed inside fixed visual cells, keep the cells transparent with no visible border and use a small radius such as `4px` only for interaction focus states.

### Logo treatment
- Use real customer or partner marks supplied by the user, preferably as SVGs with transparent backgrounds.
- Normalise the visual height rather than forcing identical widths; a typical logo height is `22–30px` desktop and `18–24px` mobile.
- Apply a monochrome treatment using an SVG fill, CSS filter, or preprocessed asset. Preserve recognisability and clear space around each mark.
- Avoid mixing highly different visual weights. If necessary, tune opacity or rendered size per logo so the row feels optically even.
- If logos are clickable, make the entire mark an accessible link with an invisible but visible-on-focus target area. Add a very subtle opacity increase on hover, for example from `0.72` to `0.95`, without using dramatic animation.

### Interaction and accessibility
- Keep the section static by default; do not use an auto-scrolling marquee unless the product explicitly needs one.
- Provide meaningful `alt` text for each logo, such as the organisation’s name, or mark decorative logos as empty-alt when the organisation name is already presented elsewhere.
- Preserve keyboard focus visibility for linked marks with a thin outline in the product’s accent colour.
- Respect `prefers-reduced-motion` if any hover or entrance transition is added.
- Ensure the section remains legible and balanced at narrow widths without horizontal scrolling.

### Suggested structure
```html
<section aria-label="Customer logos">
  <div class="eyebrow">
    <span class="rule"></span>
    <span>Trusted by teams</span>
    <span class="rule"></span>
  </div>
  <div class="logo-cloud">
    <!-- responsive, optically balanced customer logo links -->
  </div>
</section>
```

## Never
- Never copy the reference’s logos, logo names, wording, or exact arrangement.
- Never use the reference product’s name, branding, palette, or page-specific copy.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never invent customer relationships for my product; use supplied marks or clearly labelled placeholders.
- Never turn the logo cloud into a dense wall of logos, colourful brand tiles, or a high-motion marquee.
- Never let the logo section overpower the primary product message or call to action.
