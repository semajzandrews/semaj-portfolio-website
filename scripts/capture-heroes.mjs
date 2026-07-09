#!/usr/bin/env node
// One-shot hero screenshot capture for new portfolio entries.
// Sequential, stall-proof: 30s goto timeout, domcontentloaded, per-site try/catch.
// Usage: node scripts/capture-heroes.mjs

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "projects");

const TARGETS = [
  ["six-points-creative-spaces", "https://six-points-creative-spaces.vercel.app"],
  ["vega-jewelry", "https://vega-jewelry.vercel.app"],
  ["top-health-spa", "https://top-health-spa.vercel.app"],
  ["freshi-healthy-fusion", "https://freshi-healthy-fusion.vercel.app"],
  ["ally-roofing", "https://ally-roofing.vercel.app"],
  ["berowitz-law", "https://berowitz-law.vercel.app"],
  ["a1njit-food-truck", "https://a1njit-food-truck.vercel.app"],
  ["victoria-and-sons-auto", "https://victoria-and-sons-auto.vercel.app"],
  ["da-autoglass", "https://da-autoglass.vercel.app"],
  ["mamie-african-hair-braiding", "https://mamie-african-hair-braiding.vercel.app"],
  ["ll-massage-spa", "https://ll-massage-spa.vercel.app"],
  ["dsanchez-barbershop", "https://dsanchez-barbershop.vercel.app"],
  ["raymonds-tires", "https://raymonds-tires.vercel.app"],
  ["ramen-gami", "https://ramen-gami.vercel.app"],
  ["ironbound-pet-shop", "https://ironbound-pet-shop.vercel.app"],
  ["pour-abbeys", "https://pour-abbeys.vercel.app"],
  ["east-orange-animal-hospital", "https://east-orange-animal-hospital.vercel.app"],
];

const browser = await chromium.launch();
const failed = [];
for (const [slug, url] of TARGETS) {
  const file = path.join(OUT, slug, "hero.png");
  if (fs.existsSync(file) && fs.statSync(file).size > 0) {
    console.log(`skip ${slug} (exists)`);
    continue;
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.setDefaultTimeout(30000);
  try {
    await page.goto(url, { timeout: 30000, waitUntil: "domcontentloaded" });
    await page.waitForTimeout(6000); // let hero fonts/images/animation settle
    fs.mkdirSync(path.dirname(file), { recursive: true });
    await page.screenshot({ path: file, timeout: 20000 });
    console.log(`ok   ${slug}`);
  } catch (e) {
    failed.push(slug);
    console.log(`FAIL ${slug}: ${String(e).split("\n")[0]}`);
  } finally {
    await page.close().catch(() => {});
  }
}
await browser.close();
if (failed.length) console.log("FAILED:", failed.join(", "));
