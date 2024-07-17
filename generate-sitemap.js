const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/why-choose-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.lucrecomlicitacoes.com' });

streamToPromise(sitemapStream.pipe(createWriteStream(path.join(__dirname, 'public', 'sitemap.xml')))).then(() =>
  console.log('Sitemap written!')
);

links.forEach(link => sitemapStream.write(link));
sitemapStream.end();