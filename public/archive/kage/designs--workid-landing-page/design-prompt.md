## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106613949-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/workid-ai/2843b616-ed30-482d-adaf-40c736e4842a-1789106609593.webp
- Design on Kage: https://kage.design/designs/workid-landing-page

## Before you start
Ask the user these questions and wait for the answers before writing any code:
- What product are you building, and what is its core promise in one sentence?
- Who is the primary audience (e.g. candidates, employers, both) and what must the page convert them to do?
- What brand assets already exist: name, logo, primary colour hex, typeface?
- What real proof points can be shown visually (scores, certifications, badges, member counts)?
Apply every rule below to *their* product, not to the reference site.

## Page structure
Build a single-column, centred landing page with these sections top to bottom:
1. **Top nav** (white, ~64px, thin bottom border): logo + wordmark left; 4–5 centred text links; right side a quiet bordered button and a solid black pill button.
2. **Hero panel**: full-width container with light-gray (#F4F4F3) background and ~32px radius. Centred two-line headline (~56–64px semibold), one-line gray subhead, then a row with the primary blue pill CTA plus two short lines of handwritten script micro-copy beside it (reassurance like price/time/control). Below sits a phone-width product mockup card: coloured banner header, avatar, name, verified badge, role + location, a labelled progress bar ("score: 95 of 100"), and stacked history rows each with organisation, role, a green "Verified" chip, dates and tiny icon actions. Flank the mockup with handwritten script annotations and hand-drawn arrows, one left, one right.
3. **Search strip** (white): centred two-line headline, then a search row — rounded input with magnifier icon and placeholder + solid black pill button. A centred kicker line introduces three equal-width job cards: logo, uppercase company name + "today", bold two-line-clamped title, and a bottom row of location + "Remote" pills. Cards: 1px border, 16px radius, white.
4. **Network panel**: light-gray rounded container with centred headline, subhead and the blue CTA again. Beneath, a visualization: a dot-grid continent map with ~15 circular avatar chips scattered across it, each carrying a small green check badge.
5. **Companies strip** (white): centred headline, then a loose centred grid of logo pills (small mark + name). One extra pill is a gray skeleton with a handwritten note and arrow ("your company could be here"), followed by the blue CTA once more.
6. **Footer** (light gray, full width): top row with logo left and a one-line brand promise right; hairline divider; left column with an email contact chip and a social icon; three link columns (Product / Company / Legal); a centred small-print legal disclaimer at the very bottom.

## Design language
- **One conversion path**: the same blue pill CTA repeats in hero, network and companies sections; everything else stays secondary (1px-bordered white buttons or solid black pills).
- **Pacing**: white sections alternate with light-gray rounded panels; airy centred blocks (~120px vertical padding) alternate with tighter utility clusters so density breathes down the page.
- **Hierarchy by scale, not colour**: no tinted headings. Hero ~56–64px, section heads ~32–40px, body 16px, meta 12–13px; text #111827, secondary #6B7280.
- **Colour discipline**: white #FFFFFF base, panels #F4F4F3, borders #E5E7EB, primary blue #2F6FED for CTA/logo/links, green #22C55E reserved exclusively for verification signals, one warm yellow #F0B95A accent used only inside the mockup, black #111 pills for secondary actions.
- **Type pairing**: one geometric sans (Inter/Manrope-like) for all UI; one casual script face (Caveat-like, ~20px, dark gray) used only for annotations and doodle arrows — never for UI text.
- **Radius and borders**: 999px pills for buttons and chips, 16px cards, 24–32px section panels; 1px #E5E7EB borders; shadows near-absent (max 0 1px 2px rgba(0,0,0,.05)).
- **Show proof, don't claim it**: verification rendered as green chips, a labelled score progress bar, and check badges on avatars; map the same pattern onto the user's own proof points.
- **Mockup over photography**: the hero sells through a realistic UI mockup of the product, annotated in script; no stock photos anywhere.
- **Interaction**: subtle hover — border darkening or 2px lift on cards and pills, underline on text links; transitions ≤150ms, no decorative animation.

## Never
- Never reuse the reference brand's name, logo, fingerprint mark, tagline or any of its copy.
- Never reproduce the specific companies, logos, personal names, avatar photos or job listings shown in the reference.
- Never copy the dotted Europe map artwork; build an original visualization of the user's own geography or network.
- Never present the finished page as the reference product or imply any affiliation with it.
