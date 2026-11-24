# TRD
Stack: Next.js 15.5.29 App Router, strict TypeScript, React 18, Tailwind CSS, Lucide React, component CSS, @vercel/analytics, @vercel/speed-insights.
Structure: app/ has TypeScript routes for Home, Experience, Expertise, Impact, Education, Contact, plus metadata, loading, error, and not-found routes. Shared components include route-aware Nav, Footer, PageHeading, Carousel, Counter, Contact, and BackToTop. Content remains in data/resume.ts.
Theme: `data-theme` on <html>, set by inline script in layout before paint; stored in localStorage `theme`.
Env: `NEXT_PUBLIC_SITE_URL` (optional) else `VERCEL_PROJECT_PRODUCTION_URL` else localhost.
Performance: static prerender, next/image priority hero, system fonts, server components except interactive ones.
Open Graph image: Edge runtime, generated on request; avoids the Node image renderer's file-URL handling failure on Windows.
Deploy: vercel.json explicitly sets framework nextjs, install npm ci, build npm run build, output .next. Vercel Root Directory must be the repository root; production branch main. Assign the production domain to the Ready deployment. Enable Web Analytics and Speed Insights in dashboard.
Note: @vercel packages pinned to 1.5.0 / 2.1.0. PostCSS is overridden to 8.5.33 to patch the version bundled with Next.js 15.
Brand asset tooling: Sharp 0.35.5 is a dev dependency for npm run icons; generated assets are committed. Fonts use system stacks, with no font network dependency. TypeScript is pinned to 6 because Next.js 15 does not support TypeScript 7.
TypeScript strict checks also fail on unused locals and parameters. The SP SVG is the logo source for app/favicon.ico, icon.png, apple-icon.png, and header/footer brand usage.
All application source/config/tooling is TypeScript or CSS; PostCSS remains MJS because Next.js requires a runtime config. .gitattributes marks TypeScript, CSS, and generated/vendored content for GitHub Linguist.
