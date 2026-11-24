# Module: SEO and Analytics
app/layout.tsx: metadata, JSON-LD, Analytics, SpeedInsights. app/opengraph-image.tsx generates the share image. app/sitemap.ts, app/robots.ts use lib/site.ts for the base URL. After deploy: enable Analytics and Speed Insights in Vercel; submit sitemap to Search Console.
The generated share image uses the Edge runtime and renders on request, avoiding the Node image renderer's Windows file-URL failure.
Speed Insights uses version 2.1.0 without a postinstall script. Vercel deployment settings are explicit in vercel.json; a platform NOT_FOUND also requires checking production status and domain assignment in the dashboard.
The share image matches the geometric indigo/teal SP brand; themeColor is indigo. Personal metadata and analytics behavior are unchanged.
