const puppeteer = require('puppeteer');

(async () => {

    // Create a browser instance
    const browser = await puppeteer.launch();
  
    // Create a new page
    const page = await browser.newPage();
  
    // Website URL to export as pdf
    const website_url = 'https://gm.retrojuegos.org'; 
  
    // Open URL in current page
    await page.goto(website_url, { waitUntil: 'networkidle0' });
  
    //To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // loop all pages links and go and print all links from same domain
    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => a.href);
    });

    // Remove elements from page
    await page.evaluate(() => {
        document.querySelector('#tg-sb-sidebar').remove();
    });
  
    let contador = 2;

    // Download the PDF
    const pdf = await page.pdf({
      path: 'output/001_index.pdf',
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      printBackground: true,
      format: 'A4',
    });

    for (let i = 0; i < links.length; i++) {
        if (links[i].startsWith(website_url)) {
            await page.goto(links[i], { waitUntil: 'networkidle0' });
            // get the title of the page and rename to underscore
            let title = await page.title();

            if (title.startsWith('Getting started') || title.startsWith('ZX Spectrum Game Maker')) {
                continue;
            }

            // Remove " | ZX Spectrum Game Maker from title
            title = title.replace(' | ZX Spectrum Game Maker', '');

            contador_pad_3_zeros = contador.toString().padStart(3, '0');

            const title_underscore = contador_pad_3_zeros + "_" + title.replace(/ /g, '_');
            await page.emulateMediaType('screen');

            // Remove elements from page
            await page.evaluate(() => {
                document.querySelector('#tg-sb-sidebar').remove();
            });

            const pdf = await page.pdf({
                path: `output/${title_underscore}.pdf`,
                margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
                printBackground: true,
                format: 'A4',
            });

            contador++;
        }
    }
  
    // Close the browser instance
    await browser.close();

    // Join all pdfs in one
    const merge = require('easy-pdf-merge');
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(__dirname, 'output');

    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(err);
        }

        const pdfs = files.filter(file => file.endsWith('.pdf')).map(file => path.join(dir, file));

        merge(pdfs, 'output/ZX-Spectrum-Game-Maker.pdf', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log('Successfully merged!')

            // remove all pdfs that not start with ZX-Spectrum-Game-Maker

            // fs.readdir(dir, (err, files) => {
            //     if (err) {
            //         console.log(err);
            //     }

            //     const pdfs = files.filter(file => file.endsWith('.pdf')).map(file => path.join(dir, file));

            //     pdfs.forEach(file => {
            //         if (!file.startsWith('ZX-Spectrum-Game-Maker')) {
            //             fs.unlink(file, (err) => {
            //                 if (err) {
            //                     console.log(err);
            //                 }
            //             });
            //         }
            //     });
            // });
        });
    });
  })();