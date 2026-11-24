# CHANGELOG
## 2.4.0 (2026-11-24)
- Replaced mixed system-font rendering with the self-hosted Inter variable font and a shared responsive type scale.
- Added accessible staggered pill-entry/hover animations, loading/error/not-found routes, consistent focus-safe text wrapping, and improved body/card typography.
- Removed remaining JavaScript-named Next/configuration and script sources in favor of TypeScript, and added Linguist rules so GitHub reports TypeScript/CSS rather than stale JavaScript statistics.
## 2.3.0 (2026-11-24)
- Unified the route shell with a refined indigo/teal SP brand, compact header, resume action, and a three-column footer with navigation and clearer contact text.
- Refreshed shared PageHeading, Carousel, Contact, Counter, and BackToTop component styling and accessibility; carousel controls now reflect their scroll position.
- Regenerated the SP logo/favicon/Open Graph identity and removed unused achievement, color-field, and legacy component-data code. Enabled unused TypeScript symbol checks.
## 2.2.0 (2026-11-24)
- Rebuilt the portfolio as a colorful multi-page dashboard inspired by the reference structure, with Home, Experience, Expertise, Impact, Education, and Contact routes.
- Added glass surfaces, multicolor stat/feature/case-study cards, responsive carousels, route-aware navigation, shared footer, and page-specific metadata/sitemap entries while retaining the SP brand and resume content.
## 2.1.0 (2026-11-24)
- Refreshed the visual system with cobalt, mint, rounded sans-serif typography, softer cards and portraits, and updated SP branding/icons.
- Removed the strategy tagline from the footer.
- Migrated the Next.js application from JavaScript to strict TypeScript and enabled Tailwind CSS. Upgraded Lucide React to the current icon package and added a type-check command.
## 2.0.0 (2026-11-24)
- Completely redesigned the portfolio in an executive editorial direction: ivory/navy surfaces, teal accents, Georgia headings, a framed portrait, and structured expertise, impact, experience, and education layouts.
- Added SP monogram branding with matching favicon, app icon, Apple icon, and social preview. Added a repeatable icon-generation command.
- Preserved resume content, downloads, contact privacy, both themes, and developer credit. Improved mobile navigation, keyboard access, reduced-motion scrolling, and animation cleanup.
## 1.2.0 (2026-11-24)
- Explicitly configure Vercel's Next.js framework, install/build commands, and output directory; document production-domain checks for platform 404s.
- Upgrade to patched Next.js 15.5.29, override vulnerable PostCSS with 8.5.33, and update Speed Insights to 2.1.0 without its former postinstall script. Keep React 18 and portfolio content unchanged.
- Ignore local Vercel metadata and environment files.
## 1.1.1 (2026-11-24)
- Run the generated Open Graph image on the Edge runtime to avoid Next.js's Node renderer file-URL failure on Windows during production builds.
## 1.1.0 (2026-11-24)
- Added scroll-spy menu highlight, light/dark theme toggle, back-to-top button, print stylesheet.
- Replaced stats strip and achievement cards with animated "Impact in numbers" metrics and four case studies.
- Footer developer credit line added.
- SEO: metadataBase, Open Graph/Twitter, generated OG image, JSON-LD Person, sitemap, robots. Added Vercel Analytics and Speed Insights.
- Privacy: phone behind reveal button; email and phone base64-encoded and decoded in browser.
- Resume freshness: `resumeUpdated` label and prebuild PDF check.
- Added AGENT.md; README rewritten for public repo.
## 1.0.0 (2026-11-24)
- Initial portfolio and memory bank.
