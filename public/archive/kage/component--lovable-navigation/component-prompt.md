## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060909-0.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-navigation

# Before you start
Ask me what my product does, who it is for, and what its visual brand is (including preferred colours, type style, and tone). Then apply the principles below to create a navigation header tailored to my product—not a copy of any reference.

## Design the section
Build a responsive website header for a modern SaaS or software product. Keep it self-contained and production-ready, using the user's product name, brand mark, navigation labels, and calls to action.

### Layout and alignment
- Use a full-width header with a warm off-white background, approximately `#F9F8F5` or a suitable brand equivalent.
- Constrain the content to a centered max-width of roughly 1120–1200px, with generous horizontal padding such as 32px on desktop and 20px on mobile.
- Set the header height around 64–72px and vertically center every item.
- Arrange the brand at the far left, the main navigation in the middle-left, and authentication/actions at the far right.
- Use flex layout with consistent gaps rather than fixed positioning. Leave noticeably more breathing room around the brand and action group than between individual text links.
- On smaller screens, collapse the main links into an accessible menu button. Keep the primary action visible if space allows, or place it prominently in the opened menu.

### Brand and typography
- Use a compact brand lockup: a small abstract product mark followed by the product name. The mark must be newly designed for the user's brand and should not imitate any reference artwork.
- Use a clean contemporary sans-serif font. The product name should be semibold, around 20–22px; navigation links around 14–15px with medium weight; buttons around 14px with semibold weight.
- Maintain a clear but subtle hierarchy: brand is strongest, primary action is most visually prominent, and navigation links remain quiet and scannable.
- Use near-black text such as `#171717` for the brand and `#242424` for links, with a muted colour such as `#6B6B67` for secondary states.

### Navigation behaviour
- Support optional dropdown indicators for navigation items with submenus. Use a small, understated chevron and align it closely with the label.
- Add hover and keyboard-focus states. Links can shift to near-black or gain a subtle underline; focus states should use a visible 2px outline with adequate contrast.
- Dropdowns, if present, should open predictably on click or keyboard interaction and use a white or slightly tinted surface with a soft shadow, rounded corners, and clear hover rows.
- Ensure touch targets are at least 44px high, even when the visible text is smaller.

### Buttons and surfaces
- Provide a secondary authentication button with a transparent or lightly tinted surface, a thin border around `#D5D3CD`, and a radius around 9–10px.
- Provide one dark primary CTA with a near-black fill such as `#171717`, white text, a 9–10px radius, and enough horizontal padding to feel substantial.
- Buttons should have a restrained hover state: the secondary button can darken its border/background slightly, while the primary button can lighten toward `#30302E` or gain a subtle lift.
- Avoid heavy shadows in the resting header. If the header is sticky, use only a very light bottom border or shadow to separate it from content.

### Spacing and responsiveness
- Use an 8px-based spacing system. Typical values: 8px icon gaps, 20–28px navigation gaps, and 10–12px button padding.
- Preserve generous empty space around the header so it feels calm and premium.
- Prevent labels from wrapping. At intermediate widths, reduce navigation gaps before hiding or collapsing navigation.
- Make the brand, links, buttons, and menu controls accessible with semantic landmarks, descriptive labels, keyboard navigation, and sufficient colour contrast.

## Never
- Never use the reference product's logo, product name, navigation copy, CTA copy, or exact brand artwork.
- Never reproduce the screenshot pixel-for-pixel or reuse its exact wording, proportions, or visual identity.
- Never include unrelated illustrations, decorative imagery, or stock photography in the header.
- Never rely on colour alone for focus, hover, or open-menu states.
- Never hide essential navigation or actions from keyboard and screen-reader users.
