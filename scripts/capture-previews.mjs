#!/usr/bin/env node
// Capture smooth scroll-through preview videos of live deployments.
// Drives a headless Chromium to each URL, scrolls top→bottom over ~10s,
// saves the session as WebM, and pulls a first-frame poster JPG.
//
// Usage:
//   node scripts/capture-previews.mjs           # captures all targets below
//   node scripts/capture-previews.mjs cantina   # just one slug
//
// Output:  public/projects/<slug>/preview.webm + preview-poster.jpg

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_BASE = path.join(ROOT, "public", "projects");

const TARGETS = [
  { slug: "pulsepoint",              url: "https://pulsepoint-eta.vercel.app" },
  { slug: "orange-central-supply",   url: "https://orange-central-supply.vercel.app" },
  { slug: "claudes-auto-repair",     url: "https://claudes-auto-repair.vercel.app" },
  { slug: "blessed-hope-daycare",    url: "https://blessed-hope-daycare.vercel.app" },
  { slug: "jefferson-auto-center",   url: "https://jefferson-auto-center.vercel.app" },
  { slug: "black-river-painting",    url: "https://black-river-painting.vercel.app" },
  { slug: "laundry-care",            url: "https://laundry-care.vercel.app" },
  { slug: "cantina-443",             url: "https://cantina-443.vercel.app" },
];

const VIEWPORT = { width: 1440, height: 900 };
const SCROLL_DURATION_MS = 9000;   // total scroll time
const PRE_SCROLL_HOLD_MS = 1200;   // hold at top to let hero load + animate
const POST_SCROLL_HOLD_MS = 800;   // hold at bottom

const filter = process.argv[2];
const queue = filter ? TARGETS.filter((t) => t.slug.includes(filter)) : TARGETS;

if (queue.length === 0) {
  console.error("no matching targets");
  process.exit(1);
}

console.log(`capturing ${queue.length} target(s) at ${VIEWPORT.width}x${VIEWPORT.height}`);

const browser = await chromium.launch();

for (const t of queue) {
  const outDir = path.join(OUT_BASE, t.slug);
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`\n→ ${t.slug}`);
  console.log(`  ${t.url}`);

  const tempVideoDir = path.join(outDir, ".tmp-video");
  fs.mkdirSync(tempVideoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    recordVideo: { dir: tempVideoDir, size: VIEWPORT },
    colorScheme: "no-preference",
    reducedMotion: "no-preference",
  });

  const page = await context.newPage();

  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
  } catch (e) {
    console.log(`  ⚠ navigation slow, continuing: ${e.message}`);
  }

  // First-frame poster
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(outDir, "preview-poster.jpg"),
    type: "jpeg",
    quality: 85,
    fullPage: false,
  });

  // Total scrollable height
  const scrollHeight = await page.evaluate(() => Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
  ));
  const viewportHeight = VIEWPORT.height;
  const distance = Math.max(0, scrollHeight - viewportHeight);

  // Hold at top so the hero animations get to play
  await page.waitForTimeout(PRE_SCROLL_HOLD_MS);

  // Smooth scroll with requestAnimationFrame inside the page
  await page.evaluate(
    ({ distance, duration }) => {
      return new Promise((resolve) => {
        const start = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(1, elapsed / duration);
          const y = ease(progress) * distance;
          window.scrollTo(0, y);
          if (progress < 1) requestAnimationFrame(step);
          else resolve(undefined);
        }
        requestAnimationFrame(step);
      });
    },
    { distance, duration: SCROLL_DURATION_MS }
  );

  await page.waitForTimeout(POST_SCROLL_HOLD_MS);

  // Get the video file path Playwright is using
  const videoHandle = page.video();
  await context.close(); // finalizes the WebM

  if (videoHandle) {
    const finalPath = path.join(outDir, "preview.webm");
    const src = await videoHandle.path();
    fs.copyFileSync(src, finalPath);
    fs.rmSync(tempVideoDir, { recursive: true, force: true });
    const stat = fs.statSync(finalPath);
    console.log(`  ✓ preview.webm  ${(stat.size / 1024).toFixed(0)} KB`);
    console.log(`  ✓ preview-poster.jpg`);
  } else {
    console.log(`  ⚠ no video handle`);
  }
}

await browser.close();
console.log("\nDone.");
