## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cognitions-swe-2/e9966f12-655e-494e-9580-e5330b0ddc92-1789365639098-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cognitions-swe-2/e9966f12-655e-494e-9580-e5330b0ddc92-1789365635199.webp
- Design on Kage: https://kage.design/designs/cognitions-swe-2-blog

# Before you start
Ask the user what they are building, who the audience is, and what brand assets they already have (name, colours, fonts). Wait for the answers before writing any code. Everything below is applied to their product and content, not to the reference.

## Page structure
1. **Fixed left sidebar**: a thin navigation rail pinned to the left edge with a small logo mark, three or four plain text links stacked vertically, and one small bordered button. Low contrast, out of the way.
2. **Article header**: centred-left in the main column — a large multi-line serif or high-contrast title, a byline row (author/team, date, read time) in small muted text.
3. **Intro paragraphs**: two or three narrow-measure text paragraphs opening the argument, with inline links underlined in an accent colour.
4. **Chart section 1 — progress over training**: a wide line chart figure, immediately followed by one small grey italic caption line. Figure + caption becomes the page's repeating unit.
5. **Benchmark section**: a small tabbed/labelled chart block (bar chart of model scores by colour), then a scatter/line chart with score and cost axes, each with its own footnote.
6. **Comparison table**: a dense data table comparing models across benchmarks — light row rules, right-aligned numerals, model names as column headers, best values bold.
7. **Long-form body**: several sections of prose separated by medium headings, each section alternating paragraphs with one supporting figure (grouped bar charts of agent behaviour, curve diagrams).
8. **Technical deep-dive**: display math blocks (rendered LaTeX) set apart with whitespace, paired with derivation prose.
9. **Evaluation section**: a grouped horizontal bar chart comparing models across languages, again with an italic caption.
10. **References + appendices**: numbered reference list with small type and links, then appendix headings with denser smaller body text, ending the page like a paper.

## Design language
- Single content column ~680–720px with very generous outer margins; the sidebar occupies a separate fixed rail, so the reading column stays narrow and unbroken.
- Hierarchy is built almost entirely from type scale: big title → section headings (one size, medium weight) → body → small grey captions. No cards, no borders around sections, no background tints.
- Body text is a comfortable 16–18px with relaxed line height (~1.7); captions and footnotes drop to 12–13px in a muted grey (#6b7280-ish) and often italic.
- Background is near-white (#fafafa / #fff); text near-black (#111). Charts introduce the only saturated colour: a small palette of 3–5 hues (blue #2f4bd8, orange #e06c3c, green #2a9d6f, purple) used consistently across every figure so colours mean the same thing page-wide.
- Interaction: links underlined in the accent blue; table rows separated by 1px hairlines; figures are static images/SVGs with no decoration (no borders, shadows or radius).
- Rhythm: the page alternates text-block → figure → caption → text-block. Long prose stretches are broken by wide full-column figures; density increases toward the technical middle (math, tables) and thins again at the end.
- Motion: essentially none; restraint is part of the language. Any hover effect should be limited to link underline/colour changes.
- The overall effect is an academic preprint: credibility through typography, footnotes and data, not through decoration.

## Never
Do not copy the reference's logo, product names, model names, chart data, taglines, copy, illustrations or exact colour palette. Do not present the result as that product — rebuild the layout language for the user's own brand and content.
