# Architecture rules
- Reuse AlignmentVideoSection for home and wheel-service pages; serve its optimized MP4 and poster locally through BASE_URL, as the GitHub Pages domain cannot resolve Lovable CDN-relative asset URLs. Keep presentation media unchanged.
- Keep commercial wheel-service data in a shared typed catalog consumed by dedicated routes and homepage links, so service-specific destinations and WhatsApp messages stay consistent.
- Keep mechanical commercial services in a separate typed catalog and page layout; use catalog references for home, regional and blog links to preserve distinct service intent and enquiry destinations.
- Use the existing SEO helpers for wheel-service metadata and restore static homepage metadata on return, so client navigation preserves the sequential homepage CTR test.
- Define commercial service routes before the city-slug route, so city resolution cannot intercept service URLs.
- Render public brand identity through BrandLockup instead of the legacy graphic logo, so owner-supplied media stays unchanged while replacement artwork is pending.
- Use shared page metadata helpers on content routes, so titles, social tags and self-referencing canonicals remain coherent during client navigation.- GitHub Pages deploy copies index.html to <route>.html for every sitemap URL, so direct visits return HTTP 200 instead of the 404 SPA fallback.
