## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789074849550-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/inngest-com/085d18d8-47d3-43b1-92ae-d8bd045a677d-1789073653425.webp
- Design on Kage: https://kage.design/designs/inngest-landing-page

## Before you start
Before writing any code, ask the user: what product are they building, who is it for, and what brand assets do they already have (name, logo, colours, typefaces)? Wait for the answers, then apply everything below to *their* product — never reproduce the reference site's name, copy, or visuals.

## Page structure
Build a single long dark landing page with these sections, in order:
1. **Sticky nav**: wordmark left; 4–6 text links; a small open-source/preview stat with icon; text sign-in link; a filled white CTA button. Hairline bottom border over the dark background.
2. **Hero (full viewport)**: near-black field with a subtle drifting particle/speck background; two-line uppercase display headline — line 1 solid, line 2 outline-stroke only; a few small mono code-callout chips floating at angles; a short mono uppercase subline; two buttons (filled accent + outlined).
3. **Logo strip**: five grayscale customer logos on one row, immediately below the hero to borrow credibility.
4. **Manifesto**: one large light-weight multi-line statement paragraph, left-aligned, with a decorative dotted/particle brand-shape illustration on the right. Lots of whitespace.
5. **Feature tab cards**: three equal columns, each with a thin line-art icon, title, and short body; the active/first card is filled with an accent gradient, the other two sit on raised panels with hairline borders.
6. **Product depth section**: uppercase section heading; two-column row with explanatory paragraphs left and a product-UI screenshot/video right; below it a 3×2 grid of capability items (icon + title + one-liner each).
7. **Use-case grid**: uppercase statement heading with a short intro paragraph, then a 2×3 grid of use cases, each with icon, blurb, and a mono uppercase "Learn more →" link.
8. **Testimonial section**: uppercase heading; carousel with a grayscale portrait photo left, large quote right, customer logos above, attribution below, "View case study" / "View all" buttons, and arrow controls with a thin progress line.
9. **Before/after section**: statement text left; a diagram card right labelled BEFORE and AFTER, showing an architecture sketch with a small accent-coloured panel marking the improved state, plus a circular arrow toggle.
10. **Getting-started steps**: numbered step ("01 …") with title, description, and abstract line-art illustration; carousel arrows and progress line to page through steps.
11. **Scale/trust panel**: an inset slightly-darker rounded card containing an uppercase heading, three columns of benefit copy each with a "See docs →" link, and a wide multi-series line chart with a dot legend.
12. **Compliance grid**: heading with a dry one-liner, then a 3×2 grid of factual claims (certifications, performance numbers) with short explanations.
13. **Start-building cards**: uppercase heading + "Pick a template" subline; three quickstart cards by stack, each with a mono "Get started →" link.
14. **Footer**: status pill ("All systems operational"), five link columns, compliance badge, and a legal bottom row with copyright and policy links.

## Design language
- **Canvas**: near-black page background (~#0E0F0F) with slightly raised panels (~#161718) and a few inset darker sections. Depth comes from value shifts and hairline borders (rgba(255,255,255,0.1)), not shadows — use border: 1px and border-radius ~4–8px throughout; buttons nearly rectangular (2–4px radius).
- **Colour**: monochrome base — white #FFFFFF for primary text, muted grey ~#9A9FA3 for body/secondary. One warm accent (coral-red ~#F0563A) reserved for the primary CTA, active card, and small markers; one cool accent (blue ~#3B5BFF) only where contrasting states are shown (e.g. before/after). Status greens appear only inside product screenshots. Never use more than these.
- **Type pairing**: an uppercase grotesque display face for statements (huge, tight leading, sentence fragments with periods); a neutral sans for body; a monospace face for micro-labels, nav, buttons, and metadata — always uppercase, letter-spaced ~8–12%, 11–13px. Scale: display ~90–140px, section headings ~28–36px uppercase, body 15–16px, micro-labels 11–13px mono.
- **Outline treatment**: for two-line headlines, render the second line as transparent fill with 1px white text-stroke — instant contrast between assertion and condition.
- **Hierarchy & rhythm**: alternate the page's breathing — airy statement/manifesto sections (large type, ~120px+ vertical padding) between dense utilitarian grids (cards, 24–32px gaps, compact 13px body). Use uppercase headings as loud section breaks, then let grids be quiet and information-dense.
- **Grids**: consistent 12-column container (~1200px max); feature/capability grids in equal thirds; use-cases in 3×2; compliance in 3×2; every cell same internal padding so grids read as engineered, not decorated.
- **Icons & imagery**: thin 1px line-art icons, monochrome, abstract-geometric; photography only as grayscale portraits; diagrams as wireframe-style boxed sketches with small mono labels.
- **Data display**: charts as thin 1–2px multi-coloured lines (accent, green, blue) on dark panels with small dot legends and mono axis labels; dashboard screenshots framed in a subtle bordered window.
- **Links/CTAs**: mono uppercase labels with trailing arrows (→) for tertiary actions; filled accent button for primary; 1px outlined button for secondary. Hover states: fill swap or underline, no bouncy motion.
- **Motion**: restrained — slow particle drift in the hero, gentle carousel slides with thin progress lines, hover reveals on cards. Nothing springs or bounces.
- **Tone of copy**: declarative fragments, technical vocabulary, numbers as proof ("100K+ executions per second"); compliance stated flatly, without marketing gloss.

## Never
- No logos, wordmarks, product names, customer names, testimonials, code identifiers (step.* functions), illustrations, photography, or copy from the reference site.
- Never present the result as the reference product or imply affiliation.
- Don't add gradients beyond the single active-card accent gradient, don't introduce drop shadows, and don't exceed the monochrome-plus-one-accent palette.
- Never use the reference's exact particle composition or headline phrasing as your own.
