# AGENT.md: Instructions for AI agents and contributors

## Project
Public single-page portfolio for Sumit Kumar Pandey (Next.js 15 App Router, TypeScript, Tailwind CSS and Lucide icons, deployed on Vercel).

## Golden rule
**Before any change, read `memory-bank/INDEX.md` and the files it lists. After any change, update the memory bank in the same commit.** At minimum:
1. Add an entry to `memory-bank/CHANGELOG.md` (newest first, version bump, date, what and why).
2. Update `PRD.md` if requirements changed, `TRD.md` if stack, structure, env vars or deploy changed, `DESIGNS.md` if colors, type or components changed.
3. Add or edit the matching file in `memory-bank/modules/` for the module you touched.
4. Update `memory-bank/INDEX.md` if files were added or removed.
5. Update `README.md` if setup, features or deploy steps changed.

## Content sync (single source of truth)
- Content lives in `data/resume.ts`. `resume.md` mirrors the resume text. The downloadable PDF is `public/Sumit_Kumar_Pandey_CV.pdf`.
- When the resume changes: update the PDF (keep the filename), `resume.md`, `data/resume.ts`, and `resumeUpdated` in `data/resume.ts`. Never let them drift.
- Only state facts that are in the resume. Do not invent metrics, dates or employers.

## Privacy rules
- Never put the phone number or email in plain text in JSX, metadata, JSON-LD or sitemap. They are base64 in `data/resume.ts` and decoded in `components/Contact.tsx`.
- Phone stays behind the "Show phone number" button.
- Note: the PDF itself contains contact details. Replace it with a redacted copy if privacy requirements change.

## Design and code conventions
- All colors come from CSS variables in `app/globals.css`. Every new surface needs a value in both light and `[data-theme=dark]`, and in the `@media print` block if it affects printing.
- Nav uses indigo with white text; page content uses colorful gradient cards over glass surfaces.
- Keep it responsive from 320px up; no horizontal scroll; breakpoints 900 / 760 / 520.
- TypeScript everywhere in the application; use Tailwind utilities with project CSS variables for component-specific styling. Use Lucide React for interface icons.
- Server components by default. Use `'use client'` only for interactivity (Nav, Counter, Contact, BackToTop).
- Respect `prefers-reduced-motion`. Keep keyboard focus visible.
- No new heavy dependencies without a note in `TRD.md`.

## Footer
Developer credit line must remain: "© <year> Developer Details, All Rights Reserved." linking to https://www.linkedin.com/in/harshmalik017.

## Commands
```
npm install
npm run dev
npm run typecheck
npm run build   # runs scripts/check-resume.mjs first; must pass before commit
```

## Definition of done
- `npm run typecheck` and `npm run build` pass.
- Checked light and dark mode, mobile (375px) and desktop, and print preview.
- Memory bank and README updated.
