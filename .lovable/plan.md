# Immediate Fix for Ahrefs “Multiple Meta Description Tags” Issue

## What I found

The Ahrefs file is reporting a real issue on the live site: production pages still output two meta description tags.

Example live output:

```html
<meta name="description" content="NotiProof helps businesses lift conversions with real-time social proof notifications, testimonials, and review aggregation.">
<meta data-rh="true" name="description" content="[page-specific description]">
```

The current source code only has one dynamic meta description in `src/components/SEOHead.tsx`, and the current `index.html` no longer contains the stale hardcoded description. That means the live site is still serving an older built `index.html`/deployment artifact, and the project currently has no build-time guard to prevent this regression from shipping again.

I also noticed `package.json` still uses `"build": "vite build"`, so the previously proposed duplicate-meta guard was not actually added to the build pipeline.

## Implementation Plan

### 1. Add a duplicate SEO tag build guard

Create `scripts/check-meta-tags.js` to scan the production build output after prerendering.

It will fail the build if any generated HTML file contains more than one of these route-level SEO tags:

- `<meta name="description">`
- `<title>`
- `<link rel="canonical">`

It will also report the exact HTML file and duplicated tag count, so the issue is immediately actionable.

### 2. Wire the guard into deployment builds

Update `package.json`:

```json
"build": "vite build && node scripts/check-prerender-coverage.js && node scripts/check-meta-tags.js"
```

This means Vercel cannot deploy if duplicate descriptions, duplicate titles, duplicate canonicals, or missing prerender routes are present.

### 3. Add a clear warning in `index.html`

Add a short comment in `<head>` explaining that route-specific SEO tags are managed by `SEOHead.tsx`, and static `<title>`, `<meta name="description">`, or canonical tags must not be added to `index.html`.

This prevents future accidental reintroduction of the hardcoded fallback description.

### 4. Fix prerender route coverage in Vite config

Update `vite.config.ts` to load `staticRoutes` and pass them to `vite-prerender-plugin` via `additionalPrerenderRoutes`.

This aligns the config with the intended prerender architecture and ensures every sitemap route is generated as its own HTML page instead of relying on discovery or fallback behavior.

### 5. Clean duplicate description during prerender injection if present in the template

Harden `src/entry-prerender.tsx` so Helmet-managed SEO tags are serialized cleanly for the prerender plugin. The output should contain exactly one route-specific description, title, and canonical per generated page.

The final built HTML should look like:

```html
<title>[route title]</title>
<meta data-rh="true" name="description" content="[route-specific description]">
<link data-rh="true" rel="canonical" href="[route canonical]">
```

No stale generic NotiProof description should remain.

### 6. Verification after implementation

After approval and implementation, I will verify by checking representative pages in the generated output:

- `/`
- `/integrations/webflow/`
- `/resources/help-center/`
- one product page
- one resource article

Expected result for each:

- 1 meta description tag
- 1 title tag
- 1 canonical tag
- no stale description string: `NotiProof helps businesses lift conversions...`

## Files to change

- `scripts/check-meta-tags.js` — new build-time SEO tag scanner
- `package.json` — run the scanner after build
- `index.html` — add warning comment only
- `vite.config.ts` — pass all static routes to prerender plugin
- `src/entry-prerender.tsx` — harden Helmet head serialization/prerender output

## Important deployment note

Once this is implemented, the fix still requires a fresh production deployment. Ahrefs will continue to report duplicates until Vercel is serving the newly built HTML instead of the current stale production artifact.