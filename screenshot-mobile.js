const puppeteer = require('puppeteer');
const path = require('path');
const pages = ['index.html', 'about.html', 'services.html', 'experience.html', 'team.html', 'contact.html'];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  for (const p of pages) {
    const filePath = path.resolve(__dirname, p);
    const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    });
    await new Promise(r => setTimeout(r, 500));
    const name = p.replace('.html', '');
    await page.screenshot({ path: 'mobile-' + name + '.png', fullPage: true });
    console.log('Saved mobile-' + name + '.png');
  }
  await browser.close();
})();
