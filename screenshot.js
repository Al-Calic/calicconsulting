const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const filePath = path.resolve(__dirname, process.argv[2] || 'index.html');
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');

  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Trigger all scroll-reveal animations
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: 'screenshot-full.png', fullPage: true });

  // Section screenshots
  const sections = ['header', 'section'];
  const sectionEls = await page.$$(sections.join(','));
  for (let i = 0; i < sectionEls.length; i++) {
    await sectionEls[i].screenshot({ path: `screenshot-section-${i}.png` });
  }
  await browser.close();
  console.log('Saved screenshot-full.png');
})();
