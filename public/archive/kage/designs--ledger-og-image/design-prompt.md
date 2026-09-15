## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Screenshot: https://kage-design-assets.t3.tigrisfiles.io/screenshots/ledger-com/26bad2b6-47f3-4765-aef3-ff585d1a0053-1789146800485.webp
- Design on Kage: https://kage.design/designs/ledger-og-image

## Before you start
Ask the user what product they are promoting, who the audience is, what the card should say (headline or wordmark treatment), and what brand assets exist (name, logo, colours, product imagery or UI screenshots to feature). Wait for the answers. Everything below is applied to their brand, not to the reference.

## Page structure
Produce a single 1200×630 image — build it as HTML/CSS (e.g. a 1200×630 wrapper rendered to PNG via Playwright/Puppeteer) or as SVG, with a PNG export path.

1. **Backdrop canvas (full bleed):** a near-black radial gradient, roughly `#0d0d0d` at the edges lifting to `#2a2a2a` toward the upper-left third, so the top-left corner reads as a soft studio light. Add a subtle vignette on the right and bottom.
2. **Wordmark zone (top ~15–18% of height, centred):** the brand name alone in uppercase letterspaced type, framed by two corner-bracket glyphs (⌐ shapes at the four corners of the name, like a focus frame). No tagline, no URL, no other chrome.
3. **Product fan zone (lower two-thirds):** three device/screen panels arranged side by side in a shallow fan — each rotated slightly (about −8°, 0°, +8°) and overlapping its neighbour, with the centre panel frontmost and slightly larger. Panels bleed off the bottom edge of the canvas. On each panel, show a plausible product screen: one transaction-confirmation view, one detail/summary view, one grid-of-options view. The centre panel carries a single saturated accent element (a coloured bar or button) that no other panel repeats.
4. **Crop and safe area:** keep the wordmark fully inside the canvas with comfortable margin; let the product panels be intentionally cropped at the bottom; keep critical text at least 40px from edges.

## Design language
- **Hierarchy in three beats:** brand at top (small, precise, framed), product in the middle (large, tactile, cropped), nothing else. The card has no body copy — hierarchy comes from scale contrast between the ~72–90px wordmark and the device screens' UI text (~20–28px).
- **Backdrop as lighting, not decoration:** one radial gradient plus a vignette does all the atmosphere work. Never introduce textures, patterns, or a second gradient hue.
- **Depth through rotation and overlap:** the fan of three panels creates depth with rotation alone; add soft directional drop shadows (e.g. `0 30px 60px rgba(0,0,0,.55)` offset toward the lower-right) consistent with the upper-left light source.
- **Colour discipline:** monochrome world (blacks `#0d0d0d–#2a2a2a`, whites `#f5f5f5`, grays for device bezels) with exactly one saturated accent (e.g. `#f27405`-style orange) used once, on the focal centre panel. If the user's brand accent differs, substitute it but keep it to one element.
- **Type:** a clean geometric or grotesque sans throughout; the wordmark in uppercase with wide tracking (0.15–0.25em) and medium weight; screen UI text in sentence case, normal tracking, smaller sizes with clear label/value contrast (gray labels, near-black values).
- **Screens must read:** any UI shown on the panels must be legible at thumbnail size — large numerals, short labels, high contrast — because most viewers see the card at ~500px wide.
- **Motion:** none; this is a static asset. Keep interactivity out of the deliverable.

## Never
- Do not use the Ledger name, [ LEDGER ] bracket logo, device designs, screen copy, or any reference imagery — invent placeholder branding and placeholder UI copy for the user's product.
- Do not present the result as Ledger or imply any affiliation.
- Do not add taglines, URLs, badges, or social handles the reference does not have.
