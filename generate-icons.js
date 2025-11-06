// Script to generate PWA icons from HTML
// Run with: node generate-icons.js
// Requires: npm install puppeteer

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to largest size
  await page.setViewport({ width: 600, height: 600 });
  
  const iconsDir = join(__dirname, 'public', 'icons');
  await mkdir(iconsDir, { recursive: true });
  
  const htmlPath = `file://${join(__dirname, 'public', 'generate-icon.html')}`;
  await page.goto(htmlPath);
  
  // Wait for page to load
  await page.waitForSelector('.icon-container', { timeout: 5000 });
  
  for (const size of sizes) {
    const selector = `.icon-container[data-size="${size}"]`;
    const element = await page.$(selector);
    
    if (element) {
      await element.screenshot({
        path: join(iconsDir, `icon-${size}x${size}.png`),
        type: 'png',
      });
      console.log(`✓ Generated icon-${size}x${size}.png`);
    } else {
      console.log(`✗ Could not find element for size ${size}`);
    }
  }
  
  await browser.close();
  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);

