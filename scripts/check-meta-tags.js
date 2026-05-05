/**
 * Build-time guard: scans every prerendered HTML file in dist/ and fails the
 * build if any page has duplicate route-level SEO tags.
 *
 * Catches the regression where a stale hardcoded <meta name="description">
 * (or <title>, or canonical) is left in index.html alongside the per-route
 * tag injected by react-helmet-async via SEOHead.tsx.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

if (!fs.existsSync(distDir)) {
  console.error("❌ Meta tag check FAILED — dist/ does not exist. Run vite build first.");
  process.exit(1);
}

/** Recursively collect every .html file under a directory. */
function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const htmlFiles = walk(distDir);
const errors = [];

const STALE_DESCRIPTION = /NotiProof helps businesses lift conversions with real-time social proof/i;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf-8");
  const rel = path.relative(distDir, file);

  const head = (html.match(/<head[\s\S]*?<\/head>/i)?.[0]) || html;

  const descCount = (head.match(/<meta[^>]+name=["']description["'][^>]*>/gi) || []).length;
  const titleCount = (head.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || []).length;
  const canonicalCount = (head.match(/<link[^>]+rel=["']canonical["'][^>]*>/gi) || []).length;
  const ogDescCount = (head.match(/<meta[^>]+property=["']og:description["'][^>]*>/gi) || []).length;

  if (descCount > 1) errors.push(`${rel}: ${descCount} <meta name="description"> tags`);
  if (titleCount > 1) errors.push(`${rel}: ${titleCount} <title> tags`);
  if (canonicalCount > 1) errors.push(`${rel}: ${canonicalCount} <link rel="canonical"> tags`);
  if (ogDescCount > 1) errors.push(`${rel}: ${ogDescCount} <meta property="og:description"> tags`);

  if (STALE_DESCRIPTION.test(head)) {
    errors.push(
      `${rel}: contains the stale generic description "NotiProof helps businesses lift conversions…" — remove from index.html, all descriptions must be route-specific via SEOHead.`
    );
  }
}

if (errors.length > 0) {
  console.error("\n❌ Meta tag check FAILED — duplicate or stale SEO tags detected:\n");
  errors.forEach((e) => console.error("   - " + e));
  console.error(
    "\n   Route-level SEO tags must be managed exclusively by src/components/SEOHead.tsx via react-helmet-async."
  );
  console.error("   Do NOT add <title>, <meta name=\"description\">, or canonical tags to index.html.\n");
  process.exit(1);
}

console.log(`✅ Meta tag check OK — ${htmlFiles.length} HTML files, no duplicate SEO tags.`);
