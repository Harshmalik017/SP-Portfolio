# DESIGNS
Multi-page dashboard: indigo #4F46E5 navigation, teal #14B8A6 brand accents, glass surfaces, and multicolor cards using blue, mint, violet, orange, and pink gradients. Header is translucent indigo with a compact resume action; footer is a deep indigo-to-teal three-column shell. Dark mode keeps saturated accents on navy surfaces.
Typography: self-hosted Inter Variable throughout, with shared base/small/large display tokens for consistent scale. No external font requests. Headings use balanced wrapping; numerical comparisons use tabular figures.
All UI colors use CSS variables in app/globals.css; light, dark, and print palettes are defined. Breakpoints: 1100 / 900 / 760 / 560 / 360.
Components: refined route-aware header/footer, geometric SP mark, centered profile hero, four colorful stat cards, accessible expertise/case carousels, glass summary cards, dedicated Experience/Expertise/Impact/Education/Contact pages.
Rules: responsive from 320px; visible keyboard focus; skip link; reduced-motion support; printable resume-style content. Skill pills use short staggered entrance and hover motion, disabled under reduced motion. Theme choices persist.
