const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const https = require('https');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Load the main page first
  await page.goto('https://calicconsulting.co.uk', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  // Get all nav links
  const navLinks = await page.evaluate(() => {
    const links = [];
    document.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      const text = a.textContent.trim();
      if (href && text && ['About', 'Services', 'Experience', 'Team', 'Contact'].includes(text)) {
        links.push({ href, text });
      }
    });
    return links;
  });

  console.log('Found nav links:', JSON.stringify(navLinks, null, 2));

  // Visit each page by clicking the nav link
  for (const link of navLinks) {
    const pageName = link.text.toLowerCase();

    // Click the nav link
    await page.evaluate((text) => {
      const links = document.querySelectorAll('a');
      for (const a of links) {
        if (a.textContent.trim() === text) {
          a.click();
          break;
        }
      }
    }, link.text);

    await new Promise(r => setTimeout(r, 2000));

    // Screenshot
    await page.screenshot({ path: path.join('assets', `ref-${pageName}.png`), fullPage: true });
    console.log(`Saved ref-${pageName}.png`);

    // Extract content
    const content = await page.evaluate(() => {
      return {
        title: document.title,
        url: window.location.href,
        bodyText: document.body.innerText.substring(0, 3000),
      };
    });
    console.log(`\n=== ${pageName.toUpperCase()} (${content.url}) ===`);
    console.log(content.bodyText.substring(0, 1500));
    console.log('\n---\n');

    // Download any new images
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src, alt: img.alt || ''
      }));
    });

    for (const img of images) {
      const filename = img.src.split('/').pop().split('?')[0];
      const filepath = path.join('assets', filename);
      if (!fs.existsSync(filepath) && img.src.startsWith('https')) {
        await new Promise((resolve) => {
          https.get(img.src, (res) => {
            const ws = fs.createWriteStream(filepath);
            res.pipe(ws);
            ws.on('finish', () => { ws.close(); console.log(`Downloaded: ${filename}`); resolve(); });
          }).on('error', () => resolve());
        });
      }
    }
  }

  await browser.close();
})();
