# Sumit Kumar Pandey | Portfolio

A fast, responsive, single-page portfolio for a public health strategist: health systems strengthening, quality improvement and maternal-newborn health in India.

**Live site:** add your Vercel URL here.

## Features
- Multi-page dashboard design with colorful gradient cards, carousels, and SP monogram branding
- Sticky themed menu with scroll-spy highlight and mobile hamburger
- Light and dark mode (follows system, remembers choice)
- Animated impact counters and short case studies
- Experience and education timelines
- Resume PDF download
- Back-to-top button and print-friendly styles
- SEO: metadata, Open Graph image, JSON-LD, sitemap, robots
- Vercel Web Analytics and Speed Insights
- Basic contact privacy: phone hidden behind a reveal button, email decoded in the browser

## Tech
Next.js 15 App Router, TypeScript, React 18, Tailwind CSS, Lucide React icons, and component CSS.
Inter Variable is self-hosted with the app; no external font request is required.

## Getting started
```bash
git clone https://github.com/Harshmalik017/SP-Portfolio.git
cd SP-Portfolio
npm ci
npm run typecheck
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Project structure
```
app/            home plus Experience, Expertise, Impact, Education, Contact routes
components/     Nav, Counter, Contact, BackToTop
data/resume.ts  all site content
lib/site.ts     site URL helper
public/         profile image, resume PDF
memory-bank/    project docs (PRD, TRD, DESIGNS, CHANGELOG, modules)
AGENT.md        rules for AI agents and contributors
```

## Deploy on Vercel
1. Push the repo to GitHub and import it at vercel.com/new.
2. Use the repository root (leave **Root Directory** empty) and production branch `main`. `vercel.json` explicitly selects Next.js, `npm ci`, `npm run build`, and `.next` output. Do not select `public` or `out` as the output directory.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain (otherwise the Vercel production URL is used).
4. Enable **Web Analytics** and **Speed Insights** in the project dashboard.
5. Submit `/sitemap.xml` in Google Search Console.

### Vercel 404 troubleshooting
If Vercel displays `404 NOT_FOUND`, check that the latest deployment is **Ready** and **Production**, and that the desired domain is assigned to it under **Settings > Domains**. Redeploy after changing build settings. A platform-level 404 is not necessarily an application route error.

The Edge runtime warning for `/opengraph-image` is expected: the share image renders on request, while the homepage is statically generated. npm's `cache-dir` warning originates from the build environment, not a project setting.

## Updating content
Edit `data/resume.ts`, replace `public/Sumit_Kumar_Pandey_CV.pdf` (same filename), update `resume.md` and `resumeUpdated`. See `AGENT.md`.

## Branding
The SP monogram source is `public/images/sp-mark.svg`. Run `npm run icons` after editing it to regenerate the favicon, 512px app icon, and 180px Apple icon. Typography uses local rounded system sans-serif fonts, without external font requests.

## Privacy note
The resume PDF in this repository contains contact details. Use a private repo or a redacted PDF if you do not want them public.

## Contributing
Issues and suggestions are welcome. Please read `AGENT.md` first.

## Rights
Personal content, photo and resume: © Sumit Kumar Pandey. All Rights Reserved. No license is granted to reuse the content or photo.
Developer credit: [Developer Details](https://www.linkedin.com/in/harshmalik017).
