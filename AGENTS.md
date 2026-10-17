# Architecture rules
- Keep commercial wheel-service data in a shared typed catalog consumed by dedicated routes and homepage links, so service-specific destinations and WhatsApp messages stay consistent.
- Use the existing SEO helpers for wheel-service metadata and restore static homepage metadata on return, so client navigation preserves the sequential homepage CTR test.
- Define commercial service routes before the city-slug route, so city resolution cannot intercept service URLs.
- Render public brand identity through BrandLockup instead of the legacy graphic logo, so owner-supplied media stays unchanged while replacement artwork is pending.
- Use shared page metadata helpers on content routes, so titles, social tags and self-referencing canonicals remain coherent during client navigation.