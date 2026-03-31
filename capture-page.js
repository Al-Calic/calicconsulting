const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const pageName = process.argv[2] || 'about';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(`https://calicconsulting.co.uk/${pageName}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  // Full page screenshot
  await page.screenshot({ path: path.join('assets', `ref-${pageName}.png`), fullPage: true });
  console.log(`Saved ref-${pageName}.png`);

  // Extract page content
  const content = await page.evaluate(() => {
    const data = { sections: [], images: [] };

    // Get all text content by section
    document.querySelectorAll('section, [class*="section"], main > div').forEach((section, i) => {
      data.sections.push({
        index: i,
        classes: section.className,
        text: section.innerText.substring(0, 1000),
      });
    });

    // Get images
    document.querySelectorAll('img').forEach(img => {
      data.images.push({ src: img.src, alt: img.alt, width: img.naturalWidth, height: img.naturalHeight });
    });

    return data;
  });

  console.log('\n=== SECTIONS ===');
  content.sections.forEach(s => console.log(`\n--- Section ${s.index} (${s.classes.substring(0, 80)}) ---\n${s.text}\n`));

  console.log('\n=== IMAGES ===');
  content.images.forEach(img => console.log(JSON.stringify(img)));

  await browser.close();
})();
