/**
 * Patches .open-next/worker.js to add env.ASSETS.fetch() for /_next/static/
 * and other static paths that Cloudflare Pages won't serve directly because
 * they start with an underscore (_next is a reserved prefix in Pages).
 *
 * Must run after `opennextjs-cloudflare build` and before `wrangler pages deploy`.
 */

import { readFileSync, writeFileSync } from "fs";

const WORKER_PATH = ".open-next/worker.js";
const MARKER = "// - `Request`s are handled by the Next server";

const ASSETS_PATCH = `\
            // Cloudflare Pages does not serve _-prefixed paths as static assets.
            // Route /_next/static/ and /_next/media/ through the ASSETS binding.
            if (
                env.ASSETS &&
                (url.pathname.startsWith("/_next/static/") ||
                    url.pathname.startsWith("/_next/media/"))
            ) {
                return env.ASSETS.fetch(request);
            }
            ${MARKER}`;

const content = readFileSync(WORKER_PATH, "utf8");

if (content.includes("env.ASSETS.fetch")) {
    console.log("Worker already patched — skipping.");
    process.exit(0);
}

if (!content.includes(MARKER)) {
    console.error(`ERROR: Marker not found in ${WORKER_PATH}`);
    console.error("The OpenNext worker template may have changed — review patch-worker.mjs");
    process.exit(1);
}

const patched = content.replace(MARKER, ASSETS_PATCH);
writeFileSync(WORKER_PATH, patched);
console.log(`✓ ${WORKER_PATH} patched with ASSETS binding for /_next/static/`);
