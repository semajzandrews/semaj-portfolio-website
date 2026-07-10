#!/usr/bin/env node
// HIGH-QUALITY scroll-through previews for the project DETAIL page hero.
// Usage: node scripts/capture-detail-previews.mjs [slug ...]
//
// Playwright's recordVideo is low-bitrate VP8 and caps quality, so instead
// this steps the scroll position deterministically and screenshots every
// frame at deviceScaleFactor 2, then ffmpeg-assembles a crisp 1920-wide
// H.264 MP4 (CRF 20) to public/projects/<slug>/preview.mp4.
import { chromium } from "playwright"
import { execFileSync } from "node:child_process"
import { mkdirSync, statSync, rmSync } from "node:fs"
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
  ["pulsepoint", "https://pulsepoint-eta.vercel.app"],
  ["blessed-hope-daycare", "https://blessed-hope-daycare.vercel.app"],
  ["black-river-painting", "https://black-river-painting.vercel.app"],
  ["cantina-443", "https://cantina-443.vercel.app"],
  ["edgar-jewelry", "https://edgar-jewelry.vercel.app"],
  ["lhirondelle-restaurant", "https://lhirondelle-restaurant.vercel.app"],
  ["dellitalia-santola", "https://dellitalia-santola.vercel.app"],
  ["empire-dental", "https://empire-dental.vercel.app"],
  ["cleancuts-barbershop", "https://cleancuts-barbershop.vercel.app"],
  ["chubbies-deli", "https://chubbies-deli.vercel.app"],
  ["linden-pain-relief", "https://linden-pain-relief.vercel.app"],
  ["furniture-r-us", "https://furniture-r-us.vercel.app"],
  ["castaway-restaurant", "https://castaway-restaurant.vercel.app"],
  ["my-amor-coffee", "https://my-amor-coffee.vercel.app"],
  ["mikauri-nail-salon", "https://mikauri-nail-salon.vercel.app"],
  ["the-lounge-orange", "https://the-lounge-orange.vercel.app"],
]

const only = process.argv.slice(2)
const targets = only.length ? SITES.filter(([s]) => only.includes(s)) : SITES

const W = 1600
const H = 900
const FPS = 24
const SECONDS = 12 // scroll duration; played at 0.6x on the site => ~20s watch
const FRAMES = FPS * SECONDS
const TMP = path.join(ROOT, ".preview-captures")

async function capture(browser, slug, url) {
  const tmpDir = path.join(TMP, slug)
  rmSync(tmpDir, { recursive: true, force: true })
  mkdirSync(tmpDir, { recursive: true })
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()
  // NEVER networkidle: these sites run perpetual animations.
  await page.goto(url, { timeout: 30000, waitUntil: "domcontentloaded" })
  await page.waitForTimeout(3000) // let entry animations + images settle

  const total = await page.evaluate(
    () => document.documentElement.scrollHeight - window.innerHeight,
  )
  const dist = Math.min(total, H * 8) // cap very long pages

  const holdFrames = Math.round(FPS * 0.75) // hold on hero, then on footer
  const moveFrames = FRAMES - holdFrames * 2
  for (let i = 0; i < FRAMES; i++) {
    const m = Math.min(Math.max(i - holdFrames, 0), moveFrames)
    const t = m / moveFrames
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    await page.evaluate((y) => window.scrollTo(0, y), Math.round(dist * eased))
    await page.screenshot({
      path: path.join(tmpDir, `frame_${String(i).padStart(4, "0")}.jpeg`),
      type: "jpeg",
      quality: 92,
    })
  }
  await context.close()

  const outDir = path.join(ROOT, "public", "projects", slug)
  mkdirSync(outDir, { recursive: true })
  const out = path.join(outDir, "preview.mp4")
  execFileSync("ffmpeg", [
    "-y", "-framerate", String(FPS),
    "-i", path.join(tmpDir, "frame_%04d.jpeg"),
    "-an", "-vf", "scale=1920:-2",
    "-c:v", "libx264", "-preset", "slow", "-crf", "20",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    out,
  ], { stdio: "pipe" })
  rmSync(tmpDir, { recursive: true, force: true })
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
