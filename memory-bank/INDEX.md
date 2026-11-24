# Memory Bank Index
Read in this order before changing code. Update after every change (see ../AGENT.md).
| File | Purpose |
|---|---|
| PRD.md | What and why |
| TRD.md | Stack, structure, SEO, deploy |
| DESIGNS.md | Theme, dark mode, components |
| CHANGELOG.md | Version history |
| modules/nav-footer.md | Nav, scroll-spy, theme toggle, footer, back to top |
| modules/hero-stats.md | Hero and impact (counters, case studies) |
| modules/timeline.md | Experience and education timelines |
| modules/resume-download.md | PDF download and freshness |
| modules/seo-analytics.md | Metadata, OG, JSON-LD, sitemap, Vercel analytics |
| modules/privacy-contact.md | Contact obfuscation |
| modules/assets.md | Images |
Content source: `../data/resume.ts`, `../resume.md`, `../public/Sumit_Kumar_Pandey_CV.pdf` (keep in sync).
Deployment configuration: `../vercel.json` (Next.js framework and build output); see TRD.md.
Brand source and generator: `../public/images/sp-mark.svg`, `../scripts/generate-brand-icons.mjs`; see modules/assets.md.
Route structure: `../app/page.tsx`, `experience/`, `expertise/`, `impact/`, `education/`, `contact/`; shared route shell lives in `../components/Nav.tsx`, `Footer.tsx`, `PageHeading.tsx`, and `Carousel.tsx`.
Structural routes: `../app/loading.tsx`, `error.tsx`, `not-found.tsx`; repository language attribution is controlled in `../.gitattributes`.
