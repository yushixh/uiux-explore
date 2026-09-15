## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106570-3.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/desert-ant-labs/9afde706-8b4f-4c5f-a9d8-7a634f78e07d-1789106538010-full.webp
- Component on Kage: https://kage.design/component/desert-ant-labs-feature-grid

## Before you start
Ask me what my product does, who it is for, and what its brand personality, colours, and typography are. Then apply the principles below to create an original feature-grid section for my product—not a copy of the reference.

## Design language
Build a responsive capability section that explains a product through a clear introductory statement followed by a dense but calm grid of feature cards.

### Layout and alignment
- Use a warm, lightly tinted page background and a centered content container with a generous maximum width, approximately 1120–1240px.
- Align the section heading, supporting paragraph, and card grid to the same left and right edges.
- Give the intro generous top and bottom breathing room: roughly 96–140px above the heading, 48–72px between the intro and grid, and 18–28px between heading and paragraph.
- Use a three-column grid on desktop with equal-width cards and consistent 16–20px gaps. Allow the grid to form several rows based on the number of capabilities.
- Collapse to two columns at medium widths and one column on small screens. Keep card heights consistent within each row where practical, but let text wrap naturally rather than clipping it.
- Keep the overall composition text-led. Do not add decorative icons or images unless the product needs them and they support comprehension.

### Typography hierarchy
- Make the section headline large, bold, and compact: approximately 36–48px on desktop, with tight line-height around 0.98–1.08. On mobile, reduce to roughly 30–36px.
- Limit the headline to a short, outcome-oriented statement that can wrap across two lines.
- Set the supporting paragraph in a contrasting readable style—slightly monospaced, technical, or otherwise distinctive for the brand—at approximately 16–18px with 1.6–1.8 line-height and a comfortable max-width of 620–720px.
- Inside each card, use a strong feature name at 22–25px with tight line-height and medium-to-bold weight.
- Place a concise description below it at 15–16px with 1.45–1.6 line-height. Keep descriptions to one or two short sentences.
- Add a small category or capability label at the bottom in uppercase or compact small caps, approximately 10–12px, with increased letter spacing around 0.12–0.18em.

### Colour
- Start with a soft warm background similar to #F8F7F1 or #FAF9F3, then adapt it to the brand palette.
- Use near-black text such as #171817 for primary headings and #242522 for body copy.
- Use subtly contrasting card surfaces, approximately #F0EFE9 or #F2F1EB, so the grid is visible without looking boxed in.
- Render labels on a slightly darker or lighter pill surface, around #E7E6DF, with dark muted text such as #30322F.
- Treat unavailable, preview, or beta capabilities with a paler surface, lower-contrast text, and a thin neutral outline rather than the filled card treatment.
- Maintain accessible contrast for all essential text and labels.

### Borders, radius, and surfaces
- Use generous rounded corners on standard cards, approximately 20–24px.
- Keep standard cards borderless or use an extremely subtle 1px border such as rgba(20,22,20,0.025).
- Give cards around 24–28px of internal padding on desktop and 20–24px on mobile.
- Position the category pill near the bottom of the card with enough separation from the description; use a pill radius of 999px and compact horizontal padding.
- For beta or upcoming cards, use a 1px border around rgba(30,32,30,0.16), a transparent or page-colour fill, and a small status pill in the upper-right corner.

### Interaction and responsive behaviour
- If cards link to detail pages, make the entire card keyboard-focusable and provide a restrained hover state: a slight upward translation of 1–2px, a subtly stronger surface contrast, or a delicate shadow such as 0 8px 24px rgba(20,20,16,0.06). Do not use dramatic animation.
- Add a visible focus ring that meets accessibility requirements.
- Keep labels and descriptions stable on hover; interaction should clarify clickability rather than rearrange the card.
- On mobile, preserve the card order and vertical rhythm. Avoid horizontal scrolling unless the product specifically requires it.
- Use motion sparingly and respect `prefers-reduced-motion`.
- Make the implementation semantic: use a section heading, a list for the capabilities, and appropriate heading levels inside cards.

## Content guidance
- Invent neutral placeholder feature names and descriptions based on my product after asking about it. Make each card represent one distinct job, workflow, or capability.
- Mix practical capabilities with a small number of clearly marked preview or beta items when relevant.
- Keep the labels short and operational, such as a capability type, workflow category, or implementation concept—not marketing slogans.
- Ensure the grid still works with different numbers of cards and with longer translated text.

## Never
- Never copy the reference’s logos, product names, feature names, descriptions, labels, or exact copy.
- Never reuse the reference’s illustrations, photographs, imagery, or decorative assets.
- Never reproduce the reference as a pixel-for-pixel clone; adapt the principles to my product and brand.
- Never rely on colour alone to communicate beta, disabled, or unavailable status.
- Never sacrifice readability for a rigid card height, overly tight grid, or excessive decorative detail.
