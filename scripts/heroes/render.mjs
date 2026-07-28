// Regenerate a project hero PNG from its HTML source in scripts/heroes/.
// Usage: node scripts/heroes/render.mjs mac-mini-scan
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const name = process.argv[2];
if (!name) {
  console.error("usage: node scripts/heroes/render.mjs <slug>");
  process.exit(1);
}
const src = path.join(__dirname, `${name}.html`);
const out = path.join(root, "public", "projects", name, "hero.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL(src).href, { waitUntil: "networkidle" });
await page.waitForSelector("body[data-ready='1']");
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1600, height: 900 } });
await browser.close();
console.log(`wrote ${out}`);
