## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060392-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/cal-com/cdeba7c5-dd46-4ce9-ba9c-2d344d57a58b-1789060022408.webp
- Design on Kage: https://kage.design/designs/cal-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, logo, colours, typeface). Wait for their answers before writing any code — everything below is applied to *their* product, not to the reference site.

## Page structure
Build a single long marketing page in this order:

1. **Slim header** — wordmark left; right-aligned text link ("Sign in"), black pill button ("Get started"), and a hamburger icon for mobile. No mega-menu.
2. **Hero, two-column** — Left: small outlined pill with an icon announcing a release, a 3-line display headline, a short 2–3 line paragraph, then stacked auth actions: a full-width black pill button with a provider icon, a secondary outline button, and one line of microcopy ("No credit card required"). Right: a self-contained booking-widget card showing a host row (avatar, name, event title, description), a duration pill row (15m/30m/45m/1h), an event-type row with icon, a timezone row with chevron, and a month calendar with weekday header, muted out-of-month days and one selected day filled black. This widget is the demo of the product.
3. **Social-proof strip** — centred two-line microcopy ("Trusted by…") above a row of partner logos in muted grey.
4. **How it works** — centred icon-badge pill, H2, one supporting sentence, and a paired CTA row (black pill + outline pill). Below: three equal cards, each with a small grey number chip (01/02/03), a bold title, one-sentence body, and a simplified abstract UI illustration (orbit diagram, settings rows with time pickers, a call-toolbar with a silhouette).
5. **Benefits bento** — same centred header pattern. Then a 2×2 grid of wide cards: title + paragraph on top, an embedded *real-looking UI fragment* below — (a) a settings form with labels, selects and text inputs, (b) a URL pill with an editable booking link plus a compact event card, (c) a mini week calendar with a toggle and pastel event blocks, (d) a stacked notification toast ("booking confirmed"). Follow with a playful sub-headline ("…and so much more!") and a centred 4×2 grid of compact tiles: rounded-square icon above a short label (8 items).
6. **Testimonials intro** — left-aligned H2 and paragraph (carousel/rotator region).
7. **Integrations panel** — a large rounded, bordered container: left-aligned badge, H2, paragraph, two CTAs, and a centred grid of partner app logos (two rows).
8. **Wall of love** — centred badge, H2, paragraph, CTA pair, then a 3-column masonry of testimonial cards: avatar, name, handle, quote body (varying lengths, some with inline highlighted links), finished with a centred outline "Show more" button.
9. **FAQ** — centred badge, H2, sentence, CTA pair; then a divider list of accordion rows: bold question left, thin "+" icon right, hairline rules between rows.
10. **Second social-proof strip** — same logo strip reused before the close.
11. **Final CTA** — large centred headline, two pill buttons, and a row of award badges (laurel "#1" marks, star-rating tiles).
12. **Deep footer** — wordmark, two lines of legal/trademark text, a row of compliance badge medallions (SOC2, GDPR, HIPAA), a mission statement, a language pill and a system-status pill with green dot, a "Downloads" heading with a wrapped grid of platform badges (Android, Chrome, Safari, Edge, Firefox, macOS, Windows, Linux), review-score badges, a support-email line, and finally multi-column link lists (Solutions, Use Cases, etc.).

## Design language
- **Near-monochrome system.** Page background `#f9f9f9`, cards `#ffffff`, hairline borders `#e4e4e7`, primary text `#18181b`, muted text `#71717a`. Black `#111111` is the only strong accent: primary buttons, section badges, the selected calendar day. Introduce at most one soft accent family for data (pastel lavender/peach event blocks) plus a green status dot `#22c55e`.
- **Type.** A bold geometric sans for display headlines (Cal Sans–style feel), an Inter-like grotesque for body. Scale: hero ~60–68px with tight (-2%) leading and ~1.05 line-height; section H2s ~40–44px; card titles 16–18px semibold; body/UI text 14–15px; micro-labels 12–13px.
- **Repeated section rhythm.** Every major section opens with the same beat: tiny icon-in-pill badge → big H2 → one muted supporting sentence → paired CTAs (one black pill, one white outline, both fully rounded with a small chevron). This gives the page a predictable cadence between varied content blocks.
- **Cards and surfaces.** Radius 12–16px on cards, 999px on buttons and pills. 1px borders carry the structure; shadows are nearly absent (only a whisper on floating toasts). Generous internal padding (~24–32px).
- **Embedded product UI.** Feature cards don't use stock illustration — they render simplified, believable product fragments: small grey controls, 13px labels, selects, toggles, calendar grids with muted `#f4f4f5` inactive cells and black selected states. Keep fragments low-detail but functional-looking.
- **Density curve.** Airy, asymmetric hero → spacious centred sections → dense bento and icon tiles in the middle → masonry testimonials (varying card heights, equal gutters) → airy FAQ and final CTA → very dense, small-type footer. Let whitespace do the sectioning; there are no dividing colour bands, only occasional bordered containers.
- **Numbered steps.** Use small grey number chips (01/02/03) above step titles instead of icons for process sections.
- **Motion.** Keep it quiet: subtle hover elevation/border darkening on cards and buttons, smooth accordion expand. No parallax or loud animation.
- **Icons.** Thin 1.5px stroke line icons, often inside small rounded squares; never multicolour except partner logos.

## Never
- Do not use the Cal.com name, wordmark, logo, copy, headlines, testimonial text, avatars, award badges or partner app logos (Teams, Stripe, Zoom, Slack, Zapier, etc.) from the reference.
- Do not reproduce the booking widget's specific content (host name, event title, dates) — rebuild it with the user's own product data.
- Never present the result as Cal.com or imply affiliation; apply the design language to the user's own product and brand.
