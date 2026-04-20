/**
 * Build-time guard: ensures every URL in routes-manifest.ts has a matching
 * <Route path="..."> entry in entry-prerender.tsx. Prevents the regression
 * where missing prerender routes cause valid URLs to be deployed as
 * NotFound pages with noindex,nofollow.
 *
 * Run: node scripts/check-prerender-coverage.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const manifestPath = path.resolve(__dirname, '../src/routes-manifest.ts');
const prerenderPath = path.resolve(__dirname, '../src/entry-prerender.tsx');

const manifestSrc = fs.readFileSync(manifestPath, 'utf-8');
const prerenderSrc = fs.readFileSync(prerenderPath, 'utf-8');

// Extract the staticRoutes array body and pull literals only from it,
// so redirect target values don't pollute the "must be prerendered" set.
const staticRoutesMatch = manifestSrc.match(/staticRoutes\s*=\s*\[([\s\S]*?)\]/);
const staticRoutesBody = staticRoutesMatch ? staticRoutesMatch[1] : '';
const manifestRoutes = [...staticRoutesBody.matchAll(/"(\/[^"]*)"/g)]
  .map((m) => m[1])
  .filter((p) => p.startsWith('/'));

// Extract all path="..." declarations from entry-prerender.tsx
const prerenderRoutes = new Set(
  [...prerenderSrc.matchAll(/path="(\/[^"]*)"/g)].map((m) => m[1])
);

// Extract redirect source paths from redirectRoutes — these are intentionally
// in the prerender file but NOT in the sitemap manifest, so allowlist them.
const redirectSources = [...manifestSrc.matchAll(/"(\/[^"]*)":\s*"\/[^"]*"/g)]
  .map((m) => m[1]);
redirectSources.forEach((r) => prerenderRoutes.add(r));

const missing = manifestRoutes.filter((r) => !prerenderRoutes.has(r));

if (missing.length > 0) {
  console.error('\n❌ Prerender coverage check FAILED');
  console.error(`   ${missing.length} URL(s) in routes-manifest.ts are missing from entry-prerender.tsx:`);
  missing.forEach((r) => console.error(`     - ${r}`));
  console.error('\n   These URLs would be deployed as NotFound pages with noindex,nofollow.');
  console.error('   Add a matching <Route path="..."> entry in src/entry-prerender.tsx.\n');
  process.exit(1);
}

console.log(`✅ Prerender coverage OK — all ${manifestRoutes.length} manifest routes have prerender entries.`);
