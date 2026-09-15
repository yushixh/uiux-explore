## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Full page: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060540-full.webp
- Above the fold: https://kage-design-assets.t3.tigrisfiles.io/screenshots/mmbl-io/849f4ec6-ce65-4185-a867-71fbc561b804-1789060060914.webp
- Design on Kage: https://kage.design/designs/mmbl-landing-page

## Before you start
Ask the user what product they are building, who it is for, and what brand assets they already have (name, colours, type, logo, app or web screenshots). Wait for their answers before writing any code — everything below is applied to *their* product, not to the reference page.

## Page structure
Build a single scrolling marketing page with these sections, top to bottom:

1. **Top nav** — slim bar on the page background: logo (small colour mark + wordmark) left, three text links centred, one high-contrast filled button right. No border; the dark background just continues.
2. **Hero (split)** — left column: a very large three-line display headline where the final line or word takes the accent colour, one short two/three-line paragraph in muted gray, a filled white CTA button, and a one-line micro-caption beneath it. Right column: a large device mockup (slightly tilted) showing real product UI, with floating overlay chips — one showing an incoming voice note with a waveform, one showing the resulting task with a confirm control — and large soft-edged organic colour blobs layered behind the device. Below the device: a small carousel control (arrows + dots + play) with a caption. Close the hero with a full-width row: tiny muted text left, a downward arrow right.
3. **Core-mechanic demo section** — repeat the two-line headline pattern, second line muted; place a smaller two-line supporting paragraph top-right. Beneath, a two-panel demo card: left panel shows raw input (a quoted thought, existing-category chips, an animated waveform bar strip, a 'try again' link); right panel shows the parsed output (a count header with a check icon, individual result cards with tinted category tags, a bright replay/undo button, a small caption). This is the 'before → after' proof of the product.
4. **Light interstitial** — a full-bleed section in pale lavender that breaks the dark rhythm. Nothing but typography: three stacked lines of the same display size in near-black, with the quoted/emotional phrases coloured, plus a tiny two-line supporting paragraph right-aligned. Deliberately sparse.
5. **Feature-tour section** — back to dark. Two-line headline + right-aligned support copy as before. Below: left column a straight-on device mockup (app list UI) with a colourful waveform overlay card near its base; right column a vertical stack of three feature blocks, each led by a small single-colour glyph, then a bold two-line title, then two or three lines of muted body copy. Generous vertical gaps between blocks.
6. **Closing CTA** — centred: the brand's colour mark rendered large, then a two-line display headline with the key phrase in accent colour, one short muted line beneath, and the same filled CTA button as the hero. No background change; let whitespace carry it.
7. **Footer** — one slim row: logo + tagline left, one centre link, external store link and copyright right. Hairline top border.

## Design language
- **Base palette**: near-black page background around `#0b0c10`; section panels and cards one step lighter, around `#15161d` and `#1a1b23`; hairline borders at `rgba(255,255,255,0.07)`. One full-bleed light break section in pale lavender `#e9e7f4` with near-black text.
- **Accent system**: a periwinkle/lavender accent `#a78bfa` for the single most important word per headline and primary emphasis. A secondary vivid set — coral red `#f4526b`, orange `#f5a343`, green `#34d399`, blue `#4f9cf9`, deep purple `#8b5cf6`, teal — used only at small scale: waveform bars, category chips, tag pills, feature glyphs, blob shapes. Never large flat fills.
- **Type**: one neutral geometric sans throughout (SF Pro / Inter-like). Display headlines 64–96px, weight 700, tight leading (~1.05) and slight negative tracking. The recurring headline pattern is two lines: line one in white, line two in muted gray `#8a8f98` or the accent colour. Body copy 15–16px at ~1.6 line-height in gray `#9ba0aa`; supporting captions 12–13px.
- **Hierarchy without decoration**: no shadows on cards; hierarchy comes from size, weight and tone. Cards are flat panels with 16–24px radius and at most a hairline border.
- **Shape**: pills everywhere small (buttons, chips, tags, carousel controls), 16–24px radius on panels, fully rounded organic blobs behind hero devices with soft edges.
- **Chips and tags**: category tags are small pills with a low-opacity tinted background and text in the matching colour (green = one project, red = another, purple = another). Keep them consistent so colour becomes a system, not decoration.
- **Section rhythm**: every section follows headline-left / support-copy-right, then a media moment; alternate media types (device mockup → two-panel demo → pure type → mockup + feature list) so no two adjacent sections look alike. Keep density low; whitespace is the main separator, with occasional hairline rules at section boundaries.
- **Motion (where visible)**: restrained and functional — carousel dots with a play control, an animated equaliser/waveform bar strip as the voice motif, a small inline confirm control on captured tasks. Nothing parallaxed or flashy.

## Never
- Do not use the mmbl name, wordmark, waveform-bar logo, or its exact headline copy ("Say it. Clear your head.", "A ramble in. A plan out.", "Make room for everything else.") or any other copy from the reference.
- Do not reproduce the reference's specific UI screenshots, blob compositions, or its 'call the vet / cat food' example content.
- Do not use the Apple App Store badge artwork for a product that isn't on iOS — substitute the user's real distribution button.
- Never present the result as the reference product; apply this design language to the user's own brand, name and colours.
