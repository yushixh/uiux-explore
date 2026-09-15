## Reference images

Study these alongside the description below: hierarchy, rhythm, spacing, colour. Build for the product you are asked about, using this design language.

- Component: https://kage-design-assets.t3.tigrisfiles.io/components/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060909-1.webp
- Full page it was cut from: https://kage-design-assets.t3.tigrisfiles.io/screenshots/lovable-dev/7426a651-2b1e-4dbe-b0d8-bb8a847d2e81-1789060887-full.webp
- Component on Kage: https://kage.design/component/lovable-hero

## Before you start
Ask me what my product does, who it is for, and what its brand personality and visual identity are. Then apply the principles below to create an original hero section for my product—not a copy of the reference.

## Design language

Build a spacious SaaS landing-page hero centered around a single action: letting the visitor describe what they want to create. Keep the composition calm and highly legible while using a vivid atmospheric background to communicate possibility and momentum.

### Layout and alignment
- Create a full-width hero section with a warm off-white base, approximately `#FAF9F6`.
- Use a centered content column with a maximum width of roughly `720px` for the headline, supporting text, and primary creation input.
- Leave generous vertical space above the hero content; on desktop, position the content around the middle-to-lower portion of the initial viewport rather than immediately below the navigation.
- Place the headline, supporting line, and input in one centered vertical stack.
- Include enough bottom padding for the background treatment to remain visible below the input.
- If a navigation bar is present in my product, keep it compact and horizontally aligned: brand area on the left, navigation links in the center or alongside it, and secondary/primary actions on the right. Adapt the navigation to my product rather than reproducing any reference labels.
- On small screens, collapse or simplify navigation, reduce the headline size, and make the input nearly full width with comfortable side gutters.

### Background atmosphere
- Add a large, blurred, organic gradient field behind the content, with no hard edges or literal illustration.
- Transition from pale blue around the upper-middle area into saturated electric blue and vivid magenta/pink toward the lower portion.
- Use approximate colours such as `#DDEBFF`, `#4E82F4`, `#A44CFF`, `#F02FB3`, and `#FF168B`, blended with very large radial gradients and heavy blur.
- Keep the area directly behind the headline light enough for strong black text contrast; let saturation increase below and around the input.
- Do not allow the gradient to reduce readability. Add a subtle light veil or adjust opacity where necessary.
- The background should feel soft, luminous, and slightly fluid rather than like a geometric mesh.

### Typography hierarchy
- Use a modern sans-serif with a clean, slightly dense appearance. Use the product’s existing brand font when available.
- Set the main headline in near-black, approximately `#171717`, with a bold weight around `700–800`.
- Use a short, direct headline of roughly 40–48px on desktop with tight line height around `0.98–1.05`; reduce to approximately 32–38px on mobile.
- Set the supporting sentence below it in muted gray, approximately `#666666`, at roughly 17–19px with relaxed line height.
- Keep the hierarchy to headline, one supporting line, and the creation control. Avoid extra badges, paragraphs, or competing calls to action in the hero.

### Creation input
- Build a prominent, wide rounded input panel below the supporting text, approximately `600–610px` wide and `96–100px` tall on desktop.
- Use a white or near-white surface, approximately `#FFFFFF`, with a subtle gray border around `#D8D8D8` and a restrained shadow such as `0 8px 24px rgba(20, 30, 60, 0.10)`.
- Use a generous pill-like radius, approximately `28–32px`, while keeping the interior layout practical rather than decorative.
- Place muted placeholder text near the upper-left interior, around `#888888`, describing the kind of request the user can enter. Write fresh copy appropriate to my product.
- Put secondary controls along the lower edge of the input: an add/attachment control on the left and contextual controls such as mode selection, voice input, or submission on the right. Only include controls that make sense for my product.
- Make the input feel like the primary call to action without requiring a separate oversized button. Provide clear hover, focus, and keyboard states; use a visible accessible focus ring in a brand-appropriate blue or purple.
- If the field supports submission, pressing Enter should submit where appropriate, while multiline input should use an obvious modifier or dedicated submit action.

### Interaction and responsive behaviour
- On hover, slightly lift or brighten the input surface and controls without introducing distracting animation.
- Animate the ambient gradient very subtly, if at all; avoid movement that competes with typing.
- Ensure all controls have accessible labels, visible focus states, adequate contrast, and touch targets of at least 40–44px.
- Keep the hero’s initial load fast by implementing the background with CSS gradients rather than a large image.
- On mobile, stack or simplify the input’s bottom controls, preserve the large rounded container, and prevent placeholder text from wrapping awkwardly.

## Never
- Never use the reference product’s logo, product name, navigation labels, headline, placeholder copy, or other branded wording.
- Never copy the exact layout dimensions, text, gradient silhouette, or control arrangement as a pixel-perfect reproduction.
- Never include logos, product names, copy, illustrations, or imagery from the reference.
- Never use a stock image or decorative illustration where a CSS-based atmospheric gradient is sufficient.
- Never sacrifice text contrast, keyboard accessibility, or mobile usability for visual similarity.
