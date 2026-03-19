// screenshot.js
// Usage: node screenshot.js hero 1
// Produces: screenshots/screenshot_hero_v1.png

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const section = process.argv[2] || 'page';
const version = process.argv[3] || '1';
const outputDir = path.join(__dirname, 'screenshots');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  // Wait for Framer Motion animations to complete (longest delay: 1.0s + 1.4s duration)
  await new Promise(r => setTimeout(r, 3000));

  const filename = `screenshot_${section}_v${version}.png`;
  await page.screenshot({
    path: path.join(outputDir, filename),
    fullPage: true,
  });

  console.log(`✅ Saved: screenshots/${filename}`);
  await browser.close();
})();