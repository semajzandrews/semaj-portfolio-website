#!/usr/bin/env node
// Capture scroll-through MP4 previews for FEATURED portfolio cards.
// Usage: node scripts/capture-card-previews.mjs [slug ...]
// Records a ~7s top-to-bottom scroll of each live site with Playwright,
// then ffmpeg-encodes a small H.264 MP4 to public/projects/<slug>/preview.mp4.
import { chromium } from "playwright"
import { execFileSync } from "node:child_process"
import { mkdirSync, readdirSync, statSync, rmSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const SITES = [
  ["ramen-gami", "https://ramen-gami.vercel.app"],
  ["da-autoglass", "https://da-autoglass.vercel.app"],
  ["mamie-african-hair-braiding", "https://mamie-african-hair-braiding.vercel.app"],
  ["pour-abbeys", "https://pour-abbeys.vercel.app"],
  ["raymonds-tires", "https://raymonds-tires.vercel.app"],
  ["buildwhatyouwant", "https://buildwhatyouwant.com"],
  ["east-orange-animal-hospital", "https://east-orange-animal-hospital.vercel.app"],
  ["ironbound-pet-shop", "https://ironbound-pet-shop.vercel.app"],
  ["dsanchez-barbershop", "https://dsanchez-barbershop.vercel.app"],
  ["ll-massage-spa", "https://ll-massage-spa.vercel.app"],
  ["vega-jewelry", "https://vega-jewelry.vercel.app"],
  ["ally-roofing", "https://ally-roofing.vercel.app"],
]

const only = process.argv.slice(2)
const targets = only.length ? SITES.filter(([s]) => only.includes(s)) : SITES

const W = 1280
const H = 720
const TMP = path.join(ROOT, ".preview-captures")

async function capture(browser, slug, url) {
  const tmpDir = path.join(TMP, slug)
  rmSync(tmpDir, { recursive: true, force: true })
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    recordVideo: { dir: tmpDir, size: { width: W, height: H } },
  })
  const page = await context.newPage()
  // NEVER networkidle: these sites run perpetual animations.
  await page.goto(url, { timeout: 30000, waitUntil: "domcontentloaded" })
  await page.waitForTimeout(2500) // let entry animations settle

  const total = await page.evaluate(
    () => document.documentElement.scrollHeight - window.innerHeight,
  )
  const dist = Math.min(total, H * 8) // cap very long pages
  const steps = 65
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    await page.evaluate((y) => window.scrollTo(0, y), Math.round(dist * eased))
    await page.waitForTimeout(100)
  }
  await page.waitForTimeout(600)
  await context.close() // flushes the recording

  const webm = readdirSync(tmpDir).find((f) => f.endsWith(".webm"))
  if (!webm) throw new Error("no video produced")
  const outDir = path.join(ROOT, "public", "projects", slug)
  mkdirSync(outDir, { recursive: true })
  const out = path.join(outDir, "preview.mp4")
  execFileSync("ffmpeg", [
    "-y", "-i", path.join(tmpDir, webm),
    "-an", "-vf", "scale=720:-2,fps=24",
    "-c:v", "libx264", "-preset", "slow", "-crf", "32",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    out,
  ], { stdio: "pipe" })
  console.log(`OK ${slug} ${Math.round(statSync(out).size / 1024)}KB`)
}

const browser = await chromium.launch()
for (const [slug, url] of targets) {
  try {
    await capture(browser, slug, url)
  } catch (e) {
    console.log(`FAIL ${slug}: ${String(e).split("\n")[0]}`)
  }
}
await browser.close()
rmSync(TMP, { recursive: true, force: true })
