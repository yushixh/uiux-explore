## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106704-9.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/basedash-in-espanol-francais-portugues/b3381e01-f9b6-42c9-8798-975c026618b1-1789106655341-full.webp
- Component on Kage: https://kage.design/component/basedash-in-espanol-francais-portugues-cta

## Before you start
Ask the user what their product is, who it serves, and what brand personality, language, and navigation structure they want. Then apply the principles below to their product rather than reproducing the reference.

## Build an editorial multi-column footer
Create a responsive website footer for the user's product. It should feel calm, premium, and highly scannable: one narrow brand-and-utility column on the left, followed by three or more navigation columns with grouped links. The footer is a supporting information layer, not a promotional hero.

### Layout and alignment
- Use a warm, nearly white background and a centered content container with a maximum width of approximately 980–1120px.
- On large screens, use a four-column grid: the first column is slightly wider for the brand description and utility links; the remaining columns contain navigation groups.
- Align every column to the same top baseline. Keep consistent left edges within each column.
- Give the brand column enough width for a short 2–4 line description, followed by social links, legal links, and a language selector or locale link.
- Stack navigation groups vertically when a column contains multiple sections. Separate groups with approximately 28–36px of vertical space.
- On medium screens, reduce the grid to two columns. On small screens, stack all columns in a single flow while preserving clear group separation.
- Use generous outer padding: roughly 48–72px vertically and 24–40px horizontally on desktop; reduce to 32–40px vertically on mobile.

### Typography hierarchy
- Use a clean sans-serif font appropriate to the user's brand, with a slightly heavier weight for the brand name and navigation group headings.
- Brand name: approximately 15–16px, medium or semibold.
- Description: approximately 14–15px, regular weight, relaxed 1.45–1.6 line height.
- Group headings: approximately 14–15px, semibold; use stronger contrast than the links.
- Links: approximately 14–15px, regular weight, with 1.9–2.25 line height so long lists remain readable.
- Legal and locale links may use the same size as navigation links, but can be visually quieter.

### Colour
- Use an understated warm background close to #FAF8F5 or #FBF9F7.
- Use a deep charcoal for the brand name and headings, approximately #292827.
- Use muted warm gray for descriptions and links, approximately #77736F to #85807B.
- Use a slightly darker gray on hover, approximately #3F3C39.
- Maintain accessible contrast for all essential text; do not rely on colour alone to communicate link state.

### Borders, radius, and iconography
- Keep the footer mostly borderless. If it is separated from the page, use one subtle top border around #E8E3DE rather than a heavy panel treatment.
- Avoid cards, large shadows, gradients, and excessive rounded containers. If a language control or social icon button needs a container, use a small radius of 4–8px and a very light border.
- Use compact monochrome social icons with consistent dimensions, around 18–20px, and even spacing. Prefer the user's chosen icon set; do not invent brand marks.
- If a small product mark is needed, make it generic and derived from the user's own identity.

### Interaction and responsive behaviour
- Make every navigation item, legal item, social icon, and locale control keyboard accessible.
- Add a restrained hover and focus treatment: colour darkening, optional underline, or a subtle opacity transition lasting about 150–200ms.
- Provide a clearly visible `:focus-visible` outline with sufficient contrast.
- On mobile, optionally collapse long navigation groups into accessible disclosure rows, but keep the brand summary and essential legal links immediately available.
- Ensure long translated labels wrap naturally without breaking the grid or causing horizontal scrolling. Treat Spanish, French, and Portuguese as first-class locales and allow the language selector to expose the available languages.
- Use semantic `<footer>`, `<nav>`, headings, lists, and descriptive accessible labels for social links.

### Content guidance
- Write concise, product-specific descriptions and link labels for the user's product. Keep labels short and group related destinations under meaningful headings.
- Prioritize the most useful destinations and avoid filling space with redundant links. Preserve generous whitespace even when the link inventory is large.

## Never
- Never copy the reference site's logos, product names, navigation labels, legal text, social marks, or exact copy.
- Never reuse illustrations or imagery from the reference.
- Never reproduce the reference footer as a pixel-perfect clone; adapt its hierarchy and spacing principles to the user's brand.
- Never use inaccessible low-contrast text, unlabeled icon-only links, or hover-only interaction.
- Never assume English is the only language; support the user's translated content and locale-specific text lengths.
