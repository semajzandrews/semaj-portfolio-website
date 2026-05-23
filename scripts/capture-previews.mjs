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
  { slug: "edgar-jewelry",           url: "https://edgar-jewelry.vercel.app" },
  { slug: "lhirondelle-restaurant",  url: "https://lhirondelle-restaurant.vercel.app" },
  { slug: "dellitalia-santola",      url: "https://dellitalia-santola.vercel.app" },
  { slug: "empire-dental",           url: "https://empire-dental.vercel.app" },
  { slug: "cleancuts-barbershop",    url: "https://cleancuts-barbershop.vercel.app" },
  { slug: "chubbies-deli",           url: "https://chubbies-deli.vercel.app" },
  { slug: "linden-pain-relief",      url: "https://linden-pain-relief.vercel.app" },
  { slug: "furniture-r-us",          url: "https://furniture-r-us.vercel.app" },
  { slug: "castaway-restaurant",   url: "https://castaway-restaurant.vercel.app" },
  { slug: "construction-dna",      url: "https://construction-dna.vercel.app" },
  { slug: "dolphin-car-wash",      url: "https://dolphin-car-wash.vercel.app" },
  { slug: "my-amor-coffee",         url: "https://my-amor-coffee.vercel.app" },
  { slug: "mikauri-nail-salon",    url: "https://mikauri-nail-salon.vercel.app" },
  { slug: "the-lounge-orange",     url: "https://the-lounge-orange.vercel.app" },
  { slug: "the-unstoppers",        url: "https://the-unstoppers.vercel.app" },
  { slug: "sa-stores",              url: "https://sa-stores-one.vercel.app" },
];

const VIEWPORT = { width: 1440, height: 900 };
const PRE_HOLD_MS  = 1800;   // hold at top to let hero load + animate
const DOWN_MS      = 22000;  // scroll down — cinematic, no rush
const BOTTOM_HOLD  = 1800;   // hold at the bottom long enough to read
const UP_MS        = 18000;  // scroll back up slightly faster than down
const POST_HOLD_MS = 900;    // small tail before close

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
  await page.waitForTimeout(PRE_HOLD_MS);

  // Smooth scroll with requestAnimationFrame inside the page.
  // `direction: 'down'` goes 0 → distance, `'up'` goes distance → 0.
  const smoothScroll = (distance, duration, direction) =>
    page.evaluate(
      ({ distance, duration, direction }) => {
        return new Promise((resolve) => {
          const start = performance.now();
          // easeInOutCubic — slow at both ends, full speed in the middle
          const ease = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          function step(now) {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / duration);
            const e = ease(progress);
            const y = direction === "down" ? e * distance : (1 - e) * distance;
            window.scrollTo(0, y);
            if (progress < 1) requestAnimationFrame(step);
            else resolve(undefined);
          }
          requestAnimationFrame(step);
        });
      },
      { distance, duration, direction }
    );

  // Down → hold at bottom → back up → small tail
  await smoothScroll(distance, DOWN_MS, "down");
  await page.waitForTimeout(BOTTOM_HOLD);
  await smoothScroll(distance, UP_MS, "up");
  await page.waitForTimeout(POST_HOLD_MS);

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
